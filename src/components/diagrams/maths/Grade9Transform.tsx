import { r3 } from '../round';
import { PICTURE_COLORS } from './Grade7Pictures';
import { sa, type P2 } from './grade9SpaceDataHelpers';

/**
 * A coordinate grid for Grade 9 transformation geometry: shapes and their images are drawn from the
 * coordinates passed in (the images come from the transformation helpers), with an optional mirror
 * line and rays from the origin for enlargements. Same dark-panel style as Grade7Pictures.
 */

const INK = '#0f172a';
const MUTED = '#94a3b8';
const GRID = '#1e293b';
export const TRANSFORM_COLORS = PICTURE_COLORS;

export interface GridShape {
  points: P2[];
  color: string;
  dashed?: boolean;
  /** Label one corner (index) with its coordinates. */
  labelCorner?: number;
  /** A name before the coordinates, e.g. "A" gives "A(2, 3)". */
  name?: string;
  /** Label side: right (default) or left of the corner. */
  side?: 'left' | 'right';
  below?: boolean;
}

export const TransformGrid = ({
  x: [xMin, xMax],
  y: [yMin, yMax],
  shapes,
  mirror,
  rays,
  arrow,
  aria,
  className,
}: {
  x: [number, number];
  y: [number, number];
  shapes: GridShape[];
  mirror?: 'y-axis' | 'x-axis' | 'y=x';
  /** Draw dashed rays from the origin through these points (enlargement). */
  rays?: P2[];
  /** An arrow from one point to another (translation or rotation path). */
  arrow?: { from: P2; to: P2; color: string; curved?: boolean };
  aria: string;
  className?: string;
}) => {
  const u = Math.min(104 / (xMax - xMin), 84 / (yMax - yMin));
  const left = 8 + (104 - u * (xMax - xMin)) / 2;
  const top = 6;
  const X = (x: number) => r3(left + (x - xMin) * u);
  const Y = (y: number) => r3(top + (yMax - y) * u);
  const h = top + u * (yMax - yMin) + 8;
  const xs: number[] = [];
  for (let t = xMin; t <= xMax; t++) xs.push(t);
  const ys: number[] = [];
  for (let t = yMin; t <= yMax; t++) ys.push(t);
  const fs = 4;
  const showTick = (t: number, span: number) => span <= 8 || t % 2 === 0;
  return (
    <svg viewBox={`0 0 120 ${r3(h)}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
      {xs.map((t) => <line key={`gx${t}`} x1={X(t)} y1={Y(yMin)} x2={X(t)} y2={Y(yMax)} stroke={GRID} strokeWidth={0.4} />)}
      {ys.map((t) => <line key={`gy${t}`} x1={X(xMin)} y1={Y(t)} x2={X(xMax)} y2={Y(t)} stroke={GRID} strokeWidth={0.4} />)}
      <line x1={X(xMin)} y1={Y(0)} x2={X(xMax)} y2={Y(0)} stroke={MUTED} strokeWidth={0.7} />
      <line x1={X(0)} y1={Y(yMin)} x2={X(0)} y2={Y(yMax)} stroke={MUTED} strokeWidth={0.7} />
      {xs.filter((t) => t !== 0 && showTick(t, xMax - xMin)).map((t) => <text key={`tx${t}`} x={X(t)} y={r3(Y(0) + 4.4)} textAnchor="middle" fontSize={fs} fill={MUTED}>{sa(t)}</text>)}
      {ys.filter((t) => t !== 0 && showTick(t, yMax - yMin)).map((t) => <text key={`ty${t}`} x={r3(X(0) - 1.2)} y={r3(Y(t) + 1.4)} textAnchor="end" fontSize={fs} fill={MUTED}>{sa(t)}</text>)}
      {mirror && (() => {
        const [a, b] = mirror === 'y-axis' ? [{ x: 0, y: yMin }, { x: 0, y: yMax }] : mirror === 'x-axis' ? [{ x: xMin, y: 0 }, { x: xMax, y: 0 }] : [{ x: Math.max(xMin, yMin), y: Math.max(xMin, yMin) }, { x: Math.min(xMax, yMax), y: Math.min(xMax, yMax) }];
        return <line x1={X(a.x)} y1={Y(a.y)} x2={X(b.x)} y2={Y(b.y)} stroke={PICTURE_COLORS.rose} strokeWidth={1} strokeDasharray="2.4 1.4" />;
      })()}
      {rays?.map((p, i) => {
        const k = Math.min(xMax / Math.max(Math.abs(p.x), 1e-9), yMax / Math.max(Math.abs(p.y), 1e-9));
        return <line key={`r${i}`} x1={X(0)} y1={Y(0)} x2={X(p.x * k)} y2={Y(p.y * k)} stroke={MUTED} strokeWidth={0.5} strokeDasharray="1.4 1.2" />;
      })}
      {arrow && (
        <g>
          <path
            d={arrow.curved ? `M${X(arrow.from.x)},${Y(arrow.from.y)} A${r3(Math.hypot(arrow.from.x, arrow.from.y) * u)},${r3(Math.hypot(arrow.from.x, arrow.from.y) * u)} 0 0 0 ${X(arrow.to.x)},${Y(arrow.to.y)}` : `M${X(arrow.from.x)},${Y(arrow.from.y)} L${X(arrow.to.x)},${Y(arrow.to.y)}`}
            fill="none"
            stroke={arrow.color}
            strokeWidth={0.9}
            markerEnd="url(#g9arrow)"
          />
          <defs>
            <marker id="g9arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0,0 L6,3 L0,6 z" fill={arrow.color} />
            </marker>
          </defs>
        </g>
      )}
      {shapes.map((s, i) => {
        const pts = s.points.map((p) => `${X(p.x)},${Y(p.y)}`).join(' ');
        const lc = s.labelCorner !== undefined ? s.points[s.labelCorner] : null;
        return (
          <g key={i}>
            {s.points.length > 1 ? (
              <polygon points={pts} fill={s.color} fillOpacity={s.dashed ? 0.08 : 0.25} stroke={s.color} strokeWidth={0.9} strokeDasharray={s.dashed ? '1.6 1.2' : undefined} />
            ) : null}
            {s.points.map((p, j) => <circle key={j} cx={X(p.x)} cy={Y(p.y)} r={1.4} fill={s.color} />)}
            {lc && (
              <text x={r3(X(lc.x) + (s.side === 'left' ? -2 : 2))} y={r3(Y(lc.y) + (s.below ? 5.4 : -1.8))} textAnchor={s.side === 'left' ? 'end' : 'start'} fontSize={5.2} fontWeight={800} fill={s.color}>
                {`${s.name ?? ''}(${sa(lc.x)}, ${sa(lc.y)})`}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};
