/**
 * Grade 9 Term 3 algebra helpers: factorising (common factors, difference of two squares, trinomials),
 * simplifying algebraic fractions, solving equations by factorisation, and tables of ordered pairs.
 * Integer coefficients only. A polynomial is an array of coefficients with the constant first:
 * [−3, 0, 2] is 2x² − 3. grade9AlgebraT3.test.ts checks every identity by evaluating both sides
 * at many values, not by calling these functions on themselves.
 */

export type Poly = number[];

const SUP: Record<number, string> = { 0: '', 1: '', 2: '²', 3: '³', 4: '⁴' };
const MINUS = '−';

export const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

/** 2x² − 5x + 3 as text with real minus signs and x² style powers. */
export const polyText = (c: Poly, v = 'x'): string => {
  const parts: string[] = [];
  for (let p = c.length - 1; p >= 0; p--) {
    const k = c[p];
    if (k === 0) continue;
    const abs = Math.abs(k);
    const body = p === 0 ? String(abs) : `${abs === 1 ? '' : abs}${v}${SUP[p]}`;
    parts.push(parts.length === 0 ? `${k < 0 ? MINUS : ''}${body}` : `${k < 0 ? ' − ' : ' + '}${body}`);
  }
  return parts.length ? parts.join('') : '0';
};

/** (x + p) or (x − p) as text. */
export const factorText = (p: number, v = 'x'): string => `(${v} ${p < 0 ? MINUS : '+'} ${Math.abs(p)})`;

export const mulPoly = (a: Poly, b: Poly): Poly => {
  const out = Array<number>(a.length + b.length - 1).fill(0);
  a.forEach((x, i) => b.forEach((y, j) => (out[i + j] += x * y)));
  return out;
};

export const evalPoly = (c: Poly, x: number): number => c.reduce((s, k, p) => s + k * x ** p, 0);

/** k × (x + p)(x + q) expanded: a x² + b x + c. */
export const expandProduct = (k: number, p: number, q: number): Poly => mulPoly([k], mulPoly([p, 1], [q, 1]));

/**
 * a x² + b x + c as k (x + p)(x + q) when a is a common factor of all three coefficients
 * (a = 1 gives the plain x² + bx + c case). Null when it does not factorise over the integers that way.
 */
export const factorQuadratic = (a: number, b: number, c: number): { k: number; p: number; q: number } | null => {
  if (a === 0 || b % a !== 0 || c % a !== 0) return null;
  const bb = b / a;
  const cc = c / a;
  const lim = Math.max(Math.abs(cc), Math.abs(bb), 1);
  for (let p = -lim; p <= lim; p++) {
    const q = bb - p;
    if (p <= q && p * q === cc) return { k: a, p, q };
  }
  return null;
};

/** The common numerical factor of the coefficients, e.g. 6a⁴ − 4a² has 2; sign follows the first nonzero coefficient. */
export const commonNumber = (coefs: number[]): number => {
  const g = coefs.reduce((s, c) => gcd(s, c), 0) || 1;
  const first = coefs.find((c) => c !== 0) ?? 1;
  return first < 0 ? -g : g;
};

/** (m x)² − n² = (m x − n)(m x + n). Returns the expanded form and the two factors as polynomials. */
export const differenceOfSquares = (m: number, n: number): { expanded: Poly; minus: Poly; plus: Poly } => ({
  expanded: [-(n * n), 0, m * m],
  minus: [-n, m],
  plus: [n, m],
});

/** Roots of k(x + p)(x + q) = 0, smallest first, without repeats. */
export const rootsOfFactors = (p: number, q: number): number[] => Array.from(new Set([-p, -q])).sort((a, b) => a - b);

/** Ordered pairs (x, y) for y = poly(x). */
export const orderedPairs = (c: Poly, xs: number[]): [number, number][] => xs.map((x) => [x, evalPoly(c, x)]);

/** Prism volume with length 2x, width 2x + 1 and height 2x + 3 style: product of three linear factors. */
export const volumeOfPrism = (l: Poly, w: Poly, h: Poly): Poly => mulPoly(mulPoly(l, w), h);

/** An equation x(x + s) = area for a rectangle: x² + s x − area = 0 and its positive solution, or null. */
export const rectangleSide = (s: number, area: number): { equation: Poly; factors: { p: number; q: number } | null; x: number | null } => {
  const equation: Poly = [-area, s, 1];
  const f = factorQuadratic(1, s, -area);
  const roots = f ? rootsOfFactors(f.p, f.q).filter((r) => r > 0) : [];
  return { equation, factors: f ? { p: f.p, q: f.q } : null, x: roots.length ? roots[0] : null };
};
