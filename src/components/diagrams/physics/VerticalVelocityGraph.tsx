import { r3 } from '../round';
import { G, sa, timeBack, timeToTop, velocityAt } from './vertical';

/**
 * Velocity-time graph for an object thrown straight up, upward positive. One straight line: the
 * velocity starts positive, is zero at the top and is negative on the way down; the gradient is
 * the acceleration, g = −9,8 m·s⁻², the same all the way. Numbers come from vertical.ts
 * (CAPS: g = 9,8 m·s⁻²; air resistance ignored). The 19,6 m·s⁻¹ launch speed is the lesson's own
 * practice question.
 */

const INK = '#0f172a';
const SOFT = '#cbd5e1';
const X0 = 34; // the v axis
const X1 = 150; // t = timeBack
const YMID = 52; // v = 0
const YTOP = 14; // v = +vi
const YBOT = 90; // v = −vi

export const VerticalVelocityGraph = ({ vi = 19.6 }: { vi?: number }) => {
  const tTop = timeToTop(vi);
  const tEnd = timeBack(vi);
  const px = (t: number) => r3(X0 + (t / tEnd) * (X1 - X0));
  const py = (v: number) => r3(YMID - (v / vi) * (YMID - YTOP));
  const vEnd = velocityAt(vi, tEnd);
  return (
    <svg
      viewBox="0 0 164 110"
      role="img"
      aria-labelledby="vvg-t vvg-d"
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="vvg-t">Velocity against time for an object thrown upward</title>
      <desc id="vvg-d">
        Upward is positive. A straight line falls from {sa(vi)} metres per second at the start, through zero after {sa(tTop)} seconds at the highest point, to {sa(vEnd)} metres per second after {sa(tEnd)} seconds. The gradient is the acceleration, {sa(-G)} metres per second squared, the same all the way.
      </desc>
      {/* v = 0 axis and the t axis ticks */}
      <line x1={X0} y1={YTOP - 4} x2={X0} y2={YBOT + 4} stroke="#94a3b8" strokeWidth={0.8} />
      <line x1={X0} y1={YMID} x2={X1 + 4} y2={YMID} stroke="#94a3b8" strokeWidth={0.8} />
      <line x1={px(tTop)} y1={YMID} x2={px(tTop)} y2={YBOT + 4} stroke="#475569" strokeWidth={0.5} strokeDasharray="1.6 1.6" />
      <line x1={px(tEnd)} y1={YMID} x2={px(tEnd)} y2={YBOT + 4} stroke="#475569" strokeWidth={0.5} strokeDasharray="1.6 1.6" />
      <text x={px(tTop)} y={101} textAnchor="middle" fontSize={5.8} fontWeight={700} fill={SOFT}>{sa(tTop)}</text>
      <text x={px(tEnd)} y={101} textAnchor="middle" fontSize={5.8} fontWeight={700} fill={SOFT}>{sa(tEnd)}</text>
      <text x={X1 + 4} y={107} textAnchor="end" fontSize={5.8} fontWeight={700} fill={SOFT}>t (s)</text>
      <text x={X0 - 3} y={YTOP + 2} textAnchor="end" fontSize={5.8} fontWeight={700} fill={SOFT}>{sa(vi)}</text>
      <text x={X0 - 3} y={YMID + 2} textAnchor="end" fontSize={5.8} fontWeight={700} fill={SOFT}>0</text>
      <text x={X0 - 3} y={YBOT + 2} textAnchor="end" fontSize={5.8} fontWeight={700} fill={SOFT}>{sa(vEnd)}</text>
      <text x={X0 + 2} y={YTOP - 6} fontSize={5.8} fontWeight={700} fill={SOFT}>v (m·s⁻¹)</text>
      {/* the line, green while going up and orange while coming down */}
      <line x1={px(0)} y1={py(vi)} x2={px(tTop)} y2={py(0)} stroke="#34d399" strokeWidth={1.8} strokeLinecap="round" />
      <line x1={px(tTop)} y1={py(0)} x2={px(tEnd)} y2={py(vEnd)} stroke="#fb923c" strokeWidth={1.8} strokeLinecap="round" />
      <circle cx={px(0)} cy={py(vi)} r={2} fill="#34d399" />
      <circle cx={px(tTop)} cy={py(0)} r={2.2} fill="#f8fafc" />
      <circle cx={px(tEnd)} cy={py(vEnd)} r={2} fill="#fb923c" />
      <text x={68} y={20} fontSize={6} fontWeight={800} fill="#6ee7b7">going up:</text>
      <text x={68} y={27} fontSize={6} fontWeight={800} fill="#6ee7b7">v positive</text>
      <text x={px(tTop) + 4} y={46} fontSize={6} fontWeight={800} fill="#f8fafc">top: v = 0</text>
      <text x={px(tTop) + 5} y={85} fontSize={6} fontWeight={800} fill="#fdba74">coming down:</text>
      <text x={px(tTop) + 5} y={92} fontSize={6} fontWeight={800} fill="#fdba74">v negative</text>
      <text x={X0 + 4} y={68} fontSize={6} fontWeight={800} fill="#e2e8f0">gradient = g</text>
      <text x={X0 + 4} y={75} fontSize={6} fontWeight={800} fill="#e2e8f0">= {sa(-G)} m·s⁻²</text>
    </svg>
  );
};
