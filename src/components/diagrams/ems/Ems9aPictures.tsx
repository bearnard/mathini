import { r3 } from '../round';
import { rand } from '../accounting/rand';
import { totalCost } from './ems9a-helpers';
import type { AccountBalance, TrialBalanceRow } from './ems9a-helpers';

/**
 * Pictures for the first Grade 9 EMS lessons: a dark panel, a 120-unit-wide viewBox, a few named
 * parts. Positions and amounts come from the numbers passed in (ems9a-helpers.ts), so a picture
 * always matches its worked example. Each has an aria description.
 */

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
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
    {children}
  </text>
);

// ---------- three kinds of economy ----------

export const SYSTEMS = [
  { name: 'Planned', who: ['government', 'decides'], color: ROSE },
  { name: 'Market', who: ['buyers and', 'sellers', 'decide'], color: GREEN },
  { name: 'Mixed', who: ['both play', 'a part'], color: BLUE },
] as const;

export const SystemsRow = () => (
  <Panel h={50} aria="Three kinds of economy. In a planned economy the government decides what is made and what it costs. In a market economy buyers and sellers decide through supply and demand. In a mixed economy both play a part.">
    {SYSTEMS.map((s, i) => {
      const x = 4 + i * 39;
      return (
        <g key={s.name}>
          <rect x={x} y={5} width={37} height={40} rx={4} fill={s.color} fillOpacity={0.18} stroke={s.color} strokeWidth={0.9} />
          <T x={x + 18.5} y={15} size={6} fill={s.color}>{s.name}</T>
          {s.who.map((line, j) => (
            <T key={line} x={x + 18.5} y={24 + j * 6} size={4.8} weight={600}>{line}</T>
          ))}
        </g>
      );
    })}
  </Panel>
);

// ---------- circular flow ----------

export interface Flow {
  /** Money earned by households from firms (wages). */
  income: number;
  tax: number;
  saved: number;
  spent: number;
}

export const CircularFlow = ({ income, tax, saved, spent, aria }: Flow & { aria: string }) => {
  const box = (x: number, y: number, w: number, lines: readonly string[], color: string) => (
    <g>
      <rect x={x} y={y} width={w} height={20} rx={4} fill={color} fillOpacity={0.2} stroke={color} strokeWidth={0.9} />
      {lines.map((l, i) => (
        <T key={l} x={x + w / 2} y={y + (lines.length === 1 ? 12.5 : 9 + i * 6)} size={5.2} fill={color}>{l}</T>
      ))}
    </g>
  );
  return (
    <Panel h={92} aria={aria}>
      <defs>
        <marker id="cf-a" viewBox="0 0 6 6" refX={5} refY={3} markerWidth={4} markerHeight={4} orient="auto">
          <path d="M0 0 L6 3 L0 6 z" fill={LINE} />
        </marker>
      </defs>
      {box(3, 36, 36, ['Households'], BLUE)}
      {box(81, 36, 36, ['Businesses'], GREEN)}
      {box(42, 3, 36, ['Government'], AMBER)}
      {box(42, 69, 36, ['Financial', 'sector'], ROSE)}
      <path d="M40 42 L80 42" stroke={LINE} strokeWidth={0.9} markerEnd="url(#cf-a)" />
      <T x={60} y={39.5} size={4.6}>{rand(spent)}</T>
      <path d="M80 52 L40 52" stroke={LINE} strokeWidth={0.9} markerEnd="url(#cf-a)" />
      <T x={60} y={58.5} size={4.6}>{rand(income)}</T>
      <path d="M21 36 L42 17" stroke={LINE} strokeWidth={0.9} markerEnd="url(#cf-a)" />
      <T x={22} y={22} size={4.6}>{rand(tax)}</T>
      <path d="M21 56 L42 75" stroke={LINE} strokeWidth={0.9} markerEnd="url(#cf-a)" />
      <T x={22} y={73} size={4.6}>{rand(saved)}</T>
    </Panel>
  );
};

// ---------- a transaction: one debit, one credit ----------

