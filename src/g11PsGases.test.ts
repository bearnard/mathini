import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 Physical Sciences term 2 chemistry: ideal gases, moles and concentration, stoichiometry.
// Every number in the banks is recomputed here with plain Math, independently of gas11Helpers.ts.

stubCss();
const lessons = {
  gas: renderSlides((await import('./curriculum/grade11/physical-sciences/term2/ideal-gases/IdealGases')).learnSteps),
  mol: renderSlides((await import('./curriculum/grade11/physical-sciences/term2/moles-concentration/MolesConcentration')).learnSteps),
  sto: renderSlides((await import('./curriculum/grade11/physical-sciences/term2/stoichiometry/Stoichiometry')).learnSteps),
};
const all = extractCuratedBanks();
const banks = { gas: all.filter((q) => q.file.includes('/ideal-gases/')), mol: all.filter((q) => q.file.includes('/moles-concentration/')), sto: all.filter((q) => q.file.includes('/stoichiometry/')) };
const find = (b: typeof banks.gas, start: string) => {
  const hits = b.filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};
const num = (s: string): number => Number(s.replace(/−/g, '-').replace(/[\s ]/g, '').replace(',', '.').match(/-?[\d.]+/)![0]);
const r = (x: number, d: number) => Math.round(x * 10 ** d) / 10 ** d;
const distinct = (q: { options: string[] }) => assert.equal(new Set(q.options.map(num)).size, 4, JSON.stringify(q.options));

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

test('INDEPENDENT: gas law numbers', () => {
  const R = 8.31;
  assert.equal(num(find(banks.gas, 'A fixed amount of gas at constant temperature has a volume of 2,0 dm³').answer), r((100 * 2.0) / 250, 2));
  assert.equal(num(find(banks.gas, 'A gas has a volume of 3,0 dm³ at 27 °C').answer), r((3 * (127 + 273)) / (27 + 273), 2));
  assert.equal(num(find(banks.gas, 'A fixed volume of gas at 200 kPa and 27 °C').answer), r((200 * (77 + 273)) / (27 + 273), 1));
  assert.equal(num(find(banks.gas, '4,0 dm³ of gas at 100 kPa and 300 K').answer), r((100 * 4 * 400) / (300 * 200), 2));
  assert.equal(num(find(banks.gas, 'How many moles of gas are in 2,0 dm³').answer), r((100000 * 0.002) / (R * 300), 4));
  assert.equal(num(find(banks.gas, 'What volume do 0,50 mol of gas occupy at 200 kPa').answer), r(((0.5 * R * 300) / 200000) * 1000, 2));
  assert.equal(num(find(banks.gas, 'What is the pressure of 0,25 mol of gas').answer), Math.round((0.25 * R * 300) / 0.005 / 1000));
  assert.equal(27 + 273, 300);
  for (const s of ['A fixed amount of gas at constant temperature has a volume of 2,0 dm³', 'A gas has a volume of 3,0 dm³', 'A fixed volume of gas at 200 kPa', '4,0 dm³ of gas at 100 kPa', 'How many moles of gas are in 2,0 dm³', 'What volume do 0,50 mol', 'What is the pressure of 0,25 mol']) distinct(find(banks.gas, s));
});

