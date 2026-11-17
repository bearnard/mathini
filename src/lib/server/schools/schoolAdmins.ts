// ADR 0003 sections 1 and 6: school admins. The owner (the admin) appoints one or more adults per school. A school admin can RECOMMEND (or not recommend) the
// teacher applications of THEIR school and sees school-level progress. The school admin never grants the teacher role: only the owner does, in /admin/teachers.
// Pure server logic over AdminDb.
//
// The role alone grants nothing: a school admin is an adult with the user_roles role 'school_admin' AND an active row in school_admins for the school.
// Every read and write here takes the school id from that row, never from the request, so one school's admin can never reach another school's data.
import { allBatch, type AdminDb } from '../admin/db';
import type { SchoolClassSummary, SchoolProgress } from '../../shared/schoolProgressTypes';
import { dayNumberOf, daysUntil } from '../../shared/dailyPlan';
import { round1, sastDayNumber } from '../../shared/progressMeasures';
import { isUuid } from './classes';
import { maskSace, normName } from './teachers';

export const MAX_SCHOOL_ADMINS = 5;
const DAY_MS = 86_400_000;
const JSON_LIST = 'SELECT value FROM json_each(?)';
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;

type Fail = { ok: false; status: number; error: string };
const fail = (status: number, error: string): Fail => ({ ok: false, status, error });

export interface SchoolRow { id: string; name: string; province: string | null }

// ---------- the owner appoints and removes ----------

