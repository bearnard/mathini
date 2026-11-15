import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { verifyLiveSession, SESSION_COOKIE_NAME } from '../../../lib/server/session';
import { recordConsent } from '../../../lib/server/consent';
import { d1Adapter } from '../../../lib/server/admin/db';
import { parentWithdrew } from '../../../lib/server/parents/consent';

export const dynamic = 'force-dynamic';

/**
 * Records a parent/guardian agreement for the signed-in learner (the one-time
 * prompt for learners who registered before consent existed). The learner is
 * identified by the session cookie only; the body must say `{ "agree": true }`.
 * The timestamp and notice version are set here, never by the client.
 */
export async function POST(req: NextRequest) {
  try {
    const { env } = getCloudflareContext();
    const studentId = await verifyLiveSession(d1Adapter(env.DB as never), req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const body = (await req.json().catch(() => null)) as { agree?: unknown } | null;
    if (!body || body.agree !== true) {
      return NextResponse.json({ error: 'Agreement required' }, { status: 400 });
    }
    // ADR 0003 section 7: once a parent has withdrawn consent, the learner's own tick cannot switch it back on.
    if (await parentWithdrew(d1Adapter(env.DB as never), studentId)) {
      return NextResponse.json({ error: 'A parent has turned consent off. Ask them to switch it back on.' }, { status: 403 });
    }
    await recordConsent(env.DB as never, studentId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Consent error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
