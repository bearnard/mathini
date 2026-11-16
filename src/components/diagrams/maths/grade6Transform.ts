/**
 * Grade 6 Mathematics: transformations (CAPS Term 3 describing patterns, Term 4 enlargements and reductions). Points are [x, y] on a square grid with x to
 * the right and y DOWN the page (like grid rows), whole numbers only. Every number in a lesson, picture or bank key comes from these functions;
 * grade6Transform.test.ts pins the values. No React here.
 */
export type Pt = [number, number];

export const translate = (pts: Pt[], dx: number, dy: number): Pt[] => pts.map(([x, y]) => [x + dx, y + dy]);
/** Reflect in the vertical line x = k (k may be a whole number or a half). */
export const reflectInVertical = (pts: Pt[], k: number): Pt[] => pts.map(([x, y]) => [2 * k - x, y]);
/** Reflect in the horizontal line y = k. */
export const reflectInHorizontal = (pts: Pt[], k: number): Pt[] => pts.map(([x, y]) => [x, 2 * k - y]);
/** Turn clockwise by quarter turns about the centre (y points down the page, so a clockwise turn sends right to down). */
export const rotateQuarter = (pts: Pt[], centre: Pt, quarterTurns: number): Pt[] =>
  pts.map(([x, y]) => {
    let dx = x - centre[0];
    let dy = y - centre[1];
    for (let i = 0; i < ((quarterTurns % 4) + 4) % 4; i++) [dx, dy] = [-dy, dx];
    return [centre[0] + dx, centre[1] + dy];
  });

/** Enlarge or reduce by multiplying every length by `num / den` from a fixed point (the first corner stays where it is). */
export const scaleFrom = (pts: Pt[], num: number, den: number): Pt[] => pts.map(([x, y]) => [pts[0][0] + ((x - pts[0][0]) * num) / den, pts[0][1] + ((y - pts[0][1]) * num) / den]);

/** Lengths of the sides of a figure whose sides run along the grid (horizontal or vertical) or are given directly. */
export const scaleLengths = (lengths: number[], num: number, den: number): number[] => lengths.map((l) => (l * num) / den);

export const perimeter = (sides: number[]): number => sides.reduce((a, b) => a + b, 0);
export const rectArea = (l: number, b: number): number => l * b;
/** How many times bigger the area of a rectangle becomes when both sides are multiplied by k (a whole number): k × k. */
export const areaFactor = (k: number): number => k * k;
/** The area of a right-angled triangle with the two short sides a and b (whole numbers, a × b even is not required: returned as a decimal count of halves). */
export const triangleAreaTwice = (a: number, b: number): number => a * b;

/** Grid references of the corners (column letter, row number) from points whose x and y are 0-based column and 0-based row. */
export const corner = ([x, y]: Pt): string => `${String.fromCharCode(65 + x)}${y + 1}`;
