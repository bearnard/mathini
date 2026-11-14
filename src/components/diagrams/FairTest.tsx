/**
 * A fair test of how fast sugar dissolves: four beakers, ONE thing changed in each.
 * Same amount of water (the dashed line), same amount of sugar to start, and the
 * same time on the clock. The single change is drawn in gold (a spoon, a flame,
 * tiny grains); the control has none. Fewer grains left = dissolved faster.
 */

const INK = '#0f172a';
const GOLD = '#fbbf24';
const SOLUTE = '#f472b6';
const WATER = '#38bdf8';
const GLASS = '#e2e8f0';
const W = 22;
const H = 34;
const WATER_TOP = 10;
const TOP = 17;

const XS = [20, 56, 92, 128];

interface DiagramProps {
  className?: string;
}

const Grain = ({ x, y, s = 3.2, gold = false }: { x: number; y: number; s?: number; gold?: boolean }) => (
  <rect
    x={x - s / 2}
    y={y - s / 2}
    width={s}
    height={s}
    fill={gold ? '#fef3c7' : '#fdf2f8'}
    stroke={gold ? GOLD : SOLUTE}
    strokeWidth={0.5}
    transform={`rotate(${(x * 7 + y * 3) % 40} ${x} ${y})`}
  />
);

const Beaker = ({ x, tint = 0, children }: { x: number; tint?: number; children?: React.ReactNode }) => (
  <g transform={`translate(${x} ${TOP})`}>
    <rect x={-W / 2} y={WATER_TOP} width={W} height={H - WATER_TOP} fill={WATER} opacity={0.5} />
    {tint > 0 && <rect x={-W / 2} y={WATER_TOP} width={W} height={H - WATER_TOP} fill={SOLUTE} opacity={tint} />}
    {children}
    <path d={`M${-W / 2 - 1} 0 L${-W / 2} ${H} L${W / 2} ${H} L${W / 2 + 1} 0`} fill="none" stroke={GLASS} strokeWidth={1.2} strokeLinejoin="round" strokeLinecap="round" />
  </g>
);

const FairTest = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 148 80"
    role="img"
    aria-labelledby="ft-title ft-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '36rem', aspectRatio: '148 / 80' }}
  >
    <title id="ft-title">A fair test of how fast sugar dissolves</title>
    <desc id="ft-desc">
      Four beakers with the same amount of water and the same amount of sugar, left for the same time. The first is the control. In the second the water is stirred. In the third the water is warmer. In the fourth the sugar grains are smaller. Each beaker changes only one thing. In all three changed beakers fewer grains are left than in the control, so the sugar dissolved faster.
    </desc>

    {/* the same time for every beaker */}
    <circle cx={10} cy={8} r={5} fill="none" stroke={GLASS} strokeWidth={1} />
    <path d="M10 8 L10 4.6 M10 8 L12.6 9.4" stroke={GLASS} strokeWidth={1} strokeLinecap="round" />
    <text x={18} y={10.4} fontSize={6} fill="#e2e8f0" fontWeight={800}>Same time</text>

    {/* the same water level in every beaker */}
    <line x1={6} x2={142} y1={TOP + WATER_TOP} y2={TOP + WATER_TOP} stroke="#94a3b8" strokeWidth={0.5} strokeDasharray="1.4 1.4" />

    {/* control: many grains left */}
    <Beaker x={XS[0]}>
      {[[-6, 30], [-1, 30.6], [4, 30], [8, 30.4], [-3.5, 26.6], [1.5, 26.8], [6, 26.6], [-0.5, 23.2]].map(([dx, dy], i) => (
        <Grain key={i} x={dx} y={dy} />
      ))}
    </Beaker>

    {/* stirring: the spoon is the change */}
    <Beaker x={XS[1]} tint={0.1}>
      {[[-4, 30.6], [2, 30.8], [6, 30.4]].map(([dx, dy], i) => (
        <Grain key={i} x={dx} y={dy} s={2.6} />
      ))}
      <path d="M5 -6 L-3 25" stroke={GOLD} strokeWidth={1.6} strokeLinecap="round" />
      <ellipse cx={-3.4} cy={27} rx={2.6} ry={1.8} fill={GOLD} />
      <path d="M-8 18 q4 -4 8 0 M0 14 q4 -4 7 0" stroke={GOLD} strokeWidth={0.8} fill="none" opacity={0.8} />
    </Beaker>

    {/* warmer water: the flame is the change */}
    <Beaker x={XS[2]} tint={0.1}>
      {[[-2, 31], [4, 30.8], [-6, 30.6]].map(([dx, dy], i) => (
        <Grain key={i} x={dx} y={dy} s={2.6} />
      ))}
    </Beaker>
    <g transform={`translate(${XS[2]} ${TOP + H + 1})`}>
      <path d="M0 0 q-4.6 4.2 0 8.4 q4.6 -4.2 0 -8.4Z" fill={GOLD} />
      <path d="M0 3.4 q-1.9 2 0 4 q1.9 -2 0 -4Z" fill="#fff7ed" />
    </g>

    {/* smaller grains: the tiny grains are the change */}
    <Beaker x={XS[3]} tint={0.1}>
      {[[-4, 31.4], [-2, 31.6], [0.5, 31.2], [-3, 30], [-0.5, 30.2]].map(([dx, dy], i) => (
        <Grain key={i} x={dx} y={dy} s={1.3} gold />
      ))}
    </Beaker>

    <g fontSize={6.4} fontWeight={800} textAnchor="middle">
      <text x={XS[0]} y={72} fill="#e2e8f0">Control</text>
      <text x={XS[1]} y={72} fill={GOLD}>Stir</text>
      <text x={XS[2]} y={72} fill={GOLD}>Warm</text>
      <text x={XS[3]} y={72} fill={GOLD}>Small</text>
    </g>
  </svg>
);

export default FairTest;
