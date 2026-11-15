import { r3 } from '../round';
import { dc } from './grade8NumberHelpers';

/**
 * Grade 8 pictures for decimals, data handling, Pythagoras, equations and functions (terms 3 and 4), in
 * the style of Grade7Pictures: a dark panel, a 120-unit-wide viewBox, indigo / emerald / amber / rose,
 * at most six labels (digits inside boxes and axis numbers aside). Everything is drawn from the values
 * passed in.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const GRID = '#334155';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const T = ({ x, y, text, fill = LINE, size = 6, anchor = 'middle', weight = 800 }: { x: number; y: number; text: string | number; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill}>{text}</text>
);

// ---------- decimals ----------

const PLACES = ['tens', 'ones', 'tenths', 'hundredths'];
const digitsOf = (v: number): (number | null)[] => {
  const m = Math.round(v * 100);
  const tens = Math.floor(m / 1000);
  const ones = Math.floor(m / 100) % 10;
  const t = Math.floor(m / 10) % 10;
  const h = m % 10;
  return [tens || null, ones, t || h ? t : null, h || null];
};

/** A place-value chart: the digits of v, and below them the digits of v × 10, each moved one place to the left. */
export const PlaceValueShift = ({ value, times, className }: { value: number; times: number; className?: string }) => {
  const COL = 25;
  const X0 = 10;
  const rows = [value, Math.round(value * times * 100) / 100];
  const cx = (i: number) => X0 + i * COL + COL / 2;
  return (
    <Panel h={66} className={className} aria={`A place-value chart. ${dc(rows[0])} has its digits in the ${PLACES.filter((_, i) => digitsOf(rows[0])[i] !== null).join(' and ')} columns. Multiplied by ${times}, every digit moves one place to the left: ${dc(rows[1])}.`}>
      {PLACES.map((p, i) => (
        <g key={p}>
          <rect x={X0 + i * COL} y={4} width={COL} height={58} fill={i >= 2 ? 'rgba(52,211,153,0.08)' : 'rgba(129,140,248,0.08)'} stroke={GRID} strokeWidth={0.6} />
          <T x={cx(i)} y={11} text={p} fill={MUTED} size={4.2} />
        </g>
      ))}
      <line x1={X0 + 2 * COL} y1={4} x2={X0 + 2 * COL} y2={62} stroke={A} strokeWidth={1.1} />
      {rows.map((v, r) =>
        digitsOf(v).map((d, i) => (d === null ? null : <T key={`${r}${i}`} x={cx(i)} y={27 + r * 26} text={d} fill={r ? E : I} size={10} />)),
      )}
      {digitsOf(rows[0]).map((d, i) => (d === null || i === 0 ? null : (
        <path key={i} d={`M${r3(cx(i) - 3)},31 L${r3(cx(i - 1) + 3)},42 m0,-3.2 v3.2 h3.2`} fill="none" stroke={A} strokeWidth={0.8} />
      )))}
    </Panel>
  );
};

/** Column addition of two decimals with the commas in one column. */
export const DecimalColumns = ({ a, b, places, className }: { a: number; b: number; places: number; className?: string }) => {
  const total = Math.round((a + b) * 10 ** places) / 10 ** places;
  const CX = 60;
  const rows = [dc(a, places), dc(b, places), dc(total, places)];
  const right = (s: string) => s.split(',')[1].length;
  const x = (s: string) => CX + right(s) * 6.4 + 1.6;
  return (
    <Panel h={62} className={className} aria={`Column addition with the commas lined up: ${rows[0]} plus ${rows[1]} equals ${rows[2]}.`}>
      <line x1={CX} y1={4} x2={CX} y2={51} stroke={A} strokeWidth={0.6} strokeDasharray="1.6 1.4" />
      <T x={x(rows[0])} y={16} text={rows[0]} size={10.5} anchor="end" fill={I} />
      <T x={x(rows[1])} y={30} text={rows[1]} size={10.5} anchor="end" fill={I} />
      <T x={CX - 30} y={30} text="+" size={10} fill={MUTED} />
      <line x1={CX - 34} y1={35} x2={CX + 22} y2={35} stroke={LINE} strokeWidth={0.8} />
      <T x={x(rows[2])} y={48} text={rows[2]} size={10.5} anchor="end" fill={E} />
      <T x={CX} y={58} text="commas in one column" size={5} fill={A} />
    </Panel>
  );
};

