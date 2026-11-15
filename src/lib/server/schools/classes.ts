// ADR 0003 phase 3: classes, join codes and class membership. Pure server logic over AdminDb (the same SQL on D1 and node:sqlite).
//
// Privacy rules enforced HERE, not in the UI:
//   - a teacher reaches a class only through teacher_user_id = their own id, so they see only their own classes and their learners;
//   - a teacher sees learners by nickname (students.display_name) and join date; never the real name, login code or anything else;
//   - once a learner has left (or was removed) the teacher sees nothing of them (left_at is set; every roster read filters on it).
import type { AdminDb } from '../admin/db';

export { NOTICE_VERSION, JOIN_NOTICE } from '../../shared/classNotice';
import { NOTICE_VERSION } from '../../shared/classNotice';

export const MAX_CLASSES_PER_TEACHER = 20;
export const MAX_MEMBERS = 60;
export const MAX_CLASSES_PER_LEARNER = 8;
/** No 0/O, 1/I/L, 2/Z, 5/S look-alikes: easy to read aloud and copy from a board. 8 characters from 27 letters and digits. */
export const CODE_ALPHABET = 'ABCDEFGHJKMNPQRTUVWXY346789';
export const CODE_LENGTH = 8;

export type RandomBytes = (n: number) => Uint8Array;
const cryptoBytes: RandomBytes = (n) => crypto.getRandomValues(new Uint8Array(n));

/** A join code. Rejection sampling keeps every character equally likely. */
export function makeJoinCode(rand: RandomBytes = cryptoBytes): string {
  const limit = 256 - (256 % CODE_ALPHABET.length);
  let out = '';
  while (out.length < CODE_LENGTH) {
    for (const b of rand(16)) {
      if (b < limit && out.length < CODE_LENGTH) out += CODE_ALPHABET[b % CODE_ALPHABET.length];
    }
  }
  return out;
}

/** What a learner typed -> the stored form: upper case, spaces and dashes removed. null when it cannot be a code. */
export function normaliseCode(input: unknown): string | null {
  if (typeof input !== 'string' || input.length > 24) return null;
  const c = input.toUpperCase().replace(/[\s-]/g, '');
  return c.length === CODE_LENGTH && [...c].every((ch) => CODE_ALPHABET.includes(ch)) ? c : null;
}

