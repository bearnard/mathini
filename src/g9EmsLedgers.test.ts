import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { controlBalance, creditorsLedger, creditorsPostings, debtorsLedger, debtorsPostings, partyAccount, postTransactions, reconciles, trialBalance } from './components/diagrams/ems/ems9c-helpers';
import { grade9 } from './curriculum/grade9';

// Grade 9 EMS ledger lessons (term 3 debtors ledger, creditors journals; term 4 cash and credit with the trial balance): shape, bank quality, and every journal,
// ledger and trial balance recomputed so that it balances and every amount in the bank is what the books give.

stubCss();
const debtors = await import('./curriculum/grade9/economic-management-sciences/term3/debtors-ledger/Slides');
const creditors = await import('./curriculum/grade9/economic-management-sciences/term3/creditors-journals/Slides');
const cash = await import('./curriculum/grade9/economic-management-sciences/term4/cash-credit-trial-balance/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/\s+/g, ' ')).join(' ');
const LESSONS = { 'debtors-ledger': debtors, 'creditors-journals': creditors, 'cash-credit-trial-balance': cash } as const;
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes(name));
const find = (name: string, start: string) => { const hits = bankOf(name).filter((q) => q.prompt.includes(start)); assert.equal(hits.length, 1, start); return hits[0]; };

