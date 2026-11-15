/**
 * The two special right triangles behind the exact values sin 30° = 1/2, cos 60° = 1/2 and tan 45° = 1.
 *   30-60-90: half of an equilateral triangle with side 2 (so the short side is 1 and the long side is √3).
 *   45-45-90: half of a square with side 1 (so the hypotenuse is √2).
 * Coordinates are in units of the short side, with the right angle at B and the angle named in the picture at A.
 */

export interface Pt { x: number; y: number }
export interface SpecialTriangle {
  name: string;
  angleA: number;
  A: Pt;
  B: Pt;
  C: Pt;
  /** Sides opposite and adjacent to angle A, and the hypotenuse. */
  opposite: number;
  adjacent: number;
  hypotenuse: number;
}

export const dist = (p: Pt, q: Pt): number => Math.hypot(p.x - q.x, p.y - q.y);

export const triangle3060: SpecialTriangle = {
  name: '30-60-90',
  angleA: 30,
  A: { x: 0, y: 0 },
  B: { x: Math.sqrt(3), y: 0 },
  C: { x: Math.sqrt(3), y: 1 },
  opposite: 1,
  adjacent: Math.sqrt(3),
  hypotenuse: 2,
};

export const triangle45: SpecialTriangle = {
  name: '45-45-90',
  angleA: 45,
  A: { x: 0, y: 0 },
  B: { x: 1, y: 0 },
  C: { x: 1, y: 1 },
  opposite: 1,
  adjacent: 1,
  hypotenuse: Math.SQRT2,
};

/** The exact ratios the lesson states, as [numerator, denominator]. */
export const exactValues = { sin30: [1, 2], cos60: [1, 2], tan45: [1, 1] } as const;
