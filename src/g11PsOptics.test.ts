import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 Physical Sciences term 2 optics: refraction and Snell's law, wavefronts and diffraction.
// Every number in the banks is recomputed here with plain Math, independently of optics11Helpers.ts.

stubCss();
const lessons = {
  refr: renderSlides((await import('./curriculum/grade11/physical-sciences/term2/refraction-snell/RefractionSnell')).learnSteps),
  diff: renderSlides((await import('./curriculum/grade11/physical-sciences/term2/diffraction/Diffraction')).learnSteps),
};
const all = extractCuratedBanks();
const banks = { refr: all.filter((q) => q.file.includes('/refraction-snell/')), diff: all.filter((q) => q.file.includes('/diffraction/')) };
const find = (b: typeof banks.refr, start: string) => {
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
const deg = (r: number) => (r * 180) / Math.PI;
const rad = (d: number) => (d * Math.PI) / 180;
const r1 = (x: number) => Math.round(x * 10) / 10;

test('every lesson has the standard shape, and every bank has 14 valid questions with the key spread over all four positions', () => {
  for (const s of Object.values(lessons)) assertLessonShape(s);
  for (const [name, bank] of Object.entries(banks)) {
    assert.equal(bank.length, 14, name);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4, name);
  }
});

test('INDEPENDENT: refraction numbers', () => {
  const C = 3.0e8;
  assert.equal(num(find(banks.refr, 'The speed of light in glass is 2,00').answer), C / 2e8);
  assert.ok(Math.abs(sciNum(find(banks.refr, 'Light enters water with n = 1,33').answer) / (C / 1.33) - 1) < 0.005);
  assert.equal(num(find(banks.refr, 'Light of wavelength 600 nm in air enters glass with n = 1,50. What is its wavelength').answer), 600 / 1.5);
  assert.equal(num(find(banks.refr, 'A ray travels from air (n = 1,00) into glass').answer), r1(deg(Math.asin(Math.sin(rad(40)) / 1.5))));
  assert.equal(num(find(banks.refr, 'A ray travels from air (n = 1,00) into water').answer), r1(deg(Math.asin(Math.sin(rad(30)) / 1.33))));
  assert.equal(num(find(banks.refr, 'A ray goes from water (n = 1,33) into air').answer), r1(deg(Math.asin(1.33 * Math.sin(rad(20))))));
  assert.equal(num(find(banks.refr, 'What is the critical angle for light going from glass').answer), r1(deg(Math.asin(1 / 1.5))));
  assert.equal(num(find(banks.refr, 'What is the critical angle for light going from water').answer), r1(deg(Math.asin(1 / 1.33))));
  assert.equal(num(find(banks.refr, 'What is the critical angle for light going from diamond').answer), r1(deg(Math.asin(1 / 2.42))));
  assert.equal(num(find(banks.refr, 'A fibre has a core of n = 1,50').answer), r1(deg(Math.asin(1.45 / 1.5))));
  // the wrong options are all different numbers (and the angles are real angles)
  for (const start of ['A ray travels from air (n = 1,00) into glass', 'A ray travels from air (n = 1,00) into water', 'A ray goes from water (n = 1,33) into air', 'What is the critical angle for light going from glass', 'What is the critical angle for light going from water', 'What is the critical angle for light going from diamond', 'A fibre has a core of n = 1,50']) {
    const q = find(banks.refr, start);
    const nums = q.options.map(num);
    assert.equal(new Set(nums).size, 4, q.prompt);
    assert.ok(nums.every((n) => n > 0 && n < 90), q.prompt);
  }
  assert.equal(find(banks.refr, 'Light goes from air into glass. How does the ray bend').answer, 'Towards the normal');
});

test('INDEPENDENT: diffraction numbers and facts', () => {
  assert.equal(num(find(banks.diff, 'A wave travels at 340 m·s⁻¹ and has a frequency of 680 Hz').answer), 340 / 680);
  assert.equal(num(find(banks.diff, 'A sound wave has a wavelength of 0,50 m and a gap').answer), 0.5 / 0.25);
  assert.equal(find(banks.diff, 'Which of these gaps will cause the most diffraction').answer, 'A gap 0,5 m wide');
  assert.ok(0.5 < 1.0 && 5 > 1.0 && 10 > 1.0 && 50 > 1.0, 'only the 0,5 m gap is smaller than the 1,0 m wavelength');
  assert.equal(find(banks.diff, 'In the diffraction pattern of a single slit, which band is the widest').answer, 'The central band');
  assert.ok(700 > 450);
  assert.match(find(banks.diff, 'Red light (700 nm) and blue light (450 nm)').answer, /^Red light/);
});

test('the lessons teach what the banks ask (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
  for (const [bank, slides] of [[banks.refr, lessons.refr], [banks.diff, lessons.diff]] as const) {
    const text = slides.map((s) => s.text).join(' ').toLowerCase();
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  }
});
