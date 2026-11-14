/**
 * Which way the planets go: every planet orbits the Sun in the SAME direction, and Earth
 * spins the same way too. Seen from above the Earth's North Pole that is ANTICLOCKWISE
 * (same convention as the Moon diagrams). Orbits are drawn as circles and not to scale.
 */

const INK = '#0f172a';
const CX = 50;
const CY = 47;

interface DiagramProps {
  className?: string;
}

/** Point on a circle at math angle `deg` (anticlockwise on screen, from the right). */
const at = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: CX + r * Math.cos(a), y: CY - r * Math.sin(a) };
};

const PLANETS = [
  { name: 'Mercury', r: 13, deg: 60, color: '#a8a29e', size: 1.6 },
  { name: 'Venus', r: 21, deg: 150, color: '#fbbf24', size: 2.2 },
  { name: 'Earth', r: 29, deg: 250, color: '#38bdf8', size: 2.6 },
  { name: 'Mars', r: 37, deg: 330, color: '#f87171', size: 2 },
];

/** Anticlockwise arrow along an orbit, a little ahead of the planet. */
const Arrow = ({ r, from, to, color }: { r: number; from: number; to: number; color: string }) => {
  const a = at(r, from);
  const b = at(r, to);
  return (
    <path
      d={`M${a.x} ${a.y} A${r} ${r} 0 0 0 ${b.x} ${b.y}`}
      fill="none"
      stroke={color}
      strokeWidth={1.3}
      strokeLinecap="round"
      markerEnd="url(#od-head)"
    />
  );
};

const OrbitDirection = ({ className }: DiagramProps) => {
  const earth = PLANETS[2];
  const e = at(earth.r, earth.deg);
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby="od-title od-desc"
      className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit', maxWidth: '28rem' }}
    >
      <title id="od-title">Every planet orbits the Sun the same way: anticlockwise</title>
      <desc id="od-desc">
        The Sun in the middle with the orbits of Mercury, Venus, Earth and Mars around it, seen from above Earth&apos;s North Pole. Arrows on every orbit point anticlockwise, so all the planets go round the Sun in the same direction. A small arrow around Earth shows that Earth also spins anticlockwise.
      </desc>
      <defs>
        <marker id="od-head" markerWidth={4} markerHeight={4} refX={2.4} refY={2} orient="auto">
          <path d="M0,0 L4,2 L0,4Z" fill="#f8fafc" />
        </marker>
        <marker id="od-spin" markerWidth={4} markerHeight={4} refX={2.4} refY={2} orient="auto">
          <path d="M0,0 L4,2 L0,4Z" fill="#7dd3fc" />
        </marker>
      </defs>

      {/* orbits and the arrows that show the direction */}
      {PLANETS.map((p) => (
        <g key={p.name}>
          <circle cx={CX} cy={CY} r={p.r} fill="none" stroke="#475569" strokeWidth={0.5} strokeDasharray="1.2 1.2" />
          <Arrow r={p.r} from={p.deg + 14} to={p.deg + 50} color="#f8fafc" />
        </g>
      ))}

      {/* the Sun */}
      <circle cx={CX} cy={CY} r={7.4} fill="#f59e0b" />
      <circle cx={CX} cy={CY} r={9.6} fill="#f59e0b" opacity={0.25} />
      <text x={CX} y={CY + 1.4} textAnchor="middle" fontSize={3.6} fill={INK} fontWeight={800}>Sun</text>

      {/* planets */}
      {PLANETS.map((p) => {
        const q = at(p.r, p.deg);
        return <circle key={p.name} cx={q.x} cy={q.y} r={p.size} fill={p.color} stroke={INK} strokeWidth={0.4} />;
      })}

      {/* Earth spins the same way */}
      <path
        d={`M${e.x + 5.2} ${e.y} A5.2 5.2 0 1 0 ${e.x} ${e.y + 5.2}`}
        fill="none"
        stroke="#7dd3fc"
        strokeWidth={0.9}
        markerEnd="url(#od-spin)"
      />
      <text x={e.x} y={e.y + 11.6} textAnchor="middle" fontSize={4.2} fill="#7dd3fc" fontWeight={800}>Earth</text>

      {/* which way we are looking */}
      <text x={50} y={96.5} textAnchor="middle" fontSize={3.6} fill="#94a3b8">Looking down on the North Pole</text>
    </svg>
  );
};

export default OrbitDirection;
