import test from 'node:test';
import assert from 'node:assert/strict';
import { countAtoms, electronShells, massTotal, subscripts, totalAtoms, wireResistance } from './science9Helpers';

test('electron shells fill 2, 8, 8: carbon has 2,4; sodium 2,8,1; argon 2,8,8', () => {
  assert.deepEqual(electronShells(1), [1]);
  assert.deepEqual(electronShells(6), [2, 4]);
  assert.deepEqual(electronShells(11), [2, 8, 1]);
  assert.deepEqual(electronShells(18), [2, 8, 8]);
  for (let z = 1; z <= 18; z++) assert.equal(electronShells(z).reduce((a, b) => a + b, 0), z, 'electrons equal protons');
  assert.throws(() => electronShells(19));
});

test('formulas: water has 2 hydrogen and 1 oxygen, carbon dioxide 1 and 2, salt 1 and 1', () => {
  assert.deepEqual(countAtoms('H2O'), { H: 2, O: 1 });
  assert.deepEqual(countAtoms('CO2'), { C: 1, O: 2 });
  assert.deepEqual(countAtoms('NaCl'), { Na: 1, Cl: 1 });
  assert.equal(totalAtoms('H2O'), 3);
  assert.equal(totalAtoms('O2'), 2);
  assert.throws(() => countAtoms('h2o'));
  assert.equal(subscripts('H2O'), 'H₂O');
  assert.equal(subscripts('CO2'), 'CO₂');
});

test('mass before equals mass after: 10 g + 15 g reactants make 25 g of products', () => {
  assert.equal(massTotal([10, 15]), 25);
  assert.equal(massTotal([4.5, 5.5, 2]), 12);
});

test('a longer wire has more resistance, a thinner wire has more resistance, long and thin has the most', () => {
  const base = wireResistance(1, 1);
  assert.ok(wireResistance(2, 1) > base);
  assert.ok(wireResistance(1, 0.5) > base);
  assert.ok(wireResistance(2, 0.5) > wireResistance(2, 1) && wireResistance(2, 0.5) > wireResistance(1, 0.5));
  assert.equal(wireResistance(2, 0.5), 4);
  assert.throws(() => wireResistance(0, 1));
});
