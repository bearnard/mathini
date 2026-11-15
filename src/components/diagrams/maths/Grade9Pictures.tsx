import { r3 } from '../round';
import { PICTURE_COLORS } from './Grade7Pictures';
import { sup } from './grade7Helpers';
import { formatTerms, num, type Term } from './grade9Helpers';

/**
 * Grade 9 lesson pictures (Term 1 and Term 2 area) in the style of Grade7Pictures: a dark panel, a
 * 120-unit-wide viewBox, indigo / emerald / amber / rose, and at most six labels per picture. Every
 * length and position is computed from the numbers passed in, so a picture always matches its
 * worked example.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const FILL = '#1e293b';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const Label = ({ x, y, children, color = LINE, size = 5.8, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>
    {children}
  </text>
);

// ---------- algebra ----------

const TILE: Record<string, { w: number; color: string }> = { x: { w: 12, color: I }, y: { w: 6, color: E }, '': { w: 3.5, color: A } };

/** Algebra tiles: each term drawn as |coefficient| tiles (x long, y short), negative tiles outlined in rose and crossed out with one positive tile of the same kind. */
export const TermTiles = ({ before, after, aria, className }: { before: Term[]; after: Term[]; aria: string; className?: string }) => {
  const row = (terms: Term[], y: number, strikeNegatives: boolean) => {
    const tiles: { x: number; w: number; color: string; neg: boolean; v: string }[] = [];
    let x = 0;
    terms.forEach(([c, v], i) => {
      if (i > 0) x += 4;
      for (let k = 0; k < Math.abs(c); k++) {
        tiles.push({ x, w: TILE[v].w, color: TILE[v].color, neg: c < 0, v });
        x += TILE[v].w + 1.5;
      }
    });
    const width = x - 1.5;
    const x0 = 60 - width / 2;
    // each negative tile cancels the first positive tile of the same kind (a zero pair)
    const cancelled = new Set<number>();
    if (strikeNegatives)
      tiles.forEach((t, i) => {
        if (!t.neg) return;
        const j = tiles.findIndex((u, k) => !u.neg && u.v === t.v && !cancelled.has(k));
        if (j >= 0) {
          cancelled.add(j);
          cancelled.add(i);
        }
      });
    return tiles.map((t, i) => (
      <g key={i}>
        <rect x={r3(x0 + t.x)} y={y} width={t.w} height={6} rx={1} fill={t.neg ? 'none' : t.color} stroke={t.neg ? R : t.color} strokeWidth={0.9} opacity={cancelled.has(i) ? 0.45 : 1} />
        {cancelled.has(i) && <line x1={r3(x0 + t.x - 0.5)} y1={y + 7} x2={r3(x0 + t.x + t.w + 0.5)} y2={y - 1} stroke={R} strokeWidth={0.9} />}
      </g>
    ));
  };
  return (
    <Panel h={64} aria={aria} className={className}>
      <rect x={34} y={5} width={12} height={5} rx={1} fill={I} />
      <Label x={49} y={9.4} anchor="start" color={I} size={5.4}>x</Label>
      <rect x={66} y={5} width={6} height={5} rx={1} fill={E} />
      <Label x={75} y={9.4} anchor="start" color={E} size={5.4}>y</Label>
      {row(before, 16, true)}
      <Label x={60} y={30}>{formatTerms(before)}</Label>
      {row(after, 38, false)}
      <Label x={60} y={56} color={A}>{`= ${formatTerms(after)}`}</Label>
    </Panel>
  );
};

export interface AreaPart {
  label: string;
  /** Drawn length in units (x is given a length so the picture can be drawn). */
  size: number;
}

