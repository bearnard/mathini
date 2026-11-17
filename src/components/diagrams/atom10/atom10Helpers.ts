import { r3 } from '../round';

/** Numbers for the Grade 10 Physical Sciences wave 2 term 1 lessons: the atom and isotopes, longitudinal waves, sound. Tested in atom10Helpers.test.ts. */

// ---------- the atom and isotopes ----------

export interface Nuclide { symbol: string; Z: number; A: number }
export const protons = (n: Nuclide): number => n.Z;
export const neutrons = (n: Nuclide): number => n.A - n.Z;
/** Electrons in an atom or ion: a neutral atom has Z; the charge (+2 means two electrons lost) changes this. */
export const electrons = (n: Nuclide, charge = 0): number => n.Z - charge;
export const sameElement = (a: Nuclide, b: Nuclide): boolean => a.Z === b.Z;
export const isIsotopes = (a: Nuclide, b: Nuclide): boolean => a.Z === b.Z && a.A !== b.A;

export interface IsotopeShare { mass: number; percent: number }
/** Relative atomic mass: the average of the isotope masses weighted by abundance. */
export const averageMass = (shares: readonly IsotopeShare[]): number => r3(shares.reduce((a, s) => a + (s.mass * s.percent) / 100, 0));
export const percentTotal = (shares: readonly IsotopeShare[]): number => shares.reduce((a, s) => a + s.percent, 0);
/** One decimal place, round half up, with a decimal comma as text. */
export const oneDp = (x: number): string => (Math.floor(x * 10 + 0.5 + 1e-9) / 10).toFixed(1).replace('.', ',');

export const ISOTOPES = {
  chlorine: [{ mass: 35, percent: 75 }, { mass: 37, percent: 25 }],
  boron: [{ mass: 10, percent: 20 }, { mass: 11, percent: 80 }],
  magnesium: [{ mass: 24, percent: 79 }, { mass: 25, percent: 10 }, { mass: 26, percent: 11 }],
} as const;
export const NUCLIDES = {
  cl35: { symbol: 'Cl', Z: 17, A: 35 },
  cl37: { symbol: 'Cl', Z: 17, A: 37 },
  c12: { symbol: 'C', Z: 6, A: 12 },
  c14: { symbol: 'C', Z: 6, A: 14 },
  na23: { symbol: 'Na', Z: 11, A: 23 },
  ca40: { symbol: 'Ca', Z: 20, A: 40 },
} as const;

// ---------- longitudinal waves on a spring ----------

/** Positions of n coils of a spring at rest, `d` apart, disturbed by a longitudinal wave of wavelength `lambda`.
 * A coil at rest position x moves along the spring by a * sin(2 pi x / lambda). */
export const coilPositions = (n: number, d: number, a: number, lambda: number): number[] =>
  Array.from({ length: n }, (_, i) => r3(i * d + a * Math.sin((2 * Math.PI * i * d) / lambda)));
/** The rest positions where the coils are closest together (the centres of compressions): half a wavelength, then every wavelength. */
export const compressionCentres = (lambda: number, count: number): number[] => Array.from({ length: count }, (_, k) => r3(lambda / 2 + k * lambda));
export const rarefactionCentres = (lambda: number, count: number): number[] => Array.from({ length: count }, (_, k) => r3(k * lambda));
/** Distance between two successive compressions is one wavelength. */
export const wavelengthFromCompressions = (c1: number, c2: number): number => r3(Math.abs(c2 - c1));
export const speedOfWave = (f: number, lambda: number): number => r3(f * lambda);
export const wavelengthOf = (v: number, f: number): number => r3(v / f);
export const periodOf = (f: number): number => r3(1 / f);

// ---------- sound ----------

export const AUDIBLE_LOW = 20; // Hz
export const AUDIBLE_HIGH = 20000; // Hz
export const SPEED_IN_AIR = 340; // m.s-1, the value quoted in questions
export const soundKind = (f: number): 'infrasound' | 'audible' | 'ultrasound' => (f < AUDIBLE_LOW ? 'infrasound' : f > AUDIBLE_HIGH ? 'ultrasound' : 'audible');
/** An echo travels to the obstacle and back, so the distance to the obstacle is half the total distance. */
export const echoDistance = (v: number, t: number): number => r3((v * t) / 2);
export const timeToHear = (v: number, d: number): number => r3(d / v);
export const MEDIA = ['gas', 'liquid', 'solid'] as const; // speed of sound increases in this order
/** A sine curve y = amp sin(2 pi f t) sampled at n points over `seconds`. */
export const sineSamples = (amp: number, f: number, seconds: number, n: number): number[] => Array.from({ length: n + 1 }, (_, i) => r3(amp * Math.sin(2 * Math.PI * f * (i / n) * seconds)));
/** Number of complete cycles shown in `seconds` at frequency f. */
export const cyclesIn = (f: number, seconds: number): number => r3(f * seconds);
