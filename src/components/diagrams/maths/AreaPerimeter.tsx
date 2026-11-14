import { rectMeasures } from './mathsHelpers';
import { r3 } from '../round';

/**
 * Perimeter and area of a rectangle on a unit grid, so the two ideas look different:
 * PerimeterGrid walks round the OUTSIDE edge (a length, in cm), AreaGrid fills the INSIDE with
 * unit squares (a count of squares, in cm2). ShapePair shows a square and a rectangle with BOTH
 * measures each. Every number comes from rectMeasures().
 */

const INK = '#0f172a';
const PERIM = '#fbbf24';
const AREA = '#34d399';
const GRID = '#475569';

interface RectProps {
  length: number;
  breadth: number;
  className?: string;
}

const frame = (className?: string) =>
  `mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`;

const UnitGrid = ({ x0, y0, l, b, u, fill }: { x0: number; y0: number; l: number; b: number; u: number; fill?: string }) => (
  <g>
    {fill && <rect x={x0} y={y0} width={l * u} height={b * u} fill={fill} opacity={0.32} />}
    <g stroke={GRID} strokeWidth={0.45}>
      {Array.from({ length: l + 1 }).map((_, i) => (
        <line key={`v${i}`} x1={r3(x0 + i * u)} y1={y0} x2={r3(x0 + i * u)} y2={r3(y0 + b * u)} />
      ))}
      {Array.from({ length: b + 1 }).map((_, j) => (
        <line key={`h${j}`} x1={x0} y1={r3(y0 + j * u)} x2={r3(x0 + l * u)} y2={r3(y0 + j * u)} />
      ))}
    </g>
  </g>
);

export const PerimeterGrid = ({ length, breadth, className }: RectProps) => {
  const { perimeter } = rectMeasures(length, breadth);
  const u = 13;
  const x0 = 9;
  const y0 = 24;
  const w = length * u;
  const h = breadth * u;
  return (
    <svg
      viewBox="0 0 120 104"
      role="img"
      aria-label={`A rectangle ${length} centimetres long and ${breadth} centimetres wide on a grid. Walking round the outside edge covers ${perimeter} centimetres: ${length} plus ${breadth} plus ${length} plus ${breadth}.`}
      className={frame(className)}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <defs>
        <marker id="pg-head" markerWidth={4.4} markerHeight={4.4} refX={2.4} refY={2.2} orient="auto">
          <path d="M0,0 L4.4,2.2 L0,4.4Z" fill={PERIM} />
        </marker>
      </defs>
      <UnitGrid x0={x0} y0={y0} l={length} b={breadth} u={u} />
      <rect x={x0} y={y0} width={w} height={h} fill="none" stroke={PERIM} strokeWidth={2.4} strokeLinejoin="round" />
      {/* the walk: a short arrow on each side, going clockwise */}
      <g stroke={PERIM} strokeWidth={1.4} strokeLinecap="round" fill="none">
        <line x1={r3(x0 + w / 2 - 6)} y1={y0 - 4.5} x2={r3(x0 + w / 2 + 6)} y2={y0 - 4.5} markerEnd="url(#pg-head)" />
        <line x1={x0 + w + 4.5} y1={r3(y0 + h / 2 - 6)} x2={x0 + w + 4.5} y2={r3(y0 + h / 2 + 6)} markerEnd="url(#pg-head)" />
        <line x1={r3(x0 + w / 2 + 6)} y1={y0 + h + 4.5} x2={r3(x0 + w / 2 - 6)} y2={y0 + h + 4.5} markerEnd="url(#pg-head)" />
        <line x1={x0 - 4.5} y1={r3(y0 + h / 2 + 6)} x2={x0 - 4.5} y2={r3(y0 + h / 2 - 6)} markerEnd="url(#pg-head)" />
      </g>
      <text x={r3(x0 + w / 2)} y={y0 - 9} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#e2e8f0">{length} cm</text>
      <text x={x0 + w + 9} y={r3(y0 + h / 2 + 2.2)} fontSize={6.4} fontWeight={800} fill="#e2e8f0">{breadth} cm</text>
      <text x={60} y={98} textAnchor="middle" fontSize={7} fontWeight={800} fill={PERIM}>
        P = 2 × ({length} + {breadth}) = {perimeter} cm
      </text>
    </svg>
  );
};

