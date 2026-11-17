import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 7 Natural Sciences: Variation (T1) and the history of astronomy (T4). Shape, bank quality, and keys recomputed by hand.

stubCss();
const variation = await import('./curriculum/grade7/natural-sciences/term1/variation/Slides');
const astro = await import('./curriculum/grade7/natural-sciences/term4/history-of-astronomy/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const LESSONS = [
  { name: 'variation', steps: variation.learnSteps, file: 'variation' },
  { name: 'history of astronomy', steps: astro.learnSteps, file: 'history-of-astronomy' },
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
    const last = html(L.steps[L.steps.length - 1]);
    assert.equal((last.match(/<details/g) ?? []).length, 4, 'one hidden answer per question');
  });

  test(`${L.name}: the bank has 14 valid questions with the key in all four positions and no quality reject`, () => {
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });
}

test('INDEPENDENT: variation keys recomputed from the raw heights with plain Math', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/variation/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  const heights = [142, 145, 148, 151, 153, 149, 147, 152, 155, 150, 146, 144, 153, 156, 148, 150, 151, 147, 149, 154, 152, 150, 145, 157, 148, 151, 146, 153, 150, 149];
  const inGroup = (a: number, b: number) => heights.filter((v) => v >= a && v <= b).length;
  assert.deepEqual([inGroup(140, 144), inGroup(145, 149), inGroup(150, 154), inGroup(155, 159)], [2, 12, 13, 3]);
  assert.equal(Math.max(...heights) - Math.min(...heights), 15);
  assert.equal(find('A class has a tallest learner').answer, '15 cm');
  assert.equal(find('In a height survey the 140').answer, String(2 + 12 + 13 + 3));
  assert.equal(Math.max(2, 12, 13, 3), inGroup(150, 154));
  assert.equal(find('A class survey sorts 30 heights into four groups').answer, String(30 - (2 + 12 + 3)));
  assert.equal(find('Out of 30 learners, 21').answer, `${(21 / 30) * 100}%`);
  assert.equal(find('Nine of the 30 learners').answer, `${Math.round((9 / 30) * 100)}%`);
  assert.equal(find('In a family of 5').answer, `${(3 / 5) * 100}%`);
  // the learner-facing slide figures in the lesson
  assert.deepEqual(variation.GROUPS.map((g: { count: number }) => g.count), [2, 12, 13, 3]);
});

test('INDEPENDENT: astronomy keys recomputed with plain Math', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/history-of-astronomy/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  assert.equal(find('A month between two full moons').answer, `${12 * 29.5} days`);
  assert.equal(find('A year of seasons is 365 days').answer, `${365 - 354} days`);
  assert.equal(find('How many years passed between Copernicus').answer, `${1687 - 1514} years`);
  const wrongs = (q: { options: string[]; answer: string }) => q.options.filter((o) => o !== q.answer).map((o) => parseFloat(o));
  for (const s of ['A month between two full moons', 'A year of seasons is 365 days', 'How many years passed between Copernicus']) {
    const q = find(s);
    assert.ok(wrongs(q).every((n) => n !== parseFloat(q.answer)), s);
  }
  // each discovery is attributed as the lesson says
  assert.equal(find('In 1514, which astronomer').answer, 'Copernicus');
  assert.equal(find('Who used mathematics in 1609').answer, 'Kepler');
  assert.equal(find('Who built a telescope in 1610').answer, 'Galilei');
  assert.equal(find('Who showed in 1687').answer, 'Newton');
});
