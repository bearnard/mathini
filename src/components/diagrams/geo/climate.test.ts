import test from 'node:test';
import assert from 'node:assert/strict';
import { CITIES, POLAR_CIRCLE, TROPIC, latOffset, rimPoint, zoneOf } from './climate';

test('zones: tropical within 23.5 of the Equator, polar beyond 66.5, temperate between, in both hemispheres', () => {
  assert.equal(zoneOf(0), 'tropical');
  assert.equal(zoneOf(23.5), 'tropical');
  assert.equal(zoneOf(23.6), 'temperate');
  assert.equal(zoneOf(-23.6), 'temperate');
  assert.equal(zoneOf(66.5), 'temperate');
  assert.equal(zoneOf(66.6), 'polar');
  assert.equal(zoneOf(-90), 'polar');
});

test('the two lines are 90 apart (axial tilt): 23.5 + 66.5 = 90', () => {
  assert.equal(TROPIC + POLAR_CIRCLE, 90);
});

test('the lesson cities: Manaus is in the tropics, Cairo is just beyond the Tropic of Cancer', () => {
  assert.equal(zoneOf(CITIES.manaus.lat), 'tropical');
  assert.equal(zoneOf(CITIES.cairo.lat), 'temperate');
  assert.ok(CITIES.cairo.lat > TROPIC && CITIES.cairo.lat < POLAR_CIRCLE);
  assert.ok(CITIES.manaus.lat < 0 && CITIES.cairo.lat > 0);
});

test('side-view geometry: the Equator is level, the tropic is a sine of the radius, and rim points sit on the circle', () => {
  assert.equal(latOffset(0, 42), 0);
  assert.equal(latOffset(90, 42), 42);
  assert.equal(latOffset(23.5, 42), 16.7);
  for (const lat of [CITIES.manaus.lat, CITIES.cairo.lat, 60]) {
    const p = rimPoint(lat, 74, 58, 42);
    assert.ok(Math.abs(Math.hypot(p.x - 74, p.y - 58) - 42) < 0.1);
  }
  assert.ok(rimPoint(30, 74, 58, 42).y < 58, 'north is up');
  assert.ok(rimPoint(-3, 74, 58, 42).y > 58, 'south is down');
});
