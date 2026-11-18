import test from 'node:test';
import assert from 'node:assert/strict';
import * as a from './acc10';

test('VAT at 15%: R200 + R30 = R230; R230 back to R200 with VAT R30; R575 is R500 plus R75', () => {
  assert.equal(a.vatOn(20000), 3000);
  assert.equal(a.inclOf(20000), 23000);
  assert.equal(a.exclOf(23000), 20000);
  assert.equal(a.vatIn(23000), 3000);
  assert.equal(a.exclOf(57500), 50000);
  assert.equal(a.vatIn(57500), 7500);
  assert.throws(() => a.exclOf(10001));
});
test('net VAT: output R12 000 less input R7 500 = R4 500 payable; second month R3 000 less R6 000 = R3 000 refund', () => {
  assert.equal((8000000n * 15n) / 100n, 1200000n);
  assert.equal((5000000n * 15n) / 100n, 750000n);
  assert.equal(a.netVat(a.MONTH1.sales, a.MONTH1.purchases), 450000);
  assert.equal(a.netVat(a.MONTH2.sales, a.MONTH2.purchases), -300000);
});
test('internal control, cost and cash budget', () => {
  assert.equal(a.stockShortage(), 12);
  assert.equal(a.stockLoss(), 54000);
  assert.equal(a.cashShortage(), 15000);
  assert.equal(a.primeCost(), 6500000);
  assert.equal(a.factoryOverheads(), 1500000);
  assert.equal(a.manufacturingCost(), 8000000);
  assert.equal(a.budgetReceipts(), 1200000);
  assert.equal(a.budgetClosing(), 650000);
});