export const DebitCredit = ({ debit, credit, amount, aria }: { debit: string; credit: string; amount: number; aria: string }) => (
  <Panel h={40} aria={aria}>
    <rect x={4} y={6} width={52} height={28} rx={4} fill={BLUE} fillOpacity={0.2} stroke={BLUE} strokeWidth={0.9} />
    <T x={30} y={15} size={4.6} fill={BLUE}>Debit</T>
    <T x={30} y={23} size={5.6}>{debit}</T>
    <T x={30} y={30} size={4.6} weight={600}>{rand(amount)}</T>
    <rect x={64} y={6} width={52} height={28} rx={4} fill={GREEN} fillOpacity={0.2} stroke={GREEN} strokeWidth={0.9} />
    <T x={90} y={15} size={4.6} fill={GREEN}>Credit</T>
    <T x={90} y={23} size={5.6}>{credit}</T>
    <T x={90} y={30} size={4.6} weight={600}>{rand(amount)}</T>
  </Panel>
);

// ---------- a ledger T-account with both sides ----------

export const TAccount = ({ account, aria }: { account: AccountBalance; aria: string }) => {
  const rows = Math.max(account.debits.length, account.credits.length);
  const top = 21;
  const rowH = 7;
  const totalY = top + rows * rowH + 3;
  const h = totalY + 22;
  return (
    <Panel h={h} aria={aria}>
      <T x={60} y={9} size={6} fill={AMBER}>{account.name}</T>
      <line x1={10} y1={13} x2={110} y2={13} stroke={LINE} strokeWidth={0.8} />
      <line x1={60} y1={13} x2={60} y2={totalY + 8} stroke={LINE} strokeWidth={0.8} />
      <T x={35} y={19.5} size={4.6} fill={BLUE}>Debit</T>
      <T x={85} y={19.5} size={4.6} fill={GREEN}>Credit</T>
      {account.debits.map((d, i) => (
        <T key={`d${i}`} x={35} y={top + 6 + i * rowH} size={4.8} fill={BLUE}>{rand(d)}</T>
      ))}
      {account.credits.map((c, i) => (
        <T key={`c${i}`} x={85} y={top + 6 + i * rowH} size={4.8} fill={GREEN}>{rand(c)}</T>
      ))}
      <line x1={18} y1={totalY} x2={52} y2={totalY} stroke={MUTED} strokeWidth={0.6} />
      <line x1={68} y1={totalY} x2={102} y2={totalY} stroke={MUTED} strokeWidth={0.6} />
      <T x={35} y={totalY + 6} size={4.8}>{rand(account.totalDebit)}</T>
      <T x={85} y={totalY + 6} size={4.8}>{rand(account.totalCredit)}</T>
      <T x={60} y={totalY + 16} size={5} fill={AMBER}>
        Balance {rand(account.balance)} {account.side}
      </T>
    </Panel>
  );
};

// ---------- trial balance (real table text) ----------

