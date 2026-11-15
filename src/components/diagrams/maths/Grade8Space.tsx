import { r3 } from '../round';
import type { P2 } from './grade8SpaceHelpers';

/**
 * Grade 8 term 4 pictures (3D objects, graphs, probability, transformations) in the style of
 * Grade7Pictures: a dark panel, a 120-unit-wide viewBox, indigo / emerald / amber / rose, at most six
 * labels. Coordinates and counts come from the values passed in.
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
  <svg viewBox={`0 0 120 ${r3(h)}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const T = ({ x, y, text, fill = LINE, size = 6, anchor = 'middle' }: { x: number; y: number; text: string | number; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{text}</text>
);

const minus = (n: number) => (n < 0 ? `−${Math.abs(n)}` : String(n));

// ---------- 3D objects ----------

type V3 = [number, number, number];
const iso = (cx: number, cy: number, u: number) => ([x, y, z]: V3) => [r3(cx + (x - y) * 0.866 * u), r3(cy + (x + y) * 0.5 * u - z * u)] as const;

/** A triangular prism (two triangular bases, amber) and a square pyramid (one square base, amber), hidden edges dashed. */
export const PrismAndPyramid = ({ className }: { className?: string }) => {
  const P = iso(30, 24, 10.5);
  const Q = iso(88, 34, 10);
  const h = 1.6;
  const pr: Record<string, V3> = { A0: [0, 0, 0], B0: [0, 2, 0], C0: [0, 1, h], A1: [3, 0, 0], B1: [3, 2, 0], C1: [3, 1, h] };
  const py: Record<string, V3> = { a: [0, 0, 0], b: [2, 0, 0], c: [2, 2, 0], d: [0, 2, 0], t: [1, 1, 2] };
  const poly = (f: (v: V3) => readonly [number, number], vs: V3[]) => vs.map((v) => f(v).join(',')).join(' ');
  const edge = (f: (v: V3) => readonly [number, number], p: V3, q: V3, hidden: boolean, color = LINE) => {
    const [x1, y1] = f(p);
    const [x2, y2] = f(q);
    return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={hidden ? 0.6 : 0.9} strokeDasharray={hidden ? '1.6 1.4' : undefined} />;
  };
  return (
    <Panel h={70} className={className} aria="Left: a triangular prism. Its two triangular bases are parallel and the same size, joined by three rectangles. Right: a square pyramid. It has one square base and four triangles that meet at the top vertex.">
      <polygon points={poly(P, [pr.B0, pr.C0, pr.C1, pr.B1])} fill="rgba(129,140,248,0.4)" />
      <polygon points={poly(P, [pr.A1, pr.B1, pr.C1])} fill="rgba(251,191,36,0.55)" />
      <polygon points={poly(P, [pr.A0, pr.B0, pr.C0])} fill="rgba(251,191,36,0.12)" stroke={A} strokeWidth={0.6} strokeDasharray="1.6 1.4" />
      {edge(P, pr.A0, pr.B0, true)}{edge(P, pr.C0, pr.A0, true)}{edge(P, pr.A0, pr.A1, true)}
      {edge(P, pr.B0, pr.C0, false)}{edge(P, pr.A1, pr.B1, false)}{edge(P, pr.B1, pr.C1, false)}{edge(P, pr.C1, pr.A1, false)}{edge(P, pr.B0, pr.B1, false)}{edge(P, pr.C0, pr.C1, false)}
      <polygon points={poly(Q, [py.a, py.b, py.c, py.d])} fill="rgba(251,191,36,0.3)" />
      <polygon points={poly(Q, [py.b, py.c, py.t])} fill="rgba(129,140,248,0.45)" />
      <polygon points={poly(Q, [py.c, py.d, py.t])} fill="rgba(129,140,248,0.3)" />
      {edge(Q, py.a, py.b, true, A)}{edge(Q, py.d, py.a, true, A)}{edge(Q, py.a, py.t, true)}
      {edge(Q, py.b, py.c, false, A)}{edge(Q, py.c, py.d, false, A)}{edge(Q, py.b, py.t, false)}{edge(Q, py.c, py.t, false)}{edge(Q, py.d, py.t, false)}
      <T x={30} y={56} text="triangular prism" size={5.6} />
      <T x={30} y={64} text="2 bases" size={5.4} fill={A} />
      <T x={88} y={56} text="square pyramid" size={5.6} />
      <T x={88} y={64} text="1 base" size={5.4} fill={A} />
    </Panel>
  );
};

