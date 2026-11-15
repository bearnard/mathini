import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ALIGNED_OFFSETS, SLOUCHED_OFFSETS, alignmentDeviation, dec, attendance, averageOf, canonEnd, canonStarts, contrastOf, countsToSeconds, eightsOf,
  formationPoints, patternCounts, phraseOf, routineTimeline, sessionMinutes, unisonGap, weakestOf, zigzagPath,
} from './ca9-dance-helpers';

test('counts: eights and a phrase of linked moves', () => {
  assert.deepEqual(eightsOf(24), { full: 3, left: 0 });
  assert.deepEqual(eightsOf(30), { full: 3, left: 6 });
  const p = phraseOf([{ name: 'walk', counts: 8 }, { name: 'twist', counts: 4 }, { name: 'skip', counts: 8 }, { name: 'hold', counts: 4 }]);
  assert.equal(p.total, 24);
  assert.deepEqual(p.eights, { full: 3, left: 0 });
  assert.deepEqual(p.moves.map((m) => m.start), [0, 8, 12, 20]);
});

test('seconds: 32 counts at 120 beats a minute is 16 s, one count is half a second', () => {
  assert.equal(countsToSeconds(32, 120), 16);
  assert.equal(countsToSeconds(1, 120), 0.5);
  assert.equal(countsToSeconds(120, 120), 60);
  assert.equal(countsToSeconds(8, 90), 5.3);
});

test('alignment: the aligned figure has no deviation, the slouched one does', () => {
  assert.equal(alignmentDeviation(ALIGNED_OFFSETS), 0);
  assert.equal(alignmentDeviation(SLOUCHED_OFFSETS), 9);
});

test('dynamics: the biggest jump in energy is the strongest contrast', () => {
  const c = contrastOf([{ name: 'melt', energy: 1 }, { name: 'sway', energy: 2 }, { name: 'stamp', energy: 5 }, { name: 'glide', energy: 3 }]);
  assert.deepEqual(c.jumps.map((j) => j.diff), [1, 3, 2]);
  assert.deepEqual(c.biggest, { from: 1, to: 2, diff: 3 });
});

test('patterns, canon and unison', () => {
  assert.deepEqual(patternCounts('AABA'), { A: 3, B: 1 });
  assert.deepEqual(canonStarts(4, 2), [0, 2, 4, 6]);
  assert.equal(canonEnd(8, 4, 2), 14);
  assert.equal(canonEnd(8, 1, 2), 8);
  assert.equal(unisonGap([0, 0, 0]), 0);
  assert.equal(unisonGap([0, 0, 1]), 1);
  assert.equal(unisonGap(canonStarts(3, 4)), 8);
});

test('formations: every dancer on the stage, no two on the same spot', () => {
  for (const kind of ['line', 'circle', 'diagonal', 'block'] as const) {
    for (const n of [4, 6]) {
      const pts = formationPoints(kind, n);
      assert.equal(pts.length, n);
      assert.ok(pts.every((p) => p.x >= 10 && p.x <= 90 && p.y >= 10 && p.y <= 80), `${kind} ${n} on the stage`);
      assert.equal(new Set(pts.map((p) => `${p.x},${p.y}`)).size, n);
    }
  }
});

test('formations: a line is level, a circle is round, a diagonal climbs, a block has two rows', () => {
  const line = formationPoints('line', 6);
  assert.ok(line.every((p) => p.y === 45));
  const circle = formationPoints('circle', 6);
  for (const p of circle) assert.ok(Math.abs(Math.hypot((p.x - 50) / 20, (p.y - 45) / 28) - 1) < 0.01);
  assert.deepEqual(circle[0], { x: 30, y: 45 });
  const diag = formationPoints('diagonal', 5);
  assert.ok(diag.every((p, k) => k === 0 || (p.x > diag[k - 1].x && p.y < diag[k - 1].y)));
  assert.deepEqual([...new Set(formationPoints('block', 6).map((p) => p.y))], [30, 62]);
});

test('a zigzag route goes left to right and alternates', () => {
  const z = zigzagPath(4, 10, 50, 20, 60);
  assert.equal(z.length, 5);
  assert.ok(z.every((p, k) => k === 0 || p.x > z[k - 1].x));
  assert.deepEqual(z.map((p) => p.y), [20, 60, 20, 60, 20]);
});

test('routine: four sections with 8-count links', () => {
  const r = routineTimeline([{ name: 'Intro', counts: 16 }, { name: 'A', counts: 32 }, { name: 'B', counts: 32 }, { name: 'Ending', counts: 16 }], 8);
  assert.equal(r.total, 120);
  assert.deepEqual(r.eights, { full: 15, left: 0 });
  assert.equal(r.links, 3);
  assert.deepEqual(r.blocks.map((b) => b.kind), ['section', 'link', 'section', 'link', 'section', 'link', 'section']);
  assert.deepEqual(r.blocks.map((b) => b.start), [0, 16, 24, 56, 64, 96, 104]);
  assert.equal(routineTimeline([{ name: 'A', counts: 8 }, { name: 'B', counts: 8 }], 0).total, 16);
});

test('rehearsals and scores', () => {
  assert.deepEqual(attendance([true, true, false, true, true]), { attended: 4, of: 5, percent: 80 });
  const s = [{ name: 'Technique', score: 4 }, { name: 'Timing', score: 2 }, { name: 'Expression', score: 3 }];
  assert.deepEqual(weakestOf(s), { name: 'Timing', score: 2 });
  assert.equal(averageOf(s), 3);
  assert.equal(sessionMinutes([{ name: 'pulse raiser', minutes: 5 }, { name: 'mobilise', minutes: 5 }, { name: 'stretch', minutes: 6 }, { name: 'strengthen', minutes: 4 }]), 20);
});

test('dec writes the decimal comma', () => {
  assert.equal(dec(0.5), '0,5');
  assert.equal(dec(16), '16');
  assert.equal(dec(5.3), '5,3');
});
