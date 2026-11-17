import { r3 } from '../round';

/** Geometry for the Technology drawing lessons (Grade 7 graphical communication, Grade 9 single vanishing point). Tested in drawingHelpers.test.ts. */

export interface Pt { x: number; y: number }

// ---------- scale and dimensions ----------

/** A scale written 1:n (drawing is n times smaller) or n:1 (drawing is n times larger). Returns drawn size / real size. */
export function scaleFactor(scale: string): number {
  const m = /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)$/.exec(scale);
  if (!m) throw new Error(`bad scale ${scale}`);
  return Number(m[1]) / Number(m[2]);
}
export const drawnLength = (real: number, scale: string): number => r3(real * scaleFactor(scale));
export const realLength = (drawn: number, scale: string): number => r3(drawn / scaleFactor(scale));

// ---------- 3D oblique: front view true shape, depth lines at 45 degrees ----------

export interface Box3 { front: Pt[]; back: Pt[] }
/**
 * Oblique box with the front face w x h at the origin (y goes up). Depth d is drawn along 45 degrees, shortened by `k`
 * (k = 1 full depth, k = 0.5 half depth, which looks more natural). Returns the 4 front and 4 back corners in order
 * bottom-left, bottom-right, top-right, top-left.
 */
export function obliqueBox(w: number, h: number, d: number, k = 0.5): Box3 {
  const off = k * d * Math.SQRT1_2; // the same step across and up, because the angle is 45 degrees
  const front = [{ x: 0, y: 0 }, { x: w, y: 0 }, { x: w, y: h }, { x: 0, y: h }];
  const back = front.map((p) => ({ x: r3(p.x + off), y: r3(p.y + off) }));
  return { front, back };
}
export const obliqueOffset = (d: number, k = 0.5): number => r3(k * d * Math.SQRT1_2);
/** Length actually drawn along the 45-degree line. */
export const obliqueDepthDrawn = (d: number, k = 0.5): number => r3(k * d);

// ---------- single vanishing point perspective ----------

/** The point a fraction t of the way from p to the vanishing point (t = 0 is p, t = 1 is the vanishing point). */
export const towardVP = (p: Pt, vp: Pt, t: number): Pt => ({ x: r3(p.x + (vp.x - p.x) * t), y: r3(p.y + (vp.y - p.y) * t) });
/** One-point perspective box: the front face is drawn true shape, every depth line runs to the single vanishing point, and the back face is smaller. */
export function vpBox(front: Pt[], vp: Pt, t: number): Box3 {
  return { front, back: front.map((p) => towardVP(p, vp, t)) };
}
/** Size of the back face compared with the front (1 - t): a face further back is smaller. */
export const backScale = (t: number): number => r3(1 - t);

/** A whole number with a non-breaking space between thousands, then a non-breaking space and the unit, so it never wraps: 1 200 mm. */
export const fmtMm = (n: number): string => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} mm`;
