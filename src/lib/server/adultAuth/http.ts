// The HTTP handlers for adult sign-in (ADR 0003 section 2), written against injected dependencies so the tests run them with a fake clock,
// mailer and database. The Next.js routes are one-liners that call these with depsFromEnv().
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from '../admin/db';
import { SITE_URL } from '../../seo/site';
import { deleteAdultAccount } from './deleteAccount';
import { consumeMagicLink, requestMagicLink, signIn } from './magicLink';
import { normaliseEmail } from './email';
import { isDevelopment, mailerFromEnv, type MailEnv, type Mailer } from './mailer';
import { createLimiter, type Limiter } from './rateLimit';
import { authenticate, authJson, checkWriteRequest } from './roles';
import { clearedCookie, cookieToken, revokeSession, sessionCookie } from './sessions';

export const MAX_BODY_BYTES = 2048;
const TEN_MINUTES = 10 * 60 * 1000;

// Per Worker isolate. They only have to stop a runaway client; the durable limits in magicLink.ts hold across isolates.
const ipBurst = createLimiter(10, TEN_MINUTES);
const emailBurst = createLimiter(3, TEN_MINUTES);
const verifyBurst = createLimiter(30, TEN_MINUTES);

export interface AuthDeps {
  db: AdminDb;
  mailer: Mailer;
  now: number;
  siteUrl: string;
  ipBurst?: Limiter;
  emailBurst?: Limiter;
  verifyBurst?: Limiter;
  log?: (line: string) => void;
}

export function depsFromEnv(): AuthDeps {
  const { env } = getCloudflareContext();
  return { db: d1Adapter(env.DB as never), mailer: mailerFromEnv(env as unknown as MailEnv, isDevelopment()), now: Date.now(), siteUrl: SITE_URL, ipBurst, emailBurst, verifyBurst };
}

/** The client's address as Cloudflare reports it (behind Cloudflare it cannot be spoofed). */
export const clientIp = (req: Request): string => req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

/** The body as text, or null when it is over `max` bytes. Looks at Content-Length first and never buffers more than `max` bytes. */
export async function readCapped(req: Request, max: number): Promise<string | null> {
  const declared = Number(req.headers.get('content-length'));
  if (Number.isFinite(declared) && declared > max) return null;
  if (!req.body) return '';
  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > max) { await reader.cancel().catch(() => undefined); return null; }
    chunks.push(value);
  }
  const all = new Uint8Array(size);
  let at = 0;
  for (const c of chunks) { all.set(c, at); at += c.byteLength; }
  return new TextDecoder().decode(all);
}

type Body = { ok: true; body: Record<string, unknown> } | { ok: false; response: Response };
async function readBody(req: Request): Promise<Body> {
  const text = await readCapped(req, MAX_BODY_BYTES);
  if (text === null) return { ok: false, response: authJson({ error: 'request too large' }, 413) };
  try {
    const v = text ? JSON.parse(text) : {};
    return v && typeof v === 'object' && !Array.isArray(v) ? { ok: true, body: v as Record<string, unknown> } : { ok: false, response: authJson({ error: 'invalid request' }, 400) };
  } catch {
    return { ok: false, response: authJson({ error: 'invalid request' }, 400) };
  }
}

const SENT = { ok: true, message: 'If that address can sign in, a link is on its way. It works once and expires in 15 minutes.' };

/** POST { email }. The same 200 for a known address, an unknown one, a malformed one and one over its own limit. */
export async function handleRequestLink(req: Request, deps: AuthDeps): Promise<Response> {
  const bad = checkWriteRequest(req, 'request');
  if (bad) return authJson({ error: bad }, 403);
  const log = deps.log ?? ((l: string) => console.error(l));
  try {
    const b = await readBody(req);
    if (!b.ok) return b.response;
    const out = await requestMagicLink({ db: deps.db, mailer: deps.mailer, now: deps.now, siteUrl: deps.siteUrl, ipBurst: deps.ipBurst, emailBurst: deps.emailBurst, log }, { email: b.body.email, ip: clientIp(req) });
    if (out.kind === 'ip_limited') return authJson({ error: 'Too many requests. Try again later.' }, 429);
    if (out.kind === 'not_configured') return authJson({ error: 'Email sign-in is not available yet.' }, 503);
    return authJson(SENT);
  } catch (err) {
    log(`adult sign-in: request failed: ${err instanceof Error ? err.message : 'unknown'}`);
    return authJson({ error: 'Something went wrong. Try again.' }, 500);
  }
}