test('the three lessons are registered (Terms 3 and 4, after the existing ones) with a task instruction each', async () => {
  const ems = grade9.subjects.find((s) => s.id === 'ems')!;
  const ids = (t: number) => ems.terms.find((x) => x.id === t)!.topics.map((p) => p.id);
  assert.ok(ids(3).includes('gr9-debtors-ledger-t3') && ids(3).includes('gr9-creditors-journals-t3'));
  assert.ok(ids(4).includes('gr9-cash-credit-trial-balance-t4'));
  assert.equal(ids(3)[0], 'gr9-business-plans-functions');
  const fs = await import('node:fs');
  for (const [file, id] of [['term3', 'gr9-debtors-ledger-t3'], ['term3', 'gr9-creditors-journals-t3'], ['term4', 'gr9-cash-credit-trial-balance-t4']]) {
    assert.ok(id in JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/ems-gr9-${file}.json`, 'utf8')).tasks, id);
  }
});

for (const [name, mod] of Object.entries(LESSONS)) {
  test(`${name}: 4 to 6 slides with the standard blocks and a described picture, final Check yourself, 14 clean questions in all four positions`, () => {
    const steps = mod.learnSteps;
    assert.ok(steps.length >= 4 && steps.length <= 6);
    assert.equal(steps.at(-1)!.title, 'Check yourself');
    for (const s of steps.slice(0, -1)) {
      const h = html(s);
      assert.match(h, /The rule/); assert.match(h, /Worked example/); assert.match(h, /Common mistake/); assert.match(h, /aria-label="[^"]+"/, `${s.title}: picture`);
    }
    assert.match(html(steps.at(-1)!), /<details/);
    const bank = bankOf(name);
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });
}

test('DEBTORS: the journals, the ledger and the general ledger agree, and the bank amounts are what the books give', () => {
  const { DJ, DAJ, CRJ } = debtors;
  const ledger = debtorsLedger(DJ, DAJ, CRJ);
  const posts = debtorsPostings(DJ, DAJ, CRJ);
  assert.deepEqual(ledger.map((a) => [a.name, a.balance]), [['Dlamini', 600], ['Naidoo', 0], ['Pillay', 1500]]);
  assert.deepEqual(posts.map((p) => p.amount), [3950, 50, 1800]);
  const control = controlBalance(posts, 'Debtors control');
  assert.deepEqual(control, { balance: 2100, side: 'debit' });
  assert.equal(reconciles(ledger, control.balance), true);
  const tb = trialBalance(postTransactions(posts));
  assert.equal(tb.balanced, true);
  assert.equal(tb.totalDebit, 3950);
  const d = partyAccount(ledger[0], 'debtor');
  assert.deepEqual([d.totalDebit, d.totalCredit, d.balance, d.side], [1600, 1000, 600, 'debit']);
  assert.equal(find('debtors-ledger', 'debit entries of R1 200 and R400').answer, 'R1 600');
  assert.equal(find('debtors-ledger', 'debits of R1 200 and R400 and a credit of R1 000').answer, 'R600 debit');
  assert.equal(find('debtors-ledger', 'Naidoo\'s account has a debit of R850').answer, 'R0');
  assert.equal(find('debtors-ledger', 'What should the Debtors control account show').answer, 'R2 100 debit');
  assert.equal(find('debtors-ledger', 'DJ R3 950, DAJ R50 and CRJ R1 800').answer, 'R2 100');
  assert.equal(find('debtors-ledger', 'total of the debit column').answer, 'R3 950');
  // a posting error of 450 (R1 500 posted as R1 050) gives the difference in the question
  const wrong = [...DJ.slice(0, 3), { ...DJ[3], amount: 1050 }];
  const wrongList = debtorsLedger(wrong, DAJ, CRJ).reduce((t, a) => t + a.balance, 0);
  assert.equal(wrongList, 1650);
  assert.equal(2100 - wrongList, 450);
  assert.equal(find('debtors-ledger', 'totals R1 650').answer, 'R450');
  const t = text(debtors.learnSteps);
  for (const frag of ['R3 950', 'R2 100', 'R1 600', 'R600', 'R1 650']) assert.ok(t.includes(frag), frag);
});

test('CREDITORS: the journals, the ledger and the general ledger agree, and the bank amounts are what the books give', () => {
  const { CJ, CAJ, CPJ } = creditors;
  const ledger = creditorsLedger(CJ, CAJ, CPJ);
  const posts = creditorsPostings(CJ, CAJ, CPJ);
  assert.deepEqual(ledger.map((a) => [a.name, a.balance]), [['Mokoena Wholesalers', 300], ['Fresh Farms', 0], ['Naidoo Packaging', 750]]);
  assert.deepEqual(posts.map((p) => p.amount), [4050, 100, 2900]);
  const control = controlBalance(posts, 'Creditors control');
  assert.deepEqual(control, { balance: 1050, side: 'credit' });
  assert.equal(reconciles(ledger, control.balance), true);
  const tb = trialBalance(postTransactions(posts));
  assert.equal(tb.balanced, true);
  assert.deepEqual([tb.totalDebit, tb.totalCredit], [4050, 4050]);
  const m = partyAccount(ledger[0], 'creditor');
  assert.deepEqual([m.totalDebit, m.totalCredit, m.balance, m.side], [2100, 2400, 300, 'credit']);
  assert.equal(find('creditors-journals', 'purchases of R2 400, R900 and R750').answer, 'Credit R4 050');
  assert.equal(find('creditors-journals', 'Mokoena Wholesalers sold goods of R2 400').answer, 'R300');
  assert.equal(find('creditors-journals', 'Fresh Farms sold goods of R900').answer, 'A balance of R0');
  assert.equal(find('creditors-journals', 'What should Creditors control show').answer, 'R1 050 credit');
  assert.equal(find('creditors-journals', 'CJ R4 050, CAJ R100 and CPJ R2 900').answer, 'R1 050');
  assert.equal(find('creditors-journals', 'total of the debit column').answer, 'R4 050');
  const t = text(creditors.learnSteps);
  for (const frag of ['R4 050', 'R1 050', 'R300', 'R2 900']) assert.ok(t.includes(frag), frag);
});

test('CASH AND CREDIT: every transaction has equal debits and credits, the balances are right and the trial balance balances', () => {
  const acc = (n: string) => cash.accounts.find((a) => a.name === n)!;
  assert.deepEqual([acc('Bank').balance, acc('Bank').side], [23200, 'debit']);
  assert.deepEqual([acc('Debtors control').balance, acc('Debtors control').side], [4000, 'debit']);
  assert.deepEqual([acc('Creditors control').balance, acc('Creditors control').side], [3500, 'credit']);
  assert.deepEqual([acc('Sales').balance, acc('Sales').side], [11500, 'credit']);
  assert.deepEqual([acc('Capital').balance, acc('Rent').balance, acc('Purchases').balance], [20000, 1800, 6000]);
  assert.equal(cash.tb.balanced, true);
  assert.deepEqual([cash.tb.totalDebit, cash.tb.totalCredit], [35000, 35000]);
  // the sum of all debits posted equals the sum of all credits posted (double entry)
  assert.equal(cash.accounts.reduce((t, a) => t + a.totalDebit, 0), cash.accounts.reduce((t, a) => t + a.totalCredit, 0));
  assert.equal(find('cash-credit-trial-balance', 'What is the balance of Bank').answer, 'R23 200 debit');
  assert.equal(find('cash-credit-trial-balance', 'Debtors control is debited R7 000').answer, 'R4 000 debit');
  assert.equal(find('cash-credit-trial-balance', 'Creditors control is credited R6 000').answer, 'R3 500 credit');
  assert.equal(find('cash-credit-trial-balance', 'What is the balance of Sales').answer, 'R11 500 credit');
  assert.equal(find('cash-credit-trial-balance', 'total of the debit column?').answer, 'R35 000');
  assert.ok(find('cash-credit-trial-balance', 'total of the credit column').answer.startsWith('R35 000'));
  const t = text(cash.learnSteps);
  for (const frag of ['R23 200', 'R4 000', 'R3 500', 'R11 500', 'R35 000']) assert.ok(t.includes(frag), frag);
});
