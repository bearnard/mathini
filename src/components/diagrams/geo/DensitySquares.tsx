/**
 * Dense and sparse, side by side: two squares of the SAME size, one with many people and one
 * with few. The dots are an illustration (not a count of real people); the real figures are on
 * the density chart later in the lesson.
 */

const INK = '#0f172a';
const DENSE = '#818cf8';
const SPARSE = '#fbbf24';

// Deterministic positions inside a 50 x 50 square: a jittered 7 x 7 grid, and four spread-out dots.
const denseDots = Array.from({ length: 49 }, (_, i) => {
  const col = i % 7;
  const row = Math.floor(i / 7);
  return { x: 4.5 + col * 6.9 + ((i * 7) % 3) - 1, y: 4.5 + row * 6.9 + ((i * 5) % 3) - 1 };
});
const sparseDots = [
  { x: 11, y: 13 },
  { x: 39, y: 22 },
  { x: 20, y: 40 },
  { x: 43, y: 43 },
];

const Square = ({ x, color, dots }: { x: number; color: string; dots: { x: number; y: number }[] }) => (
  <g transform={`translate(${x} 12)`}>
    <rect width={50} height={50} rx={3} fill="#1e293b" stroke={color} strokeWidth={1.4} />
    {dots.map((d, i) => (
      <circle key={i} cx={d.x} cy={d.y} r={1.9} fill={color} />
    ))}
  </g>
);

export const DensitySquares = () => (
  <svg
    viewBox="0 0 150 84"
    role="img"
    aria-labelledby="ds-t ds-d"
    className="mx-auto block w-full max-w-md rounded-2xl"
    style={{ background: INK, fontFamily: 'inherit' }}
  >
    <title id="ds-t">Dense and sparse population</title>
    <desc id="ds-d">Two squares of the same size. The first is crowded with many dots, a dense population. The second has only a few dots spread far apart, a sparse population. The dots are an illustration, not a count.</desc>
    <Square x={12} color={DENSE} dots={denseDots} />
    <Square x={88} color={SPARSE} dots={sparseDots} />
    <g textAnchor="middle" fontWeight={800}>
      <text x={75} y={35} fontSize={6.6} fill="#cbd5e1">same</text>
      <text x={75} y={43} fontSize={6.6} fill="#cbd5e1">area</text>
      <text x={37} y={76} fontSize={8} fill={DENSE}>dense</text>
      <text x={113} y={76} fontSize={8} fill={SPARSE}>sparse</text>
    </g>
  </svg>
);
