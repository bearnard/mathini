import { frac, fracStr, int, type Frac } from './grade10Helpers';

/**
 * Grade 10 Mathematics, Term 2: functions and geometry arithmetic. As in grade10Helpers.ts, every number in a lesson, picture or bank key comes
 * from these functions and grade10Helpers2.test.ts pins the values.
 */

const pt = (x: number | string, y: number | string): string => `(${typeof x === 'number' ? int(x) : x}; ${typeof y === 'number' ? int(y) : y})`;
export { pt };

// ---------- straight lines: y = ax + q ----------

export const lineGradient = (x1: number, y1: number, x2: number, y2: number): Frac => frac(y2 - y1, x2 - x1);
/** The line through two points as {a, q} when both are integers (a may be a fraction). */
export const lineThrough = (x1: number, y1: number, x2: number, y2: number): { a: Frac; q: Frac } => {
  const a = lineGradient(x1, y1, x2, y2);
  // q = y1 − a·x1
  return { a, q: frac(y1 * a[1] - a[0] * x1, a[1]) };
};
export const lineXIntercept = (a: number, q: number): Frac | null => (a === 0 ? null : frac(-q, a));
/** y = ax + q written out: y = −2x + 5, y = x − 3, y = 4. */
export const lineStr = (a: number, q: number): string => {
  const ax = a === 0 ? '' : a === 1 ? 'x' : a === -1 ? '−x' : `${int(a)}x`;
  if (ax === '') return `y = ${int(q)}`;
  return q === 0 ? `y = ${ax}` : `y = ${ax} ${q < 0 ? '−' : '+'} ${Math.abs(q)}`;
};

// ---------- parabola y = ax² + q ----------

export interface Parabola { a: number; q: number }
export const parabolaTurning = (p: Parabola): [number, number] => [0, p.q];
/** x-intercepts of y = ax² + q: ±√(−q/a) when that is a perfect square (integers), else null. */
export const parabolaXIntercepts = (p: Parabola): [number, number] | null => {
  const r = -p.q / p.a;
  const s = Math.sqrt(r);
  return r > 0 && Number.isInteger(s) ? [-s, s] : null;
};
export const parabolaRange = (p: Parabola): string => (p.a > 0 ? `y ≥ ${int(p.q)}` : `y ≤ ${int(p.q)}`);
export const parabolaEval = (p: Parabola, x: number): number => p.a * x * x + p.q;
/** a and q from the y-intercept (0; q) and one more point (x; y), x ≠ 0: a = (y − q)/x². null when a is not an integer. */
export const parabolaFromPoints = (q: number, x: number, y: number): Parabola | null => {
  const a = (y - q) / (x * x);
  return Number.isInteger(a) ? { a, q } : null;
};
export const parabolaStr = (p: Parabola): string => {
  const ax = p.a === 1 ? 'x²' : p.a === -1 ? '−x²' : `${int(p.a)}x²`;
  return p.q === 0 ? `y = ${ax}` : `y = ${ax} ${p.q < 0 ? '−' : '+'} ${Math.abs(p.q)}`;
};

// ---------- hyperbola y = a/x + q ----------

export interface Hyperbola { a: number; q: number }
/** x-intercept: a/x + q = 0, so x = −a/q (q ≠ 0). */
export const hyperbolaXIntercept = (h: Hyperbola): Frac | null => (h.q === 0 ? null : frac(-h.a, h.q));
export const hyperbolaQuadrants = (h: Hyperbola): string => (h.q === 0 ? (h.a > 0 ? '1 and 3' : '2 and 4') : '');
export const hyperbolaStr = (h: Hyperbola): string => `y = ${h.a === 1 ? '' : h.a === -1 ? '−' : int(h.a)}/x${h.q === 0 ? '' : ` ${h.q < 0 ? '−' : '+'} ${Math.abs(h.q)}`}`;

// ---------- exponential y = a·b^x + q ----------

export interface Expo { a: number; b: number; q: number }
export const expoYIntercept = (e: Expo): number => e.a + e.q;
export const expoEval = (e: Expo, x: number): number => e.a * e.b ** x + e.q;
export const expoRange = (e: Expo): string => (e.a > 0 ? `y > ${int(e.q)}` : `y < ${int(e.q)}`);
export const expoGrows = (e: Expo): boolean => (e.a > 0) === (e.b > 1);

// ---------- trigonometric graphs ----------

export interface TrigGraph { fn: 'sin' | 'cos' | 'tan'; a: number; q: number }
export const trigAmplitude = (t: TrigGraph): number | null => (t.fn === 'tan' ? null : Math.abs(t.a));
export const trigPeriod = (t: TrigGraph): number => (t.fn === 'tan' ? 180 : 360);
export const trigMax = (t: TrigGraph): number | null => (t.fn === 'tan' ? null : Math.abs(t.a) + t.q);
export const trigMin = (t: TrigGraph): number | null => (t.fn === 'tan' ? null : -Math.abs(t.a) + t.q);
export const trigEval = (t: TrigGraph, deg: number): number => {
  const r = (deg * Math.PI) / 180;
  const base = t.fn === 'sin' ? Math.sin(r) : t.fn === 'cos' ? Math.cos(r) : Math.tan(r);
  return t.a * base + t.q;
};
export const trigRange = (t: TrigGraph): string => (t.fn === 'tan' ? 'y ∈ ℝ' : `${int(trigMin(t)!)} ≤ y ≤ ${int(trigMax(t)!)}`);

// ---------- geometry ----------

export const interiorAngleSum = (sides: number): number => (sides - 2) * 180;
/** Co-interior (allied) angles between parallel lines add up to 180°. */
export const coInterior = (angle: number): number => 180 - angle;
/** Midpoint theorem: the segment joining the midpoints of two sides is half the third side. */
export const midSegment = (third: number): number => third / 2;
/** Similar figures: corresponding sides in the same ratio k = side'/side; the area ratio is k². */
export const scaleFactor = (side: number, sidePrime: number): Frac => frac(sidePrime, side);
export const scaled = (length: number, k: Frac): Frac => frac(length * k[0], k[1]);
export { fracStr };
/** Rectangle with a diagonal d and a side s: the other side √(d² − s²) when it is an integer. */
export const otherSide = (d: number, s: number): number | null => {
  const r = Math.sqrt(d * d - s * s);
  return Number.isInteger(r) ? r : null;
};
/** Rhombus with side s and one diagonal d1: the diagonals are perpendicular bisectors, so (d1/2)² + (d2/2)² = s². Returns d2 when it is an integer. */
export const rhombusOtherDiagonal = (s: number, d1: number): number | null => {
  const half = Math.sqrt(s * s - (d1 / 2) ** 2);
  return Number.isInteger(half) ? 2 * half : null;
};
