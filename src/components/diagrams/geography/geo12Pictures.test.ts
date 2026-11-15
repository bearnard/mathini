import test from 'node:test';
import assert from 'node:assert/strict';
import { BASIN, BASIN_DESC, BASIN_LABELS, CONFLUENCE, MAIN_RIVER, MOUTH, SOURCE, TRIBUTARIES, WATERSHED, inPolygon } from './geo12Pictures';

const CHAR_W = 6.2 * 0.6;
const box = (l: (typeof BASIN_LABELS)[number]) => {
  const w = l.text.length * CHAR_W;
  const x0 = l.anchor === 'end' ? l.x - w : l.anchor === 'middle' ? l.x - w / 2 : l.x;
  return { x0, x1: x0 + w, y0: l.y - 6.2, y1: l.y + 1.5 };
};
const onSegment = (p: readonly [number, number], a: readonly [number, number], b: readonly [number, number], pad = 0) => {
  const [px, py] = p; const [ax, ay] = a; const [bx, by] = b;
  const dx = bx - ax; const dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy)) <= pad;
};

test('inPolygon: inside, outside and on the boundary', () => {
  const sq = [[0, 0], [10, 0], [10, 10], [0, 10]] as const;
  assert.equal(inPolygon([5, 5], sq), true);
  assert.equal(inPolygon([15, 5], sq), false);
  assert.equal(inPolygon([10, 5], sq), true);
  assert.equal(inPolygon([0, 0], sq), true);
});

test('drainage basin: every river point is inside the watershed, and the river leaves the basin only at its mouth', () => {
  for (const p of MAIN_RIVER) assert.ok(inPolygon(p, WATERSHED), `main river point ${p} is outside the basin`);
  for (const t of TRIBUTARIES) for (const p of t) assert.ok(inPolygon(p, WATERSHED), `tributary point ${p} is outside the basin`);
  // the source is the highest point upstream: the first vertex, and well inside the basin, not on its edge
  const onEdge = (p: readonly [number, number]) => WATERSHED.some((a, i) => onSegment(p, a, WATERSHED[(i + 1) % WATERSHED.length], 0.01));
  assert.equal(onEdge(SOURCE), false);
  assert.equal(onEdge(MOUTH), true, 'the mouth is where the river crosses the watershed');
  for (const p of MAIN_RIVER.slice(1, -1)) assert.equal(onEdge(p), false);
});

test('drainage basin: each tributary ends exactly on the main river (a confluence) and starts away from it', () => {
  for (const t of TRIBUTARIES) {
    const end = t[t.length - 1];
    assert.ok(MAIN_RIVER.some((p) => p[0] === end[0] && p[1] === end[1]), `tributary ends at ${end}, not on the main river`);
    const start = t[0];
    assert.ok(!MAIN_RIVER.some((p) => p[0] === start[0] && p[1] === start[1]));
    // no other part of a tributary touches the main river
    for (const p of t.slice(0, -1)) for (let i = 0; i < MAIN_RIVER.length - 1; i++) assert.equal(onSegment(p, MAIN_RIVER[i], MAIN_RIVER[i + 1], 1.5), false, `${p} touches the main river before the confluence`);
  }
  assert.deepEqual(CONFLUENCE, TRIBUTARIES[0][TRIBUTARIES[0].length - 1]);
  // the two tributaries join at different points: two confluences, one is marked
  assert.notDeepEqual(TRIBUTARIES[0][TRIBUTARIES[0].length - 1], TRIBUTARIES[1][TRIBUTARIES[1].length - 1]);
});

test('drainage basin labels: six, inside the frame, none touching another label or a river', () => {
  assert.equal(BASIN_LABELS.length, 6);
  const boxes = BASIN_LABELS.map(box);
  for (const b of boxes) assert.ok(b.x0 >= 0 && b.x1 <= BASIN.width && b.y0 >= 0 && b.y1 <= BASIN.height);
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i]; const b = boxes[j];
    assert.equal(a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1, false, `${BASIN_LABELS[i].text} overlaps ${BASIN_LABELS[j].text}`);
  }
  const lines = [MAIN_RIVER, ...TRIBUTARIES];
  for (const [li, b] of boxes.entries()) for (const line of lines) for (let k = 0; k < line.length - 1; k++) {
    // sample the segment: no sample falls inside the label box
    for (let s = 0; s <= 20; s++) {
      const x = line[k][0] + ((line[k + 1][0] - line[k][0]) * s) / 20;
      const y = line[k][1] + ((line[k + 1][1] - line[k][1]) * s) / 20;
      assert.equal(x > b.x0 - 0.5 && x < b.x1 + 0.5 && y > b.y0 - 0.5 && y < b.y1 + 0.5, false, `${BASIN_LABELS[li].text} sits on a river`);
    }
  }
  assert.match(BASIN_DESC, /schematic/);
});
