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
