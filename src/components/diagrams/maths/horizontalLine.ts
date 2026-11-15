/**
 * The horizontal-line test for f(x) = x^2, as the Grade 12 lesson uses it: a function is one-to-one
 * when every horizontal line meets its graph at most once. The whole parabola fails (the line
 * y = c meets it at -sqrt(c) and +sqrt(c)); restricting the domain to x >= 0 makes it pass. The
 * meeting points are computed, not typed.
 */

export interface Domain { label: string; allows: (x: number) => boolean }

export const WHOLE: Domain = { label: 'all x', allows: () => true };
export const RESTRICTED: Domain = { label: 'x ≥ 0', allows: (x) => x >= 0 };

const ROUND = (n: number) => Math.round(n * 1e9) / 1e9;

/** The x values where the horizontal line y = c meets y = x^2 on the given domain. */
export const meetingPoints = (c: number, domain: Domain): number[] => {
  if (c < 0) return [];
  const r = ROUND(Math.sqrt(c));
  const xs = r === 0 ? [0] : [r, -r];
  return xs.filter((x) => domain.allows(x));
};

/** One-to-one on the picture: no horizontal line meets the graph twice. Checked on a sample of lines. */
export const isOneToOne = (domain: Domain, heights: number[] = [0.25, 1, 2.25, 4]): boolean =>
  heights.every((c) => meetingPoints(c, domain).length <= 1);

/** Points of y = x^2 on the domain for x in [-2, 2]. */
export const curvePoints = (domain: Domain, steps = 40): [number, number][] =>
  Array.from({ length: steps + 1 }, (_, i) => -2 + (4 * i) / steps)
    .filter((x) => domain.allows(x))
    .map((x): [number, number] => [x, x * x]);
