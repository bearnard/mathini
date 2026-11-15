import { r3 } from '../round';
import { P, Q, hyperbola, parabola, pieces } from './shift';

/**
 * Left: y = x^2 and its translation y = (x - 2)^2 + 1, with the move from the old vertex to the new
 * one drawn as "2 right" and "1 up". Right: y = 1/(x - 2) + 1 with its asymptotes x = 2 and y = 1.
 * Both are the lesson's own example (p = 2, q = 1), computed from shift.ts. One unit is the same
 * length on both axes.
 */

const INK = '#0f172a';
const U = 8;
const TOP = 18;

interface Win { ox: number; oy: number; xmin: number; xmax: number; ymin: number; ymax: number }

const frame = (w: Win) => ({
  px: (x: number) => r3(w.ox + x * U),
  py: (y: number) => r3(w.oy - y * U),
});

const Axes = ({ w }: { w: Win }) => {
  const { px, py } = frame(w);
  return (
    <g>
      <line x1={px(w.xmin)} y1={py(0)} x2={px(w.xmax)} y2={py(0)} stroke="#64748b" strokeWidth={0.7} />
      <line x1={px(0)} y1={py(w.ymax)} x2={px(0)} y2={py(w.ymin)} stroke="#64748b" strokeWidth={0.7} />
    </g>
  );
};

const Curve = ({ w, f, stroke }: { w: Win; f: (x: number) => number; stroke: string }) => {
  const { px, py } = frame(w);
  return (
    <>
      {pieces(f, w.xmin, w.xmax, w.ymin, w.ymax).map((pts, i) => (
        <polyline key={i} points={pts.map(([x, y]) => `${px(x)},${py(y)}`).join(' ')} fill="none" stroke={stroke} strokeWidth={1.5} strokeLinejoin="round" />
      ))}
    </>
  );
};

const LEFT: Win = { ox: 28, oy: TOP + 8 * U, xmin: -3, xmax: 6, ymin: -1, ymax: 8 };
const RIGHT: Win = { ox: 116, oy: TOP + 5 * U + 4, xmin: -3, xmax: 5, ymin: -4, ymax: 5 };

export const TransformationsShift = () => {
  const l = frame(LEFT);
  const r = frame(RIGHT);
  return (
    <svg
      viewBox="0 0 172 118"
      role="img"
      aria-labelledby="ts-t ts-d"
      className="mx-auto block w-full max-w-lg rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="ts-t">Shifting a parabola and a hyperbola</title>
      <desc id="ts-d">
        Left: the parabola y = x squared moved {P} units right and {Q} unit up gives y = (x minus {P}) squared plus {Q}, with its vertex at ({P}; {Q}). Right: the hyperbola y = 1 over (x minus {P}) plus {Q} has its asymptotes at x = {P} and y = {Q}.
      </desc>
      <Axes w={LEFT} />
      <Curve w={LEFT} f={parabola(1, 0, 0)} stroke="#94a3b8" />
      <Curve w={LEFT} f={parabola(1, P, Q)} stroke="#818cf8" />
      <line x1={l.px(0)} y1={l.py(0) + 3} x2={l.px(P)} y2={l.py(0) + 3} stroke="#fbbf24" strokeWidth={1.1} />
      <line x1={l.px(P) + 3} y1={l.py(0)} x2={l.px(P) + 3} y2={l.py(Q)} stroke="#fbbf24" strokeWidth={1.1} />
      <circle cx={l.px(0)} cy={l.py(0)} r={1.8} fill="#94a3b8" />
      <circle cx={l.px(P)} cy={l.py(Q)} r={2.1} fill="#fbbf24" />
      <text x={l.px(P / 2)} y={l.py(0) + 10} textAnchor="middle" fontSize={5.8} fontWeight={800} fill="#fcd34d">{P} right</text>
      <text x={l.px(P) + 6} y={l.py(Q / 2) + 2} fontSize={5.8} fontWeight={800} fill="#fcd34d">{Q} up</text>
      <text x={LEFT.ox + 12} y={106} textAnchor="middle" fontSize={5.6} fontWeight={800} fill="#cbd5e1">y = x²</text>
      <text x={LEFT.ox + 12} y={113} textAnchor="middle" fontSize={5.6} fontWeight={800} fill="#a5b4fc">y = (x − {P})² + {Q}</text>
      <Axes w={RIGHT} />
      <line x1={r.px(P)} y1={r.py(RIGHT.ymax)} x2={r.px(P)} y2={r.py(RIGHT.ymin)} stroke="#34d399" strokeWidth={0.8} strokeDasharray="2.2 1.6" />
      <line x1={r.px(RIGHT.xmin)} y1={r.py(Q)} x2={r.px(RIGHT.xmax)} y2={r.py(Q)} stroke="#34d399" strokeWidth={0.8} strokeDasharray="2.2 1.6" />
      <Curve w={RIGHT} f={hyperbola(1, P, Q)} stroke="#818cf8" />
      <text x={r.px(P) - 2.5} y={TOP + 5} textAnchor="end" fontSize={5.8} fontWeight={800} fill="#6ee7b7">x = {P}</text>
      <text x={r.px(RIGHT.xmin) + 2} y={r.py(Q) - 2.5} fontSize={5.8} fontWeight={800} fill="#6ee7b7">y = {Q}</text>
      <text x={RIGHT.ox + 12} y={113} textAnchor="middle" fontSize={5.6} fontWeight={800} fill="#a5b4fc">y = 1/(x − {P}) + {Q}</text>
    </svg>
  );
};