// ---------- data ----------

/** Bars for each value and a dashed line at the mean: the bars above the line fill the gaps below it. */
export const MeanBars = ({ data, mean, className }: { data: number[]; mean: number; className?: string }) => {
  const max = Math.max(...data);
  const H = 40;
  const base = 52;
  const U = H / max;
  const w = 80 / data.length;
  const x0 = 24;
  const yMean = base - mean * U;
  return (
    <Panel h={60} className={className} aria={`Bars of height ${data.join(', ')}. A dashed line at ${dc(mean)} marks the mean: the parts of the bars above the line would exactly fill the gaps below it.`}>
      {data.map((v, i) => (
        <g key={i}>
          <rect x={r3(x0 + i * w + 2)} y={r3(base - v * U)} width={r3(w - 4)} height={r3(v * U)} rx={1} fill={I} />
          <T x={x0 + i * w + w / 2} y={base - v * U - 2} text={v} size={5.6} />
        </g>
      ))}
      <line x1={x0 - 2} y1={base} x2={x0 + 82} y2={base} stroke={LINE} strokeWidth={0.8} />
      <line x1={x0 - 2} y1={r3(yMean)} x2={x0 + 82} y2={r3(yMean)} stroke={A} strokeWidth={1} strokeDasharray="2.5 1.6" />
      <T x={x0 - 4} y={yMean + 2} text={`mean ${dc(mean)}`} fill={A} size={5.2} anchor="end" />
    </Panel>
  );
};

/** Data values sorted into a row; the middle one or two are highlighted. */
export const SortedTiles = ({ values, middle, caption, className }: { values: number[]; middle: number[]; caption: string; className?: string }) => {
  const W = 15;
  const gap = 3;
  const total = values.length * W + (values.length - 1) * gap;
  const x0 = 60 - total / 2;
  const k = values.length;
  const mids = middle.length === 1 ? [Math.floor(k / 2)] : [k / 2 - 1, k / 2];
  return (
    <Panel h={40} className={className} aria={`The values in order: ${values.join(', ')}. The middle value${middle.length > 1 ? 's are' : ' is'} ${middle.join(' and ')}. ${caption}.`}>
      {values.map((v, i) => {
        const on = mids.includes(i);
        return (
          <g key={i}>
            <rect x={r3(x0 + i * (W + gap))} y={6} width={W} height={14} rx={2.5} fill={on ? A : '#334155'} />
            <T x={x0 + i * (W + gap) + W / 2} y={16} text={v} size={7.6} fill={on ? INK : LINE} />
          </g>
        );
      })}
      <T x={60} y={33} text={caption} fill={A} size={6} />
    </Panel>
  );
};

/** A bar graph (separate categories, gaps between bars) next to a histogram (touching bars over number intervals). */
export const BarVsHistogram = ({ bars, hist, edges, className }: { bars: number[]; hist: number[]; edges: number[]; className?: string }) => {
  const base = 50;
  const H = 34;
  const max = Math.max(...bars, ...hist);
  const U = H / max;
  const bw = 46 / bars.length;
  const hw = 46 / hist.length;
  return (
    <Panel h={66} className={className} aria={`Left: a bar graph with ${bars.length} separate categories and gaps between the bars. Right: a histogram of grouped numbers from ${edges[0]} to ${edges[edges.length - 1]} in intervals of ${edges[1] - edges[0]}; the bars touch because the intervals follow on from each other.`}>
      <T x={30} y={9} text="bar graph" fill={I} size={5.8} />
      <T x={90} y={9} text="histogram" fill={E} size={5.8} />
      {bars.map((v, i) => (
        <rect key={i} x={r3(7 + i * bw + 2)} y={r3(base - v * U)} width={r3(bw - 4)} height={r3(v * U)} fill={I} />
      ))}
      {hist.map((v, i) => (
        <rect key={i} x={r3(67 + i * hw)} y={r3(base - v * U)} width={r3(hw)} height={r3(v * U)} fill={E} stroke={INK} strokeWidth={0.5} />
      ))}
      <line x1={5} y1={base} x2={55} y2={base} stroke={LINE} strokeWidth={0.7} />
      <line x1={65} y1={base} x2={115} y2={base} stroke={LINE} strokeWidth={0.7} />
      {[0, edges.length - 1].map((j) => (
        <T key={j} x={67 + j * hw} y={base + 7} text={edges[j]} fill={MUTED} size={4.8} />
      ))}
      <T x={30} y={base + 12} text="categories" fill={MUTED} size={4.8} />
      <T x={91} y={base + 13} text="intervals of equal width" fill={MUTED} size={4.2} />
    </Panel>
  );
};

