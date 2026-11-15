import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { G, sa, timeBack, timeToTop, velocityAt } from './vertical';

const near = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-9, `${a} is not ${b}`);

test('CAPS uses g = 9,8 m·s⁻²', () => assert.equal(G, 9.8));

test('thrown up at 19,6 m·s⁻¹ (the lesson question): v = 0 after 2 s and back at the start after 4 s', () => {
  near(timeToTop(19.6), 2);
  near(timeBack(19.6), 4);
  near(velocityAt(19.6, 0), 19.6);
  near(velocityAt(19.6, 2), 0);
  near(velocityAt(19.6, 4), -19.6);
});

test('the velocity falls by the same 9,8 every second, so the graph is a straight line', () => {
  for (let t = 0; t < 4; t++) near(velocityAt(19.6, t) - velocityAt(19.6, t + 1), 9.8);
});

test('up and down take equal time, and the speed on return equals the launch speed', () => {
  for (const vi of [4.9, 9.8, 14.7, 20]) {
    near(timeToTop(vi), timeBack(vi) - timeToTop(vi));
    near(Math.abs(velocityAt(vi, timeBack(vi))), vi);
  }
});

test('south african number format', () => {
  assert.equal(sa(19.6), '19,6');
  assert.equal(sa(-19.6), '−19,6');
  assert.equal(sa(9.8), '9,8');
  assert.equal(sa(2), '2');
  assert.equal(sa(0), '0');
  assert.equal(sa(-0.04), '0');
});

test('both lessons show the picture, and use the same sign convention as the picture', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const read = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum', p), 'utf8');
  const g12 = read('grade12/physical-sciences/term1/vertical-projectile-motion/VerticalProjectileMotion.tsx');
  const g11 = read('grade11/physical-sciences/term2/projectile-motion/ProjectileMotion.tsx');
  for (const lesson of [g12, g11]) {
    assert.ok(lesson.includes('VerticalVelocityGraph'));
    assert.match(lesson, /-9(?:\.|,|\{,\})8/, 'the lesson still says g = -9,8 (decimal comma) with upward positive');
  }
});
