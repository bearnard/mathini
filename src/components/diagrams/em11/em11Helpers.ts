import { r3 } from '../round';

/** Numbers and rules for the Grade 11 Physical Sciences term 3 lessons (electromagnetism, energy and chemical change, acid-base reactions). Tested in em11Helpers.test.ts. */

// ---------- magnetic flux and Faraday / Lenz ----------

/** Magnetic flux through a loop: Φ = B A cos θ (Wb), θ the angle between B and the NORMAL to the loop. */
export const flux = (B: number, A: number, thetaDeg: number): number => r3(B * A * Math.cos((thetaDeg * Math.PI) / 180));
export type Pole = 'N' | 'S';
export type Motion = 'in' | 'out';
export const opposite = (p: Pole): Pole => (p === 'N' ? 'S' : 'N');
/** Lenz's law: the induced current makes the end of the solenoid nearest the magnet act as this pole. Pushing a pole in is opposed by the same pole (repulsion); pulling it out is opposed by the opposite pole (attraction). */
export const inducedPole = (magnetPole: Pole, motion: Motion): Pole => (motion === 'in' ? magnetPole : opposite(magnetPole));
/** What the induced pole does to the moving magnet: it always opposes the motion. */
export const force = (magnetPole: Pole, motion: Motion): 'repels' | 'attracts' => (inducedPole(magnetPole, motion) === magnetPole ? 'repels' : 'attracts');
/** Faraday: the size of the induced emf is proportional to the rate of change of flux. Returns the factor by which the emf changes when the change in flux takes `factor` times as long. */
export const emfFactorWhenTimeScaled = (factor: number): number => r3(1 / factor);

/** Direction of the field around a straight wire seen end-on (right hand rule): current out of the page gives anticlockwise field, into the page gives clockwise. */
export const fieldDirection = (current: 'out' | 'in'): 'anticlockwise' | 'clockwise' => (current === 'out' ? 'anticlockwise' : 'clockwise');
/** Pole at the right-hand end of a solenoid, when the current goes round the coil clockwise or anticlockwise as seen from that end (right hand rule: fingers follow the current, thumb points to N). */
export const solenoidNorthEnd = (currentSeenFromRight: 'clockwise' | 'anticlockwise'): 'right' | 'left' => (currentSeenFromRight === 'anticlockwise' ? 'right' : 'left');

// ---------- energy changes ----------

export interface Profile { reactants: number; peak: number; products: number }
export const deltaH = (p: Profile): number => p.products - p.reactants;
export const activationEnergy = (p: Profile): number => p.peak - p.reactants;
/** Energy released by the reverse reaction's activation energy: the reverse reaction has Ea(rev) = peak - products. */
export const reverseActivation = (p: Profile): number => p.peak - p.products;
export const kind = (p: Profile): 'exothermic' | 'endothermic' => (deltaH(p) < 0 ? 'exothermic' : 'endothermic');

// ---------- acid-base reactions ----------

export const REACTIONS = {
  hydroxide: 'HCl + NaOH → NaCl + H2O',
  hydroxide2: 'H2SO4 + 2NaOH → Na2SO4 + 2H2O',
  oxide: 'CuO + H2SO4 → CuSO4 + H2O',
  carbonate: 'CaCO3 + 2HCl → CaCl2 + H2O + CO2',
  carbonate2: 'Na2CO3 + H2SO4 → Na2SO4 + H2O + CO2',
} as const;
