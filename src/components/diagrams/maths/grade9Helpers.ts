import { formatNumber, hcf } from './mathsHelpers';

/**
 * Arithmetic behind the Grade 9 Mathematics lessons of Term 1 and the Term 2 area lesson
 * (Algebraic Expressions, Exponents, Number Systems, Patterns, Area and Perimeter). Every number in a
 * worked example, picture or check answer comes from these functions, and grade9Helpers.test.ts pins
 * the values, so the lesson text cannot disagree with the arithmetic.
 */

// ---------- formatting ----------

/** South African style with a real minus sign: −1 250,5. */
export const num = (n: number): string => (n < 0 ? `−${formatNumber(-n)}` : formatNumber(n));

/** Round to dp decimal places (removes floating-point noise such as 28.259999999999998). */
export const roundTo = (n: number, dp: number): number => Math.round(n * 10 ** dp) / 10 ** dp;

// ---------- algebra ----------

/** A term such as 3x or −2y: a coefficient and a variable ('' for a constant). */
export type Term = [coef: number, variable: string];

/** Collect like terms, keeping the order in which each variable first appears. */
export const collect = (terms: Term[]): Term[] => {
  const out = new Map<string, number>();
  for (const [c, v] of terms) out.set(v, (out.get(v) ?? 0) + c);
  return [...out.entries()].filter(([, c]) => c !== 0).map(([v, c]) => [c, v]);
};

const termBody = (c: number, v: string): string => (v === '' ? String(Math.abs(c)) : `${Math.abs(c) === 1 ? '' : Math.abs(c)}${v}`);

/** Terms written out: [[8,'x'],[-2,'']] -> "8x − 2"; [[1,'x'],[5,'y']] -> "x + 5y". */
export const formatTerms = (terms: Term[]): string =>
  terms.length === 0
    ? '0'
    : terms.map(([c, v], i) => (i === 0 ? `${c < 0 ? '−' : ''}${termBody(c, v)}` : `${c < 0 ? ' − ' : ' + '}${termBody(c, v)}`)).join('');

/** k(ax + b) = kax + kb. */
export const expandBracket = (k: number, a: number, b: number): { a: number; b: number } => ({ a: k * a, b: k * b });

/** ax + b = f(px + q), where f is the HCF of a and b. */
export const commonFactor = (a: number, b: number): { f: number; p: number; q: number } => {
  const f = hcf(Math.abs(a), Math.abs(b));
  return { f, p: a / f, q: b / f };
};

/** (x + p)(x + q) = x² + bx + c with b = p + q and c = pq. */
export const binomialProduct = (p: number, q: number): { b: number; c: number } => ({ b: p + q, c: p * q });

/** x² + bx + c = (x + p)(x + q): the integer pair with p + q = b and pq = c (p <= q), or null. */
export const factorTrinomial = (b: number, c: number): { p: number; q: number } | null => {
  const lim = Math.max(Math.abs(c), 1);
  for (let p = -lim; p <= lim; p++) {
    const q = b - p;
    if (p <= q && p * q === c) return { p, q };
  }
  return null;
};

/** ax + b = c: subtract b, then divide by a. */
export const solveLinear = (a: number, b: number, c: number): { rhs: number; x: number } => {
  const rhs = c - b;
  return { rhs, x: rhs / a };
};

/** k(x + m) = n: divide by k, then subtract m. */
export const solveBracket = (k: number, m: number, n: number): { inner: number; x: number } => {
  const inner = n / k;
  return { inner, x: inner - m };
};

// ---------- exponents ----------

/** a^(−n) = 1 / a^n: the denominator. */
export const negativePower = (base: number, n: number): { den: number } => ({ den: base ** n });

/** (a^p b^q)^n = a^(pn) b^(qn). */
export const productToPower = (exps: number[], n: number): number[] => exps.map((e) => e * n);

/** 10^(−n) as a decimal with a comma: 10⁻³ -> "0,001". */
export const tenToMinus = (n: number): string => `0,${'0'.repeat(n - 1)}1`;

/** The powers base^top down to base^bottom with their values as fractions [numerator, denominator]. */
export const powerLadder = (base: number, top: number, bottom: number): { exp: number; n: number; d: number }[] => {
  const out: { exp: number; n: number; d: number }[] = [];
  for (let e = top; e >= bottom; e--) out.push(e >= 0 ? { exp: e, n: base ** e, d: 1 } : { exp: e, n: 1, d: base ** -e });
  return out;
};

// ---------- number systems ----------

export type NumberSet = 'natural' | 'whole' | 'integer' | 'rational';

/** The sets that contain the rational number n/d (d > 0). */
export const numberSets = (n: number, d = 1): NumberSet[] => {
  const g = hcf(Math.abs(n), d);
  const isInt = d / g === 1;
  const v = n / d;
  const sets: NumberSet[] = [];
  if (isInt && v > 0) sets.push('natural');
  if (isInt && v >= 0) sets.push('whole');
  if (isInt) sets.push('integer');
  sets.push('rational');
  return sets;
};

/** Long division of n by d after the decimal comma: each step brings down a 0. Stops when the remainder is 0 (max 8 steps). */
export const longDivision = (n: number, d: number): { steps: { into: number; q: number; r: number }[]; decimal: string } => {
  const whole = Math.floor(n / d);
  let r = n % d;
  const steps: { into: number; q: number; r: number }[] = [];
  while (r !== 0 && steps.length < 8) {
    const into = r * 10;
    const q = Math.floor(into / d);
    r = into - q * d;
    steps.push({ into, q, r });
  }
  return { steps, decimal: steps.length ? `${whole},${steps.map((s) => s.q).join('')}` : String(whole) };
};

// ---------- patterns ----------

/** The differences between consecutive terms. */
export const differences = (seq: number[]): number[] => seq.slice(1).map((t, i) => t - seq[i]);

/** The ratios between consecutive terms. */
export const ratios = (seq: number[]): number[] => seq.slice(1).map((t, i) => t / seq[i]);

/** A constant-difference pattern a, a + d, ...: Tn = dn + c with c = a − d. */
export const linearRule = (first: number, diff: number): { m: number; c: number } => ({ m: diff, c: first - diff });

/** The nth term of Tn = mn + c. */
export const nthTerm = (rule: { m: number; c: number }, n: number): number => rule.m * n + rule.c;

/** The terms T1 ... Tcount of a rule. */
export const termsOf = (f: (n: number) => number, count: number): number[] => Array.from({ length: count }, (_, i) => f(i + 1));

// ---------- area and perimeter ----------

/** P = 2(l + b), so b = P/2 − l. */
export const breadthFromPerimeter = (perimeter: number, length: number): { half: number; breadth: number } => ({
  half: perimeter / 2,
  breadth: perimeter / 2 - length,
});

export const triangleArea = (base: number, height: number): number => (base * height) / 2;

/** Circumference 2πr and area πr² with π ≈ 3,14 (or another value), rounded to 2 decimals. */
export const circleMeasures = (r: number, pi = 3.14): { circumference: number; area: number; rSquared: number } => ({
  circumference: roundTo(2 * pi * r, 2),
  area: roundTo(pi * r * r, 2),
  rSquared: r * r,
});

/** 1 cm = 10 mm, so 1 cm² = 100 mm²; 1 m = 100 cm, so 1 m² = 10 000 cm². */
export const areaFactor = (lengthFactor: number): number => lengthFactor * lengthFactor;
