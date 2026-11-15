import test from 'node:test';
import assert from 'node:assert/strict';
import { arrowEnds, checkSchematic, labelsOf, type SchematicSpec } from './schematic';

const ok: SchematicSpec = {
  id: 't', title: 't', desc: 'A schematic of two boxes.', width: 100, height: 60,
  boxes: [
    { id: 'a', x: 4, y: 20, w: 30, h: 16, lines: ['one'], tone: 'sky' },
    { id: 'b', x: 66, y: 20, w: 30, h: 16, lines: ['two'], tone: 'green' },
  ],
  arrows: [{ from: 'a', to: 'b', label: 'go' }],
  labels: [],
};

test('a clean schematic passes', () => {
  assert.deepEqual(checkSchematic(ok), []);
  assert.deepEqual(labelsOf(ok), ['one', 'two', 'go']);
});

test('the checker catches: too many labels, overlap, off-frame, missing box, a label that does not fit, no "schematic" in the description', () => {
  const many = { ...ok, labels: Array.from({ length: 5 }, (_, i) => ({ x: 4, y: 50, text: `l${i}` })) };
  assert.match(checkSchematic(many).join(), /labels \(the limit is 6\)/);
  assert.match(checkSchematic({ ...ok, boxes: [ok.boxes[0], { ...ok.boxes[1], x: 20 }] }).join(), /overlap/);
  assert.match(checkSchematic({ ...ok, boxes: [ok.boxes[0], { ...ok.boxes[1], x: 90 }] }).join(), /leaves the frame/);
  assert.match(checkSchematic({ ...ok, arrows: [{ from: 'a', to: 'zzz' }] }).join(), /missing box/);
  assert.match(checkSchematic({ ...ok, boxes: [{ ...ok.boxes[0], lines: ['a very long label'] }, ok.boxes[1]] }).join(), /does not fit/);
  assert.match(checkSchematic({ ...ok, desc: 'Two boxes.' }).join(), /schematic/);
  assert.match(checkSchematic({ ...ok, arrows: [{ from: 'a', to: 'b', label: 'a long arrow label here' }] }).join(), /wider than its arrow/);
});

test('zones: a box must be fully inside or fully outside, and the zone must be in the frame', () => {
  assert.deepEqual(checkSchematic({ ...ok, zones: [{ x: 0, y: 10, w: 40, h: 40, tone: 'amber' }] }), []);
  assert.match(checkSchematic({ ...ok, zones: [{ x: 0, y: 10, w: 20, h: 40, tone: 'amber' }] }).join(), /straddles/);
  assert.match(checkSchematic({ ...ok, zones: [{ x: 0, y: 10, w: 140, h: 40, tone: 'amber' }] }).join(), /zone leaves the frame/);
});

test('fromShift moves only the start of an arrow, along the side it leaves', () => {
  const e = arrowEnds(ok, ok.arrows[0]);
  const s = arrowEnds(ok, { from: 'a', to: 'b', fromShift: -3 });
  assert.deepEqual(s.to, e.to);
  assert.deepEqual(s.from, { x: 34, y: 25 });
});

test('arrows run from the facing side of one box to the facing side of the other, and toShift moves only the end', () => {
  const e = arrowEnds(ok, ok.arrows[0]);
  assert.deepEqual(e, { from: { x: 34, y: 28 }, to: { x: 66, y: 28 } });
  const shifted = arrowEnds(ok, { from: 'a', to: 'b', toShift: 4 });
  assert.deepEqual(shifted.from, e.from);
  assert.deepEqual(shifted.to, { x: 66, y: 32 });
});
