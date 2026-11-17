import { r3 } from '../round';
import { atomsOf, balanced } from '../mine11/mine11Helpers';

export { atomsOf, balanced };

/** Numbers for the Grade 10 Physical Sciences wave 2 term 2 chemistry lessons: particles substances are made of, physical and chemical change. Tested in matter10Helpers.test.ts. */

/** Relative atomic masses from the periodic table in the data sheet, as used in Grade 10 (Cl 35,5; Cu 63,5). */
export const AR: Record<string, number> = { H: 1, C: 12, N: 14, O: 16, Na: 23, Mg: 24, S: 32, Cl: 35.5, K: 39, Ca: 40, Fe: 56, Cu: 63.5 };
/** Total number of atoms in one formula, e.g. H2SO4 has 7. */
export const atomCount = (formula: string): number => Object.values(atomsOf(formula)).reduce((a, n) => a + n, 0);
/** Number of different elements in a formula. */
export const elementCount = (formula: string): number => Object.keys(atomsOf(formula)).length;
/** Formula mass (relative molecular or formula mass): the sum of the relative atomic masses of all atoms. */
export const formulaMass = (formula: string): number => r3(Object.entries(atomsOf(formula)).reduce((a, [el, n]) => a + AR[el] * n, 0));

/** Split an equation side into [coefficient, formula] terms. */
const terms = (side: string): { coef: number; formula: string }[] =>
  side.split('+').map((t) => t.trim()).filter(Boolean).map((t) => {
    const m = t.match(/^(\d+)?(.*)$/)!;
    return { coef: m[1] ? Number(m[1]) : 1, formula: m[2] };
  });
const sideMass = (side: string): number => r3(terms(side).reduce((a, t) => a + t.coef * formulaMass(t.formula), 0));
/** Total mass of the reactants and of the products of a balanced equation (law of conservation of mass). */
export const equationMasses = (eq: string): { reactants: number; products: number } => {
  const [l, r] = eq.split('→');
  return { reactants: sideMass(l), products: sideMass(r) };
};
export const conservesMass = (eq: string): boolean => {
  const m = equationMasses(eq);
  return m.reactants === m.products;
};

export const EQUATIONS = {
  magnesium: '2Mg + O2 → 2MgO',
  water: '2H2 + O2 → 2H2O',
  methane: 'CH4 + 2O2 → CO2 + 2H2O',
  limestone: 'CaCO3 → CaO + CO2',
} as const;

/** A simple classification of properties by type of substance (Grade 10 level). */
export const SUBSTANCES = [
  { kind: 'molecular', example: 'water, H₂O', meltingPoint: 'low', conducts: 'no', particles: 'molecules held by weak forces' },
  { kind: 'ionic', example: 'sodium chloride, NaCl', meltingPoint: 'high', conducts: 'only when molten or dissolved', particles: 'positive and negative ions in a lattice' },
  { kind: 'metallic', example: 'copper, Cu', meltingPoint: 'high', conducts: 'yes, as a solid', particles: 'positive ions in a sea of free electrons' },
] as const;

/** Energy change: in an exothermic reaction the products are lower in energy than the reactants and energy is released. */
export const energyChange = (reactants: number, products: number): { kind: 'exothermic' | 'endothermic'; delta: number } => ({
  kind: products < reactants ? 'exothermic' : 'endothermic',
  delta: r3(products - reactants),
});
