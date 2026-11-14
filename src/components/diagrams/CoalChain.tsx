import type { ReactNode } from 'react';
import { r3 } from './round';

/**
 * The coal power station chain: coal, heat, steam, turbine, generator, grid. Numbered 1-6 and laid
 * out as a snake (row one left to right, then down, then row two right to left) so the order is
 * unmistakable on a phone. One icon and one word per step.
 */

const INK = '#0f172a';
const ARROW = '#e2e8f0';

const ICONS: Record<string, ReactNode> = {
  coal: (
    <g fill="#fff">
      <path d="M-10 6 L-8 -2 L-2 -4 L2 2 L0 7Z" />
      <path d="M0 7 L2 0 L8 -3 L11 3 L8 7Z" />
      <path d="M-5 -3 L-2 -9 L4 -8 L5 -2 L0 -1Z" />
    </g>
  ),
  heat: (
    <g>
      <path d="M0 -11 C4 -5 8 -2 8 3 A8 8 0 0 1 -8 3 C-8 -1 -4 -4 0 -11Z" fill="#fff" />
      <path d="M0 -2 C2 1 4 2 4 5 A4 4 0 0 1 -4 5 C-4 3 -2 1 0 -2Z" fill="#f97316" />
    </g>
  ),
  steam: (
    <g stroke="#fff" strokeWidth={2.2} strokeLinecap="round" fill="none">
      <path d="M-6 9 q-3.2 -4.5 0 -9 t0 -9" />
      <path d="M0 9 q-3.2 -4.5 0 -9 t0 -9" />
      <path d="M6 9 q-3.2 -4.5 0 -9 t0 -9" />
    </g>
  ),
  turbine: (
    <g>
      <circle r={10} fill="none" stroke="#fff" strokeWidth={1.5} />
      {[0, 120, 240].map((a) => (
        <ellipse key={a} cx={0} cy={-4.6} rx={2.3} ry={4.8} fill="#fff" transform={`rotate(${a})`} />
      ))}
      <circle r={1.6} fill="#312e81" />
    </g>
  ),
  generator: <polygon points="2,-11 -6,2 0,2 -2,11 7,-3 1,-3" fill="#fff" />,
  grid: (
    <g stroke="#fff" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M0 -11 L-7 11 M0 -11 L7 11 M-4.6 0 H4.6 M-6 6 H6 M-9 -4 H9 M-9 -4 L0 -11 L9 -4" />
    </g>
  ),
};

interface Step {
  icon: keyof typeof ICONS;
  label: string;
  color: string;
  x: number;
  y: number;
}

const R = 9;
const STEPS: Step[] = [
  { icon: 'coal', label: 'Coal', color: '#64748b', x: 16, y: 15 },
  { icon: 'heat', label: 'Heat', color: '#f97316', x: 50, y: 15 },
  { icon: 'steam', label: 'Steam', color: '#38bdf8', x: 84, y: 15 },
  { icon: 'turbine', label: 'Turbine', color: '#818cf8', x: 84, y: 61 },
  { icon: 'generator', label: 'Generator', color: '#f59e0b', x: 50, y: 61 },
  { icon: 'grid', label: 'Grid', color: '#22c55e', x: 16, y: 61 },
];

const Arrow = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
  <line x1={r3(x1)} y1={r3(y1)} x2={r3(x2)} y2={r3(y2)} stroke={ARROW} strokeWidth={1.6} markerEnd="url(#cc-head)" />
);

const CoalChain = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 82"
    role="img"
    aria-labelledby="cc-title cc-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '28rem', aspectRatio: '100 / 82' }}
  >
    <title id="cc-title">How a coal power station makes electricity</title>
    <desc id="cc-desc">
      Six steps in order. 1: coal is burned. 2: it makes heat. 3: the heat boils water into steam. 4: the steam spins a turbine. 5: the turbine turns a generator, which makes the electricity. 6: the electricity goes into the grid.
    </desc>
    <defs>
      <marker id="cc-head" markerWidth={4.4} markerHeight={4.4} refX={3} refY={2.2} orient="auto">
        <path d="M0,0 L4.4,2.2 L0,4.4Z" fill={ARROW} />
      </marker>
    </defs>
    {/* arrows first, so the discs sit on top */}
    <Arrow x1={16 + R + 2} y1={15} x2={50 - R - 3} y2={15} />
    <Arrow x1={50 + R + 2} y1={15} x2={84 - R - 3} y2={15} />
    <Arrow x1={84} y1={15 + R + 11} x2={84} y2={61 - R - 3} />
    <Arrow x1={84 - R - 2} y1={61} x2={50 + R + 3} y2={61} />
    <Arrow x1={50 - R - 2} y1={61} x2={16 + R + 3} y2={61} />
    {STEPS.map((s, i) => (
      <g key={s.label}>
        <circle cx={s.x} cy={s.y} r={R} fill={s.color} />
        <g transform={`translate(${s.x} ${s.y}) scale(${s.icon === 'grid' ? 0.56 : 0.72})`}>{ICONS[s.icon]}</g>
        <circle cx={s.x - R + 1} cy={s.y - R + 1} r={3.2} fill="#f8fafc" />
        <text x={s.x - R + 1} y={s.y - R + 2.3} textAnchor="middle" fontSize={4} fontWeight={800} fill={INK}>{i + 1}</text>
        <text x={s.x} y={s.y + R + 5.4} textAnchor="middle" fontSize={5.2} fontWeight={800} fill="#e2e8f0">{s.label}</text>
      </g>
    ))}
  </svg>
);

export default CoalChain;