/** An area model: a rectangle cut into parts along both edges; each cell is one product. */
export const AreaModel = ({ top, left, cells, topLabel, leftLabel, aria, className }: { top: AreaPart[]; left: AreaPart[]; cells: string[][]; topLabel: string; leftLabel: string; aria: string; className?: string }) => {
  const sumTop = top.reduce((s, p) => s + p.size, 0);
  const sumLeft = left.reduce((s, p) => s + p.size, 0);
  const s = Math.min(78 / sumTop, 48 / sumLeft);
  const W = sumTop * s;
  const H = sumLeft * s;
  const x0 = 26 + (78 - W) / 2;
  const y0 = 16;
  const isVar = (p: AreaPart) => /[a-z]/.test(p.label);
  let yy = y0;
  return (
    <Panel h={y0 + H + 8} aria={aria} className={className}>
      <Label x={x0 + W / 2} y={9} color={A}>{topLabel}</Label>
      <Label x={x0 - 4} y={y0 + H / 2 + 2} color={A} anchor="end">{leftLabel}</Label>
      {left.map((lp, ri) => {
        const y = yy;
        yy += lp.size * s;
        let xx = x0;
        return top.map((tp, ci) => {
          const x = xx;
          xx += tp.size * s;
          const vars = Number(isVar(lp)) + Number(isVar(tp));
          const color = vars === 2 ? I : vars === 1 ? E : A;
          return (
            <g key={`${ri}-${ci}`}>
              <rect x={r3(x)} y={r3(y)} width={r3(tp.size * s)} height={r3(lp.size * s)} fill={color} fillOpacity={0.28} stroke={color} strokeWidth={0.9} />
              <Label x={x + (tp.size * s) / 2} y={y + (lp.size * s) / 2 + 2.2} size={6.2}>{cells[ri][ci]}</Label>
            </g>
          );
        });
      })}
      {/* ticks where the parts meet, on the top and left edges */}
      {top.slice(0, -1).map((_, i) => {
        const x = x0 + top.slice(0, i + 1).reduce((a, p) => a + p.size, 0) * s;
        return <line key={`t${i}`} x1={r3(x)} y1={y0 - 3} x2={r3(x)} y2={y0} stroke={A} strokeWidth={0.9} />;
      })}
      {left.slice(0, -1).map((_, i) => {
        const y = y0 + left.slice(0, i + 1).reduce((a, p) => a + p.size, 0) * s;
        return <line key={`l${i}`} x1={x0 - 3} y1={r3(y)} x2={x0} y2={r3(y)} stroke={A} strokeWidth={0.9} />;
      })}
    </Panel>
  );
};

/** A chain of operations: start value, then each operation applied in turn (box, arrow with the operation, box ...). */
export const OperationChain = ({ start, steps, caption, aria, className }: { start: string; steps: { op: string; value: string }[]; caption?: string; aria: string; className?: string }) => {
  const n = steps.length + 1;
  const BOX = 18;
  const GAP = Math.min(24, (112 - n * BOX) / (n - 1));
  const width = n * BOX + (n - 1) * GAP;
  const x0 = 60 - width / 2;
  const bx = (i: number) => x0 + i * (BOX + GAP);
  const values = [start, ...steps.map((s) => s.value)];
  return (
    <Panel h={caption ? 40 : 30} aria={aria} className={className}>
      {values.map((v, i) => (
        <g key={i}>
          <rect x={r3(bx(i))} y={10} width={BOX} height={12} rx={2} fill={i === n - 1 ? 'rgba(52,211,153,0.2)' : FILL} stroke={i === n - 1 ? E : I} strokeWidth={0.9} />
          <Label x={bx(i) + BOX / 2} y={18.2} size={6.2} color={i === n - 1 ? E : LINE}>{v}</Label>
        </g>
      ))}
      {steps.map((s, i) => {
        const x1 = bx(i) + BOX + 1.5;
        const x2 = bx(i + 1) - 1.5;
        return (
          <g key={i}>
            <line x1={r3(x1)} y1={16} x2={r3(x2)} y2={16} stroke={A} strokeWidth={0.9} />
            <path d={`M${r3(x2)},16 l-2.4,-1.4 v2.8 z`} fill={A} />
            <Label x={(x1 + x2) / 2} y={8} size={5.8} color={A}>{s.op}</Label>
          </g>
        );
      })}
      {caption && <Label x={60} y={34} size={5.4} color={MUTED}>{caption}</Label>}
    </Panel>
  );
};

