import test from 'node:test';
import assert from 'node:assert/strict';
import { fasterBy, fromTenths, spreadX, splitEvenly, tierWidths, toTenths } from './lo10Helpers';

test('spreadX centres three columns across 108 from x 6', () => {
  assert.deepEqual(spreadX(3, 108, 6), [24, 60, 96]);
  assert.deepEqual(spreadX(2, 100), [25, 75]);
});

test('tierWidths grow from the top tier to the bottom tier', () => {
  assert.deepEqual(tierWidths(3), [56, 82, 108]);
  assert.deepEqual(tierWidths(1), [108]);
});

test('splitEvenly: a 20 minute break shared by 2 games is 10 minutes each', () => {
  assert.equal(splitEvenly(20, 2), 10);
  assert.equal(splitEvenly(20, 3), null);
  assert.equal(splitEvenly(20, 0), null);
});

test('decimal-comma seconds: 16,4 s to 15,9 s is 0,5 s faster', () => {
  assert.equal(toTenths('16,4'), 164);
  assert.equal(toTenths('15'), 150);
  assert.equal(fromTenths(5), '0,5');
  assert.equal(fromTenths(164), '16,4');
  assert.equal(fasterBy('16,4', '15,9'), '0,5');
  assert.equal(fasterBy('16,4', '15,4'), '1,0');
});
