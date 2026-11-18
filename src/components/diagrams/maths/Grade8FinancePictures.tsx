/**
 * Pictures for the Grade 8 Term 1 ratio, percentage, finance and scientific-notation lessons, in the style
 * of Grade8Pictures: dark panel, 120-unit-wide viewBox, at most six labels. Positions come from the numbers
 * passed in; the lessons pass values from grade8Finance, so the picture always matches the worked example.
 */
const INK = '#0f172a';
const MUTED = '#94a3b8';
const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#fb7185'];
const GOLD = '#fbbf24';

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK }}>
    {children}
  </svg>
);

export interface Segment {
  label: string;
  /** Width weight. */
  value: number;
}

/**
 * One bar split into segments (at most four), with a bracket and a caption for the whole underneath.
 * Used for sharing in a ratio, a percentage split, interest year by year, and deposit plus instalments.
 */
export const SegmentBar = ({ segments, total, aria, className }: { segments: Segment[]; total: string; aria: string; className?: string }) => {
  const sum = segments.reduce((s, x) => s + x.value, 0);
  let x = 8;
  const placed = segments.map((s, i) => {
    const w = (s.value / sum) * 104;
    const out = { ...s, x, w, color: COLORS[i % COLORS.length] };
    x += w;
    return out;
  });
  return (
    <Panel h={46} aria={aria} className={className}>
      {placed.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={8} width={s.w - 0.8} height={15} rx={2} fill={s.color} />
          <text x={s.x + (s.w - 0.8) / 2} y={18} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={INK}>{s.label}</text>
        </g>
      ))}
      <path d="M8,27 v2.5 H112 v-2.5 M60,29.5 v2.5" fill="none" stroke={GOLD} strokeWidth={0.9} />
      <text x={60} y={40} textAnchor="middle" fontSize={6.6} fontWeight={800} fill={GOLD}>{total}</text>
    </Panel>
  );
};

/** The digits of a number with a bracket under the places after the first digit: that count is the exponent of 10. */
export const SciShift = ({ digits, exp, caption }: { digits: string; exp: number; caption: string }) => {
  const n = digits.length;
  const w = Math.min(12, 100 / n);
  const x0 = 60 - (n * w) / 2;
  return (
    <Panel h={46} aria={`The number ${digits} written digit by digit. The comma goes after the first digit, so it moves ${exp} places. ${caption}`}>
      {digits.split('').map((d, i) => (
        <g key={i}>
          <rect x={x0 + i * w + 0.4} y={7} width={w - 0.8} height={14} rx={2} fill={i === 0 ? COLORS[0] : COLORS[1]} />
          <text x={x0 + i * w + w / 2} y={17.5} textAnchor="middle" fontSize={8} fontWeight={800} fill={INK}>{d}</text>
        </g>
      ))}
      <path d={`M${x0 + w + 0.4},25 v2.5 H${x0 + n * w - 0.4} v-2.5`} fill="none" stroke={GOLD} strokeWidth={0.9} />
      <text x={(x0 + w + x0 + n * w) / 2} y={36} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={GOLD}>{exp} places</text>
      <text x={60} y={43.5} textAnchor="middle" fontSize={5.4} fill={MUTED}>{caption}</text>
    </Panel>
  );
};
