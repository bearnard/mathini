import test from 'node:test';
import assert from 'node:assert/strict';
import { DIRECTIONS, GAUGE_LEVEL_MM, GAUGE_MAX_MM, LESSON_MAP_CM, LESSON_SCALE_KM_PER_CM, PROFILE, bearing, gaugeFraction, isSteep, opposite, realKm } from './grade5Helpers';

test('opposite compass directions', () => {
  assert.equal(opposite('NW'), 'SE');
  assert.equal(opposite('N'), 'S');
  assert.equal(opposite('E'), 'W');
  assert.equal(opposite('SW'), 'NE');
  for (const d of DIRECTIONS) assert.equal(opposite(opposite(d)), d);
  for (const d of DIRECTIONS) assert.equal(Math.abs(bearing(d) - bearing(opposite(d))), 180);
});

test('scale: 3 cm at 1 cm = 50 km is 150 km', () => {
  assert.equal(realKm(LESSON_MAP_CM, LESSON_SCALE_KM_PER_CM), 150);
  assert.equal(realKm(1, 50), 50);
  assert.equal(realKm(0, 50), 0);
});

test('the rain gauge reads 32 mm out of 50 mm, which is 64 percent full', () => {
  assert.equal(GAUGE_LEVEL_MM, 32);
  assert.equal(gaugeFraction(GAUGE_LEVEL_MM, GAUGE_MAX_MM) * 100, 64);
});

test('the land profile rises steeply only at the escarpment', () => {
  let before: number = PROFILE[0].height;
  const steep = PROFILE.slice(1).map((z) => {
    const s = isSteep(z, before);
    before = z.height;
    return [z.zone, s];
  });
  assert.deepEqual(steep, [['escarpment', true], ['plateau', false]]);
});
