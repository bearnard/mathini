import { rand } from '../accounting/rand';

/** Pictures for the Grade 8 EMS Term 2-4 lessons. Amounts come from ems8b-helpers.ts. */

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
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);

/** The steps of the accounting cycle as a row of boxes. */
export const CycleFlow = ({ steps }: { steps: readonly string[] }) => {
  const w = 116 / steps.length;
  const cols = [BLUE, GREEN, AMBER, ROSE, BLUE, GREEN, AMBER];
  return (
    <Panel h={46} aria={`The accounting cycle in order: ${steps.join(', then ')}.`}>
      <T x={60} y={8} size={4.2} fill={AMBER}>the accounting cycle</T>
      {steps.map((s, i) => (
        <g key={s}>
          <rect x={2 + i * w} y={14} width={w - 2.4} height={22} rx={2} fill={cols[i % cols.length]} fillOpacity={0.2} stroke={cols[i % cols.length]} strokeWidth={0.6} />
          {s.split(' ').slice(0, 3).map((word, k) => <T key={k} x={2 + i * w + (w - 2.4) / 2} y={21 + k * 4.6} size={2.9} weight={700}>{word}</T>)}
          {i < steps.length - 1 ? <path d={`M${2 + (i + 1) * w - 2.4} 25 h2.4`} stroke={LINE} strokeWidth={0.6} fill="none" /> : null}
        </g>
      ))}
      <T x={60} y={43} size={3.4} fill={MUTED} weight={600}>transactions → journals → ledger → trial balance → statements</T>
    </Panel>
  );
};

/** The columns of a cash journal: the bank column equals the sum of the analysis columns. */
export const JournalColumns = ({ bank, parts, bankLabel }: { bank: number; parts: readonly { label: string; amount: number }[]; bankLabel: string }) => {
  const max = bank;
  const cols = [GREEN, BLUE, AMBER, ROSE];
  return (
    <Panel h={22 + (parts.length + 1) * 11} aria={`${bankLabel} column total ${rand(bank)}. The analysis columns add up to the same amount: ${parts.map((p) => `${p.label} ${rand(p.amount)}`).join(', ')}. The journal is cross-cast and agrees.`}>
      <T x={60} y={8} size={4.2} fill={AMBER}>{`${bankLabel} = ${parts.map((p) => p.label).join(' + ')}`}</T>
      <T x={4} y={21} size={3.6} anchor="start" weight={600}>{bankLabel}</T>
      <rect x={36} y={14.5} width={(bank / max) * 56} height={8} rx={1.5} fill={GREEN} fillOpacity={0.85} />
      <T x={36 + 56 + 2} y={21} size={3.6} anchor="start">{rand(bank)}</T>
      {parts.map((p, i) => (
        <g key={p.label}>
          <T x={4} y={32 + i * 11} size={3.6} anchor="start" weight={600}>{p.label}</T>
          <rect x={36} y={25.5 + i * 11} width={(p.amount / max) * 56} height={8} rx={1.5} fill={cols[(i + 1) % cols.length]} fillOpacity={0.85} />
          <T x={36 + (p.amount / max) * 56 + 2} y={32 + i * 11} size={3.6} anchor="start">{rand(p.amount)}</T>
        </g>
      ))}
    </Panel>
  );
};

/** Households and businesses, joined by the goods and services market and the factor market. */
export const MarketFlow = () => (
  <Panel h={66} aria="Two groups: households and businesses. In the goods and services market households buy goods and services from businesses and pay money. In the factor market households sell their labour and other factors of production to businesses and receive wages, rent, interest and profit.">
    <rect x={4} y={22} width={34} height={22} rx={3} fill={GREEN} fillOpacity={0.2} stroke={GREEN} strokeWidth={0.7} />
    <T x={21} y={35} size={4.4} fill={GREEN}>households</T>
    <rect x={82} y={22} width={34} height={22} rx={3} fill={BLUE} fillOpacity={0.2} stroke={BLUE} strokeWidth={0.7} />
    <T x={99} y={35} size={4.4} fill={BLUE}>businesses</T>
    <path d="M40 26 H80 M77 24 L80 26 L77 28" fill="none" stroke={AMBER} strokeWidth={0.9} />
    <T x={60} y={21} size={3.4} fill={AMBER}>money (spending)</T>
    <path d="M80 36 H40 M43 34 L40 36 L43 38" fill="none" stroke={AMBER} strokeWidth={0.9} />
    <T x={60} y={43} size={3.4} fill={AMBER}>goods and services</T>
    <T x={60} y={8} size={4} fill={AMBER}>goods and services market</T>
    <T x={60} y={53} size={4} fill={ROSE}>factor market</T>
    <T x={60} y={60} size={3.3} fill={MUTED} weight={600}>labour and capital go to businesses; wages, interest, rent come back</T>
  </Panel>
);

/** The three kinds of labour, with pay and training rising from unskilled to skilled (no amounts are implied). */
export const LabourLevels = () => (
  <Panel h={46} aria="Three kinds of labour. Unskilled labour needs no special training and is usually paid the least. Semi-skilled labour needs some training and is paid more. Skilled labour needs a qualification and is paid the most.">
    {[['unskilled', 'no special training', 30, ROSE], ['semi-skilled', 'some training', 60, AMBER], ['skilled', 'a qualification', 90, GREEN]].map(([name, note, w, col], i) => (
      <g key={name as string}>
        <T x={4} y={14 + i * 12} size={3.8} anchor="start" weight={600}>{name as string}</T>
        <rect x={32} y={8.5 + i * 12} width={(w as number) * 0.8} height={8} rx={1.5} fill={col as string} fillOpacity={0.85} />
        <T x={32 + (w as number) * 0.8 + 2} y={14 + i * 12} size={3.4} anchor="start" fill={MUTED}>{note as string}</T>
      </g>
    ))}
    <T x={60} y={44} size={3.4} fill={MUTED} weight={600}>the longer bar: more training and higher pay</T>
  </Panel>
);

