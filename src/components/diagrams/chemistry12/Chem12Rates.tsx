import { r3 } from '../round';
import { PICTURE_COLORS } from '../maths/Grade7Pictures';

/** Pictures for the Grade 12 rate, equilibrium and acid-base lessons: dark panel, 120-unit viewBox, few labels, positions computed from the numbers passed in. */
const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    <title>{aria}</title>
    {children}
  </svg>
);
const T = ({ x, y, children, color = LINE, size = 5.2, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/** Concentration against time. mode 'rate': a reactant falls (a steeper start); mode 'equilibrium': reactant falls and product rises until both go flat. */
export const ConcTimeGraph = ({ mode, c0, ceq }: { mode: 'rate' | 'equilibrium'; c0: number; ceq?: number }) => {
  const x0 = 16, x1 = 110, y0 = 52, y1 = 10;
  const top = c0;
  const sx = (t: number) => x0 + t * (x1 - x0);
  const sy = (c: number) => y0 - (c / top) * (y0 - y1);
  const N = 40;
  const k = 4.5;
  const reactant = (t: number) => (mode === 'rate' ? c0 * Math.exp(-3 * t) : ceq! + (c0 - ceq!) * Math.exp(-k * t));
  const product = (t: number) => c0 - reactant(t);
  const path = (f: (t: number) => number) => Array.from({ length: N + 1 }, (_, i) => `${i ? 'L' : 'M'}${r3(sx(i / N))} ${r3(sy(f(i / N)))}`).join(' ');
  return (
    <Panel h={66} aria={mode === 'rate' ? 'A graph of concentration against time. The concentration of a reactant falls quickly at first and then more slowly, so the rate is greatest at the start.' : 'A graph of concentration against time. The reactant falls and the product rises until both lines become flat: equilibrium is reached and the concentrations stay constant.'}>
      <line x1={x0} y1={y1} x2={x0} y2={y0} stroke={MUTED} strokeWidth={0.8} />
      <line x1={x0} y1={y0} x2={x1} y2={y0} stroke={MUTED} strokeWidth={0.8} />
      <path d={path(reactant)} fill="none" stroke={A} strokeWidth={1.6} />
      {mode === 'equilibrium' ? <path d={path(product)} fill="none" stroke={E} strokeWidth={1.6} /> : null}
      {mode === 'equilibrium' ? <line x1={r3(sx(0.55))} y1={y1} x2={r3(sx(0.55))} y2={y0} stroke={R} strokeWidth={0.8} strokeDasharray="2 1.6" /> : null}
      <T x={x1} y={y0 + 9} color={MUTED} size={4.6} anchor="end">time</T>
      <T x={x0 + 2} y={y1 - 1} color={MUTED} size={4.6} anchor="start">concentration</T>
      <T x={sx(0.3)} y={sy(reactant(0.3)) - 3} color={A} anchor="start">reactant</T>
      {mode === 'equilibrium' ? <T x={sx(0.25)} y={sy(product(0.25)) + 8} color={E} anchor="start">product</T> : null}
      {mode === 'equilibrium' ? <T x={sx(0.55) + 2} y={y0 - 4} color={R} size={4.6} anchor="start">equilibrium</T> : null}
    </Panel>
  );
};

/** An energy profile: reactants, the peak (activation energy) and products (ΔH). A second dashed profile shows a catalyst lowering the peak. */
export const EnergyProfile = ({ reactants, peak, products, catalystPeak }: { reactants: number; peak: number; products: number; catalystPeak?: number }) => {
  const max = Math.max(peak, reactants, products) * 1.1;
  const sy = (e: number) => 56 - (e / max) * 46;
  const curve = (p: number, color: string, dash?: string) => {
    const a = sy(reactants);
    const b = sy(p);
    const c = sy(products);
    return <path d={`M18 ${r3(a)} H34 C48 ${r3(a)} 48 ${r3(b)} 62 ${r3(b)} C76 ${r3(b)} 76 ${r3(c)} 90 ${r3(c)} H108`} fill="none" stroke={color} strokeWidth={1.5} strokeDasharray={dash} />;
  };
  const dH = products - reactants;
  return (
    <Panel h={70} aria={`An energy profile. The reactants are at ${reactants}, the peak is at ${peak} and the products are at ${products}. The activation energy is the rise from reactants to the peak; the enthalpy change ΔH is ${dH} (${dH < 0 ? 'exothermic' : 'endothermic'}).${catalystPeak !== undefined ? ` With a catalyst the peak is lower, at ${catalystPeak}.` : ''}`}>
      <line x1={14} y1={8} x2={14} y2={58} stroke={MUTED} strokeWidth={0.8} />
      <line x1={14} y1={58} x2={112} y2={58} stroke={MUTED} strokeWidth={0.8} />
      {curve(peak, I)}
      {catalystPeak !== undefined ? curve(catalystPeak, E, '2.5 1.8') : null}
      <line x1={r3(62)} y1={r3(sy(reactants))} x2={r3(62)} y2={r3(sy(peak))} stroke={A} strokeWidth={1.1} />
      <T x={64} y={(sy(reactants) + sy(peak)) / 2 + 2} color={A} anchor="start">Ea</T>
      <line x1={r3(100)} y1={r3(sy(reactants))} x2={r3(100)} y2={r3(sy(products))} stroke={R} strokeWidth={1.1} />
      <T x={98} y={(sy(reactants) + sy(products)) / 2 + 2} color={R} anchor="end">ΔH</T>
      <T x={26} y={sy(reactants) - 3} color={LINE} size={4.6}>reactants</T>
      <T x={98} y={sy(products) + 8} color={LINE} size={4.6}>products</T>
      <T x={16} y={66} color={MUTED} size={4.4} anchor="start">progress of reaction</T>
    </Panel>
  );
};

/** Bars of the equilibrium concentrations (to scale), one per species. */
export const EqBars = ({ species }: { species: { name: string; conc: number }[] }) => {
  const max = Math.max(...species.map((s) => s.conc));
  const n = species.length;
  const bw = 92 / n - 8;
  const f = (v: number) => String(v).replace('.', ',');
  return (
    <Panel h={62} aria={`Equilibrium concentrations in mol per cubic decimetre: ${species.map((s) => `${s.name} ${f(s.conc)}`).join(', ')}.`}>
      <line x1={10} y1={48} x2={112} y2={48} stroke={MUTED} strokeWidth={0.7} />
      {species.map((s, i) => {
        const hh = (s.conc / max) * 30;
        const x = 18 + i * (bw + 8);
        return (
          <g key={s.name}>
            <rect x={r3(x)} y={r3(48 - hh)} width={r3(bw)} height={r3(hh)} fill={[A, E, I][i % 3]} fillOpacity={0.4} stroke={[A, E, I][i % 3]} strokeWidth={0.9} />
            <T x={x + bw / 2} y={44 - hh} color={LINE} size={4.8}>{f(s.conc)}</T>
            <T x={x + bw / 2} y={57} color={LINE} size={5}>{s.name}</T>
          </g>
        );
      })}
    </Panel>
  );
};

/** Change on the left, effect on the right: each row one Le Chatelier case. */
export const ShiftRows = ({ rows }: { rows: [string, string][] }) => (
  <Panel h={10 + rows.length * 16} aria={`Le Chatelier: ${rows.map(([a, b]) => `${a} makes the equilibrium shift ${b}`).join('; ')}.`}>
    {rows.map(([a, b], i) => (
      <g key={i}>
        <T x={8} y={14 + i * 16} color={A} anchor="start">{a}</T>
        <T x={8} y={21.5 + i * 16} color={E} size={4.8} anchor="start">{`→ ${b}`}</T>
      </g>
    ))}
  </Panel>
);

/** An acid donating a proton to water: acid and base on the left, the conjugate pair on the right, with the proton moving. */
export const ConjugatePairs = ({ acid, base, conjBase, conjAcid }: { acid: string; base: string; conjBase: string; conjAcid: string }) => (
  <Panel h={46} aria={`${acid} donates a proton to ${base}. ${acid} is the acid and ${conjBase} is its conjugate base. ${base} is the base and ${conjAcid} is its conjugate acid.`}>
    <rect x={6} y={8} width={22} height={14} rx={3} fill="rgba(251,191,36,0.2)" stroke={A} strokeWidth={0.9} />
    <T x={17} y={17.6} color={A}>{acid}</T>
    <T x={36} y={17.6} color={MUTED}>+</T>
    <rect x={42} y={8} width={22} height={14} rx={3} fill="rgba(99,102,241,0.2)" stroke={I} strokeWidth={0.9} />
    <T x={53} y={17.6} color={I}>{base}</T>
    <T x={72} y={17.6} color={LINE} size={7}>⇌</T>
    <rect x={80} y={8} width={16} height={14} rx={3} fill="rgba(251,191,36,0.1)" stroke={A} strokeWidth={0.9} strokeDasharray="2 1.5" />
    <T x={88} y={17.6} color={A}>{conjBase}</T>
    <rect x={100} y={8} width={16} height={14} rx={3} fill="rgba(99,102,241,0.1)" stroke={I} strokeWidth={0.9} strokeDasharray="2 1.5" />
    <T x={108} y={17.6} color={I}>{conjAcid}</T>
    <path d="M17 6 Q35 -2 53 6" fill="none" stroke={E} strokeWidth={0.9} />
    <T x={35} y={36} color={E} size={4.8}>H⁺ moves from acid to base</T>
  </Panel>
);

/** The pH scale from 0 to 14 with marked solutions. */
export const PhScale = ({ marks }: { marks: { ph: number; label: string; color?: string }[] }) => {
  const x = (v: number) => 10 + (v / 14) * 100;
  return (
    <Panel h={58} aria={`The pH scale from 0 (strongly acidic) to 14 (strongly basic), with 7 neutral. ${marks.map((m) => `${m.label} has pH ${m.ph}`).join('; ')}.`}>
      <defs>
        <linearGradient id="phg" x1="0" x2="1">
          <stop offset="0" stopColor="#f87171" />
          <stop offset="0.5" stopColor="#4ade80" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <rect x={10} y={22} width={100} height={8} rx={2} fill="url(#phg)" />
      {[0, 7, 14].map((v) => <T key={v} x={x(v)} y={41} color={MUTED} size={4.6}>{String(v)}</T>)}
      {marks.map((m) => (
        <g key={m.label}>
          <line x1={r3(x(m.ph))} y1={19} x2={r3(x(m.ph))} y2={33} stroke={m.color ?? A} strokeWidth={1.3} />
          <T x={x(m.ph)} y={14} color={m.color ?? A} size={4.6}>{m.label}</T>
        </g>
      ))}
      <T x={22} y={53} color={MUTED} size={4.4}>acidic</T>
      <T x={60} y={53} color={MUTED} size={4.4}>neutral</T>
      <T x={98} y={53} color={MUTED} size={4.4}>basic</T>
    </Panel>
  );
};

/** A burette over a flask: volume of standard solution added and the volume in the flask. */
export const Titration = ({ burette, flask }: { burette: string; flask: string }) => (
  <Panel h={66} aria={`A titration. The burette holds ${burette} and the flask holds ${flask}. The solution from the burette is added until the indicator changes colour at the end point.`}>
    <rect x={20} y={4} width={8} height={34} rx={1.5} fill="rgba(99,102,241,0.2)" stroke={I} strokeWidth={1} />
    <line x1={24} y1={38} x2={24} y2={44} stroke={I} strokeWidth={1} />
    <path d="M14 62 L18 46 H30 L34 62 Z" fill="rgba(251,191,36,0.2)" stroke={A} strokeWidth={1} />
    <T x={40} y={16} color={I} anchor="start">burette</T>
    <T x={40} y={25} color={LINE} size={4.6} anchor="start">{burette}</T>
    <T x={40} y={52} color={A} anchor="start">flask</T>
    <T x={40} y={60} color={LINE} size={4.6} anchor="start">{flask}</T>
  </Panel>
);
