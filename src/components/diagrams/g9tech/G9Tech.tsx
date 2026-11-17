import { r3 } from '../round';
import { clickAngle, polar, ratchetPath } from './controlHelpers';

/** Pictures for the Grade 9 Technology mechanical control lesson. Every position and force comes from controlHelpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const Arrow = ({ x1, y1, x2, y2, color = AMBER }: { x1: number; y1: number; x2: number; y2: number; color?: string }) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h1 = { x: r3(x2 - 3 * Math.cos(a - 0.5)), y: r3(y2 - 3 * Math.sin(a - 0.5)) };
  const h2 = { x: r3(x2 - 3 * Math.cos(a + 0.5)), y: r3(y2 - 3 * Math.sin(a + 0.5)) };
  return (
    <g stroke={color} strokeWidth={1.2} strokeLinecap="round" fill="none">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polyline points={`${h1.x},${h1.y} ${x2},${y2} ${h2.x},${h2.y}`} />
    </g>
  );
};

// ---------- ratchet and pawl ----------

export const RatchetPawl = ({ teeth }: { teeth: number }) => {
  const cx = 38, cy = 34, inner = 17, outer = 22;
  const tip = polar(cx, cy, outer, 0.85 * (360 / teeth)); // a tooth tip near 3 o'clock for the pawl to rest on
  return (
    <Panel h={70} aria={`A ratchet wheel with ${teeth} saw-shaped teeth and a pawl. The wheel can turn clockwise, because each tooth slopes up gently and lifts the pawl over it. It cannot turn anticlockwise, because the pawl drops against the steep side of a tooth and locks it. One click is ${clickAngle(teeth)} degrees.`}>
      <path d={ratchetPath(cx, cy, inner, outer, teeth)} fill={BLUE} fillOpacity={0.35} stroke={LINE} strokeWidth={0.9} strokeLinejoin="round" />
      <circle cx={cx} cy={cy} r={4} fill={INK} stroke={LINE} strokeWidth={0.8} />
      {/* the pawl: a bar pivoting at the right and resting on a tooth */}
      <line x1={r3(cx + outer + 16)} y1={r3(cy - 10)} x2={r3(cx + inner + 2.5)} y2={r3(cy - 4.6)} stroke={AMBER} strokeWidth={2.2} strokeLinecap="round" />
      <circle cx={r3(cx + outer + 16)} cy={r3(cy - 10)} r={1.8} fill={AMBER} />
      <T x={r3(cx + outer + 16)} y={r3(cy - 14)} size={4.4} fill={AMBER}>pawl</T>
      <Arrow x1={cx - 26} y1={cy - 16} x2={cx - 16} y2={cy - 24} color={GREEN} />
      <Arrow x1={cx - 26} y1={cy + 16} x2={cx - 16} y2={cy + 24} color={ROSE} />
      <T x={116} y={44} size={4.4} fill={GREEN} anchor="end">clockwise: free</T>
      <T x={116} y={53} size={4.4} fill={ROSE} anchor="end">anticlockwise: locked</T>
      <T x={60} y={67} size={4.4} fill={MUTED} weight={600}>{`${teeth} teeth: one click = ${clickAngle(teeth)}°`}</T>
    </Panel>
  );
};

// ---------- disc brake ----------

export const DiscBrake = ({ master, masterArea, slaveArea, slave }: { master: number; masterArea: number; slaveArea: number; slave: number }) => (
  <Panel h={66} aria={`Disc brake seen from the side. A small piston is pushed with ${master} newtons on ${masterArea} square centimetres. The brake fluid carries the pressure to larger pistons of ${slaveArea} square centimetres, which squeeze the brake pads on both sides of the spinning disc with ${slave} newtons each. Friction slows the wheel.`}>
    <rect x={8} y={26} width={14} height={14} rx={2} fill={BLUE} fillOpacity={0.35} stroke={LINE} strokeWidth={0.8} />
    <Arrow x1={2} y1={33} x2={8} y2={33} color={AMBER} />
    <T x={15} y={22} size={3.8} fill={AMBER}>{`${master} N`}</T>
    <T x={15} y={47} size={3.8} fill={MUTED} weight={600}>{`${masterArea} cm²`}</T>
    <path d="M22 33 H44 V14 H72 M44 33 V52 H72" fill="none" stroke={BLUE} strokeWidth={1.4} />
    <T x={33} y={30} size={3.4} fill={BLUE} weight={600}>fluid</T>
    <rect x={72} y={8} width={18} height={12} rx={2} fill={BLUE} fillOpacity={0.35} stroke={LINE} strokeWidth={0.8} />
    <rect x={72} y={46} width={18} height={12} rx={2} fill={BLUE} fillOpacity={0.35} stroke={LINE} strokeWidth={0.8} />
    <rect x={92} y={14} width={4} height={14} fill={AMBER} />
    <rect x={92} y={38} width={4} height={14} fill={AMBER} />
    <rect x={98} y={12} width={8} height={42} rx={1} fill={LINE} fillOpacity={0.85} />
    <Arrow x1={90} y1={21} x2={97} y2={21} color={ROSE} />
    <Arrow x1={90} y1={45} x2={97} y2={45} color={ROSE} />
    <T x={81} y={5} size={3.8} fill={AMBER}>{`${slave} N`}</T>
    <T x={81} y={64} size={3.8} fill={MUTED} weight={600}>{`${slaveArea} cm²`}</T>
    <T x={94} y={34} size={3.4} fill={AMBER} anchor="end" weight={600}>pads</T>
    <T x={102} y={62} size={3.6} fill={LINE} weight={600}>disc</T>
  </Panel>
);

