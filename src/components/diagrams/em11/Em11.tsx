import { r3 } from '../round';
import { fieldDirection, flux, inducedPole, force, solenoidNorthEnd, type Motion, type Pole } from './em11Helpers';

/** Pictures for the Grade 11 electromagnetism lesson. Every position and direction comes from em11Helpers.ts or the numbers passed in. */

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
const rad = (d: number) => (d * Math.PI) / 180;

// ---------- field around a straight wire, seen end-on ----------

export const WireField = ({ current }: { current: 'out' | 'in' }) => {
  const cx = 60, cy = 34;
  const dir = fieldDirection(current);
  const ccw = dir === 'anticlockwise';
  const radii = [10, 18, 26];
  const arrow = (R: number) => {
    // an arrowhead at 45° above-right of centre, pointing along the field
    const a = rad(45);
    const x = cx + R * Math.cos(a), y = cy - R * Math.sin(a);
    // anticlockwise on the screen is (-sin a, -cos a) in SVG coordinates (y points down); clockwise is the opposite
    const sg = ccw ? 1 : -1;
    const tx = sg * -Math.sin(a), ty = sg * -Math.cos(a);
    const px = -ty, py = tx;
    return <polygon points={`${r3(x + tx * 3)},${r3(y + ty * 3)} ${r3(x + px * 1.8)},${r3(y + py * 1.8)} ${r3(x - px * 1.8)},${r3(y - py * 1.8)}`} fill={SKY} />;
  };
  return (
    <Panel h={68} aria={`A straight wire seen end-on. The current goes ${current === 'out' ? 'out of the page, shown by a dot' : 'into the page, shown by a cross'}. By the right hand rule the magnetic field lines are circles around the wire, going ${dir}. The field is strongest close to the wire.`}>
      {radii.map((R) => <circle key={R} cx={cx} cy={cy} r={R} fill="none" stroke={SKY} strokeWidth={0.9} opacity={1 - R / 60} />)}
      {radii.map((R) => <g key={`a${R}`}>{arrow(R)}</g>)}
      <circle cx={cx} cy={cy} r={3.2} fill={AMBER} />
      {current === 'out' ? <circle cx={cx} cy={cy} r={1} fill={INK} /> : <path d={`M${cx - 1.6} ${cy - 1.6} L${cx + 1.6} ${cy + 1.6} M${cx + 1.6} ${cy - 1.6} L${cx - 1.6} ${cy + 1.6}`} stroke={INK} strokeWidth={0.9} />}
      <T x={12} y={9} size={4} anchor="start" fill={AMBER}>{current === 'out' ? 'current out of the page' : 'current into the page'}</T>
      <T x={60} y={65} size={4} fill={SKY}>{`field goes ${dir}`}</T>
    </Panel>
  );
};

// ---------- a solenoid ----------

export const Solenoid = ({ currentSeenFromRight }: { currentSeenFromRight: 'clockwise' | 'anticlockwise' }) => {
  const nEnd = solenoidNorthEnd(currentSeenFromRight);
  const turns = [0, 1, 2, 3, 4];
  const x0 = 34, step = 10;
  return (
    <Panel h={56} aria={`A solenoid, a coil of wire. By the right hand rule, with the current going ${currentSeenFromRight} when seen from the right-hand end, the north pole is at the ${nEnd}-hand end. Inside the coil the field lines run from the south end to the north end, like the field of a bar magnet.`}>
      {turns.map((t) => <ellipse key={t} cx={x0 + t * step} cy={28} rx={3.2} ry={10} fill="none" stroke={AMBER} strokeWidth={1.3} />)}
      <line x1={x0 - 14} y1={28} x2={x0 + 4 * step + 14} y2={28} stroke={SKY} strokeWidth={1} strokeDasharray="2 1.4" />
      <polygon points={nEnd === 'right' ? `${x0 + 4 * step + 14},28 ${x0 + 4 * step + 9},25.5 ${x0 + 4 * step + 9},30.5` : `${x0 - 14},28 ${x0 - 9},25.5 ${x0 - 9},30.5`} fill={SKY} />
      <T x={x0 - 22} y={31} size={6} fill={nEnd === 'left' ? ROSE : BLUE} weight={800}>{nEnd === 'left' ? 'N' : 'S'}</T>
      <T x={x0 + 4 * step + 22} y={31} size={6} fill={nEnd === 'right' ? ROSE : BLUE} weight={800}>{nEnd === 'right' ? 'N' : 'S'}</T>
      <T x={60} y={52} size={4} fill={MUTED} weight={600}>{`current ${currentSeenFromRight} seen from the right`}</T>
    </Panel>
  );
};

