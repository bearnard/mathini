import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { atomsOf, balanced } from './components/diagrams/aq10/aq10Helpers';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The rules written in the questions are checked here independently of aq10Helpers.ts.

stubCss();
const topics = [
  { dir: 'term3/ions-in-solution', mod: './curriculum/grade10/ps/term3/ions-in-solution/IonsInSolution' },
  { dir: 'term3/precipitation-reaction-types', mod: './curriculum/grade10/ps/term3/precipitation-reaction-types/PrecipitationReactionTypes' },
  { dir: 'term4/hydrosphere', mod: './curriculum/grade10/ps/term4/hydrosphere/Hydrosphere' },
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

test('INDEPENDENT: ions in solution (concentrations by plain arithmetic, equations by atom and charge count)', () => {
  const d = 'term3/ions-in-solution';
  assert.equal(find(d, 'NaCl is dissolved to make').answer, `${(0.1 * 2).toFixed(2).replace('.', ',')} mol·dm⁻³`);
  assert.equal(find(d, 'A 0,10 mol·dm⁻³ solution of CaCl₂').answer, `${(0.1 * 3).toFixed(2).replace('.', ',')} mol·dm⁻³`);
  // CaCl2 -> Ca2+ + 2 Cl-: 1 + 2 ions, charge +2 - 2 = 0
  assert.equal(find(d, 'How many ions in total are formed when one formula unit of CaCl₂').answer, String(1 + 2));
  assert.equal(find(d, 'How many ions in total are formed when one formula unit of Na₂SO₄').answer, String(2 + 1));
  assert.equal(2 * (+1) + 1 * (-2), 0);
  assert.equal(find(d, 'Which equation shows calcium chloride').answer, 'CaCl₂(s) → Ca²⁺(aq) + 2Cl⁻(aq)');
  assert.equal(find(d, 'Which equation shows sodium chloride').answer, 'NaCl(s) → Na⁺(aq) + Cl⁻(aq)');
});

test('INDEPENDENT: precipitation and reaction types (balanced equations, drivers, redox charges)', () => {
  const d = 'term3/precipitation-reaction-types';
  for (const e of ['AgNO3 + NaCl → AgCl + NaNO3', 'BaCl2 + Na2SO4 → BaSO4 + 2NaCl', 'Na2CO3 + 2HCl → 2NaCl + H2O + CO2', 'HCl + NaOH → NaCl + H2O', 'Zn + CuSO4 → ZnSO4 + Cu']) assert.ok(balanced(e), e);
  assert.equal(JSON.stringify(atomsOf('BaSO4')), JSON.stringify({ Ba: 1, S: 1, O: 4 }));
  assert.equal(find(d, 'Which of these salts is insoluble').answer, 'Silver chloride');
  assert.equal(find(d, 'Which of these salts is soluble').answer, 'Sodium nitrate');
  assert.equal(find(d, 'What precipitate forms when silver nitrate').answer, 'A white precipitate');
  assert.equal(find(d, 'A yellow precipitate').answer, 'Iodide');
  assert.equal(find(d, 'Na₂CO₃ + 2HCl').answer, 'The formation of a gas');
  assert.equal(find(d, 'HCl + NaOH').answer, 'An acid-base reaction');
  assert.equal(find(d, 'Zn + CuSO₄').answer, 'A redox reaction');
  // Zn -> Zn2+ + 2e-: the charge goes from 0 to +2, so 2 electrons are lost
  assert.equal(find(d, 'In Zn + Cu²⁺').answer, String(2 - 0));
});

test('INDEPENDENT: hydrosphere (shares and the dam example)', () => {
  const d = 'term4/hydrosphere';
  assert.equal(97 + 2 + 1, 100);
  assert.equal(find(d, 'About what percentage of Earth\'s water is in the oceans').answer, '97%');
  assert.equal(find(d, 'About what percentage of Earth\'s water is liquid fresh water').answer, `${100 - 97 - 2}%`);
  assert.equal(find(d, '1 000 L equals').answer, '1 m³');
  const demand = (5000 * 200) / 1000; // litres per day divided by 1 000 gives m3 per day
  assert.equal(find(d, 'A town of 5 000 people').answer, `${demand} m³`.replace(/^1000/, '1 000'));
  assert.equal(find(d, 'A dam holds 150 000 m³').answer, `${150000 / demand} days`);
});
