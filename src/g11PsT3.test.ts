import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 Physical Sciences term 3: electromagnetism, energy and chemical change, acid-base reactions.
// The numbers and the rules in the banks are recomputed here independently of em11Helpers.ts.

stubCss();
const lessons = {
  em: renderSlides((await import('./curriculum/grade11/physical-sciences/term3/electromagnetism/Electromagnetism')).learnSteps),
  en: renderSlides((await import('./curriculum/grade11/physical-sciences/term3/energy-chemical-change/EnergyChemicalChange')).learnSteps),
  ab: renderSlides((await import('./curriculum/grade11/physical-sciences/term3/acid-base-reactions/AcidBaseReactions')).learnSteps),
};
const all = extractCuratedBanks();
const banks = { em: all.filter((q) => q.file.includes('/electromagnetism/')), en: all.filter((q) => q.file.includes('/energy-chemical-change/')), ab: all.filter((q) => q.file.includes('/acid-base-reactions/')) };
const find = (b: typeof banks.em, start: string) => {
  const hits = b.filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};
const num = (s: string): number => Number(s.replace(/−/g, '-').replace(/[\s ]/g, '').replace(',', '.').match(/-?[\d.]+/)![0]);

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

test('INDEPENDENT: flux numbers and the Lenz / Right Hand rules', () => {
  const f = (B: number, A: number, t: number) => B * A * Math.cos((t * Math.PI) / 180);
  assert.equal(num(find(banks.em, 'A loop of area 0,50 m² is in a magnetic field of 0,20 T and the field is along').answer), Math.round(f(0.2, 0.5, 0) * 1000) / 1000);
  assert.equal(num(find(banks.em, 'A loop of area 0,50 m² is in a magnetic field of 0,20 T and θ = 60°').answer), Math.round(f(0.2, 0.5, 60) * 1000) / 1000);
  assert.ok(Math.abs(f(0.2, 0.5, 90)) < 1e-12);
  for (const s of ['A loop of area 0,50 m² is in a magnetic field of 0,20 T and the field is along', 'A loop of area 0,50 m² is in a magnetic field of 0,20 T and θ = 60°']) {
    const q = find(banks.em, s);
    assert.equal(new Set(q.options.map(num)).size, 4, q.prompt);
  }
  // the rules (written out by hand): a pushed-in pole is repelled by the same pole; a pulled-out pole is attracted by the opposite one
  assert.equal(find(banks.em, 'The north pole of a magnet is pushed into a solenoid').answer, 'A north pole');
  assert.match(find(banks.em, 'The north pole of a magnet is pulled out of a solenoid').answer, /south pole and attracts/);
  assert.equal(find(banks.em, 'A current flows out of the page').answer, 'Anticlockwise');
  assert.equal(find(banks.em, 'A magnet is pushed into a solenoid twice as fast').answer, 'It becomes twice as big');
  assert.equal(find(banks.em, 'The magnetic field lies along the surface').answer, 'Zero');
});

test('INDEPENDENT: energy numbers', () => {
  assert.equal(num(find(banks.en, 'A reaction goes from reactants at 50').answer), 20 - 50);
  assert.equal(num(find(banks.en, 'The energy of the reactants is 20').answer), 50 - 20);
  assert.equal(num(find(banks.en, 'On an energy graph the reactants are at 50').answer), 90 - 50);
  assert.equal(num(find(banks.en, 'On an energy graph the products are at 20').answer), 90 - 20);
  assert.equal(find(banks.en, 'What is the sign of ΔH for an endothermic').answer, 'Positive');
  assert.equal(find(banks.en, 'What is the sign of ΔH for an exothermic').answer, 'Negative');
  for (const s of ['A reaction goes from reactants at 50', 'The energy of the reactants is 20', 'On an energy graph the reactants are at 50', 'On an energy graph the products are at 20']) {
    const q = find(banks.en, s);
    assert.equal(new Set(q.options.map(num)).size, 4, q.prompt);
  }
});

test('INDEPENDENT: acid-base facts and equations', () => {
  const atoms = (side: string): Record<string, number> => {
    const out: Record<string, number> = {};
    for (const term of side.split('+').map((t) => t.trim())) {
      const m = term.match(/^(\d*)(.+)$/)!;
      const coef = m[1] ? Number(m[1]) : 1;
      const walk = (f: string, mult: number) => {
        const re = /([A-Z][a-z]?)(\d*)|\(([^)]+)\)(\d*)/g;
        let x: RegExpExecArray | null;
        while ((x = re.exec(f))) {
          if (x[3]) walk(x[3], mult * (x[4] ? Number(x[4]) : 1));
          else out[x[1]] = (out[x[1]] ?? 0) + mult * (x[2] ? Number(x[2]) : 1);
        }
      };
      walk(m[2], coef);
    }
    return out;
  };
  for (const eq of ['HCl + NaOH = NaCl + H2O', 'H2SO4 + 2NaOH = Na2SO4 + 2H2O', 'CuO + H2SO4 = CuSO4 + H2O', 'CaCO3 + 2HCl = CaCl2 + H2O + CO2']) {
    const [l, r] = eq.split(' = ');
    assert.deepEqual(atoms(l), atoms(r), eq);
  }
  assert.equal(find(banks.ab, 'How many moles of NaOH react with one mole of H₂SO₄').answer, '2');
  assert.equal(find(banks.ab, 'What gas is given off when an acid reacts with a metal carbonate').answer, 'Carbon dioxide');
  assert.equal(find(banks.ab, 'In HCl + H₂O → H₃O⁺ + Cl⁻, which substance is the acid').answer, 'HCl');
  assert.equal(find(banks.ab, 'What is the conjugate base of HCl').answer, 'Cl⁻');
  assert.equal(find(banks.ab, 'In H₂O + NH₃ ⇌ OH⁻ + NH₄⁺, what is the conjugate acid of NH₃').answer, 'NH₄⁺');
});

test('the lessons teach what the banks ask (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
  for (const [bank, slides] of [[banks.em, lessons.em], [banks.en, lessons.en], [banks.ab, lessons.ab]] as const) {
    const text = slides.map((s) => s.text).join(' ').toLowerCase();
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  }
});
