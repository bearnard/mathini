'use client';

import { useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { formatInt, longDate, shortDate } from './format';

export interface Day {
  date: string;
  visitors: number;
  learners: number;
  questions: number;
  correct: number;
  runs: number;
  signups: number;
}

/** Round a maximum up to 1, 2, 5 or 10 x 10^n so the y-axis shows clean numbers: 0, half, full. */
export function niceMax(m: number): number {
  if (!(m > 0)) return 4;
  const pow = Math.pow(10, Math.floor(Math.log10(m)));
  const f = m / pow;
  const nice = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
  return Math.max(2, nice * pow);
}

interface Panel {
  key: keyof Day;
  label: string;
  unit: string;
  color: string;
  kind: 'area' | 'bar';
  note: string;
}

// Small multiples, one measure per panel (never two y-axes). Colours follow the measure:
// visitors = series 1, active learners = series 2, practice runs = series 3; the secondary
// measures use the neutral secondary text colour.
const PANELS: Panel[] = [
  { key: 'visitors', label: 'Visitors', unit: 'unique devices', color: 'var(--series-1)', kind: 'area', note: 'Unique devices per day (Do Not Track visits excluded)' },
  { key: 'learners', label: 'Active learners', unit: 'learners', color: 'var(--series-2)', kind: 'area', note: 'Signed-in learners with any activity that day' },
  { key: 'runs', label: 'Practice runs', unit: 'finished runs', color: 'var(--series-3)', kind: 'area', note: 'Finished practice runs, all topics (from practice events)' },
  { key: 'questions', label: 'Questions answered', unit: 'answers', color: 'var(--text-secondary)', kind: 'area', note: 'Answers recorded for signed-in learners (not recorded for Grade 6 Natural Sciences, Geography, History and Afrikaans)' },
  { key: 'signups', label: 'New sign-ups', unit: 'learners', color: 'var(--text-secondary)', kind: 'bar', note: 'Learners who created an account that day' },
];

interface TipProps {
  active?: boolean;
  payload?: { value?: number | null }[];
  label?: string;
  panel: Panel;
  /** The date still in progress (today), if the range includes it. */
  partialDate: string | null;
}
function Tip({ active, payload, label, panel, partialDate }: TipProps) {
  const entry = payload?.find((e) => e.value !== null && e.value !== undefined);
  if (!active || !entry || !label) return null;
  return (
    <div className="admin-card" style={{ padding: '8px 10px', fontSize: 13, boxShadow: '0 4px 14px rgba(0,0,0,.15)' }}>
      <div className="admin-secondary" style={{ fontWeight: 600 }}>{longDate(label)}{label === partialDate ? ' (so far)' : ''}</div>
      <div>
        <span aria-hidden style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 5, background: panel.color, marginRight: 6 }} />
        <strong style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(entry.value)}</strong> <span className="admin-muted">{panel.unit}</span>
      </div>
    </div>
  );
}

/** Hollow marker for today's point (drawn only for the last data point). */
function TodayDot({ cx, cy, index, last, color }: { cx?: number; cy?: number; index?: number; last: number; color: string }) {
  if (cx === undefined || cy === undefined || index !== last) return <g />;
  return <circle cx={cx} cy={cy} r={4.5} fill="var(--surface-1)" stroke={color} strokeWidth={2} />;
}

