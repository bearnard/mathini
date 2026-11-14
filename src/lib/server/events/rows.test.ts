import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildEventRows, INSERT_EVENT_SQL } from './rows';
import { locationFromCf } from './location';
import type { CleanEvent } from './validate';

const event: CleanEvent = { type: 'topic_open', deviceId: 'dev-12345678', sessionId: 'ses-12345678', grade: 6, subject: 'nst', topic: 'nst-solar-system', path: '/app', referrer: 'google.com', meta: '{"a":1}' };
const loc = locationFromCf({ country: 'ZA', region: 'Gauteng', regionCode: 'GT', city: 'Pretoria', timezone: 'Africa/Johannesburg', latitude: '-25.7479', longitude: '28.2293' });
const ua = { device: 'mobile' as const, browser: 'Chrome', os: 'Android' };

test('the INSERT has one placeholder per column', () => {
  const cols = INSERT_EVENT_SQL.match(/\(ts[^)]*\)/)![0].split(',').length;
  assert.equal((INSERT_EVENT_SQL.match(/\?/g) ?? []).length, cols);
  assert.equal(cols, 21);
});
test('a normal event gets server-side ts, student, location and device', () => {
  const [row] = buildEventRows([event], { now: 12345, studentId: 'stu-1', location: loc, ua, dnt: false });
  assert.equal(row.length, 21);
  assert.deepEqual(row, [12345, 'topic_open', 'dev-12345678', 'ses-12345678', 'stu-1', 6, 'nst', 'nst-solar-system', '/app', 'ZA', 'Gauteng', 'GT', 'Pretoria', 'Africa/Johannesburg', -25.7, 28.2, 'mobile', 'Chrome', 'Android', 'google.com', '{"a":1}']);
});
test('anonymous visitors have a null student id', () => {
  const [row] = buildEventRows([event], { now: 1, studentId: null, location: loc, ua, dnt: false });
  assert.equal(row[4], null);
});
test('Do Not Track nulls student, region, city, timezone and coordinates; keeps country', () => {
  const [row] = buildEventRows([event], { now: 1, studentId: 'stu-1', location: loc, ua, dnt: true });
  assert.equal(row[4], null);
  assert.equal(row[9], 'ZA');
  assert.deepEqual(row.slice(10, 16), [null, null, null, null, null, null]);
});
test('missing location (local dev) stores nulls', () => {
  const [row] = buildEventRows([event], { now: 1, studentId: null, location: null, ua, dnt: false });
  assert.deepEqual(row.slice(9, 16), [null, null, null, null, null, null, null]);
});
