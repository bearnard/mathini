// Runs the question-quality validator over every curated bank and counts REJECT-level reasons per scope. Used by the ratchet
// test and by scripts/curated-quality-baseline.ts (which records today's counts).
import { extractCuratedBanks, type CuratedQuestion } from './curatedBanks';
import { checkQuestion } from '../lib/shared/questionQuality';

export type Counts = Record<string, Record<string, number>>;

export const scopeOf = (q: CuratedQuestion): string => {
  if (q.grade === 6 && q.subject === 'natural-sciences') return 'g6-natural-sciences';
  if (q.grade === 6 && (q.subject === 'history' || q.subject === 'geography')) return 'g6-history-geography';
  return 'other';
};

export function countRejects(questions: CuratedQuestion[] = extractCuratedBanks()): { counts: Counts; checked: number } {
  const mcq = questions.filter((q) => q.kind === 'mcq');
  const byFile = new Map<string, string[]>();
  for (const q of mcq) (byFile.get(q.file) ?? byFile.set(q.file, []).get(q.file)!).push(q.prompt);
  const counts: Counts = {};
  for (const q of mcq) {
    const r = checkQuestion(q, { existingPrompts: byFile.get(q.file)!.filter((p) => p !== q.prompt) });
    for (const x of r.reasons) {
      if (x.severity !== 'reject') continue;
      const scope = scopeOf(q);
      counts[scope] ??= {};
      counts[scope][x.code] = (counts[scope][x.code] ?? 0) + 1;
    }
  }
  return { counts, checked: mcq.length };
}
