import { hcf } from './mathsHelpers';

/**
 * Facts and arithmetic behind the Grade 8 term 4 lessons on 3D objects, graphs, probability and
 * transformation geometry. grade8SpaceHelpers.test.ts pins the values the lessons show.
 */

// ---------- 3D objects ----------

export type Solid8 = 'cube' | 'triangular prism' | 'square pyramid' | 'cylinder' | 'cone' | 'sphere';

/** Flat faces, curved surfaces, edges and vertices of each solid. */
export const SOLID_FACTS: Record<Solid8, { flat: number; curved: number; edges: number; vertices: number }> = {
  cube: { flat: 6, curved: 0, edges: 12, vertices: 8 },
  'triangular prism': { flat: 5, curved: 0, edges: 9, vertices: 6 },
  'square pyramid': { flat: 5, curved: 0, edges: 8, vertices: 5 },
  cylinder: { flat: 2, curved: 1, edges: 2, vertices: 0 },
  cone: { flat: 1, curved: 1, edges: 1, vertices: 1 },
  sphere: { flat: 0, curved: 1, edges: 0, vertices: 0 },
};

/** Faces, edges and vertices of a prism whose base has n sides: n + 2 faces, 3n edges, 2n vertices. */
export const prismCounts = (n: number): { faces: number; edges: number; vertices: number } => ({ faces: n + 2, edges: 3 * n, vertices: 2 * n });

/** Faces, edges and vertices of a pyramid whose base has n sides: n + 1 faces, 2n edges, n + 1 vertices. */
export const pyramidCounts = (n: number): { faces: number; edges: number; vertices: number } => ({ faces: n + 1, edges: 2 * n, vertices: n + 1 });

/** Euler's formula for a polyhedron: V − E + F. */
export const euler = (v: number, e: number, f: number): number => v - e + f;

// ---------- the coordinate plane ----------

/** The quadrant of a point (1 to 4), or 0 when the point lies on an axis. */
export const quadrant = (x: number, y: number): 0 | 1 | 2 | 3 | 4 => {
  if (x === 0 || y === 0) return 0;
  if (x > 0) return y > 0 ? 1 : 4;
  return y > 0 ? 2 : 3;
};

/** "(−2; 3)": a point with a real minus sign and the South African semicolon. */
export const pt = (x: number, y: number): string => `(${x < 0 ? '−' : ''}${Math.abs(x)}; ${y < 0 ? '−' : ''}${Math.abs(y)})`;

// ---------- transformations ----------

export type P2 = [number, number];
export const translate = ([x, y]: P2, a: number, b: number): P2 => [x + a, y + b];
export const reflectInY = ([x, y]: P2): P2 => [-x || 0, y];
export const reflectInX = ([x, y]: P2): P2 => [x, -y || 0];
/** A rotation of 90° clockwise about the origin: (x; y) → (y; −x). */
export const rotate90cw = ([x, y]: P2): P2 => [y, -x || 0];
/** A rotation of 180° about the origin: (x; y) → (−x; −y). */
export const rotate180 = ([x, y]: P2): P2 => [-x || 0, -y || 0];
/** An enlargement with centre the origin and scale factor k. */
export const enlarge = ([x, y]: P2, k: number): P2 => [k * x, k * y];

// ---------- probability ----------

/** A probability as a fraction in lowest terms, its decimal and its percentage. */
export const probability = (favourable: number, total: number): { n: number; d: number; decimal: number; percent: number } => {
  const g = hcf(favourable, total) || 1;
  return { n: favourable / g, d: total / g, decimal: favourable / total, percent: Math.round((favourable / total) * 10000) / 100 };
};

/** Every outcome of tossing `coins` coins, e.g. 2 coins: HH, HT, TH, TT. */
export const coinOutcomes = (coins: number): string[] => {
  let out = [''];
  for (let i = 0; i < coins; i++) out = out.flatMap((s) => [`${s}H`, `${s}T`]);
  return out;
};