// ---------- flux against the angle ----------

export const FluxCurve = ({ B, A, angles }: { B: number; A: number; angles: number[] }) => {
  const x0 = 16, y0 = 46, w = 96, h = 34;
  const max = B * A;
  const X = (a: number) => r3(x0 + (a / 90) * w);
  const Y = (v: number) => r3(y0 - (v / max) * h);
  const curve = Array.from({ length: 31 }, (_, i) => `${i === 0 ? 'M' : 'L'}${X(i * 3)} ${Y(flux(B, A, i * 3))}`).join(' ');
  return (
    <Panel h={64} aria={`Magnetic flux through a loop of area ${A} square metres in a field of ${B} tesla, for angles between the field and the normal to the loop from 0 to 90 degrees. The flux is largest, ${flux(B, A, 0)} weber, at 0 degrees and falls to zero at 90 degrees. ${angles.map((a) => `At ${a} degrees it is ${flux(B, A, a)} weber`).join('; ')}.`}>
      <T x={60} y={7} size={4.4} fill={AMBER}>Φ = BA cos θ</T>
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUTED} strokeWidth={0.6} />
      <line x1={x0} y1={y0} x2={x0} y2={y0 - h} stroke={MUTED} strokeWidth={0.6} />
      <path d={curve} fill="none" stroke={BLUE} strokeWidth={1.1} />
      {angles.map((a) => (
        <g key={a}>
          <circle cx={X(a)} cy={Y(flux(B, A, a))} r={1.8} fill={GREEN} />
          <T x={X(a)} y={r3(Y(flux(B, A, a)) - 3)} size={3.6}>{String(flux(B, A, a)).replace('.', ',')}</T>
          <T x={X(a)} y={r3(y0 + 5)} size={3.6} fill={MUTED} weight={600}>{`${a}°`}</T>
        </g>
      ))}
      <T x={60} y={61} size={3.8} fill={MUTED} weight={600}>angle θ between B and the normal (flux in Wb)</T>
    </Panel>
  );
};

// ---------- Lenz's law: magnet moving at a solenoid ----------

export const LenzCases = ({ cases }: { cases: { pole: Pole; motion: Motion }[] }) => (
  <Panel h={8 + cases.length * 13} aria={`Lenz's law for four movements of a bar magnet at a solenoid. ${cases.map((c) => `${c.pole === 'N' ? 'North' : 'South'} pole ${c.motion === 'in' ? 'pushed in' : 'pulled out'}: the end of the solenoid nearest the magnet becomes a ${inducedPole(c.pole, c.motion) === 'N' ? 'north' : 'south'} pole and ${force(c.pole, c.motion)} the magnet, so it opposes the movement`).join('. ')}.`}>
    {cases.map((c, i) => {
      const y = 4 + i * 13;
      const p = inducedPole(c.pole, c.motion);
      return (
        <g key={i}>
          <rect x={3} y={y} width={114} height={11} rx={2.5} fill={c.motion === 'in' ? GREEN : ROSE} fillOpacity={0.14} stroke={c.motion === 'in' ? GREEN : ROSE} strokeWidth={0.6} />
          <T x={7} y={y + 7.4} size={4.2} anchor="start" weight={700}>{`${c.pole} pole ${c.motion === 'in' ? 'in' : 'out'}`}</T>
          <T x={60} y={y + 7.4} size={4.2} anchor="start" fill={AMBER} weight={800}>{`near end is ${p}`}</T>
          <T x={113} y={y + 7.4} size={4.2} anchor="end" fill={LINE} weight={600}>{force(c.pole, c.motion)}</T>
        </g>
      );
    })}
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
