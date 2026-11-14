import test from 'node:test';
import assert from 'node:assert/strict';
import { DENSE_FROM, axisHeight, isDense, labelTokens, wrapLabel } from './wrapLabel';

test('tokens break at spaces and after hyphens, keeping the hyphen', () => {
  assert.deepEqual(labelTokens('KwaZulu-Natal'), ['KwaZulu-', 'Natal']);
  assert.deepEqual(labelTokens('Northern Cape'), ['Northern', 'Cape']);
  assert.deepEqual(labelTokens('Jan'), ['Jan']);
});

test('a label that fits its slot stays on one line at the base size', () => {
  assert.deepEqual(wrapLabel('Jobs', 60), { lines: ['Jobs'], fontSize: 12 });
});

test('a long label wraps to two lines, and no line is lost or invented', () => {
  const w = wrapLabel('Northern Cape', 56);
  assert.ok(w.lines.length >= 2);
  assert.equal(w.lines.join(' ').replace(/- /g, '-'), 'Northern Cape');
  const k = wrapLabel('KwaZulu-Natal', 56);
  assert.equal(k.lines.join('').replace(/\s/g, ''), 'KwaZulu-Natal');
});

test('a word wider than the slot shrinks the font but never below the minimum', () => {
  const w = wrapLabel('Education', 40);
  assert.ok(w.fontSize < 12 && w.fontSize >= 10);
  assert.equal(wrapLabel('Considerable', 10).fontSize, 10);
});

test('twelve month labels still get one line each', () => {
  for (const m of ['Jan', 'Feb', 'Sep', 'Dec']) assert.equal(wrapLabel(m, 18).lines.length, 1);
});

test('no more than three lines, and an unknown slot leaves the label alone', () => {
  assert.ok(wrapLabel('one two three four five six', 30).lines.length <= 3);
  assert.deepEqual(wrapLabel('Anything goes', 0), { lines: ['Anything goes'], fontSize: 12 });
});

test('the axis is tall enough for the wrapped labels: one row for short labels, up to three', () => {
  assert.equal(axisHeight(['Jan', 'Feb']), 31);
  assert.equal(axisHeight(['Northern Cape', 'Gauteng']), 44);
  assert.equal(axisHeight(['a b c d e f']), 57);
});

test('twelve categories are dense: labels turn on end and the axis is as tall as the longest label', () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  assert.equal(isDense(months), true);
  assert.equal(isDense(months.slice(0, DENSE_FROM - 1)), false);
  assert.equal(axisHeight(months), 14 + Math.round(3 * 0.58 * 12));
  assert.ok(axisHeight(['September', ...months.slice(0, 7)]) > axisHeight(months));
  assert.ok(axisHeight(Array(8).fill('x'.repeat(40))) <= 90);
});
