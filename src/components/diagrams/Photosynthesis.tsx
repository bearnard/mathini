/**
 * Photosynthesis as inputs and outputs on a plant. Arrows carry the meaning:
 * sunlight, water and carbon dioxide point INTO the plant; oxygen points OUT.
 * Glucose (food) is made inside the leaf. Five labels.
 */

const SUN = '#fbbf24';
const WATER = '#38bdf8';
const CO2 = '#cbd5e1';
const O2 = '#f472b6';
const LEAF = '#22c55e';

interface PhotosynthesisProps {
  className?: string;
}

const Photosynthesis = ({ className }: PhotosynthesisProps) => {
  const arrow = (id: string, color: string) => (
    <marker id={id} markerWidth={5} markerHeight={5} refX={3.5} refY={2.5} orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill={color} />
    </marker>
  );
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby="photo-title photo-desc"
      className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit', maxWidth: '28rem' }}
    >
      <title id="photo-title">How a plant makes food: photosynthesis</title>
      <desc id="photo-desc">
        A plant. Sunlight, water from the soil and carbon dioxide from the air go into the plant. The leaf makes glucose, which is food for the plant, and oxygen goes out into the air.
      </desc>
      <defs>
        {arrow('ph-sun', SUN)}
        {arrow('ph-water', WATER)}
        {arrow('ph-co2', CO2)}
        {arrow('ph-o2', O2)}
      </defs>

      {/* Ground and roots */}
      <rect x={0} y={80} width={100} height={20} fill="#3f2d1d" />
      <g stroke="#a16207" strokeWidth={1.2} strokeLinecap="round" fill="none">
        <path d="M52 80 C 50 88, 44 92, 38 96" />
        <path d="M52 80 C 53 88, 58 92, 64 96" />
        <path d="M52 80 L52 94" />
      </g>

      {/* Stem and leaves */}
      <path d="M52 80 C 52 66, 52 56, 54 42" stroke="#15803d" strokeWidth={2.6} fill="none" strokeLinecap="round" />
      <ellipse cx={39} cy={52} rx={11} ry={5.5} fill={LEAF} opacity={0.85} transform="rotate(-25 39 52)" />
      <ellipse cx={69} cy={42} rx={17} ry={9} fill={LEAF} transform="rotate(-12 69 42)" />
      <path d="M54 44 L84 38" stroke="#15803d" strokeWidth={0.8} />

      {/* Glucose made in the leaf */}
      <polygon
        points="69,36.5 73.8,39.2 73.8,44.8 69,47.5 64.2,44.8 64.2,39.2"
        fill="#fef3c7"
        stroke="#f59e0b"
        strokeWidth={0.8}
      />
      <text x={63} y={58} textAnchor="middle" fontSize={4.2} fill="#fde68a" fontWeight={700}>Glucose</text>

      {/* Sun and sunlight */}
      <circle cx={12} cy={11} r={8} fill="#f59e0b" />
      <circle cx={12} cy={11} r={11} fill="#f59e0b" opacity={0.25} />
      <line x1={19} y1={17} x2={46} y2={40} stroke={SUN} strokeWidth={1.4} markerEnd="url(#ph-sun)" />
      <line x1={22} y1={9} x2={52} y2={32} stroke={SUN} strokeWidth={1.4} markerEnd="url(#ph-sun)" opacity={0.7} />
      <text x={3} y={34} fontSize={4.2} fill={SUN} fontWeight={700}>Sunlight</text>

      {/* Carbon dioxide in (right, pointing left into the leaf) */}
      <line x1={97} y1={22} x2={82} y2={33} stroke={CO2} strokeWidth={1.4} markerEnd="url(#ph-co2)" />
      <text x={96} y={17} textAnchor="end" fontSize={4} fill={CO2} fontWeight={700}>
        <tspan x={96}>Carbon</tspan>
        <tspan x={96} dy={4.2}>dioxide</tspan>
      </text>

      {/* Oxygen out (pointing away from the leaf) */}
      <line x1={80} y1={50} x2={95} y2={62} stroke={O2} strokeWidth={1.4} markerEnd="url(#ph-o2)" />
      <text x={96} y={70} textAnchor="end" fontSize={4.2} fill={O2} fontWeight={700}>Oxygen</text>

      {/* Water up from the roots */}
      <line x1={46} y1={94} x2={50} y2={62} stroke={WATER} strokeWidth={1.4} markerEnd="url(#ph-water)" />
      <text x={25} y={92} fontSize={4.2} fill={WATER} fontWeight={700}>Water</text>
    </svg>
  );
};

export default Photosynthesis;
