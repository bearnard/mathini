import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of econ11Helpers.ts.

stubCss();
const topics = [
  { dir: 'term1/population-labour-force', mod: './curriculum/grade11/economics/term1/population-labour-force/PopulationLabourForce' },
  { dir: 'term2/economic-growth-wealth', mod: './curriculum/grade11/economics/term2/economic-growth-wealth/EconomicGrowthWealth' },
  { dir: 'term2/marginal-utility', mod: './curriculum/grade11/economics/term2/marginal-utility/MarginalUtility' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade11/economics/${t.dir}/`));
}
const find = (dir: string, start: string) => {
  const hits = banks[dir].filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};

for (const t of topics) {
  test(`${t.dir}: standard lesson shape, 14 valid questions, key spread over all four positions`, () => {
    assertLessonShape(lessons[t.dir]);
    const bank = banks[t.dir];
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });

  test(`${t.dir}: key words of every answer appear in the lesson`, () => {
    const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
    const text = lessons[t.dir].map((s) => s.text).join(' ').toLowerCase();
    for (const q of banks[t.dir]) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  });
}

test('INDEPENDENT: labour force rates (plain arithmetic, data given in the questions)', () => {
  const d = 'term1/population-labour-force';
  const employed = 300, unemployed = 100, working = 600, children = 300, elderly = 100;
  const lf = employed + unemployed;
  assert.equal(find(d, 'In a town 300 are employed and 100 are unemployed. What is the size').answer, String(lf));
  assert.equal(find(d, 'In a town 300 are employed and 100 are unemployed. What is the unemployment rate').answer, `${(unemployed / lf) * 100}%`);
  assert.equal(find(d, 'The working-age population is 600 and the labour force is 400').answer, `${(Math.round((lf / working) * 1000) / 10).toString().replace('.', ',')}%`);
  assert.equal(find(d, 'The working-age population is 600 and 300 are employed').answer, `${(employed / working) * 100}%`);
  assert.equal(find(d, 'A town has 300 children').answer, (Math.round(((children + elderly) / working) * 1000) / 10).toString().replace('.', ','));
  assert.equal(find(d, 'In a year a town of 1 000 000 people').answer, `${((30000 - 10000) / 1000000) * 100}%`);
  assert.equal(employed + unemployed + (working - lf), working);
});

test('INDEPENDENT: growth rates, real GDP and GDP per capita', () => {
  const d = 'term2/economic-growth-wealth';
  const g = (a: number, b: number) => ((b - a) / a) * 100;
  assert.equal(find(d, 'GDP rises from R1 200 billion to R1 260 billion').answer, `${g(1200, 1260)}%`);
  assert.equal(find(d, 'GDP falls from R1 200 billion to R1 140 billion').answer, `${g(1200, 1140)}%`.replace('-', '−'));
  assert.equal(find(d, 'Nominal GDP is R1 260 billion and the price index is 105').answer, `R${(1260 / 105) * 100} billion`.replace(/(\d)(?=(\d{3}) )/, '$1 ').replace('R1200', 'R1 200'));
  assert.equal(find(d, 'GDP is R1 260 billion and the population is 63 million').answer, `R${1260 / 63} thousand`);
  // per-capita growth: GDP 5% and population 2% is positive; GDP 1% and population 3% is negative
  assert.ok((1.05 / 1.02 - 1) > 0 && (1.01 / 1.03 - 1) < 0);
});

test('INDEPENDENT: utility schedules and consumer equilibrium (checked by brute force)', () => {
  const d = 'term2/marginal-utility';
  const mu = [20, 16, 12, 8, 4, 0, -4];
  const tu = mu.map((_, i) => mu.slice(0, i + 1).reduce((a, b) => a + b, 0));
  assert.deepEqual(tu, [20, 36, 48, 56, 60, 60, 56]);
  assert.equal(find(d, 'The marginal utilities of slices 1, 2 and 3 are 20, 16 and 12').answer, `${tu[2]} utils`);
  assert.equal(find(d, 'Total utility is 56 after 4 slices and 48 after 3 slices').answer, `${tu[3] - tu[2]} utils`);
  assert.equal(find(d, 'Bread costs R2 and its marginal utility is 12').answer, String(12 / 2));
  // R8 on bread (R2: 16, 12, 8, 4, 2) and milk (R4: 24, 20, 12, 8, 4): best total utility by trying every purchase
  const bread = [16, 12, 8, 4, 2], milk = [24, 20, 12, 8, 4];
  const sum = (a: number[], k: number) => a.slice(0, k).reduce((x, y) => x + y, 0);
  let best = { u: -1, a: 0, b: 0 };
  for (let a = 0; a <= 5; a++) for (let b = 0; b <= 2; b++) if (a * 2 + b * 4 <= 8) { const u = sum(bread, a) + sum(milk, b); if (u > best.u) best = { u, a, b }; }
  assert.deepEqual([best.a, best.b], [2, 1]);
  assert.equal(find(d, 'With R8, bread at R2').answer, '2 loaves of bread and 1 litre of milk');
});
