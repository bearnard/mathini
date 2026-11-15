import { r3 } from '../round';
import { PICTURE_COLORS } from './Grade7Pictures';
import { pieAngles, sa } from './grade9SpaceDataHelpers';

/**
 * Grade 9 pictures for solids (nets), data handling and probability in the style of
 * Grade7Pictures: a dark panel, a 120-unit-wide viewBox, indigo / emerald / amber / rose and at most
 * six labels. Every length, bar, angle and count is computed from the numbers passed in.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;
export const SPACE_COLORS = PICTURE_COLORS;

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${r3(h)}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const Label = ({ x, y, children, color = LINE, size = 5.8, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>
    {children}
  </text>
);

const Box = ({ x, y, w, h, color, opacity = 0.25 }: { x: number; y: number; w: number; h: number; color: string; opacity?: number }) => (
  <rect x={r3(x)} y={r3(y)} width={r3(w)} height={r3(h)} fill={color} fillOpacity={opacity} stroke={color} strokeWidth={0.8} />
);

// ---------- nets ----------

/** The net of a cube: six equal squares in a cross. */
export const CubeNet = ({ side, unit, caption, className }: { side: number; unit: string; caption: string; className?: string }) => {
  const s = 14;
  const x0 = 60 - s * 1.5 - 14;
  const y0 = 5;
  // column of four squares in the second column, one square either side of the second square
  const cells = [
    [1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3],
  ];
  const h = y0 + 4 * s + 12;
  return (
    <Panel h={h} className={className} aria={`The net of a cube: six squares, each ${side} ${unit} by ${side} ${unit}. ${caption}.`}>
      {cells.map(([c, r], i) => <Box key={i} x={x0 + c * s} y={y0 + r * s} w={s} h={s} color={i === 2 ? A : I} />)}
      <Label x={x0 + 1.5 * s} y={y0 + 1.5 * s + 2} size={5.2}>{`${side} × ${side}`}</Label>
      <Label x={x0 + 3 * s + 3} y={y0 + 1.5 * s + 2} color={A} anchor="start">{`${side} ${unit}`}</Label>
      <Label x={60} y={h - 4} color={E}>{caption}</Label>
    </Panel>
  );
};

/** The net of a rectangular prism (l × b × h): a strip of four side faces with the top and bottom attached. Equal faces share a colour. */
export const PrismNet = ({ l, b, h, unit, className }: { l: number; b: number; h: number; unit: string; className?: string }) => {
  const W = 2 * (l + b);
  const H = h + 2 * b;
  const s = Math.min(108 / W, 66 / H);
  const x0 = 60 - (W * s) / 2;
  const y0 = 4;
  const strip = [
    { x: 0, w: b, c: E, t: `${b * h}` },
    { x: b, w: l, c: I, t: `${l * h}` },
    { x: b + l, w: b, c: E, t: '' },
    { x: 2 * b + l, w: l, c: I, t: '' },
  ];
  const lb = l * b;
  return (
    <Panel h={y0 + H * s + 6} className={className} aria={`The net of a rectangular prism ${l} by ${b} by ${h} ${unit}. Two faces are ${l} by ${b} (${lb} square ${unit} each), two are ${l} by ${h} (${l * h} each) and two are ${b} by ${h} (${b * h} each).`}>
      {strip.map((f, i) => <Box key={i} x={x0 + f.x * s} y={y0 + b * s} w={f.w * s} h={h * s} color={f.c} />)}
      <Box x={x0 + b * s} y={y0} w={l * s} h={b * s} color={A} />
      <Box x={x0 + b * s} y={y0 + (b + h) * s} w={l * s} h={b * s} color={A} />
      <Label x={x0 + (b + l / 2) * s} y={y0 + (b / 2) * s + 2}>{`${l} × ${b} = ${lb}`}</Label>
      <Label x={x0 + (b + l / 2) * s} y={y0 + (b + h / 2) * s + 2}>{`${l} × ${h} = ${l * h}`}</Label>
      <Label x={x0 + (b / 2) * s} y={y0 + (b + h / 2) * s + 2} size={5}>{`${b} × ${h}`}</Label>
      <Label x={x0 + (b / 2) * s} y={y0 + (b + h / 2) * s + 8} size={5}>{`= ${b * h}`}</Label>
    </Panel>
  );
};

