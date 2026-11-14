import { decimalComma, hundredthsGrid } from './mathsHelpers';
import { r3 } from '../round';

/**
 * Decimals on a 10 x 10 grid of hundredths. Tenths are whole columns (indigo), single hundredths
 * fill the next column (green). Values are written with the decimal COMMA, as in CAPS.
 */

const TENTH = '#818cf8';
const HUNDREDTH = '#34d399';

interface DecimalGridsProps {
  /** One grid per value, drawn left to right; `sign` is drawn between grids ("+", "="). */
  values: number[];
  signs?: string[];
  /** One short caption per grid, e.g. "3 tenths". Defaults to the value with a comma. */
  captions?: string[];
  /** Digits after the comma. Default: as few as the number needs (0,3 and 0,07). */
  places?: number;
  className?: string;
}

const text = (v: number, places?: number) => (places !== undefined ? decimalComma(v, places) : String(Math.round(v * 100) / 100).replace('.', ','));

const DecimalGrids = ({ values, signs = [], captions, places, className }: DecimalGridsProps) => {
  const n = values.length;
  const CELL = n >= 3 ? 2.9 : 3.3;
  const SIZE = CELL * 10;
  const gap = n === 1 ? 0 : 12;
  const total = n * SIZE + (n - 1) * gap;
  const x0 = (120 - total) / 2;
  const desc = values
    .map((v) => {
      const g = hundredthsGrid(v);
      return `${text(v, places)} is ${g.tenths} tenth${g.tenths === 1 ? '' : 's'} and ${g.hundredths} hundredth${g.hundredths === 1 ? '' : 's'}, ${g.squares} squares out of 100`;
    })
    .join('; ');
  return (
    <svg
      viewBox="0 0 120 62"
      role="img"
      aria-label={`${n > 1 ? 'Hundredths grids. ' : 'A hundredths grid. '}${desc}.`}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      {values.map((v, gi) => {
        const g = hundredthsGrid(v);
        const gx = x0 + gi * (SIZE + gap);
        const cells = [];
        for (let col = 0; col < 10; col++) {
          for (let row = 0; row < 10; row++) {
            const idx = col * 10 + row;
            const on = idx < g.squares;
            cells.push(
              <rect
                key={idx}
                x={r3(gx + col * CELL)}
                y={r3(6 + row * CELL)}
                width={CELL}
                height={CELL}
                fill={on ? (col < g.tenths ? TENTH : HUNDREDTH) : '#1e293b'}
                stroke="#0f172a"
                strokeWidth={0.35}
              />,
            );
          }
        }
        return (
          <g key={gi}>
            {cells}
            <rect x={gx} y={6} width={SIZE} height={SIZE} fill="none" stroke="#e2e8f0" strokeWidth={0.7} />
            <text x={r3(gx + SIZE / 2)} y={47} textAnchor="middle" fontSize={7} fontWeight={800} fill="#f8fafc">{text(v, places)}</text>
            <text x={r3(gx + SIZE / 2)} y={55} textAnchor="middle" fontSize={4.6} fontWeight={700} fill="#cbd5e1">
              {captions ? captions[gi] : `${g.squares} of 100`}
            </text>
            {signs[gi] && gi < n - 1 && (
              <text x={r3(gx + SIZE + gap / 2)} y={25} textAnchor="middle" fontSize={9} fontWeight={800} fill="#e2e8f0">{signs[gi]}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default DecimalGrids;
