import { axisMax } from '../maths/mathsHelpers';
import { chargeCaption } from './depreciation';
import { rand } from './rand';
import type { Schedule } from './depreciation';
import { r3 } from '../round';

/**
 * The carrying value of an asset falling year by year, as bars. Each year's depreciation is shown
 * as a dashed block above the bar, so the picture says it at a glance: straight-line blocks are all
 * the same height, diminishing-balance blocks shrink. Numbers come from depreciation.ts.
 */

const INK = '#0f172a';
const SOFT = '#cbd5e1';
const BAR = '#60a5fa';
const CHARGE = '#fb7185';

export const CarryingValueSteps = ({ schedule, startLabel, step = 10000 }: { schedule: Schedule; startLabel: string; step?: number }) => {
  const { values, charges } = schedule;
  const top = axisMax(Math.max(...values), step);
  const X0 = 30;
  const W = 116;
  const Y0 = 62; // the zero line
  const H = 44;
  const py = (v: number) => r3(Y0 - (v / top) * H);
  const n = values.length;
  const slot = W / n;
  const bw = slot * 0.62;
  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step);
  const labelEvery = ticks.length > 4 ? 2 : 1;
  return (
    <svg
      viewBox="0 0 150 86"
      role="img"
      aria-labelledby="cv-t cv-d"
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="cv-t">Carrying value falling year by year</title>
      <desc id="cv-d">
        {values.map((v, i) => `${i === 0 ? startLabel : `end of year ${i}`} ${rand(v)}`).join(', ')}. Depreciation charged: {chargeCaption(charges)}.
      </desc>
      {ticks.map((t, i) => (
        <g key={t}>
          <line x1={X0} y1={py(t)} x2={X0 + W} y2={py(t)} stroke={t === 0 ? '#94a3b8' : '#334155'} strokeWidth={t === 0 ? 0.9 : 0.4} />
          {i % labelEvery === 0 && (
            <text x={X0 - 2} y={r3(py(t) + 1.8)} textAnchor="end" fontSize={5.4} fontWeight={700} fill={SOFT}>{rand(t)}</text>
          )}
        </g>
      ))}
      {values.map((v, i) => {
        const x = r3(X0 + i * slot + (slot - bw) / 2);
        const charge = i > 0 ? charges[i - 1] : 0;
        return (
          <g key={i}>
            {i > 0 && (
              <rect x={x} y={py(v + charge)} width={r3(bw)} height={r3(py(v) - py(v + charge))} fill="rgba(251,113,133,0.18)" stroke={CHARGE} strokeWidth={0.8} strokeDasharray="2 1.4" />
            )}
            <rect x={x} y={py(v)} width={r3(bw)} height={r3(Y0 - py(v))} fill={BAR} rx={1} />
            <text x={r3(x + bw / 2)} y={r3(Math.min(py(v) - 1.8, py(v + charge) - 1.8))} textAnchor="middle" fontSize={5.2} fontWeight={800} fill="#f1f5f9">{rand(v)}</text>
            <text x={r3(x + bw / 2)} y={Y0 + 7.4} textAnchor="middle" fontSize={5.6} fontWeight={700} fill={SOFT}>{i === 0 ? startLabel : `Year ${i}`}</text>
          </g>
        );
      })}
      <text x={75} y={80} textAnchor="middle" fontSize={6} fontWeight={800} fill={CHARGE}>depreciation charged: {chargeCaption(charges)}</text>
    </svg>
  );
};
