import test from 'node:test';
import assert from 'node:assert/strict';
import * as r from './rateHelpers';

const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) <= t;

test('rate and Kc', () => {
  assert.ok(near(r.rate(0.8 - 0.2, 30), 0.02));
  assert.ok(near(r.kc([[1.0, 2]], [[0.5, 1], [1.5, 3]]), 1 / (0.5 * 3.375)));
  assert.ok(near(r.kc([[1.56, 2]], [[0.22, 1], [0.22, 1]]), 50.2810, 1e-3));
  // H2 + I2 ⇌ 2HI from 1,00 mol each in 1 dm³ with x = 0,78: HI = 1,56, H2 = I2 = 0,22
  assert.ok(near(r.atEquilibrium(1, -1, 0.78), 0.22) && near(r.atEquilibrium(0, 2, 0.78), 1.56));
});

test('pH, pOH and Kw', () => {
  assert.ok(near(r.pH(1e-3), 3));
  assert.ok(near(r.phStrongAcid(0.01), 2));
  assert.ok(near(r.phStrongAcid(0.005, 2), 2)); // H2SO4 0,005 mol·dm⁻³ treated as fully ionised: 0,010 mol·dm⁻³ H3O+
  assert.ok(near(r.phStrongBase(0.01), 12));
  assert.ok(near(r.phStrongBase(0.005, 2), 12)); // Ca(OH)2
  assert.ok(near(r.hydroniumFromPH(4), 1e-4));
  assert.ok(near(r.hydroxideFromHydronium(1e-3), 1e-11, 1e-20));
  assert.ok(near(r.pH(r.hydroniumFromPH(5.3)), 5.3));
});

test('titration', () => {
  assert.ok(near(r.moles(0.1, 20), 0.002));
  assert.ok(near(r.unknownConcentration(0.1, 20, 25, 1), 0.08));
  assert.ok(near(r.unknownConcentration(0.5, 10, 25, 2), 0.4)); // H2SO4 + 2NaOH
});
