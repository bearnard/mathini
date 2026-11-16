import { hcf } from './mathsHelpers';
import { num, roundTo } from './grade9Helpers';

/**
 * Arithmetic behind the Grade 10 Mathematics lessons and question banks. Every number in a worked example, picture, check answer or
 * bank key comes from these functions (or is asserted in grade10Helpers.test.ts), so the text cannot disagree with the arithmetic.
 * Plain numbers and integer arithmetic: the values used are small, so there is no floating-point drift except where a function says "rounded".
 */

export { num, roundTo };

// ---------- formatting ----------

const SUP: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
/** n as a superscript: 2 -> ², -3 -> ⁻³. */
export const sup = (n: number): string => String(n).split('').map((c) => SUP[c === '−' ? '-' : c] ?? c).join('');
/** A decimal with the South African comma: dec(3.14159, 2) -> "3,14". */
export const dec = (n: number, dp: number): string => n.toFixed(dp).replace('.', ',').replace('-', '−');
/** An integer with a real minus sign and no grouping (for algebra): −5. */
export const int = (n: number): string => (n < 0 ? `−${Math.abs(n)}` : String(n));

// ---------- polynomials in one variable (coefficient array, index = power) ----------

export type Poly = number[];

export const trim = (p: Poly): Poly => {
  const q = [...p];
  while (q.length > 1 && q[q.length - 1] === 0) q.pop();
  return q;
};
export const polyMul = (a: Poly, b: Poly): Poly => {
  const out = new Array<number>(a.length + b.length - 1).fill(0);
  a.forEach((x, i) => b.forEach((y, j) => { out[i + j] += x * y; }));
  return trim(out);
};
export const polyAdd = (a: Poly, b: Poly): Poly => trim(Array.from({ length: Math.max(a.length, b.length) }, (_, i) => (a[i] ?? 0) + (b[i] ?? 0)));
export const polySub = (a: Poly, b: Poly): Poly => polyAdd(a, b.map((c) => -c));
export const polyEval = (p: Poly, x: number): number => p.reduce((s, c, i) => s + c * x ** i, 0);
/** (ax + b) as a polynomial. */
export const lin = (a: number, b: number): Poly => [b, a];

/** 2x² − 5x + 3, highest power first, coefficient 1 and 0 left out. */
export const fmtPoly = (p: Poly, v = 'x'): string => {
  const parts: string[] = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const c = p[i];
    if (c === 0) continue;
    const body = i === 0 ? String(Math.abs(c)) : `${Math.abs(c) === 1 ? '' : Math.abs(c)}${v}${i === 1 ? '' : sup(i)}`;
    parts.push(parts.length === 0 ? `${c < 0 ? '−' : ''}${body}` : `${c < 0 ? ' − ' : ' + '}${body}`);
  }
  return parts.length ? parts.join('') : '0';
};
/** (px + q) written as a bracket: (2x − 3). */
export const bracket = (a: number, b: number, v = 'x'): string => `(${fmtPoly(lin(a, b), v)})`;

/** (ax + b)(cx + d) expanded. */
export const expandBinomials = (a: number, b: number, c: number, d: number): Poly => polyMul(lin(a, b), lin(c, d));
/** (ax + b)² expanded. */
export const expandSquare = (a: number, b: number): Poly => polyMul(lin(a, b), lin(a, b));

/**
 * ax² + bx + c = (px + q)(rx + s): integer factors with p*r = a (p, r > 0), q*s = c and p*s + q*r = b. First match in a fixed search order, or null.
 */
export const factorQuadratic = (a: number, b: number, c: number): { p: number; q: number; r: number; s: number } | null => {
  for (let p = 1; p <= Math.abs(a); p++) {
    if (a % p !== 0) continue;
    const r = a / p;
    const lim = Math.abs(c);
    for (let q = -lim; q <= lim; q++) {
      if (q === 0 ? c !== 0 : c % q !== 0) continue;
      const s = c === 0 ? 0 : c / q;
      if (p * s + q * r === b && p * r === a && q * s === c) return { p, q, r, s };
    }
  }
  return null;
};

