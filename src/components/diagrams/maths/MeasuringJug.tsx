/**
 * A measuring jug with an EVEN scale (marks every 250 ml up to 1 000 ml) and the water exactly at
 * `ml`, so the picture matches the reading in the caption.
 */

interface MeasuringJugProps {
  /** Water level in ml, 0-1000. */
  ml: number;
  className?: string;
}

const TOP = 14; // y of the 1 000 ml mark
const BOTTOM = 94; // y of the 0 ml mark
const LEFT = 36;
const RIGHT = 70;
const MARKS = [250, 500, 750, 1000];

const levelY = (ml: number) => BOTTOM - (ml / 1000) * (BOTTOM - TOP);

const MeasuringJug = ({ ml, className }: MeasuringJugProps) => {
  const y = levelY(ml);
  return (
    <svg
      viewBox="0 0 120 110"
      role="img"
      aria-label={`A measuring jug marked every 250 millilitres up to 1 000. The water is level with the ${ml} millilitre mark.`}
      className={`mx-auto block w-full max-w-[16rem] rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      {/* water, then the glass */}
      <rect x={LEFT + 1.5} y={y} width={RIGHT - LEFT - 3} height={BOTTOM - y - 1.5} fill="#67e8f9" opacity={0.85} />
      <path d={`M${LEFT - 3} ${TOP - 4} H${LEFT} V${BOTTOM - 6} Q${LEFT} ${BOTTOM} ${LEFT + 6} ${BOTTOM} H${RIGHT - 6} Q${RIGHT} ${BOTTOM} ${RIGHT} ${BOTTOM - 6} V${TOP - 4}`} fill="none" stroke="#e2e8f0" strokeWidth={2.4} strokeLinejoin="round" strokeLinecap="round" />
      {/* even scale */}
      {MARKS.map((m) => (
        <g key={m}>
          <line x1={LEFT} y1={levelY(m)} x2={LEFT + 9} y2={levelY(m)} stroke="#e2e8f0" strokeWidth={1.2} />
          <text x={LEFT - 5} y={levelY(m) + 2.4} textAnchor="end" fontSize={6.4} fontWeight={700} fill="#cbd5e1">{m}</text>
        </g>
      ))}
      <text x={LEFT - 5} y={BOTTOM + 2.4} textAnchor="end" fontSize={6.4} fontWeight={700} fill="#cbd5e1">0</text>
      <text x={LEFT - 5} y={TOP - 9} textAnchor="end" fontSize={5.2} fontWeight={700} fill="#94a3b8">ml</text>
      {/* the reading */}
      <line x1={RIGHT + 4} y1={y} x2={RIGHT + 14} y2={y} stroke="#fde68a" strokeWidth={1.6} />
      <path d={`M${RIGHT + 4} ${y} l5 -3.2 v6.4 Z`} fill="#fde68a" />
      <text x={RIGHT + 17} y={y + 2.6} fontSize={7} fontWeight={800} fill="#fde68a">{ml} ml</text>
    </svg>
  );
};

export default MeasuringJug;