/** POST { token }. Uses the link once, starts a session and sets the pp_adult cookie. */
export async function handleVerify(req: Request, deps: AuthDeps): Promise<Response> {
  const bad = checkWriteRequest(req, 'verify');
  if (bad) return authJson({ error: bad }, 403);
  const log = deps.log ?? ((l: string) => console.error(l));
  try {
    if (deps.verifyBurst && !deps.verifyBurst.allow(`ip:${clientIp(req)}`, deps.now)) return authJson({ error: 'Too many requests. Try again later.' }, 429);
    const b = await readBody(req);
    if (!b.ok) return b.response;
    const used = await consumeMagicLink(deps.db, b.body.token, deps.now);
    if (!used.ok) return authJson({ error: 'This link has expired or has already been used. Ask for a new one.' }, 400);
    const s = await signIn(deps.db, used.email, deps.now);
    const roles = (await deps.db.all<{ role: string }>('SELECT role FROM user_roles WHERE user_id = ? ORDER BY role', [s.userId])).map((r) => r.role);
    return authJson({ ok: true, user: { email: used.email }, roles }, 200, { 'Set-Cookie': sessionCookie(s.token) });
  } catch (err) {
    log(`adult sign-in: verify failed: ${err instanceof Error ? err.message : 'unknown'}`);
    return authJson({ error: 'Something went wrong. Try again.' }, 500);
  }
}

/** POST. Revokes this browser's session and clears the cookie. */
export async function handleLogout(req: Request, deps: AuthDeps): Promise<Response> {
  const bad = checkWriteRequest(req, 'logout');
  if (bad) return authJson({ error: bad }, 403);
  try {
    await revokeSession(deps.db, cookieToken(req.headers.get('cookie')), deps.now);
  } catch {
    // the cookie is cleared either way
  }
  return authJson({ ok: true }, 200, { 'Set-Cookie': clearedCookie() });
}

/** GET. Who is signed in, or null. */
export async function handleMe(req: Request, deps: AuthDeps): Promise<Response> {
  try {
    const s = await authenticate(req, deps.db, deps.now);
    return authJson(s ? { user: { email: s.user.email }, roles: s.roles } : { user: null, roles: [] });
  } catch {
    return authJson({ user: null, roles: [] }, 500);
  }
}

/**
 * POST { confirm: "<your email address>" }. Deletes the signed-in adult's own account (see deleteAccount.ts). Needs the action header and Origin, a signed-in
 * adult, and the address typed exactly: a stolen browser session alone cannot delete the account without knowing it, and a click cannot do it by accident.
 */
export async function handleDeleteAccount(req: Request, deps: AuthDeps): Promise<Response> {
  const bad = checkWriteRequest(req, 'account-delete');
  if (bad) return authJson({ error: bad }, 403);
  const log = deps.log ?? ((l: string) => console.error(l));
  try {
    const session = await authenticate(req, deps.db, deps.now);
    if (!session) return authJson({ error: 'Sign in first' }, 401);
    const b = await readBody(req);
    if (!b.ok) return b.response;
    const typed = normaliseEmail(b.body.confirm);
    if (!typed || typed !== session.user.email) return authJson({ error: 'The confirmation does not match your email address.' }, 400);
    const r = await deleteAdultAccount(deps.db, session.user.id, deps.now);
    if (!r.ok) return authJson({ error: r.error }, r.status);
    return authJson({ ok: true, deleted: r.deleted }, 200, { 'Set-Cookie': clearedCookie() });
  } catch (err) {
    log(`adult sign-in: delete failed: ${err instanceof Error ? err.message : 'unknown'}`);
    return authJson({ error: 'Something went wrong. Nothing was deleted. Try again.' }, 500);
  }
}
