import test from 'node:test';
import assert from 'node:assert/strict';
import * as b from './bus10';

test('self-assessment: total 30, average 3,75, strongest perseverance (first of the fives), weakest organisation', () => {
  assert.equal(4 + 5 + 3 + 2 + 4 + 3 + 5 + 4, 30);
  assert.equal(b.selfTotal(), 30);
  assert.equal(b.selfAverage(), 3.75);
  assert.equal(b.strongest()[0], 'Perseverance');
  assert.equal(b.weakest()[0], 'Organisation');
});
test('location: weights 3, 2, 3, 2 (max 50); Site A 4*3+3*2+4*3+2*2 = 34, Site B 5*3+4*2+5*3+4*2 = 46, Site C 2*3+2*2+3*3+5*2 = 29', () => {
  assert.equal(b.maxScore(), 50);
  assert.deepEqual(b.SITES.map((s) => b.siteTotal(s.scores)), [34, 46, 29]);
  assert.equal(b.bestSite().name, 'Site B (industrial park)');
});
test('pyramid scheme: 3 recruits each gives 3, 9, 27 ... 3^10 = 59 049; the whole of South Africa is reached by about level 17', () => {
  assert.equal(b.level(3, 1), 3n);
  assert.equal(b.level(3, 10), 59049n);
  assert.equal(b.cumulative(3, 3), 1n + 3n + 9n + 27n);
  assert.ok(b.level(3, 17) > b.SA_POPULATION && b.level(3, 16) < b.SA_POPULATION);
  assert.equal(b.level(3, 17), 129140163n);
});
test('force field, survey, time budget and hire purchase', () => {
  assert.equal(b.sum(b.DRIVING), 9);
  assert.equal(b.sum(b.RESTRAINING), 5);
  assert.equal(b.percentYes(), 80);
  assert.equal(b.freeHours(), 3);
  assert.equal(b.hpTotal(), 240000 + 12 * 190000);
  assert.equal(b.hpTotal(), 2520000);
  assert.equal(b.hpExtra(), 120000);
});
