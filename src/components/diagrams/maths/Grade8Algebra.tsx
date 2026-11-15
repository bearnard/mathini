import { r3 } from '../round';

/**
 * Grade 8 Algebraic Expressions pictures (term 2) in the style of Grade7Pictures: a dark panel, a
 * 120-unit-wide viewBox, indigo / emerald / amber / rose, at most six labels. Sizes come from the
 * numbers passed in.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';
const GROUP = [I, A, E, R];

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

export interface Card {
  text: string;
  /** Cards in the same group are like terms and share a colour; null is a greyed-out card. */
  group: number | null;
}

const cardW = (c: Card) => Math.max(14, c.text.length * 4.2 + 5);

const CardRow = ({ cards, y }: { cards: Card[]; y: number }) => {
  const total = cards.reduce((s, c) => s + cardW(c), 0) + 3 * (cards.length - 1);
  let x = 60 - total / 2;
  return (
    <g>
      {cards.map((c, i) => {
        const w = cardW(c);
        const cx = x;
        x += w + 3;
        const fill = c.group === null ? '#334155' : GROUP[c.group % GROUP.length];
        return (
          <g key={i}>
            <rect x={r3(cx)} y={y} width={r3(w)} height={13} rx={2.5} fill={fill} />
            <text x={r3(cx + w / 2)} y={y + 9} textAnchor="middle" fontSize={7} fontWeight={800} fill={c.group === null ? MUTED : INK}>{c.text}</text>
          </g>
        );
      })}
    </g>
  );
};

/** Term cards coloured by kind: like terms share a colour. With `result`, an arrow leads to the collected terms. */
export const TermCards = ({ cards, result, caption, aria, className }: { cards: Card[]; result?: Card[]; caption?: string; aria: string; className?: string }) => {
  const h = (result ? 50 : 26) + (caption ? 9 : 0);
  return (
    <Panel h={h} aria={aria} className={className}>
      <CardRow cards={cards} y={6} />
      {result && (
        <>
          <path d="M60,22 v7 m-2.2,-2.6 l2.2,2.6 l2.2,-2.6" fill="none" stroke={MUTED} strokeWidth={0.9} />
          <CardRow cards={result} y={32} />
        </>
      )}
      {caption && <text x={60} y={h - 4} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={LINE}>{caption}</text>}
    </Panel>
  );
};

/** k( … ): an arrow from the number outside to every term inside, and the products underneath. */
export const DistributeArrows = ({ k, inside, products, className }: { k: string; inside: string[]; products: string[]; className?: string }) => {
  const KX = 22;
  const xs = inside.map((_, i) => 52 + i * 34);
  return (
    <Panel h={64} className={className} aria={`The ${k} outside the brackets multiplies each term inside: ${inside.map((t, i) => `${k} times ${t} is ${products[i]}`).join(', ')}.`}>
      {xs.map((x, i) => (
        <g key={i}>
          <path d={`M${KX},21 Q${r3((KX + x) / 2)},${4 - i * 4} ${x},21`} fill="none" stroke={A} strokeWidth={0.9} />
          <path d={`M${x},21 l-2.6,-1.4 m2.6,1.4 l-0.6,-2.9`} fill="none" stroke={A} strokeWidth={0.9} strokeLinecap="round" />
        </g>
      ))}
      <text x={KX} y={32} textAnchor="middle" fontSize={9} fontWeight={800} fill={A}>{k}</text>
      <text x={34} y={32} textAnchor="middle" fontSize={11} fontWeight={400} fill={MUTED}>(</text>
      <text x={r3(xs[xs.length - 1] + 14)} y={32} textAnchor="middle" fontSize={11} fontWeight={400} fill={MUTED}>)</text>
      {inside.map((t, i) => (
        <text key={i} x={xs[i]} y={32} textAnchor="middle" fontSize={8} fontWeight={800} fill={I}>{t}</text>
      ))}
      {products.map((t, i) => (
        <g key={i}>
          <path d={`M${xs[i]},36 v9 m-2,-2.4 l2,2.4 l2,-2.4`} fill="none" stroke={MUTED} strokeWidth={0.8} />
          <text x={xs[i]} y={56} textAnchor="middle" fontSize={8} fontWeight={800} fill={E}>{t}</text>
        </g>
      ))}
    </Panel>
  );
};

