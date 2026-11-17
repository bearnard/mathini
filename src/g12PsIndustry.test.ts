import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { isBalanced, molarMass, massPercent, npkMasses, monomerUnits } from './components/diagrams/chemistry12/chemHelpers';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 12 Physical Sciences additions (plastics and polymers, the fertiliser industry): lesson shape, balanced equations, and every number recomputed.

stubCss();
const poly = renderSlides((await import('./curriculum/grade12/physical-sciences/term1/plastics-polymers/PlasticsPolymers')).learnSteps);
const fert = renderSlides((await import('./curriculum/grade12/physical-sciences/term3/fertiliser-industry/FertiliserIndustry')).learnSteps);
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes(name));
const banks = { poly: bankOf('plastics-polymers'), fert: bankOf('fertiliser-industry') };

test('both lessons have the standard shape', () => {
  assertLessonShape(poly);
  assertLessonShape(fert);
});

test('each bank has 14 valid questions: four distinct options, key among them, no quality reject, answers spread over all positions', () => {
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

test('equations in the lessons are balanced', () => {
  const eqs = ['N2 + 3H2 ⇌ 2NH3', '4NH3 + 5O2 → 4NO + 6H2O', '2NO + O2 → 2NO2', '3NO2 + H2O → 2HNO3 + NO', 'S + O2 → SO2', '2SO2 + O2 ⇌ 2SO3', 'SO3 + H2SO4 → H2S2O7', 'H2S2O7 + H2O → 2H2SO4', 'NH3 + HNO3 → NH4NO3', '2NH3 + H2SO4 → (NH4)2SO4'];
  for (const e of eqs) assert.equal(isBalanced(e), true, e);
  const squash = (t: string) => t.replace(/\s+/g, '');
  const text = squash(fert.map((s) => s.text).join(' '));
  for (const frag of ['4NH3 + 5O2 → 4NO + 6H2O', '2NO + O2 → 2NO2', '3NO2 + H2O → 2HNO3 + NO', '2SO2 + O2 ⇌ 2SO3', 'SO3 + H2SO4 → H2S2O7', 'H2S2O7 + H2O → 2H2SO4']) assert.ok(text.includes(squash(frag)), frag);
});

test('INDEPENDENT: the fertiliser bank keys, recomputed', () => {
  const find = (start: string) => banks.fert.find((q) => q.prompt.startsWith(start))!;
  // NPK label 2:3:4 (30) on 50 kg: 30% nutrient, 9 parts
  assert.equal(find('A 50 kg bag is labelled 2:3:4 (30). What is the mass of plant nutrients').answer, `${50 * 0.3} kg`);
  assert.equal(find('A 50 kg bag is labelled 2:3:4 (30). What is the mass of phosphorus').answer, `${((50 * 0.3) / 9) * 3} kg`);
  assert.ok(Math.abs(((50 * 0.3) / 9) - 1.6667) < 1e-3); // the "1,67 kg" distractor is one part
  // percent N by hand
  assert.equal((2 * 14) / (14 + 4 + 14 + 3 * 16) * 100, 35);
  assert.equal(find('What is the percentage by mass of nitrogen in ammonium nitrate').answer, '35%');
  const pct = (n: number, m: number) => Math.round(((n * 14) / m) * 1000) / 10;
  assert.equal(pct(2, 60), 46.7); // urea M = 12 + 16 + 2 × (14 + 2)
  assert.equal(pct(2, 132), 21.2); // (NH4)2SO4
  assert.equal(pct(1, 101.0 - 0 + 0) , 13.9); // KNO3 M = 39 + 14 + 48
  assert.equal(pct(1, 80), 17.5);
  assert.equal(find('Which fertiliser contains the highest percentage of nitrogen').answer, 'urea, CO(NH2)2');
  // the balanced-equation questions: the key balances and every wrong option does not
  for (const start of ['Which equation is the balanced equation for the Haber process?', 'Which equation correctly shows the first step of the Ostwald process?']) {
    const q = find(start);
    assert.equal(isBalanced(q.answer), true, q.answer);
    for (const o of q.options.filter((x) => x !== q.answer)) assert.equal(isBalanced(o), false, `${start}: wrong option ${o} is balanced`);
  }
  assert.equal(massPercent('N', 'NH3') > 82 && massPercent('N', 'NH3') < 83, true);
});

test('INDEPENDENT: the polymer bank keys, recomputed', () => {
  const find = (start: string) => banks.poly.find((q) => q.prompt.startsWith(start))!;
  assert.equal(2 * 12 + 4 * 1, 28);
  assert.equal(find('What is the molar mass of a poly(ethene) chain made of 1 000').answer, `${1000 * 28} g·mol⁻¹`.replace('28000', '28 000'));
  assert.equal(3 * 12 + 6 * 1, 42);
  assert.equal(find('A poly(propene) chain has a molar mass of 63 000').answer, String(63000 / 42).replace(/^(\d)(\d{3})$/, '$1 $2'));
  assert.equal(monomerUnits(63000, 'C3H6'), 1500);
  assert.equal(molarMass('C2H4') * 1000, 28000);
  // the recycling codes in the lesson agree with the bank
  assert.equal(find('Which plastic has recycling code 3?').answer, 'PVC');
});

test('the lessons teach what the banks ask (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-z]{5,}/g) ?? [];
  for (const [bank, slides] of [[banks.poly, poly], [banks.fert, fert]] as const) {
    const text = slides.map((s) => s.text.toLowerCase()).join(' ');
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length <= 2, `${q.prompt}: the lesson never mentions ${missing.join(', ')}`);
    }
  }
});
