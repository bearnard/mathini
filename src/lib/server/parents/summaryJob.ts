// The weekly parent summary job (ADR 0005 section 4). The single daily cron (03:00 UTC) runs it on Sunday, Monday and Tuesday in South African time (isSummaryDay); the free plan allows only 5 cron triggers per account.
// time) so it has a whole invocation's subrequests to itself; the daily job's top-up already uses most of its own. Only on those days does it do anything.
//
// Safe to run again: each parent is CLAIMED in `summary_sent` for the week (the Sunday's date) before anything is sent, so no run, retry or overlap can send a
// parent a second copy. A failed send is retried on the next run, up to 3 times that week. At most 12 parents per run, and a hard budget on D1 and mail
// calls (a Worker on the free plan gets 50 subrequests): the job stops cleanly when the budget is used and the next day's run carries on.
// No mail key (or no session secret to sign unsubscribe links): it does nothing at all and claims nobody.
import { d1Adapter, type AdminDb, type Param, type Statement } from '../admin/db';
import { SITE_URL } from '../../seo/site';
import { canSend, isDevelopment, mailerFromEnv, type MailEnv, type Mailer } from '../adultAuth/mailer';
import { buildProgress } from '../progress/progressApi';
import { buildSummary, childWeekFrom, isSendDay, makeUnsubscribeToken, weekKey, WEEK_MS, type ChildWeek } from './summaryEmail';

/** Must equal the cron in wrangler.jsonc (a test compares them). */
/** Weekly summary days, in South African time (UTC+2): Sunday, Monday, Tuesday. The daily 03:00 UTC cron runs the summary on these days. */
export const SUMMARY_WEEKDAYS_SAST = [0, 1, 2] as const;
export const isSummaryDay = (epochMs: number): boolean =>
  (SUMMARY_WEEKDAYS_SAST as readonly number[]).includes(new Date(epochMs + 2 * 3600_000).getUTCDay());
export const MAX_PARENTS_PER_RUN = 12;
export const MAX_ATTEMPTS = 3;
export const DEFAULT_MAX_OPS = 44; // of the 50 subrequests a free-plan invocation allows, leaving a few for housekeeping
const MAX_CHILDREN_PER_EMAIL = 6;

export class BudgetExceeded extends Error {
  constructor() {
    super('subrequest budget used');
    this.name = 'BudgetExceeded';
  }
}

/** Counts every D1 call (and, through use(), every mail call) and refuses past the limit. `raw` is the uncounted database, for the few calls that must still happen. */
export function budgetOf(db: AdminDb, maxOps: number) {
  let used = 0;
  let blown = false;
  const take = () => {
    if (used >= maxOps) {
      blown = true;
      throw new BudgetExceeded();
    }
    used += 1;
  };
  const counted: AdminDb = {
    async all<T>(sql: string, params?: Param[]) {
      take();
      return db.all<T>(sql, params);
    },
    async batch(statements: Statement[]) {
      take();
      return db.batch(statements);
    },
  };
  return {
    db: counted,
    raw: db,
    use: take,
    used: () => used,
    left: () => maxOps - used,
    /** Throws if the budget was ever refused. buildProgress swallows read errors on purpose (it falls back to empty), so the job checks this after it: a half-empty progress must never be mailed. */
    assertWhole: () => { if (blown) throw new BudgetExceeded(); },
  };
}

export interface SummaryDeps {
  db: AdminDb;
  mailer: Mailer;
  now: number;
  siteUrl?: string;
  /** Signs the unsubscribe links (the same secret as the learner sessions, with its own purpose label). */
  secret?: string;
  maxOps?: number;
  maxParents?: number;
  log?: (line: string) => void;
}

export interface SummaryResult {
  sent: number;
  skipped: number;
  failed: number;
  /** Why nothing was sent at all, or what stopped the run early. */
  reason: 'no-mail' | 'no-secret' | 'not-send-day' | 'budget' | 'cap' | null;
  ops: number;
}

interface Candidate { user_id: string; email: string }
interface Kid { student_id: string }

const CANDIDATES = `
  SELECT u.id AS user_id, u.email AS email FROM users u
   WHERE EXISTS (SELECT 1 FROM user_roles r WHERE r.user_id = u.id AND r.role = 'parent')
     AND EXISTS (SELECT 1 FROM parent_links l JOIN students s ON s.id = l.student_id
                  WHERE l.user_id = u.id AND l.unlinked_at IS NULL AND s.parent_consent_at IS NOT NULL)
     AND NOT EXISTS (SELECT 1 FROM summary_prefs p WHERE p.user_id = u.id AND p.unsubscribed_at IS NOT NULL)
     AND NOT EXISTS (SELECT 1 FROM summary_sent x WHERE x.user_id = u.id AND x.week = ? AND (x.status IN ('sent', 'skipped', 'pending') OR x.attempts >= ?))
   ORDER BY u.id LIMIT ?`;

/** The children this email may talk about: linked to this parent, and with consent on file. */
const KIDS = `
  SELECT l.student_id AS student_id FROM parent_links l JOIN students s ON s.id = l.student_id
   WHERE l.user_id = ? AND l.unlinked_at IS NULL AND s.parent_consent_at IS NOT NULL
   ORDER BY l.linked_at, s.id LIMIT ?`;

