import type { ReactNode } from 'react';
import { r3 } from '../round';

/**
 * Fraction bars: every bar is the SAME length (the same whole) cut into equal parts, with some
 * parts shaded, so fractions can be compared, matched and added by eye. Rows are stacked; the
 * text between two rows ("× 2", "+", "=", ">") sits in the gap. An optional dashed guide marks
 * where the shading ends, so equivalent fractions visibly reach the same place.
 */

export interface BarSeg {
  count: number;
  color: string;
}

export interface BarRow {
  /** The fraction written at the left (numerator over denominator); omit for no label. */
  n?: number;
  d?: number;
  /** Parts the whole is cut into. */
  parts: number;
  /** Shaded parts; segments are drawn in order from the left. */
  shaded: BarSeg[];
  /** Text instead of a stacked fraction, e.g. "1 whole". */
  text?: string;
}

export interface BarGap {
  text: string;
  /** "label": under the fraction labels (× 2); "bar": in the middle of the bars (+, =, >). */
  at: 'label' | 'bar';
}

interface FractionRowsProps {
  rows: BarRow[];
  gaps?: (BarGap | null)[];
  /** Draw a dashed line where this fraction of the whole ends, across all rows. */
  guide?: number;
  aria: string;
  className?: string;
}

const INK = '#0f172a';
const X0 = 34;
const W = 80;
const BAR_H = 13;
const GAP_H = 10;
const TOP = 6;

const Frac = ({ x, y, n, d }: { x: number; y: number; n: number; d: number }) => (
  <g fontWeight={800} fill="#e2e8f0" textAnchor="middle">
    <text x={x} y={y - 1.4} fontSize={6.6}>{n}</text>
    <line x1={x - 4} y1={y} x2={x + 4} y2={y} stroke="#e2e8f0" strokeWidth={0.9} />
    <text x={x} y={y + 6.2} fontSize={6.6}>{d}</text>
  </g>
);

const FractionRows = ({ rows, gaps = [], guide, aria, className }: FractionRowsProps) => {
  const rowY = (i: number) => TOP + i * (BAR_H + GAP_H);
  const h = TOP * 2 + rows.length * BAR_H + (rows.length - 1) * GAP_H;
  return (
    <svg
      viewBox={`0 0 120 ${h}`}
      role="img"
      aria-label={aria}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      {rows.map((row, i) => {
        const y = rowY(i);
        const w = W / row.parts;
        let start = 0;
        const cells: ReactNode[] = [];
        for (const seg of row.shaded) {
          for (let k = 0; k < seg.count; k++) {
            cells.push(<rect key={`${start}`} x={r3(X0 + start * w)} y={y} width={r3(w)} height={BAR_H} fill={seg.color} />);
            start++;
          }
        }
        return (
          <g key={i}>
            <rect x={X0} y={y} width={W} height={BAR_H} fill="#1e293b" />
            {cells}
            <g stroke="#0f172a" strokeWidth={0.9}>
              {Array.from({ length: row.parts - 1 }).map((_, k) => (
                <line key={k} x1={r3(X0 + (k + 1) * w)} y1={y} x2={r3(X0 + (k + 1) * w)} y2={y + BAR_H} />
              ))}
            </g>
            <rect x={X0} y={y} width={W} height={BAR_H} fill="none" stroke="#e2e8f0" strokeWidth={0.9} />
            {row.n !== undefined && row.d !== undefined ? (
              <Frac x={17} y={y + BAR_H / 2 - 0.4} n={row.n} d={row.d} />
            ) : (
              row.text && <text x={17} y={y + BAR_H / 2 + 2.2} textAnchor="middle" fontSize={6} fontWeight={800} fill="#e2e8f0">{row.text}</text>
            )}
          </g>
        );
      })}
      {guide !== undefined && (
        <line x1={r3(X0 + guide * W)} y1={TOP - 3} x2={r3(X0 + guide * W)} y2={h - TOP + 3} stroke="#fde68a" strokeWidth={0.9} strokeDasharray="2 1.6" />
      )}
      {gaps.map((g, i) =>
        g ? (
          <text
            key={i}
            x={g.at === 'label' ? 17 : r3(X0 + W / 2)}
            y={r3(rowY(i) + BAR_H + GAP_H / 2 + 2.2)}
            textAnchor="middle"
            fontSize={6.4}
            fontWeight={800}
            fill={g.at === 'label' ? '#fbbf24' : '#e2e8f0'}
          >
            {g.text}
          </text>
        ) : null,
      )}
    </svg>
  );
};

export default FractionRows;
