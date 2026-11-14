/**
 * Four ways to separate a mixture, as simple apparatus pictures: sieving, filtering,
 * evaporating and a magnet. Each panel shows the mixture going in and what ends up
 * where, with the method name and the mixture as two short labels.
 */
import type { ReactNode } from 'react';

const SAND = '#fbbf24';
const STONE = '#94a3b8';
const WATER = '#38bdf8';
const IRON = '#64748b';
const GLASS = '#e2e8f0';

const Panel = ({ x, y, title, mixture, children }: { x: number; y: number; title: string; mixture: string; children: ReactNode }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width={46} height={46} rx={3.5} fill="#1e293b" />
    {children}
    <text x={23} y={39.2} textAnchor="middle" fontSize={4.6} fill="#f8fafc" fontWeight={800}>{title}</text>
    <text x={23} y={43.7} textAnchor="middle" fontSize={3.3} fill="#94a3b8" fontWeight={600}>{mixture}</text>
  </g>
);

const Sieve = () => (
  <g>
    {/* what is caught: stones and a little sand stay on top */}
    {[[12, 15.5], [21, 14.8], [30, 15.6], [37, 16.2]].map(([cx, cy]) => (
      <circle key={cx} cx={cx} cy={cy} r={2.8} fill={STONE} />
    ))}
    {/* mesh */}
    <path d="M5 19.5 L41 19.5" stroke={GLASS} strokeWidth={1.6} strokeDasharray="1.2 0.9" />
    <path d="M5 19 L5 15 M41 19 L41 15" stroke={GLASS} strokeWidth={1.2} strokeLinecap="round" />
    {/* what falls through: sand */}
    {[[14, 23], [20, 25.5], [26, 23.5], [32, 26], [18, 28], [29, 29]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={0.9} fill={SAND} />
    ))}
    <ellipse cx={23} cy={33} rx={11} ry={2.4} fill={SAND} />
    <path d="M23 21.5 L23 29" stroke={SAND} strokeWidth={0.6} opacity={0.0} />
  </g>
);

const Filter = () => (
  <g>
    <polygon points="9,6 37,6 25,19 21,19" fill="none" stroke={GLASS} strokeWidth={1.2} strokeLinejoin="round" />
    <polygon points="11.5,7 34.5,7 24.5,18 21.5,18" fill={GLASS} opacity={0.22} />
    {/* residue stays in the paper */}
    {[[20, 15], [23, 16.2], [26, 15], [22, 13.2], [25, 13.6]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={1.3} fill="#a16207" />
    ))}
    <rect x={21.7} y={19} width={2.6} height={5} fill={GLASS} opacity={0.8} />
    <circle cx={23} cy={26.3} r={0.9} fill={WATER} />
    {/* clear water collects below */}
    <path d="M14 27 L14 34 L32 34 L32 27" fill="none" stroke={GLASS} strokeWidth={1.2} strokeLinejoin="round" />
    <rect x={14.6} y={30} width={16.8} height={3.7} fill={WATER} opacity={0.85} />
  </g>
);

const Evaporate = () => (
  <g>
    {/* vapour leaves */}
    <g stroke="#bae6fd" strokeWidth={1.1} fill="none" strokeLinecap="round">
      <path d="M15 17 q-2.2 -2.6 0 -5.2 t0 -5.2" />
      <path d="M23 15 q-2.2 -2.6 0 -5.2 t0 -5.2" />
      <path d="M31 17 q-2.2 -2.6 0 -5.2 t0 -5.2" />
    </g>
    {/* dish with salt left behind */}
    <path d="M9 20 Q23 33 37 20 Z" fill={STONE} />
    {[[18.5, 22.6], [22, 24.2], [25.5, 23.6], [28.5, 22.4], [21, 22]].map(([x, y], i) => (
      <rect key={i} x={x - 1} y={y - 1} width={2} height={2} fill="#fff" transform={`rotate(${i * 20} ${x} ${y})`} />
    ))}
    {/* heat */}
    <path d="M23 28.5 q-3.4 3 0 6 q3.4 -3 0 -6Z" fill="#fb923c" />
    <path d="M23 31 q-1.4 1.4 0 2.8 q1.4 -1.4 0 -2.8Z" fill="#fde68a" />
  </g>
);

const Magnet = () => (
  <g>
    {/* horseshoe magnet, poles pointing down */}
    <path d="M13 21 L13 12 A10 10 0 0 1 33 12 L33 21" fill="none" stroke="#ef4444" strokeWidth={4.2} />
    <path d="M13 17.5 L13 21 M33 17.5 L33 21" stroke={GLASS} strokeWidth={4.2} />
    {/* iron jumps up to the poles */}
    {[[11.2, 24.2, 20], [14.8, 24.6, -30], [31.4, 24.2, 15], [34.8, 25, -20], [13, 27.5, 40], [33.5, 28, -35]].map(([x, y, r], i) => (
      <rect key={i} x={x - 1.2} y={y - 0.5} width={2.4} height={1} fill={IRON} transform={`rotate(${r} ${x} ${y})`} />
    ))}
    {/* sand stays down */}
    {Array.from({ length: 16 }).map((_, i) => (
      <circle key={i} cx={9 + i * 1.9} cy={33 - (i % 3) * 0.9} r={0.95} fill={SAND} />
    ))}
  </g>
);

interface SeparatingMixturesProps {
  className?: string;
}

const SeparatingMixtures = ({ className }: SeparatingMixturesProps) => (
  <svg
    viewBox="0 0 96 96"
    role="img"
    aria-labelledby="sepmix-title sepmix-desc"
    className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
    style={{ background: '#0f172a', fontFamily: 'inherit', maxWidth: '28rem' }}
  >
    <title id="sepmix-title">Four ways to separate a mixture</title>
    <desc id="sepmix-desc">
      Sieving: a sieve holds back big stones and lets small sand fall through. Filtering: filter paper in a funnel holds back the solid and lets clear water through into a beaker. Evaporating: heating a dish of salt water turns the water into vapour and leaves the salt behind. Magnet: a magnet picks iron out of a mixture of iron and sand.
    </desc>
    <Panel x={1} y={1} title="Sieving" mixture="stones + sand"><Sieve /></Panel>
    <Panel x={49} y={1} title="Filtering" mixture="soil + water"><Filter /></Panel>
    <Panel x={1} y={49} title="Evaporating" mixture="salt + water"><Evaporate /></Panel>
    <Panel x={49} y={49} title="Magnet" mixture="iron + sand"><Magnet /></Panel>
  </svg>
);

export default SeparatingMixtures;
