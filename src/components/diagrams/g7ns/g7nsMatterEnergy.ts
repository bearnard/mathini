/** Numbers and tables for the Grade 7 Periodic Table and national electricity grid lessons. Tested in g7nsMatterEnergy.test.ts. */

export type Category = 'metal' | 'semi-metal' | 'non-metal';
export interface Element { z: number; symbol: string; name: string; category: Category }

/** The first 20 elements: the ones CAPS asks learners to know by name and symbol. */
export const FIRST_20: Element[] = [
  { z: 1, symbol: 'H', name: 'hydrogen', category: 'non-metal' },
  { z: 2, symbol: 'He', name: 'helium', category: 'non-metal' },
  { z: 3, symbol: 'Li', name: 'lithium', category: 'metal' },
  { z: 4, symbol: 'Be', name: 'beryllium', category: 'metal' },
  { z: 5, symbol: 'B', name: 'boron', category: 'semi-metal' },
  { z: 6, symbol: 'C', name: 'carbon', category: 'non-metal' },
  { z: 7, symbol: 'N', name: 'nitrogen', category: 'non-metal' },
  { z: 8, symbol: 'O', name: 'oxygen', category: 'non-metal' },
  { z: 9, symbol: 'F', name: 'fluorine', category: 'non-metal' },
  { z: 10, symbol: 'Ne', name: 'neon', category: 'non-metal' },
  { z: 11, symbol: 'Na', name: 'sodium', category: 'metal' },
  { z: 12, symbol: 'Mg', name: 'magnesium', category: 'metal' },
  { z: 13, symbol: 'Al', name: 'aluminium', category: 'metal' },
  { z: 14, symbol: 'Si', name: 'silicon', category: 'semi-metal' },
  { z: 15, symbol: 'P', name: 'phosphorus', category: 'non-metal' },
  { z: 16, symbol: 'S', name: 'sulfur', category: 'non-metal' },
  { z: 17, symbol: 'Cl', name: 'chlorine', category: 'non-metal' },
  { z: 18, symbol: 'Ar', name: 'argon', category: 'non-metal' },
  { z: 19, symbol: 'K', name: 'potassium', category: 'metal' },
  { z: 20, symbol: 'Ca', name: 'calcium', category: 'metal' },
];

const PERIOD_END = [2, 10, 18, 36];
/** Period (row) of an element by atomic number, for Z up to 36. */
export const periodOf = (z: number): number => PERIOD_END.findIndex((end) => z <= end) + 1;
/** Group (column) of an element in the first 20: the transition metals sit between group 2 and group 13. */
export function groupOf(z: number): number {
  const p = periodOf(z);
  const k = z - (p === 1 ? 0 : PERIOD_END[p - 2]);
  if (p === 1) return k === 1 ? 1 : 18;
  return k <= 2 ? k : k + 10;
}
export const COLUMNS = [1, 2, 13, 14, 15, 16, 17, 18] as const;
export const countOf = (c: Category): number => FIRST_20.filter((e) => e.category === c).length;
export const bySymbol = (s: string): Element => FIRST_20.find((e) => e.symbol === s)!;

// ---------- the national electricity grid ----------

export interface Source { name: string; renewable: boolean }
export const SOURCES: Source[] = [
  { name: 'coal', renewable: false },
  { name: 'oil', renewable: false },
  { name: 'gas', renewable: false },
  { name: 'nuclear fuel', renewable: false },
  { name: 'falling water', renewable: true },
  { name: 'wind', renewable: true },
];
export const GRID_CHAIN = [
  { title: 'Energy source', note: 'coal, gas, nuclear, water, wind' },
  { title: 'Turbine', note: 'the source spins it' },
  { title: 'Generator', note: 'movement becomes electricity' },
  { title: 'Supply wires', note: 'the grid carries it to users' },
  { title: 'Home', note: 'lights and appliances use it' },
] as const;

export interface Appliance { name: string; watts: number }
export const BULBS: Appliance[] = [
  { name: 'old bulb', watts: 60 },
  { name: 'energy-saving bulb', watts: 10 },
];
/** How many times more power the first uses than the second. */
export const timesMore = (a: Appliance, b: Appliance): number => a.watts / b.watts;
export const wattsSaved = (a: Appliance, b: Appliance): number => a.watts - b.watts;
