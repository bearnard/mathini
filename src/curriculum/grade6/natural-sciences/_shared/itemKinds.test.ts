import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  isLabelCorrect, isOrderCorrect, itemProblem, kindOf, labelMapping, labelResults, normaliseItem,
  orderPositionResults, shuffleOptions,
} from './itemKinds';
import type { NstItem } from './types';

const order: NstItem = { kind: 'order', prompt: 'p', options: ['a', 'b', 'c'], answer: 'a|b|c' };
const label: NstItem = {
  kind: 'label', prompt: 'p', image: { src: '/x.png', alt: 'x' },
  hotspots: [{ id: 'h1', x: 10, y: 10 }, { id: 'h2', x: 50, y: 90 }],
  options: ['Cell', 'Bulb', 'Switch'], answer: 'h1=Cell|h2=Bulb',
};

test('kindOf defaults to mcq and treats unknown kinds as mcq', () => {
  assert.equal(kindOf({}), 'mcq');
  assert.equal(kindOf({ kind: 'order' }), 'order');
  assert.equal(kindOf({ kind: 'weird' as never }), 'mcq');
});

test('order: only the exact sequence is correct', () => {
  assert.equal(isOrderCorrect(order, ['a', 'b', 'c']), true);
  assert.equal(isOrderCorrect(order, ['a', 'c', 'b']), false);
  assert.equal(isOrderCorrect(order, ['c', 'b', 'a']), false);
  assert.equal(isOrderCorrect(order, ['a', 'b']), false, 'incomplete is wrong');
  assert.equal(isOrderCorrect(order, ['a', 'b', 'c', 'c']), false);
  assert.equal(isOrderCorrect(order, []), false);
});

test('order: per-position results', () => {
  assert.deepEqual(orderPositionResults(order, ['a', 'c', 'b']), [true, false, false]);
  assert.deepEqual(orderPositionResults(order, ['a']), [true, false, false]);
});

test('label: mapping, results and full correctness', () => {
  assert.deepEqual(labelMapping(label), { h1: 'Cell', h2: 'Bulb' });
  assert.equal(isLabelCorrect(label, { h1: 'Cell', h2: 'Bulb' }), true);
  assert.equal(isLabelCorrect(label, { h1: 'Cell', h2: 'Switch' }), false);
  assert.equal(isLabelCorrect(label, { h1: 'Cell' }), false, 'missing hotspot is wrong');
  assert.deepEqual(labelResults(label, { h1: 'Bulb', h2: 'Bulb' }), { h1: false, h2: true });
  assert.equal(isLabelCorrect({ answer: '' }, {}), false);
});

test('label: a label containing "=" survives (only the first = splits)', () => {
  assert.deepEqual(labelMapping({ answer: 'h1=a=b|h2=c' }), { h1: 'a=b', h2: 'c' });
});

test('itemProblem accepts good items and names the problem otherwise', () => {
  assert.equal(itemProblem(order), null);
  assert.equal(itemProblem(label), null);
  assert.equal(itemProblem({ prompt: 'p', options: ['a', 'b'], answer: 'a' }), null);
  assert.match(itemProblem({ prompt: 'p', options: ['a', 'b'], answer: 'z' }) ?? '', /mcq/);
  assert.match(itemProblem({ ...order, answer: 'a|b|z' }) ?? '', /permutation/);
  assert.match(itemProblem({ ...order, options: ['a', 'a', 'b'], answer: 'a|a|b' }) ?? '', /repeat/);
  assert.match(itemProblem({ ...label, hotspots: [] }) ?? '', /hotspots/);
  assert.match(itemProblem({ ...label, image: undefined }) ?? '', /image or a Diagram/);
  assert.match(itemProblem({ ...label, hotspots: [{ id: 'h1', x: 101, y: 0 }, { id: 'h2', x: 0, y: 0 }] }) ?? '', /0-100/);
  assert.match(itemProblem({ ...label, answer: 'h1=Cell' }) ?? '', /every hotspot/);
  assert.match(itemProblem({ ...label, answer: 'h1=Cell|h2=Cell' }) ?? '', /share a label/);
  assert.match(itemProblem({ ...label, options: ['Cell'] }) ?? '', /missing from options/);
});

