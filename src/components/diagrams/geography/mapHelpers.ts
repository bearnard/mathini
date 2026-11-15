/**
 * Tested helpers for the map-skills pictures: an imaginary neighbourhood on a grid, directions and
 * reversing them, scale, ratio scale, longitude and time, and the globe's lines. The place is made
 * up. Every number or position drawn comes from here.
 */

export interface Place { name: string; x: number; y: number } // x and y in map centimetres; y grows to the north

export const PLACES: Record<'school' | 'clinic' | 'shop' | 'park', Place> = {
  school: { name: 'school', x: 1, y: 3 },
  clinic: { name: 'clinic', x: 4.5, y: 3 },
  shop: { name: 'shop', x: 2, y: 1 },
  park: { name: 'park', x: 5, y: 1 },
};

export type Dir = 'north' | 'south' | 'east' | 'west';

/** The main direction from one place to another. */
export const direction = (from: Place, to: Place): Dir => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  if (Math.abs(dx) >= Math.abs(dy)) return dx >= 0 ? 'east' : 'west';
  return dy >= 0 ? 'north' : 'south';
};

export const opposite = (d: Dir): Dir => ({ north: 'south', south: 'north', east: 'west', west: 'east' } as const)[d];

/** On this map 1 cm stands for 100 m. */
export const METRES_PER_CM = 100;
export const realMetres = (mapCm: number, metresPerCm = METRES_PER_CM): number => mapCm * metresPerCm;

export const polylineLength = (pts: { x: number; y: number }[]): number => pts.slice(1).reduce((s, p, i) => s + Math.hypot(p.x - pts[i].x, p.y - pts[i].y), 0);

/** Two ways from the school to the clinic, both along the roads drawn on the map (the vertical roads are at x = 2 and x = 5). */
export const ROUTE_A = [PLACES.school, PLACES.clinic];
export const ROUTE_B = [PLACES.school, { x: 2, y: 3 }, PLACES.shop, PLACES.park, { x: 5, y: 3 }, PLACES.clinic];
export const routeMetres = (route: { x: number; y: number }[]): number => Math.round(realMetres(polylineLength(route)) / 10) * 10;

/** A ratio scale 1:n: 1 cm on the map is n cm on the ground. Returns metres on the ground for some map centimetres. */
export const groundMetres = (mapCm: number, n: number): number => (mapCm * n) / 100;

/** Longitude and time: the Earth turns 360 degrees in 24 hours, so 15 degrees is 1 hour. */
export const DEGREES_PER_HOUR = 360 / 24;
export const hoursBetween = (lonA: number, lonB: number): number => Math.abs(lonA - lonB) / DEGREES_PER_HOUR;

/** Crossing the International Date Line from east to west, the calendar moves forward one day. */
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
export const crossEastToWest = (day: (typeof DAYS)[number]): (typeof DAYS)[number] => DAYS[(DAYS.indexOf(day) + 1) % 7];

/** Lines on a side view of a globe of radius R, centred on longitude 0. */
export const parallel = (lat: number, R: number): { dy: number; halfWidth: number } => ({
  dy: R * Math.sin((lat * Math.PI) / 180),
  halfWidth: R * Math.cos((lat * Math.PI) / 180),
});
export const meridianRx = (lonFromCentre: number, R: number): number => R * Math.abs(Math.sin((lonFromCentre * Math.PI) / 180));

export const TROPIC = 23.5;
