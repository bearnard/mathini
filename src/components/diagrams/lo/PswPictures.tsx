import { r3 } from '../round';
import { hubSlots, planSegments, stackLayout, weekPlan, wrapLabel } from './pswHelpers';

/**
 * Grade 7 Personal and Social Well-being pictures, in the style of the Grade 7 maths pictures:
 * a dark panel on a 120-unit-wide viewBox, at most six labels each. Layout comes from pswHelpers.
 */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';
const COLS = [I, E, A, R];

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const Lines = ({ lines, x, y, size = 4.8, fill = WHITE, weight = 700, anchor = 'middle' }: { lines: string[]; x: number; y: number; size?: number; fill?: string; weight?: number; anchor?: 'start' | 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill}>
    {lines.map((l, i) => (
      <tspan key={i} x={x} dy={i === 0 ? 0 : size * 1.3}>{l}</tspan>
    ))}
  </text>
);

/** Numbered boxes top to bottom with arrows between them (up to five steps). */
export const StepFlow = ({ steps, aria }: { steps: string[]; aria: string }) => {
  const { items, height } = stackLayout(steps, 30);
  return (
    <Panel h={height} aria={aria}>
      {items.map((it, i) => {
        const c = COLS[i % COLS.length];
        const cy = r3(it.y + it.h / 2);
        return (
          <g key={i}>
            <rect x={6} y={it.y} width={108} height={it.h} rx={3} fill="#1e293b" stroke={c} strokeWidth={0.7} />
            <circle cx={15} cy={cy} r={4.6} fill={c} />
            <text x={15} y={r3(cy + 1.9)} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={INK}>{i + 1}</text>
            <Lines lines={it.lines} x={24} y={r3(it.y + 3.4 + 4.6)} anchor="start" />
            {i < items.length - 1 && <path d={`M60,${r3(it.y + it.h + 0.8)} v3.2 l-2,-2 m2,2 l2,-2`} stroke={MUTED} strokeWidth={0.8} fill="none" strokeLinecap="round" />}
          </g>
        );
      })}
    </Panel>
  );
};

/** One idea in the middle with up to four labels around it. */
export const Hub = ({ centre, spokes, aria }: { centre: string; spokes: string[]; aria: string }) => {
  const slots = hubSlots(spokes.length);
  return (
    <Panel h={100} aria={aria}>
      {slots.map((s, i) => (
        <line key={i} x1={60} y1={50} x2={s.x} y2={s.y} stroke={COLS[i]} strokeWidth={0.8} />
      ))}
      <circle cx={60} cy={50} r={13} fill="#1e293b" stroke={WHITE} strokeWidth={0.8} />
      <Lines lines={wrapLabel(centre, 9)} x={60} y={wrapLabel(centre, 9).length > 1 ? 49 : 51.4} size={5} />
      {slots.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 18} y={s.y - 6} width={36} height={12} rx={3} fill={COLS[i]} />
          <Lines lines={wrapLabel(spokes[i], 12)} x={s.x} y={wrapLabel(spokes[i], 12).length > 1 ? s.y - 1 : s.y + 1.7} size={4.6} fill={INK} weight={800} />
        </g>
      ))}
    </Panel>
  );
};

/** A problem, two choices and what follows from each. */
export const Branches = ({ problem, options, aria }: { problem: string; options: { choice: string; outcome: string }[]; aria: string }) => {
  const pl = wrapLabel(problem, 36);
  const ph = r3(6 + pl.length * 6.2);
  const rows = options.map((o) => ({ c: wrapLabel(o.choice, 19), o: wrapLabel(o.outcome, 19) }));
  const ch = r3(6 + Math.max(...rows.map((r) => r.c.length)) * 6.2);
  const oh = r3(6 + Math.max(...rows.map((r) => r.o.length)) * 6.2);
  const cy = r3(4 + ph + 12);
  const oy = r3(cy + ch + 12);
  const h = r3(oy + oh + 4);
  const xs = [32, 88];
  return (
    <Panel h={h} aria={aria}>
      <rect x={10} y={4} width={100} height={ph} rx={3} fill="#1e293b" stroke={WHITE} strokeWidth={0.7} />
      <Lines lines={pl} x={60} y={r3(4 + 3 + 4.4)} />
      {rows.map((r, i) => (
        <g key={i}>
          <path d={`M60,${4 + ph} L${xs[i]},${cy}`} stroke={MUTED} strokeWidth={0.8} />
          <path d={`M${xs[i]},${r3(cy + ch)} v${oy - cy - ch}`} stroke={MUTED} strokeWidth={0.8} />
          <rect x={xs[i] - 28} y={cy} width={56} height={ch} rx={3} fill={COLS[i]} />
          <Lines lines={r.c} x={xs[i]} y={r3(cy + 3 + 4.4)} fill={INK} weight={800} />
          <rect x={xs[i] - 28} y={oy} width={56} height={oh} rx={3} fill="#1e293b" stroke={COLS[i]} strokeWidth={0.7} />
          <Lines lines={r.o} x={xs[i]} y={r3(oy + 3 + 4.4)} />
        </g>
      ))}
    </Panel>
  );
};

