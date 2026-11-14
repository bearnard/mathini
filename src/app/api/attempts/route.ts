import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { computeXp } from '../../../lib/server/scoring';
import { evaluateBadges, type BadgeStats } from '../../../lib/server/badges';
import { parseTaskSlug } from '../../../lib/server/caps/slug';
import { makeQkey, isQkey } from '../../../lib/shared/qkey';
import { verifySession, SESSION_COOKIE_NAME } from '../../../lib/server/session';

export const dynamic = 'force-dynamic';

interface SubmitBody {
  task: string;
  subject: string;
  itemId?: number;
  qkey?: string;
  section?: string;
  isCorrect: boolean;
  streak: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SubmitBody;
    const { task, subject, itemId, section, isCorrect, streak } = body;
    let qkey: string | null = isQkey(body.qkey) ? body.qkey : null;

    if (!task || !subject || typeof isCorrect !== 'boolean' || typeof streak !== 'number') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const { env } = getCloudflareContext();
    const db = env.DB;

    // Read session from cookie
    const studentId = await verifySession(req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Parse task slug for denormalised fields
    const parsed = parseTaskSlug(task);

    // Compute XP
    const xpAwarded = computeXp(isCorrect, streak);

    // Pool answers without a client qkey: derive it from the item_cache row (task + prompt).
    if (!qkey && itemId) {
      const row = await db
        .prepare('SELECT prompt FROM item_cache WHERE id = ? AND task = ?')
        .bind(itemId, task)
        .first<{ prompt: string }>();
      if (row) qkey = makeQkey(task, row.prompt);
    }

    // Insert attempt
    const now = Date.now();
    await db
      .prepare(
        `INSERT INTO attempts (student_id, task, item_id, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, qkey)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(studentId, task, itemId || null, section || 'general', parsed.grade, subject, parsed.topic, isCorrect ? 1 : 0, xpAwarded, streak, now, qkey)
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
        .bind(studentId, scope, xpAwarded, isCorrect ? 1 : 0, 1, now, xpAwarded, isCorrect ? 1 : 0, now),
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
          const inserted = await db
            .prepare('INSERT OR IGNORE INTO student_badges (student_id, badge_id, earned_at) VALUES (?, ?, ?)')
            .bind(studentId, badgeId, now)
            .run();
          // Only report badges that were actually new, so the unlock modal
          // doesn't re-fire for badges earned on earlier attempts.
          if (inserted.meta.changes > 0) {
            insertedBadges.push(badgeId);
          }
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
