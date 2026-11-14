// Nightly item analysis (ADR 0003 section 5). Server only. Written against AdminDb (all + batch) so the SAME SQL runs in the
// scheduled job on D1 and in the unit tests on node:sqlite.
//
// COST: 2 SELECTs and ONE batch (all writes), so 3 D1 round trips per run, whatever the data size. The result sets are capped.
// Statistics are for the CURRENT version of an ACTIVE question only (an edit starts afresh; a retired question is not analysed).
import type { AdminDb, Param, Statement } from '../admin/db';
import { difficultyAndDiscriminationFlags, distractorFlag, MIN_ANSWERS, MIN_LEARNER_ANSWERS, type FlagResult, type VersionAggregate } from '../../shared/itemAnalysis';

export const MAX_ANALYSED_VERSIONS = 400;
export const MAX_CHOICE_ROWS = 5000;
/** Number of D1 round trips one run uses (the scheduled job budgets for it next to the top-up's own cap). */
export const ITEM_ANALYSIS_ROUND_TRIPS = 3;

const num = (v: unknown): number => (typeof v === 'number' ? v : Number(v) || 0);

export interface ComputedFlag extends FlagResult {
  questionId: string;
  versionId: number;
}

/** X for one answer = the learner's accuracy on every OTHER question (their overall tally minus this answer). */
const AGGREGATE_SQL = `
SELECT t.vid AS vid, q.id AS qid, COUNT(*) AS n, SUM(t.c) AS k,
       SUM(t.ok) AS nx, SUM(t.ok * t.c) AS kx, SUM(t.ok * t.x) AS sx, SUM(t.ok * t.x * t.x) AS sxx, SUM(t.ok * t.c * t.x) AS sx1
FROM (
  SELECT a.question_version_id AS vid, a.is_correct AS c,
         CASE WHEN s.total_count >= ? THEN 1 ELSE 0 END AS ok,
         CASE WHEN s.total_count >= ? THEN (s.correct_count - a.is_correct) * 1.0 / (s.total_count - 1) ELSE 0 END AS x
  FROM attempts a
  LEFT JOIN student_xp s ON s.student_id = a.student_id AND s.scope = 'overall'
  WHERE a.question_version_id IS NOT NULL
) t
JOIN questions q ON q.current_version_id = t.vid AND q.status = 'active'
GROUP BY t.vid
HAVING COUNT(*) >= ?
ORDER BY COUNT(*) DESC
LIMIT ?`;

const CHOICES_SQL = `
SELECT a.question_version_id AS vid, a.chosen AS chosen, COUNT(*) AS c, v.answer AS answer, q.id AS qid
FROM attempts a
JOIN questions q ON q.current_version_id = a.question_version_id AND q.status = 'active'
JOIN question_versions v ON v.id = q.current_version_id
WHERE a.chosen IS NOT NULL AND a.question_version_id IN (
  SELECT question_version_id FROM attempts WHERE chosen IS NOT NULL AND question_version_id IS NOT NULL GROUP BY question_version_id HAVING COUNT(*) >= ?
)
GROUP BY a.question_version_id, a.chosen
LIMIT ?`;

export async function computeItemFlags(db: AdminDb): Promise<ComputedFlag[]> {
  const [aggs, choices] = await Promise.all([
    db.all<Record<string, unknown>>(AGGREGATE_SQL, [MIN_LEARNER_ANSWERS, MIN_LEARNER_ANSWERS, MIN_ANSWERS, MAX_ANALYSED_VERSIONS]),
    db.all<{ vid: number; chosen: string; c: number; answer: string; qid: string }>(CHOICES_SQL, [MIN_ANSWERS, MAX_CHOICE_ROWS]),
  ]);
  const out: ComputedFlag[] = [];
  for (const r of aggs) {
    const a: VersionAggregate = { n: num(r.n), k: num(r.k), nx: num(r.nx), kx: num(r.kx), sumX: num(r.sx), sumXX: num(r.sxx), sumX1: num(r.sx1) };
    for (const f of difficultyAndDiscriminationFlags(a)) out.push({ ...f, questionId: String(r.qid), versionId: num(r.vid) });
  }
  const byVersion = new Map<number, { qid: string; answer: string; picks: Record<string, number> }>();
  for (const r of choices) {
    const e = byVersion.get(num(r.vid)) ?? { qid: r.qid, answer: r.answer, picks: {} };
    e.picks[r.chosen] = num(r.c);
    byVersion.set(num(r.vid), e);
  }
  for (const [vid, e] of byVersion) {
    const f = distractorFlag(e.answer, e.picks);
    if (f) out.push({ ...f, questionId: e.qid, versionId: vid });
  }
  return out;
}

/**
 * Recomputes the flags and writes them in one batch: new/changed flags are upserted (a dismissed flag keeps its status), open
 * flags that no longer apply are removed (the question improved, was edited or retired).
 */
export async function refreshItemFlags(db: AdminDb, now: number = Date.now()): Promise<{ flags: number; versionsAnalysed: boolean }> {
  const flags = await computeItemFlags(db);
  const statements: Statement[] = flags.map((f) => ({
    sql: `INSERT INTO question_flags (question_id, version_id, kind, value, n, detail, status, computed_at) VALUES (?, ?, ?, ?, ?, ?, 'open', ?)
          ON CONFLICT (version_id, kind) DO UPDATE SET value = excluded.value, n = excluded.n, detail = excluded.detail, computed_at = excluded.computed_at`,
    params: [f.questionId, f.versionId, f.kind, f.value, f.n, f.detail ? JSON.stringify(f.detail) : null, now] as Param[],
  }));
  statements.push({ sql: `DELETE FROM question_flags WHERE status = 'open' AND computed_at < ?`, params: [now] });
  await db.batch(statements);
  return { flags: flags.length, versionsAnalysed: true };
}
