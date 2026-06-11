import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseTaskSlug } from './slug';

test('parses gr7-whole-numbers-t1', () => {
  const result = parseTaskSlug('gr7-whole-numbers-t1');
  assert.equal(result.grade, 7);
  assert.equal(result.topic, 'whole-numbers');
  assert.equal(result.term, 1);
});

test('parses gr12-reading-viewing-t3', () => {
  const result = parseTaskSlug('gr12-reading-viewing-t3');
  assert.equal(result.grade, 12);
  assert.equal(result.topic, 'reading-viewing');
  assert.equal(result.term, 3);
});

test('parses grade 6 slug (no prefix) — whole-numbers-t1', () => {
  const result = parseTaskSlug('whole-numbers-t1');
  assert.equal(result.grade, 6);
  assert.equal(result.topic, 'whole-numbers');
  assert.equal(result.term, 1);
});

test('parses grade 6 slug — construction-geo-t2', () => {
  const result = parseTaskSlug('construction-geo-t2');
  assert.equal(result.grade, 6);
  assert.equal(result.topic, 'construction-geo');
  assert.equal(result.term, 2);
});

test('defaults term to 1 if missing', () => {
  const result = parseTaskSlug('gr7-whole-numbers');
  assert.equal(result.grade, 7);
  assert.equal(result.topic, 'whole-numbers');
  assert.equal(result.term, 1);
});

test('trims whitespace', () => {
  const result = parseTaskSlug('  gr7-whole-numbers-t1  ');
  assert.equal(result.grade, 7);
  assert.equal(result.topic, 'whole-numbers');
  assert.equal(result.term, 1);
});