/** Nets: six squares in a cross fold into a cube; one square and four triangles fold into a square pyramid. */
export const NetPair = ({ className }: { className?: string }) => {
  const S = 11;
  const cube: [number, number][] = [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3]];
  const x0 = 8;
  const y0 = 6;
  const pc = { x: 88, y: 30 };
  const s = 14;
  const hgt = 12;
  const sq = [[-s / 2, -s / 2], [s / 2, -s / 2], [s / 2, s / 2], [-s / 2, s / 2]].map(([dx, dy]) => [pc.x + dx, pc.y + dy]);
  const tris = [
    [sq[0], sq[1], [pc.x, pc.y - s / 2 - hgt]],
    [sq[1], sq[2], [pc.x + s / 2 + hgt, pc.y]],
    [sq[2], sq[3], [pc.x, pc.y + s / 2 + hgt]],
    [sq[3], sq[0], [pc.x - s / 2 - hgt, pc.y]],
  ];
  return (
    <Panel h={60} className={className} aria="Two nets. Left: six squares in a cross shape, which fold into a cube. Right: a square with a triangle on each side, which folds into a square pyramid.">
      {cube.map(([c, r], i) => (
        <rect key={i} x={x0 + c * S} y={y0 + r * S} width={S} height={S} fill={i % 2 ? 'rgba(129,140,248,0.45)' : 'rgba(52,211,153,0.45)'} stroke={LINE} strokeWidth={0.7} />
      ))}
      {tris.map((t, i) => (
        <polygon key={i} points={t.map((p) => p.map(r3).join(',')).join(' ')} fill="rgba(129,140,248,0.45)" stroke={LINE} strokeWidth={0.7} />
      ))}
      <polygon points={sq.map((p) => p.map(r3).join(',')).join(' ')} fill="rgba(251,191,36,0.5)" stroke={LINE} strokeWidth={0.7} />
      <T x={64} y={20} text="cube" size={5.6} fill={E} anchor="end" />
      <T x={88} y={57} text="square pyramid" size={5.6} fill={I} />
    </Panel>
  );
};

// ---------- the coordinate plane ----------

export interface GridShape {
  pts: P2[];
  color: string;
  closed?: boolean;
  dashed?: boolean;
}
export interface GridPoint {
  p: P2;
  color: string;
  label?: string;
  /** Where the label sits: 'ne' (default), 'nw', 'se', 'sw'. */
  at?: 'ne' | 'nw' | 'se' | 'sw';
}

/**
 * A coordinate grid. With `square`, one unit is the same length on both axes (needed for reflections and
 * rotations). Shapes, points, translation arrows, a quarter-turn arc and straight lines y = mx + c are
 * drawn from coordinates.
 */
