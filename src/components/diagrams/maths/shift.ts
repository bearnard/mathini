/**
 * Translation of y = x^2 and y = 1/x by p to the right and q up, as the Grade 11 lesson "Read
 * Transformations from the Equation" teaches: y = a(x - p)^2 + q has its vertex at (p; q), and
 * y = a/(x - p) + q has asymptotes x = p and y = q. The lesson's own example is p = 2, q = 1.
 */

export const P = 2;
export const Q = 1;

export const parabola = (a: number, p: number, q: number) => (x: number): number => a * (x - p) ** 2 + q;
export const hyperbola = (a: number, p: number, q: number) => (x: number): number => a / (x - p) + q;

export const vertex = (p: number, q: number): [number, number] => [p, q];
export const asymptotes = (p: number, q: number): { x: number; y: number } => ({ x: p, y: q });

/** Points of f within the window, split into separate pieces wherever f is undefined or leaves it. */
export const pieces = (f: (x: number) => number, xmin: number, xmax: number, ymin: number, ymax: number, steps = 240): [number, number][][] => {
  const out: [number, number][][] = [];
  let cur: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const x = xmin + ((xmax - xmin) * i) / steps;
    const y = f(x);
    if (Number.isFinite(y) && y >= ymin && y <= ymax) cur.push([x, y]);
    else if (cur.length) { out.push(cur); cur = []; }
  }
  if (cur.length) out.push(cur);
  return out;
};
