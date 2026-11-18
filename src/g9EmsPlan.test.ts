import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 9 EMS (CAPS terms 3 and 4): functions of a business, the business plan with SWOT, and the financial plan (break-even, mark-up on cost price, profit percentage).
// Every amount in the questions is recomputed here by hand from the formulas, not from ems9-plan.ts.

stubCss();
const base = './curriculum/grade9/economic-management-sciences';
const topics = [
  { dir: 'term3/functions-of-a-business', mod: `${base}/term3/functions-of-a-business/FunctionsOfABusiness` },
  { dir: 'term4/business-plan-swot', mod: `${base}/term4/business-plan-swot/BusinessPlanSwot` },
  { dir: 'term4/financial-plan', mod: `${base}/term4/financial-plan/FinancialPlan` },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade9/economic-management-sciences/${t.dir}/`));
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
      assert.ok(!/learners?\b|CAPS/i.test(q.prompt), `prompt does not name learners or CAPS: ${q.prompt}`);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });

  test(`${t.dir}: key words of every answer appear in the lesson`, () => {
    const words = (s: string) => s.toLowerCase().match(/[a-z]{6,}/g) ?? [];
    const text = lessons[t.dir].map((s) => s.text).join(' ').toLowerCase();
    for (const q of banks[t.dir]) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 2, `${q.prompt}: ${missing.join(', ')}`);
    }
  });
}

test('INDEPENDENT: financial plan numbers (hand calculation)', () => {
  const d = 'term4/financial-plan';
  // total costs of 100 candles: R1 800 + 100 x R18 = R3 600
  assert.equal(find(d, 'A stall has fixed costs of R1 800 and makes 100 candles').answer, `R${(1800 + 100 * 18).toLocaleString('en-ZA').replace(/ /g, ' ')}`.replace('R3 600', 'R3 600'));
  // each candle adds R30 - R18 = R12; break-even 1 800 / 12 = 150
  assert.equal(find(d, 'A candle sells for R30 and costs R18 to make').answer, `R${30 - 18}`);
  assert.equal(find(d, 'Fixed costs are R1 800, the price is R30').answer, `${1800 / (30 - 18)} candles`);
  assert.equal(find(d, 'Fixed costs are R1 000, the price is R25').answer, `${1000 / (25 - 15)} items`);
  // 1 000 / 9 = 111.1, rounded up to 112
  assert.equal(find(d, 'Fixed costs are R1 000, the price is R24').answer, `${Math.ceil(1000 / (24 - 15))} items`);
  // mark-up R65 - R50 = R15, 15 / 50 = 30%
  assert.equal(find(d, 'A shop buys a cap for R50 and sells it for R65. What is the mark-up in rand').answer, `R${65 - 50}`);
  assert.equal(find(d, 'A shop buys a cap for R50 and sells it for R65. What is the mark-up percentage').answer, `${((65 - 50) / 50) * 100}%`);
  // 50% of R60 = R30, selling price R90
  assert.equal(find(d, 'A shop buys shoes for R60').answer, `R${60 + 0.5 * 60}`);
  // profit percentage 3 000 / 20 000 = 15%
  assert.equal(find(d, 'A stall has sales of R20 000 and a profit of R3 000').answer, `${(3000 / 20000) * 100}%`);
  // 200 candles: sales 6 000, costs 1 800 + 3 600 = 5 400, profit 600
  assert.equal(find(d, 'The candle stall sells 200 candles at R30').answer, `R${200 * 30 - (1800 + 200 * 18)}`);
  const text = lessons[d].map((s) => s.text).join(' ');
  assert.ok(text.includes('R1 800 ÷ R12 = 150 candles') && text.includes('R600 ÷ R6 000 × 100 = 10%') && text.includes('R10 ÷ R40 × 100 = 25%'));
});

test('INDEPENDENT: SWOT classes, plan order and the nine functions', () => {
  const p = 'term4/business-plan-swot';
  assert.equal(find(p, 'A baker is very skilled').answer, 'A strength');
  assert.equal(find(p, 'A business has no money for advertising').answer, 'A weakness');
  assert.equal(find(p, 'A new shopping centre opens').answer, 'An opportunity');
  assert.equal(find(p, 'A rival opens a bigger shop').answer, 'A threat');
  assert.equal(find(p, 'A reader opens a business plan at its first page').answer, 'The front cover');
  assert.equal(find(p, 'Which part of a business plan comes directly after the front cover').answer, 'The table of contents');
  const text = lessons[p].map((s) => s.text).join(' ');
  for (const part of ['Front cover', 'Table of contents', 'Description of the product or service', 'Goals of the business', 'The business owner', 'Production plan', 'Marketing plan', 'Management plan', 'SWOT analysis', 'Conclusion']) assert.ok(text.includes(part), part);
  const f = lessons['term3/functions-of-a-business'].map((s) => s.text).join(' ').toLowerCase();
  for (const n of ['administration', 'purchasing', 'marketing', 'finances', 'public relations', 'human resources', 'production', 'general management', 'risk management']) assert.ok(f.includes(n), n);
  assert.equal(find('term3/functions-of-a-business', 'How many functions of a business').answer, 'Nine');
});
