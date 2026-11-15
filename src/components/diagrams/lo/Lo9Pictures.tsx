import { r3 } from '../round';
import { compareLayout, sessionPlan } from './lo9Helpers';

/**
 * Grade 9 Life Orientation pictures, same dark-panel style as PswPictures (120-unit viewBox, at most
 * six labels each). Layout and numbers come from lo9Helpers.
 */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';

const Lines = ({ lines, x, y, size = 4.6, fill = WHITE, weight = 700, anchor = 'middle' }: { lines: string[]; x: number; y: number; size?: number; fill?: string; weight?: number; anchor?: 'start' | 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill}>
    {lines.map((l, i) => (
      <tspan key={i} x={x} dy={i === 0 ? 0 : size * 1.3}>{l}</tspan>
    ))}
  </text>
);

/** Two columns with a heading each and two short boxes under it (green "yes" column, rose "no" column). */
export const Compare = ({ left, right, aria }: { left: { title: string; items: string[] }; right: { title: string; items: string[] }; aria: string }) => {
  const lay = compareLayout(left.items, right.items, 20);
  const h = lay.height;
  const col = (x: number, c: string, title: string, items: typeof lay.left) => (
    <g>
      <rect x={x} y={4} width={55} height={9} rx={3} fill={c} />
      <text x={x + 27.5} y={10.4} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={INK}>{title}</text>
      {items.map((it, i) => (
        <g key={i}>
          <rect x={x} y={it.y} width={55} height={it.h} rx={3} fill="#1e293b" stroke={c} strokeWidth={0.7} />
          <Lines lines={it.lines} x={x + 27.5} y={r3(it.y + 3.4 + 4.4)} />
        </g>
      ))}
    </g>
  );
  return (
    <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      {col(3, E, left.title, lay.left)}
      {col(62, R, right.title, lay.right)}
    </svg>
  );
};

/** A practice session as one bar, split into warm-up, skills, game and cool-down in proportion to minutes. */
export const SessionBar = ({ aria }: { aria: string }) => {
  const { total, segs } = sessionPlan();
  const cols = [A, I, E, R];
  return (
    <svg viewBox="0 0 120 50" role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={A}>{`One practice: ${total} minutes`}</text>
      {segs.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={16} width={s.w} height={14} fill={cols[i]} stroke={INK} strokeWidth={0.6} />
          <text x={r3(s.x + s.w / 2)} y={25} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={INK}>{s.minutes}</text>
          <text x={i === 0 ? s.x : i === segs.length - 1 ? r3(s.x + s.w) : r3(s.x + s.w / 2)} y={i % 2 === 0 ? 37 : 43} textAnchor={i === 0 ? 'start' : i === segs.length - 1 ? 'end' : 'middle'} fontSize={4} fontWeight={700} fill={WHITE}>{s.label}</text>
        </g>
      ))}
    </svg>
  );
};
