import { d1Adapter } from '../../../../../lib/server/admin/db';
import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { pickWeakSections, type SectionAccuracy } from '../../../../../lib/server/revision';
import { verifyLiveSession, SESSION_COOKIE_NAME } from '../../../../../lib/server/session';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const task = req.nextUrl.searchParams.get('task')?.trim();
    if (!task) {
      return NextResponse.json({ error: 'Missing task' }, { status: 400 });
    }

    const { env } = getCloudflareContext();
    const db = env.DB;

    // Read session from cookie
    const studentId = await verifyLiveSession(d1Adapter(env.DB as never), req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Query per-section accuracy for this student + task
    const result = await db
      .prepare(
        `SELECT section,
                SUM(is_correct) AS correct,
                COUNT(*) AS total,
                1.0 * SUM(is_correct) / COUNT(*) AS accuracy
         FROM attempts
         WHERE student_id = ? AND task = ?
         GROUP BY section`,
      )
      .bind(studentId, task)
      .all<{ section: string; correct: number; total: number; accuracy: number }>();

    const sections: SectionAccuracy[] = (result.results ?? []).map((r) => ({
      section: r.section,
      correct: r.correct,
      total: r.total,
      accuracy: r.accuracy,
    }));

    const weak = pickWeakSections(sections);

    return NextResponse.json({ weakSections: weak });
  } catch (err) {
    console.error('Weak sections error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
