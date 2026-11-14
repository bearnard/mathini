import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadReview, type LoadDeps } from './load';
import { makeQkey } from '../../shared/qkey';
import type { TodayPayload } from './resolve';

const c = (task: string, prompt: string) => ({ qkey: makeQkey(task, prompt), task, subject: 'nst', section: 's' });
const payload = (cands: ReturnType<typeof c>[]): TodayPayload => ({ dueCount: cands.length, candidates: cands, pool: {} });
import type { ReviewBankItem } from './types';
const item = (prompt: string, kind?: ReviewBankItem['kind'], over: Partial<ReviewBankItem> = {}): ReviewBankItem => ({ prompt, options: ['a', 'b'], answer: 'a', kind, ...over });
function deps(over: Partial<LoadDeps> & { p?: TodayPayload | null } = {}) {
  const retired: string[][] = [], logs: string[] = [];
  const d: LoadDeps = {
    fetchToday: async () => (over.p === undefined ? payload([]) : over.p),
    loaders: async () => ({ t: async () => [item('Q1?'), item('Q2?', 'order', { options: ['x', 'y'], answer: 'x|y' }), item('Q3?', 'order', { answer: 'nope' })] }),
    retire: (q) => retired.push(q),
    log: (m) => logs.push(m),
    ...over,
  };
  return { d, retired, logs };
}

test('the count is honest: valid mcq and order items count, a malformed one does not', async () => {
  const { d } = deps({ p: payload([c('t', 'Q1?'), c('t', 'Q2?'), c('t', 'Q3?')]) });
  const r = await loadReview(d, 10);
  assert.deepEqual(r!.map((q) => q.item.prompt), ['Q1?', 'Q2?']);
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
