import { r3 } from '../round';
import { coilPositions, compressionCentres, sineSamples, electrons, neutrons, protons, type Nuclide } from './atom10Helpers';

/** Pictures for the Grade 10 Physical Sciences wave 2 term 1 lessons. Every position and curve comes from atom10Helpers.ts. */

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
const sup = (n: number) => String(n).replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]);
const sub = (n: number) => String(n).replace(/\d/g, (d) => '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);

// ---------- nuclide table: A, Z and the particles ----------

export const NuclideTable = ({ rows }: { rows: { nuclide: Nuclide; charge?: number }[] }) => (
  <Panel h={16 + rows.length * 11} aria={`Particles in atoms. ${rows.map((r) => `${r.nuclide.symbol} with mass number ${r.nuclide.A} and atomic number ${r.nuclide.Z} has ${protons(r.nuclide)} protons, ${neutrons(r.nuclide)} neutrons and ${electrons(r.nuclide, r.charge ?? 0)} electrons`).join('; ')}.`}>
    <T x={22} y={8} size={3.8} fill={MUTED}>nuclide</T>
    <T x={52} y={8} size={3.8} fill={AMBER}>protons</T>
    <T x={78} y={8} size={3.8} fill={GREEN}>neutrons</T>
    <T x={104} y={8} size={3.8} fill={SKY}>electrons</T>
    {rows.map((r, i) => {
      const y = 12 + i * 11;
      const q = r.charge ?? 0;
      return (
        <g key={`${r.nuclide.symbol}${r.nuclide.A}${q}`}>
          <T x={22} y={y + 6.5} size={5}>{`${sup(r.nuclide.A)}${sub(r.nuclide.Z)}${r.nuclide.symbol}${q ? (Math.abs(q) > 1 ? sup(Math.abs(q)) : '') + (q > 0 ? '⁺' : '⁻') : ''}`}</T>
          <T x={52} y={y + 6.5} size={5} fill={AMBER}>{String(protons(r.nuclide))}</T>
          <T x={78} y={y + 6.5} size={5} fill={GREEN}>{String(neutrons(r.nuclide))}</T>
          <T x={104} y={y + 6.5} size={5} fill={SKY}>{String(electrons(r.nuclide, q))}</T>
        </g>
      );
    })}
  </Panel>
);

// ---------- isotope abundance bars ----------

export const AbundanceBars = ({ element, shares, ar }: { element: string; shares: readonly { mass: number; percent: number }[]; ar: string }) => (
  <Panel h={20 + shares.length * 12} aria={`Isotopes of ${element}: ${shares.map((s) => `mass ${s.mass} with ${s.percent} percent`).join('; ')}. The relative atomic mass, the weighted average, is about ${ar}.`}>
    <T x={60} y={7} size={4.4} fill={AMBER}>{`Isotopes of ${element}`}</T>
    {shares.map((s, i) => {
      const y = 12 + i * 12;
      const w = r3((s.percent / 100) * 70);
      return (
        <g key={s.mass}>
          <T x={4} y={y + 6} size={4.2} anchor="start" weight={600}>{`${element}-${s.mass}`}</T>
          <rect x={30} y={y + 1} width={w} height={7} rx={1.5} fill={[GREEN, BLUE, ROSE][i % 3]} />
          <T x={r3(30 + w + 2)} y={y + 6.4} size={4.2} anchor="start">{`${s.percent}%`}</T>
        </g>
      );
    })}
    <T x={60} y={16 + shares.length * 12} size={4.2} fill={LINE}>{`relative atomic mass ≈ ${ar}`}</T>
  </Panel>
);

// ---------- a spring with a longitudinal wave ----------

export const SpringWave = ({ lambda, a, coils = 33 }: { lambda: number; a: number; coils?: number }) => {
  const x0 = 8, scale = 3.1;
  const xs = coilPositions(coils, 1, a, lambda);
  const comp = compressionCentres(lambda, Math.floor((coils - 1) / lambda)).filter((c) => c < coils - 1);
  return (
    <Panel h={62} aria={`A spring with a longitudinal wave. The coils move to the left and right, along the length of the spring, which is the direction in which the wave travels. In the compressions the coils are close together and in the rarefactions they are far apart. The distance between two compressions is one wavelength, ${lambda} coil spacings.`}>
      <line x1={x0} y1={30} x2={x0 + (coils - 1) * scale} y2={30} stroke={MUTED} strokeWidth={0.4} strokeDasharray="1.4 1.2" />
      {xs.map((x, i) => (
        <line key={i} x1={r3(x0 + x * scale)} y1={20} x2={r3(x0 + x * scale)} y2={40} stroke={SKY} strokeWidth={0.9} />
      ))}
      {comp.slice(0, 3).map((c, i) => (
        <T key={c} x={r3(x0 + c * scale)} y={r3(16)} size={3.4} fill={AMBER}>{i === 0 ? 'compression' : 'C'}</T>
      ))}
      {Array.from({ length: Math.floor((coils - 1) / lambda) }, (_, k) => k * lambda).slice(0, 3).map((c, i) => (
        <T key={`r${c}`} x={r3(x0 + c * scale + (c === 0 ? 8 : 0))} y={48} size={3.4} fill={GREEN}>{i === 0 ? 'rarefaction' : 'R'}</T>
      ))}
      <line x1={r3(x0 + comp[0] * scale)} y1={54} x2={r3(x0 + comp[1] * scale)} y2={54} stroke={ROSE} strokeWidth={0.9} />
      <T x={r3(x0 + ((comp[0] + comp[1]) / 2) * scale)} y={59.6} size={3.6} fill={ROSE}>one wavelength</T>
    </Panel>
  );
};

// ---------- pitch and loudness waveforms ----------

export const Waveforms = ({ rows }: { rows: { label: string; amp: number; f: number; color?: string }[] }) => {
  const rowH = 28, x0 = 6, w = 108, seconds = 1;
  return (
    <Panel h={8 + rows.length * rowH} aria={`Sound waves drawn over the same time. ${rows.map((r) => `${r.label}: amplitude ${r.amp}, ${r.f} cycles`).join('; ')}. A higher frequency fits more cycles in the same time and sounds higher in pitch. A larger amplitude sounds louder.`}>
      {rows.map((r, k) => {
        const y0 = 6 + k * rowH + rowH / 2;
        const s = sineSamples(r.amp, r.f, seconds, 96);
        const d = s.map((v, i) => `${i === 0 ? 'M' : 'L'}${r3(x0 + (i / 96) * w)} ${r3(y0 - v * 6)}`).join(' ');
        return (
          <g key={r.label}>
            <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUTED} strokeWidth={0.3} strokeDasharray="1.4 1.2" />
            <path d={d} fill="none" stroke={r.color ?? [GREEN, AMBER, ROSE, BLUE][k % 4]} strokeWidth={1.1} />
            <T x={x0} y={r3(y0 - rowH / 2 + 4.4)} size={3.8} anchor="start" fill={r.color ?? [GREEN, AMBER, ROSE, BLUE][k % 4]}>{r.label}</T>
          </g>
        );
      })}
    </Panel>
  );
};