test('normaliseItem: unknown kind falls back to mcq, or is skipped, and never throws', () => {
  const unknownOk = { prompt: 'p', options: ['a', 'b'], answer: 'a', kind: 'future' } as unknown as NstItem;
  assert.equal(normaliseItem(unknownOk)?.kind, 'mcq');
  const unknownBad = { prompt: 'p', options: ['a', 'b'], answer: 'a|b', kind: 'future' } as unknown as NstItem;
  assert.equal(normaliseItem(unknownBad), null);
  assert.equal(normaliseItem({ kind: 'label', prompt: 'p', options: [], answer: '' } as NstItem), null);
  assert.equal(normaliseItem(null as never), null);
  assert.equal(normaliseItem({ prompt: 5 } as never), null);
  assert.equal(normaliseItem(order), order);
});

test('shuffleOptions never presents an order item already in the right sequence', () => {
  const twoStep: NstItem = { kind: 'order', prompt: 'p', options: ['a', 'b'], answer: 'a|b' };
  for (let i = 0; i < 200; i++) {
    const shown = shuffleOptions(twoStep);
    assert.notDeepEqual(shown, ['a', 'b']);
    assert.deepEqual([...shown].sort(), ['a', 'b']);
  }
  // identity rng keeps the order, so the guard has to rotate it
  assert.notDeepEqual(shuffleOptions(order, () => 0.999999), ['a', 'b', 'c']);
});

// ---- explain (self-marked, memo style) ----
import { explainMarks, explainPoints, isExplainCorrect, marksOf } from './itemKinds';

const explain: NstItem = {
  kind: 'explain', prompt: 'Explain x', options: ['point one', 'point two', 'point three'], answer: 'point one|point two|point three',
};

test('explain: points, marks and the 70% rule (integer maths, rounded up)', () => {
  assert.deepEqual(explainPoints(explain), ['point one', 'point two', 'point three']);
  assert.equal(explainMarks(explain), 3);
  assert.equal(marksOf(explain), 3);
  assert.equal(marksOf({ prompt: 'p', options: ['a', 'b'], answer: 'a' }), 1);
  assert.equal(marksOf(order), 1);
  assert.equal(marksOf(label), 1);
  // total -> marks needed: 2->2, 3->3, 4->3, 5->4, 6->5, 7->5, 10->7 (10 would be 8 with floating point)
  const need = (t: number) => { let g = 0; while (!isExplainCorrect(g, t)) g++; return g; };
  assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 10].map(need), [1, 2, 3, 3, 4, 5, 5, 7]);
  assert.equal(isExplainCorrect(0, 0), false, 'a question with no marks is never correct');
  assert.equal(isExplainCorrect(2, 3), false, '2 of 3 is below the bar');
  assert.equal(isExplainCorrect(5, 6), true, 'one miss allowed on 6 marks');
});

test('explain: itemProblem accepts good items and names the problem otherwise', () => {
  assert.equal(itemProblem(explain), null);
  assert.equal(itemProblem({ ...explain, marks: 3 }), null);
  assert.match(itemProblem({ ...explain, marks: 4 }) ?? '', /marks must equal/);
  assert.match(itemProblem({ ...explain, options: ['only one'], answer: 'only one' }) ?? '', /at least two/);
  assert.match(itemProblem({ ...explain, options: ['a', 'a'], answer: 'a|a' }) ?? '', /repeat/);
  assert.match(itemProblem({ ...explain, options: ['a', 'b'], answer: 'a|c' }) ?? '', /same set/);
  assert.match(itemProblem({ ...explain, options: ['a', ' '], answer: 'a| ' }) ?? '', /empty/);
});

test('explain: an unknown kind is still skipped, a valid explain item is kept as is', () => {
  assert.equal(normaliseItem(explain), explain);
  assert.equal(normaliseItem({ ...explain, kind: 'essay' as never }), null, 'would not be valid mcq (answer not in options)');
});

test('explain: memo points keep the memo order when options are prepared for display', () => {
  for (let i = 0; i < 50; i++) assert.deepEqual(shuffleOptions(explain), explain.options);
});
