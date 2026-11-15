import { hcf, simplify } from './mathsHelpers';

/**
 * Arithmetic behind the Grade 7 Mathematics lessons (Common Fractions, Integers, Exponents). Every
 * number in a worked example or picture comes from these functions, and grade7Helpers.test.ts pins
 * the values, so the lesson text cannot disagree with the arithmetic.
 */

// ---------- Common fractions ----------

/** Lowest common multiple of two positive whole numbers. */
export const lcm = (a: number, b: number): number => (a / hcf(a, b)) * b;

export interface FractionStep {
  /** The common denominator (the LCM of the two denominators). */
  d: number;
  /** The two fractions rewritten over d: their numerators. */
  a: number;
  b: number;
  /** The result over d before simplifying. */
  n: number;
  /** The result in lowest terms. */
  simplest: { n: number; d: number; by: number };
}

const overCommon = (n1: number, d1: number, n2: number, d2: number) => {
  const d = lcm(d1, d2);
  return { d, a: n1 * (d / d1), b: n2 * (d / d2) };
};

/** n1/d1 + n2/d2 through the common denominator. */
export const addFractions = (n1: number, d1: number, n2: number, d2: number): FractionStep => {
  const { d, a, b } = overCommon(n1, d1, n2, d2);
  return { d, a, b, n: a + b, simplest: simplify(a + b, d) };
};

/** n1/d1 - n2/d2 through the common denominator (the answer must not be negative). */
export const subtractFractions = (n1: number, d1: number, n2: number, d2: number): FractionStep => {
  const { d, a, b } = overCommon(n1, d1, n2, d2);
  if (a < b) throw new Error('negative fraction');
  return { d, a, b, n: a - b, simplest: simplify(a - b, d) };
};

/** Which of two fractions is bigger, after writing both over the common denominator: 1, -1 or 0. */
export const biggerFraction = (n1: number, d1: number, n2: number, d2: number): { d: number; a: number; b: number; sign: 1 | -1 | 0 } => {
  const { d, a, b } = overCommon(n1, d1, n2, d2);
  return { d, a, b, sign: a > b ? 1 : a < b ? -1 : 0 };
};

export interface Mixed {
  whole: number;
  n: number;
  d: number;
}

/** 1 1/2 + 2 1/4: add the wholes, add the fractions, carry when the fraction part reaches a whole. */
export const addMixed = (m1: Mixed, m2: Mixed): { wholes: number; fraction: FractionStep; result: Mixed } => {
  const fraction = addFractions(m1.n, m1.d, m2.n, m2.d);
  let whole = m1.whole + m2.whole;
  let n = fraction.simplest.n;
  const d = fraction.simplest.d;
  if (n >= d) {
    whole += Math.floor(n / d);
    n = n % d;
  }
  return { wholes: m1.whole + m2.whole, fraction, result: { whole, n, d: n === 0 ? 1 : d } };
};

/** n/d of an amount: first find one part (amount / d), then take n of them. The amount must split evenly. */
export const fractionOf = (n: number, d: number, amount: number): { one: number; result: number } => {
  if (amount % d !== 0) throw new Error('amount does not split into equal parts');
  const one = amount / d;
  return { one, result: one * n };
};

// ---------- Integers ----------

/** The jump that takes you from a to b on the number line: positive = right, negative = left. */
export const jump = (from: number, to: number): number => to - from;

/** Sort ascending (farther left is smaller). */
export const ascending = (values: number[]): number[] => [...values].sort((x, y) => x - y);

/** The sign rule for a product or quotient: same signs give +, different signs give -. */
export const productSign = (a: number, b: number): '+' | '-' => (a < 0 === b < 0 ? '+' : '-');

/** Exact integer division (the quotient must be a whole number). */
export const divideExact = (a: number, b: number): number => {
  if (b === 0 || a % b !== 0) throw new Error('not an exact division');
  return a / b;
};

/** Distance from zero. */
export const absolute = (n: number): number => Math.abs(n);

/** "−5" with a real minus sign, as printed in South African textbooks. */
export const signed = (n: number): string => (n < 0 ? `−${Math.abs(n)}` : String(n));

// ---------- Exponents ----------

export const power = (base: number, exp: number): number => base ** exp;

/** 2^5 written out: "2 × 2 × 2 × 2 × 2". */
export const expand = (base: number, exp: number): string => Array.from({ length: exp }, () => String(base)).join(' × ');

/** Same base, multiply: the exponents add. Returns the new exponent and checks it against the values. */
export const sameBaseProduct = (base: number, e1: number, e2: number): { exp: number; value: number } => {
  const exp = e1 + e2;
  if (power(base, e1) * power(base, e2) !== power(base, exp)) throw new Error('law failed');
  return { exp, value: power(base, exp) };
};

/** Same base, divide: the exponents subtract (e1 must be at least e2). */
export const sameBaseQuotient = (base: number, e1: number, e2: number): { exp: number; value: number } => {
  const exp = e1 - e2;
  if (exp < 0 || power(base, e1) / power(base, e2) !== power(base, exp)) throw new Error('law failed');
  return { exp, value: power(base, exp) };
};

/** (base^e1)^e2: the exponents multiply. */
export const powerOfPower = (base: number, e1: number, e2: number): { exp: number; value: number } => {
  const exp = e1 * e2;
  if (power(power(base, e1), e2) !== power(base, exp)) throw new Error('law failed');
  return { exp, value: power(base, exp) };
};

/** The perfect cubes 1, 8, 27 ... up to a limit. */
export const perfectCubes = (limit: number): number[] => {
  const out: number[] = [];
  for (let k = 1; k ** 3 <= limit; k++) out.push(k ** 3);
  return out;
};

/** Superscript digits, so 2^5 can be written 2⁵ in plain text. */
export const sup = (n: number): string => String(n).replace(/\d/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(c)]);
