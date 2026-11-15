import { r3 } from '../round';
import { A, E, I, INK, LINE, Panel, R } from './Grade7Pictures';
import { collectLike, differences, evalLinear, evaluate, runBackwards, termsText, trends, type Term } from './grade7Helpers2';
import { applyRule, type Rule } from './mathsHelpers';

/**
 * Grade 7 pictures for functions, algebra and graphs: input-output tables, flow diagrams run
 * backwards, algebra tiles, coordinate grids and trend graphs. Every number drawn comes from
 * grade7Helpers2.ts, never typed by hand. Same style as Grade7Pictures: dark panel, 120-unit viewBox.
 */

const T = ({ x, y, children, fill = LINE, size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{children}</text>
);
const minus = (s: string) => s.replace(/-/g, '−');
const opText = (r: Rule) => `${r.op} ${r.n}`;

// ---------- input-output table ----------

/** A two-row table of x and y, with the step between neighbouring values drawn under each row. */
export const FunctionTable = ({ xs, ys, rule, heads = ['x', 'y'], className }: { xs: number[]; ys: number[]; rule?: string; heads?: [string, string]; className?: string }) => {
  const n = xs.length;
  const W = Math.min(22, 92 / n);
  const head = (120 - (18 + n * W)) / 2;
  const x0 = head + 18;
  const cx = (i: number) => x0 + i * W + W / 2;
  const dx = differences(xs);
  const dy = differences(ys);
  const h = rule ? 74 : 64;
  return (
    <Panel h={h} className={className} aria={`A table of values. ${heads[0]}: ${xs.join(', ')}. ${heads[1]}: ${ys.join(', ')}. Each time ${heads[0]} goes up by ${dx[0]}, ${heads[1]} goes up by ${dy[0]}.${rule ? ` The rule is ${rule}.` : ''}`}>
      {[0, 1].map((row) => (
        <g key={row}>
          <rect x={r3(head)} y={r3(8 + row * 26)} width={16} height={14} rx={2} fill={row ? 'rgba(52,211,153,0.25)' : 'rgba(129,140,248,0.25)'} stroke={row ? E : I} strokeWidth={0.8} />
          <T x={head + 8} y={8 + row * 26 + 9.6} fill={row ? E : I} size={heads[row].length > 1 ? 6 : 7}>{heads[row]}</T>
          {(row ? ys : xs).map((v, i) => (
            <g key={i}>
              <rect x={r3(x0 + i * W + 1)} y={r3(8 + row * 26)} width={r3(W - 2)} height={14} rx={2} fill="#1e293b" stroke="#64748b" strokeWidth={0.7} />
              <T x={cx(i)} y={8 + row * 26 + 9.6} size={7}>{v}</T>
            </g>
          ))}
          {(row ? dy : dx).map((d, i) => (
            <g key={`d${i}`}>
              <path d={`M${r3(cx(i) + 2)},${r3(24 + row * 26)} Q${r3(cx(i) + W / 2)},${r3(29 + row * 26)} ${r3(cx(i + 1) - 2)},${r3(24 + row * 26)}`} fill="none" stroke={row ? E : I} strokeWidth={0.7} />
              <T x={cx(i) + W / 2} y={32.5 + row * 26} fill={row ? E : I} size={5.2}>{d < 0 ? `−${-d}` : `+${d}`}</T>
            </g>
          ))}
        </g>
      ))}
      {rule && <T x={60} y={68} fill={A} size={6.4}>{minus(rule)}</T>}
    </Panel>
  );
};

// ---------- flow diagram forwards and backwards ----------

/** A two-step flow diagram run forwards (top) and then backwards from the output with the inverse steps (bottom). */
export const FlowBack = ({ rules, input, className }: { rules: [Rule, Rule]; input: number; className?: string }) => {
  const mid = applyRule(rules[0], input);
  const output = applyRule(rules[1], mid);
  const back = runBackwards(rules, output);
  const xs = [16, 60, 104];
  const box = (x: number, y: number, v: number | string, fill: string) => (
    <g>
      <rect x={x - 11} y={y - 7} width={22} height={14} rx={3} fill={fill} />
      <T x={x} y={y + 3.4} fill={INK} size={8}>{v}</T>
    </g>
  );
  const arrow = (x1: number, x2: number, y: number, c: string) => {
    const d = x2 > x1 ? 1 : -1;
    return (
      <g stroke={c} strokeWidth={0.9} fill="none">
        <path d={`M${x1},${y} H${x2}`} />
        <path d={`M${x2 - 2.4 * d},${y - 2} L${x2},${y} L${x2 - 2.4 * d},${y + 2}`} />
      </g>
    );
  };
  return (
    <Panel h={74} className={className} aria={`A flow diagram. Forwards: ${input}, ${opText(rules[0])} gives ${mid}, ${opText(rules[1])} gives ${output}. Backwards from ${output}: ${opText(back[0].rule)} gives ${back[0].value}, then ${opText(back[1].rule)} gives ${back[1].value}, the input again.`}>
      <T x={6} y={8} fill={I} size={5} anchor="start">forwards</T>
      {box(xs[0], 20, input, I)}
      {box(xs[1], 20, mid, '#a5b4fc')}
      {box(xs[2], 20, output, E)}
      {arrow(28, 48, 20, I)}
      {arrow(72, 92, 20, I)}
      <T x={38} y={15} fill={I} size={5.6}>{opText(rules[0])}</T>
      <T x={82} y={15} fill={I} size={5.6}>{opText(rules[1])}</T>
      <T x={6} y={42} fill={A} size={5} anchor="start">backwards: undo the last step first</T>
      {box(xs[2], 56, output, E)}
      {box(xs[1], 56, back[0].value, '#fde68a')}
      {box(xs[0], 56, back[1].value, A)}
      {arrow(92, 72, 56, A)}
      {arrow(48, 28, 56, A)}
      <T x={82} y={51} fill={A} size={5.6}>{opText(back[0].rule)}</T>
      <T x={38} y={51} fill={A} size={5.6}>{opText(back[1].rule)}</T>
    </Panel>
  );
};

// ---------- algebra ----------

/** "five less than n": a bar for n with 5 cut off the end. The part left is n − 5. */
export const LessThanBar = ({ letter, less, className }: { letter: string; less: number; className?: string }) => {
  const x0 = 10;
  const W = 100;
  const cut = 34;
  return (
    <Panel h={56} className={className} aria={`A bar for the number ${letter}. A piece of length ${less} is cut off the end. The part that is left is ${letter} − ${less}, which is ${less} less than ${letter}.`}>
      <path d={`M${x0},12 v-3 h${W} v3`} fill="none" stroke={I} strokeWidth={0.8} />
      <T x={x0 + W / 2} y={7} fill={I} size={6.4}>{letter}</T>
      <rect x={x0} y={16} width={W - cut} height={14} rx={2} fill="rgba(52,211,153,0.35)" stroke={E} strokeWidth={0.9} />
      <rect x={x0 + W - cut} y={16} width={cut} height={14} rx={2} fill="rgba(251,113,133,0.25)" stroke={R} strokeWidth={0.9} strokeDasharray="2 1.4" />
      <T x={x0 + W - cut / 2} y={25.4} fill={R} size={6.4}>{less}</T>
      <T x={x0 + (W - cut) / 2} y={25.4} fill={E} size={6.4}>{`${letter} − ${less}`}</T>
      <T x={60} y={45} fill={A} size={6}>{`${less} less than ${letter} is ${letter} − ${less}`}</T>
    </Panel>
  );
};

/**
 * Algebra tiles: a tall bar for each letter, a small square for each 1. A negative term is drawn in
 * rose and cancels a bar of the same letter (a zero pair). Below: the simplified expression.
 */
export const AlgebraTiles = ({ terms, value, className }: { terms: Term[]; value?: number; className?: string }) => {
  const simplified = collectLike(terms);
  // shrink everything (but the bar height) when many tiles would not fit in the 120-unit panel
  const raw = terms.reduce((sum, t) => sum + Math.abs(t.coef) * ((t.letter ? (value === undefined ? 7 : 9) : 7) + 2) - 2, 0) + 10 * (terms.length - 1);
  const k = Math.min(1, 108 / raw);
  const BAR_W = r3((value === undefined ? 7 : 9) * k);
  const BAR_H = 26;
  const SQ = r3(7 * k);
  const GAP = r3(2 * k);
  const GROUP_GAP = r3(10 * k);
  const groupW = (t: Term) => Math.abs(t.coef) * ((t.letter ? BAR_W : SQ) + GAP) - GAP;
  const total = terms.reduce((s, t) => s + groupW(t), 0) + GROUP_GAP * (terms.length - 1);
  let x = 60 - total / 2;
  const top = 8;
  // which positive bars are cancelled by negative bars of the same letter (from the right of the first group)
  const cancel = new Map<string, number>();
  for (const t of terms) if (t.coef < 0 && t.letter) cancel.set(t.letter, (cancel.get(t.letter) ?? 0) - t.coef);
  const groups = terms.map((t, gi) => {
    const gx = x;
    x += groupW(t) + GROUP_GAP;
    const neg = t.coef < 0;
    const color = neg ? R : t.letter ? (gi === 0 ? I : E) : A;
    const n = Math.abs(t.coef);
    return (
      <g key={gi}>
        {Array.from({ length: n }).map((_, k) => {
          const bx = r3(gx + k * ((t.letter ? BAR_W : SQ) + GAP));
          const crossed = !neg && t.letter && (cancel.get(t.letter) ?? 0) > 0 && k >= n - (cancel.get(t.letter) ?? 0);
          return t.letter ? (
            <g key={k}>
              <rect x={bx} y={top} width={BAR_W} height={BAR_H} rx={1} fill={neg ? 'rgba(251,113,133,0.3)' : color} stroke={color} strokeWidth={0.7} strokeDasharray={neg ? '1.6 1' : undefined} />
              {value !== undefined && <T x={bx + BAR_W / 2} y={top + BAR_H / 2 + 2.4} fill={INK} size={7}>{value}</T>}
              {(crossed || neg) && <path d={`M${bx},${top} L${r3(bx + BAR_W)},${top + BAR_H}`} stroke={neg ? R : INK} strokeWidth={0.8} />}
            </g>
          ) : (
            <rect key={k} x={bx} y={top + BAR_H - SQ} width={SQ} height={SQ} rx={0.8} fill={color} />
          );
        })}
        <T x={gx + groupW(t) / 2} y={top + BAR_H + 10} fill={color} size={7}>{gi === 0 ? termsText([t]) : `${t.coef < 0 ? '−' : '+'}${termsText([{ coef: n, letter: t.letter }])}`}</T>
      </g>
    );
  });
  return (
    <Panel h={66} className={className} aria={value === undefined
      ? `Algebra tiles for ${termsText(terms)}. ${[...cancel.keys()].map((l) => `Each crossed-out ${l} bar is cancelled by a negative ${l} bar. `).join('')}Collecting like terms gives ${termsText(simplified)}.`
      : `Algebra tiles for ${termsText(terms)} with every letter bar worth ${value}. The total is ${evaluate(terms, value)}.`}>
      {groups}
      <T x={60} y={59} fill={A} size={7.4}>{value === undefined ? `= ${termsText(simplified)}` : `= ${terms.map((t, i) => `${i === 0 ? '' : t.coef < 0 ? ' − ' : ' + '}${t.letter ? `${Math.abs(t.coef)} × ${value}` : Math.abs(t.coef)}`).join('')} = ${evaluate(terms, value)}`}</T>
    </Panel>
  );
};

// ---------- coordinate grid ----------

export interface GridPoint {
  x: number;
  y: number;
  label?: string;
  color?: string;
  /** Draw the walk from the origin: along the x-axis first, then up. */
  walk?: boolean;
}

/** The first quadrant from 0 to max on both axes, one unit per grid square, with points and an optional line y = m·x + c. */
export const CoordGrid = ({ max, points, line, axisGlow, aria, className }: { max: number; points: GridPoint[]; line?: { m: number; c: number }; axisGlow?: 'x' | 'y' | 'both'; aria: string; className?: string }) => {
  const u = Math.min(14, 82 / max);
  const X0 = r3(58 - (max * u) / 2);
  const Y0 = 16 + max * u;
  const px = (x: number) => r3(X0 + x * u);
  const py = (y: number) => r3(Y0 - y * u);
  const ticks = Array.from({ length: max + 1 }, (_, i) => i);
  const glowX = axisGlow === 'x' || axisGlow === 'both';
  const glowY = axisGlow === 'y' || axisGlow === 'both';
  let lineEnd: { x: number; y: number } | null = null;
  if (line) {
    const xEnd = Math.min(max, (max - line.c) / line.m);
    lineEnd = { x: xEnd, y: evalLinear(line.m, line.c, xEnd) };
  }
  return (
    <Panel h={Y0 + 11} className={className} aria={aria}>
      <g stroke="#334155" strokeWidth={0.4}>
        {ticks.map((t) => <line key={`v${t}`} x1={px(t)} y1={py(0)} x2={px(t)} y2={py(max)} />)}
        {ticks.map((t) => <line key={`h${t}`} x1={px(0)} y1={py(t)} x2={px(max)} y2={py(t)} />)}
      </g>
      <line x1={px(0)} y1={py(0)} x2={r3(px(max) + 5)} y2={py(0)} stroke={glowX ? A : LINE} strokeWidth={glowX ? 1.6 : 0.9} />
      <line x1={px(0)} y1={py(0)} x2={px(0)} y2={r3(py(max) - 5)} stroke={glowY ? A : LINE} strokeWidth={glowY ? 1.6 : 0.9} />
      <T x={px(max) + 8} y={py(0) + 2} fill={glowX ? A : LINE} size={6}>x</T>
      <T x={px(0)} y={py(max) - 6.5} fill={glowY ? A : LINE} size={6}>y</T>
      <g fontSize={4.4} fontWeight={700} fill="#94a3b8">
        {ticks.map((t) => <text key={`tx${t}`} x={px(t)} y={r3(py(0) + 6.2)} textAnchor="middle">{t}</text>)}
        {ticks.filter((t) => t > 0).map((t) => <text key={`ty${t}`} x={r3(px(0) - 3)} y={r3(py(t) + 1.6)} textAnchor="end">{t}</text>)}
      </g>
      {line && lineEnd && <line x1={px(0)} y1={py(line.c)} x2={px(lineEnd.x)} y2={py(lineEnd.y)} stroke={E} strokeWidth={1} />}
      {points.map((p, i) => (
        <g key={i}>
          {p.walk && (
            <g fill="none" stroke={p.color ?? I} strokeWidth={0.9} strokeDasharray="2 1.2">
              <path d={`M${px(0)},${py(0)} H${px(p.x)} V${py(p.y)}`} />
            </g>
          )}
          <circle cx={px(p.x)} cy={py(p.y)} r={2.1} fill={p.color ?? I} stroke={INK} strokeWidth={0.6} />
          {p.label && <T x={px(p.x) + (p.x === max ? -2.5 : 2.5)} y={py(p.y) - 3.2} fill={p.color ?? I} size={5.4} anchor={p.x === max ? 'end' : 'start'}>{p.label}</T>}
        </g>
      ))}
    </Panel>
  );
};

// ---------- trend (global) graph ----------

const TREND_COLOR = { increasing: E, constant: A, decreasing: R } as const;

/** A line graph through the points, each piece coloured and named by its trend: increasing, constant or decreasing. */
export const TrendGraph = ({ pts, xUnit, yUnit, xTicks, yTicks, aria, className }: { pts: [number, number][]; xUnit: string; yUnit: string; xTicks: number[]; yTicks: number[]; aria: string; className?: string }) => {
  const xMax = Math.max(...pts.map((p) => p[0]), ...xTicks);
  const yMax = Math.max(...pts.map((p) => p[1]), ...yTicks);
  const X0 = 22;
  const Y0 = 66;
  const W = 88;
  const H = 46;
  const px = (x: number) => r3(X0 + (x / xMax) * W);
  const py = (y: number) => r3(Y0 - (y / yMax) * H);
  const tr = trends(pts);
  return (
    <Panel h={84} className={className} aria={aria}>
      <g stroke="#334155" strokeWidth={0.4}>
        {yTicks.map((t) => <line key={t} x1={X0} y1={py(t)} x2={X0 + W} y2={py(t)} />)}
        {xTicks.map((t) => <line key={t} x1={px(t)} y1={Y0} x2={px(t)} y2={Y0 - H} />)}
      </g>
      <line x1={X0} y1={Y0} x2={X0 + W + 3} y2={Y0} stroke={LINE} strokeWidth={0.9} />
      <line x1={X0} y1={Y0} x2={X0} y2={Y0 - H - 4} stroke={LINE} strokeWidth={0.9} />
      <g fontSize={4.4} fontWeight={700} fill="#94a3b8">
        {xTicks.map((t) => <text key={t} x={px(t)} y={Y0 + 6} textAnchor="middle">{t}</text>)}
        {yTicks.map((t) => <text key={t} x={X0 - 2.5} y={r3(py(t) + 1.6)} textAnchor="end">{t}</text>)}
      </g>
      <T x={X0 + W / 2} y={Y0 + 14} fill={LINE} size={5}>{xUnit}</T>
      <T x={4} y={Y0 - H - 8} fill={LINE} size={5} anchor="start">{yUnit}</T>
      {tr.map((t, i) => (
        <line key={i} x1={px(pts[i][0])} y1={py(pts[i][1])} x2={px(pts[i + 1][0])} y2={py(pts[i + 1][1])} stroke={TREND_COLOR[t]} strokeWidth={1.6} strokeLinecap="round" />
      ))}
      {tr.map((t, i) => {
        // a falling piece is labelled low down, where the space under the graph is widest, so labels never meet
        const f = t === 'decreasing' ? 0.75 : 0.5;
        const mx = px(pts[i][0]) + f * (px(pts[i + 1][0]) - px(pts[i][0]));
        const my = py(pts[i][1]) + f * (py(pts[i + 1][1]) - py(pts[i][1]));
        return <T key={`l${i}`} x={mx + (t === 'increasing' ? 2.5 : t === 'decreasing' ? -2.5 : 0)} y={t === 'constant' ? my - 3 : my + 5} fill={TREND_COLOR[t]} size={4.8} anchor={t === 'increasing' ? 'start' : t === 'decreasing' ? 'end' : 'middle'}>{t}</T>;
      })}
    </Panel>
  );
};
