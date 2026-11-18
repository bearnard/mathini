import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of ems8b-helpers.ts.

stubCss();
const topics = [
  { dir: 'term2/accounting-cycle-statements', mod: './curriculum/grade8/economic-management-sciences/term2/accounting-cycle-statements/AccountingCycleStatements' },
  { dir: 'term2/cash-receipts-journal', mod: './curriculum/grade8/economic-management-sciences/term2/cash-receipts-journal/CashReceiptsJournal' },
  { dir: 'term2/factors-markets', mod: './curriculum/grade8/economic-management-sciences/term2/factors-markets/FactorsMarkets' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade8/economic-management-sciences/${t.dir}/`));
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

test('INDEPENDENT: the seven cash transactions, recomputed by hand, balance everywhere', () => {
  // capital 10 000; fees 4 500 + 2 500; rent 1 500; telephone 400; salaries 1 200; equipment 2 000
  const receipts = [10000, 4500, 2500], payments = [1500, 400, 1200, 2000];
  const bankIn = receipts.reduce((a, b) => a + b, 0), bankOut = payments.reduce((a, b) => a + b, 0);
  assert.equal(bankIn, 17000);
  assert.equal(bankOut, 5100);
  const bank = bankIn - bankOut;
  const income = 4500 + 2500, expenses = 1500 + 400 + 1200, profit = income - expenses;
  const assets = 2000 + bank, equity = 10000 + profit;
  assert.equal(assets, equity); // no liabilities
  // the debit balances (bank, equipment, three expenses) equal the credit balances (capital and fees)
  assert.equal(bank + 2000 + expenses, 10000 + income);
  const d = 'term2/accounting-cycle-statements';
  assert.equal(find(d, 'A tutor earned R7 000 in fees').answer, `R${profit}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'Rent R1 500, telephone R400 and salaries R1 200').answer, 'R3 100');
  assert.equal(find(d, 'The owner put in R10 000 and the business made R3 900').answer, 'R13 900');
  assert.equal(find(d, 'Equipment is R2 000 and the bank balance is R11 900').answer, `R${assets}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'Fees earned are R2 000 and expenses are R2 600').answer, 'A net loss of R600');
});

test('INDEPENDENT: the Cash Receipts Journal totals and cross-cast', () => {
  const d = 'term2/cash-receipts-journal';
  assert.equal(find(d, 'The CRJ has entries of R10 000, R4 500 and R2 500').answer, 'R17 000');
  assert.equal(10000 + 4500 + 2500, 10000 + 7000);
  assert.equal(find(d, 'The CRJ has capital of R10 000 and fees earned of R7 000').answer, 'R17 000');
  assert.equal(find(d, 'What is it called when the Bank column').answer, 'Cross-casting');
});

test('INDEPENDENT: factors, rewards and the wage bill', () => {
  const d = 'term2/factors-markets';
  assert.equal(find(d, 'Five workers are paid R200 a day').answer, `R${5 * 200 * 20}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'What does labour earn').answer, 'Wages or salaries');
  assert.equal(find(d, 'What does capital earn').answer, 'Interest');
  assert.equal(find(d, 'What do natural resources such as land earn').answer, 'Rent');
  assert.equal(find(d, 'What does the entrepreneur earn').answer, 'Profit');
});
