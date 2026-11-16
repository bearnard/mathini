// ADR 0005 part 2: the topic_progress cache (one row per learner and task), refreshed when a run finishes and nightly.
// SQL here, arithmetic in src/lib/shared/progressMeasures.ts. Everything goes through the tiny AdminDb interface, so the SAME SQL runs on D1 and in
// the node:sqlite tests.
//
// Cost (D1 free plan): ONE read (the latest 20 and the first 10 attempts and the totals of every due learner-and-task, with window functions) and ONE
// batch of upserts. The nightly job touches only (learner, task) pairs with attempts newer than their cached row, at most NIGHTLY_PAIR_LIMIT of them
// (the rest wait for the next night), plus one statement that abandons stale runs. The refresh on a finished run touches only that run's tasks.
import type { AdminDb, Param, Statement } from '../admin/db';
import { BASELINE, WINDOW, topicMeasure, type AttemptPoint, type TopicMeasure } from '../../shared/progressMeasures';
import { abandonStatement } from './runs';

/** Pairs refreshed per night. Each costs up to 30 + 2 rows read and one row written. */
export const NIGHTLY_PAIR_LIMIT = 150;
/** Only attempts from the last this many days make a pair "due" at night: older activity was refreshed when it happened. */
export const NIGHTLY_LOOKBACK_DAYS = 3;
const DAY_MS = 86_400_000;

export interface TopicProgressRow {
  studentId: string;
  task: string;
  grade: number;
  subject: string;
  topic: string;
  measure: TopicMeasure;
}

interface RawRow { k: string; student_id: string; task: string; grade: number; subject: string; topic: string; v: number; at: number; n: number }

/**
 * The read. `due` is either the pairs with new activity (nightly) or one learner's given tasks (a finished run). Four kinds of row, tagged in `k`:
 *   w = the latest 20 attempts of the pair   f = the first 10   t = totals (v = correct, n = attempts, at = first attempt)   l = last attempt (at)
 */
function readSql(due: string): string {
  return `WITH due AS (${due})
SELECT 'w' AS k, a.student_id, a.task, a.grade, a.subject, a.topic, a.is_correct AS v, a.created_at AS at, a.id AS n
  FROM (SELECT x.*, ROW_NUMBER() OVER (PARTITION BY x.student_id, x.task ORDER BY x.id DESC) AS rn FROM attempts x JOIN due d ON d.s = x.student_id AND d.t = x.task WHERE x.marked_by IS NOT 'client') a
  WHERE a.rn <= ${WINDOW}
UNION ALL
SELECT 'f', a.student_id, a.task, a.grade, a.subject, a.topic, a.is_correct, a.created_at, a.id
  FROM (SELECT x.*, ROW_NUMBER() OVER (PARTITION BY x.student_id, x.task ORDER BY x.id ASC) AS rn FROM attempts x JOIN due d ON d.s = x.student_id AND d.t = x.task WHERE x.marked_by IS NOT 'client') a
  WHERE a.rn <= ${BASELINE}
UNION ALL
SELECT 't', x.student_id, x.task, MAX(x.grade), MAX(x.subject), MAX(x.topic), COALESCE(SUM(x.is_correct), 0), MIN(x.created_at), COUNT(*)
  FROM attempts x JOIN due d ON d.s = x.student_id AND d.t = x.task WHERE x.marked_by IS NOT 'client' GROUP BY x.student_id, x.task
UNION ALL
SELECT 'l', x.student_id, x.task, 0, '', '', 0, MAX(x.created_at), 0
  FROM attempts x JOIN due d ON d.s = x.student_id AND d.t = x.task WHERE x.marked_by IS NOT 'client' GROUP BY x.student_id, x.task`;
}

