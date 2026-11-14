// Pure planning for the item_cache -> questions backfill (ADR 0003 section 3). Rows whose options are not valid JSON are skipped
// and counted, never guessed at. Several rows can never share a qkey (item_cache is unique on task + prompt).
import { linkLegacyItemSql, questionIdFor, registerQuestionSql, type SeedQuestion } from './sql';

export interface PoolRowForIds {
  id: number;
  task: string;
  prompt: string;
  options: string;
  answer: string;
  explanation: string | null;
  section: string | null;
}

export function backfillStatements(rows: PoolRowForIds[]): { statements: string[]; registered: number; skipped: number[] } {
  const statements: string[] = [];
  const skipped: number[] = [];
  const seen = new Set<string>();
  let registered = 0;
  for (const r of rows) {
    let options: unknown = null;
    try { options = JSON.parse(r.options); } catch { /* skipped below */ }
    if (!Array.isArray(options)) { skipped.push(r.id); continue; }
    const q: SeedQuestion = {
      task: r.task, section: r.section || 'general', kind: 'mcq', source: 'ai', prompt: r.prompt, options: options as string[],
      answer: r.answer, explanation: r.explanation ?? '', extra: {}, legacyItemId: r.id, author: 'ai',
    };
    const id = questionIdFor(q);
    if (seen.has(id)) { skipped.push(r.id); continue; }
    seen.add(id);
    statements.push(...registerQuestionSql(q), linkLegacyItemSql(id, r.id));
    registered++;
  }
  return { statements, registered, skipped };
}
