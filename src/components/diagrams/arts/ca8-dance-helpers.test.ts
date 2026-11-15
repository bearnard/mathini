import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ALIGNMENT, POSES, accentFlags, barsOf, blockShape, canonEntries, cueCount, energyPoints, formation, minSpacing, motifVariations, pathPoints,
  phraseCounts, splitPlan, timeline,
} from './ca8-dance-helpers';

test('an 8-count phrase laid on the counts, and its bars of four', () => {
  const moves = [{ name: 'Step', counts: 2 }, { name: 'Turn', counts: 2 }, { name: 'Reach', counts: 2 }, { name: 'Close', counts: 2 }];
  assert.equal(phraseCounts(moves), 8);
  assert.deepEqual(timeline(moves).map((s) => [s.name, s.start, s.end]), [['Step', 1, 2], ['Turn', 3, 4], ['Reach', 5, 6], ['Close', 7, 8]]);
  assert.equal(barsOf(8), 2);
  assert.equal(barsOf(32), 8);
  assert.equal(barsOf(6, 3), 2);
});

test('a 4-count motif: repeated is 8, reversed is still 4, slowed is 8', () => {
  const motif = [{ name: 'Reach', counts: 2 }, { name: 'Turn', counts: 1 }, { name: 'Step', counts: 1 }];
  const v = motifVariations(motif);
  assert.equal(v.original.counts, 4);
  assert.equal(v.repeated.counts, 8);
  assert.equal(v.reversed.counts, 4);
  assert.deepEqual(v.reversed.moves.map((m) => m.name), ['Step', 'Turn', 'Reach']);
  assert.equal(v.slowed.counts, 8);
  assert.deepEqual(v.slowed.moves.map((m) => m.counts), [4, 2, 2]);
  assert.deepEqual(v.original.moves, motif);
});

test('accents and cues', () => {
  assert.deepEqual(accentFlags(8, [1, 5]), [true, false, false, false, true, false, false, false]);
  assert.equal(cueCount(9, 1), 8);
  assert.equal(cueCount(5, 2), 3);
});

test('formations: counts, rows and the spacing of a circle of six', () => {
  assert.equal(formation('line', 6).length, 6);
  assert.ok(formation('line', 6).every((p) => p.y === 50));
  assert.equal(formation('diagonal', 4).length, 4);
  assert.deepEqual(blockShape(8, 4), { rows: 2, cols: 4 });
  const block = formation('block', 8, 4);
  assert.equal(new Set(block.map((p) => p.y)).size, 2);
  assert.equal(minSpacing(formation('circle', 6)), 32); // a regular hexagon: side = radius
  assert.ok(minSpacing(formation('circle', 12)) < minSpacing(formation('circle', 6)));
  assert.ok(formation('circle', 6).every((p) => Math.abs(Math.hypot(p.x - 50, p.y - 50) - 32) < 0.01));
});

test('pathways stay inside the box and differ in shape', () => {
  for (const k of ['straight', 'zigzag', 'curved', 'circular'] as const) assert.ok(pathPoints(k).every((p) => p.x >= 0 && p.x <= 100 && p.y >= 0 && p.y <= 100), k);
  assert.equal(pathPoints('straight').length, 2);
  assert.equal(pathPoints('zigzag').length, 5);
  const c = pathPoints('circular');
  assert.deepEqual(c[0], c[c.length - 1]);
});

test('energy: sharp is jagged, smooth is a wave, sustained is flat', () => {
  const sharp = energyPoints('sharp');
  assert.ok(sharp.every((p, i) => i === 0 || p.y !== sharp[i - 1].y));
  assert.ok(energyPoints('sustained').every((p) => p.y === 50));
  const smooth = energyPoints('smooth');
  assert.equal(Math.max(...smooth.map((p) => p.y)) - Math.min(...smooth.map((p) => p.y)), 50);
});

test('canon: a 4-count phrase, offset 2 counts, three dancers; unison has offset 0', () => {
  assert.deepEqual(canonEntries(3, 2, 4), [{ dancer: 1, start: 1, end: 4 }, { dancer: 2, start: 3, end: 6 }, { dancer: 3, start: 5, end: 8 }]);
  assert.ok(canonEntries(3, 0, 4).every((e) => e.start === 1 && e.end === 4));
});

test('sections of a routine in counts and a rehearsal in minutes', () => {
  const routine = splitPlan([{ name: 'Beginning', size: 8 }, { name: 'Development', size: 16 }, { name: 'Ending', size: 8 }]);
  assert.equal(routine.total, 32);
  assert.deepEqual(routine.parts.map((p) => [p.from, p.to, p.percent]), [[1, 8, 25], [9, 24, 50], [25, 32, 25]]);
  assert.equal(barsOf(routine.total), 8);
  const session = splitPlan([{ name: 'Warm-up', size: 10 }, { name: 'Rehearse', size: 25 }, { name: 'Cool-down', size: 5 }]);
  assert.equal(session.total, 40);
  assert.deepEqual(session.parts.map((p) => p.percent), [25, 63, 13]);
  const link = splitPlan([{ name: 'Phrase A', size: 8 }, { name: 'Transition', size: 2 }, { name: 'Phrase B', size: 8 }]);
  assert.equal(link.total, 18);
});

test('levels: high is higher on the page than medium, medium than low; good posture is one vertical line', () => {
  assert.ok(POSES.high.head.y < POSES.medium.head.y && POSES.medium.head.y < POSES.low.head.y);
  assert.ok(POSES.high.hands[0].y < POSES.high.head.y, 'arms are raised at the high level');
  assert.deepEqual(ALIGNMENT.map((a) => a.part), ['Ear', 'Shoulder', 'Hip', 'Knee', 'Ankle']);
  assert.ok(ALIGNMENT.every((a, i) => i === 0 || a.y > ALIGNMENT[i - 1].y), 'ear to ankle runs top to bottom');
});
