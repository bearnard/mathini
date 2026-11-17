import { r3 } from '../round';
import { ELEMENTS, atomTotals, lcg, shells, split, type State } from './ns8Helpers';

/** Pictures for the Grade 8 Natural Sciences Term 2 lessons. Every position comes from ns8Helpers.ts. */

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

/** Particles in a box: solid (regular grid), liquid (close but jumbled), gas (few, far apart). */
const particles = (state: State, x0: number, y0: number, w: number, h: number): { x: number; y: number }[] => {
  const rnd = lcg(state === 'solid' ? 1 : state === 'liquid' ? 2 : 3);
  if (state === 'solid') return Array.from({ length: 25 }, (_, i) => ({ x: r3(x0 + 4 + (i % 5) * ((w - 8) / 4)), y: r3(y0 + 4 + Math.floor(i / 5) * ((h - 8) / 4)) }));
  if (state === 'liquid') return Array.from({ length: 25 }, (_, i) => ({ x: r3(x0 + 4 + (i % 5) * ((w - 8) / 4) + (rnd() - 0.5) * 4), y: r3(y0 + h * 0.3 + 3 + Math.floor(i / 5) * ((h * 0.7 - 8) / 4) + (rnd() - 0.5) * 3) }));
  return Array.from({ length: 6 }, () => ({ x: r3(x0 + 4 + rnd() * (w - 8)), y: r3(y0 + 4 + rnd() * (h - 8)) }));
};

export const ParticleStates = () => {
  const w = 34, h = 34, ys = 14;
  const boxes: [State, number, string][] = [['solid', 4, AMBER], ['liquid', 43, SKY], ['gas', 82, GREEN]];
  return (
    <Panel h={66} aria="The particle model for a solid, a liquid and a gas. In a solid the particles are closely packed in a regular pattern and vibrate in place. In a liquid they are close together but loosely arranged and slide past each other. In a gas they are very far apart with no arrangement and move very fast.">
      {boxes.map(([st, x, col]) => (
        <g key={st}>
          <rect x={x} y={ys} width={w} height={h} rx={2} fill="none" stroke={MUTED} strokeWidth={0.5} />
          {particles(st, x, ys, w, h).map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={st === 'gas' ? 1.8 : 2} fill={col} />)}
          <T x={x + w / 2} y={9} size={4.4} fill={col}>{st}</T>
        </g>
      ))}
      <T x={21} y={57} size={3.4} fill={MUTED} weight={600}>vibrate in place</T>
      <T x={60} y={57} size={3.4} fill={MUTED} weight={600}>slide past</T>
      <T x={99} y={57} size={3.4} fill={MUTED} weight={600}>move very fast</T>
      <T x={60} y={63} size={3.4} fill={MUTED} weight={600}>forces: strong, weaker, extremely weak</T>
    </Panel>
  );
};

/** A dye or gas spreading from a crowded region to an empty one: before and after. */
export const DiffusionPair = () => {
  const rnd = lcg(11);
  const before = Array.from({ length: 14 }, () => ({ x: r3(8 + rnd() * 14), y: r3(14 + rnd() * 28) }));
  const after = Array.from({ length: 14 }, () => ({ x: r3(68 + rnd() * 44), y: r3(14 + rnd() * 28) }));
  return (
    <Panel h={56} aria="Diffusion. At first the particles are crowded at the left of the box. Later they have spread out evenly through the whole box. Particles move from where they are highly concentrated to where they are less concentrated. Diffusion is faster in gases than in liquids.">
      <rect x={4} y={10} width={48} height={36} rx={2} fill="none" stroke={MUTED} strokeWidth={0.5} />
      <rect x={64} y={10} width={52} height={36} rx={2} fill="none" stroke={MUTED} strokeWidth={0.5} />
      {before.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={1.8} fill={ROSE} />)}
      {after.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={1.8} fill={ROSE} />)}
      <T x={28} y={7} size={3.8} fill={MUTED} weight={600}>before</T>
      <T x={90} y={7} size={3.8} fill={MUTED} weight={600}>after</T>
      <path d="M54 28 H62 M60 26 L62 28 L60 30" fill="none" stroke={GREEN} strokeWidth={1} />
      <T x={60} y={53} size={3.8} fill={GREEN}>high concentration → low concentration</T>
    </Panel>
  );
};

/** Same particles, bigger spaces when heated. */
export const ExpansionPair = () => {
  const grid = (x0: number, gap: number, col: string) => Array.from({ length: 12 }, (_, i) => <circle key={`${x0}${i}`} cx={r3(x0 + (i % 4) * gap)} cy={r3(18 + Math.floor(i / 4) * gap)} r={2.4} fill={col} />);
  return (
    <Panel h={50} aria="Expansion. A material is shown cool and then heated. The number and size of the particles stay the same, but when heated they move more and the spaces between them get bigger, so the material takes up more room.">
      {grid(14, 7, SKY)}
      {grid(66, 9.2, ROSE)}
      <T x={28} y={10} size={4} fill={SKY}>cool</T>
      <T x={84} y={10} size={4} fill={ROSE}>heated: spaces bigger</T>
      <T x={60} y={46} size={3.6} fill={MUTED} weight={600}>same 12 particles, same size: only the spaces change</T>
    </Panel>
  );
};

