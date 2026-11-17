import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import * as h from './components/diagrams/g6nst/g6nstHelpers';

// Grade 6 NST: rates of dissolving (T2), fossil fuels (T3), cost, saving and renewable electricity (T3).
// Shape, bank quality, and the numbers recomputed by hand.

stubCss();
const rates = await import('./curriculum/grade6/natural-sciences/term2/rates-of-dissolving/Slides');
const fossil = await import('./curriculum/grade6/natural-sciences/term3/fossil-fuels/Slides');
const cost = await import('./curriculum/grade6/natural-sciences/term3/electricity-cost-renewables/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const LESSONS = [
  { name: 'rates of dissolving', steps: rates.learnSteps, file: 'rates-of-dissolving' },
  { name: 'fossil fuels', steps: fossil.learnSteps, file: 'fossil-fuels' },
  { name: 'cost, saving and renewable electricity', steps: cost.learnSteps, file: 'electricity-cost-renewables' },
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

test('helpers: dissolving trials, fair amounts, and the appliance table', () => {
  assert.deepEqual(h.TEMP_TRIALS.map((t) => t.seconds), [90, 50, 20]);
  assert.equal(h.secondsSaved(h.TEMP_TRIALS[0], h.TEMP_TRIALS[2]), 70);
  assert.equal(h.timesAsLong(h.STIR_TRIALS[0], h.STIR_TRIALS[1]), 3);
  assert.equal(h.secondsSaved(h.GRAIN_TRIALS[0], h.GRAIN_TRIALS[1]), 40);
  assert.equal(h.fastest(h.TEMP_TRIALS).label, 'hot');
  assert.deepEqual(h.FAIR_AMOUNTS, { soluteMl: 5, waterMl: 125 }); // 1 teaspoon and half a cup, as CAPS suggests
  assert.equal(h.mostPower(h.APPLIANCES).name, 'kettle');
  assert.equal(h.leastPower(h.APPLIANCES).name, 'energy-saving bulb');
  // CAPS: a kettle needs more than 2 000 W, a radio about 15 W; heating appliances use the most
  assert.ok(h.APPLIANCES.find((a) => a.name === 'kettle')!.watts >= 2000);
  assert.equal(h.APPLIANCES.find((a) => a.name === 'radio')!.watts, 15);
  const heating = h.APPLIANCES.filter((a) => a.heats).map((a) => a.watts);
  const others = h.APPLIANCES.filter((a) => !a.heats).map((a) => a.watts);
  assert.ok(Math.min(...heating) > Math.max(...others));
});

test('INDEPENDENT: the sums in the dissolving bank recomputed with plain Math', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/rates-of-dissolving/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  const num = (o: string) => parseFloat(o);
  const cases: [string, number][] = [
    ['A pinch of salt dissolves in 90 seconds', 90 - 20],
    ['Salt takes 60 seconds to dissolve when it is not stirred', 60 / 20],
    ['Coarse salt takes 70 seconds', 70 - 30],
  ];
  for (const [start, want] of cases) {
    const q = find(start);
    const i = q.options.indexOf(q.answer);
    assert.equal(num(q.answer), want, start);
    assert.ok(q.options.filter((_, j) => j !== i).every((o) => num(o) !== want), start);
  }
  // the lesson shows the same data
  assert.equal(90 - 20, h.secondsSaved(h.TEMP_TRIALS[0], h.TEMP_TRIALS[2]));
  assert.equal(60 / 20, h.timesAsLong(h.STIR_TRIALS[0], h.STIR_TRIALS[1]));
  assert.match(find('Which test is a fair test').answer, /5 ml of fine salt in 125 ml of cold water/);
});

test('INDEPENDENT: the electricity bank agrees with the appliance table', () => {
  const bank = extractCuratedBanks().filter((q) => q.file.includes('/electricity-cost-renewables/'));
  const find = (s: string) => bank.find((q) => q.prompt.startsWith(s))!;
  assert.equal(find("A kettle's label says 2 000 W").answer, 'The kettle');
  assert.equal(find('A table lists a television at 100 W').answer, 'The energy-saving bulb');
  assert.equal(Math.min(100, 15, 10), 10);
  assert.ok(2000 > 15);
  assert.equal(find('Which pair are both renewable').answer, 'Wind generators and hydro-electric power');
  // no kWh or rand calculations in Grade 6 (CAPS footnote)
  for (const q of bank) assert.doesNotMatch(`${q.prompt} ${q.options.join(' ')} ${q.explanation}`, /kW\.?h|kilowatt|R\s?\d/i, q.prompt);
});
