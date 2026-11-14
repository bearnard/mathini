// Robustness layer for scripts/seed-questions.ts. Pure and dependency-free (no top-level side effects), so every rule is unit-tested with
// injected fakes (scripts/seedRuntime.test.ts). Written after refill run 1 failed on 2026-11-14:
//   1. the wrangler OAuth token expired mid-run and the script KEPT GOING, logging a 403/401 for every row;
//   2. Gemini 503 "high demand" skipped whole batches with no retry;
//   3. the closing summary printed the progress-file total as if it were this run;
//   4. "Vectorize query failed - inserting anyway" bypassed the duplicate check.
//
// DECISION on 4 (a Vectorize query that fails for a non-auth reason): do NOT insert, count the row as "not checked", and retry it on a later
// run. The alternative (falling back to the questionQuality near-duplicate check against the task's D1 prompts) only catches reworded copies by
// word overlap, not paraphrases, so it would quietly weaken the pool's duplicate guarantee, and a silent downgrade is exactly what hid this
// failure. Rows are cheap to regenerate; a polluted pool and index are not. Three failed checks in a row stop the task (Vectorize is down:
// do not keep spending generation quota on rows that cannot be checked).

export class AuthError extends Error {
  constructor(public readonly status: number, public readonly detail: string) {
    super(`unauthorised (${status}): ${detail.slice(0, 200)}`);
    this.name = 'AuthError';
  }
}

/** Fatal: the credentials cannot be fixed. Nothing may be inserted after this. */
export class AuthAbort extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthAbort';
  }
}

export class HttpError extends Error {
  constructor(public readonly status: number, public readonly body: string, public readonly retryAfterMs?: number) {
    super(`HTTP ${status}: ${body.slice(0, 200)}`);
    this.name = 'HttpError';
  }
}

export const isAuthStatus = (status: number): boolean => status === 401 || status === 403;

/** The OAuth token wrangler keeps in ~/.config/.wrangler/config/default.toml. */
export function parseOauthToken(toml: string): string | null {
  const m = toml.match(/^oauth_token\s*=\s*"([^"]+)"/m);
  return m ? m[1] : null;
}

// ── auth guard ────────────────────────────────────────────────────────────────

export interface AuthGuardOptions {
  /** Reads the CURRENT token (re-reads the file each time, because a refresh rewrites it). */
  readToken(): string;
  /** Refreshes the token (for wrangler OAuth: `wrangler whoami`). Returns false if it cannot be refreshed (a static API token). */
  refresh(): Promise<boolean>;
  now?: () => number;
  /** Refresh proactively when the token is older than this, before it can expire mid-run. */
  maxAgeMs?: number;
  log?: (msg: string) => void;
}

export interface AuthGuard {
  /** Refresh before the run starts. Throws AuthAbort if it cannot (and the guard is then dead). */
  ensureFresh(): Promise<void>;
  /** Runs `fn(token)`. On 401/403 it refreshes ONCE and retries once; if that is still unauthorised it throws AuthAbort. After an AuthAbort the guard
   * refuses every further call, so nothing can be inserted. */
  call<T>(fn: (token: string) => Promise<T>): Promise<T>;
  readonly refreshes: number;
  readonly dead: boolean;
}

export function createAuthGuard(o: AuthGuardOptions): AuthGuard {
  const now = o.now ?? Date.now;
  const log = o.log ?? (() => {});
  let token = o.readToken();
  let refreshedAt = now();
  let refreshes = 0;
  let dead = false;

  const refreshNow = async (): Promise<boolean> => {
    const ok = await o.refresh();
    if (!ok) return false;
    token = o.readToken();
    refreshedAt = now();
    refreshes++;
    return true;
  };
  const kill = (why: string): never => {
    dead = true;
    throw new AuthAbort(`${why} Stopped before inserting anything further. Run \`npx wrangler login\` (or set a valid CF_API_TOKEN) and re-run; progress so far is saved.`);
  };

  return {
    get refreshes() { return refreshes; },
    get dead() { return dead; },
    async ensureFresh() {
      if (!(await refreshNow())) kill('Could not refresh the Cloudflare token.');
    },
    async call<T>(fn: (token: string) => Promise<T>): Promise<T> {
      if (dead) throw new AuthAbort('Cloudflare authorisation already failed in this run; refusing to continue.');
      if (o.maxAgeMs !== undefined && now() - refreshedAt > o.maxAgeMs) {
        log('token is getting old: refreshing before it expires');
        await refreshNow().catch(() => false); // best effort; a real 401 below is handled properly
      }
      try {
        return await fn(token);
      } catch (e) {
        if (!(e instanceof AuthError)) throw e;
        log(`Cloudflare said ${e.status}: refreshing the token and retrying once`);
        if (!(await refreshNow())) kill(`Cloudflare rejected the token (${e.status}) and it cannot be refreshed.`);
        try {
          return await fn(token);
        } catch (e2) {
          if (e2 instanceof AuthError) kill(`Cloudflare still rejects the refreshed token (${e2.status}).`);
          throw e2;
        }
      }
    },
  };
}

