import { r3 } from '../round';
import { PICTURE_COLORS } from './Grade7Pictures';
import { fmt } from './grade9GeometryHelpers';

/**
 * Grade 9 graph pictures: a Cartesian plane drawn from the rules and points passed in (lines are
 * sampled from their formulas), and a plain table of values. Same dark-panel style as Grade7Pictures.
 */

const INK = '#0f172a';
const MUTED = '#94a3b8';
const GRID = '#1e293b';
export const GRAPH_COLORS = PICTURE_COLORS;

export interface PlaneLine {
  fn: (x: number) => number;
  color: string;
  label?: string;
  /** Where to write the label: an x value on the line. */
  labelAt?: number;
  /** Put the label below the line instead of above. */
  below?: boolean;
  dashed?: boolean;
}
export interface PlanePoint {
  x: number;
  y: number;
  color: string;
  label?: string;
  /** Label side: right (default) or left. */
  side?: 'left' | 'right';
  /** Put the label under the point. */
  below?: boolean;
}
export interface PlaneStep {
  from: { x: number; y: number };
  run: number;
  rise: number;
  color: string;
  /** Write "run n" under the step (default true). */
  runLabel?: boolean;
}

/**
 * A Cartesian plane. Every whole number on each axis is ticked and numbered (every `xStep` / `yStep`
 * when given); lines are sampled from their formulas and clipped to the window.
 */
