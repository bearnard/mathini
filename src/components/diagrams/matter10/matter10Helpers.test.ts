import test from 'node:test';
import assert from 'node:assert/strict';
import { atomCount, elementCount, formulaMass, equationMasses, conservesMass, EQUATIONS, balanced, energyChange, SUBSTANCES } from './matter10Helpers';

test('atoms in a formula (counted by hand)', () => {
  assert.equal(atomCount('H2O'), 3);
  assert.equal(atomCount('H2SO4'), 7);
  assert.equal(atomCount('C6H12O6'), 24);
  assert.equal(atomCount('Ca(OH)2'), 5);
  assert.equal(atomCount('NaCl'), 2);
  assert.equal(elementCount('C6H12O6'), 3);
});

test('formula masses and conservation of mass (plain arithmetic)', () => {
  assert.equal(formulaMass('H2O'), 2 * 1 + 16);
  assert.equal(formulaMass('CO2'), 12 + 2 * 16);
  assert.equal(formulaMass('MgO'), 24 + 16);
  assert.equal(formulaMass('CaCO3'), 40 + 12 + 3 * 16);
  assert.equal(formulaMass('NaCl'), 23 + 35.5);
  assert.deepEqual(equationMasses(EQUATIONS.magnesium), { reactants: 2 * 24 + 32, products: 2 * 40 });
  assert.deepEqual(equationMasses(EQUATIONS.limestone), { reactants: 100, products: 56 + 44 });
  for (const e of Object.values(EQUATIONS)) {
    assert.ok(balanced(e), e);
    assert.ok(conservesMass(e), e);
  }
  assert.equal(conservesMass('Mg + O2 → MgO'), false);
});

test('energy change and substance kinds', () => {
  assert.deepEqual(energyChange(10, 4), { kind: 'exothermic', delta: -6 });
  assert.deepEqual(energyChange(4, 10), { kind: 'endothermic', delta: 6 });
  assert.equal(SUBSTANCES.length, 3);
});
