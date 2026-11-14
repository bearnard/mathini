/**
 * Pure maths helpers behind the Grade 6 Term 4 diagrams (time, data handling, units).
 * The drawings read their numbers from these functions, so a picture can never disagree with the
 * arithmetic, and the arithmetic is unit-tested. No React here.
 */

/* ---------------- Time ---------------- */

const DAY = 24 * 60;

/** "13:15" or "9:05" to minutes after midnight. */
export const toMinutes = (hhmm: string): number => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm.trim());
  if (!m) throw new Error(`not a time: ${hhmm}`);
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 24 || min > 59 || (h === 24 && min > 0)) throw new Error(`not a time: ${hhmm}`);
  return (h * 60 + min) % DAY;
};

/** Minutes after midnight to 24-hour "HH:MM". */
export const fromMinutes = (total: number): string => {
  const t = ((total % DAY) + DAY) % DAY;
  return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
};

/** Whole minutes from start to end, going forward (past midnight if needed). 0 if equal. */
export const elapsedMinutes = (start: string, end: string): number =>
  (((toMinutes(end) - toMinutes(start)) % DAY) + DAY) % DAY;

/** "1 h 30 min", "45 min", "2 h". */
export const formatDuration = (minutes: number): string => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h && m) return `${h} h ${m} min`;
  if (h) return `${h} h`;
  return `${m} min`;
};

export interface CountOnStep {
  from: string;
  to: string;
  /** "+1 h" or "+30 min" */
  label: string;
}

/** Count on in whole hours first, then the minutes left (how the lesson teaches it). */
export const countOn = (start: string, end: string): CountOnStep[] => {
  const total = elapsedMinutes(start, end);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  const s = toMinutes(start);
  const steps: CountOnStep[] = [];
  let at = s;
  if (hours > 0) {
    steps.push({ from: fromMinutes(at), to: fromMinutes(at + hours * 60), label: `+${hours} h` });
    at += hours * 60;
  }
  if (minutes > 0) steps.push({ from: fromMinutes(at), to: fromMinutes(at + minutes), label: `+${minutes} min` });
  return steps;
};

/** Hand angles in degrees clockwise from 12. The hour hand creeps 0.5 degrees per minute. */
export const handAngles = (hour: number, minute: number): { hour: number; minute: number } => ({
  hour: (hour % 12) * 30 + minute * 0.5,
  minute: minute * 6,
});

/** 12-hour pm time to 24-hour: add 12 (12 pm stays 12). */
export const to24 = (hour12: number, pm: boolean): number => (pm ? (hour12 % 12) + 12 : hour12 % 12);

/* ---------------- Data handling ---------------- */

export interface Stats {
  n: number;
  sorted: number[];
  mean: number;
  median: number;
  /** Every value that appears most often; empty when no value repeats. */
  modes: number[];
  min: number;
  max: number;
  range: number;
}

export const stats = (data: number[]): Stats => {
  if (data.length === 0) throw new Error('no data');
  const sorted = [...data].sort((a, b) => a - b);
  const n = sorted.length;
  const sum = sorted.reduce((a, b) => a + b, 0);
  const mid = Math.floor(n / 2);
  const median = n % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  const counts = new Map<number, number>();
  for (const v of sorted) counts.set(v, (counts.get(v) ?? 0) + 1);
  const top = Math.max(...counts.values());
  const modes = top > 1 ? [...counts.entries()].filter(([, c]) => c === top).map(([v]) => v) : [];
  return { n, sorted, mean: sum / n, median, modes, min: sorted[0], max: sorted[n - 1], range: sorted[n - 1] - sorted[0] };
};

/* ---------------- Units ---------------- */

export type LadderKind = 'length' | 'mass' | 'capacity';

export interface LadderRung {
  unit: string;
  name: string;
  /** Size of one of this unit in the smallest unit of the ladder. */
  size: number;
}

export const LADDERS: Record<LadderKind, LadderRung[]> = {
  length: [
    { unit: 'km', name: 'kilometre', size: 1_000_000 },
    { unit: 'm', name: 'metre', size: 1000 },
    { unit: 'cm', name: 'centimetre', size: 10 },
    { unit: 'mm', name: 'millimetre', size: 1 },
  ],
  mass: [
    { unit: 't', name: 'tonne', size: 1_000_000_000 },
    { unit: 'kg', name: 'kilogram', size: 1_000_000 },
    { unit: 'g', name: 'gram', size: 1000 },
    { unit: 'mg', name: 'milligram', size: 1 },
  ],
  capacity: [
    { unit: 'kl', name: 'kilolitre', size: 1_000_000 },
    { unit: 'l', name: 'litre', size: 1000 },
    { unit: 'ml', name: 'millilitre', size: 1 },
  ],
};

/** The factor between each pair of neighbouring rungs, top to bottom (km to m is 1000, ...). */
export const stepFactors = (kind: LadderKind): number[] => {
  const r = LADDERS[kind];
  return r.slice(0, -1).map((rung, i) => rung.size / r[i + 1].size);
};

const rungOf = (kind: LadderKind, unit: string): LadderRung => {
  const r = LADDERS[kind].find((x) => x.unit === unit);
  if (!r) throw new Error(`unit ${unit} is not in the ${kind} ladder`);
  return r;
};

/** Convert within one ladder. Multiply to go to a smaller unit, divide to go to a larger one. */
export const convert = (kind: LadderKind, value: number, from: string, to: string): number =>
  Number(((value * rungOf(kind, from).size) / rungOf(kind, to).size).toFixed(9));

