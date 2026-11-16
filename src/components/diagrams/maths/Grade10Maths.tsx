import { r3 } from '../round';
import { PICTURE_COLORS } from './Grade7Pictures';
import { dec, quadrant, sqrtRounded, ratiosFromPoint } from './grade10Helpers';

/**
 * Grade 10 Mathematics lesson pictures, in the style of Grade7Pictures / Grade9Pictures: a dark panel, a 120-unit-wide viewBox, at most six labels per
 * picture, positions computed from the numbers passed in (so a picture always matches its worked example). No AI-generated images.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    <title>{aria}</title>
    {children}
  </svg>
);
const T = ({ x, y, children, color = LINE, size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/** A number line with √n marked between its two neighbouring integers (a perfect-square estimate made visible). */
export const RootNumberLine = ({ n }: { n: number }) => {
  const root = Math.sqrt(n);
  const lo = Math.floor(root);
  const hi = lo + 1;
  const x = (v: number) => 14 + ((v - (lo - 1)) / 3) * 92; // shows lo − 1 .. hi + 1
  return (
    <Panel h={46} aria={`A number line from ${lo - 1} to ${hi + 1}. The square root of ${n} is about ${dec(sqrtRounded(n, 2), 2)}, between ${lo} and ${hi}.`}>
      <line x1={x(lo - 1)} y1={26} x2={x(hi + 1)} y2={26} stroke={MUTED} strokeWidth={1} />
      {[lo - 1, lo, hi, hi + 1].map((v) => (
        <g key={v}>
          <line x1={x(v)} y1={22} x2={x(v)} y2={30} stroke={LINE} strokeWidth={1} />
          <T x={x(v)} y={40} color={v === lo || v === hi ? E : MUTED}>{v}</T>
        </g>
      ))}
      <circle cx={r3(x(root))} cy={26} r={2.6} fill={A} />
      <T x={x(root)} y={14} color={A}>{`√${n} ≈ ${dec(sqrtRounded(n, 2), 2)}`}</T>
    </Panel>
  );
};

/** A right-angled triangle for the angle θ at the left: opposite, adjacent and hypotenuse named, drawn from the angle. */
export const RatioTriangle = ({ deg }: { deg: number }) => {
  const W = 78;
  const Hh = W * Math.tan((deg * Math.PI) / 180);
  const s = Math.min(1, 48 / Hh);
  const w = W * s;
  const hgt = Hh * s;
  const x0 = 20;
  const y0 = 8 + 52;
  const B = { x: x0 + w, y: y0 };
  const C = { x: x0 + w, y: y0 - hgt };
  return (
    <Panel h={72} aria={`A right-angled triangle with the angle θ = ${deg}° at the left. The side across from θ is the opposite, the side next to θ is the adjacent and the longest side is the hypotenuse.`}>
      <polygon points={`${x0},${y0} ${r3(B.x)},${y0} ${r3(C.x)},${r3(C.y)}`} fill="rgba(99,102,241,0.16)" stroke={I} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={`M${r3(B.x - 4)} ${y0} v-4 h4`} fill="none" stroke={MUTED} strokeWidth={0.8} />
      <T x={x0 + 14} y={y0 - 2.5} color={A} size={6}>θ</T>
      <T x={(x0 + B.x) / 2} y={y0 + 8} color={E}>adjacent</T>
      <T x={B.x + 3} y={(y0 + C.y) / 2 + 2} color={E} anchor="start">opposite</T>
      <T x={(x0 + C.x) / 2 - 4} y={(y0 + C.y) / 2 - 3} color={R} anchor="end">hypotenuse</T>
    </Panel>
  );
};

