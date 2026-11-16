import test from 'node:test';
import assert from 'node:assert/strict';
import * as v from './grade6Views';

test('a row of towers (one cube deep)', () => {
  const row: v.Heights = [[3, 1, 2]];
  assert.deepEqual(v.frontView(row), [3, 1, 2]);
  assert.deepEqual(v.backView(row), [2, 1, 3]);
  assert.deepEqual(v.rightView(row), [3]); // one cube deep: a single column as tall as the tallest tower
  assert.deepEqual(v.leftView(row), [3]);
  assert.equal(v.totalCubes(row), 6);
  assert.equal(v.footprint(row), 3);
  assert.equal(v.tallest(row), 3);
  assert.deepEqual(v.viewersWhoSee(row, [2, 1, 3]), ['back']);
});

test('two rows of towers: every viewer sees the tallest tower in each line of sight', () => {
  const two: v.Heights = [[2, 1], [1, 3]]; // front row 2, 1 and back row 1, 3
  assert.deepEqual(v.frontView(two), [2, 3]);
  assert.deepEqual(v.backView(two), [3, 2]);
  assert.deepEqual(v.rightView(two), [2, 3]); // front row's tallest is 2, back row's is 3
  assert.deepEqual(v.leftView(two), [3, 2]);
  assert.equal(v.totalCubes(two), 7);
  assert.equal(v.footprint(two), 4);
  assert.deepEqual(v.dims(two), { rows: 2, cols: 2 });
  assert.deepEqual(v.viewersWhoSee(two, [2, 3]), ['front', 'right']);
  assert.deepEqual(v.viewersWhoSee(two, [3, 2]), ['back', 'left']);
});

test('opposite viewers see mirror images; total cubes never below the largest view', () => {
  for (const h of [[[1, 2, 3]], [[2, 1], [1, 3]], [[1, 0, 2], [3, 1, 1]], [[1]]] as v.Heights[]) {
    assert.deepEqual(v.backView(h), [...v.frontView(h)].reverse());
    assert.deepEqual(v.leftView(h), [...v.rightView(h)].reverse());
    assert.ok(v.totalCubes(h) >= v.tallest(h));
    assert.equal(Math.max(...v.frontView(h)), v.tallest(h));
    assert.equal(Math.max(...v.rightView(h)), v.tallest(h));
  }
  assert.deepEqual(v.frontView([[1, 0, 2], [3, 1, 1]]), [3, 1, 2]);
  assert.deepEqual(v.rightView([[1, 0, 2], [3, 1, 1]]), [2, 3]);
});
