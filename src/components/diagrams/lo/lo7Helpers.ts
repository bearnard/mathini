import { r3 } from '../round';

/** Numbers and layout for the Grade 8 Life Orientation Term 4 lessons. Tested in lo7Helpers.test.ts. */

/** Share `days * perDay` revision blocks between subjects in turn (round robin), carrying on from day to day. */
export const assignBlocks = (subjects: string[], days: number, perDay: number) => {
  const grid: string[][] = [];
  let n = 0;
  for (let d = 0; d < days; d++) {
    const row: string[] = [];
    for (let b = 0; b < perDay; b++) row.push(subjects[n++ % subjects.length]);
    grid.push(row);
  }
  const counts = subjects.map((s) => ({ subject: s, blocks: grid.flat().filter((x) => x === s).length }));
  return { grid, counts, total: days * perDay };
};

/** 300 -> "5 h", 90 -> "1 h 30 min", 45 -> "45 min". */
export const minutesText = (m: number): string => {
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (h === 0) return `${r} min`;
  return r === 0 ? `${h} h` : `${h} h ${r} min`;
};

/** South African decimal comma: 1.5 -> "1,5". */
export const comma = (n: number): string => String(r3(n)).replace('.', ',');

/** Minutes you can spend on each mark when a paper is written in `minutes`. */
export const minutesPerMark = (minutes: number, marks: number): number => (marks === 0 ? 0 : minutes / marks);

export const percent = (part: number, whole: number): number => (whole === 0 ? 0 : Math.round((part / whole) * 100));

/** Minutes of activity in a week: a session of `session` minutes done `times` times. */
export const weeklyMinutes = (session: number, times: number): number => session * times;

/** Bars scaled so the biggest value reaches `maxH` (0 stays 0). */
export const barHeights = (values: number[], maxH = 36): number[] => {
  const top = Math.max(0, ...values);
  return values.map((v) => (top === 0 ? 0 : r3((v / top) * maxH)));
};
