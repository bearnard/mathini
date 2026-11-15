import { r3 } from '../round';

/** Layout and number helpers for the Grade 9 Life Orientation Term 1 lessons. Tested in lo8Helpers.test.ts. */

/** Bar lengths proportional to the values; the biggest value fills `maxW`. */
export const barWidths = (values: number[], maxW = 62): number[] => {
  const top = Math.max(0, ...values);
  return values.map((v) => (top === 0 ? 0 : r3((v / top) * maxW)));
};

/** Increase from the first to the last value of a log, e.g. [12, 15, 17, 20] gives 8. */
export const logGain = (values: number[]): number => (values.length < 2 ? 0 : values[values.length - 1] - values[0]);

/** A SMART target: `gain` marks higher than the current mark. */
export const targetMark = (current: number, gain: number): number => current + gain;

/** Minutes per subject for a weekly plan of `sessions` sessions of `length` minutes each. */
export const subjectMinutes = (plan: { subject: string; sessions: number; length: number }[]) =>
  plan.map((p) => ({ subject: p.subject, minutes: p.sessions * p.length }));

export const totalMinutes = (items: { minutes: number }[]): number => items.reduce((a, b) => a + b.minutes, 0);

/** "3 h 30 min" for 210. */
export const hoursMinutes = (m: number): string => `${Math.floor(m / 60)} h ${m % 60} min`;
