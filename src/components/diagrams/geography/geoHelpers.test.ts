import test from 'node:test';
import assert from 'node:assert/strict';
import { annualRain, desert, driestMonth, matureStructure, mediterranean, meanNearest, naturalChange, project, rainforest, settlement, tempAtHeight, wettestMonth, youngStructure, year } from './geoHelpers';

test('Mediterranean pattern: driest in summer (Dec-Feb), wettest in winter (Jun-Aug), hottest in summer', () => {
  assert.ok([11, 0, 1].includes(driestMonth(mediterranean)), `driest ${driestMonth(mediterranean)}`);
  assert.ok([5, 6, 7].includes(wettestMonth(mediterranean)), `wettest ${wettestMonth(mediterranean)}`);
  const t = year(mediterranean).map((m) => m.temp);
  assert.ok([11, 0, 1].includes(t.indexOf(Math.max(...t))));
});

test('rainforest is wet and hot all year; desert has very little rain in every month; rainforest has far more rain than desert', () => {
  assert.ok(year(rainforest).every((m) => m.rain > 70 && m.temp > 75));
  assert.ok(year(desert).every((m) => m.rain < 10));
  assert.ok(annualRain(rainforest) > 5 * annualRain(desert));
});

test('temperature falls about 6,5 degrees for every 1 000 m: 25 degrees at sea level is 12 degrees at 2 000 m', () => {
  assert.equal(tempAtHeight(25, 0), 25);
  assert.equal(tempAtHeight(25, 1000), 18.5);
  assert.equal(tempAtHeight(25, 2000), 12);
  assert.ok(tempAtHeight(25, 3000) < tempAtHeight(25, 1000));
});

test('births above deaths: the population grows; equal: it stays the same; deaths above births: it shrinks', () => {
  assert.equal(naturalChange(30, 10), 20);
  const grow = project(1000, 30, 10, 10);
  assert.ok(grow[10] > grow[0]);
  assert.deepEqual(project(1000, 15, 15, 5), [1000, 1000, 1000, 1000, 1000, 1000]);
  assert.ok(project(1000, 8, 12, 10)[10] < 1000);
  assert.ok(grow.every((v, i) => i === 0 || v > grow[i - 1]));
});

test('a falling death rate with a steady birth rate makes growth faster', () => {
  assert.ok(project(1000, 30, 5, 20)[20] > project(1000, 30, 20, 20)[20]);
});

test('the age structures each add up to 100 per cent; the young one has the biggest share in the youngest band', () => {
  assert.equal(youngStructure.reduce((a, b) => a + b, 0), 100);
  assert.equal(matureStructure.reduce((a, b) => a + b, 0), 100);
  assert.equal(Math.max(...youngStructure), youngStructure[0]);
  assert.ok(youngStructure[0] > matureStructure[0]);
});

test('houses in a nucleated settlement are closer to each other than in a dispersed one, and all stay in the box', () => {
  const n = meanNearest(settlement('nucleated', 12, 60, 50));
  const d = meanNearest(settlement('dispersed', 12, 60, 50));
  assert.ok(n < d, `nucleated ${n} dispersed ${d}`);
  for (const k of ['nucleated', 'linear', 'dispersed'] as const) for (const p of settlement(k, 12, 60, 50)) assert.ok(p.x > 0 && p.x < 60 && p.y > 0 && p.y < 50, k);
  assert.equal(settlement('linear', 8, 60, 50).length, 8);
});
