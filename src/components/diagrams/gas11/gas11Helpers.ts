import { r3 } from '../round';
import { ATOMIC_MASS, parseFormula } from '../chemistry12/chemHelpers';

/** Numbers for the Grade 11 Physical Sciences gas laws, moles and stoichiometry lessons. Tested in gas11Helpers.test.ts. */

// ---------- gas laws ----------

export const R = 8.31; // J·K⁻¹·mol⁻¹ (data sheet)
export const STP = { kPa: 101.3, kelvin: 273 } as const;
export const MOLAR_VOLUME = 22.4; // dm³·mol⁻¹ at STP (data sheet)
export const toKelvin = (celsius: number): number => celsius + 273;
/** Boyle: P₁V₁ = P₂V₂ at constant T and n. Returns V₂. */
export const boyleV2 = (p1: number, v1: number, p2: number): number => (p1 * v1) / p2;
/** Charles: V₁/T₁ = V₂/T₂ at constant P and n (T in kelvin). Returns V₂. */
export const charlesV2 = (v1: number, t1: number, t2: number): number => (v1 * t2) / t1;
/** Gay-Lussac: P₁/T₁ = P₂/T₂ at constant V and n. Returns P₂. */
export const gayLussacP2 = (p1: number, t1: number, t2: number): number => (p1 * t2) / t1;
/** Combined: P₁V₁/T₁ = P₂V₂/T₂. Returns V₂. */
export const combinedV2 = (p1: number, v1: number, t1: number, p2: number, t2: number): number => (p1 * v1 * t2) / (t1 * p2);
/** Ideal gas: PV = nRT with P in Pa, V in m³, T in K. These helpers take kPa and dm³ and convert. */
export const molesOfGas = (pKPa: number, vDm3: number, tK: number): number => (pKPa * 1000 * vDm3 * 1e-3) / (R * tK);
export const volumeOfGasDm3 = (n: number, tK: number, pKPa: number): number => ((n * R * tK) / (pKPa * 1000)) * 1000;
export const pressureOfGasKPa = (n: number, tK: number, vDm3: number): number => ((n * R * tK) / (vDm3 * 1e-3)) / 1000;

// ---------- moles ----------

export const MASS: Record<string, number> = { ...ATOMIC_MASS, Al: 27, Zn: 65, Ag: 108, Pb: 207, Br: 80, I: 127, Li: 7 };
export const molarMassOf = (formula: string): number => Object.entries(parseFormula(formula)).reduce((s, [el, n]) => s + MASS[el] * n, 0);
export const molesFromMass = (massG: number, formula: string): number => massG / molarMassOf(formula);
export const massFromMoles = (n: number, formula: string): number => n * molarMassOf(formula);
export const molesFromGasVolume = (vDm3: number): number => vDm3 / MOLAR_VOLUME;
export const gasVolumeFromMoles = (n: number): number => n * MOLAR_VOLUME;
/** Concentration in mol·dm⁻³ from moles and a volume in cm³. */
export const concentration = (n: number, vCm3: number): number => n / (vCm3 / 1000);
export const molesFromConcentration = (c: number, vCm3: number): number => (c * vCm3) / 1000;
/** Percent by mass of an element in a compound. */
export const percentOf = (element: string, formula: string): number => (100 * parseFormula(formula)[element] * MASS[element]) / molarMassOf(formula);

const gcd = (a: number, b: number): number => (b < 1e-6 ? a : gcd(b, a % b));
/** Empirical formula from percent by mass: divide by the molar masses, then by the smallest, then clear halves and thirds. */
export function empirical(percents: Record<string, number>): Record<string, number> {
  const moles = Object.entries(percents).map(([el, p]) => [el, p / MASS[el]] as [string, number]);
  const smallest = Math.min(...moles.map(([, n]) => n));
  const ratios = moles.map(([el, n]) => [el, n / smallest] as [string, number]);
  for (const k of [1, 2, 3, 4]) {
    if (ratios.every(([, r]) => Math.abs(r * k - Math.round(r * k)) < 0.05)) return Object.fromEntries(ratios.map(([el, r]) => [el, Math.round(r * k)]));
  }
  throw new Error('no simple ratio');
}
export const empiricalMass = (f: Record<string, number>): number => Object.entries(f).reduce((s, [el, n]) => s + MASS[el] * n, 0);
/** Molecular formula: multiply the empirical formula by M / (mass of the empirical formula). */
export const molecular = (f: Record<string, number>, molarMass: number): Record<string, number> => {
  const k = Math.round(molarMass / empiricalMass(f));
  return Object.fromEntries(Object.entries(f).map(([el, n]) => [el, n * k]));
};
export const formulaString = (f: Record<string, number>): string =>
  Object.entries(f).map(([el, n]) => el + (n > 1 ? String(n).replace(/\d/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]) : '')).join('');

// ---------- stoichiometry ----------

export interface Reagent { formula: string; coef: number; moles: number }
/** Which reagent runs out first: the one with the smallest moles / coefficient. */
export const limiting = (rs: readonly Reagent[]): Reagent => rs.reduce((a, b) => (b.moles / b.coef < a.moles / a.coef ? b : a));
/** Moles of a product formed from the limiting reagent. */
export const productMoles = (rs: readonly Reagent[], productCoef: number): number => {
  const l = limiting(rs);
  return (l.moles / l.coef) * productCoef;
};
export const percentYield = (actual: number, theoretical: number): number => r3((actual / theoretical) * 100);
export const percentPurity = (pureMass: number, sampleMass: number): number => r3((pureMass / sampleMass) * 100);