const clip = (v: unknown, n: number): string => (typeof v === 'string' ? v.replace(/[\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n) : '');
const SUBJECT_RE = /^[a-z][a-z0-9-]{0,29}$/;
const isUuid = (v: unknown): v is string => typeof v === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
export { isUuid };

export interface ClassSummary { id: string; name: string; grade: number; subjects: string[]; joinCode: string; status: 'active' | 'archived'; members: number; createdAt: number; schoolName: string }
export interface RosterEntry { studentId: string; nickname: string; joinedAt: number }
export interface ClassDetail extends ClassSummary { roster: RosterEntry[] }

type Fail = { ok: false; status: number; error: string };
const fail = (status: number, error: string): Fail => ({ ok: false, status, error });

interface ClassRow { id: string; name: string; grade: number; subjects: string; join_code: string; status: string; created_at: number; school_name: string | null; members: number }

const toSummary = (r: ClassRow): ClassSummary => {
  let subjects: string[] = [];
  try { const v = JSON.parse(r.subjects); if (Array.isArray(v)) subjects = v.filter((x): x is string => typeof x === 'string'); } catch { /* keep [] */ }
  return { id: r.id, name: r.name, grade: Number(r.grade), subjects, joinCode: r.join_code, status: r.status as 'active' | 'archived', members: Number(r.members), createdAt: Number(r.created_at), schoolName: r.school_name ?? '' };
};

const CLASS_SELECT = `SELECT c.id, c.name, c.grade, c.subjects, c.join_code, c.status, c.created_at, s.name AS school_name,
  (SELECT COUNT(*) FROM class_members m WHERE m.class_id = c.id AND m.left_at IS NULL) AS members
  FROM classes c LEFT JOIN schools s ON s.id = c.school_id`;

export async function listClasses(db: AdminDb, teacherId: string): Promise<ClassSummary[]> {
  const rows = await db.all<ClassRow>(`${CLASS_SELECT} WHERE c.teacher_user_id = ? ORDER BY CASE c.status WHEN 'active' THEN 0 ELSE 1 END, c.created_at DESC LIMIT 100`, [teacherId]);
  return rows.map(toSummary);
}

/** One of the teacher's own classes with its roster (nicknames only, learners who are still in the class), or null. */
export async function getClass(db: AdminDb, teacherId: string, classId: unknown): Promise<ClassDetail | null> {
  if (!isUuid(classId)) return null;
  const row = (await db.all<ClassRow>(`${CLASS_SELECT} WHERE c.id = ? AND c.teacher_user_id = ?`, [classId, teacherId]))[0];
  if (!row) return null;
  const roster = await db.all<{ student_id: string; display_name: string; joined_at: number }>(
    `SELECT m.student_id, st.display_name, m.joined_at FROM class_members m JOIN students st ON st.id = m.student_id
     WHERE m.class_id = ? AND m.left_at IS NULL ORDER BY lower(st.display_name), m.joined_at LIMIT ?`,
    [classId, MAX_MEMBERS + 5],
  );
  return { ...toSummary(row), roster: roster.map((r) => ({ studentId: r.student_id, nickname: r.display_name, joinedAt: Number(r.joined_at) })) };
}

export interface CreateClassInput { name?: unknown; grade?: unknown; subjects?: unknown }

/** The teacher's school comes from their APPROVED application (set by the admin on approval): a teacher cannot name a school of their own. */
export async function createClass(db: AdminDb, teacherId: string, input: CreateClassInput, now: number, newId: () => string = () => crypto.randomUUID(), rand: RandomBytes = cryptoBytes): Promise<{ ok: true; class: ClassSummary } | Fail> {
  const name = clip(input.name, 60);
  if (name.length < 2) return fail(400, 'Give the class a name, for example “6B Natural Sciences”');
  const grade = Number(input.grade);
  if (!Number.isInteger(grade) || grade < 4 || grade > 12) return fail(400, 'Choose a grade from 4 to 12');
  let subjects: string[] = [];
  if (input.subjects !== undefined && input.subjects !== null) {
    if (!Array.isArray(input.subjects) || input.subjects.length > 12 || !input.subjects.every((s) => typeof s === 'string' && SUBJECT_RE.test(s))) return fail(400, 'Unknown subject');
    subjects = [...new Set(input.subjects as string[])];
  }
  const app = (await db.all<{ school_id: string | null }>("SELECT school_id FROM teacher_applications WHERE user_id = ? AND status = 'approved'", [teacherId]))[0];
  if (!app?.school_id) return fail(403, 'Your teacher account is not linked to a school yet');
  const open = (await db.all<{ n: number }>("SELECT COUNT(*) AS n FROM classes WHERE teacher_user_id = ? AND status = 'active'", [teacherId]))[0];
  if (Number(open?.n ?? 0) >= MAX_CLASSES_PER_TEACHER) return fail(409, `You can have at most ${MAX_CLASSES_PER_TEACHER} active classes`);

  const id = newId();
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = makeJoinCode(rand);
    try {
      await db.batch([{ sql: "INSERT INTO classes (id, school_id, teacher_user_id, name, grade, subjects, join_code, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, 'active', ?)", params: [id, app.school_id, teacherId, name, grade, JSON.stringify(subjects), code, now] }]);
      const c = await getClass(db, teacherId, id);
      return { ok: true, class: c as ClassSummary };
    } catch (e) {
      if (!/UNIQUE|constraint/i.test(String((e as Error)?.message ?? e))) throw e; // a code clash: try another
    }
  }
  return fail(503, 'Could not make a join code. Try again.');
}

/** A new join code (the old one stops working at once). The members stay. Use it when a code has been shared too widely. */
export async function regenerateCode(db: AdminDb, teacherId: string, classId: unknown, rand: RandomBytes = cryptoBytes): Promise<{ ok: true; joinCode: string } | Fail> {
  if (!isUuid(classId)) return fail(404, 'Class not found');
  const c = (await db.all<{ status: string }>('SELECT status FROM classes WHERE id = ? AND teacher_user_id = ?', [classId, teacherId]))[0];
  if (!c) return fail(404, 'Class not found');
  if (c.status !== 'active') return fail(409, 'This class is archived');
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = makeJoinCode(rand);
    try {
      await db.batch([{ sql: "UPDATE classes SET join_code = ? WHERE id = ? AND teacher_user_id = ? AND status = 'active'", params: [code, classId, teacherId] }]);
      return { ok: true, joinCode: code };
    } catch (e) {
      if (!/UNIQUE|constraint/i.test(String((e as Error)?.message ?? e))) throw e;
    }
  }
  return fail(503, 'Could not make a join code. Try again.');
}

/** Archives a class: its code stops working and the teacher no longer sees its learners' progress. The learners' own history is untouched. */
export async function archiveClass(db: AdminDb, teacherId: string, classId: unknown, now: number): Promise<{ ok: true } | Fail> {
  if (!isUuid(classId)) return fail(404, 'Class not found');
  const c = (await db.all<{ id: string }>('SELECT id FROM classes WHERE id = ? AND teacher_user_id = ?', [classId, teacherId]))[0];
  if (!c) return fail(404, 'Class not found');
  await db.batch([
    { sql: "UPDATE classes SET status = 'archived', archived_at = ? WHERE id = ? AND teacher_user_id = ? AND status = 'active'", params: [now, classId, teacherId] },
    { sql: 'UPDATE exam_scopes SET archived_at = ? WHERE class_id = ? AND archived_at IS NULL', params: [now, classId] },
  ]);
  return { ok: true };
}

