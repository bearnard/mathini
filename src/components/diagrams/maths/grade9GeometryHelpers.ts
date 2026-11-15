import { formatNumber } from './mathsHelpers';

/**
 * Arithmetic and geometry behind the Grade 9 Mathematics lessons on 2D geometry, constructions,
 * Pythagoras, functions and graphs. Every number in a worked example, picture or check answer comes
 * from these functions, and grade9GeometryHelpers.test.ts pins the values.
 */

// ---------- formatting ----------

/** South African style with a real minus sign: −1 250,5. */
export const fmt = (n: number): string => (n < 0 ? `−${formatNumber(-n)}` : formatNumber(n));

export const roundTo = (n: number, dp: number): number => Math.round(n * 10 ** dp) / 10 ** dp;

/** A coordinate pair written (3; −1) style is not used in the bank, so (3, −1) with real minus signs. */
export const point = (x: number, y: number): string => `(${fmt(x)}, ${fmt(y)})`;

// ---------- angles ----------

/** The angle that makes a straight line (or a co-interior pair) with a. */
export const supplement = (a: number): number => 180 - a;

/** The third angle of a triangle. */
export const thirdAngle = (a: number, b: number): number => 180 - a - b;

/** An isosceles triangle with base angle b: the other base angle is b, the apex is 180 − 2b. */
export const isosceles = (base: number): { other: number; apex: number } => ({ other: base, apex: 180 - 2 * base });

/** The interior angles of an n-sided polygon add up to (n − 2) × 180°. */
export const polygonAngleSum = (n: number): number => (n - 2) * 180;

/** The missing angle of a polygon, given the others. */
export const missingAngle = (n: number, known: number[]): { sum: number; known: number; missing: number } => {
  const sum = polygonAngleSum(n);
  const k = known.reduce((s, a) => s + a, 0);
  return { sum, known: k, missing: sum - k };
};

// ---------- constructions ----------

export interface Pt {
  x: number;
  y: number;
}

/** Where two circles (centre, radius) cross: 0, 1 or 2 points. */
export const circleIntersections = (c1: Pt, r1: number, c2: Pt, r2: number): Pt[] => {
  const dx = c2.x - c1.x;
  const dy = c2.y - c1.y;
  const d = Math.hypot(dx, dy);
  if (d === 0 || d > r1 + r2 || d < Math.abs(r1 - r2)) return [];
  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
  const mx = c1.x + (a * dx) / d;
  const my = c1.y + (a * dy) / d;
  if (h === 0) return [{ x: mx, y: my }];
  return [
    { x: mx + (h * dy) / d, y: my - (h * dx) / d },
    { x: mx - (h * dy) / d, y: my + (h * dx) / d },
  ];
};

/** Three lengths make a triangle only if the two shorter ones add up to more than the longest. */
export const triangleInequality = (a: number, b: number, c: number): { shortSum: number; longest: number; ok: boolean } => {
  const [x, y, z] = [a, b, c].sort((p, q) => p - q);
  return { shortSum: x + y, longest: z, ok: x + y > z };
};

// ---------- Pythagoras ----------

/** c² = a² + b². */
export const hypotenuse = (a: number, b: number): { a2: number; b2: number; c2: number; c: number } => {
  const c2 = a * a + b * b;
  return { a2: a * a, b2: b * b, c2, c: Math.sqrt(c2) };
};

/** b² = c² − a². */
export const shorterSide = (c: number, a: number): { c2: number; a2: number; b2: number; b: number } => {
  const b2 = c * c - a * a;
  return { c2: c * c, a2: a * a, b2, b: Math.sqrt(b2) };
};

/** Is the triangle with these sides right-angled? The longest side is tested as c. */
export const isRightTriangle = (p: number, q: number, r: number): { a2: number; b2: number; c2: number; sum: number; right: boolean } => {
  const [a, b, c] = [p, q, r].sort((x, y) => x - y);
  return { a2: a * a, b2: b * b, c2: c * c, sum: a * a + b * b, right: a * a + b * b === c * c };
};

