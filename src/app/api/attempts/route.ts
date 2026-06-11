import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { computeXp } from '../../../lib/server/scoring';
import { evaluateBadges, type BadgeStats } from '../../../lib/server/badges';
import { parseTaskSlug } from '../../../lib/server/caps/slug';

export const dynamic = 'force-dynamic';

interface SubmitBody {
  task: string;
  subject: string;
  itemId?: number;
  section?: string;
  isCorrect: boolean;
  streak: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SubmitBody;
    const { task, subject, itemId, section, isCorrect, streak } = body;

    if (!task || !subject || typeof isCorrect !== 'boolean' || typeof streak !== 'number') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Read session from cookie
    const cookie = req.cookies.get('pp_session')?.value;
    if (!cookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const studentId = extractStudentId(cookie);
    if (!studentId) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
    }

    const { env } = getCloudflareContext();
    const db = env.DB;

    // Parse task slug for denormalised fields
    const parsed = parseTaskSlug(task);

    // Compute XP
    const xpAwarded = computeXp(isCorrect, streak);

    // Insert attempt
    const now = Date.now();
    await db
      .prepare(
        `INSERT INTO attempts (student_id, task, item_id, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(studentId, task, itemId || null, section || 'general', parsed.grade, subject, parsed.topic, isCorrect ? 1 : 0, xpAwarded, streak, now)
      .run();

    // Upsert all 4 scope rows in one batch
    const scopes = [
      'overall',
      `grade:${parsed.grade}`,
      `subject:${subject}`,
      `topic:${parsed.topic}`,
    ];

    const batch = scopes.map((scope) =>
      db.prepare(
        `INSERT INTO student_xp (student_id, scope, xp, correct_count, total_count, updated_at)
         VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(student_id, scope) DO UPDATE SET
           xp = xp + ?,
           correct_count = correct_count + ?,
           total_count = total_count + 1,
           updated_at = ?`,
      )
        .bind(studentId, scope, xpAwarded, isCorrect ? 1 : 0, 1, now, xpAwarded, isCorrect ? 1 : 0, 1, now),
    );

    await db.batch(batch);

    // Get current XP totals for badge evaluation
    const xpResult = await db
      .prepare('SELECT xp FROM student_xp WHERE student_id = ? AND scope = ?')
      .bind(studentId, 'overall')
      .first<{ xp: number }>();

    const totalXp = xpResult?.xp ?? 0;

    // Evaluate badges
    const stats: BadgeStats = {
      totalXp,
      streak,
      bestStreak: streak,
      topicCorrect: isCorrect ? 1 : 0,
      topicTotal: 1,
      topicAccuracy: isCorrect ? 1 : 0,
      perfectStreak: isCorrect ? streak : 0,
    };

    const earnedBadges = evaluateBadges(stats);

    // Insert newly earned badges
    const insertedBadges: string[] = [];
    if (earnedBadges.length > 0) {
      for (const badgeId of earnedBadges) {
        try {
          await db
            .prepare('INSERT OR IGNORE INTO student_badges (student_id, badge_id, earned_at) VALUES (?, ?, ?)')
            .bind(studentId, badgeId, now)
            .run();
          insertedBadges.push(badgeId);
        } catch {
          // Ignore duplicate insert errors
        }
      }
    }

    // Get current XP for all scopes
    const allXp = await db
      .prepare('SELECT scope, xp FROM student_xp WHERE student_id = ?')
      .bind(studentId)
      .all<{ scope: string; xp: number }>();

    return NextResponse.json({
      xpAwarded,
      totalXp,
      xpByScope: Object.fromEntries((allXp.results ?? []).map((r) => [r.scope, r.xp])),
      newBadges: insertedBadges,
      weakSections: [], // Populated in the /weak-sections route
    });
  } catch (err) {
    console.error('Attempt submit error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function extractStudentId(cookie: string): string | null {
  const dotIndex = cookie.indexOf('.');
  if (dotIndex === -1) return null;
  return cookie.slice(0, dotIndex);
}
