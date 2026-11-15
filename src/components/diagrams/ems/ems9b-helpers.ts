/**
 * Numbers for the Grade 9 Term 3 and 4 EMS lessons (business plans, production and marketing,
 * business responsibility, exam revision). Every figure a slide, picture or check answer shows comes
 * from here (ems9b-helpers.test.ts), so the slides can not drift from the arithmetic.
 */
import { markUp } from './emsHelpers';

/** Whole-number percentage: part as a share of the whole. */
export const percentOf = (part: number, whole: number): number => Math.round((part * 100) / whole);

/** Quality control: how many of the products made were faulty. */
export const defectRate = (made: number, faulty: number) => ({ made, faulty, good: made - faulty, percent: percentOf(faulty, made) });

/** Production capacity against what marketing promised. */
export const capacityGap = (capacity: number, promised: number) => ({ capacity, promised, short: Math.max(0, promised - capacity), canDeliver: promised <= capacity });

export type PriceVerdict = 'above' | 'below' | 'same';
/** A cost-plus price set against what a competitor charges. */
export const priceCheck = (cost: number, markUpPercent: number, competitor: number) => {
  const m = markUp(cost, markUpPercent);
  const gapCents = Math.round(m.price * 100) - Math.round(competitor * 100);
  const verdict: PriceVerdict = gapCents > 0 ? 'above' : gapCents < 0 ? 'below' : 'same';
  return { ...m, competitor, verdict, gap: Math.abs(gapCents) / 100 };
};

/** Exam time: minutes to spend per mark, and on a question worth `marks`. */
export const minutesPerMark = (minutes: number, totalMarks: number): number => minutes / totalMarks;
export const minutesFor = (minutes: number, totalMarks: number, marks: number): number => (minutes * marks) / totalMarks;

/** A number written the South African way, with a decimal comma. */
export const comma = (n: number): string => String(n).replace('.', ',');
