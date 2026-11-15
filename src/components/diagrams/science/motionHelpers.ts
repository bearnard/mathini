/**
 * Tested helpers for the Grade 8 motion, gravity and orbit pictures: average speed, weight on
 * different worlds, and the shape of an orbit. Every number in a picture or worked example comes
 * from here.
 */

/** Average speed in metres per second: distance in metres divided by time in seconds. */
export const speed = (distance: number, time: number): number => {
  if (!(time > 0) || distance < 0) throw new RangeError('time must be positive and distance not negative');
  return distance / time;
};

/** Distance = speed x time. */
export const distance = (v: number, time: number): number => v * time;

/** Time = distance / speed. */
export const timeTaken = (d: number, v: number): number => {
  if (!(v > 0)) throw new RangeError('speed must be positive');
  return d / v;
};

/** Gravitational field strength in N/kg (the same number as m/s squared). CAPS uses 9,8 on Earth; the Moon's is about 1,6. */
export const G_EARTH = 9.8;
export const G_MOON = 1.6;

/** Weight in newtons of a given mass in kilograms: mass x g. Mass does not change from place to place; weight does. */
export const weight = (massKg: number, g: number): number => Math.round(massKg * g * 10) / 10;

/** Orbit shape: an ellipse with semi-major axis a and eccentricity e (0 is a circle, near 1 is very stretched). */
export const ellipse = (a: number, e: number): { a: number; b: number; c: number } => {
  if (!(a > 0) || e < 0 || e >= 1) throw new RangeError('a must be positive and e between 0 and 1');
  const b = a * Math.sqrt(1 - e * e);
  return { a, b: Math.round(b * 1e6) / 1e6, c: Math.round(a * e * 1e6) / 1e6 };
};

/** The Sun sits at a focus of the orbit, a distance c from the centre. The closest and furthest points are a - c and a + c. */
export const closestAndFurthest = (a: number, e: number): { near: number; far: number } => {
  const { c } = ellipse(a, e);
  return { near: a - c, far: a + c };
};

/** The eight planets in order from the Sun. */
export const PLANETS = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'] as const;
