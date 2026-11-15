import test from 'node:test';
import assert from 'node:assert/strict';
import { hubSlots, planSegments, stackLayout, weekPlan, wrapLabel } from './pswHelpers';

test('wrapLabel never breaks a word and respects the limit', () => {
  assert.deepEqual(wrapLabel('Talk to a trusted adult.', 12), ['Talk to a', 'trusted', 'adult.']);
  assert.deepEqual(wrapLabel('Pause', 12), ['Pause']);
  assert.deepEqual(wrapLabel('', 12), []);
  for (const l of wrapLabel('Save the evidence (a screenshot).', 15)) assert.ok(l.length <= 15);
});

test('stackLayout puts each box below the last with a gap and returns the total height', () => {
  const { items, height } = stackLayout(['One', 'Two three four five six seven eight nine ten eleven twelve'], 30);
  assert.equal(items[0].y, 4);
  assert.equal(items[1].y, items[0].y + items[0].h + 6);
  assert.equal(height, items[1].y + items[1].h + 4);
  assert.ok(items[1].lines.length > items[0].lines.length);
});

test('hubSlots gives top, right, bottom, left and never more than four', () => {
  assert.equal(hubSlots(4).length, 4);
  assert.equal(hubSlots(9).length, 4);
  assert.equal(hubSlots(0).length, 0);
  assert.deepEqual(hubSlots(1), [{ x: 60, y: 9 }]);
});

test('weekPlan: five days of 30 minutes make 150 minutes and equal bars', () => {
  const w = weekPlan([30, 30, 30, 30, 30]);
  assert.equal(w.total, 150);
  assert.ok(w.bars.every((b) => b.h === 40));
  const mixed = weekPlan([20, 40]);
  assert.deepEqual(mixed.bars.map((b) => b.h), [20, 40]);
  assert.equal(weekPlan([0, 0]).bars[0].h, 0);
});

test('planSegments: 30 + 5 + 30 minutes is a 65 minute session and the widths add up', () => {
  const s = planSegments([{ label: 'a', minutes: 30 }, { label: 'b', minutes: 5 }, { label: 'c', minutes: 30 }]);
  assert.equal(s.total, 65);
  assert.equal(s.segs[0].x, 6);
  assert.ok(Math.abs(s.segs.reduce((a, g) => a + g.w, 0) - 108) < 0.01);
  assert.ok(Math.abs(s.segs[2].x + s.segs[2].w - 114) < 0.01);
});
