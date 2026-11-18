import test from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS, vatOn, priceInclVat, budgetResult, TRANSACTIONS, trail, finalEquation, isBalanced, profitOrLoss, depositTotal, invoiceTotal, statementBalance, documentFor, DOCUMENTS, EXPENDITURE, CONCEPTS } from './ems8a-helpers';

test('government, VAT and the budget (plain arithmetic)', () => {
  assert.equal(LEVELS.length, 3);
  assert.equal(vatOn(200), 30);
  assert.equal(priceInclVat(200), 230);
  assert.equal(vatOn(99.99), 15);
  assert.equal(priceInclVat(100), 115);
  assert.deepEqual(budgetResult(500, 450), { kind: 'surplus', amount: 50 });
  assert.deepEqual(budgetResult(400, 450), { kind: 'deficit', amount: 50 });
  assert.deepEqual(budgetResult(100, 100), { kind: 'balanced', amount: 0 });
  assert.equal(EXPENDITURE.length, 6);
});

test('the accounting equation stays in balance after every transaction', () => {
  const t = trail();
  assert.equal(t.length, TRANSACTIONS.length);
  for (const e of t) assert.ok(isBalanced(e), JSON.stringify(e));
  // checked by hand: capital 20 000 -> equipment on credit 5 000 -> fees 3 000 -> rent 1 000 -> repay 2 000
  assert.deepEqual(t[0], { assets: 20000, liabilities: 0, equity: 20000 });
  assert.deepEqual(t[1], { assets: 25000, liabilities: 5000, equity: 20000 });
  assert.deepEqual(t[2], { assets: 28000, liabilities: 5000, equity: 23000 });
  assert.deepEqual(t[3], { assets: 27000, liabilities: 5000, equity: 22000 });
  assert.deepEqual(finalEquation(), { assets: 25000, liabilities: 3000, equity: 22000 });
  assert.equal(25000, 3000 + 22000);
});

test('profit or loss and concepts', () => {
  assert.deepEqual(profitOrLoss(3000, 1000), { kind: 'profit', amount: 2000 });
  assert.deepEqual(profitOrLoss(1000, 3000), { kind: 'loss', amount: 2000 });
  assert.deepEqual(profitOrLoss(500, 500), { kind: 'neither', amount: 0 });
  assert.equal(CONCEPTS.length, 8);
  // owner's equity moved from 20 000 to 22 000: the profit 3 000 - 1 000 = 2 000 is the difference
  assert.equal(finalEquation().equity - 20000, profitOrLoss(3000, 1000).amount);
});

test('source documents', () => {
  assert.equal(DOCUMENTS.length, 7);
  assert.equal(documentFor('money paid into the bank'), 'deposit slip');
  assert.equal(documentFor('cash sale at the till'), 'cash register (till) slip');
  assert.equal(documentFor('a payment made by cheque'), 'cheque counterfoil');
  assert.equal(depositTotal([2, 3, 1, 4, 5]), 2 * 200 + 3 * 100 + 1 * 50 + 4 * 20 + 5 * 10);
  assert.equal(depositTotal([2, 3, 1, 4, 5]), 880);
  assert.deepEqual(invoiceTotal(4, 50), { excl: 200, vat: 30, total: 230 });
  assert.equal(statementBalance(1000, [500, 250], [300, 100]), 1350);
});
