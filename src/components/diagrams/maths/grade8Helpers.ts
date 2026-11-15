/**
 * Arithmetic behind the Grade 8 Mathematics lessons on integers, exponents, patterns and linear
 * equations. Every number in a worked example, picture or check answer comes from these functions
 * (or from grade7Helpers), and grade8Helpers.test.ts pins the values, so the lesson text cannot
 * disagree with the arithmetic.
 */

/** "−5" with a real minus sign. */
const neg = (n: number): string => (n < 0 ? `−${Math.abs(n)}` : String(n));

// ---------- integers ----------

/** The additive inverse (opposite) of n: the number that gives 0 when added to n. */
export const additiveInverse = (n: number): number => (n === 0 ? 0 : -n);

/** a − b written as a + (the inverse of b). Returns the inverse used and the result. */
export const subtractAsAdd = (a: number, b: number): { inverse: number; result: number } => ({ inverse: additiveInverse(b), result: a + additiveInverse(b) });

/** a × b as `times` equal jumps of `step` from 0: the landing points after each jump. */
export const repeatedJumps = (step: number, times: number): number[] => Array.from({ length: times }, (_, i) => step * (i + 1));

// ---------- exponents ----------

/** The whole-number square root of n, or null when n is not a perfect square. */
export const squareRoot = (n: number): number | null => {
  if (n < 0) return null;
  const r = Math.round(Math.sqrt(n));
  return r * r === n ? r : null;
};

/** The whole-number cube root of n, or null when n is not a perfect cube. */
export const cubeRoot = (n: number): number | null => {
  const r = Math.round(Math.cbrt(n));
  return r * r * r === n ? r : null;
};

/** The two perfect squares either side of n, e.g. 45 lies between 36 (6²) and 49 (7²). */
export const squaresAround = (n: number): { below: number; above: number; lowRoot: number } => {
  const lowRoot = Math.floor(Math.sqrt(n));
  return { below: lowRoot * lowRoot, above: (lowRoot + 1) * (lowRoot + 1), lowRoot };
};

// ---------- patterns ----------

/** The differences between neighbouring terms. */
export const differences = (terms: number[]): number[] => terms.slice(1).map((t, i) => t - terms[i]);

/** The constant difference of a linear pattern, or null if the differences are not all equal. */
export const commonDifference = (terms: number[]): number | null => {
  const d = differences(terms);
  return d.every((x) => x === d[0]) ? d[0] : null;
};

/** The constant ratio of a geometric pattern, or null if there is none. */
export const commonRatio = (terms: number[]): number | null => {
  if (terms.some((t) => t === 0)) return null;
  const r = terms[1] / terms[0];
  return terms.every((t, i) => i === 0 || t === terms[i - 1] * r) ? r : null;
};

/** The general term Tn = d·n + c of a linear pattern whose first term is T1. Null if not linear. */
export const linearRule = (terms: number[]): { d: number; c: number } | null => {
  const d = commonDifference(terms);
  if (d === null) return null;
  return { d, c: terms[0] - d };
};

/** The value of d·n + c. */
export const linearValue = (d: number, c: number, n: number): number => d * n + c;

/** "4n + 1", "2x − 1", "x + 5", "3x": a linear expression with a real minus sign. */
export const linearText = (d: number, c: number, letter = 'n'): string => {
  const lead = d === 1 ? letter : d === -1 ? `−${letter}` : `${neg(d)}${letter}`;
  if (c === 0) return lead;
  return `${lead} ${c < 0 ? '−' : '+'} ${Math.abs(c)}`;
};

// ---------- algebraic terms ----------

export interface AlgebraTerm {
  /** The coefficient; a term without a letter is a constant. */
  n: number;
  letter?: string;
}

/** "6y", "− 2", "+ y": a term as written inside an expression (the first term has no "+"). */
export const termText = (t: AlgebraTerm, first: boolean): string => {
  const size = Math.abs(t.n);
  const body = t.letter ? `${size === 1 ? '' : size}${t.letter}` : String(size);
  if (first) return `${t.n < 0 ? '−' : ''}${body}`;
  return `${t.n < 0 ? '−' : '+'} ${body}`;
};

// ---------- linear equations ----------

/** Solve a·x + b = c exactly (the answer must be a whole number). Returns every step's value. */
export const solveLinear = (a: number, b: number, c: number): { rhs: number; x: number } => {
  const rhs = c - b;
  if (a === 0 || rhs % a !== 0) throw new Error('not a whole-number solution');
  return { rhs, x: rhs / a };
};

/** Solve a·x + b = p·x + q: take p·x from both sides, then solve (a − p)x + b = q. */
export const solveBothSides = (a: number, b: number, p: number, q: number): { coef: number; rhs: number; x: number } => {
  const coef = a - p;
  const { rhs, x } = solveLinear(coef, b, q);
  return { coef, rhs, x };
};

/** Does x make a·x + b equal to c? Returns the left-hand value too, for the check step. */
export const checkSolution = (a: number, b: number, c: number, x: number): { left: number; ok: boolean } => {
  const left = a * x + b;
  return { left, ok: left === c };
};

/** k(a·x + b) = (k·a)x + k·b: the distributive law. */
export const expandBracket = (k: number, a: number, b: number): { a: number; b: number } => ({ a: k * a, b: k * b });

/** Add the coefficients of like terms, e.g. 6y + y: [6, 1] gives 7. */
export const collect = (coefficients: number[]): number => coefficients.reduce((s, c) => s + c, 0);
