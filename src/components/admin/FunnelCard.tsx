'use client';

import { formatInt, formatPercent } from './format';
import { useAdminData } from './useAdminData';

interface Step { key: string; label: string; count: number }
interface FunnelData { unit: 'devices'; steps: Step[] }

export default function FunnelCard({ qs }: { qs: string }) {
  // The funnel uses the date range only; strip grade and subject.
  const p = new URLSearchParams(qs);
  p.delete('grade');
  p.delete('subject');
  const state = useAdminData<FunnelData>('/api/admin/funnel', p.toString());

  return (
    <section className="admin-card" style={{ padding: 16 }} aria-label="Sign-up funnel">
      <h2 style={{ fontSize: 18, fontWeight: 700 }}>Funnel</h2>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
        From first visit to coming back. Every step counts devices, and each step is a subset of the one above. It uses the date range only (grade and subject do not apply). Private (Do Not Track) visits cannot be followed and are left out. A device is a browser, not a person.
      </p>
      {state.status === 'error' ? (
        <p role="alert" style={{ marginTop: 12 }}>Sorry, this could not be loaded.</p>
      ) : state.status === 'loading' ? (
        <p aria-busy="true" style={{ marginTop: 12 }}>Loading…</p>
      ) : (
        (() => {
          const steps = state.data.steps;
          const first = steps[0]?.count ?? 0;
          if (first === 0) return <p className="admin-muted" style={{ fontSize: 13, marginTop: 10 }}>No visits in this period.</p>;
          return (
            <ol style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {steps.map((s, i) => {
                const prev = i === 0 ? null : steps[i - 1].count;
                return (
                  <li key={s.key} style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, fontSize: 13 }}>
                      <span style={{ fontWeight: 600 }}>{i + 1}. {s.label}</span>
                      <strong style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(s.count)}</strong>
                    </div>
                    <span aria-hidden style={{ display: 'block', height: 22, borderRadius: 6, background: 'var(--grid)', overflow: 'hidden', marginTop: 4 }}>
                      <span style={{ display: 'block', height: '100%', width: `${Math.max(s.count > 0 ? 1.5 : 0, (s.count / first) * 100)}%`, background: `var(--funnel-${i + 1})`, borderRadius: 6 }} />
                    </span>
                    <div className="admin-muted" style={{ fontSize: 12, marginTop: 3, fontVariantNumeric: 'tabular-nums' }}>
                      {formatPercent(first > 0 ? s.count / first : null)} of visitors{prev !== null && prev > 0 ? ` · ${formatPercent(s.count / prev)} of the step above` : ''}
                    </div>
                  </li>
                );
              })}
            </ol>
          );
        })()
      )}
    </section>
  );
}
