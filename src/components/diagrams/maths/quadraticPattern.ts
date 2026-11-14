/**
 * The lesson's own quadratic pattern, T(n) = n^2 + n + 1, as dot frames: frame n is a block of
 * n columns by (n + 1) rows of dots plus one extra dot, so it holds n(n + 1) + 1 = n^2 + n + 1 dots.
 * The differences are worked out from the terms, never typed.
 */

export const QUADRATIC = { a: 1, b: 1, c: 1 } as const;

/** T(n) = a n^2 + b n + c. */
export const term = (n: number, a: number = QUADRATIC.a, b: number = QUADRATIC.b, c: number = QUADRATIC.c): number => a * n * n + b * n + c;

/** Frame n as dots: n columns, n + 1 rows, plus one extra dot. */
export const frame = (n: number): { cols: number; rows: number; extra: number; total: number } => ({
  cols: n,
  rows: n + 1,
  extra: 1,
  total: n * (n + 1) + 1,
});

/** The terms T(1) .. T(count). */
export const terms = (count: number): number[] => Array.from({ length: count }, (_, i) => term(i + 1));

/** Differences between neighbouring values. */
export const differences = (values: number[]): number[] => values.slice(1).map((v, i) => v - values[i]);
