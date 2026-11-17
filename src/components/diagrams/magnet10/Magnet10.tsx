import { r3 } from '../round';
import { dipoleField, force, type Pole } from './magnet10Helpers';

/** Pictures for the Grade 10 magnetism lesson. Every direction comes from magnet10Helpers.ts. */

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

const Bar = ({ x, y, w = 28, h = 8, nRight = true }: { x: number; y: number; w?: number; h?: number; nRight?: boolean }) => (
  <g>
    <rect x={x} y={y} width={w / 2} height={h} fill={nRight ? BLUE : ROSE} />
    <rect x={x + w / 2} y={y} width={w / 2} height={h} fill={nRight ? ROSE : BLUE} />
    <T x={x + w / 4} y={y + h / 2 + 1.6} size={5} fill={INK} weight={800}>{nRight ? 'S' : 'N'}</T>
    <T x={x + (3 * w) / 4} y={y + h / 2 + 1.6} size={5} fill={INK} weight={800}>{nRight ? 'N' : 'S'}</T>
  </g>
);

// ---------- attraction and repulsion ----------

export const PoleForces = () => {
  const cases: { a: Pole; b: Pole }[] = [{ a: 'N', b: 'N' }, { a: 'S', b: 'S' }, { a: 'N', b: 'S' }, { a: 'S', b: 'N' }];
  return (
    <Panel h={8 + cases.length * 12} aria={`Two bar magnets facing each other. ${cases.map((c) => `${c.a} pole facing ${c.b} pole: ${force(c.a, c.b) === 'repel' ? 'they repel' : 'they attract'}`).join('; ')}.`}>
      {cases.map((c, i) => {
        const y = 4 + i * 12;
        const f = force(c.a, c.b);
        // left magnet: its right end is pole a; right magnet: its left end is pole b
        const leftNRight = c.a === 'N';
        const rightNRight = c.b === 'S';
        return (
          <g key={i}>
            <Bar x={6} y={y} w={30} h={8} nRight={leftNRight} />
            <Bar x={r3(f === 'repel' ? 52 : 44)} y={y} w={30} h={8} nRight={rightNRight} />
            <T x={96} y={y + 6} size={4.6} anchor="start" fill={f === 'repel' ? ROSE : GREEN} weight={800}>{`${c.a}–${c.b}: ${f === 'repel' ? 'repel' : 'attract'}`}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- the field of a bar magnet shown by compass needles ----------

export const MagnetField = () => {
  const cx = 60, cy = 38, s = 5; // 5 svg units for one unit of the dipole model
  const pts: [number, number][] = [];
  for (const x of [-9, -6, -3, 0, 3, 6, 9]) for (const y of [-5, -3, 3, 5]) pts.push([x, y]);
  for (const x of [-9, -6, 6, 9]) pts.push([x, 0]);
  return (
    <Panel h={76} aria="Small compass needles around a bar magnet show the direction of the magnetic field. Outside the magnet the field lines leave the north pole, curve round and enter the south pole. The needles are closer to being in line with the magnet and point away from the north pole near the north pole, and point towards the south pole near the south pole. The field is strongest close to the poles, where the lines are closest together.">
      {pts.map(([x, y]) => {
        const f = dipoleField(x, y);
        const a = (f.angle * Math.PI) / 180;
        const px = cx + x * s, py = cy - y * s;
        const dx = Math.cos(a) * 4.2, dy = -Math.sin(a) * 4.2;
        const op = Math.min(1, 0.35 + f.strength * 25);
        return (
          <g key={`${x},${y}`} opacity={op}>
            <line x1={r3(px - dx)} y1={r3(py - dy)} x2={r3(px + dx)} y2={r3(py + dy)} stroke={SKY} strokeWidth={0.8} />
            <circle cx={r3(px + dx)} cy={r3(py + dy)} r={1.3} fill={SKY} />
          </g>
        );
      })}
      <Bar x={cx - 16} y={cy - 4} w={32} h={8} nRight />
      <T x={60} y={8} size={4.4} fill={AMBER}>Compass needles around a bar magnet</T>
      <T x={60} y={72} size={3.8} fill={MUTED} weight={600}>the dot is the north end of each needle: it points along the field</T>
    </Panel>
  );
};

// ---------- the Earth as a magnet ----------

export const EarthMagnet = () => (
  <Panel h={74} aria="The Earth drawn with a bar magnet inside it. The magnetic south pole of this magnet is near the geographic North Pole, at the top, and its magnetic north pole is near the geographic South Pole, at the bottom. The field lines leave the Earth near the geographic South Pole and enter near the geographic North Pole. A compass needle points to the geographic north because its north end is attracted by the Earth's magnetic south pole.">
    <circle cx={60} cy={38} r={22} fill={BLUE} fillOpacity={0.2} stroke={SKY} strokeWidth={1} />
    <rect x={56.5} y={22} width={7} height={16} fill={BLUE} />
    <rect x={56.5} y={38} width={7} height={16} fill={ROSE} />
    <T x={60} y={31} size={4.4} fill={INK} weight={800}>S</T>
    <T x={60} y={49} size={4.4} fill={INK} weight={800}>N</T>
    {[-1, 1].map((s) => (
      <path key={s} d={`M${60 + s * 3} 54 C${60 + s * 42} 74, ${60 + s * 42} 2, ${60 + s * 3} 22`} fill="none" stroke={GREEN} strokeWidth={0.9} opacity={0.8} />
    ))}
    <T x={60} y={9} size={4} fill={AMBER}>geographic North</T>
    <T x={60} y={72} size={4} fill={AMBER}>geographic South</T>
    <T x={4} y={40} size={3.6} anchor="start" fill={MUTED} weight={600}>magnetic S</T>
    <T x={4} y={44} size={3.6} anchor="start" fill={MUTED} weight={600}>is in the north</T>
  </Panel>
);

export const FactCards = ({ cards, aria }: { cards: { title: string; line1: string; line2?: string }[]; aria: string }) => {
  const rowH = 17;
  const cols = [AMBER, GREEN, BLUE, ROSE];
  return (
    <Panel h={6 + cards.length * rowH} aria={aria}>
      {cards.map((c, i) => {
        const y = 4 + i * rowH;
        const col = cols[i % cols.length];
        return (
          <g key={c.title}>
            <rect x={4} y={y} width={112} height={rowH - 3} rx={3} fill={col} fillOpacity={0.14} stroke={col} strokeWidth={0.7} />
            <T x={9} y={y + 6} size={5.2} anchor="start" fill={col} weight={800}>{c.title}</T>
            <T x={9} y={y + 11.6} size={4.2} anchor="start" weight={600}>{c.line1 + (c.line2 ? ` ${c.line2}` : '')}</T>
          </g>
        );
      })}
    </Panel>
  );
};
