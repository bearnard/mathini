/**
 * Dissolving, shown at particle level.
 *
 * DissolvingSteps: sugar grains sit in water, break into smaller and smaller bits, and
 * spread out until they are too small to see. They are NOT gone: a zoom bubble (an
 * imagined close-up, not a magnifying glass) shows the particles are still there (the classic misconception is that it disappears).
 *
 * SoluteSolvent: solute (pink particles) + solvent (water) = solution, in shapes.
 */

const INK = '#0f172a';
const SOLUTE = '#f472b6';
const WATER = '#38bdf8';
const GLASS = '#e2e8f0';
const W = 22; // beaker inner width
const H = 34; // beaker height
const WATER_TOP = 10; // water surface, measured from the beaker top

interface DiagramProps {
  className?: string;
}

/** Evenly spread points inside the water (golden-angle spiral), deterministic. */
const spread = (n: number, w: number, top: number, bottom: number) =>
  Array.from({ length: n }, (_, i) => {
    const fx = (i * 0.618034) % 1;
    const fy = (i * 0.4142 + 0.13) % 1;
    return { x: -w / 2 + 2 + fx * (w - 4), y: top + 2 + fy * (bottom - top - 4) };
  });

/** A beaker centred on x, top at y. `tint` is how pink the water is. */
const Beaker = ({ x, y, tint = 0, children }: { x: number; y: number; tint?: number; children?: React.ReactNode }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x={-W / 2} y={WATER_TOP} width={W} height={H - WATER_TOP} fill={WATER} opacity={0.5} />
    {tint > 0 && <rect x={-W / 2} y={WATER_TOP} width={W} height={H - WATER_TOP} fill={SOLUTE} opacity={tint} />}
    {children}
    <path d={`M${-W / 2 - 1} 0 L${-W / 2} ${H} L${W / 2} ${H} L${W / 2 + 1} 0`} fill="none" stroke={GLASS} strokeWidth={1.2} strokeLinejoin="round" strokeLinecap="round" />
  </g>
);

const Arrow = ({ x1, x2, y }: { x1: number; x2: number; y: number }) => (
  <g>
    <line x1={x1} y1={y} x2={x2 - 1.5} y2={y} stroke="#cbd5e1" strokeWidth={1.4} />
    <path d={`M${x2 - 3} ${y - 2} L${x2} ${y} L${x2 - 3} ${y + 2}Z`} fill="#cbd5e1" />
  </g>
);

export const DissolvingSteps = ({ className }: DiagramProps) => {
  const dots = spread(30, W, WATER_TOP, H);
  return (
    <svg
      viewBox="0 0 146 70"
      role="img"
      aria-labelledby="dis-title dis-desc"
      className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit', maxWidth: '32rem', aspectRatio: '146 / 70' }}
    >
      <title id="dis-title">What happens when sugar dissolves in water</title>
      <desc id="dis-desc">
        Three beakers of water. In the first, sugar grains sit at the bottom. In the second, the grains break into smaller bits that spread out. In the third, the water is clear but an imagined close-up bubble shows tiny sugar particles spread evenly through it, too small to see for real. The sugar has not disappeared.
      </desc>

      {/* 1: grains at the bottom */}
      <Beaker x={20} y={10}>
        {[[-6, 31], [-1, 31.5], [4, 31], [-3.5, 27.6], [1.5, 27.8]].map(([dx, dy], i) => (
          <rect key={i} x={dx - 1.6} y={dy - 1.6} width={3.2} height={3.2} fill="#fdf2f8" stroke={SOLUTE} strokeWidth={0.5} transform={`rotate(${i * 17} ${dx} ${dy})`} />
        ))}
      </Beaker>
      <Arrow x1={36} x2={46} y={32} />

      {/* 2: breaking up and spreading */}
      <Beaker x={62} y={10} tint={0.12}>
        {[[-5, 31], [3, 31.4]].map(([dx, dy], i) => (
          <rect key={i} x={dx - 1.1} y={dy - 1.1} width={2.2} height={2.2} fill="#fdf2f8" stroke={SOLUTE} strokeWidth={0.4} />
        ))}
        {spread(14, W, WATER_TOP, H).map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={0.9} fill={SOLUTE} />
        ))}
      </Beaker>
      <Arrow x1={78} x2={88} y={32} />

      {/* 3: too small to see, spread evenly, still there */}
      <Beaker x={102} y={10} tint={0.2}>
        {dots.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={0.6} fill={SOLUTE} />
        ))}
      </Beaker>

      {/* an imagined close-up (zoom bubble), NOT a magnifying glass: dissolved particles are far too small to see */}
      <line x1={110} y1={26} x2={119} y2={23} stroke={GLASS} strokeWidth={1} strokeDasharray="1 1.6" strokeLinecap="round" />
      <circle cx={131} cy={22} r={13} fill={INK} stroke={GLASS} strokeWidth={1.1} strokeDasharray="2.2 1.8" />
      <circle cx={131} cy={22} r={11.6} fill={WATER} opacity={0.5} />
      {[[-5, -4], [4, -5], [-1, 0.5], [6, 3], [-6, 5], [1, 7.5], [-2, -8.2], [8, -2]].map(([dx, dy], i) => (
        <circle key={i} cx={131 + dx} cy={22 + dy} r={1.6} fill={SOLUTE} />
      ))}

      <text x={20} y={60} textAnchor="middle" fontSize={5} fill="#fbcfe8" fontWeight={800}>Sugar</text>
      <text x={118} y={60} textAnchor="middle" fontSize={5} fill="#fbcfe8" fontWeight={800}>Still there</text>
    </svg>
  );
};

export const SoluteSolvent = ({ className }: DiagramProps) => (
  <svg
    viewBox="0 0 130 66"
    role="img"
    aria-labelledby="ss-title ss-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '32rem', aspectRatio: '130 / 66' }}
  >
    <title id="ss-title">Solute plus solvent makes a solution</title>
    <desc id="ss-desc">
      Pink particles, the solute, plus a beaker of water, the solvent, make a beaker of water with the pink particles spread evenly through it, the solution.
    </desc>

    {/* solute: a little heap of grains */}
    <g transform="translate(20 34)">
      {[[-7, 6], [-2, 6.4], [3, 6], [8, 6.2], [-4.5, 1.6], [0.5, 1.8], [5.5, 1.6], [-1.5, -2.8], [3, -2.6]].map(([dx, dy], i) => (
        <rect key={i} x={dx - 1.8} y={dy - 1.8} width={3.6} height={3.6} fill="#fdf2f8" stroke={SOLUTE} strokeWidth={0.6} transform={`rotate(${i * 21} ${dx} ${dy})`} />
      ))}
    </g>
    <text x={20} y={57} textAnchor="middle" fontSize={5} fill="#fbcfe8" fontWeight={800}>Solute</text>

    <text x={39} y={31} textAnchor="middle" fontSize={11} fill="#cbd5e1" fontWeight={800}>+</text>

    {/* solvent: plain water */}
    <Beaker x={62} y={10} />
    <text x={62} y={57} textAnchor="middle" fontSize={5} fill="#7dd3fc" fontWeight={800}>Solvent</text>

    <text x={84} y={31} textAnchor="middle" fontSize={11} fill="#cbd5e1" fontWeight={800}>=</text>

    {/* solution */}
    <Beaker x={106} y={10} tint={0.2}>
      {spread(30, W, WATER_TOP, H).map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={0.9} fill={SOLUTE} />
      ))}
    </Beaker>
    <text x={106} y={57} textAnchor="middle" fontSize={5} fill="#f8fafc" fontWeight={800}>Solution</text>
  </svg>
);