/** a·x + b as a rectangle k high: the common factor k is the shared side, the other sides are what is left in the brackets. */
export const FactorArea = ({ k, p, letter, q, className }: { k: number; p: number; letter: string; q: number; className?: string }) => {
  const H = 30;
  const X0 = 18;
  const XW = 50;
  const QW = 26;
  const Y0 = 12;
  const left = `${k * p === 1 ? '' : k * p}${letter}`;
  const inner = `${p === 1 ? '' : p}${letter}`;
  return (
    <Panel h={Y0 + H + 16} className={className} aria={`A rectangle with height ${k} split into two parts with areas ${left} and ${k * q}. The widths are ${inner} and ${q}, so ${left} + ${k * q} = ${k}(${inner} + ${q}).`}>
      <rect x={X0} y={Y0} width={XW} height={H} fill="rgba(129,140,248,0.35)" stroke={I} strokeWidth={0.9} />
      <rect x={X0 + XW} y={Y0} width={QW} height={H} fill="rgba(52,211,153,0.35)" stroke={E} strokeWidth={0.9} />
      <text x={X0 - 5} y={r3(Y0 + H / 2 + 2.5)} textAnchor="middle" fontSize={7.4} fontWeight={800} fill={A}>{k}</text>
      <text x={X0 + XW / 2} y={Y0 - 3} textAnchor="middle" fontSize={6.6} fontWeight={800} fill={I}>{inner}</text>
      <text x={X0 + XW + QW / 2} y={Y0 - 3} textAnchor="middle" fontSize={6.6} fontWeight={800} fill={E}>{q}</text>
      <text x={X0 + XW / 2} y={r3(Y0 + H / 2 + 2.6)} textAnchor="middle" fontSize={8} fontWeight={800} fill={LINE}>{left}</text>
      <text x={X0 + XW + QW / 2} y={r3(Y0 + H / 2 + 2.6)} textAnchor="middle" fontSize={8} fontWeight={800} fill={LINE}>{k * q}</text>
      <text x={60} y={Y0 + H + 11} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={A}>{`${left} + ${k * q} = ${k}(${inner} + ${q})`}</text>
    </Panel>
  );
};

/** groups × letter + extra, with the letter worth `value`: one bar of `value` cells per group, then `extra` cells. */
export const UnitBars = ({ groups, value, extra, letter, className }: { groups: number; value: number; extra: number; letter: string; className?: string }) => {
  const cells = groups * value + extra;
  const U = Math.min(6.4, 100 / (cells + groups));
  const total = cells * U + groups * U * 0.5;
  let x = 60 - total / 2;
  const bars = Array.from({ length: groups }).map((_, g) => {
    const x0 = x;
    x += value * U + U * 0.5;
    return (
      <g key={g}>
        {Array.from({ length: value }).map((__, k) => (
          <rect key={k} x={r3(x0 + k * U)} y={14} width={r3(U - 0.6)} height={10} rx={0.8} fill={I} />
        ))}
        <text x={r3(x0 + (value * U) / 2)} y={10} textAnchor="middle" fontSize={6} fontWeight={800} fill={I}>{letter}</text>
      </g>
    );
  });
  const ex = x;
  return (
    <Panel h={40} className={className} aria={`${groups} bars of ${value} cells, one for each ${letter}, and ${extra} more cells: ${groups} × ${value} + ${extra} = ${cells}.`}>
      {bars}
      {Array.from({ length: extra }).map((_, k) => (
        <rect key={k} x={r3(ex + k * U)} y={14} width={r3(U - 0.6)} height={10} rx={0.8} fill={A} />
      ))}
      <text x={r3(ex + (extra * U) / 2)} y={10} textAnchor="middle" fontSize={6} fontWeight={800} fill={A}>{extra}</text>
      <text x={60} y={35} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={E}>{`${groups} × ${value} + ${extra} = ${cells}`}</text>
    </Panel>
  );
};
