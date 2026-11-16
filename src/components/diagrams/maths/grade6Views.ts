/**
 * Grade 6 Mathematics: viewing objects (CAPS Term 3). A structure of cubes is a grid of tower heights: heights[r][c] is the number of cubes in the
 * tower in row r (r = 0 is the FRONT row, the row nearest a viewer who stands in front) and column c (c = 0 is the column on the LEFT as seen from the
 * front). Views are lists of heights read from the viewer's left to the viewer's right. Every number in a lesson, picture or bank key comes from these
 * functions; grade6Views.test.ts pins the values. No React here.
 */
export type Heights = number[][];

export type Viewer = 'front' | 'back' | 'left' | 'right' | 'top';

const cols = (h: Heights): number => Math.max(...h.map((r) => r.length));
const cell = (h: Heights, r: number, c: number): number => h[r]?.[c] ?? 0;

/** The tallest tower in each column, left to right, for a viewer standing in front. */
export const frontView = (h: Heights): number[] => Array.from({ length: cols(h) }, (_, c) => Math.max(...h.map((_r, r) => cell(h, r, c))));
/** The back view is the front view the other way round. */
export const backView = (h: Heights): number[] => [...frontView(h)].reverse();
/** A viewer on the right looking left sees the front row on their left and the back row on their right. */
export const rightView = (h: Heights): number[] => h.map((_row, r) => Math.max(...Array.from({ length: cols(h) }, (_, c) => cell(h, r, c))));
/** A viewer on the left looking right sees the back row on their left and the front row on their right. */
export const leftView = (h: Heights): number[] => [...rightView(h)].reverse();

export const viewFrom = (h: Heights, who: Exclude<Viewer, 'top'>): number[] => ({ front: frontView, back: backView, right: rightView, left: leftView })[who](h);

/** Number of cubes in the whole structure. */
export const totalCubes = (h: Heights): number => h.reduce((a, row) => a + row.reduce((b, n) => b + n, 0), 0);
/** The top view: number of squares that have a tower (the footprint). */
export const footprint = (h: Heights): number => h.reduce((a, row) => a + row.filter((n) => n > 0).length, 0);
/** Height of the tallest tower. */
export const tallest = (h: Heights): number => Math.max(...h.map((r) => Math.max(...r)));
export const dims = (h: Heights): { rows: number; cols: number } => ({ rows: h.length, cols: cols(h) });

/** Which viewers would see exactly this list of heights (left to right)? */
export const viewersWhoSee = (h: Heights, seen: number[]): Exclude<Viewer, 'top'>[] =>
  (['front', 'back', 'left', 'right'] as const).filter((v) => {
    const view = viewFrom(h, v);
    return view.length === seen.length && view.every((n, i) => n === seen[i]);
  });

export const listText = (v: number[]): string => v.join(', ');
