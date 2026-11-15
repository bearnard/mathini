// The sorting rules of SortableTable, with no React: easy to test. Empty values (null) always go last, whichever way you sort, so "no data" never
// looks like the best or the worst. Ties keep their original order (a stable sort), and text sorts the South African English way, numbers by value.
export type SortDir = 'asc' | 'desc';
export interface SortState { key: string; dir: SortDir }
export type SortValue = string | number | null | undefined;

const collator = new Intl.Collator('en-ZA', { numeric: true, sensitivity: 'base' });

export function sortRows<T>(rows: readonly T[], value: (row: T) => SortValue, dir: SortDir): T[] {
  const sign = dir === 'asc' ? 1 : -1;
  return rows
    .map((row, i) => ({ row, i, v: value(row) }))
    .sort((a, b) => {
      const an = a.v === null || a.v === undefined || a.v === '';
      const bn = b.v === null || b.v === undefined || b.v === '';
      if (an || bn) return an === bn ? a.i - b.i : an ? 1 : -1;
      const c = typeof a.v === 'number' && typeof b.v === 'number' ? a.v - b.v : collator.compare(String(a.v), String(b.v));
      return c !== 0 ? sign * c : a.i - b.i;
    })
    .map((x) => x.row);
}

/** What a click on a column header does: a new column starts ascending; the same column flips. */
export const nextSort = (current: SortState | null, key: string): SortState => (current?.key === key ? { key, dir: current.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' });
