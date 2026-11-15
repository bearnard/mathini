/**
 * Tested helpers for the Grade 8-9 Technology pictures: logic gates built from switches, and the
 * effort needed on a ramp (an inclined plane). Every number in a picture or a worked example comes
 * from here.
 */

export type Bit = 0 | 1;

export const and = (a: Bit, b: Bit): Bit => (a === 1 && b === 1 ? 1 : 0);
export const or = (a: Bit, b: Bit): Bit => (a === 1 || b === 1 ? 1 : 0);

/** A lamp lights when the path is complete. Two switches in series: both must be closed. */
export const seriesLamp = (a: Bit, b: Bit): Bit => (a === 1 && b === 1 ? 1 : 0);
/** Two switches in parallel: either one closed is enough. */
export const parallelLamp = (a: Bit, b: Bit): Bit => (a === 1 || b === 1 ? 1 : 0);

export interface TruthRow { a: Bit; b: Bit; out: Bit }

/** Every combination of two inputs, with the output of the gate. */
export const truthTable = (gate: (a: Bit, b: Bit) => Bit): TruthRow[] =>
  ([0, 1] as Bit[]).flatMap((a) => ([0, 1] as Bit[]).map((b) => ({ a, b, out: gate(a, b) })));

/** Effort force (N) to push a load up a smooth ramp: load x height / length. Friction is ignored. */
export const rampEffort = (load: number, height: number, length: number): number => {
  if (!(height > 0) || !(length >= height) || load < 0) throw new RangeError('the ramp must be at least as long as it is high');
  return (load * height) / length;
};

/** Mechanical advantage of a ramp: length / height. */
export const rampAdvantage = (height: number, length: number): number => {
  if (!(height > 0) || !(length >= height)) throw new RangeError('the ramp must be at least as long as it is high');
  return length / height;
};
