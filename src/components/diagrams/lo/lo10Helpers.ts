import { r3 } from '../round';

/** Small tested helpers for the Grade 9 Life Orientation Term 3 lessons (see lo10Helpers.test.ts). */

/** Centre x of `n` equal columns across `width`, starting at `x0`. */
export const spreadX = (n: number, width: number, x0 = 0): number[] =>
  Array.from({ length: n }, (_, i) => r3(x0 + (width / n) * (i + 0.5)));

/** Widths of stacked tiers, narrowest on top and `max` at the bottom. */
export const tierWidths = (n: number, max = 108, min = 56): number[] =>
  n === 1 ? [max] : Array.from({ length: n }, (_, i) => r3(min + ((max - min) / (n - 1)) * i));

/** Split `total` minutes between `parts` equally. Returns null when it does not split exactly. */
export const splitEvenly = (total: number, parts: number): number | null => (parts > 0 && total % parts === 0 ? total / parts : null);

/** "16,4" (decimal comma) to tenths of a second as an integer, so no floating-point error. */
export const toTenths = (s: string): number => {
  const [w, f = '0'] = s.split(',');
  return Number(w) * 10 + Number(f.padEnd(1, '0').slice(0, 1));
};

/** Seconds as text with a decimal comma, from tenths: 5 -> "0,5", 164 -> "16,4". */
export const fromTenths = (t: number): string => `${Math.floor(t / 10)},${t % 10}`;

/** How much faster the second time is, as a decimal-comma string. */
export const fasterBy = (before: string, after: string): string => fromTenths(toTenths(before) - toTenths(after));
