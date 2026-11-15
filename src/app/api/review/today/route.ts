import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { verifySession, SESSION_COOKIE_NAME } from '../../../../lib/server/session';
import { pickDue, type DueRow } from '../../../../lib/server/review/due';
import { sastDay } from '../../../../lib/server/review/scheduler';
import { REVIEW_GRADE } from '../../../../lib/server/review/store';
import { makeQkey } from '../../../../lib/shared/qkey';
import { resolveFromD1 } from '../../../../lib/server/serving/review';

export const dynamic = 'force-dynamic';

interface PoolRow { id: number; task: string; prompt: string; options: string; answer: string; explanation: string; section: string }

/**
 * Today's spaced review for the signed-in Grade 6 learner.
 * Returns how many questions are due, a mixed-topic list of candidates, and the question text for those that
 * live in the D1 pool. Curated-bank questions are resolved in the browser from the lazily loaded topic modules.
 */
export async function GET(req: NextRequest) {
  try {
    const { env } = getCloudflareContext();
    const db = env.DB;
    const studentId = await verifySession(req.cookies.get(SESSION_COOKIE_NAME)?.value, env.SESSION_SECRET);
    if (!studentId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    const student = await db.prepare('SELECT grade FROM students WHERE id = ?').bind(studentId).first<{ grade: number }>();
    if (!student || student.grade !== REVIEW_GRADE) return NextResponse.json({ dueCount: 0, candidates: [], pool: {} });

    const today = sastDay(Date.now());
    const res = await db
      .prepare(
        `SELECT qkey, task, subject, section, due_day FROM review_items
         WHERE student_id = ? AND retired_at IS NULL AND due_day <= ?
           AND NOT EXISTS (SELECT 1 FROM questions q WHERE q.id = review_items.qkey AND q.status = 'retired')
         ORDER BY due_day ASC LIMIT 200`,
      )
      .bind(studentId, today)
      .all<DueRow>();
    const rows = res.results ?? [];
    const candidates = pickDue(rows, today);

    // Resolve pool questions (item_cache is unique on task + prompt, so qkey maps to at most one row).
    // Flag ON for a task: its current approved version from D1 (found by stable id, so an edited question still resolves). Flag OFF: nothing here.
    const pool: Record<string, { id: number; prompt: string; options: string[]; answer: string; explanation: string; section: string }> = await resolveFromD1(db, candidates);
    const tasks = [...new Set(candidates.filter((c) => !pool[c.qkey]).map((c) => c.task))];
    if (tasks.length > 0) {
      const wanted = new Set(candidates.filter((c) => !pool[c.qkey]).map((c) => c.qkey));
      const q = await db
        .prepare(`SELECT id, task, prompt, options, answer, explanation, section FROM item_cache WHERE task IN (${tasks.map(() => '?').join(',')})`)
        .bind(...tasks)
        .all<PoolRow>();
      for (const p of q.results ?? []) {
        const k = makeQkey(p.task, p.prompt);
        if (!wanted.has(k) || pool[k]) continue;
        try {
          const options = JSON.parse(p.options) as string[];
          if (Array.isArray(options)) pool[k] = { id: p.id, prompt: p.prompt, options, answer: p.answer, explanation: p.explanation, section: p.section };
        } catch {
          /* unusable row: the client falls back to the curated bank */
        }
      }
    }

    return NextResponse.json({ dueCount: rows.length, candidates, pool });
  } catch (err) {
    console.error('Review today error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
