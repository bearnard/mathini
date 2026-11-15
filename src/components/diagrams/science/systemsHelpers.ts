/**
 * Tested helpers for the Grade 7 mechanisms and Sun-Earth-Moon lessons: levers, gears, and the
 * Moon's phase and tide at each point of its orbit. Every number in a picture or a worked example
 * comes from here.
 */

/** Effort needed to balance a load on a lever: effort x effort distance = load x load distance. */
export const leverEffort = (load: number, loadDistance: number, effortDistance: number): number => {
  if (!(loadDistance > 0) || !(effortDistance > 0) || load < 0) throw new RangeError('distances must be positive');
  return (load * loadDistance) / effortDistance;
};

/** Mechanical advantage: how many times bigger the load is than the effort. */
export const mechanicalAdvantage = (load: number, effort: number): number => {
  if (!(effort > 0)) throw new RangeError('effort must be positive');
  return load / effort;
};

/** Turns made by the driven gear for each turn of the driver, from their tooth counts. */
export const drivenTurns = (driverTeeth: number, drivenTeeth: number): number => {
  if (!(driverTeeth > 0) || !(drivenTeeth > 0)) throw new RangeError('teeth must be positive');
  return driverTeeth / drivenTeeth;
};

/** The four main points of the Moon's orbit, measured from new moon: 0, 90, 180 and 270 degrees. */
export type PhaseName = 'new moon' | 'first quarter' | 'full moon' | 'last quarter';

/** The fraction of the Moon's face that is lit as seen from Earth, 0 (new) to 1 (full). */
export const litFraction = (angle: number): number => Math.round(((1 - Math.cos((angle * Math.PI) / 180)) / 2) * 1000) / 1000;

export const phaseName = (angle: number): PhaseName => {
  const a = ((angle % 360) + 360) % 360;
  if (a === 0) return 'new moon';
  if (a === 90) return 'first quarter';
  if (a === 180) return 'full moon';
  if (a === 270) return 'last quarter';
  throw new RangeError('only the four main positions are named');
};

/** Spring tides when the Sun, Earth and Moon are lined up (new and full moon); neap tides when the Sun and Moon are at right angles (the quarters). */
export const tideType = (angle: number): 'spring' | 'neap' => {
  const a = ((angle % 360) + 360) % 360;
  return a === 0 || a === 180 ? 'spring' : 'neap';
};

/** Tilt of Earth's axis, in degrees (about 23,5). */
export const AXIAL_TILT = 23.5;
