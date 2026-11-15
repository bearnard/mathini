import { applyRule, type Rule } from './mathsHelpers';

/**
 * Arithmetic behind the Grade 7 Mathematics lessons, batch 2 and 3 (functions, algebra, graphs,
 * surface area and volume). Every number in a worked example or picture comes from these functions,
 * and grade7Helpers2.test.ts pins the values.
 */

// ---------- Functions and relationships ----------

/** The rule y = m·x + c that fits every pair in the table, or null when no such rule fits. */
export const linearRule = (xs: number[], ys: number[]): { m: number; c: number } | null => {
  if (xs.length < 2 || xs.length !== ys.length) return null;
  const m = (ys[1] - ys[0]) / (xs[1] - xs[0]);
  const c = ys[0] - m * xs[0];
  return xs.every((x, i) => m * x + c === ys[i]) ? { m, c } : null;
};

/** y = m·x + c. */
export const evalLinear = (m: number, c: number, x: number): number => m * x + c;

/** "y = 3x + 1", "y = 2x", "y = x − 2" (real minus sign). */
export const ruleFormula = (m: number, c: number, x = 'x', y = 'y'): string => {
  const mx = m === 1 ? x : `${m}${x}`;
  return c === 0 ? `${y} = ${mx}` : `${y} = ${mx} ${c < 0 ? '−' : '+'} ${Math.abs(c)}`;
};

/** The differences between neighbouring values: 4, 7, 10 gives [3, 3]. */
export const differences = (values: number[]): number[] => values.slice(1).map((v, i) => v - values[i]);

/** The inverse of one flow-diagram step: + undoes −, × undoes ÷. */
export const inverseRule = (r: Rule): Rule => ({ op: ({ '+': '−', '−': '+', '×': '÷', '÷': '×' } as const)[r.op], n: r.n });

/** Run a flow diagram backwards from an output: undo the LAST step first. Returns each value on the way back (ending with the input). */
export const runBackwards = (rules: Rule[], output: number): { rule: Rule; value: number }[] => {
  const out: { rule: Rule; value: number }[] = [];
  let v = output;
  for (const r of [...rules].reverse()) {
    const inv = inverseRule(r);
    v = applyRule(inv, v);
    out.push({ rule: inv, value: v });
  }
  return out;
};

// ---------- Algebraic expressions and equations ----------

/** A term such as 3x (coef 3, letter 'x') or a number (letter ''). */
export interface Term {
  coef: number;
  letter: string;
}

/** Collect like terms: add the coefficients of terms with the same letter; numbers go last. Zero terms drop out. */
export const collectLike = (terms: Term[]): Term[] => {
  const order: string[] = [];
  const sum = new Map<string, number>();
  for (const t of terms) {
    if (!sum.has(t.letter)) order.push(t.letter);
    sum.set(t.letter, (sum.get(t.letter) ?? 0) + t.coef);
  }
  return [...order.filter((l) => l !== ''), ...order.filter((l) => l === '')].map((letter) => ({ coef: sum.get(letter)!, letter })).filter((t) => t.coef !== 0);
};

/** Terms as text with real minus signs: [{3,'x'},{-2,''}] gives "3x − 2". */
export const termsText = (terms: Term[]): string =>
  terms
    .map((t, i) => {
      const body = t.letter === '' ? String(Math.abs(t.coef)) : `${Math.abs(t.coef) === 1 ? '' : Math.abs(t.coef)}${t.letter}`;
      if (i === 0) return t.coef < 0 ? `−${body}` : body;
      return `${t.coef < 0 ? '−' : '+'} ${body}`;
    })
    .join(' ') || '0';

/** Value of an expression for a value of its letter. */
export const evaluate = (terms: Term[], value: number): number => terms.reduce((s, t) => s + t.coef * (t.letter === '' ? 1 : value), 0);

/** Solve a·x + b = rhs by doing the same to both sides: first undo + b, then undo × a. The answer must be whole. */
export const solveLinear = (a: number, b: number, rhs: number): { afterB: number; x: number } => {
  const afterB = rhs - b;
  if (afterB % a !== 0) throw new Error('not a whole-number solution');
  return { afterB, x: afterB / a };
};

// ---------- Graphs ----------

export type AxisPlace = 'origin' | 'x-axis' | 'y-axis' | 'neither';

/** Where a point lies: on the x-axis y = 0, on the y-axis x = 0. */
export const axisPlace = (x: number, y: number): AxisPlace => (x === 0 && y === 0 ? 'origin' : y === 0 ? 'x-axis' : x === 0 ? 'y-axis' : 'neither');

export type Trend = 'increasing' | 'decreasing' | 'constant';

/** The trend of each piece of a graph through the points (x ascending). */
export const trends = (pts: [number, number][]): Trend[] =>
  pts.slice(1).map(([, y], i) => (y > pts[i][1] ? 'increasing' : y < pts[i][1] ? 'decreasing' : 'constant'));

// ---------- Surface area and volume ----------

/** A cube of side s: one face, six faces, and volume. */
export const cubeMeasures = (s: number): { face: number; surface: number; volume: number } => ({ face: s * s, surface: 6 * s * s, volume: s ** 3 });

/** A rectangular prism l × b × h: the three different faces (each appears twice), surface area and volume. */
export const prismSurface = (l: number, b: number, h: number): { lb: number; lh: number; bh: number; surface: number; volume: number } => {
  const lb = l * b;
  const lh = l * h;
  const bh = b * h;
  return { lb, lh, bh, surface: 2 * (lb + lh + bh), volume: l * b * h };
};

/** Multiply every edge by k: the volume is multiplied by k × k × k. */
export const volumeScale = (k: number): number => k ** 3;

/** Squares in a cube net, as [column, row] cells of a 4 × 3 grid (the cross net). */
export const CROSS_NET: [number, number][] = [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]];