/** The highest common factor of the coefficients (always positive). */
export const coefHcf = (coefs: number[]): number => coefs.reduce((g, c) => hcf(g, c), 0) || 1;

/** a³ + b³ = (a + b)(a² − ab + b²) and a³ − b³ = (a − b)(a² + ab + b²), for a cube-root pair (a, b) of positive integers. */
export const cubeFactors = (a: number, b: number, sign: 1 | -1): { first: Poly; second: Poly; product: Poly } => {
  const f1 = lin(a, sign * b);
  const f2: Poly = [b * b, -sign * a * b, a * a]; // a²x² − (±)ab x + b²   (written ascending in x)
  const product = polyMul(f1, f2);
  return { first: f1, second: f2, product };
};

// ---------- algebraic fractions ----------

/** Cancel the common factor of a numerator and denominator that are both a multiple of a bracket: (k·(x+m))/(l·(x+m)) -> k/l reduced. */
export const reduceRatio = (n: number, d: number): [number, number] => {
  const g = hcf(n, d) || 1;
  return [n / g, d / g];
};

/** a/b + c/d with a common denominator: returns the reduced [numerator, denominator] and the lcm used. */
export const addFractions = (a: number, b: number, c: number, d: number): { lcm: number; n: number; d: number; reduced: [number, number] } => {
  const l = (b * d) / hcf(b, d);
  const n = a * (l / b) + c * (l / d);
  return { lcm: l, n, d: l, reduced: reduceRatio(n, l) };
};

// ---------- real numbers ----------

export const isPerfectSquare = (n: number): boolean => n >= 0 && Number.isInteger(Math.sqrt(n));
/** √n lies between two consecutive integers: [floor, floor + 1] (n not a perfect square). */
export const sqrtBetween = (n: number): [number, number] => [Math.floor(Math.sqrt(n)), Math.floor(Math.sqrt(n)) + 1];
/** √n to dp decimals (rounded). */
export const sqrtRounded = (n: number, dp: number): number => roundTo(Math.sqrt(n), dp);
/** A decimal that terminates or repeats is rational. Returns the kind for p/q in lowest terms. */
export const decimalKind = (p: number, q: number): 'terminating' | 'recurring' => {
  let d = q / (hcf(p, q) || 1);
  for (const f of [2, 5]) while (d % f === 0) d /= f;
  return d === 1 ? 'terminating' : 'recurring';
};
/** Which set a square root belongs to: √n is rational only if n is a perfect square (n >= 0 integer). */
export const sqrtIsRational = (n: number): boolean => isPerfectSquare(n);
/** Simplified surd √n = a√b with b square-free (largest square factor taken out). */
export const simplifySurd = (n: number): { a: number; b: number } => {
  let a = 1;
  let b = n;
  for (let f = Math.floor(Math.sqrt(n)); f >= 2; f--) {
    if (b % (f * f) === 0) { a = f; b = n / (f * f); break; }
  }
  return { a, b };
};

// ---------- exponents ----------

