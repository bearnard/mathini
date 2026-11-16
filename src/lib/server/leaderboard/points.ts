// Rebuilds one learner's points for the current week from SERVER-MARKED data only (attempts.marked_by IS NOT 'client') and caches them in weekly_points.
// The arithmetic is the pure weeklyPoints() in src/lib/shared/weeklyPoints.ts; this file is only reads and one upsert.
//
// Cost: ONE D1 batch of 4 reads (one learner, indexed by (student_id, created_at)) and ONE write. It runs after the response (waitUntil) when an answer
// is stored and when a run finishes, so the learner never waits for it. A rebuild is idempotent, so a lost or doubled run does no harm.
import { allBatch, type AdminDb, type Statement } from '../admin/db';
import { WEEK_MS, weekStartOf, weeklyPoints, type PointsResult } from '../../shared/weeklyPoints';

const MAX_ATTEMPTS_READ = 4000;
const BONUS_KINDS = "('mock_test', 'exam_practice')";

export const upsertPointsStatement = (studentId: string, weekStart: number, r: PointsResult, now: number): Statement => ({
  sql: `INSERT INTO weekly_points (student_id, week_start, points, answered, updated_at) VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(student_id, week_start) DO UPDATE SET points = excluded.points, answered = excluded.answered, updated_at = excluded.updated_at`,
  params: [studentId, weekStart, r.points, r.answered, now],
});

export async function computeWeek(db: AdminDb, studentId: string, weekStart: number): Promise<PointsResult> {
  const end = weekStart + WEEK_MS;
  const attempts: Statement = {
    sql: `SELECT a.qkey, a.is_correct, a.created_at, r.kind AS run_kind FROM attempts a LEFT JOIN runs r ON r.id = a.run_id AND r.student_id = a.student_id
          WHERE a.student_id = ? AND a.created_at >= ? AND a.created_at < ? AND a.marked_by IS NOT 'client' ORDER BY a.created_at LIMIT ${MAX_ATTEMPTS_READ}`,
    params: [studentId, weekStart - WEEK_MS, end],
  };
  const runs: Statement = {
    sql: `SELECT scope_key, score_pct, n_items, finished_at FROM runs WHERE student_id = ? AND status = 'finished' AND kind IN ${BONUS_KINDS} AND finished_at >= ? AND finished_at < ? AND score_pct IS NOT NULL LIMIT 100`,
    params: [studentId, weekStart, end],
  };
  const prior: Statement = {
    sql: `SELECT scope_key, MAX(score_pct) AS best FROM runs WHERE student_id = ? AND status = 'finished' AND kind IN ${BONUS_KINDS} AND finished_at < ? AND score_pct IS NOT NULL
          AND scope_key IN (SELECT scope_key FROM runs WHERE student_id = ? AND status = 'finished' AND finished_at >= ? AND finished_at < ?) GROUP BY scope_key`,
    params: [studentId, weekStart, studentId, weekStart, end],
  };
  const mastered: Statement = { sql: 'SELECT first_mastered_at FROM topic_mastered WHERE student_id = ? AND first_mastered_at >= ? AND first_mastered_at < ? LIMIT 200', params: [studentId, weekStart, end] };
  let res;
  try {
    res = await allBatch(db, [attempts, runs, prior, mastered]);
  } catch {
    // topic_mastered not there yet (migration 0025 not applied): everything else still counts
    res = [...(await allBatch(db, [attempts, runs, prior])), []];
  }
  const [a, r, p, m] = res;
  return weeklyPoints({
    weekStart,
    attempts: a.map((x) => ({ qkey: (x.qkey as string | null) ?? null, correct: Number(x.is_correct) === 1, at: Number(x.created_at), inReviewRun: x.run_kind === 'review' })),
    masteredAt: m.map((x) => Number(x.first_mastered_at)),
    runs: r.map((x) => ({ scopeKey: String(x.scope_key), scorePct: Number(x.score_pct), nItems: Number(x.n_items), finishedAt: Number(x.finished_at) })),
    priorBest: Object.fromEntries(p.map((x) => [String(x.scope_key), Number(x.best)])),
  });
}

/** Rebuilds and stores this week's points for one learner. Never throws (a failure only leaves the cached number as it was). */
export async function refreshWeeklyPoints(db: AdminDb, studentId: string, now: number): Promise<PointsResult | null> {
  try {
    const weekStart = weekStartOf(now);
    const r = await computeWeek(db, studentId, weekStart);
    const s = upsertPointsStatement(studentId, weekStart, r, now);
    await db.batch([s]);
    return r;
  } catch (e) {
    console.error('Weekly points refresh failed:', e);
    return null;
  }
}
