import { r3 } from '../round';

/** Numbers for the Grade 11 Economics gap lessons: population and the labour force, economic growth and wealth creation, marginal utility. Tested in econ11Helpers.test.ts.
 * All data are imaginary teaching data, not Stats SA figures. */

// ---------- population and the labour force ----------

export interface Population { children: number; workingAge: number; elderly: number; employed: number; unemployed: number }
/** Imaginary population of a town, in thousands: children 0-14, working-age 15-64, elderly 65+. Of the working-age people some are employed, some are unemployed
 * (looking for work and available) and the rest are not economically active (students, home-makers, discouraged work-seekers, people who cannot work). */
export const TOWN: Population = { children: 300, workingAge: 600, elderly: 100, employed: 300, unemployed: 100 };
export const total = (p: Population): number => p.children + p.workingAge + p.elderly;
export const labourForce = (p: Population): number => p.employed + p.unemployed;
export const notActive = (p: Population): number => p.workingAge - labourForce(p);
/** Labour force participation rate: the labour force as a percentage of the working-age population. */
export const participationRate = (p: Population): number => r3((labourForce(p) / p.workingAge) * 100);
/** Unemployment rate: the unemployed as a percentage of the labour force. */
export const unemploymentRate = (p: Population): number => r3((p.unemployed / labourForce(p)) * 100);
/** Absorption rate: the employed as a percentage of the working-age population. */
export const absorptionRate = (p: Population): number => r3((p.employed / p.workingAge) * 100);
/** Dependency ratio: dependants (children and the elderly) per 100 people of working age. */
export const dependencyRatio = (p: Population): number => r3(((p.children + p.elderly) / p.workingAge) * 100);
export const populationGrowthRate = (births: number, deaths: number, netMigration: number, start: number): number => r3(((births - deaths + netMigration) / start) * 100);
export const WORKING_AGE = '15 to 64 years';

// ---------- economic growth ----------

export const growthRate = (gdpBefore: number, gdpAfter: number): number => r3(((gdpAfter - gdpBefore) / gdpBefore) * 100);
export const perCapita = (gdp: number, population: number): number => r3(gdp / population);
/** Real GDP: nominal GDP deflated by a price index (base year = 100). */
export const realGdp = (nominal: number, priceIndex: number): number => r3((nominal / priceIndex) * 100);
export const GROWTH_METHODS = ['investing in capital goods and infrastructure', 'improving education and skills (human capital)', 'using new technology', 'expanding trade and exports', 'a stable and supportive policy environment'] as const;
export const GROWTH_CONSTRAINTS = ['a shortage of skills', 'unreliable electricity and weak transport', 'a low rate of saving and investment', 'political and policy uncertainty', 'high unemployment and inequality'] as const;
/** Growth is "jobless" or unfair if per-capita growth is negative while GDP grows. */
export const perCapitaGrowth = (gdpGrowth: number, popGrowth: number): number => r3(((1 + gdpGrowth / 100) / (1 + popGrowth / 100) - 1) * 100);

// ---------- marginal utility ----------

export const MU = [20, 16, 12, 8, 4, 0, -4] as const; // marginal utility of the 1st to 7th slice of pizza (utils)
export const totalUtility = (mu: readonly number[], q: number): number => mu.slice(0, q).reduce((a, b) => a + b, 0);
export const marginalUtility = (tu: readonly number[], q: number): number => tu[q - 1] - (q > 1 ? tu[q - 2] : 0);
export const tuSchedule = (mu: readonly number[]): number[] => mu.map((_, i) => totalUtility(mu, i + 1));
export const maxTuQuantity = (mu: readonly number[]): number => {
  const tu = tuSchedule(mu);
  return tu.indexOf(Math.max(...tu)) + 1;
};
/** Consumer equilibrium: spend a budget by always buying the next unit with the highest marginal utility per rand. */
export interface Good { name: string; price: number; mu: readonly number[] }
export const allocate = (goods: readonly Good[], budget: number): { counts: number[]; spent: number; utility: number } => {
  const counts = goods.map(() => 0);
  let left = budget;
  for (;;) {
    let best = -1, bestRatio = 0;
    goods.forEach((g, i) => {
      const k = counts[i];
      if (k < g.mu.length && g.price <= left && g.mu[k] / g.price > bestRatio) { best = i; bestRatio = g.mu[k] / g.price; }
    });
    if (best < 0) break;
    counts[best] += 1;
    left -= goods[best].price;
  }
  const utility = goods.reduce((a, g, i) => a + totalUtility(g.mu, counts[i]), 0);
  return { counts, spent: budget - left, utility };
};
export const GOODS: Good[] = [
  { name: 'bread', price: 2, mu: [16, 12, 8, 4, 2] },
  { name: 'milk', price: 4, mu: [24, 20, 12, 8, 4] },
];
export const mudivp = (g: Good, k: number): number => r3(g.mu[k - 1] / g.price);
