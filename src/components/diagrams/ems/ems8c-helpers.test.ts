import test from 'node:test';
import assert from 'node:assert/strict';
import { paymentEffect, receiptEffect, equationAfterAll, isBalanced, cashCarriedForward, combinedTotals, cpjAnalysis, cpjTotal, FORMS, limitedLiability, partnerShares, formFor, CC_NOTE } from './ems8c-helpers';
import { balanceSheet } from './ems8b-helpers';

test('payment and receipt effects on the equation', () => {
  assert.deepEqual(paymentEffect('Rent expense', 1500), { assets: -1500, equity: -1500 });
  assert.deepEqual(paymentEffect('Equipment', 2000), { assets: 0 });
  assert.deepEqual(receiptEffect('Capital', 10000), { assets: 10000, equity: 10000 });
  assert.deepEqual(receiptEffect('Fees earned', 4500), { assets: 4500, equity: 4500 });
});

test('the combined journals: cash carried forward and the equation after all seven transactions (hand-checked)', () => {
  assert.equal(cashCarriedForward(), 17000 - 5100);
  assert.deepEqual(combinedTotals(), { received: 17000, paid: 5100, balance: 11900 });
  const total = cpjAnalysis().reduce((a, r) => a + r.amount, 0);
  assert.equal(total, cpjTotal());
  assert.equal(total, 1500 + 400 + 1200 + 2000);
  // equation: assets = bank 11 900 + equipment 2 000 (the equipment swap is a change inside assets) ...
  const e = equationAfterAll();
  // the equipment purchase moves 2 000 from bank to equipment, so total assets only fall by the expenses
  assert.equal(e.assets, 17000 - 3100);
  assert.equal(e.equity, 17000 - 3100);
  assert.equal(e.liabilities, 0);
  assert.ok(isBalanced(e));
  assert.equal(e.assets, balanceSheet().assets);
  assert.equal(e.equity, balanceSheet().equity);
});

test('forms of ownership', () => {
  assert.equal(FORMS.length, 5);
  assert.ok(limitedLiability('private company') && limitedLiability('public company') && limitedLiability('close corporation'));
  assert.ok(!limitedLiability('sole trader') && !limitedLiability('partnership'));
  assert.deepEqual(partnerShares(60000, [3, 2]), [36000, 24000]);
  assert.equal(partnerShares(60000, [3, 2]).reduce((a, b) => a + b, 0), 60000);
  assert.equal(formFor('shares sold to the public'), 'public company');
  assert.equal(formFor('one owner'), 'sole trader');
  assert.equal(formFor('two or more partners'), 'partnership');
  assert.match(CC_NOTE, /1 May 2011/);
});
