import test from 'node:test';
import assert from 'node:assert/strict';
import { STATES, changeOfState, lcg, floatsOn, denser, massOfVolume, spacingAfter, collisionsPerSecond, ELEMENTS, byName, electronsOf, netCharge, shells, atomsInFormula, isElementFormula, isCompoundFormula, waterRatio, REACTIONS, split, atomTotals, balanced } from './ns8Helpers';

test('states and changes of state', () => {
  assert.equal(STATES.solid.movement, 'vibrate in place');
  assert.equal(STATES.gas.spacing, 'very big');
  assert.deepEqual(changeOfState('solid', 'heat'), { to: 'liquid', name: 'melting' });
  assert.equal(changeOfState('liquid', 'cool')?.name, 'freezing');
  assert.equal(changeOfState('gas', 'cool')?.name, 'condensing');
  assert.equal(changeOfState('gas', 'heat'), null);
});

test('the picture random sequence repeats', () => {
  const a = lcg(7), b = lcg(7);
  for (let i = 0; i < 20; i++) assert.equal(a(), b());
  const r = lcg(3)();
  assert.ok(r >= 0 && r < 1);
});

test('density comparisons, expansion and pressure', () => {
  assert.ok(floatsOn('cooking oil', 'water'));
  assert.ok(floatsOn('ice', 'water'));
  assert.ok(!floatsOn('iron', 'water'));
  assert.equal(denser('water', 'cooking oil'), 'water');
  assert.equal(massOfVolume('water', 50), 50);
  assert.equal(massOfVolume('cooking oil', 50), 45);
  assert.ok(spacingAfter(10, 'heated') > 10 && spacingAfter(10, 'cooled') < 10);
  assert.equal(collisionsPerSecond(20), 2 * collisionsPerSecond(10));
});

test('the first 20 elements, atoms and shells', () => {
  assert.equal(ELEMENTS.length, 20);
  assert.equal(new Set(ELEMENTS.map((e) => e.Z)).size, 20);
  assert.equal(byName('carbon').Z, 6);
  assert.equal(byName('calcium').symbol, 'Ca');
  for (const e of ELEMENTS) {
    assert.equal(netCharge(e.Z, electronsOf(e.Z)), 0);
    assert.equal(shells(e.Z).reduce((a, n) => a + n, 0), e.Z);
  }
  assert.deepEqual(shells(11), [2, 8, 1]);
  assert.deepEqual(shells(20), [2, 8, 8, 2]);
  assert.equal(netCharge(11, 10), 1);
});

test('molecules and compounds', () => {
  assert.equal(atomsInFormula('H2O'), 3);
  assert.equal(atomsInFormula('CO2'), 3);
  assert.equal(atomsInFormula('O2'), 2);
  assert.ok(isElementFormula('O2') && isCompoundFormula('NaCl') && !isCompoundFormula('N2'));
  assert.deepEqual(waterRatio(), [2, 1]);
});

test('reactants and products', () => {
  assert.deepEqual(split(REACTIONS.carbon), { reactants: ['C', 'O2'], products: ['CO2'] });
  assert.deepEqual(split(REACTIONS.water), { reactants: ['H2', 'O2'], products: ['H2O'] });
  for (const e of Object.values(REACTIONS)) {
    assert.ok(balanced(e), e);
    const t = atomTotals(e);
    assert.equal(t.before, t.after, e);
  }
});
