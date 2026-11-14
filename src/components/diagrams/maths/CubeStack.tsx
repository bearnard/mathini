import { prismMeasures } from './mathsHelpers';
import { r3 } from '../round';

/**
 * A block of unit cubes in isometric view: length x breadth x height. Bottom layer and upper
 * layers are shaded differently so "layers" can be counted. The volume and the cubes per layer
 * come from prismMeasures().
 */

interface CubeStackProps {
  length: number;
  breadth: number;
  height: number;
  /** Write the three edge lengths on the edges. */
  showDims?: boolean;
  /** Under the picture: "4 × 3 = 12 in a layer", "× 2 layers = 24 cm³". */
  showSum?: boolean;
  /** Just write the number of cubes ("12 cubes"). */
  showCount?: boolean;
  /** Any one line of text under the picture. */
  caption?: string;
  className?: string;
}

const LAYER_COLORS = [
  { top: '#c7d2fe', left: '#818cf8', right: '#6366f1' },
  { top: '#a7f3d0', left: '#34d399', right: '#10b981' },
  { top: '#fde68a', left: '#fbbf24', right: '#f59e0b' },
];

const CubeStack = ({ length: l, breadth: b, height: h, showDims, showSum, showCount, caption, className }: CubeStackProps) => {
  const m = prismMeasures(l, b, h);
  // size the cubes to fit the picture: big for a single cube, smaller for a larger block
  const U = Math.min(24, 100 / ((l + b) * 0.866), 46 / ((l + b) / 2 + h));
  const DX = U * 0.866;
  const DY = U * 0.5;
  const ox = 60 - ((l - b) * DX) / 2;
  const oy = 12 + h * U;
  const P = (x: number, y: number, z: number) => `${r3(ox + (x - y) * DX)},${r3(oy + (x + y) * DY - z * U)}`;
  const cubes: { x: number; y: number; z: number }[] = [];
  for (let z = 0; z < h; z++) for (let y = 0; y < b; y++) for (let x = 0; x < l; x++) cubes.push({ x, y, z });
  cubes.sort((a, c) => a.z - c.z || a.x + a.y - (c.x + c.y));
  const dimText = { fontSize: 5.6, fontWeight: 800, fill: '#e2e8f0' } as const;
  const bottomY = oy + (l + b) * DY;
  return (
    <svg
      viewBox="0 0 120 92"
      role="img"
      aria-label={`A block of unit cubes ${l} long, ${b} wide and ${h} high: ${m.perLayer} cubes in each layer and ${h} layer${h > 1 ? 's' : ''}, so ${m.volume} cubes in all.`}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      {cubes.map(({ x, y, z }) => {
        const c = LAYER_COLORS[z % LAYER_COLORS.length];
        return (
          <g key={`${x}-${y}-${z}`} stroke="#0f172a" strokeWidth={0.4} strokeLinejoin="round">
            <polygon points={`${P(x, y, z + 1)} ${P(x + 1, y, z + 1)} ${P(x + 1, y + 1, z + 1)} ${P(x, y + 1, z + 1)}`} fill={c.top} />
            <polygon points={`${P(x, y + 1, z)} ${P(x + 1, y + 1, z)} ${P(x + 1, y + 1, z + 1)} ${P(x, y + 1, z + 1)}`} fill={c.left} />
            <polygon points={`${P(x + 1, y, z)} ${P(x + 1, y + 1, z)} ${P(x + 1, y + 1, z + 1)} ${P(x + 1, y, z + 1)}`} fill={c.right} />
          </g>
        );
      })}
      {showDims && (
        <g>
          <text x={r3(ox + (l / 2 - b) * DX - 3)} y={r3(oy + (l / 2 + b) * DY + 8)} textAnchor="middle" {...dimText}>{l} cm</text>
          <text x={r3(ox + (l - b / 2) * DX + 4)} y={r3(oy + (l + b / 2) * DY + 7)} {...dimText}>{b} cm</text>
          <text x={r3(ox - b * DX - 3)} y={r3(oy + b * DY - (h * U) / 2 + 2)} textAnchor="end" {...dimText}>{h} cm</text>
        </g>
      )}
      {showCount && (
        <text x={60} y={r3(bottomY + 14)} textAnchor="middle" fontSize={7} fontWeight={800} fill="#c7d2fe">{m.volume} cubes</text>
      )}
      {caption && (
        <text x={60} y={r3(bottomY + 14)} textAnchor="middle" fontSize={7.4} fontWeight={800} fill="#fde68a">{caption}</text>
      )}
      {showSum && (
        <g textAnchor="middle" fontWeight={800}>
          <text x={60} y={r3(bottomY + 14)} fontSize={5.8} fill="#cbd5e1">{l} × {b} = {m.perLayer} cube{m.perLayer === 1 ? '' : 's'} in each layer</text>
          <text x={60} y={r3(bottomY + 22)} fontSize={6.6} fill="#fde68a">{m.perLayer} × {h} layer{h > 1 ? 's' : ''} = {m.volume} cm³</text>
        </g>
      )}
    </svg>
  );
};

export default CubeStack;
