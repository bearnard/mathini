import { r3 } from '../round';
import { tuSchedule, type Population } from './econ11Helpers';

/** Pictures for the Grade 11 Economics gap lessons. Every number comes from econ11Helpers.ts. */

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
const n = (x: number) => String(x).replace('.', ',');

/** The population split into children, the working-age people (employed, unemployed, not economically active) and the elderly. */
export const PopulationSplit = ({ p, notActive }: { p: Population; notActive: number }) => {
  const tot = p.children + p.workingAge + p.elderly;
  const k = 108 / tot;
  const parts: [string, number, string][] = [['0-14', p.children, SKY], ['employed', p.employed, GREEN], ['unemployed', p.unemployed, ROSE], ['not active', notActive, MUTED], ['65+', p.elderly, AMBER]];
  let x = 6;
  return (
    <Panel h={56} aria={`A town of ${tot} thousand people. Children aged 0 to 14: ${p.children} thousand. Working-age people, 15 to 64: ${p.workingAge} thousand, of whom ${p.employed} thousand are employed, ${p.unemployed} thousand are unemployed and ${notActive} thousand are not economically active. People aged 65 and over: ${p.elderly} thousand.`}>
      <T x={60} y={8} size={4.2} fill={AMBER}>{`a town of ${tot} thousand people`}</T>
      {parts.map(([label, v, col], i) => {
        const w = v * k;
        const x0 = x;
        x += w;
        return (
          <g key={label}>
            <rect x={x0} y={14} width={w} height={14} fill={col} fillOpacity={0.85} stroke={INK} strokeWidth={0.4} />
            <T x={x0 + w / 2} y={23} size={3.4} fill={INK}>{String(v)}</T>
            <T x={x0 + w / 2} y={34 + (i % 2) * 5} size={3} fill={col}>{label}</T>
          </g>
        );
      })}
      <T x={60} y={50} size={3.4} fill={MUTED} weight={600}>working age = employed + unemployed + not active</T>
    </Panel>
  );
};

/** Total utility and marginal utility of each unit. */
export const UtilityBars = ({ mu }: { mu: readonly number[] }) => {
  const tu = tuSchedule(mu);
  const max = Math.max(...tu);
  const w = 100 / mu.length;
  return (
    <Panel h={74} aria={`Utility from eating slices of pizza. The marginal utility falls with each slice: ${mu.join(', ')}. The total utility rises more and more slowly: ${tu.join(', ')}, and stops rising when the marginal utility reaches zero.`}>
      <T x={60} y={8} size={4.2} fill={AMBER}>marginal utility (MU) and total utility (TU)</T>
      {mu.map((m, i) => {
        const x0 = 10 + i * w;
        const hTu = (Math.max(tu[i], 0) / max) * 26;
        const hMu = (Math.abs(m) / max) * 26;
        return (
          <g key={i}>
            <rect x={x0 + 1} y={r3(40 - hTu)} width={w / 2 - 1.4} height={hTu} fill={GREEN} fillOpacity={0.85} />
            <rect x={x0 + w / 2} y={m >= 0 ? r3(40 - hMu) : 40} width={w / 2 - 1.4} height={hMu} fill={m >= 0 ? BLUE : ROSE} fillOpacity={0.85} />
            <T x={x0 + w / 2} y={48} size={3.2} fill={MUTED}>{String(i + 1)}</T>
            <T x={x0 + w / 4} y={r3(38.5 - hTu)} size={2.8} fill={GREEN} weight={600}>{String(tu[i])}</T>
            <T x={x0 + w * 0.75} y={m >= 0 ? r3(38.5 - hMu) : r3(44 + hMu)} size={2.8} fill={m >= 0 ? BLUE : ROSE} weight={600}>{String(m)}</T>
          </g>
        );
      })}
      <T x={60} y={55} size={3.4} fill={MUTED} weight={600}>slice number</T>
      <rect x={30} y={62} width={3} height={3} fill={GREEN} />
      <T x={35} y={64.8} size={3} anchor="start" fill={GREEN}>TU</T>
      <rect x={60} y={62} width={3} height={3} fill={BLUE} />
      <T x={65} y={64.8} size={3} anchor="start" fill={BLUE}>MU</T>
      <T x={60} y={71.5} size={3} fill={MUTED} weight={600}>TU stops rising where MU = 0</T>
    </Panel>
  );
};

/** GDP in two years, with the growth rate. */
export const GrowthBars = ({ before, after, rate, unit = 'R billion' }: { before: number; after: number; rate: number; unit?: string }) => {
  const max = Math.max(before, after);
  const h = (v: number) => (v / max) * 30;
  return (
    <Panel h={58} aria={`GDP was ${before} ${unit} in year 1 and ${after} ${unit} in year 2. The growth rate is ${n(rate)} percent.`}>
      <T x={60} y={8} size={4.2} fill={AMBER}>{`growth rate = ${n(rate)}%`}</T>
      <rect x={26} y={r3(42 - h(before))} width={26} height={h(before)} fill={BLUE} fillOpacity={0.85} />
      <rect x={68} y={r3(42 - h(after))} width={26} height={h(after)} fill={after >= before ? GREEN : ROSE} fillOpacity={0.85} />
      <T x={39} y={r3(40 - h(before))} size={3.8}>{String(before)}</T>
      <T x={81} y={r3(40 - h(after))} size={3.8}>{String(after)}</T>
      <T x={39} y={48} size={3.4} fill={MUTED}>year 1</T>
      <T x={81} y={48} size={3.4} fill={MUTED}>year 2</T>
      <T x={60} y={55} size={3.4} fill={MUTED} weight={600}>(after − before) ÷ before × 100</T>
    </Panel>
  );
};
