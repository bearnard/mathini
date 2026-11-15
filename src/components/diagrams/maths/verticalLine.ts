/**
 * The vertical-line test, with two graphs that give opposite answers: y = x^2 (a function) and
 * x = y^2 (a parabola on its side, not a function). A vertical line x = c meets a function at most
 * once; the number of meeting points here is computed, not typed.
 */

export interface Relation {
  /** How it is written on the picture. */
  label: string;
  /** The y values of the graph on the vertical line x = c. */
  outputsAt: (c: number) => number[];
  /** Points to draw the curve through, for t in its own parameter range. */
  points: (steps: number) => [number, number][];
}

const ROUND = (n: number) => Math.round(n * 1e9) / 1e9;

/** y = x^2: one output for every input. */
export const SQUARE: Relation = {
  label: 'y = x²',
  outputsAt: (c) => [ROUND(c * c)],
  points: (steps) => Array.from({ length: steps + 1 }, (_, i) => {
    const x = -2 + (4 * i) / steps;
    return [x, x * x];
  }),
};

/** x = y^2: the same curve turned on its side. Most inputs give two outputs. */
export const SIDEWAYS: Relation = {
  label: 'x = y²',
  outputsAt: (c) => (c < 0 ? [] : c === 0 ? [0] : [ROUND(Math.sqrt(c)), ROUND(-Math.sqrt(c))]),
  points: (steps) => Array.from({ length: steps + 1 }, (_, i) => {
    const y = -2 + (4 * i) / steps;
    return [y * y, y];
  }),
};

/** A relation is a function on the picture when the line meets it exactly once. */
export const meetsOnce = (r: Relation, c: number): boolean => r.outputsAt(c).length === 1;