export const AreaGrid = ({ length, breadth, className }: RectProps) => {
  const { area } = rectMeasures(length, breadth);
  const u = 13;
  const x0 = 9;
  const y0 = 24;
  const w = length * u;
  const h = breadth * u;
  return (
    <svg
      viewBox="0 0 120 104"
      role="img"
      aria-label={`The same kind of rectangle, ${length} centimetres long and ${breadth} wide, filled with unit squares: ${length} squares in each row and ${breadth} rows, so ${area} square centimetres.`}
      className={frame(className)}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <UnitGrid x0={x0} y0={y0} l={length} b={breadth} u={u} fill={AREA} />
      <rect x={x0} y={y0} width={w} height={h} fill="none" stroke={AREA} strokeWidth={1.4} />
      <path d={`M${x0} ${y0 - 4} v-2.4 H${x0 + w} v2.4`} fill="none" stroke="#e2e8f0" strokeWidth={1} />
      <text x={r3(x0 + w / 2)} y={y0 - 9.4} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#e2e8f0">{length} in a row</text>
      <path d={`M${x0 + w + 4} ${y0} h2.4 V${y0 + h} h-2.4`} fill="none" stroke="#e2e8f0" strokeWidth={1} />
      <text x={x0 + w + 10} y={r3(y0 + h / 2 + 2.2)} fontSize={6.4} fontWeight={800} fill="#e2e8f0">{breadth} rows</text>
      <text x={60} y={98} textAnchor="middle" fontSize={7} fontWeight={800} fill={AREA}>
        A = {length} × {breadth} = {area} cm²
      </text>
    </svg>
  );
};

/** A square and a rectangle side by side, each with its perimeter AND its area. */
export const ShapePair = ({ className }: { className?: string }) => {
  const u = 4.6;
  const shapes = [
    { name: 'Square', l: 6, b: 6, x0: 10, color: '#fbbf24' },
    { name: 'Rectangle', l: 8, b: 5, x0: 66, color: '#818cf8' },
  ];
  const base = 52;
  return (
    <svg
      viewBox="0 0 120 104"
      role="img"
      aria-label={shapes.map((s) => { const m = rectMeasures(s.l, s.b); return `${s.name} ${s.l} centimetres by ${s.b}: perimeter ${m.perimeter} centimetres, area ${m.area} square centimetres.`; }).join(' ')}
      className={frame(className)}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      {shapes.map((s) => {
        const m = rectMeasures(s.l, s.b);
        const w = s.l * u;
        const h = s.b * u;
        const cx = s.x0 + 22;
        return (
          <g key={s.name}>
            <text x={cx} y={11} textAnchor="middle" fontSize={6.6} fontWeight={800} fill={s.color}>{s.name}</text>
            <text x={cx} y={18} textAnchor="middle" fontSize={4.8} fontWeight={700} fill="#cbd5e1">{s.l} cm by {s.b} cm</text>
            <UnitGrid x0={r3(cx - w / 2)} y0={base - h} l={s.l} b={s.b} u={u} fill={s.color} />
            <rect x={r3(cx - w / 2)} y={base - h} width={w} height={h} fill="none" stroke={s.color} strokeWidth={1.6} />
            <text x={cx} y={66} textAnchor="middle" fontSize={5.8} fontWeight={800} fill="#fde68a">P = {m.perimeter} cm</text>
            <text x={cx} y={76} textAnchor="middle" fontSize={5.8} fontWeight={800} fill="#6ee7b7">A = {m.area} cm²</text>
          </g>
        );
      })}
      <text x={60} y={90} textAnchor="middle" fontSize={4.4} fontWeight={700} fill="#94a3b8">P = the way round. A = the squares inside.</text>
    </svg>
  );
};
