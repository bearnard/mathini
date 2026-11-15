// Test helper: the real migrations (through 0011 via the questions helper, plus 0004 consent columns, 0013 adult accounts and 0014 parents) over node:sqlite,
// with learners and parents to work with.
import fs from 'node:fs';
import { adminDbOf, openQuestionsDb } from '../questions/testQuestionsDb';
import { hashPin } from '../identity';
import { signIn } from '../adultAuth/magicLink';
import { createSession } from '../adultAuth/sessions';

export const NOW = 1_800_000_000_000;
export const SECRET = 'test-session-secret';

export async function openParentsDb() {
  const t = await openQuestionsDb();
  if (!t) return null;
  for (const m of ['0004_parent_consent.sql', '0013_adult_auth.sql', '0014_parents.sql']) t.raw.exec(fs.readFileSync(`migrations/${m}`, 'utf8'));
  return { t, raw: t.raw, db: adminDbOf(t) };
}
export type ParentsTestDb = NonNullable<Awaited<ReturnType<typeof openParentsDb>>>;

/** A learner with a login code and PIN, as the sign-up route creates one. */
export async function addStudent(x: ParentsTestDb, id: string, code: string, pin: string, over: { consent?: number | null; version?: string | null; name?: string; grade?: number } = {}) {
  const { hash, salt } = await hashPin(pin);
  x.raw.prepare('INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, avatar, real_name, school, age, grade, created_at, last_seen_at, parent_consent_at, consent_version) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)')
    .run(id, code, hash, salt, over.name ?? `Nick ${id}`, '/avatars/avatar-1.webp', 'Real Name Secret', 'Secret School', 11, over.grade ?? 6, NOW - 1_000_000, NOW - 5_000, over.consent ?? null, over.version ?? null);
}

/** A signed-in adult: returns the cookie header to send. */
export async function addAdult(x: ParentsTestDb, email: string, roles: string[] = ['parent']) {
  const s = await signIn(x.db, email, NOW);
  x.raw.prepare('DELETE FROM user_roles WHERE user_id = ?').run(s.userId);
  for (const r of roles) x.raw.prepare("INSERT INTO user_roles (user_id, role, granted_by, granted_at) VALUES (?, ?, 'test', ?)").run(s.userId, r, NOW);
  const sess = await createSession(x.db, s.userId, NOW);
  return { userId: s.userId, cookie: `pp_adult=${sess.token}` };
}
