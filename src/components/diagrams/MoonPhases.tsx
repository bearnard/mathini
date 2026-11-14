/**
 * Moon phases as seen from SOUTH AFRICA (southern hemisphere).
 *
 * From the south the waxing Moon is lit on the LEFT, a first quarter is the left
 * half lit, and the waning Moon is lit on the RIGHT (the opposite of most northern
 * books). The Moon orbits Earth anticlockwise when viewed from above the north pole.
 *
 * The diagram is drawn in a 100 x 100 viewBox inside a square box, so x/y in the
 * viewBox are the same as x/y as a PERCENTAGE of the box. MOON_PHASE_HOTSPOTS uses
 * that 0-100 percentage space (the centre of each phase face and its radius).
 *
 * Use showLabels={false} for "label the phases" questions: no phase name is drawn
 * and the accessible description does not give the answers away.
 */

export type MoonPhaseSlug =
  | 'new-moon'
  | 'waxing-crescent'
  | 'first-quarter'
  | 'waxing-gibbous'
  | 'full-moon'
  | 'waning-gibbous'
  | 'last-quarter'
  | 'waning-crescent';

export interface MoonPhaseInfo {
  slug: MoonPhaseSlug;
  name: string;
  /** Two short lines for the SVG label. */
  lines: [string, string];
}

/** In cycle order, starting at New Moon. */
export const MOON_PHASES: MoonPhaseInfo[] = [
  { slug: 'new-moon', name: 'New Moon', lines: ['New', 'Moon'] },
  { slug: 'waxing-crescent', name: 'Waxing Crescent', lines: ['Waxing', 'crescent'] },
  { slug: 'first-quarter', name: 'First Quarter', lines: ['First', 'quarter'] },
  { slug: 'waxing-gibbous', name: 'Waxing Gibbous', lines: ['Waxing', 'gibbous'] },
  { slug: 'full-moon', name: 'Full Moon', lines: ['Full', 'Moon'] },
  { slug: 'waning-gibbous', name: 'Waning Gibbous', lines: ['Waning', 'gibbous'] },
  { slug: 'last-quarter', name: 'Last Quarter', lines: ['Last', 'quarter'] },
  { slug: 'waning-crescent', name: 'Waning Crescent', lines: ['Waning', 'crescent'] },
];

export const CX = 50;
export const CY = 50;
const ORBIT_R = 16.5;
const RING_R = 34;
const FACE_R = 6;
const SMALL_R = 3;

/** Angle from New Moon, in radians: 0 = new, PI = full. */
const elong = (i: number) => (i * Math.PI) / 4;

/** Position on a circle of radius r for phase i. Sun is on the LEFT, so New Moon is on the left and the Moon moves anticlockwise (down first). */
export const pos = (i: number, r: number) => ({
  x: CX - r * Math.cos(elong(i)),
  y: CY + r * Math.sin(elong(i)),
});

const round = (n: number) => Math.round(n * 100) / 100;

export interface MoonPhaseHotspot {
  id: MoonPhaseSlug;
  /** Centre, as a percentage (0-100) of the diagram box. */
  x: number;
  y: number;
  /** Radius of the face, as a percentage of the box width. */
  r: number;
}

export const MOON_PHASE_HOTSPOTS: MoonPhaseHotspot[] = MOON_PHASES.map((p, i) => {
  const { x, y } = pos(i, RING_R);
  return { id: p.slug, x: round(x), y: round(y), r: FACE_R };
});

const LIT = '#fde68a';
const DARK = '#1e293b';
const EDGE = '#94a3b8';

/** One Moon disc. `index` picks the phase; lit side follows the southern-hemisphere rule. */
export function Face({ index, cx, cy, r }: { index: number; cx: number; cy: number; r: number }) {
  const th = elong(index);
  const c = Math.cos(th); // 1 new .. -1 full
  const waxing = index >= 1 && index <= 3;
  const rx = Math.abs(c) * r;
  let lit: React.ReactNode = null;
  if (index === 4) {
    lit = <circle cx={cx} cy={cy} r={r} fill={LIT} />;
  } else if (index !== 0) {
    // Waxing (lit LEFT): outer arc down the left, then terminator back up.
    // crescent: terminator bulges left (sweep 1); gibbous: bulges right (sweep 0).
    const sweep = c > 0 ? 1 : 0;
    const d = `M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} A ${rx} ${r} 0 0 ${sweep} ${cx} ${cy - r} Z`;
    lit = <path d={d} fill={LIT} transform={waxing ? undefined : `translate(${2 * cx} 0) scale(-1 1)`} />;
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={DARK} />
      {lit}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={EDGE} strokeWidth={0.4} />
    </g>
  );
}

