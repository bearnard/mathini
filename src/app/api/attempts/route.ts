import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { computeXp } from '../../../lib/server/scoring';
import { evaluateBadges, type BadgeStats } from '../../../lib/server/badges';
import { parseTaskSlug } from '../../../lib/server/caps/slug';
import { makeQkey, isQkey } from '../../../lib/shared/qkey';
import { recordReviewAnswer } from '../../../lib/server/review/store';
import { identifyAttempt } from '../../../lib/server/questions/store';
import { verifySession, SESSION_COOKIE_NAME } from '../../../lib/server/session';
import { d1Adapter } from '../../../lib/server/admin/db';
import { runIdForAttempt } from '../../../lib/server/progress/runs';
import { attemptInsertPlans } from '../../../lib/server/progress/attemptPlans';
import { attemptsLimiter } from '../../../lib/server/learnerGuards';

export const dynamic = 'force-dynamic';

interface SubmitBody {
  task: string;
  subject: string;
  itemId?: number;
  qkey?: string;
  /** question_versions.id the learner was shown, when the client knows it (checked against the question server-side). */
  questionVersionId?: number;
  /** Multiple-choice only: the option text the learner tapped (<= 200 chars). */
  chosen?: string;
  /** The run (ADR 0005) this answer belongs to. Kept only if it is the learner's own open run. */
  runId?: string;
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

    // Security review: a burst limit per learner (a runaway client or script must not be able to spend the shared D1 write budget).
    if (!attemptsLimiter.allow(studentId, Date.now())) {
      return NextResponse.json({ error: 'Too many answers too fast. Slow down for a moment.' }, { status: 429, headers: { 'Retry-After': '30' } });
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

    // Stable question identity (migration 0008). Maps any qkey (original or an edited version's) to the canonical question id,
    // lazily registers a pool item, and finds the version shown. If the tables are not there yet or anything fails, the attempt
    // is stored exactly as before (client qkey, no version).
    const now = Date.now();
    let questionVersionId: number | null = null;
    try {
      const ident = await identifyAttempt(db, {
        task,
        qkey,
        itemId: itemId || null,
        clientVersionId: Number.isInteger(body.questionVersionId) ? (body.questionVersionId as number) : null,
        now,
      });
      qkey = ident.qkey;
      questionVersionId = ident.versionId;
    } catch (e) {
      console.error('Question identity lookup failed:', e);
    }

    // Insert attempt. question_version_id (0008) and chosen (0010) are only written when there is a value, and if a column does
    // not exist yet (migration not applied) the plain insert below still stores the attempt: an answer is never lost.
    const chosen = typeof body.chosen === 'string' ? body.chosen.trim().slice(0, 200) || null : null;
    const baseCols = ['student_id', 'task', 'item_id', 'section', 'grade', 'subject', 'topic', 'is_correct', 'xp_awarded', 'streak_at', 'created_at', 'qkey'];
    const baseVals: (string | number | null)[] = [studentId, task, itemId || null, section || 'general', parsed.grade, subject, parsed.topic, isCorrect ? 1 : 0, xpAwarded, streak, now, qkey];
    // run_id (0014): only for the learner's own open run; null when the run, the table or the column is missing.
    const runId = await runIdForAttempt(d1Adapter(db as never), studentId, body.runId, now);
    const insert = (c: string[], v: (string | number | null)[]) =>
      db.prepare(`INSERT INTO attempts (${c.join(', ')}) VALUES (${c.map(() => '?').join(', ')})`).bind(...v).run();
    // Fall back in stages (see attemptInsertPlans): the answer is stored even if a newer column does not exist yet.
    const attempts = attemptInsertPlans(baseCols, baseVals, { questionVersionId, chosen, runId });
    for (let i = 0; i < attempts.length; i++) {
      try {
        await insert(attempts[i][0], attempts[i][1]);
        break;
      } catch (e) {
        if (i === attempts.length - 1) throw e;
        console.error('Attempt insert with identity columns failed, retrying with fewer:', e);
      }
    }

    // Spaced review schedule (Grade 6, answers with a qkey). Must never fail the attempt.
    try {
      await recordReviewAnswer(
        {
          all: async (sql, params) => ((await db.prepare(sql).bind(...params).all()).results ?? []) as never,
          run: async (sql, params) => { await db.prepare(sql).bind(...params).run(); },
        },
        { studentId, qkey, task, subject, section: section || 'general', grade: parsed.grade, isCorrect, now },
      );
    } catch (e) {
      console.error('Review schedule update failed:', e);
    }

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
