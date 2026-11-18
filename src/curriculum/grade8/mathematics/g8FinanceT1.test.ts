import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { mathematicsGrade8 } from './index';
import mathGr8Term1 from '../../../lib/server/caps/tasks/math-gr8-term1.json';

// Grade 8 Term 1 Maths: scientific notation, ratio and rate, percentages and financial contexts, interest/hire purchase/exchange rates.
// Worked numbers below are written out by hand (not taken from the helpers) so the slides are checked against independent arithmetic.

stubCss();
const mods = {
  sci: await import('./term1/scientific-notation/ScientificNotation'),
  ratio: await import('./term1/ratio-and-rate/RatioAndRate'),
  pct: await import('./term1/percentages-and-financial/PercentagesAndFinancial'),
  fin: await import('./term1/interest-hire-purchase-exchange/InterestHirePurchaseExchange'),
};
const sci = renderSlides(mods.sci.learnSteps);
const ratio = renderSlides(mods.ratio.learnSteps);
const pct = renderSlides(mods.pct.learnSteps);
const fin = renderSlides(mods.fin.learnSteps);
const NB = '\u00a0';
const SP = ' '; // renderSlides collapses non-breaking spaces to plain spaces

test('the four lessons are registered in Term 1 after the existing four, with task instructions', () => {
  const ids = mathematicsGrade8.terms[0].topics.map((t) => t.id);
  assert.deepEqual(ids.slice(4), ['scientific-notation', 'ratio-and-rate', 'percentages-and-financial', 'interest-hire-purchase-exchange']);
  for (const id of ids.slice(4)) assert.ok(mathGr8Term1.tasks[`gr8-${id}-t1` as keyof typeof mathGr8Term1.tasks], id);
});

test('every lesson has the standard shape and no stray backslash', () => {
  for (const s of [sci, ratio, pct, fin]) {
    assertLessonShape(s);
    for (const slide of s) assert.ok(!slide.text.includes('\\'));
  }
  assert.equal(sci.length, 5);
  assert.equal(ratio.length, 5);
  assert.equal(pct.length, 6);
  assert.equal(fin.length, 5);
});

test('scientific notation: worked numbers', () => {
  assert.match(sci[0].text, /10 2 = 10 × 10 = 100/);
  assert.match(sci[0].text, new RegExp(`1${SP}000${SP}000`));
  assert.match(sci[1].text, /25 = 2,5 × 10 1/);
  assert.match(sci[1].text, /250 = 2,5 × 10 2/);
  assert.match(sci[1].text, new RegExp(`2${SP}500 = 2,5 × 10 3`));
  assert.match(sci[2].text, /8 digits, so the exponent is 7: 2,5 × 10 7/);
  assert.match(sci[2].text, /7 digits, so the exponent is 6: 3,4 × 10 6/);
  assert.match(sci[2].text, /6 × 10 4/);
  assert.match(sci[3].text, new RegExp(`61${SP}000`));
  assert.match(sci[3].text, /4,2 × 10 5 and 9,8 × 10 4/);
  assert.match(sci[4].text, /8 × 10 3/);
  assert.match(sci[4].text, /7,3 × 10 5/);
  assert.match(sci[4].text, new RegExp(`54${SP}0{3}|540${SP}000`));
  assert.match(sci[4].text, new RegExp(`3${SP}000${SP}000`));
});

test('ratio and rate: worked numbers', () => {
  assert.match(ratio[0].text, /12 girls and 18 boys/);
  assert.match(ratio[0].text, /12 ÷ 6 = 2 and 18 ÷ 6 = 3/);
  assert.match(ratio[0].text, /simplest form the ratio is 2 : 3/);
  assert.match(ratio[0].text, /Boys to girls is 3 : 2/);
  assert.match(ratio[0].text, /1 : 4/);
  assert.match(ratio[1].text, /One part is R300 ÷ 5 = R60/);
  assert.match(ratio[1].text, /3 × R60 = R180/);
  assert.match(ratio[1].text, /2 × R60 = R120/);
  assert.match(ratio[1].text, /R300 ÷ 2 = R150/);
  assert.match(ratio[2].text, /12 ÷ 3 = 4/);
  assert.match(ratio[2].text, /5 × 4 = 20/);
  assert.match(ratio[2].text, /3 × 4 = 12/);
  assert.match(ratio[3].text, /240 ÷ 3 = 80 km\/h/);
  assert.match(ratio[3].text, /80 × 4 = 320 km/);
  assert.match(ratio[3].text, /300 ÷ 60 = 5 hours/);
  assert.match(ratio[3].text, /R22 per kg/);
  assert.match(ratio[3].text, /R25 per kg/);
  assert.match(ratio[3].text, /R6 each/);
  assert.match(ratio[4].text, /2 : 3/);
  assert.match(ratio[4].text, /One part is 56 ÷ 7 = 8. The shares are 24 and 32/);
  assert.match(ratio[4].text, /7 × 5 = 35/);
  assert.match(ratio[4].text, /150 ÷ 3 = 50 km\/h/);
});