export const CoordGrid = ({
  x: [xMin, xMax], y: [yMin, yMax], square = true, xEvery = 1, yEvery = 1, shapes = [], points = [], arrows = [], turn, lines = [], quadrants = false, axisNames = ['x', 'y'], aria, className,
}: {
  x: [number, number];
  y: [number, number];
  square?: boolean;
  xEvery?: number;
  yEvery?: number;
  shapes?: GridShape[];
  points?: GridPoint[];
  arrows?: { from: P2; to: P2; color: string }[];
  turn?: { from: P2; to: P2; color: string };
  lines?: { m: number; c: number; color: string }[];
  quadrants?: boolean;
  axisNames?: [string, string];
  aria: string;
  className?: string;
}) => {
  const W = 98;
  const Hmax = 78;
  let ux = W / (xMax - xMin);
  let uy = Hmax / (yMax - yMin);
  if (square) ux = uy = Math.min(ux, uy);
  const left = 60 - ((xMax - xMin) * ux) / 2 + 2;
  const top = 6;
  const px = (x: number) => r3(left + (x - xMin) * ux);
  const py = (y: number) => r3(top + (yMax - y) * uy);
  const h = top + (yMax - yMin) * uy + 9;
  const xs = Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i);
  const ys = Array.from({ length: yMax - yMin + 1 }, (_, i) => yMin + i);
  const ax = Math.min(Math.max(0, xMin), xMax);
  const ay = Math.min(Math.max(0, yMin), yMax);
  const off = { ne: [2.4, -2.4, 'start'], nw: [-2.4, -2.4, 'end'], se: [2.4, 6, 'start'], sw: [-2.4, 6, 'end'] } as const;
  return (
    <Panel h={h} aria={aria} className={className}>
      {xs.filter((x) => xMax - xMin <= 12 || x % xEvery === 0).map((x) => <line key={`gx${x}`} x1={px(x)} y1={py(yMin)} x2={px(x)} y2={py(yMax)} stroke={GRID} strokeWidth={x % xEvery === 0 ? 0.45 : 0.2} />)}
      {ys.filter((y) => yMax - yMin <= 12 || y % yEvery === 0).map((y) => <line key={`gy${y}`} x1={px(xMin)} y1={py(y)} x2={px(xMax)} y2={py(y)} stroke={GRID} strokeWidth={y % yEvery === 0 ? 0.45 : 0.2} />)}
      <line x1={px(xMin)} y1={py(ay)} x2={px(xMax)} y2={py(ay)} stroke={LINE} strokeWidth={0.8} />
      <line x1={px(ax)} y1={py(yMin)} x2={px(ax)} y2={py(yMax)} stroke={LINE} strokeWidth={0.8} />
      {xs.filter((x) => x !== ax && x % xEvery === 0).map((x) => <T key={`tx${x}`} x={px(x)} y={py(ay) + 5} text={minus(x)} fill={MUTED} size={4.2} />)}
      {ys.filter((y) => y !== ay && y % yEvery === 0).map((y) => <T key={`ty${y}`} x={px(ax) - 1.4} y={py(y) + 1.3} text={minus(y)} fill={MUTED} size={4.2} anchor="end" />)}
      <T x={px(xMax) + 1.5} y={py(ay) + 1.5} text={axisNames[0]} fill={MUTED} size={4.4} anchor="start" />
      <T x={px(ax)} y={py(yMax) - 1.6} text={axisNames[1]} fill={MUTED} size={4.4} />
      {quadrants && (
        <>
          <T x={px(xMax) - 4} y={py(yMax) + 6} text="I" fill={MUTED} size={5} />
          <T x={px(xMin) + 4} y={py(yMax) + 6} text="II" fill={MUTED} size={5} />
          <T x={px(xMin) + 4} y={py(yMin) - 2.5} text="III" fill={MUTED} size={5} />
          <T x={px(xMax) - 4} y={py(yMin) - 2.5} text="IV" fill={MUTED} size={5} />
        </>
      )}
      {lines.map((l, i) => {
        const x1 = Math.max(xMin, l.m > 0 ? (yMin - l.c) / l.m : l.m < 0 ? (yMax - l.c) / l.m : xMin);
        const x2 = Math.min(xMax, l.m > 0 ? (yMax - l.c) / l.m : l.m < 0 ? (yMin - l.c) / l.m : xMax);
        return <line key={`l${i}`} x1={px(x1)} y1={py(l.m * x1 + l.c)} x2={px(x2)} y2={py(l.m * x2 + l.c)} stroke={l.color} strokeWidth={1.1} />;
      })}
      {shapes.map((s, i) => {
        const d = s.pts.map(([x, y]) => `${px(x)},${py(y)}`).join(' ');
        return s.closed === false ? (
          <polyline key={`s${i}`} points={d} fill="none" stroke={s.color} strokeWidth={1.1} strokeDasharray={s.dashed ? '2 1.4' : undefined} strokeLinejoin="round" />
        ) : (
          <polygon key={`s${i}`} points={d} fill={s.color} fillOpacity={s.dashed ? 0.08 : 0.3} stroke={s.color} strokeWidth={0.9} strokeDasharray={s.dashed ? '2 1.4' : undefined} />
        );
      })}
      {arrows.map((a, i) => {
        const [x1, y1, x2, y2] = [px(a.from[0]), py(a.from[1]), px(a.to[0]), py(a.to[1])];
        const L = Math.hypot(x2 - x1, y2 - y1);
        const [ux2, uy2] = [(x2 - x1) / L, (y2 - y1) / L];
        const tip = [x2 - ux2 * 1.8, y2 - uy2 * 1.8];
        return (
          <g key={`a${i}`}>
            <line x1={x1} y1={y1} x2={r3(tip[0])} y2={r3(tip[1])} stroke={a.color} strokeWidth={0.9} strokeDasharray="1.8 1.2" />
            <path d={`M${r3(tip[0] - ux2 * 2.6 - uy2 * 1.6)},${r3(tip[1] - uy2 * 2.6 + ux2 * 1.6)} L${r3(tip[0])},${r3(tip[1])} L${r3(tip[0] - ux2 * 2.6 + uy2 * 1.6)},${r3(tip[1] - uy2 * 2.6 - ux2 * 1.6)}`} fill="none" stroke={a.color} strokeWidth={0.9} />
          </g>
        );
      })}
      {turn && (() => {
        const r = Math.hypot(turn.from[0], turn.from[1]) * ux;
        const [x1, y1, x2, y2] = [px(turn.from[0]), py(turn.from[1]), px(turn.to[0]), py(turn.to[1])];
        return <path d={`M${x1},${y1} A${r3(r)},${r3(r)} 0 0 1 ${x2},${y2}`} fill="none" stroke={turn.color} strokeWidth={0.9} strokeDasharray="1.8 1.2" />;
      })()}
      {points.map((p, i) => {
        const [dx, dy, anchor] = off[p.at ?? 'ne'];
        return (
          <g key={`p${i}`}>
            <circle cx={px(p.p[0])} cy={py(p.p[1])} r={1.5} fill={p.color} stroke={INK} strokeWidth={0.4} />
            {p.label && <T x={px(p.p[0]) + dx} y={py(p.p[1]) + dy} text={p.label} fill={p.color} size={4.8} anchor={anchor} />}
          </g>
        );
      })}
    </Panel>
  );
};

