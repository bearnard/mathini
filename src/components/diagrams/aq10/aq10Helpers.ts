import { r3 } from '../round';
import { atomsOf, balanced } from '../mine11/mine11Helpers';

export { atomsOf, balanced };

/** Rules, equations and numbers for the Grade 10 Physical Sciences term 3 and term 4 lessons (ions in solution, precipitation and reaction types, the hydrosphere). Tested in aq10Helpers.test.ts. */

// ---------- dissolving ionic compounds ----------

export interface Ion { symbol: string; charge: number }
export interface Dissolution { formula: string; cation: Ion; anion: Ion; nCation: number; nAnion: number }
export const SALTS: Dissolution[] = [
  { formula: 'NaCl', cation: { symbol: 'Na', charge: 1 }, anion: { symbol: 'Cl', charge: -1 }, nCation: 1, nAnion: 1 },
  { formula: 'KNO3', cation: { symbol: 'K', charge: 1 }, anion: { symbol: 'NO3', charge: -1 }, nCation: 1, nAnion: 1 },
  { formula: 'NaOH', cation: { symbol: 'Na', charge: 1 }, anion: { symbol: 'OH', charge: -1 }, nCation: 1, nAnion: 1 },
  { formula: 'CaCl2', cation: { symbol: 'Ca', charge: 2 }, anion: { symbol: 'Cl', charge: -1 }, nCation: 1, nAnion: 2 },
  { formula: 'Na2SO4', cation: { symbol: 'Na', charge: 1 }, anion: { symbol: 'SO4', charge: -2 }, nCation: 2, nAnion: 1 },
  { formula: 'AlCl3', cation: { symbol: 'Al', charge: 3 }, anion: { symbol: 'Cl', charge: -1 }, nCation: 1, nAnion: 3 },
];
const sup = (n: number) => (n === 1 ? '' : String(n).replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]));
const sub = (s: string) => s.replace(/(\d)/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
const ionText = (i: Ion, n: number) => `${n === 1 ? '' : n}${sub(i.symbol)}${sup(Math.abs(i.charge))}${i.charge > 0 ? '⁺' : '⁻'}(aq)`;
/** The dissolution equation with state symbols, e.g. CaCl₂(s) → Ca²⁺(aq) + 2Cl⁻(aq). */
export const dissolutionEquation = (s: Dissolution): string => `${sub(s.formula)}(s) → ${ionText(s.cation, s.nCation)} + ${ionText(s.anion, s.nAnion)}`;
export const totalCharge = (s: Dissolution): number => s.nCation * s.cation.charge + s.nAnion * s.anion.charge;
/** Moles of ions in solution from one mole of the salt. */
export const ionsPerFormula = (s: Dissolution): number => s.nCation + s.nAnion;
export const ionConcentration = (s: Dissolution, c: number): number => r3(c * ionsPerFormula(s));
/** Rank by conductivity: the solution with the higher ion concentration conducts better (same concentration of salt). */
export const conductsBetter = (a: Dissolution, b: Dissolution): Dissolution => (ionsPerFormula(a) >= ionsPerFormula(b) ? a : b);

// ---------- solubility rules and precipitates ----------

export type Salt = { cation: string; anion: string };
/** Common solubility rules used at Grade 10 level. */
export function soluble(cation: string, anion: string): boolean {
  if (['Na', 'K', 'NH4'].includes(cation)) return true;
  if (anion === 'NO3') return true;
  if (anion === 'Cl' || anion === 'Br' || anion === 'I') return !['Ag', 'Pb'].includes(cation);
  if (anion === 'SO4') return !['Ba', 'Pb'].includes(cation);
  if (anion === 'CO3' || anion === 'OH') return false;
  return false;
}
export const PRECIPITATE_COLOUR: Record<string, string> = { AgCl: 'white', AgBr: 'cream', AgI: 'yellow', BaSO4: 'white', BaCO3: 'white' };
export const EQUATIONS = {
  agcl: 'AgNO3 + NaCl → AgCl + NaNO3',
  baso4: 'BaCl2 + Na2SO4 → BaSO4 + 2NaCl',
  gas: 'Na2CO3 + 2HCl → 2NaCl + H2O + CO2',
  acidBase: 'HCl + NaOH → NaCl + H2O',
  redox: 'Zn + CuSO4 → ZnSO4 + Cu',
} as const;
/** Redox by charge: zinc goes from 0 to +2 (loses two electrons) and copper from +2 to 0 (gains two electrons). */
export const REDOX = { zincBefore: 0, zincAfter: 2, copperBefore: 2, copperAfter: 0 } as const;
export const electronsTransferred = (before: number, after: number): number => Math.abs(after - before);

// ---------- the hydrosphere ----------

/** Where the Earth's water is, in percent (rounded, from common reference values). */
export const WATER = [
  { name: 'oceans (salt water)', percent: 97 },
  { name: 'ice caps and glaciers', percent: 2 },
  { name: 'liquid fresh water', percent: 1 },
] as const;
export const waterTotal = (): number => WATER.reduce((a, w) => a + w.percent, 0);
export const freshShare = (): number => WATER[1].percent + WATER[2].percent;
/** An example town: daily use per person and the number of people give the daily demand in m3 (1 000 L = 1 m3). */
export const dailyDemandM3 = (litresPerPerson: number, people: number): number => r3((litresPerPerson * people) / 1000);
export const daysOfSupply = (dam: number, demandPerDay: number): number => r3(dam / demandPerDay);
