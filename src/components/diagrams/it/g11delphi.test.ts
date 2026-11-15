import test from 'node:test';
import assert from 'node:assert/strict';
import {
  setAgeValidated,
  average, averageWithoutDividing, classifyTestValue, countAndAverage, countWhen, delphiCopy, delphiDelete, delphiInsert, delphiPos, fileAfter,
  formatCheckAt, lengthCheck, maxOf, presenceCheck, rangeCheck, readLoop, selectMarkAtLeast, splitAtComma, sum, sumMissingLast,
  traceSumOfSquares, tracePower, traceWhileSubtract, tryStrToInt, updateBump, groupAverages, totalValidLines,
} from './g11delphi';

test('Pos, Copy, Delete and Insert are 1-based like Delphi', () => {
  assert.equal(delphiPos(',', 'Thandi,78'), 7);
  assert.equal(delphiPos('@', 'noatsign'), 0);
  assert.equal(delphiCopy('Thandi,78', 1, 6), 'Thandi');
  assert.equal(delphiCopy('Thandi,78', 8, 9), '78');
  assert.equal(delphiDelete('Hello World', 6, 6), 'Hello');
  assert.equal(delphiInsert('big ', 'a dog', 3), 'a big dog');
  assert.deepEqual(splitAtComma('Thandi,78'), { p: 7, name: 'Thandi', value: '78' });
  assert.deepEqual(splitAtComma('Sipho,5'), { p: 6, name: 'Sipho', value: '5' });
});

test('file modes: Reset keeps the file, Rewrite replaces it, Append adds at the end', () => {
  const old = ['Mon', 'Tue'];
  assert.deepEqual(fileAfter(old, 'Rewrite', ['Wed']), ['Wed']);
  assert.deepEqual(fileAfter(old, 'Append', ['Wed']), ['Mon', 'Tue', 'Wed']);
  assert.deepEqual(fileAfter(old, 'Rewrite', []), []); // opening with Rewrite and closing at once empties the file
  assert.deepEqual(fileAfter(old, 'Reset', ['ignored']), old);
});

test('reading a three-line numeric file: the loop body runs 3 times', () => {
  assert.deepEqual(readLoop(['55', '78', '43']), { iterations: 3, total: 176, lastLine: '43' });
  assert.equal(readLoop([]).iterations, 0);
});

test('trace tables', () => {
  assert.deepEqual(traceSumOfSquares(4), [{ i: 1, total: 1 }, { i: 2, total: 5 }, { i: 3, total: 14 }, { i: 4, total: 30 }]);
  assert.deepEqual(tracePower(3, 3), [{ i: 1, result: 3 }, { i: 2, result: 9 }, { i: 3, result: 27 }]);
  assert.deepEqual(traceWhileSubtract(37), [{ num: 27, count: 1 }, { num: 17, count: 2 }, { num: 7, count: 3 }]);
  assert.deepEqual(traceWhileSubtract(9), []);
  assert.equal(countWhen([4, 8, 15], (v) => v > 10), 1);
  assert.equal(countWhen([4, 8, 15], (v) => v > 100), 0);
});

test('logic errors: no division, and an off-by-one loop', () => {
  assert.equal(sum([10, 20, 30]), 60);
  assert.equal(average([10, 20, 30]), 20);
  assert.equal(averageWithoutDividing([10, 20, 30]), 60);
  assert.equal(sumMissingLast([5, 10, 15, 20]), 30);
  assert.equal(maxOf([55, 78, 43, 90]), 90);
});

test('test data: normal, boundary and invalid for a 0 to 100 mark', () => {
  assert.equal(classifyTestValue(50, 0, 100), 'normal');
  assert.equal(classifyTestValue(0, 0, 100), 'boundary');
  assert.equal(classifyTestValue(100, 0, 100), 'boundary');
  assert.equal(classifyTestValue(101, 0, 100), 'invalid');
  assert.equal(classifyTestValue(-1, 0, 100), 'invalid');
});

test('validation checks', () => {
  assert.equal(presenceCheck(''), false);
  assert.equal(presenceCheck('x'), true);
  assert.deepEqual(tryStrToInt('72'), { ok: true, value: 72 });
  assert.deepEqual(tryStrToInt('7a'), { ok: false, value: 0 });
  assert.deepEqual(tryStrToInt(''), { ok: false, value: 0 });
  assert.equal(rangeCheck(100, 0, 100), true);
  assert.equal(rangeCheck(101, 0, 100), false);
  assert.equal(lengthCheck('0821234567', 10), true);
  assert.equal(formatCheckAt('lerato@school.co.za'), true);
  assert.equal(formatCheckAt('lerato.school.co.za'), false);
});

const students = [
  { id: 1, name: 'Ayanda', mark: 72 },
  { id: 2, name: 'Bongani', mark: 48 },
  { id: 3, name: 'Chloe', mark: 85 },
  { id: 4, name: 'Dumisani', mark: 72 },
  { id: 5, name: 'Esihle', mark: 39 },
];

test('SQL results: WHERE with ORDER BY DESC, UPDATE row count, COUNT and AVG', () => {
  assert.deepEqual(selectMarkAtLeast(students, 50).map((r) => r.name), ['Chloe', 'Ayanda', 'Dumisani']);
  assert.deepEqual(selectMarkAtLeast(students, 90), []);
  const u = updateBump(students, 50, 10);
  assert.equal(u.changed, 2);
  assert.deepEqual(u.rows.map((r) => r.mark), [72, 58, 85, 72, 49]);
  assert.deepEqual(countAndAverage(students), { count: 5, average: 63.2 });
});

test('GROUP BY averages and skipping bad lines', () => {
  const rows = [{ group: '11B', mark: 60 }, { group: '11A', mark: 70 }, { group: '11A', mark: 55 }, { group: '11B', mark: 81 }, { group: '11B', mark: 45 }];
  assert.deepEqual(groupAverages(rows), [{ group: '11A', count: 2, average: 62.5 }, { group: '11B', count: 3, average: 62 }]);
  assert.deepEqual(totalValidLines(['12', 'N/A', '7']), { total: 19, skipped: 1 });
  assert.deepEqual(totalValidLines([]), { total: 0, skipped: 0 });
});

test('setter keeps the old age when the new one is negative', () => {
  assert.equal(setAgeValidated(3, 5), 5);
  assert.equal(setAgeValidated(3, 0), 0);
  assert.equal(setAgeValidated(3, -5), 3);
});
