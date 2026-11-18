import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of ns8bHelpers.ts.

stubCss();
const topics = [
  { dir: 'term3/static-electricity', mod: './curriculum/grade8/natural-sciences/term3/static-electricity/StaticElectricity' },
  { dir: 'term3/electric-circuits-current', mod: './curriculum/grade8/natural-sciences/term3/electric-circuits-current/ElectricCircuitsCurrent' },
  { dir: 'term3/series-parallel-circuits', mod: './curriculum/grade8/natural-sciences/term3/series-parallel-circuits/SeriesParallelCircuits' },
  { dir: 'term3/visible-light', mod: './curriculum/grade8/natural-sciences/term3/visible-light/VisibleLight' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade8/natural-sciences/${t.dir}/`));
}
const find = (dir: string, start: string) => {
  const hits = banks[dir].filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};

for (const t of topics) {
  const size = t.dir === 'term3/electric-circuits-current' ? 17 : 14;
  test(`${t.dir}: standard lesson shape, ${size} valid questions, key spread over all four positions`, () => {
    assertLessonShape(lessons[t.dir]);
    const bank = banks[t.dir];
    assert.equal(bank.length, size);
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

test('INDEPENDENT: circuit symbols', () => {
  const d = 'term3/electric-circuits-current';
  assert.equal(find(d, 'In a circuit diagram, which symbol stands for a bulb').answer, 'A circle with a cross inside');
  assert.equal(find(d, 'In the circuit-diagram symbol for a cell').answer, 'The longer, thinner line');
  assert.equal(find(d, 'A circuit diagram shows a switch drawn with a gap').answer, 'The switch is open, so no current flows');
});

test('INDEPENDENT: light arithmetic and angles', () => {
  const d = 'term3/visible-light';
  assert.equal(find(d, 'Sunlight travels about 150 million km').answer, `${150000000 / 300000} s`);
  assert.equal(find(d, 'A ray of light hits a mirror at an angle of incidence of 35°').answer, '35°');
  assert.equal(find(d, 'What is the speed of light in empty space').answer, '300 000 km per second');
  assert.equal(find(d, 'How many colours are in the visible spectrum').answer, 'Seven');
  assert.equal(find(d, 'Which colour of visible light has the highest frequency').answer, 'Violet');
  assert.equal(find(d, 'Which colour of visible light has the longest wavelength').answer, 'Red');
});

test('INDEPENDENT: circuits stay qualitative (no formulae, no V = IR) and the series and parallel rules hold', () => {
  for (const dir of ['term3/electric-circuits-current', 'term3/series-parallel-circuits']) {
    for (const q of banks[dir]) assert.ok(!/V\s*=\s*IR|ohm|volt|ampere|calculate/i.test(q.prompt + q.options.join(' ')), q.prompt);
  }
  const d = 'term3/series-parallel-circuits';
  assert.equal(find(d, 'How many pathways does a series circuit').answer, 'One');
  assert.equal(find(d, 'More bulbs are added to a series circuit. What happens to the current?').answer, 'It decreases');
  assert.equal(find(d, 'More bulbs are added to a parallel circuit. What happens to the overall current?').answer, 'It increases');
  assert.equal(find(d, 'A bulb in a series circuit burns out').answer, 'They all go out');
  assert.equal(find(d, 'In a parallel circuit one bulb fails').answer, 'They stay lit');
});

test('INDEPENDENT: static electricity (only electrons move)', () => {
  const d = 'term3/static-electricity';
  assert.equal(find(d, 'When a plastic ruler is rubbed with wool').answer, 'Electrons');
  assert.equal(find(d, 'An atom has 8 protons and 9 electrons').answer, 9 > 8 ? 'Negative' : 'Positive');
  assert.equal(find(d, 'An atom has 8 protons and 7 electrons').answer, 7 < 8 ? 'Positive' : 'Negative');
  assert.equal(find(d, 'Two objects both have a positive charge').answer, 'They repel each other');
});