/** A stem-and-leaf plot: tens on the left of the line, units on the right, with a key. */
export const StemLeafPlot = ({ rows, keyStem, keyLeaf, highlight, className }: { rows: { stem: number; leaves: number[] }[]; keyStem: number; keyLeaf: number; highlight?: number[]; className?: string }) => {
  const ROW = 11;
  const y0 = 14;
  const h = y0 + rows.length * ROW + 12;
  let idx = 0;
  return (
    <Panel h={h} className={className} aria={`A stem-and-leaf plot. ${rows.map((r) => `Stem ${r.stem}: leaves ${r.leaves.join(', ')}`).join('. ')}. Key: ${keyStem} | ${keyLeaf} means ${keyStem * 10 + keyLeaf}.`}>
      <T x={30} y={9} text="stem" fill={MUTED} size={5} />
      <T x={46} y={9} text="leaf" fill={MUTED} size={5} anchor="start" />
      <line x1={38} y1={4} x2={38} y2={y0 + rows.length * ROW - 3} stroke={LINE} strokeWidth={0.8} />
      {rows.map((r, i) => (
        <g key={r.stem}>
          <T x={30} y={y0 + i * ROW + 4} text={r.stem} fill={I} size={7.4} />
          {r.leaves.map((l, j) => {
            const on = highlight?.includes(idx++);
            return <T key={j} x={47 + j * 8} y={y0 + i * ROW + 4} text={l} fill={on ? A : E} size={7.4} />;
          })}
        </g>
      ))}
      <T x={60} y={h - 4} text={`key: ${keyStem} | ${keyLeaf} = ${keyStem * 10 + keyLeaf}`} fill={A} size={5.4} />
    </Panel>
  );
};

/** `total` dots in rows of 10 with `count` of them coloured: the relative frequency. */
export const DotGrid = ({ total, count, caption, className }: { total: number; count: number; caption: string; className?: string }) => {
  const perRow = 10;
  const rows = Math.ceil(total / perRow);
  return (
    <Panel h={10 + rows * 9 + 10} className={className} aria={`${total} dots, ${count} of them coloured. ${caption}.`}>
      {Array.from({ length: total }).map((_, k) => (
        <circle key={k} cx={r3(19 + (k % perRow) * 9.2)} cy={r3(9 + Math.floor(k / perRow) * 9)} r={3} fill={k < count ? E : '#334155'} />
      ))}
      <T x={60} y={10 + rows * 9 + 4} text={caption} fill={E} size={6} />
    </Panel>
  );
};

// ---------- Pythagoras ----------

type V = [number, number];
const add = (p: V, q: V): V => [p[0] + q[0], p[1] + q[1]];

/**
 * A right-angled triangle with legs a (up) and b (across), drawn to scale. With `squares`, the square on
 * each side is drawn outward and filled with unit squares, so a² + b² = c² can be counted.
 */
