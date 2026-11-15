import { r3 } from '../round';
import { barWidths } from './lo8Helpers';

/** Grade 9 Life Orientation Term 1 pictures: same dark panel and 120-unit viewBox as PswPictures. */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const COLS = ['#818cf8', '#34d399', '#fbbf24', '#fb7185', '#38bdf8'];

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

/** Horizontal bars: a short label on the left, the value at the end of each bar. */
export const HBars = ({ items, title, aria }: { items: { label: string; value: number; unit?: string }[]; title: string; aria: string }) => {
  const widths = barWidths(items.map((i) => i.value));
  const row = 11;
  const h = r3(16 + items.length * row + 4);
  return (
    <Panel h={h} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5} fontWeight={800} fill="#fbbf24">{title}</text>
      {items.map((it, i) => {
        const y = 15 + i * row;
        return (
          <g key={i}>
            <text x={5} y={y + 5.6} fontSize={4.6} fontWeight={700} fill={WHITE}>{it.label}</text>
            <rect x={38} y={y} width={widths[i]} height={7} rx={1.5} fill={COLS[i % COLS.length]} />
            <text x={r3(38 + widths[i] + 2)} y={y + 5.6} fontSize={4.6} fontWeight={800} fill={WHITE}>{`${it.value}${it.unit ?? ''}`}</text>
          </g>
        );
      })}
    </Panel>
  );
};

/** The five SMART letters with their words, one per row. */
export const SmartGoal = ({ rows, aria }: { rows: { letter: string; word: string }[]; aria: string }) => {
  const h = r3(8 + rows.length * 11);
  return (
    <Panel h={h} aria={aria}>
      {rows.map((r, i) => {
        const y = 6 + i * 11;
        return (
          <g key={i}>
            <circle cx={11} cy={y + 5} r={4.6} fill={COLS[i % COLS.length]} />
            <text x={11} y={y + 6.8} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={INK}>{r.letter}</text>
            <text x={20} y={y + 6.8} fontSize={5.2} fontWeight={800} fill={WHITE}>{r.word}</text>
          </g>
        );
      })}
    </Panel>
  );
};