/** Daily activity as small multiples with a shared crosshair (syncId), plus a table view. */
export default function ActivityCharts({ days, partialDate }: { days: Day[]; partialDate: string | null }) {
  const [view, setView] = useState<'chart' | 'table'>('chart');
  const tickEvery = Math.max(1, Math.ceil(days.length / 8));
  // A day still in progress (today) is drawn separately: the solid line stops at the last complete
  // day, and a dashed segment with a hollow marker leads to today, so a part-day never reads as a crash.
  const partial = partialDate !== null && days.length > 1 && days[days.length - 1].date === partialDate;
  const lastIdx = days.length - 1;
  const dataFor = (key: keyof Day) =>
    days.map((d, i) => ({
      date: d.date,
      v: partial && i === lastIdx ? null : (d[key] as number),
      live: partial && i >= lastIdx - 1 ? (d[key] as number) : null,
    }));
  const axisFor = (key: keyof Day) => {
    const top = niceMax(Math.max(0, ...days.map((d) => d[key] as number)));
    // Counts only: never show a half-step like 2.5.
    return { domain: [0, top] as [number, number], ticks: [0, ...(Number.isInteger(top / 2) ? [top / 2] : []), top] };
  };

  return (
    <section className="admin-card" style={{ padding: 16 }} aria-label="Activity over time">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>Activity over time</h2>
        <div role="group" aria-label="View" style={{ display: 'flex', gap: 6 }}>
          <button type="button" className="admin-btn" aria-pressed={view === 'chart'} onClick={() => setView('chart')}>Charts</button>
          <button type="button" className="admin-btn" aria-pressed={view === 'table'} onClick={() => setView('table')}>Table</button>
        </div>
      </div>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 4 }}>Per day, South Africa time. The latest day is still in progress. Hover a chart to compare the same day across all of them.</p>

      {view === 'table' ? (
        <div style={{ maxHeight: 420, overflow: 'auto', marginTop: 12 }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                {PANELS.map((p) => (
                  <th key={p.key} scope="col">{p.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...days].reverse().map((d) => (
                <tr key={d.date}>
                  <td>{longDate(d.date)}</td>
                  {PANELS.map((p) => (
                    <td key={p.key} style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(d[p.key] as number)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8 }}>
          {PANELS.map((p, idx) => {
            const last = idx === PANELS.length - 1;
            const total = days.reduce((n, d) => n + (d[p.key] as number), 0);
            return (
              <div key={p.key} style={{ borderTop: idx === 0 ? 'none' : '1px solid var(--grid)', paddingTop: 8 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <span aria-hidden style={{ display: 'inline-block', width: 12, height: 3, borderRadius: 2, background: p.color }} />
                  <h3 style={{ fontSize: 14, fontWeight: 700 }}>{p.label}</h3>
                  <span className="admin-muted" style={{ fontSize: 12 }}>
                    {p.key === 'visitors' || p.key === 'learners' ? p.note : `${formatInt(total)} in this period · ${p.note}`}
                  </span>
                </div>
                <div style={{ height: last ? 132 : 96 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    {p.kind === 'bar' ? (
                      <BarChart data={dataFor(p.key).map((d, i) => ({ ...d, v: d.v ?? d.live ?? 0, isToday: partial && i === lastIdx }))} syncId="activity" margin={{ top: 6, right: 8, bottom: last ? 0 : 8, left: 0 }}>
                        <CartesianGrid vertical={false} stroke="var(--grid)" />
                        <XAxis dataKey="date" hide={!last} tickFormatter={shortDate} interval={tickEvery - 1} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} tickLine={false} axisLine={{ stroke: 'var(--grid)' }} />
                        <YAxis width={34} allowDecimals={false} {...axisFor(p.key)} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} tickLine={false} axisLine={false} />
                        <Tooltip content={<Tip panel={p} partialDate={partial ? partialDate : null} />} cursor={{ stroke: 'var(--text-muted)', strokeWidth: 1 }} isAnimationActive={false} />
                        <Bar dataKey="v" fill={p.color} maxBarSize={20} radius={[4, 4, 0, 0]} isAnimationActive={false}>
                          {dataFor(p.key).map((d, i) => (
                            <Cell key={d.date} fillOpacity={partial && i === lastIdx ? 0.4 : 1} />
                          ))}
                        </Bar>
                      </BarChart>
                    ) : (
                      <AreaChart data={dataFor(p.key)} syncId="activity" margin={{ top: 6, right: 8, bottom: last ? 0 : 8, left: 0 }}>
                        <CartesianGrid vertical={false} stroke="var(--grid)" />
                        <XAxis dataKey="date" hide={!last} tickFormatter={shortDate} interval={tickEvery - 1} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} tickLine={false} axisLine={{ stroke: 'var(--grid)' }} />
                        <YAxis width={34} allowDecimals={false} {...axisFor(p.key)} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} tickLine={false} axisLine={false} />
                        <Tooltip content={<Tip panel={p} partialDate={partial ? partialDate : null} />} cursor={{ stroke: 'var(--text-muted)', strokeWidth: 1 }} isAnimationActive={false} />
                        <Area type="linear" dataKey="v" stroke={p.color} strokeWidth={2} strokeLinejoin="round" fill={p.color} fillOpacity={0.1} dot={false} activeDot={{ r: 4, stroke: 'var(--surface-1)', strokeWidth: 2, fill: p.color }} isAnimationActive={false} connectNulls={false} />
                        {partial && (
                          <Line type="linear" dataKey="live" stroke={p.color} strokeWidth={2} strokeDasharray="4 4" dot={(props: { cx?: number; cy?: number; index?: number; key?: React.Key | null }) => <TodayDot key={props.key ?? props.index} cx={props.cx} cy={props.cy} index={props.index} last={lastIdx} color={p.color} />} activeDot={false} isAnimationActive={false} connectNulls={false} />
                        )}
                      </AreaChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
