import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 7 Natural Sciences: the Periodic Table (Term 2) and the national electricity grid (Term 3). Shape, bank quality, and keys recomputed by hand.

stubCss();
const periodic = await import('./curriculum/grade7/natural-sciences/term2/periodic-table/Slides');
const grid = await import('./curriculum/grade7/natural-sciences/term3/national-electricity-grid/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const LESSONS = [
  { name: 'periodic table', steps: periodic.learnSteps, file: 'periodic-table' },
  { name: 'national electricity grid', steps: grid.learnSteps, file: 'national-electricity-grid' },
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

test('INDEPENDENT: periodic table keys recomputed from the first 20 elements written out here', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/periodic-table/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  const metals = ['Li', 'Be', 'Na', 'Mg', 'Al', 'K', 'Ca'];
  const semi = ['B', 'Si'];
  const non = ['H', 'He', 'C', 'N', 'O', 'F', 'Ne', 'P', 'S', 'Cl', 'Ar'];
  assert.equal(metals.length + semi.length + non.length, 20);
  assert.equal(find('In the table of the first 20 elements, how many are metals').answer, String(metals.length));
  assert.equal(find('Among the first 20 elements, how many semi-metals').answer, String(semi.length));
  assert.equal(find('What is the chemical symbol for sodium').answer, 'Na');
  assert.equal(find('What is the chemical symbol for potassium').answer, 'K');
  assert.equal(find('Which element has the symbol Ca').answer, 'Calcium');
  assert.equal(find('Which of these elements is a semi-metal').answer, 'Silicon');
  // every wrong answer to a counting question is a different number
  for (const s of ['In the table of the first 20 elements, how many are metals', 'Among the first 20 elements, how many semi-metals']) {
    const q = find(s);
    assert.ok(q.options.filter((o) => o !== q.answer).every((o) => Number(o) !== Number(q.answer)), s);
  }
});

test('INDEPENDENT: electricity keys recomputed with plain Math', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/national-electricity-grid/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  const watts = 'An old bulb uses 60 W and an energy-saving bulb uses 10 W. How many watts less';
  const times = 'An old bulb uses 60 W and an energy-saving bulb uses 10 W. How many times';
  assert.equal(find(watts).answer, `${60 - 10} W`);
  assert.equal(find(times).answer, `${60 / 10} times`);
  for (const s of [watts, times]) {
    const q = find(s);
    assert.ok(q.options.filter((o) => o !== q.answer).every((o) => parseFloat(o) !== parseFloat(q.answer)), s);
  }
  assert.equal(find('Which pair are both renewable').answer, 'Falling water and wind');
});
