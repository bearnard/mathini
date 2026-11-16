// Adult sessions (ADR 0003 section 2): a random token in its own cookie (pp_adult, never pp_session), stored only as a SHA-256 hash,
// valid 30 days, revocable. Looked up by hash on every request, so revoking takes effect at once.
import { runLater, type AdminDb } from '../admin/db';
import { generateToken, newId, sha256Hex } from './crypto';
import { ROLES, type AdultSession, type Role } from './types';

export const ADULT_COOKIE = 'pp_adult';
export const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
export const COOKIE_MAX_AGE_S = SESSION_TTL_MS / 1000;
/** last_seen_at is refreshed at most this often, so reading a page is not a database write every time. */
export const SEEN_REFRESH_MS = 24 * 60 * 60 * 1000;

export type { AdultSession, AdultUser } from './types';

/** The Set-Cookie value: HttpOnly (no script can read it), Secure, SameSite=Lax, 30 days, whole site. */
export const sessionCookie = (token: string): string => `${ADULT_COOKIE}=${token}; Path=/; Max-Age=${COOKIE_MAX_AGE_S}; HttpOnly; Secure; SameSite=Lax`;
export const clearedCookie = (): string => `${ADULT_COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`;

/** The pp_adult value from a Cookie header, or ''. */
export function cookieToken(header: string | null | undefined): string {
  if (!header) return '';
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i > 0 && part.slice(0, i).trim() === ADULT_COOKIE) return part.slice(i + 1).trim();
  }
  return '';
}

export async function createSession(db: AdminDb, userId: string, now: number): Promise<{ token: string; expiresAt: number }> {
  const token = generateToken();
  const expiresAt = now + SESSION_TTL_MS;
  await db.batch([{ sql: 'INSERT INTO sessions (id, user_id, token_hash, created_at, expires_at, last_seen_at) VALUES (?, ?, ?, ?, ?, ?)', params: [newId(), userId, await sha256Hex(token), now, expiresAt, now] }]);
  return { token, expiresAt };
}

/** The session for a cookie token, or null when it is unknown, expired or revoked. */
export async function lookupSession(db: AdminDb, token: string, now: number): Promise<AdultSession | null> {
  if (!token || token.length > 128) return null;
  const hash = await sha256Hex(token);
  // ONE round trip: the session, its user and every role in one query (a user with no role still gets one row).
  const rows = await db.all<{ id: string; user_id: string; email: string; last_seen_at: number | null; role: string | null }>(
    `SELECT s.id, s.user_id, u.email, s.last_seen_at, r.role FROM sessions s JOIN users u ON u.id = s.user_id LEFT JOIN user_roles r ON r.user_id = s.user_id
      WHERE s.token_hash = ? AND s.revoked_at IS NULL AND s.expires_at > ? ORDER BY r.role`,
    [hash, now],
  );
  const row = rows[0];
  if (!row) return null;
  const roles = rows.map((r) => r.role).filter((r): r is Role => (ROLES as readonly string[]).includes(r ?? ''));
  if (row.last_seen_at == null || now - Number(row.last_seen_at) >= SEEN_REFRESH_MS) {
    // Housekeeping only: it must not make the visitor wait for another round trip to the database.
    await runLater(db, () => db.batch([{ sql: 'UPDATE sessions SET last_seen_at = ? WHERE id = ?', params: [now, row.id] }]));
  }
  return { sessionId: row.id, user: { id: row.user_id, email: row.email }, roles };
}

/** Revokes the session for this cookie token. Revoking twice keeps the first time. */
export async function revokeSession(db: AdminDb, token: string, now: number): Promise<void> {
  if (!token) return;
  await db.batch([{ sql: 'UPDATE sessions SET revoked_at = ? WHERE token_hash = ? AND revoked_at IS NULL', params: [now, await sha256Hex(token)] }]);
}

/** Signs a user out everywhere (for example after a role is taken away, or on request). */
export async function revokeAllSessions(db: AdminDb, userId: string, now: number): Promise<void> {
  await db.batch([{ sql: 'UPDATE sessions SET revoked_at = ? WHERE user_id = ? AND revoked_at IS NULL', params: [now, userId] }]);
}
