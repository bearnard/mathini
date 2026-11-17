import test from 'node:test';
import assert from 'node:assert/strict';
import { CASH, SAMPLE, cashDifference, errorRate, estimatedErrors, everyKth } from './auditExamples';

test('the sample: 3 errors in 20 invoices is 15%, and about 30 errors are estimated in 200 invoices', () => {
  assert.equal(errorRate(SAMPLE.errors, SAMPLE.sampleSize), 15);
  assert.equal(estimatedErrors(SAMPLE.population, SAMPLE.errors, SAMPLE.sampleSize), 30);
  assert.equal(SAMPLE.population / SAMPLE.sampleSize, 10, 'every 10th invoice is a 1 in 10 sample');
});

test('systematic sampling: every 10th invoice from number 5 gives 20 invoices out of 200', () => {
  const picked = everyKth(1, 200, 10, 5);
  assert.deepEqual(picked.slice(0, 3), [5, 15, 25]);
  assert.equal(picked.length, 20);
  assert.equal(picked.at(-1), 195);
});

test('the cash count: R4 770 counted against R4 820 expected is a shortage of R50', () => {
  assert.equal(cashDifference(CASH.expected, CASH.counted), -50);
  assert.equal(cashDifference(100, 100), 0);
  assert.equal(cashDifference(100, 130.5), 30.5);
});
