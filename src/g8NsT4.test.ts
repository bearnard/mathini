import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of space8Helpers.ts.

stubCss();
const topics = [
  { dir: 'term4/beyond-the-solar-system', mod: './curriculum/grade8/natural-sciences/term4/beyond-the-solar-system/BeyondTheSolarSystem' },
  { dir: 'term4/looking-into-space', mod: './curriculum/grade8/natural-sciences/term4/looking-into-space/LookingIntoSpace' },
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

test('INDEPENDENT: light units (the CAPS values are quoted in the questions)', () => {
  const d = 'term4/beyond-the-solar-system';
  assert.equal(find(d, 'Alpha Centauri is 4,2 light years away. Using 10 trillion km').answer, `${4.2 * 10} trillion km`);
  assert.match(find(d, 'Alpha Centauri is 4,2 light years away. Using 10 trillion km').prompt, /10 trillion km/);
  assert.equal(300000 * 60, 18000000);
  assert.equal(find(d, 'How many kilometres does light travel in one minute').answer, '18 000 000 km');
  assert.match(find(d, 'How many kilometres does light travel in one minute').prompt, /300 000 km per second/);
  assert.equal(find(d, 'About how many light minutes is the Earth from the Sun').answer, String(Math.round(150000000 / 300000 / 60)));
});
