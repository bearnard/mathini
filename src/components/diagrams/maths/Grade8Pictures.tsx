import { r3 } from '../round';
import { termText, type AlgebraTerm } from './grade8Helpers';

/**
 * Grade 8 lesson pictures (integers, exponents, patterns, algebra) in the style of Grade7Pictures:
 * a dark panel, a 120-unit-wide viewBox, indigo / emerald / amber / rose, at most six labels per
 * picture. Positions come from the numbers passed in, so a picture always matches its worked example.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const minus = (n: number) => (n < 0 ? `−${Math.abs(n)}` : String(n));

// ---------- integers ----------

/** a × b as `times` equal jumps of `step`, starting at 0. Only 0, the answer and one caption are labelled. */
export const RepeatedJumps = ({ step, times, aria, className }: { step: number; times: number; aria: string; className?: string }) => {
  const end = step * times;
  const lo = Math.min(0, end) - 2;
  const hi = Math.max(0, end) + 2;
  const X0 = 8;
  const W = 104;
  const x = (v: number) => r3(X0 + ((v - lo) / (hi - lo)) * W);
  const axisY = 32;
  const ticks = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  return (
    <Panel h={50} aria={aria} className={className}>
      <text x={60} y={9} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={I}>{`${times} jumps of ${minus(step)}`}</text>
      <line x1={X0 - 3} y1={axisY} x2={X0 + W + 3} y2={axisY} stroke={LINE} strokeWidth={0.9} />
      {ticks.map((t) => (
        <line key={t} x1={x(t)} y1={axisY - (t % step === 0 ? 2.4 : 1.2)} x2={x(t)} y2={axisY + (t % step === 0 ? 2.4 : 1.2)} stroke={t === 0 ? A : LINE} strokeWidth={t === 0 ? 1.1 : 0.5} />
      ))}
      {Array.from({ length: times }).map((_, k) => {
        const x1 = x(step * k);
        const x2 = x(step * (k + 1));
        const mid = r3((x1 + x2) / 2);
        return <path key={k} d={`M${x1},${axisY - 2} Q${mid},${axisY - 16} ${x2},${axisY - 2}`} fill="none" stroke={I} strokeWidth={1} />;
      })}
      <circle cx={x(end)} cy={axisY} r={2.3} fill={R} stroke={INK} strokeWidth={0.6} />
      <text x={x(0)} y={axisY + 11} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={A}>0</text>
      <text x={x(end)} y={axisY + 11} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={R}>{minus(end)}</text>
    </Panel>
  );
};

/** A vertical depth line: 0 m at the sea surface, a start depth, a change, and where you end up. */
export const DepthLine = ({ start, change, deepest, className }: { start: number; change: number; deepest: number; className?: string }) => {
  const end = start + change;
  const TOP = 14;
  const STEP = 5.2;
  const y = (v: number) => r3(TOP - v * STEP);
  const bottom = y(deepest);
  const AX = 34;
  const levels = Array.from({ length: -deepest + 1 }, (_, i) => -i);
  return (
    <Panel h={r3(bottom + 8)} className={className} aria={`A depth line in metres with sea level at 0 at the top. A diver starts at ${minus(start)} metres and rises ${Math.abs(change)} metres to ${minus(end)} metres.`}>
      <rect x={0} y={TOP} width={120} height={r3(bottom - TOP + 8)} fill="rgba(56,189,248,0.14)" />
      <line x1={0} y1={TOP} x2={120} y2={TOP} stroke="#38bdf8" strokeWidth={0.9} />
      <text x={6} y={TOP - 4} fontSize={5.6} fontWeight={800} fill="#38bdf8">sea level 0 m</text>
      <line x1={AX} y1={TOP} x2={AX} y2={bottom} stroke={LINE} strokeWidth={0.9} />
      {levels.map((v) => (
        <line key={v} x1={AX - 1.8} y1={y(v)} x2={AX + 1.8} y2={y(v)} stroke={LINE} strokeWidth={0.5} />
      ))}
      <circle cx={AX} cy={y(start)} r={2.3} fill={R} stroke={INK} strokeWidth={0.6} />
      <text x={AX - 5} y={r3(y(start) + 2)} textAnchor="end" fontSize={5.8} fontWeight={800} fill={R}>{`${minus(start)} m`}</text>
      <circle cx={AX} cy={y(end)} r={2.3} fill={E} stroke={INK} strokeWidth={0.6} />
      <text x={AX - 5} y={r3(y(end) + 2)} textAnchor="end" fontSize={5.8} fontWeight={800} fill={E}>{`${minus(end)} m`}</text>
      <path d={`M${AX + 8},${y(start)} V${r3(y(end) + (change > 0 ? 2 : -2))}`} stroke={A} strokeWidth={1.2} />
      <path d={`M${AX + 8},${r3(y(end) + (change > 0 ? 0.5 : -0.5))} l-2,${change > 0 ? 3 : -3} m2,${change > 0 ? -3 : 3} l2,${change > 0 ? 3 : -3}`} fill="none" stroke={A} strokeWidth={1.2} strokeLinecap="round" />
      <text x={AX + 13} y={r3((y(start) + y(end)) / 2 + 2)} fontSize={5.8} fontWeight={800} fill={A}>{`${change > 0 ? 'rises' : 'sinks'} ${Math.abs(change)} m`}</text>
    </Panel>
  );
};