export const RightTriangle = ({ a, b, labels, squares = false, aria, className }: { a: number; b: number; labels: [string, string, string]; squares?: boolean; aria: string; className?: string }) => {
  const c = Math.hypot(a, b);
  const O: V = [0, 0];
  const Ap: V = [0, a];
  const B: V = [b, 0];
  const n: V = [a / c, b / c]; // outward unit normal of the hypotenuse
  const hyp: V[] = [Ap, B, add(B, [n[0] * c, n[1] * c]), add(Ap, [n[0] * c, n[1] * c])];
  const pts: V[] = squares ? [O, Ap, B, [-a, 0], [-a, a], [0, -b], [b, -b], ...hyp] : [O, Ap, B];
  const minX = Math.min(...pts.map((p) => p[0]));
  const maxX = Math.max(...pts.map((p) => p[0]));
  const minY = Math.min(...pts.map((p) => p[1]));
  const maxY = Math.max(...pts.map((p) => p[1]));
  const U = Math.min(96 / (maxX - minX), (squares ? 84 : 52) / (maxY - minY));
  const padTop = 8;
  const H = (maxY - minY) * U + padTop + 12;
  const ox = 60 - ((maxX + minX) / 2) * U;
  const P = (p: V): [number, number] => [r3(ox + p[0] * U), r3(padTop + (maxY - p[1]) * U)];
  const poly = (vs: V[]) => vs.map((v) => P(v).join(',')).join(' ');
  const grid = (o: V, u: V, v: V, k: number, color: string) => (
    <g>
      <polygon points={poly([o, add(o, [u[0] * k, u[1] * k]), add(add(o, [u[0] * k, u[1] * k]), [v[0] * k, v[1] * k]), add(o, [v[0] * k, v[1] * k])])} fill={color} fillOpacity={0.3} stroke={color} strokeWidth={0.8} />
      {Array.from({ length: k - 1 }).flatMap((_, i) => {
        const t = i + 1;
        const p1 = add(o, [u[0] * t, u[1] * t]);
        const q1 = add(o, [v[0] * t, v[1] * t]);
        return [
          <line key={`u${i}`} x1={P(p1)[0]} y1={P(p1)[1]} x2={P(add(p1, [v[0] * k, v[1] * k]))[0]} y2={P(add(p1, [v[0] * k, v[1] * k]))[1]} stroke={color} strokeWidth={0.3} strokeOpacity={0.7} />,
          <line key={`v${i}`} x1={P(q1)[0]} y1={P(q1)[1]} x2={P(add(q1, [u[0] * k, u[1] * k]))[0]} y2={P(add(q1, [u[0] * k, u[1] * k]))[1]} stroke={color} strokeWidth={0.3} strokeOpacity={0.7} />,
        ];
      })}
    </g>
  );
  const mid = (p: V, q: V): V => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const sq = 3 / U;
  const centre = (vs: V[]): V => [vs.reduce((s, v) => s + v[0], 0) / vs.length, vs.reduce((s, v) => s + v[1], 0) / vs.length];
  const integral = Number.isInteger(c) && Number.isInteger(a) && Number.isInteger(b);
  return (
    <Panel h={r3(H)} aria={aria} className={className}>
      {squares && integral && (
        <>
          {grid(O, [-1, 0], [0, 1], a, I)}
          {grid(O, [1, 0], [0, -1], b, E)}
          {grid(Ap, [b / c, -a / c], n, c, A)}
        </>
      )}
      <polygon points={poly([O, Ap, B])} fill="rgba(226,232,240,0.12)" stroke={LINE} strokeWidth={1} />
      <polyline points={poly([[sq, 0], [sq, sq], [0, sq]])} fill="none" stroke={LINE} strokeWidth={0.7} />
      {squares && integral ? (
        <>
          <T x={P(centre([O, [-a, 0], [-a, a], Ap]))[0]} y={P(centre([O, [-a, 0], [-a, a], Ap]))[1] + 2.4} text={`${a}² = ${a * a}`} fill={LINE} size={5.6} />
          <T x={P(centre([O, B, [b, -b], [0, -b]]))[0]} y={P(centre([O, B, [b, -b], [0, -b]]))[1] + 2.4} text={`${b}² = ${b * b}`} fill={LINE} size={5.6} />
          <T x={P(centre(hyp))[0]} y={P(centre(hyp))[1] + 2.4} text={`${c}² = ${c * c}`} fill={LINE} size={5.6} />
        </>
      ) : null}
      {!squares && <>
      <T x={P(mid(O, Ap))[0] + (squares ? 3.5 : -3)} y={P(mid(O, Ap))[1] + 2} text={labels[0]} fill={I} size={6} anchor={squares ? 'start' : 'end'} />
      <T x={P(mid(O, B))[0]} y={P(mid(O, B))[1] + (squares ? -2.5 : 7)} text={labels[1]} fill={E} size={6} />
      <T x={P(mid(Ap, B))[0] + (squares ? -4 : 3)} y={P(mid(Ap, B))[1] + (squares ? 5 : -1)} text={labels[2]} fill={A} size={6} anchor={squares ? 'end' : 'start'} />
      </>}
    </Panel>
  );
};

