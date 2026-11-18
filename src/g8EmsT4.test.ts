import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of ems8d-helpers.ts.

stubCss();
const topics = [
  { dir: 'term4/levels-functions-management', mod: './curriculum/grade8/economic-management-sciences/term4/levels-functions-management/LevelsFunctionsManagement' },
  { dir: 'term4/general-ledger-trial-balance', mod: './curriculum/grade8/economic-management-sciences/term4/general-ledger-trial-balance/GeneralLedgerTrialBalance' },
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

test('INDEPENDENT: management (plain arithmetic for the controlling example)', () => {
  const d = 'term4/levels-functions-management';
  assert.equal(find(d, 'Sales were planned at R10 000').answer, `R${10000 - 8500} below the plan`.replace(/(\d)(?=(\d{3}) )/, '$1 '));
  assert.equal(10000 - 8500, 1500);
  assert.equal(find(d, 'A manager makes all the decisions').answer, 'Autocratic');
  assert.equal(find(d, 'A manager asks the workers for ideas').answer, 'Democratic');
  assert.equal(find(d, 'A manager gives skilled workers almost complete freedom').answer, 'Laissez-faire');
  assert.equal(find(d, 'Which management task is checking results').answer, 'Controlling');
});

test('INDEPENDENT: the ledger and trial balance of the seven transactions, recomputed by hand', () => {
  const d = 'term4/general-ledger-trial-balance';
  const bankDebits = [10000, 4500, 2500], bankCredits = [1500, 400, 1200, 2000];
  const dr = bankDebits.reduce((a, b) => a + b, 0), cr = bankCredits.reduce((a, b) => a + b, 0);
  assert.equal(dr, 17000);
  assert.equal(cr, 5100);
  assert.equal(find(d, 'The Bank account has debits of R17 000').answer, `R${dr - cr} debit`.replace(/(\d)(?=(\d{3}) )/, '$1 '));
  // trial balance: debit balances = credit balances
  const debitBalances = [dr - cr, 2000, 1500, 400, 1200], creditBalances = [10000, 4500 + 2500];
  assert.equal(debitBalances.reduce((a, b) => a + b, 0), creditBalances.reduce((a, b) => a + b, 0));
  assert.equal(find(d, 'The debit balances in a trial balance total R17 000').answer, 'R17 000');
  assert.equal(find(d, 'Capital of R10 000 goes into the business bank account. Which account is debited').answer, 'Bank');
  assert.equal(find(d, 'For that same R10 000 of capital, which account receives the credit').answer, 'Capital');
  assert.equal(find(d, 'The business pays R1 500 rent. Which account is debited').answer, 'Rent expense');
  assert.equal(find(d, 'The business pays R1 500 rent. Which account is credited').answer, 'Bank');
  assert.equal(find(d, 'Fees of R4 500 are received in the bank').answer, 'Fees earned');
});
