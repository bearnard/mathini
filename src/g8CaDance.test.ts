import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 8 Creative Arts, dance (CAPS terms 3 and 4): dance careers and discussing a dance you have seen, and gestures and the movement sentence.
// No dance, dancer or choreographer is named. Counts in the movement-sentence questions are recomputed here by hand.

stubCss();
const base = './curriculum/grade8/creative-arts';
const topics = [
  { dir: 'term3/dance-careers-discussing-dance', mod: `${base}/term3/dance-careers-discussing-dance/DanceCareersDiscussingDance` },
  { dir: 'term4/gestures-movement-sentence', mod: `${base}/term4/gestures-movement-sentence/GesturesMovementSentence` },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade8/creative-arts/${t.dir}/`));
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
      assert.ok(!/learners?\b|CAPS/i.test(q.prompt), `prompt does not name learners or CAPS: ${q.prompt}`);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });

  test(`${t.dir}: key words of every answer appear in the lesson`, () => {
    const words = (s: string) => s.toLowerCase().match(/[a-z]{6,}/g) ?? [];
    const text = lessons[t.dir].map((s) => s.text).join(' ').toLowerCase();
    for (const q of banks[t.dir]) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 2, `${q.prompt}: ${missing.join(', ')}`);
    }
  });
}

test('INDEPENDENT: counts in a movement sentence', () => {
  const d = 'term4/gestures-movement-sentence';
  assert.equal(find(d, 'A movement sentence has 4 gestures of 2 counts each').answer, String(4 * 2));
  assert.equal(find(d, 'You repeat a sentence of 3 gestures twice').answer, String(3 * 2));
  const text = lessons[d].map((s) => s.text).join(' ');
  assert.ok(text.includes('4 gestures × 2 counts = 8 counts'));
  assert.ok(text.includes('8 gestures in 16 counts')); // 4 gestures twice = 8 gestures, 8 counts twice = 16 counts
  assert.equal(4 * 2, 8);
  assert.equal(8 * 2, 16);
});

test('INDEPENDENT: careers, dance words and no named dances or dancers', () => {
  const t = lessons['term3/dance-careers-discussing-dance'].map((s) => s.text).join(' ').toLowerCase();
  for (const w of ['dancer', 'choreographer', 'dance teacher', 'dance therapist', 'costume designer', 'symmetry', 'asymmetry', 'active', 'passive', 'skills', 'qualifications', 'qualities']) assert.ok(t.includes(w), w);
  assert.equal(find('term3/dance-careers-discussing-dance', 'What does a choreographer do').answer, 'Creates and arranges dances');
  assert.equal(find('term3/dance-careers-discussing-dance', 'Dancers stand in two matching lines').answer, 'Symmetry');
  const all = Object.values(lessons).flatMap((l) => l.map((s) => s.text)).join(' ');
  for (const name of ['Swan Lake', 'Nutcracker', 'Pantsula', 'Gumboot', 'Indlamu', 'Jabulani', 'Beyonc']) assert.ok(!all.includes(name), name);
});
