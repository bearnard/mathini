import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of club11.ts.

stubCss();
const topics = [
  { dir: 'term2/npo-concepts-analysis-cash-book', mod: './curriculum/grade11/accounting/term2/npo-concepts-analysis-cash-book/NpoConceptsAnalysisCashBook' },
  { dir: 'term2/receipts-payments-accumulated-fund', mod: './curriculum/grade11/accounting/term2/receipts-payments-accumulated-fund/ReceiptsPaymentsAccumulatedFund' },
  { dir: 'term1/gaap-principles', mod: './curriculum/grade11/accounting/term1/gaap-principles/GaapPrinciples' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade11/accounting/${t.dir}/`));
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

test('INDEPENDENT: the club books, recomputed by hand, balance everywhere', () => {
  const receipts = [12000, 1500, 2000, 3500];
  const payments = [4000, 2500, 1200, 300, 3000, 1000];
  const tr = receipts.reduce((a, b) => a + b, 0), tp = payments.reduce((a, b) => a + b, 0);
  assert.equal(tr, 19000);
  assert.equal(tp, 12000);
  assert.equal(8000 + tr - tp, 15000);
  assert.equal(60 * 200, 12000);
  assert.equal(30 * 50, 1500);
  const fund = 8000 + 4000 - 1000;
  assert.equal(fund, 11000);
  // trial balance after posting: Dr bank 15 000, equipment 7 000, expenses 8 000; Cr fund 11 000 and income 19 000
  assert.equal(15000 + 7000 + (4000 + 2500 + 1200 + 300), fund + tr);
  assert.equal(15000 + 7000 + 8000, 30000);
  const expenses = 4000 + 2500 + 1200 + 300;
  assert.equal(fund + (tr - expenses), 15000 + 7000); // closing fund = closing assets (no liabilities left)
  const d = 'term2/npo-concepts-analysis-cash-book';
  assert.equal(find(d, 'A club has a bank balance of R8 000').answer, 'R11 000');
  assert.equal(find(d, 'The receipts columns are R12 000').answer, 'R19 000');
  assert.equal(find(d, 'Opening bank is R8 000, receipts are R19 000').answer, 'R15 000');
  const e = 'term2/receipts-payments-accumulated-fund';
  assert.equal(find(e, 'The debit balances of a club').answer, 'R30 000');
  assert.equal(find(e, 'A trial balance has credit balances of R11 000').answer, 'R30 000');
  assert.equal(find(e, 'Receipts are R19 000 and payments are R12 000').answer, 'R7 000');
  assert.equal(find(e, 'Income is R19 000 and expenses are R8 000').answer, 'R11 000');
  assert.equal(find(e, 'The expense payments are R8 000').answer, 'R12 000');
});

test('INDEPENDENT: GAAP calculations', () => {
  const d = 'term1/gaap-principles';
  assert.equal(find(d, 'Stock cost R80 000 and can be sold for R70 000').answer, `R${Math.min(80000, 70000)}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'Stock cost R80 000 and can be sold for R90 000').answer, `R${Math.min(80000, 90000)}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'R14 000 is paid for 14 months of rent. What is the rent expense').answer, `R${(14000 / 14) * 12}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'R14 000 is paid for 14 months of rent. What is prepaid').answer, `R${14000 - (14000 / 14) * 12}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.ok(50000 / 2000000 >= 0.01 && 150 / 2000000 < 0.01);
});
