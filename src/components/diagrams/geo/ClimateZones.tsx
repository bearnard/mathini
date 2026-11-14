import { CITIES, POLAR_CIRCLE, TROPIC, latOffset, rimPoint } from './climate';

/**
 * The Earth from the side, cut into its three latitude zones, with the two cities the lesson's
 * climate graphs use placed on the rim at their real latitudes. Lines at 23.5 and 66.5 degrees.
 */

const INK = '#0f172a';
const CX = 80;
const CY = 58;
const R = 42;
const ZONES = { tropical: '#fb923c', temperate: '#4ade80', polar: '#bfdbfe' };

export const ClimateZones = () => {
  const t = latOffset(TROPIC, R);
  const p = latOffset(POLAR_CIRCLE, R);
  const cairo = rimPoint(CITIES.cairo.lat, CX, CY, R);
  const manaus = rimPoint(CITIES.manaus.lat, CX, CY, R);
  return (
    <svg
      viewBox="0 0 170 110"
      role="img"
      aria-labelledby="cz-t cz-d"
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="cz-t">Climate zones follow latitude</title>
      <desc id="cz-d">
        The Earth from the side. The tropical zone lies within 23.5 degrees of the Equator, the polar zones are beyond 66.5 degrees, and the temperate zones lie between. Manaus, a rainforest, is in the tropical zone just south of the Equator. Cairo, a hot desert, is just beyond the northern edge of the tropical zone.
      </desc>
      <clipPath id="cz-globe"><circle cx={CX} cy={CY} r={R} /></clipPath>
      <g clipPath="url(#cz-globe)">
        <rect x={CX - R} y={CY - R} width={2 * R} height={R - p} fill={ZONES.polar} />
        <rect x={CX - R} y={CY - p} width={2 * R} height={p - t} fill={ZONES.temperate} />
        <rect x={CX - R} y={CY - t} width={2 * R} height={2 * t} fill={ZONES.tropical} />
        <rect x={CX - R} y={CY + t} width={2 * R} height={p - t} fill={ZONES.temperate} />
        <rect x={CX - R} y={CY + p} width={2 * R} height={R - p} fill={ZONES.polar} />
      </g>
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#e2e8f0" strokeWidth={1.2} />
      {/* the three lines */}
      <g stroke={INK} strokeWidth={0.8} strokeDasharray="3 2" clipPath="url(#cz-globe)">
        <line x1={CX - R} y1={CY - p} x2={CX + R} y2={CY - p} />
        <line x1={CX - R} y1={CY - t} x2={CX + R} y2={CY - t} />
        <line x1={CX - R} y1={CY} x2={CX + R} y2={CY} />
        <line x1={CX - R} y1={CY + t} x2={CX + R} y2={CY + t} />
        <line x1={CX - R} y1={CY + p} x2={CX + R} y2={CY + p} />
      </g>
      <g fontSize={7.6} fontWeight={800} fill="#e2e8f0" textAnchor="end">
        <text x={CX - R + 2} y={CY - p + 2.6}>66.5°</text>
        <text x={CX - R - 3} y={CY - t + 2.6}>23.5°</text>
        <text x={CX - R - 3} y={CY + 2.6}>Equator</text>
      </g>
      {/* zone names */}
      <g fontSize={7.6} fontWeight={800} fill={INK} textAnchor="middle">
        <text x={CX} y={CY - 5}>Tropical</text>
        <text x={CX} y={CY - (p + t) / 2 + 2.6}>Temperate</text>
      </g>
      <text x={CX} y={CY - R - 3} textAnchor="middle" fontSize={7.6} fontWeight={800} fill={ZONES.polar}>Polar</text>
      {/* the two cities, on the rim at their real latitudes */}
      <g>
        <circle cx={cairo.x} cy={cairo.y} r={3} fill="#fbbf24" stroke={INK} strokeWidth={1} />
        <text x={cairo.x + 7} y={cairo.y - 1} fontSize={7.4} fontWeight={800} fill="#fbbf24">{CITIES.cairo.name}</text>
        <text x={cairo.x + 7} y={cairo.y + 7} fontSize={6.6} fontWeight={700} fill="#cbd5e1">{CITIES.cairo.climate}</text>
        <circle cx={manaus.x} cy={manaus.y} r={3} fill="#22c55e" stroke={INK} strokeWidth={1} />
        <text x={manaus.x + 7} y={manaus.y - 1} fontSize={7.4} fontWeight={800} fill="#4ade80">{CITIES.manaus.name}</text>
        <text x={manaus.x + 7} y={manaus.y + 7} fontSize={6.6} fontWeight={700} fill="#cbd5e1">{CITIES.manaus.climate}</text>
      </g>
    </svg>
  );
};