/** The net of a cylinder: a rectangle 2πr long and h high between two circles of radius r, drawn to scale. */
export const CylinderNet = ({ r, h, unit, circumference, className }: { r: number; h: number; unit: string; circumference: number; className?: string }) => {
  const C = 2 * Math.PI * r;
  const s = Math.min(70 / C, 66 / (h + 4 * r));
  const W = C * s;
  const x0 = 60 - W / 2 - 10;
  const yTop = 4;
  const rr = r * s;
  const yRect = yTop + 2 * rr;
  const cx = x0 + W / 2;
  return (
    <Panel h={yRect + h * s + 2 * rr + 6} className={className} aria={`The net of a cylinder with radius ${r} ${unit} and height ${h} ${unit}: two circles of radius ${r} ${unit} and a rectangle ${h} ${unit} high whose length is the circumference, 2πr ≈ ${sa(circumference)} ${unit}.`}>
      <circle cx={r3(cx)} cy={r3(yTop + rr)} r={r3(rr)} fill={A} fillOpacity={0.25} stroke={A} strokeWidth={0.8} />
      <Box x={x0} y={yRect} w={W} h={h * s} color={I} />
      <circle cx={r3(cx)} cy={r3(yRect + h * s + rr)} r={r3(rr)} fill={A} fillOpacity={0.25} stroke={A} strokeWidth={0.8} />
      <line x1={r3(cx)} y1={r3(yTop + rr)} x2={r3(cx + rr)} y2={r3(yTop + rr)} stroke={A} strokeWidth={0.8} />
      <Label x={cx + rr + 3} y={yTop + rr + 2} color={A} anchor="start" size={5.4}>{`r = ${r} ${unit}`}</Label>
      <Label x={x0 + W + 3} y={yRect + (h * s) / 2 + 2} color={E} anchor="start" size={5.4}>{`h = ${h} ${unit}`}</Label>
      <Label x={cx} y={yRect + (h * s) / 2 + 2} size={5.4}>{`2πr ≈ ${sa(circumference)} ${unit}`}</Label>
    </Panel>
  );
};

/** The net of a triangular prism: three rectangles in a row with a triangle on either side of the middle one. */
export const TriangularPrismNet = ({ className }: { className?: string }) => {
  const side = 22;
  const len = 30;
  const tri = (side * Math.sqrt(3)) / 2;
  const x0 = 14;
  const y0 = 6 + tri;
  const mid = x0 + side;
  return (
    <Panel h={y0 + len + tri + 8} className={className} aria="The net of a triangular prism: three rectangles side by side, with a triangle above and below the middle rectangle. Two triangles and three rectangles make five faces.">
      {[0, 1, 2].map((i) => <Box key={i} x={x0 + i * side} y={y0} w={side} h={len} color={I} />)}
      <polygon points={`${r3(mid)},${r3(y0)} ${r3(mid + side)},${r3(y0)} ${r3(mid + side / 2)},${r3(y0 - tri)}`} fill={A} fillOpacity={0.3} stroke={A} strokeWidth={0.8} />
      <polygon points={`${r3(mid)},${r3(y0 + len)} ${r3(mid + side)},${r3(y0 + len)} ${r3(mid + side / 2)},${r3(y0 + len + tri)}`} fill={A} fillOpacity={0.3} stroke={A} strokeWidth={0.8} />
      <Label x={x0 + 3 * side + 3} y={y0 + len / 2} color={I} anchor="start" size={5.4}>3 rectangles</Label>
      <Label x={mid + side + 3} y={y0 - tri / 2 + 2} color={A} anchor="start" size={5.4}>2 triangles</Label>
    </Panel>
  );
};

/** Wire drawings of a triangular prism and a square pyramid; hidden edges are dashed. */
export const PrismAndPyramid = ({ prism, pyramid, className }: { prism: string; pyramid: string; className?: string }) => {
  // triangular prism: front triangle, back triangle offset
  const f = [{ x: 8, y: 50 }, { x: 36, y: 50 }, { x: 22, y: 26 }];
  const o = { x: 18, y: -10 };
  const b = f.map((p) => ({ x: p.x + o.x, y: p.y + o.y }));
  // square pyramid: base parallelogram, apex
  const base = [{ x: 70, y: 52 }, { x: 98, y: 52 }, { x: 110, y: 42 }, { x: 82, y: 42 }];
  const apex = { x: 90, y: 12 };
  const seg = (p: { x: number; y: number }, q: { x: number; y: number }, dashed = false, c = LINE) => (
    <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={c} strokeWidth={0.9} strokeDasharray={dashed ? '1.6 1.2' : undefined} />
  );
  return (
    <Panel h={70} className={className} aria={`A triangular prism (${prism}) and a square pyramid (${pyramid}). Hidden edges are dashed.`}>
      <polygon points={f.map((p) => `${p.x},${p.y}`).join(' ')} fill={I} fillOpacity={0.25} />
      {seg(f[0], f[1], false, I)}
      {seg(f[1], f[2], false, I)}
      {seg(f[2], f[0], false, I)}
      {seg(b[0], b[1], true, I)}
      {seg(b[1], b[2], false, I)}
      {seg(b[2], b[0], true, I)}
      {seg(f[0], b[0], true, I)}
      {seg(f[1], b[1], false, I)}
      {seg(f[2], b[2], false, I)}
      {seg(base[0], base[1], false, E)}
      {seg(base[1], base[2], false, E)}
      {seg(base[2], base[3], true, E)}
      {seg(base[3], base[0], true, E)}
      {base.map((p, i) => <g key={i}>{seg(p, apex, i === 3, E)}</g>)}
      <Label x={30} y={62} color={I} size={5.2}>{prism}</Label>
      <Label x={90} y={62} color={E} size={5.2}>{pyramid}</Label>
    </Panel>
  );
};

