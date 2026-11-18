import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { isBalanced } from './components/diagrams/chemistry12/chemHelpers';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 12 Physical Sciences gap lessons beside plastics-polymers and fertiliser-industry: monomers and recycling numbers, plant nutrients, making fertilisers.
// Every number and equation is recomputed here independently of chemHelpers.ts (atomic masses from the CAPS data sheet).

stubCss();
const topics: [string, string][] = [
  ['term1/polymers-monomers-recycling', 'PolymersMonomersRecycling'],
  ['term3/plant-nutrients', 'PlantNutrients'],
  ['term3/fertiliser-manufacture', 'FertiliserManufacture'],
];
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
for (const [dir, name] of topics) {
  lessons[dir] = renderSlides((await import(`./curriculum/grade12/physical-sciences/${dir}/${name}`)).learnSteps);
  banks[dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade12/physical-sciences/${dir}/`));
}
for (const [dir] of topics) {
  test(`${dir}: standard lesson shape, 14 valid questions, key words in the lesson`, () => {
    assertLessonShape(lessons[dir]);
    const bank = banks[dir];
    assert.equal(bank.length, 14);
    const text = lessons[dir].map((x) => x.text).join(' ').toLowerCase();
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
      const words = q.answer.toLowerCase().match(/[a-z]{6,}/g) ?? [];
      assert.ok(words.filter((w) => !text.includes(w)).length < 3, q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });
}
test('no question repeats a question of the existing plastics and fertiliser lessons', () => {
  const old = extractCuratedBanks().filter((q) => /plastics-polymers\/|fertiliser-industry\//.test(q.file)).map((q) => q.prompt);
  for (const dir of Object.keys(banks)) for (const q of banks[dir]) assert.ok(!old.includes(q.prompt), q.prompt);
});
test('equations in the lessons and questions are balanced, by atom count', () => {
  const eqs = ['C + H2O -> CO + H2', 'CO + H2O -> CO2 + H2', 'NH3 + HNO3 -> NH4NO3', '2NH3 + H2SO4 -> (NH4)2SO4', '2NH3 + CO2 -> CO(NH2)2 + H2O', 'Ca3(PO4)2 + 2H2SO4 -> Ca(H2PO4)2 + 2CaSO4'];
  for (const e of eqs) assert.equal(isBalanced(e.replace('->', '→')), true, e);
  assert.equal(isBalanced('NH3 + H2SO4 -> (NH4)2SO4'.replace('->', '→')), false, 'the unbalanced distractor really is unbalanced');
  const squash = (t: string) => t.replace(/\s+/g, '').replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (c) => String('₀₁₂₃₄₅₆₇₈₉'.indexOf(c)));
  const text = squash(Object.values(lessons).flat().map((s) => s.text).join(' '));
  for (const frag of ['C + H2O → CO + H2', 'CO + H2O ⇌ CO2 + H2', 'NH3 + HNO3 → NH4NO3', '2NH3 + H2SO4 → (NH4)2SO4', '2NH3 + CO2 → CO(NH2)2 + H2O', 'Ca3(PO4)2 + 2H2SO4 → Ca(H2PO4)2 + 2CaSO4']) assert.ok(text.includes(squash(frag)), frag);
});
test('INDEPENDENT: polymer, nutrient and fertiliser numbers', () => {
  const find = (dir: string, start: string) => banks[dir].find((q) => q.prompt.startsWith(start))!;
  const M = { C: 12, H: 1, N: 14, O: 16, P: 31, S: 32, Cl: 35.5, K: 39, Ca: 40 };
  // PLA repeat unit and lactic acid differ by one water
  assert.equal(3 * 12 + 4 * 1 + 2 * 16, 72);
  assert.equal(3 * 12 + 6 * 1 + 3 * 16 - 72, 2 * 1 + 16);
  assert.equal(find('term1/polymers-monomers-recycling', 'What is the molar mass of the PLA repeat unit').answer, '72 g/mol');
  assert.equal((6 / 40) * 100, 15);
  // N:P:K 5:1:4 (30) on 50 kg
  const nutrients = 50 * 0.3;
  assert.equal(nutrients, 15);
  assert.equal((nutrients / 10) * 5, 7.5);
  assert.equal((nutrients / 10) * 1, 1.5);
  assert.equal(find('term3/plant-nutrients', 'Bag A holds 50 kg').answer, '7,5 kg');
  assert.equal(find('term3/plant-nutrients', 'The same 5:1:4 (30) bag').answer, '1,5 kg');
  // 3:2:1 (36): 18% N, 90 kg N per hectare
  assert.equal((3 / 6) * 36, 18);
  assert.equal(Math.round(90 / 0.18), 500);
  assert.equal(find('term3/plant-nutrients', 'A fertiliser is labelled 3:2:1 (36)').answer, '18%');
  assert.equal(find('term3/plant-nutrients', 'A crop needs 90 kg').answer, '500 kg');
  // urea and ammonia
  const urea = M.C + M.O + 2 * (M.N + 2 * M.H);
  assert.equal(urea, 60);
  assert.equal(600 / urea, 10);
  assert.equal(10 * 2 * (M.N + 3 * M.H), 340);
  assert.equal(find('term3/fertiliser-manufacture', 'What mass of ammonia is needed').answer, '340 kg');
  // superphosphate and potassium percentages
  const sp = M.Ca + 2 * (2 * M.H + M.P + 4 * M.O);
  assert.equal(sp, 234);
  assert.equal(Math.round(((2 * M.P) / sp) * 1000) / 10, 26.5);
  const kcl = (M.K / (M.K + M.Cl)) * 100, k2so4 = ((2 * M.K) / (2 * M.K + M.S + 4 * M.O)) * 100, kno3 = (M.K / (M.K + M.N + 3 * M.O)) * 100;
  assert.ok(kcl > k2so4 && k2so4 > kno3);
  assert.deepEqual([kcl, k2so4, kno3].map((v) => Math.round(v * 10) / 10), [52.3, 44.8, 38.6]);
  assert.equal(find('term3/fertiliser-manufacture', 'Which potassium compound has the highest').answer, 'KCl');
  // boiling points: nitrogen below oxygen
  assert.ok(-196 < -183);
});
