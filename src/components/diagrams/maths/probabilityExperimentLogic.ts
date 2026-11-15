/** Pure logic behind ProbabilityExperiment: random trials with an injectable random source, and SA-formatted relative frequencies. */

export type ExperimentKind = 'coin' | 'die';

export const outcomesOf = (kind: ExperimentKind): string[] => (kind === 'coin' ? ['heads', 'tails'] : ['1', '2', '3', '4', '5', '6']);

/** Theoretical probability of each outcome of a fair coin or die. */
export const theoryOf = (kind: ExperimentKind): number => (kind === 'coin' ? 1 / 2 : 1 / 6);

/** Run n trials and return how many times each outcome came up (same order as outcomesOf). */
export const runTrials = (kind: ExperimentKind, n: number, rng: () => number = Math.random): number[] => {
  const k = outcomesOf(kind).length;
  const counts = Array.from({ length: k }, () => 0);
  for (let i = 0; i < n; i++) counts[Math.min(k - 1, Math.floor(rng() * k))]++;
  return counts;
};

export const addCounts = (a: number[], b: number[]): number[] => a.map((x, i) => x + b[i]);

/** Relative frequency count / total as a decimal with the SA comma and two places: 23/50 gives "0,46". No trials gives "–". */
export const relFreq = (count: number, total: number): string => (total === 0 ? '–' : (Math.round((count / total) * 100) / 100).toFixed(2).replace('.', ','));

/** The theoretical probability as a decimal with the SA comma: 0,5 for a coin, 0,17 for one face of a die. */
export const theoryText = (kind: ExperimentKind): string => (kind === 'coin' ? '0,5' : (Math.round((1 / 6) * 100) / 100).toFixed(2).replace('.', ','));
