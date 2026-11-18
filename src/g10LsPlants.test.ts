import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { grade10 } from './curriculum/grade10';

// Grade 10 Life Sciences, support and transport systems in plants: dicot root and stem with secondary growth, and water uptake and transpiration.
// Numbers (annual rings, potometer rates) are recomputed here independently of plants10.ts.

stubCss();
const topics: [string, string][] = [['plants-root-stem-secondary-growth', 'PlantsRootStemSecondaryGrowth'], ['plants-water-transpiration', 'PlantsWaterTranspiration']];
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
for (const [dir, name] of topics) {
  lessons[dir] = renderSlides((await import(`./curriculum/grade10/ls/term2/${dir}/${name}`)).learnSteps);
  banks[dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade10/ls/term2/${dir}/`));
}
for (const [dir] of topics) {
  test(`${dir}: standard lesson shape (labelled pictures), 14 valid questions, key words`, () => {
    assertLessonShape(lessons[dir]);
    for (const s of lessons[dir]) assert.equal(s.labelled, s.pictures, `${dir} / ${s.title}: every picture has an aria label`);
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
test('registered in Term 2 beside Plant Tissues and Organs, with no term empty', () => {
  const ls = grade10.subjects.find((s) => s.id === 'ls')!;
  const termOf = (id: string) => ls.terms.find((t) => t.topics.some((p) => p.id === id))?.id;
  for (const id of ['gr10-plants-root-stem-secondary-growth-t2', 'gr10-plants-water-transpiration-t2', 'gr10-plant-tissues-organs-t2']) assert.equal(termOf(id), 2, id);
  for (const t of ls.terms) assert.ok(t.topics.length > 0);
});
test('INDEPENDENT: annual rings and potometer', () => {
  const find = (dir: string, start: string) => banks[dir].find((q) => q.prompt.startsWith(start))!;
  const rings = [4.2, 3.8, 1.5, 4.0, 5.0, 2.0, 3.6, 4.4, 1.2, 3.8];
  const total = rings.reduce((a, b) => a + b, 0);
  assert.ok(Math.abs(total - 33.5) < 1e-9);
  assert.ok(Math.abs(total / 10 - 3.35) < 1e-9);
  assert.equal(rings.indexOf(Math.max(...rings)) + 1, 5);
  assert.equal(rings.indexOf(Math.min(...rings)) + 1, 9);
  assert.equal(find('plants-root-stem-secondary-growth', 'Annual ring widths').answer, '3,35 mm');
  assert.equal(12 / 6, 2);
  assert.equal(24 / 6, 4);
  assert.equal(((4 - 2) / 2) * 100, 100);
  assert.equal(((30 - 12) / 12) * 100, 150);
  assert.equal(((6 - 12) / 12) * 100, -50);
  assert.equal(find('plants-water-transpiration', 'A potometer bubble moves 12 mm').answer, '2 mm per minute');
  assert.equal(find('plants-water-transpiration', 'In still air the rate').answer, '+100%');
  assert.equal(18 / 6, 3);
});
