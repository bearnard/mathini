import test from 'node:test';
import assert from 'node:assert/strict';
import { BREAD, BREAD_PRICES, SECTORS, equilibrium, marketTable, qtyDemanded, qtySupplied, shiftDemand, shiftSupply } from './ems9d-helpers';

test('the bread market: equilibrium at R12 and 100 loaves, where demanded equals supplied', () => {
  assert.deepEqual(equilibrium(BREAD), { price: 12, qty: 100 });
  assert.equal(qtyDemanded(BREAD, 12), qtySupplied(BREAD, 12));
});

test('the law of demand and the law of supply: a higher price means less is demanded and more is supplied', () => {
  for (let i = 1; i < BREAD_PRICES.length; i++) {
    assert.ok(qtyDemanded(BREAD, BREAD_PRICES[i]) < qtyDemanded(BREAD, BREAD_PRICES[i - 1]));
    assert.ok(qtySupplied(BREAD, BREAD_PRICES[i]) > qtySupplied(BREAD, BREAD_PRICES[i - 1]));
  }
});

test('shortage below the equilibrium price and surplus above it', () => {
  const rows = marketTable(BREAD, BREAD_PRICES);
  assert.deepEqual(rows.map((r) => r.result), ['shortage', 'shortage', 'equilibrium', 'surplus', 'surplus', 'surplus']);
  assert.deepEqual(rows.map((r) => [r.price, r.demanded, r.supplied, r.gap]), [[8, 140, 60, 80], [10, 120, 80, 40], [12, 100, 100, 0], [14, 80, 120, 40], [16, 60, 140, 80], [18, 40, 160, 120]]);
});

test('a rise in demand raises both price and quantity; a fall in supply raises the price and lowers the quantity', () => {
  assert.deepEqual(equilibrium(shiftDemand(BREAD, 40)), { price: 14, qty: 120 });
  assert.deepEqual(equilibrium(shiftSupply(BREAD, -40)), { price: 14, qty: 80 });
  assert.deepEqual(equilibrium(shiftDemand(BREAD, -40)), { price: 10, qty: 80 });
  assert.deepEqual(equilibrium(shiftSupply(BREAD, 40)), { price: 10, qty: 120 });
});

test('every activity is in exactly one sector, and each sector has examples', () => {
  assert.equal(new Set(SECTORS.map((s) => s.activity)).size, SECTORS.length);
  for (const sec of ['primary', 'secondary', 'tertiary']) assert.ok(SECTORS.filter((s) => s.sector === sec).length >= 3);
});
