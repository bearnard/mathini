import { changeOf, formatRand } from './mathsHelpers';
import { r3 } from '../round';

/**
 * A bar model for "how much change?": the whole bar is what was paid, the parts are what was
 * bought, and the last part is the unknown. All amounts are whole cents; the unknown and the
 * total come from changeOf(), so the picture can never disagree with the sum.
 */

interface BarModelProps {
  paid: number; // cents
  parts: { name: string; cents: number }[];
  /** Name for the unknown part. */
  unknown: string;
  /** Show the answer in the unknown part instead of "?". */
  solved?: boolean;
  className?: string;
}

const X0 = 8;
const W = 114;
const Y = 28;
const H = 15;
const COLORS = ['#818cf8', '#34d399'];

const BarModel = ({ paid, parts, unknown, solved = false, className }: BarModelProps) => {
  const { change } = changeOf(paid, parts.map((p) => p.cents));
  const segs = [
    ...parts.map((p, i) => ({ name: p.name, cents: p.cents, color: COLORS[i % COLORS.length], text: formatRand(p.cents) })),
    { name: unknown, cents: change, color: '#fbbf24', text: solved ? formatRand(change) : '?' },
  ];
  let x = X0;
  const placed = segs.map((s) => {
    const w = (s.cents / paid) * W;
    const out = { ...s, x, w };
    x += w;
    return out;
  });
  return (
    <svg
      viewBox="0 0 130 66"
      role="img"
      aria-label={`A bar model. The whole bar is ${formatRand(paid)}, the amount paid. It is split into ${parts.map((p) => `${p.name} ${formatRand(p.cents)}`).join(' and ')}, and the part left over, the ${unknown}${solved ? `, which is ${formatRand(change)}` : ', which we have to find'}.`}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      {/* the whole */}
      <path d={`M${X0} ${Y - 4} v-3 H${X0 + W} v3`} fill="none" stroke="#e2e8f0" strokeWidth={1.2} />
      <text x={r3(X0 + W / 2)} y={Y - 12} textAnchor="middle" fontSize={7.6} fontWeight={800} fill="#e2e8f0">{formatRand(paid)} paid</text>
      {placed.map((s, i) => (
        <g key={s.name}>
          <rect x={r3(s.x)} y={Y} width={r3(s.w)} height={H} fill={s.color} stroke="#0f172a" strokeWidth={0.8} rx={i === 0 ? 2 : 0} />
          <text x={r3(s.x + s.w / 2)} y={Y + H / 2 + 2.6} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#0f172a">{s.text}</text>
          <text x={r3(s.x + s.w / 2)} y={Y + H + 9} textAnchor="middle" fontSize={5.8} fontWeight={700} fill="#cbd5e1">{s.name}</text>
        </g>
      ))}
    </svg>
  );
};

export default BarModel;
