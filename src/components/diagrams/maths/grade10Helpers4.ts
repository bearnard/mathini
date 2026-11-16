import { frac, type Frac } from './grade10Helpers';

/**
 * Grade 10 Mathematics, Term 4: probability arithmetic. Every number in a lesson, picture or bank key comes from these functions and
 * grade10Helpers4.test.ts pins the values (and recomputes them by listing the outcomes).
 */

/** P(A) = n(A) / n(S) as a reduced fraction. */
export const probability = (favourable: number, total: number): Frac => frac(favourable, total);
/** P(not A) = 1 − P(A). */
export const complement = (p: Frac): Frac => frac(p[1] - p[0], p[1]);
/** n(A or B) = n(A) + n(B) − n(A and B). */
export const unionCount = (a: number, b: number, both: number): number => a + b - both;
/** The number in neither A nor B. */
export const neitherCount = (total: number, a: number, b: number, both: number): number => total - unionCount(a, b, both);
/** P(A or B) = P(A) + P(B) − P(A and B) for probabilities written as decimals, rounded to avoid floating-point noise. */
export const unionProbability = (pa: number, pb: number, pBoth: number): number => Math.round((pa + pb - pBoth) * 1e6) / 1e6;
/** Relative frequency: how often it happened out of how many trials. */
export const relativeFrequency = (count: number, trials: number): number => Math.round((count / trials) * 1e6) / 1e6;
/** The number of times you expect an event with probability p in n trials. */
export const expectedCount = (p: number, trials: number): number => Math.round(p * trials * 1e6) / 1e6;
/** The size of the sample space for n tosses of a coin. */
export const coinOutcomes = (n: number): number => 2 ** n;
/** The number of ordered pairs of two fair dice that add up to s (listed, not looked up). */
export const diceSumWays = (s: number): number => {
  let n = 0;
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b === s) n++;
  return n;
};
