import { rand } from './rand';

/** Pictures for the Grade 11 Accounting gap lessons. Amounts are passed in from club11.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);

/** Horizontal bars with labels and rand amounts. */
export const AmountBars = ({ title, rows, aria }: { title: string; rows: { label: string; amount: number; color?: 'blue' | 'green' | 'amber' | 'rose' }[]; aria: string }) => {
  const max = Math.max(...rows.map((r) => Math.abs(r.amount)), 1);
  const col = { blue: BLUE, green: GREEN, amber: AMBER, rose: ROSE };
  return (
    <Panel h={20 + rows.length * 11} aria={aria}>
      <T x={60} y={8} size={4.2} fill={AMBER}>{title}</T>
      {rows.map((r, i) => {
        const w = (Math.abs(r.amount) / max) * 56;
        return (
          <g key={r.label}>
            <T x={3} y={21 + i * 11} size={3.6} anchor="start" weight={600}>{r.label}</T>
            <rect x={40} y={14.5 + i * 11} width={w} height={8} rx={1.5} fill={col[r.color ?? 'blue']} fillOpacity={0.85} />
            <T x={40 + w + 2} y={21 + i * 11} size={3.6} anchor="start">{rand(r.amount)}</T>
          </g>
        );
      })}
    </Panel>
  );
};

/** Two bars side by side with a verdict line: for example cost against market value, or cost against net realisable value. */
export const TwoBars = ({ aLabel, a, bLabel, b, verdict }: { aLabel: string; a: number; bLabel: string; b: number; verdict: string }) => {
  const max = Math.max(a, b);
  const h = (v: number) => (v / max) * 28;
  return (
    <Panel h={58} aria={`${aLabel} ${rand(a)} and ${bLabel} ${rand(b)}. ${verdict}`}>
      <rect x={26} y={42 - h(a)} width={26} height={h(a)} fill={BLUE} fillOpacity={0.85} />
      <rect x={68} y={42 - h(b)} width={26} height={h(b)} fill={b < a ? ROSE : GREEN} fillOpacity={0.85} />
      <T x={39} y={40 - h(a)} size={3.6}>{rand(a)}</T>
      <T x={81} y={40 - h(b)} size={3.6}>{rand(b)}</T>
      <T x={39} y={48} size={3.4} fill={MUTED}>{aLabel}</T>
      <T x={81} y={48} size={3.4} fill={MUTED}>{bLabel}</T>
      <T x={60} y={7} size={4} fill={AMBER}>{verdict}</T>
    </Panel>
  );
};