export async function appointSchoolAdmin(db: AdminDb, schoolId: unknown, emailInput: unknown, adminEmail: string, now: number): Promise<{ ok: true; userId: string } | Fail> {
  if (!isUuid(schoolId)) return fail(404, 'School not found');
  const school = (await db.all<{ id: string }>('SELECT id FROM schools WHERE id = ?', [schoolId]))[0];
  if (!school) return fail(404, 'School not found');
  const email = typeof emailInput === 'string' ? emailInput.trim().toLowerCase() : '';
  if (!EMAIL_RE.test(email)) return fail(400, 'Enter an email address');
  const user = (await db.all<{ id: string }>('SELECT id FROM users WHERE email = ?', [email]))[0];
  if (!user) return fail(404, 'That person has not signed in yet. Ask them to sign in at /sign-in first, then appoint them.');
  const active = (await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM school_admins WHERE school_id = ? AND revoked_at IS NULL AND user_id <> ?', [schoolId, user.id]))[0];
  if (Number(active?.n ?? 0) >= MAX_SCHOOL_ADMINS) return fail(409, `A school can have at most ${MAX_SCHOOL_ADMINS} school admins`);
  await db.batch([
    { sql: `INSERT INTO school_admins (user_id, school_id, appointed_by, appointed_at) VALUES (?, ?, ?, ?)
            ON CONFLICT(user_id, school_id) DO UPDATE SET revoked_at = NULL, appointed_by = excluded.appointed_by, appointed_at = excluded.appointed_at`, params: [user.id, schoolId, adminEmail, now] },
    { sql: "INSERT OR IGNORE INTO user_roles (user_id, role, granted_by, granted_at) VALUES (?, 'school_admin', 'admin', ?)", params: [user.id, now] },
  ]);
  return { ok: true, userId: user.id };
}

/** Removes a school admin from one school. The role goes too when they run no other school. */
export async function revokeSchoolAdmin(db: AdminDb, schoolId: unknown, userId: unknown, now: number): Promise<{ ok: true } | Fail> {
  if (!isUuid(schoolId) || typeof userId !== 'string' || !/^[0-9a-f-]{36}$/i.test(userId)) return fail(404, 'Not found');
  const row = (await db.all<{ user_id: string }>('SELECT user_id FROM school_admins WHERE school_id = ? AND user_id = ? AND revoked_at IS NULL', [schoolId, userId]))[0];
  if (!row) return fail(404, 'Not found');
  await db.batch([
    { sql: 'UPDATE school_admins SET revoked_at = ? WHERE school_id = ? AND user_id = ? AND revoked_at IS NULL', params: [now, schoolId, userId] },
    { sql: "DELETE FROM user_roles WHERE user_id = ? AND role = 'school_admin' AND NOT EXISTS (SELECT 1 FROM school_admins WHERE user_id = ? AND revoked_at IS NULL)", params: [userId, userId] },
  ]);
  return { ok: true };
}

export interface AdminSchool extends SchoolRow { district: string | null; teachers: number; classes: number; admins: { userId: string; email: string; appointedAt: number }[] }

/** The owner sets (or clears, with an empty value) a school's education district. Schools without a district never appear on a district board. */
export async function setSchoolDistrict(db: AdminDb, schoolId: unknown, input: unknown): Promise<{ ok: true; district: string | null } | Fail> {
  if (!isUuid(schoolId)) return fail(404, 'School not found');
  if (input !== null && input !== undefined && typeof input !== 'string') return fail(400, 'Enter the district name');
  const district = (typeof input === 'string' ? input.replace(/[\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim() : '').slice(0, 80) || null;
  if (!(await db.all('SELECT 1 FROM schools WHERE id = ?', [schoolId])).length) return fail(404, 'School not found');
  await db.batch([{ sql: 'UPDATE schools SET district = ? WHERE id = ?', params: [district, schoolId] }]);
  return { ok: true, district };
}

/** For /admin/schools: every school with its teacher and class counts and its current school admins. */
export async function listSchoolsForAdmin(db: AdminDb): Promise<AdminSchool[]> {
  const schools = await db.all<{ id: string; name: string; province: string | null; district: string | null; teachers: number; classes: number }>(
    `SELECT s.id, s.name, s.province, s.district,
       (SELECT COUNT(*) FROM teacher_applications a WHERE a.school_id = s.id AND a.status = 'approved') AS teachers,
       (SELECT COUNT(*) FROM classes c WHERE c.school_id = s.id AND c.status = 'active') AS classes
     FROM schools s ORDER BY lower(s.name) LIMIT 300`,
  );
  const admins = await db.all<{ school_id: string; user_id: string; email: string | null; appointed_at: number }>(
    `SELECT sa.school_id, sa.user_id, u.email, sa.appointed_at FROM school_admins sa LEFT JOIN users u ON u.id = sa.user_id WHERE sa.revoked_at IS NULL ORDER BY sa.appointed_at LIMIT 1000`,
  );
  return schools.map((s) => ({
    id: s.id, name: s.name, province: s.province, district: s.district, teachers: Number(s.teachers), classes: Number(s.classes),
    admins: admins.filter((a) => a.school_id === s.id).map((a) => ({ userId: a.user_id, email: a.email ?? '(deleted)', appointedAt: Number(a.appointed_at) })),
  }));
}

// ---------- the school admin ----------

/** The schools this adult runs (active appointments only). */
export async function schoolsOfAdmin(db: AdminDb, userId: string): Promise<SchoolRow[]> {
  return db.all<SchoolRow>(
    `SELECT s.id, s.name, s.province FROM school_admins sa JOIN schools s ON s.id = sa.school_id WHERE sa.user_id = ? AND sa.revoked_at IS NULL ORDER BY lower(s.name) LIMIT 20`,
    [userId],
  );
}

export const canAdminSchool = async (db: AdminDb, userId: string, schoolId: unknown): Promise<boolean> =>
  isUuid(schoolId) && (await db.all<{ n: number }>('SELECT 1 AS n FROM school_admins WHERE user_id = ? AND school_id = ? AND revoked_at IS NULL', [userId, schoolId])).length > 0;

export type EndorsementVerdict = 'recommend' | 'not_recommend';
/** What a school admin said about an applicant. Shown to the owner next to the application. */
export interface Endorsement { verdict: EndorsementVerdict; note: string | null; by: string; at: number }
export interface SchoolApplication { userId: string; email: string; schoolName: string; province: string | null; subjectsNote: string | null; saceMasked: string; submittedAt: number; endorsement: Endorsement | null }

type AppRow = { user_id: string; email: string | null; sace_number: string; school_name: string; province: string | null; subjects_note: string | null; submitted_at: number };
const matches = (a: { school_name: string; province: string | null }, s: SchoolRow) => normName(a.school_name) === normName(s.name) && (a.province ?? '') === (s.province ?? '');

/**
 * The pending applications that name THIS school (same name and province). The school admin sees the email, the school and a MASKED SACE number: they
 * confirm that the person teaches at their school; the owner checks the SACE number itself. Never another school's applications.
 */
export async function pendingForSchool(db: AdminDb, schoolId: string): Promise<SchoolApplication[]> {
  const school = (await db.all<SchoolRow>('SELECT id, name, province FROM schools WHERE id = ?', [schoolId]))[0];
  if (!school) return [];
  const rows = await db.all<AppRow>(
    `SELECT a.user_id, u.email, a.sace_number, a.school_name, a.province, a.subjects_note, a.submitted_at FROM teacher_applications a LEFT JOIN users u ON u.id = a.user_id
     WHERE a.status = 'pending' ORDER BY a.submitted_at ASC LIMIT 400`,
  );
  const mine = rows.filter((a) => matches(a, school));
  const ends = mine.length === 0 ? [] : await db.all<{ user_id: string; verdict: string; note: string | null; endorsed_by: string; endorsed_at: number }>(
    `SELECT user_id, verdict, note, endorsed_by, endorsed_at FROM teacher_endorsements WHERE school_id = ? AND user_id IN (${JSON_LIST})`, [schoolId, JSON.stringify(mine.map((a) => a.user_id))],
  );
  return mine.map((a) => {
    const e = ends.find((x) => x.user_id === a.user_id);
    return {
      userId: a.user_id, email: a.email ?? '(deleted)', schoolName: a.school_name, province: a.province, subjectsNote: a.subjects_note, saceMasked: maskSace(a.sace_number), submittedAt: Number(a.submitted_at),
      endorsement: e ? { verdict: e.verdict as EndorsementVerdict, note: e.note, by: e.endorsed_by, at: Number(e.endorsed_at) } : null,
    };
  });
}

/**
 * A school admin RECOMMENDS a teacher who named their school, or says they do not teach there. This only records the recommendation (teacher_endorsements,
 * shown to the owner in /admin/teachers): it never changes the application and never grants the teacher role. The owner alone approves, in /admin/teachers.
 * The words 'confirm' and 'decline' (the old buttons) are read as recommend and not_recommend, so an old page cannot grant anything either.
 * The application must be pending and name the admin's school.
 */
export async function recommendAsSchoolAdmin(db: AdminDb, actor: { userId: string; email: string }, schoolId: unknown, targetUserId: unknown, decision: unknown, note: unknown, now: number): Promise<{ ok: true; verdict: EndorsementVerdict } | Fail> {
  if (!(await canAdminSchool(db, actor.userId, schoolId))) return fail(404, 'Not found');
  const verdict: EndorsementVerdict | null = decision === 'recommend' || decision === 'confirm' ? 'recommend' : decision === 'not_recommend' || decision === 'decline' ? 'not_recommend' : null;
  if (!verdict) return fail(400, 'Unknown decision');
  if (typeof targetUserId !== 'string' || !/^[0-9a-f-]{36}$/i.test(targetUserId)) return fail(404, 'Not found');
  const pending = await pendingForSchool(db, schoolId as string);
  if (!pending.some((p) => p.userId === targetUserId)) return fail(404, 'Not found');
  const text = typeof note === 'string' ? note.replace(/[\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 300) || null : null;
  await db.batch([{
    sql: `INSERT INTO teacher_endorsements (user_id, school_id, verdict, note, endorsed_by, endorsed_at) VALUES (?, ?, ?, ?, ?, ?)
          ON CONFLICT(user_id) DO UPDATE SET school_id = excluded.school_id, verdict = excluded.verdict, note = excluded.note, endorsed_by = excluded.endorsed_by, endorsed_at = excluded.endorsed_at`,
    params: [targetUserId, schoolId as string, verdict, text, actor.email, now],
  }]);
  return { ok: true, verdict };
}

// ---------- school-level progress ----------

/** Class summaries for one school (active classes). Counts and averages only; the class drill-down is buildClassProgress with { schoolId }. */
export async function buildSchoolProgress(db: AdminDb, schoolId: unknown, now: number): Promise<SchoolProgress | null> {
  if (!isUuid(schoolId)) return null;
  // Round trip 1: the school, its active classes, their learners and their exams. Round trip 2: the learners' progress. (Was about eight in a row.)
  const [schoolRows, classRows, memberRows, examRows] = await allBatch(db, [
    { sql: 'SELECT id, name, province FROM schools WHERE id = ?', params: [schoolId] },
    { sql: `SELECT c.id, c.name, c.grade, c.subjects, u.email AS teacher_email FROM classes c LEFT JOIN users u ON u.id = c.teacher_user_id
     WHERE c.school_id = ? AND c.status = 'active' ORDER BY c.grade, lower(c.name) LIMIT 60`, params: [schoolId] },
    { sql: "SELECT m.class_id, m.student_id FROM class_members m JOIN classes c ON c.id = m.class_id WHERE c.school_id = ? AND c.status = 'active' AND m.left_at IS NULL LIMIT 4000", params: [schoolId] },
    { sql: "SELECT e.class_id, e.title, e.exam_date FROM exam_scopes e JOIN classes c ON c.id = e.class_id WHERE c.school_id = ? AND c.status = 'active' AND e.archived_at IS NULL ORDER BY e.exam_date ASC", params: [schoolId] },
  ]);
  const school = schoolRows[0] as unknown as SchoolRow | undefined;
  if (!school) return null;
  const classes = classRows as unknown as { id: string; name: string; grade: number; subjects: string; teacher_email: string | null }[];
  const empty: SchoolProgress = { generatedAt: new Date(now).toISOString(), schoolId: school.id, schoolName: school.name, classes: [], totals: { classes: 0, learners: 0, practisedLast7: 0, avgAccuracyPct: null, mockAveragePct: null } };
  if (classes.length === 0) return empty;
  const inSchool = new Set(classes.map((c) => c.id));
  const members = (memberRows as unknown as { class_id: string; student_id: string }[]).filter((m) => inSchool.has(m.class_id));
  const exams = (examRows as unknown as { class_id: string; title: string; exam_date: string }[]).filter((e) => inSchool.has(e.class_id));
  const ids = [...new Set(members.map((m) => m.student_id))];
  let tp: { student_id: string; subject: string; last20_pct: number | null; mastery: string }[] = [];
  let active = new Set<string>();
  let tests: { student_id: string; score_pct: number; subject: string }[] = [];
  if (ids.length > 0) {
    const j = JSON.stringify(ids);
    const [tpR, activeR, testsR] = await allBatch(db, [
      { sql: `SELECT student_id, subject, last20_pct, mastery FROM topic_progress WHERE student_id IN (${JSON_LIST}) LIMIT 20000`, params: [j] },
      { sql: `SELECT DISTINCT student_id FROM attempts WHERE student_id IN (${JSON_LIST}) AND created_at >= ?`, params: [j, now - 7 * DAY_MS] },
      { sql: `SELECT student_id, score_pct, subject FROM runs WHERE student_id IN (${JSON_LIST}) AND status = 'finished' AND kind IN ('mock_test', 'exam_practice') AND score_pct IS NOT NULL ORDER BY finished_at DESC LIMIT 5000`, params: [j] },
    ]);
    tp = tpR as typeof tp; active = new Set((activeR as unknown as { student_id: string }[]).map((r) => r.student_id)); tests = testsR as typeof tests;
  }
  const today = sastDayNumber(now);
  const mean = (xs: number[]) => (xs.length === 0 ? null : round1(xs.reduce((s, x) => s + x, 0) / xs.length));

  const allAcc: number[] = [];
  const allMock: number[] = [];
  const summaries: SchoolClassSummary[] = classes.map((c) => {
    let subjects: string[] = [];
    try { const v = JSON.parse(c.subjects); if (Array.isArray(v)) subjects = v.filter((x): x is string => typeof x === 'string'); } catch { /* any subject */ }
    const inView = (subject: string) => subjects.length === 0 || subjects.includes(subject);
    const mine = members.filter((m) => m.class_id === c.id).map((m) => m.student_id);
    const perLearner: number[] = [];
    const latest = new Map<string, number>();
    for (const id of mine) {
      const accs = tp.filter((r) => r.student_id === id && inView(r.subject) && r.mastery !== 'not_started' && r.last20_pct !== null).map((r) => Number(r.last20_pct));
      const m = mean(accs);
      if (m !== null) perLearner.push(m);
    }
    for (const t of tests) if (mine.includes(t.student_id) && inView(t.subject) && !latest.has(t.student_id)) latest.set(t.student_id, Number(t.score_pct));
    allAcc.push(...perLearner);
    allMock.push(...latest.values());
    const exam = exams.filter((e) => e.class_id === c.id).map((e) => ({ title: e.title, examDate: e.exam_date, day: dayNumberOf(e.exam_date) })).find((e) => e.day !== null && e.day >= today);
    return {
      classId: c.id, name: c.name, grade: Number(c.grade), teacherEmail: c.teacher_email ?? '(deleted)', members: mine.length, practisedLast7: mine.filter((id) => active.has(id)).length,
      avgAccuracyPct: mean(perLearner), mockAveragePct: mean([...latest.values()]), mockScored: latest.size,
      exam: exam ? { title: exam.title, examDate: exam.examDate, daysLeft: daysUntil(exam.day as number, today) } : null,
    };
  });
  return {
    ...empty,
    classes: summaries,
    totals: { classes: summaries.length, learners: ids.length, practisedLast7: ids.filter((id) => active.has(id)).length, avgAccuracyPct: mean(allAcc), mockAveragePct: mean(allMock) },
  };
}
