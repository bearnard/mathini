/**
 * A 4 x 4 map grid with one worked grid reference.
 *
 * Matches the lesson's convention: the LETTER names the column (across the top) and
 * the NUMBER names the row (down the side), read letter first, so the school is in C2:
 * "where column C meets row 2". With showKey, a small key explains the symbols.
 */

const INK = '#0f172a';
const GOLD = '#fbbf24';
const COLS = ['A', 'B', 'C', 'D'];
const ROWS = ['1', '2', '3', '4'];
const X0 = 18;
const Y0 = 17;
const CELL = 19;

type Symbol = 'school' | 'clinic' | 'shop' | 'tree';

const Sym = ({ kind, x, y }: { kind: Symbol; x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    {kind === 'school' && (
      <>
        <rect x={-5} y={-2} width={10} height={7} fill="#fde68a" stroke={INK} strokeWidth={0.5} />
        <polygon points="-6.5,-2 0,-8 6.5,-2" fill="#ef4444" stroke={INK} strokeWidth={0.5} />
        <rect x={-1.2} y={1.5} width={2.4} height={3.5} fill={INK} />
      </>
    )}
    {kind === 'clinic' && (
      <>
        <rect x={-5.5} y={-5.5} width={11} height={11} rx={1.4} fill="#f8fafc" stroke={INK} strokeWidth={0.5} />
        <path d="M-1.5 -4 H1.5 V-1.5 H4 V1.5 H1.5 V4 H-1.5 V1.5 H-4 V-1.5 H-1.5Z" fill="#ef4444" />
      </>
    )}
    {kind === 'shop' && (
      <>
        <rect x={-5} y={-2} width={10} height={7} fill="#bfdbfe" stroke={INK} strokeWidth={0.5} />
        <path d="M-6 -2 L-4.4 -6 H4.4 L6 -2Z" fill="#60a5fa" stroke={INK} strokeWidth={0.5} />
      </>
    )}
    {kind === 'tree' && (
      <>
        <rect x={-1} y={1} width={2} height={5} fill="#92400e" />
        <circle cx={0} cy={-2} r={5} fill="#22c55e" stroke={INK} strokeWidth={0.5} />
      </>
    )}
  </g>
);

const cx = (col: number) => X0 + CELL * (col + 0.5);
const cy = (row: number) => Y0 + CELL * (row + 0.5);

interface GridRefProps {
  /** Show a small key under the grid (symbol + name). */
  showKey?: boolean;
  className?: string;
}

const GridRef = ({ showKey = false, className }: GridRefProps) => {
  const h = showKey ? 124 : 108;
  const gridRight = X0 + 4 * CELL;
  const gridBottom = Y0 + 4 * CELL;
  return (
    <svg
      viewBox={`0 0 100 ${h}`}
      role="img"
      aria-labelledby="gr-title gr-desc"
      className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit', maxWidth: '24rem', aspectRatio: `100 / ${h}` }}
    >
      <title id="gr-title">A map grid: the school is in C2</title>
      <desc id="gr-desc">
        A grid of four columns, A to D across the top, and four rows, 1 to 4 down the side. Column C and row 2 are highlighted. The school is in the square where column C meets row 2, so its grid reference is C2. Other symbols on the map: a clinic in B4, a shop in D1 and a tree in A1.
      </desc>

      {/* map squares */}
      <rect x={X0} y={Y0} width={4 * CELL} height={4 * CELL} fill="#14532d" />
      <path d={`M${X0} ${cy(2) + 4} Q${cx(1)} ${cy(1) + 4} ${cx(2) - 4} ${cy(2) + 6} T${gridRight} ${cy(3) - 2}`} stroke="#38bdf8" strokeWidth={2.4} fill="none" opacity={0.75} />

      {/* highlight: column C and row 2 */}
      <rect x={X0 + 2 * CELL} y={Y0} width={CELL} height={4 * CELL} fill={GOLD} opacity={0.16} />
      <rect x={X0} y={Y0 + CELL} width={4 * CELL} height={CELL} fill={GOLD} opacity={0.16} />

      {/* grid lines */}
      <g stroke="#e2e8f0" strokeWidth={0.5} opacity={0.6}>
        {[0, 1, 2, 3, 4].map((k) => (
          <g key={k}>
            <line x1={X0 + k * CELL} x2={X0 + k * CELL} y1={Y0} y2={gridBottom} />
            <line x1={X0} x2={gridRight} y1={Y0 + k * CELL} y2={Y0 + k * CELL} />
          </g>
        ))}
      </g>

      {/* symbols */}
      <Sym kind="tree" x={cx(0)} y={cy(0)} />
      <Sym kind="shop" x={cx(3)} y={cy(0)} />
      <Sym kind="school" x={cx(2)} y={cy(1)} />
      <Sym kind="clinic" x={cx(1)} y={cy(3)} />

      {/* the worked square */}
      <rect x={X0 + 2 * CELL} y={Y0 + CELL} width={CELL} height={CELL} fill="none" stroke={GOLD} strokeWidth={1.6} />

      {/* labels: letters across the top, numbers down the side */}
      {COLS.map((c, i) => (
        <text key={c} x={cx(i)} y={Y0 - 4} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={i === 2 ? GOLD : '#e2e8f0'}>{c}</text>
      ))}
      {ROWS.map((r, i) => (
        <text key={r} x={X0 - 5} y={cy(i) + 2} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={i === 1 ? GOLD : '#e2e8f0'}>{r}</text>
      ))}
      <text x={cx(2)} y={gridBottom + 8.4} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={GOLD}>C2</text>

      {showKey && (
        <g transform={`translate(0 ${gridBottom + 12})`}>
          <text x={X0} y={-3.4} fontSize={4.2} fill="#94a3b8" fontWeight={800}>Key</text>
          <rect x={X0} y={0} width={4 * CELL} height={14} rx={2.5} fill="#1e293b" />
          {([['school', 'School'], ['clinic', 'Clinic'], ['shop', 'Shop']] as const).map(([k, name], i) => (
            <g key={k} transform={`translate(${X0 + 8 + i * 25} 7)`}>
              <g transform="scale(0.62)"><Sym kind={k} x={0} y={0} /></g>
              <text x={6} y={1.4} fontSize={3.9} fill="#f8fafc" fontWeight={700}>{name}</text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
};

export default GridRef;
