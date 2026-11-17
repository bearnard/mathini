import { r3 } from '../round';
import { SPECTRUM, logPosition, pulse, sumAt } from './waves10Helpers';

/** Pictures for the Grade 10 Physical Sciences term 1 lessons. Every curve and position comes from waves10Helpers.ts. */

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

// ---------- one pulse on a rope ----------

export const SinglePulse = ({ amp }: { amp: number }) => {
  const x0 = 8, w = 104, y0 = 32, sc = 3.2;
  const pts = Array.from({ length: 105 }, (_, i) => `${i === 0 ? 'M' : 'L'}${r3(x0 + i)} ${r3(y0 - pulse(i / 104 * 10, 5, amp, 2) * sc)}`).join(' ');
  const peakX = r3(x0 + 52);
  return (
    <Panel h={62} aria={`A transverse pulse travelling to the right along a rope. The rope is shown flat at rest. The pulse has a height, the amplitude, of ${amp} centimetres above the rest position. Each particle of the rope moves up and down, at right angles to the direction in which the pulse travels.`}>
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUTED} strokeWidth={0.5} strokeDasharray="1.4 1.2" />
      <path d={pts} fill="none" stroke={GREEN} strokeWidth={1.4} />
      <line x1={peakX} y1={y0} x2={peakX} y2={r3(y0 - amp * sc)} stroke={AMBER} strokeWidth={0.8} />
      <T x={r3(peakX + 3)} y={r3(y0 - amp * sc / 2 + 1.4)} size={4} anchor="start" fill={AMBER}>{`amplitude ${amp} cm`}</T>
      <path d={`M${x0 + 8} 50 H${x0 + 36} M${x0 + 32} 47.6 L${x0 + 36} 50 L${x0 + 32} 52.4`} fill="none" stroke={SKY} strokeWidth={1} />
      <T x={x0 + 40} y={51.4} size={4} anchor="start" fill={SKY}>direction of the pulse</T>
      <T x={x0 + 4} y={y0 + 5.5} size={3.6} anchor="start" fill={MUTED} weight={600}>rest position</T>
    </Panel>
  );
};

// ---------- two pulses meeting ----------

export const PulseMeeting = ({ a, b }: { a: number; b: number }) => {
  const x0 = 8, w = 104, sc = 2.6;
  const row = (y0: number, f: (x: number) => number, color: string, label: string) => {
    const pts = Array.from({ length: 105 }, (_, i) => `${i === 0 ? 'M' : 'L'}${r3(x0 + i)} ${r3(y0 - f((i / 104) * 10) * sc)}`).join(' ');
    return (
      <g>
        <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUTED} strokeWidth={0.4} strokeDasharray="1.4 1.2" />
        <path d={pts} fill="none" stroke={color} strokeWidth={1.3} />
        <T x={x0 + 1} y={r3(y0 - 9)} size={3.6} anchor="start" fill={color}>{label}</T>
      </g>
    );
  };
  const c = [{ centre: 5, amp: a }, { centre: 5, amp: b }];
  const res = sumAt(5, c);
  return (
    <Panel h={92} aria={`Two pulses meet. Pulse 1 has an amplitude of ${a} centimetres and pulse 2 has an amplitude of ${b} centimetres. When they are on top of each other the displacements add: the resultant amplitude is ${res} centimetres, which is ${a * b > 0 ? 'constructive' : 'destructive'} interference. After they pass, each pulse carries on unchanged.`}>
      {row(22, (x) => pulse(x, 5, a), BLUE, `pulse 1: ${a} cm`)}
      {row(48, (x) => pulse(x, 5, b), ROSE, `pulse 2: ${b} cm`)}
      {row(76, (x) => sumAt(x, c), GREEN, `resultant: ${res} cm`)}
    </Panel>
  );
};

// ---------- the electromagnetic spectrum on a log scale ----------

export const EmSpectrum = () => {
  const x0 = 10, w = 100;
  return (
    <Panel h={58} aria="The electromagnetic spectrum, from gamma rays with the shortest wavelength and highest frequency on the left, through X-rays, ultraviolet, visible light, infrared and microwaves, to radio waves with the longest wavelength and lowest frequency on the right. All of them travel at the same speed, 3,00 times 10 to the power 8 metres per second, in a vacuum.">
      <defs>
        <linearGradient id="emg" x1="0" x2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="0.5" stopColor="#34d399" />
          <stop offset="1" stopColor="#fb7185" />
        </linearGradient>
      </defs>
      <rect x={x0} y={20} width={w} height={8} rx={2} fill="url(#emg)" opacity={0.85} />
      {SPECTRUM.map((e, i) => {
        const x = r3(x0 + logPosition(e.lambda) * w);
        return (
          <g key={e.name}>
            <line x1={x} y1={28} x2={x} y2={i % 2 === 0 ? 34 : 40} stroke={MUTED} strokeWidth={0.5} />
            <T x={Math.min(Math.max(x, 18), 102)} y={i % 2 === 0 ? 38 : 44} size={3.6} fill={LINE}>{e.name.replace(' rays', '').replace(' waves', '')}</T>
          </g>
        );
      })}
      <T x={x0} y={14} size={3.8} anchor="start" fill={AMBER}>shortest λ, highest f</T>
      <T x={x0 + w} y={14} size={3.8} anchor="end" fill={AMBER}>longest λ, lowest f</T>
      <T x={60} y={54} size={3.8} fill={MUTED} weight={600}>all travel at c = 3,00 × 10⁸ m·s⁻¹ in a vacuum</T>
    </Panel>
  );
};

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
