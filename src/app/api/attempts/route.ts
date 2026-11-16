import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { computeXp } from '../../../lib/server/scoring';
import { evaluateBadges, type BadgeStats } from '../../../lib/server/badges';
import { parseTaskSlug } from '../../../lib/server/caps/slug';
import { makeQkey, isQkey } from '../../../lib/shared/qkey';
import { recordReviewAnswer } from '../../../lib/server/review/store';
import { identifyAttempt } from '../../../lib/server/questions/store';
import { verifyLiveSession, SESSION_COOKIE_NAME } from '../../../lib/server/session';
import { d1Adapter } from '../../../lib/server/admin/db';
import { creditDecision, feedsReview } from '../../../lib/server/attemptTrust';
import { creditExercise, type ExerciseResult } from '../../../lib/server/exerciseChallenge';
import { attemptInsertPlans } from '../../../lib/server/progress/attemptPlans';
import { routeLimited } from '../../../lib/server/edgeLimitRoute';
import { attemptsLimiter } from '../../../lib/server/learnerGuards';
import { MAX_CHOSEN_LONG, verifiedStreak } from '../../../lib/server/marking';

export const dynamic = 'force-dynamic';

interface SubmitBody {
  task: string;
  subject: string;
  itemId?: number;
  qkey?: string;
  /** question_versions.id the learner was shown, when the client knows it (checked against the question server-side). */
  questionVersionId?: number;
  /** The option the learner tapped (<= 200 chars), or for an order or label item their whole arrangement as text (<= 600 chars). */
  chosen?: string;
  /** A generated Grade 5 exercise: the signed challenge the server issued ({ kind, seed, issuedAt, sig}) and the learner's typed or tapped answer. The server rebuilds the problem and marks it. */
  exercise?: unknown;
  answer?: string;
  /** The run (ADR 0005) this answer belongs to. Kept only if it is the learner's own open run. */
  runId?: string;
  section?: string;
  isCorrect: boolean;
  streak: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SubmitBody;
    const { itemId, isCorrect: clientCorrect, streak: clientStreak } = body;
    let task = body.task;
    let subject = body.subject;
    let section = body.section;
    let qkey: string | null = isQkey(body.qkey) ? body.qkey : null;

    if (!task || !subject || typeof clientCorrect !== 'boolean' || typeof clientStreak !== 'number') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const { env } = getCloudflareContext();
    const db = env.DB;

