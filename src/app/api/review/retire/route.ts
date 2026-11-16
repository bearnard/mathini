import { d1Adapter } from '../../../../lib/server/admin/db';
import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { verifyLiveSession, SESSION_COOKIE_NAME } from '../../../../lib/server/session';
import { isQkey } from '../../../../lib/shared/qkey';

export const dynamic = 'force-dynamic';

/** Retires scheduled questions the client could not find any more (reworded or removed), so they stop coming back. */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as { qkeys?: unknown } | null;
    const qkeys = Array.isArray(body?.qkeys) ? body!.qkeys.filter(isQkey).slice(0, 50) : [];
    if (qkeys.length === 0) return NextResponse.json({ error: 'Invalid request' }, { status: 400 });

    const { env } = getCloudflareContext();
    const studentId = await verifyLiveSession(d1Adapter(env.DB as never), req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    const now = Date.now();
    // Retiring a card counts as "remembered for good" in the learner's progress, so the browser cannot retire a card it wants gone: only a card whose
    // question no longer exists (reworded or removed) can be retired here. A card whose question is still active keeps coming back until it is really learned.
    const marks = qkeys.map(() => '?').join(',');
    const live = new Set(((await env.DB.prepare(`SELECT DISTINCT v.qkey AS k FROM question_versions v JOIN questions q ON q.id = v.question_id WHERE q.status = 'active' AND v.qkey IN (${marks})`).bind(...qkeys).all<{ k: string }>()).results ?? []).map((r) => r.k));
    const stale = qkeys.filter((k) => !live.has(k));
    if (stale.length === 0) return NextResponse.json({ ok: true, retired: 0 });
    await env.DB.batch(
      stale.map((k) => env.DB.prepare('UPDATE review_items SET retired_at = ?, updated_at = ? WHERE student_id = ? AND qkey = ? AND retired_at IS NULL').bind(now, now, studentId, k)),
    );
    return NextResponse.json({ ok: true, retired: stale.length });
  } catch (err) {
    console.error('Review retire error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
