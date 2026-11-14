import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadReview, type LoadDeps } from './load';
import { makeQkey } from '../../shared/qkey';
import type { TodayPayload } from './resolve';

const c = (task: string, prompt: string) => ({ qkey: makeQkey(task, prompt), task, subject: 'nst', section: 's' });
const payload = (cands: ReturnType<typeof c>[]): TodayPayload => ({ dueCount: cands.length, candidates: cands, pool: {} });
const item = (prompt: string, kind?: string) => ({ prompt, options: ['a', 'b'], answer: 'a', kind });
function deps(over: Partial<LoadDeps> & { p?: TodayPayload | null } = {}) {
  const retired: string[][] = [], logs: string[] = [];
  const d: LoadDeps = {
    fetchToday: async () => (over.p === undefined ? payload([]) : over.p),
    loaders: async () => ({ t: async () => [item('Q1?'), item('Q2?', 'order')] }),
    retire: (q) => retired.push(q),
    log: (m) => logs.push(m),
    ...over,
  };
  return { d, retired, logs };
}

test('only questions that can really be shown are returned (count is honest)', async () => {
  const { d } = deps({ p: payload([c('t', 'Q1?'), c('t', 'Q2?')]) });
  const r = await loadReview(d, 10);
  assert.deepEqual(r!.map((q) => q.prompt), ['Q1?']); // the 'order' kind is not shown, so it is not counted
});
test('nothing due gives an empty list, and does not touch the banks', async () => {
  let touched = false;
  const { d } = deps({ p: payload([]), loaders: async () => { touched = true; return {}; } });
  assert.deepEqual(await loadReview(d, 10), []);
  assert.equal(touched, false);
});
test('questions that no longer exist are retired', async () => {
  const gone = c('t', 'Old?');
  const { d, retired } = deps({ p: payload([gone, c('t', 'Q1?')]) });
  const r = await loadReview(d, 10);
  assert.equal(r!.length, 1);
  assert.deepEqual(retired, [[gone.qkey]]);
});
test('a failed request gives null (no card) and is logged', async () => {
  const { d, logs } = deps({ p: null });
  assert.equal(await loadReview(d, 10), null);
  assert.deepEqual(logs, ['review load failed']);
});
test('a thrown error gives null, never throws', async () => {
  const { d } = deps({ fetchToday: async () => { throw new Error('offline'); } });
  assert.equal(await loadReview(d, 10), null);
});
test('a hang past the timeout gives null (no card) and is logged', async () => {
  const { d, logs } = deps({ fetchToday: () => new Promise(() => {}), timeoutMs: 20 });
  assert.equal(await loadReview(d, 10), null);
  assert.deepEqual(logs, ['review load timed out']);
});
