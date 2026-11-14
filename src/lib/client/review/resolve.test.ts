import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveCandidates, type TodayPayload } from './resolve';
import { makeQkey } from '../../shared/qkey';
import type { ReviewBankItem } from './types';
import type { ComponentType } from 'react';

const item = (prompt: string, over: Partial<ReviewBankItem> = {}): ReviewBankItem => ({ prompt, options: ['a', 'b'], answer: 'a', explanation: 'e', ...over });
const cand = (task: string, prompt: string) => ({ qkey: makeQkey(task, prompt), task, subject: 'nst', section: 'sec' });

test('bank questions are found by qkey and loaded once per task', async () => {
  let loads = 0;
  const loaders = { t1: async () => { loads++; return [item('Q1?'), item('Q2?')]; } };
  const payload: TodayPayload = { dueCount: 2, candidates: [cand('t1', 'Q2?'), cand('t1', 'Q1?')], pool: {} };
  const r = await resolveCandidates(payload, loaders, 10);
  assert.deepEqual(r.questions.map((q) => q.item.prompt), ['Q2?', 'Q1?']);
  assert.equal(loads, 1);
  assert.deepEqual(r.gone, []);
});
test('pool questions need no topic module at all', async () => {
  const c = cand('t1', 'Pooled?');
  const payload: TodayPayload = { dueCount: 1, candidates: [c], pool: { [c.qkey]: { id: 7, prompt: 'Pooled?', options: ['x', 'y'], answer: 'x', explanation: '', section: 's' } } };
  const r = await resolveCandidates(payload, {}, 10);
  assert.equal(r.questions[0].itemId, 7);
  assert.equal(r.questions[0].item.explanation, undefined);
});
test('a question missing from a loaded bank (reworded/removed) is reported as gone, not shown', async () => {
  const payload: TodayPayload = { dueCount: 1, candidates: [cand('t1', 'Old wording?')], pool: {} };
  const r = await resolveCandidates(payload, { t1: async () => [item('New wording?')] }, 10);
  assert.deepEqual([r.questions.length, r.gone], [0, [payload.candidates[0].qkey]]);
});
test('a bank that fails to load is skipped and NOT reported as gone', async () => {
  const payload: TodayPayload = { dueCount: 1, candidates: [cand('t1', 'Q?')], pool: {} };
  const r = await resolveCandidates(payload, { t1: async () => { throw new Error('offline'); } }, 10);
  assert.deepEqual([r.questions.length, r.gone.length], [0, 0]);
});
const order = (prompt: string, over: Partial<ReviewBankItem> = {}): ReviewBankItem => ({ kind: 'order', prompt, options: ['one', 'two', 'three'], answer: 'one|two|three', ...over });
const label = (prompt: string, Diagram?: ComponentType<{ showLabels: boolean }>): ReviewBankItem => ({
  kind: 'label', prompt, options: ['Full moon', 'New moon', 'Spare'], answer: 'a=Full moon|b=New moon', Diagram,
  hotspots: [{ id: 'a', x: 10, y: 10 }, { id: 'b', x: 90, y: 90 }],
});

test('order and label items are shown, and the label Diagram component is carried through untouched', async () => {
  const Diagram = (() => null) as ComponentType<{ showLabels: boolean }>;
  const payload: TodayPayload = { dueCount: 3, candidates: [cand('t1', 'Put in order'), cand('t1', 'Label the Moon'), cand('t1', 'MC?')], pool: {} };
  const r = await resolveCandidates(payload, { t1: async () => [order('Put in order'), label('Label the Moon', Diagram), item('MC?')] }, 10);
  assert.deepEqual(r.questions.map((q) => q.item.kind ?? 'mcq'), ['order', 'label', 'mcq']);
  assert.equal(r.questions[1].item.Diagram, Diagram, 'same function reference');
  assert.deepEqual(r.questions[1].item.hotspots?.length, 2);
  assert.deepEqual(r.gone, []);
});
test('malformed order/label items are skipped, not shown and not retired', async () => {
  const bad1 = order('Bad order', { answer: 'one|two' }); // not a permutation of the options
  const bad2 = label('Bad label'); // no image or Diagram
  const payload: TodayPayload = { dueCount: 2, candidates: [cand('t1', 'Bad order'), cand('t1', 'Bad label')], pool: {} };
  const r = await resolveCandidates(payload, { t1: async () => [bad1, bad2] }, 10);
  assert.deepEqual([r.questions.length, r.gone], [0, []]);
});
test('an unknown future kind is played as mcq when valid, skipped otherwise', async () => {
  const future = { ...item('Future?'), kind: 'sort' } as unknown as ReviewBankItem;
  const broken = { prompt: 'Broken?', options: ['a'], answer: 'zzz', kind: 'sort' } as unknown as ReviewBankItem;
  const payload: TodayPayload = { dueCount: 2, candidates: [cand('t1', 'Future?'), cand('t1', 'Broken?')], pool: {} };
  const r = await resolveCandidates(payload, { t1: async () => [future, broken] }, 10);
  assert.deepEqual(r.questions.map((q) => q.item.prompt), ['Future?']);
});
test('unknown task has no loader: gone. The limit stops loading further topics', async () => {
  let loads = 0;
  const loaders = { a: async () => { loads++; return [item('A?')]; }, b: async () => { loads++; return [item('B?')]; } };
  const payload: TodayPayload = { dueCount: 3, candidates: [cand('a', 'A?'), cand('b', 'B?'), cand('zzz', 'Z?')], pool: {} };
  const r = await resolveCandidates(payload, loaders, 1);
  assert.equal(r.questions.length, 1);
  assert.equal(loads, 1, 'topic b is never downloaded');
  const r2 = await resolveCandidates({ ...payload, candidates: [cand('zzz', 'Z?')] }, loaders, 10);
  assert.equal(r2.gone.length, 1);
});
