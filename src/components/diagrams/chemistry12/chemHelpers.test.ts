import test from 'node:test';
import assert from 'node:assert/strict';
import * as c from './chemHelpers';

test('formulae are parsed with brackets and subscripts', () => {
  assert.deepEqual(c.parseFormula('H2O'), { H: 2, O: 1 });
  assert.deepEqual(c.parseFormula('Ca(H2PO4)2'), { Ca: 1, H: 4, P: 2, O: 8 });
  assert.deepEqual(c.parseFormula('(NH4)2SO4'), { N: 2, H: 8, S: 1, O: 4 });
  assert.deepEqual(c.parseFormula('Ca3(PO4)2'), { Ca: 3, P: 2, O: 8 });
  assert.deepEqual(c.parseFormula('CH2=CHCl'.replace('=', '')), { C: 2, H: 3, Cl: 1 });
});

test('the balancer accepts balanced equations and rejects unbalanced ones', () => {
  for (const eq of [
    'N2 + 3H2 ⇌ 2NH3',
    '4NH3 + 5O2 → 4NO + 6H2O',
    '2NO + O2 → 2NO2',
    '3NO2 + H2O → 2HNO3 + NO',
    'NH3 + HNO3 → NH4NO3',
    'S + O2 → SO2',
    '2SO2 + O2 ⇌ 2SO3',
    'SO3 + H2SO4 → H2S2O7',
    'H2S2O7 + H2O → 2H2SO4',
    '2NH3 + H2SO4 → (NH4)2SO4',
    'Ca3(PO4)2 + 2H2SO4 → Ca(H2PO4)2 + 2CaSO4',
    'nothing'.length ? 'C2H4 + H2 → C2H6' : '',
  ]) assert.equal(c.isBalanced(eq), true, eq);
  for (const eq of ['N2 + H2 → NH3', '2NH3 + O2 → 2NO + 3H2O', 'SO2 + O2 → SO3']) assert.equal(c.isBalanced(eq), false, eq);
});

test('molar masses and percentages (CAPS data sheet masses)', () => {
  assert.equal(c.molarMass('C2H4'), 28);
  assert.equal(c.molarMass('C3H6'), 42);
  assert.equal(c.molarMass('C2H3Cl'), 62.5);
  assert.equal(c.molarMass('NH4NO3'), 80);
  assert.equal(c.molarMass('(NH4)2SO4'), 132);
  assert.equal(c.molarMass('NH3'), 17);
  assert.equal(c.molarMass('CO(NH2)2'), 60);
  assert.equal(c.massPercent('N', 'NH4NO3'), 35);
  assert.ok(Math.abs(c.massPercent('N', 'NH3') - 82.3529) < 1e-3);
  assert.ok(Math.abs(c.massPercent('N', 'CO(NH2)2') - 46.6667) < 1e-3);
  assert.equal(c.monomerUnits(28000, 'C2H4'), 1000);
  assert.equal(c.monomerUnits(63000, 'C3H6'), 1500);
});

test('NPK labels', () => {
  const m = c.npkMasses([2, 3, 4], 30, 50);
  assert.equal(m.nutrients, 15);
  assert.ok(Math.abs(m.n - 15 * (2 / 9)) < 1e-9 && Math.abs(m.p - 5) < 1e-9 && Math.abs(m.k - 15 * (4 / 9)) < 1e-9);
  assert.equal(m.filler, 35);
  const l = c.npkMasses([3, 2, 1], 25, 20);
  assert.deepEqual([l.nutrients, l.n, l.p, l.k, l.filler], [5, 2.5, 5 / 3, 5 / 6, 15]);
});
