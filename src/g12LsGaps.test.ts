import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { grade12 } from './curriculum/grade12';

// Grade 12 Life Sciences gap lessons: nervous system disorders and drugs, plant defence, artificial selection and isolation, evolution in present times,
// human impact (Paper 2 revision). The numbers are recomputed here independently of gaps12.ts.

stubCss();
const topics: [string, string, number][] = [
  ['term2/nervous-disorders-injuries-drugs', 'NervousDisordersInjuriesDrugs', 2],
  ['term3/plant-defence', 'PlantDefence', 3],
  ['term3/artificial-selection-isolation', 'ArtificialSelectionIsolation', 3],
  ['term3/evolution-present-times', 'EvolutionPresentTimes', 3],
  ['term4/human-impact-environment', 'HumanImpactEnvironment', 4],
];
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
for (const [dir, name] of topics) {
  lessons[dir] = renderSlides((await import(`./curriculum/grade12/life-sciences/${dir}/${name}`)).learnSteps);
  banks[dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade12/life-sciences/${dir}/`));
}
for (const [dir] of topics) {
  test(`${dir}: standard lesson shape, 14 valid questions, key words in the lesson`, () => {
    assertLessonShape(lessons[dir]);
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
test('the drugs part gives effects, harms and help only: no doses, routes or how to get drugs, and Childline 116 is named', () => {
  const t = lessons['term2/nervous-disorders-injuries-drugs'].map((x) => x.text).join(' ');
  assert.ok(/Childline on 116/.test(t) && /trusted adult/.test(t) && /clinic/.test(t));
  assert.ok(!/\b(dose|dosage|mg|inject|snort|smoke it|where to buy|how to make|synthes)/i.test(t), 'no use or dosing details');
  const qs = banks['term2/nervous-disorders-injuries-drugs'];
  assert.ok(qs.every((q) => !/\b(dose|dosage|inject|snort|buy)\b/i.test(q.prompt + q.options.join(' '))));
});
test('INDEPENDENT: reaction time, resistance model and percentage changes', () => {
  const find = (dir: string, start: string) => banks[dir].find((q) => q.prompt.startsWith(start))!;
  const times = [0.21, 0.25, 0.28, 0.24, 0.27];
  const total = times.reduce((a, b) => a + b, 0);
  assert.ok(Math.abs(total - 1.25) < 1e-9);
  assert.ok(Math.abs(total / 5 - 0.25) < 1e-9);
  const ms = 100000 / 3600;
  assert.ok(Math.abs(ms * 0.25 - 6.944) < 1e-3);
  assert.ok(Math.abs(ms * 0.45 - 12.5) < 1e-9);
  assert.equal(find('term2/nervous-disorders-injuries-drugs', 'A car travels at 100 km/h').answer, '6,94 m');
  assert.equal(find('term2/nervous-disorders-injuries-drugs', 'Reaction times of 0,21').answer, '0,25 s');
  // resistance model: p -> p / (p + (1 - p) * 0,05)
  let p = 0.005;
  const shares = [p];
  for (let i = 0; i < 3; i++) { p = p / (p + (1 - p) * 0.05); shares.push(p); }
  assert.deepEqual(shares.map((x) => Math.round(x * 10000) / 100), [0.5, 9.13, 66.78, 97.57]);
  assert.equal(5 / 1000 * 100, 0.5);
  assert.ok(5 / 54.75 > 0.09 && 5 / 54.75 < 0.092);
  // finch beaks, herd and forest
  assert.ok(Math.abs(9.7 - 9.2 - 0.5) < 1e-9);
  assert.equal(Math.round((0.5 / 9.2) * 10000) / 100, 5.43);
  assert.equal(find('term3/evolution-present-times', 'What is the percentage change in beak depth').answer, '5,43%');
  assert.equal(16.5 - 12, 4.5);
  assert.equal((4.5 / 12) * 100, 37.5);
  assert.equal(find('term3/artificial-selection-isolation', 'What is the percentage increase in milk yield').answer, '37,5%');
  assert.equal(9000 - 12000, -3000);
  assert.equal(((9000 - 12000) / 12000) * 100, -25);
  assert.equal(find('term4/human-impact-environment', 'What is the percentage change when a forest').answer, '25% decrease');
});
test('registered in the right terms, and the endocrine lesson is already in Term 3 with no empty term', () => {
  const ls = grade12.subjects.find((s) => s.id === 'ls')!;
  const termOf = (id: string) => ls.terms.find((t) => t.topics.some((p) => p.id === id))?.id;
  assert.equal(termOf('gr12-nervous-disorders-injuries-drugs-t2'), 2);
  for (const id of ['gr12-plant-defence-t3', 'gr12-artificial-selection-isolation-t3', 'gr12-evolution-present-times-t3']) assert.equal(termOf(id), 3, id);
  assert.equal(termOf('gr12-human-impact-environment-t4'), 4);
  assert.equal(termOf('gr12-endocrine-homeostasis-plant-responses-t2'), 3);
  for (const t of ls.terms) assert.ok(t.topics.length > 0, `term ${t.id}`);
});
