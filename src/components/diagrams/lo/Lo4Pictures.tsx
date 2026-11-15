import { r3 } from '../round';
import { PASS_SCENE } from './lo4Helpers';
import { progressBars } from './lo4Helpers';
import { planSegments } from './pswHelpers';

/** Grade 8 Life Orientation Term 1 pictures: dark panel, 120-unit-wide viewBox, at most six labels each. */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

/** Bars of a value out of `max` (a mark out of 10, goals out of 5), labelled under each bar. */
export const ProgressBars = ({ labels, values, max, title, aria }: { labels: string[]; values: number[]; max: number; title: string; aria: string }) => {
  const bars = progressBars(values, max);
  const base = 62;
  const step = 108 / labels.length;
  return (
    <Panel h={74} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.2} fontWeight={800} fill={A}>{title}</text>
      <line x1={6} y1={base} x2={114} y2={base} stroke={MUTED} strokeWidth={0.6} />
      {bars.map((b, i) => {
        const cx = r3(6 + step * (i + 0.5));
        return (
          <g key={i}>
            <rect x={r3(cx - 7)} y={r3(base - b.h)} width={14} height={b.h} rx={1.5} fill={[I, E, A, R, I][i % 5]} />
            <text x={cx} y={r3(base - b.h - 2)} textAnchor="middle" fontSize={4.8} fontWeight={800} fill={WHITE}>{`${b.value}/${max}`}</text>
            <text x={cx} y={base + 7} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={MUTED}>{labels[i]}</text>
          </g>
        );
      })}
    </Panel>
  );
};

const KIND_FILL = { warm: A, work: I, cool: E } as const;

/** A PE lesson as one bar: warm-up, activity and cool-down, widths in proportion to the minutes. */
export const SessionBar = ({ parts, aria }: { parts: { label: string; minutes: number; kind: 'warm' | 'work' | 'cool' }[]; aria: string }) => {
  const { total, segs } = planSegments(parts);
  return (
    <Panel h={46} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.2} fontWeight={800} fill={A}>{`One PE lesson: ${total} minutes`}</text>
      {segs.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={16} width={s.w} height={14} fill={KIND_FILL[parts[i].kind]} stroke={INK} strokeWidth={0.6} />
          <text x={r3(s.x + s.w / 2)} y={25} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={INK}>{s.minutes}</text>
          <text x={r3(s.x + s.w / 2)} y={38} textAnchor="middle" fontSize={3.9} fontWeight={700} fill={WHITE}>{s.label}</text>
        </g>
      ))}
    </Panel>
  );
};

/** A pitch seen from above: pass to the teammate with space (blue, "Open"), not the marked one. */
export const PassDiagram = ({ openIndex, aria }: { openIndex: number; aria: string }) => {
  const { carrier, mates, defenders } = PASS_SCENE;
  const t = mates[openIndex];
  const dx = t.x - carrier.x;
  const dy = t.y - carrier.y;
  const len = Math.hypot(dx, dy);
  const ex = r3(t.x - (dx / len) * 6);
  const ey = r3(t.y - (dy / len) * 6);
  const ang = Math.atan2(dy, dx);
  const head = (a: number) => `${r3(ex - Math.cos(ang + a) * 3)},${r3(ey - Math.sin(ang + a) * 3)}`;
  return (
    <Panel h={80} aria={aria}>
      <rect x={3} y={3} width={114} height={74} rx={3} fill="#14532d" stroke={WHITE} strokeWidth={0.6} />
      <line x1={60} y1={3} x2={60} y2={77} stroke={WHITE} strokeWidth={0.4} opacity={0.5} />
      <line x1={carrier.x} y1={carrier.y} x2={ex} y2={ey} stroke={A} strokeWidth={1.2} strokeDasharray="3 2" />
      <polyline points={`${head(0.5)} ${ex},${ey} ${head(-0.5)}`} fill="none" stroke={A} strokeWidth={1.2} strokeLinecap="round" />
      {defenders.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={4} fill={R} stroke={INK} strokeWidth={0.6} />
      ))}
      {mates.map((m, i) => (
        <circle key={i} cx={m.x} cy={m.y} r={4} fill={I} stroke={i === openIndex ? WHITE : INK} strokeWidth={i === openIndex ? 1.2 : 0.6} />
      ))}
      <circle cx={carrier.x} cy={carrier.y} r={4} fill={E} stroke={INK} strokeWidth={0.6} />
      <text x={carrier.x} y={carrier.y - 7} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>With the ball</text>
      <text x={t.x} y={t.y + 10} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>Open</text>
      <text x={mates[1 - openIndex].x} y={mates[1 - openIndex].y - 7} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>Marked</text>
      <text x={defenders[1].x} y={defenders[1].y - 6.5} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>Defender</text>
    </Panel>
  );
};
