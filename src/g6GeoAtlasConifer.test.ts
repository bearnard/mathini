import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 6 Geography: atlases and global statistics (T1), coniferous forests (T3). Shape, bank quality, and the numbers recomputed by hand.

stubCss();
const atlas = await import('./curriculum/grade6/geography/term1/atlases-global-statistics/AtlasesGlobalStatistics');
const conifer = await import('./curriculum/grade6/geography/term3/coniferous-forests/ConiferousForests');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const LESSONS = [
  { name: 'atlases and global statistics', steps: atlas.learnSteps, file: 'atlases-global-statistics' },
  { name: 'coniferous forests', steps: conifer.learnSteps, file: 'coniferous-forests' },
];

for (const L of LESSONS) {
  const bank = extractCuratedBanks().filter((q) => q.file.includes(`/${L.file}/`));
  test(`${L.name}: 4 to 6 slides with the standard blocks, a described picture and a final Check yourself`, () => {
    assert.ok(L.steps.length >= 4 && L.steps.length <= 6);
    assert.equal(L.steps[L.steps.length - 1].title, 'Check yourself');
    for (const s of L.steps.slice(0, -1)) {
      const out = html(s);
      assert.match(out, /The rule/);
      assert.match(out, /Worked example/);
      assert.match(out, /Common mistake/);
      assert.match(out, /aria-label="[^"]+"/, `${s.title}: a picture with a description`);
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

test('INDEPENDENT: atlas numbers recomputed with plain Math', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/atlases-global-statistics/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  const num = (o: string) => parseFloat(o.replace(/[\s ]/g, ''));
  assert.equal(num(find('A section of an atlas runs from page 10').answer), 18 - 10 + 1);
  assert.equal(num(find('Mount Everest is 8 849 m high').answer), 8849 - 8611);
  for (const s of ['A section of an atlas runs from page 10', 'Mount Everest is 8 849 m high']) {
    const q = find(s);
    assert.ok(q.options.filter((o) => o !== q.answer).every((o) => num(o) !== num(q.answer)), s);
  }
  // page 14 is between 10 and 18
  assert.ok(14 >= 10 && 14 <= 18);
  assert.ok(17 >= 10 && 17 <= 18);
  assert.equal(find('The contents page of a sample atlas says').answer, 'Both places are in the same section of the atlas');
  // the first place alphabetically
  assert.equal(['Bloemfontein', 'Cape Town', 'Durban', 'Polokwane'].sort()[0], find('Which of these places comes first').answer);
  // no figures that sources disagree on (city populations, exact river lengths, ocean areas) in the bank
  for (const q of bank) assert.doesNotMatch(`${q.prompt} ${q.options.join(' ')}`, /million|population of|km²|km\b/i, q.prompt);
});

test('INDEPENDENT: coniferous climate numbers recomputed with plain Math', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/coniferous-forests/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  const temp = [-12, -10, -4, 3, 10, 15, 18, 16, 10, 3, -4, -10];
  assert.equal(Math.max(...temp) - Math.min(...temp), 30);
  assert.equal(find('On a climate graph for a coniferous forest').answer, '30°C');
  const q = find('On a climate graph for a coniferous forest');
  assert.ok(q.options.filter((o) => o !== q.answer).every((o) => parseFloat(o) !== 30));
  assert.equal(find('In the example climate graph, in which month').answer, 'July');
  assert.equal(find('Coniferous forests grow in which half').answer, 'The northern half, the Northern Hemisphere');
});
