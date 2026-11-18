/**
 * Grade 10 Life Sciences, plants: annual ring widths and a simple potometer investigation. Imaginary teaching data; plants10.test.ts and
 * g10LsPlants.test.ts recompute the numbers independently.
 */
const r2 = (n: number) => Math.round(n * 100) / 100;
export const dec = (n: number) => String(n).replace('.', ',');

/** Widths of the annual rings of a felled tree, from the centre outwards, in mm. */
export const RINGS = [4.2, 3.8, 1.5, 4.0, 5.0, 2.0, 3.6, 4.4, 1.2, 3.8] as const;
export const age = () => RINGS.length;
export const meanRing = () => r2(RINGS.reduce((a, b) => a + b, 0) / RINGS.length);
export const widest = () => (RINGS as readonly number[]).indexOf(Math.max(...RINGS)) + 1;
export const narrowest = () => (RINGS as readonly number[]).indexOf(Math.min(...RINGS)) + 1;
export const trunkRadius = () => r2(RINGS.reduce((a, b) => a + b, 0));

/** Potometer: bubble distance in mm over 6 minutes in four conditions. */
export const MINUTES = 6;
export const POTO = [
  { cond: 'Still air, 20 °C', mm: 12 },
  { cond: 'Fan blowing (wind)', mm: 24 },
  { cond: 'Warm, 30 °C', mm: 30 },
  { cond: 'Humid (plastic bag)', mm: 6 },
] as const;
export const ratePerMin = (mm: number) => r2(mm / MINUTES);
export const percentChange = (from: number, to: number) => r2(((to - from) / from) * 100);
