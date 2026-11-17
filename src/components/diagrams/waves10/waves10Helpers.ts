import { r3 } from '../round';

/** Numbers for the Grade 10 Physical Sciences term 1 lessons: pulses and superposition, electromagnetic radiation, classification of matter. Tested in waves10Helpers.test.ts. */

// ---------- pulses ----------

/** A triangular pulse: height `amp` at `centre`, falling to zero at `halfWidth` either side. Amp may be negative (a pulse on the other side). */
export const pulse = (x: number, centre: number, amp: number, halfWidth = 2): number => {
  const d = Math.abs(x - centre);
  return d >= halfWidth ? 0 : amp * (1 - d / halfWidth);
};
/** Superposition: the displacements simply add at every point. */
export const sumAt = (x: number, pulses: readonly { centre: number; amp: number }[], halfWidth = 2): number => r3(pulses.reduce((a, p) => a + pulse(x, p.centre, p.amp, halfWidth), 0));
/** At the moment the pulses are on top of each other (the same centre) the resultant amplitude is the sum. */
export const resultantAmplitude = (a: number, b: number): number => r3(a + b);
export const interferenceKind = (a: number, b: number): 'constructive' | 'destructive' => (a * b > 0 ? 'constructive' : 'destructive');
/** Speed of a pulse: distance / time. */
export const pulseSpeed = (distanceM: number, timeS: number): number => r3(distanceM / timeS);
export const distanceTravelled = (speed: number, timeS: number): number => r3(speed * timeS);

// ---------- waves ----------

export const frequencyFromPeriod = (T: number): number => 1 / T;
export const periodFromFrequency = (f: number): number => 1 / f;
export const waveSpeed = (f: number, lambda: number): number => f * lambda;

// ---------- electromagnetic radiation ----------

export const C = 3.0e8; // m·s⁻¹ (data sheet)
export const H = 6.63e-34; // J·s (data sheet)
export const frequencyOf = (lambda: number): number => C / lambda;
export const wavelengthOfEm = (f: number): number => C / f;
export const photonEnergy = (f: number): number => H * f;
export const photonEnergyFromWavelength = (lambda: number): number => (H * C) / lambda;

export interface EmType { name: string; lambda: number; use: string }
/** The EM spectrum from the highest frequency to the lowest, with representative wavelengths (m) and a use. */
export const SPECTRUM: EmType[] = [
  { name: 'gamma rays', lambda: 1e-12, use: 'treating cancer' },
  { name: 'X-rays', lambda: 1e-10, use: 'looking at bones' },
  { name: 'ultraviolet', lambda: 1e-8, use: 'sterilising water' },
  { name: 'visible light', lambda: 5e-7, use: 'seeing' },
  { name: 'infrared', lambda: 1e-5, use: 'remote controls' },
  { name: 'microwaves', lambda: 1e-2, use: 'cooking and cellphones' },
  { name: 'radio waves', lambda: 1e2, use: 'radio and TV' },
];
export const orderedByFrequency = (): string[] => [...SPECTRUM].sort((a, b) => frequencyOf(a.lambda) - frequencyOf(b.lambda)).reverse().map((e) => e.name);
/** Position along a log scale from 0 (the shortest wavelength) to 1 (the longest). */
export const logPosition = (lambda: number): number => r3((Math.log10(lambda) - Math.log10(SPECTRUM[0].lambda)) / (Math.log10(SPECTRUM[SPECTRUM.length - 1].lambda) - Math.log10(SPECTRUM[0].lambda)));
/** Scientific notation with a decimal comma and `sig` significant figures. */
export function sci(x: number, sig = 3): string {
  const e = Math.floor(Math.log10(Math.abs(x)));
  const m = (Math.round((x / 10 ** e) * 10 ** (sig - 1) + 1e-9) / 10 ** (sig - 1)).toFixed(sig - 1);
  const sup = String(e).replace(/-/g, '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]);
  return `${m.replace('.', ',')} × 10${sup}`;
}

// ---------- classification of matter: ionic formulae ----------

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
/** Subscripts for an ionic compound from the charges of its ions: the total positive charge equals the total negative charge. */
export function ionicSubscripts(cationCharge: number, anionCharge: number): [number, number] {
  const l = (cationCharge * anionCharge) / gcd(cationCharge, anionCharge);
  return [l / cationCharge, l / anionCharge];
}
export const IONS: Record<string, { symbol: string; charge: number; cation: boolean }> = {
  sodium: { symbol: 'Na', charge: 1, cation: true },
  potassium: { symbol: 'K', charge: 1, cation: true },
  magnesium: { symbol: 'Mg', charge: 2, cation: true },
  calcium: { symbol: 'Ca', charge: 2, cation: true },
  aluminium: { symbol: 'Al', charge: 3, cation: true },
  chloride: { symbol: 'Cl', charge: 1, cation: false },
  oxide: { symbol: 'O', charge: 2, cation: false },
  sulfide: { symbol: 'S', charge: 2, cation: false },
  nitride: { symbol: 'N', charge: 3, cation: false },
};
const subs = (n: number) => (n === 1 ? '' : String(n).replace(/\d/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]));
export function ionicFormula(cation: string, anion: string): string {
  const c = IONS[cation], a = IONS[anion];
  const [nc, na] = ionicSubscripts(c.charge, a.charge);
  return `${c.symbol}${subs(nc)}${a.symbol}${subs(na)}`;
}
