/**
 * Grade 12 Physical Sciences (chemistry) arithmetic: formula parsing, atom-count balancing, molar masses and fertiliser percentages.
 * Every equation and number in a lesson or question bank is checked against these functions in chemHelpers.test.ts.
 */

/** Relative atomic masses (g·mol⁻¹) as printed on the CAPS data sheet, rounded as the data sheet does. */
export const ATOMIC_MASS: Record<string, number> = { H: 1, C: 12, N: 14, O: 16, F: 19, Na: 23, Mg: 24, P: 31, S: 32, Cl: 35.5, K: 39, Ca: 40, Fe: 56, Cu: 63.5, V: 51, Pt: 195 };

export type Atoms = Record<string, number>;

/** "Ca(H2PO4)2" -> { Ca: 1, H: 4, P: 2, O: 8 }. Handles nested brackets and a leading coefficient is NOT part of the formula. */
export const parseFormula = (formula: string): Atoms => {
  const stack: Atoms[] = [{}];
  let i = 0;
  const num = (): number => {
    let s = '';
    while (i < formula.length && /\d/.test(formula[i])) s += formula[i++];
    return s ? Number(s) : 1;
  };
  while (i < formula.length) {
    const c = formula[i];
    if (c === '(') {
      stack.push({});
      i++;
    } else if (c === ')') {
      i++;
      const k = num();
      const top = stack.pop()!;
      for (const [el, n] of Object.entries(top)) stack[stack.length - 1][el] = (stack[stack.length - 1][el] ?? 0) + n * k;
    } else if (/[A-Z]/.test(c)) {
      let el = c;
      i++;
      while (i < formula.length && /[a-z]/.test(formula[i])) el += formula[i++];
      const n = num();
      stack[stack.length - 1][el] = (stack[stack.length - 1][el] ?? 0) + n;
    } else if (c === '·' || c === ' ') {
      i++;
    } else throw new Error(`bad formula ${formula} at ${i}`);
  }
  return stack[0];
};

export interface Term { coef: number; formula: string }
/** "4NH3 + 5O2" -> [{coef: 4, formula: 'NH3'}, ...]. Spaces around + are optional; a term without a number has coefficient 1. */
export const parseSide = (side: string): Term[] =>
  side.split('+').map((t) => t.trim()).filter(Boolean).map((t) => {
    const m = /^(\d+)?\s*(.+)$/.exec(t)!;
    return { coef: m[1] ? Number(m[1]) : 1, formula: m[2] };
  });

const countSide = (terms: Term[]): Atoms => {
  const out: Atoms = {};
  for (const t of terms) for (const [el, n] of Object.entries(parseFormula(t.formula))) out[el] = (out[el] ?? 0) + n * t.coef;
  return out;
};

/** Is the equation balanced? Accepts "→", "⇌" or "=" between the sides. */
export const isBalanced = (equation: string): boolean => {
  const [l, r] = equation.split(/→|⇌|=/);
  const a = countSide(parseSide(l));
  const b = countSide(parseSide(r));
  const els = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...els].every((e) => (a[e] ?? 0) === (b[e] ?? 0));
};

export const molarMass = (formula: string): number => Object.entries(parseFormula(formula)).reduce((s, [el, n]) => s + ATOMIC_MASS[el] * n, 0);
/** Mass percentage of an element in a compound. */
export const massPercent = (element: string, formula: string): number => (100 * (parseFormula(formula)[element] ?? 0) * ATOMIC_MASS[element]) / molarMass(formula);

/** NPK label such as 2:3:4 (30): the parts of N, P and K by mass, and the total percentage of the bag that is plant nutrient. */
export const npkMasses = (ratio: [number, number, number], percent: number, bagKg: number): { nutrients: number; n: number; p: number; k: number; filler: number } => {
  const total = ratio[0] + ratio[1] + ratio[2];
  const nutrients = (bagKg * percent) / 100;
  return { nutrients, n: (nutrients * ratio[0]) / total, p: (nutrients * ratio[1]) / total, k: (nutrients * ratio[2]) / total, filler: bagKg - nutrients };
};

/** Number of monomer units in a polymer of the given molar mass (the repeat unit has the monomer's formula for addition polymers). */
export const monomerUnits = (polymerMass: number, monomer: string): number => polymerMass / molarMass(monomer);
