import { r3 } from '../round';
import { interaction } from './charge10Helpers';

/** Pictures for the Grade 10 Physical Sciences electrostatics basics lesson. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const SKY = '#38bdf8';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const colour = (q: number) => (q > 0 ? ROSE : q < 0 ? SKY : MUTED);
const sign = (q: number) => (q > 0 ? '+' : q < 0 ? '−' : '0');
const fmt = (q: number) => `${q > 0 ? '+' : q < 0 ? '−' : ''}${Math.abs(q)} µC`;

/** Pairs of charges: the arrows show the force on each one. */
export const ChargePairs = ({ pairs }: { pairs: [number, number][] }) => (
  <Panel h={8 + pairs.length * 18} aria={`Forces between charges. ${pairs.map(([a, b]) => `A ${a > 0 ? 'positive' : 'negative'} and a ${b > 0 ? 'positive' : 'negative'} charge ${interaction(a, b) === 'repel' ? 'repel' : 'attract'} each other`).join('. ')}. Like charges repel and unlike charges attract.`}>
    {pairs.map(([a, b], i) => {
      const y = 12 + i * 18;
      const kind = interaction(a, b);
      return (
        <g key={i}>
          <circle cx={40} cy={y} r={5} fill={colour(a)} />
          <T x={40} y={y + 1.8} size={6} fill={INK} weight={800}>{sign(a)}</T>
          <circle cx={80} cy={y} r={5} fill={colour(b)} />
          <T x={80} y={y + 1.8} size={6} fill={INK} weight={800}>{sign(b)}</T>
          {kind === 'attract' ? (
            <path d={`M47 ${y} H54 M52 ${y - 1.8} L54 ${y} L52 ${y + 1.8} M73 ${y} H66 M68 ${y - 1.8} L66 ${y} L68 ${y + 1.8}`} fill="none" stroke={GREEN} strokeWidth={1} />
          ) : (
            <path d={`M33 ${y} H26 M28 ${y - 1.8} L26 ${y} L28 ${y + 1.8} M87 ${y} H94 M92 ${y - 1.8} L94 ${y} L92 ${y + 1.8}`} fill="none" stroke={AMBER} strokeWidth={1} />
          )}
          <T x={60} y={y + 1.4} size={3.8} fill={kind === 'attract' ? GREEN : AMBER}>{kind === 'attract' ? 'attract' : 'repel'}</T>
        </g>
      );
    })}
  </Panel>
);

/** Two identical conducting spheres before and after touching. */
export const ShareSpheres = ({ q1, q2, after }: { q1: number; q2: number; after: number }) => (
  <Panel h={56} aria={`Two identical metal spheres. Before touching they carry charges of ${q1} and ${q2} microcoulomb. After touching and being separated each carries ${after} microcoulomb. The total charge, ${r3(q1 + q2)} microcoulomb, is the same before and after.`}>
    <T x={60} y={7} size={4.2} fill={AMBER}>charge is conserved: total stays {String(r3(q1 + q2))} µC</T>
    <T x={22} y={17} size={3.8} fill={MUTED} weight={600}>before</T>
    <circle cx={22} cy={30} r={8} fill={colour(q1)} />
    <T x={22} y={31.6} size={4.6} fill={INK} weight={800}>{fmt(q1)}</T>
    <circle cx={50} cy={30} r={8} fill={colour(q2)} />
    <T x={50} y={31.6} size={4.6} fill={INK} weight={800}>{fmt(q2)}</T>
    <T x={82} y={17} size={3.8} fill={MUTED} weight={600}>after</T>
    <circle cx={82} cy={30} r={8} fill={colour(after)} />
    <T x={82} y={31.6} size={4.6} fill={INK} weight={800}>{fmt(after)}</T>
    <circle cx={102} cy={30} r={8} fill={colour(after)} />
    <T x={102} y={31.6} size={4.6} fill={INK} weight={800}>{fmt(after)}</T>
    <T x={60} y={50} size={3.8} fill={MUTED} weight={600}>identical spheres share the charge equally</T>
  </Panel>
);
