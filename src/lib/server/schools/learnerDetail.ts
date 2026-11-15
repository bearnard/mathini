// A teacher opens ONE learner of their class: the same progress the learner and their parent see (buildProgress), by nickname only.
//
// Privacy, enforced here and tested for every refusal: only the teacher who owns the class (teacher_user_id = themself), only while the class is
// active, and only for a learner who is a CURRENT member (left_at IS NULL). Anything else is the same "not found", so the answer never says which of
// those was missing. buildProgress returns the nickname (students.display_name) and never the PIN, login code, real name, school or age.
import type { AdminDb } from '../admin/db';
import type { ProgressResponse } from '../../shared/progressTypes';
import { buildProgress } from '../progress/progressApi';
import { isUuid } from './classes';

export interface LearnerDetail { class: { id: string; name: string; grade: number }; nickname: string; progress: ProgressResponse }
export type LearnerDetailResult = { ok: true; detail: LearnerDetail } | { ok: false; status: 404; error: string };

const notFound = (): LearnerDetailResult => ({ ok: false, status: 404, error: 'Not found' });
const STUDENT_ID = /^[A-Za-z0-9-]{8,64}$/;

export async function loadLearnerDetail(db: AdminDb, teacherId: string, classId: unknown, studentId: unknown, now: number): Promise<LearnerDetailResult> {
  if (!isUuid(classId) || typeof studentId !== 'string' || !STUDENT_ID.test(studentId)) return notFound();
  const row = (await db.all<{ id: string; name: string; grade: number; display_name: string }>(
    `SELECT c.id, c.name, c.grade, s.display_name FROM classes c
       JOIN class_members m ON m.class_id = c.id AND m.student_id = ? AND m.left_at IS NULL
       JOIN students s ON s.id = m.student_id
      WHERE c.id = ? AND c.teacher_user_id = ? AND c.status = 'active'`,
    [studentId, classId, teacherId],
  ))[0];
  if (!row) return notFound();
  const progress = await buildProgress(db, studentId, now);
  if (!progress) return notFound();
  return { ok: true, detail: { class: { id: row.id, name: row.name, grade: Number(row.grade) }, nickname: row.display_name, progress } };
}