// ---------- exponents ----------

/** base^top ÷ base^bottom written as a fraction of copies of the base; each copy below cancels one above. */
export const CancelPowers = ({ base, top, bottom, className }: { base: number; top: number; bottom: number; className?: string }) => {
  const STEP = 15;
  const RAD = 6.4;
  const row = (count: number, cy: number, crossed: number, color: string) => {
    const x0 = 60 - ((count - 1) * STEP) / 2;
    return Array.from({ length: count }).map((_, k) => {
      const cx = r3(x0 + k * STEP);
      const off = k < crossed;
      return (
        <g key={k} opacity={off ? 0.6 : 1}>
          <circle cx={cx} cy={cy} r={RAD} fill={color} />
          <text x={cx} y={r3(cy + 2.7)} textAnchor="middle" fontSize={7.6} fontWeight={800} fill={INK}>{base}</text>
          {off && <line x1={r3(cx - 7)} y1={r3(cy + 7)} x2={r3(cx + 7)} y2={r3(cy - 7)} stroke={R} strokeWidth={1.1} strokeLinecap="round" />}
        </g>
      );
    });
  };
  const barW = top * STEP + 4;
  return (
    <Panel h={66} className={className} aria={`${top} copies of ${base} on top of a fraction line and ${bottom} copies of ${base} underneath. Each copy underneath cancels one on top, so ${top} − ${bottom} = ${top - bottom} copies of ${base} are left.`}>
      {row(top, 13, bottom, I)}
      <line x1={r3(60 - barW / 2)} y1={26.5} x2={r3(60 + barW / 2)} y2={26.5} stroke={LINE} strokeWidth={1} />
      {row(bottom, 40, bottom, E)}
      <text x={60} y={60} textAnchor="middle" fontSize={6} fontWeight={800} fill={A}>{`${top} − ${bottom} = ${top - bottom} copies of ${base} left`}</text>
    </Panel>
  );
};

// ---------- patterns ----------

/** Square numbers as dot squares 1×1, 2×2, ...; the dots added at each step (the new L) are amber. */
export const DotSquares = ({ upTo, className }: { upTo: number; className?: string }) => {
  const S = 6;
  const GAP = 9;
  const widths = Array.from({ length: upTo }, (_, i) => (i + 1) * S);
  const total = widths.reduce((a, b) => a + b, 0) + GAP * (upTo - 1);
  const base = 10 + upTo * S;
  let cursor = 60 - total / 2;
  const added = Array.from({ length: upTo - 1 }, (_, i) => 2 * (i + 2) - 1);
  return (
    <Panel h={r3(base + 22)} className={className} aria={`Dot squares of side 1 to ${upTo}, holding ${widths.map((_, i) => (i + 1) ** 2).join(', ')} dots. Each new square adds an L of ${added.join(', then ')} amber dots.`}>
      {widths.map((w, i) => {
        const n = i + 1;
        const x0 = cursor;
        cursor += w + GAP;
        return (
          <g key={n}>
            {Array.from({ length: n * n }).map((_, k) => {
              const r = Math.floor(k / n);
              const c = k % n;
              const fresh = n > 1 && (r === n - 1 || c === n - 1);
              return <circle key={k} cx={r3(x0 + c * S + S / 2)} cy={r3(base - (n - r) * S + S / 2)} r={2.1} fill={fresh ? A : I} />;
            })}
            <text x={r3(x0 + w / 2)} y={r3(base + 8)} textAnchor="middle" fontSize={6} fontWeight={800} fill={LINE}>{n * n}</text>
          </g>
        );
      })}
      <text x={60} y={r3(base + 17)} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={A}>{`amber dots added: ${added.map((a) => `+${a}`).join(', ')}`}</text>
    </Panel>
  );
};

