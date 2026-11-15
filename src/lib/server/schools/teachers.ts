// ADR 0003 phase 3: teacher applications and the admin's decision. Pure server logic over AdminDb (the same SQL on D1 and node:sqlite).
//
// The teacher role is granted ONLY here, when the admin approves (user_roles.granted_by = 'admin'). Nothing else in the app can grant it.
// The SACE number is returned by listApplications (the admin screen) and, masked, to the applicant. It is in no other response and in no export.
import type { AdminDb, Statement } from '../admin/db';

export type ApplicationStatus = 'pending' | 'approved' | 'rejected';
export const DECISIONS = ['approve', 'reject', 'revoke'] as const;
export type Decision = (typeof DECISIONS)[number];

export interface ApplyInput { saceNumber?: unknown; schoolName?: unknown; province?: unknown; subjectsNote?: unknown }

export const PROVINCES = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'] as const;

const clip = (v: unknown, n: number): string => (typeof v === 'string' ? v.replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, n) : '');
/** SACE numbers are digits, sometimes with a dash or space: keep it loose (5 to 20 letters, digits, dashes) and let the admin check it. */
const SACE_RE = /^[A-Za-z0-9][A-Za-z0-9 \-]{3,18}[A-Za-z0-9]$/;
export const maskSace = (s: string): string => (s.length <= 3 ? '***' : `${'*'.repeat(Math.max(s.length - 3, 3))}${s.slice(-3)}`);
const normName = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();

export type ApplyResult = { ok: true; status: 'pending' } | { ok: false; status: number; error: string };

/** A signed-in adult asks for the teacher role. One application per adult; a rejected one can be sent again; an approved teacher cannot apply. */
export async function applyAsTeacher(db: AdminDb, userId: string, input: ApplyInput, now: number): Promise<ApplyResult> {
  const sace = clip(input.saceNumber, 21); // one over the limit, so a too-long number is refused, not silently cut
  const school = clip(input.schoolName, 120);
  const province = clip(input.province, 40);
  const note = clip(input.subjectsNote, 200);
  if (sace.length > 20 || !SACE_RE.test(sace)) return { ok: false, status: 400, error: 'Enter your SACE registration number' };
  if (school.length < 2) return { ok: false, status: 400, error: 'Enter the name of your school' };
  if (province && !(PROVINCES as readonly string[]).includes(province)) return { ok: false, status: 400, error: 'Choose a province from the list' };

  const roles = await db.all<{ role: string }>('SELECT role FROM user_roles WHERE user_id = ?', [userId]);
  if (roles.some((r) => r.role === 'teacher')) return { ok: false, status: 409, error: 'You already have a teacher account' };
  const existing = (await db.all<{ status: string }>('SELECT status FROM teacher_applications WHERE user_id = ?', [userId]))[0];
  if (existing?.status === 'pending') return { ok: false, status: 409, error: 'Your application is waiting for approval' };

  await db.batch([{
    sql: `INSERT INTO teacher_applications (user_id, sace_number, school_name, province, subjects_note, status, submitted_at)
          VALUES (?, ?, ?, ?, ?, 'pending', ?)
          ON CONFLICT(user_id) DO UPDATE SET sace_number = excluded.sace_number, school_name = excluded.school_name, province = excluded.province,
            subjects_note = excluded.subjects_note, status = 'pending', submitted_at = excluded.submitted_at,
            decided_at = NULL, decided_by = NULL, decision_note = NULL, school_id = NULL`,
    params: [userId, sace, school, province || null, note || null, now],
  }]);
  return { ok: true, status: 'pending' };
}

export interface OwnApplication { status: ApplicationStatus; schoolName: string; saceMasked: string; submittedAt: number; decidedAt: number | null; note: string | null }

/** The applicant's own view: status and the admin's note on a rejection. The SACE number is masked. */
export async function getOwnApplication(db: AdminDb, userId: string): Promise<OwnApplication | null> {
  const r = (await db.all<{ status: string; school_name: string; sace_number: string; submitted_at: number; decided_at: number | null; decision_note: string | null }>(
    'SELECT status, school_name, sace_number, submitted_at, decided_at, decision_note FROM teacher_applications WHERE user_id = ?', [userId]))[0];
  if (!r) return null;
  return { status: r.status as ApplicationStatus, schoolName: r.school_name, saceMasked: maskSace(r.sace_number), submittedAt: Number(r.submitted_at), decidedAt: r.decided_at == null ? null : Number(r.decided_at), note: r.status === 'rejected' ? r.decision_note : null };
}

export interface AdminApplication {
  userId: string; email: string; saceNumber: string; schoolName: string; province: string | null; subjectsNote: string | null; schoolId: string | null;
  status: ApplicationStatus; submittedAt: number; decidedAt: number | null; decidedBy: string | null; note: string | null;
}

