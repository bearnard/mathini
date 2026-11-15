import test from 'node:test';
import assert from 'node:assert/strict';
import { AXIAL_TILT, drivenTurns, leverEffort, litFraction, mechanicalAdvantage, phaseName, tideType } from './systemsHelpers';

test('lever: a 60 N load 0,2 m from the fulcrum is balanced by 20 N at 0,6 m, so the mechanical advantage is 3', () => {
  assert.equal(leverEffort(60, 0.2, 0.6), 20);
  assert.equal(mechanicalAdvantage(60, 20), 3);
});

test('a longer effort arm needs less effort, a shorter one needs more', () => {
  assert.ok(leverEffort(60, 0.2, 1.2) < leverEffort(60, 0.2, 0.6));
  assert.ok(leverEffort(60, 0.2, 0.1) > 60);
  assert.throws(() => leverEffort(60, 0, 0.6));
  assert.throws(() => mechanicalAdvantage(60, 0));
});

test('gears: a 10-tooth driver turning a 20-tooth driven gear turns it half a turn per turn, and the reverse doubles it', () => {
  assert.equal(drivenTurns(10, 20), 0.5);
  assert.equal(drivenTurns(20, 10), 2);
  assert.equal(drivenTurns(15, 15), 1);
  assert.throws(() => drivenTurns(0, 5));
});

test('Moon phases: nothing lit at new moon, half at the quarters, all at full moon', () => {
  assert.equal(litFraction(0), 0);
  assert.equal(litFraction(90), 0.5);
  assert.equal(litFraction(180), 1);
  assert.equal(litFraction(270), 0.5);
  assert.deepEqual([0, 90, 180, 270].map(phaseName), ['new moon', 'first quarter', 'full moon', 'last quarter']);
  assert.throws(() => phaseName(45));
});

test('tides: spring tides at new and full moon (lined up), neap at the quarters (right angles)', () => {
  assert.deepEqual([0, 90, 180, 270].map(tideType), ['spring', 'neap', 'spring', 'neap']);
  assert.equal(tideType(360), 'spring');
});

test('the tilt of the Earth is 23,5 degrees', () => assert.equal(AXIAL_TILT, 23.5));
