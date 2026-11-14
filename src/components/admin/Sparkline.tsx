'use client';

import { Line, LineChart, ResponsiveContainer } from 'recharts';

/** Tiny trend line for a stat tile: 2px, no axes, no animation. Gaps (null) stay gaps. */
export default function Sparkline({ values, color = 'var(--series-1)' }: { values: (number | null)[]; color?: string }) {
  const data = values.map((v, i) => ({ i, v }));
  if (data.length < 2 || data.every((d) => d.v === null || d.v === 0)) {
    return <div aria-hidden style={{ height: 36, borderBottom: '1px solid var(--grid)' }} />;
  }
  return (
    <div aria-hidden style={{ height: 36 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