test('percentages and financial: worked numbers (rands with a decimal comma)', () => {
  assert.match(pct[0].text, /R20,00/);
  assert.match(pct[0].text, /R230,00/);
  assert.match(pct[0].text, /R170,00/);
  assert.match(pct[1].text, /R30,00/);
  assert.match(pct[1].text, /20%/);
  assert.match(pct[1].text, /R36,00/);
  assert.match(pct[2].text, /R80,00/);
  assert.match(pct[2].text, /R320,00/);
  assert.match(pct[3].text, /VAT = 15% of R200,00 = R30,00/);
  assert.match(pct[3].text, /R230,00/);
  assert.match(pct[3].text, /R500,00 before VAT/);
  assert.match(pct[3].text, /R86,25/);
  assert.match(pct[3].text, /R488,75/);
  assert.match(pct[4].text, /R2 100,00|R2\s100,00/);
  assert.match(pct[4].text, /R900,00/);
  assert.match(pct[5].text, /R35,00/);
  assert.match(pct[5].text, /R450,00/);
  assert.match(pct[5].text, /R50,00/);
  assert.match(pct[5].text, /R115,00/);
  assert.match(pct[5].text, /R700,00/);
});

test('interest, hire purchase and exchange rates: worked numbers', () => {
  assert.match(fin[0].text, /R42,00/);
  assert.match(fin[0].text, /R126,00/);
  assert.match(fin[0].text, /R726,00/);
  assert.match(fin[1].text, /R400,00/);
  assert.match(fin[1].text, /R800,00/);
  assert.match(fin[1].text, new RegExp(`R5${SP}800,00`));
  assert.match(fin[2].text, new RegExp(`R3${SP}000,00`));
  assert.match(fin[2].text, new RegExp(`R3${SP}300,00`));
  assert.match(fin[2].text, /R300,00 more than the cash price/);
  assert.match(fin[3].text, new RegExp(`R900,00`));
  assert.match(fin[3].text, /\$50/);
  assert.match(fin[3].text, /\$50 is not 50 \+ 18 = 68/);
  assert.match(fin[4].text, /R100,00/);
  assert.match(fin[4].text, new RegExp(`R2${SP}120,00`));
  assert.match(fin[4].text, /R570,00/);
  assert.match(fin[4].text, /€30/);
  assert.ok(!/compound/i.test(fin.map((s) => s.text).join(' ').replace(/compound interest is Grade 9/i, '')), 'compound interest is Grade 9, not taught here');
});

for (const [name, mod] of Object.entries(mods)) {
  test(`${name}: 14 clean questions, key in all four positions, no stray backslash`, () => {
    assert.equal(mod.bank.length, 14);
    assert.equal(new Set(mod.bank.map((q) => q.prompt)).size, 14);
    const pos = [0, 0, 0, 0];
    for (const q of mod.bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.ok(q.options.includes(q.answer));
      assert.ok(!q.prompt.includes('\\') && !q.options.some((o) => o.includes('\\')) && !(q.explanation ?? '').includes('\\'));
      pos[q.options.indexOf(q.answer)]++;
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation }, { existingPrompts: mod.bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 5, JSON.stringify(pos));
  });
}

test('bank answers recomputed independently (integer cents, BigInt)', () => {
  const find = (m: { bank: { prompt: string; answer: string }[] }, start: string) => m.bank.find((q) => q.prompt.startsWith(start))!.answer;
  const rand = (c: bigint) => `R${(c / 100n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, NB)},${(c % 100n).toString().padStart(2, '0')}`;
  assert.equal(find(mods.pct, 'A book costs R230'), rand((23000n * 100n) / 115n));
  assert.equal(find(mods.pct, 'A pair of shoes costs R400'), rand(40000n + (40000n * 15n) / 100n));
  assert.equal(find(mods.pct, 'A phone costs R1'), rand(150000n - (150000n * 30n) / 100n));
  assert.equal(find(mods.fin, 'Mpho borrows'), rand(400000n + 2n * ((400000n * 10n) / 100n)));
  assert.equal(find(mods.fin, 'A TV costs R2'), rand(200n * 100n + 12n * 21000n - 250000n));
  assert.equal(find(mods.fin, 'At R19'), rand(40n * 1900n));
  assert.equal(find(mods.fin, 'The rate is R20'), `€${50000n / 2000n}`);
  assert.equal(find(mods.ratio, 'Share R450'), rand((45000n / 9n) * 5n));
  assert.equal(find(mods.ratio, 'R600 is shared'), rand((60000n / 6n) * 3n));
  assert.equal(find(mods.sci, 'Express 530'), '5,3 × 10⁵');
  assert.equal(find(mods.sci, 'Write 18'), '1,8 × 10⁷');
});
