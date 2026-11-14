import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MIN_PRACTICE_ITEMS, topUpFromBank } from './topUpFromBank';

const item = (p: string) => ({ prompt: p });
const many = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => item(`${prefix} ${i}`));

test('a full pool is returned unchanged (the bank is not mixed in)', () => {
  const pool = many('pool', 20);
  assert.deepEqual(topUpFromBank(pool, many('bank', 30)), pool);
  assert.equal(topUpFromBank(many('pool', MIN_PRACTICE_ITEMS), many('bank', 5)).length, MIN_PRACTICE_ITEMS);
});

test('a short pool is topped up from the bank to the minimum, and never past it', () => {
  const out = topUpFromBank(many('pool', 3), many('bank', 30));
  assert.equal(out.length, MIN_PRACTICE_ITEMS);
  assert.deepEqual(out.slice(0, 3), many('pool', 3), 'fetched items come first, in order');
  assert.equal(out.filter((i) => i.prompt.startsWith('bank')).length, MIN_PRACTICE_ITEMS - 3);
});

test('an empty pool becomes (up to the minimum of) the bank; a small bank is used whole; an empty bank changes nothing', () => {
  assert.equal(topUpFromBank([], many('bank', 30)).length, MIN_PRACTICE_ITEMS);
  assert.equal(topUpFromBank(many('pool', 2), many('bank', 4)).length, 6);
  assert.deepEqual(topUpFromBank(many('pool', 2), []), many('pool', 2));
});

test('bank items already in the pool (same normalised prompt) are not added twice', () => {
  const pool = [item('What is a Cell?'), item('x')];
  const bank = [item('  what is a   cell? '), ...many('bank', 20)];
  const out = topUpFromBank(pool, bank);
  assert.equal(out.filter((i) => i.prompt.toLowerCase().replace(/\s+/g, ' ').trim() === 'what is a cell?').length, 1);
});

test('the bank items chosen vary with the random source, and the inputs are never mutated', () => {
  const pool = many('pool', 1), bank = many('bank', 40);
  const snapshot = JSON.stringify([pool, bank]);
  const a = topUpFromBank(pool, bank, 10, () => 0.01).map((i) => i.prompt).join();
  const b = topUpFromBank(pool, bank, 10, () => 0.99).map((i) => i.prompt).join();
  assert.notEqual(a, b);
  assert.equal(JSON.stringify([pool, bank]), snapshot);
});

test('a custom minimum is honoured', () => {
  assert.equal(topUpFromBank(many('pool', 2), many('bank', 40), 5).length, 5);
});

import { usableForTopUp } from './topUpFromBank';

test('usableForTopUp: a bank MCQ must pass the validator; order/label/explain items are always usable', () => {
  const good = { prompt: 'What is the job of the switch in a circuit?', options: ['It opens and closes the circuit', 'It makes the electricity stronger', 'It stores electrical energy', 'It changes electricity into light'], answer: 'It opens and closes the circuit', explanation: 'A switch makes or breaks the path so the current flows or stops.' };
  const strongTell = { ...good, prompt: 'What is time management?', options: ['Wasting time', 'Organizing and using your time well', 'Studying all the time', 'Never resting'], answer: 'Organizing and using your time well' };
  assert.equal(usableForTopUp(good), true);
  assert.equal(usableForTopUp(strongTell), false);
  assert.equal(usableForTopUp({ prompt: 'Put these in order', kind: 'order', options: ['a', 'b'], answer: 'a|b' }), true, 'an order answer is not an option, and must not be judged as an MCQ');
  assert.equal(usableForTopUp({ prompt: 'Explain why', kind: 'explain', options: ['p1', 'p2'], answer: 'p1|p2' }), true);
});

test('topUpFromBank with usable: bad bank items are not added, so a bad curated question is never reintroduced', () => {
  const bank = [...many('bad', 20), ...many('ok', 20)];
  const out = topUpFromBank(many('pool', 2), bank, 10, Math.random, (i) => i.prompt.startsWith('ok'));
  assert.equal(out.length, 10);
  assert.ok(out.slice(2).every((i) => i.prompt.startsWith('ok')));
  // if too few usable items exist the result simply stays short (the shell then shows what it has)
  assert.equal(topUpFromBank(many('pool', 2), [...many('bad', 20), item('ok 1')], 10, Math.random, (i) => i.prompt.startsWith('ok')).length, 3);
});
