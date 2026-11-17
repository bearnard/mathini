import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The rules written in the questions are checked here independently of aq10Helpers.ts.

stubCss();
const topics = [
  { dir: 'term3/position-displacement', mod: './curriculum/grade10/ps/term3/position-displacement/PositionDisplacement' },
  { dir: 'term3/speed-velocity-acceleration', mod: './curriculum/grade10/ps/term3/speed-velocity-acceleration/SpeedVelocityAcceleration' },
  { dir: 'term3/instantaneous-velocity', mod: './curriculum/grade10/ps/term3/instantaneous-velocity/InstantaneousVelocity' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`/${t.dir}/`));
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

test('INDEPENDENT: distance and displacement (final minus initial, sum of the step sizes)', () => {
  const d = 'term3/position-displacement';
  const path = [0, 4, 1]; // east 4 m, then west 3 m
  const dist = Math.abs(4 - 0) + Math.abs(1 - 4);
  assert.equal(find(d, 'A walker goes 4 m east and then 3 m west. What is the distance').answer, `${dist} m`);
  assert.equal(find(d, 'A walker goes 4 m east and then 3 m west. What is the displacement').answer, `+${path[2] - path[0]} m`);
  assert.equal(find(d, 'What is the displacement of an object that moves from x = 2 m').answer, `−${Math.abs(-3 - 2)} m`);
  assert.equal(find(d, 'What is the displacement of an object that moves from x = −4 m').answer, `+${6 - -4} m`);
  assert.equal(find(d, 'A cyclist rides 6 km east to a shop and 6 km west back home. What is the displacement').answer, '0 km');
  assert.equal(find(d, 'A cyclist rides 6 km east to a shop and 6 km west back home. What is the distance').answer, `${6 + 6} km`);
});

test('INDEPENDENT: speed, velocity, acceleration and unit changes', () => {
  const d = 'term3/speed-velocity-acceleration';
  const c = (x: number) => String(x).replace('.', ',').replace('-', '−');
  assert.equal(find(d, 'A car travels 120 km in 1,5 h').answer, `${120 / 1.5} km·h⁻¹`);
  assert.equal(find(d, 'A runner has a displacement of −6 m in 3 s').answer, `${c(-6 / 3)} m·s⁻¹`);
  assert.equal(find(d, 'Change 72 km·h⁻¹').answer, `${72 / 3.6} m·s⁻¹`);
  assert.equal(find(d, 'Change 15 m·s⁻¹').answer, `${15 * 3.6} km·h⁻¹`);
  assert.equal(1000 / 3600, 1 / 3.6); // why 3,6: 1 km = 1 000 m and 1 h = 3 600 s
  assert.equal(find(d, 'A car speeds up from 5 m·s⁻¹').answer, `${(20 - 5) / 3} m·s⁻²`);
  assert.equal(find(d, 'A car slows from 20 m·s⁻¹').answer, `${c((8 - 20) / 4)} m·s⁻²`);
  // signs: v and a with the same sign speed up, opposite signs slow down
  assert.ok(20 * -3 < 0);
  assert.ok(-6 * -2 > 0);
  assert.equal(find(d, 'An object has a positive velocity and a negative acceleration').answer, 'It is slowing down');
  assert.equal(find(d, 'An object has v = −6').answer, 'It is speeding up');
});

test('INDEPENDENT: instantaneous velocity (x = 2 t², v = 4 t)', () => {
  const d = 'term3/instantaneous-velocity';
  const x = (t: number) => 0.5 * 4 * t * t;
  assert.equal(find(d, 'A car starts from rest with a = 4 m·s⁻². What is its velocity after 3 s').answer, `${4 * 3} m·s⁻¹`);
  assert.equal(find(d, 'A car starts from rest at x = 0').answer, `${x(3)} m`);
  assert.equal(x(3), 18);
  assert.equal(x(4), 32);
  assert.equal(find(d, 'The position of a car is 18 m at 3 s').answer, `${(x(4) - x(3)) / 1} m·s⁻¹`);
  // shrinking intervals from t = 3 s tend to v = 12 m/s
  const chord = (dt: number) => (x(3 + dt) - x(3)) / dt;
  assert.ok(chord(1) > chord(0.5) && chord(0.5) > chord(0.1) && chord(0.1) > 12);
  assert.ok(Math.abs(chord(0.0001) - 12) < 0.001);
  assert.equal((x(4) - x(2)) / 2, 4 * 3); // average over 2 s to 4 s equals v at 3 s
  assert.equal(find(d, 'What is the instantaneous speed when the velocity is −12').answer, `${Math.abs(-12)} m·s⁻¹`);
});
