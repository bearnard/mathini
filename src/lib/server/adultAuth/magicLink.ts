// Magic-link sign-in (ADR 0003 section 2): email -> a single-use link valid 15 minutes. The token is stored hashed. Requests are rate limited
// per email and per IP, and the answer NEVER reveals whether an email exists or was sent to: a known address, an unknown one, a malformed one
// and one that hit its own limit all get the same reply.
import type { AdminDb } from '../admin/db';
import { generateToken, isWellFormedToken, newId, sha256Hex } from './crypto';
import { normaliseEmail } from './email';
import { MailNotConfiguredError, type Mailer } from './mailer';
import { allowDurable, type Limiter } from './rateLimit';
import { createSession } from './sessions';

export const LINK_TTL_MS = 15 * 60 * 1000;
export const HOUR_MS = 60 * 60 * 1000;
/** Durable limits per hour. The email limit stops mail-bombing one address; the IP limit stops one client trying many addresses. */
export const EMAIL_LIMIT_PER_HOUR = 5;
export const IP_LIMIT_PER_HOUR = 20;

export interface RequestDeps {
  db: AdminDb;
  mailer: Mailer;
  now: number;
  /** The site's own address (never taken from the request's Host header, which a caller controls). */
  siteUrl: string;
  /** Soft in-memory limits, checked first so a flood never reaches the database. */
  ipBurst?: Limiter;
  emailBurst?: Limiter;
  log?: (line: string) => void;
}

export type RequestOutcome = { kind: 'accepted' } | { kind: 'ip_limited' } | { kind: 'not_configured' };

export const verifyUrl = (siteUrl: string, token: string): string => `${siteUrl.replace(/\/+$/, '')}/sign-in/verify#${token}`;

/**
 * Handles a request for a link. `accepted` is returned for every case that is not the caller's own IP limit or a server problem, and the
 * route turns it into the same 200 each time. Only a missing mail configuration is reported (as 503): it does not depend on the address.
 */
export async function requestMagicLink(deps: RequestDeps, input: { email: unknown; ip: string }): Promise<RequestOutcome> {
  const { db, mailer, now } = deps;
  const log = deps.log ?? ((l: string) => console.error(l));
  const ipKey = `ip:${await sha256Hex(input.ip || 'unknown')}`;
  if (deps.ipBurst && !deps.ipBurst.allow(ipKey, now)) return { kind: 'ip_limited' };
  if (!(await allowDurable(db, ipKey, IP_LIMIT_PER_HOUR, HOUR_MS, now))) return { kind: 'ip_limited' };

  const email = normaliseEmail(input.email);
  if (!email) return { kind: 'accepted' };
  const emailKey = `email:${await sha256Hex(email)}`;
  if (deps.emailBurst && !deps.emailBurst.allow(emailKey, now)) return { kind: 'accepted' };
  if (!(await allowDurable(db, emailKey, EMAIL_LIMIT_PER_HOUR, HOUR_MS, now))) return { kind: 'accepted' };

  const token = generateToken();
  await db.batch([{ sql: 'INSERT INTO magic_links (email, token_hash, created_at, expires_at) VALUES (?, ?, ?, ?)', params: [email, await sha256Hex(token), now, now + LINK_TTL_MS] }]);
  const link = verifyUrl(deps.siteUrl, token);
  try {
    await mailer.send({
      to: email,
      subject: 'Your PrepPals sign-in link',
      text: `Open this link to sign in to PrepPals. It works once and expires in 15 minutes.\n\n${link}\n\nIf you did not ask for this, you can ignore this email: nothing happens unless the link is opened.`,
      html: `<p>Open this link to sign in to PrepPals. It works once and expires in 15 minutes.</p><p><a href="${link}">Sign in to PrepPals</a></p><p>If you did not ask for this, you can ignore this email: nothing happens unless the link is opened.</p>`,
    });
  } catch (err) {
    if (err instanceof MailNotConfiguredError) return { kind: 'not_configured' };
    log(`adult sign-in: sending failed: ${err instanceof Error ? err.message : 'unknown'}`); // the message only: never the address or the link
  }
  return { kind: 'accepted' };
}

export type ConsumeResult = { ok: true; email: string } | { ok: false };

/** Uses a link once. Unknown, malformed, used and expired links all give the same `{ ok: false }`. The check and the "used" mark are ONE statement, so a link cannot be used twice. */
export async function consumeMagicLink(db: AdminDb, token: unknown, now: number): Promise<ConsumeResult> {
  if (!isWellFormedToken(token)) return { ok: false };
  const rows = await db.all<{ email: string }>('UPDATE magic_links SET used_at = ? WHERE token_hash = ? AND used_at IS NULL AND expires_at > ? RETURNING email', [now, await sha256Hex(token), now]);
  return rows[0] ? { ok: true, email: rows[0].email } : { ok: false };
}

/** Finds or creates the adult for a verified email (a first sign-in makes them a parent) and starts a session. Returns the cookie token. */
export async function signIn(db: AdminDb, email: string, now: number): Promise<{ userId: string; token: string; expiresAt: number; created: boolean }> {
  const existing = (await db.all<{ id: string }>('SELECT id FROM users WHERE email = ?', [email]))[0];
  let userId = existing?.id;
  let created = false;
  if (!userId) {
    const id = newId();
    await db.batch([
      { sql: 'INSERT OR IGNORE INTO users (id, email, created_at, last_login_at) VALUES (?, ?, ?, ?)', params: [id, email, now, now] },
      // Only for a user with no roles yet: a returning user who had a role taken away does not get it back by signing in.
      { sql: "INSERT OR IGNORE INTO user_roles (user_id, role, granted_by, granted_at) SELECT id, 'parent', 'self', ? FROM users WHERE email = ? AND NOT EXISTS (SELECT 1 FROM user_roles r WHERE r.user_id = users.id)", params: [now, email] },
    ]);
    userId = (await db.all<{ id: string }>('SELECT id FROM users WHERE email = ?', [email]))[0].id;
    created = userId === id;
  } else {
    await db.batch([{ sql: 'UPDATE users SET last_login_at = ? WHERE id = ?', params: [now, userId] }]);
  }
  const s = await createSession(db, userId, now);
  return { userId, token: s.token, expiresAt: s.expiresAt, created };
}
