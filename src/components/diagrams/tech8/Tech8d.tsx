import { r3 } from '../round';
import { GRID_STAGES, parallelVolts, seriesVolts, truthTable, wiringFor } from './tech8dHelpers';

/** Pictures for the Grade 8 Technology Term 4 lessons. Values come from tech8dHelpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
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

/** Three identical 1,5 V cells joined in series or in parallel, with the voltage they give. */
export const CellsLayout = ({ kind, cells }: { kind: 'series' | 'parallel'; cells: number }) => {
  const volts = kind === 'series' ? seriesVolts(cells) : parallelVolts(cells);
  return (
    <Panel h={kind === 'series' ? 40 : 18 + cells * 12} aria={`${cells} cells of 1,5 volt connected in ${kind}. The voltage is ${n(volts)} volt. ${kind === 'series' ? 'Cells in series add their voltages, so the voltage is higher.' : 'Cells in parallel keep the voltage of one cell but the battery lasts longer.'}`}>
      <T x={60} y={8} size={4.2} fill={kind === 'series' ? AMBER : GREEN}>{`${kind}: ${n(volts)} V`}</T>
      {Array.from({ length: cells }, (_, i) =>
        kind === 'series' ? (
          <g key={i}>
            <rect x={r3(10 + i * (100 / cells))} y={14} width={r3(100 / cells - 4)} height={12} rx={2} fill={AMBER} fillOpacity={0.2} stroke={AMBER} strokeWidth={0.6} />
            <T x={r3(10 + i * (100 / cells) + (100 / cells - 4) / 2)} y={22} size={3.8}>1,5 V</T>
          </g>
        ) : (
          <g key={i}>
            <rect x={30} y={r3(14 + i * 12)} width={60} height={9} rx={2} fill={GREEN} fillOpacity={0.2} stroke={GREEN} strokeWidth={0.6} />
            <T x={60} y={r3(20.4 + i * 12)} size={3.8}>1,5 V</T>
          </g>
        ),
      )}
      <T x={60} y={kind === 'series' ? 36 : 14 + cells * 12 + 3} size={3.6} fill={MUTED} weight={600}>{kind === 'series' ? 'voltages add up' : 'same voltage, lasts longer'}</T>
    </Panel>
  );
};

/** The national grid from the power station to the homes. */
export const GridDiagram = () => (
  <Panel h={52} aria="The national grid. A power station generates alternating current. A step-up transformer raises the voltage. Transmission lines carry the electricity across the country. A step-down transformer lowers the voltage. The electricity then reaches homes and industry.">
    {GRID_STAGES.map((s, i) => (
      <g key={s}>
        <rect x={r3(2 + i * 23.6)} y={12} width={20.8} height={20} rx={2} fill={[AMBER, SKY, MUTED, SKY, GREEN][i]} fillOpacity={0.2} stroke={[AMBER, SKY, MUTED, SKY, GREEN][i]} strokeWidth={0.6} />
        {s.split(' ').map((w, k) => <T key={k} x={r3(12.4 + i * 23.6)} y={r3(19 + k * 5)} size={3.1} weight={700}>{w}</T>)}
        {i < 4 ? <path d={`M${r3(22.8 + i * 23.6)} 22 h2.6 m-1.4 -1.2 l1.4 1.2 l-1.4 1.2`} fill="none" stroke={LINE} strokeWidth={0.6} /> : null}
      </g>
    ))}
    <T x={60} y={8} size={4} fill={AMBER}>alternating current (AC)</T>
    <T x={60} y={44} size={3.6} fill={MUTED} weight={600}>step-up: for transmission; step-down: for safe use</T>
  </Panel>
);

/** Truth table of a logic gate with the way the switches are wired. */
export const GatePanel = ({ gate }: { gate: 'AND' | 'OR' }) => {
  const rows = truthTable(gate);
  const wiring = wiringFor(gate);
  return (
    <Panel h={58} aria={`The ${gate} gate. Two switches wired in ${wiring} make an ${gate} condition. Truth table: ${rows.map((r) => `A is ${r.a}, B is ${r.b}, output ${r.out}`).join('; ')}.`}>
      <T x={30} y={8} size={4.2} fill={gate === 'AND' ? AMBER : GREEN}>{`${gate} gate`}</T>
      <T x={14} y={16} size={3.6} fill={MUTED}>A</T>
      <T x={26} y={16} size={3.6} fill={MUTED}>B</T>
      <T x={42} y={16} size={3.6} fill={MUTED}>out</T>
      {rows.map((r, i) => (
        <g key={i}>
          <T x={14} y={r3(23 + i * 7)} size={3.8}>{String(r.a)}</T>
          <T x={26} y={r3(23 + i * 7)} size={3.8}>{String(r.b)}</T>
          <T x={42} y={r3(23 + i * 7)} size={3.8} fill={r.out ? GREEN : ROSE}>{String(r.out)}</T>
        </g>
      ))}
      {wiring === 'series' ? (
        <g>
          <path d="M70 26 H78 M90 26 H98 M110 26 H114" stroke={SKY} strokeWidth={0.8} fill="none" />
          <rect x={78} y={22} width={12} height={8} rx={1} fill="none" stroke={AMBER} strokeWidth={0.8} />
          <rect x={98} y={22} width={12} height={8} rx={1} fill="none" stroke={AMBER} strokeWidth={0.8} />
          <T x={84} y={27.2} size={3.4}>A</T>
          <T x={104} y={27.2} size={3.4}>B</T>
          <T x={92} y={42} size={3.6} fill={AMBER}>series: both must be closed</T>
        </g>
      ) : (
        <g>
          <path d="M70 26 H76 M76 20 V36 M114 20 V36 M114 28 H118 M76 20 H84 M96 20 H114 M76 36 H84 M96 36 H114" stroke={SKY} strokeWidth={0.8} fill="none" />
          <rect x={84} y={16.5} width={12} height={7} rx={1} fill="none" stroke={GREEN} strokeWidth={0.8} />
          <rect x={84} y={32.5} width={12} height={7} rx={1} fill="none" stroke={GREEN} strokeWidth={0.8} />
          <T x={90} y={21.8} size={3.2}>A</T>
          <T x={90} y={37.8} size={3.2}>B</T>
          <T x={92} y={50} size={3.6} fill={GREEN}>parallel: either one closed</T>
        </g>
      )}
      <T x={30} y={54} size={3.4} fill={MUTED} weight={600}>1 = switch closed / output on</T>
    </Panel>
  );
};
