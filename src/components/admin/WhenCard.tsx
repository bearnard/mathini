'use client';

import { useRef, useState } from 'react';
import { heatColor, heatLegend, heatStep, HEAT_STEPS } from './heat';
import { formatInt, hourRange, WEEKDAYS, WEEKDAYS_LONG } from './format';
import { useAdminData } from './useAdminData';

interface Peak {
  weekday: number;
  hour: number;
  count: number;
}
interface HeatmapData {
  visits: number[][];
  runs: number[][];
  peak: { visits: Peak | null; runs: Peak | null };
}
type Measure = 'visits' | 'runs';
const LABEL: Record<Measure, { name: string; unit: string }> = {
  visits: { name: 'Visits', unit: 'visits started' },
  runs: { name: 'Practice runs', unit: 'practice runs finished' },
};

/** Hour of day x weekday heatmap (SAST): shows study habits and the exam rush. */
export default function WhenCard({ qs }: { qs: string }) {
  const state = useAdminData<HeatmapData>('/api/admin/heatmap', qs);
  const [measure, setMeasure] = useState<Measure>('visits');
  const [view, setView] = useState<'chart' | 'table'>('chart');
  const [tip, setTip] = useState<{ x: number; y: number; wd: number; h: number } | null>(null);
  const wrap = useRef<HTMLDivElement>(null);

  return (
    <section className="admin-card" style={{ padding: 16 }} aria-label="When people use the app">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>When</h2>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <div role="group" aria-label="Measure" style={{ display: 'flex', gap: 6 }}>
            {(Object.keys(LABEL) as Measure[]).map((m) => (
              <button key={m} type="button" className="admin-btn" aria-pressed={measure === m} onClick={() => setMeasure(m)}>{LABEL[m].name}</button>
            ))}
          </div>
          <div role="group" aria-label="View" style={{ display: 'flex', gap: 6 }}>
            <button type="button" className="admin-btn" aria-pressed={view === 'chart'} onClick={() => setView('chart')}>Heatmap</button>
            <button type="button" className="admin-btn" aria-pressed={view === 'table'} onClick={() => setView('table')}>Table</button>
          </div>
        </div>
      </div>

      {state.status === 'error' ? (
        <p role="alert" style={{ marginTop: 12 }}>Sorry, this could not be loaded.</p>
      ) : state.status === 'loading' ? (
        <p aria-busy="true" style={{ marginTop: 12 }}>Loading…</p>
      ) : (
        (() => {
          const grid = state.data[measure];
          const max = Math.max(0, ...grid.flat());
          const total = grid.flat().reduce((a, b) => a + b, 0);
          const peak = state.data.peak[measure];
          const legend = heatLegend(max);
          return (
            <>
              <p className="admin-muted" style={{ fontSize: 12, marginTop: 4 }}>
                {LABEL[measure].unit[0].toUpperCase() + LABEL[measure].unit.slice(1)}, by weekday and hour, South Africa time. {formatInt(total)} in this period.
                {peak ? ` Busiest: ${WEEKDAYS_LONG[peak.weekday]} ${hourRange(peak.hour)} (${formatInt(peak.count)}).` : ' Nothing recorded yet.'}
              </p>

              {view === 'table' ? (
                <div style={{ overflow: 'auto', maxHeight: 440, marginTop: 10 }}>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th scope="col">Hour</th>
                        {WEEKDAYS.map((d) => (<th key={d} scope="col">{d}</th>))}
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 24 }, (_, h) => (
                        <tr key={h}>
                          <td>{hourRange(h)}</td>
                          {WEEKDAYS.map((_, wd) => (<td key={wd} style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(grid[wd][h])}</td>))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div ref={wrap} style={{ position: 'relative', marginTop: 10, overflowX: 'auto' }} onPointerLeave={() => setTip(null)}>
                  <div role="img" aria-label={`Heatmap of ${LABEL[measure].unit} by weekday and hour`} style={{ minWidth: 520 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '36px repeat(24, minmax(0, 1fr))', gap: 2, alignItems: 'center' }}>
                      <span />
                      {Array.from({ length: 24 }, (_, h) => (
                        <span key={h} className="admin-muted" style={{ fontSize: 10, textAlign: 'center' }}>{h % 3 === 0 ? String(h).padStart(2, '0') : ''}</span>
                      ))}
                      {WEEKDAYS.map((d, wd) => (
                        <FragmentRow
                          key={d}
                          label={d}
                          cells={grid[wd]}
                          max={max}
                          onCell={(h, e) => {
                            const box = wrap.current?.getBoundingClientRect();
                            setTip({ x: e.clientX - (box?.left ?? 0), y: e.clientY - (box?.top ?? 0), wd, h });
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {tip && (
                    <div role="status" className="admin-card" style={{ position: 'absolute', left: Math.min(tip.x + 12, (wrap.current?.clientWidth ?? 400) - 190), top: tip.y + 14, padding: '8px 10px', fontSize: 13, pointerEvents: 'none', boxShadow: '0 4px 14px rgba(0,0,0,.18)', zIndex: 2, whiteSpace: 'nowrap' }}>
                      <div style={{ fontWeight: 700 }}>{WEEKDAYS_LONG[tip.wd]} {hourRange(tip.h)}</div>
                      <div className="admin-secondary"><strong style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(grid[tip.wd][tip.h])}</strong> {LABEL[measure].unit}</div>
                    </div>
                  )}
                  <div aria-label="Colour key" className="admin-muted" style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', marginTop: 10, fontSize: 12 }}>
                    <span style={{ width: 14, height: 14, borderRadius: 3, background: 'var(--heat-empty)', display: 'inline-block' }} /> <span>none</span>
                    <span style={{ marginLeft: 8 }}>Fewer</span>
                    {Array.from({ length: HEAT_STEPS }, (_, i) => (
                      <span key={i} title={legend[i] ? `${formatInt(legend[i].from)}–${formatInt(legend[i].to)}` : ''} style={{ width: 22, height: 12, borderRadius: 3, background: heatColor(i), display: 'inline-block' }} />
                    ))}
                    <span>More{max > 0 ? ` (up to ${formatInt(max)})` : ''}</span>
                  </div>
                </div>
              )}
            </>
          );
        })()
      )}
    </section>
  );
}

function FragmentRow({ label, cells, max, onCell }: { label: string; cells: number[]; max: number; onCell: (hour: number, e: React.PointerEvent) => void }) {
  return (
    <>
      <span className="admin-secondary" style={{ fontSize: 12, fontWeight: 600 }}>{label}</span>
      {cells.map((n, h) => (
        <span
          key={h}
          data-weekday={label}
          data-hour={h}
          data-count={n}
          onPointerMove={(e) => onCell(h, e)}
          style={{ aspectRatio: '1 / 1', minHeight: 14, borderRadius: 3, background: heatColor(heatStep(n, max)), display: 'block' }}
        />
      ))}
    </>
  );
}
