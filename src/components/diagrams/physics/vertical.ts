/**
 * Vertical motion under gravity, upward taken as positive (the sign convention the Grade 11 and
 * Grade 12 Physical Sciences lessons teach). CAPS uses g = 9,8 m·s⁻². Air resistance is ignored.
 * Every number on the velocity-time picture comes from these functions.
 */

export const G = 9.8;

/** Velocity (m·s⁻¹, up positive) after t seconds when thrown with velocity vi: v = vi + gt, g = −9,8. */
export const velocityAt = (vi: number, t: number): number => vi - G * t;

/** Seconds to the highest point, where v = 0. */
export const timeToTop = (vi: number): number => vi / G;

/** Seconds until the object is back at the launch height: up and down take equal time. */
export const timeBack = (vi: number): number => 2 * timeToTop(vi);

/** South African number format: a decimal comma, and a real minus sign. */
export const sa = (n: number, digits = 1): string => {
  const rounded = Math.round(n * 10 ** digits) / 10 ** digits;
  const text = Math.abs(rounded).toFixed(digits).replace(/\.0+$/, '').replace('.', ',');
  return rounded < 0 ? `−${text}` : text;
};
