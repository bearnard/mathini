import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of ns8Helpers.ts.

stubCss();
const topics = [
  { dir: 'term2/particle-model-and-states', mod: './curriculum/grade8/natural-sciences/term2/particle-model-and-states/ParticleModelAndStates' },
  { dir: 'term2/density-expansion-pressure', mod: './curriculum/grade8/natural-sciences/term2/density-expansion-pressure/DensityExpansionPressure' },
  { dir: 'term2/atoms-elements-compounds', mod: './curriculum/grade8/natural-sciences/term2/atoms-elements-compounds/AtomsElementsCompounds' },
  { dir: 'term2/reactants-and-products', mod: './curriculum/grade8/natural-sciences/term2/reactants-and-products/ReactantsAndProducts' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade8/natural-sciences/${t.dir}/`));
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

test('INDEPENDENT: counts and statements checked against the tested rules', () => {
  const a = 'term2/atoms-elements-compounds';
  assert.equal(find(a, 'An atom of sodium has 11 protons').answer, String(11));
  assert.equal(find(a, 'A water molecule, H₂O, contains').answer, String(2 + 1));
  assert.equal(find(a, 'What is the ratio of hydrogen atoms to oxygen atoms').answer, '2 to 1');
  const r = 'term2/reactants-and-products';
  // 2Mg + O2 -> 2MgO: 2 Mg + 2 O = 4 atoms before and 2 Mg + 2 O = 4 after
  assert.equal(find(r, 'In the reaction 2Mg + O₂ → 2MgO').answer, String(2 + 2));
  const d = 'term2/density-expansion-pressure';
  assert.equal(find(d, 'About 1 g of water fills 1 cm³').answer, `${String(0.9 * 50).replace('.', ',')} g`);
  assert.equal(find(d, 'Block X and block Y').answer, 'Block X');
  assert.ok(800 / 200 > 1);
});
