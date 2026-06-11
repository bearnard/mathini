import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { pickWeakSections, type SectionAccuracy } from '../../../../../lib/server/revision';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const task = req.nextUrl.searchParams.get('task')?.trim();
    if (!task) {
      return NextResponse.json({ error: 'Missing task' }, { status: 400 });
    }

    // Read session from cookie
    const cookie = req.cookies.get('pp_session')?.value;
    if (!cookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const dotIndex = cookie.indexOf('.');
    if (dotIndex === -1) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
    }
    const studentId = cookie.slice(0, dotIndex);

    const { env } = getCloudflareContext();
    const db = env.DB;

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
