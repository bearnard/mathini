/**
 * Tested helpers for the Grade 9 electronics pictures: how the resistance of a light-dependent
 * resistor (LDR) and of a common (NTC) thermistor changes, and the current from Ohm's law.
 * The curves are schematic (no real values) but always fall in the right direction.
 */

/** Resistance of an LDR as light increases from 0 (dark) to 1 (bright): it falls. */
export const ldrResistance = (light: number): number => {
  if (light < 0 || light > 1) throw new RangeError('light is between 0 and 1');
  return 100 * Math.exp(-3.2 * light) + 4;
};

/** Resistance of a common (NTC) thermistor as temperature rises from 0 (cold) to 1 (hot): it falls. */
export const thermistorResistance = (heat: number): number => {
  if (heat < 0 || heat > 1) throw new RangeError('heat is between 0 and 1');
  return 100 * Math.exp(-2.6 * heat) + 6;
};

/** Ohm's law: V = I x R, so I = V / R. */
export const current = (volts: number, ohms: number): number => {
  if (!(ohms > 0)) throw new RangeError('resistance must be positive');
  return volts / ohms;
};
