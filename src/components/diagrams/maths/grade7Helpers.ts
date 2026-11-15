import { hcf, simplify } from './mathsHelpers';

/**
 * Arithmetic behind the Grade 7 Mathematics lessons (Common Fractions, Integers, Exponents). Every
 * number in a worked example or picture comes from these functions, and grade7Helpers.test.ts pins
 * the values, so the lesson text cannot disagree with the arithmetic.
 */

// ---------- Common fractions ----------

/** Lowest common multiple of two positive whole numbers. */
export const lcm = (a: number, b: number): number => (a / hcf(a, b)) * b;

export interface FractionStep {
  /** The common denominator (the LCM of the two denominators). */
  d: number;
  /** The two fractions rewritten over d: their numerators. */
  a: number;
  b: number;
  /** The result over d before simplifying. */
  n: number;
  /** The result in lowest terms. */
  simplest: { n: number; d: number; by: number };
}

const overCommon = (n1: number, d1: number, n2: number, d2: number) => {
  const d = lcm(d1, d2);
  return { d, a: n1 * (d / d1), b: n2 * (d / d2) };
};

/** n1/d1 + n2/d2 through the common denominator. */
export const addFractions = (n1: number, d1: number, n2: number, d2: number): FractionStep => {
  const { d, a, b } = overCommon(n1, d1, n2, d2);
  return { d, a, b, n: a + b, simplest: simplify(a + b, d) };
};

/** n1/d1 - n2/d2 through the common denominator (the answer must not be negative). */
export const subtractFractions = (n1: number, d1: number, n2: number, d2: number): FractionStep => {
  const { d, a, b } = overCommon(n1, d1, n2, d2);
  if (a < b) throw new Error('negative fraction');
  return { d, a, b, n: a - b, simplest: simplify(a - b, d) };
};

/** Which of two fractions is bigger, after writing both over the common denominator: 1, -1 or 0. */
export const biggerFraction = (n1: number, d1: number, n2: number, d2: number): { d: number; a: number; b: number; sign: 1 | -1 | 0 } => {
  const { d, a, b } = overCommon(n1, d1, n2, d2);
  return { d, a, b, sign: a > b ? 1 : a < b ? -1 : 0 };
};

export interface Mixed {
  whole: number;
  n: number;
  d: number;
}

/** 1 1/2 + 2 1/4: add the wholes, add the fractions, carry when the fraction part reaches a whole. */
export const addMixed = (m1: Mixed, m2: Mixed): { wholes: number; fraction: FractionStep; result: Mixed } => {
  const fraction = addFractions(m1.n, m1.d, m2.n, m2.d);
  let whole = m1.whole + m2.whole;
  let n = fraction.simplest.n;
  const d = fraction.simplest.d;
  if (n >= d) {
    whole += Math.floor(n / d);
    n = n % d;
  }
  return { wholes: m1.whole + m2.whole, fraction, result: { whole, n, d: n === 0 ? 1 : d } };
};

/** n/d of an amount: first find one part (amount / d), then take n of them. The amount must split evenly. */
export const fractionOf = (n: number, d: number, amount: number): { one: number; result: number } => {
  if (amount % d !== 0) throw new Error('amount does not split into equal parts');
  const one = amount / d;
  return { one, result: one * n };
};

// ---------- Integers ----------

/** The jump that takes you from a to b on the number line: positive = right, negative = left. */
export const jump = (from: number, to: number): number => to - from;

/** Sort ascending (farther left is smaller). */
export const ascending = (values: number[]): number[] => [...values].sort((x, y) => x - y);

/** The sign rule for a product or quotient: same signs give +, different signs give -. */
export const productSign = (a: number, b: number): '+' | '-' => (a < 0 === b < 0 ? '+' : '-');

/** Exact integer division (the quotient must be a whole number). */
export const divideExact = (a: number, b: number): number => {
  if (b === 0 || a % b !== 0) throw new Error('not an exact division');
  return a / b;
};

/** Distance from zero. */
export const absolute = (n: number): number => Math.abs(n);

/** "−5" with a real minus sign, as printed in South African textbooks. */
export const signed = (n: number): string => (n < 0 ? `−${Math.abs(n)}` : String(n));

// ---------- Exponents ----------

export const power = (base: number, exp: number): number => base ** exp;

/** 2^5 written out: "2 × 2 × 2 × 2 × 2". */
export const expand = (base: number, exp: number): string => Array.from({ length: exp }, () => String(base)).join(' × ');

