import { differences, frame, terms } from './quadraticPattern';
import { r3 } from '../round';

/**
 * The lesson's quadratic pattern T(n) = n^2 + n + 1 as dot frames (an n by (n + 1) block plus one
 * dot), with the terms, the first differences and the constant second difference below them.
 * It shows why a quadratic has constant SECOND differences, and why 2a = 2 here, so a = 1.
 */

const INK = '#0f172a';
const BLUE = '#60a5fa';
const ORANGE = '#fb923c';
const ROSE = '#fb7185';
const SOFT = '#cbd5e1';

const LEFT = 28; // room for the row labels
const SLOT = (150 - LEFT) / 4;
const cx = (i: number) => r3(LEFT + SLOT * (i + 0.5));

export const QuadraticDots = ({ count = 4 }: { count?: number }) => {
  const t = terms(count);
  const d1 = differences(t);
  const d2 = differences(d1);
  const gap = 4.2;
  return (
    <svg
      viewBox="0 0 150 104"
      role="img"
      aria-labelledby="qd-t qd-d"
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="qd-t">A quadratic pattern of dots and its differences</title>
      <desc id="qd-d">
        Frame n has n columns and n plus 1 rows of dots plus one extra dot: {t.join(', ')} dots. The first differences are {d1.join(', ')} and the second difference is always {d2[0]}, which is 2a, so a is {d2[0] / 2}.
      </desc>
      {t.map((_, i) => {
        const n = i + 1;
        const f = frame(n);
        const w = f.cols * gap;
        const x0 = cx(i) - (w + gap) / 2; // block plus the extra dot, centred in the slot
        const bottom = 34;
        const top = bottom - f.rows * gap;
        return (
          <g key={n}>
            {Array.from({ length: f.rows }, (__, r) =>
              Array.from({ length: f.cols }, (___, c) => (
                <circle key={`${r}-${c}`} cx={r3(x0 + c * gap + gap / 2)} cy={r3(top + r * gap + gap / 2)} r={1.5} fill={BLUE} />
              )),
            )}
            <circle cx={r3(x0 + f.cols * gap + gap / 2)} cy={r3(top + gap / 2)} r={1.5} fill={ORANGE} />
            <text x={cx(i)} y={41} textAnchor="middle" fontSize={5.4} fontWeight={700} fill={SOFT}>n = {n}</text>
          </g>
        );
      })}
      <g fontWeight={800} textAnchor="middle">
        {t.map((v, i) => <text key={`t${i}`} x={cx(i)} y={53} fontSize={7.6} fill="#f1f5f9">{v}</text>)}
        {d1.map((v, i) => <text key={`a${i}`} x={r3((cx(i) + cx(i + 1)) / 2)} y={65} fontSize={7} fill={BLUE}>+{v}</text>)}
        {d2.map((v, i) => <text key={`b${i}`} x={r3(((cx(i) + cx(i + 1)) / 2 + (cx(i + 1) + cx(i + 2)) / 2) / 2)} y={77} fontSize={7} fill={ROSE}>+{v}</text>)}
      </g>
      <g fontSize={5.4} fontWeight={700} fill={SOFT}>
        <text x={2} y={53}>term</text>
        <text x={2} y={65}>1st diff</text>
        <text x={2} y={77}>2nd diff</text>
      </g>
      <text x={75} y={94} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={ROSE}>second difference {d2[0]} = 2a, so a = {d2[0] / 2}</text>
    </svg>
  );
};
