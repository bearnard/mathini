import test from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS, FUNCTIONS, STYLES, styleFor, controlVariance, postings, account, totalDebits, totalCredits, BALANCE_SHEET_ACCOUNTS, NOMINAL_ACCOUNTS, normalSide, trialBalanceRows, ledger } from './ems8d-helpers';

test('management levels, functions and styles', () => {
  assert.equal(LEVELS.length, 3);
  assert.deepEqual(FUNCTIONS.map((f) => f.task), ['planning', 'organising', 'leading', 'controlling']);
  assert.equal(STYLES.length, 3);
  assert.equal(styleFor('makes all the decisions'), 'autocratic');
  assert.equal(styleFor('asks the workers for ideas'), 'democratic');
  assert.equal(styleFor('gives workers almost complete freedom'), 'laissez-faire');
  assert.deepEqual(controlVariance(10000, 8500), { diff: -1500, kind: 'below plan' });
  assert.deepEqual(controlVariance(5000, 5600), { diff: 600, kind: 'above plan' });
  assert.deepEqual(controlVariance(100, 100), { diff: 0, kind: 'on plan' });
});

test('double entry: every posting has equal debit and credit, and the ledger balances (hand-checked)', () => {
  const p = postings();
  assert.equal(p.length, 7);
  assert.equal(totalDebits(), 17000 + 5100);
  assert.equal(totalDebits(), totalCredits());
  const bank = account('Bank');
  assert.deepEqual([...bank.debits], [10000, 4500, 2500]);
  assert.deepEqual([...bank.credits], [1500, 400, 1200, 2000]);
  assert.equal(bank.totalDebit, 17000);
  assert.equal(bank.totalCredit, 5100);
  assert.equal(bank.balance, 11900);
  assert.equal(bank.side, 'debit');
  assert.deepEqual([...account('Fees earned').credits], [4500, 2500]);
  assert.equal(account('Fees earned').balance, 7000);
  assert.equal(account('Capital').balance, 10000);
  assert.equal(account('Equipment').balance, 2000);
  assert.equal(account('Rent expense').side, 'debit');
  // every account named in the sections exists in the ledger
  for (const n of [...BALANCE_SHEET_ACCOUNTS, ...NOMINAL_ACCOUNTS]) assert.ok(ledger().some((a) => a.name === n), n);
});

test('the trial balance balances', () => {
  const t = trialBalanceRows();
  assert.equal(t.totalDebit, 17000);
  assert.equal(t.totalCredit, 17000);
  assert.ok(t.balanced);
  // debit balances: bank 11 900 + equipment 2 000 + rent 1 500 + telephone 400 + salaries 1 200 = 17 000
  assert.equal(11900 + 2000 + 1500 + 400 + 1200, 17000);
  assert.equal(10000 + 7000, 17000);
  assert.equal(normalSide('asset'), 'debit');
  assert.equal(normalSide('expense'), 'debit');
  assert.equal(normalSide('capital'), 'credit');
  assert.equal(normalSide('income'), 'credit');
});
