import { r3 } from '../round';
import { A, E, I, INK, LINE, Panel, R } from './Grade7Pictures';
import { barValue, sectorAngle } from './grade7Helpers2';
import { stats } from './mathsHelpers';

/**
 * Grade 7 data-handling pictures: the mean as levelling bars, the median from sorted cards, a bar
 * graph read from its scale, and a pie chart. Every value comes from stats() (mathsHelpers.ts) or
 * grade7Helpers2.ts. Same style as Grade7Pictures.
 */

const T = ({ x, y, children, fill = LINE, size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{children}</text>
);

/** Bars for the data with a dashed line at the mean: the bits above the line fill the gaps below it. */
export const MeanLevel = ({ data, className }: { data: number[]; className?: string }) => {
  const s = stats(data);
  const total = data.reduce((a, b) => a + b, 0);
  const n = data.length;
  const unit = 44 / s.max;
  const base = 56;
  const BW = 16;
  const gap = 10;
  const x0 = 60 - (n * BW + (n - 1) * gap) / 2;
  const meanY = r3(base - s.mean * unit);
  return (
    <Panel h={81} className={className} aria={`Bars of height ${data.join(', ')}. Together they make ${total}. Shared equally between ${n} bars, each would be ${s.mean}: the dashed line at ${s.mean} is the mean.`}>
      {data.map((v, i) => {
        const x = x0 + i * (BW + gap);
        return (
          <g key={i}>
            <rect x={r3(x)} y={r3(base - v * unit)} width={BW} height={r3(v * unit)} rx={1.5} fill={v > s.mean ? 'rgba(251,113,133,0.55)' : I} />
            {v < s.mean && <rect x={r3(x)} y={meanY} width={BW} height={r3((s.mean - v) * unit)} fill="none" stroke={E} strokeWidth={0.9} strokeDasharray="1.6 1.2" />}
            <T x={x + BW / 2} y={base + 8} size={6}>{v}</T>
          </g>
        );
      })}
      <line x1={x0 - 6} y1={meanY} x2={x0 + n * BW + (n - 1) * gap + 6} y2={meanY} stroke={A} strokeWidth={0.9} strokeDasharray="2.4 1.6" />
      <T x={60} y={base + 19} fill={A} size={6}>{`mean = ${total} ÷ ${n} = ${s.mean}`}</T>
    </Panel>
  );
};

/** The data as cards, then the same cards in order with the middle one highlighted: the median. */
export const SortedCards = ({ data, className }: { data: number[]; className?: string }) => {
  const s = stats(data);
  const n = data.length;
  const CW = Math.min(16, 96 / n);
  const gap = 3;
  const x0 = 60 - (n * CW + (n - 1) * gap) / 2;
  const mid = Math.floor(n / 2);
  const row = (vals: number[], y: number, highlight?: number) =>
    vals.map((v, i) => (
      <g key={`${y}-${i}`}>
        <rect x={r3(x0 + i * (CW + gap))} y={y} width={CW} height={14} rx={2} fill={i === highlight ? E : '#1e293b'} stroke={i === highlight ? E : '#64748b'} strokeWidth={0.8} />
        <T x={x0 + i * (CW + gap) + CW / 2} y={y + 9.8} fill={i === highlight ? INK : LINE} size={7}>{v}</T>
      </g>
    ));
  return (
    <Panel h={74} className={className} aria={`The data ${data.join(', ')} written in order from smallest to biggest: ${s.sorted.join(', ')}. The middle value is ${s.median}, the median.`}>
      <T x={6} y={9} fill={I} size={5} anchor="start">as given</T>
      {row(data, 12)}
      <T x={6} y={37} fill={E} size={5} anchor="start">in order</T>
      {row(s.sorted, 40, n % 2 ? mid : undefined)}
      <T x={60} y={67} fill={A} size={6}>{`median = ${s.median}`}</T>
    </Panel>
  );
};

/** A bar graph without numbers on the bars: read each bar against the scale. One bar is traced across to the axis. */
export const ScaleBars = ({ items, step, read, className }: { items: { label: string; value: number }[]; step: number; read: number; className?: string }) => {
  const top = Math.ceil(Math.max(...items.map((i) => i.value)) / step) + 1; // one empty interval on top, so the tallest bar can be traced
  const X0 = 22;
  const W = 92;
  const base = 64;
  const H = 52;
  const py = (v: number) => r3(base - (v / (top * step)) * H);
  const slot = W / items.length;
  const colors = [I, E, A, R];
  const traced = items[read];
  const intervals = traced.value / step;
  return (
    <Panel h={78} className={className} aria={`A bar graph with a scale going up in ${step}s. ${items.map((i) => `${i.label}: ${i.value}`).join(', ')}. The ${traced.label} bar reaches ${intervals} intervals of ${step}, which is ${barValue(intervals, step)}.`}>
      {Array.from({ length: top + 1 }).map((_, k) => (
        <g key={k}>
          <line x1={X0} y1={py(k * step)} x2={X0 + W} y2={py(k * step)} stroke={k === 0 ? '#94a3b8' : '#334155'} strokeWidth={k === 0 ? 0.9 : 0.45} />
          <text x={X0 - 2.5} y={r3(py(k * step) + 1.7)} textAnchor="end" fontSize={4.6} fontWeight={700} fill="#94a3b8">{k * step}</text>
        </g>
      ))}
      <line x1={X0} y1={py(0)} x2={X0} y2={py(top * step)} stroke="#94a3b8" strokeWidth={0.9} />
      {items.map((it, i) => {
        const bw = slot * 0.56;
        const x = X0 + i * slot + (slot - bw) / 2;
        return (
          <g key={it.label}>
            <rect x={r3(x)} y={py(it.value)} width={r3(bw)} height={r3(base - py(it.value))} rx={1.2} fill={colors[i % colors.length]} />
            <T x={x + bw / 2} y={base + 7} size={4.8}>{it.label}</T>
          </g>
        );
      })}
      <line x1={X0} y1={py(0)} x2={X0} y2={py(traced.value)} stroke={A} strokeWidth={1.8} />
      {Array.from({ length: intervals }).map((_, k) => <circle key={k} cx={X0} cy={py((k + 1) * step)} r={1.3} fill={A} />)}
      <line x1={X0} y1={py(traced.value)} x2={r3(X0 + read * slot + slot * 0.22)} y2={py(traced.value)} stroke={A} strokeWidth={0.9} strokeDasharray="2 1.4" />
    </Panel>
  );
};

/** A pie chart: each sector's angle is its share of 360°. The first sector's angle is written on it. */
export const PieSectors = ({ items, className }: { items: { label: string; value: number }[]; className?: string }) => {
  const total = items.reduce((s, i) => s + i.value, 0);
  const cx = 40;
  const cy = 38;
  const rad = 28;
  const colors = [A, I, E, R];
  let start = -90; // the first sector starts at 12 o'clock and goes clockwise
  const pt = (deg: number, r: number) => ({ x: r3(cx + r * Math.cos((deg * Math.PI) / 180)), y: r3(cy + r * Math.sin((deg * Math.PI) / 180)) });
  const sectors = items.map((it, i) => {
    const ang = sectorAngle(it.value, total);
    const s = pt(start, rad);
    const e = pt(start + ang, rad);
    const m = pt(start + ang / 2, rad * 0.6);
    const d = `M${cx},${cy} L${s.x},${s.y} A${rad},${rad} 0 ${ang > 180 ? 1 : 0} 1 ${e.x},${e.y} Z`;
    start += ang;
    return { it, i, ang, d, m };
  });
  return (
    <Panel h={76} className={className} aria={`A pie chart of ${total}. ${sectors.map((s) => `${s.it.label}: ${s.it.value}, a sector of ${s.ang} degrees`).join('. ')}.`}>
      {sectors.map((s) => (
        <path key={s.i} d={s.d} fill={colors[s.i % colors.length]} stroke={INK} strokeWidth={0.8} />
      ))}
      <T x={sectors[0].m.x} y={sectors[0].m.y + 2} fill={INK} size={6}>{`${sectors[0].ang}°`}</T>
      {sectors.map((s) => (
        <g key={`k${s.i}`}>
          <rect x={78} y={r3(18 + s.i * 11)} width={5} height={5} rx={1} fill={colors[s.i % colors.length]} />
          <T x={86} y={18 + s.i * 11 + 4.6} size={5} anchor="start">{`${s.it.label} ${s.it.value}`}</T>
        </g>
      ))}
    </Panel>
  );
};
