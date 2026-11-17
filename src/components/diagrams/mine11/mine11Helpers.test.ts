import test from 'node:test';
import assert from 'node:assert/strict';
import * as m from './mine11Helpers';

test('the crust: shares, the most abundant element and the rest', () => {
  assert.equal(m.crustShare(['O', 'Si']), 74);
  assert.equal(m.crustShare(['O', 'Si', 'Al', 'Fe']), 87);
  assert.equal(m.mostAbundant(), 'oxygen');
  assert.equal(m.otherElements(), 13);
  assert.ok(m.CRUST.every((e, i, a) => i === 0 || a[i - 1].percent >= e.percent), 'listed from the most to the least abundant');
  assert.equal(m.crustShare(m.CRUST.map((e) => e.symbol)) + m.otherElements(), 100);
});

test('the atom counter handles coefficients, brackets and complex ions', () => {
  assert.deepEqual(m.atomsOf('2Fe2O3 + 3C'), { Fe: 4, O: 6, C: 3 });
  assert.deepEqual(m.atomsOf('2Na[Au(CN)2]'), { Na: 2, Au: 2, C: 4, N: 4 });
  assert.deepEqual(m.atomsOf('Na2[Zn(CN)4]'), { Na: 2, Zn: 1, C: 4, N: 4 });
  assert.deepEqual(m.atomsOf('4Na[Au(CN)2] + 4NaOH'), { Na: 8, Au: 4, C: 8, N: 8, O: 4, H: 4 });
});

test('every equation in the lesson is balanced, and an unbalanced one is caught', () => {
  for (const eq of Object.values(m.EQUATIONS)) assert.ok(m.balanced(eq), eq);
  assert.ok(!m.balanced('Fe2O3 + 3C → 2Fe + 3CO2'));
  assert.ok(!m.balanced('4Au + 8NaCN + O2 → 4Na[Au(CN)2] + 4NaOH'));
});
