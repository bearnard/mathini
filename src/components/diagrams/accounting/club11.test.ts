import test from 'node:test';
import assert from 'node:assert/strict';
import { openingFund, totalReceipts, totalPayments, closingBank, receiptsSurplus, expensePayments, nonExpensePayments, feesCheck, incomeLessExpenses, trialBalanceRows, tbTotals, closingFund, closingAssets, GAAP, recordedAt, stockValue, matching, isMaterial, principleFor, RECEIPTS, PAYMENTS } from './club11';

test('the Analysis Cash Book and the Statement of Receipts and Payments (hand-checked)', () => {
  assert.equal(openingFund(), 8000 + 4000 - 1000);
  assert.equal(openingFund(), 11000);
  assert.equal(totalReceipts(), 12000 + 1500 + 2000 + 3500);
  assert.equal(totalReceipts(), 19000);
  assert.equal(totalPayments(), 4000 + 2500 + 1200 + 300 + 3000 + 1000);
  assert.equal(totalPayments(), 12000);
  assert.equal(closingBank(), 8000 + 19000 - 12000);
  assert.equal(closingBank(), 15000);
  assert.equal(receiptsSurplus(), 7000);
  assert.equal(8000 + receiptsSurplus(), closingBank()); // opening bank + surplus = closing bank
  assert.equal(RECEIPTS.length, 4);
  assert.equal(PAYMENTS.length, 6);
});

test('receipts and income, payments and expenses', () => {
  assert.equal(expensePayments(), 4000 + 2500 + 1200 + 300);
  assert.equal(expensePayments(), 8000);
  assert.equal(nonExpensePayments(), 4000);
  assert.equal(expensePayments() + nonExpensePayments(), totalPayments());
  assert.deepEqual(feesCheck(), { membership: 12000, entrance: 1500 });
  assert.equal(incomeLessExpenses(), 19000 - 8000);
  assert.equal(incomeLessExpenses(), 11000);
});

test('the Trial Balance balances and the accumulated fund grows by the surplus of income over expenses', () => {
  const t = tbTotals();
  assert.equal(t.dr, 15000 + 7000 + 4000 + 2500 + 1200 + 300);
  assert.equal(t.dr, 30000);
  assert.equal(t.cr, 11000 + 12000 + 1500 + 2000 + 3500);
  assert.equal(t.cr, 30000);
  assert.equal(t.dr, t.cr);
  assert.equal(trialBalanceRows().length, 11);
  assert.equal(closingFund(), 22000);
  // assets at the end (bank 15 000 + equipment 7 000) and no liabilities: equal to the closing accumulated fund
  assert.equal(closingAssets(), 22000);
  assert.equal(closingAssets(), closingFund());
});

test('GAAP principles', () => {
  assert.equal(GAAP.length, 6);
  assert.equal(recordedAt(50000, 65000), 50000);
  assert.equal(stockValue(80000, 70000), 70000);
  assert.equal(stockValue(80000, 90000), 80000);
  assert.deepEqual(matching(14000, 14, 12), { expense: 12000, prepaid: 2000 });
  assert.deepEqual(matching(6000, 12, 12), { expense: 6000, prepaid: 0 });
  assert.ok(!isMaterial(150, 2000000));
  assert.ok(isMaterial(50000, 2000000));
  assert.equal(principleFor('stock below cost'), 'prudence');
  assert.equal(principleFor('asset at cost'), 'historical cost');
  assert.equal(principleFor('expense in the right year'), 'matching');
});