// ── retry with exponential backoff and jitter ─────────────────────────────────

export interface RetryOptions {
  /** Total attempts, including the first. */
  tries?: number;
  baseMs?: number;
  maxMs?: number;
  /** +/- fraction of random jitter on each wait (0.3 = between 70% and 130%). */
  jitter?: number;
  sleep?: (ms: number) => Promise<void>;
  rng?: () => number;
  isTransient?: (e: unknown) => boolean;
  onRetry?: (attempt: number, waitMs: number, e: unknown) => void;
}

const TRANSIENT_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);

/** 429/5xx responses and network failures are transient. Auth failures never are. */
export function isTransientError(e: unknown): boolean {
  if (e instanceof AuthError || e instanceof AuthAbort) return false;
  if (e instanceof HttpError) return TRANSIENT_STATUS.has(e.status);
  const err = e as { name?: string; code?: string; cause?: { code?: string } } | null;
  if (err?.name === 'TypeError') return true; // fetch failed
  return ['ECONNRESET', 'ETIMEDOUT', 'EAI_AGAIN', 'ECONNREFUSED', 'UND_ERR_SOCKET'].includes(err?.code ?? err?.cause?.code ?? '');
}

/** Wait before retry number `attempt` (1 = after the first failure): base * 2^(attempt-1), capped, +/- jitter. */
export function backoffMs(attempt: number, o: { baseMs?: number; maxMs?: number; jitter?: number; rng?: () => number } = {}): number {
  const base = o.baseMs ?? 15_000, max = o.maxMs ?? 120_000, jitter = o.jitter ?? 0.3, rng = o.rng ?? Math.random;
  const raw = Math.min(max, base * 2 ** (attempt - 1));
  return Math.round(raw * (1 + (rng() * 2 - 1) * jitter));
}

/** Runs fn up to `tries` times. A transient failure waits max(backoff, the server/limiter's own retryAfterMs); anything else throws at once. */
export async function retryTransient<T>(fn: (attempt: number) => Promise<T>, o: RetryOptions = {}): Promise<T> {
  const tries = o.tries ?? 4;
  const sleep = o.sleep ?? ((ms: number) => new Promise<void>((r) => setTimeout(r, ms)));
  const isTransient = o.isTransient ?? isTransientError;
  let last: unknown;
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      return await fn(attempt);
    } catch (e) {
      last = e;
      if (!isTransient(e) || attempt === tries) throw e;
      const floor = e instanceof HttpError ? e.retryAfterMs ?? 0 : 0;
      const wait = Math.max(backoffMs(attempt, o), floor);
      o.onRetry?.(attempt, wait, e);
      await sleep(wait);
    }
  }
  throw last;
}

// ── this run's numbers ────────────────────────────────────────────────────────

export interface TaskStats {
  generated: number;
  /** Rejected by the quality validator (never stored). */
  rejected: number;
  deduped: number;
  /** Duplicate check could not run (Vectorize unavailable): skipped, NOT inserted. */
  notChecked: number;
  inserted: number;
  errors: number;
}

const zero = (): TaskStats => ({ generated: 0, rejected: 0, deduped: 0, notChecked: 0, inserted: 0, errors: 0 });

export class RunStats {
  readonly tasks = new Map<string, TaskStats>();
  for(slug: string): TaskStats {
    let s = this.tasks.get(slug);
    if (!s) this.tasks.set(slug, (s = zero()));
    return s;
  }
  total(): TaskStats {
    const t = zero();
    for (const s of this.tasks.values()) for (const k of Object.keys(t) as (keyof TaskStats)[]) t[k] += s[k];
    return t;
  }
  /** This run only. The progress-file totals are printed separately and labelled. */
  render(progress?: { totalInserted: number; done: number; failed: number }): string {
    const pad = (v: string | number, n: number) => String(v).padStart(n);
    const lines = [`THIS RUN (per task)`, `${'task'.padEnd(34)}${pad('generated', 10)}${pad('rejected', 9)}${pad('deduped', 8)}${pad('unchecked', 10)}${pad('inserted', 9)}${pad('errors', 7)}`];
    for (const [slug, s] of this.tasks) lines.push(`${slug.padEnd(34)}${pad(s.generated, 10)}${pad(s.rejected, 9)}${pad(s.deduped, 8)}${pad(s.notChecked, 10)}${pad(s.inserted, 9)}${pad(s.errors, 7)}`);
    const t = this.total();
    lines.push(`${'TOTAL, THIS RUN ONLY'.padEnd(34)}${pad(t.generated, 10)}${pad(t.rejected, 9)}${pad(t.deduped, 8)}${pad(t.notChecked, 10)}${pad(t.inserted, 9)}${pad(t.errors, 7)}`);
    if (progress) lines.push(`Progress file, all runs so far (NOT this run): ${progress.totalInserted} questions inserted, ${progress.done} tasks done, ${progress.failed} marked for retry`);
    return lines.join('\n');
  }
}

