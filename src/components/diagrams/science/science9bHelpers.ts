/**
 * Tested helpers for the Grade 9 heat, Earth and stars lessons: whether a reaction releases or
 * absorbs heat, the layers of the Earth, how long light takes, and the Sun's age.
 */

/** A reaction is exothermic when the products have less energy than the reactants (heat is released). */
export const reactionKind = (reactantEnergy: number, productEnergy: number): 'exothermic' | 'endothermic' | 'no heat change' =>
  productEnergy < reactantEnergy ? 'exothermic' : productEnergy > reactantEnergy ? 'endothermic' : 'no heat change';

export const heatChange = (reactantEnergy: number, productEnergy: number): number => reactantEnergy - productEnergy; // positive: heat released

/**
 * Layers of the Earth as depths in km (standard values, e.g. USGS): the crust averages about 35 km,
 * the mantle goes down to 2 890 km, the outer core to 5 150 km and the inner core to the centre
 * at 6 371 km (the Earth's mean radius).
 */
export const EARTH_RADIUS_KM = 6371;
export const LAYERS = [
  { name: 'crust', from: 0, to: 35 },
  { name: 'mantle', from: 35, to: 2890 },
  { name: 'outer core', from: 2890, to: 5150 },
  { name: 'inner core', from: 5150, to: 6371 },
] as const;

export const thickness = (name: (typeof LAYERS)[number]['name']): number => {
  const l = LAYERS.find((x) => x.name === name)!;
  return l.to - l.from;
};

export const thickestLayer = (): string => LAYERS.reduce((a, b) => (b.to - b.from > a.to - a.from ? b : a)).name;

/** The speed of light in km per second (about 300 000 for the lesson) and a year in seconds. */
export const LIGHT_KM_S = 299792.458;
export const YEAR_S = 365.25 * 24 * 3600;

export const lightSeconds = (km: number): number => km / LIGHT_KM_S;
/** One light year in kilometres. */
export const lightYearKm = (): number => LIGHT_KM_S * YEAR_S;
export const SUN_DISTANCE_KM = 149_600_000;
export const minutesAndSeconds = (seconds: number): { m: number; s: number } => ({ m: Math.floor(seconds / 60), s: Math.round(seconds % 60) });

/** The Sun is about 4,6 billion years old and will spend about 10 billion years on the main sequence. */
export const SUN_AGE_BY = 4.6;
export const SUN_MAIN_SEQUENCE_BY = 10;
export const sunFractionOfMainSequence = (): number => Math.round((SUN_AGE_BY / SUN_MAIN_SEQUENCE_BY) * 100) / 100;
