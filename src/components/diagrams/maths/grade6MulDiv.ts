/**
 * Grade 6 Mathematics: multiplication and division of whole numbers (CAPS Term 2: 4-digit by 2-digit; Term 4: 4-digit by 3-digit). Every number in a
 * lesson, picture or bank key comes from these functions; grade6MulDiv.test.ts pins the values and recomputes them a second way. No React here.
 */

/** The partial products of long multiplication, ones digit of the multiplier first: 4 362 x 108 -> 8 x 4 362 = 34 896, 0 x 4 362 = 0 (skipped), 100 x 4 362 = 436 200. */
export const partialProducts = (a: number, b: number): { multiplier: number; product: number }[] => {
  const s = String(b);
  const out: { multiplier: number; product: number }[] = [];
  for (let i = 0; i < s.length; i++) {
    const digit = Number(s[s.length - 1 - i]);
    if (digit === 0) continue;
    const multiplier = digit * 10 ** i;
    out.push({ multiplier, product: a * multiplier });
  }
  return out;
};

/** Long multiplication: the sum of the partial products. */
export const longMultiply = (a: number, b: number): number => partialProducts(a, b).reduce((s, p) => s + p.product, 0);

/** The distributive method: split the multiplier into tens (or hundreds) and ones: 547 x 45 = 547 x 40 + 547 x 5. */
export const distribute = (a: number, b: number): { big: number; small: number; bigProduct: number; smallProduct: number; total: number } => {
  const small = b % 10;
  const big = b - small;
  return { big, small, bigProduct: a * big, smallProduct: a * small, total: a * big + a * small };
};

/** The compensating version: round the multiplier up to the next ten and subtract: 547 x 45 = 547 x 50 - 547 x 5. */
export const distributeDown = (a: number, b: number): { up: number; diff: number; upProduct: number; diffProduct: number; total: number } => {
  const up = Math.ceil(b / 10) * 10;
  const diff = up - b;
  return { up, diff, upProduct: a * up, diffProduct: a * diff, total: a * up - a * diff };
};

/** Multiply step by step by the factors of the multiplier: 547 x 42 = 547 x 6 x 7 with every running product. */
export const byFactors = (a: number, factors: readonly number[]): { running: number[]; total: number } => {
  const running: number[] = [];
  let cur = a;
  for (const f of factors) {
    cur *= f;
    running.push(cur);
  }
  return { running, total: cur };
};

/** The estimate of a product: round both numbers to the given places first (4 362 x 108 with 1 000 and 100 -> 4 000 x 100). */
export const estimateProduct = (a: number, placeA: number, b: number, placeB: number): number =>
  (Math.floor((a + placeA / 2) / placeA) * placeA) * (Math.floor((b + placeB / 2) / placeB) * placeB);

/** A "clue board" of multiples of d: 100, 200, 10, 20, 5, 2, 3 and so on times d. */
export const multiples = (d: number, ks: readonly number[]): { k: number; product: number }[] => ks.map((k) => ({ k, product: k * d }));

/**
 * Division by building up with multiples of the divisor (the CAPS "multiply then subtract" and the long division layout): at each step take the biggest
 * digit-times-power-of-ten that still fits. Each step shows the part of the quotient, the product taken away and what is left.
 */
export const divide = (n: number, d: number): { quotient: number; remainder: number; steps: { part: number; product: number; left: number }[] } => {
  let left = n;
  let quotient = 0;
  const steps: { part: number; product: number; left: number }[] = [];
  let power = 10 ** Math.max(0, String(n).length - String(d).length + 1);
  for (; power >= 1; power /= 10) {
    let digit = 0;
    while ((digit + 1) * power * d <= left && digit < 9) digit++;
    if (digit > 0) {
      const part = digit * power;
      left -= part * d;
      quotient += part;
      steps.push({ part, product: part * d, left });
    }
  }
  return { quotient, remainder: left, steps };
};

/** The check: quotient x divisor + remainder = dividend. */
export const checkDivision = (n: number, d: number): { product: number; withRemainder: number } => {
  const { quotient, remainder } = divide(n, d);
  return { product: quotient * d, withRemainder: quotient * d + remainder };
};
