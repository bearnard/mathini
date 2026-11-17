import { r3 } from '../round';

/** Pictures for the Grade 11 gas law, mole and stoichiometry lessons. Every position comes from the numbers passed in. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
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
const dc = (n: number, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');

// ---------- a graph of points with a smooth line ----------

export interface Pt { x: number; y: number; label: string }

export const GasPlot = ({ points, curve, xLabel, yLabel, title, aria, xMax, yMax }: { points: Pt[]; curve: { x: number; y: number }[]; xLabel: string; yLabel: string; title: string; aria: string; xMax: number; yMax: number }) => {
  const x0 = 16, y0 = 52, w = 96, h = 40;
  const X = (v: number) => r3(x0 + (v / xMax) * w);
  const Y = (v: number) => r3(y0 - (v / yMax) * h);
  const d = curve.map((p, i) => `${i === 0 ? 'M' : 'L'}${X(p.x)} ${Y(p.y)}`).join(' ');
  return (
    <Panel h={70} aria={aria}>
      <T x={60} y={7} size={4.4} fill={AMBER}>{title}</T>
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUTED} strokeWidth={0.6} />
      <line x1={x0} y1={y0} x2={x0} y2={y0 - h} stroke={MUTED} strokeWidth={0.6} />
      <path d={d} fill="none" stroke={BLUE} strokeWidth={1.1} />
      {points.map((p) => (
        <g key={p.label}>
          <circle cx={X(p.x)} cy={Y(p.y)} r={1.8} fill={GREEN} />
          <T x={X(p.x) > 70 ? r3(X(p.x) - 2) : r3(X(p.x) + 2)} y={r3(Y(p.y) - 3)} size={3.6} anchor={X(p.x) > 70 ? 'end' : 'start'}>{p.label}</T>
        </g>
      ))}
      <T x={r3(x0 + w / 2)} y={61} size={3.8} fill={MUTED} weight={600}>{xLabel}</T>
      <T x={4} y={r3(y0 - h / 2)} size={3.8} anchor="start" fill={MUTED} weight={600}>{yLabel}</T>
      <T x={60} y={68} size={3.6} fill={MUTED} weight={600}>green dots are the measured values</T>
    </Panel>
  );
};

// ---------- the mole map ----------

export const MoleMap = () => (
  <Panel h={62} aria="The mole map. In the centre is the amount of substance n in moles. n equals mass divided by molar mass, m over M. For a gas at standard temperature and pressure, n equals volume divided by 22,4 cubic decimetres per mole. For a solution, n equals concentration times volume, c times V. The number of particles is n times Avogadro's number.">
    <rect x={42} y={22} width={36} height={18} rx={4} fill={AMBER} fillOpacity={0.2} stroke={AMBER} strokeWidth={0.9} />
    <T x={60} y={33.4} size={6} fill={AMBER} weight={800}>n (mol)</T>
    {[
      { x: 4, y: 3, t: 'mass m (g)', f: 'n = m / M', c: BLUE },
      { x: 66, y: 3, t: 'gas V (dm³)', f: 'n = V / 22,4', c: GREEN },
      { x: 4, y: 45, t: 'solution', f: 'n = c × V', c: SKY },
      { x: 66, y: 45, t: 'particles', f: 'N = n × 6,02 × 10²³', c: ROSE },
    ].map((b) => (
      <g key={b.t}>
        <rect x={b.x} y={b.y} width={50} height={14} rx={3} fill={b.c} fillOpacity={0.16} stroke={b.c} strokeWidth={0.7} />
        <T x={b.x + 25} y={b.y + 5.6} size={4.2} fill={b.c} weight={800}>{b.t}</T>
        <T x={b.x + 25} y={b.y + 11} size={3.8} weight={600}>{b.f}</T>
      </g>
    ))}
  </Panel>
);

// ---------- have and need ----------

export const HaveNeed = ({ items, unit, aria }: { items: { label: string; have: number; need: number }[]; unit: string; aria: string }) => {
  const max = Math.max(...items.flatMap((i) => [i.have, i.need]));
  return (
    <Panel h={14 + items.length * 24} aria={aria}>
      <T x={60} y={7} size={4.4} fill={AMBER}>Amount you have and amount needed ({unit})</T>
      {items.map((it, k) => {
        const y = 12 + k * 24;
        const wh = r3((it.have / max) * 62);
        const wn = r3((it.need / max) * 62);
        return (
          <g key={it.label}>
            <T x={4} y={y + 5} size={4.6} anchor="start" weight={800}>{it.label}</T>
            <rect x={36} y={y} width={wh} height={7} rx={1.5} fill={GREEN} />
            <T x={r3(36 + wh + 2)} y={y + 6} size={4} anchor="start">{`have ${dc(it.have)}`}</T>
            <rect x={36} y={y + 9} width={wn} height={7} rx={1.5} fill={it.need > it.have ? ROSE : BLUE} />
            <T x={r3(36 + wn + 2)} y={y + 15} size={4} anchor="start">{`need ${dc(it.need)}`}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- theoretical and actual ----------

export const YieldBars = ({ theoretical, actual, unit }: { theoretical: number; actual: number; unit: string }) => {
  const wt = 70;
  const wa = r3((actual / theoretical) * wt);
  return (
    <Panel h={40} aria={`Bars of the theoretical yield, ${dc(theoretical, 1)} ${unit}, and the actual yield, ${dc(actual, 1)} ${unit}. The actual yield is ${dc((actual / theoretical) * 100, 0)} percent of the theoretical yield.`}>
      <T x={4} y={11} size={4.2} anchor="start" weight={700}>theoretical</T>
      <rect x={34} y={6} width={wt} height={8} rx={1.5} fill={BLUE} />
      <T x={r3(34 + wt - 2)} y={12} size={4} anchor="end" fill={INK} weight={800}>{`${dc(theoretical, 1)} ${unit}`}</T>
      <T x={4} y={25} size={4.2} anchor="start" weight={700}>actual</T>
      <rect x={34} y={20} width={wa} height={8} rx={1.5} fill={GREEN} />
      <T x={r3(34 + wa - 2)} y={26} size={4} anchor="end" fill={INK} weight={800}>{`${dc(actual, 1)} ${unit}`}</T>
      <T x={60} y={36} size={4.2} fill={AMBER}>{`percent yield = ${dc((actual / theoretical) * 100, 0)}%`}</T>
    </Panel>
  );
};

// ---------- cards ----------

export const FactCards = ({ cards, aria }: { cards: { title: string; line1: string; line2?: string }[]; aria: string }) => {
  const rowH = 17;
  const cols = [AMBER, GREEN, BLUE, ROSE];
  return (
    <Panel h={6 + cards.length * rowH} aria={aria}>
      {cards.map((c, i) => {
        const y = 4 + i * rowH;
        const col = cols[i % cols.length];
        return (
          <g key={c.title}>
            <rect x={4} y={y} width={112} height={rowH - 3} rx={3} fill={col} fillOpacity={0.14} stroke={col} strokeWidth={0.7} />
            <T x={9} y={y + 6} size={5.2} anchor="start" fill={col} weight={800}>{c.title}</T>
            <T x={9} y={y + 11.6} size={4.2} anchor="start" weight={600}>{c.line1 + (c.line2 ? ` ${c.line2}` : '')}</T>
          </g>
        );
      })}
    </Panel>
  );
};
