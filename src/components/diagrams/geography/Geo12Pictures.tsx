import { r3 } from '../round';
import { Schematic } from '../Schematic';
import { ECONOMIC_SECTORS, SETTLEMENT_HIERARCHY } from './geo12Schematics';
import { COLD_ADVANCE, COLD_AIR, COLD_FRONT, DESC, H, LABELS, MOTION, SPACING, W, WARM_ADVANCE, WARM_FRONT, pointsAlong } from './geo12Cyclone';
import { BASIN, BASIN_DESC, BASIN_LABELS, CONFLUENCE, MAIN_RIVER, MOUTH, SOURCE, TRIBUTARIES, WATERSHED } from './geo12Pictures';

const pts = (a: readonly (readonly [number, number])[]) => a.map(([x, y]) => `${x},${y}`).join(' ');

/** A drainage basin: dashed watershed, main river with source and mouth, two tributaries, one confluence marked. */
export const DrainageBasin = () => (
  <svg
    viewBox={`0 0 ${BASIN.width} ${BASIN.height}`}
    role="img"
    aria-label={`A drainage basin. ${BASIN_DESC}`}
    className="mx-auto block w-full max-w-lg rounded-2xl"
    style={{ background: '#0f172a', fontFamily: 'inherit' }}
  >
    <polygon points={pts(WATERSHED)} fill="#14532d" fillOpacity={0.35} stroke="#fb7185" strokeWidth={1} strokeDasharray="3 2" strokeLinejoin="round" />
    {TRIBUTARIES.map((t) => (
      <polyline key={pts(t)} points={pts(t)} fill="none" stroke="#38bdf8" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    ))}
    <polyline points={pts(MAIN_RIVER)} fill="none" stroke="#38bdf8" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx={SOURCE[0]} cy={SOURCE[1]} r={2.1} fill="#f8fafc" />
    <circle cx={CONFLUENCE[0]} cy={CONFLUENCE[1]} r={2.3} fill="#fbbf24" />
    <circle cx={MOUTH[0]} cy={MOUTH[1]} r={2.1} fill="#34d399" />
    {BASIN_LABELS.map((l) => (
      <text key={l.text} x={l.x} y={l.y} textAnchor={l.anchor} fontSize={6.2} fontWeight={800} fill={l.tone}>
        {l.text}
      </text>
    ))}
  </svg>
);

/** A southern-hemisphere mid-latitude cyclone: wave in the polar front, low, cold front (triangles) and warm front (half circles). */
export const MidLatitudeCyclone = () => {
  const cold = pointsAlong(COLD_FRONT, SPACING);
  const warm = pointsAlong(WARM_FRONT, SPACING);
  const poly = (a: readonly (readonly [number, number])[]) => a.map(([x, y]) => `${x},${y}`).join(' ');
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`A mid-latitude cyclone. ${DESC}`}
      className="mx-auto block w-full max-w-lg rounded-2xl"
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      <defs>
        <marker id="geo12-cyc-head" viewBox="0 0 6 6" refX={5.2} refY={3} markerWidth={5} markerHeight={5} orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="#e2e8f0" />
        </marker>
      </defs>
      <rect x={0} y={0} width={W} height={H} fill="#f59e0b" fillOpacity={0.13} />
      <polygon points={poly(COLD_AIR)} fill="#38bdf8" fillOpacity={0.2} />
      <line x1={0} y1={20} x2={54} y2={20} stroke="#e2e8f0" strokeWidth={0.8} strokeDasharray="3 2" />
      <line x1={150} y1={20} x2={W} y2={20} stroke="#e2e8f0" strokeWidth={0.8} strokeDasharray="3 2" />
      <polyline points={poly(COLD_FRONT)} fill="none" stroke="#38bdf8" strokeWidth={1.4} strokeLinejoin="round" />
      <polyline points={poly(WARM_FRONT)} fill="none" stroke="#fb7185" strokeWidth={1.4} strokeLinejoin="round" />
      {cold.map(({ p, tangent }) => {
        const [nx, ny] = COLD_ADVANCE;
        const [tx, ty] = tangent;
        const pts: [number, number][] = [[p[0] - tx * 2.2, p[1] - ty * 2.2], [p[0] + tx * 2.2, p[1] + ty * 2.2], [p[0] + nx * 4, p[1] + ny * 4]];
        return <polygon key={`c${p[0]}-${p[1]}`} points={pts.map(([x, y]) => `${r3(x)},${r3(y)}`).join(' ')} fill="#38bdf8" />;
      })}
      {warm.map(({ p, tangent }) => {
        const [nx, ny] = WARM_ADVANCE;
        const [tx, ty] = tangent;
        const a: [number, number] = [p[0] - tx * 2.2, p[1] - ty * 2.2];
        const b: [number, number] = [p[0] + tx * 2.2, p[1] + ty * 2.2];
        const sweep = tx * ny - ty * nx > 0 ? 1 : 0;
        return <path key={`w${p[0]}-${p[1]}`} d={`M${r3(a[0])},${r3(a[1])} A2.2,2.2 0 0 ${sweep} ${r3(b[0])},${r3(b[1])}`} fill="#fb7185" />;
      })}
      <circle cx={88} cy={60} r={2.6} fill="#f8fafc" />
      <line x1={MOTION.from[0]} y1={MOTION.from[1]} x2={MOTION.to[0]} y2={MOTION.to[1]} stroke="#e2e8f0" strokeWidth={0.9} markerEnd="url(#geo12-cyc-head)" />
      {LABELS.map((l) => (
        <text key={l.text} x={l.x} y={l.y} textAnchor={l.anchor} fontSize={6.2} fontWeight={800} fill={l.tone}>
          {l.text}
        </text>
      ))}
    </svg>
  );
};

export const SettlementHierarchyPicture = () => <Schematic spec={SETTLEMENT_HIERARCHY} />;
export const EconomicSectorsPicture = () => <Schematic spec={ECONOMIC_SECTORS} />;
