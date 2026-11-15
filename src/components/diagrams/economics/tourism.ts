/**
 * The tourism multiplier with leakage, for Grade 12 "Tourism and Environmental Sustainability".
 * The numbers are an illustration (not real data): in each round a share of the spending is kept
 * locally and re-spent, and the rest leaks out.
 */

export interface Round { round: number; spent: number; kept: number; leaked: number }

export const rounds = (initial: number, keptShare: number, n: number): Round[] => {
  const out: Round[] = [];
  let spent = initial;
  for (let i = 1; i <= n; i += 1) {
    const kept = Math.round(spent * keptShare);
    out.push({ round: i, spent, kept, leaked: spent - kept });
    spent = kept;
  }
  return out;
};

export const totalSpent = (rs: readonly Round[]): number => rs.reduce((a, r) => a + r.spent, 0);

/** The limit as the rounds go on forever: initial / (1 - kept share). */
export const limit = (initial: number, keptShare: number): number => initial / (1 - keptShare);

export const EXAMPLE = { initial: 1000, keptShare: 0.6, n: 4 };