// Due at night: a pair with NO cached row at all (history from before the cache existed, whatever its age: the self-heal for learners without runs),
// or a pair with attempts from the last 3 days that are newer than its cached row.
const DUE_NIGHTLY = `SELECT a.student_id AS s, a.task AS t FROM attempts a
  LEFT JOIN topic_progress p ON p.student_id = a.student_id AND p.task = a.task
  WHERE a.marked_by IS NOT 'client'
  GROUP BY a.student_id, a.task
  HAVING p.updated_at IS NULL OR (MAX(a.created_at) >= ? AND MAX(a.created_at) > p.updated_at)
  ORDER BY MAX(a.created_at) DESC
  LIMIT ?`;
const DUE_STUDENT = 'SELECT ? AS s, value AS t FROM json_each(?)';

/** Turns the tagged rows into one TopicProgressRow per learner and task. Pure. */
export function rowsFromRead(raw: readonly RawRow[]): TopicProgressRow[] {
  const by = new Map<string, { w: RawRow[]; f: RawRow[]; t?: RawRow; l?: RawRow }>();
  for (const r of raw) {
    const key = `${r.student_id}\u0000${r.task}`;
    const g = by.get(key) ?? { w: [], f: [] };
    if (r.k === 'w') g.w.push(r);
    else if (r.k === 'f') g.f.push(r);
    else if (r.k === 't') g.t = r;
    else if (r.k === 'l') g.l = r;
    by.set(key, g);
  }
  const point = (r: RawRow): AttemptPoint => ({ correct: Number(r.v) === 1, at: Number(r.at) });
  const out: TopicProgressRow[] = [];
  for (const g of by.values()) {
    if (!g.t || Number(g.t.n) === 0) continue;
    const win = [...g.w].sort((a, b) => Number(a.n) - Number(b.n));
    const first = [...g.f].sort((a, b) => Number(a.n) - Number(b.n));
    const any = win[win.length - 1] ?? g.t;
    out.push({
      studentId: g.t.student_id,
      task: g.t.task,
      grade: Number(g.t.grade),
      subject: String(g.t.subject),
      topic: String(g.t.topic),
      measure: topicMeasure({
        window: win.map(point),
        first: first.map(point),
        total: Number(g.t.n),
        totalCorrect: Number(g.t.v),
        firstAt: Number(g.t.at),
        lastAt: g.l ? Number(g.l.at) : Number(any.at),
      }),
    });
  }
  return out;
}

/** The upsert for one row. The primary key is (student_id, task), so running it twice leaves one row with the same values. */
export function upsertStatement(r: TopicProgressRow, now: number): Statement {
  const m = r.measure;
  return {
    sql: `INSERT INTO topic_progress (student_id, task, grade, subject, topic, attempts, correct, last20_n, last20_pct, first10_pct, last10_pct, days_practised, mastery, first_attempt_at, last_attempt_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(student_id, task) DO UPDATE SET
            grade = excluded.grade, subject = excluded.subject, topic = excluded.topic, attempts = excluded.attempts, correct = excluded.correct,
            last20_n = excluded.last20_n, last20_pct = excluded.last20_pct, first10_pct = excluded.first10_pct, last10_pct = excluded.last10_pct,
            days_practised = excluded.days_practised, mastery = excluded.mastery, first_attempt_at = excluded.first_attempt_at,
            last_attempt_at = excluded.last_attempt_at, updated_at = excluded.updated_at`,
    params: [r.studentId, r.task, r.grade, r.subject, r.topic, m.attempts, m.correct, m.last20N, m.last20Pct, m.first10Pct, m.last10Pct, m.daysPractised, m.level, m.firstAttemptAt ?? 0, m.lastAttemptAt ?? 0, now] as Param[],
  };
}

/** Refreshes the cache for the given tasks of one learner (called when a run finishes): one read, one batch. Returns how many rows were written. */
export async function refreshForRun(db: AdminDb, studentId: string, tasks: readonly string[], now: number): Promise<number> {
  const list = [...new Set(tasks)].slice(0, 30);
  if (list.length === 0) return 0;
  const raw = await db.all<RawRow>(readSql(DUE_STUDENT), [studentId, JSON.stringify(list)]);
  const rows = rowsFromRead(raw);
  if (rows.length === 0) return 0;
  await db.batch(rows.map((r) => upsertStatement(r, now)));
  return rows.length;
}

