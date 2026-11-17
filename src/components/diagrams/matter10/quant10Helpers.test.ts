import test from 'node:test';
import assert from 'node:assert/strict';
import { moles, massFrom, percentOf, mole_ratio, waterOfCrystallisation, concentration, molesFromConcentration, dm3FromCm3, gasVolume, theoreticalYield, MOLAR_VOLUME } from './quant10Helpers';
import { formulaMass } from './matter10Helpers';

test('moles, percentage composition (plain arithmetic)', () => {
  assert.equal(moles(18, 18), 1);
  assert.equal(massFrom(0.5, 44), 22);
  assert.equal(percentOf('O', 'H2O'), Math.round((16 / 18) * 100000) / 1000);
  assert.equal(percentOf('Fe', 'Fe2O3'), Math.round(((2 * 56) / (2 * 56 + 3 * 16)) * 100000) / 1000);
  assert.equal(percentOf('Mg', 'MgO'), 60);
});

test('empirical formula', () => {
  assert.deepEqual(mole_ratio([{ el: 'C', percent: 40 }, { el: 'H', percent: 6.7 }, { el: 'O', percent: 53.3 }]), [1, 2, 1]);
  assert.deepEqual(mole_ratio([{ el: 'Fe', percent: 70 }, { el: 'O', percent: 30 }]), [2, 3]);
  assert.deepEqual(mole_ratio([{ el: 'Mg', percent: 60 }, { el: 'O', percent: 40 }]), [1, 1]);
});

test('water of crystallisation, concentration, gas volume, theoretical yield', () => {
  assert.equal(formulaMass('CuSO4'), 159.5);
  assert.equal(waterOfCrystallisation(24.95, 15.95, 159.5), 5);
  assert.equal(concentration(moles(5.85, 58.5), dm3FromCm3(500)), 0.2);
  assert.equal(molesFromConcentration(0.5, 0.25) * 40, 5);
  assert.equal(MOLAR_VOLUME, 22.4);
  assert.equal(gasVolume(0.5), 11.2);
  assert.equal(gasVolume(moles(10, 100)), 2.24);
  assert.equal(theoreticalYield(12, 24, 40, 1), 20);
  assert.equal(theoreticalYield(10, 100, 56, 1), 5.6);
});
