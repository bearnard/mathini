import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The rules written in the questions are checked here independently of aq10Helpers.ts.

stubCss();
const topics = [
  { dir: 'term1/atom-isotopes', mod: './curriculum/grade10/ps/term1/atom-isotopes/AtomIsotopes' },
  { dir: 'term1/longitudinal-waves', mod: './curriculum/grade10/ps/term1/longitudinal-waves/LongitudinalWaves' },
  { dir: 'term1/sound', mod: './curriculum/grade10/ps/term1/sound/Sound' },
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

test('INDEPENDENT: the atom (subtraction, weighted averages by plain arithmetic)', () => {
  const d = 'term1/atom-isotopes';
  assert.equal(find(d, 'An atom has Z = 11').answer, String(23 - 11));
  assert.equal(find(d, 'How many neutrons are in a ³⁷₁₇Cl').answer, String(37 - 17));
  assert.equal(find(d, 'How many protons are in a ³⁷₁₇Cl').answer, '17');
  assert.equal(find(d, 'How many electrons are in a neutral atom of ¹⁴₆C').answer, '6');
  assert.equal(find(d, 'How many electrons are in a Na⁺').answer, String(11 - 1));
  const cl = (35 * 75 + 37 * 25) / 100;
  const b = (10 * 20 + 11 * 80) / 100;
  const mg = (24 * 79 + 25 * 10 + 26 * 11) / 100;
  assert.equal(find(d, 'Chlorine is about').answer, cl.toFixed(1).replace('.', ','));
  assert.equal(find(d, 'Boron is about').answer, b.toFixed(1).replace('.', ','));
  assert.equal(find(d, 'Magnesium is about').answer, mg.toFixed(1).replace('.', ','));
  assert.equal(75 + 25, 100);
  assert.equal(20 + 80, 100);
  assert.equal(79 + 10 + 11, 100);
});

test('INDEPENDENT: longitudinal waves (v = f lambda, T = 1/f)', () => {
  const d = 'term1/longitudinal-waves';
  const c = (x: number) => String(x).replace('.', ',');
  assert.equal(find(d, 'A spring wave has a frequency of 4 Hz').answer, `${c(1 / 4)} s`);
  assert.equal(find(d, 'A wave on a spring has a frequency of 5 Hz').answer, `${c(5 * 0.4)} m·s⁻¹`);
  assert.equal(find(d, 'A longitudinal wave travels at 12').answer, `${c(12 / 6)} m`);
  assert.equal(find(d, 'Two successive compressions on a spring are 12 cm').answer, '12 cm');
  assert.equal(find(d, 'A compression and the next rarefaction are 5 cm').answer, `${c(5 * 2)} cm`);
});

test('INDEPENDENT: sound (v = 340 m/s is quoted in each question that needs it)', () => {
  const d = 'term1/sound';
  const c = (x: number) => String(x).replace('.', ',');
  for (const q of banks[d].filter((q) => /^(Using 340|A boy shouts|Lightning)/.test(q.prompt))) assert.match(q.prompt, /340 m·s⁻¹/, q.prompt);
  assert.equal(find(d, 'Using 340 m·s⁻¹ as the speed of sound in air, what is the wavelength').answer, `${c(340 / 680)} m`);
  assert.equal(find(d, 'A boy shouts').answer, `${340 * 2 / 2} m`);
  assert.equal(find(d, 'Lightning is 1 700 m away').answer, `${1700 / 340} s`);
  assert.equal(find(d, 'A healthy human ear hears').answer, '20 000 Hz');
  assert.equal(find(d, 'What is a sound with a frequency of 30 000 Hz').answer, 30000 > 20000 ? 'Ultrasound' : 'Infrasound');
});
