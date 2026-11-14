/**
 * Latitude and longitude, two views.
 *
 * LatLongGlobe: a globe with the Equator (0 deg latitude), the Prime Meridian
 * (0 deg longitude), the two hemispheres shaded, and the compass letters. A dot marks
 * South Africa's side of the globe (it is south of the Equator and east of Greenwich).
 *
 * LatLongGrid: a flat grid of southern Africa with ONE worked point, Johannesburg at
 * about 26 deg S, 28 deg E (infobox: 26 deg 12' 16" S, 28 deg 2' 44" E, from
 * https://en.wikipedia.org/wiki/Johannesburg, rounded to whole degrees). Lines of
 * latitude run east-west; their numbers climb north-south.
 */

const LAT = '#38bdf8'; // latitude lines: sky
const LON = '#c084fc'; // longitude lines: purple
const GOLD = '#fbbf24';

/* ---------- Globe ---------- */

const GR = 36; // globe radius
const GX = 50;
const GY = 50;
const TILT = (15 * Math.PI) / 180; // we look from 15 deg north of the equator

/** Orthographic projection centred on lon 0, seen from latitude TILT. */
const proj = (latDeg: number, lonDeg: number) => {
  const p = (latDeg * Math.PI) / 180;
  const l = (lonDeg * Math.PI) / 180;
  const x = GX + GR * Math.cos(p) * Math.sin(l);
  const y = GY - GR * (Math.sin(p) * Math.cos(TILT) - Math.cos(p) * Math.cos(l) * Math.sin(TILT));
  const visible = Math.sin(TILT) * Math.sin(p) + Math.cos(TILT) * Math.cos(p) * Math.cos(l) > 0;
  return { x, y, visible };
};

/** Polyline path for the visible part of a line sampled over lat/lon. */
const line = (pts: [number, number][]) => {
  let d = '';
  let pen = false;
  for (const [la, lo] of pts) {
    const q = proj(la, lo);
    if (!q.visible) {
      pen = false;
      continue;
    }
    d += `${pen ? 'L' : 'M'}${q.x.toFixed(2)} ${q.y.toFixed(2)} `;
    pen = true;
  }
  return d;
};
const range = (a: number, b: number, n: number) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
// stop just short of the edge so lines do not poke out past the globe's outline
const parallel = (lat: number) => line(range(-89, 89, 72).map((lo) => [lat, lo] as [number, number]));
const meridian = (lon: number) => line(range(-90, 90, 72).map((la) => [la, lon] as [number, number]));

interface DiagramProps {
  className?: string;
}

export const LatLongGlobe = ({ className }: DiagramProps) => {
  const sa = proj(-26, 28);
  const origin = proj(0, 0);
  const north = proj(90, 0);
  const eqY = GY + GR * Math.sin(TILT); // lowest point of the equator on the front
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby="ll-globe-title ll-globe-desc"
      className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit', maxWidth: '28rem' }}
    >
      <title id="ll-globe-title">A globe with the Equator and the Prime Meridian</title>
      <desc id="ll-globe-desc">
        A globe. The Equator is the line around the middle, 0 degrees latitude, and divides the north half from the south half. The Prime Meridian runs from the North Pole to the South Pole through Greenwich, 0 degrees longitude. A gold dot shows where South Africa is: south of the Equator and east of the Prime Meridian.
      </desc>
      <circle cx={GX} cy={GY} r={GR} fill="#1e3a5f" />
      {/* southern half, a darker blue */}
      <path
        d={`M${GX - GR} ${GY} A${GR} ${GR * Math.sin(TILT)} 0 0 0 ${GX + GR} ${GY} A${GR} ${GR} 0 0 1 ${GX - GR} ${GY}Z`}
        fill="#0b2545"
      />
      {/* faint lines of latitude (sky) and longitude (purple) */}
      <g fill="none" strokeWidth={0.5} opacity={0.45}>
        {[-60, -30, 30, 60].map((la) => (
          <path key={la} d={parallel(la)} stroke={LAT} />
        ))}
        {[-60, -30, 30, 60].map((lo) => (
          <path key={lo} d={meridian(lo)} stroke={LON} />
        ))}
      </g>
      {/* the two lines that matter */}
      <path d={parallel(0)} fill="none" stroke={LAT} strokeWidth={1.6} />
      <path d={meridian(0)} fill="none" stroke={LON} strokeWidth={1.6} />
      <circle cx={GX} cy={GY} r={GR} fill="none" stroke="#e2e8f0" strokeWidth={0.5} />
      <circle cx={origin.x} cy={origin.y} r={1.5} fill="#fff" />
      <circle cx={north.x} cy={north.y} r={1} fill="#fff" />

      {/* South Africa */}
      <circle cx={sa.x} cy={sa.y} r={2.4} fill={GOLD} stroke="#0f172a" strokeWidth={0.6} />

      {/* labels */}
      <text x={32} y={eqY + 7.5} textAnchor="middle" fontSize={4.2} fill={LAT} fontWeight={800}>Equator</text>
      <text transform={`translate(${GX - 2.5} 33) rotate(-90)`} textAnchor="middle" fontSize={4} fill={LON} fontWeight={800}>Prime Meridian</text>
      <g fontSize={5} fill="#e2e8f0" fontWeight={800} textAnchor="middle">
        <text x={GX} y={8.5}>N</text>
        <text x={GX} y={96}>S</text>
        <text x={6} y={GY + 1.8}>W</text>
        <text x={94} y={GY + 1.8}>E</text>
      </g>
    </svg>
  );
};