/** Small Moon on the orbit: the half facing the Sun (left) is always lit. */
export function OrbitMoon({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={DARK} />
      <path d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} Z`} fill={LIT} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={EDGE} strokeWidth={0.35} />
    </g>
  );
}

interface MoonPhasesProps {
  /** Draw the phase names. Set false for label-the-phase questions. */
  showLabels?: boolean;
  className?: string;
}

const MoonPhases = ({ showLabels = true, className }: MoonPhasesProps) => {
  const title = showLabels
    ? 'The 8 phases of the Moon as seen from South Africa'
    : 'Diagram of the Moon in its orbit with the 8 Moon faces seen from South Africa';
  const desc = showLabels
    ? 'Sunlight comes from the left. The Moon orbits Earth, and the half facing the Sun is always lit. From South Africa a waxing Moon is lit on the left and a waning Moon is lit on the right. The order is new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, last quarter, waning crescent.'
    : 'Sunlight comes from the left. Eight Moon faces are shown around Earth in orbit order, starting at the Sun side.';

  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby="moon-phases-title moon-phases-desc"
      className={`mx-auto block aspect-square w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit', maxWidth: '28rem' }}
    >
      <title id="moon-phases-title">{title}</title>
      <desc id="moon-phases-desc">{desc}</desc>

      {/* Sunlight from the left */}
      <g stroke="#fbbf24" strokeWidth={0.5} strokeDasharray="1.6 1.6" opacity={0.35}>
        {[CY - 12, CY, CY + 12].map((y) => (
          <line key={y} x1={7} y1={y} x2={93} y2={y} />
        ))}
      </g>
      <circle cx={-5} cy={CY} r={11} fill="#f59e0b" />
      <circle cx={-5} cy={CY} r={14} fill="#f59e0b" opacity={0.25} />
      {showLabels && (
        <text x={2} y={CY - 16} fontSize={3.4} fill="#fbbf24" fontWeight={700}>Sun</text>
      )}

      {/* Orbit and Earth */}
      <circle cx={CX} cy={CY} r={ORBIT_R} fill="none" stroke="#475569" strokeWidth={0.5} strokeDasharray="1.2 1.2" />
      <circle cx={CX} cy={CY} r={5} fill="#38bdf8" />
      <circle cx={CX} cy={CY} r={5} fill="none" stroke="#e0f2fe" strokeWidth={0.4} />
      {showLabels && (
        <text x={CX} y={CY + 1.2} textAnchor="middle" fontSize={3} fill="#0c4a6e" fontWeight={700}>Earth</text>
      )}
      {MOON_PHASES.map((p, i) => {
        const o = pos(i, ORBIT_R);
        return <OrbitMoon key={p.slug} cx={o.x} cy={o.y} r={SMALL_R} />;
      })}

      {/* Faces as seen from Earth, with the name next to each */}
      {MOON_PHASES.map((p, i) => {
        const f = pos(i, RING_R);
        return (
          <g key={p.slug}>
            <Face index={i} cx={f.x} cy={f.y} r={FACE_R} />
            {showLabels && (
              <text textAnchor="middle" fontSize={3.4} fill="#e2e8f0" fontWeight={600}>
                {/* Labels sit outside the ring: above the upper half, below the lower half. */}
                {f.y < CY - 0.5 ? (
                  <>
                    <tspan x={f.x} y={f.y - FACE_R - 6.2}>{p.lines[0]}</tspan>
                    <tspan x={f.x} dy={3.8}>{p.lines[1]}</tspan>
                  </>
                ) : (
                  <>
                    <tspan x={f.x} y={f.y + FACE_R + 3.8}>{p.lines[0]}</tspan>
                    <tspan x={f.x} dy={3.8}>{p.lines[1]}</tspan>
                  </>
                )}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default MoonPhases;
