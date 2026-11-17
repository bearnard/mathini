import { r3 } from '../round';

/** Pictures for the Grade 11 mining and mineral processing lesson. Every size comes from the numbers passed in. */

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

export const AbundanceBars = ({ items, other }: { items: { symbol: string; name: string; percent: number }[]; other: number }) => {
  const rows = [...items.map((i) => ({ label: `${i.name} (${i.symbol})`, v: i.percent, c: BLUE })), { label: 'all the others', v: other, c: MUTED }];
  const max = Math.max(...rows.map((r) => r.v));
  return (
    <Panel h={14 + rows.length * 11} aria={`Bars of the percent by mass of the elements in the Earth's crust. ${rows.map((r) => `${r.label}: ${r.v} percent`).join('; ')}. Oxygen and silicon together are more than half of the crust.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>Percent of the Earth&apos;s crust by mass</T>
      {rows.map((r, i) => {
        const y = 12 + i * 11;
        const w = r3((r.v / max) * 50);
        return (
          <g key={r.label}>
            <T x={4} y={y + 6} size={4.2} anchor="start" weight={600}>{r.label}</T>
            <rect x={50} y={y + 1} width={w} height={7} rx={1.5} fill={r.c} />
            <T x={r3(50 + w + 2)} y={y + 6.4} size={4.2} anchor="start">{`${r.v}%`}</T>
          </g>
        );
      })}
    </Panel>
  );
};

export const Steps = ({ steps, aria, color = AMBER }: { steps: { title: string; note: string }[]; aria: string; color?: string }) => {
  const rowH = 14;
  return (
    <Panel h={6 + steps.length * rowH} aria={aria}>
      {steps.map((s, i) => {
        const y = 4 + i * rowH;
        return (
          <g key={s.title}>
            <circle cx={9} cy={y + 5} r={4.2} fill={color} />
            <T x={9} y={y + 6.6} size={4.6} fill={INK} weight={800}>{i + 1}</T>
            <T x={17} y={y + 4.2} size={4.8} anchor="start" weight={800}>{s.title}</T>
            <T x={17} y={y + 9.4} size={4} anchor="start" fill={MUTED} weight={600}>{s.note}</T>
            {i < steps.length - 1 ? <path d={`M9 ${y + 9.4} v4.4`} stroke={color} strokeWidth={0.9} /> : null}
          </g>
        );
      })}
    </Panel>
  );
};

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
