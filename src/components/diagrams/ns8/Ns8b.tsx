import { r3 } from '../round';
import { SPECTRUM, brightnessEach, bulbLights, pathways, reflectionAngle, type Layout } from './ns8bHelpers';

/** Pictures for the Grade 8 Natural Sciences Term 3 lessons. Every line and label comes from ns8bHelpers.ts. */

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

/** Rubbing a rod with a cloth: electrons move from the cloth to the rod. */
export const RubTransfer = () => (
  <Panel h={52} aria="Rubbing a plastic rod with wool. Electrons move from the wool to the rod. The rod gains electrons and becomes negatively charged. The wool loses electrons and becomes positively charged. Only the electrons move; protons and neutrons stay where they are.">
    <rect x={8} y={14} width={40} height={14} rx={3} fill={SKY} fillOpacity={0.3} stroke={SKY} strokeWidth={0.7} />
    <rect x={72} y={14} width={40} height={14} rx={3} fill={AMBER} fillOpacity={0.3} stroke={AMBER} strokeWidth={0.7} />
    <T x={28} y={9} size={4} fill={SKY}>plastic rod</T>
    <T x={92} y={9} size={4} fill={AMBER}>wool</T>
    <path d="M70 21 H52 M55 19 L52 21 L55 23" fill="none" stroke={GREEN} strokeWidth={1} />
    <T x={61} y={18} size={3.6} fill={GREEN}>e⁻</T>
    {[14, 22, 30, 38].map((x) => <T key={x} x={x} y={24.5} size={4.2} fill={SKY}>−</T>)}
    {[78, 86, 94, 102].map((x) => <T key={x} x={x} y={24.5} size={4.2} fill={AMBER}>+</T>)}
    <T x={28} y={38} size={3.8} fill={SKY}>gains electrons: negative</T>
    <T x={92} y={38} size={3.8} fill={AMBER}>loses electrons: positive</T>
    <T x={60} y={48} size={3.8} fill={MUTED} weight={600}>only electrons move</T>
  </Panel>
);

const Bulb = ({ x, y, lit }: { x: number; y: number; lit: boolean }) => (
  <g>
    <circle cx={x} cy={y} r={4} fill={lit ? AMBER : 'none'} fillOpacity={0.9} stroke={lit ? AMBER : MUTED} strokeWidth={0.8} />
    {lit ? [0, 60, 120, 180, 240, 300].map((a) => <line key={a} x1={r3(x + 5.4 * Math.cos((a * Math.PI) / 180))} y1={r3(y + 5.4 * Math.sin((a * Math.PI) / 180))} x2={r3(x + 7.4 * Math.cos((a * Math.PI) / 180))} y2={r3(y + 7.4 * Math.sin((a * Math.PI) / 180))} stroke={AMBER} strokeWidth={0.6} />) : null}
    <path d={`M${x - 2} ${y + 2} L${x} ${y - 1} L${x + 2} ${y + 2}`} fill="none" stroke={lit ? INK : MUTED} strokeWidth={0.6} />
  </g>
);
const Cell = ({ x, y }: { x: number; y: number }) => (
  <g>
    <line x1={x - 1.2} y1={y - 4} x2={x - 1.2} y2={y + 4} stroke={LINE} strokeWidth={1.2} />
    <line x1={x + 1.6} y1={y - 2.4} x2={x + 1.6} y2={y + 2.4} stroke={LINE} strokeWidth={1.2} />
  </g>
);