// ---------- data ----------

/** A dot plot: one dot per data value stacked above a number line, with chosen values marked by arrows. */
export const DotPlot = ({ data, min, max, step = 1, marks, aria, className }: { data: number[]; min: number; max: number; step?: number; marks: { value: number; label: string; color: string }[]; aria: string; className?: string }) => {
  const X0 = 10;
  const W = 100;
  const x = (v: number) => r3(X0 + ((v - min) / (max - min)) * W);
  const stack = Math.max(...[...new Set(data)].map((v) => data.filter((d) => d === v).length));
  const axisY = 8 + stack * 5;
  const counts = new Map<number, number>();
  const ticks: number[] = [];
  for (let t = min; t <= max; t += step) ticks.push(t);
  return (
    <Panel h={axisY + 16 + marks.length * 6.5} aria={aria} className={className}>
      <line x1={X0 - 2} y1={axisY} x2={X0 + W + 2} y2={axisY} stroke={LINE} strokeWidth={0.8} />
      {ticks.map((t) => <line key={t} x1={x(t)} y1={axisY} x2={x(t)} y2={axisY + 1.6} stroke={MUTED} strokeWidth={0.5} />)}
      {!marks.some((m) => m.value === min) && <Label x={x(min)} y={axisY + 7} color={MUTED} size={4.8}>{sa(min)}</Label>}
      {!marks.some((m) => m.value === max) && <Label x={x(max)} y={axisY + 7} color={MUTED} size={4.8}>{sa(max)}</Label>}
      {data.map((v, i) => {
        const k = counts.get(v) ?? 0;
        counts.set(v, k + 1);
        return <circle key={i} cx={x(v)} cy={r3(axisY - 3.5 - k * 5)} r={2.1} fill={I} />;
      })}
      {marks.map((m, i) => (
        <g key={i}>
          <path d={`M${x(m.value)},${axisY + 3} l-1.8,3.2 h3.6 z`} fill={m.color} />
          <Label x={Math.min(Math.max(x(m.value), 20), 100)} y={axisY + 14 + i * 6.5} color={m.color} size={5.2}>{m.label}</Label>
        </g>
      ))}
    </Panel>
  );
};

/** A bar graph of a frequency table: one bar per value, its height the frequency. */
export const FrequencyBars = ({ rows, caption, className }: { rows: { value: number; freq: number }[]; caption: string; className?: string }) => {
  const max = Math.max(...rows.map((r) => r.freq));
  const base = 46;
  const H = 34;
  const BW = 16;
  const gap = (90 - rows.length * BW) / Math.max(1, rows.length - 1);
  return (
    <Panel h={66} className={className} aria={`A bar graph of the frequency table: ${rows.map((r) => `value ${r.value} appears ${r.freq} times`).join(', ')}. ${caption}.`}>
      <line x1={10} y1={base} x2={110} y2={base} stroke={MUTED} strokeWidth={0.6} />
      {rows.map((r, i) => {
        const h = (r.freq / max) * H;
        const x = 15 + i * (BW + gap);
        return (
          <g key={i}>
            <rect x={r3(x)} y={r3(base - h)} width={BW} height={r3(h)} fill={I} fillOpacity={0.7} stroke={I} strokeWidth={0.6} />
            <Label x={x + BW / 2} y={base - h - 2} size={5.4}>{r.freq}</Label>
            <Label x={x + BW / 2} y={base + 6} size={5} color={MUTED}>{r.value}</Label>
          </g>
        );
      })}
      <Label x={60} y={62} color={E} size={5.4}>{caption}</Label>
    </Panel>
  );
};

