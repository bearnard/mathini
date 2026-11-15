/**
 * Tested helpers for the Grade 8-9 energy, cell and mechanism pictures: energy bookkeeping, where
 * a cell sits on a size scale, the mechanical advantage of a wheel and axle, and the motion of a
 * cam follower and a crank slider.
 */

/** An energy change: input = useful + wasted. Conservation of energy means the parts add up to the input. */
export const conserved = (input: number, parts: number[]): boolean => Math.abs(parts.reduce((a, b) => a + b, 0) - input) < 1e-9;

export const wastedEnergy = (input: number, useful: number): number => {
  if (useful < 0 || useful > input) throw new RangeError('useful energy is between 0 and the input');
  return input - useful;
};

/** Position of a size on a log scale from lo to hi (both in the same unit), 0 at lo and 1 at hi. */
export const logPosition = (size: number, lo: number, hi: number): number => {
  if (!(size > 0) || !(lo > 0) || !(hi > lo)) throw new RangeError('sizes must be positive and hi above lo');
  return (Math.log10(size) - Math.log10(lo)) / (Math.log10(hi) - Math.log10(lo));
};

/** Cells are about 0,01 to 0,1 mm across (10 to 100 micrometres). The smallest thing the naked eye can see is about 0,1 mm. */
export const CELL_MM: [number, number] = [0.01, 0.1];
export const NAKED_EYE_MM = 0.1;
export const mmToMicrometres = (mm: number): number => Math.round(mm * 1000 * 1e6) / 1e6;

/** Wheel and axle: the effort is applied at the wheel and the load at the axle; MA = wheel radius / axle radius. */
export const wheelAxleAdvantage = (wheelRadius: number, axleRadius: number): number => {
  if (!(axleRadius > 0) || !(wheelRadius > 0)) throw new RangeError('radii must be positive');
  return wheelRadius / axleRadius;
};

/** Levels of organisation, smallest first. */
export const LEVELS = ['cell', 'tissue', 'organ', 'organ system', 'organism'] as const;

/** Height of a cam follower for a pear-shaped cam turned through `angle` degrees: it rises and falls once per turn. */
export const camLift = (angle: number, maxLift: number): number => (maxLift * (1 - Math.cos((angle * Math.PI) / 180))) / 2;

/** Position of a slider driven by a crank of radius r and a rod of length L: x = r cos t + sqrt(L^2 - (r sin t)^2). */
export const crankSlider = (angle: number, r: number, rod: number): number => {
  if (!(rod > r) || !(r > 0)) throw new RangeError('the rod must be longer than the crank');
  const t = (angle * Math.PI) / 180;
  return r * Math.cos(t) + Math.sqrt(rod * rod - (r * Math.sin(t)) ** 2);
};