/** Axes with the point (x; y) on the terminal arm of θ, its distance r, and the quadrant. */
export const CartesianAngle = ({ x, y }: { x: number; y: number }) => {
  const { r } = ratiosFromPoint(x, y);
  const k = 7;
  const cx = 60;
  const cy = 54;
  const px = cx + x * k;
  const py = cy - y * k;
  const q = quadrant((Math.atan2(y, x) * 180) / Math.PI + (y < 0 ? 360 : 0));
  return (
    <Panel h={108} aria={`The point (${x}; ${y}) in quadrant ${q}. The distance from the origin to the point is r = ${dec(r, Number.isInteger(r) ? 0 : 1)}.`}>
      <line x1={8} y1={cy} x2={112} y2={cy} stroke={MUTED} strokeWidth={0.8} />
      <line x1={cx} y1={6} x2={cx} y2={102} stroke={MUTED} strokeWidth={0.8} />
      <T x={110} y={cy - 2.5} color={MUTED} anchor="end">x</T>
      <T x={cx + 3} y={10} color={MUTED} anchor="start">y</T>
      <line x1={cx} y1={cy} x2={r3(px)} y2={r3(py)} stroke={I} strokeWidth={1.4} />
      <line x1={r3(px)} y1={r3(py)} x2={r3(px)} y2={cy} stroke={E} strokeWidth={1} strokeDasharray="2 2" />
      <circle cx={r3(px)} cy={r3(py)} r={2.2} fill={A} />
      <T x={px + (x >= 0 ? 4 : -4)} y={py + (y >= 0 ? -3 : 7)} color={A} anchor={x >= 0 ? 'start' : 'end'}>{`(${x}; ${y})`.replace(/-/g, '−')}</T>
      <T x={(cx + px) / 2 + (x >= 0 ? -3 : 3)} y={(cy + py) / 2 + (y >= 0 ? -2 : 6)} color={I} anchor={x >= 0 ? 'end' : 'start'}>{`r = ${dec(r, Number.isInteger(r) ? 0 : 1)}`}</T>
      <T x={cx + (x >= 0 ? 26 : -26)} y={cy + (y >= 0 ? 12 : -6)} color={R}>{`quadrant ${q}`}</T>
    </Panel>
  );
};

// ---------------------------------------------------------------- a small, accessible graph (axes, curves sampled from functions, marked points)

export interface GraphCurve { f: (x: number) => number; color?: string; label?: string; labelAt?: number }
export interface GraphPoint { x: number; y: number; label?: string; color?: string; anchor?: 'start' | 'middle' | 'end'; dy?: number }

/** Axes with whole-number ticks, curves sampled from the function, and marked points. Everything is computed from the ranges, so the picture matches the numbers. */
export const MiniGraph = ({ curves, points = [], x: xr, y: yr, aria, tickEvery = 1, yEvery = tickEvery, h = 76 }: { curves: GraphCurve[]; points?: GraphPoint[]; x: [number, number]; y: [number, number]; aria: string; tickEvery?: number; yEvery?: number; h?: number }) => {
  const L = 14;
  const Rr = 112;
  const Tt = 6;
  const Bb = h - 10;
  const sx = (v: number) => L + ((v - xr[0]) / (xr[1] - xr[0])) * (Rr - L);
  const sy = (v: number) => Bb - ((v - yr[0]) / (yr[1] - yr[0])) * (Bb - Tt);
  const x0 = Math.min(Math.max(0, xr[0]), xr[1]);
  const y0 = Math.min(Math.max(0, yr[0]), yr[1]);
  const xs = Array.from({ length: Math.floor((xr[1] - xr[0]) / tickEvery) + 1 }, (_, i) => xr[0] + i * tickEvery);
  const ys = Array.from({ length: Math.floor((yr[1] - yr[0]) / yEvery) + 1 }, (_, i) => yr[0] + i * yEvery);
  const path = (f: (x: number) => number) => {
    const N = 120;
    let d = '';
    let pen = false;
    for (let i = 0; i <= N; i++) {
      const xv = xr[0] + (i / N) * (xr[1] - xr[0]);
      const yv = f(xv);
      if (!Number.isFinite(yv) || yv < yr[0] - (yr[1] - yr[0]) || yv > yr[1] + (yr[1] - yr[0])) { pen = false; continue; }
      d += `${pen ? 'L' : 'M'}${r3(sx(xv))} ${r3(Math.min(Math.max(sy(yv), Tt - 3), Bb + 3))} `;
      pen = true;
    }
    return d.trim();
  };
  const colors = [I, R, E];
  return (
    <Panel h={h} aria={aria}>
      {xs.map((v) => (v === 0 ? null : <T key={`x${v}`} x={sx(v)} y={Bb + 7.5} color={MUTED} size={4.4}>{String(v).replace('-', '−')}</T>))}
      {ys.map((v) => (v === 0 ? null : <T key={`y${v}`} x={sx(x0) - 2} y={sy(v) + 1.6} color={MUTED} size={4.4} anchor="end">{String(v).replace('-', '−')}</T>))}
      <line x1={L} y1={r3(sy(y0))} x2={Rr} y2={r3(sy(y0))} stroke={MUTED} strokeWidth={0.7} />
      <line x1={r3(sx(x0))} y1={Tt} x2={r3(sx(x0))} y2={Bb} stroke={MUTED} strokeWidth={0.7} />
      {curves.map((c, i) => <path key={i} d={path(c.f)} fill="none" stroke={c.color ?? colors[i % 3]} strokeWidth={1.5} strokeLinecap="round" />)}
      {curves.map((c, i) => (c.label ? <T key={`l${i}`} x={Math.min(Rr - 2, Math.max(L + 10, sx(c.labelAt ?? xr[1] - 1)))} y={Math.max(Tt + 5, Math.min(Bb - 2, sy(c.f(c.labelAt ?? xr[1] - 1)) - 3))} color={c.color ?? colors[i % 3]} size={5}>{c.label}</T> : null))}
      {points.map((p, i) => (
        <g key={`p${i}`}>
          <circle cx={r3(sx(p.x))} cy={r3(sy(p.y))} r={2.1} fill={p.color ?? A} />
          {p.label ? <T x={sx(p.x) + (p.anchor === 'end' ? -3 : p.anchor === 'start' ? 3 : 0)} y={sy(p.y) + (p.dy ?? -4)} color={p.color ?? A} size={5} anchor={p.anchor ?? 'middle'}>{p.label}</T> : null}
        </g>
      ))}
    </Panel>
  );
};

