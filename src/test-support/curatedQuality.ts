// Runs the question-quality validator over every curated bank and counts REJECT-level reasons per scope. Used by the ratchet
// test and by scripts/curated-quality-baseline.ts (which records today's counts).
import { extractCuratedBanks, type CuratedQuestion } from './curatedBanks';
import { checkQuestion } from '../lib/shared/questionQuality';

export type Counts = Record<string, Record<string, number>>;

export const scopeOf = (q: CuratedQuestion): string => {
  if (q.grade === 6 && q.subject === 'natural-sciences') return 'g6-natural-sciences';
  if (q.grade === 6 && (q.subject === 'history' || q.subject === 'geography')) return 'g6-history-geography';
  if (q.grade === 6) return 'g6-other'; // Grade 6 maths, Afrikaans, English, isiXhosa, Life Skills
  if (q.grade >= 7 && q.grade <= 12) return `g${q.grade}`; // one scope per grade, so a repaired grade can be held at zero
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

/**
 * Decimal-point ratchet: how many curated Maths, Maths Literacy and Physical Sciences questions (Grades 7-12) still show a decimal POINT
 * (prompt, options, answer or explanation) instead of the South African decimal comma. Counted per grade scope with the same rule as
 * the insert-time check (DECIMAL_POINT in questionQuality). Not a reject-level reason, so it has its own baseline that may only go DOWN.
 */
const DECIMAL_SUBJECTS = new Set(['mathematics', 'mathematical-literacy', 'ml', 'physical-sciences', 'ps']);

export function countDecimalPoints(questions: CuratedQuestion[] = extractCuratedBanks()): Record<string, number> {
  const out: Record<string, number> = {};
  for (const q of questions) {
    if (q.kind !== 'mcq' || q.grade < 7 || !DECIMAL_SUBJECTS.has(q.subject)) continue;
    const r = checkQuestion(q, { decimalComma: 'warn' });
    if (r.reasons.some((x) => x.code === 'decimal_point')) out[`g${q.grade}`] = (out[`g${q.grade}`] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(out).sort());
}
