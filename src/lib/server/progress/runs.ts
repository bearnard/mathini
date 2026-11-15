// ADR 0005 part 1: learner runs (a practice session, quiz, term mock test, exam practice or spaced-review session).
// Pure server logic over the tiny AdminDb interface, so the SAME SQL runs on D1 in production and on node:sqlite in tests.
//
// Rules that matter:
//   - The server computes the counts from `attempts` (rows carrying run_id) and NEVER stores client totals.
//   - The client makes the run id (a uuid), so answers can carry it at once. The server checks the format and that the run is the learner's.
//   - A run still open 2 hours after it started is ABANDONED: it keeps the answers so far, is flagged, and has no score (excluded from trends).
//   - Starting twice with the same id is harmless (idempotent). Finishing twice returns the first result.
import type { AdminDb } from '../admin/db';

export const RUN_KINDS = ['practice', 'review', 'quiz', 'mock_test', 'exam_practice'] as const;
export type RunKind = (typeof RUN_KINDS)[number];
export type RunStatus = 'open' | 'finished' | 'abandoned';

export const ABANDON_AFTER_MS = 2 * 60 * 60 * 1000;
/** A run can hold at most this many questions (the longest exam practice has 25; this is generous, and caps what a client can declare). */
export const MAX_RUN_ITEMS = 200;
/** A learner can have at most this many runs open at once (a stuck tab or a script cannot flood the table). */
export const MAX_OPEN_RUNS = 20;
const MAX_BACKDATE_MS = ABANDON_AFTER_MS;

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const isRunId = (v: unknown): v is string => typeof v === 'string' && UUID.test(v);

export interface StartRunInput {
  id: unknown;
  kind: unknown;
  grade: unknown;
  subject: unknown;
  scopeKey: unknown;
  scopeLabel?: unknown;
  nItems?: unknown;
  /** When the first answer was given, if the client knows (practice screens send all answers at the end). Clamped to the last 2 hours. */
  startedAt?: unknown;
  clientVersion?: unknown;
}

export interface RunRow {
  id: string;
  studentId: string;
  kind: RunKind;
  grade: number;
  subject: string;
  scopeKey: string;
  scopeLabel: string;
  status: RunStatus;
  startedAt: number;
  finishedAt: number | null;
  nItems: number;
  nAnswered: number;
  nCorrect: number;
  scorePct: number | null;
  durationMs: number | null;
}

interface DbRun {
  id: string; student_id: string; kind: string; grade: number; subject: string; scope_key: string; scope_label: string; status: string;
  started_at: number; finished_at: number | null; n_items: number; n_answered: number; n_correct: number; score_pct: number | null; duration_ms: number | null;
}

const toRow = (r: DbRun): RunRow => ({
  id: r.id, studentId: r.student_id, kind: r.kind as RunKind, grade: r.grade, subject: r.subject, scopeKey: r.scope_key, scopeLabel: r.scope_label,
  status: r.status as RunStatus, startedAt: Number(r.started_at), finishedAt: r.finished_at == null ? null : Number(r.finished_at),
  nItems: Number(r.n_items), nAnswered: Number(r.n_answered), nCorrect: Number(r.n_correct), scorePct: r.score_pct == null ? null : Number(r.score_pct),
  durationMs: r.duration_ms == null ? null : Number(r.duration_ms),
});

const COLS = 'id, student_id, kind, grade, subject, scope_key, scope_label, status, started_at, finished_at, n_items, n_answered, n_correct, score_pct, duration_ms';
const clip = (v: unknown, n: number): string => (typeof v === 'string' ? v.trim().slice(0, n) : '');
const SLUG = /^[A-Za-z0-9][A-Za-z0-9_\-:.]*$/;

export type StartResult = { ok: true; run: RunRow; created: boolean } | { ok: false; status: number; error: string };

/** `grade` is the grade of the CONTENT (a Grade 6 topic practised by a Grade 7 learner is a Grade 6 run), like attempts.grade. It is not a security field. */
export async function startRun(db: AdminDb, studentId: string, input: StartRunInput, now: number): Promise<StartResult> {
  if (!isRunId(input.id)) return { ok: false, status: 400, error: 'Invalid run id' };
  if (!RUN_KINDS.includes(input.kind as RunKind)) return { ok: false, status: 400, error: 'Invalid run kind' };
  const subject = clip(input.subject, 40);
  const scopeKey = clip(input.scopeKey, 120);
  if (!SLUG.test(subject) || !SLUG.test(scopeKey)) return { ok: false, status: 400, error: 'Invalid subject or scope' };
  const grade = Number(input.grade);
  if (!Number.isInteger(grade) || grade < 1 || grade > 12) return { ok: false, status: 400, error: 'Invalid grade' };

  const existing = await db.all<DbRun>(`SELECT ${COLS} FROM runs WHERE id = ?`, [input.id]);
  if (existing[0]) {
    if (existing[0].student_id !== studentId) return { ok: false, status: 409, error: 'Run id already used' };
    return { ok: true, run: toRow(existing[0]), created: false };
  }

  const open = await db.all<{ n: number }>("SELECT COUNT(*) AS n FROM runs WHERE student_id = ? AND status = 'open' AND started_at > ?", [studentId, now - ABANDON_AFTER_MS]);
  if (Number(open[0]?.n ?? 0) >= MAX_OPEN_RUNS) return { ok: false, status: 429, error: 'Too many runs are open' };

  const nItemsRaw = Number(input.nItems);
  const nItems = Number.isInteger(nItemsRaw) && nItemsRaw > 0 ? Math.min(nItemsRaw, MAX_RUN_ITEMS) : 0;
  let startedAt = now;
  const claimed = Number(input.startedAt);
  if (Number.isFinite(claimed) && claimed <= now && claimed >= now - MAX_BACKDATE_MS) startedAt = Math.floor(claimed);
  const label = clip(input.scopeLabel, 120);
  const version = clip(input.clientVersion, 40) || null;

  await db.batch([{
    sql: `INSERT OR IGNORE INTO runs (id, student_id, kind, grade, subject, scope_key, scope_label, status, started_at, n_items, client_version)
          VALUES (?, ?, ?, ?, ?, ?, ?, 'open', ?, ?, ?)`,
    params: [input.id as string, studentId, input.kind as string, grade, subject, scopeKey, label, startedAt, nItems, version],
  }]);
  const row = (await db.all<DbRun>(`SELECT ${COLS} FROM runs WHERE id = ?`, [input.id]))[0];
  if (!row || row.student_id !== studentId) return { ok: false, status: 409, error: 'Run id already used' };
  return { ok: true, run: toRow(row), created: true };
}

