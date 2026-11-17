import { r3 } from '../round';

/** Numbers for the Grade 6 Geography lessons on atlases and coniferous forests. Tested in g6geoHelpers.test.ts. */

// ---------- a sample atlas (made up for the lesson) ----------

export interface Section { name: string; from: number; to: number }
export const CONTENTS: Section[] = [
  { name: 'World', from: 4, to: 5 },
  { name: 'Africa', from: 6, to: 7 },
  { name: 'South Africa', from: 8, to: 9 },
  { name: 'The nine provinces', from: 10, to: 18 },
];
export const pagesIn = (s: Section): number => s.to - s.from + 1;
export const totalPages = (xs: readonly Section[]): number => xs.reduce((a, s) => a + pagesIn(s), 0);
export const sectionOfPage = (page: number, xs: readonly Section[] = CONTENTS): string | undefined => xs.find((s) => page >= s.from && page <= s.to)?.name;

export interface IndexEntry { place: string; page: number; ref: string }
/** An index is in alphabetical order and gives the page and a block reference for each place. */
export const INDEX: IndexEntry[] = [
  { place: 'Bloemfontein', page: 12, ref: 'C3' },
  { place: 'Cape Town', page: 17, ref: 'B4' },
  { place: 'Durban', page: 14, ref: 'D3' },
  { place: 'Johannesburg', page: 11, ref: 'B2' },
  { place: 'Polokwane', page: 10, ref: 'C1' },
];
export const isAlphabetical = (xs: readonly IndexEntry[]): boolean => xs.every((e, i) => i === 0 || xs[i - 1].place.localeCompare(e.place) <= 0);

// ---------- the world's highest mountains (rounded, metres) ----------

export interface Peak { name: string; metres: number }
export const PEAKS: Peak[] = [
  { name: 'Mount Everest', metres: 8849 },
  { name: 'K2', metres: 8611 },
  { name: 'Kangchenjunga', metres: 8586 },
];
export const higherBy = (a: Peak, b: Peak): number => a.metres - b.metres;

// ---------- latitude bands ----------

export interface Band { name: string; from: number; to: number }
/** Approximate latitudes (degrees north, negative is south). The coniferous forest belt is in the Northern Hemisphere. */
export const BANDS: Band[] = [
  { name: 'Rainforests', from: -10, to: 10 },
  { name: 'Hot deserts', from: 15, to: 35 },
  { name: 'Coniferous forests', from: 50, to: 65 },
];
/** y position (0 at 90 degrees north, 1 at 90 degrees south) of a latitude. */
export const latFraction = (lat: number): number => r3((90 - lat) / 180);

// ---------- an example coniferous-forest climate (rounded, made up to show the pattern) ----------

export const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as const;
export const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;
export const TEMP_C = [-12, -10, -4, 3, 10, 15, 18, 16, 10, 3, -4, -10] as const;
export const RAIN_MM = [30, 25, 25, 30, 45, 60, 70, 75, 60, 50, 45, 35] as const;
export const monthOfMax = (xs: readonly number[]): string => MONTH_NAMES[xs.indexOf(Math.max(...xs))];
export const monthOfMin = (xs: readonly number[]): string => MONTH_NAMES[xs.indexOf(Math.min(...xs))];
export const annualRange = (xs: readonly number[]): number => Math.max(...xs) - Math.min(...xs);
export const total = (xs: readonly number[]): number => xs.reduce((a, b) => a + b, 0);
export const monthsBelowZero = (xs: readonly number[]): number => xs.filter((t) => t < 0).length;
