import { r3 } from '../round';
import { circleFacts, num } from './circle';

/**
 * A circle drawn from its centre-radius equation: the centre (a; b) marked and its coordinates
 * shown by dashed lines to the axes, and a radius to the right. One unit is the same length on
 * both axes, so the circle is round. The numbers come from circle.ts; the example is chosen so
 * both signs show: (x - 2)^2 + (y + 1)^2 = 9.
 */

const INK = '#0f172a';
const SOFT = '#cbd5e1';
const U = 12; // pixels per unit, both axes
const XMIN = -3;
const XMAX = 7;
const YMIN = -5;
const YMAX = 3;
const LEFT = 15;
const TOP = 18;

export const CircleCentreRadius = ({ a = 2, b = -1, r = 3 }: { a?: number; b?: number; r?: number }) => {
  const f = circleFacts(a, b, r);
  const px = (x: number) => r3(LEFT + (x - XMIN) * U);
  const py = (y: number) => r3(TOP + (YMAX - y) * U);
  const xs = Array.from({ length: XMAX - XMIN + 1 }, (_, i) => XMIN + i);
  const ys = Array.from({ length: YMAX - YMIN + 1 }, (_, i) => YMIN + i);
  const bottom = py(YMIN);
  return (
    <svg
      viewBox={`0 0 150 ${bottom + 20}`}
      role="img"
      aria-labelledby="ccr-t ccr-d"
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="ccr-t">A circle with centre {f.centre} and radius {r}</title>
      <desc id="ccr-d">
        The circle {f.equation} has its centre at {f.centre} and a radius of {r}, because the right-hand side {r * r} is r squared.
      </desc>
      <text x={75} y={11} textAnchor="middle" fontSize={7.4} fontWeight={800} fill="#e2e8f0">{f.equation}</text>
      {xs.map((x) => (
        <line key={`gx${x}`} x1={px(x)} y1={py(YMAX)} x2={px(x)} y2={py(YMIN)} stroke="#1e293b" strokeWidth={0.5} />
      ))}
      {ys.map((y) => (
        <line key={`gy${y}`} x1={px(XMIN)} y1={py(y)} x2={px(XMAX)} y2={py(y)} stroke="#1e293b" strokeWidth={0.5} />
      ))}
      <line x1={px(XMIN)} y1={py(0)} x2={px(XMAX)} y2={py(0)} stroke="#94a3b8" strokeWidth={0.8} />
      <line x1={px(0)} y1={py(YMAX)} x2={px(0)} y2={py(YMIN)} stroke="#94a3b8" strokeWidth={0.8} />
      {xs.filter((x) => x !== 0 && x % 2 === 0).map((x) => (
        <text key={`tx${x}`} x={px(x)} y={py(0) - 2} textAnchor="middle" fontSize={5.2} fontWeight={700} fill={SOFT}>{num(x)}</text>
      ))}
      {ys.filter((y) => y !== 0 && y % 2 !== 0).map((y) => (
        <text key={`ty${y}`} x={px(XMIN) - 2} y={py(y) + 1.8} textAnchor="end" fontSize={5.2} fontWeight={700} fill={SOFT}>{num(y)}</text>
      ))}
      <text x={px(XMAX) + 2} y={py(0) + 2} fontSize={5.6} fontWeight={700} fill={SOFT}>x</text>
      <text x={px(0) + 3} y={py(YMAX) + 5} fontSize={5.6} fontWeight={700} fill={SOFT}>y</text>
      <circle cx={px(a)} cy={py(b)} r={r * U} fill="rgba(99,102,241,0.12)" stroke="#818cf8" strokeWidth={1.6} />
      <line x1={px(a)} y1={py(b)} x2={px(a)} y2={py(0)} stroke="#fbbf24" strokeWidth={0.6} strokeDasharray="1.6 1.6" />
      <line x1={px(a)} y1={py(b)} x2={px(0)} y2={py(b)} stroke="#fbbf24" strokeWidth={0.6} strokeDasharray="1.6 1.6" />
      <line x1={px(a)} y1={py(b)} x2={px(a + r)} y2={py(b)} stroke="#34d399" strokeWidth={1.6} />
      <circle cx={px(a + r)} cy={py(b)} r={1.6} fill="#34d399" />
      <circle cx={px(a)} cy={py(b)} r={2.2} fill="#fbbf24" />
      <text x={px(a)} y={py(b) + 10} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#fcd34d">centre {f.centre}</text>
      <text x={px(a + r / 2)} y={py(b) - 3} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#6ee7b7">r = {r}</text>
      <text x={75} y={bottom + 12} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#e2e8f0">a = {num(a)}, b = {num(b)}, r² = {r * r}, r = {r}</text>
    </svg>
  );
};
