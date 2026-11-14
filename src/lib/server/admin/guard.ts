import { getCloudflareContext } from '@opennextjs/cloudflare';
import { createJwksCache, fetchAccessJwks, parseAccessConfig, verifyAccessJwt, type AccessResult, type KeyGetter } from './access';

// Guard for every /api/admin/* handler and the /admin layout (ADR 0002, section 2).
// Cloudflare Access already sits in front of these paths; this is defence in depth.

export const ACCESS_HEADER = 'cf-access-jwt-assertion';

interface AccessEnv {
  ACCESS_TEAM_DOMAIN?: string;
  ACCESS_AUD?: string;
  ADMIN_EMAILS?: string;
}

const sharedKeyGetter: KeyGetter = createJwksCache(fetchAccessJwks);

/**
 * LOCAL DEVELOPMENT ONLY. True only when NODE_ENV is 'development' AND
 * ADMIN_DEV_BYPASS is '1'. In a production build Next.js inlines NODE_ENV as
 * 'production', so this whole expression (including the ADMIN_DEV_BYPASS read)
 * is compiled away; scripts/check-no-admin-bypass.mjs verifies that on the
 * built bundle. It is evaluated per call, never cached at import time.
 */
export function devBypassEnabled(): boolean {
  return process.env.NODE_ENV === 'development' && process.env.ADMIN_DEV_BYPASS === '1';
}

export interface AuthorizeDeps {
  env?: AccessEnv | null;
  getKey?: KeyGetter;
  now?: number;
  devBypass?: boolean;
}

function readEnv(): AccessEnv | null {
  try {
    return getCloudflareContext().env as unknown as AccessEnv;
  } catch {
    return null;
  }
}

/** Decides whether a request is from an allowed admin. `get` reads a request header (case-insensitive). */
export async function authorizeRequest(get: (name: string) => string | null, deps: AuthorizeDeps = {}): Promise<AccessResult> {
  try {
    if (deps.devBypass ?? devBypassEnabled()) return { ok: true, email: 'dev@localhost' };
    const env = deps.env === undefined ? readEnv() : deps.env;
    const config = parseAccessConfig({
      ACCESS_TEAM_DOMAIN: env?.ACCESS_TEAM_DOMAIN,
      ACCESS_AUD: env?.ACCESS_AUD,
      ADMIN_EMAILS: env?.ADMIN_EMAILS,
    });
    return await verifyAccessJwt(get(ACCESS_HEADER), config, deps.getKey ?? sharedKeyGetter, deps.now ?? Date.now());
  } catch {
    return { ok: false, reason: 'error' };
  }
}

export function forbidden(): Response {
  return new Response(JSON.stringify({ error: 'Forbidden' }), {
    status: 403,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

/**
 * Call at the top of every /api/admin/* handler:
 *   const denied = await requireAdmin(req); if (denied) return denied;
 * Returns a 403 Response to send, or null when the caller is an allowed admin.
 * (A test fails the build if an admin route file does not use this.)
 */
export async function requireAdmin(req: Request, deps: AuthorizeDeps = {}): Promise<Response | null> {
  const r = await authorizeRequest((n) => req.headers.get(n), deps);
  return r.ok ? null : forbidden();
}
