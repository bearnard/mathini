import test from 'node:test';
import assert from 'node:assert/strict';
import * as p from './plants10';

test('rings: 10 rings is a tree of 10 years; widths add to 33,5 mm; mean 3,35 mm; widest year 5, narrowest year 9', () => {
  assert.equal(p.age(), 10);
  assert.equal(4.2 + 3.8 + 1.5 + 4.0 + 5.0 + 2.0 + 3.6 + 4.4 + 1.2 + 3.8, 33.5);
  assert.equal(p.trunkRadius(), 33.5);
  assert.equal(p.meanRing(), 3.35);
  assert.equal(p.widest(), 5);
  assert.equal(p.narrowest(), 9);
});
test('potometer: 12 mm in 6 min is 2 mm/min; the wind doubles it (+100%), warm gives 5 mm/min (+150%), humid halves it (-50%)', () => {
  assert.deepEqual(p.POTO.map((x) => p.ratePerMin(x.mm)), [2, 4, 5, 1]);
  assert.equal(p.percentChange(12, 24), 100);
  assert.equal(p.percentChange(12, 30), 150);
  assert.equal(p.percentChange(12, 6), -50);
});
