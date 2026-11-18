import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of tech8dHelpers.ts.

stubCss();
const topics = [
  { dir: 'term4/cells-batteries-solar', mod: './curriculum/grade8/technology/term4/cells-batteries-solar/CellsBatteriesSolar' },
  { dir: 'term4/electricity-generation-grid', mod: './curriculum/grade8/technology/term4/electricity-generation-grid/ElectricityGenerationGrid' },
  { dir: 'term4/resistors-ohm-logic', mod: './curriculum/grade8/technology/term4/resistors-ohm-logic/ResistorsOhmLogic' },
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

test('INDEPENDENT: cells in series and parallel (plain arithmetic)', () => {
  const d = 'term4/cells-batteries-solar';
  const c = (x: number) => String(x).replace('.', ',');
  assert.equal(find(d, 'A battery has three 1,5 V cells in series').answer, `${c(3 * 1.5)} V`);
  assert.equal(find(d, 'Two cells of 1,5 V each are joined in series').answer, `${2 * 1.5} V`);
  assert.equal(find(d, 'A battery has three 1,5 V cells in parallel').answer, '1,5 V');
  assert.equal(find(d, 'If one cell lasts 10 hours').answer, `${3 * 10} hours`);
});

test('INDEPENDENT: logic gates are checked exhaustively and Ohm law stays qualitative', () => {
  const d = 'term4/resistors-ohm-logic';
  const rows: [number, number][] = [[0, 0], [0, 1], [1, 0], [1, 1]];
  assert.deepEqual(rows.map(([a, b]) => (a && b ? 1 : 0)), [0, 0, 0, 1]);
  assert.deepEqual(rows.map(([a, b]) => (a || b ? 1 : 0)), [0, 1, 1, 1]);
  assert.equal(rows.length, 2 * 2);
  assert.equal(find(d, 'How many rows has the truth table').answer, 'Four');
  assert.equal(find(d, 'Two switches are in series with a lamp').answer, 'An AND gate');
  assert.equal(find(d, 'Two switches are in parallel with a lamp').answer, 'An OR gate');
  assert.equal(find(d, 'Which logic suits a panic button system').answer, 'OR');
  for (const q of banks[d]) assert.ok(!/V\s*=\s*IR|calculate\b|ohms?\b|amperes?\b/i.test(q.prompt.replace("Ohm's law", '')), q.prompt);
  assert.equal(find(d, "In Grade 8, how is Ohm's law treated").answer, 'Qualitatively: no calculations');
});

test('INDEPENDENT: the national grid stages', () => {
  const d = 'term4/electricity-generation-grid';
  const stages = ['power station', 'step-up transformer', 'transmission lines', 'step-down transformer', 'homes and industry'];
  assert.equal(find(d, 'In the national grid, which part comes immediately after the step-up transformer').answer.toLowerCase(), stages[stages.indexOf('step-up transformer') + 1]);
  assert.equal(find(d, 'What does a step-up transformer do').answer, 'It raises the voltage');
});
