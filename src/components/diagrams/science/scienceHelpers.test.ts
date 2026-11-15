import test from 'node:test';
import assert from 'node:assert/strict';
import { answerWords, efficiency, wasted, bankAnswers, litmus, meanNearestGap, particleLayout, phZone, uncoveredAnswers } from './scienceHelpers';

test('solid particles are closer together than liquid, and liquid closer than gas', () => {
  const solid = meanNearestGap(particleLayout('solid', 60, 50));
  const liquid = meanNearestGap(particleLayout('liquid', 60, 50));
  const gas = meanNearestGap(particleLayout('gas', 60, 50));
  assert.ok(solid <= liquid, `solid ${solid} liquid ${liquid}`);
  assert.ok(liquid < gas, `liquid ${liquid} gas ${gas}`);
});

test('a solid is a regular grid, 6 by 5, every particle one step from the next', () => {
  const s = particleLayout('solid', 60, 50);
  assert.equal(s.length, 30);
  assert.equal(new Set(s.map((p) => p.x)).size, 6);
  assert.equal(new Set(s.map((p) => p.y)).size, 5);
});

test('every particle stays inside its box, in every state', () => {
  for (const st of ['solid', 'liquid', 'gas'] as const) for (const p of particleLayout(st, 60, 50)) assert.ok(p.x > 0 && p.x < 60 && p.y > 0 && p.y < 50, st);
});

test('the layout is the same every time (so the server and browser agree)', () => {
  assert.deepEqual(particleLayout('gas', 60, 50), particleLayout('gas', 60, 50));
  assert.equal(particleLayout('gas', 60, 50).length, 9);
});

test('pH zones and litmus paper', () => {
  assert.equal(phZone(1), 'acid');
  assert.equal(phZone(7), 'neutral');
  assert.equal(phZone(13), 'base');
  assert.throws(() => phZone(15));
  assert.equal(litmus('blue', 'acid'), 'red');
  assert.equal(litmus('red', 'base'), 'blue');
  assert.equal(litmus('blue', 'base'), 'blue');
  assert.equal(litmus('red', 'acid'), 'red');
  assert.equal(litmus('blue', 'neutral'), 'blue');
  assert.equal(litmus('red', 'neutral'), 'red');
});

test('the coverage check finds bank answers the slides never mention', () => {
  const src = `const learnSteps = [ 'Photosynthesis makes glucose in the leaf' ];\nconst bank = [ { prompt: 'x', answer: 'glucose in the leaf' }, { prompt: 'y', answer: 'Chlorophyll absorbs light' } ];`;
  assert.deepEqual(bankAnswers(src), ['glucose in the leaf', 'Chlorophyll absorbs light']);
  assert.deepEqual(uncoveredAnswers(src), ['Chlorophyll absorbs light']);
  assert.deepEqual(answerWords('A cooldrink can'), ['cooldrink']);
});

test('efficiency is useful energy out of energy in, as a percentage', () => {
  assert.equal(efficiency(800, 1000), 80);
  assert.equal(wasted(800, 1000), 200);
  assert.equal(efficiency(1, 3), 33.3);
  assert.equal(efficiency(0, 10), 0);
  assert.throws(() => efficiency(11, 10));
  assert.throws(() => efficiency(1, 0));
});
