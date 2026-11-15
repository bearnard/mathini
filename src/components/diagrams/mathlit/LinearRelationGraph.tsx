import { r3 } from '../round';
import { linearPoints, rand, stepRise } from './mathLitHelpers';

/**
 * The same relationship as the table above it: R5 per GB. The points (1; 5), (2; 10), (3; 15), (4; 20) lie on a straight line through
 * the origin, and every extra GB adds the same R5. Points and the step from linearPoints and stepRise (mathLitHelpers.ts).
 */

const INK = '#0f172a';
const X0 = 24;
const Y0 = 84;
const PX = 28; // per GB
const PY = 3.4; // per rand

export const LinearRelationGraph = ({ rate = 5, gbs = [1, 2, 3, 4] }: { rate?: number; gbs?: number[] }) => {
  const pts = linearPoints(rate, gbs);
  const rise = stepRise(pts);
  const px = (x: number) => r3(X0 + x * PX);
  const py = (y: number) => r3(Y0 - y * PY);
  const xMax = gbs[gbs.length - 1];
  const yMax = pts[pts.length - 1].y;
  const a = pts[1]; // the step from the second point to the third
  const b = pts[2];
  return (
    <svg viewBox="0 0 150 100" role="img" aria-labelledby="lrg-t lrg-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="lrg-t">{`Cost = ${rate} × GB: a straight line through the origin`}</title>
      <desc id="lrg-d">
        A graph of cost in rand against data in GB. The points {pts.map((p) => `(${p.x}; ${p.y})`).join(', ')} lie on a straight line through the origin. Every extra GB adds {rand(rise)}.
      </desc>
      <text x={4} y={9} fontSize={6} fontWeight={800} fill="#cbd5e1">Cost (R)</text>
      <line x1={X0} y1={py(yMax) - 6} x2={X0} y2={Y0} stroke="#94a3b8" strokeWidth={0.8} />
      <line x1={X0} y1={Y0} x2={px(xMax) + 8} y2={Y0} stroke="#94a3b8" strokeWidth={0.8} />
      {[0, ...gbs].map((x) => (
        <text key={`x${x}`} x={px(x)} y={Y0 + 7} textAnchor="middle" fontSize={5.4} fontWeight={700} fill="#cbd5e1">{x}</text>
      ))}
      {[0, yMax / 2, yMax].map((y) => (
        <g key={`y${y}`}>
          <line x1={X0 - 1.5} y1={py(y)} x2={X0} y2={py(y)} stroke="#94a3b8" strokeWidth={0.6} />
          <text x={X0 - 3} y={py(y) + 1.8} textAnchor="end" fontSize={5.4} fontWeight={700} fill="#cbd5e1">{y}</text>
        </g>
      ))}
      <text x={r3((X0 + px(xMax)) / 2)} y={Y0 + 15} textAnchor="middle" fontSize={6} fontWeight={800} fill="#cbd5e1">Data (GB)</text>
      <line x1={px(0)} y1={py(0)} x2={px(xMax)} y2={py(yMax)} stroke="#818cf8" strokeWidth={1.2} />
      {pts.map((p) => (
        <circle key={p.x} cx={px(p.x)} cy={py(p.y)} r={2} fill="#fbbf24" />
      ))}
      <line x1={px(a.x)} y1={py(a.y)} x2={px(b.x)} y2={py(a.y)} stroke="#34d399" strokeWidth={0.9} strokeDasharray="1.8 1.4" />
      <line x1={px(b.x)} y1={py(a.y)} x2={px(b.x)} y2={py(b.y)} stroke="#34d399" strokeWidth={0.9} strokeDasharray="1.8 1.4" />
      <text x={r3((px(a.x) + px(b.x)) / 2)} y={py(a.y) + 8} textAnchor="middle" fontSize={6} fontWeight={800} fill="#6ee7b7">+1 GB</text>
      <text x={px(b.x) + 3} y={r3((py(a.y) + py(b.y)) / 2) + 2} fontSize={6} fontWeight={800} fill="#6ee7b7">+{rand(rise)}</text>
      <text x={X0 + 6} y={py(yMax * 0.8)} fontSize={6.6} fontWeight={800} fill="#c7d2fe">Cost = {rate} × GB</text>
    </svg>
  );
};
