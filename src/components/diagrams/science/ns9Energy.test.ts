import test from 'node:test';
import assert from 'node:assert/strict';
import * as e from './ns9Energy';

test('mass and weight', () => {
  assert.equal(e.weight(60), 600);
  assert.equal(e.weight(5, 1.6), 8);
  assert.equal(e.moonG(), 1.67);
  assert.equal(e.massFromWeight(600), 60);
  assert.equal(e.resultant([5, -3]), 2);
  assert.equal(e.resultant([4, -4]), 0);
  for (const m of [1, 10, 55, 72]) assert.equal(e.massFromWeight(e.weight(m)), m);
  // the weight on the Moon is about a sixth of the weight on Earth, the mass is the same
  assert.ok(Math.abs(e.weight(60, e.moonG()) - 100) < 1);
});

test('parallel overload', () => {
  assert.equal(e.totalCurrent([4, 5, 6]), 15);
  assert.equal(e.overloaded([4, 5, 6], 10), true);
  assert.equal(e.overloaded([4, 3, 2], 10), false);
  assert.equal(e.overloaded([5, 5], 10), false, 'a total equal to the rating does not trip');
  assert.equal(e.amountOver([4, 5, 6], 10), 5);
  assert.equal(e.amountOver([1, 2], 10), 0);
});

test('the grid loses 15%', () => {
  assert.equal(e.delivered(100), 85);
  assert.equal(e.lost(100), 15);
  assert.equal(e.delivered(2000), 1700);
  assert.equal(e.mustSend(85), 100);
  assert.equal(e.mustSend(1700), 2000);
  for (const s of [20, 100, 450]) assert.equal(e.delivered(s) + e.lost(s), s);
});

test('kilowatt-hours and cost (the unit price is given)', () => {
  assert.equal(e.kW(2000), 2);
  assert.equal(e.kWh(2000, 0.5), 1);
  assert.equal(e.kWh(60, 100), 6);
  assert.equal(e.kWh(100, 5), 0.5);
  assert.equal(e.cost(2000, 0.5, 2.5), 2.5);
  assert.equal(e.cost(1500, 2, 3), 9);
  assert.equal(e.cost(100, 10, 2.5), 2.5);
  assert.equal(e.hoursPrepaid(50, 2.5, 2000), 10);
  assert.equal(e.hoursPrepaid(100, 2.5, 100), 400);
  assert.equal(e.lampSaving(60, 11, 1000, 2.5), 122.5);
  assert.equal(e.joules(60, 10), 600);
  assert.equal(e.rand(2.5), 'R2,50');
  assert.equal(e.rand(150), 'R150');
  assert.equal(e.rand(1200), 'R1 200');
  // energy in kWh is power x time whichever way round
  for (const w of [60, 100, 750, 2000]) for (const h of [0.5, 2, 10]) assert.equal(e.kWh(w, h), (w * h) / 1000);
});

test('the atmosphere', () => {
  assert.equal(e.airTotal(), 100);
  assert.equal(e.tempAtHeight(25, 3000), -5);
  assert.equal(e.tempAtHeight(20, 1500), 5);
  assert.equal(e.tempAtHeight(30, 0), 30);
  assert.equal(e.heightForTemp(25, 5), 2000);
  assert.equal(e.thickness('Troposphere'), 10);
  assert.equal(e.thickness('Stratosphere'), 40);
  assert.equal(e.thickness('Mesosphere'), 30);
  assert.equal(e.drawnCm(10, 10), 1);
  assert.equal(e.drawnCm(40, 10), 4);
  assert.equal(e.drawnCm(80, 10), 8);
  assert.equal(e.heightForTemp(25, e.tempAtHeight(25, 3000)), 3000);
});