/** The score of a run: correct answers over the questions it holds (a skipped question counts as wrong). 0..100. */
export const scorePct = (nCorrect: number, nAnswered: number, nItems: number): number => {
  const denom = Math.max(nItems, nAnswered);
  return denom <= 0 ? 0 : Math.round((100 * nCorrect) / denom);
};

export type FinishResult = { ok: true; run: RunRow; alreadyFinished: boolean; tasks: string[] } | { ok: false; status: number; error: string };

/**
 * Finishes a run: counts its attempts, sets the score and the duration, in one UPDATE guarded on status = 'open' (so a second finish cannot
 * change a result). Also returns the tasks the run touched, so the caller can refresh topic_progress for them.
 * An abandoned run cannot be finished: it was already closed without a score.
 */
export async function finishRun(db: AdminDb, studentId: string, runId: unknown, now: number): Promise<FinishResult> {
  if (!isRunId(runId)) return { ok: false, status: 400, error: 'Invalid run id' };
  const found = (await db.all<DbRun>(`SELECT ${COLS} FROM runs WHERE id = ? AND student_id = ?`, [runId, studentId]))[0];
  if (!found) return { ok: false, status: 404, error: 'Run not found' };
  const tasks = (await db.all<{ task: string }>('SELECT DISTINCT task FROM attempts WHERE run_id = ? AND student_id = ?', [runId, studentId])).map((r) => r.task);
  if (found.status === 'finished') return { ok: true, run: toRow(found), alreadyFinished: true, tasks };
  if (found.status === 'abandoned') return { ok: false, status: 409, error: 'This run was abandoned' };
  if (now - Number(found.started_at) > ABANDON_AFTER_MS) {
    await abandonRuns(db, now, 1, runId);
    return { ok: false, status: 409, error: 'This run took longer than 2 hours and was abandoned' };
  }

  const c = (await db.all<{ n: number; c: number }>('SELECT COUNT(*) AS n, COALESCE(SUM(is_correct), 0) AS c FROM attempts WHERE run_id = ? AND student_id = ?', [runId, studentId]))[0];
  const nAnswered = Number(c?.n ?? 0);
  const nCorrect = Number(c?.c ?? 0);
  const score = scorePct(nCorrect, nAnswered, Number(found.n_items));
  const duration = Math.max(0, now - Number(found.started_at));
  await db.batch([{
    sql: "UPDATE runs SET status = 'finished', finished_at = ?, n_answered = ?, n_correct = ?, score_pct = ?, duration_ms = ? WHERE id = ? AND student_id = ? AND status = 'open'",
    params: [now, nAnswered, nCorrect, score, duration, runId, studentId],
  }]);
  const row = (await db.all<DbRun>(`SELECT ${COLS} FROM runs WHERE id = ?`, [runId]))[0];
  return { ok: true, run: toRow(row), alreadyFinished: false, tasks };
}

/**
 * Closes runs that were never finished. A run still open more than 2 hours after it started becomes `abandoned`: its answered and correct counts are
 * set from its attempts, it has no score and no finish time. At most `limit` runs per call (the nightly job is bounded). `onlyId` limits it to one run.
 * One statement, so it costs one D1 call.
 */
export async function abandonRuns(db: AdminDb, now: number, limit = 200, onlyId?: string): Promise<void> {
  const cutoff = now - ABANDON_AFTER_MS;
  await db.batch([{
    sql: `UPDATE runs SET status = 'abandoned',
            n_answered = (SELECT COUNT(*) FROM attempts a WHERE a.run_id = runs.id),
            n_correct = (SELECT COALESCE(SUM(a.is_correct), 0) FROM attempts a WHERE a.run_id = runs.id)
          WHERE status = 'open' AND started_at < ? AND id IN (SELECT id FROM runs WHERE status = 'open' AND started_at < ? ${onlyId ? 'AND id = ?' : ''} LIMIT ?)`,
    params: onlyId ? [cutoff, cutoff, onlyId, limit] : [cutoff, cutoff, limit],
  }]);
}

/**
 * For /api/attempts: the run id to store with an answer, or null. Only a run that belongs to this learner and is still open counts; anything else
 * (unknown id, someone else's run, finished, a missing runs table) stores the answer without a run. Never throws: an answer is never lost.
 */
export async function runIdForAttempt(db: AdminDb, studentId: string, runId: unknown, now: number): Promise<string | null> {
  if (!isRunId(runId)) return null;
  try {
    const r = await db.all<{ id: string }>("SELECT id FROM runs WHERE id = ? AND student_id = ? AND status = 'open' AND started_at > ?", [runId, studentId, now - ABANDON_AFTER_MS]);
    return r[0] ? runId : null;
  } catch {
    return null;
  }
}
