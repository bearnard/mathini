// What a parent sees of a linked child's progress. ADR 0005's full measures (mastery, improvement, exam readiness) arrive with the runs backend
// and its GET /api/progress; the dashboard will then call that same server function for the linked child, and this file is the ONE place to
// change. Until then it gives plain activity from `attempts`: how much and how recently. Every query is scoped to the one linked child.
import type { AdminDb } from '../admin/db';

const DAY_MS = 86_400_000;

export interface ChildActivity {
  attemptsLast7Days: number;
  attemptsLast30Days: number;
  /** Distinct days with at least one answer in the last 14 days. */
  daysPractisedLast14: number;
  lastPractisedAt: number | null;
  /** Share of the last 50 answers that were right, 0 to 100, or null with fewer than 10 answers. */
  recentAccuracyPct: number | null;
}

export async function loadChildActivity(db: AdminDb, studentId: string, now: number): Promise<ChildActivity> {
  const r = (await db.all<{ a7: number; a30: number; last: number | null }>(
    'SELECT SUM(created_at >= ?) AS a7, COUNT(*) AS a30, MAX(created_at) AS last FROM attempts WHERE student_id = ? AND created_at >= ?',
    [now - 7 * DAY_MS, studentId, now - 30 * DAY_MS],
  ))[0];
  const days = (await db.all<{ n: number }>(
    "SELECT COUNT(DISTINCT CAST(created_at / 86400000 AS INTEGER)) AS n FROM attempts WHERE student_id = ? AND created_at >= ?",
    [studentId, now - 14 * DAY_MS],
  ))[0];
  const recent = await db.all<{ is_correct: number }>('SELECT is_correct FROM attempts WHERE student_id = ? ORDER BY id DESC LIMIT 50', [studentId]);
  return {
    attemptsLast7Days: Number(r?.a7 ?? 0),
    attemptsLast30Days: Number(r?.a30 ?? 0),
    daysPractisedLast14: Number(days?.n ?? 0),
    lastPractisedAt: r?.last == null ? null : Number(r.last),
    recentAccuracyPct: recent.length >= 10 ? Math.round((100 * recent.filter((x) => Number(x.is_correct) === 1).length) / recent.length) : null,
  };
}