/** Same base, multiply: the exponents add. Returns the new exponent and checks it against the values. */
export const sameBaseProduct = (base: number, e1: number, e2: number): { exp: number; value: number } => {
  const exp = e1 + e2;
  if (power(base, e1) * power(base, e2) !== power(base, exp)) throw new Error('law failed');
  return { exp, value: power(base, exp) };
};

/** Same base, divide: the exponents subtract (e1 must be at least e2). */
export const sameBaseQuotient = (base: number, e1: number, e2: number): { exp: number; value: number } => {
  const exp = e1 - e2;
  if (exp < 0 || power(base, e1) / power(base, e2) !== power(base, exp)) throw new Error('law failed');
  return { exp, value: power(base, exp) };
};

/** (base^e1)^e2: the exponents multiply. */
export const powerOfPower = (base: number, e1: number, e2: number): { exp: number; value: number } => {
  const exp = e1 * e2;
  if (power(power(base, e1), e2) !== power(base, exp)) throw new Error('law failed');
  return { exp, value: power(base, exp) };
};

/** The perfect cubes 1, 8, 27 ... up to a limit. */
export const perfectCubes = (limit: number): number[] => {
  const out: number[] = [];
  for (let k = 1; k ** 3 <= limit; k++) out.push(k ** 3);
  return out;
};

/** Superscript digits, so 2^5 can be written 2⁵ in plain text. */
export const sup = (n: number): string => String(n).replace(/\d/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(c)]);

// ---------- Whole numbers ----------

/** Sum of the digits: n is divisible by 3 (or 9) when its digit sum is. */
export const digitSum = (n: number): number => String(Math.abs(n)).split('').reduce((a, c) => a + Number(c), 0);

/** Prime factors in ascending order: 84 gives [2, 2, 3, 7]. */
export const primeFactors = (n: number): number[] => {
  const out: number[] = [];
  let rest = n;
  for (let p = 2; p * p <= rest; p++) {
    while (rest % p === 0) {
      out.push(p);
      rest /= p;
    }
  }
  if (rest > 1) out.push(rest);
  return out;
};

/** The factor-tree steps for n: each step splits a composite into its smallest prime and the rest. 84 gives 84 = 2 x 42, 42 = 2 x 21, 21 = 3 x 7. */
export const factorTree = (n: number): { n: number; p: number; rest: number }[] => {
  const steps: { n: number; p: number; rest: number }[] = [];
  let cur = n;
  while (primeFactors(cur).length > 1) {
    const p = primeFactors(cur)[0];
    steps.push({ n: cur, p, rest: cur / p });
    cur = cur / p;
  }
  return steps;
};

const product = (xs: number[]): number => xs.reduce((a, b) => a * b, 1);

/** The prime factors of a and b shared (overlap) and not shared: HCF = product of the shared ones, LCM = shared x the rest of both. */
export const primeVenn = (a: number, b: number): { onlyA: number[]; common: number[]; onlyB: number[]; hcf: number; lcm: number } => {
  const onlyA = primeFactors(a);
  const onlyB = primeFactors(b);
  const common: number[] = [];
  for (const p of [...onlyA]) {
    const j = onlyB.indexOf(p);
    if (j >= 0) {
      common.push(p);
      onlyB.splice(j, 1);
      onlyA.splice(onlyA.indexOf(p), 1);
    }
  }
  const h = product(common);
  const l = h * product(onlyA) * product(onlyB);
  return { onlyA, common, onlyB, hcf: h, lcm: l };
};

/** The largest number from the digits (digits in descending order). */
export const largestFrom = (digits: number[]): number => Number([...digits].sort((x, y) => y - x).join(''));
/** The smallest number from the digits (no leading zero is assumed). */
export const smallestFrom = (digits: number[]): number => Number([...digits].sort((x, y) => x - y).join(''));

/** A ratio in simplest form: 15:25 gives 3:5 (divide by 5). */
export const simplifyRatio = (a: number, b: number): { a: number; b: number; by: number } => {
  const by = hcf(a, b);
  return { a: a / by, b: b / by, by };
};

/** Average rate = distance / time. */
export const rateOf = (distance: number, time: number): number => distance / time;

/** 9742 written the South African way with a (non-breaking) space: 9 742. */
export const spaced = (n: number): string => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// ---------- Decimal fractions (all arithmetic in thousandths so no floating-point noise) ----------

const K = 1000;
const k = (x: number): number => Math.round(x * K);