export type Frac = [n: number, d: number];
export const frac = (n: number, d = 1): Frac => {
  const s = d < 0 ? -1 : 1;
  const g = hcf(n, d) || 1;
  return [(s * n) / g, (s * d) / g];
};
export const fracMul = (a: Frac, b: Frac): Frac => frac(a[0] * b[0], a[1] * b[1]);
export const fracStr = (a: Frac): string => (a[1] === 1 ? int(a[0]) : `${int(a[0])}/${a[1]}`);
/** base^e as an exact fraction for integer base and integer exponent (negative gives 1/base^|e|). */
export const intPower = (base: number, e: number): Frac => (e >= 0 ? frac(base ** e, 1) : frac(1, base ** -e));
/** The n-th root of an integer when it is exact, else null. */
export const exactRoot = (x: number, n: number): number | null => {
  const r = Math.round(Math.abs(x) ** (1 / n));
  for (const c of [r - 1, r, r + 1]) if (c >= 0 && c ** n === Math.abs(x)) return x < 0 ? (n % 2 === 1 ? -c : null) : c;
  return null;
};
/** base^(m/n) for an integer base: the n-th root first, then the power m. Exact fraction, or null when the root is not exact. */
export const rationalPower = (base: number, m: number, n: number): Frac | null => {
  const r = exactRoot(base, n);
  return r === null ? null : intPower(r, m);
};
/** Solve base^x = target for an integer exponent x (base > 1 integer, target a positive integer or unit fraction as [n,d]). */
export const solveExpEquation = (base: number, target: Frac): number | null => {
  for (let x = -12; x <= 12; x++) {
    const v = intPower(base, x);
    if (v[0] === target[0] && v[1] === target[1]) return x;
  }
  return null;
};
/** Same-base laws on the exponent: product adds, quotient subtracts, power of a power multiplies. */
export const expProduct = (a: number, b: number): number => a + b;
export const expQuotient = (a: number, b: number): number => a - b;
export const expPower = (a: number, b: number): number => a * b;

// ---------- number patterns ----------

export const linearTerm = (first: number, diff: number, n: number): number => first + (n - 1) * diff;
/** T_n = dn + (first − d). */
export const linearRule = (first: number, diff: number): { m: number; c: number } => ({ m: diff, c: first - diff });
export const ruleStr = (r: { m: number; c: number }): string => `Tₙ = ${fmtPoly([r.c, r.m], 'n')}`;
/** Which term number has this value? null when no positive integer n works. */
export const termNumberOf = (first: number, diff: number, value: number): number | null => {
  const k = (value - first) / diff;
  return Number.isInteger(k) && k >= 0 ? k + 1 : null;
};
export const sequence = (first: number, diff: number, count: number): number[] => Array.from({ length: count }, (_, i) => linearTerm(first, diff, i + 1));

// ---------- equations ----------

/** ax + b = cx + d  ->  x = (d − b)/(a − c) as a reduced fraction; null when a = c. */
export const solveLinearBoth = (a: number, b: number, c: number, d: number): Frac | null => (a === c ? null : frac(d - b, a - c));
/** x² + bx + c = 0 with integer roots p, q (x = −p or −q for (x + p)(x + q)): returns the roots sorted, or null when there are none in the integers. */
export const integerRoots = (a: number, b: number, c: number): [number, number] | null => {
  const disc = b * b - 4 * a * c;
  const root = exactRoot(disc, 2);
  if (disc < 0 || root === null) return null;
  const r1 = (-b - root) / (2 * a);
  const r2 = (-b + root) / (2 * a);
  return Number.isInteger(r1) && Number.isInteger(r2) ? [r1, r2] : null;
};
/** Two simultaneous equations a1x + b1y = c1 and a2x + b2y = c2: the unique solution (Cramer), or null. */
export const solveSimultaneous = (a1: number, b1: number, c1: number, a2: number, b2: number, c2: number): { x: Frac; y: Frac } | null => {
  const det = a1 * b2 - a2 * b1;
  if (det === 0) return null;
  return { x: frac(c1 * b2 - c2 * b1, det), y: frac(a1 * c2 - a2 * c1, det) };
};

/** Inequality ax + b > c (or <, ≥, ≤): the solution as [boundary, direction]; dividing by a negative flips the direction. */
export type Cmp = '>' | '<' | '≥' | '≤';
const FLIP: Record<Cmp, Cmp> = { '>': '<', '<': '>', '≥': '≤', '≤': '≥' };
export const solveInequality = (a: number, b: number, op: Cmp, c: number): { bound: Frac; op: Cmp } => ({ bound: frac(c - b, a), op: a < 0 ? FLIP[op] : op });
export const interval = (bound: Frac, op: Cmp): string => {
  const v = fracStr(bound);
  if (op === '>') return `(${v}; ∞)`;
  if (op === '≥') return `[${v}; ∞)`;
  if (op === '<') return `(−∞; ${v})`;
  return `(−∞; ${v}]`;
};

