import { countOn, elapsedMinutes, formatDuration, toMinutes } from './mathsHelpers';

/**
 * Elapsed time as a number line: start and finish, counted on in whole hours and then minutes,
 * with each jump drawn as an arc whose length is the time it covers. The steps and the total come
 * from countOn() and elapsedMinutes(), so the picture can never disagree with the sum.
 */

interface ElapsedBarProps {
  start: string;
  end: string;
  className?: string;
}

const X0 = 14;
const X1 = 106;
const Y = 40;

const ElapsedBar = ({ start, end, className }: ElapsedBarProps) => {
  const total = elapsedMinutes(start, end);
  const steps = countOn(start, end);
  const s0 = toMinutes(start);
  const xAt = (mins: number) => X0 + (mins / total) * (X1 - X0);
  // minutes since start for each stop
  const stops = [{ t: start, at: 0 }, ...steps.map((st) => ({ t: st.to, at: (((toMinutes(st.to) - s0) % 1440) + 1440) % 1440 || total }))];
  return (
    <svg
      viewBox="0 0 120 78"
      role="img"
      aria-label={`A number line from ${start} to ${end}. ${steps.map((st) => `${st.label} to ${st.to}`).join(', then ')}. Total ${formatDuration(total)}.`}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      <line x1={X0} y1={Y} x2={X1} y2={Y} stroke="#64748b" strokeWidth={1.6} strokeLinecap="round" />
      {steps.map((st, i) => {
        const xa = xAt(stops[i].at);
        const xb = xAt(stops[i + 1].at);
        const mid = (xa + xb) / 2;
        const lift = Math.min(20, 8 + (xb - xa) / 4);
        const colour = i === 0 ? '#818cf8' : '#34d399';
        return (
          <g key={i}>
            <path d={`M${xa} ${Y - 3} Q${mid} ${Y - 3 - lift * 1.6} ${xb} ${Y - 3}`} fill="none" stroke={colour} strokeWidth={1.6} />
            <path d={`M${xb} ${Y - 3} l-3.4 -1 l1.2 3.6Z`} fill={colour} />
            <text x={mid} y={Y - 6 - lift * 0.8 - 2} textAnchor="middle" fontSize={7} fontWeight={800} fill={colour}>{st.label}</text>
          </g>
        );
      })}
      {stops.map((st, i) => (
        <g key={i}>
          <circle cx={xAt(st.at)} cy={Y} r={2.8} fill={i === 0 ? '#818cf8' : i === stops.length - 1 ? '#34d399' : '#e2e8f0'} stroke="#0f172a" strokeWidth={0.8} />
          <text x={xAt(st.at)} y={Y + 11} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#e2e8f0" fontFamily="ui-monospace, monospace">{st.t}</text>
        </g>
      ))}
      <path d={`M${X0} ${Y + 18} v3 H${X1} v-3`} fill="none" stroke="#fde68a" strokeWidth={1.2} />
      <text x={(X0 + X1) / 2} y={Y + 33} textAnchor="middle" fontSize={8} fontWeight={800} fill="#fde68a">{formatDuration(total)}</text>
    </svg>
  );
};

export default ElapsedBar;
