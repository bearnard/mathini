/**
 * Day and night from Earth's rotation, drawn as seen from ABOVE the north pole.
 *
 * Sunlight comes from the left, so the left half of Earth is day and the right half
 * is night. Seen from above the north pole Earth spins anticlockwise, which is
 * west to east. A place on the top edge is carried from the dark side into the lit
 * side (sunrise); a place on the bottom edge is carried from light into dark (sunset).
 */

const CX = 60;
const CY = 40;
const R = 23;
const DAY = '#38bdf8';
const NIGHT = '#0b1324';

interface DayNightProps {
  className?: string;
}

const DayNight = ({ className }: DayNightProps) => (
  <svg
    viewBox="0 0 100 80"
    role="img"
    aria-labelledby="day-night-title day-night-desc"
    className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
    style={{ background: '#0f172a', fontFamily: 'inherit', maxWidth: '28rem' }}
  >
    <title id="day-night-title">Why we have day and night</title>
    <desc id="day-night-desc">
      Earth seen from above the north pole. Sunlight comes from the left, so the left half of Earth is in day and the right half is in night. Earth spins anticlockwise, towards the east. A place on the top edge turns into the light, which is sunrise. A place on the bottom edge turns into the dark, which is sunset.
    </desc>
    <defs>
      <marker id="dn-ray" markerWidth={4} markerHeight={4} refX={3} refY={2} orient="auto">
        <path d="M0,0 L4,2 L0,4 Z" fill="#fbbf24" />
      </marker>
      <marker id="dn-spin" markerWidth={4} markerHeight={4} refX={2.5} refY={2} orient="auto">
        <path d="M0,0 L4,2 L0,4 Z" fill="#f8fafc" />
      </marker>
    </defs>

    {/* Sun and its rays */}
    <circle cx={-6} cy={CY} r={17} fill="#f59e0b" />
    <circle cx={-6} cy={CY} r={21} fill="#f59e0b" opacity={0.25} />
    {[CY - 18, CY - 9, CY, CY + 9, CY + 18].map((y) => (
      <line key={y} x1={16} y1={y} x2={CX - R - 3} y2={y} stroke="#fbbf24" strokeWidth={0.7} markerEnd="url(#dn-ray)" />
    ))}
    <text x={4} y={CY - 24} fontSize={4} fill="#fbbf24" fontWeight={700}>Sun</text>

    {/* Earth: lit left half, dark right half */}
    <circle cx={CX} cy={CY} r={R} fill={NIGHT} />
    <path d={`M ${CX} ${CY - R} A ${R} ${R} 0 0 0 ${CX} ${CY + R} Z`} fill={DAY} />
    <circle cx={CX} cy={CY} r={R} fill="none" stroke="#e2e8f0" strokeWidth={0.5} />
    <text x={CX - 12} y={CY - 8} textAnchor="middle" fontSize={4.4} fill="#082f49" fontWeight={800}>Day</text>
    <text x={CX + 12} y={CY - 8} textAnchor="middle" fontSize={4.4} fill="#cbd5e1" fontWeight={800}>Night</text>

    {/* Spin: anticlockwise around the north pole (west to east) */}
    <circle cx={CX} cy={CY} r={1.1} fill="#f8fafc" />
    <path
      d={`M ${CX + 8} ${CY} A 8 8 0 1 0 ${CX} ${CY + 8}`}
      fill="none"
      stroke="#f8fafc"
      strokeWidth={1}
      markerEnd="url(#dn-spin)"
    />
    <text x={CX + 11} y={CY + 11} fontSize={3.8} fill="#f8fafc" fontWeight={700}>Spin</text>

    {/* Sunrise (top edge) and sunset (bottom edge) */}
    <circle cx={CX} cy={CY - R} r={1.6} fill="#fbbf24" stroke="#0f172a" strokeWidth={0.4} />
    <circle cx={CX} cy={CY + R} r={1.6} fill="#fb7185" stroke="#0f172a" strokeWidth={0.4} />
    <text x={CX} y={CY - R - 3.5} textAnchor="middle" fontSize={4} fill="#fde68a" fontWeight={700}>Sunrise</text>
    <text x={CX} y={CY + R + 7} textAnchor="middle" fontSize={4} fill="#fecdd3" fontWeight={700}>Sunset</text>
  </svg>
);

export default DayNight;
