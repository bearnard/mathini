import { stats } from './mathsHelpers';

/**
 * Mean, median, mode and range on ONE dot strip. Everything is read from stats(data):
 * the tallest stack is the mode, the middle dot is the median, a see-saw tip marks the mean
 * (the balance point), and a bracket from the smallest to the largest value is the range.
 */

export const STRIP_COLORS = { mode: '#fbbf24', median: '#34d399', mean: '#fb7185', range: '#38bdf8' } as const;

interface DotStripProps {
  data: number[];
  /** Axis runs 0..max (whole numbers). */
  max?: number;
  className?: string;
}

const X0 = 12;
const STEP = 9.6;
const BASE = 66;
const R = 3.7;

const DotStrip = ({ data, max = 10, className }: DotStripProps) => {
  const s = stats(data);
  const xOf = (v: number) => X0 + v * STEP;
  const stackOf = new Map<number, number>();
  const dots = s.sorted.map((v, idx) => {
    const k = stackOf.get(v) ?? 0;
    stackOf.set(v, k + 1);
    return { v, idx, x: xOf(v), y: BASE - R - 1 - k * (2 * R + 0.6) };
  });
  const medianDot = dots[Math.floor(s.n / 2)];
  const modeV = s.modes[0];
  const modeTop = modeV !== undefined ? Math.min(...dots.filter((d) => d.v === modeV).map((d) => d.y)) - R : 0;
  const rangeY = 96;
  return (
    <svg
      viewBox="0 0 120 112"
      role="img"
      aria-label={`A dot strip of ${s.sorted.join(', ')}. The mode is ${s.modes.join(' and ') || 'none'}, the tallest stack. The median is ${s.median}, the middle dot. The mean is ${s.mean}, the balance point. The range is ${s.range}, from ${s.min} to ${s.max}.`}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      {/* axis */}
      <line x1={X0 - 4} y1={BASE} x2={xOf(max) + 4} y2={BASE} stroke="#64748b" strokeWidth={1.2} />
      {Array.from({ length: max + 1 }).map((_, v) => (
        <g key={v}>
          <line x1={xOf(v)} y1={BASE} x2={xOf(v)} y2={BASE + 2.4} stroke="#64748b" strokeWidth={0.8} />
          <text x={xOf(v)} y={BASE + 9} textAnchor="middle" fontSize={5.4} fontWeight={700} fill="#94a3b8">{v}</text>
        </g>
      ))}

      {/* mean: a see-saw tip under the line at the balance point */}
      <path d={`M${xOf(s.mean)} ${BASE + 3} l-4.2 8 h8.4 Z`} fill={STRIP_COLORS.mean} />
      <text x={xOf(s.mean) + 6} y={BASE + 20.4} fontSize={6.2} fontWeight={800} fill={STRIP_COLORS.mean}>Mean</text>

      {/* the dots */}
      {dots.map((d) => (
        <circle key={d.idx} cx={d.x} cy={d.y} r={R} fill="#e2e8f0" stroke="#0f172a" strokeWidth={0.6} />
      ))}

      {/* mode: ring round the tallest stack */}
      {modeV !== undefined && (
        <g>
          <rect x={xOf(modeV) - R - 1.6} y={modeTop - 1.6} width={2 * R + 3.2} height={BASE - modeTop - 0.4} rx={R + 1.6} fill="none" stroke={STRIP_COLORS.mode} strokeWidth={1.4} />
          <text x={xOf(modeV)} y={modeTop - 5} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={STRIP_COLORS.mode}>Mode</text>
        </g>
      )}

      {/* median: the middle dot */}
      <circle cx={medianDot.x} cy={medianDot.y} r={R + 1.8} fill="none" stroke={STRIP_COLORS.median} strokeWidth={1.4} />
      <line x1={medianDot.x} y1={medianDot.y - R - 2} x2={medianDot.x} y2={14} stroke={STRIP_COLORS.median} strokeWidth={0.8} strokeDasharray="1.2 1.2" />
      <text x={medianDot.x} y={11} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={STRIP_COLORS.median}>Median</text>

      {/* range: bracket from smallest to largest */}
      <path d={`M${xOf(s.min)} ${rangeY - 3} v3 H${xOf(s.max)} v-3`} fill="none" stroke={STRIP_COLORS.range} strokeWidth={1.4} />
      <text x={(xOf(s.min) + xOf(s.max)) / 2} y={rangeY + 8} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={STRIP_COLORS.range}>Range</text>
    </svg>
  );
};

export default DotStrip;
