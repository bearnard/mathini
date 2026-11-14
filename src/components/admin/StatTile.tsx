'use client';

import { useId, useState, type ReactNode } from 'react';
import Sparkline from './Sparkline';
import type { DeltaText } from './format';

interface Props {
  label: string;
  value: string;
  delta: DeltaText;
  /** e.g. "vs 1 Oct – 14 Oct" */
  deltaContext: string;
  spark?: (number | null)[];
  sparkColor?: string;
  /** Plain-language definition shown behind the (i) button. */
  help: ReactNode;
  /** Optional extra line (e.g. Do Not Track visits). */
  footnote?: string;
}

const ARROW = { up: '▲', down: '▼', flat: '▬', none: '' } as const;

/** One headline number with its change vs the previous period and a sparkline. */
export default function StatTile({ label, value, delta, deltaContext, spark, sparkColor, help, footnote }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="admin-card" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <span className="admin-secondary" style={{ fontSize: 13, fontWeight: 600 }}>{label}</span>
        <button
          type="button"
          className="admin-btn"
          style={{ minHeight: 24, minWidth: 24, padding: 0, borderRadius: 12, fontSize: 12 }}
          aria-expanded={open}
          aria-controls={id}
          aria-label={`What does “${label}” mean?`}
          onClick={() => setOpen((o) => !o)}
        >
          i
        </button>
      </div>
      <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div className="admin-muted" style={{ fontSize: 12 }} title={deltaContext}>
        <span className="admin-secondary" style={{ fontWeight: 600 }}>
          {ARROW[delta.direction] ? `${ARROW[delta.direction]} ` : ''}
          {delta.text}
        </span>{' '}
        {deltaContext}
      </div>
      {spark && <Sparkline values={spark} color={sparkColor} />}
      {footnote && <div className="admin-muted" style={{ fontSize: 12 }}>{footnote}</div>}
      {open && (
        <p id={id} className="admin-secondary" style={{ fontSize: 12, lineHeight: 1.45, borderTop: '1px solid var(--grid)', paddingTop: 8 }}>
          {help}
        </p>
      )}
    </div>
  );
}
