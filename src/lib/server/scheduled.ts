// The daily scheduled job (wrangler "triggers.crons", 03:00 UTC). OpenNext's generated worker exports no `scheduled` handler, so
// src/worker.ts wraps it and calls this. It never throws (a failing run must not wedge the schedule) and logs ONE summary line.
//   1. events retention (ADR 0002): bounded batches of deletes
//   2. question pool top-up with the quality validator (ADR 0003 section 1a), under a per-run budget (Worker CPU and API cost).
//      Daily is safe: the top-up only works on pools BELOW target and stops at its caps (maxTasks 8, maxAccepted 60, maxApiCalls 200,
//      maxOps 45), so a full pool costs one query and the worst case is bounded per run.
//   2b. teacher-review personal data (ADR 0004): names, contact notes and free-text reasons of reviewers 90 days after their pack closed (bounded,
//       no API; last in the job, one read plus one batch only when there is something to scrub)
//   2c. adult sign-in housekeeping (ADR 0003): old links, long-expired sessions and rate counters, one batch
//   3. item analysis (ADR 0003 section 5): 3 D1 round trips, no external API. Together with the top-up's maxOps 45 that is
//      48 of the 50 subrequests a free-plan invocation allows.
// With no GEMINI_API_KEY the top-up is a no-op; retention still runs.
import { DEFAULT_LIMITS, makeGeminiEmbed, runTopUp, type TopUpLimits, type TopUpSummary } from './topUp';
import { purgeOldEventsBounded } from './events/retention';
import { generateItems, type GeneratedItem } from './gemini';
import { d1Adapter } from './admin/db';
import { refreshItemFlags } from './questions/itemAnalysis';
import { trDbOfD1 } from './teacherReview/db';
import { scrubReviewerPersonalData } from './teacherReview/retention';
import { purgeAuthData } from './adultAuth/purge';

export interface ScheduledEnv {
  DB: D1Database;
  GEMINI_API_KEY?: string;
  /** Optional Worker variables to fit the plan's per-invocation limits (see DEFAULT_LIMITS). */
  TOPUP_MAX_OPS?: string;
  TOPUP_MAX_ACCEPTED?: string;
  TOPUP_MAX_API_CALLS?: string;
  QUESTIONS_IDX?: Parameters<typeof runTopUp>[0]['vector'];
}

export interface ScheduledDeps {
  generate?: (prompt: string) => Promise<GeneratedItem[]>;
  embed?: (text: string) => Promise<number[]>;
  limits?: Partial<TopUpLimits>;
  log?: (line: string) => void;
  now?: () => number;
}

export interface ScheduledResult {
  topUp: TopUpSummary | null;
  topUpSkipped: 'no-api-key' | 'error' | null;
  eventsPurged: number | null;
  /** Open item-analysis flags written this run, or null if the step failed. */
  flags: number | null;
  /** Reviewers whose personal fields were scrubbed this run, and how many free-text reasons that scrub changed; null if the step failed. */
  reviewersScrubbed: number | null;
  reasonsScrubbed: number | null;
}

const intVar = (v: string | undefined): number | undefined => {
  const n = Number(v);
  return v && Number.isInteger(n) && n > 0 ? n : undefined;
};

/** Limits from the defaults, then the optional Worker variables, then any explicit overrides (tests). */
export function limitsFromEnv(env: ScheduledEnv, overrides: Partial<TopUpLimits> = {}): TopUpLimits {
  return {
    ...DEFAULT_LIMITS,
    ...(intVar(env.TOPUP_MAX_OPS) ? { maxOps: intVar(env.TOPUP_MAX_OPS)! } : {}),
    ...(intVar(env.TOPUP_MAX_ACCEPTED) ? { maxAccepted: intVar(env.TOPUP_MAX_ACCEPTED)! } : {}),
    ...(intVar(env.TOPUP_MAX_API_CALLS) ? { maxApiCalls: intVar(env.TOPUP_MAX_API_CALLS)! } : {}),
    ...overrides,
  };
}

export async function runScheduled(env: ScheduledEnv, deps: ScheduledDeps = {}): Promise<ScheduledResult> {
  const log = deps.log ?? ((line: string) => console.log(line));
  const result: ScheduledResult = { topUp: null, topUpSkipped: null, eventsPurged: null, flags: null, reviewersScrubbed: null, reasonsScrubbed: null };

  try {
    result.eventsPurged = await purgeOldEventsBounded(env.DB as never, deps.now?.() ?? Date.now());
  } catch {
    result.eventsPurged = null;
  }

  const apiKey = env.GEMINI_API_KEY;
  const generate = deps.generate ?? (apiKey ? (prompt: string) => generateItems(prompt, apiKey) : null);
  if (!generate) {
    result.topUpSkipped = 'no-api-key';
  } else {
    try {
      result.topUp = await runTopUp(
        {
          db: env.DB,
          generate,
          embed: deps.embed ?? (apiKey ? makeGeminiEmbed(apiKey) : undefined),
          vector: env.QUESTIONS_IDX ?? null,
          now: deps.now,
          log: () => {},
        },
        limitsFromEnv(env, deps.limits),
      );
    } catch {
      result.topUpSkipped = 'error';
    }
  }

  try {
    result.flags = (await refreshItemFlags(d1Adapter(env.DB as never), deps.now?.() ?? Date.now())).flags;
  } catch {
    result.flags = null;
  }

  try {
    const scrubbed = await scrubReviewerPersonalData(trDbOfD1(env.DB as never), deps.now?.() ?? Date.now());
    result.reviewersScrubbed = scrubbed.reviewers;
    result.reasonsScrubbed = scrubbed.reasons;
  } catch {
    result.reviewersScrubbed = null; // the table may not exist yet (migration 0012 not applied)
    result.reasonsScrubbed = null; // this step runs last, so a subrequest-limit failure here never costs the top-up; it retries tomorrow
  }

  try {
    await purgeAuthData(d1Adapter(env.DB as never), deps.now?.() ?? Date.now()); // one batch; the tables may not exist yet (migration 0013)
  } catch {
    /* housekeeping only: tomorrow's run tries again */
  }

  const t = result.topUp;
  log(
    `scheduled: ${t ? `top-up stored ${t.accepted}, rejected ${t.rejected}, pools below target ${t.poolsBelowTarget}, api calls ${t.apiCalls}, ops ${t.ops}${t.stoppedBy ? ` (stopped by ${t.stoppedBy})` : ''}` : `top-up skipped (${result.topUpSkipped})`}; events purged ${result.eventsPurged ?? 'n/a'}; item flags ${result.flags ?? 'n/a'}; reviewers scrubbed ${result.reviewersScrubbed ?? 'n/a'} (reasons ${result.reasonsScrubbed ?? 'n/a'})`,
  );
  return result;
}