// ---------------------------------------------------------------- number patterns

/** The first terms as bars, with the constant difference written between them. */
export const SequenceBars = ({ terms, diff }: { terms: number[]; diff: number }) => {
  const max = Math.max(...terms.map(Math.abs));
  const n = terms.length;
  const bw = Math.min(14, 96 / n - 4);
  const gap = (96 - bw * n) / Math.max(1, n - 1);
  const base = 52;
  return (
    <Panel h={64} aria={`Bars for the terms ${terms.join(', ')}. Each term is ${diff > 0 ? 'bigger' : 'smaller'} than the one before by ${Math.abs(diff)}.`}>
      <line x1={10} y1={base} x2={110} y2={base} stroke={MUTED} strokeWidth={0.7} />
      {terms.map((t, i) => {
        const hh = (Math.abs(t) / max) * 36;
        const x = 12 + i * (bw + gap);
        return (
          <g key={i}>
            <rect x={r3(x)} y={r3(base - hh)} width={bw} height={r3(hh)} rx={1.5} fill={I} fillOpacity={0.45} stroke={I} strokeWidth={0.8} />
            <T x={x + bw / 2} y={base + 8} color={LINE} size={5}>{t}</T>
            {i < n - 1 ? <T x={x + bw + gap / 2} y={base - 40} color={A} size={5}>{`${diff > 0 ? '+' : '−'}${Math.abs(diff)}`}</T> : null}
          </g>
        );
      })}
    </Panel>
  );
};

// ---------------------------------------------------------------- exponents

/** base^e for e from top down to bottom, each row one step of ÷ base. */
export const ExponentLadder = ({ base, top, bottom }: { base: number; top: number; bottom: number }) => {
  const rows = Array.from({ length: top - bottom + 1 }, (_, i) => top - i);
  const val = (e: number) => (e >= 0 ? String(base ** e) : `1/${base ** -e}`);
  const ROW = 11;
  return (
    <Panel h={rows.length * ROW + 10} aria={`Powers of ${base} from ${base} to the power ${top} down to ${base} to the power ${bottom}. Each step down divides by ${base}.`}>
      {rows.map((e, i) => (
        <g key={e}>
          <T x={40} y={9 + i * ROW + 5} color={e === 0 ? A : LINE} anchor="end">{`${base}${String(e).split('').map((c) => ({ '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }[c] ?? c)).join('')}`}</T>
          <T x={46} y={9 + i * ROW + 5} color={MUTED}>=</T>
          <T x={52} y={9 + i * ROW + 5} color={e === 0 ? A : E} anchor="start">{val(e)}</T>
          {i < rows.length - 1 ? <T x={104} y={9 + i * ROW + 10.5} color={R} size={4.6}>{`÷ ${base}`}</T> : null}
        </g>
      ))}
    </Panel>
  );
};

