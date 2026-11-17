import { r3 } from '../round';

/** Numbers for the Grade 10 Physical Sciences motion in one dimension lessons: position, displacement and distance;
 * average speed, average velocity and acceleration; instantaneous velocity and position-time graphs. Tested in motion10Helpers.test.ts. */

// ---------- position, displacement, distance ----------

/** Displacement = change in position (a vector: the sign gives the direction). */
export const displacement = (xi: number, xf: number): number => r3(xf - xi);
/** Distance travelled along a path of positions: the sum of the sizes of each step (a scalar). */
export const distanceAlong = (path: readonly number[]): number => r3(path.slice(1).reduce((a, x, i) => a + Math.abs(x - path[i]), 0));
export const displacementAlong = (path: readonly number[]): number => displacement(path[0], path[path.length - 1]);

// ---------- speed, velocity, acceleration ----------

export const averageSpeed = (distance: number, seconds: number): number => r3(distance / seconds);
export const averageVelocity = (dx: number, seconds: number): number => r3(dx / seconds);
export const acceleration = (vi: number, vf: number, seconds: number): number => r3((vf - vi) / seconds);
export const kmhToMs = (kmh: number): number => r3(kmh / 3.6);
export const msToKmh = (ms: number): number => r3(ms * 3.6);
/** Whether an object speeds up or slows down depends on the signs of velocity and acceleration together. */
export const motionKind = (v: number, a: number): 'speeding up' | 'slowing down' | 'constant velocity' | 'at rest' =>
  a === 0 ? (v === 0 ? 'at rest' : 'constant velocity') : v * a > 0 ? 'speeding up' : v * a < 0 ? 'slowing down' : 'speeding up';

// ---------- constant acceleration and the x-t graph ----------

/** Position at time t for constant acceleration: x = x0 + v0 t + a t^2 / 2. */
export const positionAt = (x0: number, v0: number, a: number, t: number): number => r3(x0 + v0 * t + 0.5 * a * t * t);
/** Velocity at time t: v = v0 + a t. This equals the slope of the tangent to the x-t graph at t (the instantaneous velocity). */
export const velocityAt = (v0: number, a: number, t: number): number => r3(v0 + a * t);
/** Average velocity over a time interval = slope of the chord of the x-t graph. */
export const chordVelocity = (x0: number, v0: number, a: number, t1: number, t2: number): number => r3((positionAt(x0, v0, a, t2) - positionAt(x0, v0, a, t1)) / (t2 - t1));
/** Instantaneous speed is the size of the instantaneous velocity. */
export const instantaneousSpeed = (v: number): number => Math.abs(v);
