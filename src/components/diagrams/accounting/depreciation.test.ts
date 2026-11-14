import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DIMINISHING_EXAMPLE, STRAIGHT_LINE_EXAMPLE, chargeCaption, diminishing, straightLine } from './depreciation';
import { rand } from './rand';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade11/accounting/term1/fixed-assets-depreciation/FixedAssetsDepreciation.tsx'), 'utf8');

test('straight-line: (45 000 - 5 000) / 4 = R10 000 a year, 45 000, 35 000, 25 000, 15 000, 5 000', () => {
  const s = straightLine(STRAIGHT_LINE_EXAMPLE.cost, STRAIGHT_LINE_EXAMPLE.residual, STRAIGHT_LINE_EXAMPLE.years);
  assert.deepEqual(s.values, [45000, 35000, 25000, 15000, 5000]);
  assert.deepEqual(s.charges, [10000, 10000, 10000, 10000]);
  assert.equal(s.values[s.values.length - 1], STRAIGHT_LINE_EXAMPLE.residual, 'ends at the residual value');
});

test('diminishing balance: 20 percent of the carrying value, 40 000, 32 000, 25 600, 20 480, charges 8 000, 6 400, 5 120', () => {
  const d = diminishing(DIMINISHING_EXAMPLE.opening, DIMINISHING_EXAMPLE.ratePercent, DIMINISHING_EXAMPLE.years);
  assert.deepEqual(d.values, [40000, 32000, 25600, 20480]);
  assert.deepEqual(d.charges, [8000, 6400, 5120]);
});

test('the point of the picture: straight-line steps are equal, diminishing steps shrink every year', () => {
  const s = straightLine(45000, 5000, 4).charges;
  const d = diminishing(40000, 20, 3).charges;
  assert.ok(s.every((c) => c === s[0]));
  assert.ok(d.every((c, i) => i === 0 || c < d[i - 1]));
});

test('charges and values agree: each year the value falls by exactly the charge, to the cent', () => {
  for (const sch of [straightLine(45000, 5000, 4), diminishing(40000, 20, 3), diminishing(12345.67, 15, 5)]) {
    sch.charges.forEach((c, i) => assert.equal(Math.round((sch.values[i] - c - sch.values[i + 1]) * 100), 0));
  }
});

test('captions and money format', () => {
  assert.equal(chargeCaption([10000, 10000, 10000, 10000]), 'R10 000 every year');
  assert.equal(chargeCaption([8000, 6400, 5120]), 'R8 000, R6 400, R5 120');
  assert.equal(rand(20480), 'R20 480');
  assert.equal(rand(6400.5), 'R6 400,50');
});

test('the figures are the lesson\'s own numbers (including the Year 3 row)', () => {
  for (const n of [45000, 5000, 40000, 10000, 35000, 25000, 15000, 32000, 25600, 20480, 8000, 6400, 5120]) {
    assert.ok(lesson.includes(`amount: ${n}`) || lesson.includes(`amount: -${n}`), `lesson shows ${n}`);
  }
  assert.ok(lesson.includes('End of Year 3'));
  assert.ok(lesson.includes('20%'));
});
