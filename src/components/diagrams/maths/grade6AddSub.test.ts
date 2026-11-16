import test from 'node:test';
import assert from 'node:assert/strict';
import * as a from './grade6AddSub';

test('group, roundTo and estimate (CAPS: round to the nearest 1 000 or 10 000)', () => {
  assert.equal(a.group(56423), '56\u00a0423');
  assert.equal(a.group(985), '985');
  assert.equal(a.group(1000000), '1\u00a0000\u00a0000');
  assert.ok(!/ /.test(a.group(1234567)), 'a formatted number contains no breakable space');
  assert.equal(a.nb('58 000 + 12 000 = 70 000'), '58\u00a0000 + 12\u00a0000 = 70\u00a0000');
  assert.equal(a.nb('3 apples and 4 000 pears, 5 1000'), '3 apples and 4\u00a0000 pears, 5 1000');
  assert.equal(a.roundTo(45678, 1000), 46000);
  assert.equal(a.roundTo(12345, 1000), 12000);
  assert.equal(a.roundTo(45500, 1000), 46000);
  assert.equal(a.roundTo(45499, 1000), 45000);
  assert.equal(a.roundTo(45678, 10000), 50000);
  assert.equal(a.roundTo(12, 5), 10);
  assert.equal(a.roundTo(13, 5), 15);
  assert.equal(a.estimate(45678, 12345, 1000, '+'), 58000); // the CAPS example
  assert.equal(a.estimate(98743, 45684, 1000, '−'), 53000);
});

test('place values and the column methods (the CAPS worked examples)', () => {
  assert.deepEqual(a.placeValues(56423), [50000, 6000, 400, 20, 3]);
  assert.deepEqual(a.placeValues(7581), [7000, 500, 80, 1]);
  assert.deepEqual(a.placeValues(30502), [30000, 0, 500, 0, 2]);
  const s = a.columnAdd([56423, 7581, 21479]);
  assert.equal(s.result, 85483);
  assert.equal(56423 + 7581 + 21479, 85483);
  assert.deepEqual(s.carries, [0, 1, 1, 1, 1, 0]); // ones 13, tens 18, hundreds 14, thousands 15, ten thousands 8
  const d = a.columnSubtract(98743, 45684);
  assert.equal(d.result, 53059);
  assert.deepEqual(d.top, [9, 8, 6, 13, 13]); // the CAPS "6 13 13"
  assert.equal(98743 - 45684, 53059);
});

test('the column methods agree with ordinary arithmetic for many numbers, including zeros and carries across several columns', () => {
  for (const [x, y] of [[99999, 1], [10000, 9999], [58023, 41977], [30502, 4698], [100000, 1], [800000, 365478], [999999, 999999]]) {
    assert.equal(a.columnAdd([x, y]).result, x + y, `${x} + ${y}`);
    if (x >= y) assert.equal(a.columnSubtract(x, y).result, x - y, `${x} - ${y}`);
  }
  let seed = 7;
  const rnd = (m: number) => ((seed = (seed * 1103515245 + 12345) % 2147483648) % m);
  for (let i = 0; i < 300; i++) {
    const x = 1000 + rnd(900000);
    const y = 100 + rnd(x);
    assert.equal(a.columnAdd([x, y]).result, x + y);
    assert.equal(a.columnSubtract(x, y).result, x - y);
  }
});

test('inverse checks and compensating', () => {
  assert.deepEqual(a.inverseOfSum(45362, 32488), { sum: 77850, backToA: 45362, backToB: 32488 });
  assert.deepEqual(a.inverseOfDifference(54687, 32134), { difference: 22553, back: 54687 });
  assert.deepEqual(a.compensateAdd(4567, 999, 1000), { step1: 5567, step2: 5566 });
  assert.equal(4567 + 999, 5566);
});
