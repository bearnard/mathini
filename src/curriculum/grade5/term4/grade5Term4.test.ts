import test from 'node:test';
import assert from 'node:assert/strict';
import { generateDivisionSteps } from './long-division/longDivisionSteps';
import { parseSaNumber, saNumber } from './mass/massFormat';

test('long division gives the right quotient and remainder for every 1 to 3 digit dividend and divisor 2 to 12', () => {
  for (let divisor = 2; divisor <= 12; divisor++) {
    for (let n = 1; n <= 999; n++) {
      const last = generateDivisionSteps(n, divisor).at(-1);
      assert.equal(last?.type, 'FINISH');
      if (last?.type === 'FINISH') {
        assert.equal(last.quotient, Math.floor(n / divisor), `${n} ÷ ${divisor}`);
        assert.equal(last.remainder, n % divisor, `${n} ÷ ${divisor}`);
      }
    }
  }
});

test('every step answer in long division is correct arithmetic and the quotient digits spell the quotient', () => {
  for (const [n, d] of [[532, 4], [305, 7], [999, 9], [100, 8], [48, 6], [7, 9]] as const) {
    const steps = generateDivisionSteps(n, d);
    for (const s of steps) {
      if (s.type === 'MULTIPLY') assert.equal(Number(s.answer), s.qDigit * s.divisor);
      if (s.type === 'SUBTRACT') {
        assert.equal(Number(s.answer), s.minuend - s.subtrahend);
        assert.ok(s.result >= 0 && s.result < d, 'the remainder is smaller than the divisor');
      }
      if (s.type === 'DIVIDE') assert.ok(s.result >= 0 && s.result <= 9);
    }
    const digits = steps.filter((s) => s.type === 'DIVIDE').map((s) => (s.type === 'DIVIDE' ? s.result : 0)).join('');
    assert.equal(Number(digits), Math.floor(n / d));
  }
});

test('a quotient does not start with a zero digit when the dividend has two or more digits', () => {
  for (let d = 2; d <= 9; d++) {
    for (let n = 10; n <= 999; n++) {
      const first = generateDivisionSteps(n, d).find((s) => s.type === 'DIVIDE');
      if (n >= d && first?.type === 'DIVIDE') assert.ok(first.result > 0, `${n} ÷ ${d} starts with ${first.result}`);
    }
  }
});

test('SA number format: decimal comma and a space between groups of three digits', () => {
  assert.equal(saNumber(19.5), '19,5');
  assert.equal(saNumber(0.35), '0,35');
  assert.equal(saNumber(12500), '12 500');
  assert.equal(saNumber(25), '25');
  assert.equal(parseSaNumber('12 500'), 12500);
  assert.equal(parseSaNumber('19,5'), 19.5);
  assert.equal(parseSaNumber('19.5'), 19.5);
});

test('every mass in grams that the converter can make shows as a clean kilogram value with a decimal comma', () => {
  for (const base of [100, 200, 250, 500]) {
    for (let m = 1; m <= 50; m++) {
      const kg = saNumber((base * m) / 1000);
      assert.ok(!kg.includes('.'), kg);
      assert.ok(/^\d+(,\d+)?$|^\d+( \d{3})*(,\d+)?$/.test(kg), kg);
    }
  }
});

import { smallMark, weightOnMark } from './mass/massFormat';

test('the needle on the scale always sits exactly on a small mark, never on 0, and below the maximum', () => {
  for (const max of [1000, 2000, 5000]) {
    const mark = smallMark(max);
    assert.equal(mark, max === 1000 ? 20 : max === 2000 ? 40 : 100);
    for (let i = 0; i < 5000; i++) {
      const w = weightOnMark(max);
      assert.equal(w % mark, 0);
      assert.ok(w > 0 && w < max);
    }
    // every mark can come up
    const seen = new Set(Array.from({ length: 5000 }, () => weightOnMark(max)));
    assert.equal(seen.size, max / mark - 1);
  }
});
