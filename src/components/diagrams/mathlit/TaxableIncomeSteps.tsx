import { r3 } from '../round';
import { rand, splitWidths, taxSteps } from './mathLitHelpers';

/**
 * Two bars, each drawn to its own scale. Top: gross income minus allowable deductions leaves taxable income. Bottom: the tax worked out
 * on taxable income, minus the rebate, is the tax payable. The example uses round numbers, not a tax table. Numbers from taxSteps.
 */

const INK = '#0f172a';
const LEFT = 15;
const WIDTH = 120;

const Row = ({ y, total, keep, take, keepColor, takeColor, totalLabel, keepLabel, takeLabel }: {
  y: number; total: number; keep: number; take: number; keepColor: string; takeColor: string; totalLabel: string; keepLabel: string; takeLabel: string;
}) => {
  const [kw, tw] = splitWidths(keep, take, WIDTH);
  void total;
  return (
    <g>
      <text x={LEFT} y={y} fontSize={6.4} fontWeight={800} fill="#e2e8f0">{totalLabel}</text>
      <rect x={LEFT} y={y + 4} width={r3(kw)} height={13} fill={keepColor} />
      <rect x={r3(LEFT + kw)} y={y + 4} width={r3(tw)} height={13} fill={takeColor} />
      <text x={LEFT} y={y + 26} fontSize={6.4} fontWeight={800} fill="#a7f3d0">{keepLabel}</text>
      <line x1={r3(LEFT + kw + tw / 2)} y1={y + 17} x2={r3(LEFT + kw + tw / 2)} y2={y + 31} stroke={takeColor} strokeWidth={0.7} />
      <text x={LEFT + WIDTH} y={y + 35} textAnchor="end" fontSize={6.4} fontWeight={800} fill="#fcd34d">{takeLabel}</text>
    </g>
  );
};

export const TaxableIncomeSteps = ({ gross = 240_000, deductions = 30_000, taxBefore = 30_000, rebate = 15_000 }: { gross?: number; deductions?: number; taxBefore?: number; rebate?: number }) => {
  const t = taxSteps(gross, deductions, taxBefore, rebate);
  return (
    <svg viewBox="0 0 150 110" role="img" aria-labelledby="tax-t tax-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="tax-t">{`Gross income ${rand(t.gross)} less deductions ${rand(t.deductions)} is taxable income ${rand(t.taxable)}`}</title>
      <desc id="tax-d">
        Two bars, each to its own scale. Gross income of {rand(t.gross)} less allowable deductions of {rand(t.deductions)} leaves taxable income of {rand(t.taxable)}. The tax before rebate, {rand(t.taxBeforeRebate)}, less the rebate of {rand(t.rebate)} leaves tax payable of {rand(t.payable)}. The numbers are an example, not a tax table.
      </desc>
      <Row y={10} total={t.gross} keep={t.taxable} take={t.deductions} keepColor="#10b981" takeColor="#fbbf24" totalLabel={`Gross income ${rand(t.gross)}`} keepLabel={`= taxable income ${rand(t.taxable)}`} takeLabel={`− deductions ${rand(t.deductions)}`} />
      <Row y={62} total={t.taxBeforeRebate} keep={t.payable} take={t.rebate} keepColor="#6366f1" takeColor="#fbbf24" totalLabel={`Tax before rebate ${rand(t.taxBeforeRebate)}`} keepLabel={`= tax payable ${rand(t.payable)}`} takeLabel={`− rebate ${rand(t.rebate)}`} />
    </svg>
  );
};
