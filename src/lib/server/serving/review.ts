// Spaced review reads the question text from D1 when the flag allows it (docs/notes/d1-serving-plan.md 4.2). The review client already
// prefers the server's `pool` entry over the code bank, so filling `pool` here is all it takes: an edited question is found by its stable
// id even though its new wording hashes to a different qkey.
import { isServedFromD1, loadFlag } from './flags';
import { currentVersions } from './served';

export interface ReviewPoolEntry {
  id: number;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  section: string;
}

/** Candidate text from D1 for the candidates whose task is switched on (or, with ignoreFlag, every task not excluded). Never throws; {} when off or on any error. */
export async function resolveFromD1(db: D1Database, candidates: { qkey: string; task: string }[], opts: { ignoreFlag?: boolean } = {}): Promise<Record<string, ReviewPoolEntry>> {
  const out: Record<string, ReviewPoolEntry> = {};
  try {
    const flag = await loadFlag(db);
    // ignoreFlag (the review endpoint): every task except one the owner excluded. Otherwise only the tasks the practice flag serves from D1.
    const ids = [...new Set(candidates.filter((c) => (opts.ignoreFlag ? !flag.exclude.includes(c.task) : isServedFromD1(flag, c.task))).map((c) => c.qkey))];
    if (ids.length === 0) return out;
    for (const it of await currentVersions(db, ids)) {
      // id 0 = no item_cache row (a curated question): the attempt is then identified by qkey, which resolves to the canonical id.
      out[it.qid] = { id: it.id ?? 0, prompt: it.prompt, options: it.options, answer: it.answer, explanation: it.explanation, section: it.section };
    }
  } catch {
    return {};
  }
  return out;
}