/** A ladder against a vertical wall: the ladder is the hypotenuse, the gap at the foot and the height on the wall are the other sides. */
export const LadderWall = ({ ladder, foot, height, className }: { ladder: number; foot: number; height: number; className?: string }) => {
  const U = 52 / height;
  const wallX = 86;
  const groundY = 64;
  const top = { x: wallX, y: groundY - height * U };
  const base = { x: wallX - foot * U, y: groundY };
  return (
    <Panel h={74} className={className} aria={`A ladder ${dc(ladder)} metres long leans against a vertical wall. Its foot is ${dc(foot)} metres from the wall and it reaches h metres up the wall. The wall and the ground meet at a right angle, so the ladder is the hypotenuse.`}>
      <rect x={wallX} y={6} width={8} height={groundY - 6} fill="#475569" />
      <line x1={14} y1={groundY} x2={106} y2={groundY} stroke={LINE} strokeWidth={1} />
      <line x1={r3(base.x)} y1={base.y} x2={top.x} y2={r3(top.y)} stroke={A} strokeWidth={2} strokeLinecap="round" />
      <polyline points={`${wallX - 4},${groundY} ${wallX - 4},${groundY - 4} ${wallX},${groundY - 4}`} fill="none" stroke={LINE} strokeWidth={0.7} />
      <line x1={wallX - 1} y1={r3(top.y)} x2={wallX - 1} y2={groundY} stroke={I} strokeWidth={1} strokeDasharray="2 1.4" />
      <T x={wallX + 12} y={(top.y + groundY) / 2 + 2} text="h" fill={I} size={7} anchor="start" />
      <T x={(base.x + wallX) / 2} y={groundY + 7} text={`${dc(foot)} m`} fill={E} size={5.8} />
      <T x={(base.x + top.x) / 2 - 6} y={(base.y + top.y) / 2} text={`${dc(ladder)} m`} fill={A} size={5.8} anchor="end" />
    </Panel>
  );
};

// ---------- equations and functions ----------

export interface FlowOp {
  op: '+' | '−' | '×' | '÷';
  n: number;
}
const inverse: Record<FlowOp['op'], FlowOp['op']> = { '+': '−', '−': '+', '×': '÷', '÷': '×' };
const apply = (o: FlowOp, v: number) => (o.op === '+' ? v + o.n : o.op === '−' ? v - o.n : o.op === '×' ? v * o.n : v / o.n);

