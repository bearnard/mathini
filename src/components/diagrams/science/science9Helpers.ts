/**
 * Tested helpers for the Grade 9 Natural Sciences lessons: where the electrons go in an atom,
 * how many atoms a formula shows, mass before and after a reaction, and the resistance of a wire.
 */

/** Electrons fill shells 2, then 8, then 8 (enough for the first 18 elements). */
export const electronShells = (z: number): number[] => {
  if (!Number.isInteger(z) || z < 1 || z > 18) throw new RangeError('atomic number 1 to 18');
  const cap = [2, 8, 8];
  const out: number[] = [];
  let left = z;
  for (const c of cap) {
    if (left <= 0) break;
    out.push(Math.min(c, left));
    left -= c;
  }
  return out;
};

/** Count the atoms of each element in a simple formula such as H2O, CO2 or NaCl (no brackets). */
export const countAtoms = (formula: string): Record<string, number> => {
  const out: Record<string, number> = {};
  for (const m of formula.matchAll(/([A-Z][a-z]?)(\d*)/g)) out[m[1]] = (out[m[1]] ?? 0) + (m[2] ? Number(m[2]) : 1);
  if (formula.replace(/([A-Z][a-z]?)(\d*)/g, '') !== '') throw new RangeError('simple formulas only');
  return out;
};

export const totalAtoms = (formula: string): number => Object.values(countAtoms(formula)).reduce((a, b) => a + b, 0);

/** Subscript digits for display: H2O gives H₂O. */
export const subscripts = (formula: string): string => formula.replace(/\d/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);

/** Conservation of mass in a closed system: the products have the same total mass as the reactants. */
export const massTotal = (masses: number[]): number => Math.round(masses.reduce((a, b) => a + b, 0) * 1000) / 1000;

/** Resistance of a wire in relative units: proportional to its length and inversely to its cross-section area. */
export const wireResistance = (length: number, area: number): number => {
  if (!(length > 0) || !(area > 0)) throw new RangeError('length and area must be positive');
  return Math.round((length / area) * 1000) / 1000;
};
