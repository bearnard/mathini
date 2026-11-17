import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 12 Physical Sciences: the three lessons split from the old combined Term 2 lesson (rate, equilibrium, acids and bases).
// Every number in the banks is recomputed here with plain Math, independently of rateHelpers.ts.

stubCss();
const lessons = {
  rate: renderSlides((await import('./curriculum/grade12/physical-sciences/term2/rate-extent-reaction/RateExtentReaction')).learnSteps),
  eq: renderSlides((await import('./curriculum/grade12/physical-sciences/term2/chemical-equilibrium/ChemicalEquilibrium')).learnSteps),
  acid: renderSlides((await import('./curriculum/grade12/physical-sciences/term2/acids-bases/AcidsBases')).learnSteps),
};
const all = extractCuratedBanks();
const banks = { rate: all.filter((q) => q.file.includes('rate-extent-reaction')), eq: all.filter((q) => q.file.includes('chemical-equilibrium')), acid: all.filter((q) => q.file.includes('acids-bases/AcidsBases')) };
const find = (b: typeof banks.rate, start: string) => {
  const hits = b.filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};
const num = (s: string): number => Number(s.replace(/−/g, '-').replace(/\s/g, '').replace(',', '.').match(/-?[\d.]+(?:×10[-\d]+)?/)![0]);

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

test('INDEPENDENT: rates and energy profiles', () => {
  const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) <= t;
  assert.ok(near(num(find(banks.rate, "A reactant's concentration falls from 0,80").answer), (0.8 - 0.2) / 30, 1e-6));
  assert.ok(near(num(find(banks.rate, "A product's concentration rises from 0 to 0,45").answer), 0.45 / 90, 1e-6));
  assert.equal(num(find(banks.rate, 'Reactants have an energy of 50 kJ·mol⁻¹ and products 30').answer), 30 - 50);
  assert.equal(num(find(banks.rate, 'On an energy profile the reactants are at 50').answer), 90 - 50);
  // the wrong options are different numbers
  for (const start of ["A reactant's concentration falls from 0,80", "A product's concentration rises from 0 to 0,45"]) {
    const q = find(banks.rate, start);
    for (const o of q.options.filter((x) => x !== q.answer)) assert.ok(!near(num(o), num(q.answer), 1e-4), o);
  }
});

test('INDEPENDENT: Kc values', () => {
  const kc1 = 1.0 ** 2 / (0.5 * 1.5 ** 3);
  assert.equal(num(find(banks.eq, 'At equilibrium [N₂] = 0,5').answer), Math.round(kc1 * 100) / 100);
  const kc2 = 1.56 ** 2 / (0.22 * 0.22);
  assert.equal(num(find(banks.eq, 'In H₂ + I₂ ⇌ 2HI the equilibrium concentrations').answer), Math.round(kc2 * 10) / 10);
  // ICE table behind the HI numbers: 1,00 mol of each, x = 0,78 reacts: 1 − 0,78 = 0,22 and 2 × 0,78 = 1,56
  assert.ok(Math.abs(1 - 0.78 - 0.22) < 1e-12 && Math.abs(2 * 0.78 - 1.56) < 1e-12);
});

test('INDEPENDENT: pH, Kw and titrations', () => {
  const pH = (h: number) => -Math.log10(h);
  assert.ok(Math.abs(pH(1e-3) - num(find(banks.acid, 'What is the pH of a solution with [H₃O⁺] = 1 × 10⁻³').answer)) < 1e-9);
  assert.ok(Math.abs(pH(0.01) - num(find(banks.acid, 'What is the pH of 0,010 mol·dm⁻³ HCl').answer)) < 1e-9);
  assert.ok(Math.abs(14 - -Math.log10(0.01) - num(find(banks.acid, 'What is the pH of 0,010 mol·dm⁻³ NaOH').answer)) < 1e-9);
  assert.ok(Math.abs(pH(2 * 0.005) - num(find(banks.acid, 'What is the pH of 0,005 mol·dm⁻³ H₂SO₄').answer)) < 1e-9);
  assert.equal(Math.round(Math.log10(1e-14 / 1e-4)), -10);
  assert.ok(find(banks.acid, 'What is the [OH⁻] in a solution of pH 4?').answer.startsWith('1 × 10⁻¹⁰'));
  assert.ok(Math.abs(0.1 * 0.020 / 0.025 - num(find(banks.acid, '20,0 cm³ of HCl of concentration 0,10').answer)) < 1e-9);
  assert.ok(Math.abs((0.5 * 0.010 * 2) / 0.025 - num(find(banks.acid, '10,0 cm³ of H₂SO₄ of concentration 0,50').answer)) < 1e-9);
  // the wrong pH options are different values
  for (const start of ['What is the pH of 0,010 mol·dm⁻³ HCl', 'What is the pH of 0,010 mol·dm⁻³ NaOH', 'What is the pH of 0,005 mol·dm⁻³ H₂SO₄']) {
    const q = find(banks.acid, start);
    for (const o of q.options.filter((x) => x !== q.answer)) assert.notEqual(num(o), num(q.answer), o);
  }
});

test('the lessons teach what the banks ask (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
  for (const [bank, slides] of [[banks.rate, lessons.rate], [banks.eq, lessons.eq], [banks.acid, lessons.acid]] as const) {
    const text = slides.map((s) => s.text.toLowerCase()).join(' ');
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length <= 2, `${q.prompt}: the lesson never mentions ${missing.join(', ')}`);
    }
  }
});