test('INDEPENDENT: mole and concentration numbers', () => {
  assert.equal(num(find(banks.mol, 'How many moles are in 36 g of water').answer), 36 / 18);
  assert.equal(num(find(banks.mol, 'What is the mass of 0,25 mol of CO₂').answer), 0.25 * 44);
  assert.equal(num(find(banks.mol, 'What volume do 0,50 mol of any gas').answer), 0.5 * 22.4);
  assert.equal(num(find(banks.mol, 'How many moles of gas are in 5,6 dm³').answer), 5.6 / 22.4);
  assert.equal(num(find(banks.mol, 'What is the concentration of a solution that contains 0,10 mol').answer), 0.1 / 0.5);
  assert.equal(num(find(banks.mol, 'What mass of NaOH').answer), r(0.4 * 0.25 * 40, 1));
  assert.equal(num(find(banks.mol, 'How many moles of NaCl are in 250 cm³').answer), 0.5 * 0.25);
  assert.equal(num(find(banks.mol, 'What is the percentage by mass of oxygen').answer), r((16 / 18) * 100, 1));
  assert.equal(num(find(banks.mol, '2H₂ + O₂ → 2H₂O. What volume of O₂').answer), 10 / 2);
  // empirical formula: 85,7 / 12 = 7,14 and 14,3 / 1 = 14,3: ratio 1 : 2; CH2 = 14 and 56 / 14 = 4
  assert.ok(Math.abs(14.3 / 1 / (85.7 / 12) - 2) < 0.01);
  assert.equal(56 / 14, 4);
  assert.equal(find(banks.mol, 'A hydrocarbon contains 85,7% C').answer, 'CH₂');
  assert.equal(find(banks.mol, 'A hydrocarbon has the empirical formula CH₂ and a molar mass of 56').answer, 'C₄H₈');
  for (const s of ['How many moles are in 36 g of water', 'What is the mass of 0,25 mol of CO₂', 'What volume do 0,50 mol of any gas', 'How many moles of gas are in 5,6 dm³', 'What is the concentration of a solution that contains 0,10 mol', 'What mass of NaOH', 'How many moles of NaCl are in 250 cm³', 'What is the percentage by mass of oxygen', '2H₂ + O₂ → 2H₂O. What volume of O₂']) distinct(find(banks.mol, s));
});

test('INDEPENDENT: stoichiometry numbers', () => {
  const nMg = 6 / 24;
  assert.equal(num(find(banks.sto, '2Mg + O₂ → 2MgO. What mass of MgO forms').answer), nMg * 40);
  assert.equal(num(find(banks.sto, 'N₂ + 3H₂ → 2NH₃. How many moles of H₂ react').answer), 3 * 2.0);
  assert.equal(num(find(banks.sto, 'N₂ + 3H₂ → 2NH₃. How many moles of NH₃ form').answer), (6.0 * 2) / 3);
  // 4,0 g H2 = 2,0 mol; 8,0 g O2 = 0,25 mol: O2 limiting, 0,50 mol H2O = 9,0 g, 1,5 mol H2 left = 3,0 g
  const nH2 = 4 / 2, nO2 = 8 / 32;
  assert.ok(nO2 / 1 < nH2 / 2);
  assert.equal(find(banks.sto, '2H₂ + O₂ → 2H₂O. 4,0 g of H₂ reacts with 8,0 g of O₂. Which').answer, 'O₂');
  assert.equal(num(find(banks.sto, '2H₂ + O₂ → 2H₂O. 4,0 g of H₂ reacts with 8,0 g of O₂. What mass of water').answer), nO2 * 2 * 18);
  assert.equal(num(find(banks.sto, '2H₂ + O₂ → 2H₂O. 4,0 g of H₂ reacts with 8,0 g of O₂. What mass of H₂').answer), (nH2 - nO2 * 2) * 2);
  assert.equal(find(banks.sto, '2Mg + O₂ → 2MgO. 0,20 mol of Mg').answer, 'Mg');
  assert.equal(num(find(banks.sto, 'The theoretical yield of a product is 9,0 g').answer), (7.2 / 9.0) * 100);
  assert.equal(num(find(banks.sto, 'CaCO₃ → CaO + CO₂. Heating a sample').answer), 0.08 * 100);
  assert.equal(num(find(banks.sto, 'A 10,0 g sample of sea shells').answer), (8.0 / 10.0) * 100);
  assert.equal(3.52 / 44, 0.08);
  for (const s of ['2Mg + O₂ → 2MgO. What mass of MgO forms', 'N₂ + 3H₂ → 2NH₃. How many moles of H₂ react', 'N₂ + 3H₂ → 2NH₃. How many moles of NH₃ form', '2H₂ + O₂ → 2H₂O. 4,0 g of H₂ reacts with 8,0 g of O₂. What mass of water', '2H₂ + O₂ → 2H₂O. 4,0 g of H₂ reacts with 8,0 g of O₂. What mass of H₂', 'The theoretical yield of a product is 9,0 g', 'CaCO₃ → CaO + CO₂. Heating a sample']) distinct(find(banks.sto, s));
});

test('the lessons teach what the banks ask (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
  for (const [bank, slides] of [[banks.gas, lessons.gas], [banks.mol, lessons.mol], [banks.sto, lessons.sto]] as const) {
    const text = slides.map((s) => s.text).join(' ').toLowerCase();
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  }
});
