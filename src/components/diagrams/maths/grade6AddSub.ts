/**
 * Grade 6 Mathematics: addition and subtraction of whole numbers (CAPS Term 1, 5-digit; Term 3, 6-digit). Every number in a lesson, picture or bank key
 * comes from these functions; grade6AddSub.test.ts pins the values and recomputes them a second way. No React here.
 */

/** 56423 -> "56 423": a space between groups of three digits (South African style). */
export const group = (n: number): string => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

/** Round a whole number to the nearest `place` (5, 10, 100, 1 000, 10 000), halves go up. */
export const roundTo = (n: number, place: number): number => Math.floor((n + place / 2) / place) * place;

/** The estimate of a sum or difference: round both numbers to the nearest `place`, then calculate. */
export const estimate = (a: number, b: number, place: number, op: '+' | '−'): number => (op === '+' ? roundTo(a, place) + roundTo(b, place) : roundTo(a, place) - roundTo(b, place));

/** The place values of a number, biggest first: 56 423 -> [50 000, 6 000, 400, 20, 3]. Zeros are kept so the columns line up. */
export const placeValues = (n: number): number[] => {
  const s = String(n);
  return [...s].map((d, i) => Number(d) * 10 ** (s.length - 1 - i));
};

/** Digits, most significant first. */
export const digitsOf = (n: number): number[] => [...String(n)].map(Number);

/**
 * The column method for adding: the digits are added from the ones column leftwards, a carry goes to the next column.
 * `carries[i]` is the carry written ABOVE column i (0 = the leftmost digit column of the answer's width); `result` is the sum.
 */
export const columnAdd = (nums: readonly number[]): { width: number; carries: number[]; sumDigits: number[]; result: number } => {
  const width = Math.max(...nums.map((n) => String(n).length)) + 1;
  const cols = nums.map((n) => {
    const d = digitsOf(n);
    return Array.from({ length: width }, (_, i) => d[d.length - width + i] ?? 0);
  });
  const carries: number[] = Array(width).fill(0);
  const sumDigits: number[] = Array(width).fill(0);
  let carry = 0;
  for (let c = width - 1; c >= 0; c--) {
    const total = cols.reduce((s, col) => s + col[c], 0) + carry;
    sumDigits[c] = total % 10;
    carry = Math.floor(total / 10);
    if (c > 0) carries[c - 1] = carry;
  }
  return { width, carries, sumDigits, result: Number(sumDigits.join('')) };
};

/**
 * The column method for subtracting a - b (a >= b): from the ones column leftwards, borrow from the next column when the top digit is too small.
 * `top` is the top number's digits AFTER borrowing (a column that lent shows one less, a column that borrowed shows ten more): 98 743 - 45 684 gives 9 8 6 13 13.
 */
export const columnSubtract = (a: number, b: number): { top: number[]; borrowed: boolean[]; resultDigits: number[]; result: number } => {
  const da = digitsOf(a);
  const db = digitsOf(b);
  const width = da.length;
  const bottom = Array.from({ length: width }, (_, i) => db[db.length - width + i] ?? 0);
  const top = [...da];
  const borrowed: boolean[] = Array(width).fill(false);
  for (let c = width - 1; c > 0; c--) {
    if (top[c] < bottom[c]) {
      top[c] += 10;
      top[c - 1] -= 1;
      borrowed[c] = true;
    }
  }
  const resultDigits = top.map((t, c) => t - bottom[c]);
  return { top, borrowed, resultDigits, result: Number(resultDigits.join('')) };
};

/** The inverse check: a + b = s, so s - b = a and s - a = b. */
export const inverseOfSum = (a: number, b: number): { sum: number; backToA: number; backToB: number } => ({ sum: a + b, backToA: a + b - b, backToB: a + b - a });
/** a - b = d, so d + b = a. */
export const inverseOfDifference = (a: number, b: number): { difference: number; back: number } => ({ difference: a - b, back: a - b + b });

/** Compensating: add a number just below a round number by adding the round number and taking the difference back. 4 567 + 999 = 4 567 + 1 000 - 1. */
export const compensateAdd = (n: number, nearRound: number, round: number): { step1: number; step2: number } => ({ step1: n + round, step2: n + round - (round - nearRound) });
