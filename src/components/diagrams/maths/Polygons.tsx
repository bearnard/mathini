import { regularPolygon } from './mathsHelpers';
import { r3 } from '../round';

/**
 * Polygons with their sides NUMBERED so a child can count them: 1, 2, 3 ... on the sides. A circle
 * is drawn as the non-example (no straight sides, so not a polygon).
 */

const INK = '#0f172a';
const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#fb7185', '#38bdf8'];

export interface PolygonSpec {
  name: string;
  /** Number of sides; 0 draws a circle (not a polygon). */
  sides: number;
  /** For a rectangle: a custom 2:1 shape instead of a regular polygon. */
  rect?: boolean;
}

const cornersOf = (s: PolygonSpec, cx: number, cy: number, r: number) => {
  if (s.rect) return [{ x: cx - r, y: cy - r / 2 }, { x: cx + r, y: cy - r / 2 }, { x: cx + r, y: cy + r / 2 }, { x: cx - r, y: cy + r / 2 }];
  const start = s.sides === 4 ? 45 : s.sides === 8 ? 22.5 : 0;
  return regularPolygon(s.sides, cx, cy, s.sides === 4 ? r * 0.95 : r, start);
};

const PolygonRow = ({ shapes, className }: { shapes: PolygonSpec[]; className?: string }) => {
  const n = shapes.length;
  const cols = n === 4 ? 2 : n;
  const rows = Math.ceil(n / cols);
  const w = 120 / cols;
  const TILE = 54;
  const R = Math.min(14, w / 2 - 9);
  return (
    <svg
      viewBox={`0 0 120 ${rows * TILE + 4}`}
      role="img"
      aria-label={shapes.map((s) => (s.sides === 0 ? `${s.name}: no straight sides, so not a polygon` : `${s.name}: ${s.sides} sides`)).join('. ') + '.'}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      {shapes.map((s, i) => {
        const cx = w * (i % cols) + w / 2;
        const oy = Math.floor(i / cols) * TILE;
        const cy = oy + 19;
        const color = COLORS[i % COLORS.length];
        if (s.sides === 0) {
          return (
            <g key={s.name}>
              <circle cx={cx} cy={cy} r={R} fill={color} opacity={0.25} stroke={color} strokeWidth={1.8} />
              <g stroke="#fb7185" strokeWidth={2} strokeLinecap="round">
                <line x1={cx + R * 0.5} y1={cy - R - 3} x2={cx + R * 0.5 + 6} y2={cy - R + 3} />
                <line x1={cx + R * 0.5 + 6} y1={cy - R - 3} x2={cx + R * 0.5} y2={cy - R + 3} />
              </g>
              <text x={cx} y={oy + 44} textAnchor="middle" fontSize={5.8} fontWeight={800} fill="#f8fafc">{s.name}</text>
              <text x={cx} y={oy + 50} textAnchor="middle" fontSize={4.4} fontWeight={700} fill="#fda4af">no straight sides</text>
              <text x={cx} y={oy + 55.6} textAnchor="middle" fontSize={4.4} fontWeight={700} fill="#fda4af">not a polygon</text>
            </g>
          );
        }
        const pts = cornersOf(s, cx, cy, R);
        return (
          <g key={s.name}>
            <polygon points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill={color} fillOpacity={0.25} stroke={color} strokeWidth={1.8} strokeLinejoin="round" />
            {pts.map((p, k) => {
              const q = pts[(k + 1) % pts.length];
              const mx = (p.x + q.x) / 2;
              const my = (p.y + q.y) / 2;
              const dx = mx - cx;
              const dy = my - cy;
              const len = Math.hypot(dx, dy) || 1;
              return (
                <text key={k} x={r3(mx + (dx / len) * 5.2)} y={r3(my + (dy / len) * 5.2 + 1.6)} textAnchor="middle" fontSize={4.6} fontWeight={800} fill="#fde68a">{k + 1}</text>
              );
            })}
            <text x={cx} y={oy + 44} textAnchor="middle" fontSize={5.8} fontWeight={800} fill="#f8fafc">{s.name}</text>
            <text x={cx} y={oy + 50.4} textAnchor="middle" fontSize={4.8} fontWeight={700} fill="#cbd5e1">{s.sides} sides</text>
          </g>
        );
      })}
    </svg>
  );
};

export default PolygonRow;
