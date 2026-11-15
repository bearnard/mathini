import { r3 } from '../round';
import { RESTRICTED, WHOLE, curvePoints, isOneToOne, meetingPoints, type Domain } from './horizontalLine';

/**
 * y = x^2 twice with the same horizontal line y = 2,25. On all x the line meets the graph twice, so
 * it is not one-to-one; restricted to x >= 0 it meets once, so it is. Meeting points and verdicts
 * come from horizontalLine.ts. One unit is the same length on both axes.
 */

const INK = '#0f172a';
const U = 11;
const LINE_Y = 2.25;

const Panel = ({ domain, ox, caption }: { domain: Domain; ox: number; caption: [string, string] }) => {
  const oy = 84;
  const px = (x: number) => r3(ox + x * U);
  const py = (y: number) => r3(oy - y * U);
  const pts = curvePoints(domain).map(([x, y]) => `${px(x)},${py(y)}`).join(' ');
  const ghost = domain === RESTRICTED ? curvePoints(WHOLE).filter(([x]) => x <= 0).map(([x, y]) => `${px(x)},${py(y)}`).join(' ') : '';
  const hits = meetingPoints(LINE_Y, domain);
  const ok = isOneToOne(domain);
  const colour = ok ? '#34d399' : '#fb923c';
  return (
    <g>
      <line x1={px(-2.3)} y1={py(0)} x2={px(2.3)} y2={py(0)} stroke="#64748b" strokeWidth={0.7} />
      <line x1={px(0)} y1={py(4.4)} x2={px(0)} y2={py(-0.4)} stroke="#64748b" strokeWidth={0.7} />
      {ghost && <polyline points={ghost} fill="none" stroke="#475569" strokeWidth={1.2} strokeDasharray="1.8 1.8" />}
      <polyline points={pts} fill="none" stroke="#818cf8" strokeWidth={1.7} strokeLinejoin="round" />
      <line x1={px(-2.3)} y1={py(LINE_Y)} x2={px(2.3)} y2={py(LINE_Y)} stroke="#fbbf24" strokeWidth={0.9} strokeDasharray="2.2 1.6" />
      {hits.map((x) => (
        <circle key={x} cx={px(x)} cy={py(LINE_Y)} r={2.1} fill={colour} stroke={INK} strokeWidth={0.6} />
      ))}
      <text x={ox} y={14} textAnchor="middle" fontSize={7} fontWeight={800} fill="#c7d2fe">y = x², {domain.label}</text>
      <text x={ox} y={100} textAnchor="middle" fontSize={6} fontWeight={800} fill="#e2e8f0">{caption[0]}</text>
      <text x={ox} y={107} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={colour}>{caption[1]}</text>
    </g>
  );
};

export const HorizontalLineTest = () => (
  <svg
    viewBox="0 0 150 114"
    role="img"
    aria-labelledby="hlt-t hlt-d"
    className="mx-auto block w-full max-w-md rounded-2xl"
    style={{ background: INK, fontFamily: 'inherit' }}
  >
    <title id="hlt-t">The horizontal-line test on y = x squared</title>
    <desc id="hlt-d">
      A horizontal line meets the whole parabola y = x squared twice, so it is not one-to-one. The same line meets the parabola restricted to x greater than or equal to 0 only once, so that is one-to-one.
    </desc>
    <Panel domain={WHOLE} ox={38} caption={['meets it twice', 'not one-to-one']} />
    <Panel domain={RESTRICTED} ox={112} caption={['meets it once', 'one-to-one']} />
  </svg>
);
