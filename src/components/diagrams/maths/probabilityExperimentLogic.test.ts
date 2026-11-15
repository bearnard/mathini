import test from 'node:test';
import assert from 'node:assert/strict';
import { addCounts, outcomesOf, relFreq, runTrials, theoryOf, theoryText } from './probabilityExperimentLogic';

// A scripted "random" source so the trials are repeatable.
const scripted = (values: number[]) => {
  let i = 0;
  return () => values[i++ % values.length];
};

test('coin trials: counts add up to the number of trials and follow the random source', () => {
  assert.deepEqual(runTrials('coin', 4, scripted([0.1, 0.9, 0.2, 0.6])), [2, 2]);
  assert.deepEqual(runTrials('coin', 3, scripted([0.1, 0.1, 0.1])), [3, 0]);
  const c = runTrials('coin', 50);
  assert.equal(c[0] + c[1], 50);
});

test('die trials: six outcomes, each random value maps to a face and the maximum value stays on face 6', () => {
  assert.deepEqual(runTrials('die', 6, scripted([0, 0.17, 0.34, 0.5, 0.67, 0.999])), [1, 1, 1, 1, 1, 1]);
  assert.equal(outcomesOf('die').length, 6);
  const d = runTrials('die', 60);
  assert.equal(d.reduce((a, b) => a + b, 0), 60);
  assert.equal(runTrials('die', 1, () => 1)[5], 1); // rng() never returns 1, but the index is still clamped
});

test('relative frequencies and theory are written with the SA decimal comma', () => {
  assert.equal(relFreq(23, 50), '0,46');
  assert.equal(relFreq(25, 50), '0,50');
  assert.equal(relFreq(0, 0), '–');
  assert.equal(relFreq(1, 6), '0,17');
  assert.equal(theoryText('coin'), '0,5');
  assert.equal(theoryText('die'), '0,17');
  assert.equal(theoryOf('coin'), 0.5);
  assert.deepEqual(addCounts([1, 2], [3, 4]), [4, 6]);
});