/** What happens to x (top row), and undoing it in reverse order with inverse operations (bottom row). */
export const UndoFlow = ({ ops, result, letter = 'x', className }: { ops: FlowOp[]; result: number; letter?: string; className?: string }) => {
  const back: number[] = [result];
  for (const o of [...ops].reverse()) back.push(apply({ op: inverse[o.op], n: o.n }, back[back.length - 1]));
  const solution = back[back.length - 1];
  const n = ops.length + 1;
  const BW = 17;
  const gap = (112 - n * BW) / (n - 1);
  const bx = (i: number) => 4 + i * (BW + gap);
  const fmt = (v: number) => dc(v).replace('-', '−');
  const box = (i: number, y: number, text: string, fill: string) => (
    <g key={`${y}${i}`}>
      <rect x={r3(bx(i))} y={y} width={BW} height={12} rx={2.5} fill={fill} />
      <T x={bx(i) + BW / 2} y={y + 8.2} text={text} fill={INK} size={text.length > 3 ? 5.4 : 7} />
    </g>
  );
  // the expression after each operation: x, 3x, 3x + 5 (only the in-between boxes are drawn)
  const exprs: string[] = [letter];
  for (const o of ops) {
    const e = exprs[exprs.length - 1];
    const simple = e === letter;
    exprs.push(o.op === '×' ? (simple ? `${o.n}${e}` : `${o.n}(${e})`) : o.op === '÷' ? `${simple ? e : `(${e})`}÷${o.n}` : `${e} ${o.op} ${o.n}`);
  }
  const arrow = (i: number, y: number, label: string, dir: 1 | -1, color: string) => {
    const x1 = bx(i) + BW + 1;
    const x2 = bx(i + 1) - 1;
    const [from, to] = dir === 1 ? [x1, x2] : [x2, x1];
    return (
      <g key={`a${y}${i}`}>
        <line x1={r3(from)} y1={y + 6} x2={r3(to)} y2={y + 6} stroke={color} strokeWidth={0.9} />
        <path d={`M${r3(to - 2.4 * dir)},${y + 4} L${r3(to)},${y + 6} L${r3(to - 2.4 * dir)},${y + 8}`} fill="none" stroke={color} strokeWidth={0.9} />
        <T x={(x1 + x2) / 2} y={y + 1.5} text={label} fill={color} size={5.8} />
      </g>
    );
  };
  return (
    <Panel h={58} className={className} aria={`Top row: start with ${letter}, ${ops.map((o) => `${o.op} ${o.n}`).join(', then ')}, to get ${fmt(result)}. Bottom row: undo in reverse order, ${[...ops].reverse().map((o) => `${inverse[o.op]} ${o.n}`).join(', then ')}, to get ${letter} = ${fmt(solution)}.`}>
      {box(0, 9, letter, I)}
      {exprs.slice(1, -1).map((e, i) => box(i + 1, 9, e, '#cbd5e1'))}
      {ops.map((o, i) => arrow(i, 9, `${o.op}${o.n}`, 1, I))}
      {box(n - 1, 9, fmt(result), E)}
      {back.map((v, j) => box(n - 1 - j, 38, fmt(v), j === back.length - 1 ? A : j === 0 ? E : '#cbd5e1'))}
      {[...ops].reverse().map((o, j) => arrow(n - 2 - j, 38, `${inverse[o.op]}${o.n}`, -1, A))}
      <T x={60} y={30} text="undo in reverse order" fill={A} size={5.4} />
    </Panel>
  );
};

/** Two bars for a word problem: x, and x plus an extra amount; together they make the total. */
export const SumBars = ({ names, extra, total, className }: { names: [string, string]; extra: number; total: number; className?: string }) => {
  const XW = 40;
  const EW = 16;
  return (
    <Panel h={54} className={className} aria={`Two bars. ${names[0]}: x. ${names[1]}: x and ${extra} more. Together they make ${total}.`}>
      <T x={4} y={13} text={names[0]} fill={LINE} size={5.6} anchor="start" />
      <rect x={34} y={6} width={XW} height={10} rx={1.5} fill={I} />
      <T x={34 + XW / 2} y={13.4} text="x" fill={INK} size={6.4} />
      <T x={4} y={29} text={names[1]} fill={LINE} size={5.6} anchor="start" />
      <rect x={34} y={22} width={XW} height={10} rx={1.5} fill={I} />
      <T x={34 + XW / 2} y={29.4} text="x" fill={INK} size={6.4} />
      <rect x={34 + XW + 1} y={22} width={EW} height={10} rx={1.5} fill={A} />
      <T x={34 + XW + 1 + EW / 2} y={29.4} text={extra} fill={INK} size={6.4} />
      <path d={`M${34 + XW + EW + 6},6 h2.5 V32 h-2.5 M${34 + XW + EW + 8.5},19 h2.5`} fill="none" stroke={E} strokeWidth={0.9} />
      <T x={34 + XW + EW + 13} y={21} text={total} fill={E} size={7} anchor="start" />
      <T x={60} y={46} text={`x + x + ${extra} = ${total}`} fill={A} size={6.2} />
    </Panel>
  );
};

