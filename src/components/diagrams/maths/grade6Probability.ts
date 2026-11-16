/**
 * Grade 6 Mathematics: probability experiments (CAPS Term 4) and position and movement on an alpha-numeric grid (Term 4). Every number in a lesson,
 * picture or bank key comes from these functions; grade6Probability.test.ts pins the values. No React here.
 *
 * CAPS probability: list the possible outcomes of a coin, die or spinner first, record results with tally marks, count and compare the frequency of
 * outcomes for up to 50 trials. Probability is NOT written as a fraction in Grade 6.
 */

export const COIN = ['heads', 'tails'] as const;
export const DIE = [1, 2, 3, 4, 5, 6] as const;

/** A tally as groups of five: 13 -> { fives: 2, rest: 3 }. */
export const tallyGroups = (n: number): { fives: number; rest: number } => ({ fives: Math.floor(n / 5), rest: n % 5 });

/** The tally written in words for alt text: 13 -> "2 groups of five and 3 more". */
export const tallyWords = (n: number): string => {
  const { fives, rest } = tallyGroups(n);
  if (fives === 0) return `${rest} strokes`;
  return rest === 0 ? `${fives} group${fives === 1 ? '' : 's'} of five` : `${fives} group${fives === 1 ? '' : 's'} of five and ${rest} more`;
};

/** The total number of trials in a frequency table. */
export const totalTrials = (counts: number[]): number => counts.reduce((a, b) => a + b, 0);

/** The index of the outcome that happened most often, or -1 when two or more outcomes tie for the highest. */
export const mostOften = (counts: number[]): number => {
  const max = Math.max(...counts);
  return counts.filter((c) => c === max).length === 1 ? counts.indexOf(max) : -1;
};

/** The index of the outcome that happened least often, or -1 when two or more tie. */
export const leastOften = (counts: number[]): number => {
  const min = Math.min(...counts);
  return counts.filter((c) => c === min).length === 1 ? counts.indexOf(min) : -1;
};

/** How many more times the first outcome happened than the second. */
export const moreThan = (a: number, b: number): number => a - b;

/** The number of different outcomes when two coins are tossed together, listed as pairs (HH, HT, TH, TT): 4. */
export const twoCoinOutcomes = (): string[] => {
  const out: string[] = [];
  for (const a of ['H', 'T']) for (const b of ['H', 'T']) out.push(`${a}${b}`);
  return out;
};

/** The number of outcomes of a spinner with the given colours (one per equal section). */
export const spinnerOutcomes = (sections: string[]): string[] => [...new Set(sections)];

/** The sections of a spinner that have the given colour. */
export const sectionsOf = (sections: string[], colour: string): number => sections.filter((s) => s === colour).length;

// ---------------------------------------------------------------- grids and directions (letters across the top, numbers down the side)

export const colLetter = (col: number): string => String.fromCharCode(65 + col);
/** col 0-based from the left, row 1-based from the top: (3, 4) -> "D4". */
export const cellName = (col: number, row: number): string => `${colLetter(col)}${row}`;
export const parseCell = (cell: string): { col: number; row: number } => ({ col: cell.charCodeAt(0) - 65, row: Number(cell.slice(1)) });

export type Dir = 'right' | 'left' | 'up' | 'down';
export const move = (cell: string, dir: Dir, steps: number): string => {
  const { col, row } = parseCell(cell);
  const dc = dir === 'right' ? steps : dir === 'left' ? -steps : 0;
  const dr = dir === 'down' ? steps : dir === 'up' ? -steps : 0;
  return cellName(col + dc, row + dr);
};

/** Follow a list of moves from a start cell. */
export const follow = (start: string, moves: [Dir, number][]): string => moves.reduce((c, [d, n]) => move(c, d, n), start);

/** The shortest instructions between two cells: across first, then up or down. */
export const directions = (from: string, to: string): [Dir, number][] => {
  const a = parseCell(from);
  const b = parseCell(to);
  const out: [Dir, number][] = [];
  if (b.col !== a.col) out.push([b.col > a.col ? 'right' : 'left', Math.abs(b.col - a.col)]);
  if (b.row !== a.row) out.push([b.row > a.row ? 'down' : 'up', Math.abs(b.row - a.row)]);
  return out;
};

export const dirsText = (moves: [Dir, number][]): string => moves.map(([d, n]) => `${n} ${n === 1 ? 'square' : 'squares'} ${d}`).join(', then ');

/** Total squares walked along the moves. */
export const stepsIn = (moves: [Dir, number][]): number => moves.reduce((a, [, n]) => a + n, 0);

/** The compass name of a cardinal direction when north is the top of the map. */
export const compass = (d: Dir): string => ({ up: 'north', down: 'south', right: 'east', left: 'west' })[d];