    // Read session from cookie
    const studentId = await verifyLiveSession(d1Adapter(env.DB as never), req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const limited = await routeLimited(req, 'attempts', studentId);
    if (limited) return limited;

    // Security review: a burst limit per learner (a runaway client or script must not be able to spend the shared D1 write budget).
    if (!attemptsLimiter.allow(studentId, Date.now())) {
      return NextResponse.json({ error: 'Too many answers too fast. Slow down for a moment.' }, { status: 429, headers: { 'Retry-After': '30' } });
    }

    const uncounted = async () => {
      const x = await db.prepare('SELECT xp FROM student_xp WHERE student_id = ? AND scope = ?').bind(studentId, 'overall').first<{ xp: number }>();
      return NextResponse.json({ xpAwarded: 0, isCorrect: false, credited: false, totalXp: x?.xp ?? 0, xpByScope: {}, newBadges: [], weakSections: [] });
    };

    // A generated exercise (Grade 5): the problem came from a challenge this server issued and signed, so the server rebuilds it and marks the answer itself.
    // The task, subject and section are the exercise's own (never the browser's), and the challenge's signature is the question key, so it counts once.
    let exercise: Extract<ExerciseResult, { credited: true }> | null = null;
    if (body.exercise !== undefined) {
      const r = await creditExercise(d1Adapter(db as never), env.SESSION_SECRET, studentId, body.exercise, body.answer, Date.now());
      if (!r.credited) return uncounted();
      exercise = r;
      task = r.task;
      subject = r.subject;
      section = r.section;
    }

    // Parse task slug for denormalised fields
    const parsed = parseTaskSlug(task);

    // Pool answers without a client qkey: derive it from the item_cache row (task + prompt).
    if (exercise) qkey = exercise.qkey;
    if (!exercise && !qkey && itemId) {
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
      const ident = exercise ? { qkey: exercise.qkey, versionId: null } : await identifyAttempt(db, {
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

    const chosen = typeof body.chosen === 'string' ? body.chosen.trim().slice(0, MAX_CHOSEN_LONG) || null : null;

    // The SERVER marks answers and never believes the browser: an answer counts only when the server holds the question and marked it itself
    // (multiple choice, order, label). A written answer the learner marked against a memo, a question the server does not hold, a missing or impossible
    // choice, an answer that does not belong in its run: none of these is stored or earns anything (see attemptTrust.ts). The browser's streak can never be
    // higher than the run of right answers the server has seen.
    const credit = exercise
      ? ({ credited: true, run: null, marking: { isCorrect: exercise.isCorrect, markedBy: 'server', clientCorrect, reason: 'matched', credited: true } } as const)
      : await creditDecision(d1Adapter(db as never), studentId, { versionId: questionVersionId, chosen, clientCorrect, runId: body.runId, task, qkey }, now);
    if (!credit.credited) return uncounted();
    const { marking, run } = credit;
    const isCorrect = marking.isCorrect;
    const streak = await verifiedStreak(d1Adapter(db as never), studentId, isCorrect, clientStreak);
    const xpAwarded = computeXp(isCorrect, streak);

    // Insert attempt. question_version_id (0008), chosen (0010) and marked_by and client_correct (0018) are only written when there is a value, and if a column
    // does not exist yet (migration not applied) the plain insert below still stores the attempt: an answer is never lost.
    const baseCols = ['student_id', 'task', 'item_id', 'section', 'grade', 'subject', 'topic', 'is_correct', 'xp_awarded', 'streak_at', 'created_at', 'qkey'];
    const baseVals: (string | number | null)[] = [studentId, task, itemId || null, section || 'general', parsed.grade, subject, parsed.topic, isCorrect ? 1 : 0, xpAwarded, streak, now, qkey];
    // run_id (0014): only for the learner's own open run; null when the run, the table or the column is missing.
    const runId = run?.id ?? null;
    // An exercise challenge counts once even when the same answer is sent many times at once: the insert itself refuses a second row for it (atomically).
    let repeated = false;
    const insert = async (c: string[], v: (string | number | null)[]) => {
      if (!exercise) return void (await db.prepare(`INSERT INTO attempts (${c.join(', ')}) VALUES (${c.map(() => '?').join(', ')})`).bind(...v).run());
      const res = await db.prepare(`INSERT INTO attempts (${c.join(', ')}) SELECT ${c.map(() => '?').join(', ')} WHERE NOT EXISTS (SELECT 1 FROM attempts WHERE student_id = ? AND qkey = ?)`).bind(...v, studentId, exercise.qkey).run();
      if (res.meta.changes === 0) repeated = true;
    };
    // Fall back in stages (see attemptInsertPlans): the answer is stored even if a newer column does not exist yet.
    const attempts = attemptInsertPlans(baseCols, baseVals, { questionVersionId, chosen, runId, marking: { markedBy: marking.markedBy, clientCorrect: marking.clientCorrect } });
    for (let i = 0; i < attempts.length; i++) {
      try {
        await insert(attempts[i][0], attempts[i][1]);
        break;
      } catch (e) {
        if (i === attempts.length - 1) throw e;
        console.error('Attempt insert with identity columns failed, retrying with fewer:', e);
      }
    }
    if (repeated) return uncounted();

    // Spaced review schedule (Grade 6, answers with a qkey). Must never fail the attempt. A mock test or exam practice does not feed it.
    try {
      if (feedsReview(run)) await recordReviewAnswer(
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
      isCorrect, // the server's verdict (the browser may have claimed otherwise)
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
