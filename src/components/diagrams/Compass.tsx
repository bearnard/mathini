/**
 * Compass rose (8 points) and a tiny map for "which direction is X from Y?".
 *
 * CompassRose: cardinal points N, E, S, W are long and bold; the intermediate points
 * NE, SE, SW, NW are shorter. Angles are measured clockwise from north.
 *
 * DirectionMap: a school in the middle, a clinic exactly north-east of it and a shop
 * exactly south of it. The answer to "which direction is the clinic from the school?"
 * is north-east, and the compass point is highlighted.
 */

const INK = '#0f172a';
const GOLD = '#fbbf24';
const CARD = '#f8fafc';
const MID = '#7dd3fc';

interface DiagramProps {
  className?: string;
}

const POINTS = [
  { name: 'N', deg: 0, long: true },
  { name: 'NE', deg: 45, long: false },
  { name: 'E', deg: 90, long: true },
  { name: 'SE', deg: 135, long: false },
  { name: 'S', deg: 180, long: true },
  { name: 'SW', deg: 225, long: false },
  { name: 'W', deg: 270, long: true },
  { name: 'NW', deg: 315, long: false },
];

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: cx + r * Math.sin(a), y: cy - r * Math.cos(a) };
};

export interface DiagramHotspot {
  id: string;
  /** Centre, as a percentage (0-100) of the diagram box. */
  x: number;
  y: number;
  /** Radius of the tap target, as a percentage of the box width. */
  r: number;
}

const r1 = (n: number) => Math.round(n * 100) / 100;

/** The tip of each point of CompassRose (cx = cy = 50, viewBox 0 0 100 100). */
export const COMPASS_HOTSPOTS: DiagramHotspot[] = POINTS.map((p) => {
  const tip = polar(50, 50, p.long ? 30 : 24, p.deg);
  return { id: p.name.toLowerCase(), x: r1(tip.x), y: r1(tip.y), r: 5 };
});

/** One kite-shaped point of the rose. */
const Point = ({ cx, cy, deg, len, wide, fill }: { cx: number; cy: number; deg: number; len: number; wide: number; fill: string }) => {
  const tip = polar(cx, cy, len, deg);
  const l = polar(cx, cy, wide, deg - 45);
  const r = polar(cx, cy, wide, deg + 45);
  return <polygon points={`${tip.x},${tip.y} ${l.x},${l.y} ${cx},${cy} ${r.x},${r.y}`} fill={fill} />;
};

/** Draw a rose at (cx, cy). `highlight` colours one point gold. */
const Rose = ({ cx, cy, scale = 1, highlight, labels = true }: { cx: number; cy: number; scale?: number; highlight?: string; labels?: boolean }) => (
  <g>
    <circle cx={cx} cy={cy} r={30 * scale} fill="none" stroke="#475569" strokeWidth={0.5} />
    {POINTS.filter((p) => !p.long).map((p) => (
      <Point key={p.name} cx={cx} cy={cy} deg={p.deg} len={24 * scale} wide={6 * scale} fill={highlight === p.name ? GOLD : MID} />
    ))}
    {POINTS.filter((p) => p.long).map((p) => (
      <Point key={p.name} cx={cx} cy={cy} deg={p.deg} len={30 * scale} wide={7 * scale} fill={highlight === p.name ? GOLD : p.name === 'N' ? '#f87171' : CARD} />
    ))}
    <circle cx={cx} cy={cy} r={2 * scale} fill={INK} stroke="#e2e8f0" strokeWidth={0.5} />
    {labels &&
      POINTS.map((p) => {
        const q = polar(cx, cy, (p.long ? 38 : 35) * scale, p.deg);
        return (
          <text
            key={p.name}
            x={q.x}
            y={q.y + (p.long ? 2 : 1.4)}
            textAnchor="middle"
            fontSize={p.long ? 6.4 : 4.4}
            fill={highlight === p.name ? GOLD : p.long ? '#f8fafc' : '#bae6fd'}
            fontWeight={800}
          >
            {p.name}
          </text>
        );
      })}
  </g>
);

export const CompassRose = ({ className, showLabels = true }: DiagramProps & { showLabels?: boolean }) => (
  <svg
    viewBox="0 0 100 100"
    role="img"
    aria-labelledby="cmp-title cmp-desc"
    className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '24rem' }}
  >
    <title id="cmp-title">{showLabels ? 'A compass rose with eight points' : 'A compass rose with eight points to label'}</title>
    <desc id="cmp-desc">
      {showLabels
        ? 'The four main directions are north at the top, east on the right, south at the bottom and west on the left. Halfway between them are north-east, south-east, south-west and north-west.'
        : 'Four long points and four shorter points between them, around a circle.'}
    </desc>
    <Rose cx={50} cy={50} labels={showLabels} />
  </svg>
);

