import { r3 } from '../round';
import { SIDEWAYS, SQUARE, meetsOnce, type Relation } from './verticalLine';

/**
 * Two graphs side by side with the same vertical line x = 1.5. It meets y = x^2 once, so that graph
 * is a function; it meets x = y^2 twice, so that one is not. Meeting points and verdicts come
 * from verticalLine.ts. One unit is the same length on both axes.
 */

const INK = '#0f172a';
const U = 11;
const LINE_X = 1.5;

const Panel = ({ rel, ox, oy, caption }: { rel: Relation; ox: number; oy: number; caption: [string, string] }) => {
  const px = (x: number) => r3(ox + x * U);
  const py = (y: number) => r3(oy - y * U);
  const pts = rel.points(40).map(([x, y]) => `${px(x)},${py(y)}`).join(' ');
  const hits = rel.outputsAt(LINE_X);
  const ok = meetsOnce(rel, LINE_X);
  const colour = ok ? '#34d399' : '#fb923c';
  const top = 28;
  const bottom = 90;
  return (
    <g>
      <line x1={px(-2.2)} y1={py(0)} x2={px(4.2)} y2={py(0)} stroke="#64748b" strokeWidth={0.7} />
      <line x1={px(0)} y1={top} x2={px(0)} y2={bottom} stroke="#64748b" strokeWidth={0.7} />
      <polyline points={pts} fill="none" stroke="#818cf8" strokeWidth={1.6} strokeLinejoin="round" />
      <line x1={px(LINE_X)} y1={top} x2={px(LINE_X)} y2={bottom} stroke="#fbbf24" strokeWidth={0.9} strokeDasharray="2.2 1.6" />
      {hits.map((y) => (
        <circle key={y} cx={px(LINE_X)} cy={py(y)} r={2.1} fill={colour} stroke={INK} strokeWidth={0.6} />
      ))}
      <text x={ox + 6} y={14} textAnchor="middle" fontSize={7.4} fontWeight={800} fill="#c7d2fe">{rel.label}</text>
      <text x={ox + 6} y={100} textAnchor="middle" fontSize={6} fontWeight={800} fill="#e2e8f0">{caption[0]}</text>
      <text x={ox + 6} y={107} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={colour}>{caption[1]}</text>
    </g>
  );
};

export const VerticalLineTest = () => (
  <svg
    viewBox="0 0 150 114"
    role="img"
    aria-labelledby="vlt-t vlt-d"
    className="mx-auto block w-full max-w-md rounded-2xl"
    style={{ background: INK, fontFamily: 'inherit' }}
  >
    <title id="vlt-t">The vertical-line test on two graphs</title>
    <desc id="vlt-d">
      A vertical line meets the graph of y = x squared once, so it is a function. The same vertical line meets the sideways parabola x = y squared twice, so it is not a function.
    </desc>
    <Panel rel={SQUARE} ox={30} oy={80} caption={['meets it once', 'a function']} />
    <Panel rel={SIDEWAYS} ox={92} oy={62} caption={['meets it twice', 'not a function']} />
  </svg>
);
