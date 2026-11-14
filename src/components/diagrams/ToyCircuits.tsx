/**
 * Circuits in toys and models: the same simple circuit (a cell and wires in a closed
 * loop) with a different part doing the job: a BULB makes light, a MOTOR makes things
 * move (here it spins a fan) and a BUZZER makes sound.
 */

const INK = '#0f172a';
const WIRE = '#cbd5e1';
const GOLD = '#fbbf24';

interface DiagramProps {
  className?: string;
}

/** A closed loop with a cell on the left; children are drawn on the top wire. */
const Loop = ({ children }: { children: React.ReactNode }) => (
  <g>
    {/* wires, with a gap on the left for the cell */}
    <path d="M7 19 V10 H31 V32 H7 V24" fill="none" stroke={WIRE} strokeWidth={1.4} strokeLinejoin="round" />
    {/* the cell: a long plate (+) and a short plate (-) */}
    <line x1={3.4} y1={19} x2={10.6} y2={19} stroke={GOLD} strokeWidth={1.6} strokeLinecap="round" />
    <line x1={5} y1={24} x2={9} y2={24} stroke="#94a3b8" strokeWidth={2.4} strokeLinecap="round" />
    {children}
  </g>
);

const Tile = ({ x, name, children }: { x: number; name: string; children: React.ReactNode }) => (
  <g transform={`translate(${x} 0)`}>
    <rect width={38} height={54} rx={3} fill="#1e293b" />
    <g transform="translate(0 4)"><Loop>{children}</Loop></g>
    <text x={19} y={47.5} textAnchor="middle" fontSize={6} fill="#f8fafc" fontWeight={800}>{name}</text>
  </g>
);

const ToyCircuits = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 118 54"
    role="img"
    aria-labelledby="toy-title toy-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '32rem', aspectRatio: '118 / 54' }}
  >
    <title id="toy-title">A circuit can make a toy light up, move or make a sound</title>
    <desc id="toy-desc">
      Three closed circuits, each with a cell and wires. In the first, a bulb lights up. In the second, a motor spins a fan so something moves. In the third, a buzzer makes a sound.
    </desc>

    {/* LIGHT: a glowing bulb */}
    <Tile x={0} name="Light">
      <g transform="translate(19 10)">
        <circle r={7.5} fill={GOLD} opacity={0.22} />
        <circle r={4.6} fill="#fde68a" stroke={GOLD} strokeWidth={0.8} />
        <rect x={-2} y={4} width={4} height={2.6} rx={0.6} fill="#94a3b8" />
        <g stroke={GOLD} strokeWidth={0.9} strokeLinecap="round">
          <line x1={-9} y1={-1} x2={-7} y2={-1} /><line x1={7} y1={-1} x2={9} y2={-1} />
          <line x1={0} y1={-9} x2={0} y2={-7.2} />
          <line x1={-6.4} y1={-6.4} x2={-5.2} y2={-5.2} /><line x1={6.4} y1={-6.4} x2={5.2} y2={-5.2} />
        </g>
      </g>
    </Tile>

    {/* MOVE: a motor spinning a fan */}
    <Tile x={40} name="Move">
      <g transform="translate(19 10)">
        <circle r={5.4} fill="#475569" stroke="#e2e8f0" strokeWidth={0.8} />
        <text y={1.9} textAnchor="middle" fontSize={5.6} fill="#f8fafc" fontWeight={800}>M</text>
      </g>
      <g transform="translate(19 23)">
        {[0, 120, 240].map((a) => (
          <ellipse key={a} cx={0} cy={-3.4} rx={1.6} ry={3.6} fill="#38bdf8" transform={`rotate(${a})`} />
        ))}
        <circle r={1.1} fill="#e2e8f0" />
        <path d="M6.6 0.6 A6.6 6.6 0 0 0 4.6 -4.8" fill="none" stroke={GOLD} strokeWidth={0.9} strokeLinecap="round" markerEnd="url(#toy-spin)" />
      </g>
    </Tile>

    {/* SOUND: a buzzer with sound waves */}
    <Tile x={80} name="Sound">
      <g transform="translate(17 10)">
        <rect x={-4.4} y={-3.4} width={4.4} height={6.8} rx={0.8} fill="#94a3b8" />
        <path d="M0 -3.4 L4.4 -6.4 V6.4 L0 3.4Z" fill="#e2e8f0" />
      </g>
      <g fill="none" stroke={GOLD} strokeWidth={1} strokeLinecap="round">
        <path d="M24 5.6 q2.4 4.4 0 8.8" />
        <path d="M27.4 3 q4 7 0 14" />
      </g>
    </Tile>

    <defs>
      <marker id="toy-spin" markerWidth={4} markerHeight={4} refX={2} refY={2} orient="auto">
        <path d="M0,0 L4,2 L0,4Z" fill={GOLD} />
      </marker>
    </defs>
  </svg>
);

export default ToyCircuits;
