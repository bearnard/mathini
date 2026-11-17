import { r3 } from '../round';

/** Pictures for the Grade 10 aqueous solution and hydrosphere lessons. Every position comes from simple geometry or the numbers passed in. */

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
const rad = (d: number) => (d * Math.PI) / 180;

// ---------- hydrated ions ----------

const Water = ({ x, y, towardX, towardY, oxygenToward }: { x: number; y: number; towardX: number; towardY: number; oxygenToward: boolean }) => {
  // u points from the water to the ion. When the oxygen faces the ion the two hydrogens lie on the far side (direction -u), otherwise they face the ion (direction u).
  const len = Math.hypot(towardX - x, towardY - y);
  const ux = (towardX - x) / len, uy = (towardY - y) / len;
  const dx = oxygenToward ? -ux : ux, dy = oxygenToward ? -uy : uy;
  const half = rad(52.25);
  const L = 3.6;
  const h = (a: number) => ({ x: r3(x + L * (dx * Math.cos(a) - dy * Math.sin(a))), y: r3(y + L * (dx * Math.sin(a) + dy * Math.cos(a))) });
  const a = h(half), b = h(-half);
  return (
    <g>
      <line x1={x} y1={y} x2={a.x} y2={a.y} stroke={LINE} strokeWidth={0.7} />
      <line x1={x} y1={y} x2={b.x} y2={b.y} stroke={LINE} strokeWidth={0.7} />
      <circle cx={a.x} cy={a.y} r={1.2} fill={LINE} />
      <circle cx={b.x} cy={b.y} r={1.2} fill={LINE} />
      <circle cx={x} cy={y} r={2} fill={ROSE} />
    </g>
  );
};

export const HydratedIons = () => {
  const ions = [{ cx: 32, label: 'Na⁺', color: AMBER, oxygenToward: true }, { cx: 88, label: 'Cl⁻', color: GREEN, oxygenToward: false }];
  return (
    <Panel h={64} aria="Two ions in water. On the left a sodium ion, Na plus, is surrounded by water molecules with their oxygen atoms, which are slightly negative, turned towards it. On the right a chloride ion, Cl minus, is surrounded by water molecules with their hydrogen atoms, which are slightly positive, turned towards it. Each ion surrounded by water molecules is hydrated.">
      {ions.map((ion) => (
        <g key={ion.label}>
          {[45, 135, 225, 315].map((deg) => {
            const x = r3(ion.cx + 17 * Math.cos(rad(deg))), y = r3(32 - 17 * Math.sin(rad(deg)));
            return <Water key={deg} x={x} y={y} towardX={ion.cx} towardY={32} oxygenToward={ion.oxygenToward} />;
          })}
          <circle cx={ion.cx} cy={32} r={6.5} fill={ion.color} fillOpacity={0.9} />
          <T x={ion.cx} y={34} size={5.4} fill={INK} weight={800}>{ion.label}</T>
        </g>
      ))}
      <T x={32} y={60} size={3.8} fill={MUTED} weight={600}>oxygen (δ−) faces the Na⁺</T>
      <T x={88} y={60} size={3.8} fill={MUTED} weight={600}>hydrogen (δ+) faces the Cl⁻</T>
    </Panel>
  );
};

// ---------- ions per mole of salt ----------

export const IonBars = ({ items, unit, title }: { items: { label: string; value: number }[]; unit: string; title: string }) => {
  const max = Math.max(...items.map((i) => i.value), 0.0001);
  return (
    <Panel h={14 + items.length * 12} aria={`${title}. ${items.map((i) => `${i.label}: ${String(i.value).replace('.', ',')} ${unit}`).join('; ')}. A solution with more ions conducts electricity better.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>{title}</T>
      {items.map((it, i) => {
        const y = 12 + i * 12;
        const w = r3((it.value / max) * 54);
        return (
          <g key={it.label}>
            <T x={4} y={y + 6} size={4.2} anchor="start" weight={600}>{it.label}</T>
            <rect x={50} y={y + 1} width={Math.max(w, 0.8)} height={7} rx={1.5} fill={it.value === 0 ? ROSE : GREEN} />
            <T x={r3(50 + Math.max(w, 0.8) + 2)} y={y + 6.4} size={4.2} anchor="start">{`${String(it.value).replace('.', ',')} ${unit}`}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- where the Earth's water is ----------

export const WaterShares = ({ items }: { items: { name: string; percent: number }[] }) => {
  const cols = [BLUE, SKY, GREEN];
  let x = 6;
  return (
    <Panel h={50} aria={`Where the Earth's water is: ${items.map((i) => `${i.name} ${i.percent} percent`).join('; ')}. Most of the water is salt water in the oceans.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>The Earth's water (percent, rounded)</T>
      {items.map((it, i) => {
        const w = r3((it.percent / 100) * 108);
        const x0 = x;
        x += w;
        return (
          <g key={it.name}>
            <rect x={x0} y={12} width={Math.max(w, 2)} height={14} fill={cols[i % cols.length]} />
            <T x={r3(x0 + Math.max(w, 2) / 2)} y={21.4} size={4.4} fill={INK} weight={800}>{w > 12 ? `${it.percent}%` : ''}</T>
          </g>
        );
      })}
      {items.map((it, i) => (
        <g key={`${it.name}-l`}>
          <rect x={8} y={32 + i * 5.6} width={3.6} height={3.6} fill={cols[i % cols.length]} />
          <T x={13.5} y={35.4 + i * 5.6} size={3.8} anchor="start" weight={600}>{`${it.name}: ${it.percent}%`}</T>
        </g>
      ))}
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
