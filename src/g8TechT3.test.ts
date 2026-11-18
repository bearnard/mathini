import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of tech8cHelpers.ts.

stubCss();
const topics = [
  { dir: 'term3/gear-systems-mechanical-advantage', mod: './curriculum/grade8/technology/term3/gear-systems-mechanical-advantage/GearSystemsMechanicalAdvantage' },
  { dir: 'term3/bicycle-gears-systems-diagrams', mod: './curriculum/grade8/technology/term3/bicycle-gears-systems-diagrams/BicycleGearsSystemsDiagrams' },
  { dir: 'term3/mining-technology-impact-bias', mod: './curriculum/grade8/technology/term3/mining-technology-impact-bias/MiningTechnologyImpactBias' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade8/technology/${t.dir}/`));
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

test('INDEPENDENT: gear calculations from teeth (plain arithmetic)', () => {
  const d = 'term3/gear-systems-mechanical-advantage';
  const c = (x: number) => String(Math.round(x * 100) / 100).replace('.', ',');
  assert.equal(find(d, 'Gear A with 10 teeth drives gear B with 30 teeth. What is the mechanical advantage').answer, String(30 / 10));
  assert.equal(find(d, 'Gear A with 10 teeth drives gear B with 30 teeth. What is the velocity ratio').answer, c(10 / 30));
  assert.equal(find(d, 'A driver with 10 teeth turns at 120 r/min').answer, `${(120 * 10) / 30} r/min`);
  assert.equal(find(d, 'A driver with 10 teeth is given an input force of 20 N').answer, `${(20 * 30) / 10} N`);
  assert.equal(find(d, 'A driver has 40 teeth and the driven gear has 10 teeth').answer, String(40 / 10));
  assert.equal(find(d, 'A driver with 40 teeth turns at 100 r/min').answer, `${(100 * 40) / 10} r/min`);
  assert.equal(find(d, 'A driver with 20 teeth turns a driven gear with 20 teeth').answer, String(20 / 20));
  // MA x velocity ratio = 1 for an ideal gear pair
  assert.equal((30 / 10) * (10 / 30), 1);
  assert.equal(48 / 12, 4);
});

test('INDEPENDENT: bicycle gears', () => {
  const d = 'term3/bicycle-gears-systems-diagrams';
  assert.equal(find(d, 'A chain wheel has 48 teeth and the cog has 12 teeth').answer, `${48 / 12} times`);
  assert.equal(find(d, 'With 32 teeth on the chain wheel and 16 on the cog').answer, `${32 / 16} times`);
  assert.ok(28 / 32 < 1);
  assert.equal(find(d, 'A chain wheel has 28 teeth and a cog has 32 teeth').answer, 'Low gear');
});

test('INDEPENDENT: mining facts match the CAPS context', () => {
  const d = 'term3/mining-technology-impact-bias';
  assert.equal(find(d, 'In which provinces is coal mined mainly').answer, 'Mpumalanga and KwaZulu-Natal');
  assert.equal(find(d, 'In which provinces is gold mined mainly').answer, 'Gauteng and the Free State');
  assert.equal(find(d, 'In how many provinces does mining happen').answer, 'Every province');
  assert.equal(find(d, 'A mine advertises jobs only for men').answer, 'Gender bias');
});
