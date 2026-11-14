'use client';

export interface RankedItem {
  key: string;
  label: string;
  /** Muted second line. */
  sub?: string;
  /** Bar length is value / max. */
  value: number;
  /** The figure printed at the right. */
  text: string;
  /** Optional fixed bar colour (default: the first series colour). */
  color?: string;
}

/**
 * Ranked horizontal bars: a name, a bar and a figure per row, bars on one baseline (the form for
 * comparing parts). `max` defaults to the largest value; pass 1 for shares and accuracy (0..1).
 */
export default function RankedList({ items, max, color = 'var(--series-1)', empty }: { items: RankedItem[]; max?: number; color?: string; empty?: string }) {
  if (items.length === 0) return <p className="admin-muted" style={{ fontSize: 13, marginTop: 6 }}>{empty ?? 'Nothing to show for this period.'}</p>;
  const top = max ?? Math.max(...items.map((i) => i.value), 0);
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((i) => (
        <li key={i.key} style={{ display: 'grid', gridTemplateColumns: 'minmax(110px, 38%) 1fr auto', alignItems: 'center', gap: 8, fontSize: 13 }}>
          <span style={{ minWidth: 0 }}>
            <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 }} title={i.label}>{i.label}</span>
            {i.sub && <span className="admin-muted" style={{ display: 'block', fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={i.sub}>{i.sub}</span>}
          </span>
          <span aria-hidden style={{ height: 10, borderRadius: 5, background: 'var(--grid)', overflow: 'hidden' }}>
            <span style={{ display: 'block', height: '100%', width: `${top > 0 ? Math.min(100, Math.max(i.value > 0 ? 2 : 0, (i.value / top) * 100)) : 0}%`, background: i.color ?? color, borderRadius: 5 }} />
          </span>
          <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600, whiteSpace: 'nowrap' }}>{i.text}</span>
        </li>
      ))}
    </ul>
  );
}
