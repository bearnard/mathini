import test from 'node:test';
import assert from 'node:assert/strict';
import * as e from './em11Helpers';
import { isBalanced } from '../chemistry12/chemHelpers';

test('flux: Φ = B A cos θ, with θ from the normal', () => {
  assert.equal(e.flux(0.2, 0.5, 0), 0.1);
  assert.equal(e.flux(0.2, 0.5, 60), 0.05);
  assert.equal(e.flux(0.2, 0.5, 90), 0);
  assert.equal(e.flux(0.2, 0.5, 30), 0.087);
  // flux never exceeds B x A
  for (let t = 0; t <= 180; t += 15) assert.ok(Math.abs(e.flux(0.2, 0.5, t)) <= 0.1 + 1e-9);
});

test("Lenz's law always opposes the movement, and Faraday: a faster change gives a bigger emf", () => {
  assert.equal(e.inducedPole('N', 'in'), 'N');
  assert.equal(e.inducedPole('N', 'out'), 'S');
  assert.equal(e.inducedPole('S', 'in'), 'S');
  assert.equal(e.inducedPole('S', 'out'), 'N');
  for (const pole of ['N', 'S'] as const) {
    assert.equal(e.force(pole, 'in'), 'repels');
    assert.equal(e.force(pole, 'out'), 'attracts');
  }
  assert.equal(e.emfFactorWhenTimeScaled(0.5), 2);
  assert.equal(e.emfFactorWhenTimeScaled(2), 0.5);
});

test('right hand rule', () => {
  assert.equal(e.fieldDirection('out'), 'anticlockwise');
  assert.equal(e.fieldDirection('in'), 'clockwise');
  assert.equal(e.solenoidNorthEnd('anticlockwise'), 'right');
  assert.equal(e.solenoidNorthEnd('clockwise'), 'left');
});

test('energy profiles: ΔH, activation energy and the reverse reaction', () => {
  const exo = { reactants: 50, peak: 90, products: 20 };
  const endo = { reactants: 20, peak: 80, products: 50 };
  assert.equal(e.deltaH(exo), -30);
  assert.equal(e.activationEnergy(exo), 40);
  assert.equal(e.reverseActivation(exo), 70);
  assert.equal(e.kind(exo), 'exothermic');
  assert.equal(e.deltaH(endo), 30);
  assert.equal(e.activationEnergy(endo), 60);
  assert.equal(e.kind(endo), 'endothermic');
  // the forward and reverse reactions: Ea(forward) - Ea(reverse) = ΔH
  assert.equal(e.activationEnergy(exo) - e.reverseActivation(exo), e.deltaH(exo));
  assert.equal(e.activationEnergy(endo) - e.reverseActivation(endo), e.deltaH(endo));
});

test('every acid-base equation used is balanced by atom count', () => {
  for (const eq of Object.values(e.REACTIONS)) assert.ok(isBalanced(eq), eq);
  assert.ok(!isBalanced('HCl + NaOH → NaCl'));
  assert.ok(!isBalanced('CaCO3 + HCl → CaCl2 + H2O + CO2'));
});
