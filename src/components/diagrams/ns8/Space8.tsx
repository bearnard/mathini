import { r3 } from '../round';
import { DISTANCES, spiralArm } from './space8Helpers';

/** Pictures for the Grade 8 Natural Sciences Term 4 space lessons. The spiral arms come from space8Helpers.ts. */

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

/** The Milky Way as a spiral galaxy; the Sun is near the outer edge, in one of the arms. */
export const MilkyWay = () => {
  const cx = 60, cy = 36, R = 30;
  return (
    <Panel h={76} aria="The Milky Way Galaxy drawn as a spiral with arms of stars around a bright centre. Our Sun is only one of billions of stars in the galaxy and is located towards the outer edge, in one of the spiral arms.">
      {[0, 1].map((arm) => spiralArm(arm, 2, 36, R).map((p, i) => <circle key={`${arm}-${i}`} cx={r3(cx + p.x * 1.5)} cy={r3(cy + p.y * 0.9)} r={r3(0.8 + (i / 36) * 0.8)} fill={SKY} fillOpacity={0.55 + (i / 36) * 0.3} />))}
      <circle cx={cx} cy={cy} r={5} fill={AMBER} fillOpacity={0.85} />
      <circle cx={r3(cx + 28)} cy={r3(cy + 12)} r={1.7} fill={ROSE} />
      <path d={`M${cx + 28} ${cy + 12} L${cx + 40} ${cy + 22}`} stroke={ROSE} strokeWidth={0.5} />
      <T x={cx + 42} y={cy + 25} size={3.8} anchor="start" fill={ROSE}>our Sun</T>
      <T x={cx} y={8} size={4.2} fill={AMBER}>the Milky Way Galaxy</T>
      <T x={60} y={72} size={3.6} fill={MUTED} weight={600}>billions of stars held together by gravity</T>
    </Panel>
  );
};

/** The Southern Cross with the two Pointers: Alpha Centauri is the brighter one. */
export const SouthernCross = () => (
  <Panel h={66} aria="A star map of the Southern Cross constellation: four stars in the shape of a cross, with two bright stars called the Pointers beside it. The brighter Pointer is Alpha Centauri, the nearest easily visible star to the Sun, 4,2 light years away.">
    {[[62, 14], [62, 44], [50, 29], [74, 31]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={2} fill={LINE} />)}
    <circle cx={64} cy={36} r={0.9} fill={MUTED} />
    <path d="M62 14 L62 44 M50 29 L74 31" stroke={MUTED} strokeWidth={0.4} strokeDasharray="1.2 1.2" />
    <circle cx={22} cy={30} r={3.2} fill={AMBER} />
    <circle cx={34} cy={36} r={2.4} fill={LINE} />
    <T x={22} y={42} size={3.6} fill={AMBER}>Alpha Centauri</T>
    <T x={34} y={49} size={3.4} fill={MUTED} weight={600}>the Pointers</T>
    <T x={62} y={11} size={3.6} fill={MUTED} weight={600}>Southern Cross</T>
    <T x={60} y={61} size={3.8} fill={LINE}>Alpha Centauri: 4,2 light years away</T>
  </Panel>
);

/** Distances in light units, from the Sun to the Universe. */
export const LightDistances = () => (
  <Panel h={14 + DISTANCES.length * 12} aria="Distances measured in light. Earth to the Sun is 8 light minutes. The Solar System is about 13 light hours across. Alpha Centauri is 4,2 light years away. The observable Universe is about 28 billion light years across. Each is much bigger than the one before.">
    <T x={60} y={8} size={4.2} fill={AMBER}>how far light travels</T>
    {DISTANCES.map((d, i) => {
      const y = 14 + i * 12;
      return (
        <g key={d.name}>
          <rect x={4} y={y} width={112} height={9.4} rx={1.6} fill={[GREEN, BLUE, SKY, ROSE][i]} fillOpacity={0.22} stroke={[GREEN, BLUE, SKY, ROSE][i]} strokeWidth={0.5} />
          <T x={7} y={y + 6.4} size={3.6} anchor="start" weight={600}>{d.name}</T>
          <T x={113} y={y + 6.4} size={3.6} anchor="end" fill={[GREEN, BLUE, SKY, ROSE][i]}>{d.light}</T>
        </g>
      );
    })}
  </Panel>
);

/** An optical refracting telescope (lens) and a reflecting telescope (mirror), and a radio dish. */
export const TelescopeTypes = () => (
  <Panel h={62} aria="Three kinds of telescope. A refracting optical telescope uses a lens to focus the light by refraction. A reflecting optical telescope, like SALT and the Hubble Space Telescope, uses a mirror to focus the light by reflection. A radio telescope, like the SKA, uses a metal dish that reflects radio waves to a receiver.">
    <T x={20} y={8} size={3.8} fill={AMBER}>lens (refraction)</T>
    <ellipse cx={20} cy={26} rx={3.4} ry={9} fill={SKY} fillOpacity={0.4} stroke={SKY} strokeWidth={0.6} />
    <path d="M4 18 L17 24 M4 34 L17 28 M23 26 L36 26" stroke={AMBER} strokeWidth={0.7} fill="none" />
    <T x={60} y={8} size={3.8} fill={GREEN}>mirror (reflection)</T>
    <path d="M52 18 Q62 26 52 34" fill="none" stroke={GREEN} strokeWidth={1.4} />
    <path d="M38 20 L51 21 M38 32 L51 31 M51 21 L46 26 M51 31 L46 26" stroke={AMBER} strokeWidth={0.7} fill="none" />
    <T x={100} y={8} size={3.8} fill={ROSE}>radio dish</T>
    <path d="M88 18 Q100 36 112 18" fill="none" stroke={ROSE} strokeWidth={1.4} />
    <path d="M92 8 L98 28 M108 8 L102 28" stroke={MUTED} strokeWidth={0.4} />
    <line x1={100} y1={27} x2={100} y2={20} stroke={LINE} strokeWidth={0.8} />
    <T x={20} y={48} size={3.4} fill={MUTED} weight={600}>optical</T>
    <T x={56} y={48} size={3.4} fill={MUTED} weight={600}>optical: SALT, Hubble</T>
    <T x={100} y={48} size={3.4} fill={MUTED} weight={600}>radio: SKA</T>
    <T x={60} y={58} size={3.6} fill={LINE}>a telescope forms an image and magnifies it</T>
  </Panel>
);
