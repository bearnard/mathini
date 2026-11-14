// Reading the AI question pool (item_cache) for serving. Quality-aware (ADR 0003 section 1a):
//   score NULL  -> not scored yet: served as before (safe during rollout and backfill)
//   score 0     -> rejected by the validator: never served
//   score 80+   -> clean: served first
//   score 1-79  -> warn-level: served only after clean rows
// A pool that runs short just returns fewer rows; the client tops up from the curated bank (topUpFromBank).
import { SCORE_CLEAN } from '../shared/questionQuality';

export const SERVABLE_SQL = '(quality_score IS NULL OR quality_score > 0)';
export const CLEAN_FIRST_SQL = `(quality_score IS NULL OR quality_score >= ${SCORE_CLEAN}) DESC`;

export interface PoolRow {
  id: number;
  prompt: string;
  options: string;
  answer: string;
  explanation: string;
  section: string;
}

export interface PoolItem {
  id: number;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  section: string;
}

export function poolQuery(withSection: boolean): string {
  return `SELECT id, prompt, options, answer, explanation, section FROM item_cache WHERE task = ? AND ${SERVABLE_SQL}${withSection ? ' AND section = ?' : ''} ORDER BY ${CLEAN_FIRST_SQL}, RANDOM() LIMIT ?`;
}

/** Servable rows for a task: clean ones first (random within each band), never rejected ones. Rows with bad JSON are skipped. */
export async function fetchPoolItems(db: D1Database, task: string, count: number, section?: string): Promise<PoolItem[]> {
  const params: (string | number)[] = section ? [task, section, count] : [task, count];
  const res = await db.prepare(poolQuery(!!section)).bind(...params).all<PoolRow>();
  const items: PoolItem[] = [];
  for (const r of res.results ?? []) {
    try {
      const options = JSON.parse(r.options) as unknown;
      if (!Array.isArray(options)) continue;
      items.push({ id: r.id, prompt: r.prompt, options: options as string[], answer: r.answer, explanation: r.explanation, section: r.section });
    } catch {
      /* skip a row whose options are not valid JSON */
    }
  }
  return items;
}
