import { r3 } from '../round';
import { spreadX, tierWidths } from './lo10Helpers';
import { wrapLabel } from './pswHelpers';

/** Grade 9 Life Orientation Term 3 pictures: same dark-panel style as PswPictures, at most six labels. */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const Txt = ({ lines, x, y, size = 4.8, fill = WHITE }: { lines: string[]; x: number; y: number; size?: number; fill?: string }) => (
  <text x={x} y={y} textAnchor="middle" fontSize={size} fontWeight={700} fill={fill}>
    {lines.map((l, i) => (
      <tspan key={i} x={x} dy={i === 0 ? 0 : size * 1.3}>{l}</tspan>
    ))}
  </text>
);

/** Tiers from the highest (narrow, top) to the lowest (wide, bottom). */
export const Tiers = ({ tiers, aria }: { tiers: { title: string; line: string }[]; aria: string }) => {
  const widths = tierWidths(tiers.length);
  const rowH = 20;
  const cols = [I, E, A];
  return (
    <Panel h={tiers.length * (rowH + 4) + 4} aria={aria}>
      {tiers.map((t, i) => {
        const y = 4 + i * (rowH + 4);
        const w = widths[i];
        return (
          <g key={i}>
            <rect x={r3(60 - w / 2)} y={y} width={w} height={rowH} rx={3} fill={cols[i % 3]} />
            <Txt lines={[t.title]} x={60} y={y + 8} size={5.2} fill={INK} />
            <Txt lines={wrapLabel(t.line, Math.floor(w / 2.7))} x={60} y={y + 14.8} size={4.5} fill={INK} />
          </g>
        );
      })}
    </Panel>
  );
};

/** Two sides with a neutral mediator between them. */
export const Mediation = ({ left, right, mediator, aria }: { left: string; right: string; mediator: string; aria: string }) => {
  const [lx, mx, rx] = spreadX(3, 108, 6);
  return (
    <Panel h={58} aria={aria}>
      <path d={`M${lx + 15},34 L${mx - 15},34 M${mx + 15},34 L${rx - 15},34`} stroke={MUTED} strokeWidth={0.9} strokeDasharray="2 1.6" />
      {[{ x: lx, t: left, c: I }, { x: mx, t: mediator, c: E }, { x: rx, t: right, c: A }].map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={34} r={14} fill={s.c} />
          <Txt lines={wrapLabel(s.t, 8)} x={s.x} y={wrapLabel(s.t, 8).length > 1 ? 32 : 35.6} size={4.6} fill={INK} />
        </g>
      ))}
      <text x={60} y={11} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>A neutral person helps both sides</text>
      <text x={60} y={53} textAnchor="middle" fontSize={4.2} fontWeight={700} fill={MUTED}>The sides still make the deal</text>
    </Panel>
  );
};

const COLS = [I, E, A, '#fb7185'];

/** Like PairLinks but with your own two column headings (e.g. PROBLEM / ACTION). */
export const LinkedPairs = ({ heads, pairs, aria }: { heads: [string, string]; pairs: [string, string][]; aria: string }) => {
  let y = 12;
  const laid = pairs.map(([l, r]) => {
    const ll = wrapLabel(l, 15);
    const rl = wrapLabel(r, 15);
    const h = r3(6 + Math.max(ll.length, rl.length) * 6.2);
    const it = { ll, rl, y, h };
    y += h + 5;
    return it;
  });
  return (
    <Panel h={r3(y - 5 + 4)} aria={aria}>
      <text x={31} y={7} textAnchor="middle" fontSize={4.4} fontWeight={800} fill={I}>{heads[0]}</text>
      <text x={89} y={7} textAnchor="middle" fontSize={4.4} fontWeight={800} fill={E}>{heads[1]}</text>
      {laid.map((r, i) => (
        <g key={i}>
          <rect x={4} y={r.y} width={54} height={r.h} rx={3} fill="#1e293b" stroke={I} strokeWidth={0.7} />
          <Txt lines={r.ll} x={31} y={r3(r.y + 7.4)} />
          <rect x={62} y={r.y} width={54} height={r.h} rx={3} fill="#1e293b" stroke={E} strokeWidth={0.7} />
          <Txt lines={r.rl} x={89} y={r3(r.y + 7.4)} />
          <path d={`M58.5,${r3(r.y + r.h / 2)} h3`} stroke={MUTED} strokeWidth={1} />
        </g>
      ))}
    </Panel>
  );
};

/** Hub with a larger centre circle, for longer centre words such as "Inclusion". */
export const HubWide = ({ centre, spokes, aria }: { centre: string; spokes: string[]; aria: string }) => {
  const slots = [{ x: 60, y: 9 }, { x: 100, y: 50 }, { x: 60, y: 91 }, { x: 20, y: 50 }].slice(0, spokes.length);
  return (
    <Panel h={100} aria={aria}>
      {slots.map((s, i) => (
        <line key={i} x1={60} y1={50} x2={s.x} y2={s.y} stroke={COLS[i]} strokeWidth={0.8} />
      ))}
      <circle cx={60} cy={50} r={16} fill="#1e293b" stroke={WHITE} strokeWidth={0.8} />
      <Txt lines={[centre]} x={60} y={51.5} size={4.6} />
      {slots.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 18} y={s.y - 6} width={36} height={12} rx={3} fill={COLS[i]} />
          <Txt lines={wrapLabel(spokes[i], 12)} x={s.x} y={wrapLabel(spokes[i], 12).length > 1 ? s.y - 1 : s.y + 1.7} size={4.6} fill={INK} />
        </g>
      ))}
    </Panel>
  );
};
