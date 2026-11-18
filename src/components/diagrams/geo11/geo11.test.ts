import test from 'node:test';
import assert from 'node:assert/strict';
import * as g from './geo11';

test('drought record: percentages, drought years and deficits recomputed by hand', () => {
  assert.equal(g.percentOfMean(330), 66);
  assert.equal(g.percentOfMean(300), 60);
  assert.equal(g.percentOfMean(520), 104);
  assert.deepEqual(g.droughtYears().map((r) => r.year), ['Year 3', 'Year 4']);
  assert.equal(g.deficit(330), 170);
  assert.equal(g.totalDeficit(), 370);
  assert.equal(g.isDroughtYear(380), false); // 76%
  assert.equal(g.isDroughtYear(370), true); // 74%
});
test('yield losses: rain-fed 60%, irrigated 10%', () => {
  assert.equal(g.lossPercent(3, 1.2), 60);
  assert.equal(g.lossPercent(3, 2.7), 10);
});
test('overgrazing: 400 ha at 8 ha per animal carries 50; 80 animals is 30 too many, 60% over', () => {
  assert.equal(400 / 8, 50);
  assert.equal(g.carryingCapacity(), 50);
  assert.equal(g.overstocked(), 30);
  assert.equal(g.overstockPercent(), 60);
});
test('development numbers', () => {
  assert.equal(g.tradeBalance(), -12);
  assert.equal(g.doublingYears(2), 35);
  assert.equal(g.doublingYears(3.5), 20);
  assert.equal(g.perCapitaGrowthApprox(3, 2), 1);
  assert.equal(g.investmentShare(12, 100), 12);
  assert.equal(g.groupPerMonth(), 1000);
  assert.equal(g.groupPerYear(), 12000);
  assert.equal(g.ROSTOW.length, 5);
});
test('orthophoto numbers', () => {
  assert.deepEqual(g.fieldGround(), { length: 300, breadth: 200 });
  assert.equal(g.fieldHectares(), 6);
  assert.equal(g.oneKmCm(10000), 10);
  assert.equal(g.oneKmCm(50000), 2);
  assert.equal(g.photoScale(), 15000);
  assert.equal(g.roadGround(), 700);
  assert.equal(g.roadOnTopo(), 1.4);
});
test('atlas references and the area ratio', () => {
  assert.equal(g.gridRef(4, 3), 'D3');
  assert.equal(g.gridRef(1, 5), 'A5');
  assert.equal(g.areaRatio(), 14.01);
});
test('fieldwork week', () => {
  assert.equal(g.weekRain(), 24);
  assert.equal(g.meanMax(), 24);
  assert.equal(g.hottest().day, 'Sun');
  assert.equal(g.dailyRange(g.WEEK[0]), 13);
  assert.equal(g.rainyDays(), 3);
  assert.equal(24 + 26 + 23 + 20 + 23 + 25 + 27, 168);
});
