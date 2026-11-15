import { r3 } from '../round';
import { wrapLabel } from './pswHelpers';
import { barHeights } from './lo7Helpers';

/** Grade 8 Life Orientation Term 4 pictures: same dark-panel style as PswPictures, 120-unit viewBox. */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const MUTED = '#94a3b8';
const COLS = ['#818cf8', '#34d399', '#fbbf24', '#fb7185'];

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const Lines = ({ lines, x, y, size = 4.6, fill = WHITE, weight = 700, anchor = 'middle' }: { lines: string[]; x: number; y: number; size?: number; fill?: string; weight?: number; anchor?: 'start' | 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill}>
    {lines.map((l, i) => (
      <tspan key={i} x={x} dy={i === 0 ? 0 : size * 1.3}>{l}</tspan>
    ))}
  </text>
);

/** Rows are subjects, columns are days; a filled square is a revision block for that subject on that day. */
export const RevisionGrid = ({ grid, subjects, aria }: { grid: string[][]; subjects: { subject: string; blocks: number }[]; aria: string }) => {
  const x0 = 46;
  const colW = (114 - x0) / grid.length;
  const rowH = 14;
  const h = 10 + subjects.length * rowH + 6;
  return (
    <Panel h={h} aria={aria}>
      {subjects.map((s, r) => {
        const y = 8 + r * rowH;
        return (
          <g key={s.subject}>
            <Lines lines={[s.subject]} x={5} y={r3(y + 8)} anchor="start" size={4.8} />
            <text x={5} y={r3(y + 12.6)} fontSize={4.2} fill={MUTED}>{`${s.blocks} blocks`}</text>
            {grid.map((day, d) => {
              const n = day.filter((b) => b === s.subject).length;
              return Array.from({ length: n }, (_, k) => (
                <rect key={`${d}-${k}`} x={r3(x0 + d * colW + 1 + k * 7)} y={y + 1} width={6} height={10} rx={1.2} fill={COLS[r % COLS.length]} />
              ));
            })}
          </g>
        );
      })}
      {grid.map((_, d) => (
        <line key={d} x1={r3(x0 + d * colW)} y1={6} x2={r3(x0 + d * colW)} y2={h - 5} stroke="#334155" strokeWidth={0.4} />
      ))}
      <line x1={114} y1={6} x2={114} y2={h - 5} stroke="#334155" strokeWidth={0.4} />
    </Panel>
  );
};

/** Two columns of linked boxes with their own headings, e.g. interest and occupation. */
export const MatchColumns = ({ leftTitle, rightTitle, pairs, aria }: { leftTitle: string; rightTitle: string; pairs: { left: string; right: string }[]; aria: string }) => {
  let y = 13;
  const laid = pairs.map((p) => {
    const l = wrapLabel(p.left, 15);
    const r = wrapLabel(p.right, 15);
    const h = r3(6 + Math.max(l.length, r.length) * 6.2);
    const it = { l, r, y, h };
    y += h + 5;
    return it;
  });
  const h = r3(y - 5 + 4);
  return (
    <Panel h={h} aria={aria}>
      <text x={31} y={8} textAnchor="middle" fontSize={4.4} fontWeight={800} fill={COLS[0]}>{leftTitle}</text>
      <text x={89} y={8} textAnchor="middle" fontSize={4.4} fontWeight={800} fill={COLS[1]}>{rightTitle}</text>
      {laid.map((p, i) => (
        <g key={i}>
          <rect x={4} y={p.y} width={54} height={p.h} rx={3} fill="#1e293b" stroke={COLS[0]} strokeWidth={0.7} />
          <Lines lines={p.l} x={31} y={r3(p.y + 3 + 4.4)} />
          <rect x={62} y={p.y} width={54} height={p.h} rx={3} fill="#1e293b" stroke={COLS[1]} strokeWidth={0.7} />
          <Lines lines={p.r} x={89} y={r3(p.y + 3 + 4.4)} />
          <path d={`M58.5,${r3(p.y + p.h / 2)} h3`} stroke={MUTED} strokeWidth={1} />
        </g>
      ))}
    </Panel>
  );
};

/** A bar for each label (for example each term), with the value on top and a title above. */
export const ValueBars = ({ title, labels, values, aria }: { title: string; labels: string[]; values: number[]; aria: string }) => {
  const hs = barHeights(values);
  const base = 60;
  const step = 108 / labels.length;
  return (
    <Panel h={72} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5} fontWeight={800} fill={COLS[2]}>{title}</text>
      <line x1={6} y1={base} x2={114} y2={base} stroke={MUTED} strokeWidth={0.6} />
      {hs.map((bh, i) => {
        const cx = r3(6 + step * (i + 0.5));
        return (
          <g key={i}>
            <rect x={r3(cx - 7)} y={r3(base - bh)} width={14} height={bh} rx={1.5} fill={COLS[i % COLS.length]} />
            <text x={cx} y={r3(base - bh - 2)} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={WHITE}>{values[i]}</text>
            <text x={cx} y={base + 7} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={MUTED}>{labels[i]}</text>
          </g>
        );
      })}
    </Panel>
  );
};
