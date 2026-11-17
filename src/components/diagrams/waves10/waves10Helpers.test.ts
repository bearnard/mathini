import test from 'node:test';
import assert from 'node:assert/strict';
import * as w from './waves10Helpers';

const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) <= t;

test('pulses: superposition adds the displacements with their signs', () => {
  assert.equal(w.resultantAmplitude(2, 3), 5);
  assert.equal(w.resultantAmplitude(3, -2), 1);
  assert.equal(w.resultantAmplitude(2, -2), 0);
  assert.equal(w.interferenceKind(2, 3), 'constructive');
  assert.equal(w.interferenceKind(3, -2), 'destructive');
  assert.equal(w.interferenceKind(-1, -4), 'constructive');
  // the sum at the middle is the sum of the heights, and well away from both pulses it is zero
  const c = [{ centre: 5, amp: 2 }, { centre: 5, amp: 3 }];
  assert.equal(w.sumAt(5, c), 5);
  assert.equal(w.sumAt(0, c), 0);
  // a pulse never goes beyond its own amplitude when alone
  assert.equal(w.pulse(5, 5, 3), 3);
  assert.equal(w.pulse(7, 5, 3), 0);
  assert.equal(w.pulse(6, 5, 3), 1.5);
  // after meeting, the pulses are unchanged: each one on its own still has its original height
  assert.equal(w.pulse(5, 5, 2), 2);
  assert.equal(w.pulseSpeed(3, 0.6), 5);
  assert.equal(w.distanceTravelled(5, 0.4), 2);
});

test('waves and EM radiation: c = f lambda, E = hf = hc / lambda', () => {
  assert.equal(w.C, 3.0e8);
  assert.equal(w.H, 6.63e-34);
  assert.equal(w.frequencyFromPeriod(0.5), 2);
  assert.equal(w.waveSpeed(2, 3), 6);
  assert.ok(near(w.frequencyOf(600e-9), 5e14, 1));
  assert.ok(near(w.wavelengthOfEm(1e8), 3, 1e-9));
  assert.ok(near(w.photonEnergy(5e14), 3.315e-19, 1e-22));
  assert.ok(near(w.photonEnergyFromWavelength(400e-9), 4.9725e-19, 1e-22));
  // the two energy formulas agree
  for (const lam of [1e-10, 5e-7, 1e-2]) assert.ok(near(w.photonEnergy(w.frequencyOf(lam)), w.photonEnergyFromWavelength(lam), 1e-40 + w.photonEnergyFromWavelength(lam) * 1e-9));
  assert.equal(w.sci(3e8), '3,00 × 10⁸');
  assert.equal(w.sci(3.315e-19), '3,32 × 10⁻¹⁹');
  assert.equal(w.sci(w.photonEnergy(w.frequencyOf(5e-7))), '3,98 × 10⁻¹⁹');
});

test('the spectrum is in order, and a shorter wavelength means a higher frequency and more energy', () => {
  assert.deepEqual(w.orderedByFrequency(), ['gamma rays', 'X-rays', 'ultraviolet', 'visible light', 'infrared', 'microwaves', 'radio waves']);
  const ls = w.SPECTRUM.map((e) => e.lambda);
  for (let i = 1; i < ls.length; i++) {
    assert.ok(ls[i] > ls[i - 1]);
    assert.ok(w.frequencyOf(ls[i]) < w.frequencyOf(ls[i - 1]));
    assert.ok(w.photonEnergyFromWavelength(ls[i]) < w.photonEnergyFromWavelength(ls[i - 1]));
  }
  assert.equal(w.logPosition(w.SPECTRUM[0].lambda), 0);
  assert.equal(w.logPosition(w.SPECTRUM[w.SPECTRUM.length - 1].lambda), 1);
  assert.ok(w.photonEnergyFromWavelength(400e-9) > w.photonEnergyFromWavelength(700e-9));
});

test('ionic formulae from the charges', () => {
  assert.deepEqual(w.ionicSubscripts(1, 1), [1, 1]);
  assert.deepEqual(w.ionicSubscripts(2, 2), [1, 1]);
  assert.deepEqual(w.ionicSubscripts(2, 1), [1, 2]);
  assert.deepEqual(w.ionicSubscripts(3, 2), [2, 3]);
  assert.deepEqual(w.ionicSubscripts(2, 3), [3, 2]);
  assert.equal(w.ionicFormula('sodium', 'chloride'), 'NaCl');
  assert.equal(w.ionicFormula('magnesium', 'oxide'), 'MgO');
  assert.equal(w.ionicFormula('calcium', 'chloride'), 'CaCl₂');
  assert.equal(w.ionicFormula('aluminium', 'oxide'), 'Al₂O₃');
  assert.equal(w.ionicFormula('sodium', 'sulfide'), 'Na₂S');
  assert.equal(w.ionicFormula('magnesium', 'nitride'), 'Mg₃N₂');
  // charge balance for every combination
  for (const c of Object.values(w.IONS).filter((i) => i.cation)) for (const a of Object.values(w.IONS).filter((i) => !i.cation)) {
    const [nc, na] = w.ionicSubscripts(c.charge, a.charge);
    assert.equal(nc * c.charge, na * a.charge);
  }
});
