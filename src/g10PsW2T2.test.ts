import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The rules written in the questions are checked here independently of aq10Helpers.ts.

stubCss();
const topics = [
  { dir: 'term2/particles-substances', mod: './curriculum/grade10/ps/term2/particles-substances/ParticlesSubstances' },
  { dir: 'term2/physical-chemical-change', mod: './curriculum/grade10/ps/term2/physical-chemical-change/PhysicalChemicalChange' },
  { dir: 'term2/electrostatics-basics', mod: './curriculum/grade10/ps/term2/electrostatics-basics/ElectrostaticsBasics' },
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

test('INDEPENDENT: atoms in formulae (counted by hand)', () => {
  const d = 'term2/particles-substances';
  assert.equal(find(d, 'How many atoms are in one molecule of H₂SO₄').answer, String(2 + 1 + 4));
  assert.equal(find(d, 'How many atoms are in one molecule of glucose').answer, String(6 + 12 + 6));
  assert.equal(find(d, 'How many atoms are in one formula unit of Ca(OH)₂').answer, String(1 + 2 * (1 + 1)));
  assert.equal(find(d, 'How many different elements').answer, '3');
});

test('INDEPENDENT: conservation of mass (masses quoted in the questions, recomputed here)', () => {
  const d = 'term2/physical-chemical-change';
  const Ar = { Mg: 24, O: 16, Ca: 40, C: 12 };
  assert.match(find(d, 'In 2Mg + O₂ → 2MgO, what is the total mass of the reactants').prompt, /Mg = 24 and O = 16/);
  assert.equal(find(d, 'In 2Mg + O₂ → 2MgO, what is the total mass of the reactants').answer, String(2 * Ar.Mg + 2 * Ar.O));
  assert.equal(2 * (Ar.Mg + Ar.O), 2 * Ar.Mg + 2 * Ar.O);
  assert.equal(find(d, '48 g of magnesium').answer, `${48 + 32} g`);
  assert.equal(find(d, 'In CaCO₃ → CaO + CO₂').answer, String(Ar.Ca + Ar.C + 3 * Ar.O));
  assert.equal(Ar.Ca + Ar.C + 3 * Ar.O, (Ar.Ca + Ar.O) + (Ar.C + 2 * Ar.O));
});

test('INDEPENDENT: charge (e = 1,6 × 10⁻¹⁹ C is quoted wherever it is used)', () => {
  const d = 'term2/electrostatics-basics';
  const e = 1.6e-19;
  for (const q of banks[d].filter((q) => /electrons carry|charge of 5,0/.test(q.prompt))) assert.match(q.prompt, /1,6 × 10⁻¹⁹ C/, q.prompt);
  assert.equal(find(d, 'How many electrons carry').answer, String(Math.round(3.2e-18 / e)));
  assert.equal(find(d, 'What is the charge of 5,0 × 10⁹ electrons').answer, '−8,0 × 10⁻¹⁰ C');
  assert.ok(Math.abs(5.0e9 * e - 8.0e-10) < 1e-24);
  assert.ok(Math.abs(3.0e10 * e - 4.8e-9) < 1e-22);
  assert.equal(find(d, 'Two identical metal spheres carry 6 µC').answer, `+${(6 + -2) / 2} µC`);
  assert.equal(find(d, 'Two identical metal spheres carry −8 µC').answer, `−${Math.abs((-8 + 0) / 2)} µC`);
});
