import test from 'node:test';
import assert from 'node:assert/strict';
import { boxSurfaceArea, netSheet, netWaste, packagingFor, RECYCLE_PAPER_STEPS, isBiodegradable, FORCES, forceNamed, beamSides, reinforcementSide, rectArea, iBeamArea, materialSaved, SECTIONS, netFaces, PLYWOOD } from './tech8bHelpers';

test('box surface area and the net (plain arithmetic)', () => {
  assert.equal(boxSurfaceArea(100, 50, 200), 2 * (100 * 50 + 100 * 200 + 50 * 200));
  assert.equal(boxSurfaceArea(100, 50, 200), 70000);
  assert.deepEqual(netSheet(100, 50, 200), { width: 300, height: 300 });
  assert.equal(netWaste(100, 50, 200), 300 * 300 - 70000);
  assert.equal(netFaces, 6);
  assert.equal(boxSurfaceArea(10, 10, 10), 600);
  assert.match(packagingFor('eggs'), /cushions/);
});

test('recycling and biodegradable', () => {
  assert.equal(RECYCLE_PAPER_STEPS.length, 5);
  assert.ok(isBiodegradable('paper') && isBiodegradable('cardboard') && !isBiodegradable('steel'));
});

test('forces on materials and reinforcing', () => {
  assert.equal(FORCES.length, 5);
  assert.equal(forceNamed('twists'), 'torsion');
  assert.equal(forceNamed('pulls'), 'tension');
  assert.equal(forceNamed('slide'), 'shear');
  assert.deepEqual(beamSides, { top: 'compression', bottom: 'tension' });
  assert.equal(reinforcementSide(), 'bottom');
  assert.match(PLYWOOD.grain, /right angles/);
});

test('metal sections: an I-beam uses less material than a solid bar of the same size', () => {
  const solid = rectArea(100, 100);
  const ibeam = iBeamArea(100, 100, 10, 10);
  assert.equal(solid, 10000);
  assert.equal(ibeam, 2 * 100 * 10 + 10 * 80);
  assert.equal(ibeam, 2800);
  assert.equal(materialSaved(solid, ibeam), 72);
  assert.equal(SECTIONS.length, 4);
  assert.ok(ibeam < solid);
});