export async function runWeeklySummary(deps: SummaryDeps): Promise<SummaryResult> {
  const { now } = deps;
  const log = deps.log ?? ((l: string) => console.log(l));
  const result: SummaryResult = { sent: 0, skipped: 0, failed: 0, reason: null, ops: 0 };
  if (!isSendDay(now)) return { ...result, reason: 'not-send-day' };
  if (!canSend(deps.mailer)) return { ...result, reason: 'no-mail' };
  if (!deps.secret) return { ...result, reason: 'no-secret' };
  const site = (deps.siteUrl ?? SITE_URL).replace(/\/+$/, '');
  const week = weekKey(now);
  const b = budgetOf(deps.db, deps.maxOps ?? DEFAULT_MAX_OPS);
  const cap = deps.maxParents ?? MAX_PARENTS_PER_RUN;

  try {
    const parents = await b.db.all<Candidate>(CANDIDATES, [week, MAX_ATTEMPTS, cap]);
    for (const parent of parents) {
      if (b.left() < 8) { result.reason = 'budget'; break; }
      // Claim first. A row comes back only for a brand-new claim or a failed one under the attempt limit.
      const claim = await b.db.all<{ attempts: number }>(
        `INSERT INTO summary_sent (user_id, week, status, attempts, claimed_at) VALUES (?, ?, 'pending', 1, ?)
           ON CONFLICT(user_id, week) DO UPDATE SET status = 'pending', attempts = summary_sent.attempts + 1, claimed_at = excluded.claimed_at
           WHERE summary_sent.status = 'failed' AND summary_sent.attempts < ?
         RETURNING attempts`,
        [parent.user_id, week, now, MAX_ATTEMPTS],
      );
      if (claim.length === 0) continue;
      try {
        const kids = await b.db.all<Kid>(KIDS, [parent.user_id, MAX_CHILDREN_PER_EMAIL]);
        const weeks: ChildWeek[] = [];
        for (const k of kids) {
          const progress = await buildProgress(b.db, k.student_id, now);
          b.assertWhole();
          if (!progress) continue;
          const stats = (await b.db.all<{ answers: number; days: number }>(
            'SELECT COUNT(*) AS answers, COUNT(DISTINCT CAST((created_at + 7200000) / 86400000 AS INTEGER)) AS days FROM attempts WHERE student_id = ? AND created_at >= ?',
            [k.student_id, now - WEEK_MS],
          ))[0];
          weeks.push(childWeekFrom(progress, { days: Number(stats?.days ?? 0), answers: Number(stats?.answers ?? 0) }, now));
        }
        if (weeks.length === 0 || weeks.every((w) => w.quiet)) {
          await b.db.batch([{ sql: "UPDATE summary_sent SET status = 'skipped', children = ? WHERE user_id = ? AND week = ?", params: [weeks.length, parent.user_id, week] }]);
          result.skipped += 1;
          continue;
        }
        const token = await makeUnsubscribeToken(parent.user_id, deps.secret, now);
        const mail = buildSummary(weeks, { siteUrl: site, unsubscribeUrl: `${site}/unsubscribe#${token}` });
        b.use(); // the mail call is a subrequest too
        try {
          await deps.mailer.send({
            to: parent.email, subject: mail.subject, text: mail.text, html: mail.html,
            headers: { 'List-Unsubscribe': `<${site}/api/unsubscribe?token=${token}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
          });
        } catch (err) {
          if (err instanceof BudgetExceeded) throw err;
          await b.db.batch([{ sql: "UPDATE summary_sent SET status = 'failed' WHERE user_id = ? AND week = ?", params: [parent.user_id, week] }]);
          result.failed += 1;
          log(`weekly summary: a send failed: ${err instanceof Error ? err.message : 'unknown'}`); // the message only: never the address, a name or the link
          continue;
        }
        await b.db.batch([{ sql: "UPDATE summary_sent SET status = 'sent', sent_at = ?, children = ? WHERE user_id = ? AND week = ?", params: [now, weeks.length, parent.user_id, week] }]);
        result.sent += 1;
      } catch (err) {
        if (!(err instanceof BudgetExceeded)) throw err;
        // The budget ran out part-way through this parent: give the claim back (uncounted: this is what keeps them from being lost), then stop.
        await b.raw.batch([{ sql: "UPDATE summary_sent SET status = 'failed', attempts = MAX(attempts - 1, 0) WHERE user_id = ? AND week = ? AND status = 'pending'", params: [parent.user_id, week] }]);
        result.reason = 'budget';
        break;
      }
    }
    if (result.reason === null && parents.length >= cap) result.reason = 'cap';
  } catch (err) {
    if (err instanceof BudgetExceeded) result.reason = 'budget';
    else {
      log(`weekly summary: run failed: ${err instanceof Error ? err.message : 'unknown'}`);
      throw err;
    }
  }
  result.ops = b.used();
  log(`weekly summary ${week}: sent ${result.sent}, skipped ${result.skipped}, failed ${result.failed}${result.reason ? ` (${result.reason})` : ''}, ops ${result.ops}`);
  return result;
}

export interface SummaryEnv extends MailEnv {
  DB: unknown;
  SESSION_SECRET?: string;
  /** Optional: a higher budget on a paid plan (default 44). */
  SUMMARY_MAX_OPS?: string;
}

/** The scheduled entry point: the real database, mailer and secret. */
export async function runWeeklySummaryFromEnv(env: SummaryEnv, now = Date.now()): Promise<SummaryResult> {
  const n = Number(env.SUMMARY_MAX_OPS);
  return runWeeklySummary({
    db: d1Adapter(env.DB as never),
    mailer: mailerFromEnv(env, isDevelopment()),
    now,
    secret: env.SESSION_SECRET,
    maxOps: Number.isInteger(n) && n > 0 ? n : undefined,
  });
}