/** A decimal with the SA decimal comma: 3.6 gives "3,6"; places fixes the digits after the comma (3,60). */
export const dec = (x: number, places?: number): string => {
  const s = places === undefined ? String(Math.round(x * K) / K) : x.toFixed(places);
  return s.replace('.', ',');
};
export const addDec = (a: number, b: number): number => (k(a) + k(b)) / K;
export const subDec = (a: number, b: number): number => (k(a) - k(b)) / K;
export const mulDec = (a: number, b: number): number => (k(a) * k(b)) / (K * K);
export const divDec = (a: number, b: number): number => {
  if (k(a) % k(b) !== 0) throw new Error('not an exact decimal division');
  return k(a) / k(b);
};

/** Round to a number of decimal places (half rounds up): 4,678 to 1 place is 4,7. */
export const roundDec = (x: number, places: number): number => {
  const f = 10 ** places;
  return Math.round(k(x) / (K / f)) / f;
};

/** The digit of x in a decimal place: place 1 = tenths, 2 = hundredths. */
export const digitAt = (x: number, place: number): number => Math.floor(Math.abs(k(x)) / (K / 10 ** place)) % 10;

/** 1 if a > b, -1 if a < b, 0 if equal. */
export const compareDec = (a: number, b: number): -1 | 0 | 1 => (k(a) > k(b) ? 1 : k(a) < k(b) ? -1 : 0);

// ---------- Geometry ----------

export interface Pt {
  x: number;
  y: number;
}

/** Triangle with sides a (BC), b (CA), c (AB): A at the origin, B on the x-axis. Throws if the sides cannot close. */
export const triangleFromSides = (a: number, b: number, c: number): { A: Pt; B: Pt; C: Pt } => {
  if (a + b <= c || a + c <= b || b + c <= a) throw new Error('these sides do not make a triangle');
  const x = (b * b + c * c - a * a) / (2 * c);
  return { A: { x: 0, y: 0 }, B: { x: c, y: 0 }, C: { x, y: Math.sqrt(b * b - x * x) } };
};

export const triangleType = (a: number, b: number, c: number): 'equilateral' | 'isosceles' | 'scalene' =>
  a === b && b === c ? 'equilateral' : a === b || b === c || a === c ? 'isosceles' : 'scalene';

/** The missing angle when the angles must add to `sum` (180 for a triangle, 360 for a quadrilateral). */
export const missingAngle = (known: number[], sum: number): number => sum - known.reduce((a, b) => a + b, 0);

/** Interior angle sum of a polygon with n sides: (n - 2) x 180. */
export const polygonAngleSum = (n: number): number => (n - 2) * 180;
export const regularInterior = (n: number): number => polygonAngleSum(n) / n;
export const regularExterior = (n: number): number => 360 / n;

export const polygonName = (n: number): string =>
  ({ 3: 'triangle', 4: 'quadrilateral', 5: 'pentagon', 6: 'hexagon', 7: 'heptagon', 8: 'octagon', 9: 'nonagon', 10: 'decagon' } as Record<number, string>)[n] ?? `${n}-gon`;

/** The two points where circles of radius r centred on (x1, 0) and (x2, 0) meet: the corners of a perpendicular bisector / an equilateral triangle. */
export const arcMeet = (x1: number, x2: number, r: number): [Pt, Pt] => {
  const mid = (x1 + x2) / 2;
  const half = (x2 - x1) / 2;
  if (r <= Math.abs(half)) throw new Error('arcs of this radius never meet');
  const h = Math.sqrt(r * r - half * half);
  return [{ x: mid, y: h }, { x: mid, y: -h }];
};

/** Perimeter and area of a polygon given by its corners in order (shoelace formula). */
export const polygonMeasures = (pts: Pt[]): { perimeter: number; area: number } => {
  let area = 0;
  let perimeter = 0;
  pts.forEach((p, i) => {
    const q = pts[(i + 1) % pts.length];
    area += p.x * q.y - q.x * p.y;
    perimeter += Math.hypot(q.x - p.x, q.y - p.y);
  });
  return { perimeter: Math.round(perimeter * 1e6) / 1e6, area: Math.abs(area) / 2 };
};

/** An L-shape from a wide bottom rectangle (w1 x h1) with a narrower rectangle (w2 x h2) on top at the left. */
export const lShape = (w1: number, h1: number, w2: number, h2: number): { corners: Pt[]; area1: number; area2: number; area: number; perimeter: number } => {
  const corners: Pt[] = [{ x: 0, y: 0 }, { x: w1, y: 0 }, { x: w1, y: h1 }, { x: w2, y: h1 }, { x: w2, y: h1 + h2 }, { x: 0, y: h1 + h2 }];
  const m = polygonMeasures(corners);
  return { corners, area1: w1 * h1, area2: w2 * h2, area: m.area, perimeter: m.perimeter };
};
