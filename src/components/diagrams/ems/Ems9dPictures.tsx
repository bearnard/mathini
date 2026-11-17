import { r3 } from '../round';
import { equilibrium, qtyDemanded, qtySupplied, shiftDemand, shiftSupply, type Market, type MarketRow } from './ems9d-helpers';

/** Pictures for the Grade 9 EMS price theory, sectors and trade union lessons: the same dark-panel style as EmsPictures.tsx. Every position comes from ems9d-helpers.ts. */
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
const T = ({ x, y, children, size = 5, fill = LINE, anchor = 'middle', weight = 800 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);

/** Demand and supply lines (price on the up axis, quantity across), the equilibrium point, and optionally a second curve after a shift (at most 6 labels). */
export const SupplyDemandChart = ({ market, prices, show = 'both', shifted, aria }: { market: Market; prices: readonly number[]; show?: 'demand' | 'supply' | 'both'; shifted?: { kind: 'demand' | 'supply'; by: number }; aria: string }) => {
  const minP = Math.min(...prices);
  const maxP = Math.max(...prices);
  const maxQ = Math.max(...prices.flatMap((p) => [qtyDemanded(market, p), qtySupplied(market, p)])) * 1.05;
  const X0 = 20, X1 = 112, Y0 = 14, Y1 = 62;
  const px = (q: number) => r3(X0 + (q / maxQ) * (X1 - X0 - 4));
  const py = (p: number) => r3(Y1 - ((p - minP) / (maxP - minP)) * (Y1 - Y0 - 4));
  const line = (f: (p: number) => number) => prices.map((p) => `${px(f(p))},${py(p)}`).join(' ');
  const eq = equilibrium(market);
  const next = shifted ? (shifted.kind === 'demand' ? shiftDemand(market, shifted.by) : shiftSupply(market, shifted.by)) : null;
  const eq2 = next ? equilibrium(next) : null;
  return (
    <Panel h={84} aria={aria}>
      <line x1={X0} y1={Y0} x2={X0} y2={Y1} stroke={MUTED} strokeWidth={0.8} />
      <line x1={X0} y1={Y1} x2={X1} y2={Y1} stroke={MUTED} strokeWidth={0.8} />
      <T x={X0 - 8} y={8} anchor="start" size={4.8} fill={AMBER}>Price</T>
      <T x={X1} y={Y1 + 11} anchor="end" size={4.8} fill={AMBER}>Quantity</T>
      {show !== 'supply' ? <polyline points={line((p) => qtyDemanded(market, p))} fill="none" stroke={GREEN} strokeWidth={1.6} strokeLinecap="round" /> : null}
      {show !== 'demand' ? <polyline points={line((p) => qtySupplied(market, p))} fill="none" stroke={BLUE} strokeWidth={1.6} strokeLinecap="round" /> : null}
      {next && shifted?.kind === 'demand' ? <polyline points={line((p) => qtyDemanded(next, p))} fill="none" stroke={GREEN} strokeWidth={1.4} strokeDasharray="3 2" /> : null}
      {next && shifted?.kind === 'supply' ? <polyline points={line((p) => qtySupplied(next, p))} fill="none" stroke={BLUE} strokeWidth={1.4} strokeDasharray="3 2" /> : null}
      {show !== 'supply' ? <T x={px(qtyDemanded(market, prices[prices.length - 1])) + 3} y={py(prices[prices.length - 1]) + 1} anchor="start" size={4.6} fill={GREEN}>Demand</T> : null}
      {show !== 'demand' ? <T x={px(qtySupplied(market, prices[prices.length - 1])) - 3} y={py(prices[prices.length - 1]) + 1} anchor="end" size={4.6} fill={BLUE}>Supply</T> : null}
      {show === 'both' ? (
        <g>
          <circle cx={px(eq.qty)} cy={py(eq.price)} r={2.4} fill={ROSE} />
          <T x={px(eq.qty)} y={Y1 + 11} size={4.4} fill={ROSE}>{`R${eq.price}, ${eq.qty}`}</T>
        </g>
      ) : null}
      {eq2 ? <circle cx={px(eq2.qty)} cy={py(eq2.price)} r={2.4} fill={AMBER} /> : null}
    </Panel>
  );
};

/** The schedule as a real table: price, quantity demanded, quantity supplied and the result. */
export const MarketTable = ({ rows, aria }: { rows: readonly MarketRow[]; aria: string }) => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl text-left" style={{ background: INK }}>
    <table aria-label={aria} className="w-full border-collapse text-[12px] text-slate-100">
      <thead>
        <tr className="text-[11px] uppercase tracking-wide text-slate-400">
          <th scope="col" className="px-2 py-1.5 text-left font-bold">Price</th>
          <th scope="col" className="px-1.5 py-1.5 text-right font-bold">Wanted</th>
          <th scope="col" className="px-1.5 py-1.5 text-right font-bold">Supplied</th>
          <th scope="col" className="px-1.5 py-1.5 text-right font-bold">Result</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.price} className="border-t border-slate-700">
            <td className="whitespace-nowrap px-2 py-1.5">R{r.price}</td>
            <td className="px-2 py-1.5 text-right font-semibold">{r.demanded}</td>
            <td className="px-2 py-1.5 text-right font-semibold">{r.supplied}</td>
            <td className={`px-2 py-1.5 text-right font-semibold ${r.result === 'equilibrium' ? 'text-emerald-300' : r.result === 'shortage' ? 'text-rose-300' : 'text-amber-300'}`}>{r.result === 'equilibrium' ? 'balance' : r.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** Boxes joined by arrows, left to right or in two rows (at most 4 steps, so at most 4 labels), used for the sector chain and for the steps of a dispute. */
export const StepFlow = ({ steps, notes, aria }: { steps: readonly string[]; notes?: readonly string[]; aria: string }) => {
  const n = steps.length;
  const w = (116 - (n - 1) * 6) / n;
  return (
    <Panel h={notes ? 46 : 34} aria={aria}>
      {steps.map((s, i) => {
        const x = 2 + i * (w + 6);
        return (
          <g key={s}>
            <rect x={x} y={6} width={w} height={20} rx={3} fill={[GREEN, BLUE, AMBER, ROSE][i % 4]} fillOpacity={0.2} stroke={[GREEN, BLUE, AMBER, ROSE][i % 4]} strokeWidth={0.8} />
            <T x={x + w / 2} y={18} size={n > 3 ? 4.2 : 4.8}>{s}</T>
            {notes ? <T x={x + w / 2} y={36} size={4} fill={MUTED} weight={600}>{notes[i]}</T> : null}
            {i < n - 1 ? <path d={`M ${x + w + 0.8} 16 L ${x + w + 5.2} 16 M ${x + w + 3.6} 14 L ${x + w + 5.2} 16 L ${x + w + 3.6} 18`} stroke={LINE} strokeWidth={0.8} fill="none" /> : null}
          </g>
        );
      })}
    </Panel>
  );
};
