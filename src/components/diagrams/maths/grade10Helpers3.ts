import { frac, type Frac } from './grade10Helpers';
import { lineGradient } from './grade10Helpers2';

/**
 * Grade 10 Mathematics, Term 3: analytical geometry, finance, statistics and measurement arithmetic. Every number in a lesson, picture or bank key comes
 * from these functions and grade10Helpers3.test.ts pins the values.
 */

// ---------- analytical geometry ----------

export type P = [number, number];
export const distanceSquared = (a: P, b: P): number => (b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2;
/** The distance when it is a whole number or a half, else null (the squared distance tells the rest). */
export const distanceExact = (a: P, b: P): number | null => {
  const d2 = distanceSquared(a, b);
  const r = Math.sqrt(d2);
  return Number.isInteger(r) ? r : null;
};
export const midpoint = (a: P, b: P): [Frac, Frac] => [frac(a[0] + b[0], 2), frac(a[1] + b[1], 2)];
export const gradient = (a: P, b: P): Frac => lineGradient(a[0], a[1], b[0], b[1]);
/** The gradient of a line perpendicular to one with gradient m = n/d: −d/n (m ≠ 0). */
export const perpendicular = (m: Frac): Frac | null => (m[0] === 0 ? null : frac(-m[1], m[0]));
/** The end point B of AB when M is the midpoint: B = 2M − A. */
export const endFromMidpoint = (a: P, m: P): P => [2 * m[0] - a[0], 2 * m[1] - a[1]];
export const collinear = (a: P, b: P, c: P): boolean => (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
/** The fourth vertex D of parallelogram ABCD (diagonals bisect each other): D = A + C − B. */
export const parallelogramD = (a: P, b: P, c: P): P => [a[0] + c[0] - b[0], a[1] + c[1] - b[1]];

// ---------- finance and growth ----------

/** Round to the nearest cent (half up), as a number. */
export const cents = (n: number): number => Math.round(n * 100 + 1e-7) / 100;
/** R12 345,60: rand, a space between thousands, a decimal comma and two decimals. */
export const rand = (n: number): string => {
  const [int, dec] = cents(n).toFixed(2).split('.');
  return `R${int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')},${dec}`;
};
/** A whole-rand amount without cents: R4 960. */
export const randWhole = (n: number): string => `R${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
export const simpleAmount = (p: number, ratePct: number, years: number): number => p * (1 + (ratePct / 100) * years);
export const simpleInterest = (p: number, ratePct: number, years: number): number => p * (ratePct / 100) * years;
export const compoundAmount = (p: number, ratePct: number, periods: number): number => p * (1 + ratePct / 100) ** periods;
/** Monthly compounding: the rate per period is ratePct/12 and there are 12 × years periods. */
export const compoundMonthly = (p: number, annualPct: number, years: number): number => p * (1 + annualPct / 100 / 12) ** (12 * years);
/** Hire purchase: a deposit, then simple interest on the balance for the term; returns the total paid and the monthly instalment. */
export const hirePurchase = (price: number, depositPct: number, ratePct: number, years: number): { deposit: number; balance: number; amount: number; total: number; monthly: number } => {
  const deposit = (price * depositPct) / 100;
  const balance = price - deposit;
  const amount = simpleAmount(balance, ratePct, years);
  return { deposit, balance, amount, total: amount + deposit, monthly: amount / (12 * years) };
};
/** The years needed for simple interest to reach a target amount: n = (A/P − 1)/i. */
export const simpleYearsTo = (p: number, ratePct: number, target: number): number => (target / p - 1) / (ratePct / 100);
/** Principal from a simple-interest amount: P = A/(1 + in). */
export const simplePrincipal = (amount: number, ratePct: number, years: number): number => amount / (1 + (ratePct / 100) * years);

// ---------- statistics ----------

export const sortAsc = (xs: readonly number[]): number[] => [...xs].sort((a, b) => a - b);
export const median = (xs: readonly number[]): number => {
  const s = sortAsc(xs);
  const n = s.length;
  return n % 2 === 1 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
};
/** Quartiles by the halves method: Q2 is the median, Q1 and Q3 the medians of the lower and upper halves (for an odd n the middle value is left out of both halves). */
export const quartiles = (xs: readonly number[]): { q1: number; q2: number; q3: number } => {
  const s = sortAsc(xs);
  const n = s.length;
  const lower = s.slice(0, Math.floor(n / 2));
  const upper = s.slice(Math.ceil(n / 2));
  return { q1: median(lower), q2: median(s), q3: median(upper) };
};
export const fiveNumber = (xs: readonly number[]): { min: number; q1: number; median: number; q3: number; max: number; iqr: number; range: number } => {
  const s = sortAsc(xs);
  const q = quartiles(s);
  return { min: s[0], q1: q.q1, median: q.q2, q3: q.q3, max: s[s.length - 1], iqr: q.q3 - q.q1, range: s[s.length - 1] - s[0] };
};
export const mean = (xs: readonly number[]): number => xs.reduce((a, b) => a + b, 0) / xs.length;

export interface ClassRow { from: number; to: number; freq: number }
export const classMidpoint = (c: ClassRow): number => (c.from + c.to) / 2;
export const groupedMean = (rows: readonly ClassRow[]): number => rows.reduce((s, r) => s + classMidpoint(r) * r.freq, 0) / rows.reduce((s, r) => s + r.freq, 0);
export const modalClass = (rows: readonly ClassRow[]): ClassRow => rows.reduce((best, r) => (r.freq > best.freq ? r : best), rows[0]);
/** The class that holds the median value(s): the class of the middle position (n odd) or of both middle positions (n even), null when the two middle values sit in different classes. */
export const medianClass = (rows: readonly ClassRow[]): ClassRow | null => {
  const n = rows.reduce((s, r) => s + r.freq, 0);
  const positions = n % 2 === 1 ? [(n + 1) / 2] : [n / 2, n / 2 + 1];
  const classOf = (pos: number): ClassRow => {
    let cum = 0;
    for (const r of rows) {
      cum += r.freq;
      if (pos <= cum) return r;
    }
    return rows[rows.length - 1];
  };
  const found = positions.map(classOf);
  return found.every((c) => c === found[0]) ? found[0] : null;
};
export const cumulative = (rows: readonly ClassRow[]): number[] => rows.reduce<number[]>((acc, r) => [...acc, (acc[acc.length - 1] ?? 0) + r.freq], []);

// ---------- measurement ----------

export const sphereVolume = (r: number): number => (4 / 3) * Math.PI * r ** 3;
export const sphereArea = (r: number): number => 4 * Math.PI * r ** 2;
export const coneSlant = (r: number, h: number): number => Math.sqrt(r * r + h * h);
export const coneVolume = (r: number, h: number): number => (Math.PI * r * r * h) / 3;
export const coneCurvedArea = (r: number, h: number): number => Math.PI * r * coneSlant(r, h);
export const coneTotalArea = (r: number, h: number): number => Math.PI * r * r + coneCurvedArea(r, h);
export const pyramidVolume = (base: number, height: number): number => (base * base * height) / 3;
/** Square-based pyramid: the base plus four triangles of base × slant height ÷ 2. */
export const pyramidArea = (base: number, slant: number): number => base * base + 4 * ((base * slant) / 2);
export const cylinderVolume = (r: number, h: number): number => Math.PI * r * r * h;
export const cylinderArea = (r: number, h: number): number => 2 * Math.PI * r * r + 2 * Math.PI * r * h;
export const hemisphereArea = (r: number): number => 3 * Math.PI * r * r; // curved 2πr² + flat πr²
export const prismVolume = (baseArea: number, height: number): number => baseArea * height;
/** cm³ to litres: 1 000 cm³ = 1 ℓ. */
export const cm3ToLitres = (v: number): number => v / 1000;

// ---------- trigonometry in two dimensions ----------

const rad = (d: number): number => (d * Math.PI) / 180;
/**
 * The top of a tower is seen at an angle of elevation `far` from one point and `near` (the bigger angle) from a point `gap` closer along the same line.
 * With x the distance from the nearer point: h = x tan(near) = (x + gap) tan(far), so x = gap·tan(far) / (tan(near) − tan(far)).
 */
export const towerHeight = (near: number, far: number, gap: number): { x: number; h: number } => {
  const x = (gap * Math.tan(rad(far))) / (Math.tan(rad(near)) - Math.tan(rad(far)));
  return { x, h: x * Math.tan(rad(near)) };
};
/** The height of an isosceles triangle (equal sides s, apex angle a): s·cos(a/2); the base is 2·s·sin(a/2). */
export const isoscelesHeight = (side: number, apex: number): number => side * Math.cos(rad(apex / 2));
export const isoscelesBase = (side: number, apex: number): number => 2 * side * Math.sin(rad(apex / 2));