export const CoordPlane = ({
  x: [xMin, xMax],
  y: [yMin, yMax],
  xStep = 1,
  yStep = 1,
  equal = true,
  lines = [],
  points = [],
  steps = [],
  axisNames = ['x', 'y'],
  aria,
  className,
}: {
  x: [number, number];
  y: [number, number];
  xStep?: number;
  yStep?: number;
  /** Same length for one unit on both axes (default). */
  equal?: boolean;
  lines?: PlaneLine[];
  points?: PlanePoint[];
  steps?: PlaneStep[];
  axisNames?: [string, string];
  aria: string;
  className?: string;
}) => {
  const PW = 100;
  const PH = 80;
  let ux = PW / (xMax - xMin);
  let uy = equal ? ux : PH / (yMax - yMin);
  if (equal && uy * (yMax - yMin) > PH) {
    uy = PH / (yMax - yMin);
    ux = uy;
  }
  const w = ux * (xMax - xMin);
  const hh = uy * (yMax - yMin);
  const left = 12 + (PW - w) / 2;
  const top = 6;
  const X = (x: number) => r3(left + (x - xMin) * ux);
  const Y = (y: number) => r3(top + (yMax - y) * uy);
  const h = top + hh + 10;
  const xTicks: number[] = [];
  for (let t = Math.ceil(xMin / xStep) * xStep; t <= xMax + 1e-9; t += xStep) xTicks.push(r3(t));
  const yTicks: number[] = [];
  for (let t = Math.ceil(yMin / yStep) * yStep; t <= yMax + 1e-9; t += yStep) yTicks.push(r3(t));
  const ax = Math.min(Math.max(0, xMin), xMax); // where the y-axis is drawn
  const ay = Math.min(Math.max(0, yMin), yMax); // where the x-axis is drawn
  const sample = (fn: (x: number) => number) => {
    const n = 80;
    let d = '';
    let pen = false;
    for (let i = 0; i <= n; i++) {
      const x = xMin + ((xMax - xMin) * i) / n;
      const y = fn(x);
      const inside = y >= yMin - 1e-9 && y <= yMax + 1e-9;
      if (inside) {
        d += `${pen ? 'L' : 'M'}${X(x)},${Y(y)} `;
        pen = true;
      } else pen = false;
    }
    return d.trim();
  };
  const fs = 4.2;
  return (
    <svg viewBox={`0 0 120 ${r3(h)}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
      {xTicks.map((t) => <line key={`gx${t}`} x1={X(t)} y1={Y(yMin)} x2={X(t)} y2={Y(yMax)} stroke={GRID} strokeWidth={0.4} />)}
      {yTicks.map((t) => <line key={`gy${t}`} x1={X(xMin)} y1={Y(t)} x2={X(xMax)} y2={Y(t)} stroke={GRID} strokeWidth={0.4} />)}
      <line x1={X(xMin)} y1={Y(ay)} x2={r3(X(xMax) + 2)} y2={Y(ay)} stroke={MUTED} strokeWidth={0.7} />
      <line x1={X(ax)} y1={Y(yMin)} x2={X(ax)} y2={r3(Y(yMax) - 2)} stroke={MUTED} strokeWidth={0.7} />
      <text x={r3(X(xMax) + 3)} y={r3(Y(ay) + 1.6)} fontSize={4.6} fontWeight={800} fill={MUTED}>{axisNames[0]}</text>
      <text x={r3(X(ax) + 1.6)} y={r3(Y(yMax) - 1)} fontSize={4.6} fontWeight={800} fill={MUTED}>{axisNames[1]}</text>
      {xTicks.filter((t) => t !== ax && !points.some((p) => p.label && p.y === ay && (p.x === t || (p.below && X(t) > X(p.x) && X(t) < X(p.x) + 4 + p.label.length * 3.1)))).map((t) => (
        <text key={`tx${t}`} x={X(t)} y={r3(Y(ay) + 4.8)} textAnchor="middle" fontSize={fs} fill={MUTED}>{fmt(t)}</text>
      ))}
      {yTicks.filter((t) => t !== ay && !points.some((p) => p.label && p.x === ax && p.y === t)).map((t) => (
        <text key={`ty${t}`} x={r3(X(ax) - 1.4)} y={r3(Y(t) + 1.5)} textAnchor="end" fontSize={fs} fill={MUTED}>{fmt(t)}</text>
      ))}
      {ax === 0 && ay === 0 && <text x={r3(X(0) - 1.4)} y={r3(Y(0) + 4.8)} textAnchor="end" fontSize={fs} fill={MUTED}>0</text>}
      {steps.map((s, i) => (
        <g key={`s${i}`}>
          <path d={`M${X(s.from.x)},${Y(s.from.y)} H${X(s.from.x + s.run)} V${Y(s.from.y + s.rise)}`} fill="none" stroke={s.color} strokeWidth={0.9} strokeDasharray="1.6 1.2" />
          {s.runLabel !== false && <text x={r3((X(s.from.x) + X(s.from.x + s.run)) / 2)} y={r3(Y(s.from.y) + (s.rise >= 0 ? 5.6 : -2))} textAnchor="middle" fontSize={5.2} fontWeight={800} fill={s.color}>{`run ${fmt(s.run)}`}</text>}
          <text x={r3(X(s.from.x + s.run) + 1.8)} y={r3((Y(s.from.y) + Y(s.from.y + s.rise)) / 2 + 1.8)} fontSize={5.2} fontWeight={800} fill={s.color}>{`rise ${fmt(s.rise)}`}</text>
        </g>
      ))}
      {lines.map((l, i) => (
        <g key={`l${i}`}>
          <path d={sample(l.fn)} fill="none" stroke={l.color} strokeWidth={1} strokeDasharray={l.dashed ? '2 1.2' : undefined} />
          {l.label && l.labelAt !== undefined && (
            <text x={r3(X(l.labelAt) + 1.5)} y={r3(Y(l.fn(l.labelAt)) + (l.below ? 6 : -2.2))} fontSize={5.4} fontWeight={800} fill={l.color}>{l.label}</text>
          )}
        </g>
      ))}
      {points.map((p, i) => (
        <g key={`p${i}`}>
          <circle cx={X(p.x)} cy={Y(p.y)} r={1.7} fill={p.color} stroke={INK} strokeWidth={0.5} />
          {p.label && (
            <text x={r3(X(p.x) + (p.side === 'left' ? -2.4 : p.below ? 3.6 : 2.4))} y={r3(Y(p.y) + (p.below ? 5.6 : -2))} textAnchor={p.side === 'left' ? 'end' : 'start'} fontSize={5.4} fontWeight={800} fill={p.color}>{p.label}</text>
          )}
        </g>
      ))}
    </svg>
  );
};

/** A table of values as a labelled grid: the first column names each row (x, y, ...). */
export const ValueTable = ({ rows, aria, highlight, className }: { rows: { head: string; values: (string | number)[] }[]; aria: string; highlight?: number; className?: string }) => {
  const cols = rows[0].values.length;
  return (
    <div role="table" aria-label={aria} className={`mx-auto w-full max-w-md overflow-hidden rounded-2xl text-center text-lg font-bold ${className ?? ''}`} style={{ background: INK }}>
      {rows.map((row, ri) => (
        <div role="row" key={ri} className="grid" style={{ gridTemplateColumns: `minmax(3rem, 1.2fr) repeat(${cols}, minmax(0, 1fr))` }}>
          <div role="rowheader" className="border-b border-r border-slate-700 px-2 py-2 text-amber-300">{row.head}</div>
          {row.values.map((v, ci) => (
            <div role="cell" key={ci} className={`border-b border-slate-700 px-1 py-2 ${ci === highlight ? 'bg-emerald-900/50 text-emerald-300' : 'text-slate-100'}`}>
              {typeof v === 'number' ? fmt(v) : v}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

