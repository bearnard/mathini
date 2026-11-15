// Edge rate limiting with Cloudflare's Workers Rate Limiting binding (wrangler.jsonc `ratelimits`). The counters live at the edge and are shared by
// every isolate in a Cloudflare location, which the in-memory limiters are not. They are APPROXIMATE (updated in the background) and PER LOCATION:
// a burst guard against runaway clients and scripts, not an exact quota. The durable D1 counters (logins, sign-ups, magic links) stay as they are.
//
// Keys: a learner id when there is a session; otherwise a keyed hash of the client IP (HMAC with SESSION_SECRET), so a raw IP is never given to the
// binding, logged or stored, and the hash cannot be reversed by trying every IPv4 address. The route name is part of the key, so one busy route
// cannot use up another's budget.
// FAILS OPEN: no binding (dev, tests, a deployment that has not got it yet), a binding that throws, or an unknown client all mean "allow".
// This file imports NOTHING on purpose: the teacher-review routes may use it (see teacherReview/guard.test.ts) without reaching learner or admin code.

export interface RateLimitBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

/** The two bindings in wrangler.jsonc, plus the secret used to hash IPs. All optional: a missing one means "do not limit". */
export interface EdgeLimitEnv {
  EDGE_PER_IP?: RateLimitBinding;
  EDGE_PER_LEARNER?: RateLimitBinding;
  SESSION_SECRET?: string;
}

/** Friendly, and never blames the learner. */
export const EDGE_LIMITED_MESSAGE = 'You are going a little fast. Please wait a few seconds and try again.';
export const EDGE_RETRY_AFTER_SECONDS = 10;

/** The named routes that are limited (part of every key). */
export const EDGE_ROUTES = ['attempts', 'students', 'session', 'auth-request', 'runs', 'teacher-review', 'demo'] as const;
export type EdgeRoute = (typeof EDGE_ROUTES)[number];

/** The client address Cloudflare saw, or 'unknown'. */
export const ipOf = (req: Request): string =>
  req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

const hex = (buf: ArrayBuffer): string => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

/** 32 hex characters: HMAC-SHA256 of the IP with the secret (or plain SHA-256 when there is no secret, as in tests). Never the address itself. */
export async function hashClient(ip: string, secret?: string): Promise<string> {
  const data = new TextEncoder().encode(ip);
  if (secret) {
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    return hex(await crypto.subtle.sign('HMAC', key, data)).slice(0, 32);
  }
  return hex(await crypto.subtle.digest('SHA-256', data)).slice(0, 32);
}

export interface Who {
  /** The signed-in learner, when the route knows one. */
  learnerId?: string | null;
  /** The client address; used only when there is no learner. */
  ip: string;
}

/** The key the binding sees. Exposed for tests: it must never contain the raw address. */
export async function edgeKey(route: EdgeRoute, who: Who, secret?: string): Promise<string> {
  if (who.learnerId) return `l:${route}:${who.learnerId}`;
  return `ip:${route}:${await hashClient(who.ip, secret)}`;
}

/** True when the call may go ahead. A learner is counted per learner (a class behind one school IP must not share a budget); anyone else per IP. */
export async function edgeAllow(env: EdgeLimitEnv | null | undefined, route: EdgeRoute, who: Who): Promise<boolean> {
  try {
    const binding = who.learnerId ? env?.EDGE_PER_LEARNER : env?.EDGE_PER_IP;
    if (!binding || typeof binding.limit !== 'function') return true;
    // No client address (a local call, a proxy that strips it): one shared bucket would throttle everyone, so do not limit.
    if (!who.learnerId && (!who.ip || who.ip === 'unknown')) return true;
    const { success } = await binding.limit({ key: await edgeKey(route, who, env?.SESSION_SECRET) });
    return success !== false;
  } catch {
    return true;
  }
}

/** The 429 answer: friendly message, Retry-After, never cached. */
export function limitedResponse(): Response {
  return new Response(JSON.stringify({ error: EDGE_LIMITED_MESSAGE }), {
    status: 429,
    headers: { 'Content-Type': 'application/json', 'Retry-After': String(EDGE_RETRY_AFTER_SECONDS), 'Cache-Control': 'no-store' },
  });
}

/** null when the call may go ahead, else the 429 response to return. */
export async function edgeLimited(env: EdgeLimitEnv | null | undefined, req: Request, route: EdgeRoute, learnerId?: string | null): Promise<Response | null> {
  return (await edgeAllow(env, route, { learnerId, ip: ipOf(req) })) ? null : limitedResponse();
}
