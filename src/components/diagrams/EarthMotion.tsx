import { OrbitMoon, pos } from './MoonPhases';
import { r3 } from './round';

/**
 * Two small top-down pictures for the Earth & Moon lesson, both seen from above the North Pole
 * (so the motion is anticlockwise, as in the other orbit diagrams):
 *  - EarthOrbit: Earth revolving round the Sun, one orbit = one year.
 *  - MoonOrbit: the Moon going round Earth with the half facing the Sun always lit.
 */

const INK = '#0f172a';
const CX = 50;
const CY = 46;

const at = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: r3(CX + r * Math.cos(a)), y: r3(CY - r * Math.sin(a)) };
};

interface DiagramProps {
  className?: string;
}

export const EarthOrbit = ({ className }: DiagramProps) => {
  const R = 33;
  const earth = at(R, 300);
  const from = at(R, 314);
  const to = at(R, 356);
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby="eo-title eo-desc"
      className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit', maxWidth: '24rem' }}
    >
      <title id="eo-title">Earth revolves round the Sun once a year</title>
      <desc id="eo-desc">
        The Sun in the middle and Earth on its orbit, seen from above the North Pole. An arrow shows Earth moving anticlockwise. One full trip round the Sun is one year, about 365 and a quarter days.
      </desc>
      <defs>
        <marker id="eo-head" markerWidth={4.4} markerHeight={4.4} refX={2.6} refY={2.2} orient="auto">
          <path d="M0,0 L4.4,2.2 L0,4.4Z" fill="#f8fafc" />
        </marker>
      </defs>
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#475569" strokeWidth={0.6} strokeDasharray="1.4 1.4" />
      {[30, 120, 210].map((d) => {
        const g = at(R, d);
        return <circle key={d} cx={g.x} cy={g.y} r={2.6} fill="#38bdf8" opacity={0.28} />;
      })}
      <path d={`M${from.x} ${from.y} A${R} ${R} 0 0 0 ${to.x} ${to.y}`} fill="none" stroke="#f8fafc" strokeWidth={1.4} strokeLinecap="round" markerEnd="url(#eo-head)" />
      <circle cx={CX} cy={CY} r={9} fill="#f59e0b" />
      <circle cx={CX} cy={CY} r={12} fill="#f59e0b" opacity={0.22} />
      <text x={CX} y={CY + 1.5} textAnchor="middle" fontSize={4} fontWeight={800} fill={INK}>Sun</text>
      <circle cx={earth.x} cy={earth.y} r={4} fill="#38bdf8" stroke={INK} strokeWidth={0.5} />
      <text x={earth.x - 6} y={earth.y + 9} textAnchor="end" fontSize={5} fontWeight={800} fill="#7dd3fc">Earth</text>
      <text x={50} y={92} textAnchor="middle" fontSize={5.6} fontWeight={800} fill="#e2e8f0">One orbit = 1 year</text>
      <text x={50} y={97.6} textAnchor="middle" fontSize={3.4} fill="#94a3b8">Looking down on the North Pole</text>
    </svg>
  );
};

export const MoonOrbit = ({ className }: DiagramProps) => {
  const R = 27;
  const p = (i: number) => {
    const q = pos(i, R);
    return { x: r3(q.x), y: r3(q.y - 4) };
  };
  const moon = p(2);
  const from = p(2.4);
  const to = p(3.1);
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby="mo-title mo-desc"
      className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit', maxWidth: '24rem' }}
    >
      <title id="mo-title">The Moon orbits Earth in about a month</title>
      <desc id="mo-desc">
        Sunlight comes from the left. Earth is in the middle and the Moon goes round it, seen from above the North Pole. At every place on the orbit the half of the Moon that faces the Sun is lit. An arrow shows the Moon moving anticlockwise. One trip takes about a month.
      </desc>
      <defs>
        <marker id="mo-head" markerWidth={4.4} markerHeight={4.4} refX={2.6} refY={2.2} orient="auto">
          <path d="M0,0 L4.4,2.2 L0,4.4Z" fill="#f8fafc" />
        </marker>
      </defs>
      <g stroke="#fbbf24" strokeWidth={0.5} strokeDasharray="1.6 1.6" opacity={0.35}>
        {[CY - 12, CY, CY + 12].map((y) => (
          <line key={y} x1={7} y1={y} x2={93} y2={y} />
        ))}
      </g>
      <circle cx={-5} cy={CY} r={11} fill="#f59e0b" />
      <circle cx={-5} cy={CY} r={14} fill="#f59e0b" opacity={0.25} />
      <text x={2} y={CY - 17} fontSize={3.8} fontWeight={800} fill="#fbbf24">Sun</text>
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#475569" strokeWidth={0.6} strokeDasharray="1.4 1.4" />
      {[0, 1, 3, 4, 5, 6, 7].map((i) => {
        const g = p(i);
        return (
          <g key={i} opacity={0.5}>
            <OrbitMoon cx={g.x} cy={g.y} r={2.4} />
          </g>
        );
      })}
      <path d={`M${from.x} ${from.y} A${R} ${R} 0 0 0 ${to.x} ${to.y}`} fill="none" stroke="#f8fafc" strokeWidth={1.2} strokeLinecap="round" markerEnd="url(#mo-head)" />
      <circle cx={CX} cy={CY} r={7} fill="#38bdf8" />
      <text x={CX} y={CY + 1.4} textAnchor="middle" fontSize={3.6} fontWeight={800} fill="#0c4a6e">Earth</text>
      <OrbitMoon cx={moon.x} cy={moon.y} r={4.6} />
      <text x={moon.x + 7} y={moon.y + 7.5} fontSize={4.6} fontWeight={800} fill="#e2e8f0">Moon</text>
      <text x={50} y={92} textAnchor="middle" fontSize={5.6} fontWeight={800} fill="#e2e8f0">One orbit: about a month</text>
      <text x={50} y={97.6} textAnchor="middle" fontSize={3.4} fill="#94a3b8">Looking down on the North Pole</text>
    </svg>
  );
};