/* ---------- Which direction is the clinic from the school? ---------- */

const SCHOOL = { x: 46, y: 52 };
const CLINIC = { x: SCHOOL.x + 28, y: SCHOOL.y - 28 }; // exactly north-east
const SHOP = { x: SCHOOL.x, y: SCHOOL.y + 28 }; // exactly south

export const DirectionMap = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 100 100"
    role="img"
    aria-labelledby="dm-title dm-desc"
    className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '24rem' }}
  >
    <title id="dm-title">Which direction is the clinic from the school?</title>
    <desc id="dm-desc">
      A small map with a school in the middle, a clinic up and to the right, and a shop straight below the school. North is at the top. From the school, the clinic is to the north-east, and the shop is to the south.
    </desc>
    <defs>
      <marker id="dm-arrow" markerWidth={3.6} markerHeight={3.6} refX={1.8} refY={1.8} orient="auto">
        <path d="M0,0 L3.6,1.8 L0,3.6Z" fill={GOLD} />
      </marker>
    </defs>

    <rect x={3} y={3} width={94} height={94} rx={4} fill="#14532d" />
    {/* a faint compass behind the school, with the right point lit */}
    <g opacity={0.9}>
      <Rose cx={SCHOOL.x} cy={SCHOOL.y} scale={0.78} highlight="NE" labels={false} />
    </g>

    {/* the question: school to clinic */}
    <line
      x1={SCHOOL.x + 15}
      y1={SCHOOL.y - 15}
      x2={CLINIC.x - 6.5}
      y2={CLINIC.y + 6.5}
      stroke={GOLD}
      strokeWidth={1.4}
      strokeDasharray="2.4 1.6"
      markerEnd="url(#dm-arrow)"
    />

    {/* school: a little house with a flag */}
    <g transform={`translate(${SCHOOL.x} ${SCHOOL.y})`}>
      <rect x={-6} y={-3} width={12} height={8} fill="#fde68a" stroke={INK} strokeWidth={0.5} />
      <polygon points="-7.5,-3 0,-9 7.5,-3" fill="#ef4444" stroke={INK} strokeWidth={0.5} />
      <rect x={-1.4} y={1.4} width={2.8} height={3.6} fill={INK} />
    </g>
    <text x={SCHOOL.x} y={SCHOOL.y + 14} textAnchor="middle" fontSize={4.4} fill="#f8fafc" fontWeight={800} stroke={INK} strokeWidth={1.4} paintOrder="stroke">School</text>

    {/* clinic: white square with a red cross */}
    <g transform={`translate(${CLINIC.x} ${CLINIC.y})`}>
      <rect x={-6} y={-6} width={12} height={12} rx={1.5} fill="#f8fafc" stroke={INK} strokeWidth={0.5} />
      <path d="M-1.6 -4.4 H1.6 V-1.6 H4.4 V1.6 H1.6 V4.4 H-1.6 V1.6 H-4.4 V-1.6 H-1.6Z" fill="#ef4444" />
    </g>
    <text x={CLINIC.x} y={CLINIC.y - 9} textAnchor="middle" fontSize={4.4} fill="#f8fafc" fontWeight={800} stroke={INK} strokeWidth={1.4} paintOrder="stroke">Clinic</text>

    {/* shop: a box with an awning */}
    <g transform={`translate(${SHOP.x} ${SHOP.y})`}>
      <rect x={-6} y={-3} width={12} height={8} fill="#bfdbfe" stroke={INK} strokeWidth={0.5} />
      <path d="M-7 -3 L-5 -7 H5 L7 -3Z" fill="#60a5fa" stroke={INK} strokeWidth={0.5} />
    </g>
    <text x={SHOP.x} y={SHOP.y + 12} textAnchor="middle" fontSize={4.4} fill="#f8fafc" fontWeight={800} stroke={INK} strokeWidth={1.4} paintOrder="stroke">Shop</text>

    {/* the answer, and north */}
    <text x={SCHOOL.x + 17} y={SCHOOL.y - 4} fontSize={6.4} fill={GOLD} fontWeight={800} stroke={INK} strokeWidth={1.4} paintOrder="stroke">NE</text>
    <g fill="#f8fafc" fontWeight={800} textAnchor="middle">
      <text x={11} y={13} fontSize={6}>N</text>
      <path d="M11 29 L11 16" stroke="#f8fafc" strokeWidth={1.2} markerEnd="url(#dm-arrow)" />
    </g>
  </svg>
);