export const TrialBalanceTable = ({ rows, totalDebit, totalCredit, aria }: { rows: readonly TrialBalanceRow[]; totalDebit: number; totalCredit: number; aria: string }) => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl text-left" style={{ background: INK }}>
    <table aria-label={aria} className="w-full border-collapse text-[13px] text-slate-100">
      <caption className="px-3 pt-2.5 text-left text-sm font-extrabold text-amber-300">Trial balance</caption>
      <thead>
        <tr className="text-xs uppercase tracking-wide text-slate-400">
          <th scope="col" className="px-3 py-1.5 text-left font-bold">Account</th>
          <th scope="col" className="px-3 py-1.5 text-right font-bold">Debit</th>
          <th scope="col" className="px-3 py-1.5 text-right font-bold">Credit</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name} className="border-t border-slate-700">
            <td className="px-3 py-1.5">{r.name}</td>
            <td className="whitespace-nowrap px-3 py-1.5 text-right font-semibold">{r.debit === null ? '' : rand(r.debit)}</td>
            <td className="whitespace-nowrap px-3 py-1.5 text-right font-semibold">{r.credit === null ? '' : rand(r.credit)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="border-t-2 border-slate-400 font-extrabold text-emerald-300">
          <td className="px-3 py-1.5">Totals</td>
          <td className="whitespace-nowrap px-3 py-1.5 text-right">{rand(totalDebit)}</td>
          <td className="whitespace-nowrap px-3 py-1.5 text-right">{rand(totalCredit)}</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

// ---------- fixed, variable and total cost ----------

export const CostLines = ({ fixed, perUnit, maxUnits, aria }: { fixed: number; perUnit: number; maxUnits: number; aria: string }) => {
  const X0 = 22;
  const X1 = 108;
  const Y0 = 14;
  const Y1 = 60;
  const top = totalCost(fixed, perUnit, maxUnits).total;
  const px = (u: number) => r3(X0 + (u / maxUnits) * (X1 - X0 - 4));
  const py = (v: number) => r3(Y1 - (v / top) * (Y1 - Y0));
  const pts = (f: (u: number) => number) => [0, maxUnits].map((u) => `${px(u)},${py(f(u))}`).join(' ');
  return (
    <Panel h={78} aria={aria}>
      <line x1={X0} y1={Y0 - 4} x2={X0} y2={Y1} stroke={MUTED} strokeWidth={0.8} />
      <line x1={X0} y1={Y1} x2={X1} y2={Y1} stroke={MUTED} strokeWidth={0.8} />
      <T x={4} y={8} anchor="start" size={4.6} fill={AMBER}>Cost in rand</T>
      <T x={X1} y={Y1 + 9} anchor="end" size={4.6} fill={AMBER}>Units made</T>
      <polyline points={pts((u) => totalCost(fixed, perUnit, u).fixed)} fill="none" stroke={BLUE} strokeWidth={1.6} strokeLinecap="round" />
      <T x={px(maxUnits) - 1} y={py(fixed) + 7} anchor="end" size={4.6} fill={BLUE}>Fixed</T>
      <polyline points={pts((u) => totalCost(fixed, perUnit, u).variable)} fill="none" stroke={ROSE} strokeWidth={1.6} strokeLinecap="round" />
      <T x={px(maxUnits * 0.5)} y={py(totalCost(fixed, perUnit, maxUnits * 0.5).variable) + 8} anchor="start" size={4.6} fill={ROSE}>Variable</T>
      <polyline points={pts((u) => totalCost(fixed, perUnit, u).total)} fill="none" stroke={GREEN} strokeWidth={1.6} strokeLinecap="round" />
      <T x={px(maxUnits) - 2} y={py(top) - 2.5} anchor="end" size={4.6} fill={GREEN}>Total</T>
    </Panel>
  );
};

// ---------- budget against actual (real table text) ----------

export const VarianceTable = ({ rows, aria }: { rows: readonly { item: string; budget: number; actual: number; diff: number; kind: string }[]; aria: string }) => (
  <div className="mx-auto w-full max-w-md overflow-x-auto rounded-2xl text-left" style={{ background: INK }}>
    <table aria-label={aria} className="w-full border-collapse text-[12px] text-slate-100">
      <caption className="px-2.5 pt-2.5 text-left text-sm font-extrabold text-amber-300">Budget against actual</caption>
      <thead>
        <tr className="text-[10px] uppercase tracking-wide text-slate-400">
          <th scope="col" className="px-2.5 py-1.5 text-left font-bold">Item</th>
          <th scope="col" className="px-1.5 py-1.5 text-right font-bold">Budget</th>
          <th scope="col" className="px-1.5 py-1.5 text-right font-bold">Actual</th>
          <th scope="col" className="px-2.5 py-1.5 text-right font-bold">Variance</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.item} className="border-t border-slate-700">
            <td className="px-2.5 py-1.5">{r.item}</td>
            <td className="whitespace-nowrap px-1.5 py-1.5 text-right">{rand(r.budget)}</td>
            <td className="whitespace-nowrap px-1.5 py-1.5 text-right">{rand(r.actual)}</td>
            <td className={`whitespace-nowrap px-2.5 py-1.5 text-right font-semibold ${r.diff > 0 ? 'text-rose-300' : r.diff < 0 ? 'text-emerald-300' : ''}`}>
              {r.diff > 0 ? '+' : r.diff < 0 ? '-' : ''}
              {rand(Math.abs(r.diff))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
