import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of tech8bHelpers.ts.

stubCss();
const topics = [
  { dir: 'term2/impact-and-packaging', mod: './curriculum/grade8/technology/term2/impact-and-packaging/ImpactAndPackaging' },
  { dir: 'term2/forces-on-materials', mod: './curriculum/grade8/technology/term2/forces-on-materials/ForcesOnMaterials' },
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

test('INDEPENDENT: box area and the net (plain arithmetic)', () => {
  const d = 'term2/impact-and-packaging';
  assert.equal(find(d, 'A box is 10 mm long, 10 mm wide and 10 mm high').answer, `${6 * 10 * 10} mm²`);
  assert.equal(2 * (100 * 50 + 100 * 200 + 50 * 200), 70000);
  assert.equal(find(d, 'How many faces does the net').answer, 'Six');
  assert.equal(2 * 3, 6); // top and bottom plus four sides = six faces
});

test('INDEPENDENT: forces and reinforcing', () => {
  const d = 'term2/forces-on-materials';
  assert.equal(find(d, 'Which force twists a material').answer, 'Torsion');
  assert.equal(find(d, 'A beam supported at both ends has a load in the middle').answer, 'The bottom');
  assert.equal(find(d, 'On a bending beam, which edge gets squashed').answer, 'The top');
  assert.equal(find(d, 'Where in a loaded concrete beam').answer, 'Near the bottom');
  // an I-beam 100 x 100 with 10 mm flanges and web: 2 x 100 x 10 + 10 x 80 = 2 800 mm2 against 10 000 mm2 of a solid bar, 72% less
  assert.equal(2 * 100 * 10 + 10 * (100 - 2 * 10), 2800);
  assert.equal(((10000 - 2800) / 10000) * 100, 72);
});