/** Three small graphs: increasing (rises left to right), decreasing (falls) and constant (horizontal). */
export const ThreeTrends = ({ className }: { className?: string }) => {
  const panes = [
    { name: 'increasing', color: E, y1: 30, y2: 8 },
    { name: 'decreasing', color: R, y1: 8, y2: 30 },
    { name: 'constant', color: A, y1: 19, y2: 19 },
  ];
  return (
    <Panel h={46} className={className} aria="Three small graphs. Increasing: the line rises from left to right, so y gets bigger as x gets bigger. Decreasing: the line falls from left to right. Constant: the line is horizontal, so y stays the same.">
      {panes.map((p, i) => {
        const x0 = 6 + i * 38;
        return (
          <g key={p.name}>
            <line x1={x0} y1={34} x2={x0 + 32} y2={34} stroke={MUTED} strokeWidth={0.7} />
            <line x1={x0} y1={34} x2={x0} y2={4} stroke={MUTED} strokeWidth={0.7} />
            <line x1={x0 + 3} y1={p.y1} x2={x0 + 29} y2={p.y2} stroke={p.color} strokeWidth={1.4} />
            <T x={x0 + 16} y={42} text={p.name} fill={p.color} size={5.2} />
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- probability ----------

/** The probability scale from 0 (impossible) to 1 (certain), with events marked at their probabilities. */
export const ProbScale = ({ marks, className }: { marks: { value: number; text: string; color: string }[]; className?: string }) => {
  const X0 = 10;
  const W = 100;
  const x = (v: number) => r3(X0 + v * W);
  return (
    <Panel h={40} className={className} aria={`A probability scale from 0, impossible, to 1, certain. Marked: ${marks.map((m) => m.text).join(', ')}.`}>
      <line x1={X0} y1={18} x2={X0 + W} y2={18} stroke={LINE} strokeWidth={1} />
      {marks.map((m, i) => (
        <g key={i}>
          <line x1={x(m.value)} y1={14} x2={x(m.value)} y2={22} stroke={m.color} strokeWidth={1.1} />
          <T x={x(m.value)} y={10} text={m.text} fill={m.color} size={5.6} />
        </g>
      ))}
      <T x={X0 - 3} y={31} text="impossible" fill={MUTED} size={5} anchor="start" />
      <T x={X0 + W + 3} y={31} text="certain" fill={MUTED} size={5} anchor="end" />
    </Panel>
  );
};

/** Counters in a bag: one circle per counter, coloured by group. */
export const CounterBag = ({ groups, caption, className }: { groups: { count: number; color: string; name: string }[]; caption: string; className?: string }) => {
  const all = groups.flatMap((g) => Array.from({ length: g.count }, () => g.color));
  const perRow = Math.min(all.length, 5);
  const rows = Math.ceil(all.length / perRow);
  const step = 11;
  const w = perRow * step + 8;
  const x0 = 60 - w / 2;
  const h = rows * step + 8;
  return (
    <Panel h={h + 18} className={className} aria={`A bag with ${groups.map((g) => `${g.count} ${g.name}`).join(' and ')} counters, ${all.length} in all. ${caption}.`}>
      <rect x={r3(x0)} y={4} width={r3(w)} height={r3(h)} rx={6} fill="#1e293b" stroke={MUTED} strokeWidth={0.7} />
      {all.map((c, k) => (
        <circle key={k} cx={r3(x0 + 4 + step / 2 + (k % perRow) * step)} cy={r3(4 + 4 + step / 2 + Math.floor(k / perRow) * step - 1)} r={4} fill={c} />
      ))}
      <T x={60} y={h + 13} text={caption} fill={LINE} size={5.8} />
    </Panel>
  );
};

/** The sample space of two coins as a 2 × 2 grid: first coin down the side, second coin across the top. */
export const CoinGrid = ({ highlight = [], className }: { highlight?: string[]; className?: string }) => {
  const C = 22;
  const x0 = 42;
  const y0 = 12;
  const faces = ['H', 'T'];
  return (
    <Panel h={66} className={className} aria={`Two coins. The first coin is heads or tails, and so is the second, giving 4 outcomes: HH, HT, TH and TT.${highlight.length ? ` Highlighted: ${highlight.join(' and ')}.` : ''}`}>
      <T x={x0 + C} y={8} text="2nd coin" fill={MUTED} size={4.8} />
      <T x={x0 - 10} y={y0 + C + 10.5} text="1st coin" fill={MUTED} size={4.8} anchor="end" />
      {faces.map((f, i) => <T key={`c${f}`} x={x0 + i * C + C / 2} y={y0 + 6} text={f} fill={I} size={6} />)}
      {faces.map((f, i) => <T key={`r${f}`} x={x0 - 4} y={y0 + 9 + i * C + C / 2} text={f} fill={I} size={6} />)}
      {faces.flatMap((a, i) =>
        faces.map((b, j) => {
          const o = a + b;
          const on = highlight.includes(o);
          return (
            <g key={o}>
              <rect x={x0 + j * C} y={y0 + 9 + i * C} width={C} height={C} fill={on ? 'rgba(52,211,153,0.35)' : '#1e293b'} stroke={MUTED} strokeWidth={0.6} />
              <T x={x0 + j * C + C / 2} y={y0 + 9 + i * C + C / 2 + 2.4} text={o} fill={on ? E : LINE} size={7} />
            </g>
          );
        }),
      )}
    </Panel>
  );
};

/** Results of an experiment as one bar: the successes, the rest, and a dashed line where the theory predicts. */
export const ExperimentBar = ({ trials, hits, expected, hitName, missName, className }: { trials: number; hits: number; expected: number; hitName: string; missName: string; className?: string }) => {
  const X0 = 10;
  const W = 100;
  const x = (v: number) => r3(X0 + (v / trials) * W);
  return (
    <Panel h={40} className={className} aria={`Out of ${trials} trials, ${hits} were ${hitName} and ${trials - hits} were ${missName}. The theory predicts ${expected}, shown by a dashed line.`}>
      <rect x={X0} y={12} width={x(hits) - X0} height={11} fill={I} />
      <rect x={x(hits)} y={12} width={X0 + W - x(hits)} height={11} fill="#475569" />
      <line x1={x(expected)} y1={8} x2={x(expected)} y2={27} stroke={A} strokeWidth={1} strokeDasharray="2 1.4" />
      <T x={X0 + 1} y={20} text={`${hits} ${hitName}`} fill={INK} size={5.4} anchor="start" />
      <T x={X0 + W - 1} y={20} text={`${trials - hits} ${missName}`} fill={LINE} size={5.4} anchor="end" />
      <T x={x(expected)} y={34} text={`theory: ${expected}`} fill={A} size={5.2} />
    </Panel>
  );
};
