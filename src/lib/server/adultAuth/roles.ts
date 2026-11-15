// Roles and the server-side checks (ADR 0003 sections 1 and 2). Every adult action is checked here, on the server: a hidden button is
// not a permission. The admin (the owner) is not a role here: the admin is Cloudflare Access (ADR 0002).
import type { AdminDb } from '../admin/db';
import { cookieToken, lookupSession } from './sessions';
import { ROLES, type AdultSession, type Role } from './types';

export { ROLES };
export type { Role };

export const hasAnyRole = (s: Pick<AdultSession, 'roles'>, roles: readonly Role[]): boolean => roles.some((r) => s.roles.includes(r));

export const AUTH_ACTION_HEADER = 'x-auth-action';

export function authJson(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers } });
}

/** The signed-in adult for this request, or null. */
export async function authenticate(req: Request, db: AdminDb, now: number): Promise<AdultSession | null> {
  return lookupSession(db, cookieToken(req.headers.get('cookie')), now);
}

export type Gate = { ok: true; session: AdultSession } | { ok: false; response: Response };

/**
 * 401 when nobody is signed in, 403 when the adult lacks every one of `roles` (an empty list means any signed-in adult).
 * The answer never says which roles would have worked.
 */
export async function requireRole(req: Request, db: AdminDb, roles: readonly Role[], now: number): Promise<Gate> {
  const session = await authenticate(req, db, now);
  if (!session) return { ok: false, response: authJson({ error: 'Sign in first' }, 401) };
  if (roles.length > 0 && !hasAnyRole(session, roles)) return { ok: false, response: authJson({ error: 'Not allowed' }, 403) };
  return { ok: true, session };
}

/**
 * Extra checks for state-changing requests (the cookie is SameSite=Lax, and this is a second layer): a custom header naming the action,
 * which a cross-site page cannot set without a CORS preflight, and an Origin that matches this site. Returns an error text, or null.
 */
export function checkWriteRequest(req: Request, action: string): string | null {
  if (req.headers.get(AUTH_ACTION_HEADER) !== action) return 'missing action header';
  const origin = req.headers.get('origin');
  if (!origin) return 'missing origin';
  try {
    if (new URL(origin).host !== new URL(req.url).host) return 'origin mismatch';
  } catch {
    return 'bad origin';
  }
  return null;
}
