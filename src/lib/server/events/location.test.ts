import { test } from 'node:test';
import assert from 'node:assert/strict';
import { locationFromCf, reduceLocationForDnt, reduceLocationToRegion, round1 } from './location';

const CF = { country: 'za', region: 'Gauteng', regionCode: 'GT', city: 'Johannesburg', timezone: 'Africa/Johannesburg', latitude: '-26.20227', longitude: '28.04363' };

test('round1 rounds to one decimal place and accepts numeric strings', () => {
  assert.equal(round1('-26.20227'), -26.2);
  assert.equal(round1(28.04363), 28);
  assert.equal(round1('28.05'), 28.1);
  assert.equal(round1(-0.04), 0);
});
test('round1 rejects non-numbers', () => {
  assert.equal(round1('abc'), null);
  assert.equal(round1(undefined), null);
  assert.equal(round1(NaN), null);
  assert.equal(round1(Infinity), null);
});
test('locationFromCf maps Cloudflare fields and rounds coordinates', () => {
  assert.deepEqual(locationFromCf(CF), {
    country: 'ZA', region: 'Gauteng', region_code: 'GT', city: 'Johannesburg', timezone: 'Africa/Johannesburg', lat: -26.2, lon: 28,
  });
});
test('no coordinate has more than one decimal place', () => {
  const loc = locationFromCf(CF);
  for (const v of [loc.lat, loc.lon]) assert.equal(v, Math.round((v as number) * 10) / 10);
});
test('missing cf (local dev) gives all nulls', () => {
  const loc = locationFromCf(undefined);
  assert.ok(Object.values(loc).every((v) => v === null));
});
test('a lone latitude without longitude is dropped', () => {
  const loc = locationFromCf({ country: 'ZA', latitude: '-26.2' });
  assert.equal(loc.lat, null);
  assert.equal(loc.lon, null);
});
test('over-long values are truncated', () => {
  assert.equal(locationFromCf({ city: 'x'.repeat(500) }).city?.length, 80);
});
test('Do Not Track keeps the country only', () => {
  const r = reduceLocationForDnt(locationFromCf(CF));
  assert.equal(r.country, 'ZA');
  assert.ok(Object.entries(r).every(([k, v]) => k === 'country' || v === null));
});
test('region reduction keeps country, province and timezone and drops city and coordinates', () => {
  const r = reduceLocationToRegion(locationFromCf(CF));
  assert.deepEqual(r, { country: 'ZA', region: 'Gauteng', region_code: 'GT', city: null, timezone: 'Africa/Johannesburg', lat: null, lon: null });
});
