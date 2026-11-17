import test from 'node:test';
import assert from 'node:assert/strict';
import * as g from './gas11Helpers';
import { isBalanced } from '../chemistry12/chemHelpers';

const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) <= t;

test('gas laws', () => {
  assert.equal(g.R, 8.31);
  assert.equal(g.MOLAR_VOLUME, 22.4);
  assert.equal(g.toKelvin(27), 300);
  assert.equal(g.boyleV2(100, 2, 250), 0.8);
  assert.equal(g.boyleV2(100, 2, 400), 0.5);
  assert.ok(near(g.charlesV2(3, 300, 400), 4));
  assert.ok(near(g.gayLussacP2(200, 300, 350), 233.3333333, 1e-6));
  assert.ok(near(g.combinedV2(100, 4, 300, 200, 400), 2.6666667, 1e-6));
  // the combined law contains the others
  assert.ok(near(g.combinedV2(100, 2, 300, 250, 300), g.boyleV2(100, 2, 250)));
  assert.ok(near(g.combinedV2(100, 3, 300, 100, 400), g.charlesV2(3, 300, 400)));
  // PV = nRT: n and V are inverses, and the pressure at the same state
  const n = g.molesOfGas(100, 2, 300);
  assert.ok(near(n, 0.080225, 1e-6));
  assert.ok(near(g.volumeOfGasDm3(n, 300, 100), 2, 1e-9));
  assert.ok(near(g.pressureOfGasKPa(n, 300, 2), 100, 1e-9));
  assert.ok(near(g.volumeOfGasDm3(0.5, 300, 200), 6.2325, 1e-9));
  // at STP one mole is about 22,4 dm³ (101,3 kPa and 273 K)
  assert.ok(Math.abs(g.volumeOfGasDm3(1, 273, 101.3) - 22.4) < 0.05);
});

test('moles, concentration and formulae', () => {
  assert.equal(g.molarMassOf('H2O'), 18);
  assert.equal(g.molarMassOf('CO2'), 44);
  assert.equal(g.molarMassOf('NaOH'), 40);
  assert.equal(g.molarMassOf('NaCl'), 58.5);
  assert.equal(g.molarMassOf('CaCO3'), 100);
  assert.equal(g.molarMassOf('MgO'), 40);
  assert.equal(g.molesFromMass(36, 'H2O'), 2);
  assert.equal(g.massFromMoles(0.25, 'CO2'), 11);
  assert.equal(g.molesFromGasVolume(5.6), 0.25);
  assert.equal(g.gasVolumeFromMoles(0.5), 11.2);
  assert.ok(near(g.concentration(0.1, 500), 0.2));
  assert.ok(near(g.molesFromConcentration(0.5, 250), 0.125));
  assert.ok(near(g.percentOf('O', 'H2O'), 88.888889, 1e-5));
  assert.deepEqual(g.empirical({ C: 85.7, H: 14.3 }), { C: 1, H: 2 });
  assert.deepEqual(g.empirical({ C: 40, H: 6.7, O: 53.3 }), { C: 1, H: 2, O: 1 });
  assert.equal(g.formulaString(g.molecular({ C: 1, H: 2 }, 56)), 'C₄H₈');
  assert.equal(g.formulaString(g.molecular({ C: 1, H: 2, O: 1 }, 180)), 'C₆H₁₂O₆');
  assert.equal(g.formulaString(g.molecular({ C: 1, H: 2, O: 1 }, 60)), 'C₂H₄O₂');
});

test('stoichiometry', () => {
  const rs = [{ formula: 'H2', coef: 2, moles: g.molesFromMass(4, 'H2') }, { formula: 'O2', coef: 1, moles: g.molesFromMass(8, 'O2') }];
  assert.equal(g.limiting(rs).formula, 'O2');
  assert.equal(g.productMoles(rs, 2), 0.5);
  assert.equal(g.massFromMoles(0.5, 'H2O'), 9);
  assert.equal(g.limiting([{ formula: 'Mg', coef: 2, moles: 0.2 }, { formula: 'O2', coef: 1, moles: 0.2 }]).formula, 'Mg');
  assert.equal(g.percentYield(7.2, 9), 80);
  assert.equal(g.percentPurity(8, 10), 80);
  // every equation used in the lessons is balanced (atom count)
  for (const eq of ['2Mg + O2 → 2MgO', '2H2 + O2 → 2H2O', 'CaCO3 → CaO + CO2', 'N2 + 3H2 → 2NH3']) assert.ok(isBalanced(eq), eq);
  assert.ok(!isBalanced('Mg + O2 → MgO'));
});
