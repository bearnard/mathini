/**
 * Properties of materials.
 *
 * PotMaterials: one object, two materials, two jobs. The metal body CONDUCTS heat (red
 * arrows run up through it and along it); the plastic handle INSULATES (the heat is
 * stopped by the bar, so the hand holding the handle is safe).
 *
 * PropertyIcons: three properties as tiny pictures: transparent (light passes
 * through), waterproof (water runs off) and flexible (it bends).
 */

const INK = '#0f172a';
const HEAT = '#f87171';
const GOLD = '#fbbf24';
const RAIN = '#38bdf8';

interface DiagramProps {
  className?: string;
}

export const PotMaterials = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 100 80"
    role="img"
    aria-labelledby="pot-title pot-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '28rem', aspectRatio: '100 / 80' }}
  >
    <title id="pot-title">A pot made of metal and plastic</title>
    <desc id="pot-desc">
      A pot on a flame. Heat arrows travel up through the metal body and along it, because metal conducts heat. A bar stops the heat before it reaches the plastic handle, because plastic is an insulator, so the hand holding the handle is safe.
    </desc>
    <defs>
      <marker id="pot-arrow" markerWidth={3.4} markerHeight={3.4} refX={1.7} refY={1.7} orient="auto">
        <path d="M0,0 L3.4,1.7 L0,3.4Z" fill={HEAT} />
      </marker>
    </defs>

    {/* flame */}
    {[24, 38, 52].map((x) => (
      <g key={x} transform={`translate(${x} 62)`}>
        <path d="M0 0 q-5 4.6 0 9.6 q5 -5 0 -9.6Z" fill="#fb923c" />
        <path d="M0 3.6 q-2.1 2.2 0 4.6 q2.1 -2.4 0 -4.6Z" fill={GOLD} />
      </g>
    ))}

    {/* metal body */}
    <path d="M12 28 L12 52 Q12 60 20 60 L56 60 Q64 60 64 52 L64 28 Z" fill="#94a3b8" />
    <path d="M16 31 L16 52" stroke="#e2e8f0" strokeWidth={1.4} strokeLinecap="round" opacity={0.6} />
    <rect x={10} y={25} width={56} height={5} rx={2} fill="#cbd5e1" />

    {/* plastic handle */}
    <rect x={66} y={29} width={26} height={7} rx={3.2} fill="#f97316" />

    {/* heat arrows: up into the metal, then along it towards the handle */}
    {[24, 38, 52].map((x) => (
      <line key={x} x1={x} y1={57} x2={x} y2={44} stroke={HEAT} strokeWidth={1.5} markerEnd="url(#pot-arrow)" />
    ))}
    <path d="M22 38 L52 38" stroke={HEAT} strokeWidth={1.5} markerEnd="url(#pot-arrow)" />
    {/* the stop bar: heat does not get into the plastic */}
    <line x1={65} y1={26} x2={65} y2={40} stroke={HEAT} strokeWidth={2.4} strokeLinecap="round" />

    {/* a hand holds the handle: palm, fingers curled over it */}
    <g>
      <rect x={76} y={21} width={14} height={9} rx={3} fill="#fcd9b6" />
      {[77.6, 81.2, 84.8, 88.4].map((x) => (
        <rect key={x} x={x - 1.4} y={27} width={3} height={11} rx={1.5} fill="#fcd9b6" stroke="#d6a77a" strokeWidth={0.4} />
      ))}
    </g>

    <text x={38} y={34} textAnchor="middle" fontSize={5.4} fill={INK} fontWeight={800}>Metal</text>
    <text x={79} y={48} textAnchor="middle" fontSize={5.4} fill="#fdba74" fontWeight={800}>Plastic</text>
  </svg>
);

const Tile = ({ x, name, children }: { x: number; name: string; children: React.ReactNode }) => (
  <g transform={`translate(${x} 0)`}>
    <rect x={0} y={0} width={36} height={52} rx={3} fill="#1e293b" />
    {children}
    <text x={18} y={47.5} textAnchor="middle" fontSize={5.4} fill="#f8fafc" fontWeight={800}>{name}</text>
  </g>
);

export const PropertyIcons = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 116 52"
    role="img"
    aria-labelledby="prop-title prop-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '32rem', aspectRatio: '116 / 52' }}
  >
    <title id="prop-title">Three properties of materials: transparent, waterproof, flexible</title>
    <desc id="prop-desc">
      Transparent: light passes straight through a glass window. Waterproof: rain runs off an umbrella without getting through. Flexible: a plastic strip bends and springs back.
    </desc>

    <Tile x={0} name="Transparent">
      {/* light goes in and comes out the other side */}
      <rect x={13} y={6} width={10} height={28} rx={1} fill="#7dd3fc" opacity={0.55} stroke="#e2e8f0" strokeWidth={1} />
      <path d="M18 6 V34 M13 20 H23" stroke="#e2e8f0" strokeWidth={0.6} />
      {[12, 20, 28].map((y) => (
        <g key={y}>
          <line x1={2} y1={y} x2={12} y2={y} stroke={GOLD} strokeWidth={1.2} />
          <line x1={24} y1={y} x2={33} y2={y} stroke={GOLD} strokeWidth={1.2} />
        </g>
      ))}
    </Tile>

    <Tile x={40} name="Waterproof">
      <path d="M6 24 A12 12 0 0 1 30 24 Z" fill="#ef4444" />
      <path d="M18 24 V33 q0 3 3 3" fill="none" stroke="#e2e8f0" strokeWidth={1} />
      {[[8, 3], [18, 1], [28, 3], [13, 8], [23, 8], [3, 14], [33, 14]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} q-1.2 2 0 3.4 q1.2 -1.4 0 -3.4Z`} fill={RAIN} />
      ))}
    </Tile>

    <Tile x={80} name="Flexible">
      <path d="M5 30 Q18 6 31 30" fill="none" stroke="#a78bfa" strokeWidth={4} strokeLinecap="round" />
      <path d="M5 33 L31 33" fill="none" stroke="#a78bfa" strokeWidth={1} strokeDasharray="1.4 1.4" opacity={0.6} />
      <path d="M9 12 q-3 4 -1 8 M27 12 q3 4 1 8" fill="none" stroke={GOLD} strokeWidth={1} strokeLinecap="round" />
    </Tile>
  </svg>
);
