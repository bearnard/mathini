import { r3 } from '../round';
import { AR, atomsOf, formulaMass } from './matter10Helpers';

/** Numbers for the Grade 10 Physical Sciences quantitative aspects extension: percentage composition, empirical formula, water of crystallisation,
 * concentration, molar volume and theoretical yield. Tested in quant10Helpers.test.ts. */

export const MOLAR_VOLUME = 22.4; // dm3.mol-1 at 273 K and 101,3 kPa (data sheet value)
export const AVOGADRO = 6.022e23;
export const moles = (massG: number, molarMass: number): number => r3(massG / molarMass);
export const massFrom = (n: number, molarMass: number): number => r3(n * molarMass);
/** Percentage by mass of an element in a compound. */
export const percentOf = (element: string, formula: string): number => r3(((atomsOf(formula)[element] ?? 0) * AR[element] * 100) / formulaMass(formula));
/** Empirical formula from percentage (or mass) composition: moles of each element, divided by the smallest. Returns the whole-number ratio. */
export const mole_ratio = (parts: readonly { el: string; percent: number }[]): number[] => {
  const ns = parts.map((p) => p.percent / AR[p.el]);
  const min = Math.min(...ns);
  const raw = ns.map((n) => n / min);
  for (const mult of [1, 2, 3, 4]) {
    const scaled = raw.map((x) => x * mult);
    if (scaled.every((x) => Math.abs(x - Math.round(x)) < 0.08)) return scaled.map((x) => Math.round(x));
  }
  return raw.map((x) => Math.round(x));
};
/** Moles of water of crystallisation per mole of anhydrous salt. */
export const waterOfCrystallisation = (hydratedG: number, anhydrousG: number, saltMolarMass: number): number => {
  const nWater = (hydratedG - anhydrousG) / 18;
  const nSalt = anhydrousG / saltMolarMass;
  return Math.round(nWater / nSalt);
};
/** Concentration c = n / V with V in dm3. */
export const concentration = (n: number, vDm3: number): number => r3(n / vDm3);
export const molesFromConcentration = (c: number, vDm3: number): number => r3(c * vDm3);
export const dm3FromCm3 = (cm3: number): number => r3(cm3 / 1000);
/** Volume of gas at 273 K and 101,3 kPa. */
export const gasVolume = (n: number): number => r3(n * MOLAR_VOLUME);
/** Theoretical yield: mass of product from a known mass of reactant using the mole ratio of the balanced equation. */
export const theoreticalYield = (reactantG: number, reactantM: number, productM: number, ratio: number): number => r3((reactantG / reactantM) * ratio * productM);