/** A pie chart: each sector's angle is its share of 360°. */
export const PieChart = ({ parts, className }: { parts: { label: string; count: number }[]; className?: string }) => {
  const angles = pieAngles(parts.map((p) => p.count));
  const colors = [I, E, A, R];
  const cx = 38;
  const cy = 34;
  const rad = 27;
  let start = 90; // start at 12 o'clock, go clockwise
  const pos = (deg: number, r: number) => ({ x: cx + r * Math.cos((deg * Math.PI) / 180), y: cy - r * Math.sin((deg * Math.PI) / 180) });
  return (
    <Panel h={70} className={className} aria={`A pie chart. ${parts.map((p, i) => `${p.label}: ${p.count}, a sector of ${sa(angles[i])}°`).join('; ')}.`}>
      {parts.map((p, i) => {
        const a1 = start;
        const a2 = start - angles[i];
        start = a2;
        const p1 = pos(a1, rad);
        const p2 = pos(a2, rad);
        const large = angles[i] > 180 ? 1 : 0;
        return (
          <path key={i} d={`M${cx},${cy} L${r3(p1.x)},${r3(p1.y)} A${rad},${rad} 0 ${large} 1 ${r3(p2.x)},${r3(p2.y)} Z`} fill={colors[i % 4]} fillOpacity={0.75} stroke={INK} strokeWidth={0.8} />
        );
      })}
      {parts.map((p, i) => (
        <g key={`k${i}`}>
          <rect x={74} y={r3(16 + i * 13)} width={5} height={5} fill={colors[i % 4]} />
          <Label x={82} y={r3(20.4 + i * 13)} anchor="start" size={5.4} color={colors[i % 4]}>{`${p.label} ${sa(angles[i])}°`}</Label>
        </g>
      ))}
    </Panel>
  );
};

// ---------- probability ----------

/** A bag of coloured balls, grouped by colour. */
export const BallBag = ({ groups, className }: { groups: { count: number; color: string; label: string }[]; className?: string }) => {
  const total = groups.reduce((s, g) => s + g.count, 0);
  const step = 13;
  const x0 = 60 - ((total - 1) * step) / 2;
  let k = 0;
  return (
    <Panel h={46} className={className} aria={`A bag with ${groups.map((g) => `${g.count} ${g.label}`).join(' and ')} balls: ${total} balls in all.`}>
      <path d={`M${r3(x0 - 12)},10 Q${r3(x0 - 14)},34 60,36 Q${r3(x0 + (total - 1) * step + 14)},34 ${r3(x0 + (total - 1) * step + 12)},10`} fill="none" stroke={MUTED} strokeWidth={0.8} />
      {groups.map((g) =>
        Array.from({ length: g.count }).map((_, i) => {
          const cx = r3(x0 + (k++) * step);
          return <circle key={`${g.label}${i}`} cx={cx} cy={22} r={5} fill={g.color} />;
        }),
      )}
      <Label x={60} y={44} size={5.4} color={MUTED}>{groups.map((g) => `${g.count} ${g.label}`).join(' + ') + ` = ${total}`}</Label>
    </Panel>
  );
};

/** The probability scale from 0 (impossible) to 1 (certain), with events marked. */
export const ProbabilityScale = ({ marks, className }: { marks: { p: number; label: string; color: string }[]; className?: string }) => {
  const X0 = 12;
  const W = 96;
  const y = 26;
  const x = (p: number) => r3(X0 + p * W);
  return (
    <Panel h={48} className={className} aria={`A probability scale from 0, impossible, to 1, certain. ${marks.map((m) => `${m.label} at ${sa(m.p)}`).join('; ')}.`}>
      <line x1={X0} y1={y} x2={X0 + W} y2={y} stroke={LINE} strokeWidth={1} />
      {[0, 0.5, 1].map((t) => <line key={t} x1={x(t)} y1={y - 2.5} x2={x(t)} y2={y + 2.5} stroke={LINE} strokeWidth={0.8} />)}
      <Label x={X0 - 2} y={y + 9} size={5} color={MUTED} anchor="start">0 impossible</Label>
      <Label x={X0 + W + 2} y={y + 9} size={5} color={MUTED} anchor="end">certain 1</Label>
      {marks.map((m, i) => (
        <g key={i}>
          <circle cx={x(m.p)} cy={y} r={2.2} fill={m.color} />
          <Label x={x(m.p)} y={y - 6 - (i % 2) * 7} size={5.2} color={m.color}>{m.label}</Label>
        </g>
      ))}
    </Panel>
  );
};

