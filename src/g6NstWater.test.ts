import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 6 Natural Sciences and Technology: processing food (T1), water pollution and wetlands (T2), purifying water (T2).
// Shape, bank quality, and the numbers recomputed by hand.

stubCss();
const food = await import('./curriculum/grade6/natural-sciences/term1/processing-food/Slides');
const wet = await import('./curriculum/grade6/natural-sciences/term2/water-pollution-wetlands/Slides');
const pure = await import('./curriculum/grade6/natural-sciences/term2/purifying-water/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const LESSONS = [
  { name: 'processing food', steps: food.learnSteps, file: 'processing-food' },
  { name: 'water pollution and wetlands', steps: wet.learnSteps, file: 'water-pollution-wetlands' },
  { name: 'purifying dirty water', steps: pure.learnSteps, file: 'purifying-water' },
];

for (const L of LESSONS) {
  const bank = extractCuratedBanks().filter((q) => q.file.includes(`/${L.file}/`));
  test(`${L.name}: 4 to 6 slides with the standard blocks, a described picture and a final Check yourself`, () => {
    assert.ok(L.steps.length >= 4 && L.steps.length <= 6);
    assert.equal(L.steps[L.steps.length - 1].title, 'Check yourself');
    for (const s of L.steps.slice(0, -1)) {
      const h = html(s);
      assert.match(h, /The rule/);
      assert.match(h, /Worked example/);
      assert.match(h, /Common mistake/);
      assert.match(h, /aria-label="[^"]+"/, `${s.title}: a picture with a description`);
    }
    assert.equal((html(L.steps[L.steps.length - 1]).match(/<details/g) ?? []).length, 4, 'one hidden answer per question');
  });

  test(`${L.name}: the bank has 12 valid questions with the key in all four positions and no quality reject`, () => {
    assert.equal(bank.length, 12);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });
}

test('INDEPENDENT: the filter and wetland numbers in the bank are recomputed with plain Math', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/purifying-water/') || q.file.includes('/water-pollution-wetlands/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  const num = (o: string) => parseFloat(o.replace(',', '.'));
  const fine = find('A sand filter is 20 cm tall and fine sand');
  assert.equal(num(fine.answer), 20 * 0.4);
  const two = find('A sand filter is 20 cm tall and each of the coarse');
  assert.equal(num(two.answer), 20 * 0.3 + 20 * 0.3);
  for (const q of [fine, two]) {
    assert.ok(q.options.filter((o) => o !== q.answer).every((o) => num(o) !== num(q.answer)), q.prompt);
  }
  // the lesson's layers: 40 + 30 + 30 of 20 cm
  assert.equal(20 * 0.4 + 20 * 0.3 + 20 * 0.3, 20);
  // wetland: peak 40 in, 22,5 out (rate 1/2 of what is there each step: 5, then (5 + 40) / 2)
  let stored = 0;
  const out: number[] = [];
  for (const w of [0, 10, 40, 10, 0, 0, 0, 0]) {
    const there = stored + w;
    out.push(there / 2);
    stored = there - there / 2;
  }
  assert.equal(Math.max(...out), 22.5);
  assert.match(find('Heavy rain sends 40 units').prompt, /22,5 units/);
  // wording the owner asked for: classroom-cleaned water is not drunk
  assert.equal(find('Learners clean dirty water in a class experiment').answer, 'Not drink it');
});