// ---------- trigonometry ----------

const RAD = Math.PI / 180;
export const sinD = (deg: number): number => Math.sin(deg * RAD);
export const cosD = (deg: number): number => Math.cos(deg * RAD);
export const tanD = (deg: number): number => Math.tan(deg * RAD);
/** The exact special-angle table (0°, 30°, 45°, 60°, 90°) as written in the lesson. */
export const SPECIAL: Record<number, { sin: string; cos: string; tan: string }> = {
  0: { sin: '0', cos: '1', tan: '0' },
  30: { sin: '1/2', cos: '√3/2', tan: '1/√3' },
  45: { sin: '1/√2', cos: '1/√2', tan: '1' },
  60: { sin: '√3/2', cos: '1/2', tan: '√3' },
  90: { sin: '1', cos: '0', tan: 'undefined' },
};
/** Quadrant of an angle in [0°; 360°): 1 to 4 (axes belong to none: returns 0). */
export const quadrant = (deg: number): 0 | 1 | 2 | 3 | 4 => {
  const d = ((deg % 360) + 360) % 360;
  if (d % 90 === 0) return 0;
  return (Math.floor(d / 90) + 1) as 1 | 2 | 3 | 4;
};
/** Signs of [sin, cos, tan] in a quadrant (ASTC: All, Sin, Tan, Cos). */
export const SIGNS: Record<1 | 2 | 3 | 4, [string, string, string]> = { 1: ['+', '+', '+'], 2: ['+', '−', '−'], 3: ['−', '−', '+'], 4: ['−', '+', '−'] };
/** The reference angle (acute) of an angle in a quadrant. */
export const referenceAngle = (deg: number): number => {
  const d = ((deg % 360) + 360) % 360;
  const q = quadrant(d);
  return q === 1 ? d : q === 2 ? 180 - d : q === 3 ? d - 180 : 360 - d;
};
/** A point (x; y) on the terminal arm: r = √(x² + y²), sinθ = y/r, cosθ = x/r, tanθ = y/x. */
export const ratiosFromPoint = (x: number, y: number): { r: number; sin: Frac; cos: Frac; tan: Frac } => {
  const r = Math.sqrt(x * x + y * y);
  const ri = Number.isInteger(r) ? r : NaN;
  return { r, sin: frac(y, ri), cos: frac(x, ri), tan: frac(y, x) };
};
/** Right triangle: side from a known side and angle, rounded. opposite = hyp·sinθ, adjacent = hyp·cosθ, opposite = adj·tanθ. */
export const oppositeFromHyp = (hyp: number, deg: number, dp = 1): number => roundTo(hyp * sinD(deg), dp);
export const adjacentFromHyp = (hyp: number, deg: number, dp = 1): number => roundTo(hyp * cosD(deg), dp);
export const oppositeFromAdj = (adj: number, deg: number, dp = 1): number => roundTo(adj * tanD(deg), dp);
export const hypFromOpp = (opp: number, deg: number, dp = 1): number => roundTo(opp / sinD(deg), dp);
/** The angle (degrees, rounded) whose tan is opp/adj, sin is opp/hyp, cos is adj/hyp. */
export const angleFromTan = (opp: number, adj: number, dp = 1): number => roundTo(Math.atan(opp / adj) / RAD, dp);
export const angleFromSin = (opp: number, hyp: number, dp = 1): number => roundTo(Math.asin(opp / hyp) / RAD, dp);
export const angleFromCos = (adj: number, hyp: number, dp = 1): number => roundTo(Math.acos(adj / hyp) / RAD, dp);
export const pythagoras = (a: number, b: number): number => Math.sqrt(a * a + b * b);