/** a^(m/n): the denominator is the root, the numerator is the power. */
export const RationalExponent = ({ base, m, n }: { base: number; m: number; n: number }) => (
  <Panel h={44} aria={`${base} to the power ${m} over ${n}: the denominator ${n} is the root, the numerator ${m} is the power.`}>
    <T x={44} y={30} color={LINE} size={16}>{base}</T>
    <T x={55} y={18} color={A} size={9} anchor="start">{`${m}/${n}`}</T>
    <T x={84} y={14} color={E} size={5}>{`${n}: the root`}</T>
    <T x={84} y={40} color={A} size={5}>{`${m}: the power`}</T>
    <path d="M70 18 Q76 14 80 14" fill="none" stroke={E} strokeWidth={0.8} />
    <path d="M70 20 Q76 36 80 38" fill="none" stroke={A} strokeWidth={0.8} />
  </Panel>
);

// ---------------------------------------------------------------- equations and inequalities

/** A number line for an inequality: the boundary, an open or closed circle, and the shaded side. */
export const InequalityLine = ({ bound, op }: { bound: number; op: '>' | '<' | '≥' | '≤' }) => {
  const lo = Math.floor(bound) - 3;
  const hi = Math.ceil(bound) + 3;
  const x = (v: number) => 12 + ((v - lo) / (hi - lo)) * 96;
  const right = op === '>' || op === '≥';
  const closed = op === '≥' || op === '≤';
  const ticks = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  return (
    <Panel h={40} aria={`A number line with ${closed ? 'a filled' : 'an open'} circle at ${bound}. The line is shaded to the ${right ? 'right' : 'left'}, so x ${op} ${bound}.`}>
      <line x1={x(lo)} y1={20} x2={x(hi)} y2={20} stroke={MUTED} strokeWidth={1} />
      {ticks.map((v) => <g key={v}><line x1={x(v)} y1={17} x2={x(v)} y2={23} stroke={LINE} strokeWidth={0.8} /><T x={x(v)} y={32} color={MUTED} size={4.6}>{String(v).replace('-', '−')}</T></g>)}
      <line x1={x(bound)} y1={20} x2={right ? x(hi) : x(lo)} y2={20} stroke={A} strokeWidth={3} strokeLinecap="round" />
      <circle cx={r3(x(bound))} cy={20} r={3} fill={closed ? A : INK} stroke={A} strokeWidth={1.4} />
      <T x={x(bound)} y={11} color={A}>{`x ${op} ${String(bound).replace('-', '−')}`}</T>
    </Panel>
  );
};

/** Both sides of an equation on a balance: left and right pans level, with the two expressions. */
export const BalanceEquation = ({ left, right }: { left: string; right: string }) => (
  <Panel h={56} aria={`A balance. The left pan holds ${left} and the right pan holds ${right}. The two sides are equal, so whatever you do to one side you must do to the other.`}>
    <line x1={60} y1={14} x2={60} y2={46} stroke={MUTED} strokeWidth={1.4} />
    <line x1={22} y1={20} x2={98} y2={20} stroke={LINE} strokeWidth={1.6} />
    <path d="M22 20 L14 36 H30 Z" fill="none" stroke={I} strokeWidth={1.2} />
    <path d="M98 20 L90 36 H106 Z" fill="none" stroke={E} strokeWidth={1.2} />
    <rect x={46} y={46} width={28} height={4} rx={1} fill={MUTED} />
    <T x={22} y={9} color={I}>{left}</T>
    <T x={98} y={9} color={E}>{right}</T>
    <T x={60} y={13} color={A} size={7}>=</T>
  </Panel>
);

// ---------------------------------------------------------------- algebraic fractions

/** A fraction with its factors in brackets: the factor that appears on top and below is struck out (cancelled). */
export const CancelFactors = ({ top, bottom, cancelled }: { top: string[]; bottom: string[]; cancelled: string }) => {
  const row = (fs: string[], y: number) => {
    const total = fs.length * 30;
    return fs.map((f, i) => {
      const cx = 60 - total / 2 + i * 30 + 15;
      return (
        <g key={`${y}${i}`}>
          <T x={cx} y={y} color={f === cancelled ? R : LINE} size={7}>{f}</T>
          {f === cancelled ? <line x1={cx - 13} y1={y + 2} x2={cx + 13} y2={y - 8} stroke={R} strokeWidth={1.2} /> : null}
        </g>
      );
    });
  };
  return (
    <Panel h={50} aria={`A fraction with ${top.join(' times ')} on top and ${bottom.join(' times ')} below. The common factor ${cancelled} appears on top and below, so it cancels.`}>
      {row(top, 17)}
      <line x1={14} y1={25} x2={106} y2={25} stroke={LINE} strokeWidth={1} />
      {row(bottom, 40)}
    </Panel>
  );
};
