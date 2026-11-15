/**
 * Distance and displacement for a journey made of straight legs. Each leg is (dx east, dy north) in metres.
 * Distance is a scalar: the total length of the path. Displacement is a vector: the straight line from start to finish, with a
 * direction (here in degrees north of east, for journeys that end north and east of the start).
 */

export interface Leg { dx: number; dy: number }
export interface Pt { x: number; y: number }

export interface Journey {
  points: Pt[]; // start, then the end of each leg
  distance: number;
  displacement: number;
  /** Degrees north of east of the straight line from start to finish. */
  angleDeg: number;
}

export const journey = (legs: Leg[]): Journey => {
  if (legs.length === 0) throw new RangeError('at least one leg');
  const points: Pt[] = [{ x: 0, y: 0 }];
  for (const l of legs) {
    const last = points[points.length - 1];
    points.push({ x: last.x + l.dx, y: last.y + l.dy });
  }
  const end = points[points.length - 1];
  return {
    points,
    distance: legs.reduce((s, l) => s + Math.hypot(l.dx, l.dy), 0),
    displacement: Math.hypot(end.x, end.y),
    angleDeg: (Math.atan2(end.y, end.x) * 180) / Math.PI,
  };
};