// ── per-task item processing (dedup + insert) ─────────────────────────────────

export interface ItemRow {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  quality_score?: number;
  quality_flags?: string[];
}

export interface ProcessDeps {
  vectorQuery(embedding: number[], task: string): Promise<{ score: number }[]>;
  vectorUpsert(id: string, embedding: number[], task: string): Promise<void>;
  d1Insert(row: ItemRow & { task: string; vectorId: string; section: string }): Promise<void>;
  vectorId(task: string, prompt: string): string;
  cosine(a: number[], b: number[]): number;
  log(msg: string): void;
  dot?(c: string): void;
  sleep?: (ms: number) => Promise<void>;
}

export interface ProcessOptions {
  similarity: number;
  sectionFor(index: number): string;
  maxConsecutiveNotChecked?: number;
  maxConsecutiveErrors?: number;
  /** Retries for a transient Vectorize/D1 failure before the row is counted as unchecked / errored. */
  tries?: number;
  baseMs?: number;
  rng?: () => number;
}

export type StopReason = null | 'vectorize-unavailable' | 'too-many-errors';

/**
 * Dedups (in-batch, then Vectorize) and inserts the accepted items of ONE task. Rules:
 *  - an AuthAbort is never caught here: it ends the whole run before another row is inserted;
 *  - a Vectorize query that fails for any other reason (after retries) is NOT a licence to insert: the row is skipped and counted as unchecked;
 *  - three unchecked rows in a row, or five insert errors in a row, stop the task (an outage, not bad luck).
 */
export async function processTaskItems(
  task: string,
  items: readonly ItemRow[],
  embeddings: readonly number[][],
  deps: ProcessDeps,
  stats: TaskStats,
  o: ProcessOptions,
): Promise<StopReason> {
  const maxUnchecked = o.maxConsecutiveNotChecked ?? 3;
  const maxErrors = o.maxConsecutiveErrors ?? 5;
  const retryOpts: RetryOptions = { tries: o.tries ?? 3, baseMs: o.baseMs ?? 2_000, maxMs: 15_000, sleep: deps.sleep, rng: o.rng };
  const kept: number[][] = [];
  let unchecked = 0;
  let errors = 0;

  for (let j = 0; j < items.length; j++) {
    const item = items[j];
    const emb = embeddings[j];

    if (kept.some((e) => deps.cosine(emb, e) >= o.similarity)) {
      stats.deduped++;
      deps.dot?.('.');
      continue;
    }

    let matches: { score: number }[];
    try {
      matches = await retryTransient(() => deps.vectorQuery(emb, task), retryOpts);
      unchecked = 0;
    } catch (e) {
      if (e instanceof AuthAbort) throw e;
      stats.notChecked++;
      unchecked++;
      deps.log(`    ⚠️  duplicate check unavailable (${e instanceof Error ? e.message : e}): row skipped, NOT inserted`);
      if (unchecked >= maxUnchecked) {
        stats.notChecked += items.length - j - 1;
        deps.log(`    ⛔ ${unchecked} duplicate checks failed in a row: stopping this task (Vectorize looks down); it will be retried`);
        return 'vectorize-unavailable';
      }
      continue;
    }
    if (matches.some((m) => m.score >= o.similarity)) {
      stats.deduped++;
      deps.dot?.('.');
      continue;
    }

    const vid = deps.vectorId(task, item.prompt);
    try {
      // D1 first: INSERT OR IGNORE is idempotent on retry. A later vector failure leaves a row without its vector (counted as an error below).
      await retryTransient(() => deps.d1Insert({ ...item, task, vectorId: vid, section: o.sectionFor(j) }), retryOpts);
    } catch (e) {
      if (e instanceof AuthAbort) throw e;
      stats.errors++;
      errors++;
      deps.log(`\n    ⚠️  insert failed: ${e instanceof Error ? e.message : e}`);
      if (errors >= maxErrors) {
        deps.log(`    ⛔ ${errors} insert errors in a row: stopping this task; it will be retried`);
        return 'too-many-errors';
      }
      continue;
    }
    stats.inserted++;
    errors = 0;
    kept.push(emb);
    deps.dot?.('+');
    try {
      await retryTransient(() => deps.vectorUpsert(vid, emb, task), retryOpts);
    } catch (e) {
      if (e instanceof AuthAbort) throw e;
      stats.errors++;
      deps.log(`\n    ⚠️  row inserted but its vector was not stored (${e instanceof Error ? e.message : e}); a later run's duplicate check will not see it`);
    }
  }
  return null;
}

/** What to record for a task after processing (same rules as before, with "unchecked" counted as a problem). */
export function taskOutcome(s: TaskStats, stopped: StopReason): 'done' | 'failed' {
  if (stopped) return 'failed';
  const problems = s.errors + s.notChecked;
  const handled = s.inserted + s.deduped;
  if (handled > 0 && problems === 0) return 'done';
  if (problems > 0 && s.inserted === 0) return 'failed';
  if (s.inserted > 0) return 'done'; // partial success: the problems were non-fatal
  return 'failed';
}
