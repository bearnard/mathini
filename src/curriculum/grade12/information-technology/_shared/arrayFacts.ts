// The 2-D array used by the Grade 12 IT lesson on two-dimensional arrays (CAPS Term 2), and the aggregates that the lesson and its questions quote.
// twoDimensionalArrays.test.ts recomputes every printed number from this data with Delphi semantics (1-based declared bounds, div and mod for integers),
// so a number in a lesson or a question cannot be wrong.

/** Marks of 4 learners (rows) in 3 tests (columns): Delphi `arrMarks : array[1..4, 1..3] of Integer`. */
export const MARKS: readonly (readonly number[])[] = [
  [65, 72, 80],
  [58, 61, 49],
  [90, 85, 88],
  [70, 66, 74],
];

export const ROWS = MARKS.length;
export const COLS = MARKS[0].length;

/** Delphi indexes are 1-based here: mark(r, c) is arrMarks[r, c]. */
export const mark = (r: number, c: number): number => {
  if (r < 1 || r > ROWS || c < 1 || c > COLS) throw new RangeError(`arrMarks[${r}, ${c}] is outside array[1..${ROWS}, 1..${COLS}]`);
  return MARKS[r - 1][c - 1];
};

export const rowTotal = (r: number): number => {
  let t = 0;
  for (let c = 1; c <= COLS; c++) t += mark(r, c);
  return t;
};

export const colTotal = (c: number): number => {
  let t = 0;
  for (let r = 1; r <= ROWS; r++) t += mark(r, c);
  return t;
};

export const grandTotal = (): number => {
  let t = 0;
  for (let r = 1; r <= ROWS; r++) for (let c = 1; c <= COLS; c++) t += mark(r, c);
  return t;
};

/** The largest value and where it is, found the way the lesson's loop finds it (the first one wins a tie). */
export const highest = (): { value: number; row: number; col: number } => {
  let best = { value: mark(1, 1), row: 1, col: 1 };
  for (let r = 1; r <= ROWS; r++) for (let c = 1; c <= COLS; c++) if (mark(r, c) > best.value) best = { value: mark(r, c), row: r, col: c };
  return best;
};

export const lowest = (): { value: number; row: number; col: number } => {
  let best = { value: mark(1, 1), row: 1, col: 1 };
  for (let r = 1; r <= ROWS; r++) for (let c = 1; c <= COLS; c++) if (mark(r, c) < best.value) best = { value: mark(r, c), row: r, col: c };
  return best;
};

export const countAtLeast = (limit: number): number => {
  let n = 0;
  for (let r = 1; r <= ROWS; r++) for (let c = 1; c <= COLS; c++) if (mark(r, c) >= limit) n++;
  return n;
};

/** Delphi `div` and `mod` on non-negative integers. */
export const div = (a: number, b: number): number => Math.trunc(a / b);
export const mod = (a: number, b: number): number => a - b * Math.trunc(a / b);
