import test from 'node:test';
import assert from 'node:assert/strict';
import { COLD_ADVANCE, COLD_AHEAD_POINT, COLD_AIR, COLD_FRONT, DESC, H, LABELS, LOW, MOTION, W, WARM_ADVANCE, WARM_FRONT, WEDGE_POINT, advance, pointsAlong } from './geo12Cyclone';
import { inPolygon } from './geo12Pictures';

const dot = (a: readonly [number, number], b: readonly [number, number]) => a[0] * b[0] + a[1] * b[1];

test('both fronts start at the low and end on the old polar front line, cold front on the west, warm front on the east', () => {
  assert.deepEqual(COLD_FRONT[0], LOW);
  assert.deepEqual(WARM_FRONT[0], LOW);
  assert.equal(COLD_FRONT[COLD_FRONT.length - 1][1], WARM_FRONT[WARM_FRONT.length - 1][1]);
  assert.ok(COLD_FRONT[COLD_FRONT.length - 1][0] < LOW[0], 'the cold front trails behind (west of) the low');
  assert.ok(WARM_FRONT[WARM_FRONT.length - 1][0] > LOW[0], 'the warm front lies ahead (east) of the low');
  // the low is at the POLAR (south, lower) apex of the wave: both fronts rise (north) from it
  for (const f of [COLD_FRONT, WARM_FRONT]) for (const p of f.slice(1)) assert.ok(p[1] < LOW[1]);
});

test('each front moves toward the air it displaces: cold front into the warm wedge, warm front into the cold air ahead; both move eastward', () => {
  assert.ok(dot(COLD_ADVANCE, [WEDGE_POINT[0] - 66, WEDGE_POINT[1] - 36]) > 0);
  assert.ok(dot(WARM_ADVANCE, [COLD_AHEAD_POINT[0] - 122, COLD_AHEAD_POINT[1] - 42]) > 0);
  assert.ok(COLD_ADVANCE[0] > 0, 'the cold front advances eastward');
  assert.ok(WARM_ADVANCE[0] > 0, 'the warm front advances eastward');
  // the helper picks the side that faces the given point, whichever way the line is drawn
  assert.deepEqual(advance(COLD_FRONT, WEDGE_POINT), COLD_ADVANCE);
  assert.notDeepEqual(advance(COLD_FRONT, [0, 100]), COLD_ADVANCE);
});

test('air masses: the wedge between the fronts is warm (not in the cold polygon); south of the front and ahead of the warm front is cold', () => {
  assert.equal(inPolygon(WEDGE_POINT, COLD_AIR), false, 'the warm sector is not cold air');
  assert.equal(inPolygon([20, 70], COLD_AIR), true, 'behind the cold front, south of the polar front: cold');
  assert.equal(inPolygon(COLD_AHEAD_POINT, COLD_AIR), true, 'ahead of the warm front: cold');
  assert.equal(inPolygon([90, 8], COLD_AIR), false, 'north of the polar front: warm');
  assert.equal(inPolygon([170, 10], COLD_AIR), false);
});

test('front symbols: spaced along the line, none past its ends', () => {
  for (const f of [COLD_FRONT, WARM_FRONT]) {
    const s = pointsAlong(f, 9);
    assert.ok(s.length >= 3);
    for (const { p } of s) assert.ok(p[0] >= 0 && p[0] <= W && p[1] >= 0 && p[1] <= H);
  }
});

test('labels: six, inside the frame, none overlapping another; motion arrow points east; description says schematic and southern hemisphere', () => {
  assert.equal(LABELS.length, 6);
  const w = (t: string) => t.length * 6.2 * 0.6;
  const box = (l: (typeof LABELS)[number]) => { const x0 = l.anchor === 'end' ? l.x - w(l.text) : l.anchor === 'middle' ? l.x - w(l.text) / 2 : l.x; return { x0, x1: x0 + w(l.text), y0: l.y - 6.2, y1: l.y + 1.5 }; };
  const boxes = LABELS.map(box);
  for (const b of boxes) assert.ok(b.x0 >= 0 && b.x1 <= W && b.y0 >= 0 && b.y1 <= H);
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i]; const b = boxes[j];
    assert.equal(a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1, false, `${LABELS[i].text} overlaps ${LABELS[j].text}`);
  }
  assert.ok(MOTION.to[0] > MOTION.from[0] && MOTION.to[1] === MOTION.from[1]);
  assert.match(DESC, /schematic/);
  assert.match(DESC, /southern hemisphere/);
});