/** A simple circuit: cell, switch and one bulb. The bulb lights only when the circuit is complete. */
export const SimpleCircuit = ({ switchClosed }: { switchClosed: boolean }) => {
  const lit = bulbLights(true, switchClosed, true);
  return (
    <Panel h={58} aria={`A circuit with a cell, a switch and a bulb. The switch is ${switchClosed ? 'closed' : 'open'}, so the circuit is ${switchClosed ? 'complete and the bulb lights' : 'broken and the bulb stays off'}. Current flows from the cell through the wires and the bulb and back to the cell.`}>
      <path d={`M20 14 H40 M50 14 H${switchClosed ? 50 : 50} M${switchClosed ? 40 : 50} 14 H96 V44 H20 V14`} fill="none" stroke={SKY} strokeWidth={0.9} />
      <path d="M20 29 H20" stroke={SKY} />
      <rect x={14} y={24} width={12} height={10} fill={INK} />
      <Cell x={20} y={29} />
      <line x1={40} y1={14} x2={switchClosed ? 50 : 47} y2={switchClosed ? 14 : 8} stroke={LINE} strokeWidth={1} />
      <circle cx={40} cy={14} r={1} fill={LINE} />
      <circle cx={50} cy={14} r={1} fill={LINE} />
      <rect x={90} y={24} width={12} height={10} fill={INK} />
      <Bulb x={96} y={29} lit={lit} />
      <T x={20} y={52} size={3.6} fill={MUTED} weight={600}>cell</T>
      <T x={45} y={22} size={3.6} fill={MUTED} weight={600}>switch</T>
      <T x={96} y={52} size={3.6} fill={MUTED} weight={600}>bulb</T>
      <T x={60} y={37} size={4} fill={lit ? AMBER : ROSE}>{lit ? 'closed circuit: bulb lights' : 'open circuit: bulb off'}</T>
    </Panel>
  );
};

/** Bulbs in series (one pathway) or in parallel (several pathways) with the brightness note. */
export const BulbLayout = ({ layout, bulbs }: { layout: Layout; bulbs: number }) => {
  const paths = pathways(layout, bulbs);
  const note = brightnessEach(layout, bulbs);
  const h = layout === 'series' ? 52 : 28 + bulbs * 12;
  return (
    <Panel h={h} aria={`${bulbs} bulbs connected in ${layout}. ${layout === 'series' ? 'There is only one pathway for the current, and the current is the same everywhere.' : `There are ${paths} pathways for the current, one through each bulb.`} Each bulb is ${note}.`}>
      <T x={60} y={8} size={4.2} fill={GREEN}>{`${layout}: ${paths} pathway${paths > 1 ? 's' : ''}`}</T>
      {layout === 'series' ? (
        <g>
          <path d="M10 28 H110" stroke={SKY} strokeWidth={0.9} fill="none" />
          {Array.from({ length: bulbs }, (_, i) => <g key={i}><rect x={r3(24 + i * (72 / bulbs))} y={23} width={10} height={10} fill={INK} /><Bulb x={r3(29 + i * (72 / bulbs))} y={28} lit /></g>)}
          <T x={60} y={46} size={3.8} fill={MUTED} weight={600}>{`each bulb is ${note}`}</T>
        </g>
      ) : (
        <g>
          <path d={`M14 ${14 + (bulbs * 12) / 2} H30 M30 18 V${18 + (bulbs - 1) * 12} M90 18 V${18 + (bulbs - 1) * 12} M90 ${14 + (bulbs * 12) / 2} H106`} stroke={SKY} strokeWidth={0.9} fill="none" />
          {Array.from({ length: bulbs }, (_, i) => <g key={i}><path d={`M30 ${18 + i * 12} H90`} stroke={SKY} strokeWidth={0.9} fill="none" /><rect x={55} y={13 + i * 12} width={10} height={10} fill={INK} /><Bulb x={60} y={18 + i * 12} lit /></g>)}
          <T x={60} y={h - 3} size={3.8} fill={MUTED} weight={600}>{`each bulb is ${note}`}</T>
        </g>
      )}
    </Panel>
  );
};

