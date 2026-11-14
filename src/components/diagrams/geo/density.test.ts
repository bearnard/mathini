import test from 'node:test';
import assert from 'node:assert/strict';
import { PROVINCES, density, densityRows, provinceDensity, roundDensity } from './density';

test('the nine provincial populations add up to the national Census 2022 count, 62 027 503', () => {
  assert.equal(PROVINCES.length, 9);
  assert.equal(PROVINCES.reduce((a, p) => a + p.population, 0), 62_027_503);
});

test('the provincial land areas add up to Stats SA\'s total of 1 220 813 km2 (to within rounding)', () => {
  assert.ok(Math.abs(PROVINCES.reduce((a, p) => a + p.area, 0) - 1_220_813) <= 1);
});

test('density is people divided by area, rounded for display', () => {
  assert.equal(density(100, 4), 25);
  assert.equal(roundDensity(830.6), 830);
  assert.equal(roundDensity(131.7), 130);
  assert.equal(roundDensity(99.4), 99);
  assert.equal(roundDensity(3.64), 4);
});

test('the four provinces on the slide: about 830, 130, 52 and 4 people per km2', () => {
  assert.equal(provinceDensity('Gauteng'), 830);
  assert.equal(provinceDensity('KwaZulu-Natal'), 130);
  assert.equal(provinceDensity('Limpopo'), 52);
  assert.equal(provinceDensity('Northern Cape'), 4);
  assert.deepEqual(densityRows(['Gauteng', 'Northern Cape']), [{ province: 'Gauteng', density: 830 }, { province: 'Northern Cape', density: 4 }]);
  assert.throws(() => provinceDensity('Atlantis'));
});

test('Gauteng is the densest province and the Northern Cape the sparsest', () => {
  const d = PROVINCES.map((p) => [p.name, density(p.population, p.area)] as const).sort((a, b) => b[1] - a[1]);
  assert.equal(d[0][0], 'Gauteng');
  assert.equal(d[d.length - 1][0], 'Northern Cape');
});
