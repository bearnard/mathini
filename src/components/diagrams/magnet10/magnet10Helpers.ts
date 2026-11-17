import { r3 } from '../round';

/** Rules and numbers for the Grade 10 Physical Sciences magnetism lesson. Tested in magnet10Helpers.test.ts. */

export type Pole = 'N' | 'S';
/** Two poles repel if they are the same (like poles) and attract if they are different (unlike poles). */
export const force = (a: Pole, b: Pole): 'repel' | 'attract' => (a === b ? 'repel' : 'attract');

/**
 * Direction of the field of a bar magnet (a dipole along the x axis, north pole on the right) at a point (x, y) away from its centre.
 * B is proportional to (3 (m . r) r / r^5 - m / r^3). Returns the angle of B in degrees (anticlockwise from +x, y up) and a relative strength 1/r^3.
 */
export function dipoleField(x: number, y: number): { angle: number; strength: number } {
  const r2 = x * x + y * y;
  const r = Math.sqrt(r2);
  const mx = 1, my = 0; // the magnet's moment points from S to N, along +x
  const dot = mx * x + my * y;
  const bx = (3 * dot * x) / (r2 * r2 * r) - mx / (r2 * r);
  const by = (3 * dot * y) / (r2 * r2 * r) - my / (r2 * r);
  return { angle: r3((Math.atan2(by, bx) * 180) / Math.PI), strength: r3(1 / (r2 * r)) };
}
/** How many times weaker the field is at k times the distance (a dipole falls off with the cube). */
export const fieldFactor = (k: number): number => r3(1 / k ** 3);

/** The Earth acts like a bar magnet whose magnetic SOUTH pole is near the geographic North pole, so a compass needle's north end points north. */
export const compassPointsTo = (): 'geographic north' => 'geographic north';
export const poleNearGeographicNorth = (): Pole => 'S';

/** Materials that a magnet attracts. */
export const MAGNETIC = ['iron', 'cobalt', 'nickel', 'steel'] as const;
export const NOT_MAGNETIC = ['copper', 'aluminium', 'gold', 'plastic', 'wood'] as const;
export const isMagnetic = (m: string): boolean => (MAGNETIC as readonly string[]).includes(m);
