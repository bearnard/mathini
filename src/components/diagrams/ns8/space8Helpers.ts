import { r3 } from '../round';

/** Numbers for the Grade 8 Natural Sciences Term 4 lessons "Beyond the Solar System" and "Looking into Space". Values follow the Grade 8 CAPS (light years, light hours
 * and light minutes; the nearest star; telescopes). Tested in space8Helpers.test.ts. */

export const LIGHT_KM_PER_S = 300000;
export const lightDistanceKm = (seconds: number): number => LIGHT_KM_PER_S * seconds;
export const LIGHT_MINUTE_KM = lightDistanceKm(60); // 18 000 000 km
export const LIGHT_HOUR_KM = lightDistanceKm(3600); // 1 080 000 000 km
/** The exact light year is about 9,46 trillion km; the CAPS uses "about 10 trillion kilometres". */
export const LIGHT_YEAR_KM_EXACT = lightDistanceKm(365 * 24 * 3600);
export const LIGHT_YEAR_TRILLION_KM = 10; // the CAPS value, used in the questions
export const ALPHA_CENTAURI_LY = 4.2;
/** Distance in trillion km using the CAPS value of one light year. */
export const trillionKm = (lightYears: number): number => r3(lightYears * LIGHT_YEAR_TRILLION_KM);
/** Light takes this many minutes to cross the distance. */
export const lightMinutes = (km: number): number => r3(km / LIGHT_MINUTE_KM);
export const EARTH_SUN_LIGHT_MINUTES = 8;
export const SOLAR_SYSTEM_LIGHT_HOURS = 13;
export const OBSERVABLE_UNIVERSE_BILLION_LY = 28;

/** Order of the distances from smallest to largest. */
export const DISTANCES = [
  { name: 'Earth to the Sun', light: '8 light minutes' },
  { name: 'diameter of the Solar System', light: 'about 13 light hours' },
  { name: 'Earth to Alpha Centauri', light: '4,2 light years' },
  { name: 'across the observable Universe', light: 'about 28 billion light years' },
] as const;

/** A spiral arm as a list of points: r grows with the angle. Used to draw the Milky Way. */
export const spiralArm = (arm: number, arms: number, n: number, rMax: number): { x: number; y: number }[] =>
  Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    const ang = (2 * Math.PI * arm) / arms + t * 3.2;
    const r = rMax * (0.12 + 0.88 * t);
    return { x: r3(r * Math.cos(ang)), y: r3(r * Math.sin(ang)) };
  });

export const TELESCOPES = {
  optical: { gathers: 'light', focusedBy: ['refraction (lenses)', 'reflection (mirrors)'], examples: ['SALT', 'Hubble'] },
  radio: { gathers: 'radio waves', focusedBy: ['reflection (a metal dish)'], examples: ['SKA'] },
} as const;
export const telescopeFor = (gathers: 'light' | 'radio waves'): 'optical' | 'radio' => (gathers === 'light' ? 'optical' : 'radio');
export const GOOD_CONDITIONS = ['cloudless skies', 'limited light pollution', 'limited air pollution'] as const;
