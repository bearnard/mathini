'use client';

import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { formatInt } from './format';

interface Tip { active?: boolean; payload?: { payload?: { score: number; count: number } }[]; total: number }
function ScoreTip({ active, payload, total }: Tip) {
  const d = payload?.[0]?.payload;
  if (!active || !d) return null;
  return (
    <div className="admin-card" style={{ padding: '8px 10px', fontSize: 13, boxShadow: '0 4px 14px rgba(0,0,0,.15)' }}>
      <div className="admin-secondary" style={{ fontWeight: 600 }}>Score {d.score} / {total}</div>
      <div><strong style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(d.count)}</strong> <span className="admin-muted">{d.count === 1 ? 'test' : 'tests'}</span></div>
    </div>
  );
}

/** How first-attempt scores are spread: one column per score, with the average marked. */
export default function MockHistogram({ histogram, total, average }: { histogram: number[]; total: number; average: number | null }) {
  const data = histogram.map((count, score) => ({ score, count }));
  return (
    <div style={{ height: 150 }} role="img" aria-label={`Distribution of mock test scores out of ${total}${average !== null ? `, average ${average.toFixed(1)}` : ''}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 14, right: 8, bottom: 0, left: 0 }} barCategoryGap={2}>
          <CartesianGrid vertical={false} stroke="var(--grid)" />
          <XAxis dataKey="score" interval={total > 10 ? 1 : 0} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} tickLine={false} axisLine={{ stroke: 'var(--grid)' }} />
          <YAxis width={28} allowDecimals={false} tick={{ fill: 'var(--text-muted)', fontSize: 11 }} tickLine={false} axisLine={false} />
          <Tooltip content={<ScoreTip total={total} />} cursor={{ fill: 'var(--grid)', opacity: 0.6 }} isAnimationActive={false} />
          <Bar dataKey="count" fill="var(--series-1)" maxBarSize={24} radius={[4, 4, 0, 0]} isAnimationActive={false} />
          {average !== null && (
            <ReferenceLine x={Math.round(average)} stroke="var(--text-secondary)" strokeDasharray="4 3" label={{ value: `avg ${average.toFixed(1)}`, position: 'top', fill: 'var(--text-secondary)', fontSize: 11 }} />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
