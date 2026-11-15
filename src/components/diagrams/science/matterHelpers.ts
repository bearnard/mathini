/**
 * Tested helpers for the Grade 8 matter pictures: the first 18 elements laid out as in the periodic
 * table, whether each is a metal, a non-metal or a metalloid, and the colour of universal indicator
 * for a pH value.
 */

export type Kind = 'metal' | 'non-metal' | 'metalloid';
export interface Element { n: number; symbol: string; name: string; kind: Kind; period: number; group: number }

const RAW: [number, string, string, Kind][] = [
  [1, 'H', 'hydrogen', 'non-metal'], [2, 'He', 'helium', 'non-metal'],
  [3, 'Li', 'lithium', 'metal'], [4, 'Be', 'beryllium', 'metal'], [5, 'B', 'boron', 'metalloid'], [6, 'C', 'carbon', 'non-metal'],
  [7, 'N', 'nitrogen', 'non-metal'], [8, 'O', 'oxygen', 'non-metal'], [9, 'F', 'fluorine', 'non-metal'], [10, 'Ne', 'neon', 'non-metal'],
  [11, 'Na', 'sodium', 'metal'], [12, 'Mg', 'magnesium', 'metal'], [13, 'Al', 'aluminium', 'metal'], [14, 'Si', 'silicon', 'metalloid'],
  [15, 'P', 'phosphorus', 'non-metal'], [16, 'S', 'sulfur', 'non-metal'], [17, 'Cl', 'chlorine', 'non-metal'], [18, 'Ar', 'argon', 'non-metal'],
];

/** Position in the table: period (row) and group (column 1 to 18) from the atomic number. */
const place = (n: number): { period: number; group: number } => {
  if (n === 1) return { period: 1, group: 1 };
  if (n === 2) return { period: 1, group: 18 };
  const period = n <= 10 ? 2 : 3;
  const i = n - (period === 2 ? 2 : 10); // 1 to 8 along the row
  return { period, group: i <= 2 ? i : i + 10 };
};

export const ELEMENTS: Element[] = RAW.map(([n, symbol, name, kind]) => ({ n, symbol, name, kind, ...place(n) }));

export const byKind = (k: Kind): Element[] => ELEMENTS.filter((e) => e.kind === k);

/** Universal indicator colours, red for strong acids through green at 7 to purple for strong bases. */
const STOPS: [number, [number, number, number]][] = [
  [0, [220, 38, 38]], [2, [234, 88, 12]], [4, [245, 158, 11]], [6, [163, 230, 53]], [7, [34, 197, 94]],
  [8, [20, 184, 166]], [10, [59, 130, 246]], [12, [99, 102, 241]], [14, [109, 40, 217]],
];

export const phColor = (ph: number): string => {
  if (!(ph >= 0 && ph <= 14)) throw new RangeError('pH is between 0 and 14');
  let i = 0;
  while (i < STOPS.length - 2 && ph > STOPS[i + 1][0]) i++;
  const [p0, c0] = STOPS[i];
  const [p1, c1] = STOPS[i + 1];
  const t = (ph - p0) / (p1 - p0);
  const rgb = c0.map((v, k) => Math.round(v + (c1[k] - v) * t));
  return `rgb(${rgb.join(',')})`;
};
