import { r3 } from '../round';
import { FILTER_LAYERS, layerHeight, peak, type Layer } from './g6nstHelpers';

/** Pictures for the Grade 6 Natural Sciences and Technology lessons. Every size comes from g6nstHelpers.ts or the lists passed in. */

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
const COLORS = [AMBER, GREEN, BLUE, ROSE, SKY];

// ---------- cards in a column: a title and two small lines each ----------

export const CardList = ({ cards, aria }: { cards: { title: string; line1: string; line2?: string }[]; aria: string }) => {
  const rowH = 17;
  const h = 6 + cards.length * rowH;
  return (
    <Panel h={h} aria={aria}>
      {cards.map((c, i) => {
        const y = 4 + i * rowH;
        const col = COLORS[i % COLORS.length];
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

// ---------- steps from top to bottom ----------

export const StepList = ({ steps, aria, color = GREEN }: { steps: readonly { title: string; note: string }[]; aria: string; color?: string }) => {
  const rowH = 14;
  const h = 6 + steps.length * rowH;
  return (
    <Panel h={h} aria={aria}>
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

// ---------- two columns ----------

export const TwoColumns = ({ left, right, aria }: { left: { title: string; items: string[]; color?: string }; right: { title: string; items: string[]; color?: string }; aria: string }) => {
  const cols = [left, right];
  const rows = Math.max(left.items.length, right.items.length);
  return (
    <Panel h={16 + rows * 9} aria={aria}>
      {cols.map((c, i) => {
        const x = 4 + i * 58;
        const col = c.color ?? (i === 0 ? ROSE : GREEN);
        return (
          <g key={c.title}>
            <rect x={x} y={3} width={54} height={10 + rows * 9} rx={3} fill={col} fillOpacity={0.14} stroke={col} strokeWidth={0.8} />
            <T x={x + 27} y={10} size={5} fill={col} weight={800}>{c.title}</T>
            {c.items.map((s, j) => (
              <T key={s} x={x + 27} y={19 + j * 9} size={4.6} weight={600}>{s}</T>
            ))}
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- a wetland as a sponge: water coming in and going out ----------

export const WetlandBars = ({ inflow, outflow }: { inflow: readonly number[]; outflow: readonly number[] }) => {
  const n = inflow.length;
  const top = Math.max(peak(inflow), peak(outflow));
  const x0 = 12, y0 = 52, w = 100, h = 38;
  const bw = w / n;
  return (
    <Panel h={66} aria={`Bars over ${n} time steps. Water rushing into a wetland peaks at ${peak(inflow)} units. The water that leaves the wetland peaks at only ${peak(outflow)} units and carries on for longer, because the wetland soaks it up like a sponge and lets it go slowly.`}>
      <T x={60} y={7} size={4.6} fill={AMBER}>The wetland soaks up the rush</T>
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUTED} strokeWidth={0.5} />
      {inflow.map((v, i) => {
        const bh = r3((v / top) * h);
        const bx = r3(x0 + i * bw + 1);
        const oh = r3((outflow[i] / top) * h);
        return (
          <g key={i}>
            <rect x={bx} y={r3(y0 - bh)} width={r3(bw / 2 - 1)} height={bh} fill={ROSE} />
            <rect x={r3(bx + bw / 2 - 1)} y={r3(y0 - oh)} width={r3(bw / 2 - 1)} height={oh} fill={GREEN} />
          </g>
        );
      })}
      <rect x={14} y={58} width={4} height={4} fill={ROSE} />
      <T x={20} y={61.4} size={4} anchor="start" weight={600}>water coming in</T>
      <rect x={66} y={58} width={4} height={4} fill={GREEN} />
      <T x={72} y={61.4} size={4} anchor="start" weight={600}>water going out</T>
    </Panel>
  );
};

// ---------- a sand filter ----------

const LAYER_FILL = ['#e8d9a6', '#c9a96a', '#7c6a55'];

export const SandFilter = ({ layers = FILTER_LAYERS, columnCm }: { layers?: Layer[]; columnCm: number }) => {
  const x = 36, w = 36, y0 = 14, H = 40;
  let y = y0;
  return (
    <Panel h={66} aria={`A sand filter, a column ${columnCm} centimetres tall. Dirty water is poured in at the top and clean water drips out at the bottom. From the top the layers are ${layers.map((l) => `${l.name}, ${layerHeight(columnCm, l.share)} centimetres`).join(', then ')}. The finer material on top catches the small bits, and the coarser layers below hold it up.`}>
      <T x={60} y={7} size={4.6} fill={AMBER}>Sand filter</T>
      {layers.map((l, i) => {
        const lh = r3((H * l.share) / 100);
        const top = y;
        y = r3(y + lh);
        return (
          <g key={l.name}>
            <rect x={x} y={top} width={w} height={lh} fill={LAYER_FILL[i % LAYER_FILL.length]} />
            <T x={x + w + 3} y={r3(top + lh / 2 + 1.5)} size={4} anchor="start" weight={600}>{`${l.name}: ${layerHeight(columnCm, l.share)} cm`}</T>
          </g>
        );
      })}
      <rect x={x} y={y0} width={w} height={H} fill="none" stroke={LINE} strokeWidth={1.1} />
      <path d={`M${x + 8} 9 v4 M${x + 20} 9 v4 M${x + 32} 9 v4`} stroke="#92400e" strokeWidth={1.6} strokeLinecap="round" />
      <T x={x - 3} y={12} size={3.8} anchor="end" fill="#b45309">dirty water</T>
      <path d={`M${x + 20} ${y0 + H + 1} v6`} stroke={SKY} strokeWidth={1.6} strokeLinecap="round" />
      <T x={x - 3} y={y0 + H + 6} size={3.8} anchor="end" fill={SKY}>clean water</T>
    </Panel>
  );
};

// ---------- bars of time or power with a value on each ----------

export const ValueBars = ({ items, title, unit, aria, color = GREEN }: { items: { label: string; value: number }[]; title: string; unit: string; aria: string; color?: string }) => {
  const max = Math.max(...items.map((i) => i.value));
  const rowH = 12;
  const h = 14 + items.length * rowH;
  return (
    <Panel h={h} aria={aria}>
      <T x={60} y={7} size={4.6} fill={AMBER}>{title}</T>
      {items.map((it, i) => {
        const y = 12 + i * rowH;
        const w = r3((it.value / max) * 40);
        return (
          <g key={it.label}>
            <T x={4} y={y + 6} size={4.2} anchor="start" weight={600}>{it.label}</T>
            <rect x={46} y={y + 1} width={w} height={7} rx={1.5} fill={i % 2 === 0 ? color : AMBER} />
            <T x={r3(46 + w + 2)} y={y + 6.6} size={4.4} anchor="start">{`${String(it.value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${unit}`}</T>
          </g>
        );
      })}
    </Panel>
  );
};
