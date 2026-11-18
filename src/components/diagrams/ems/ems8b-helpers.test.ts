import test from 'node:test';
import assert from 'node:assert/strict';
import { CRJ_ENTRIES, CPJ_ENTRIES, crjTotal, cpjTotal, crjColumn, cpjColumn, bankBalanceEnd, ledger, trial, incomeStatement, balanceSheet, crjEffectOnEquation, rewardFor, wageBill, FACTORS, LABOUR } from './ems8b-helpers';

test('the journals are cross-cast and the bank balance is right (hand-checked)', () => {
  assert.equal(CRJ_ENTRIES.length, 3);
  assert.equal(CPJ_ENTRIES.length, 4);
  assert.equal(crjTotal(), 10000 + 4500 + 2500);
  assert.equal(crjTotal(), 17000);
  assert.equal(cpjTotal(), 1500 + 400 + 1200 + 2000);
  assert.equal(cpjTotal(), 5100);
  // cross-casting: the bank column equals the sum of the analysis columns
  assert.equal(crjTotal(), crjColumn('Capital') + crjColumn('Fees earned'));
  assert.equal(cpjTotal(), cpjColumn('Rent expense') + cpjColumn('Telephone expense') + cpjColumn('Salaries expense') + cpjColumn('Equipment'));
  assert.equal(bankBalanceEnd(), 17000 - 5100);
  assert.equal(bankBalanceEnd(), 11900);
});

test('the ledger, trial balance and statements all balance', () => {
  const l = ledger();
  const bank = l.find((a) => a.name === 'Bank')!;
  assert.equal(bank.totalDebit, 17000);
  assert.equal(bank.totalCredit, 5100);
  assert.equal(bank.balance, 11900);
  assert.equal(bank.side, 'debit');
  const t = trial();
  assert.equal(t.totalDebit, t.totalCredit);
  const is = incomeStatement();
  assert.equal(is.income, 7000);
  assert.equal(is.totalExpenses, 3100);
  assert.equal(is.net, 3900);
  assert.equal(is.kind, 'profit');
  const bs = balanceSheet();
  assert.equal(bs.assets, 2000 + 11900);
  assert.equal(bs.equity, 10000 + 3900);
  assert.equal(bs.assets, bs.equity + bs.liabilities);
  assert.ok(bs.balanced);
  assert.deepEqual(crjEffectOnEquation(), { assets: 17000, liabilities: 0, equity: 17000 });
});

test('factors of production and wages', () => {
  assert.equal(FACTORS.length, 4);
  assert.equal(rewardFor('labour'), 'wages and salaries');
  assert.equal(rewardFor('entrepreneurship'), 'profit');
  assert.equal(wageBill(5, 200, 20), 20000);
  assert.equal(LABOUR.length, 3);
});
