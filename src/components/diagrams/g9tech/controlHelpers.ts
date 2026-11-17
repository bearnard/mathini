import { r3 } from '../round';
export { outputForce, pressure } from '../science/tech9Helpers';

/** Numbers for the Grade 9 mechanical control systems lesson (ratchet and pawl, disc brake, bicycle brake, cleat). Tested in controlHelpers.test.ts. */

// ---------- ratchet and pawl ----------

/** Degrees the wheel turns between one tooth and the next (one click). */
export const clickAngle = (teeth: number): number => r3(360 / teeth);
/** Clicks in one full turn: one per tooth. */
export const clicksPerTurn = (teeth: number): number => teeth;
/** Position of a point on a circle, angle in degrees measured anticlockwise from the 3 o'clock direction (y points up on the page, so subtract). */
export const polar = (cx: number, cy: number, r: number, deg: number): { x: number; y: number } => ({
  x: r3(cx + r * Math.cos((deg * Math.PI) / 180)),
  y: r3(cy - r * Math.sin((deg * Math.PI) / 180)),
});
/** Saw-tooth outline of a ratchet wheel: each tooth rises gently to the tip and drops steeply back to the root. */
export function ratchetPath(cx: number, cy: number, inner: number, outer: number, teeth: number): string {
  const step = 360 / teeth;
  const pts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const root = polar(cx, cy, inner, i * step);
    const tip = polar(cx, cy, outer, (i + 0.85) * step);
    pts.push(`${i === 0 ? 'M' : 'L'}${root.x} ${root.y}`, `L${tip.x} ${tip.y}`);
  }
  return `${pts.join(' ')} Z`;
}

// ---------- lever on a bicycle brake ----------

/** Mechanical advantage of a lever: effort distance from the pivot divided by load distance from the pivot. */
export const leverMA = (effortDist: number, loadDist: number): number => r3(effortDist / loadDist);
/** Force on the cable (the load) for a hand force (the effort). */
export const cableForce = (handForce: number, effortDist: number, loadDist: number): number => r3(handForce * leverMA(effortDist, loadDist));