/** South African style: a (non-breaking) space between thousands, a comma for decimals. */
export const formatNumber = (n: number): string => {
  const [int, dec] = String(Number(n.toFixed(9))).split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return dec ? `${grouped},${dec}` : grouped;
};

/** "2 kg = 2 000 g" built from the conversion function. */
export const workedExample = (kind: LadderKind, value: number, from: string, to: string): string =>
  `${formatNumber(value)} ${from} = ${formatNumber(convert(kind, value, from, to))} ${to}`;

/* ---------------- Area, perimeter, volume ---------------- */

/** Perimeter (cm) and area (cm2) of a rectangle with whole-number sides. */
export const rectMeasures = (length: number, breadth: number): { perimeter: number; area: number } => ({
  perimeter: 2 * (length + breadth),
  area: length * breadth,
});

/** Volume (cm3) of a rectangular prism, and how many unit cubes make up one layer. */
export const prismMeasures = (length: number, breadth: number, height: number): { volume: number; perLayer: number } => ({
  volume: length * breadth * height,
  perLayer: length * breadth,
});

/* ---------------- Money (whole cents, so there is no floating-point error) ---------------- */

/** 1850 cents to "R18,50" (South African style: decimal comma; thousands grouped by a space). */
export const formatRand = (cents: number): string => {
  const neg = cents < 0;
  const abs = Math.abs(Math.round(cents));
  const rands = Math.floor(abs / 100);
  const c = String(abs % 100).padStart(2, '0');
  return `${neg ? '-' : ''}R${String(rands).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')},${c}`;
};

/** Total, the sum of the parts, and what is left (the change). All in cents. */
export const changeOf = (paid: number, parts: number[]): { spent: number; change: number } => {
  const spent = parts.reduce((a, b) => a + b, 0);
  return { spent, change: paid - spent };
};

/* ---------------- Fractions and decimals ---------------- */

/** Highest common factor of two positive whole numbers. */
export const hcf = (a: number, b: number): number => {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x;
};

/** Lowest terms: 12/18 gives { n: 2, d: 3, by: 6 } (divide top and bottom by 6). */
export const simplify = (n: number, d: number): { n: number; d: number; by: number } => {
  const by = hcf(n, d);
  return { n: n / by, d: d / by, by };
};

/** a/b and c/d name the same amount (cross-multiplying, so no decimals are involved). */
export const equivalent = (a: number, b: number, c: number, d: number): boolean => a * d === c * b;

/** 1 if a/b is bigger than c/d, -1 if smaller, 0 if equal. */
export const compareFractions = (a: number, b: number, c: number, d: number): -1 | 0 | 1 => {
  const l = a * d;
  const r = c * b;
  return l > r ? 1 : l < r ? -1 : 0;
};

/** Add fractions with the same denominator: only the numerators are added. */
export const addSameDenominator = (n1: number, n2: number, d: number): { n: number; d: number } => ({ n: n1 + n2, d });

/**
 * A decimal below 1 on a 10 x 10 hundredths grid: whole columns of tenths, then single hundredths.
 * 0,47 is 4 tenths (4 columns) and 7 hundredths (7 squares), 47 squares in all.
 */
export const hundredthsGrid = (value: number): { tenths: number; hundredths: number; squares: number } => {
  const squares = Math.round(value * 100);
  return { tenths: Math.floor(squares / 10), hundredths: squares % 10, squares };
};

/** Decimal comma, as the lessons and CAPS write it: 0.47 gives "0,47". */
export const decimalComma = (value: number, places = 2): string => value.toFixed(places).replace('.', ',');

/* ---------------- Shapes and symmetry ---------------- */

export type SolidName = 'cube' | 'rectangular prism' | 'square pyramid' | 'cylinder' | 'cone' | 'sphere';

export interface SolidFacts {
  faces: number;
  edges: number;
  vertices: number;
  /** True when every face is flat (a polyhedron). Curved solids count as the Grade 6 lesson counts them. */
  flat: boolean;
}

/** Faces, edges and vertices exactly as the Grade 6 lessons give them. */
export const SOLIDS: Record<SolidName, SolidFacts> = {
  cube: { faces: 6, edges: 12, vertices: 8, flat: true },
  'rectangular prism': { faces: 6, edges: 12, vertices: 8, flat: true },
  'square pyramid': { faces: 5, edges: 8, vertices: 5, flat: true },
  cylinder: { faces: 3, edges: 2, vertices: 0, flat: false },
  cone: { faces: 2, edges: 1, vertices: 1, flat: false },
  sphere: { faces: 1, edges: 0, vertices: 0, flat: false },
};

/** Corners of a regular polygon (rounded for hydration), the first corner at the top. */
export const regularPolygon = (sides: number, cx: number, cy: number, r: number, startDeg = 0): { x: number; y: number }[] =>
  Array.from({ length: sides }, (_, i) => {
    const a = (startDeg * Math.PI) / 180 + (i * 2 * Math.PI) / sides;
    return { x: Math.round((cx + r * Math.sin(a)) * 1000) / 1000, y: Math.round((cy - r * Math.cos(a)) * 1000) / 1000 };
  });

/** Lines of symmetry of common shapes. */
export const SYMMETRY_LINES = {
  square: 4,
  rectangle: 2,
  'equilateral triangle': 3,
} as const;

/** Reflect an x coordinate in a vertical mirror line at x = m (the same distance on the other side). */
export const reflectX = (x: number, m: number): number => 2 * m - x;
