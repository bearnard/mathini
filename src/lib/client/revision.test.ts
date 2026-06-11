import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aggregateResultsBySection, pickWeakSections } from './revision';

test('aggregateResultsBySection returns empty for empty input', () => {
  assert.equal(aggregateResultsBySection([]).length, 0);
});

test('aggregates results by section correctly', () => {
  const results = [
    { section: 'large-numbers', correct: true },
    { section: 'large-numbers', correct: true },
    { section: 'large-numbers', correct: false },
    { section: 'prime-numbers', correct: true },
    { section: 'prime-numbers', correct: false },
  ];
  const agg = aggregateResultsBySection(results);
  assert.equal(agg.length, 2);

  const large = agg.find((r) => r.section === 'large-numbers')!;
  assert.equal(large.correct, 2);
  assert.equal(large.total, 3);

  const prime = agg.find((r) => r.section === 'prime-numbers')!;
  assert.equal(prime.correct, 1);
  assert.equal(prime.total, 2);
});

test('aggregates results without section as "general"', () => {
  const results = [
    { correct: true },
    { correct: false },
    { correct: true, section: 'general' },
  ];
  const agg = aggregateResultsBySection(results);
  assert.equal(agg.length, 1);
  assert.equal(agg[0].section, 'general');
  assert.equal(agg[0].correct, 2);
  assert.equal(agg[0].total, 3);
});

test('pickWeakSections returns empty when all pass', () => {
  const results = [
    { section: 'a', correct: 4, total: 5 },
    { section: 'b', correct: 3, total: 4 },
  ];
  assert.equal(pickWeakSections(results).length, 0);
});

test('pickWeakSections finds weak sections', () => {
  const results = [
    { section: 'weak', correct: 1, total: 6 },
    { section: 'ok', correct: 5, total: 6 },
  ];
  const weak = pickWeakSections(results);
  assert.equal(weak.length, 1);
  assert.equal(weak[0], 'weak');
});

test('pickWeakSections respects min attempts', () => {
  const results = [
    { section: 'few', correct: 0, total: 2 },
    { section: 'many-weak', correct: 1, total: 10 },
  ];
  const weak = pickWeakSections(results);
  assert.equal(weak.length, 1);
  assert.equal(weak[0], 'many-weak');
});
