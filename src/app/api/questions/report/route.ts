import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { verifySession, SESSION_COOKIE_NAME } from '../../../../lib/server/session';
import { parseReportBody, submitReport } from '../../../../lib/server/questions/reports';

export const dynamic = 'force-dynamic';

/** POST { task, reason, note?, qkey?, itemId?, prompt? } from a signed-in learner. Stores student_id only. */
export async function POST(req: NextRequest) {
  try {
    const { env } = getCloudflareContext();
    const studentId = await verifySession(req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    const text = await req.text();
    if (text.length > 2048) return NextResponse.json({ error: 'Request too large' }, { status: 413 });
    let body: unknown;
    try { body = JSON.parse(text); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
    const parsed = parseReportBody(body);
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });
    const r = await submitReport(env.DB, studentId, parsed.value, Date.now());
    return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: r.error }, { status: r.status });
  } catch (err) {
    console.error('Question report error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
