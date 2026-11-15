import { hcf } from './mathsHelpers';

/**
 * Numbers behind the Grade 8 lessons on common and decimal fractions, the theorem of Pythagoras,
 * algebraic equations (term 4) and functions and relationships. grade8NumberHelpers.test.ts pins the
 * values the lessons show.
 */

// ---------- decimals and fractions ----------

/** A decimal with a decimal comma, e.g. 2.87 → "2,87". Rounds away floating-point noise. */
export const dc = (v: number, places?: number): string => {
  const clean = Math.round(v * 1e6) / 1e6;
  return (places === undefined ? String(clean) : clean.toFixed(places)).replace('.', ',');
};

/** Add two decimals exactly by working in thousandths. */
export const addDecimals = (a: number, b: number): number => (Math.round(a * 1000) + Math.round(b * 1000)) / 1000;

/** Multiply by a power of ten without floating-point noise. */
export const timesPow10 = (v: number, k: number): number => Math.round(v * 10 ** k * 1e6) / 1e6;

/** The place value of each digit after the comma: [tenths, hundredths, thousandths]. */
export const decimalDigits = (v: number): { ones: number; tenths: number; hundredths: number; thousandths: number } => {
  const m = Math.round(v * 1000);
  return { ones: Math.floor(m / 1000), tenths: Math.floor(m / 100) % 10, hundredths: Math.floor(m / 10) % 10, thousandths: m % 10 };
};

/** A fraction in lowest terms. */
export const lowest = (n: number, d: number): { n: number; d: number; by: number } => {
  const by = hcf(n, d);
  return { n: n / by, d: d / by, by };
};

/** n/d as a decimal by first making the denominator a power of 10 (10, 100 or 1 000). */
export const fractionToDecimal = (n: number, d: number): { scale: number; over: number; pow: number; value: number } => {
  for (const pow of [10, 100, 1000]) {
    if (pow % d === 0) {
      const scale = pow / d;
      return { scale, over: n * scale, pow, value: (n * scale) / pow };
    }
  }
  throw new Error('denominator is not a factor of 10, 100 or 1000');
};

/** A decimal (up to 3 places) as a fraction over 10, 100 or 1 000, then simplified. */
export const decimalToFraction = (v: number): { n: number; d: number; simplest: { n: number; d: number; by: number } } => {
  let d = 1;
  while (Math.abs(Math.round(v * d) - v * d) > 1e-9 && d < 1000) d *= 10;
  const n = Math.round(v * d);
  return { n, d, simplest: lowest(n, d) };
};

/** n1/d1 ± n2/d2 when d2 is a multiple of d1 or the other way round (common denominator = the larger). */
export const addCommon = (n1: number, d1: number, n2: number, d2: number, sign: 1 | -1 = 1): { d: number; a: number; b: number; n: number; simplest: { n: number; d: number; by: number } } => {
  const d = Math.max(d1, d2);
  if (d % d1 !== 0 || d % d2 !== 0) throw new Error('use the LCM');
  const a = n1 * (d / d1);
  const b = n2 * (d / d2);
  const n = a + sign * b;
  return { d, a, b, n, simplest: lowest(n, d) };
};

// ---------- Pythagoras ----------

const exactRoot = (v: number): number => {
  const r = Math.round(Math.sqrt(v) * 1000) / 1000;
  return r;
};

/** The hypotenuse from the two shorter sides: c² = a² + b². */
export const hypotenuse = (a: number, b: number): { a2: number; b2: number; c2: number; c: number } => {
  const a2 = Math.round(a * a * 1e6) / 1e6;
  const b2 = Math.round(b * b * 1e6) / 1e6;
  const c2 = Math.round((a2 + b2) * 1e6) / 1e6;
  return { a2, b2, c2, c: exactRoot(c2) };
};

/** A shorter side from the hypotenuse c and the other side a: b² = c² − a². */
export const shorterSide = (c: number, a: number): { c2: number; a2: number; b2: number; b: number } => {
  const c2 = Math.round(c * c * 1e6) / 1e6;
  const a2 = Math.round(a * a * 1e6) / 1e6;
  const b2 = Math.round((c2 - a2) * 1e6) / 1e6;
  return { c2, a2, b2, b: exactRoot(b2) };
};

/** Is a triangle with these sides right-angled? Compares the square of the longest side with the sum of the other two squares. */
export const isRightAngled = (x: number, y: number, z: number): { longest2: number; others2: number; right: boolean } => {
  const [p, q, r] = [x, y, z].sort((m, n) => m - n);
  const longest2 = r * r;
  const others2 = p * p + q * q;
  return { longest2, others2, right: longest2 === others2 };
};

// ---------- equations and functions ----------

/** Solve a·x + b = c exactly (whole-number or exact decimal answer). */
export const solve = (a: number, b: number, c: number): { rhs: number; x: number } => {
  const rhs = c - b;
  if (a === 0) throw new Error('no x');
  return { rhs, x: rhs / a };
};

/** y = m·x + c for a list of inputs. */
export const outputs = (m: number, c: number, xs: number[]): number[] => xs.map((x) => m * x + c);

/** The rule y = m·x + c that fits a table with equally spaced inputs, or null if the output does not change at a constant rate. */
export const ruleFromTable = (xs: number[], ys: number[]): { m: number; c: number } | null => {
  const m = (ys[1] - ys[0]) / (xs[1] - xs[0]);
  const c = ys[0] - m * xs[0];
  return xs.every((x, i) => ys[i] === m * x + c) ? { m, c } : null;
};

/** "y = 3x + 2", "y = 2x", "y = 5", with a real minus sign. */
export const ruleText = (m: number, c: number, y = 'y', x = 'x'): string => {
  if (m === 0) return `${y} = ${c < 0 ? '−' : ''}${Math.abs(c)}`;
  const lead = m === 1 ? x : m === -1 ? `−${x}` : `${m < 0 ? '−' : ''}${Math.abs(m)}${x}`;
  return c === 0 ? `${y} = ${lead}` : `${y} = ${lead} ${c < 0 ? '−' : '+'} ${Math.abs(c)}`;
};
