import { formatNumber, simplify } from './mathsHelpers';

/**
 * Arithmetic behind the Grade 9 Mathematics lessons on surface area and volume, 3D objects, data
 * handling, probability and transformations. Every number in a worked example, picture or check
 * answer comes from these functions, and grade9SpaceDataHelpers.test.ts pins the values.
 */

// ---------- formatting ----------

/** South African style with a real minus sign: −1 250,5. */
export const sa = (n: number): string => (n < 0 ? `−${formatNumber(-n)}` : formatNumber(n));

export const round2 = (n: number): number => Math.round(n * 100) / 100;

/** (x, y) with real minus signs. */
export const pt = (p: { x: number; y: number }): string => `(${sa(p.x)}, ${sa(p.y)})`;

// ---------- surface area and volume ----------

/** A rectangular prism: base area, volume, the three different face areas and the total surface area. */
export const rectPrism = (l: number, b: number, h: number) => {
  const faces = { lb: l * b, lh: l * h, bh: b * h };
  return { base: faces.lb, volume: l * b * h, faces, surface: 2 * (faces.lb + faces.lh + faces.bh) };
};

/** A cube of side s: one face, surface area 6s², volume s³. */
export const cube = (s: number) => ({ face: s * s, surface: 6 * s * s, volume: s ** 3 });

/** A cylinder with π ≈ 3,14: base area πr², volume πr²h, circumference 2πr, curved area 2πrh and total surface area (all rounded to 2 decimals). */
export const cylinder = (r: number, h: number, pi = 3.14) => {
  const base = round2(pi * r * r);
  const circumference = round2(2 * pi * r);
  const curved = round2(2 * pi * r * h);
  return { rSquared: r * r, base, volume: round2(pi * r * r * h), circumference, curved, surface: round2(2 * pi * r * r + 2 * pi * r * h), twoBases: round2(2 * pi * r * r) };
};

// ---------- 3D objects ----------

export interface Polyhedron {
  faces: number;
  edges: number;
  vertices: number;
}

/** Faces, edges and vertices of the polyhedra in the lesson. */
export const POLYHEDRA: Record<'cube' | 'rectangular prism' | 'triangular prism' | 'square pyramid' | 'triangular pyramid', Polyhedron> = {
  cube: { faces: 6, edges: 12, vertices: 8 },
  'rectangular prism': { faces: 6, edges: 12, vertices: 8 },
  'triangular prism': { faces: 5, edges: 9, vertices: 6 },
  'square pyramid': { faces: 5, edges: 8, vertices: 5 },
  'triangular pyramid': { faces: 4, edges: 6, vertices: 4 },
};

/** A prism on an n-sided base: n + 2 faces, 3n edges, 2n vertices. A pyramid: n + 1 faces, 2n edges, n + 1 vertices. */
export const prismCounts = (n: number): Polyhedron => ({ faces: n + 2, edges: 3 * n, vertices: 2 * n });
export const pyramidCounts = (n: number): Polyhedron => ({ faces: n + 1, edges: 2 * n, vertices: n + 1 });

/** Euler's formula: F + V = E + 2. */
export const euler = (p: Polyhedron): { left: number; right: number; holds: boolean } => ({
  left: p.faces + p.vertices,
  right: p.edges + 2,
  holds: p.faces + p.vertices === p.edges + 2,
});

// ---------- data handling ----------

export const sorted = (data: number[]): number[] => [...data].sort((a, b) => a - b);
export const sum = (data: number[]): number => data.reduce((s, v) => s + v, 0);
export const mean = (data: number[]): number => sum(data) / data.length;

export const median = (data: number[]): number => {
  const s = sorted(data);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

/** The most frequent values (empty when every value appears once). */
export const modes = (data: number[]): number[] => {
  const count = new Map<number, number>();
  for (const v of data) count.set(v, (count.get(v) ?? 0) + 1);
  const top = Math.max(...count.values());
  return top === 1 ? [] : [...count.entries()].filter(([, c]) => c === top).map(([v]) => v).sort((a, b) => a - b);
};

export const range = (data: number[]): { min: number; max: number; range: number } => {
  const s = sorted(data);
  return { min: s[0], max: s[s.length - 1], range: s[s.length - 1] - s[0] };
};

/** A frequency table: total frequency, the sum of value × frequency, and the mean. */
export const frequencyTable = (rows: { value: number; freq: number }[]) => {
  const total = rows.reduce((s, r) => s + r.freq, 0);
  const products = rows.map((r) => r.value * r.freq);
  return { total, products, sum: sum(products), mean: sum(products) / total };
};

/** Pie-chart angles: each count's share of 360°. */
export const pieAngles = (counts: number[]): number[] => {
  const t = sum(counts);
  return counts.map((c) => (c / t) * 360);
};

// ---------- probability ----------

/** P = favourable ÷ possible, as a fraction in lowest terms and as a decimal. */
export const probability = (favourable: number, possible: number) => {
  const s = simplify(favourable, possible);
  return { n: favourable, d: possible, simplest: { n: s.n, d: s.d }, decimal: favourable / possible };
};

/** P(not A) = 1 − P(A), rounded to remove floating-point noise. */
export const complement = (p: number): number => round2(1 - p);

/** Every pair from two lists of outcomes (a tree diagram's leaves). */
export const outcomePairs = (first: string[], second: string[]): string[] => first.flatMap((a) => second.map((b) => a + b));

// ---------- transformations ----------

export interface P2 {
  x: number;
  y: number;
}

export const translate = (p: P2, dx: number, dy: number): P2 => ({ x: p.x + dx, y: p.y + dy });
export const reflectInYAxis = (p: P2): P2 => ({ x: -p.x, y: p.y });
export const reflectInXAxis = (p: P2): P2 => ({ x: p.x, y: -p.y });
export const reflectInYEqualsX = (p: P2): P2 => ({ x: p.y, y: p.x });
/** 90° anticlockwise about the origin: (x, y) → (−y, x). */
export const rotate90 = (p: P2): P2 => ({ x: p.y === 0 ? 0 : -p.y, y: p.x });
/** 180° about the origin: (x, y) → (−x, −y). */
export const rotate180 = (p: P2): P2 => ({ x: p.x === 0 ? 0 : -p.x, y: p.y === 0 ? 0 : -p.y });
/** Enlargement with centre the origin and scale factor k: (x, y) → (kx, ky). */
export const enlarge = (p: P2, k: number): P2 => ({ x: p.x * k, y: p.y * k });
