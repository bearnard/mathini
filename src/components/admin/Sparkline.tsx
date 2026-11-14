'use client';

import { Line, LineChart, ResponsiveContainer } from 'recharts';

/**
 * Tiny trend line for a stat tile: 2px, straight segments, no axes, no animation. Gaps (null) stay gaps.
 * With `partialLast`, the final (in-progress) day is drawn dashed so a part-day never looks like a crash.
 */
export default function Sparkline({ values, color = 'var(--series-1)', partialLast = false }: { values: (number | null)[]; color?: string; partialLast?: boolean }) {
  const n = values.length;
  const split = partialLast && n > 2;
  const data = values.map((v, i) => ({
    i,
    v: split && i === n - 1 ? null : v,
    live: split && i >= n - 2 ? v : null,
  }));
  if (n < 2 || values.every((v) => v === null || v === 0)) {
    return <div aria-hidden style={{ height: 36, borderBottom: '1px solid var(--grid)' }} />;
  }
  return (
    <div aria-hidden style={{ height: 36 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 4, right: 5, bottom: 4, left: 4 }}>
          <Line type="linear" dataKey="v" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" dot={false} isAnimationActive={false} connectNulls={false} />
          {split && <Line type="linear" dataKey="live" stroke={color} strokeWidth={2} strokeDasharray="3 3" strokeLinecap="round" dot={false} isAnimationActive={false} connectNulls={false} />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
