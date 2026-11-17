import test from 'node:test';
import assert from 'node:assert/strict';
import { NUCLIDES, ISOTOPES, protons, neutrons, electrons, isIsotopes, averageMass, percentTotal, oneDp, coilPositions, compressionCentres, rarefactionCentres, wavelengthFromCompressions, speedOfWave, wavelengthOf, periodOf, soundKind, echoDistance, timeToHear, sineSamples, cyclesIn } from './atom10Helpers';

test('particles in atoms and ions (plain subtraction)', () => {
  assert.equal(protons(NUCLIDES.cl35), 17);
  assert.equal(neutrons(NUCLIDES.cl35), 35 - 17);
  assert.equal(neutrons(NUCLIDES.cl37), 20);
  assert.equal(neutrons(NUCLIDES.c14), 8);
  assert.equal(electrons(NUCLIDES.na23, 1), 10);
  assert.equal(electrons(NUCLIDES.ca40, 2), 18);
  assert.ok(isIsotopes(NUCLIDES.cl35, NUCLIDES.cl37));
  assert.ok(!isIsotopes(NUCLIDES.c12, NUCLIDES.cl35));
});

test('relative atomic mass is the weighted average', () => {
  for (const k of Object.values(ISOTOPES)) assert.equal(percentTotal(k), 100);
  assert.equal(averageMass(ISOTOPES.chlorine), (35 * 75 + 37 * 25) / 100);
  assert.equal(oneDp(averageMass(ISOTOPES.chlorine)), '35,5');
  assert.equal(oneDp(averageMass(ISOTOPES.boron)), '10,8');
  assert.equal(oneDp(averageMass(ISOTOPES.magnesium)), '24,3');
  assert.equal(oneDp(2.25), '2,3');
});

test('spring: compressions are where the coils are closest, one wavelength apart', () => {
  const lambda = 8, d = 1, a = 0.9;
  const xs = coilPositions(33, d, a, lambda);
  const gaps = xs.slice(1).map((x, i) => x - xs[i]);
  // the smallest gap sits in the middle of a compression: rest position near lambda/2 + k lambda
  const minGap = Math.min(...gaps);
  const at = gaps.map((g, i) => ({ g, i })).filter((o) => o.g === minGap).map((o) => o.i + 0.5);
  const centres = compressionCentres(lambda, 4);
  for (const p of at) assert.ok(centres.some((c) => Math.abs(c - p) <= 1), `${p}`);
  assert.deepEqual(centres, [4, 12, 20, 28]);
  assert.deepEqual(rarefactionCentres(lambda, 3), [0, 8, 16]);
  assert.equal(wavelengthFromCompressions(centres[0], centres[1]), lambda);
  assert.ok(Math.max(...gaps) > d && minGap < d);
});

test('wave and sound arithmetic', () => {
  assert.equal(speedOfWave(5, 0.4), 2);
  assert.equal(wavelengthOf(340, 680), 0.5);
  assert.equal(periodOf(250), 0.004);
  assert.equal(soundKind(10), 'infrasound');
  assert.equal(soundKind(440), 'audible');
  assert.equal(soundKind(30000), 'ultrasound');
  assert.equal(echoDistance(340, 2), 340);
  assert.equal(timeToHear(340, 1700), 5);
  assert.equal(cyclesIn(200, 0.05), 10);
  const s = sineSamples(1, 2, 1, 8);
  assert.equal(s.length, 9);
  assert.equal(s[1], 1); // 2 Hz: the first peak is at a quarter of a period, 0.125 s
  assert.equal(s[2], 0); // half a period, 0.25 s
  assert.equal(s[3], -1);
});