/* ---------- Grid with a worked point ---------- */

const X0 = 30; // grid left (0 deg E)
const Y0 = 14; // grid top (0 deg, the Equator)
const STEP = 16.5; // units per 10 degrees
const CITY = { lat: 26, lon: 28, name: 'Johannesburg' };

export const LatLongGrid = ({ className }: DiagramProps) => {
  const cx = X0 + (CITY.lon / 10) * STEP;
  const cy = Y0 + (CITY.lat / 10) * STEP;
  const right = X0 + 4 * STEP;
  const bottom = Y0 + 4 * STEP;
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby="ll-grid-title ll-grid-desc"
      className={`mx-auto block aspect-square w-full rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit', maxWidth: '28rem' }}
    >
      <title id="ll-grid-title">Finding Johannesburg with latitude and longitude</title>
      <desc id="ll-grid-desc">
        A grid with lines of latitude running east to west and lines of longitude running north to south. The top line is the Equator at 0 degrees. The left line is the Prime Meridian at 0 degrees. Johannesburg is about 26 degrees south of the Equator and about 28 degrees east of the Prime Meridian. The latitude numbers get bigger as you go south.
      </desc>
      <defs>
        <marker id="ll-arrow" markerWidth={3.4} markerHeight={3.4} refX={1.7} refY={1.7} orient="auto-start-reverse">
          <path d="M0,0 L3.4,1.7 L0,3.4Z" fill={GOLD} />
        </marker>
        <marker id="ll-south" markerWidth={3.4} markerHeight={3.4} refX={1.7} refY={1.7} orient="auto">
          <path d="M0,0 L3.4,1.7 L0,3.4Z" fill="#e2e8f0" />
        </marker>
        <marker id="ll-east" markerWidth={3.4} markerHeight={3.4} refX={1.7} refY={1.7} orient="auto">
          <path d="M0,0 L3.4,1.7 L0,3.4Z" fill={GOLD} />
        </marker>
      </defs>

      {/* lines of latitude (east-west) and longitude (north-south) */}
      {[0, 1, 2, 3, 4].map((k) => (
        <line key={`la${k}`} x1={X0} x2={right} y1={Y0 + k * STEP} y2={Y0 + k * STEP} stroke={LAT} strokeWidth={k === 0 ? 1.6 : 0.5} opacity={k === 0 ? 1 : 0.4} />
      ))}
      {[0, 1, 2, 3, 4].map((k) => (
        <line key={`lo${k}`} y1={Y0} y2={bottom} x1={X0 + k * STEP} x2={X0 + k * STEP} stroke={LON} strokeWidth={k === 0 ? 1.6 : 0.5} opacity={k === 0 ? 1 : 0.4} />
      ))}

      {/* Johannesburg's own two lines: the latitude line runs east-west */}
      <line x1={X0 + 3} x2={right - 3} y1={cy} y2={cy} stroke={GOLD} strokeWidth={1.2} strokeDasharray="2.4 1.6" markerStart="url(#ll-arrow)" markerEnd="url(#ll-arrow)" />
      <line x1={cx} x2={cx} y1={Y0} y2={bottom} stroke={GOLD} strokeWidth={1.2} strokeDasharray="2.4 1.6" />
      <circle cx={cx} cy={cy} r={2.6} fill={GOLD} stroke="#0f172a" strokeWidth={0.7} />
      <text x={cx - 4} y={cy - 4} textAnchor="end" fontSize={4} fill={GOLD} fontWeight={800}>{CITY.name}</text>

      {/* the numbers are measured from the Equator (south, down the side) and from the Prime Meridian (east, along the bottom) */}
      <path d={`M${X0 - 14} ${Y0 + 1.5} L${X0 - 14} ${cy - 1}`} stroke="#e2e8f0" strokeWidth={1} markerEnd="url(#ll-south)" />
      <text textAnchor="end" fontSize={4} fill={GOLD} fontWeight={800}>
        <tspan x={X0 - 17} y={(Y0 + cy) / 2 - 1.4} fontSize={3.2} fill="#94a3b8" fontWeight={600}>about</tspan>
        <tspan x={X0 - 17} dy={4.6} fill={GOLD}>26°S</tspan>
      </text>
      <path d={`M${X0 + 1.5} ${bottom + 4.5} L${cx - 1} ${bottom + 4.5}`} stroke={GOLD} strokeWidth={1} markerEnd="url(#ll-east)" />
      <text textAnchor="middle" fontSize={4} fill={GOLD} fontWeight={800}>
        <tspan x={(X0 + cx) / 2} y={bottom + 10.5} fontSize={3.2} fill="#94a3b8" fontWeight={600}>about</tspan>
        <tspan x={(X0 + cx) / 2} dy={4.4}>28°E</tspan>
      </text>

      <text x={X0} y={Y0 - 3.5} fontSize={4} fill={LAT} fontWeight={800}>Equator 0°</text>
      <text transform={`translate(${X0 - 2.6} ${bottom - 1.5}) rotate(-90)`} fontSize={3.8} fill={LON} fontWeight={800}>Prime Meridian 0°</text>
      <g fill="#e2e8f0" fontWeight={800} textAnchor="middle">
        <text x={9} y={8} fontSize={5}>N</text>
        <path d="M9 24 L9 11.5" stroke="#e2e8f0" strokeWidth={1} markerEnd="url(#ll-south)" />
      </g>
    </svg>
  );
};
