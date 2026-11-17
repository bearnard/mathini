import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The rules written in the questions are checked here independently of aq10Helpers.ts.

stubCss();
const topics = [
  { dir: 'term2/circuits-series-parallel', mod: './curriculum/grade10/ps/term2/circuits-series-parallel/CircuitsSeriesParallel' },
  { dir: 'term3/composition-empirical-formula', mod: './curriculum/grade10/ps/term3/composition-empirical-formula/CompositionEmpiricalFormula' },
  { dir: 'term3/concentration-gas-yield', mod: './curriculum/grade10/ps/term3/concentration-gas-yield/ConcentrationGasYield' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`/${t.dir}/`));
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

test('INDEPENDENT: circuits (V = W/Q, I = Q/t, series and parallel by plain arithmetic)', () => {
  const d = 'term2/circuits-series-parallel';
  const c = (x: number) => String(x).replace('.', ',');
  assert.equal(find(d, '30 J of work').answer, `${30 / 5} V`);
  assert.equal(find(d, 'A charge of 90 C').answer, `${90 / 30} A`);
  assert.equal(find(d, 'A current of 2 A flows through a bulb').answer, `${2 * 30} C`);
  assert.equal(find(d, 'Three resistors of 4').answer, `${4 + 6 + 8} Ω`);
  assert.equal(find(d, 'In a series circuit with a 12 V supply').answer, `${12 - 4 - 5} V`);
  assert.equal(find(d, 'What is the equivalent resistance of a 6').answer, `${(6 * 3) / (6 + 3)} Ω`);
  assert.equal(find(d, 'What is the equivalent resistance of a 12').answer, `${(12 * 4) / (12 + 4)} Ω`);
  assert.equal(1 / (1 / 6 + 1 / 3), 2); // the reciprocal form gives the same value as product over sum
  assert.equal(find(d, 'The total current in a parallel circuit').answer, `${c(2 - 1.5)} A`);
  // no question needs V = IR: the answers are all from sums and ratios, and none of the prompts uses Ohm's law
  for (const q of banks[d]) assert.ok(!/ohm'?s law|V = IR/i.test(q.prompt), q.prompt);
});

test('INDEPENDENT: composition and empirical formula (Ar quoted in each question that needs it)', () => {
  const d = 'term3/composition-empirical-formula';
  const c = (x: number, dp = 0) => x.toFixed(dp).replace('.', ',');
  for (const q of banks[d].filter((q) => /^(What is the (molar mass|percentage)|How many moles|A compound|A compound contains)/.test(q.prompt) && /\?$|\.$/.test(q.prompt) && /(Use |g of)/.test(q.prompt))) assert.match(q.prompt, /Use |M = /, q.prompt);
  assert.equal(find(d, 'What is the molar mass of CaCO₃').answer, `${40 + 12 + 3 * 16} g·mol⁻¹`);
  assert.equal(find(d, 'How many moles are in 22 g').answer, `${c(22 / (12 + 32), 1)} mol`);
  assert.equal(find(d, 'What is the percentage of magnesium in MgO').answer, `${(24 / (24 + 16)) * 100}%`);
  assert.equal(find(d, 'What is the percentage of iron in Fe₂O₃').answer, `${((2 * 56) / (2 * 56 + 3 * 16)) * 100}%`);
  assert.equal(find(d, 'What is the percentage of oxygen in H₂O').answer, `${c((16 / 18) * 100, 1)}%`);
  // empirical formulae: moles = percent / Ar, divide by the smallest
  const mgO = [60 / 24, 40 / 16];
  assert.equal(mgO[0] / mgO[1], 1);
  const feO = [70 / 56, 30 / 16];
  assert.equal(feO[1] / feO[0], 1.5); // 1 : 1,5 -> 2 : 3
  const chO = [40 / 12, 6.7 / 1, 53.3 / 16];
  assert.deepEqual(chO.map((x) => Math.round((x / chO[0]) * 100) / 100), [1, 2.01, 1]);
  const alO = [27 / 27, 24 / 16];
  assert.equal(alO[1] / alO[0], 1.5);
  // water of crystallisation: 14,7 - 11,1 = 3,6 g water = 0,2 mol, 11,1 / 111 = 0,1 mol, n = 2
  assert.equal(find(d, '14,7 g of CaCl₂·nH₂O is heated').answer, `${c(14.7 - 11.1, 1)} g`);
  assert.equal(Math.round((3.6 / 18) / (11.1 / 111)), 2);
  assert.equal(find(d, '14,7 g of CaCl₂·nH₂O gives').answer, '2');
});

test('INDEPENDENT: concentration, gas volume and yield (22,4 dm³·mol⁻¹ and Ar are quoted in each question that needs them)', () => {
  const d = 'term3/concentration-gas-yield';
  const c = (x: number, dp = 1) => x.toFixed(dp).replace('.', ',');
  for (const q of banks[d].filter((q) => /gas|H₂ form/.test(q.prompt) && /\d/.test(q.answer) && /dm³/.test(q.answer))) assert.match(q.prompt, /22,4 dm³·mol⁻¹|273 K/, q.prompt);
  assert.equal(find(d, 'What is the concentration of a solution with 0,2 mol').answer, `${c(0.2 / 0.5)} mol·dm⁻³`);
  assert.equal(find(d, '2 mol of solute is dissolved').answer, `${2 / (500 / 1000)} mol·dm⁻³`);
  assert.equal(find(d, 'How many moles of solute are in 200 cm³').answer, `${c(0.5 * (200 / 1000))} mol`);
  assert.equal(find(d, 'What mass of KOH').answer, `${c(0.2 * 0.5 * (39 + 16 + 1))} g`);
  assert.equal(find(d, 'What volume does 0,25 mol').answer, `${c(0.25 * 22.4)} dm³`);
  assert.equal(find(d, 'How many moles of gas are in 4,48 dm³').answer, `${c(4.48 / 22.4)} mol`);
  assert.equal(find(d, 'Mg + 2HCl').answer, `${c(0.5 * 22.4)} dm³`);
  assert.equal(find(d, '2H₂ + O₂ → 2H₂O').answer, `${(4 / 2) * 18} g`);
  assert.equal(find(d, 'CaCO₃ → CaO + CO₂').answer, `${c((20 / 100) * 56)} g`);
});
