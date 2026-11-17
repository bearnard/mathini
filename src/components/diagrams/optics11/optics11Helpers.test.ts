import test from 'node:test';
import assert from 'node:assert/strict';
import * as o from './optics11Helpers';

const near = (a: number, b: number, t = 1e-9) => Math.abs(a - b) <= t;

test('refractive index, speed and wavelength', () => {
  assert.equal(o.C, 3.0e8);
  assert.ok(near(o.speedIn(1.5), 2.0e8, 1));
  assert.ok(near(o.indexFromSpeed(2.0e8), 1.5));
  assert.ok(near(o.speedIn(1.33), 2.2556e8, 1e4));
  assert.equal(o.wavelengthIn(600, 1.5), 400);
  assert.equal(o.sci(3e8), '3,00 × 10⁸');
  assert.equal(o.sci(2.2556e8), '2,26 × 10⁸');
});

test("Snell's law: the standard cases, and a ray that cannot leave", () => {
  assert.ok(near(o.refractAngle(1, 1.5, 40)!, 25.374, 0.001));
  assert.ok(near(o.refractAngle(1, 1.33, 30)!, 22.08, 0.01));
  assert.ok(near(o.refractAngle(1.33, 1, 20)!, 27.06, 0.01));
  // the law holds for the answer: n1 sin t1 = n2 sin t2
  for (const [n1, n2, t] of [[1, 1.5, 40], [1.33, 1, 20], [1.5, 1.33, 35]] as const) {
    const t2 = o.refractAngle(n1, n2, t)!;
    assert.ok(near(n1 * Math.sin((t * Math.PI) / 180), n2 * Math.sin((t2 * Math.PI) / 180)));
  }
  // light bends towards the normal in the denser medium and away from it in the less dense one
  assert.ok(o.refractAngle(1, 1.5, 40)! < 40);
  assert.ok(o.refractAngle(1.5, 1, 20)! > 20);
  // glass to air at 50° has no refracted ray
  assert.equal(o.refractAngle(1.5, 1, 50), null);
  assert.equal(o.refractAngle(1, 1.5, 0), 0);
});

test('critical angle and total internal reflection', () => {
  assert.ok(near(o.criticalAngle(1.5, 1), 41.81, 0.01));
  assert.ok(near(o.criticalAngle(1.33, 1), 48.75, 0.01));
  assert.ok(near(o.criticalAngle(2.42, 1), 24.41, 0.01));
  assert.ok(near(o.criticalAngle(1.5, 1.45), 75.16, 0.01));
  assert.throws(() => o.criticalAngle(1, 1.5));
  // at the critical angle the refracted ray lies along the boundary: sin t2 = 1
  assert.ok(near(Math.sin((o.criticalAngle(1.5, 1) * Math.PI) / 180) * 1.5, 1));
  assert.equal(o.isTotallyReflected(1.5, 1, 50), true);
  assert.equal(o.isTotallyReflected(1.5, 1, 40), false);
  assert.equal(o.isTotallyReflected(1, 1.5, 80), false, 'never from a less dense into a denser medium');
  assert.equal(o.isTotallyReflected(1.5, 1.45, 80), true);
  assert.equal(o.isTotallyReflected(1.5, 1.45, 70), false);
  // denser means a smaller critical angle
  assert.ok(o.criticalAngle(2.42, 1) < o.criticalAngle(1.5, 1) && o.criticalAngle(1.5, 1) < o.criticalAngle(1.33, 1));
});

test('diffraction: wavelength, spreading and the single-slit pattern', () => {
  assert.equal(o.wavelengthOf(340, 340), 1);
  assert.equal(o.wavelengthOf(340, 680), 0.5);
  assert.equal(o.spreadRatio(0.5, 0.25), 2);
  assert.ok(o.spreadRatio(600e-9, 0.9) < 1e-6);
  assert.ok(o.spreadRatio(1, 0.9) > o.spreadRatio(600e-9, 0.9));
  // the central maximum is 1 and the first minimum is at sin t = lambda / a, where the intensity is 0
  assert.equal(o.slitIntensity(600e-9, 3e-6, 0), 1);
  const min = o.firstMinimum(600e-9, 3e-6)!;
  assert.ok(near(min, 11.537, 0.001));
  assert.ok(o.slitIntensity(600e-9, 3e-6, min) < 1e-6);
  // the pattern is symmetric and the side bands are fainter than the centre
  assert.equal(o.slitIntensity(600e-9, 3e-6, 20), o.slitIntensity(600e-9, 3e-6, -20));
  assert.ok(o.slitIntensity(600e-9, 3e-6, 17) < 0.1);
  // a slit narrower than the wavelength has no minimum: the wave spreads all round
  assert.equal(o.firstMinimum(600e-9, 400e-9), null);
  // red light spreads more than blue through the same slit
  assert.ok(o.firstMinimum(700e-9, 3e-6)! > o.firstMinimum(450e-9, 3e-6)!);
});
