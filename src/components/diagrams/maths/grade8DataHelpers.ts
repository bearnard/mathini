/**
 * Statistics behind the Grade 8 Data Handling lesson: mean, median, mode, range, stem-and-leaf plots,
 * grouping into intervals and relative frequency. grade8DataHelpers.test.ts pins the values.
 */

export const sorted = (data: number[]): number[] => [...data].sort((a, b) => a - b);

export const sum = (data: number[]): number => data.reduce((s, v) => s + v, 0);

/** The mean: the total shared equally. */
export const mean = (data: number[]): number => sum(data) / data.length;

/** The median, and the one or two middle values it comes from (data sorted first). */
export const median = (data: number[]): { value: number; middle: number[] } => {
  const s = sorted(data);
  const k = Math.floor(s.length / 2);
  const middle = s.length % 2 ? [s[k]] : [s[k - 1], s[k]];
  return { value: sum(middle) / middle.length, middle };
};

/** The mode(s): the value(s) that occur most often. Empty if every value occurs once. */
export const modes = (data: number[]): number[] => {
  const count = new Map<number, number>();
  for (const v of data) count.set(v, (count.get(v) ?? 0) + 1);
  const top = Math.max(...count.values());
  if (top === 1) return [];
  return sorted([...count.entries()].filter(([, c]) => c === top).map(([v]) => v));
};

/** The range: largest minus smallest. */
export const range = (data: number[]): number => Math.max(...data) - Math.min(...data);

/** A stem-and-leaf plot: tens as stems, units as leaves (sorted). */
export const stemLeaf = (data: number[]): { stem: number; leaves: number[] }[] => {
  const out = new Map<number, number[]>();
  for (const v of sorted(data)) {
    const stem = Math.floor(v / 10);
    out.set(stem, [...(out.get(stem) ?? []), v % 10]);
  }
  return [...out.entries()].map(([stem, leaves]) => ({ stem, leaves }));
};

/** Frequencies in intervals [start, start + width), [start + width, ...), ... */
export const groupCounts = (data: number[], start: number, width: number, groups: number): { from: number; to: number; count: number }[] =>
  Array.from({ length: groups }, (_, i) => {
    const from = start + i * width;
    const to = from + width;
    return { from, to, count: data.filter((v) => v >= from && v < to).length };
  });

/** Relative frequency of `count` out of `total`, as a fraction in lowest terms and a percentage. */
export const relativeFrequency = (count: number, total: number): { decimal: number; percent: number } => ({
  decimal: count / total,
  percent: Math.round((count / total) * 10000) / 100,
});
