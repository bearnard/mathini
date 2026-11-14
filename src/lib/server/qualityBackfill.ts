// Backfill of item_cache.quality_score / quality_flags with the validator (migration 0007). Pure: takes rows, returns the
// score of each row and the SQL to store it. scripts/backfill-quality.ts is the CLI. Near-duplicates are judged per task
// in id order (the earlier question keeps its place, the later copy is flagged), exactly as the insert-time check does.
import { checkQuestion, flagsOf } from '../shared/questionQuality';
import { numericOkFor } from './topUp';
import { TASK_INDEX } from './caps/taskIndex.generated';

export interface BackfillRow {
  id: number;
  task: string;
  prompt: string;
  options: string;
  answer: string;
  explanation: string | null;
}

export interface Scored {
  id: number;
  score: number;
  flags: string[];
}

export function scoreRows(rows: readonly BackfillRow[]): Scored[] {
  const byTask = new Map<string, BackfillRow[]>();
  for (const r of rows) (byTask.get(r.task) ?? byTask.set(r.task, []).get(r.task)!).push(r);
  const out: Scored[] = [];
  for (const [task, list] of byTask) {
    list.sort((a, b) => a.id - b.id);
    const code = TASK_INDEX[task]?.[0];
    const numericOk = code ? numericOkFor(task, code) : true; // unknown tasks: do not flag drift
    const seen: string[] = [];
    for (const r of list) {
      let options: string[] = [];
      try { const o = JSON.parse(r.options); if (Array.isArray(o)) options = o; } catch { /* leave empty: bad_shape */ }
      const res = checkQuestion({ prompt: r.prompt, options, answer: r.answer, explanation: r.explanation }, { existingPrompts: seen, numericOk });
      seen.push(r.prompt);
      out.push({ id: r.id, score: res.score, flags: flagsOf(res) });
    }
  }
  return out.sort((a, b) => a.id - b.id);
}

/** UPDATE statements, one per row, in files of at most `perFile` statements (D1 accepts large files, but small ones are easy to retry). */
export function updateSql(scored: readonly Scored[], perFile = 500): string[] {
  const files: string[] = [];
  for (let i = 0; i < scored.length; i += perFile) {
    files.push(
      scored
        .slice(i, i + perFile)
        .map((s) => `UPDATE item_cache SET quality_score = ${s.score}, quality_flags = '${JSON.stringify(s.flags).replace(/'/g, "''")}' WHERE id = ${s.id};`)
        .join('\n'),
    );
  }
  return files;
}

export function bandCounts(scored: readonly Scored[]) {
  return {
    total: scored.length,
    rejected: scored.filter((s) => s.score === 0).length,
    warn: scored.filter((s) => s.score > 0 && s.score < 80).length,
    clean: scored.filter((s) => s.score >= 80).length,
  };
}
