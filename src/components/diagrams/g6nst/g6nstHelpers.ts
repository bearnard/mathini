import { r3 } from '../round';

/** Numbers for the Grade 6 Natural Sciences and Technology lessons on water. Tested in g6nstHelpers.test.ts. */

// ---------- a wetland as a sponge ----------

/**
 * A wetland holds water and lets it out slowly. Each step: the water that is there (stored + arriving) lets a fraction k go.
 * Water is never lost: total in = total out + what is still stored at the end.
 */
export function reservoir(inflow: readonly number[], k: number): { outflow: number[]; stored: number[] } {
  const outflow: number[] = [];
  const stored: number[] = [];
  let s = 0;
  for (const water of inflow) {
    const available = s + water;
    const out = k * available;
    s = available - out;
    outflow.push(r3(out));
    stored.push(r3(s));
  }
  return { outflow, stored };
}
/** Water arriving after a big rain: nothing, then a sudden rush, then nothing. Arbitrary units. */
export const RAIN_RUSH = [0, 10, 40, 10, 0, 0, 0, 0] as const;
export const WETLAND_K = 0.5;
export const peak = (xs: readonly number[]): number => Math.max(...xs);
export const sumOf = (xs: readonly number[]): number => r3(xs.reduce((a, b) => a + b, 0));

// ---------- a sand filter ----------

export interface Layer { name: string; share: number }
/** Layers from the top of the filter to the bottom: finer material on top, coarser below. Shares of the column height, in percent. */
export const FILTER_LAYERS: Layer[] = [
  { name: 'fine sand', share: 40 },
  { name: 'coarse sand', share: 30 },
  { name: 'gravel', share: 30 },
];
export const layerHeight = (columnCm: number, share: number): number => r3((columnCm * share) / 100);

// ---------- rates of dissolving: one class's results ----------

export interface Trial { label: string; seconds: number }
/** Time for 1 teaspoon (5 ml) of salt to dissolve in 125 ml of water. Made-up class results used for the lesson, each test changing ONE thing. */
export const TEMP_TRIALS: Trial[] = [
  { label: 'cold', seconds: 90 },
  { label: 'warm', seconds: 50 },
  { label: 'hot', seconds: 20 },
];
export const STIR_TRIALS: Trial[] = [
  { label: 'not stirred', seconds: 60 },
  { label: 'stirred', seconds: 20 },
];
export const GRAIN_TRIALS: Trial[] = [
  { label: 'coarse salt', seconds: 70 },
  { label: 'fine salt', seconds: 30 },
];
export const FAIR_AMOUNTS = { soluteMl: 5, waterMl: 125 } as const;
/** How many seconds faster the second trial is than the first. */
export const secondsSaved = (slow: Trial, fast: Trial): number => slow.seconds - fast.seconds;
/** How many times as long the slow trial took. */
export const timesAsLong = (slow: Trial, fast: Trial): number => r3(slow.seconds / fast.seconds);
export const fastest = (ts: readonly Trial[]): Trial => ts.reduce((a, b) => (b.seconds < a.seconds ? b : a));

// ---------- appliances: only compare the labels, no kWh ----------

export interface Appliance { name: string; watts: number; heats: boolean }
/** Typical labels (the Grade 6 CAPS only compares them: a kettle needs more than 2 000 W and a radio about 15 W). */
export const APPLIANCES: Appliance[] = [
  { name: 'kettle', watts: 2000, heats: true },
  { name: 'room heater', watts: 1500, heats: true },
  { name: 'television', watts: 100, heats: false },
  { name: 'radio', watts: 15, heats: false },
  { name: 'energy-saving bulb', watts: 10, heats: false },
];
export const mostPower = (xs: readonly Appliance[]): Appliance => xs.reduce((a, b) => (b.watts > a.watts ? b : a));
export const leastPower = (xs: readonly Appliance[]): Appliance => xs.reduce((a, b) => (b.watts < a.watts ? b : a));
