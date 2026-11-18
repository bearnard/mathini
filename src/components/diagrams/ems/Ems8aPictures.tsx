import { rand } from '../accounting/rand';

/** Pictures for the Grade 8 EMS lessons. Every amount is passed in from ems8a-helpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.6, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);

/** A bar for the price before VAT, a short bar for the VAT and the total bar that is their sum. */
export const InvoiceBars = ({ excl, vat, total, vatPercent }: { excl: number; vat: number; total: number; vatPercent: number }) => {
  const k = 80 / total;
  const wEx = excl * k, wVat = vat * k;
  return (
    <Panel h={50} aria={`A cash invoice. The price before VAT is ${rand(excl)}. VAT at ${vatPercent} percent is ${rand(vat)}. The total paid in cash is ${rand(total)}, which is the price plus the VAT.`}>
      <T x={60} y={8} size={4.4} fill={AMBER}>price + VAT = total</T>
      <rect x={20} y={14} width={wEx} height={9} rx={1.5} fill={BLUE} fillOpacity={0.8} />
      <T x={4} y={21} size={3.8} anchor="start" weight={600}>price</T>
      <T x={20 + wEx + 2} y={21} size={3.8} anchor="start">{rand(excl)}</T>
      <rect x={20} y={26} width={wVat} height={9} rx={1.5} fill={AMBER} fillOpacity={0.8} />
      <T x={4} y={33} size={3.8} anchor="start" weight={600}>VAT</T>
      <T x={20 + wVat + 2} y={33} size={3.8} anchor="start">{rand(vat)}</T>
      <rect x={20} y={38} width={wEx + wVat} height={9} rx={1.5} fill={GREEN} fillOpacity={0.8} />
      <T x={4} y={45} size={3.8} anchor="start" weight={600}>total</T>
      <T x={20 + wEx + wVat + 2} y={45} size={3.8} anchor="start" fill={MUTED}>{rand(total)}</T>
    </Panel>
  );
};

/** A bank statement in four bars: opening balance, deposits, payments and closing balance. */
export const StatementBars = ({ opening, deposits, payments, closing }: { opening: number; deposits: number; payments: number; closing: number }) => {
  const max = Math.max(opening, deposits, payments, closing, 1);
  const rows: [string, number, string][] = [['opening', opening, BLUE], ['+ deposits', deposits, GREEN], ['− payments', payments, AMBER], ['closing', closing, GREEN]];
  return (
    <Panel h={58} aria={`A bank statement. The opening balance is ${rand(opening)}. Deposits of ${rand(deposits)} are added and payments of ${rand(payments)} are subtracted, so the closing balance is ${rand(closing)}.`}>
      <T x={60} y={8} size={4.4} fill={AMBER}>opening + deposits − payments = closing</T>
      {rows.map(([label, v, col], i) => {
        const w = (v / max) * 60;
        return (
          <g key={label}>
            <T x={4} y={21 + i * 11} size={3.8} anchor="start" weight={600}>{label}</T>
            <rect x={34} y={14.5 + i * 11} width={w} height={8} rx={1.5} fill={col} fillOpacity={0.8} />
            <T x={34 + w + 2} y={21 + i * 11} size={3.8} anchor="start">{rand(v)}</T>
          </g>
        );
      })}
    </Panel>
  );
};
