import { r3 } from '../round';
import { rand, vatFacts } from './mathLitHelpers';

/**
 * A price with 15% VAT, drawn to scale: the price excluding VAT is 100 parts and the VAT is 15 more parts, so the price including VAT
 * is 115 parts. That is why you multiply by 1,15 to add VAT and take 15/115 of the price including VAT to find the VAT inside it.
 * Numbers from vatFacts (mathLitHelpers.ts).
 */

const INK = '#0f172a';
const LEFT = 15;
const WIDTH = 120;

export const VatBreakdown = ({ excl = 200, rate = 15 }: { excl?: number; rate?: number }) => {
  const f = vatFacts(excl, rate);
  const unit = WIDTH / (100 + rate);
  const exclW = r3(100 * unit);
  const vatW = r3(rate * unit);
  const mid = r3(LEFT + exclW / 2);
  const vatMid = r3(LEFT + exclW + vatW / 2);
  const right = LEFT + WIDTH;
  return (
    <svg viewBox="0 0 150 100" role="img" aria-labelledby="vat-t vat-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="vat-t">{`${rand(f.excl)} plus ${rate}% VAT is ${rand(f.incl)}`}</title>
      <desc id="vat-d">
        A bar drawn to scale. The price excluding VAT, {rand(f.excl)}, is 100 parts. The VAT, {rand(f.vat)}, is {rate} more parts, so the price including VAT, {rand(f.incl)}, is {100 + rate} parts. Multiply by {f.multiplier} to add VAT. VAT is {rate}/{100 + rate} of the price including VAT.
      </desc>
      <text x={mid} y={9} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#a5b4fc">excl. VAT {rand(f.excl)}</text>
      <line x1={LEFT} y1={23} x2={right - 2} y2={23} stroke="#94a3b8" strokeWidth={0.7} />
      <path d={`M${right - 2} 23 l-3 -2 v4 z`} fill="#94a3b8" />
      <text x={r3(LEFT + WIDTH / 2)} y={20} textAnchor="middle" fontSize={6} fontWeight={800} fill="#e2e8f0">× {f.multiplier}</text>
      <rect x={LEFT} y={30} width={exclW} height={18} fill="#6366f1" />
      <rect x={r3(LEFT + exclW)} y={30} width={vatW} height={18} fill="#fbbf24" />
      <text x={mid} y={42} textAnchor="middle" fontSize={7} fontWeight={800} fill="#eef2ff">100 parts</text>
      <line x1={vatMid} y1={48} x2={vatMid} y2={58} stroke="#fbbf24" strokeWidth={0.7} />
      <text x={right} y={65} textAnchor="end" fontSize={6.6} fontWeight={800} fill="#fcd34d">VAT {rate}% = {rand(f.vat)}</text>
      <path d={`M${LEFT} 70 v3 H${right} v-3`} fill="none" stroke="#94a3b8" strokeWidth={0.7} />
      <text x={r3(LEFT + WIDTH / 2)} y={82} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#e2e8f0">incl. VAT {rand(f.incl)} = {100 + rate} parts</text>
      <text x={75} y={94} textAnchor="middle" fontSize={6} fontWeight={800} fill="#6ee7b7">VAT = {rate}/{100 + rate} × {rand(f.incl)} = {rand(f.vatFromIncl)}</text>
    </svg>
  );
};
