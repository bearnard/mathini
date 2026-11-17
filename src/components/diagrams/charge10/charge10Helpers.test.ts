import test from 'node:test';
import assert from 'node:assert/strict';
import { QE, chargeFromElectrons, electronsFromCharge, sharedCharge, totalCharge, interaction, chargeAfterFriction } from './charge10Helpers';

test('quantisation of charge', () => {
  assert.equal(QE, 1.6e-19);
  assert.ok(Math.abs(chargeFromElectrons(3e10, true) - -4.8e-9) < 1e-24);
  assert.ok(Math.abs(chargeFromElectrons(5e9, false) - 8.0e-10) < 1e-24);
  assert.equal(electronsFromCharge(-3.2e-18), 20);
  assert.equal(electronsFromCharge(4.8e-9), 3e10);
});

test('conservation of charge and forces', () => {
  assert.equal(sharedCharge(6, -2), 2);
  assert.equal(sharedCharge(-8, 0), -4);
  assert.equal(totalCharge([6, -2]), totalCharge([2, 2]));
  assert.equal(interaction(2, 3), 'repel');
  assert.equal(interaction(-2, 3), 'attract');
  assert.equal(interaction(0, 3), 'none');
  assert.equal(chargeAfterFriction(true), 'negative');
});
