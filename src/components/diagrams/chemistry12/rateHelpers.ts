/** Grade 12 chemistry arithmetic for rates, equilibrium, acids and bases and titrations; every number in a lesson or bank is checked in rateHelpers.test.ts. */

export const rate = (deltaC: number, seconds: number): number => Math.abs(deltaC) / seconds;
/** Kc for aA + bB ⇌ cC + dD from equilibrium concentrations: [C]^c [D]^d / ([A]^a [B]^b). Each entry is [concentration, coefficient]. */
export const kc = (products: [number, number][], reactants: [number, number][]): number => {
  const prod = (xs: [number, number][]) => xs.reduce((p, [c, n]) => p * c ** n, 1);
  return prod(products) / prod(reactants);
};
/** Equilibrium amounts from initial amounts and the change: initial + coefficient × x (x may be negative for reactants). */
export const atEquilibrium = (initial: number, coef: number, x: number): number => initial + coef * x;

export const pH = (hydronium: number): number => -Math.log10(hydronium);
export const hydroniumFromPH = (ph: number): number => 10 ** -ph;
export const KW = 1e-14;
export const hydroxideFromHydronium = (h: number): number => KW / h;
export const pOH = (hydroxide: number): number => -Math.log10(hydroxide);
/** pH of a strong monoprotic acid (c = [H3O+]) or a strong base giving one OH⁻ per formula unit (pH = 14 − pOH). */
export const phStrongAcid = (c: number, protons = 1): number => pH(c * protons);
export const phStrongBase = (c: number, hydroxides = 1): number => 14 - pOH(c * hydroxides);

/** Moles from concentration (mol·dm⁻³) and volume in cm³. */
export const moles = (c: number, cm3: number): number => (c * cm3) / 1000;
/** Titration: a mol of acid reacts with b mol of base. Concentration of the unknown base from the acid used: c_b = c_a V_a (b/a) / V_b. */
export const unknownConcentration = (cKnown: number, vKnown: number, vUnknown: number, ratioUnknownPerKnown: number): number => (cKnown * vKnown * ratioUnknownPerKnown) / vUnknown;