/** Three zones side by side, each with a title and one short line (e.g. passive, assertive, aggressive). */
export const Zones = ({ zones, aria }: { zones: { title: string; line: string }[]; aria: string }) => {
  const w = 36;
  const wraps = zones.map((z) => ({ t: wrapLabel(z.title, 10), l: wrapLabel(z.line, 12) }));
  const bodyLines = Math.max(...wraps.map((z) => z.l.length));
  const h = r3(26 + bodyLines * 6.2);
  return (
    <Panel h={h} aria={aria}>
      {wraps.map((z, i) => {
        const x = 3 + i * (w + 1.5);
        return (
          <g key={i}>
            <rect x={x} y={4} width={w} height={h - 8} rx={3} fill="#1e293b" stroke={COLS[i]} strokeWidth={0.8} />
            <rect x={x} y={4} width={w} height={11} rx={3} fill={COLS[i]} />
            <Lines lines={z.t} x={x + w / 2} y={z.t.length > 1 ? 9 : 11} size={4.5} fill={INK} weight={800} />
            <Lines lines={z.l} x={x + w / 2} y={22} size={4.2} weight={600} />
          </g>
        );
      })}
    </Panel>
  );
};

/** A right on the left, the matching responsibility on the right. */
export const PairLinks = ({ pairs, aria }: { pairs: { right: string; duty: string }[]; aria: string }) => {
  const rows = pairs.map((p) => ({ r: wrapLabel(p.right, 15), d: wrapLabel(p.duty, 15) }));
  let y = 12;
  const laid = rows.map((r) => {
    const h = r3(6 + Math.max(r.r.length, r.d.length) * 6.2);
    const it = { ...r, y, h };
    y += h + 5;
    return it;
  });
  const h = r3(y - 5 + 4);
  return (
    <Panel h={h} aria={aria}>
      <text x={31} y={7} textAnchor="middle" fontSize={4.4} fontWeight={800} fill={I}>RIGHT</text>
      <text x={89} y={7} textAnchor="middle" fontSize={4.4} fontWeight={800} fill={E}>RESPONSIBILITY</text>
      {laid.map((r, i) => (
        <g key={i}>
          <rect x={4} y={r.y} width={54} height={r.h} rx={3} fill="#1e293b" stroke={I} strokeWidth={0.7} />
          <Lines lines={r.r} x={31} y={r3(r.y + 3 + 4.4)} />
          <rect x={62} y={r.y} width={54} height={r.h} rx={3} fill="#1e293b" stroke={E} strokeWidth={0.7} />
          <Lines lines={r.d} x={89} y={r3(r.y + 3 + 4.4)} />
          <path d={`M58.5,${r3(r.y + r.h / 2)} h3`} stroke={MUTED} strokeWidth={1} />
        </g>
      ))}
    </Panel>
  );
};

/** Bars of minutes per day (heights from weekPlan), with the weekly total written on top. */
export const WeekBars = ({ days, minutes, aria }: { days: string[]; minutes: number[]; aria: string }) => {
  const { total, bars } = weekPlan(minutes);
  const base = 62;
  const step = 108 / days.length;
  return (
    <Panel h={74} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={A}>{`${total} minutes in the week`}</text>
      <line x1={6} y1={base} x2={114} y2={base} stroke={MUTED} strokeWidth={0.6} />
      {bars.map((b, i) => {
        const cx = r3(6 + step * (i + 0.5));
        return (
          <g key={i}>
            <rect x={r3(cx - 6)} y={r3(base - b.h)} width={12} height={b.h} rx={1.5} fill={COLS[i % COLS.length]} />
            <text x={cx} y={r3(base - b.h - 2)} textAnchor="middle" fontSize={4.4} fontWeight={700} fill={WHITE}>{b.minutes}</text>
            <text x={cx} y={base + 7} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={MUTED}>{days[i]}</text>
          </g>
        );
      })}
    </Panel>
  );
};

/** One study session as a bar: study blocks and break blocks, widths in proportion to minutes. */
export const PlanBar = ({ parts, aria }: { parts: { label: string; minutes: number; kind: 'study' | 'break' }[]; aria: string }) => {
  const { total, segs } = planSegments(parts);
  return (
    <Panel h={46} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={A}>{`One session: ${total} minutes`}</text>
      {segs.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={16} width={s.w} height={14} fill={parts[i].kind === 'study' ? I : E} stroke={INK} strokeWidth={0.6} />
          <text x={r3(s.x + s.w / 2)} y={25} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={INK}>{s.minutes}</text>
          <text x={r3(s.x + s.w / 2)} y={37} textAnchor="middle" fontSize={4} fontWeight={700} fill={WHITE}>{s.label}</text>
        </g>
      ))}
    </Panel>
  );
};
