import test from 'node:test';
import assert from 'node:assert/strict';
import { LIGHT_MINUTE_KM, LIGHT_HOUR_KM, LIGHT_YEAR_KM_EXACT, trillionKm, ALPHA_CENTAURI_LY, lightMinutes, lightDistanceKm, DISTANCES, spiralArm, TELESCOPES, telescopeFor, GOOD_CONDITIONS } from './space8Helpers';

test('light minutes, hours and years (plain arithmetic)', () => {
  assert.equal(LIGHT_MINUTE_KM, 300000 * 60);
  assert.equal(LIGHT_MINUTE_KM, 18000000);
  assert.equal(LIGHT_HOUR_KM, 1080000000);
  assert.equal(lightMinutes(8 * LIGHT_MINUTE_KM), 8);
  assert.equal(lightMinutes(150000000), 8.333);
  assert.equal(8 * LIGHT_MINUTE_KM, 144000000); // about the 150 million km of the Earth-Sun distance
  assert.ok(Math.abs(LIGHT_YEAR_KM_EXACT / 1e12 - 9.46) < 0.01); // the CAPS rounds this to 10 trillion
  assert.equal(trillionKm(ALPHA_CENTAURI_LY), 42);
  assert.equal(trillionKm(1), 10);
  assert.equal(13 * LIGHT_HOUR_KM, 14040000000);
  assert.equal(lightDistanceKm(1), 300000);
});

test('the distances grow in order', () => {
  assert.equal(DISTANCES.length, 4);
  assert.equal(DISTANCES[0].light, '8 light minutes');
});

test('the Milky Way drawing and the telescopes', () => {
  const arm = spiralArm(0, 2, 20, 40);
  assert.equal(arm.length, 20);
  const radius = (p: { x: number; y: number }) => Math.hypot(p.x, p.y);
  assert.ok(radius(arm[19]) > radius(arm[0]));
  // the second of two arms starts on the opposite side of the centre
  const a0 = spiralArm(0, 2, 5, 40)[0], b0 = spiralArm(1, 2, 5, 40)[0];
  assert.ok(Math.abs(a0.x + b0.x) < 0.01 && Math.abs(a0.y + b0.y) < 0.01);
  assert.equal(telescopeFor('light'), 'optical');
  assert.equal(telescopeFor('radio waves'), 'radio');
  assert.ok(TELESCOPES.optical.examples.includes('SALT') && TELESCOPES.radio.examples.includes('SKA'));
  assert.equal(GOOD_CONDITIONS.length, 3);
});
