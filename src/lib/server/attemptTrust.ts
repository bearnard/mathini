// Which answers may count (security: the server never trusts the browser's marking). Written against AdminDb so the same SQL is unit-tested.
//
// An answer counts only when ALL of these hold: the server holds the question and marked the answer itself (marking.ts: `credited`), and, when the answer
// carries a run, that run is the learner's own open run and the answer belongs in it:
//   - a mock test or exam practice accepts only topics of that exam (EXAM_SCOPES), a spaced review accepts only cards the learner really has;
//   - a question counts once per run (a second answer to it, or any answer past the run's size, is ignored);
// so a run's score can only be made of distinct, server-marked questions of its own scope.
// Whatever does not count is not stored and earns nothing: no XP, no mastery, no run score, no review, no leaderboard.
import type { AdminDb } from './admin/db';
import { markAttempt, type MarkResult } from './marking';
import { EXAM_SCOPES } from '../shared/examScopes';
import { ABANDON_AFTER_MS, REVIEW_SCOPE_KEY, isRunId, type RunKind } from './progress/runs';

export interface RunContext { id: string; kind: RunKind; scopeKey: string; nItems: number }

/** The learner's own OPEN run (started within the last 2 hours), or null for anything else: an unknown id, someone else's run, a finished one. */
export async function runContext(db: AdminDb, studentId: string, runId: unknown, now: number): Promise<RunContext | null> {
  if (!isRunId(runId)) return null;
  try {
    const r = (await db.all<{ id: string; kind: string; scope_key: string; n_items: number }>(
      "SELECT id, kind, scope_key, n_items FROM runs WHERE id = ? AND student_id = ? AND status = 'open' AND started_at > ?",
      [runId, studentId, now - ABANDON_AFTER_MS],
    ))[0];
    return r ? { id: r.id, kind: r.kind as RunKind, scopeKey: r.scope_key, nItems: Number(r.n_items) } : null;
  } catch {
    return null;
  }
}

/** Mock tests and exam practice must not feed the spaced-review schedule (they never did: they sent no question key). */
export const feedsReview = (run: RunContext | null): boolean => !run || run.kind === 'practice' || run.kind === 'review';

/** Does this answer belong in this run? */
export async function runAccepts(db: AdminDb, studentId: string, run: RunContext, a: { task: string; qkey: string | null }): Promise<boolean> {
  try {
    if (run.kind === 'mock_test' || run.kind === 'exam_practice') {
      const scope = EXAM_SCOPES.find((s) => s.scopeKey === run.scopeKey || s.mockScopeKeys.includes(run.scopeKey));
      if (!scope || !scope.tasks.includes(a.task)) return false;
    }
    if (a.qkey === null) return false;
    if (run.kind === 'review') {
      if (run.scopeKey !== REVIEW_SCOPE_KEY) return false;
      const card = await db.all('SELECT 1 AS x FROM review_items WHERE student_id = ? AND qkey = ? AND retired_at IS NULL', [studentId, a.qkey]);
      if (card.length === 0) return false;
    }
    const seen = await db.all<{ n: number; same: number }>(
      'SELECT COUNT(*) AS n, COALESCE(SUM(qkey = ?), 0) AS same FROM attempts WHERE run_id = ? AND student_id = ?',
      [a.qkey, run.id, studentId],
    );
    const n = Number(seen[0]?.n ?? 0);
    const same = Number(seen[0]?.same ?? 0);
    const cap = run.nItems > 0 ? run.nItems : 300;
    return same === 0 && n < cap;
  } catch {
    return false; // when in doubt nothing counts
  }
}

export interface CreditInput { versionId: number | null; chosen: string | null; clientCorrect: boolean; runId: unknown; task: string; qkey: string | null }
export type Credit = { credited: false; marking: MarkResult; run: RunContext | null; why: string } | { credited: true; marking: MarkResult; run: RunContext | null };

/** The one decision /api/attempts makes: does this answer count? Marks it, then checks it belongs in its run. */
export async function creditDecision(db: AdminDb, studentId: string, a: CreditInput, now: number): Promise<Credit> {
  const marking = await markAttempt(db, { versionId: a.versionId, chosen: a.chosen, clientCorrect: a.clientCorrect });
  if (!marking.credited) return { credited: false, marking, run: null, why: marking.reason };
  const run = await runContext(db, studentId, a.runId, now);
  if (run && !(await runAccepts(db, studentId, run, { task: a.task, qkey: a.qkey }))) return { credited: false, marking, run, why: 'not_in_run' };
  return { credited: true, marking, run };
}
