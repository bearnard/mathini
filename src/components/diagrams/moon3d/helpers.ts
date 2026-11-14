/**
 * Pure helpers for the 3D Moon explorer. No React, no three.js: everything here is
 * unit-tested and safe to import from the non-lazy wrapper.
 *
 * Orbit convention (matches MoonPhases / MoonStepper): the Sun is on the LEFT, seen from
 * above the North Pole. Phase index i = 0..7 is the elongation i * 45 degrees from the
 * Sun, so 0 = new Moon (toward the Sun), 4 = full Moon (opposite the Sun), and the Moon
 * travels ANTICLOCKWISE (new -> waxing crescent -> first quarter ... ).
 * In world coordinates (x to the right, z toward the viewer, y up) the Moon at elongation
 * e on an orbit of radius R is at x = -R cos(e), z = R sin(e).
 */

export type PhaseSlug =
  | 'new-moon'
  | 'waxing-crescent'
  | 'first-quarter'
  | 'waxing-gibbous'
  | 'full-moon'
  | 'waning-gibbous'
  | 'last-quarter'
  | 'waning-crescent';

export const PHASE_SLUGS: PhaseSlug[] = [
  'new-moon',
  'waxing-crescent',
  'first-quarter',
  'waxing-gibbous',
  'full-moon',
  'waning-gibbous',
  'last-quarter',
  'waning-crescent',
];

const STEP = Math.PI / 4;
const TWO_PI = Math.PI * 2;

/** Elongation (radians, 0..2PI) of phase index i. */
export const elongationOf = (i: number) => ((((i % 8) + 8) % 8) * STEP) as number;

/** World position of the Moon at elongation `e` on an orbit of radius `r`. */
export const moonPosition = (e: number, r: number) => ({ x: -r * Math.cos(e), z: r * Math.sin(e) });

/** Elongation (0..2PI) of a point on the orbit plane. */
export const elongationOfPoint = (x: number, z: number) => {
  const e = Math.atan2(z, -x);
  return e < 0 ? e + TWO_PI : e;
};

/** Nearest of the 8 phase positions to an elongation. */
export const nearestPhaseIndex = (e: number) => (Math.round((((e % TWO_PI) + TWO_PI) % TWO_PI) / STEP) % 8) as number;

/** Which half of the Moon's face is lit as seen from the southern hemisphere. */
export const litSide = (i: number): 'left' | 'right' | 'none' | 'full' => {
  const k = ((i % 8) + 8) % 8;
  if (k === 0) return 'none';
  if (k === 4) return 'full';
  return k < 4 ? 'left' : 'right';
};

export interface Capabilities {
  /** A WebGL context could be created. */
  webgl: boolean;
  /** The user asked the system for reduced motion. */
  reducedMotion: boolean;
  /** navigator.hardwareConcurrency, if the browser reports it. */
  hardwareConcurrency?: number;
  /** navigator.deviceMemory in GB, if the browser reports it (Chromium only). */
  deviceMemory?: number;
}

/**
 * The one rule for choosing the 3D view or the simple stepper. Use 3D only if WebGL
 * works, the user has NOT asked for reduced motion, and the device does not look weak
 * (2 or fewer CPU cores, or 2 GB or less of memory, when those are reported).
 */
export const shouldUse3D = (c: Capabilities): boolean => {
  if (!c.webgl) return false;
  if (c.reducedMotion) return false;
  if (c.hardwareConcurrency !== undefined && c.hardwareConcurrency <= 2) return false;
  if (c.deviceMemory !== undefined && c.deviceMemory <= 2) return false;
  return true;
};

export interface Prompt {
  target: PhaseSlug;
  question: string;
  right: string;
}

export const PROMPTS: Prompt[] = [
  {
    target: 'full-moon',
    question: 'Where must the Moon be for a FULL Moon? Drag it there, then press Check.',
    right:
      "Yes! The Moon is on the far side of Earth from the Sun, so we see all of its lit half. Earth's shadow does not cause the phases; it only causes an eclipse, which is rare.",
  },
  {
    target: 'first-quarter',
    question: 'Now place the Moon for a FIRST QUARTER. In South Africa, which half is lit?',
    right:
      'Yes! At first quarter the Moon is a quarter of the way round its orbit, at right angles to the Sun. We see half of its face lit, and from South Africa it is the left half.',
  },
];

export type Verdict = 'right' | 'wrong' | 'reveal';

/**
 * Judge an answer. `attempts` is how many wrong answers there were BEFORE this one.
 * A second wrong answer reveals the right position instead of asking again.
 */
export const judge = (prompt: Prompt, index: number, attempts: number): Verdict => {
  if (PHASE_SLUGS[((index % 8) + 8) % 8] === prompt.target) return 'right';
  return attempts >= 1 ? 'reveal' : 'wrong';
};

export const targetIndex = (prompt: Prompt) => PHASE_SLUGS.indexOf(prompt.target);
