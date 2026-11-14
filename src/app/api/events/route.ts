import { NextRequest } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { handleEvents } from '../../../lib/server/events/handler';
import { createRateLimiter } from '../../../lib/server/events/ratelimit';
import { verifySession, SESSION_COOKIE_NAME } from '../../../lib/server/session';

export const dynamic = 'force-dynamic';

// Soft per-device limit: 300 events per hour (in memory, per isolate).
const rateLimiter = createRateLimiter(300, 60 * 60 * 1000);

/**
 * Usage events for the admin console (ADR 0002). Always answers 204: a failure
 * here must never break the app. All identity and location fields are set on
 * the server (see lib/server/events/handler.ts).
 */
export async function POST(req: NextRequest) {
  try {
    const { env, cf, ctx } = getCloudflareContext();
    const body = await req.text();
    await handleEvents(
      {
        contentLength: req.headers.get('content-length'),
        body,
        userAgent: req.headers.get('user-agent'),
        sessionCookie: req.cookies.get(SESSION_COOKIE_NAME)?.value,
      },
      {
        db: env.DB as never,
        cf: cf as never,
        now: Date.now(),
        verifySession: (token) => verifySession(token, env.SESSION_SECRET),
        rateLimiter,
        waitUntil: ctx?.waitUntil ? (p) => ctx.waitUntil(p) : undefined,
      },
    );
  } catch {
    // Swallowed on purpose.
  }
  return new Response(null, { status: 204 });
}