/** A bar model: the whole on top, its parts underneath, drawn to scale. */
export const PartWholeBar = ({ total, parts, aria, className }: { total: { label: string; size: number }; parts: { label: string; size: number; unknown?: boolean }[]; aria: string; className?: string }) => {
  const W = 100;
  const x0 = 10;
  const s = W / total.size;
  let x = x0;
  return (
    <Panel h={44} aria={aria} className={className}>
      <rect x={x0} y={6} width={W} height={12} rx={1.5} fill="rgba(129,140,248,0.25)" stroke={I} strokeWidth={0.9} />
      <Label x={60} y={14.2} size={6.2}>{total.label}</Label>
      {parts.map((p, i) => {
        const px = x;
        x += p.size * s;
        const c = p.unknown ? A : E;
        return (
          <g key={i}>
            <rect x={r3(px)} y={24} width={r3(p.size * s)} height={12} rx={1.5} fill={p.unknown ? 'rgba(251,191,36,0.2)' : 'rgba(52,211,153,0.25)'} stroke={c} strokeWidth={0.9} />
            <Label x={px + (p.size * s) / 2} y={32.2} size={6.2} color={c}>{p.label}</Label>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- exponents ----------

/** n copies of a product of letters, e.g. (a²b³)² as two rows of a a b b b; the caption counts each letter. */
export const LetterCopies = ({ letters, copies, className }: { letters: { ch: string; count: number }[]; copies: number; className?: string }) => {
  const colors = [I, E, A];
  const per = letters.reduce((s, l) => s + l.count, 0);
  const step = Math.min(12, 84 / per);
  const startX = 30;
  const ROW = 14;
  const h = 8 + copies * ROW + letters.length * 8 + 2;
  const inside = letters.map((l) => `${l.ch}${sup(l.count)}`).join('');
  return (
    <Panel
      h={h}
      className={className}
      aria={`${copies} copies of ${letters.map((l) => `${l.count} ${l.ch}'s`).join(' and ')}. ${letters.map((l) => `${l.ch} appears ${l.count} times ${copies} = ${l.count * copies} times`).join('; ')}.`}
    >
      {Array.from({ length: copies }).map((_, c) => {
        const y = 8 + c * ROW;
        let k = 0;
        return (
          <g key={c}>
            <Label x={5} y={y + 2.2} anchor="start" size={6} color={MUTED}>{`${inside}`}</Label>
            {letters.map((l, li) =>
              Array.from({ length: l.count }).map((__, j) => {
                const cx = r3(startX + (k++) * step + li * 3);
                return (
                  <g key={`${li}-${j}`}>
                    <circle cx={cx} cy={y} r={4.6} fill={colors[li % 3]} />
                    <text x={cx} y={y + 2} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={INK}>{l.ch}</text>
                  </g>
                );
              }),
            )}
          </g>
        );
      })}
      {letters.map((l, li) => (
        <Label key={li} x={60} y={8 + copies * ROW + li * 8 + 1} size={6.2} color={colors[li % 3]}>
          {`${l.ch}: ${l.count} × ${copies} = ${l.count * copies}, so ${l.ch}${sup(l.count * copies)}`}
        </Label>
      ))}
    </Panel>
  );
};

/** Powers of a base stepping down past 0 into negative exponents: each step down divides by the base. */
export const FractionLadder = ({ rows, base, className }: { rows: { exp: number; n: number; d: number }[]; base: number; className?: string }) => {
  const ROW = 11;
  const h = 6 + rows.length * ROW + 10;
  const supSigned = (e: number) => (e < 0 ? `⁻${sup(-e)}` : sup(e));
  return (
    <Panel h={h} className={className} aria={`Powers of ${base} from ${base} to the power ${rows[0].exp} down to ${base} to the power ${rows[rows.length - 1].exp}. ${rows.map((r) => `${base} to the power ${r.exp} is ${r.d === 1 ? r.n : `1 over ${r.d}`}`).join('; ')}. Each step down divides by ${base}.`}>
      {rows.map((r, i) => {
        const y = 5 + i * ROW;
        const neg = r.exp < 0;
        const zero = r.exp === 0;
        return (
          <g key={r.exp}>
            <rect x={26} y={y} width={68} height={ROW - 2.2} rx={2} fill={zero ? 'rgba(251,191,36,0.2)' : neg ? 'rgba(251,113,133,0.15)' : FILL} stroke={zero ? A : neg ? R : '#475569'} strokeWidth={0.8} />
            <Label x={60} y={y + ROW - 4.6} size={6} color={zero ? A : neg ? R : LINE}>{`${base}${supSigned(r.exp)} = ${r.d === 1 ? r.n : `1/${r.d}`}`}</Label>
          </g>
        );
      })}
      <Label x={60} y={h - 3.5} size={5.6} color={E}>{`each step down: ÷ ${base}`}</Label>
    </Panel>
  );
};

// ---------- number systems ----------

/** Nested number sets: natural inside whole inside integers inside rational; irrational numbers outside. */
export const NumberSets = ({ className, examples }: { className?: string; examples: { rational: string; integer: string; whole: string; natural: string; irrational: string } }) => {
  const boxes = [
    { x: 4, y: 4, w: 112, h: 62, label: `Rational: ${examples.rational}`, c: I },
    { x: 10, y: 15, w: 100, h: 45, label: `Integers: ${examples.integer}`, c: E },
    { x: 16, y: 26, w: 88, h: 28, label: `Whole: ${examples.whole}`, c: A },
    { x: 22, y: 37, w: 76, h: 12, label: `Natural: ${examples.natural}`, c: LINE },
  ];
  return (
    <Panel
      h={90}
      className={className}
      aria={`Nested number sets. Natural numbers such as ${examples.natural} sit inside the whole numbers, which add ${examples.whole}. Whole numbers sit inside the integers, which add negatives such as ${examples.integer}. Integers sit inside the rational numbers, which add fractions and decimals such as ${examples.rational}. Irrational numbers such as ${examples.irrational} are outside the rational numbers.`}
    >
      {boxes.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={3} fill={b.c} fillOpacity={0.08} stroke={b.c} strokeWidth={0.9} />
          <Label x={b.x + 3} y={b.y + 7.4} anchor="start" size={5.8} color={b.c}>{b.label}</Label>
        </g>
      ))}
      <rect x={4} y={70} width={112} height={16} rx={3} fill={R} fillOpacity={0.08} stroke={R} strokeWidth={0.9} strokeDasharray="2 1.4" />
      <Label x={7} y={80} anchor="start" size={5.8} color={R}>{`Irrational: ${examples.irrational}`}</Label>
    </Panel>
  );
};

/** The four sign rules for × and ÷: same signs give +, different signs give −. */
export const SignRules = ({ className }: { className?: string }) => {
  const rows = [
    { t: '(+) × (+) = +', c: E },
    { t: '(−) × (−) = +', c: E },
    { t: '(+) × (−) = −', c: R },
    { t: '(−) × (+) = −', c: R },
  ];
  return (
    <Panel h={58} className={className} aria="The sign rules for multiplying and dividing. Positive times positive is positive. Negative times negative is positive. Positive times negative is negative. Negative times positive is negative. Division follows the same rules.">
      {rows.map((r, i) => {
        const col = i % 2;
        const y = 6 + Math.floor(i / 2) * 18 + (col === 0 ? 0 : 0);
        const x = col === 0 ? 4 : 62;
        return (
          <g key={r.t}>
            <rect x={x} y={y} width={54} height={14} rx={2.5} fill={r.c} fillOpacity={0.14} stroke={r.c} strokeWidth={0.9} />
            <Label x={x + 27} y={y + 9.2} size={6.2} color={r.c}>{r.t}</Label>
          </g>
        );
      })}
      <Label x={60} y={52} size={5.6} color={MUTED}>÷ follows the same sign rules</Label>
    </Panel>
  );
};

/** The order of operations as a ladder from first to last. */
export const OperationOrder = ({ className }: { className?: string }) => {
  const rungs = ['Brackets', 'Powers and roots', '× and ÷, left to right', '+ and −, left to right'];
  const colors = [A, R, I, E];
  return (
    <Panel h={60} className={className} aria="The order of operations, from first to last: brackets; then powers and roots; then multiplication and division from left to right; then addition and subtraction from left to right.">
      {rungs.map((t, i) => {
        const y = 4 + i * 13.5;
        return (
          <g key={t}>
            <circle cx={14} cy={y + 5.5} r={4.6} fill={colors[i]} />
            <text x={14} y={y + 7.6} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={INK}>{i + 1}</text>
            <rect x={22} y={y} width={92} height={11} rx={2} fill={colors[i]} fillOpacity={0.12} stroke={colors[i]} strokeWidth={0.8} />
            <Label x={26} y={y + 7.6} anchor="start" size={6} color={colors[i]}>{t}</Label>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- patterns ----------

/** Terms of a pattern in boxes, with a hop between each pair; the caption names the constant step. */
export const TermChain = ({ terms, caption, aria, className }: { terms: string[]; caption: string; aria: string; className?: string }) => {
  const n = terms.length;
  const BOX = 15;
  const GAP = Math.min(12, (110 - n * BOX) / (n - 1));
  const width = n * BOX + (n - 1) * GAP;
  const x0 = 60 - width / 2;
  const bx = (i: number) => x0 + i * (BOX + GAP);
  return (
    <Panel h={40} aria={aria} className={className}>
      {terms.map((t, i) => (
        <g key={i}>
          <rect x={r3(bx(i))} y={16} width={BOX} height={11} rx={2} fill={t === '?' ? 'rgba(251,191,36,0.2)' : FILL} stroke={t === '?' ? A : I} strokeWidth={0.9} />
          <Label x={bx(i) + BOX / 2} y={23.6} size={6} color={t === '?' ? A : LINE}>{t}</Label>
        </g>
      ))}
      {terms.slice(1).map((_, i) => {
        const x1 = bx(i) + BOX / 2;
        const x2 = bx(i + 1) + BOX / 2;
        return (
          <g key={i}>
            <path d={`M${r3(x1)},15 Q${r3((x1 + x2) / 2)},5 ${r3(x2)},15`} fill="none" stroke={E} strokeWidth={0.9} />
            <path d={`M${r3(x2)},15 l-2.6,-1.6 m2.6,1.6 l-0.2,-3`} fill="none" stroke={E} strokeWidth={0.9} strokeLinecap="round" />
          </g>
        );
      })}
      <Label x={60} y={36} size={5.8} color={E}>{caption}</Label>
    </Panel>
  );
};

/** Bars whose heights are the terms of a pattern, drawn to scale. */
export const TermBars = ({ terms, caption, aria, className }: { terms: number[]; caption: string; aria: string; className?: string }) => {
  const max = Math.max(...terms);
  const H = 40;
  const base = 52;
  const BW = 14;
  const gap = (100 - terms.length * BW) / (terms.length - 1);
  return (
    <Panel h={66} aria={aria} className={className}>
      <line x1={8} y1={base} x2={112} y2={base} stroke={MUTED} strokeWidth={0.6} />
      {terms.map((t, i) => {
        const h = (t / max) * H;
        const x = 10 + i * (BW + gap);
        return (
          <g key={i}>
            <rect x={r3(x)} y={r3(base - h)} width={BW} height={r3(h)} rx={1} fill={I} fillOpacity={0.7} stroke={I} strokeWidth={0.6} />
            <Label x={x + BW / 2} y={base - h - 2} size={5.8}>{num(t)}</Label>
          </g>
        );
      })}
      <Label x={60} y={61.5} size={5.8} color={E}>{caption}</Label>
    </Panel>
  );
};

/** Two relationships plotted from their rules for whole x from 0 up: a straight line and a curve. */
export const LineOrCurve = ({ linear, curve, xs, className }: { linear: { fn: (x: number) => number; label: string }; curve: { fn: (x: number) => number; label: string }; xs: number[]; className?: string }) => {
  const xMax = Math.max(...xs);
  const ys = xs.flatMap((x) => [linear.fn(x), curve.fn(x)]);
  const yMax = Math.max(...ys);
  const X0 = 14;
  const Y0 = 64;
  const W = 92;
  const H = 54;
  const px = (x: number) => r3(X0 + (x / xMax) * W);
  const py = (y: number) => r3(Y0 - (y / yMax) * H);
  const fine = Array.from({ length: 31 }, (_, i) => (i / 30) * xMax);
  const path = (fn: (x: number) => number) => fine.map((x, i) => `${i ? 'L' : 'M'}${px(x)},${py(fn(x))}`).join(' ');
  return (
    <Panel
      h={74}
      className={className}
      aria={`Points of ${linear.label} and ${curve.label} for x = ${xs.join(', ')}. ${linear.label} gives ${xs.map(linear.fn).join(', ')}: equal steps, a straight line. ${curve.label} gives ${xs.map(curve.fn).join(', ')}: growing steps, a curve.`}
    >
      <line x1={X0} y1={Y0} x2={X0 + W + 3} y2={Y0} stroke={MUTED} strokeWidth={0.6} />
      <line x1={X0} y1={Y0} x2={X0} y2={Y0 - H - 4} stroke={MUTED} strokeWidth={0.6} />
      {xs.map((x) => (
        <line key={x} x1={px(x)} y1={Y0} x2={px(x)} y2={Y0 + 1.6} stroke={MUTED} strokeWidth={0.6} />
      ))}
      <Label x={X0 + W + 4} y={Y0 + 6} size={5.4} color={MUTED}>x</Label>
      <Label x={X0 - 5} y={Y0 - H} size={5.4} color={MUTED}>y</Label>
      <path d={path(linear.fn)} fill="none" stroke={E} strokeWidth={0.9} />
      <path d={path(curve.fn)} fill="none" stroke={R} strokeWidth={0.9} strokeDasharray="2 1.2" />
      {xs.map((x) => (
        <g key={x}>
          <circle cx={px(x)} cy={py(linear.fn(x))} r={1.6} fill={E} />
          <circle cx={px(x)} cy={py(curve.fn(x))} r={1.6} fill={R} />
        </g>
      ))}
      <line x1={20} y1={9} x2={27} y2={9} stroke={E} strokeWidth={1} />
      <Label x={29} y={11} size={5.8} color={E} anchor="start">{linear.label}</Label>
      <line x1={20} y1={18} x2={27} y2={18} stroke={R} strokeWidth={1} strokeDasharray="2 1.2" />
      <Label x={29} y={20} size={5.8} color={R} anchor="start">{curve.label}</Label>
    </Panel>
  );
};

// ---------- area and perimeter ----------

/** A rectangle drawn to scale with its length and breadth marked. */
export const RectangleSides = ({ length, breadth, unit, caption, className }: { length: number; breadth: number; unit: string; caption: string; className?: string }) => {
  const s = Math.min(84 / length, 34 / breadth);
  const W = length * s;
  const H = breadth * s;
  const x0 = 60 - W / 2 - 4;
  const y0 = 12;
  return (
    <Panel h={y0 + H + 16} className={className} aria={`A rectangle ${num(length)} ${unit} long and ${num(breadth)} ${unit} wide. ${caption}.`}>
      <rect x={r3(x0)} y={y0} width={r3(W)} height={r3(H)} fill={I} fillOpacity={0.22} stroke={I} strokeWidth={1} />
      <Label x={x0 + W / 2} y={y0 - 3} color={A}>{`${num(length)} ${unit}`}</Label>
      <Label x={x0 + W + 3} y={y0 + H / 2 + 2} color={A} anchor="start">{`${num(breadth)} ${unit}`}</Label>
      <Label x={60} y={y0 + H + 10} color={E}>{caption}</Label>
    </Panel>
  );
};

/** A parallelogram cut along a diagonal into two equal triangles, with the perpendicular height dashed. */
export const ParallelogramHalves = ({ base, height, slant, unit, className }: { base: number; height: number; slant: number; unit: string; className?: string }) => {
  const s = Math.min(80 / (base + slant), 44 / height);
  const B = base * s;
  const H = height * s;
  const D = slant * s;
  const x0 = 60 - (B + D) / 2 - 12;
  const yb = 8 + H;
  const p = [
    [x0, yb],
    [x0 + B, yb],
    [x0 + B + D, yb - H],
    [x0 + D, yb - H],
  ].map(([x, y]) => `${r3(x)},${r3(y)}`);
  return (
    <Panel
      h={yb + 16}
      className={className}
      aria={`A parallelogram with base ${num(base)} ${unit} and perpendicular height ${num(height)} ${unit}, cut along a diagonal into two equal triangles. The parallelogram is base times height; each triangle is half of that.`}
    >
      <polygon points={`${p[0]} ${p[1]} ${p[2]}`} fill={I} fillOpacity={0.3} stroke={I} strokeWidth={0.9} />
      <polygon points={`${p[0]} ${p[2]} ${p[3]}`} fill={E} fillOpacity={0.3} stroke={E} strokeWidth={0.9} />
      <line x1={r3(x0 + B)} y1={r3(yb)} x2={r3(x0 + B + D)} y2={r3(yb)} stroke={MUTED} strokeWidth={0.6} strokeDasharray="1.6 1.2" />
      <line x1={r3(x0 + B + D)} y1={r3(yb - H)} x2={r3(x0 + B + D)} y2={r3(yb)} stroke={A} strokeWidth={0.9} strokeDasharray="1.6 1.2" />
      <path d={`M${r3(x0 + B + D)},${r3(yb - 3)} h-3 v3`} fill="none" stroke={A} strokeWidth={0.7} />
      <Label x={x0 + B + D + 3} y={yb - H / 2 + 2} color={A} anchor="start">{`h = ${num(height)} ${unit}`}</Label>
      <Label x={x0 + B / 2} y={yb + 9} color={A}>{`b = ${num(base)} ${unit}`}</Label>
    </Panel>
  );
};

/** A circle drawn with its radius and diameter marked. */
export const CircleRadius = ({ r, unit, caption, className }: { r: number; unit: string; caption: string; className?: string }) => {
  const R0 = 24;
  const cx = 48;
  const cy = 30;
  return (
    <Panel h={70} className={className} aria={`A circle with centre marked and radius ${num(r)} ${unit}; the diameter is ${num(2 * r)} ${unit}. ${caption}.`}>
      <circle cx={cx} cy={cy} r={R0} fill={I} fillOpacity={0.18} stroke={I} strokeWidth={1} />
      <line x1={cx - R0} y1={cy} x2={cx} y2={cy} stroke={MUTED} strokeWidth={0.7} strokeDasharray="1.6 1.2" />
      <line x1={cx} y1={cy} x2={cx + R0} y2={cy} stroke={A} strokeWidth={1} />
      <circle cx={cx} cy={cy} r={1.4} fill={LINE} />
      <Label x={cx + R0 + 3} y={cy + 2} color={A} size={5.8} anchor="start">{`r = ${num(r)} ${unit}`}</Label>
      <Label x={cx - R0 / 2} y={cy - 2.5} color={MUTED} size={5.4}>{`d = ${num(2 * r)} ${unit}`}</Label>
      <Label x={60} y={64} color={E}>{caption}</Label>
    </Panel>
  );
};

/** A rectangle with a triangle on top (a house shape): the two areas written inside each part. */
export const RectangleWithRoof = ({ width, height, roof, unit, className }: { width: number; height: number; roof: number; unit: string; className?: string }) => {
  const s = Math.min(70 / width, 54 / (height + roof));
  const W = width * s;
  const H = height * s;
  const T = roof * s;
  const x0 = 60 - W / 2 - 6;
  const yTop = 6;
  const yr = yTop + T;
  const rectArea = width * height;
  const triArea = (width * roof) / 2;
  return (
    <Panel
      h={yr + H + 12}
      className={className}
      aria={`A composite shape: a rectangle ${width} by ${height} ${unit} with a triangle of base ${width} ${unit} and height ${roof} ${unit} on top. Rectangle ${rectArea} square ${unit}, triangle ${triArea} square ${unit}.`}
    >
      <polygon points={`${r3(x0)},${r3(yr)} ${r3(x0 + W)},${r3(yr)} ${r3(x0 + W / 2)},${yTop}`} fill={E} fillOpacity={0.28} stroke={E} strokeWidth={0.9} />
      <rect x={r3(x0)} y={r3(yr)} width={r3(W)} height={r3(H)} fill={I} fillOpacity={0.28} stroke={I} strokeWidth={0.9} />
      <line x1={r3(x0 + W / 2)} y1={yTop} x2={r3(x0 + W / 2)} y2={r3(yr)} stroke={A} strokeWidth={0.8} strokeDasharray="1.6 1.2" />
      <Label x={x0 + W / 2 + 2} y={yr - 3} color={A} anchor="start" size={5.4}>{`${roof} ${unit}`}</Label>
      <Label x={x0 + W / 2} y={yr + H / 2 + 2} size={6}>{`${rectArea} ${unit}²`}</Label>
      <Label x={x0 + W + 3} y={yr + H / 2 + 2} color={A} anchor="start">{`${height} ${unit}`}</Label>
      <Label x={x0 + W / 2} y={yr + H + 8} color={A}>{`${width} ${unit}`}</Label>
      <Label x={x0 + W + 3} y={yTop + T / 2 + 2} color={E} anchor="start" size={5.6}>{`${triArea} ${unit}²`}</Label>
    </Panel>
  );
};

/** One square unit cut into a grid of smaller units: 1 cm² = 10 × 10 mm². */
export const UnitSquareGrid = ({ split, big, small, className }: { split: number; big: string; small: string; className?: string }) => {
  const S = 44;
  const x0 = 38;
  const y0 = 10;
  const c = S / split;
  return (
    <Panel h={y0 + S + 16} className={className} aria={`A square 1 ${big} by 1 ${big}, cut into ${split} by ${split} small squares of 1 ${small} by 1 ${small}: ${split * split} square ${small} in one square ${big}.`}>
      {Array.from({ length: split * split }).map((_, k) => (
        <rect key={k} x={r3(x0 + (k % split) * c)} y={r3(y0 + Math.floor(k / split) * c)} width={r3(c)} height={r3(c)} fill={(Math.floor(k / split) + (k % split)) % 2 ? 'rgba(129,140,248,0.35)' : 'rgba(129,140,248,0.15)'} stroke={I} strokeWidth={0.2} />
      ))}
      <rect x={x0} y={y0} width={S} height={S} fill="none" stroke={I} strokeWidth={1} />
      <Label x={x0 + S / 2} y={y0 - 3} color={A} size={5.6}>{`1 ${big} = ${split} ${small}`}</Label>
      <Label x={x0 + S + 3} y={y0 + S / 2 + 2} color={A} anchor="start" size={5.6}>{`${split} ${small}`}</Label>
      <Label x={60} y={y0 + S + 10} color={E}>{`1 ${big}² = ${split} × ${split} = ${split * split} ${small}²`}</Label>
    </Panel>
  );
};