/** For /admin/teachers only (it shows the SACE number). Pending first (oldest first), then the others, newest decision first. */
export async function listApplications(db: AdminDb, status?: ApplicationStatus): Promise<AdminApplication[]> {
  const rows = await db.all<{
    user_id: string; email: string | null; sace_number: string; school_name: string; province: string | null; subjects_note: string | null; school_id: string | null;
    status: string; submitted_at: number; decided_at: number | null; decided_by: string | null; decision_note: string | null;
  }>(
    `SELECT a.user_id, u.email, a.sace_number, a.school_name, a.province, a.subjects_note, a.school_id, a.status, a.submitted_at, a.decided_at, a.decided_by, a.decision_note
     FROM teacher_applications a LEFT JOIN users u ON u.id = a.user_id
     ${status ? 'WHERE a.status = ?' : ''}
     ORDER BY CASE a.status WHEN 'pending' THEN 0 ELSE 1 END, CASE a.status WHEN 'pending' THEN a.submitted_at END ASC, a.decided_at DESC
     LIMIT 200`,
    status ? [status] : [],
  );
  return rows.map((r) => ({
    userId: r.user_id, email: r.email ?? '(deleted)', saceNumber: r.sace_number, schoolName: r.school_name, province: r.province, subjectsNote: r.subjects_note, schoolId: r.school_id,
    status: r.status as ApplicationStatus, submittedAt: Number(r.submitted_at), decidedAt: r.decided_at == null ? null : Number(r.decided_at), decidedBy: r.decided_by, note: r.decision_note,
  }));
}

export interface DecideInput { decision?: unknown; note?: unknown; schoolId?: unknown }
export type DecideResult = { ok: true; status: ApplicationStatus; schoolId: string | null } | { ok: false; status: number; error: string };

const isUuid = (v: unknown): v is string => typeof v === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);

/**
 * The admin decides. approve: the application becomes approved, the school is linked (an existing school picked by the admin, else one with the same
 * name and province, else a new one) and the teacher role is granted, all in ONE batch. reject: status rejected with an optional note for the applicant.
 * revoke: an approved teacher's role is removed and the application becomes rejected; their classes are archived so nobody keeps seeing learners.
 */
export async function decideApplication(db: AdminDb, userId: string, input: DecideInput, adminEmail: string, now: number, newId: () => string = () => crypto.randomUUID()): Promise<DecideResult> {
  if (!DECISIONS.includes(input.decision as Decision)) return { ok: false, status: 400, error: 'Unknown decision' };
  const decision = input.decision as Decision;
  const note = clip(input.note, 300) || null;
  const app = (await db.all<{ status: string; school_name: string; province: string | null }>('SELECT status, school_name, province FROM teacher_applications WHERE user_id = ?', [userId]))[0];
  if (!app) return { ok: false, status: 404, error: 'Application not found' };
  const user = (await db.all<{ id: string }>('SELECT id FROM users WHERE id = ?', [userId]))[0];
  if (!user) return { ok: false, status: 404, error: 'Application not found' };

  if (decision === 'approve') {
    if (app.status !== 'pending') return { ok: false, status: 409, error: 'Only a pending application can be approved' };
    let schoolId: string | null = null;
    const stmts: Statement[] = [];
    if (input.schoolId !== undefined && input.schoolId !== null && input.schoolId !== '') {
      if (!isUuid(input.schoolId)) return { ok: false, status: 400, error: 'Unknown school' };
      const s = (await db.all<{ id: string }>('SELECT id FROM schools WHERE id = ?', [input.schoolId]))[0];
      if (!s) return { ok: false, status: 400, error: 'Unknown school' };
      schoolId = s.id;
    } else {
      const same = (await db.all<{ id: string; name: string; province: string | null }>('SELECT id, name, province FROM schools WHERE lower(name) = ? LIMIT 20', [normName(app.school_name)]))
        .find((s) => (s.province ?? '') === (app.province ?? ''));
      if (same) schoolId = same.id;
      else {
        schoolId = newId();
        stmts.push({ sql: "INSERT INTO schools (id, name, province, created_at, created_by) VALUES (?, ?, ?, ?, 'admin')", params: [schoolId, app.school_name.replace(/\s+/g, ' ').trim(), app.province, now] });
      }
    }
    stmts.push(
      { sql: "UPDATE teacher_applications SET status = 'approved', school_id = ?, decided_at = ?, decided_by = ?, decision_note = ? WHERE user_id = ? AND status = 'pending'", params: [schoolId, now, adminEmail, note, userId] },
      { sql: "INSERT OR IGNORE INTO user_roles (user_id, role, granted_by, granted_at) VALUES (?, 'teacher', 'admin', ?)", params: [userId, now] },
    );
    await db.batch(stmts);
    return { ok: true, status: 'approved', schoolId };
  }

  if (decision === 'reject') {
    if (app.status !== 'pending') return { ok: false, status: 409, error: 'Only a pending application can be rejected' };
    await db.batch([{ sql: "UPDATE teacher_applications SET status = 'rejected', decided_at = ?, decided_by = ?, decision_note = ? WHERE user_id = ? AND status = 'pending'", params: [now, adminEmail, note, userId] }]);
    return { ok: true, status: 'rejected', schoolId: null };
  }

  // revoke
  if (app.status !== 'approved') return { ok: false, status: 409, error: 'Only an approved teacher can be revoked' };
  await db.batch([
    { sql: "UPDATE teacher_applications SET status = 'rejected', decided_at = ?, decided_by = ?, decision_note = ? WHERE user_id = ? AND status = 'approved'", params: [now, adminEmail, note, userId] },
    { sql: "DELETE FROM user_roles WHERE user_id = ? AND role = 'teacher'", params: [userId] },
    { sql: "UPDATE classes SET status = 'archived', archived_at = ? WHERE teacher_user_id = ? AND status = 'active'", params: [now, userId] },
  ]);
  return { ok: true, status: 'rejected', schoolId: null };
}
