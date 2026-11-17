import test from 'node:test';
import assert from 'node:assert/strict';
import { controlBalance, creditorsLedger, creditorsPostings, debtorsLedger, debtorsPostings, postTransactions, reconciles, trialBalance, type Entry } from './ems9c-helpers';

const e = (date: string, name: string, ref: string, amount: number): Entry => ({ date, name, ref, amount });
const DJ = [e('2 Mar', 'Dlamini', 'INV01', 1200), e('5 Mar', 'Naidoo', 'INV02', 850), e('9 Mar', 'Dlamini', 'INV03', 400), e('12 Mar', 'Pillay', 'INV04', 1500)];
const DAJ = [e('10 Mar', 'Naidoo', 'CN01', 50)];
const CRJ = [e('20 Mar', 'Dlamini', 'R01', 1000), e('22 Mar', 'Naidoo', 'R02', 800)];

test('the debtors ledger: one account per debtor, and the debtors list agrees with the control account', () => {
  const ledger = debtorsLedger(DJ, DAJ, CRJ);
  assert.deepEqual(ledger.map((a) => [a.name, a.balance]), [['Dlamini', 600], ['Naidoo', 0], ['Pillay', 1500]]);
  const posts = debtorsPostings(DJ, DAJ, CRJ);
  assert.deepEqual(posts.map((p) => p.amount), [3950, 50, 1800]);
  const control = controlBalance(posts, 'Debtors control');
  assert.deepEqual(control, { balance: 2100, side: 'debit' });
  assert.equal(reconciles(ledger, control.balance), true);
  assert.equal(reconciles(ledger, control.balance + 10), false);
});

test('the general ledger from the journal totals balances (trial balance Dr = Cr)', () => {
  const tb = trialBalance(postTransactions(debtorsPostings(DJ, DAJ, CRJ)));
  assert.equal(tb.balanced, true);
  assert.equal(tb.totalDebit, tb.totalCredit);
  assert.deepEqual(tb.rows.map((r) => r.name), ['Debtors control', 'Sales', 'Debtors allowances', 'Bank']);
});

test('creditors mirror the debtors: purchases are credits, allowances and payments are debits', () => {
  const CJ = [e('3 Mar', 'Mokoena Wholesalers', 'S101', 2400), e('8 Mar', 'Fresh Farms', 'S102', 900)];
  const CAJ = [e('11 Mar', 'Mokoena Wholesalers', 'CN7', 100)];
  const CPJ = [e('25 Mar', 'Mokoena Wholesalers', 'EFT1', 2000)];
  const ledger = creditorsLedger(CJ, CAJ, CPJ);
  assert.deepEqual(ledger.map((a) => [a.name, a.balance]), [['Mokoena Wholesalers', 300], ['Fresh Farms', 900]]);
  const posts = creditorsPostings(CJ, CAJ, CPJ);
  assert.deepEqual(posts.map((p) => p.amount), [3300, 100, 2000]);
  const control = controlBalance(posts, 'Creditors control');
  assert.deepEqual(control, { balance: 1200, side: 'credit' });
  assert.equal(reconciles(ledger, control.balance), true);
  assert.equal(trialBalance(postTransactions(posts)).balanced, true);
});