/**
 * A learner with answers but no cached rows at all (their history is older than the cache, or they never finished a run): builds their rows now, so
 * the first view of their progress is right instead of "nothing practised yet". One small read when there is nothing to do; otherwise one read and one
 * batch for at most 30 tasks (the nightly job picks up the rest). Returns the rows written.
 */
export async function ensureProgressRows(db: AdminDb, studentId: string, now: number): Promise<number> {
  const tasks = await db.all<{ task: string }>("SELECT task FROM attempts WHERE student_id = ? AND marked_by IS NOT 'client' GROUP BY task ORDER BY MAX(created_at) DESC LIMIT 30", [studentId]);
  return refreshForRun(db, studentId, tasks.map((t) => t.task), now);
}

/**
 * The nightly refresh: pairs with attempts newer than their cached row (looking back 3 days), most recent first, at most `limit`. The same batch also
 * abandons runs left open for more than 2 hours (one statement), so the whole step is one read and one batch.
 */
export async function refreshNightly(db: AdminDb, now: number, limit = NIGHTLY_PAIR_LIMIT): Promise<{ refreshed: number }> {
  const raw = await db.all<RawRow>(readSql(DUE_NIGHTLY), [now - NIGHTLY_LOOKBACK_DAYS * DAY_MS, limit]);
  const rows = rowsFromRead(raw);
  await db.batch([abandonStatement(now), ...rows.map((r) => upsertStatement(r, now))]);
  return { refreshed: rows.length };
}

export interface AttemptExportRow { id: number; student_id: string; task: string; grade: number; subject: string; topic: string; is_correct: number; created_at: number }

/**
 * The same rows the refresh writes, computed from a flat export of attempts (for the one-off backfill of history that happened before 0014). Pure.
 * Gives exactly what refreshForRun would give for the same attempts: a test compares them.
 */
export function rowsFromAttempts(attempts: readonly AttemptExportRow[]): TopicProgressRow[] {
  const by = new Map<string, AttemptExportRow[]>();
  for (const a of attempts) {
    const key = `${a.student_id}\u0000${a.task}`;
    by.set(key, [...(by.get(key) ?? []), a]);
  }
  const out: TopicProgressRow[] = [];
  for (const list of by.values()) {
    const sorted = [...list].sort((a, b) => a.id - b.id);
    const point = (r: AttemptExportRow): AttemptPoint => ({ correct: Number(r.is_correct) === 1, at: Number(r.created_at) });
    const last = sorted[sorted.length - 1];
    out.push({
      studentId: last.student_id,
      task: last.task,
      grade: Number(last.grade),
      subject: String(last.subject),
      topic: String(last.topic),
      measure: topicMeasure({
        window: sorted.slice(-WINDOW).map(point),
        first: sorted.slice(0, BASELINE).map(point),
        total: sorted.length,
        totalCorrect: sorted.filter((r) => Number(r.is_correct) === 1).length,
        firstAt: Math.min(...sorted.map((r) => Number(r.created_at))),
        lastAt: Math.max(...sorted.map((r) => Number(r.created_at))),
      }),
    });
  }
  return out;
}

/** A statement as plain SQL text (for the chunk files of the backfill). Strings are quoted and escaped; numbers and NULL are written as they are. */
export function statementToSql(s: Statement): string {
  let i = 0;
  return s.sql.replace(/\s+/g, ' ').trim().replace(/\?/g, () => {
    const v = (s.params ?? [])[i++];
    return v === null || v === undefined ? 'NULL' : typeof v === 'number' ? String(v) : `'${String(v).replace(/'/g, "''")}'`;
  }) + ';';
}
