// Registers a freshly generated AI question in questions + question_versions at the moment it is stored in item_cache
// (docs/notes/d1-serving-plan.md; step "registration at insert"). Without this, rows added by the nightly top-up are not
// served from D1 until a learner happens to answer one (the lazy path in ensureQuestionForItem).
//
// Pure statement builders (sql text + bound params), so the same statements run through D1 prepare().bind() in the Worker, through the
// Cloudflare REST API in scripts/seed-questions.ts, and through node:sqlite in the tests. Every statement is idempotent and looks the
// pool row up by its unique (task, prompt), so it does not need the new row's id up front and can safely run again.
import { makeQkey } from '../../shared/qkey';

export interface PoolQuestion {
  task: string;
  section?: string | null;
  prompt: string;
  options: readonly string[];
  answer: string;
  explanation?: string | null;
}

export interface BoundStatement {
  sql: string;
  params: (string | number | null)[];
}

const NOW_MS = "CAST(strftime('%s', 'now') AS INTEGER) * 1000";
const LEGACY = '(SELECT id FROM item_cache WHERE task = ? AND prompt = ?)';

/**
 * Four statements: the question row (only when the pool row exists), its version 1 (only when absent), the pointer to it (only when unset),
 * and, for a question that already existed (an identical curated one), the link to the pool row. `source` is 'ai', author 'ai'.
 */
export function registerAiStatements(q: PoolQuestion): BoundStatement[] {
  const id = makeQkey(q.task, q.prompt);
  const section = q.section || 'general';
  const options = JSON.stringify(q.options);
  return [
    {
      sql: `INSERT OR IGNORE INTO questions (id, task, section, kind, source, status, current_version_id, legacy_item_id, created_at)
            SELECT ?, ?, ?, 'mcq', 'ai', 'active', NULL, ${LEGACY}, ${NOW_MS}
            WHERE EXISTS (SELECT 1 FROM item_cache WHERE task = ? AND prompt = ?)
              AND NOT EXISTS (SELECT 1 FROM questions WHERE legacy_item_id = ${LEGACY})`,
      params: [id, q.task, section, q.task, q.prompt, q.task, q.prompt, q.task, q.prompt],
    },
    {
      sql: `INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, explanation, extra, source_note, author, status, created_at)
            SELECT ?, 1, ?, ?, ?, ?, ?, '{}', NULL, 'ai', 'approved', ${NOW_MS}
            WHERE EXISTS (SELECT 1 FROM questions WHERE id = ?) AND NOT EXISTS (SELECT 1 FROM question_versions WHERE question_id = ? AND version_no = 1)`,
      params: [id, id, q.prompt, options, q.answer, q.explanation ?? '', id, id],
    },
    {
      sql: `UPDATE questions SET current_version_id = (SELECT id FROM question_versions WHERE question_id = ? AND version_no = 1) WHERE id = ? AND current_version_id IS NULL`,
      params: [id, id],
    },
    {
      sql: `UPDATE questions SET legacy_item_id = ${LEGACY} WHERE id = ? AND legacy_item_id IS NULL AND ${LEGACY} IS NOT NULL AND NOT EXISTS (SELECT 1 FROM questions WHERE legacy_item_id = ${LEGACY})`,
      params: [q.task, q.prompt, id, q.task, q.prompt, q.task, q.prompt],
    },
  ];
}

/** Registers a batch of stored pool questions through a D1 binding. Best effort: a failure is returned, never thrown (generation must not break). */
export async function registerAiQuestions(db: D1Database, items: readonly PoolQuestion[]): Promise<{ ok: boolean; registered: number }> {
  if (items.length === 0) return { ok: true, registered: 0 };
  try {
    await db.batch(items.flatMap((it) => registerAiStatements(it)).map((s) => db.prepare(s.sql).bind(...s.params)));
    return { ok: true, registered: items.length };
  } catch {
    return { ok: false, registered: 0 };
  }
}
