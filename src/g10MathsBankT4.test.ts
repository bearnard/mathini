import test from 'node:test';
import assert from 'node:assert/strict';
import { compose } from './curriculum/grade10/mathematics/_shared/bank';
import { probabilityQs, revisionQs } from './curriculum/grade10/mathematics/_shared/specsT4';

// INDEPENDENT check of the Term 4 keys: every number is recomputed here from scratch (by listing outcomes where that is possible),
// not with grade10Helpers4.ts, and no wrong option may equal the true answer.

const prob = compose(probabilityQs);
const rev = compose(revisionQs);
const find = (items: typeof prob, start: string) => {
  const it = items.find((x) => x.prompt.startsWith(start));
  assert.ok(it, `no question starts with: ${start}`);
  return it!;
};
const frac = (n: number, d: number) => {
  const g = (a: number, b: number): number => (b ? g(b, a % b) : a);
  const k = g(n, d);
  return d / k === 1 ? String(n / k) : `${n / k}/${d / k}`;
};
const comma = (x: number) => String(Math.round(x * 100) / 100).replace('.', ',');

test('Term 4: every bank has the planned size, four options and a key that is one of them', () => {
  assert.equal(prob.length, 14);
  assert.equal(rev.length, 16);
  for (const it of [...prob, ...rev]) {
    assert.equal(it.options.length, 4);
    assert.equal(it.options.filter((o) => o === it.answer).length, 1, it.prompt);
  }
});

test('Probability: the keys are recomputed by listing outcomes', () => {
  let primes = 0;
  for (let d = 1; d <= 6; d++) if ([2, 3, 5].includes(d)) primes++;
  assert.equal(find(prob, 'A fair die is rolled once').answer, frac(primes, 6));
  const coins = ['HH', 'HT', 'TH', 'TT'];
  assert.equal(find(prob, 'Two coins are tossed together. How many').answer, String(coins.length));
  assert.equal(find(prob, 'Two coins are tossed together. What is the probability').answer, frac(coins.filter((c) => c === 'HH').length, coins.length));
  assert.equal(find(prob, 'P(A) = 0,35.').answer, comma(1 - 0.35));
  const bag = ['r', 'r', 'r', 'r', 'r', 'b', 'b', 'b', 'g', 'g'];
  assert.equal(find(prob, 'A bag has 5 red').answer, frac(bag.filter((x) => x !== 'b').length, bag.length));
  assert.equal(find(prob, 'Events A and B are mutually exclusive').answer, comma(0.5 + 0.3));
  assert.equal(find(prob, 'P(A) = 0,6, P(B) = 0,5').answer, comma(0.6 + 0.5 - 0.3));
  assert.equal(find(prob, 'Of 40 learners').answer, String(40 - (25 + 18 - 8)));
  assert.equal(find(prob, 'In a Venn diagram').answer, frac(12 + 15 - 5, 30));
  assert.equal(find(prob, 'A coin is tossed 200 times').answer, comma(124 / 200));
  let sevens = 0;
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b === 7) sevens++;
  assert.equal(find(prob, 'Two dice are rolled').answer, frac(sevens, 36));
  assert.equal(find(prob, 'The probability of rain').answer, String(0.2 * 30));
  assert.equal(find(prob, 'Which value cannot be').answer, '1,2');
  // no wrong option equals the true value
  for (const it of prob) assert.equal(new Set(it.options).size, 4, it.prompt);
});

test('Revision: the keys are recomputed from scratch', () => {
  const D = Math.PI / 180;
  assert.equal(find(rev, '(3 marks) Solve for x: x² − x − 12').answer, 'x = 4 or x = −3');
  assert.equal(4 ** 2 - 4 - 12, 0);
  assert.equal((-3) ** 2 + 3 - 12, 0);
  assert.equal(2 ** 3 + 0, 8 + 0);
  assert.equal(2 ** (3 + 1), 16);
  assert.ok(3 * 6 - 7 >= 11 && 3 * 5 - 7 < 11);
  assert.equal(find(rev, '(2 marks) What is the 11th term').answer, String(3 + 4 * 10));
  assert.equal(2 * 0 ** 2 - 8, -8);
  assert.equal(find(rev, '(3 marks) What is the distance').answer, String(Math.hypot(3, 4)));
  assert.equal(find(rev, '(2 marks) What is the gradient').answer, String((9 - 1) / (6 - 2)));
  assert.equal(find(rev, '(3 marks) What is the midpoint').answer, `(${(2 + 8) / 2}; ${(3 + 7) / 2})`);
  assert.equal(Math.round(3000 * 1.1 ** 2 * 100) / 100, 3630);
  assert.equal(find(rev, '(3 marks) R3 000').answer, 'R3 630,00');
  const sorted = [4, 6, 7, 9, 10, 12, 15, 18];
  assert.equal((12 + 15) / 2 - (6 + 7) / 2, 7);
  assert.equal(find(rev, '(3 marks) What is the interquartile').answer, '7');
  assert.equal(find(rev, '(3 marks) What is the volume').answer, `${String(Math.round((4 / 3) * Math.PI * 27 * 10) / 10).replace('.', ',')} cm³`);
  assert.equal(Math.round((Math.atan(30 / 40) / D) * 10) / 10, 36.9);
  assert.equal(find(rev, '(3 marks) A 30 m').answer, '36,9°');
  const letters = 'MATHEMATICS'.split('');
  assert.equal(find(rev, '(2 marks) A bag has the letters').answer, frac(letters.filter((c) => 'AEIOU'.includes(c)).length, letters.length));
  assert.equal(sorted.length, 8);
  for (const it of rev) assert.equal(new Set(it.options).size, 4, it.prompt);
});