// ---------- bicycle brake lever ----------

export const BikeLever = ({ effort, effortDist, loadDist, load }: { effort: number; effortDist: number; loadDist: number; load: number }) => {
  const x0 = 20, scale = 7; // units per cm
  const px = (d: number) => r3(x0 + d * scale);
  const y = 30;
  return (
    <Panel h={62} aria={`The brake lever on a bicycle handlebar is a lever. The pivot is at one end. The cable pulls at ${loadDist} centimetres from the pivot and your fingers pull at ${effortDist} centimetres. A hand force of ${effort} newtons gives a pull of ${load} newtons on the cable, so the lever multiplies force.`}>
      <line x1={x0} y1={y} x2={px(effortDist)} y2={y} stroke={LINE} strokeWidth={3} strokeLinecap="round" />
      <polygon points={`${x0},${y + 2} ${x0 - 4},${y + 9} ${x0 + 4},${y + 9}`} fill={BLUE} />
      <T x={x0 - 2} y={y + 3} size={4} anchor="end" fill={BLUE}>pivot</T>
      <Arrow x1={px(loadDist)} y1={y} x2={px(loadDist)} y2={y - 16} color={GREEN} />
      <T x={px(loadDist)} y={y - 19} size={4.2} fill={GREEN}>{`cable ${load} N`}</T>
      <Arrow x1={px(effortDist)} y1={y - 16} x2={px(effortDist)} y2={y - 1} color={AMBER} />
      <T x={px(effortDist)} y={y - 19} size={4.2} fill={AMBER}>{`hand ${effort} N`}</T>
      <line x1={x0} y1={y + 14} x2={px(loadDist)} y2={y + 14} stroke={GREEN} strokeWidth={0.8} />
      <T x={r3(px(loadDist) + 2)} y={y + 15.4} size={4} anchor="start" fill={GREEN}>{`${loadDist} cm: cable`}</T>
      <line x1={x0} y1={y + 22} x2={px(effortDist)} y2={y + 22} stroke={AMBER} strokeWidth={0.8} />
      <T x={r3(px(effortDist) + 2)} y={y + 23.4} size={4} anchor="start" fill={AMBER}>{`${effortDist} cm: fingers`}</T>
    </Panel>
  );
};

// ---------- cleat ----------

export const CleatPicture = () => (
  <Panel h={64} aria="A cleat, a bar with two horns on a short post, holding a rope. Step 1: take the rope once round the base of the cleat. Step 2: cross it over the top in a figure of eight round the two horns. Step 3: finish with a locking hitch, where the end is turned under itself so that the rope holds. To release it, undo the hitch.">
    <line x1={6} y1={52} x2={114} y2={52} stroke={MUTED} strokeWidth={0.8} />
    <rect x={55} y={44} width={10} height={8} fill={BLUE} fillOpacity={0.45} stroke={LINE} strokeWidth={0.9} />
    <path d="M30 40 Q30 36 38 36 L82 36 Q90 36 90 40 Q90 44 84 44 L36 44 Q30 44 30 40 Z" fill={BLUE} fillOpacity={0.55} stroke={LINE} strokeWidth={1} />
    <path d="M6 48 L52 48 C57 48 57 44 52 44" fill="none" stroke={AMBER} strokeWidth={1.6} strokeLinecap="round" />
    <path d="M36 35 L86 24 M36 24 L86 35" fill="none" stroke={GREEN} strokeWidth={1.6} strokeLinecap="round" />
    <path d="M36 35 C31 36 31 40 36 40 M86 35 C91 36 91 40 86 40" fill="none" stroke={GREEN} strokeWidth={1.6} strokeLinecap="round" />
    <circle cx={61} cy={29.5} r={3.2} fill="none" stroke={ROSE} strokeWidth={1.4} />
    <T x={8} y={59} size={4} anchor="start" fill={AMBER}>1 round the base</T>
    <T x={60} y={14} size={4} fill={GREEN}>2 figure of eight over the horns</T>
    <T x={112} y={59} size={4} anchor="end" fill={ROSE}>3 hitch (pink)</T>
  </Panel>
);
