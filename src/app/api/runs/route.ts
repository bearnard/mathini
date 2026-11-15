import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { verifySession, SESSION_COOKIE_NAME } from '../../../lib/server/session';
import { d1Adapter } from '../../../lib/server/admin/db';
import { startRun } from '../../../lib/server/progress/runs';

export const dynamic = 'force-dynamic';

/**
 * POST: starts a run (ADR 0005). Signed-in learners only; anonymous runs stay on the device and are never sent.
 * Body: { id (uuid made by the client), kind, grade, subject, scopeKey, scopeLabel?, nItems?, startedAt?, clientVersion? }.
 * Answers { run }. Starting twice with the same id returns the same run. Any failure here must never break practice: the client carries on without a run.
 */
export async function POST(req: NextRequest) {
  try {
    const { env } = getCloudflareContext();
    const studentId = await verifySession(req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    let body: Record<string, unknown>;
    try {
      const j = await req.json();
      body = j && typeof j === 'object' ? (j as Record<string, unknown>) : {};
    } catch {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
    const r = await startRun(d1Adapter(env.DB as never), studentId, body as never, Date.now());
    if (!r.ok) return NextResponse.json({ error: r.error }, { status: r.status });
    return NextResponse.json({ run: r.run });
  } catch (err) {
    console.error('Run start error:', err);
    return NextResponse.json({ error: 'Unavailable' }, { status: 503 });
  }
}
