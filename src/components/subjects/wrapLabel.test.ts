import test from 'node:test';
import assert from 'node:assert/strict';
import { DENSE_FROM, axisHeight, edgePadding, isDense, labelTokens, needsRotationAt, rotatedFont, textWidth, wrapLabel } from './wrapLabel';

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

test('rotation is decided from neighbours colliding in their slots: Entrepreneurship, cities and income bands rotate, ordinary labels wrap', () => {
  const slot = (labels: string[]) => 220 / labels.length;
  const factors = ['Land', 'Labour', 'Capital', 'Entrepreneurship'];
  const cities = ['Johannesburg', 'Cape Town', 'Ekurhuleni', 'eThekwini', 'Tshwane'];
  const bands = ['R0–237.9k', 'R237.9–370.5k', 'R370.5–512.8k', 'R512.8–673k', 'R673–857.9k', 'R857.9k+'];
  assert.equal(needsRotationAt(factors, slot(factors)), true);
  assert.equal(needsRotationAt(bands, slot(bands)), true);
  assert.equal(needsRotationAt(['Jobs', 'Family', 'Education', 'Housing', 'Safety'], 220 / 5), false);
  assert.equal(needsRotationAt(['Northern Cape', 'KwaZulu-Natal', 'Gauteng', 'Limpopo'], 220 / 4), false);
  assert.equal(needsRotationAt(['Coal', 'Platinum', 'Gold', 'Iron ore'], 220 / 4), false);
  assert.equal(needsRotationAt(['One'], 20), false);
  assert.equal(needsRotationAt(cities, slot(cities)), true);
});

test('twelve months: flat where they fit (wide chart), turned on end where they do not (two-axis phone chart)', () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  assert.equal(needsRotationAt(months, 300 / 12), false);
  assert.equal(needsRotationAt(months, 136 / 12), true);
  assert.equal(isDense(months), true);
  assert.equal(isDense(months.slice(0, DENSE_FROM - 1)), false);
});

test('a rotated axis is as tall as its longest label, capped; short labels keep the wrapped height', () => {
  const factors = ['Land', 'Labour', 'Capital', 'Entrepreneurship'];
  assert.equal(axisHeight(factors), Math.round(14 + 16 * 0.5 * 10 * 1.1));
  assert.ok(axisHeight(['x'.repeat(60), 'y', 'z', 'w']) <= 110);
  assert.equal(axisHeight(['Jobs', 'Family', 'Education', 'Housing', 'Safety']), 31);
  assert.equal(axisHeight(['Jan', 'Feb']), 31);
  assert.equal(axisHeight(['Northern Cape', 'Gauteng']), 44);
  assert.equal(axisHeight(['a b c d e f']), 57);
  assert.equal(axisHeight([]), 31);
});

test('edge padding fits half the label, within limits: "2023" about 18, "100 tosses" about 39, never above 60', () => {
  assert.equal(edgePadding('2023'), 18);
  assert.equal(edgePadding('100 tosses'), 39);
  assert.equal(edgePadding('x'.repeat(100)), 60);
});

test('rotated font: 10 px normally, smaller only when the slot is very narrow, never below 8', () => {
  assert.equal(rotatedFont(30), 10);
  assert.equal(rotatedFont(14.6), 10);
  assert.equal(rotatedFont(11.3), 9);
  assert.equal(rotatedFont(5), 8);
});

test('without a browser, text width is the estimate (no canvas in tests)', () => {
  assert.equal(textWidth('Education', 10), 45);
});
