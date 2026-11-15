import { r3 } from '../round';
import { rand } from '../accounting/rand';
import { demandSchedule } from './emsHelpers';

/**
 * Pictures for the Grade 8-9 EMS lessons, in the style of the Grade 7 Maths pictures: a dark
 * panel, a 120-unit-wide viewBox, and a few named parts (never more than six words of label). Every
 * position and amount is computed from the numbers passed in (emsHelpers.ts), so a picture always
 * matches its worked example. Each picture has an `aria` description.
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

// ---------- the three spheres of government ----------

export const SPHERES = [
  { name: 'National', what: 'defence, police, tax collection', color: BLUE },
  { name: 'Provincial', what: 'public schools and hospitals', color: GREEN },
  { name: 'Local', what: 'water, roads, electricity, refuse', color: AMBER },
] as const;

export const SpheresOfGovernment = () => (
  <Panel h={84} aria="Three levels of government stacked from the top: national government (defence, police, tax collection), provincial government (public schools and hospitals) and local government, the municipality (water, roads, electricity, refuse removal).">
    {SPHERES.map((s, i) => {
      const y = 6 + i * 25;
      const inset = 8 + (2 - i) * 0;
      return (
        <g key={s.name}>
          <rect x={inset} y={y} width={120 - inset * 2} height={21} rx={4} fill={s.color} fillOpacity={0.18} stroke={s.color} strokeWidth={0.8} />
          <T x={14} y={y + 9} anchor="start" size={6} fill={s.color}>{s.name}</T>
          <T x={14} y={y + 16.5} anchor="start" size={4.8} fill={LINE} weight={600}>{s.what}</T>
        </g>
      );
    })}
  </Panel>
);

// ---------- income against spending ----------

export const BudgetBars = ({ income, spending, unit = 'R', aria }: { income: number; spending: number; unit?: string; aria: string }) => {
  const max = Math.max(income, spending);
  const w = (v: number) => r3((v / max) * 70);
  const diff = Math.abs(income - spending);
  const kind = income > spending ? 'Surplus' : income < spending ? 'Deficit' : 'Balanced';
  const fmt = (v: number) => (unit === 'R' ? rand(v) : String(v));
  return (
    <Panel h={62} aria={aria}>
      <T x={8} y={11} anchor="start" size={5} fill={GREEN}>Income</T>
      <rect x={8} y={14} width={w(income)} height={10} rx={2} fill={GREEN} />
      <T x={r3(8 + w(income) + 3)} y={21.5} anchor="start" size={4.8}>{fmt(income)}</T>
      <T x={8} y={33} anchor="start" size={5} fill={ROSE}>Spending</T>
      <rect x={8} y={36} width={w(spending)} height={10} rx={2} fill={ROSE} />
      <T x={r3(8 + w(spending) + 3)} y={43.5} anchor="start" size={4.8}>{fmt(spending)}</T>
      <T x={8} y={56} anchor="start" size={5} fill={AMBER}>{diff === 0 ? kind : `${kind} of ${fmt(diff)}`}</T>
    </Panel>
  );
};

// ---------- Assets = Liabilities + Owner's equity ----------

export const EquationBalance = ({ assets, liabilities, equity, aria }: { assets: number; liabilities: number; equity: number; aria: string }) => {
  const W = 30;
  const cell = (x: number, lines: readonly string[], value: number, color: string) => (
    <g>
      <rect x={x} y={8} width={W} height={34} rx={4} fill={color} fillOpacity={0.2} stroke={color} strokeWidth={0.9} />
      {lines.map((l, i) => (
        <T key={l} x={x + W / 2} y={17 + i * 5.4} size={4.5} fill={color}>{l}</T>
      ))}
      <T x={x + W / 2} y={36} size={4.9}>{rand(value)}</T>
    </g>
  );
  return (
    <Panel h={50} aria={aria}>
      {cell(3, ['Assets'], assets, BLUE)}
      <T x={39} y={29} size={8}>=</T>
      {cell(45, ['Liabilities'], liabilities, ROSE)}
      <T x={81} y={29} size={8}>+</T>
      {cell(87, ["Owner's", 'equity'], equity, GREEN)}
    </Panel>
  );
};

// ---------- a ledger account (T-account) ----------

export const LedgerAccount = ({ name, side, entries, total, aria }: { name: string; side: 'debit' | 'credit'; entries: readonly number[]; total: number; aria: string }) => {
  const rowH = 7;
  const top = 22;
  const h = top + entries.length * rowH + 16;
  const colX = side === 'debit' ? 34 : 86;
  const color = side === 'debit' ? BLUE : GREEN;
  return (
    <Panel h={h} aria={aria}>
      <T x={60} y={9} size={6} fill={AMBER}>{name}</T>
      <line x1={14} y1={13} x2={106} y2={13} stroke={LINE} strokeWidth={0.8} />
      <line x1={60} y1={13} x2={60} y2={h - 6} stroke={LINE} strokeWidth={0.8} />
      <T x={34} y={20} size={4.8} fill={side === 'debit' ? BLUE : MUTED}>Debit</T>
      <T x={86} y={20} size={4.8} fill={side === 'credit' ? GREEN : MUTED}>Credit</T>
      {entries.map((e, i) => (
        <T key={i} x={colX} y={top + 6 + i * rowH} size={5} fill={color}>{rand(e)}</T>
      ))}
      <line x1={colX - 17} y1={top + entries.length * rowH + 3} x2={colX + 17} y2={top + entries.length * rowH + 3} stroke={MUTED} strokeWidth={0.6} />
      <T x={colX} y={top + entries.length * rowH + 10} size={5.4}>{rand(total)}</T>
    </Panel>
  );
};

// ---------- a journal as a table (real text, wraps on a phone) ----------

export const JournalTable = ({ title, columns, rows, total, aria }: { title: string; columns: readonly string[]; rows: readonly (readonly (string | number)[])[]; total: { label: string; amount: number }; aria: string }) => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl text-left" style={{ background: INK }}>
    <table aria-label={aria} className="w-full border-collapse text-[13px] text-slate-100">
      <caption className="px-3 pt-2.5 text-left text-sm font-extrabold text-amber-300">{title}</caption>
      <thead>
        <tr className="text-xs uppercase tracking-wide text-slate-400">
          {columns.map((c, i) => (
            <th key={c} scope="col" className={`px-3 py-1.5 font-bold ${i === columns.length - 1 ? 'text-right' : 'text-left'}`}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri} className="border-t border-slate-700">
            {r.map((cell, ci) => (
              <td key={ci} className={`px-3 py-1.5 ${ci === 0 ? 'whitespace-nowrap' : ''} ${ci === r.length - 1 ? 'text-right font-semibold' : ''}`}>
                {typeof cell === 'number' ? rand(cell) : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="border-t-2 border-slate-400 font-extrabold">
          <td className="px-3 py-1.5 text-emerald-300" colSpan={columns.length - 1}>{total.label}</td>
          <td className="px-3 py-1.5 text-right text-emerald-300">{rand(total.amount)}</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

// ---------- factors of production ----------

export const FACTORS = [
  { name: 'Land', reward: 'earns rent', color: GREEN },
  { name: 'Labour', reward: 'earns wages', color: BLUE },
  { name: 'Capital', reward: 'earns interest', color: AMBER },
  { name: 'Enterprise', reward: 'earns profit', color: ROSE },
] as const;

export const FactorsOfProduction = () => (
  <Panel h={62} aria="Four boxes, one for each factor of production: land earns rent, labour earns wages, capital earns interest, and enterprise earns profit.">
    {FACTORS.map((f, i) => {
      const x = 6 + (i % 2) * 56;
      const y = 6 + Math.floor(i / 2) * 29;
      return (
        <g key={f.name}>
          <rect x={x} y={y} width={52} height={25} rx={4} fill={f.color} fillOpacity={0.18} stroke={f.color} strokeWidth={0.8} />
          <T x={x + 26} y={y + 11} size={6.2} fill={f.color}>{f.name}</T>
          <T x={x + 26} y={y + 19.5} size={4.8} weight={600}>{f.reward}</T>
        </g>
      );
    })}
  </Panel>
);

// ---------- management levels ----------

export const MANAGEMENT = [
  { name: 'Top management', what: 'long-term goals and strategy' },
  { name: 'Middle management', what: 'plans for each department' },
  { name: 'Operational level', what: 'daily work and staff supervision' },
] as const;

export const ManagementPyramid = () => {
  const bands = MANAGEMENT.map((m, i) => {
    const y0 = 6 + i * 24;
    const y1 = y0 + 22;
    const half = (y: number) => 8 + ((y - 6) / 72) * 44; // half-width grows from 8 at the top to 52 at the base
    return { ...m, i, y0, y1, h0: r3(half(y0)), h1: r3(half(y1)) };
  });
  const fills = [BLUE, GREEN, AMBER];
  return (
    <Panel h={82} aria="A pyramid with three bands. The top band is top management, which sets long-term goals. The middle band is middle management, which plans for each department. The wide bottom band is the operational level, which handles daily work and supervises staff.">
      {bands.map((b) => (
        <g key={b.name}>
          <polygon
            points={`${60 - b.h0},${b.y0} ${60 + b.h0},${b.y0} ${60 + b.h1},${b.y1} ${60 - b.h1},${b.y1}`}
            fill={fills[b.i]}
            fillOpacity={0.22}
            stroke={fills[b.i]}
            strokeWidth={0.8}
          />
          <T x={60} y={b.y0 + 10} size={b.i === 0 ? 4.6 : 5.4} fill={fills[b.i]}>{b.i === 0 ? 'Top' : b.name}</T>
          <T x={60} y={b.y0 + 17} size={4.2} weight={600}>{b.i === 0 ? 'strategy' : b.what}</T>
        </g>
      ))}
    </Panel>
  );
};

// ---------- demand ----------

export const DemandCurve = ({ prices, at0, perRand, aria }: { prices: readonly number[]; at0: number; perRand: number; aria: string }) => {
  const pts = demandSchedule(prices, at0, perRand);
  const maxP = Math.max(...prices);
  const maxQ = Math.max(...pts.map((p) => p.qty), 1);
  const X0 = 22;
  const X1 = 108;
  const Y0 = 14;
  const Y1 = 60;
  const px = (q: number) => r3(X0 + (q / maxQ) * (X1 - X0 - 6));
  const py = (p: number) => r3(Y1 - (p / maxP) * (Y1 - Y0 - 4));
  return (
    <Panel h={80} aria={aria}>
      <line x1={X0} y1={Y0} x2={X0} y2={Y1} stroke={MUTED} strokeWidth={0.8} />
      <line x1={X0} y1={Y1} x2={X1} y2={Y1} stroke={MUTED} strokeWidth={0.8} />
      <T x={X0 - 8} y={8} anchor="start" size={4.8} fill={AMBER}>Price</T>
      <T x={X1} y={Y1 + 10} anchor="end" size={4.8} fill={AMBER}>Quantity wanted</T>
      <polyline points={pts.map((p) => `${px(p.qty)},${py(p.price)}`).join(' ')} fill="none" stroke={GREEN} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p) => (
        <g key={p.price}>
          <circle cx={px(p.qty)} cy={py(p.price)} r={1.8} fill={LINE} />
          <T x={X0 - 2} y={py(p.price) + 1.6} anchor="end" size={4.2} fill={MUTED}>{rand(p.price)}</T>
        </g>
      ))}
      <T x={px(pts[Math.floor(pts.length / 2)].qty) + 6} y={py(pts[Math.floor(pts.length / 2)].price) - 4} anchor="start" size={5} fill={GREEN}>Demand</T>
    </Panel>
  );
};

// ---------- the bank in the middle ----------

export const BankFlow = () => (
  <Panel h={62} aria="Savers put their deposits into the bank. The bank pays them interest and lends money on to borrowers, who pay it back with interest.">
    <rect x={4} y={18} width={30} height={26} rx={4} fill={GREEN} fillOpacity={0.2} stroke={GREEN} strokeWidth={0.9} />
    <T x={19} y={34} size={5.4} fill={GREEN}>Savers</T>
    <rect x={45} y={14} width={30} height={34} rx={4} fill={BLUE} fillOpacity={0.2} stroke={BLUE} strokeWidth={0.9} />
    <T x={60} y={34} size={5.8} fill={BLUE}>Bank</T>
    <rect x={86} y={18} width={30} height={26} rx={4} fill={AMBER} fillOpacity={0.2} stroke={AMBER} strokeWidth={0.9} />
    <T x={101} y={34} size={5.2} fill={AMBER}>Borrowers</T>
    <path d="M35 26 L44 26" stroke={LINE} strokeWidth={1} markerEnd="url(#bf-a)" />
    <path d="M44 38 L35 38" stroke={LINE} strokeWidth={1} markerEnd="url(#bf-a)" />
    <path d="M76 26 L85 26" stroke={LINE} strokeWidth={1} markerEnd="url(#bf-a)" />
    <path d="M85 38 L76 38" stroke={LINE} strokeWidth={1} markerEnd="url(#bf-a)" />
    <defs>
      <marker id="bf-a" viewBox="0 0 6 6" refX={5} refY={3} markerWidth={4} markerHeight={4} orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill={LINE} />
      </marker>
    </defs>
    <T x={19} y={12} size={4.4} fill={MUTED}>deposits</T>
    <T x={101} y={12} size={4.4} fill={MUTED}>loans</T>
    <T x={60} y={58} size={4.4} fill={MUTED}>interest flows both ways</T>
  </Panel>
);

// ---------- simple against compound interest ----------

export const GrowthBars = ({ simple, compound, aria }: { simple: readonly number[]; compound: readonly number[]; aria: string }) => {
  const years = compound.length;
  const lo = Math.min(...simple, ...compound);
  const hi = Math.max(...simple, ...compound);
  // The bars start a little below the smallest balance so the extra interest can be seen. The picture says so.
  const base = Math.floor((lo * 0.9) / 100) * 100;
  const bh = (v: number) => r3(((v - base) / (hi - base)) * 34);
  const groupW = 100 / years;
  return (
    <Panel h={72} aria={aria}>
      <T x={112} y={8} anchor="end" size={4.4} fill={MUTED}>bars start at {rand(base)}</T>
      {compound.map((c, i) => {
        const gx = 12 + i * groupW;
        return (
          <g key={i}>
            <rect x={gx} y={50 - bh(simple[i])} width={groupW * 0.36} height={bh(simple[i])} rx={1} fill={BLUE} />
            <rect x={r3(gx + groupW * 0.4)} y={50 - bh(c)} width={groupW * 0.36} height={bh(c)} rx={1} fill={GREEN} />
          </g>
        );
      })}
      <line x1={8} y1={50.5} x2={112} y2={50.5} stroke={MUTED} strokeWidth={0.6} />
      <T x={60} y={56.5} size={4.4} fill={MUTED}>start, then years 1 to {years - 1}</T>
      <rect x={8} y={62} width={4} height={4} fill={BLUE} />
      <T x={14} y={65.6} anchor="start" size={4.4}>Simple {rand(simple[years - 1])}</T>
      <rect x={58} y={62} width={4} height={4} fill={GREEN} />
      <T x={64} y={65.6} anchor="start" size={4.4}>Compound {rand(compound[years - 1])}</T>
    </Panel>
  );
};

// ---------- a simple side-by-side comparison ----------

export const CompareCards = ({ left, right }: { left: { title: string; lines: readonly string[] }; right: { title: string; lines: readonly string[] } }) => (
  <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-2">
    {[left, right].map((c, i) => (
      <div key={c.title} className="rounded-2xl p-3 text-left" style={{ background: INK }}>
        <p className="text-sm font-extrabold" style={{ color: i === 0 ? BLUE : GREEN }}>{c.title}</p>
        <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[13px] text-slate-100">
          {c.lines.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