/** Gas pressure: collisions with the walls. More particles, more collisions. */
export const PressurePair = ({ few, many }: { few: number; many: number }) => {
  const dots = (n: number, x0: number, seed: number) => {
    const rnd = lcg(seed);
    return Array.from({ length: n }, (_, i) => <circle key={`${x0}${i}`} cx={r3(x0 + 3 + rnd() * 34)} cy={r3(15 + rnd() * 24)} r={1.6} fill={GREEN} />);
  };
  return (
    <Panel h={56} aria={`Gas pressure. The left container holds ${few} gas particles and the right container holds ${many}. The particles hit the walls and each other. More particles in the same volume means more collisions, so the pressure is higher.`}>
      <rect x={10} y={12} width={40} height={30} rx={2} fill="none" stroke={MUTED} strokeWidth={0.8} />
      <rect x={70} y={12} width={40} height={30} rx={2} fill="none" stroke={MUTED} strokeWidth={0.8} />
      {dots(few, 10, 5)}
      {dots(many, 70, 9)}
      <T x={30} y={8} size={3.8} fill={GREEN}>{`${few} particles`}</T>
      <T x={90} y={8} size={3.8} fill={GREEN}>{`${many} particles`}</T>
      <T x={30} y={49} size={3.8} fill={MUTED} weight={600}>fewer collisions</T>
      <T x={90} y={49} size={3.8} fill={AMBER}>more collisions: higher pressure</T>
    </Panel>
  );
};

/** Oil floating on water, with an object that sinks. */
export const DensityLayers = () => (
  <Panel h={54} aria="A beaker holds water with cooking oil floating on top, because the oil is less dense than water. A stone sinks to the bottom because it is denser than water.">
    <path d="M30 10 V46 H90 V10" fill="none" stroke={MUTED} strokeWidth={0.8} />
    <rect x={30.4} y={24} width={59.2} height={21.6} fill={SKY} fillOpacity={0.35} />
    <rect x={30.4} y={14} width={59.2} height={10} fill={AMBER} fillOpacity={0.45} />
    <circle cx={60} cy={41} r={3.4} fill={MUTED} />
    <T x={96} y={20} size={3.8} anchor="start" fill={AMBER}>oil (less dense)</T>
    <T x={96} y={34} size={3.8} anchor="start" fill={SKY}>water</T>
    <T x={96} y={43} size={3.8} anchor="start" fill={MUTED}>stone sinks</T>
  </Panel>
);

/** An atom of one of the first 20 elements: protons in the nucleus, electrons in shells. */
export const AtomDiagram = ({ symbol }: { symbol: string }) => {
  const el = ELEMENTS.find((e) => e.symbol === symbol)!;
  const sh = shells(el.Z);
  const cx = 60, cy = 36;
  return (
    <Panel h={76} aria={`An atom of ${el.name}: ${el.Z} protons in the nucleus, with neutrons, and ${el.Z} electrons in ${sh.length} shell${sh.length > 1 ? 's' : ''} holding ${sh.join(', ')} electrons. The atom is neutral because the protons and electrons are equal in number.`}>
      {sh.map((_, i) => <circle key={i} cx={cx} cy={cy} r={10 + i * 7.5} fill="none" stroke={MUTED} strokeWidth={0.5} strokeDasharray="1.2 1.2" />)}
      <circle cx={cx} cy={cy} r={6} fill={ROSE} fillOpacity={0.85} />
      <T x={cx} y={cy + 1.6} size={5} fill={INK} weight={800}>{symbol}</T>
      {sh.map((n, i) => Array.from({ length: n }, (_, k) => {
        const ang = (2 * Math.PI * k) / n - Math.PI / 2;
        return <circle key={`${i}-${k}`} cx={r3(cx + (10 + i * 7.5) * Math.cos(ang))} cy={r3(cy + (10 + i * 7.5) * Math.sin(ang))} r={1.5} fill={SKY} />;
      }))}
      <T x={60} y={72} size={4} fill={LINE}>{`${el.name}: ${el.Z} protons (+), ${el.Z} electrons (−)`}</T>
    </Panel>
  );
};

const pretty = (f: string) => f.replace(/([A-Za-z)])(\d)/g, (_, a, d) => a + '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);

/** Atoms before and after a reaction: the same atoms, rearranged. */
export const ReactionAtoms = ({ equation }: { equation: string }) => {
  const t = atomTotals(equation);
  const { reactants, products } = split(equation);
  return (
    <Panel h={46} aria={`A chemical reaction: ${reactants.join(' and ')} are the reactants and ${products.join(' and ')} are the products. There are ${t.before} atoms before and ${t.after} atoms after: atoms are rearranged, not created or destroyed.`}>
      <T x={60} y={9} size={4.4} fill={AMBER}>{pretty(equation)}</T>
      <rect x={6} y={16} width={46} height={18} rx={2} fill={GREEN} fillOpacity={0.18} stroke={GREEN} strokeWidth={0.6} />
      <rect x={68} y={16} width={46} height={18} rx={2} fill={BLUE} fillOpacity={0.18} stroke={BLUE} strokeWidth={0.6} />
      <T x={29} y={22.5} size={3.8} fill={GREEN}>reactants</T>
      <T x={91} y={22.5} size={3.8} fill={BLUE}>products</T>
      <T x={29} y={30.5} size={3.8}>{reactants.map(pretty).join(' + ')}</T>
      <T x={91} y={30.5} size={3.8}>{products.map(pretty).join(' + ')}</T>
      <path d="M54 25 H65 M62 23 L65 25 L62 27" fill="none" stroke={LINE} strokeWidth={1} />
      <T x={60} y={42} size={3.8} fill={MUTED} weight={600}>{`${t.before} atoms before, ${t.after} atoms after`}</T>
    </Panel>
  );
};
