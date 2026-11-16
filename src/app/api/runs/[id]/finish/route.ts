import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { verifyLiveSession, SESSION_COOKIE_NAME } from '../../../../../lib/server/session';
import { d1Adapter, runLater } from '../../../../../lib/server/admin/db';
import { finishRun } from '../../../../../lib/server/progress/runs';
import { refreshWeeklyPoints } from '../../../../../lib/server/leaderboard/points';
import { refreshForRun } from '../../../../../lib/server/progress/topicProgress';
import { routeLimited } from '../../../../../lib/server/edgeLimitRoute';
import { runFinishLimiter } from '../../../../../lib/server/learnerGuards';

export const dynamic = 'force-dynamic';

/**
 * POST: finishes a run. The server counts the run's attempts itself and computes the score and the duration; the body is ignored, so a client
 * cannot report its own totals. Finishing twice returns the first result. Answers { run }.
 */
export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await ctx.params;
    const { env } = getCloudflareContext();
    const studentId = await verifyLiveSession(d1Adapter(env.DB as never), req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    const limited = await routeLimited(req, 'runs', studentId);
    if (limited) return limited;
    if (!runFinishLimiter.allow(studentId, Date.now())) return NextResponse.json({ error: 'Too many runs too fast' }, { status: 429, headers: { 'Retry-After': '60' } });
    const db = d1Adapter(env.DB as never);
    const now = Date.now();
    const r = await finishRun(db, studentId, id, now);
    if (!r.ok) return NextResponse.json({ error: r.error }, { status: r.status });
    if (!r.alreadyFinished) {
      // ADR 0005 part 2: refresh the topic measures of the tasks this run touched (one read, one batch). The run is already finished: this must never fail it.
      try {
        await refreshForRun(db, studentId, r.tasks, now);
      } catch (e) {
        console.error('Topic progress refresh failed:', e);
      }
    }
    if (!r.alreadyFinished) {
      // a finished mock or exam can earn the "beat your best" bonus, and a topic may have reached Mastered: rebuild this week's points after the response
      const lbDb = d1Adapter(env.DB as never, getCloudflareContext().ctx);
      await runLater(lbDb, () => refreshWeeklyPoints(lbDb, studentId, Date.now()));
    }
    return NextResponse.json({ run: r.run });
  } catch (err) {
    console.error('Run finish error:', err);
    return NextResponse.json({ error: 'Unavailable' }, { status: 503 });
  }
}
