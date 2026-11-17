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
