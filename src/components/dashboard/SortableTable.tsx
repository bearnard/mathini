'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { nextSort, sortRows, type SortDir, type SortState, type SortValue } from './sortRows';
import { EmptyState } from './EmptyState';
import ScrollBox from './ScrollBox';

export interface Column<T> {
  key: string;
  label: string;
  align?: 'left' | 'right';
  /** What to sort by. Omit it and the column cannot be sorted. */
  sortValue?: (row: T) => SortValue;
  /** What to show. Defaults to the sort value. */
  render?: (row: T) => ReactNode;
  className?: string;
}

/**
 * A table whose headers sort it. Keyboard and screen-reader friendly: each sortable header is a button, the header cell says aria-sort, and the
 * table has a caption (hidden, for screen readers). On a phone it scrolls sideways inside its own box instead of widening the page.
 */
export default function SortableTable<T>({ columns, rows, rowKey, caption, defaultSort, empty, onRowClick }: {
  columns: Column<T>[];
  rows: readonly T[];
  rowKey: (row: T) => string;
  caption: string;
  defaultSort?: { key: string; dir?: SortDir };
  empty?: ReactNode;
  /** Makes the whole row clickable with the mouse. Keyboard users get the same action from a button inside the row (give one in a column's `render`). */
  onRowClick?: (row: T) => void;
}) {
  const [sort, setSort] = useState<SortState | null>(defaultSort ? { key: defaultSort.key, dir: defaultSort.dir ?? 'asc' } : null);
  const shown = useMemo(() => {
    const col = sort ? columns.find((c) => c.key === sort.key) : undefined;
    return col?.sortValue && sort ? sortRows(rows, col.sortValue, sort.dir) : [...rows];
  }, [rows, columns, sort]);

  if (rows.length === 0) return <>{empty ?? <EmptyState title="Nothing to show yet" />}</>;
  return (
    <ScrollBox>
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-600">
          <tr>
            {columns.map((c) => {
              const active = sort?.key === c.key;
              const label = c.sortValue ? (
                <button type="button" onClick={() => setSort(nextSort(sort, c.key))} className={`inline-flex min-h-11 items-center gap-1 px-2 sm:px-3 font-bold uppercase tracking-wide hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-indigo-600 ${c.align === 'right' ? 'w-full justify-end' : ''}`}>
                  {c.label}
                  <span aria-hidden="true" className={active ? 'text-indigo-700' : 'text-slate-400'}>{active ? (sort.dir === 'asc' ? '▲' : '▼') : '↕'}</span>
                </button>
              ) : <span className="inline-block px-2 py-3 sm:px-3">{c.label}</span>;
              return (
                <th key={c.key} scope="col" aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : c.sortValue ? 'none' : undefined} className={`p-0 ${c.align === 'right' ? 'text-right' : ''}`}>
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {shown.map((row) => (
            <tr key={rowKey(row)} className={`hover:bg-slate-50 ${onRowClick ? 'cursor-pointer' : ''}`} onClick={onRowClick ? () => onRowClick(row) : undefined}>
              {columns.map((c, i) => (
                <td key={c.key} className={`px-2 py-2.5 sm:px-3 text-slate-800 ${c.align === 'right' ? 'text-right tabular-nums' : ''} ${i === 0 ? 'sticky left-0 whitespace-nowrap bg-white font-semibold text-slate-900 [overflow-wrap:normal]' : ''} ${c.className ?? ''}`}>
                  {c.render ? c.render(row) : String(c.sortValue?.(row) ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollBox>
  );
}
