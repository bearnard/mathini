/**
 * Geometry and measurement behind the Grade 8 lessons on constructions, angles and lines, and area,
 * perimeter, surface area and volume. Lesson numbers and picture coordinates come from these functions;
 * grade8GeometryHelpers.test.ts pins the values.
 */

export interface Pt {
  x: number;
  y: number;
}

const RAD = Math.PI / 180;

// ---------- angle facts ----------

/** Angles on a straight line add up to 180°: the angle next to a. */
export const supplement = (a: number): number => 180 - a;

/** Angles of a triangle add up to 180°: the third angle. */
export const thirdAngle = (a: number, b: number): number => 180 - a - b;

/** The exterior angle of a triangle equals the sum of the two opposite interior angles. */
export const exteriorAngle = (a: number, b: number): number => a + b;

/** Angles of a quadrilateral add up to 360°: the fourth angle. */
export const fourthAngle = (a: number, b: number, c: number): number => 360 - a - b - c;

/** The four angles where two straight lines cross, starting from a and going round. */
export const crossingAngles = (a: number): [number, number, number, number] => [a, supplement(a), a, supplement(a)];

/** The angles a transversal makes with two parallel lines: corresponding and alternate equal a, co-interior 180 − a. */
export const parallelAngles = (a: number): { corresponding: number; alternate: number; coInterior: number } => ({
  corresponding: a,
  alternate: a,
  coInterior: supplement(a),
});

const NAMES: Record<number, string> = { 3: 'triangle', 4: 'quadrilateral', 5: 'pentagon', 6: 'hexagon', 7: 'heptagon', 8: 'octagon', 9: 'nonagon', 10: 'decagon' };
/** The name of a polygon with n sides (3 to 10). */
export const polygonName = (n: number): string => NAMES[n] ?? `${n}-gon`;

// ---------- triangles and constructions ----------

/** Triangle by sides: equilateral, isosceles or scalene. */
export const classifyBySides = (a: number, b: number, c: number): 'equilateral' | 'isosceles' | 'scalene' =>
  a === b && b === c ? 'equilateral' : a === b || b === c || a === c ? 'isosceles' : 'scalene';

/** Three lengths make a triangle only if each pair together is longer than the third. */
export const makesTriangle = (a: number, b: number, c: number): boolean => a + b > c && a + c > b && b + c > a;

/** Where two circles meet (centre, radius). Returns the upper point first (smaller y in SVG), or [] if they do not meet. */
export const circleIntersections = (p: Pt, r1: number, q: Pt, r2: number): Pt[] => {
  const d = Math.hypot(q.x - p.x, q.y - p.y);
  if (d === 0 || d > r1 + r2 || d < Math.abs(r1 - r2)) return [];
  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
  const mx = p.x + (a * (q.x - p.x)) / d;
  const my = p.y + (a * (q.y - p.y)) / d;
  const ox = (h * (q.y - p.y)) / d;
  const oy = (h * (q.x - p.x)) / d;
  const pts = [{ x: mx + ox, y: my - oy }, { x: mx - ox, y: my + oy }];
  return pts.sort((u, v) => u.y - v.y);
};

/** The angle at vertex v between rays to p and q, in degrees (0 to 180). */
export const angleAt = (v: Pt, p: Pt, q: Pt): number => {
  const a1 = Math.atan2(p.y - v.y, p.x - v.x);
  const a2 = Math.atan2(q.y - v.y, q.x - v.x);
  let d = Math.abs(a1 - a2) / RAD;
  if (d > 180) d = 360 - d;
  return d;
};

/** A point at distance r from c in direction deg (0° = right, 90° = up on screen). */
export const polar = (c: Pt, r: number, deg: number): Pt => ({ x: c.x + r * Math.cos(deg * RAD), y: c.y - r * Math.sin(deg * RAD) });

/** The height of an isosceles triangle with equal sides s on a base b (Pythagoras on half the base). */
export const isoscelesHeight = (s: number, b: number): number => Math.sqrt(s * s - (b / 2) * (b / 2));

// ---------- measurement ----------

export const rectPerimeter = (l: number, b: number): number => 2 * (l + b);
export const rectArea = (l: number, b: number): number => l * b;
export const triangleArea = (base: number, height: number): number => (base * height) / 2;
export const prismVolume = (l: number, b: number, h: number): number => l * b * h;
export const cubeVolume = (s: number): number => s ** 3;
export const cubeSurface = (s: number): number => 6 * s * s;
/** Surface area of a rectangular prism: three pairs of equal faces. */
export const prismSurface = (l: number, b: number, h: number): { faces: [number, number, number]; total: number } => {
  const faces: [number, number, number] = [l * b, l * h, b * h];
  return { faces, total: 2 * (faces[0] + faces[1] + faces[2]) };
};