/** A profit shared between partners in a ratio. */
export const ProfitSplit = ({ profit, labels, amounts, ratio }: { profit: number; labels: readonly string[]; amounts: readonly number[]; ratio: readonly number[] }) => {
  const cols = [GREEN, BLUE, AMBER, ROSE];
  let x = 8;
  return (
    <Panel h={46} aria={`A profit of ${rand(profit)} shared in the ratio ${ratio.join(' to ')}. ${labels.map((l, i) => `${l} gets ${rand(amounts[i])}`).join(', ')}. The shares add up to the profit.`}>
      <T x={60} y={8} size={4.2} fill={AMBER}>{`profit ${rand(profit)} shared ${ratio.join(' : ')}`}</T>
      {amounts.map((a, i) => {
        const w = (a / profit) * 104;
        const x0 = x;
        x += w;
        return (
          <g key={labels[i]}>
            <rect x={x0} y={14} width={w} height={14} fill={cols[i % cols.length]} fillOpacity={0.85} />
            <T x={x0 + w / 2} y={22.5} size={3.8} fill={INK}>{rand(a)}</T>
            <T x={x0 + w / 2} y={36} size={3.6} fill={cols[i % cols.length]}>{labels[i]}</T>
          </g>
        );
      })}
      <T x={60} y={43} size={3.4} fill={MUTED} weight={600}>the shares add up to the whole profit</T>
    </Panel>
  );
};

/** A T account with a debit side and a credit side, the totals and the closing balance. */
export const TAccount = ({ name, debits, credits, balance, side }: { name: string; debits: readonly number[]; credits: readonly number[]; balance: number; side: 'debit' | 'credit' | 'nil' }) => {
  const rows = Math.max(debits.length, credits.length);
  const sumD = debits.reduce((a, b) => a + b, 0), sumC = credits.reduce((a, b) => a + b, 0);
  const h = 30 + rows * 7 + 16;
  return (
    <Panel h={h} aria={`The ${name} account. Debit side: ${debits.map(rand).join(', ') || 'no entries'}, total ${rand(sumD)}. Credit side: ${credits.map(rand).join(', ') || 'no entries'}, total ${rand(sumC)}. Closing balance ${rand(balance)} on the ${side} side.`}>
      <T x={60} y={9} size={5} fill={AMBER}>{name}</T>
      <line x1={10} y1={13} x2={110} y2={13} stroke={LINE} strokeWidth={0.7} />
      <line x1={60} y1={13} x2={60} y2={28 + rows * 7 + 8} stroke={LINE} strokeWidth={0.7} />
      <T x={35} y={20} size={3.8} fill={BLUE}>Debit</T>
      <T x={85} y={20} size={3.8} fill={GREEN}>Credit</T>
      {debits.map((d, i) => <T key={`d${i}`} x={35} y={28 + i * 7} size={4} fill={BLUE}>{rand(d)}</T>)}
      {credits.map((c, i) => <T key={`c${i}`} x={85} y={28 + i * 7} size={4} fill={GREEN}>{rand(c)}</T>)}
      <line x1={14} y1={28 + rows * 7 - 2} x2={106} y2={28 + rows * 7 - 2} stroke={MUTED} strokeWidth={0.4} />
      <T x={35} y={28 + rows * 7 + 5} size={4} fill={BLUE}>{rand(sumD)}</T>
      <T x={85} y={28 + rows * 7 + 5} size={4} fill={GREEN}>{rand(sumC)}</T>
      <T x={60} y={h - 7} size={3.8} fill={ROSE}>{side === 'nil' ? 'balance nil' : `balance ${rand(balance)} (${side})`}</T>
    </Panel>
  );
};

/** Planned against actual: two bars and the difference. */
export const PlanVsActual = ({ planned, actual, unit = 'sales' }: { planned: number; actual: number; unit?: string }) => {
  const max = Math.max(planned, actual);
  const diff = actual - planned;
  const w = (v: number) => (v / max) * 60;
  return (
    <Panel h={46} aria={`Controlling: planned ${unit} ${rand(planned)}, actual ${unit} ${rand(actual)}. The actual result is ${rand(Math.abs(diff))} ${diff < 0 ? 'below' : diff > 0 ? 'above' : 'equal to'} the plan.`}>
      <T x={4} y={14} size={3.8} anchor="start" weight={600}>planned</T>
      <rect x={30} y={8} width={w(planned)} height={8} rx={1.5} fill={BLUE} fillOpacity={0.85} />
      <T x={30 + w(planned) + 2} y={14} size={3.8} anchor="start">{rand(planned)}</T>
      <T x={4} y={27} size={3.8} anchor="start" weight={600}>actual</T>
      <rect x={30} y={21} width={w(actual)} height={8} rx={1.5} fill={diff < 0 ? ROSE : GREEN} fillOpacity={0.85} />
      <T x={30 + w(actual) + 2} y={27} size={3.8} anchor="start">{rand(actual)}</T>
      <T x={60} y={41} size={4} fill={AMBER}>{diff === 0 ? 'on plan' : `${rand(Math.abs(diff))} ${diff < 0 ? 'below' : 'above'} the plan`}</T>
    </Panel>
  );
};
