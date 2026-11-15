import { r3 } from '../round';
import { output, phaseAt, trend, turningPoints } from './businessCycle';

/**
 * A schematic business cycle, no data and no scale: real output moving around a long-term trend
 * through expansion (rising, green), peak, recession (falling, orange) and trough. The phases
 * are the four the Grade 12 lesson names; where they start and end comes from businessCycle.ts.
 */

const INK = '#0f172a';
const T0 = 0.2;
const T1 = 1.3;
const X0 = 18;
const X1 = 144;
const Y0 = 26; // top
const Y1 = 82; // bottom

export const BusinessCycleWave = () => {
  const samples = Array.from({ length: 161 }, (_, i) => {
    const t = T0 + ((T1 - T0) * i) / 160;
    return { t, v: output(t) };
  });
  const lo = Math.min(...samples.map((s) => s.v), trend(T0)) - 0.5;
  const hi = Math.max(...samples.map((s) => s.v), trend(T1));
  const px = (t: number) => r3(X0 + ((t - T0) / (T1 - T0)) * (X1 - X0));
  const py = (v: number) => r3(Y1 - ((v - lo) / (hi - lo)) * (Y1 - Y0));
  const [peak, trough] = turningPoints(T0, T1);
  const rising = samples.filter((s) => s.t <= peak.t);
  const falling = samples.filter((s) => s.t >= peak.t && s.t <= trough.t);
  const after = samples.filter((s) => s.t >= trough.t);
  const line = (pts: { t: number; v: number }[]) => pts.map((s) => `${px(s.t)},${py(s.v)}`).join(' ');
  const mid = (a: number, b: number) => (a + b) / 2;
  return (
    <svg
      viewBox="0 0 150 104"
      role="img"
      aria-labelledby="bcw-t bcw-d"
      className="mx-auto block w-full max-w-lg rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="bcw-t">The business cycle</title>
      <desc id="bcw-d">
        A wave of real output around a long-term trend line. Output rises in an expansion to a peak, falls in a recession to a trough, then rises again. This is a sketch of the shape, with no data.
      </desc>
      <line x1={X0} y1={Y0 - 6} x2={X0} y2={Y1 + 8} stroke="#64748b" strokeWidth={0.8} />
      <line x1={X0} y1={Y1 + 8} x2={X1 + 4} y2={Y1 + 8} stroke="#64748b" strokeWidth={0.8} />
      <text x={X0 + 3} y={8} fontSize={6} fontWeight={800} fill="#cbd5e1">real output</text>
      <text x={X1 + 4} y={Y1 + 16} textAnchor="end" fontSize={6} fontWeight={800} fill="#cbd5e1">time</text>
      <line x1={px(T0)} y1={py(trend(T0))} x2={px(T1)} y2={py(trend(T1))} stroke="#e2e8f0" strokeWidth={0.9} strokeDasharray="3 2" />
      <text x={px(1.17)} y={py(trend(1.17)) - 3.5} textAnchor="end" fontSize={5.6} fontWeight={800} fill="#e2e8f0">long-term trend</text>
      <polyline points={line(rising)} fill="none" stroke="#34d399" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={line(falling)} fill="none" stroke="#fb923c" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={line(after)} fill="none" stroke="#34d399" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={px(peak.t)} cy={py(output(peak.t))} r={2.3} fill="#f8fafc" />
      <circle cx={px(trough.t)} cy={py(output(trough.t))} r={2.3} fill="#f8fafc" />
      <text x={X0 + 6} y={Y1 - 3} fontSize={6.4} fontWeight={800} fill="#6ee7b7">{phaseAt(mid(T0, peak.t))}</text>
      <text x={px(peak.t)} y={py(output(peak.t)) - 5} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#f8fafc">peak</text>
      <text x={px(0.8) + 8} y={py(output(0.8)) + 5} fontSize={6.4} fontWeight={800} fill="#fdba74">{phaseAt(mid(peak.t, trough.t))}</text>
      <text x={px(trough.t)} y={py(output(trough.t)) + 9.5} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#f8fafc">trough</text>
    </svg>
  );
};
