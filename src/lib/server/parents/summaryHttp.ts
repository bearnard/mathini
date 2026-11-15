// Handlers for the weekly summary's two switches: the one-click unsubscribe from the email (a signed token, no sign-in needed) and the parent's own
// on/off setting on their children page (signed in, parent role). Written against injected dependencies so tests use a fake clock and database.
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from '../admin/db';
import { readCapped } from '../adultAuth/http';
import { createLimiter, type Limiter } from '../adultAuth/rateLimit';
import { authJson, checkWriteRequest, requireRole } from '../adultAuth/roles';
import { verifyUnsubscribeToken } from './summaryEmail';

export interface SummaryHttpDeps {
  db: AdminDb;
  now: number;
  secret?: string;
  limiter?: Limiter;
  log?: (line: string) => void;
}

const unsubLimiter = createLimiter(20, 10 * 60 * 1000);

export function depsFromEnv(): SummaryHttpDeps {
  const { env } = getCloudflareContext();
  return { db: d1Adapter(env.DB as never), now: Date.now(), secret: (env as unknown as { SESSION_SECRET?: string }).SESSION_SECRET, limiter: unsubLimiter };
}

const BAD_LINK = 'This unsubscribe link is not valid. Sign in and use the switch on your children page instead.';
const ip = (req: Request) => req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

export const unsubscribeStatement = (userId: string, now: number) => ({
  sql: 'INSERT INTO summary_prefs (user_id, unsubscribed_at, updated_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET unsubscribed_at = COALESCE(summary_prefs.unsubscribed_at, excluded.unsubscribed_at), updated_at = excluded.updated_at',
  params: [userId, now, now],
});

/**
 * POST, from the unsubscribe page (token in the JSON body) or from a mail client's "unsubscribe" button (RFC 8058 one-click: the token is in the query
 * string and the body is `List-Unsubscribe=One-Click`). There is no GET: a mail scanner that opens the link cannot unsubscribe anyone by accident.
 */
export async function handleUnsubscribe(req: Request, deps: SummaryHttpDeps): Promise<Response> {
  const log = deps.log ?? ((l: string) => console.error(l));
  try {
    if (!deps.secret) return authJson({ error: 'Unavailable' }, 503);
    if (deps.limiter && !deps.limiter.allow(`unsub:${ip(req)}`, deps.now)) return authJson({ error: 'Too many requests. Try again later.' }, 429);
    let token: unknown = new URL(req.url).searchParams.get('token');
    if (!token) {
      const text = await readCapped(req, 2048);
      if (text === null) return authJson({ error: 'request too large' }, 413);
      try {
        token = (JSON.parse(text || '{}') as { token?: unknown }).token;
      } catch {
        token = null;
      }
    }
    const userId = await verifyUnsubscribeToken(token, deps.secret);
    if (!userId) return authJson({ error: BAD_LINK }, 400);
    await deps.db.batch([unsubscribeStatement(userId, deps.now)]);
    return authJson({ ok: true });
  } catch (err) {
    log(`weekly summary: unsubscribe failed: ${err instanceof Error ? err.message : 'unknown'}`);
    return authJson({ error: 'Something went wrong. Try again.' }, 500);
  }
}

/** GET: is the weekly email on for me? */
export async function handleSummaryPrefGet(req: Request, deps: SummaryHttpDeps): Promise<Response> {
  try {
    const g = await requireRole(req, deps.db, ['parent'], deps.now);
    if (!g.ok) return g.response;
    const row = (await deps.db.all<{ unsubscribed_at: number | null }>('SELECT unsubscribed_at FROM summary_prefs WHERE user_id = ?', [g.session.user.id]))[0];
    return authJson({ subscribed: !row || row.unsubscribed_at == null });
  } catch {
    return authJson({ error: 'Something went wrong. Try again.' }, 500);
  }
}

/** POST { subscribed: boolean }: switch the weekly email on or off. */
export async function handleSummaryPrefSet(req: Request, deps: SummaryHttpDeps): Promise<Response> {
  const bad = checkWriteRequest(req, 'parent-summary');
  if (bad) return authJson({ error: bad }, 403);
  try {
    const g = await requireRole(req, deps.db, ['parent'], deps.now);
    if (!g.ok) return g.response;
    const text = await readCapped(req, 1024);
    let subscribed: unknown;
    try {
      subscribed = (JSON.parse(text || '{}') as { subscribed?: unknown }).subscribed;
    } catch {
      subscribed = undefined;
    }
    if (typeof subscribed !== 'boolean') return authJson({ error: 'invalid request' }, 400);
    const id = g.session.user.id;
    await deps.db.batch([
      subscribed
        ? { sql: 'INSERT INTO summary_prefs (user_id, unsubscribed_at, updated_at) VALUES (?, NULL, ?) ON CONFLICT(user_id) DO UPDATE SET unsubscribed_at = NULL, updated_at = excluded.updated_at', params: [id, deps.now] }
        : unsubscribeStatement(id, deps.now),
    ]);
    return authJson({ ok: true, subscribed });
  } catch {
    return authJson({ error: 'Something went wrong. Try again.' }, 500);
  }
}
