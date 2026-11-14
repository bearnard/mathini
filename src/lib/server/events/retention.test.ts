import { test } from 'node:test';
import assert from 'node:assert/strict';
import { purgeOldEvents, retentionCutoff, shouldPurge, RETENTION_DAYS, PURGE_BATCH } from './retention';

const DAY = 24 * 60 * 60 * 1000;

test('cutoff is 400 days before now', () => {
  assert.equal(RETENTION_DAYS, 400);
  assert.equal(retentionCutoff(1_000 * DAY), 600 * DAY);
});
test('purge issues one bounded DELETE of events older than the cutoff', async () => {
  const calls: { sql: string; args: unknown[] }[] = [];
  const db = { prepare: (sql: string) => ({ bind: (...args: unknown[]) => ({ run: async () => { calls.push({ sql, args }); } }) }) };
  await purgeOldEvents(db, 1_000 * DAY);
  assert.equal(calls.length, 1);
  assert.match(calls[0].sql, /DELETE FROM events/);
  assert.match(calls[0].sql, /LIMIT \?/);
  assert.deepEqual(calls[0].args, [600 * DAY, PURGE_BATCH]);
});
test('purge runs for roughly 1 request in 200', () => {
  assert.equal(shouldPurge(0.001), true);
  assert.equal(shouldPurge(0.5), false);
  assert.equal(shouldPurge(0.005), false);
});
