import { atomsOf, balanced } from '../mine11/mine11Helpers';

/** Rules and numbers for the Grade 8 Natural Sciences Term 2 lessons (Matter and Materials): particle model, density, expansion, pressure, atoms, elements, compounds,
 * reactants and products. Tested in ns8Helpers.test.ts. */

export { atomsOf, balanced };

// ---------- particle model and change of state ----------

export type State = 'solid' | 'liquid' | 'gas';
export const STATES: Record<State, { arrangement: string; movement: string; forces: string; spacing: string }> = {
  solid: { arrangement: 'closely packed in a regular pattern', movement: 'vibrate in place', forces: 'strong', spacing: 'small' },
  liquid: { arrangement: 'loosely arranged but close together', movement: 'slide past each other', forces: 'weaker', spacing: 'small' },
  gas: { arrangement: 'no particular arrangement', movement: 'move very fast', forces: 'extremely weak', spacing: 'very big' },
};
const HEAT: Record<State, { to: State; name: string } | null> = { solid: { to: 'liquid', name: 'melting' }, liquid: { to: 'gas', name: 'evaporating (or boiling)' }, gas: null };
const COOL: Record<State, { to: State; name: string } | null> = { gas: { to: 'liquid', name: 'condensing' }, liquid: { to: 'solid', name: 'freezing' }, solid: null };
export const changeOfState = (from: State, dir: 'heat' | 'cool'): { to: State; name: string } | null => (dir === 'heat' ? HEAT[from] : COOL[from]);
/** Diffusion: particles spread from where they are more concentrated to where they are less concentrated; it is faster in gases than in liquids. */
export const DIFFUSION_SPEED: Record<'gas' | 'liquid', number> = { gas: 2, liquid: 1 };

/** A repeatable pseudo-random sequence for drawing particles (the same picture every time). */
export const lcg = (seed: number): (() => number) => {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};

// ---------- density, expansion and pressure ----------

/** Approximate mass of 1 cm3 in grams (teaching values, rounded). */
export const MASS_PER_CM3: Record<string, number> = { 'cooking oil': 0.9, ice: 0.92, water: 1.0, wood: 0.6, iron: 7.9 };
/** A material floats on a liquid when it is less dense than the liquid. */
export const floatsOn = (material: string, liquid: string): boolean => MASS_PER_CM3[material] < MASS_PER_CM3[liquid];
export const denser = (a: string, b: string): string => (MASS_PER_CM3[a] >= MASS_PER_CM3[b] ? a : b);
/** Same-volume comparison: the denser material has the bigger mass. */
export const massOfVolume = (material: string, cm3: number): number => Math.round(MASS_PER_CM3[material] * cm3 * 100) / 100;
/** Expansion: when heated the particles move more and spread further apart; the number and size of the particles do not change. */
export const spacingAfter = (before: number, change: 'heated' | 'cooled'): number => (change === 'heated' ? before * 1.2 : before * 0.8);
/** Pressure comes from collisions: with the same volume, more gas particles give more collisions. */
export const collisionsPerSecond = (particles: number, perParticle = 10): number => particles * perParticle;

// ---------- atoms, elements and compounds ----------

export const ELEMENTS = [
  { symbol: 'H', name: 'hydrogen', Z: 1 }, { symbol: 'He', name: 'helium', Z: 2 }, { symbol: 'Li', name: 'lithium', Z: 3 }, { symbol: 'Be', name: 'beryllium', Z: 4 },
  { symbol: 'B', name: 'boron', Z: 5 }, { symbol: 'C', name: 'carbon', Z: 6 }, { symbol: 'N', name: 'nitrogen', Z: 7 }, { symbol: 'O', name: 'oxygen', Z: 8 },
  { symbol: 'F', name: 'fluorine', Z: 9 }, { symbol: 'Ne', name: 'neon', Z: 10 }, { symbol: 'Na', name: 'sodium', Z: 11 }, { symbol: 'Mg', name: 'magnesium', Z: 12 },
  { symbol: 'Al', name: 'aluminium', Z: 13 }, { symbol: 'Si', name: 'silicon', Z: 14 }, { symbol: 'P', name: 'phosphorus', Z: 15 }, { symbol: 'S', name: 'sulfur', Z: 16 },
  { symbol: 'Cl', name: 'chlorine', Z: 17 }, { symbol: 'Ar', name: 'argon', Z: 18 }, { symbol: 'K', name: 'potassium', Z: 19 }, { symbol: 'Ca', name: 'calcium', Z: 20 },
] as const;
export const byName = (name: string) => ELEMENTS.find((e) => e.name === name)!;
/** A neutral atom has as many electrons as protons, so the charges cancel. */
export const electronsOf = (Z: number): number => Z;
export const netCharge = (protons: number, electrons: number): number => protons - electrons;
/** Electrons in shells 2, 8, 8, 2 (first 20 elements). */
export const shells = (Z: number): number[] => {
  const cap = [2, 8, 8, 2];
  const out: number[] = [];
  let left = Z;
  for (const c of cap) {
    if (left <= 0) break;
    out.push(Math.min(c, left));
    left -= Math.min(c, left);
  }
  return out;
};
/** Number of atoms in a molecule formula (digits are atom counts), e.g. H2O is 3 and CO2 is 3. */
export const atomsInFormula = (f: string): number => Object.values(atomsOf(f)).reduce((a, n) => a + n, 0);
export const DIATOMIC = ['H2', 'N2', 'O2', 'Cl2'] as const;
export const isElementFormula = (f: string): boolean => Object.keys(atomsOf(f)).length === 1;
export const isCompoundFormula = (f: string): boolean => Object.keys(atomsOf(f)).length >= 2;
export const waterRatio = (): [number, number] => [atomsOf('H2O').H, atomsOf('H2O').O];

// ---------- reactants and products ----------

export const REACTIONS = {
  carbon: 'C + O2 → CO2',
  water: '2H2 + O2 → 2H2O',
  decomposition: '2H2O → 2H2 + O2',
  magnesium: '2Mg + O2 → 2MgO',
  limewater: 'CO2 + Ca(OH)2 → CaCO3 + H2O',
} as const;
export const split = (eq: string): { reactants: string[]; products: string[] } => {
  const [l, r] = eq.split('→');
  const cut = (s: string) => s.split('+').map((t) => t.trim().replace(/^\d+/, ''));
  return { reactants: cut(l), products: cut(r) };
};
/** Atoms are rearranged, not created or destroyed: the totals on both sides are equal. */
export const atomTotals = (eq: string): { before: number; after: number } => {
  const [l, r] = eq.split('→');
  const total = (side: string) => Object.values(atomsOf(side)).reduce((a, n) => a + n, 0);
  return { before: total(l), after: total(r) };
};
