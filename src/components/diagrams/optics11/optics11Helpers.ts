import { r3 } from '../round';

/** Numbers for the Grade 11 Physical Sciences optics lessons (refraction, Snell's law, critical angle, diffraction). Tested in optics11Helpers.test.ts. */

export const C = 3.0e8; // speed of light in a vacuum, m·s⁻¹ (data sheet)
export const MEDIA = [
  { name: 'air', n: 1.0 },
  { name: 'water', n: 1.33 },
  { name: 'glass', n: 1.5 },
  { name: 'diamond', n: 2.42 },
] as const;
export const nOf = (name: string): number => MEDIA.find((m) => m.name === name)!.n;
const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

/** Speed of light in a medium of refractive index n: v = c / n. */
export const speedIn = (n: number): number => C / n;
/** n = c / v. */
export const indexFromSpeed = (v: number): number => C / v;
/** Wavelength in the medium: the frequency stays the same and v = f λ, so λ = λ₀ / n. */
export const wavelengthIn = (lambda0: number, n: number): number => lambda0 / n;
/** Snell's law: n₁ sin θ₁ = n₂ sin θ₂. Returns θ₂ in degrees, or null if all the light is reflected (sin θ₂ would be more than 1). */
export function refractAngle(n1: number, n2: number, theta1Deg: number): number | null {
  const s = (n1 * Math.sin(rad(theta1Deg))) / n2;
  return s > 1 ? null : deg(Math.asin(s));
}
/** The critical angle for light going from a medium n₁ into a medium n₂ < n₁: sin θc = n₂ / n₁. */
export const criticalAngle = (n1: number, n2: number): number => {
  if (!(n2 < n1)) throw new RangeError('total internal reflection needs n1 greater than n2');
  return deg(Math.asin(n2 / n1));
};
export const round1 = (x: number): number => Math.round(x * 10) / 10;
/** Does the ray hit the boundary at more than the critical angle (so it is totally reflected)? */
export const isTotallyReflected = (n1: number, n2: number, theta1Deg: number): boolean => n2 < n1 && theta1Deg > criticalAngle(n1, n2);

// ---------- diffraction ----------

/** v = f λ. */
export const wavelengthOf = (v: number, f: number): number => v / f;
/** How strongly a wave spreads through a gap of width a: the ratio λ / a (the bigger, the more diffraction). */
export const spreadRatio = (lambda: number, a: number): number => lambda / a;
/** Relative intensity for single-slit diffraction at an angle: (sin β / β)², β = π a sin θ / λ. 1 in the middle. */
export function slitIntensity(lambda: number, a: number, thetaDeg: number): number {
  const beta = (Math.PI * a * Math.sin(rad(thetaDeg))) / lambda;
  if (Math.abs(beta) < 1e-12) return 1;
  return r3((Math.sin(beta) / beta) ** 2);
}
/** First minimum of a single slit, sin θ = λ / a (null if the slit is narrower than the wavelength). */
export const firstMinimum = (lambda: number, a: number): number | null => (lambda / a <= 1 ? deg(Math.asin(lambda / a)) : null);

/** Scientific notation with a decimal comma and `sig` significant figures: 3,00 × 10⁸. */
export function sci(x: number, sig = 3): string {
  const e = Math.floor(Math.log10(Math.abs(x)));
  const m = (x / 10 ** e).toFixed(sig - 1);
  const sup = String(e).replace(/-/g, '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]);
  return `${m.replace('.', ',')} × 10${sup}`;
}
