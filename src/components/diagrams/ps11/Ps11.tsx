import { r3 } from '../round';
import { DENSITY, HYDRIDES, ICE_DENSITY, MOLECULES, WATER_ANGLE, WATER_BP, bondDirections, lonePairsIn, shapeOfMolecule, type Molecule } from './ps11Helpers';

/** Pictures for the Grade 11 Physical Sciences term 1 lessons. Every position comes from ps11Helpers.ts or the numbers passed in. */

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
const T = ({ x, y, children, size = 4.6, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const dec = (n: number, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');

// ---------- inverse square law ----------

export const InverseSquareBars = ({ items }: { items: { label: string; value: number }[] }) => {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <Panel h={14 + items.length * 13} aria={`Bars of the gravitational force at different distances. ${items.map((i) => `${i.label}: ${dec(i.value, 3)} of the original force`).join('; ')}. The force falls quickly as the distance grows.`}>
      <T x={60} y={7} size={4.6} fill={AMBER}>Force compared with the force at r</T>
      {items.map((it, i) => {
        const y = 12 + i * 13;
        const w = r3((it.value / max) * 56);
        return (
          <g key={it.label}>
            <T x={4} y={y + 6.4} size={4.4} anchor="start" weight={600}>{it.label}</T>
            <rect x={34} y={y + 1} width={w} height={8} rx={1.5} fill={i === 0 ? AMBER : BLUE} />
            <T x={r3(34 + w + 2)} y={y + 7} size={4.6} anchor="start">{dec(it.value, 3)}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- g on different bodies ----------

export const GBars = ({ items }: { items: { label: string; g: number }[] }) => {
  const max = Math.max(...items.map((i) => i.g));
  return (
    <Panel h={14 + items.length * 13} aria={`Gravitational field strength at the surface. ${items.map((i) => `${i.label}: ${dec(i.g)} metres per second squared`).join('; ')}.`}>
      <T x={60} y={7} size={4.6} fill={AMBER}>g at the surface (m·s⁻²)</T>
      {items.map((it, i) => {
        const y = 12 + i * 13;
        const w = r3((it.g / max) * 56);
        return (
          <g key={it.label}>
            <T x={4} y={y + 6.4} size={4.6} anchor="start" weight={600}>{it.label}</T>
            <rect x={34} y={y + 1} width={w} height={8} rx={1.5} fill={i === 0 ? GREEN : SKY} />
            <T x={r3(34 + w + 2)} y={y + 7} size={4.6} anchor="start">{dec(it.g)}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- molecular shapes ----------

const Mol = ({ m, cx, cy, r = 10 }: { m: Molecule; cx: number; cy: number; r?: number }) => {
  const s = shapeOfMolecule(m);
  const dirs = bondDirections(s);
  const lone = lonePairsIn(m);
  return (
    <g>
      {dirs.map((deg, i) => {
        const x = r3(cx + r * Math.cos((deg * Math.PI) / 180));
        const y = r3(cy - r * Math.sin((deg * Math.PI) / 180));
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={LINE} strokeWidth={1.2} />
            <circle cx={x} cy={y} r={2.8} fill={m.terminal === 'H' ? LINE : ROSE} />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={3.6} fill={BLUE} />
      {Array.from({ length: lone }, (_, i) => {
        // lone pairs on the side away from the bonds (above for the bent and pyramidal shapes)
        const up = lone === 2 ? [60, 120][i] : 90;
        return <ellipse key={i} cx={r3(cx + 6.2 * Math.cos((up * Math.PI) / 180))} cy={r3(cy - 6.2 * Math.sin((up * Math.PI) / 180))} rx={1.9} ry={1.2} fill={AMBER} />;
      })}
    </g>
  );
};

export const ShapeRow = () => (
  <Panel h={50} aria={`Five molecules and their shapes. ${MOLECULES.map((m) => `${m.formula} is ${shapeOfMolecule(m).name}, with bond angle ${shapeOfMolecule(m).angle} degrees`).join('; ')}. Lone pairs are shown as yellow ovals.`}>
    {MOLECULES.map((m, i) => {
      const cx = 12 + i * 24;
      const s = shapeOfMolecule(m);
      return (
        <g key={m.formula}>
          <Mol m={m} cx={cx} cy={22} />
          <T x={cx} y={39} size={4.6} fill={AMBER} weight={800}>{m.formula}</T>
          <T x={cx} y={45} size={3.2} weight={600}>{s.name.replace('trigonal ', 'trig. ')}</T>
          <T x={cx} y={9} size={3.6} fill={MUTED} weight={600}>{`${s.angle}°`.replace('.', ',')}</T>
        </g>
      );
    })}
  </Panel>
);

// ---------- electronegativity bars for a bond ----------

export const EnPair = ({ a, b, ena, enb, kind }: { a: string; b: string; ena: number; enb: number; kind: string }) => {
  const w = (v: number) => r3((v / 4) * 70);
  return (
    <Panel h={36} aria={`Electronegativity of ${a} is ${dec(ena, 1)} and of ${b} is ${dec(enb, 1)}. The difference is ${dec(Math.abs(ena - enb), 1)}, so the bond is ${kind}.`}>
      <T x={4} y={11} size={5} anchor="start" fill={BLUE}>{a}</T>
      <rect x={16} y={5} width={w(ena)} height={8} rx={1.5} fill={BLUE} />
      <T x={r3(16 + w(ena) + 2)} y={11} size={4.4} anchor="start">{dec(ena, 1)}</T>
      <T x={4} y={25} size={5} anchor="start" fill={ROSE}>{b}</T>
      <rect x={16} y={19} width={w(enb)} height={8} rx={1.5} fill={ROSE} />
      <T x={r3(16 + w(enb) + 2)} y={25} size={4.4} anchor="start">{dec(enb, 1)}</T>
      <T x={60} y={33.4} size={4.4} fill={AMBER}>{`ΔEN = ${dec(Math.abs(ena - enb), 1)}: ${kind}`}</T>
    </Panel>
  );
};

// ---------- hydrogen bonds between two water molecules ----------

export const WaterHBond = () => {
  const half = ((WATER_ANGLE / 2) * Math.PI) / 180;
  const L = 11; // O-H length in the picture
  const mol = (ox: number, oy: number, flip: boolean) => {
    const sgn = flip ? -1 : 1;
    const h1 = { x: r3(ox - sgn * L * Math.sin(half)), y: r3(oy + L * Math.cos(half)) };
    const h2 = { x: r3(ox + sgn * L * Math.sin(half)), y: r3(oy + L * Math.cos(half)) };
    return { o: { x: ox, y: oy }, h1, h2 };
  };
  const a = mol(26, 16, false);
  const b = mol(86, 40, true);
  return (
    <Panel h={60} aria={`Two water molecules. Each water molecule is bent, with a bond angle of ${WATER_ANGLE} degrees. A dashed line shows a hydrogen bond between a hydrogen atom of one molecule, which is slightly positive, and the oxygen atom of the other, which is slightly negative.`}>
      {[a, b].map((m, i) => (
        <g key={i}>
          <line x1={m.o.x} y1={m.o.y} x2={m.h1.x} y2={m.h1.y} stroke={LINE} strokeWidth={1.2} />
          <line x1={m.o.x} y1={m.o.y} x2={m.h2.x} y2={m.h2.y} stroke={LINE} strokeWidth={1.2} />
          <circle cx={m.h1.x} cy={m.h1.y} r={2.6} fill={LINE} />
          <circle cx={m.h2.x} cy={m.h2.y} r={2.6} fill={LINE} />
          <circle cx={m.o.x} cy={m.o.y} r={4.4} fill={ROSE} />
          <T x={m.o.x} y={r3(m.o.y + 1.6)} size={4.6} fill={INK} weight={800}>O</T>
        </g>
      ))}
      <line x1={a.h2.x} y1={a.h2.y} x2={b.o.x - 3} y2={b.o.y - 1} stroke={AMBER} strokeWidth={1.2} strokeDasharray="2 1.6" />
      <T x={58} y={22} size={4.2} fill={AMBER}>hydrogen bond</T>
      <T x={a.h2.x} y={r3(a.h2.y + 8)} size={4} fill={LINE}>δ+</T>
      <T x={b.o.x} y={r3(b.o.y - 7)} size={4} fill={ROSE}>δ−</T>
      <T x={60} y={56} size={4} fill={MUTED} weight={600}>{`bond angle ${dec(WATER_ANGLE, 1)}°`}</T>
    </Panel>
  );
};

// ---------- boiling points of the group 16 hydrides ----------

export const HydrideBoiling = () => {
  const pts = [{ formula: 'H₂O', period: 2, bp: WATER_BP }, ...HYDRIDES];
  const x = (p: number) => r3(22 + (p - 2) * 28);
  const y = (bp: number) => r3(54 - ((bp + 100) / 200) * 34);
  return (
    <Panel h={66} aria={`Boiling points of the hydrides of group 16. ${pts.map((p) => `${p.formula}: ${p.bp} degrees Celsius`).join('; ')}. The boiling point should rise down the group from H₂S, but water, at the top, is far higher than the trend because its molecules form hydrogen bonds.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>Boiling points of the group 16 hydrides (°C)</T>
      <line x1={14} y1={y(0)} x2={112} y2={y(0)} stroke="#334155" strokeWidth={0.4} />
      <T x={12} y={y(0) + 1.4} size={3.4} anchor="end" fill={MUTED} weight={600}>0</T>
      <path d={`M${x(3)} ${y(-60)} L${x(4)} ${y(-41)} L${x(5)} ${y(-2)}`} fill="none" stroke={BLUE} strokeWidth={1} />
      <path d={`M${x(3)} ${y(-60)} L${x(2)} ${y(-98)}`} fill="none" stroke={MUTED} strokeWidth={0.7} strokeDasharray="1.6 1.4" />
      {pts.map((p) => (
        <g key={p.formula}>
          <circle cx={x(p.period)} cy={y(p.bp)} r={2.4} fill={p.formula === 'H₂O' ? ROSE : BLUE} />
          <T x={x(p.period)} y={r3(y(p.bp) - 4)} size={4} fill={p.formula === 'H₂O' ? ROSE : LINE}>{`${p.formula} ${p.bp}`}</T>
        </g>
      ))}
      <T x={60} y={62} size={3.6} fill={MUTED} weight={600}>dashed: where water would be without hydrogen bonds</T>
    </Panel>
  );
};

// ---------- density of water and ice ----------

export const DensityBars = () => {
  const items = [...DENSITY.map((d) => ({ label: d.label, rho: d.rho })), { label: 'ice at 0 °C', rho: ICE_DENSITY }];
  const lo = 0.9, hi = 1.0;
  return (
    <Panel h={14 + items.length * 11} aria={`Density of water at different temperatures and of ice, in grams per cubic centimetre. ${items.map((i) => `${i.label}: ${String(i.rho).replace('.', ',')}`).join('; ')}. Water is densest at 4 degrees Celsius, and ice is less dense than liquid water, so ice floats.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>Density (g·cm⁻³)</T>
      {items.map((it, i) => {
        const y = 12 + i * 11;
        const w = r3(((it.rho - lo) / (hi - lo)) * 50);
        return (
          <g key={it.label}>
            <T x={4} y={y + 6} size={4} anchor="start" weight={600}>{it.label}</T>
            <rect x={46} y={y + 1} width={Math.max(w, 1)} height={7} rx={1.5} fill={it.label.startsWith('ice') ? SKY : it.rho === 1 ? GREEN : BLUE} />
            <T x={r3(46 + Math.max(w, 1) + 2)} y={y + 6.4} size={4} anchor="start">{String(it.rho).replace('.', ',')}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- cards: a title and a line or two ----------

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
            <T x={9} y={y + 11.6} size={4.4} anchor="start" weight={600}>{c.line1 + (c.line2 ? ` ${c.line2}` : '')}</T>
          </g>
        );
      })}
    </Panel>
  );
};
