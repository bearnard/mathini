/**
 * Numbers and layout for the Grade 11 Life Sciences pictures: population change, the photosynthesis equation, and a section of the
 * kidney. Everything a picture shows is computed here and asserted in lifeSciHelpers.test.ts.
 */

// ---------- Population change ----------

export interface PopulationChange {
  n: number;
  natality: number;
  immigration: number;
  mortality: number;
  emigration: number;
  /** ΔN = (natality + immigration) - (mortality + emigration) */
  delta: number;
  /** The population after the period. */
  after: number;
}

export const populationChange = (n: number, natality: number, immigration: number, mortality: number, emigration: number): PopulationChange => {
  for (const v of [n, natality, immigration, mortality, emigration]) if (!Number.isInteger(v) || v < 0) throw new RangeError('whole numbers, 0 or more');
  const delta = natality + immigration - (mortality + emigration);
  if (n + delta < 0) throw new RangeError('more individuals leave than there are');
  return { n, natality, immigration, mortality, emigration, delta, after: n + delta };
};

/** "+5", "−3" or "0", with a real minus sign. */
export const signed = (n: number): string => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : '0');

// ---------- Photosynthesis equation ----------

export type Formula = Record<string, number>;
export interface Term { coefficient: number; formula: Formula }

const CO2: Formula = { C: 1, O: 2 };
const H2O: Formula = { H: 2, O: 1 };
const GLUCOSE: Formula = { C: 6, H: 12, O: 6 };
const O2: Formula = { O: 2 };

/** 6CO2 + 6H2O -> C6H12O6 + 6O2 */
export const photosynthesis: { inputs: Term[]; outputs: Term[] } = {
  inputs: [{ coefficient: 6, formula: CO2 }, { coefficient: 6, formula: H2O }],
  outputs: [{ coefficient: 1, formula: GLUCOSE }, { coefficient: 6, formula: O2 }],
};

export const countAtoms = (terms: Term[]): Formula => {
  const out: Formula = {};
  for (const t of terms) for (const [el, n] of Object.entries(t.formula)) out[el] = (out[el] ?? 0) + t.coefficient * n;
  return out;
};

export const isBalanced = (eq: { inputs: Term[]; outputs: Term[] }): boolean => {
  const a = countAtoms(eq.inputs);
  const b = countAtoms(eq.outputs);
  const els = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...els].every((e) => (a[e] ?? 0) === (b[e] ?? 0));
};

// ---------- Kidney section ----------

export interface P { x: number; y: number }
export interface KidneyLayout {
  /** Outer kidney outline: an ellipse centred on the origin. */
  rx: number;
  ry: number;
  /** The cortex is the band between the outline and this smaller ellipse. */
  cortexInnerRx: number;
  cortexInnerRy: number;
  /** Medulla pyramids: base on the cortex' inner edge, apex towards the pelvis. */
  pyramids: { base: [P, P]; apex: P }[];
  /** The pelvis: a small circle in the hilum side of the kidney, draining into the ureter. */
  pelvis: { cx: number; cy: number; r: number };
  /** The ureter leaves from the pelvis to this point, outside the kidney. */
  ureterEnd: P;
}

/** Points on the ellipse x = rx cos t, y = ry sin t (t in degrees, y up). */
export const onEllipse = (rx: number, ry: number, deg: number): P => ({ x: rx * Math.cos((deg * Math.PI) / 180), y: ry * Math.sin((deg * Math.PI) / 180) });
export const insideEllipse = (p: P, rx: number, ry: number): boolean => (p.x / rx) ** 2 + (p.y / ry) ** 2 <= 1 + 1e-9;

/**
 * A frontal section drawn as a bean: the hilum (where the ureter leaves) faces right (+x). Three pyramids are spread over the
 * left, top and bottom, because the pelvis takes the right.
 */
export const kidneyLayout = (): KidneyLayout => {
  const rx = 36;
  const ry = 50;
  const cortexInnerRx = 29;
  const cortexInnerRy = 43;
  const pelvis = { cx: 12, cy: 0, r: 8 };
  const centres = [180, 118, 242]; // degrees on the cortex' inner ellipse (left, upper left, lower left)
  const pyramids = centres.map((c) => {
    const a = onEllipse(cortexInnerRx, cortexInnerRy, c - 17);
    const b = onEllipse(cortexInnerRx, cortexInnerRy, c + 17);
    const base = [a, b] as [P, P];
    // apex: two thirds of the way from the middle of the base to the pelvis centre
    const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    const apex = { x: mid.x + ((pelvis.cx - mid.x) * 2) / 3, y: mid.y + ((pelvis.cy - mid.y) * 2) / 3 };
    return { base, apex };
  });
  return { rx, ry, cortexInnerRx, cortexInnerRy, pyramids, pelvis, ureterEnd: { x: 52, y: -22 } };
};
