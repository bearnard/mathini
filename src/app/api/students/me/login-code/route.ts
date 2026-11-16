import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter } from '../../../../../lib/server/admin/db';
import { ownLoginCode } from '../../../../../lib/server/loginCode';
import { SESSION_COOKIE_NAME } from '../../../../../lib/server/session';

export const dynamic = 'force-dynamic';

/** GET: the signed-in learner's own login code (not the PIN). 401 when not signed in. Never cached. */
export async function GET(req: NextRequest) {
  try {
    const { env } = getCloudflareContext();
    const r = await ownLoginCode(d1Adapter(env.DB as never), req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    const headers = { 'Cache-Control': 'no-store' };
    return r.ok ? NextResponse.json({ loginCode: r.loginCode }, { headers }) : NextResponse.json({ error: r.status === 401 ? 'Not authenticated' : 'Not found' }, { status: r.status, headers });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: { 'Cache-Control': 'no-store' } });
  }
}
