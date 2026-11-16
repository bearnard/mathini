// ADR 0003 section 6: the exam scope a teacher sets for a class: "Grade 6 NST test, Terms 3-4, on 28 Nov". Learners in the class get matching exam
// readiness and a daily plan counting down to it (see progressApi). Pure server logic over AdminDb.
import type { AdminDb } from '../admin/db';
import { dayNumberOf } from '../../shared/dailyPlan';
import { sastDayNumber } from '../../shared/progressMeasures';
import { subjectTitleOf, topicsFor } from '../../shared/topicCatalog';
import { isUuid } from './classes';

export const MAX_ACTIVE_SCOPES = 5;
export const MAX_TOPICS = 40;
export const MAX_DAYS_AHEAD = 400;

export interface ScopeInput { subject?: unknown; title?: unknown; tasks?: unknown; examDate?: unknown }
export interface ScopeRow { id: string; classId: string; subject: string; grade: number; title: string; tasks: string[]; examDate: string; createdAt: number; archivedAt: number | null }

type Fail = { ok: false; status: number; error: string };
const fail = (status: number, error: string): Fail => ({ ok: false, status, error });
const clip = (v: unknown, n: number): string => (typeof v === 'string' ? v.replace(/[\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n) : '');

interface DbScope { id: string; class_id: string; subject: string; grade: number; title: string; tasks: string; exam_date: string; created_at: number; archived_at: number | null }
const toScope = (r: DbScope): ScopeRow => {
  let tasks: string[] = [];
  try { const v = JSON.parse(r.tasks); if (Array.isArray(v)) tasks = v.filter((x): x is string => typeof x === 'string'); } catch { /* keep [] */ }
  return { id: r.id, classId: r.class_id, subject: r.subject, grade: Number(r.grade), title: r.title, tasks, examDate: r.exam_date, createdAt: Number(r.created_at), archivedAt: r.archived_at == null ? null : Number(r.archived_at) };
};
const COLS = 'id, class_id, subject, grade, title, tasks, exam_date, created_at, archived_at';

async function ownClass(db: AdminDb, teacherId: string, classId: unknown): Promise<{ id: string; grade: number; status: string } | null> {
  if (!isUuid(classId)) return null;
  return (await db.all<{ id: string; grade: number; status: string }>('SELECT id, grade, status FROM classes WHERE id = ? AND teacher_user_id = ?', [classId, teacherId]))[0] ?? null;
}

/** The teacher's own class's scopes, soonest exam first. */
export async function listScopes(db: AdminDb, teacherId: string, classId: unknown): Promise<ScopeRow[] | null> {
  const c = await ownClass(db, teacherId, classId);
  if (!c || c.status !== 'active') return null;
  const rows = await db.all<DbScope>(`SELECT ${COLS} FROM exam_scopes WHERE class_id = ? AND archived_at IS NULL ORDER BY exam_date ASC, created_at ASC LIMIT 20`, [c.id]);
  return rows.map(toScope);
}

/**
 * The teacher sets a scope for their own, active class. The subject and every topic must exist for the class's grade (the lists come from the
 * curriculum registry, so a scope can never name a topic that has no questions), and the exam date must be a real date from today to 400 days away.
 */
export async function createScope(db: AdminDb, teacherId: string, classId: unknown, input: ScopeInput, now: number, newId: () => string = () => crypto.randomUUID()): Promise<{ ok: true; scope: ScopeRow } | Fail> {
  const c = await ownClass(db, teacherId, classId);
  if (!c) return fail(404, 'Class not found');
  if (c.status !== 'active') return fail(409, 'This class is archived');
  const subject = clip(input.subject, 30);
  const title = clip(input.title, 80);
  if (title.length < 3) return fail(400, 'Give the exam a name, for example “Term 3 and 4 test”');
  const grade = Number(c.grade);
  if (!subjectTitleOf(grade, subject)) return fail(400, 'Unknown subject for this grade');
  if (!Array.isArray(input.tasks) || input.tasks.length < 1 || input.tasks.length > MAX_TOPICS || !input.tasks.every((t) => typeof t === 'string')) return fail(400, `Choose between 1 and ${MAX_TOPICS} topics`);
  const allowed = new Set(topicsFor(grade, subject).map((t) => t.task));
  const tasks = [...new Set(input.tasks as string[])];
  if (!tasks.every((t) => allowed.has(t))) return fail(400, 'One of the topics is not part of this subject and grade');
  const day = typeof input.examDate === 'string' ? dayNumberOf(input.examDate) : null;
  if (day === null) return fail(400, 'Enter the exam date');
  const today = sastDayNumber(now);
  if (day < today) return fail(400, 'The exam date is in the past');
  if (day - today > MAX_DAYS_AHEAD) return fail(400, 'The exam date is too far ahead');
  const open = (await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM exam_scopes WHERE class_id = ? AND archived_at IS NULL', [c.id]))[0];
  if (Number(open?.n ?? 0) >= MAX_ACTIVE_SCOPES) return fail(409, `A class can have at most ${MAX_ACTIVE_SCOPES} exams at once. Remove one first.`);
  const id = newId();
  await db.batch([{ sql: 'INSERT INTO exam_scopes (id, class_id, subject, grade, title, tasks, exam_date, created_by, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', params: [id, c.id, subject, grade, title, JSON.stringify(tasks), input.examDate as string, teacherId, now] }]);
  const row = (await db.all<DbScope>(`SELECT ${COLS} FROM exam_scopes WHERE id = ?`, [id]))[0];
  return { ok: true, scope: toScope(row) };
}

export async function archiveScope(db: AdminDb, teacherId: string, classId: unknown, scopeId: unknown, now: number): Promise<{ ok: true } | Fail> {
  const c = await ownClass(db, teacherId, classId);
  if (!c || c.status !== 'active' || !isUuid(scopeId)) return fail(404, 'Not found');
  const s = (await db.all<{ id: string }>('SELECT id FROM exam_scopes WHERE id = ? AND class_id = ? AND archived_at IS NULL', [scopeId, c.id]))[0];
  if (!s) return fail(404, 'Not found');
  await db.batch([{ sql: 'UPDATE exam_scopes SET archived_at = ? WHERE id = ? AND class_id = ? AND archived_at IS NULL', params: [now, scopeId, c.id] }]);
  return { ok: true };
}

export interface LearnerScope extends ScopeRow { className: string }

/**
 * The exams that apply to a learner today: scopes of the active classes they are in, not archived, with an exam date that is today or later.
 * Soonest first. Reads only through the learner's own memberships (left_at IS NULL).
 */
export async function scopesForStudent(db: AdminDb, studentId: string, now: number): Promise<LearnerScope[]> {
  const st = scopesForStudentStatement(studentId);
  return learnerScopesFromRows(await db.all(st.sql, st.params), now);
}
/** The same query as a statement, so a caller can send it in a batch with other reads (one round trip). */
export const scopesForStudentStatement = (studentId: string): { sql: string; params: string[] } => ({
  sql: `SELECT e.id, e.class_id, e.subject, e.grade, e.title, e.tasks, e.exam_date, e.created_at, e.archived_at, c.name AS class_name
     FROM class_members m JOIN classes c ON c.id = m.class_id AND c.status = 'active' JOIN exam_scopes e ON e.class_id = c.id AND e.archived_at IS NULL
     WHERE m.student_id = ? AND m.left_at IS NULL ORDER BY e.exam_date ASC, e.created_at ASC LIMIT 20`,
  params: [studentId],
});
export function learnerScopesFromRows(all: unknown[], now: number): LearnerScope[] {
  const rows = all as (DbScope & { class_name: string })[];
  const today = sastDayNumber(now);
  return rows.map((r) => ({ ...toScope(r), className: r.class_name })).filter((s) => { const d = dayNumberOf(s.examDate); return d !== null && d >= today; });
}

/** A class's active exams that have not passed, soonest first (for the teacher's class view). The caller has already checked the class is theirs. */
export async function scopesForClass(db: AdminDb, classId: string, now: number): Promise<ScopeRow[]> {
  return scopesFromRows(await db.all<DbScope>(scopesForClassStatement(classId).sql, scopesForClassStatement(classId).params), now);
}
/** The same query as a statement, so a caller can send it in a batch with other reads (one round trip). */
export const scopesForClassStatement = (classId: string): { sql: string; params: string[] } => ({ sql: `SELECT ${COLS} FROM exam_scopes WHERE class_id = ? AND archived_at IS NULL ORDER BY exam_date ASC, created_at ASC LIMIT 20`, params: [classId] });
export function scopesFromRows(rows: unknown[], now: number): ScopeRow[] {
  const today = sastDayNumber(now);
  return (rows as DbScope[]).map(toScope).filter((s) => { const d = dayNumberOf(s.examDate); return d !== null && d >= today; });
}
