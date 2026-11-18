import test from 'node:test';
import assert from 'node:assert/strict';
import { breakEvenUnits, FUNCTIONS, markUpPercent, markUpRand, PLAN_SECTIONS, profitAt, profitPercent, sectionNumber, sellingPrice, STALL, swotClass, totalCost } from './ems9-plan';

// Written by hand from the formulas, not from the helper.
test('nine functions of a business with the nine CAPS names', () => {
  assert.equal(FUNCTIONS.length, 9);
  assert.deepEqual(FUNCTIONS.map((f) => f.name).sort(), ['Administration', 'Finances', 'General management', 'Human resources', 'Marketing', 'Production', 'Public relations', 'Purchasing', 'Risk management']);
});

test('the business plan has ten parts, front cover first and conclusion last, SWOT before the conclusion', () => {
  assert.equal(PLAN_SECTIONS.length, 10);
  assert.equal(sectionNumber('Front cover'), 1);
  assert.equal(sectionNumber('Table of contents'), 2);
  assert.equal(sectionNumber('SWOT analysis'), 9);
  assert.equal(sectionNumber('Conclusion'), 10);
});

test('SWOT: inside and helpful is a strength, inside and harmful a weakness, outside and helpful an opportunity, outside and harmful a threat', () => {
  assert.equal(swotClass(true, true), 'Strength');
  assert.equal(swotClass(true, false), 'Weakness');
  assert.equal(swotClass(false, true), 'Opportunity');
  assert.equal(swotClass(false, false), 'Threat');
});

test('the candle stall: fixed R1 800, R18 a candle to make, sold at R30', () => {
  // each candle adds R30 - R18 = R12 towards the fixed costs: 1 800 / 12 = 150 candles
  assert.equal(breakEvenUnits(STALL, STALL.price), 150);
  assert.equal(totalCost(STALL, 150), 1800 + 18 * 150);
  assert.equal(150 * 30, 1800 + 18 * 150);
  // at 200 candles: sales 6 000, costs 1 800 + 3 600 = 5 400, profit 600, 10% of sales
  assert.equal(profitAt(STALL, STALL.price, 200), 600);
  assert.equal(profitPercent(600, 6000), 10);
  // rounding up: fixed 1 000, price 25, variable 15 -> 1 000 / 10 = 100; fixed 1 000, price 24, variable 15 -> 111.1 -> 112
  assert.equal(breakEvenUnits({ fixed: 1000, variablePerUnit: 15 }, 25), 100);
  assert.equal(breakEvenUnits({ fixed: 1000, variablePerUnit: 15 }, 24), 112);
});

test('mark-up on cost price: bought at R40 and sold at R50 is R10, 25%; 50% on R60 gives R90', () => {
  assert.equal(markUpRand(40, 50), 10);
  assert.equal(markUpPercent(40, 50), 25);
  assert.equal(sellingPrice(60, 50), 90);
  assert.equal(sellingPrice(200, 20), 240);
  assert.equal(profitPercent(3000, 20000), 15);
});
