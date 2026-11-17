import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences term 1: pulses and superposition, electromagnetic radiation, revision of matter and classification.
// Every number and formula in the banks is recomputed here with plain Math, independently of waves10Helpers.ts.

stubCss();
const lessons = {
  pul: renderSlides((await import('./curriculum/grade10/ps/term1/pulses-superposition/PulsesSuperposition')).learnSteps),
  em: renderSlides((await import('./curriculum/grade10/ps/term1/em-radiation/EmRadiation')).learnSteps),
  mat: renderSlides((await import('./curriculum/grade10/ps/term1/matter-classification-revision/MatterClassificationRevision')).learnSteps),
};
const all = extractCuratedBanks();
const banks = { pul: all.filter((q) => q.file.includes('/pulses-superposition/')), em: all.filter((q) => q.file.includes('/em-radiation/')), mat: all.filter((q) => q.file.includes('/matter-classification-revision/')) };
const find = (b: typeof banks.pul, start: string) => {
  const hits = b.filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};
const num = (s: string): number => Number(s.replace(/−/g, '-').replace(/[\s ]/g, '').replace(',', '.').match(/-?[\d.]+/)![0]);
const sciNum = (s: string): number => {
  const m = s.replace(/[\s ]/g, '').match(/^(-?[\d,]+)×10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/)!;
  const exp = Number(m[2].replace('⁻', '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (d) => String('⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(d))));
  return Number(m[1].replace(',', '.')) * 10 ** exp;
};
const close = (a: number, b: number) => Math.abs(a / b - 1) < 0.005;

test('every lesson has the standard shape, and every bank has 14 valid questions with the key spread over all four positions', () => {
  for (const s of Object.values(lessons)) assertLessonShape(s);
  for (const [name, bank] of Object.entries(banks)) {
    assert.equal(bank.length, 14, name);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4, name);
  }
});

test('INDEPENDENT: pulse numbers', () => {
  assert.equal(num(find(banks.pul, 'A pulse travels 3,0 m along a rope in 0,60 s').answer), 3 / 0.6);
  assert.equal(num(find(banks.pul, 'A pulse travels at 5,0 m·s⁻¹. How far').answer), 5 * 0.4);
  assert.equal(num(find(banks.pul, 'A pulse of amplitude 2 cm and a pulse of amplitude 3 cm').answer), 2 + 3);
  assert.equal(num(find(banks.pul, 'A pulse of +3 cm overlaps with a pulse of −2 cm').answer), 3 + -2);
  assert.equal(num(find(banks.pul, 'A pulse of +2 cm overlaps with a pulse of −2 cm').answer), 2 + -2);
  for (const s of ['A pulse travels 3,0 m along a rope in 0,60 s', 'A pulse travels at 5,0 m·s⁻¹. How far', 'A pulse of amplitude 2 cm and a pulse of amplitude 3 cm', 'A pulse of +3 cm overlaps with a pulse of −2 cm', 'A pulse of +2 cm overlaps with a pulse of −2 cm']) {
    assert.equal(new Set(find(banks.pul, s).options.map(num)).size, 4, s);
  }
});

test('INDEPENDENT: electromagnetic radiation numbers', () => {
  const c = 3.0e8, h = 6.63e-34;
  assert.ok(close(sciNum(find(banks.em, 'Light has a wavelength of 600 nm').answer), c / 600e-9));
  assert.equal(num(find(banks.em, 'An FM radio wave has a frequency of 1,00 × 10⁸ Hz').answer), c / 1e8);
  assert.ok(close(sciNum(find(banks.em, 'A photon has a frequency of 5,00 × 10¹⁴ Hz').answer), h * 5e14));
  assert.ok(close(sciNum(find(banks.em, 'A photon has a wavelength of 400 nm').answer), (h * c) / 400e-9));
  assert.ok(close(sciNum(find(banks.em, 'What is the speed of all electromagnetic waves').answer), c));
  for (const s of ['Light has a wavelength of 600 nm', 'An FM radio wave has a frequency of 1,00 × 10⁸ Hz', 'A photon has a frequency of 5,00 × 10¹⁴ Hz', 'A photon has a wavelength of 400 nm']) {
    const q = find(banks.em, s);
    const vals = q.options.map((o) => (o.includes('×') ? sciNum(o) : num(o)));
    assert.equal(new Set(vals).size, 4, s);
  }
  // order of the spectrum and which photon has more energy
  assert.equal(find(banks.em, 'Which list is in order from the lowest to the highest frequency').answer, 'Radio waves, infrared, visible light, ultraviolet');
  assert.ok((h * c) / 400e-9 > (h * c) / 700e-9);
  assert.match(find(banks.em, 'Which photon has more energy').answer, /^Violet/);
});

test('INDEPENDENT: ionic formulae are charge balanced', () => {
  const bal = (z1: number, n1: number, z2: number, n2: number) => z1 * n1 === z2 * n2;
  assert.ok(bal(1, 1, 1, 1) && bal(2, 1, 2, 1) && bal(2, 1, 1, 2) && bal(3, 2, 2, 3));
  assert.equal(find(banks.mat, 'What is the formula of sodium chloride').answer, 'NaCl');
  assert.equal(find(banks.mat, 'What is the formula of magnesium oxide').answer, 'MgO');
  assert.equal(find(banks.mat, 'What is the formula of calcium chloride').answer, 'CaCl₂');
  assert.equal(find(banks.mat, 'What is the formula of aluminium oxide').answer, 'Al₂O₃');
  assert.equal(find(banks.mat, 'What is the name of the compound Na₂S').answer, 'Sodium sulfide');
  assert.ok(bal(1, 2, 2, 1)); // Na2S: two Na+ and one S2-
});

test('the lessons teach what the banks ask (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
  for (const [bank, slides] of [[banks.pul, lessons.pul], [banks.em, lessons.em], [banks.mat, lessons.mat]] as const) {
    const text = slides.map((s) => s.text).join(' ').toLowerCase();
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  }
});
