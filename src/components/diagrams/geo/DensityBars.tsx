import { axisMax, axisTicks } from '../maths/mathsHelpers';
import { r3 } from '../round';

/**
 * Horizontal bar graph of people per square kilometre: every province name has room on the left
 * (the vertical chart skipped some names on a phone), a real axis with a scale of 200, and the
 * rounded figure at the end of each bar. Values come from density.ts (Stats SA Census 2022).
 */

const INK = '#0f172a';
const SOFT = '#cbd5e1';

export const DensityBars = ({ rows, step = 200 }: { rows: { province: string; density: number }[]; step?: number }) => {
  const max = Math.max(...rows.map((r) => r.density));
  const top = axisMax(max, step);
  const ticks = axisTicks(max, step);
  const X0 = 52;
  const W = 88;
  const Y0 = 20;
  const ROW = 14;
  const bottom = Y0 + rows.length * ROW;
  const px = (v: number) => r3(X0 + (v / top) * W);
  return (
    <svg
      viewBox={`0 0 150 ${bottom + 20}`}
      role="img"
      aria-labelledby="db-t db-d"
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="db-t">People per square kilometre in four provinces (Census 2022)</title>
      <desc id="db-d">A bar graph. {rows.map((r) => `${r.province}: about ${r.density} people per square kilometre`).join('. ')}.</desc>
      <text x={75} y={9.5} textAnchor="middle" fontSize={7.4} fontWeight={800} fill="#e2e8f0">People per km², Census 2022</text>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={px(t)} y1={Y0 - 3} x2={px(t)} y2={bottom} stroke={t === 0 ? '#94a3b8' : '#334155'} strokeWidth={t === 0 ? 1 : 0.5} />
          <text x={px(t)} y={bottom + 8} textAnchor="middle" fontSize={5.8} fontWeight={700} fill={SOFT}>{t}</text>
        </g>
      ))}
      {rows.map((r, i) => {
        const y = Y0 + i * ROW + 2;
        const w = Math.max(0.6, ((r.density / top) * W));
        return (
          <g key={r.province}>
            <text x={X0 - 3} y={y + 6.4} textAnchor="end" fontSize={6.8} fontWeight={800} fill="#e2e8f0">{r.province}</text>
            <rect x={X0} y={y} width={r3(w)} height={9} fill="#f59e0b" rx={1.2} />
            <text x={r3(X0 + w + 2.4)} y={y + 6.8} fontSize={6.8} fontWeight={800} fill="#fbbf24">{r.density}</text>
          </g>
        );
      })}
    </svg>
  );
};
