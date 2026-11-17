import test from 'node:test';
import assert from 'node:assert/strict';
import * as h from './ps11Helpers';

test('gravitation: the data-sheet constants, F, g and the inverse square law', () => {
  assert.equal(h.G, 6.67e-11);
  const f = h.gravForce(2, 3, 0.5);
  assert.ok(Math.abs(f - 1.6008e-9) < 1e-15);
  assert.equal(h.sci(f), '1,60 × 10⁻⁹');
  assert.equal(h.sci(6.25e7), '6,25 × 10⁷');
  assert.ok(Math.abs(h.gField(h.EARTH.mass, h.EARTH.radius) - 9.799) < 0.001);
  assert.ok(Math.abs(h.gField(h.MOON.mass, h.MOON.radius) - 1.619) < 0.001);
  // inverse square: doubling r divides F by 4, halving r multiplies it by 4, doubling both masses and r changes nothing
  assert.ok(Math.abs(h.gravForce(1, 1, 2) * 4 - h.gravForce(1, 1, 1)) < 1e-18);
  assert.ok(Math.abs(h.gravForce(1, 1, 0.5) / h.gravForce(1, 1, 1) - 4) < 1e-9);
  assert.ok(Math.abs(h.gravForce(2, 2, 2) - h.gravForce(1, 1, 1)) < 1e-18);
  assert.equal(h.forceFactor(2), 0.25);
  assert.equal(h.forceFactor(3), 0.111);
  // g at a height: r from the CENTRE
  const high = h.gField(h.EARTH.mass, h.EARTH.radius + 4e5);
  assert.ok(Math.abs(high - 8.677) < 0.001);
  // mass does not change, weight does
  assert.ok(Math.abs(h.weightN(60, 1.62) - 97.2) < 1e-9);
});

test('electronegativity: the classification rule and the data-sheet values', () => {
  assert.equal(h.deltaEN('H', 'Cl'), 0.9);
  assert.equal(h.deltaEN('Na', 'Cl'), 2.1);
  assert.equal(h.deltaEN('Cl', 'Cl'), 0);
  assert.equal(h.deltaEN('O', 'H'), 1.4);
  assert.equal(h.deltaEN('C', 'H'), 0.4);
  assert.equal(h.bondKind('H', 'Cl'), 'polar covalent');
  assert.equal(h.bondKind('Na', 'Cl'), 'ionic');
  assert.equal(h.bondKind('Cl', 'Cl'), 'non-polar covalent');
  assert.equal(h.bondKind('C', 'H'), 'non-polar covalent');
  assert.equal(h.bondKind('O', 'H'), 'polar covalent');
});

test('VSEPR: lone pairs from valence electrons, shapes and bond angles', () => {
  const by = (f: string) => h.MOLECULES.find((m) => m.formula === f)!;
  assert.deepEqual(h.MOLECULES.map((m) => [m.formula, h.lonePairsIn(m), h.shapeOfMolecule(m).name, h.shapeOfMolecule(m).angle]), [
    ['CO₂', 0, 'linear', 180],
    ['BF₃', 0, 'trigonal planar', 120],
    ['CH₄', 0, 'tetrahedral', 109.5],
    ['NH₃', 1, 'trigonal pyramidal', 107],
    ['H₂O', 2, 'bent', 104.5],
  ]);
  assert.equal(h.lonePairs(6, 2), 2); // oxygen with two single bonds
  assert.equal(h.lonePairs(5, 3), 1); // nitrogen with three single bonds
  assert.equal(h.shapeOf(2, 2).name, 'bent');
  assert.throws(() => h.shapeOf(4, 3));
  // bond directions: as many as there are bonds
  for (const m of h.MOLECULES) assert.equal(h.bondDirections(h.shapeOfMolecule(m)).length, m.terminals);
  assert.ok(by('H₂O').terminals === 2);
});

test('molecular polarity: the bond dipoles add as vectors', () => {
  const by = (f: string) => h.MOLECULES.find((m) => m.formula === f)!;
  for (const f of ['CO₂', 'BF₃', 'CH₄']) assert.equal(h.netDipole(by(f)), 0, f);
  assert.ok(h.netDipole(by('H₂O')) > 0 && h.netDipole(by('NH₃')) > 0);
  // water by hand: 2 d cos(52,25°) with d = 1,4
  assert.ok(Math.abs(h.netDipole(by('H₂O')) - 2 * 1.4 * Math.cos((52.25 * Math.PI) / 180)) < 0.002);
  assert.deepEqual(h.MOLECULES.filter(h.isPolarMolecule).map((m) => m.formula), ['NH₃', 'H₂O']);
  // the bond vectors are unit vectors
  for (const m of h.MOLECULES) for (const v of h.bondVectors(h.shapeOfMolecule(m))) assert.ok(Math.abs(Math.hypot(...v) - 1) < 1e-9);
});

test('water: boiling points, densities and the volume of ice', () => {
  assert.equal(h.WATER_BP, 100);
  assert.deepEqual(h.HYDRIDES.map((x) => x.bp), [-60, -41, -2]);
  assert.ok(h.HYDRIDES.every((x, i, a) => i === 0 || x.bp > a[i - 1].bp), 'the trend rises down the group');
  assert.ok(h.WATER_BP > Math.max(...h.HYDRIDES.map((x) => x.bp)) + 100);
  assert.ok(h.DENSITY.find((d) => d.t === 4)!.rho >= Math.max(...h.DENSITY.map((d) => d.rho)), 'densest at 4 °C');
  assert.ok(h.ICE_DENSITY < Math.min(...h.DENSITY.map((d) => d.rho)));
  assert.equal(Math.round(h.volumeOf(1000, h.ICE_DENSITY)), 1091);
  assert.equal(h.freezeExpansionPercent(), 9.051);
});