/** The teacher removes a learner from their own class. */
export async function removeMember(db: AdminDb, teacherId: string, classId: unknown, studentId: unknown, now: number): Promise<{ ok: true } | Fail> {
  if (!isUuid(classId) || typeof studentId !== 'string' || !/^[A-Za-z0-9-]{1,64}$/.test(studentId)) return fail(404, 'Not found');
  const c = (await db.all<{ id: string }>('SELECT id FROM classes WHERE id = ? AND teacher_user_id = ?', [classId, teacherId]))[0];
  if (!c) return fail(404, 'Not found');
  const m = (await db.all<{ student_id: string }>('SELECT student_id FROM class_members WHERE class_id = ? AND student_id = ? AND left_at IS NULL', [classId, studentId]))[0];
  if (!m) return fail(404, 'Not found');
  await db.batch([{ sql: 'UPDATE class_members SET left_at = ? WHERE class_id = ? AND student_id = ? AND left_at IS NULL', params: [now, classId, studentId] }]);
  return { ok: true };
}

export interface JoinedClass { classId: string; name: string; grade: number; schoolName: string; joinedAt: number }

/**
 * A learner joins with a code. The answer for a code that does not exist, is archived or is malformed is the SAME ("not found"), so codes cannot be
 * probed. Joining twice is harmless. A learner who left can join again with the code (the teacher can make a new code to stop that).
 */
export async function joinClass(db: AdminDb, studentId: string, code: unknown, now: number): Promise<{ ok: true; joined: JoinedClass; alreadyMember: boolean } | Fail> {
  const c = normaliseCode(code);
  const notFound = fail(404, 'We could not find a class with that code. Check it and try again.');
  if (!c) return notFound;
  const cls = (await db.all<{ id: string; name: string; grade: number; school_name: string | null }>(
    "SELECT c.id, c.name, c.grade, s.name AS school_name FROM classes c LEFT JOIN schools s ON s.id = c.school_id WHERE c.join_code = ? AND c.status = 'active'", [c]))[0];
  if (!cls) return notFound;
  const existing = (await db.all<{ left_at: number | null; joined_at: number }>('SELECT left_at, joined_at FROM class_members WHERE class_id = ? AND student_id = ?', [cls.id, studentId]))[0];
  const joined = (joinedAt: number): JoinedClass => ({ classId: cls.id, name: cls.name, grade: Number(cls.grade), schoolName: cls.school_name ?? '', joinedAt });
  if (existing && existing.left_at === null) return { ok: true, joined: joined(Number(existing.joined_at)), alreadyMember: true };
  const size = (await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM class_members WHERE class_id = ? AND left_at IS NULL', [cls.id]))[0];
  if (Number(size?.n ?? 0) >= MAX_MEMBERS) return fail(409, 'This class is full. Ask your teacher.');
  const mine = (await db.all<{ n: number }>("SELECT COUNT(*) AS n FROM class_members m JOIN classes c ON c.id = m.class_id WHERE m.student_id = ? AND m.left_at IS NULL AND c.status = 'active'", [studentId]))[0];
  if (Number(mine?.n ?? 0) >= MAX_CLASSES_PER_LEARNER) return fail(409, `You can be in at most ${MAX_CLASSES_PER_LEARNER} classes`);
  await db.batch([{
    sql: `INSERT INTO class_members (class_id, student_id, joined_at, notice_version) VALUES (?, ?, ?, ?)
          ON CONFLICT(class_id, student_id) DO UPDATE SET joined_at = excluded.joined_at, notice_version = excluded.notice_version, left_at = NULL`,
    params: [cls.id, studentId, now, NOTICE_VERSION],
  }]);
  return { ok: true, joined: joined(now), alreadyMember: false };
}

export async function leaveClass(db: AdminDb, studentId: string, classId: unknown, now: number): Promise<{ ok: true } | Fail> {
  if (!isUuid(classId)) return fail(404, 'Not found');
  const m = (await db.all<{ student_id: string }>('SELECT student_id FROM class_members WHERE class_id = ? AND student_id = ? AND left_at IS NULL', [classId, studentId]))[0];
  if (!m) return fail(404, 'Not found');
  await db.batch([{ sql: 'UPDATE class_members SET left_at = ? WHERE class_id = ? AND student_id = ? AND left_at IS NULL', params: [now, classId, studentId] }]);
  return { ok: true };
}

/** The learner's own classes: name, grade and school. Never the teacher's name or email. */
export async function myClasses(db: AdminDb, studentId: string): Promise<JoinedClass[]> {
  const rows = await db.all<{ id: string; name: string; grade: number; school_name: string | null; joined_at: number }>(
    `SELECT c.id, c.name, c.grade, s.name AS school_name, m.joined_at FROM class_members m JOIN classes c ON c.id = m.class_id LEFT JOIN schools s ON s.id = c.school_id
     WHERE m.student_id = ? AND m.left_at IS NULL AND c.status = 'active' ORDER BY m.joined_at DESC LIMIT 20`, [studentId]);
  return rows.map((r) => ({ classId: r.id, name: r.name, grade: Number(r.grade), schoolName: r.school_name ?? '', joinedAt: Number(r.joined_at) }));
}