/** The visible spectrum, violet to red. */
export const SpectrumBar = () => {
  const cols = ['#8b5cf6', '#6366f1', '#3b82f6', '#22c55e', '#eab308', '#f97316', '#ef4444'];
  return (
    <Panel h={40} aria="The visible spectrum in order: violet, indigo, blue, green, yellow, orange, red. Violet has the highest frequency and the shortest wavelength. Red has the lowest frequency and the longest wavelength.">
      {SPECTRUM.map((c, i) => (
        <g key={c}>
          <rect x={r3(6 + i * 15.7)} y={10} width={15.7} height={14} fill={cols[i]} />
          <T x={r3(6 + i * 15.7 + 7.85)} y={31} size={3.2} fill={LINE}>{c}</T>
        </g>
      ))}
      <T x={14} y={7} size={3.4} fill={MUTED} weight={600}>highest frequency</T>
      <T x={106} y={7} size={3.4} fill={MUTED} weight={600} anchor="end">lowest frequency</T>
      <T x={60} y={38} size={3.4} fill={MUTED} weight={600}>shortest wavelength → longest wavelength</T>
    </Panel>
  );
};

/** Reflection at a mirror: the angle of incidence equals the angle of reflection, both from the normal. */
export const RayReflection = ({ incidence }: { incidence: number }) => {
  const refl = reflectionAngle(incidence);
  const rad = (a: number) => (a * Math.PI) / 180;
  const cx = 60, cy = 42, len = 30;
  return (
    <Panel h={58} aria={`A ray of light hits a mirror at an angle of incidence of ${incidence} degrees and is reflected at an angle of reflection of ${refl} degrees. Both angles are measured from the normal, which is a line at right angles to the surface.`}>
      <line x1={14} y1={cy} x2={106} y2={cy} stroke={LINE} strokeWidth={1.4} />
      <line x1={cx} y1={cy} x2={cx} y2={cy - 34} stroke={MUTED} strokeWidth={0.5} strokeDasharray="1.4 1.2" />
      <line x1={r3(cx - len * Math.sin(rad(incidence)))} y1={r3(cy - len * Math.cos(rad(incidence)))} x2={cx} y2={cy} stroke={AMBER} strokeWidth={1} />
      <line x1={cx} y1={cy} x2={r3(cx + len * Math.sin(rad(refl)))} y2={r3(cy - len * Math.cos(rad(refl)))} stroke={GREEN} strokeWidth={1} />
      <T x={cx - 8} y={cy - 18} size={3.6} fill={AMBER}>{`i = ${incidence}°`}</T>
      <T x={cx + 8} y={cy - 18} size={3.6} fill={GREEN}>{`r = ${refl}°`}</T>
      <T x={cx + 9} y={8} size={3.4} fill={MUTED} weight={600}>normal</T>
      <T x={60} y={54} size={3.8} fill={LINE}>angle of incidence = angle of reflection</T>
    </Panel>
  );
};

/** Refraction at the surface of glass or water: towards the normal on entering, away from the normal on leaving. */
export const RayRefraction = () => (
  <Panel h={62} aria="A ray of light entering a block of glass from the air bends towards the normal. When it leaves the glass back into the air it bends away from the normal.">
    <rect x={30} y={18} width={60} height={30} fill={SKY} fillOpacity={0.22} stroke={SKY} strokeWidth={0.6} />
    <line x1={60} y1={8} x2={60} y2={58} stroke={MUTED} strokeWidth={0.4} strokeDasharray="1.4 1.2" />
    <path d="M36 4 L50 18 L58 33 L68 48 L82 61" fill="none" stroke={AMBER} strokeWidth={1} />
    <T x={100} y={30} size={3.8} fill={SKY}>glass</T>
    <T x={20} y={12} size={3.8} fill={MUTED} weight={600}>air</T>
    <T x={102} y={10} size={3.4} fill={MUTED} weight={600} anchor="end">enters: bends towards the normal</T>
    <T x={102} y={58} size={3.4} fill={MUTED} weight={600} anchor="end">leaves: bends away</T>
  </Panel>
);
