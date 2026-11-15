// PIN reset by a linked parent (ADR 0003 section 2: "lost code = lost progress" ends here). The new PIN is made on the server, shown to the
// parent ONCE, and stored only as a salted PBKDF2 hash. Limited to 3 resets a day per child and 5 a day per parent.
import type { AdminDb } from '../admin/db';
import { allowDurable } from '../adultAuth/rateLimit';
import { generatePin, hashPin } from '../identity';

export const DAY_MS = 86_400_000;
export const RESETS_PER_CHILD_PER_DAY = 3;
export const RESETS_PER_PARENT_PER_DAY = 5;

export async function resetChildPin(db: AdminDb, userId: string, studentId: string, now: number): Promise<{ ok: true; pin: string } | { ok: false; error: string }> {
  if (!(await allowDurable(db, `pinreset:child:${studentId}`, RESETS_PER_CHILD_PER_DAY, DAY_MS, now))) return { ok: false, error: 'This PIN was reset too many times today. Try again tomorrow.' };
  if (!(await allowDurable(db, `pinreset:user:${userId}`, RESETS_PER_PARENT_PER_DAY, DAY_MS, now))) return { ok: false, error: 'Too many PIN resets today. Try again tomorrow.' };
  const pin = generatePin();
  const { hash, salt } = await hashPin(pin);
  const log = { sql: 'INSERT INTO pin_resets (student_id, user_id, created_at) VALUES (?, ?, ?)', params: [studentId, userId, now] };
  try {
    // The new PIN also bumps the learner's session version: every device that was already signed in is signed out (migration 0019).
    await db.batch([{ sql: 'UPDATE students SET pin_hash = ?, pin_salt = ?, session_version = session_version + 1 WHERE id = ?', params: [hash, salt, studentId] }, log]);
  } catch {
    // 0019 not applied yet: the PIN still changes, the other devices just stay signed in until it is.
    await db.batch([{ sql: 'UPDATE students SET pin_hash = ?, pin_salt = ? WHERE id = ?', params: [hash, salt, studentId] }, log]);
  }
  return { ok: true, pin };
}
