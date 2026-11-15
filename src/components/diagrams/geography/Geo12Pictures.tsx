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
