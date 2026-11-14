// Persists the spaced-review schedule. Runs in the same request as the attempt insert.
// Grade 6 only (v1), and only for answers that carry a qkey. Mock tests never reach /api/attempts.

import { nextReviewState, sastDay, type ReviewState } from './scheduler';

export interface ReviewDb {
  all<T>(sql: string, params: (string | number | null)[]): Promise<T[]>;
  run(sql: string, params: (string | number | null)[]): Promise<void>;
}

export interface ReviewAnswer {
  studentId: string;
  qkey: string | null;
  task: string;
  subject: string;
  section: string;
  grade: number;
  isCorrect: boolean;
  now: number;
}

interface Row { box: number; due_day: number; streak_correct: number; retired_at: number | null }

export const REVIEW_GRADE = 6;

/** Updates review_items for one answer. Returns true when a row was written. */
export async function recordReviewAnswer(db: ReviewDb, a: ReviewAnswer): Promise<boolean> {
  if (!a.qkey || a.grade !== REVIEW_GRADE) return false;
  const rows = await db.all<Row>('SELECT box, due_day, streak_correct, retired_at FROM review_items WHERE student_id = ? AND qkey = ?', [a.studentId, a.qkey]);
  const prev: ReviewState | null = rows[0]
    ? { box: rows[0].box as 1 | 2 | 3, dueDay: rows[0].due_day, streakCorrect: rows[0].streak_correct, retired: rows[0].retired_at !== null }
    : null;
  const next = nextReviewState(prev, a.isCorrect, a.now);
  if (!next || next === prev) return false;
  await db.run(
    `INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, retired_at, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(student_id, qkey) DO UPDATE SET
       box = excluded.box, due_day = excluded.due_day, streak_correct = excluded.streak_correct,
       retired_at = excluded.retired_at, section = excluded.section, updated_at = excluded.updated_at`,
    [a.studentId, a.qkey, a.task, a.subject, a.section, next.box, next.dueDay, next.streakCorrect, next.retired ? a.now : null, a.now, a.now],
  );
  return true;
}

export { sastDay };
