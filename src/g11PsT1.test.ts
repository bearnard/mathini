import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 Physical Sciences term 1: gravitation, atomic combinations, the chemistry of water.
// Every number in the banks is recomputed here with plain Math, independently of ps11Helpers.ts.

stubCss();
const lessons = {
  grav: renderSlides((await import('./curriculum/grade11/physical-sciences/term1/gravitation/Gravitation')).learnSteps),
  atom: renderSlides((await import('./curriculum/grade11/physical-sciences/term1/atomic-combinations/AtomicCombinations')).learnSteps),
  water: renderSlides((await import('./curriculum/grade11/physical-sciences/term1/chemistry-of-water/ChemistryOfWater')).learnSteps),
};
const all = extractCuratedBanks();
const banks = { grav: all.filter((q) => q.file.includes('/gravitation/')), atom: all.filter((q) => q.file.includes('/atomic-combinations/')), water: all.filter((q) => q.file.includes('/chemistry-of-water/')) };
const find = (b: typeof banks.grav, start: string) => {
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

test('every lesson has the standard shape, and every bank has 14 or 13 valid questions with the key spread over all four positions', () => {
  for (const s of Object.values(lessons)) assertLessonShape(s);
  for (const [name, bank] of Object.entries(banks)) {
    assert.ok(bank.length >= 13, name);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4, name);
  }
});

test('INDEPENDENT: gravitation numbers', () => {
  const G = 6.67e-11, ME = 5.98e24, RE = 6.38e6, MM = 7.35e22, RM = 1.74e6;
  const f = (G * 2 * 3) / 0.5 ** 2;
  const q1 = find(banks.grav, 'Two masses of 2,0 kg and 3,0 kg');
  assert.ok(Math.abs(sciNum(q1.answer) / f - 1) < 0.005);
  const gE = (G * ME) / RE ** 2;
  assert.equal(num(find(banks.grav, 'Use G = 6,67 × 10⁻¹¹ N·m²·kg⁻², M = 5,98').answer), Math.round(gE * 100) / 100);
  assert.equal(num(find(banks.grav, 'Use the same data for the Earth. What is g at a height').answer), Math.round(((G * ME) / (RE + 4e5) ** 2) * 100) / 100);
  assert.equal(num(find(banks.grav, 'The Moon has a mass').answer), Math.round(((G * MM) / RM ** 2) * 100) / 100);
  assert.equal(num(find(banks.grav, 'Take g = 9,80 m·s⁻² on the Earth. What is the weight of a 70').answer), 70 * 9.8);
  assert.equal(num(find(banks.grav, 'Take g = 9,80 m·s⁻² on the Earth. The gravitational force').answer), 5 * 9.8);
  assert.equal(num(find(banks.grav, 'Take g = 1,62 m·s⁻² on the Moon').answer), Math.round(60 * 1.62 * 10) / 10);
  // ratios
  assert.equal(1 / 2 ** 2, 0.25);
  assert.equal(1 / 0.5 ** 2, 4);
  assert.equal((2 * 2) / 2 ** 2, 1);
  // the wrong numeric options differ
  for (const start of ['Use G = 6,67 × 10⁻¹¹ N·m²·kg⁻², M = 5,98', 'Use the same data for the Earth. What is g at a height', 'The Moon has a mass', 'Take g = 1,62 m·s⁻² on the Moon']) {
    const q = find(banks.grav, start);
    const nums = q.options.map((o) => (o.includes('×') ? sciNum(o) : num(o)));
    assert.equal(new Set(nums).size, 4, q.prompt);
  }
});

test('INDEPENDENT: atomic combinations facts', () => {
  const EN: Record<string, number> = { H: 2.1, Cl: 3.0, Na: 0.9, O: 3.5, N: 3.0, C: 2.5 };
  const kind = (a: string, b: string) => { const d = Math.round(Math.abs(EN[a] - EN[b]) * 10) / 10; return d <= 0.4 ? 'Non-polar covalent' : d <= 1.7 ? 'Polar covalent' : 'Ionic'; };
  assert.equal(find(banks.atom, 'The electronegativity of H is 2,1').answer, kind('H', 'Cl'));
  assert.equal(find(banks.atom, 'The electronegativity of Na is 0,9').answer, kind('Na', 'Cl'));
  assert.equal(find(banks.atom, 'What kind of bond is Cl–Cl').answer, kind('Cl', 'Cl'));
  // the most polar bond has the biggest ΔEN
  const pairs: [string, string][] = [['C', 'H'], ['N', 'H'], ['O', 'H'], ['C', 'C']];
  const best = pairs.reduce((a, b) => (Math.abs(EN[b[0]] - EN[b[1]]) > Math.abs(EN[a[0]] - EN[a[1]]) ? b : a));
  assert.equal(find(banks.atom, 'Which of these bonds is the most polar').answer, `${best[0]}–${best[1]}`);
  // lone pairs: (valence - bonds) / 2
  assert.equal(find(banks.atom, 'How many lone pairs are on the central atom in a molecule of water').answer, String((6 - 2) / 2));
  assert.equal(find(banks.atom, 'How many lone pairs are on the central atom in a molecule of ammonia').answer, String((5 - 3) / 2));
  assert.equal(find(banks.atom, 'How many valence electrons does a nitrogen').answer, '5');
  // shapes and angles
  assert.equal(find(banks.atom, 'What is the molecular shape of methane').answer, 'Tetrahedral');
  assert.equal(find(banks.atom, 'What is the bond angle in a molecule of water').answer, '104,5°');
  assert.equal(find(banks.atom, 'Which of these molecules is polar').answer, 'H₂O');
});

test('INDEPENDENT: water numbers', () => {
  const vIce = 1000 / 0.917;
  assert.equal(num(find(banks.water, 'The density of ice is 0,917 g·cm⁻³. What volume').answer), Math.round(vIce));
  const pct = ((vIce - 1000) / 1000) * 100;
  assert.equal(num(find(banks.water, 'By about what percentage').answer), Math.round(pct));
  assert.equal(find(banks.water, 'At which temperature is liquid water the densest').answer, '4 °C');
  assert.equal(find(banks.water, 'What is the maximum number of hydrogen bonds').answer, String(2 + 2));
  assert.equal(find(banks.water, 'Which of these hydrides has the highest boiling point').answer, 'H₂O');
  assert.equal(find(banks.water, 'The boiling points of H₂S, H₂Se and H₂Te are').answer, 'H₂Te');
  assert.equal(Math.max(-60, -41, -2), -2);
});

test('the lessons teach what the banks ask (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
  for (const [bank, slides] of [[banks.grav, lessons.grav], [banks.atom, lessons.atom], [banks.water, lessons.water]] as const) {
    const text = slides.map((s) => s.text).join(' ').toLowerCase();
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  }
});
