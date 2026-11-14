import { to24 } from './mathsHelpers';

/**
 * The 12-hour clock and the 24-hour clock on one face: the inner ring is 1-12, the outer ring is
 * 13-24, at the same angles, so "add 12" is just "step out to the next ring". One worked pair is
 * highlighted (2 pm is 14:00; the lesson's example is 2:30 pm = 14:30).
 */

interface ClockRingProps {
  /** The 12-hour number to highlight, as a pm hour. */
  hour12?: number;
  className?: string;
}

const C = 55;
const polar = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  // rounded: Math.sin/cos can differ in the last digit between the server and the browser (hydration)
  return { x: Math.round((C + r * Math.sin(a)) * 1000) / 1000, y: Math.round((C - r * Math.cos(a)) * 1000) / 1000 };
};

const ClockRing = ({ hour12 = 2, className }: ClockRingProps) => {
  const pm = to24(hour12, true);
  const inner = polar(27, hour12 * 30);
  const outer = polar(42, hour12 * 30);
  return (
    <svg
      viewBox="0 0 110 134"
      role="img"
      aria-label={`A clock face with two rings of numbers. The inner ring is the 12-hour clock, 1 to 12. The outer ring is the 24-hour clock, 13 to 24, at the same places. ${hour12} pm is the same place as ${pm}:00, so add 12.`}
      className={`mx-auto block w-full max-w-[18rem] rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      <circle cx={C} cy={C} r={52} fill="#f59e0b" opacity={0.22} />
      <circle cx={C} cy={C} r={35} fill="#0f172a" />
      <circle cx={C} cy={C} r={35} fill="#818cf8" opacity={0.28} />
      <circle cx={C} cy={C} r={52} fill="none" stroke="#f59e0b" strokeWidth={1} />
      <circle cx={C} cy={C} r={35} fill="none" stroke="#818cf8" strokeWidth={1} />

      {/* the worked pair */}
      <line x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="#fde68a" strokeWidth={1.6} />
      <circle cx={inner.x} cy={inner.y} r={6} fill="#fde68a" />
      <circle cx={outer.x} cy={outer.y} r={6.4} fill="#fde68a" />

      {Array.from({ length: 12 }).map((_, i) => {
        const h = i + 1;
        const a = polar(27, h * 30);
        const b = polar(42, h * 30);
        const hot = h === hour12;
        return (
          <g key={h} fontWeight={800} textAnchor="middle">
            <text x={a.x} y={a.y + 2.8} fontSize={8} fill={hot ? '#0f172a' : '#c7d2fe'}>{h}</text>
            <text x={b.x} y={b.y + 2.6} fontSize={7.2} fill={hot ? '#0f172a' : '#fcd34d'}>{h + 12}</text>
          </g>
        );
      })}
      <text x={C} y={C + 2.4} textAnchor="middle" fontSize={7} fontWeight={800} fill="#e0e7ff">+ 12</text>

      <g fontSize={6} fontWeight={700}>
        <circle cx={14} cy={116} r={2.4} fill="#818cf8" />
        <text x={20} y={118.2} fill="#e0e7ff">inner: 12-hour</text>
        <circle cx={14} cy={127} r={2.4} fill="#f59e0b" />
        <text x={20} y={129.2} fill="#fef3c7">outer: 24-hour (after 12:00)</text>
      </g>
    </svg>
  );
};

export default ClockRing;
