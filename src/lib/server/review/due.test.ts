import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickDue, type DueRow } from './due';

const r = (qkey: string, task: string, due_day: number): DueRow => ({ qkey, task, subject: 'nst', section: 's', due_day });

test('only questions due today or earlier are picked', () => {
  const out = pickDue([r('a', 't1', 10), r('b', 't1', 11), r('c', 't1', 12)], 11);
  assert.deepEqual(out.map((x) => x.qkey), ['a', 'b']);
});
test('topics are interleaved round-robin, most overdue topic first, most overdue first within a topic', () => {
  const rows = [r('a1', 'A', 5), r('a2', 'A', 6), r('a3', 'A', 7), r('b1', 'B', 4), r('b2', 'B', 9), r('c1', 'C', 8)];
  assert.deepEqual(pickDue(rows, 10).map((x) => x.qkey), ['b1', 'a1', 'c1', 'b2', 'a2', 'a3']);
});
test('the limit is respected and the order is deterministic', () => {
  const rows = Array.from({ length: 50 }, (_, i) => r('q' + String(i).padStart(2, '0'), 'T' + (i % 3), 1));
  const a = pickDue(rows, 5, 10);
  assert.equal(a.length, 10);
  assert.deepEqual(pickDue([...rows].reverse(), 5, 10), a);
});
test('nothing due gives an empty list', () => {
  assert.deepEqual(pickDue([r('a', 't', 20)], 10), []);
  assert.deepEqual(pickDue([], 10), []);
});