export interface PlotLine {
  m: number;
  c: number;
  color: string;
  label: string;
}

/**
 * Straight-line rules plotted on a grid from x = 0 to xMax (whole-number points marked). Optional `mark`
 * labels one point, e.g. where two lines meet. Axis numbers only every `step`.
 */
export const LinePlot = ({ lines, xMax, yMax, xStep, yStep, mark, aria, className }: { lines: PlotLine[]; xMax: number; yMax: number; xStep: number; yStep: number; mark?: { x: number; y: number; text: string }; aria: string; className?: string }) => {
  const X0 = 16;
  const Y0 = 66;
  const W = 92;
  const H = 56;
  const px = (x: number) => r3(X0 + (x / xMax) * W);
  const py = (y: number) => r3(Y0 - (y / yMax) * H);
  const xs = Array.from({ length: Math.floor(xMax / xStep) + 1 }, (_, i) => i * xStep);
  const ys = Array.from({ length: Math.floor(yMax / yStep) + 1 }, (_, i) => i * yStep);
  return (
    <Panel h={80} aria={aria} className={className}>
      {xs.map((x) => <line key={`x${x}`} x1={px(x)} y1={py(0)} x2={px(x)} y2={py(yMax)} stroke={GRID} strokeWidth={0.4} />)}
      {ys.map((y) => <line key={`y${y}`} x1={px(0)} y1={py(y)} x2={px(xMax)} y2={py(y)} stroke={GRID} strokeWidth={0.4} />)}
      <line x1={px(0)} y1={py(0)} x2={px(xMax) + 2} y2={py(0)} stroke={LINE} strokeWidth={0.8} />
      <line x1={px(0)} y1={py(0)} x2={px(0)} y2={py(yMax) - 2} stroke={LINE} strokeWidth={0.8} />
      {xs.map((x) => <T key={`tx${x}`} x={px(x)} y={Y0 + 6} text={x} fill={MUTED} size={4.4} />)}
      {ys.filter((y) => y > 0).map((y) => <T key={`ty${y}`} x={X0 - 2} y={py(y) + 1.5} text={y} fill={MUTED} size={4.4} anchor="end" />)}
      <T x={px(xMax) + 3} y={Y0 + 1.5} text="x" fill={MUTED} size={5} anchor="start" />
      <T x={X0 - 6} y={py(yMax) - 3} text="y" fill={MUTED} size={5} />
      {lines.map((l, i) => {
        const xEnd = Math.min(xMax, (yMax - l.c) / (l.m || 1e-9));
        const pts = Array.from({ length: Math.floor(xEnd) + 1 }, (_, x) => x).filter((x) => l.m * x + l.c >= 0);
        return (
          <g key={i}>
            <line x1={px(0)} y1={py(l.c)} x2={px(l.m === 0 ? xMax : xEnd)} y2={py(l.m === 0 ? l.c : l.m * xEnd + l.c)} stroke={l.color} strokeWidth={1} />
            {pts.map((x) => <circle key={x} cx={px(x)} cy={py(l.m * x + l.c)} r={1.2} fill={l.color} />)}
            <T x={X0 + 8 + i * 46} y={7} text={l.label} fill={l.color} size={5.4} anchor="start" />
          </g>
        );
      })}
      {mark && (
        <>
          <circle cx={px(mark.x)} cy={py(mark.y)} r={2.2} fill="none" stroke={R} strokeWidth={1} />
          <T x={px(mark.x) + 3.5} y={py(mark.y) + 6} text={mark.text} fill={R} size={5.4} anchor="start" />
        </>
      )}
    </Panel>
  );
};
