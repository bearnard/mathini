// The signed-in learner's own login code, so they can write it down again (it used to be shown once at sign-up and never again). NEVER the PIN: the PIN is
// stored only as a salted hash, and the app cannot show it. Only the learner whose session this is can read it; the answer is never cached.
import type { AdminDb } from './admin/db';
import { verifyLiveSession } from './session';

export type LoginCodeResult = { ok: true; loginCode: string } | { ok: false; status: 401 | 404 };

export async function ownLoginCode(db: AdminDb, cookie: string | undefined, secret: string): Promise<LoginCodeResult> {
  const id = await verifyLiveSession(db, cookie, secret);
  if (!id) return { ok: false, status: 401 };
  const row = (await db.all<{ login_code: string }>('SELECT login_code FROM students WHERE id = ?', [id]))[0];
  return row ? { ok: true, loginCode: row.login_code } : { ok: false, status: 404 };
}
