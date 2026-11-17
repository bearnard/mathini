import { r3 } from '../round';

/** Numbers for the Grade 7 Natural Sciences lessons on variation and the history of astronomy. Tested in g7nsHelpers.test.ts. */

// ---------- variation: a class survey ----------

/** Heights in cm of one imaginary Grade 7 class of 30. */
export const CLASS_HEIGHTS = [142, 145, 148, 151, 153, 149, 147, 152, 155, 150, 146, 144, 153, 156, 148, 150, 151, 147, 149, 154, 152, 150, 145, 157, 148, 151, 146, 153, 150, 149] as const;
/** Learners who can roll their tongue (true) or cannot (false): 21 of 30. */
export const TONGUE = [...Array(21).fill(true), ...Array(9).fill(false)] as boolean[];

export interface Bin { label: string; from: number; to: number; count: number }

/** Count values into bins of `width` starting at `start`: from, from+width-1. */
export function bins(values: readonly number[], start: number, width: number, n: number): Bin[] {
  return Array.from({ length: n }, (_, i) => {
    const from = start + i * width;
    const to = from + width - 1;
    return { label: `${from}–${to}`, from, to, count: values.filter((v) => v >= from && v <= to).length };
  });
}

export const percent = (part: number, whole: number): number => r3((part / whole) * 100);
export const countTrue = (xs: readonly boolean[]): number => xs.filter(Boolean).length;
export const tallest = (xs: readonly number[]): number => Math.max(...xs);
export const shortest = (xs: readonly number[]): number => Math.min(...xs);
export const range = (xs: readonly number[]): number => tallest(xs) - shortest(xs);

// ---------- early calendars ----------

export const LUNAR_MONTH_DAYS = 29.5; // one full moon to the next, on average
export const YEAR_DAYS = 365; // one cycle of the four seasons, to the nearest day
export const lunarYearDays = (months = 12): number => r3(months * LUNAR_MONTH_DAYS);
/** How many days a 12-moon year falls short of the seasons' year. */
export const calendarGap = (): number => r3(YEAR_DAYS - lunarYearDays());

// ---------- the astronomers ----------

export interface Discovery { who: string; year: number; what: string }
export const DISCOVERIES: Discovery[] = [
  { who: 'Copernicus', year: 1514, what: 'the Sun is at the centre of the Solar System' },
  { who: 'Kepler', year: 1609, what: 'used mathematics to describe the orbits accurately' },
  { who: 'Galilei', year: 1610, what: 'built a telescope to see planets and their moons' },
  { who: 'Newton', year: 1687, what: 'showed that gravity holds the Solar System together' },
];
export const yearsBetween = (a: number, b: number): number => Math.abs(b - a);
/** Position of a year along an axis from `from` to `to`, as a fraction 0..1. */
export const axisPos = (year: number, from: number, to: number): number => r3((year - from) / (to - from));