/** Terms of the pattern d·n + c as bars of unit cells: d·n cells in indigo, then c cells in amber. */
export const TermBars = ({ d, c, count, className }: { d: number; c: number; count: number; className?: string }) => {
  const maxCells = d * count + c;
  const U = Math.min(5, 92 / maxCells);
  const X0 = 6;
  const ROW = 10;
  const Y0 = 19;
  return (
    <Panel h={Y0 + count * ROW + 4} className={className} aria={`Bars for the terms n = 1 to ${count} of the pattern ${d}n + ${c}. Each bar has ${d} times n indigo cells and ${c} amber cell${c === 1 ? '' : 's'}: ${Array.from({ length: count }, (_, i) => d * (i + 1) + c).join(', ')}. Each bar is ${d} longer than the one before.`}>
      <text x={X0} y={11} fontSize={5.8} fontWeight={800}>
        <tspan fill={I}>{`${d} × n cells`}</tspan>
        <tspan fill={LINE}>{' then '}</tspan>
        <tspan fill={A}>{`+ ${c}`}</tspan>
      </text>
      {Array.from({ length: count }).map((_, i) => {
        const n = i + 1;
        const cells = d * n + c;
        const y = Y0 + i * ROW;
        return (
          <g key={n}>
            {Array.from({ length: cells }).map((__, k) => (
              <rect key={k} x={r3(X0 + k * U)} y={y} width={r3(U - 0.6)} height={6.5} rx={0.6} fill={k < d * n ? I : A} />
            ))}
            <text x={r3(X0 + cells * U + 2.5)} y={y + 5.4} fontSize={5.8} fontWeight={800} fill={LINE}>{cells}</text>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- algebra ----------

/** A word phrase as a bar model: the unknown part, then the known part, and the whole as an expression. */
export const WordBar = ({ unknown, known, total, className }: { unknown: string; known: number; total: string; className?: string }) => (
  <Panel h={44} className={className} aria={`A bar in two parts: an unknown part ${unknown} and a part of ${known}. Together they make ${total}.`}>
    <rect x={8} y={8} width={66} height={13} rx={2} fill={I} />
    <text x={41} y={17} textAnchor="middle" fontSize={7} fontWeight={800} fill={INK}>{unknown}</text>
    <rect x={75} y={8} width={37} height={13} rx={2} fill={E} />
    <text x={93.5} y={17} textAnchor="middle" fontSize={7} fontWeight={800} fill={INK}>{known}</text>
    <path d="M8,25 v2.5 H112 v-2.5 M60,27.5 v2.5" fill="none" stroke={A} strokeWidth={0.9} />
    <text x={60} y={38} textAnchor="middle" fontSize={6.6} fontWeight={800} fill={A}>{total}</text>
  </Panel>
);

/**
 * Algebra tiles for collecting like terms. The top row shows the terms in the order written; the bottom
 * row groups the letter tiles together and the constant tiles together. Letter tiles are tall, unit tiles small.
 */
export const LikeTermTiles = ({ terms, className }: { terms: AlgebraTerm[]; className?: string }) => {
  const TW = 4.6;
  const TH = 16;
  const GAP = 1.3;
  const BIG = 8;
  const letterSum = terms.filter((t) => t.letter).reduce((s, t) => s + t.n, 0);
  const constSum = terms.filter((t) => !t.letter).reduce((s, t) => s + t.n, 0);
  const letter = terms.find((t) => t.letter)?.letter ?? 'x';
  const tiles = (t: AlgebraTerm, x0: number, yBase: number) =>
    Array.from({ length: Math.abs(t.n) }).map((_, k) => {
      const x = r3(x0 + k * (TW + GAP));
      return t.letter ? (
        <rect key={k} x={x} y={yBase - TH} width={TW} height={TH} rx={0.6} fill={I} />
      ) : (
        <rect key={k} x={x} y={yBase - TW} width={TW} height={TW} rx={0.6} fill={t.n < 0 ? R : E} />
      );
    });
  const width = (t: AlgebraTerm) => Math.abs(t.n) * (TW + GAP) - GAP;
  const topW = terms.reduce((s, t) => s + width(t), 0) + BIG * (terms.length - 1);
  let cursor = 60 - topW / 2;
  const grouped: AlgebraTerm[] = [{ n: letterSum, letter }, ...(constSum !== 0 ? [{ n: constSum }] : [])];
  const botW = grouped.reduce((s, t) => s + width(t), 0) + BIG * (grouped.length - 1);
  let cursor2 = 60 - botW / 2;
  const result = grouped.map((t, i) => termText(t, i === 0)).join(' ');
  return (
    <Panel h={76} className={className} aria={`Algebra tiles. Tall tiles are ${letter} tiles, small rose tiles are negative ones. The row ${terms.map((t, i) => termText(t, i === 0)).join(' ')} is regrouped into ${result}.`}>
      {terms.map((t, i) => {
        const x0 = cursor;
        cursor += width(t) + BIG;
        return (
          <g key={i}>
            {tiles(t, x0, 24)}
            <text x={r3(x0 + width(t) / 2)} y={32.5} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={t.letter ? I : t.n < 0 ? R : E}>{termText(t, i === 0)}</text>
          </g>
        );
      })}
      <path d="M60,36 v5 m-2,-2.4 l2,2.4 l2,-2.4" fill="none" stroke={MUTED} strokeWidth={0.9} />
      {grouped.map((t, i) => {
        const x0 = cursor2;
        cursor2 += width(t) + BIG;
        return <g key={i}>{tiles(t, x0, 61)}</g>;
      })}
      <text x={60} y={71} textAnchor="middle" fontSize={7} fontWeight={800} fill={A}>{result}</text>
    </Panel>
  );
};

/** k(x + b) as a rectangle k high, split into a width x (unknown) and a width b: areas kx and kb. */
export const ExpandArea = ({ k, letter, b, className }: { k: number; letter: string; b: number; className?: string }) => {
  const U = 6;
  const H = k * U;
  const X0 = 16;
  const XW = 48;
  const Y0 = 13;
  const bx = X0 + XW;
  return (
    <Panel h={Y0 + H + 16} className={className} aria={`A rectangle ${k} units high, split into a part ${letter} wide and a part ${b} units wide. The parts have areas ${k}${letter} and ${k * b}, so ${k}(${letter} + ${b}) = ${k}${letter} + ${k * b}.`}>
      <rect x={X0} y={Y0} width={XW} height={H} fill="rgba(129,140,248,0.35)" stroke={I} strokeWidth={0.9} />
      {Array.from({ length: k * b }).map((_, j) => (
        <rect key={j} x={r3(bx + (j % b) * U)} y={r3(Y0 + Math.floor(j / b) * U)} width={U} height={U} fill="rgba(52,211,153,0.35)" stroke={E} strokeWidth={0.6} />
      ))}
      <text x={X0 - 5} y={r3(Y0 + H / 2 + 2)} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={A}>{k}</text>
      <text x={r3(X0 + XW / 2)} y={Y0 - 3} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={I}>{letter}</text>
      <text x={r3(bx + (b * U) / 2)} y={Y0 - 3} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={E}>{b}</text>
      <text x={r3(X0 + XW / 2)} y={r3(Y0 + H / 2 + 2.4)} textAnchor="middle" fontSize={7.4} fontWeight={800} fill={LINE}>{`${k}${letter}`}</text>
      <text x={r3(bx + (b * U) / 2 + 12 + 3)} y={r3(Y0 + H / 2 + 2.4)} textAnchor="start" fontSize={7.4} fontWeight={800} fill={E}>{`= ${k * b}`}</text>
      <text x={60} y={r3(Y0 + H + 11)} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={LINE}>{`${k}(${letter} + ${b}) = ${k}${letter} + ${k * b}`}</text>
    </Panel>
  );
};

export interface PanTile {
  text: string;
  kind: 'x' | 'num' | 'neg';
  /** Drawn faded and crossed out: taken off both sides. */
  struck?: boolean;
}

/** An equation as a level balance: the tiles on each pan are the terms of each side. */
export const EquationBalance = ({ left, right, caption, aria, className }: { left: PanTile[]; right: PanTile[]; caption?: string; aria: string; className?: string }) => {
  const fill = { x: I, num: E, neg: R };
  const width = (t: PanTile) => (t.kind === 'x' ? 7.4 : Math.max(9, t.text.length * 3.8 + 2.4));
  const pan = (items: PanTile[], cx: number) => {
    const total = items.reduce((s, t) => s + width(t), 0) + 1.2 * (items.length - 1);
    let x = cx - total / 2;
    return (
      <g>
        <path d={`M${cx},18 L${cx - 20},44 M${cx},18 L${cx + 20},44`} stroke={MUTED} strokeWidth={0.6} />
        <path d={`M${cx - 23},44 H${cx + 23} Q${cx + 21},51 ${cx},51 Q${cx - 21},51 ${cx - 23},44 Z`} fill="#475569" />
        {items.map((t, i) => {
          const w = width(t);
          const tx = r3(x);
          x += w + 1.2;
          return (
            <g key={i} opacity={t.struck ? 0.4 : 1}>
              <rect x={tx} y={32} width={w} height={11} rx={1.5} fill={fill[t.kind]} />
              <text x={r3(tx + w / 2)} y={40} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={INK}>{t.text}</text>
              {t.struck && <line x1={tx} y1={43} x2={r3(tx + w)} y2={32} stroke={R} strokeWidth={1.2} />}
            </g>
          );
        })}
      </g>
    );
  };
  return (
    <Panel h={caption ? 70 : 60} aria={aria} className={className}>
      <path d="M60,18 L55,56 H65 Z" fill="#64748b" />
      <path d="M27,18 H93" stroke={LINE} strokeWidth={1.8} strokeLinecap="round" />
      <circle cx={60} cy={18} r={2.4} fill={A} />
      {pan(left, 27)}
      {pan(right, 93)}
      <text x={60} y={10} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={MUTED}>level: both sides are equal</text>
      {caption && <text x={60} y={65} textAnchor="middle" fontSize={6} fontWeight={800} fill={A}>{caption}</text>}
    </Panel>
  );
};

/** k equal groups that together make a total: k(…) = total, so one group is total ÷ k. */
export const GroupBars = ({ groups, label, total, className }: { groups: number; label: string; total: number; className?: string }) => {
  const X0 = 8;
  const W = 104;
  const gw = W / groups;
  return (
    <Panel h={53} className={className} aria={`${groups} equal bars, each labelled ${label}, that together make ${total}. One bar is ${total} ÷ ${groups} = ${total / groups}.`}>
      {Array.from({ length: groups }).map((_, i) => (
        <g key={i}>
          <rect x={r3(X0 + i * gw + 0.6)} y={8} width={r3(gw - 1.2)} height={13} rx={2} fill={I} />
          <text x={r3(X0 + i * gw + gw / 2)} y={16.6} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={INK}>{label}</text>
        </g>
      ))}
      <path d={`M${X0},25 v2.5 H${X0 + W} v-2.5 M60,27.5 v2.5`} fill="none" stroke={E} strokeWidth={0.9} />
      <text x={60} y={37} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={E}>{`total ${total}`}</text>
      <text x={60} y={47} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={A}>{`one bar: ${total} ÷ ${groups} = ${total / groups}`}</text>
    </Panel>
  );
};
