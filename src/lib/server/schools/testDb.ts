// Test helper: migrations 0013 (adult accounts), 0016 (schools) and 0021 (school admins) over node:sqlite, behind the AdminDb interface the code uses on D1.
import fs from 'node:fs';
import { openAuthDb } from '../adultAuth/testDb';

export const NOW = 1_800_000_000_000;

export async function openSchoolsDb() {
  const a = await openAuthDb();
  if (!a) return null;
  // learners (0002, without its item_cache statements), the review schedule (0006), runs and the progress cache (0014), then schools
  const m2 = fs.readFileSync('migrations/0002_students_results_gamification.sql', 'utf8').replace(/ALTER TABLE item_cache[^;]*;/g, '').replace(/CREATE INDEX IF NOT EXISTS idx_item_cache_task_section[^;]*;/g, '');
  a.raw.exec(m2);
  for (const f of ['0005_attempts_qkey.sql', '0006_review_items.sql', '0014_progress.sql', '0016_schools.sql', '0021_school_admins.sql']) a.raw.exec(fs.readFileSync(`migrations/${f}`, 'utf8'));
  return a;
}
export type SchoolsTestDb = NonNullable<Awaited<ReturnType<typeof openSchoolsDb>>>;

let n = 0;
const uuid = () => `00000000-0000-4000-8000-${String(++n).padStart(12, '0')}`;
export const newTestId = uuid;

export function addUser(t: SchoolsTestDb, email: string, roles: string[] = ['parent']): string {
  const id = uuid();
  t.raw.prepare('INSERT INTO users (id, email, created_at) VALUES (?, ?, ?)').run(id, email, NOW - 1000);
  for (const r of roles) t.raw.prepare("INSERT INTO user_roles (user_id, role, granted_by, granted_at) VALUES (?, ?, 'self', ?)").run(id, r, NOW - 1000);
  return id;
}

let sn = 0;
/** A learner. `real` is the real name, which a teacher must never see. */
export function addStudent(t: SchoolsTestDb, o: { id?: string; nickname: string; real?: string; grade?: number }): string {
  const id = o.id ?? `stu-${++sn}`;
  t.raw.prepare("INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES (?, ?, 'h', 's', ?, ?, ?, 1, 1)").run(id, `CODE-${id}`, o.nickname, o.real ?? `Real ${o.nickname}`, o.grade ?? 6);
  return id;
}

/** An approved teacher with a school: the state createClass needs. */
export function addTeacher(t: SchoolsTestDb, email: string, school = 'Bay Primary'): { userId: string; schoolId: string } {
  const userId = addUser(t, email, ['parent', 'teacher']);
  const schoolId = `00000000-0000-4000-9000-${String(++sn).padStart(12, '0')}`;
  t.raw.prepare("INSERT INTO schools (id, name, province, created_at, created_by) VALUES (?, ?, 'Western Cape', 1, 'admin')").run(schoolId, school);
  t.raw.prepare("INSERT INTO teacher_applications (user_id, sace_number, school_name, school_id, status, submitted_at, decided_at, decided_by) VALUES (?, '12345678', ?, ?, 'approved', 1, 2, 'admin')").run(userId, school, schoolId);
  return { userId, schoolId };
}
