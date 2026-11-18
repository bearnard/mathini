import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of tech8Helpers.ts.

stubCss();
const topics = [
  { dir: 'term1/graphic-communication', mod: './curriculum/grade8/technology/term1/graphic-communication/GraphicCommunication' },
  { dir: 'term1/frame-structures-failure', mod: './curriculum/grade8/technology/term1/frame-structures-failure/FrameStructuresFailure' },
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

test('INDEPENDENT: scale calculations (plain arithmetic)', () => {
  const d = 'term1/graphic-communication';
  assert.equal(find(d, 'A part is 240 mm long and is drawn at a scale of 1:4').answer, `${240 / 4} mm`);
  assert.equal(find(d, 'A drawing at a scale of 1:5 has a line 60 mm long').answer, `${60 * 5} mm`);
  assert.equal(find(d, 'A small part is 15 mm long and is drawn at a scale of 2:1').answer, `${15 * 2} mm`);
  assert.equal(find(d, 'At what angle to the horizontal are the sloping edges').answer, '30°');
  assert.equal(find(d, 'How many faces of a block are visible').answer, 'Three');
  assert.equal(find(d, 'How many vanishing points are used').answer, 'Two');
});

test('INDEPENDENT: forces and failures', () => {
  const d = 'term1/frame-structures-failure';
  assert.equal(find(d, 'Which force do the rafters of a king-post truss').answer, 'Compression');
  assert.equal(find(d, 'Which force do the tie beam and the king post').answer, 'Tension');
  assert.equal(find(d, 'A structure breaks because it lacks strength').answer, 'Fracture');
  assert.equal(find(d, 'A tall, thin tower with a heavy top').answer, 'Toppling');
  // a rectangle without a brace is not rigid, a triangle is (two triangles when braced)
  assert.equal(find(d, 'Why is a triangle used in frame structures').answer, 'It is a rigid shape that keeps its form');
});