/** A two-stage tree diagram (for example a coin tossed twice): the first branches are labelled, and each end shows its outcome. */
export const TwoStageTree = ({ first, second, className }: { first: string[]; second: string[]; className?: string }) => {
  const leaves = first.flatMap((a) => second.map((b) => a + b));
  const ROW = 10;
  const top = 6;
  const leafY = (i: number) => top + i * ROW + ROW / 2;
  const X0 = 12;
  const X1 = 48;
  const X2 = 86;
  const colors = [I, E, A, R];
  return (
    <Panel h={top + leaves.length * ROW + 6} className={className} aria={`A tree diagram. The first stage has ${first.length} branches (${first.join(', ')}); each splits into ${second.length} (${second.join(', ')}). There are ${leaves.length} outcomes: ${leaves.join(', ')}.`}>
      {first.map((a, i) => {
        const ys = second.map((_, j) => leafY(i * second.length + j));
        const y1 = (ys[0] + ys[ys.length - 1]) / 2;
        const y0 = (leafY(0) + leafY(leaves.length - 1)) / 2;
        return (
          <g key={a}>
            <line x1={X0} y1={r3(y0)} x2={X1} y2={r3(y1)} stroke={colors[i % 4]} strokeWidth={0.9} />
            <Label x={X1 + 3} y={y1 + 2} anchor="start" color={colors[i % 4]}>{a}</Label>
            {ys.map((y, j) => (
              <g key={j}>
                <line x1={X1 + 10} y1={r3(y1)} x2={X2} y2={r3(y)} stroke={MUTED} strokeWidth={0.7} />
                <Label x={X2 + 3} y={y + 2} anchor="start" size={5.6}>{a + second[j]}</Label>
              </g>
            ))}
          </g>
        );
      })}
      <circle cx={X0} cy={r3((leafY(0) + leafY(leaves.length - 1)) / 2)} r={1.6} fill={LINE} />
    </Panel>
  );
};

/** The six faces of a die; chosen numbers are coloured. */
export const DieFaces = ({ groups, className }: { groups: { values: number[]; color: string; name: string }[]; className?: string }) => {
  const S = 15;
  const gap = 3;
  const x0 = 60 - (6 * S + 5 * gap) / 2;
  const colorOf = (v: number) => groups.find((g) => g.values.includes(v))?.color;
  return (
    <Panel h={34} className={className} aria={`The six numbers on a die, 1 to 6. ${groups.map((g) => `${g.name}: ${g.values.join(', ')}`).join('. ')}. No number is in both groups.`}>
      {[1, 2, 3, 4, 5, 6].map((v, i) => {
        const c = colorOf(v);
        return (
          <g key={v}>
            <rect x={r3(x0 + i * (S + gap))} y={6} width={S} height={S} rx={2.5} fill={c ?? '#1e293b'} fillOpacity={c ? 0.35 : 1} stroke={c ?? MUTED} strokeWidth={0.9} />
            <Label x={x0 + i * (S + gap) + S / 2} y={16} size={7} color={c ?? LINE}>{v}</Label>
          </g>
        );
      })}
      {groups.map((g, i) => (
        <Label key={g.name} x={(120 * (i + 1)) / (groups.length + 1)} y={30} size={5.4} color={g.color}>{g.name}</Label>
      ))}
    </Panel>
  );
};

/** A plain table (header row first), e.g. faces, vertices and edges of several solids. */
export const InfoTable = ({ head, rows, aria, className }: { head: string[]; rows: (string | number)[][]; aria: string; className?: string }) => (
  <div role="table" aria-label={aria} className={`mx-auto w-full max-w-md overflow-hidden rounded-2xl text-center text-sm font-bold sm:text-base ${className ?? ''}`} style={{ background: INK }}>
    {[head, ...rows].map((row, ri) => (
      <div role="row" key={ri} className="grid" style={{ gridTemplateColumns: `minmax(0, 2fr) repeat(${row.length - 1}, minmax(0, 1fr))` }}>
        {row.map((v, ci) => (
          <div role={ri === 0 ? 'columnheader' : 'cell'} key={ci} className={`border-b border-slate-700 px-1 py-2 ${ri === 0 ? 'text-amber-300' : ci === 0 ? 'text-left text-indigo-300' : 'text-slate-100'}`}>
            {typeof v === 'number' ? sa(v) : v}
          </div>
        ))}
      </div>
    ))}
  </div>
);
