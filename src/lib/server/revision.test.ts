import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aggregateSections, pickWeakSections } from './revision';

test('aggregateSections returns empty for empty input', () => {
  assert.equal(aggregateSections([]).length, 0);
});

test('aggregateSections counts correctly for one section', () => {
  const results = [
    { section: 'large-numbers', correct: 3, total: 5, accuracy: 0.6 },
    { section: 'large-numbers', correct: 1, total: 1, accuracy: 1.0 },
  ];
  const agg = aggregateSections(results);
  assert.equal(agg.length, 1);
  assert.equal(agg[0].section, 'large-numbers');
  assert.equal(agg[0].correct, 4);
  assert.equal(agg[0].total, 6);
  assert.equal(agg[0].accuracy, 4 / 6);
});

test('aggregateSections splits across multiple sections', () => {
  const results = [
    { section: 'a', correct: 2, total: 4, accuracy: 0.5 },
    { section: 'b', correct: 1, total: 3, accuracy: 0.33 },
  ];
  const agg = aggregateSections(results);
  assert.equal(agg.length, 2);
});

test('pickWeakSections returns empty when all above threshold', () => {
  const sections = [
    { section: 'a', correct: 4, total: 5, accuracy: 0.8 },
    { section: 'b', correct: 3, total: 4, accuracy: 0.75 },
  ];
  assert.equal(pickWeakSections(sections).length, 0);
});

test('pickWeakSections flags sections below threshold', () => {
  const sections = [
    { section: 'weak', correct: 1, total: 5, accuracy: 0.2 },
    { section: 'ok', correct: 4, total: 5, accuracy: 0.8 },
  ];
  const weak = pickWeakSections(sections);
  assert.equal(weak.length, 1);
  assert.equal(weak[0].section, 'weak');
});

test('pickWeakSections respects min attempts gate', () => {
  const sections = [
    { section: 'few-attempts', correct: 0, total: 2, accuracy: 0.0 },
    { section: 'many-attempts', correct: 1, total: 10, accuracy: 0.1 },
  ];
  const weak = pickWeakSections(sections);
  assert.equal(weak.length, 1);
  assert.equal(weak[0].section, 'many-attempts');
});

test('pickWeakSections accepts custom options', () => {
  const sections = [{ section: 'border', correct: 2, total: 4, accuracy: 0.5 }];
  assert.equal(pickWeakSections(sections, { accuracyThreshold: 0.51 }).length, 1);
  assert.equal(pickWeakSections(sections, { accuracyThreshold: 0.4 }).length, 0);
});
