/**
 * Exam-writing numbers and layouts for the Grade 9 "Examination Writing Practice" lesson.
 */

/** Minutes for an essay: planning (the bank says 5-10 minutes), writing, editing. */
export interface EssayTime { plan: number; write: number; edit: number }

export const essayTime = (total: number, plan: number, edit: number): EssayTime => ({ plan, write: total - plan - edit, edit });

export const planInRange = (plan: number): boolean => plan >= 5 && plan <= 10;

/** Split exam minutes between sections by their marks (largest-remainder rounding, so the total is exact). */
export const minutesBySection = (totalMinutes: number, marks: readonly number[]): number[] => {
  const sum = marks.reduce((a, b) => a + b, 0);
  const raw = marks.map((m) => (m / sum) * totalMinutes);
  const floors = raw.map(Math.floor);
  let left = totalMinutes - floors.reduce((a, b) => a + b, 0);
  const order = raw.map((r, i) => ({ i, frac: r - floors[i] })).sort((a, b) => b.frac - a.frac);
  for (const o of order) {
    if (left <= 0) break;
    floors[o.i] += 1;
    left -= 1;
  }
  return floors;
};

export interface LetterPart { label: string; note: string }

/** A formal letter, top to bottom. */
export const LETTER_PARTS: readonly LetterPart[] = [
  { label: "Sender's address", note: 'top right or top left' },
  { label: 'Date', note: 'under the address' },
  { label: "Recipient's address", note: 'who you are writing to' },
  { label: 'Greeting', note: 'Dear Ms Naidoo,' },
  { label: 'Body', note: 'paragraphs: reason, details, request' },
  { label: 'Closing and name', note: 'Yours sincerely, Thandi Mokoena' },
];

/** "Dear Sir/Madam" is closed with "Yours faithfully"; a named person with "Yours sincerely". */
export const closingFor = (greeting: string): string =>
  /sir|madam/i.test(greeting) ? 'Yours faithfully' : 'Yours sincerely';

export const TOPIC = {
  task: 'Discuss why recycling matters in your community.',
  focused: 'Recycling matters because it keeps litter out of our streets and saves resources.',
  drifting: 'My cousin has a new bicycle and I like football more than recycling.',
};

/** Sentence-level editing examples. */
export const AGREEMENT = { wrong: 'The learners was late for the exam.', right: 'The learners were late for the exam.' };
