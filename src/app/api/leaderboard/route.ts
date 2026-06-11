import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const scope = req.nextUrl.searchParams.get('scope') ?? 'overall';
    const grade = req.nextUrl.searchParams.get('grade');
    const subject = req.nextUrl.searchParams.get('subject');
    const topic = req.nextUrl.searchParams.get('topic');
    const limit = Math.min(parseInt(req.nextUrl.searchParams.get('limit') ?? '50', 10), 100);

    // Resolve scope to a filter
    let whereClause = '1=1';
    const params: (string | number)[] = [];

    if (scope === 'grade' && grade) {
      whereClause = 'scope = ?';
      params.push(`grade:${grade}`);
    } else if (scope === 'subject' && subject) {
      whereClause = 'scope = ?';
      params.push(`subject:${subject}`);
    } else if (scope === 'topic' && topic) {
      whereClause = 'scope = ?';
      params.push(`topic:${topic}`);
    } else {
      // Overall or default
      whereClause = "scope = 'overall'";
    }

    const { env } = getCloudflareContext();
    const db = env.DB;

    const result = await db
      .prepare(
        `SELECT s.display_name, s.avatar, x.xp, x.correct_count, x.total_count
         FROM student_xp x
         JOIN students s ON s.id = x.student_id
         WHERE ${whereClause}
         ORDER BY x.xp DESC
         LIMIT ?`,
      )
      .bind(...params, limit)
      .all<{ display_name: string; avatar: string; xp: number; correct_count: number; total_count: number }>();

    const rows = (result.results ?? []).map((r, idx) => ({
      rank: idx + 1,
      displayName: r.display_name,
      avatar: r.avatar,
      xp: r.xp,
      correctCount: r.correct_count,
      totalCount: r.total_count,
    }));

    return NextResponse.json({ leaderboard: rows });
  } catch (err) {
    console.error('Leaderboard error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
