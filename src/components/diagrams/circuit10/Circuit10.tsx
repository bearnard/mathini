import { r3 } from '../round';
import { parallelR, seriesR } from './circuit10Helpers';

/** Pictures for the Grade 10 Physical Sciences electric circuits lesson. Totals come from circuit10Helpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const SKY = '#38bdf8';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const n = (x: number) => String(x).replace('.', ',');

const Resistor = ({ x, y, label }: { x: number; y: number; label: string }) => (
  <g>
    <rect x={x - 7} y={y - 3.5} width={14} height={7} rx={1} fill="none" stroke={AMBER} strokeWidth={1} />
    <T x={x} y={y + 1.4} size={3.8} fill={AMBER}>{label}</T>
  </g>
);

/** Resistors in series or in parallel with the equivalent resistance written underneath. */
export const ResistorLayout = ({ kind, rs }: { kind: 'series' | 'parallel'; rs: number[] }) => {
  const total = kind === 'series' ? seriesR(rs) : parallelR(rs);
  if (kind === 'series') {
    const step = 96 / (rs.length + 1);
    const xs = rs.map((_, i) => r3(12 + step * (i + 1)));
    return (
      <Panel h={50} aria={`${rs.length} resistors in series: ${rs.map((r) => `${n(r)} ohm`).join(', ')}. The equivalent resistance is the sum, ${n(total)} ohm. The same current flows through each resistor.`}>
        <path d={`M8 22 H${xs[0] - 7} ${xs.slice(0, -1).map((x, i) => `M${x + 7} 22 H${xs[i + 1] - 7}`).join(' ')} M${xs[xs.length - 1] + 7} 22 H112`} fill="none" stroke={SKY} strokeWidth={0.9} />
        {rs.map((r, i) => <Resistor key={i} x={xs[i]} y={22} label={`${n(r)} Ω`} />)}
        <T x={60} y={9} size={4.2} fill={GREEN}>in series: the resistances add</T>
        <T x={60} y={40} size={4.6} fill={LINE}>{`R = ${rs.map(n).join(' + ')} = ${n(total)} Ω`}</T>
      </Panel>
    );
  }
  const h = 24 + rs.length * 10;
  const ys = rs.map((_, i) => r3(18 + i * 10));
  return (
    <Panel h={h + 16} aria={`${rs.length} resistors in parallel: ${rs.map((r) => `${n(r)} ohm`).join(', ')}. The equivalent resistance is ${n(total)} ohm, which is less than the smallest resistor. The potential difference is the same across each resistor.`}>
      <T x={60} y={9} size={4.2} fill={GREEN}>in parallel: more paths, less resistance</T>
      <path d={`M24 ${ys[0]} V${ys[ys.length - 1]} M96 ${ys[0]} V${ys[ys.length - 1]} M8 ${r3((ys[0] + ys[ys.length - 1]) / 2)} H24 M96 ${r3((ys[0] + ys[ys.length - 1]) / 2)} H112 ${ys.map((y) => `M24 ${y} H53 M67 ${y} H96`).join(' ')}`} fill="none" stroke={SKY} strokeWidth={0.9} />
      {rs.map((r, i) => <Resistor key={i} x={60} y={ys[i]} label={`${n(r)} Ω`} />)}
      <T x={60} y={h + 6} size={4.4} fill={LINE}>{`1/R = ${rs.map((r) => `1/${n(r)}`).join(' + ')}, so R = ${n(total)} Ω`}</T>
    </Panel>
  );
};
