import { r3 } from '../round';
import { breakEvenUnits, sales, STALL, SWOT_MEANING, totalCost } from './ems9-plan';
import type { Swot } from './ems9-plan';

/**
 * Pictures for the Grade 9 EMS plan lessons: the break-even chart of the candle stall and the SWOT grid. A dark panel, a 120-unit-wide viewBox; every
 * position comes from ems9-plan.ts (units, rands), so a picture always matches its worked example. Each has an `aria` description.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const BLUE = '#818cf8';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const T = ({ x, y, children, size = 5, fill = LINE, anchor = 'middle', weight = 800 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
    {children}
  </text>
);

/** Sales and total cost against the number of candles; they cross at the break-even point. */
export const BreakEvenChart = ({ aria }: { aria: string }) => {
  const maxUnits = 250;
  const maxRand = 7500;
  const x0 = 22;
  const y0 = 64;
  const w = 90;
  const h = 52;
  const px = (u: number) => r3(x0 + (u / maxUnits) * w);
  const py = (r: number) => r3(y0 - (r / maxRand) * h);
  const be = breakEvenUnits(STALL, STALL.price);
  return (
    <Panel h={84} aria={aria}>
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUTED} strokeWidth={0.7} />
      <line x1={x0} y1={y0} x2={x0} y2={y0 - h} stroke={MUTED} strokeWidth={0.7} />
      <line x1={x0} y1={py(STALL.fixed)} x2={px(maxUnits)} y2={py(STALL.fixed)} stroke={BLUE} strokeWidth={0.8} strokeDasharray="2 1.6" />
      <line x1={px(0)} y1={py(totalCost(STALL, 0))} x2={px(maxUnits)} y2={py(totalCost(STALL, maxUnits))} stroke={ROSE} strokeWidth={1.2} />
      <line x1={px(0)} y1={py(0)} x2={px(maxUnits)} y2={py(sales(STALL.price, maxUnits))} stroke={GREEN} strokeWidth={1.2} />
      <circle cx={px(be)} cy={py(sales(STALL.price, be))} r={2.2} fill={AMBER} />
      <line x1={px(be)} y1={py(sales(STALL.price, be))} x2={px(be)} y2={y0} stroke={AMBER} strokeWidth={0.6} strokeDasharray="1.5 1.2" />
      <T x={px(be)} y={y0 + 6} size={4.6} fill={AMBER}>{be} candles</T>
      <T x={x0 - 2} y={py(STALL.fixed) + 1.6} anchor="end" size={4} fill={BLUE}>R1 800</T>
      <T x={x0 + w} y={py(sales(STALL.price, maxUnits)) - 2} anchor="end" size={4.2} fill={GREEN}>sales</T>
      <T x={x0 + w} y={py(totalCost(STALL, maxUnits)) + 10} anchor="end" size={4.2} fill={ROSE}>total costs</T>
      <T x={60} y={80} size={4.4} fill={MUTED}>number of candles sold</T>
      <T x={4} y={9} anchor="start" size={4.6} fill={AMBER}>break-even: sales = total costs</T>
    </Panel>
  );
};

const TONE: Record<Swot, string> = { Strength: GREEN, Weakness: ROSE, Opportunity: BLUE, Threat: AMBER };

/** The four SWOT boxes: inside the business on the top row, outside on the bottom; helpful on the left, harmful on the right. */
export const SwotGrid = ({ aria }: { aria: string }) => {
  const cells: { s: Swot; x: number; y: number }[] = [
    { s: 'Strength', x: 6, y: 14 },
    { s: 'Weakness', x: 62, y: 14 },
    { s: 'Opportunity', x: 6, y: 42 },
    { s: 'Threat', x: 62, y: 42 },
  ];
  return (
    <Panel h={72} aria={aria}>
      <T x={34} y={9} size={4.4} fill={MUTED}>helpful</T>
      <T x={90} y={9} size={4.4} fill={MUTED}>harmful</T>
      {cells.map((c) => (
        <g key={c.s}>
          <rect x={c.x} y={c.y} width={52} height={24} rx={3} fill={TONE[c.s]} fillOpacity={0.16} stroke={TONE[c.s]} strokeWidth={0.8} />
          <T x={c.x + 26} y={c.y + 10} size={6} fill={TONE[c.s]}>{c.s}</T>
          <T x={c.x + 26} y={c.y + 18} size={3.6} fill={LINE} weight={600}>{SWOT_MEANING[c.s].replace(' and ', ', ')}</T>
        </g>
      ))}
      <T x={60} y={70} size={3.8} fill={MUTED} weight={600}>top row inside the business, bottom row outside it</T>
    </Panel>
  );
};
