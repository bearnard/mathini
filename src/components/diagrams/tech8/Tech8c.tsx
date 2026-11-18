import { r3 } from '../round';
import { SYSTEM_PARTS, directionOfGear } from './tech8cHelpers';

/** Pictures for the Grade 8 Technology Term 3 lessons. Gear sizes come from the numbers of teeth. */

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

/** A gear drawn as a circle with its teeth. The radius is proportional to the number of teeth. */
const Gear = ({ cx, cy, teeth, k, col, label }: { cx: number; cy: number; teeth: number; k: number; col: string; label: string }) => {
  const r = teeth * k;
  const ticks = Array.from({ length: teeth }, (_, i) => {
    const a = (2 * Math.PI * i) / teeth;
    return <line key={i} x1={r3(cx + (r - 1) * Math.cos(a))} y1={r3(cy + (r - 1) * Math.sin(a))} x2={r3(cx + (r + 1.6) * Math.cos(a))} y2={r3(cy + (r + 1.6) * Math.sin(a))} stroke={col} strokeWidth={1.1} />;
  });
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={col} fillOpacity={0.18} stroke={col} strokeWidth={0.8} />
      {ticks}
      <circle cx={cx} cy={cy} r={1.1} fill={LINE} />
      <T x={cx} y={r3(cy + 4.2)} size={3.4} fill={LINE}>{label}</T>
    </g>
  );
};

/** A driver and a driven gear meshing, with their directions of rotation. */
export const GearPair = ({ driver, driven }: { driver: number; driven: number }) => {
  const k = Math.min(0.7, 19 / Math.max(driver, driven));
  const r1 = driver * k, r2 = driven * k;
  const cy = 38;
  const x1 = r3(60 - (r1 + r2 + 1.6) / 2 + r1), x2 = r3(x1 + r1 + r2 + 1.6);
  return (
    <Panel h={72} aria={`A driver gear with ${driver} teeth meshes with a driven gear with ${driven} teeth. The driven gear turns in the opposite direction, which is counter-rotation. ${driven > driver ? 'The driven gear is bigger, so it turns more slowly with more force.' : driven < driver ? 'The driven gear is smaller, so it turns faster with less force.' : 'The gears are equal, so there is no change in speed or force.'}`}>
      <T x={60} y={8} size={4} fill={AMBER}>driver meshes with driven</T>
      <Gear cx={x1} cy={cy} teeth={driver} k={k} col={SKY} label={`${driver}`} />
      <Gear cx={x2} cy={cy} teeth={driven} k={k} col={GREEN} label={`${driven}`} />
      <path d={`M${r3(x1 - 5)} ${r3(cy - r1 - 4)} a5 5 0 0 1 10 0`} fill="none" stroke={SKY} strokeWidth={0.8} />
      <path d={`M${r3(x2 + 5)} ${r3(cy - r2 - 4)} a5 5 0 0 0 -10 0`} fill="none" stroke={GREEN} strokeWidth={0.8} />
      <T x={r3(Math.min(x1, 36))} y={66} size={3.6} fill={SKY}>driver (clockwise)</T>
      <T x={r3(Math.max(x2, 84))} y={66} size={3.6} fill={GREEN}>driven (anticlockwise)</T>
    </Panel>
  );
};

/** Three gears in a row: with an idler the driven gear turns the same way as the driver. */
export const IdlerTrain = () => (
  <Panel h={56} aria={`Three gears meshing in a row: the driver, an idler and the driven gear. Each meshing reverses the direction, so the idler turns ${directionOfGear(2)} and the driven gear turns ${directionOfGear(3)}. The idler does not change the speed ratio between the driver and the driven gear.`}>
    <T x={60} y={8} size={4} fill={AMBER}>idler: the driven gear turns the same way</T>
    <Gear cx={24} cy={30} teeth={14} k={0.9} col={SKY} label="driver" />
    <Gear cx={60} cy={30} teeth={10} k={0.9} col={AMBER} label="idler" />
    <Gear cx={94} cy={30} teeth={14} k={0.9} col={GREEN} label="driven" />
    <T x={24} y={52} size={3.4} fill={SKY}>clockwise</T>
    <T x={60} y={52} size={3.4} fill={AMBER}>anticlockwise</T>
    <T x={94} y={52} size={3.4} fill={GREEN}>clockwise</T>
  </Panel>
);

/** A systems diagram: input, process, output. */
export const SystemsDiagram = ({ input, process, output }: { input: string; process: string; output: string }) => {
  const labels = [input, process, output];
  const cols = [SKY, AMBER, GREEN];
  return (
    <Panel h={40} aria={`A systems diagram with three boxes joined by arrows: input, ${input}; process, ${process}; output, ${output}.`}>
      {SYSTEM_PARTS.map((p, i) => (
        <g key={p}>
          <rect x={r3(4 + i * 40)} y={8} width={34} height={22} rx={2.5} fill={cols[i]} fillOpacity={0.18} stroke={cols[i]} strokeWidth={0.7} />
          <T x={r3(21 + i * 40)} y={14} size={3.6} fill={cols[i]}>{p.toUpperCase()}</T>
          <T x={r3(21 + i * 40)} y={21} size={2.9} weight={600}>{labels[i].split(' / ')[0]}</T>
          <T x={r3(21 + i * 40)} y={26} size={2.9} weight={600}>{labels[i].split(' / ')[1] ?? ''}</T>
          {i < 2 ? <path d={`M${r3(38 + i * 40)} 19 H${r3(44 + i * 40)} M${r3(42 + i * 40)} 17 L${r3(44 + i * 40)} 19 L${r3(42 + i * 40)} 21`} fill="none" stroke={LINE} strokeWidth={0.8} /> : null}
        </g>
      ))}
      <T x={60} y={37} size={3.4} fill={MUTED} weight={600}>input → process → output</T>
    </Panel>
  );
};