// ---------- functions and graphs ----------

/** y = mx + c at x. */
export const linear = (m: number, c: number) => (x: number): number => m * x + c;

/** The rule y = mx + c through a table with a constant difference (x steps of 1 or more). */
export const ruleFromTable = (xs: number[], ys: number[]): { m: number; c: number } => {
  const m = (ys[1] - ys[0]) / (xs[1] - xs[0]);
  return { m, c: ys[0] - m * xs[0] };
};

/** Gradient between two points: rise ÷ run. */
export const gradient = (p: Pt, q: Pt): { rise: number; run: number; m: number } => {
  const rise = q.y - p.y;
  const run = q.x - p.x;
  return { rise, run, m: rise / run };
};

/** Intercepts of y = mx + c (m not 0): y-intercept c, x-intercept −c ÷ m. */
export const intercepts = (m: number, c: number): { x: number; y: number } => ({ x: -c / m, y: c });

/** y = mx + c written out: "y = 2x + 1", "y = −3x + 6", "y = 5x", "y = x − 3". */
export const ruleText = (m: number, c: number, y = 'y', x = 'x'): string => {
  const mx = m === 0 ? '' : m === 1 ? x : m === -1 ? `−${x}` : `${fmt(m)}${x}`;
  if (!mx) return `${y} = ${fmt(c)}`;
  return c === 0 ? `${y} = ${mx}` : `${y} = ${mx} ${c < 0 ? '−' : '+'} ${fmt(Math.abs(c))}`;
};

/**
 * A quadrilateral with the given interior angles (in order, anticlockwise, summing to 360°) and the first
 * two sides of the given lengths; the last two sides are found so that the shape closes. Returns the
 * corners, or null if the shape cannot close with positive side lengths.
 */
export const quadFromAngles = (angles: number[], l1: number, l2: number): Pt[] | null => {
  if (angles.length !== 4 || angles.reduce((s, a) => s + a, 0) !== 360) return null;
  const rad = (d: number) => (d * Math.PI) / 180;
  const h1 = 0;
  const h2 = h1 + (180 - angles[1]);
  const h3 = h2 + (180 - angles[2]);
  const h4 = h3 + (180 - angles[3]);
  const A = { x: 0, y: 0 };
  const B = { x: l1 * Math.cos(rad(h1)), y: l1 * Math.sin(rad(h1)) };
  const C = { x: B.x + l2 * Math.cos(rad(h2)), y: B.y + l2 * Math.sin(rad(h2)) };
  // C + s·d3 + t·d4 = A
  const d3 = { x: Math.cos(rad(h3)), y: Math.sin(rad(h3)) };
  const d4 = { x: Math.cos(rad(h4)), y: Math.sin(rad(h4)) };
  const det = d3.x * d4.y - d3.y * d4.x;
  const s = (-C.x * d4.y + C.y * d4.x) / det;
  const t = (-d3.x * C.y + d3.y * C.x) / det;
  if (!(s > 0 && t > 0)) return null;
  const D = { x: C.x + s * d3.x, y: C.y + s * d3.y };
  return [A, B, C, D];
};

/** The interior angle at corner i of a polygon (degrees), from its corners. */
export const cornerAngle = (pts: Pt[], i: number): number => {
  const p = pts[i];
  const a = pts[(i + pts.length - 1) % pts.length];
  const b = pts[(i + 1) % pts.length];
  const v1 = { x: a.x - p.x, y: a.y - p.y };
  const v2 = { x: b.x - p.x, y: b.y - p.y };
  const cos = (v1.x * v2.x + v1.y * v2.y) / (Math.hypot(v1.x, v1.y) * Math.hypot(v2.x, v2.y));
  return (Math.acos(Math.max(-1, Math.min(1, cos))) * 180) / Math.PI;
};
