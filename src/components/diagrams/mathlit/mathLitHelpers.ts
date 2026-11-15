/**
 * Numbers and layout for the Mathematical Literacy pictures (VAT, taxable income, map scale). Every number a picture shows is computed
 * here and asserted in mathLitHelpers.test.ts. South African formatting: a decimal comma and a space between thousands.
 */

const NBSP = ' ';
const MINUS = '−';

const round2 = (n: number): number => Math.round((n + Number.EPSILON) * 100) / 100;

/** 1234567.5 -> "1 234 567,5" (non-breaking spaces, decimal comma). */
export const sa = (n: number): string => {
  const [int, dec] = String(round2(Math.abs(n))).split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  return `${n < 0 ? MINUS : ''}${grouped}${dec ? ',' + dec : ''}`;
};

/** "R230", "R210 000", "R19,50". */
export const rand = (n: number): string => `R${sa(n)}`;

// ---------- VAT ----------

export interface VatFacts {
  rate: number; // percent, 15
  excl: number;
  vat: number;
  incl: number;
  /** The share of the price INCLUDING VAT that is VAT, as the pair (rate, 100 + rate): 15/115. */
  fractionOfIncl: [number, number];
  /** VAT worked back from the price including VAT: incl x 15/115. */
  vatFromIncl: number;
  multiplier: string; // "1,15"
}

export const vatFacts = (excl: number, rate = 15): VatFacts => {
  if (!(excl > 0) || !(rate > 0)) throw new RangeError('a positive price and rate');
  const vat = round2((excl * rate) / 100);
  const incl = round2(excl + vat);
  return { rate, excl, vat, incl, fractionOfIncl: [rate, 100 + rate], vatFromIncl: round2((incl * rate) / (100 + rate)), multiplier: sa(1 + rate / 100) };
};

// ---------- Taxable income ----------

export interface TaxSteps {
  gross: number;
  deductions: number;
  taxable: number;
  taxBeforeRebate: number;
  rebate: number;
  payable: number;
}

/** SARS 2026/27 tax year (1 March 2026 to 28 February 2027), as the Grade 11 and 12 taxation lessons teach it. Tax tables change every Budget. */
export const TAX_YEAR = '2026/27';
export const FIRST_BRACKET_TOP = 245_100;
export const FIRST_BRACKET_RATE = 18; // percent
export const PRIMARY_REBATE = 17_820;

/** Tax before rebate on taxable income inside the first bracket (18% up to R245 100). Refuses income above it: the picture only teaches the first bracket. */
export const firstBracketTax = (taxable: number): number => {
  if (!(taxable >= 0) || taxable > FIRST_BRACKET_TOP) throw new RangeError(`taxable income from 0 to ${FIRST_BRACKET_TOP}`);
  return Math.round((taxable * FIRST_BRACKET_RATE) / 100);
};

export const taxSteps = (gross: number, deductions: number, taxBeforeRebate: number, rebate: number): TaxSteps => {
  if (deductions < 0 || deductions > gross) throw new RangeError('deductions between 0 and gross income');
  if (rebate < 0 || rebate > taxBeforeRebate) throw new RangeError('a rebate between 0 and the tax before rebate');
  return { gross, deductions, taxable: gross - deductions, taxBeforeRebate, rebate, payable: taxBeforeRebate - rebate };
};

/** Widths (in drawing units) of a two-part bar whose parts add up to `total`, drawn `width` units wide. */
export const splitWidths = (a: number, b: number, width: number): [number, number] => {
  const total = a + b;
  return [(a / total) * width, (b / total) * width];
};

// ---------- Map scale ----------

export interface ScaleDistance {
  mapCm: number;
  denominator: number;
  cm: number;
  m: number;
  km: number;
}

/** A distance on the map and what it is on the ground for a ratio scale 1 : denominator. */
export const scaleDistance = (mapCm: number, denominator: number): ScaleDistance => {
  if (!(mapCm > 0) || !Number.isInteger(denominator) || denominator < 1) throw new RangeError('a positive map distance and a whole-number denominator');
  const cm = mapCm * denominator;
  return { mapCm, denominator, cm, m: cm / 100, km: cm / 100_000 };
};

/** How long, in cm on the map, one real kilometre is for a ratio scale 1 : denominator. */
export const mapCmPerKm = (denominator: number): number => 100_000 / denominator;

/** Positions (cm along the map) of the 0, 1, 2 ... km marks of a line scale, and the whole-number cm marks of a ruler beside it. */
export const lineScaleMarks = (denominator: number, kmCount: number): { km: number[]; ruler: number[] } => {
  const per = mapCmPerKm(denominator);
  const km = Array.from({ length: kmCount + 1 }, (_, i) => i * per);
  const ruler = Array.from({ length: Math.floor(km[km.length - 1]) + 1 }, (_, i) => i);
  return { km, ruler };
};

// ---------- Patterns: a rate, as a table and as a graph ----------

export interface LinearPoint { x: number; y: number }

/** y = rate x for each x: the table row and the graph points are the same numbers. */
export const linearPoints = (rate: number, xs: number[]): LinearPoint[] => {
  if (!(rate > 0) || xs.length < 2) throw new RangeError('a positive rate and at least two x values');
  return xs.map((x) => ({ x, y: rate * x }));
};

/** Every step of 1 in x adds `rate` to y: a constant rate gives a straight line through the origin. */
export const stepRise = (points: LinearPoint[]): number => {
  const rises = new Set(points.slice(1).map((p, i) => (p.y - points[i].y) / (p.x - points[i].x)));
  if (rises.size !== 1) throw new RangeError('the points are not on one straight line');
  return [...rises][0];
};

// ---------- Plans: a scale drawing ----------

export interface PlanRoom {
  scale: number;
  planWidthCm: number;
  planDepthCm: number;
  realWidth: ScaleDistance;
  realDepth: ScaleDistance;
  /** Real floor area in m2, from the real lengths. */
  areaM2: number;
}

/** A room drawn at 1 : scale. Real lengths are plan lengths x scale; the area is NOT plan area x scale (it is x scale squared). */
export const planRoom = (scale: number, planWidthCm: number, planDepthCm: number): PlanRoom => {
  const realWidth = scaleDistance(planWidthCm, scale);
  const realDepth = scaleDistance(planDepthCm, scale);
  return { scale, planWidthCm, planDepthCm, realWidth, realDepth, areaM2: realWidth.m * realDepth.m };
};

// ---------- Views: top, front and side of a solid made of unit cubes ----------

/** Heights of stacks of cubes, rows from the BACK to the FRONT, columns from left to right. 0 = no stack. */
export type HeightGrid = number[][];

export interface Views {
  /** The footprint seen from above: true where a stack stands (rows back to front, as in the grid). */
  top: boolean[][];
  /** Looking from the front: the tallest stack in each column, left to right. */
  front: number[];
  /** Looking from the right: the tallest stack in each row, FRONT first then back (left to right as the viewer sees it). */
  side: number[];
}

export const viewsOf = (grid: HeightGrid): Views => {
  if (grid.length === 0 || grid.some((r) => r.length !== grid[0].length) || grid.flat().some((h) => !Number.isInteger(h) || h < 0)) throw new RangeError('a rectangular grid of whole-number heights');
  const cols = grid[0].length;
  return {
    top: grid.map((r) => r.map((h) => h > 0)),
    front: Array.from({ length: cols }, (_, c) => Math.max(...grid.map((r) => r[c]))),
    side: [...grid].reverse().map((r) => Math.max(...r)),
  };
};
