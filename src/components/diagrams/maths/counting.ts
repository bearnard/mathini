/**
 * Tree for the fundamental counting principle: m ways for a first choice, then n ways for a second,
 * gives m x n outcomes. The letters are plain labels (no story), so the picture adds no new facts.
 */

const FIRST = ['A', 'B', 'C', 'D', 'E'];
const SECOND = ['X', 'Y', 'Z', 'W'];

export interface TreeBranch {
  first: string;
  leaves: { second: string; outcome: string }[];
}

export const countingTree = (m: number, n: number): TreeBranch[] => {
  if (!Number.isInteger(m) || !Number.isInteger(n) || m < 1 || n < 1 || m > FIRST.length || n > SECOND.length) {
    throw new RangeError('m must be 1 to 5 and n 1 to 4');
  }
  return FIRST.slice(0, m).map((first) => ({
    first,
    leaves: SECOND.slice(0, n).map((second) => ({ second, outcome: `${first}${second}` })),
  }));
};

export const outcomeCount = (tree: TreeBranch[]): number => tree.reduce((a, b) => a + b.leaves.length, 0);
