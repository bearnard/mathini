import { r3 } from '../round';
import { journey } from './journey';

/**
 * One journey, two quantities: 3 m east then 4 m north. The distance travelled (the length of the path, 7 m) is a scalar. The
 * displacement (the straight line from start to finish, 5 m at 53° north of east) is a vector. Lengths are drawn to scale and the
 * numbers come from journey (journey.ts).
 */

const INK = '#0f172a';
const U = 12; // pixels per metre
const X0 = 24;
const Y0 = 84;

export const DistanceDisplacement = ({ east = 3, north = 4 }: { east?: number; north?: number }) => {
  const j = journey([{ dx: east, dy: 0 }, { dx: 0, dy: north }]);
  const px = (x: number) => r3(X0 + x * U);
  const py = (y: number) => r3(Y0 - y * U);
  const [s, m, f] = j.points;
  const angle = Math.round(j.angleDeg);
  const arc = 10;
  const a = (j.angleDeg * Math.PI) / 180;
  return (
    <svg viewBox="0 0 150 100" role="img" aria-labelledby="dd-t dd-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="dd-t">{`A journey of ${east} m east then ${north} m north: distance ${j.distance} m, displacement ${j.displacement} m`}</title>
      <desc id="dd-d">
        A walk of {east} m east and then {north} m north. The distance travelled is {east} + {north} = {j.distance} m, which is a scalar because it has no direction. The displacement is the straight line from start to finish: {j.displacement} m at {angle}° north of east, which is a vector because it has a direction. Lengths are drawn to scale.
      </desc>
      <line x1={px(s.x)} y1={py(s.y)} x2={px(m.x)} y2={py(m.y)} stroke="#f9a8d4" strokeWidth={1.8} />
      <line x1={px(m.x)} y1={py(m.y)} x2={px(f.x)} y2={py(f.y)} stroke="#f9a8d4" strokeWidth={1.8} />
      <line x1={px(s.x)} y1={py(s.y)} x2={px(f.x) - 1.6 * Math.cos(a)} y2={py(f.y) + 1.6 * Math.sin(a)} stroke="#34d399" strokeWidth={1.8} strokeDasharray="3 2" />
      <polygon points={`${px(f.x)},${py(f.y)} ${r3(px(f.x) - 6 * Math.cos(a) - 2.4 * Math.sin(a))},${r3(py(f.y) + 6 * Math.sin(a) - 2.4 * Math.cos(a))} ${r3(px(f.x) - 6 * Math.cos(a) + 2.4 * Math.sin(a))},${r3(py(f.y) + 6 * Math.sin(a) + 2.4 * Math.cos(a))}`} fill="#34d399" />
      <path d={`M${px(s.x) + arc} ${py(s.y)} A${arc} ${arc} 0 0 0 ${r3(px(s.x) + arc * Math.cos(a))} ${r3(py(s.y) - arc * Math.sin(a))}`} fill="none" stroke="#fbbf24" strokeWidth={0.7} />
      <circle cx={px(s.x)} cy={py(s.y)} r={2} fill="#f8fafc" />
      <circle cx={px(f.x)} cy={py(f.y)} r={2} fill="#f8fafc" />
      <text x={px(s.x) - 4} y={py(s.y) + 2} textAnchor="end" fontSize={6} fontWeight={800} fill="#e2e8f0">start</text>
      <text x={px(f.x) - 6} y={py(f.y) - 4} fontSize={6} fontWeight={800} fill="#e2e8f0">finish</text>
      <text x={r3((px(s.x) + px(m.x)) / 2)} y={py(s.y) + 9} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#fbcfe8">{east} m east</text>
      <text x={px(m.x) + 4} y={r3((py(m.y) + py(f.y)) / 2) + 10} fontSize={6.2} fontWeight={800} fill="#fbcfe8">{north} m north</text>
      <text x={90} y={16} fontSize={6.8} fontWeight={800} fill="#fbcfe8">distance {j.distance} m</text>
      <text x={90} y={23} fontSize={5.6} fontWeight={700} fill="#f9a8d4">scalar: no direction</text>
      <text x={90} y={36} fontSize={6.8} fontWeight={800} fill="#6ee7b7">displacement {j.displacement} m</text>
      <text x={90} y={43} fontSize={5.6} fontWeight={700} fill="#6ee7b7">{angle}° N of E: a vector</text>
    </svg>
  );
};
