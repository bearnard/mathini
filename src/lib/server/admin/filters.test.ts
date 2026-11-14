import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFilters, sastDate, sastDayStart, dateRange, previousPeriod, filterKey, SAST_OFFSET_MS } from './filters';

const DAY = 86_400_000;
// 2026-11-14 12:00 SAST (10:00 UTC)
const NOW = Date.UTC(2026, 10, 14, 10, 0, 0);
const p = (q: string, now = NOW) => parseFilters(new URLSearchParams(q), now);

test('SAST day boundaries: 22:00 UTC is already the next SAST day', () => {
  assert.equal(sastDate(Date.UTC(2026, 10, 10, 21, 59, 59)), '2026-11-10');
  assert.equal(sastDate(Date.UTC(2026, 10, 10, 22, 0, 0)), '2026-11-11');
  assert.equal(sastDayStart('2026-11-11'), Date.UTC(2026, 10, 10, 22, 0, 0));
});
test('default is the last 30 days ending today (SAST), inclusive', () => {
  const f = p('');
  assert.equal(f.preset, '30d');
  assert.equal(f.toDate, '2026-11-14');
  assert.equal(f.fromDate, '2026-10-16');
  assert.equal(f.days, 30);
  assert.equal(f.toMs - f.fromMs, 30 * DAY);
});
test('presets: today, 7d, 90d', () => {
  assert.deepEqual([p('range=today').fromDate, p('range=today').days], ['2026-11-14', 1]);
  assert.deepEqual([p('range=7d').fromDate, p('range=7d').days], ['2026-11-08', 7]);
  assert.deepEqual([p('range=90d').fromDate, p('range=90d').days], ['2026-08-17', 90]);
});
test('"today" uses the SAST date even when UTC is still yesterday', () => {
  const lateUtc = Date.UTC(2026, 10, 14, 23, 30, 0); // 01:30 SAST on the 15th
  assert.equal(p('range=today', lateUtc).fromDate, '2026-11-15');
});
test('custom range is inclusive of both ends', () => {
  const f = p('range=custom&from=2026-11-01&to=2026-11-03');
  assert.deepEqual([f.preset, f.fromDate, f.toDate, f.days], ['custom', '2026-11-01', '2026-11-03', 3]);
  assert.equal(f.fromMs, sastDayStart('2026-11-01'));
  assert.equal(f.toMs, sastDayStart('2026-11-04'));
});
test('invalid or reversed or oversized custom ranges fall back to 30d', () => {
  for (const q of ['range=custom', 'range=custom&from=2026-11-05&to=2026-11-01', 'range=custom&from=nope&to=2026-11-01', 'range=custom&from=2026-02-30&to=2026-03-01', 'range=custom&from=2020-01-01&to=2026-01-01']) {
    assert.equal(p(q).preset, '30d', q);
  }
});
test('unknown presets fall back to 30d', () => {
  assert.equal(p('range=forever').preset, '30d');
});
test('grade must be an integer 5..12, otherwise ignored', () => {
  assert.equal(p('grade=6').grade, 6);
  for (const g of ['4', '13', '6.5', 'x', '', '-1']) assert.equal(p(`grade=${g}`).grade, null, g);
});
test('subject must be a short slug, otherwise ignored (SQL-injection shapes are dropped)', () => {
  assert.equal(p('subject=nst').subject, 'nst');
  for (const s of ["nst' OR 1=1 --", 'a b', 'N', 'x'.repeat(40), '', 'nst;DROP']) assert.equal(p(`subject=${encodeURIComponent(s)}`).subject, null, s);
});
test('previous period is the same length immediately before', () => {
  const f = p('range=7d');
  const pf = previousPeriod(f);
  assert.equal(pf.toMs, f.fromMs);
  assert.equal(pf.toMs - pf.fromMs, 7 * DAY);
  assert.equal(pf.toDate, '2026-11-07');
  assert.equal(pf.fromDate, '2026-11-01');
});
test('dateRange lists every day inclusive, across a month end', () => {
  assert.deepEqual(dateRange('2026-10-30', '2026-11-02'), ['2026-10-30', '2026-10-31', '2026-11-01', '2026-11-02']);
});
test('filterKey differs per filter and ignores nothing relevant', () => {
  assert.notEqual(filterKey(p('grade=6')), filterKey(p('grade=7')));
  assert.notEqual(filterKey(p('subject=nst')), filterKey(p('subject=geo')));
  assert.equal(filterKey(p('range=7d')), filterKey(p('range=custom&from=2026-11-08&to=2026-11-14')));
  assert.equal(SAST_OFFSET_MS, 7_200_000);
});
