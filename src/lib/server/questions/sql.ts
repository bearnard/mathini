// Pure SQL builders that register a question under its stable id. Used by the curated seed generator and the
// item_cache backfill, so both write exactly the same shape. Every statement is idempotent (safe to run twice) and
// never overwrites a version that already exists, so re-seeding after an edit cannot undo the edit.
import { makeQkey } from '../../shared/qkey';

export interface SeedQuestion {
  task: string;
  section: string;
  kind: string;
  source: 'curated' | 'ai';
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  /** Kind-specific JSON (hotspots, image, marks, paper, diagram:true). */
  extra: Record<string, unknown>;
  legacyItemId?: number | null;
  author: string;
}

export function sqlStr(v: string): string {
  return `'${v.replace(/'/g, "''")}'`;
}

const NOW_MS = "CAST(strftime('%s', 'now') AS INTEGER) * 1000";

/** The stable id a question gets when first registered: the qkey of its current prompt. */
export function questionIdFor(q: Pick<SeedQuestion, 'task' | 'prompt'>): string {
  return makeQkey(q.task, q.prompt);
}

/** Three statements: the question row, version 1 (only if absent), and the pointer to it (only if unset). */
export function registerQuestionSql(q: SeedQuestion): string[] {
  const id = questionIdFor(q);
  const legacy = q.legacyItemId == null ? 'NULL' : String(Math.trunc(q.legacyItemId));
  return [
    `INSERT OR IGNORE INTO questions (id, task, section, kind, source, status, current_version_id, legacy_item_id, created_at) VALUES (${sqlStr(id)}, ${sqlStr(q.task)}, ${sqlStr(q.section)}, ${sqlStr(q.kind)}, ${sqlStr(q.source)}, 'active', NULL, ${legacy}, ${NOW_MS});`,
    `INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, explanation, extra, source_note, author, status, created_at) SELECT ${sqlStr(id)}, 1, ${sqlStr(id)}, ${sqlStr(q.prompt)}, ${sqlStr(JSON.stringify(q.options))}, ${sqlStr(q.answer)}, ${sqlStr(q.explanation)}, ${sqlStr(JSON.stringify(q.extra))}, NULL, ${sqlStr(q.author)}, 'approved', ${NOW_MS} WHERE NOT EXISTS (SELECT 1 FROM question_versions WHERE question_id = ${sqlStr(id)} AND version_no = 1);`,
    `UPDATE questions SET current_version_id = (SELECT id FROM question_versions WHERE question_id = ${sqlStr(id)} AND version_no = 1) WHERE id = ${sqlStr(id)} AND current_version_id IS NULL;`,
  ];
}

/** For a pool row whose question already exists (e.g. an identical curated one): link the item_cache id once. */
export function linkLegacyItemSql(id: string, itemId: number): string {
  return `UPDATE questions SET legacy_item_id = ${Math.trunc(itemId)} WHERE id = ${sqlStr(id)} AND legacy_item_id IS NULL AND NOT EXISTS (SELECT 1 FROM questions WHERE legacy_item_id = ${Math.trunc(itemId)});`;
}
