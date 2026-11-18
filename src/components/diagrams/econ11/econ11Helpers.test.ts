import test from 'node:test';
import assert from 'node:assert/strict';
import { TOWN, total, labourForce, notActive, participationRate, unemploymentRate, absorptionRate, dependencyRatio, populationGrowthRate, growthRate, perCapita, realGdp, perCapitaGrowth, MU, totalUtility, marginalUtility, tuSchedule, maxTuQuantity, allocate, GOODS, mudivp } from './econ11Helpers';

test('population and labour force (plain arithmetic)', () => {
  assert.equal(total(TOWN), 1000);
  assert.equal(labourForce(TOWN), 400);
  assert.equal(notActive(TOWN), 200);
  assert.equal(TOWN.employed + TOWN.unemployed + notActive(TOWN), TOWN.workingAge);
  assert.equal(participationRate(TOWN), (400 / 600) * 100 > 66.66 ? 66.667 : 0);
  assert.equal(unemploymentRate(TOWN), 25);
  assert.equal(absorptionRate(TOWN), 50);
  assert.equal(dependencyRatio(TOWN), 66.667);
  assert.equal(populationGrowthRate(30, 10, 0, 1000), 2);
  assert.equal(populationGrowthRate(20, 10, -5, 1000), 0.5);
});

test('economic growth', () => {
  assert.equal(growthRate(1200, 1260), 5);
  assert.equal(growthRate(1200, 1140), -5);
  assert.equal(perCapita(1260, 63), 20);
  assert.equal(realGdp(1260, 105), 1200);
  assert.equal(growthRate(1200, realGdp(1260, 105)), 0);
  assert.equal(perCapitaGrowth(5, 2), 2.941);
  assert.ok(perCapitaGrowth(1, 3) < 0);
});

test('marginal utility: diminishing, and total utility is the running sum', () => {
  assert.deepEqual(tuSchedule(MU), [20, 36, 48, 56, 60, 60, 56]);
  assert.equal(totalUtility(MU, 3), 20 + 16 + 12);
  assert.equal(marginalUtility(tuSchedule(MU), 4), 8);
  assert.equal(marginalUtility(tuSchedule(MU), 1), 20);
  for (let i = 1; i < MU.length; i++) assert.ok(MU[i] < MU[i - 1]);
  assert.equal(maxTuQuantity(MU), 5); // total utility is highest (and first reached) where MU = 0
  assert.equal(mudivp(GOODS[0], 1), 8);
  assert.equal(mudivp(GOODS[1], 1), 6);
});

test('consumer equilibrium agrees with a brute-force search', () => {
  const budget = 12;
  const r = allocate(GOODS, budget);
  let best = { utility: -1, counts: [0, 0] };
  for (let a = 0; a <= 5; a++) for (let b = 0; b <= 5; b++) {
    if (a * 2 + b * 4 > budget) continue;
    const u = totalUtility(GOODS[0].mu, a) + totalUtility(GOODS[1].mu, b);
    if (u > best.utility) best = { utility: u, counts: [a, b] };
  }
  assert.equal(r.utility, best.utility);
  assert.ok(r.spent <= budget);
});
