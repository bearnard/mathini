/** Small tested helpers for the Grade 5 lessons and their pictures. */

export const DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const;
export type Direction = (typeof DIRECTIONS)[number];

export const DIRECTION_NAMES: Record<Direction, string> = {
  N: 'north',
  NE: 'north-east',
  E: 'east',
  SE: 'south-east',
  S: 'south',
  SW: 'south-west',
  W: 'west',
  NW: 'north-west',
};

/** The direction directly opposite on the compass: half a turn (4 of the 8 points) away. */
export const opposite = (d: Direction): Direction => DIRECTIONS[(DIRECTIONS.indexOf(d) + 4) % 8];

/** Angle of a direction in degrees, measured clockwise from north. */
export const bearing = (d: Direction): number => DIRECTIONS.indexOf(d) * 45;

/** Real distance in km from a distance on the map (cm) and the scale (km for every 1 cm). */
export const realKm = (cm: number, kmPerCm: number): number => cm * kmPerCm;

/** The map scale used in the lesson: 1 cm on the map stands for 50 km on the ground. */
export const LESSON_SCALE_KM_PER_CM = 50;
/** The distance measured on the map in the lesson example. */
export const LESSON_MAP_CM = 3;

/** The rain gauge in the lesson: the gauge holds up to 50 mm and the water stands at this level. */
export const GAUGE_MAX_MM = 50;
export const GAUGE_LEVEL_MM = 32;
/** The fraction of the gauge that is full. */
export const gaugeFraction = (level: number, max: number): number => level / max;

/** The profile used in the land-features picture: height (0 to 100) at each of the four zones. */
export const PROFILE = [
  { zone: 'coastal plain', from: 0, to: 30, height: 10 },
  { zone: 'escarpment', from: 30, to: 50, height: 90 },
  { zone: 'plateau', from: 50, to: 100, height: 90 },
] as const;

/** A zone is a steep slope if the height changes by more than 40 over its width. */
export const isSteep = (zone: (typeof PROFILE)[number], before: number): boolean => Math.abs(zone.height - before) > 40;
