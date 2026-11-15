import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { verifyLiveSession, SESSION_COOKIE_NAME } from '../../../lib/server/session';
import { d1Adapter } from '../../../lib/server/admin/db';
import { buildProgress } from '../../../lib/server/progress/progressApi';

export const dynamic = 'force-dynamic';

/**
 * GET: the signed-in learner's own progress (ADR 0005). The learner is the one in the session cookie; there is no parameter to ask for anyone else.
 * Answers a ProgressResponse (src/lib/shared/progressTypes.ts): every number is computed here, the page only formats it.
 * Private and never cached (it is personal data).
 */
export async function GET(req: NextRequest) {
  const headers = { 'Cache-Control': 'private, no-store' };
  try {
    const { env } = getCloudflareContext();
    const studentId = await verifyLiveSession(d1Adapter(env.DB as never), req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401, headers });
    const body = await buildProgress(d1Adapter(env.DB as never), studentId, Date.now());
    if (!body) return NextResponse.json({ error: 'Not found' }, { status: 404, headers });
    return NextResponse.json(body, { headers });
  } catch (err) {
    console.error('Progress error:', err);
    return NextResponse.json({ error: 'Unavailable' }, { status: 503, headers });
  }
}
