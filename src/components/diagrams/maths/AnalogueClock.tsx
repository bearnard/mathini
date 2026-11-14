import { handAngles } from './mathsHelpers';

/**
 * An analogue clock showing hour:minute, with the hands from handAngles() so the picture always
 * agrees with the time written next to it. The short hand is the HOUR hand (green), the long hand
 * the MINUTE hand (indigo).
 */

interface AnalogueClockProps {
  hour: number;
  minute: number;
  className?: string;
}

const C = 50;
const polar = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  // rounded: Math.sin/cos can differ in the last digit between the server and the browser (hydration)
  return { x: Math.round((C + r * Math.sin(a)) * 1000) / 1000, y: Math.round((C - r * Math.cos(a)) * 1000) / 1000 };
};

const AnalogueClock = ({ hour, minute, className }: AnalogueClockProps) => {
  const a = handAngles(hour, minute);
  const h = polar(24, a.hour);
  const m = polar(36, a.minute);
  const label = `${hour}:${String(minute).padStart(2, '0')}`;
  return (
    <svg
      viewBox="0 0 100 112"
      role="img"
      aria-label={`An analogue clock showing ${label}. The short hour hand points to ${((hour % 12) || 12)} and the long minute hand points to ${minute === 0 ? 12 : minute / 5}.`}
      className={`mx-auto block w-full max-w-[16rem] rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      <circle cx={C} cy={C - 1} r={46} fill="#f8fafc" stroke="#818cf8" strokeWidth={3} transform="translate(0 1)" />
      {Array.from({ length: 60 }).map((_, i) => {
        const big = i % 5 === 0;
        const p1 = polar(big ? 38 : 41, i * 6);
        const p2 = polar(43, i * 6);
        return <line key={i} x1={p1.x} y1={p1.y + 0} x2={p2.x} y2={p2.y} stroke={big ? '#334155' : '#94a3b8'} strokeWidth={big ? 1.2 : 0.5} />;
      })}
      <line x1={C} y1={C} x2={m.x} y2={m.y} stroke="#6366f1" strokeWidth={2.2} strokeLinecap="round" />
      <line x1={C} y1={C} x2={h.x} y2={h.y} stroke="#10b981" strokeWidth={3.4} strokeLinecap="round" />
      {Array.from({ length: 12 }).map((_, i) => {
        const p = polar(31, (i + 1) * 30);
        return (
          <text key={i} x={p.x} y={p.y + 2.6} textAnchor="middle" fontSize={7.4} fontWeight={800} fill="#334155" stroke="#f8fafc" strokeWidth={2.2} paintOrder="stroke">{i + 1}</text>
        );
      })}
      <circle cx={C} cy={C} r={2.6} fill="#334155" />
      <g fontSize={5} fontWeight={700} fill="#e2e8f0">
        <circle cx={22} cy={107} r={2} fill="#10b981" />
        <text x={26} y={108.8}>hour hand</text>
        <circle cx={58} cy={107} r={2} fill="#6366f1" />
        <text x={62} y={108.8}>minute hand</text>
      </g>
    </svg>
  );
};

export default AnalogueClock;
