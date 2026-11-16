import test from 'node:test';
import assert from 'node:assert/strict';
import * as m from './grade6MulDiv';

test('long multiplication and the distributive method (the CAPS examples)', () => {
  assert.deepEqual(m.partialProducts(4362, 108), [{ multiplier: 8, product: 34896 }, { multiplier: 100, product: 436200 }]);
  assert.equal(m.longMultiply(4362, 108), 471096);
  assert.equal(4362 * 108, 471096);
  assert.deepEqual(m.distribute(547, 45), { big: 40, small: 5, bigProduct: 21880, smallProduct: 2735, total: 24615 });
  assert.deepEqual(m.distributeDown(547, 45), { up: 50, diff: 5, upProduct: 27350, diffProduct: 2735, total: 24615 });
  assert.equal(547 * 45, 24615);
  assert.deepEqual(m.byFactors(547, [2, 3, 7]), { running: [1094, 3282, 22974], total: 22974 });
  assert.equal(547 * 42, 22974);
});

test('estimates of products (the CAPS examples)', () => {
  assert.equal(m.estimateProduct(4362, 1000, 108, 100), 400000);
  assert.equal(m.estimateProduct(4362, 100, 108, 100), 440000);
  assert.equal(m.estimateProduct(2345, 10000, 67, 10), 0); // 2 345 rounds to 0 at 10 000, so round to 1 000 instead
  assert.equal(m.estimateProduct(2345, 1000, 67, 10), 2000 * 70);
  assert.equal(2000 * 70, 140000);
});

test('division by building up (the CAPS examples), the remainder and the check', () => {
  const a = m.divide(3447, 17);
  assert.equal(a.quotient, 202);
  assert.equal(a.remainder, 13);
  assert.deepEqual(a.steps, [{ part: 200, product: 3400, left: 47 }, { part: 2, product: 34, left: 13 }]);
  const b = m.divide(3484, 132);
  assert.equal(b.quotient, 26);
  assert.equal(b.remainder, 52);
  assert.deepEqual(b.steps, [{ part: 20, product: 2640, left: 844 }, { part: 6, product: 792, left: 52 }]);
  assert.equal(132 * 26 + 52, 3484);
  assert.equal(132 * 29 + 20, 3848); // the CAPS text prints 3 848 for this example, but 3 848 / 132 = 29 remainder 20
  assert.deepEqual(m.checkDivision(3447, 17), { product: 3434, withRemainder: 3447 });
  assert.deepEqual(m.multiples(17, [100, 200, 10, 5]), [{ k: 100, product: 1700 }, { k: 200, product: 3400 }, { k: 10, product: 170 }, { k: 5, product: 85 }]);
});

test('multiplication and division agree with plain arithmetic for many numbers', () => {
  let seed = 11;
  const rnd = (mod: number) => ((seed = (seed * 1103515245 + 12345) % 2147483648) % mod);
  for (let i = 0; i < 500; i++) {
    const a = 1000 + rnd(9000);
    const b = 10 + rnd(990);
    assert.equal(m.longMultiply(a, b), a * b, `${a} x ${b}`);
    assert.equal(m.distribute(a, b).total, a * b);
    assert.equal(m.distributeDown(a, b).total, a * b);
    const d = 11 + rnd(989);
    const q = m.divide(a, d);
    assert.equal(q.quotient, Math.floor(a / d), `${a} / ${d}`);
    assert.equal(q.remainder, a % d, `${a} / ${d}`);
    assert.equal(m.checkDivision(a, d).withRemainder, a);
  }
  assert.equal(m.divide(5, 7).quotient, 0);
  assert.equal(m.divide(5, 7).remainder, 5);
  assert.equal(m.divide(9000, 90).quotient, 100);
});
