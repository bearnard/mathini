import test from 'node:test';
import assert from 'node:assert/strict';
import { G_EARTH, G_MOON, PLANETS, closestAndFurthest, distance, ellipse, speed, timeTaken, weight } from './motionHelpers';
import { ELEMENTS, byKind, phColor } from './matterHelpers';

test('speed = distance / time: 120 m in 20 s is 6 m/s', () => {
  assert.equal(speed(120, 20), 6);
  assert.equal(distance(6, 20), 120);
  assert.equal(timeTaken(120, 6), 20);
  assert.throws(() => speed(10, 0));
  assert.throws(() => timeTaken(10, 0));
});

test('equal distances: the run with the shorter time has the greater average speed (400 m in 80 s and 100 s)', () => {
  assert.equal(speed(400, 80), 5);
  assert.equal(speed(400, 100), 4);
  assert.ok(speed(400, 80) > speed(400, 100));
});

test('weight is mass x g, and a 60 kg person weighs about six times less on the Moon, while the mass stays the same', () => {
  assert.equal(weight(60, G_EARTH), 588);
  assert.equal(weight(60, G_MOON), 96);
  assert.ok(Math.abs(weight(60, G_EARTH) / weight(60, G_MOON) - 6.125) < 1e-9);
});

test('a circle has no stretch, a comet orbit is stretched and the Sun is nearer one end', () => {
  assert.deepEqual(ellipse(50, 0), { a: 50, b: 50, c: 0 });
  const comet = ellipse(50, 0.9);
  assert.ok(comet.b < 25 && comet.c === 45);
  assert.deepEqual(closestAndFurthest(50, 0.9), { near: 5, far: 95 });
  assert.throws(() => ellipse(50, 1));
});

test('eight planets, Mercury first and Earth third', () => {
  assert.equal(PLANETS.length, 8);
  assert.deepEqual(PLANETS.slice(0, 4), ['Mercury', 'Venus', 'Earth', 'Mars']);
  assert.equal(PLANETS[5], 'Saturn');
});

test('the first 18 elements are in order of atomic number, left to right and top to bottom', () => {
  assert.equal(ELEMENTS.length, 18);
  const reading = [...ELEMENTS].sort((a, b) => a.period - b.period || a.group - b.group).map((e) => e.n);
  assert.deepEqual(reading, Array.from({ length: 18 }, (_, i) => i + 1));
});

test('periods hold 2, 8 and 8 elements, and each cell is used once', () => {
  assert.deepEqual([1, 2, 3].map((p) => ELEMENTS.filter((e) => e.period === p).length), [2, 8, 8]);
  assert.equal(new Set(ELEMENTS.map((e) => `${e.period}-${e.group}`)).size, 18);
});

test('oxygen and sulfur are non-metals, sodium and magnesium are metals, silicon is a metalloid', () => {
  const kind = (s: string) => ELEMENTS.find((e) => e.symbol === s)!.kind;
  assert.equal(kind('O'), 'non-metal');
  assert.equal(kind('S'), 'non-metal');
  assert.equal(kind('Na'), 'metal');
  assert.equal(kind('Mg'), 'metal');
  assert.equal(kind('Si'), 'metalloid');
  assert.deepEqual(byKind('metal').map((e) => e.symbol), ['Li', 'Be', 'Na', 'Mg', 'Al']);
});

test('indicator colour: red for a strong acid, green at 7, purple for a strong base', () => {
  assert.equal(phColor(0), 'rgb(220,38,38)');
  assert.equal(phColor(7), 'rgb(34,197,94)');
  assert.equal(phColor(14), 'rgb(109,40,217)');
  assert.notEqual(phColor(3), phColor(11));
  assert.throws(() => phColor(15));
});
