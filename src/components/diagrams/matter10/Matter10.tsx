import { r3 } from '../round';
import { energyChange } from './matter10Helpers';

/** Pictures for the Grade 10 Physical Sciences wave 2 term 2 chemistry lessons. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
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

// ---------- three kinds of substance ----------

export const ParticlePictures = () => {
  const molecule = (cx: number, cy: number, k: number) => (
    <g key={k}>
      <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke={MUTED} strokeWidth={0.8} />
      <circle cx={cx - 3} cy={cy} r={2.6} fill={ROSE} />
      <circle cx={cx + 3} cy={cy} r={2.6} fill={SKY} />
    </g>
  );
  const mols = [[12, 18], [26, 14], [18, 30], [32, 28], [10, 38]];
  const ions = Array.from({ length: 16 }, (_, i) => ({ x: 52 + (i % 4) * 7, y: 14 + Math.floor(i / 4) * 7, pos: (i % 4 + Math.floor(i / 4)) % 2 === 0 }));
  const metal = Array.from({ length: 9 }, (_, i) => ({ x: 92 + (i % 3) * 9, y: 16 + Math.floor(i / 3) * 9 }));
  const electrons = [[96, 20], [105, 25], [113, 21], [99, 33], [108, 38], [114, 31], [95, 42]];
  return (
    <Panel h={64} aria="Three kinds of substance. A molecular substance such as water is made of separate molecules, each with a few atoms joined together. An ionic substance such as sodium chloride is a lattice of alternating positive and negative ions. A metal such as copper is a lattice of positive ions in a sea of free electrons.">
      <T x={22} y={8} size={4.2} fill={AMBER}>molecular</T>
      <T x={65} y={8} size={4.2} fill={GREEN}>ionic</T>
      <T x={104} y={8} size={4.2} fill={BLUE}>metallic</T>
      {mols.map(([x, y], i) => molecule(x, y, i))}
      {ions.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={3} fill={p.pos ? AMBER : GREEN} />
          <T x={p.x} y={r3(p.y + 1.4)} size={3.6} fill={INK} weight={800}>{p.pos ? '+' : '−'}</T>
        </g>
      ))}
      {metal.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={3.4} fill={BLUE} />)}
      {electrons.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={1.2} fill={AMBER} />)}
      <T x={22} y={54} size={3.6} fill={MUTED} weight={600}>separate molecules</T>
      <T x={65} y={54} size={3.6} fill={MUTED} weight={600}>ions in a lattice</T>
      <T x={104} y={54} size={3.6} fill={MUTED} weight={600}>ions + electrons</T>
    </Panel>
  );
};

// ---------- energy change in a reaction ----------

export const EnergyLevels = ({ reactants, products }: { reactants: number; products: number }) => {
  const { kind, delta } = energyChange(reactants, products);
  const y = (e: number) => r3(56 - e * 3.4);
  const col = kind === 'exothermic' ? GREEN : ROSE;
  return (
    <Panel h={62} aria={`Energy of a ${kind} reaction. The reactants are at ${reactants} units and the products at ${products} units, so the energy change is ${delta} units: energy is ${kind === 'exothermic' ? 'released to the surroundings, which get warmer' : 'taken in from the surroundings, which get cooler'}.`}>
      <line x1={14} y1={y(reactants)} x2={46} y2={y(reactants)} stroke={AMBER} strokeWidth={1.6} />
      <line x1={74} y1={y(products)} x2={106} y2={y(products)} stroke={BLUE} strokeWidth={1.6} />
      <T x={30} y={r3(y(reactants) - 2.4)} size={3.8} fill={AMBER}>reactants</T>
      <T x={90} y={r3(y(products) - 2.4)} size={3.8} fill={BLUE}>products</T>
      <line x1={60} y1={y(reactants)} x2={60} y2={y(products)} stroke={col} strokeWidth={1.2} />
      <path d={`M${57.5} ${y(products) + (kind === 'exothermic' ? -3 : 3)} L60 ${y(products)} L${62.5} ${y(products) + (kind === 'exothermic' ? -3 : 3)}`} fill="none" stroke={col} strokeWidth={1.2} />
      <T x={60} y={7} size={4.4} fill={col}>{kind === 'exothermic' ? 'exothermic: energy released' : 'endothermic: energy absorbed'}</T>
      <T x={60} y={58} size={3.8} fill={MUTED} weight={600}>energy</T>
    </Panel>
  );
};

// ---------- conservation of mass ----------

export const MassBalance = ({ label, left, right }: { label: string; left: number; right: number }) => {
  const max = Math.max(left, right);
  const w = (m: number) => r3((m / max) * 70);
  return (
    <Panel h={36} aria={`${label}. The reactants have a total mass of ${left} and the products a total mass of ${right}. ${left === right ? 'The masses are equal, so mass is conserved.' : 'The masses differ.'}`}>
      <T x={60} y={7} size={4.2} fill={AMBER}>{label}</T>
      <T x={4} y={18} size={3.8} anchor="start" weight={600}>reactants</T>
      <rect x={34} y={12} width={w(left)} height={8} rx={1.5} fill={GREEN} />
      <T x={r3(34 + w(left) + 2)} y={18} size={3.8} anchor="start">{String(left)}</T>
      <T x={4} y={30} size={3.8} anchor="start" weight={600}>products</T>
      <rect x={34} y={24} width={w(right)} height={8} rx={1.5} fill={BLUE} />
      <T x={r3(34 + w(right) + 2)} y={30} size={3.8} anchor="start">{String(right)}</T>
    </Panel>
  );
};
