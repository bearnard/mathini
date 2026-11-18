/**
 * Grade 12 English HL Paper 1 (language in context): the paper layout and the word-count arithmetic used in the summary lesson.
 * The passages are original teaching texts. paper1.test.ts and g12EngPaper1.test.ts recompute every number independently.
 */
export const PAPER1 = { total: 70, minutes: 120, comprehension: 30, summary: 10, language: 30, passageWords: { min: 700, max: 800 }, summaryPassage: 350, summaryWords: { min: 80, max: 90 }, points: 7 } as const;
const r1 = (n: number) => Math.round(n * 10) / 10;
export const minutesPerMark = () => r1(PAPER1.minutes / PAPER1.total);
export const sectionMinutes = (marks: number) => Math.round((marks * PAPER1.minutes) / PAPER1.total);
/** Count words: split on spaces; a hyphenated word and a contraction each count as one word. */
export const countWords = (text: string): number => text.trim().split(/\s+/).filter(Boolean).length;
export const inRange = (n: number) => n >= PAPER1.summaryWords.min && n <= PAPER1.summaryWords.max;
/** A model summary of an imaginary passage about a school food garden (original text). */
export const MODEL_SUMMARY =
  'A school food garden gives learners fresh vegetables and teaches them practical skills. Members of the community help with the planting, and the produce feeds pupils who might otherwise go hungry. The garden saves the school money and reduces waste because kitchen scraps become compost. Learners also gain confidence and learn teamwork. Water is a challenge, so tanks collect rain. Teachers link the garden to science lessons, and parents say that the vegetables taste better. Success depends on regular care, which the learners share.';
export const MODEL_WORDS = countWords(MODEL_SUMMARY);
/** Spread seven points evenly: words available per point. */
export const wordsPerPoint = (target: number) => r1(target / PAPER1.points);
