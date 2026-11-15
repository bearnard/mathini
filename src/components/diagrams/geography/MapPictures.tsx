import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from '../science/SciencePictures';
import { DAYS, PLACES, ROUTE_A, ROUTE_B, TROPIC, crossEastToWest, groundMetres, hoursBetween, meridianRx, parallel, routeMetres } from './mapHelpers';

/**
 * Hand-made schematic maps. The neighbourhood is imaginary and every picture says so. North is up,
 * east is right. Positions and distances come from mapHelpers.ts. At most six labels each.
 */

/* ---------- an imaginary neighbourhood with a compass rose, grid and scale bar ---------- */

const U = 20; // pixels per map centimetre
const OX = 14;
const OY = 78; // y of map y = 0

const mx = (x: number) => r3(OX + x * U);
const my = (y: number) => r3(OY - y * U);

export const NeighbourhoodMap = ({ routes = false }: { routes?: boolean }) => {
  const names = ['school', 'clinic', 'shop', 'park'] as const;
  const colors = { school: '#fbbf24', clinic: '#f87171', shop: '#34d399', park: '#4ade80' };
  const a = routeMetres(ROUTE_A);
  const b = routeMetres(ROUTE_B);
  return (
    <svg viewBox="0 0 160 104" role="img" aria-labelledby="nm-t nm-d" className={cls} style={st}>
      <title id="nm-t">A map of an imaginary neighbourhood</title>
      <desc id="nm-d">{`An imaginary neighbourhood, drawn for practice. North is at the top. The clinic is east of the school. The scale bar shows 100 metres for each centimetre. ${routes ? `Route A, straight along the main road, is ${a} metres. Route B, the long way round through the shop and the park, is ${b} metres.` : ''}`}</desc>
      <rect x={OX} y={my(4)} width={6 * U} height={4 * U} fill="#14532d" opacity={0.35} />
      {[1, 2, 3, 4, 5].map((i) => <line key={`gx${i}`} x1={mx(i)} y1={my(4)} x2={mx(i)} y2={my(0)} stroke="#334155" strokeWidth={0.4} />)}
      {[1, 2, 3].map((i) => <line key={`gy${i}`} x1={mx(0)} y1={my(i)} x2={mx(6)} y2={my(i)} stroke="#334155" strokeWidth={0.4} />)}
      {/* roads */}
      <line x1={mx(0)} y1={my(3)} x2={mx(6)} y2={my(3)} stroke="#94a3b8" strokeWidth={3} />
      <line x1={mx(1.5)} y1={my(1)} x2={mx(5.5)} y2={my(1)} stroke="#94a3b8" strokeWidth={3} />
      <line x1={mx(2)} y1={my(1)} x2={mx(2)} y2={my(3)} stroke="#94a3b8" strokeWidth={3} />
      <line x1={mx(5)} y1={my(1)} x2={mx(5)} y2={my(3)} stroke="#94a3b8" strokeWidth={3} />
      {routes && (
        <>
          <polyline points={ROUTE_A.map((p) => `${mx(p.x)},${my(p.y)}`).join(' ')} fill="none" stroke="#38bdf8" strokeWidth={1.6} strokeDasharray="3 2" />
          <polyline points={ROUTE_B.map((p) => `${mx(p.x)},${my(p.y)}`).join(' ')} fill="none" stroke="#fb923c" strokeWidth={1.6} strokeDasharray="3 2" />
        </>
      )}
      {names.map((n) => (
        <g key={n}>
          <rect x={r3(mx(PLACES[n].x) - 4)} y={r3(my(PLACES[n].y) - 4)} width={8} height={8} rx={1.5} fill={colors[n]} stroke="#0f172a" strokeWidth={0.8} />
          <T x={mx(PLACES[n].x)} y={r3(my(PLACES[n].y) + (n === 'shop' || n === 'park' ? 13 : -7))} size={5} fill="#f8fafc">{PLACES[n].name}</T>
        </g>
      ))}
      {/* compass rose */}
      <g>
        <Arrow x1={150} y1={26} x2={150} y2={10} color="#f8fafc" w={1.4} />
        <T x={150} y={8} size={5.6} fill="#f8fafc">N</T>
        <line x1={143} y1={26} x2={157} y2={26} stroke={SOFT} strokeWidth={0.6} />
        <T x={141} y={28} anchor="end" size={4.4} fill={SOFT}>W</T>
        <T x={159} y={28} anchor="end" size={4.4} fill={SOFT}>E</T>
        <T x={150} y={35} size={4.4} fill={SOFT}>S</T>
      </g>
      {/* scale bar: 0, 100 m, 200 m */}
      <rect x={OX} y={92} width={U} height={3} fill="#f8fafc" />
      <rect x={OX + U} y={92} width={U} height={3} fill="#475569" />
      <T x={OX} y={101} size={4.4} fill={SOFT}>0</T>
      <T x={OX + U} y={101} size={4.4} fill={SOFT}>100 m</T>
      <T x={OX + 2 * U} y={101} size={4.4} fill={SOFT}>200 m</T>
      <T x={118} y={98} size={4.4} fill={SOFT}>imaginary place</T>
      {routes && <T x={118} y={91} size={4.4} fill="#e2e8f0">{`A ${a} m, B ${b} m`}</T>}
    </svg>
  );
};

/* ---------- a globe with latitude and longitude lines ---------- */

export const GlobeLines = () => {
  const cx = 40;
  const cy = 52;
  const R = 36;
  return (
    <svg viewBox="0 0 160 104" role="img" aria-labelledby="gb-t gb-d" className={cls} style={st}>
      <title id="gb-t">Lines of latitude and longitude on a globe</title>
      <desc id="gb-d">{`Lines of latitude run east to west, parallel to the Equator (0 degrees). The Tropic of Cancer is at ${String(TROPIC).replace('.', ',')} degrees north and the Tropic of Capricorn at ${String(TROPIC).replace('.', ',')} degrees south. Lines of longitude run from the North Pole to the South Pole. The Prime Meridian, 0 degrees, passes through Greenwich and is the starting line for longitude. This is a schematic globe.`}</desc>
      <circle cx={cx} cy={cy} r={R} fill="#0b3b66" stroke="#7dd3fc" strokeWidth={1} />
      {[-60, -30, 30, 60].map((lon) => <ellipse key={lon} cx={cx} cy={cy} rx={r3(meridianRx(lon, R))} ry={R} fill="none" stroke="#475569" strokeWidth={0.6} />)}
      <line x1={cx} y1={cy - R} x2={cx} y2={cy + R} stroke="#fbbf24" strokeWidth={1.4} />
      {[
        { lat: 0, color: '#f8fafc', w: 1.4 },
        { lat: TROPIC, color: '#fb923c', w: 1 },
        { lat: -TROPIC, color: '#fb923c', w: 1 },
      ].map((p) => {
        const g = parallel(p.lat, R);
        return <line key={p.lat} x1={r3(cx - g.halfWidth)} y1={r3(cy - g.dy)} x2={r3(cx + g.halfWidth)} y2={r3(cy - g.dy)} stroke={p.color} strokeWidth={p.w} />;
      })}
      <line x1={cx + R + 1} y1={r3(cy - parallel(TROPIC, R).dy)} x2={80} y2={r3(cy - parallel(TROPIC, R).dy)} stroke={SOFT} strokeWidth={0.4} />
      <T x={82} y={r3(cy - parallel(TROPIC, R).dy + 1.6)} anchor="start" size={4.8} fill="#fdba74">Tropic of Cancer 23,5° N</T>
      <line x1={cx + R + 1} y1={cy} x2={80} y2={cy} stroke={SOFT} strokeWidth={0.4} />
      <T x={82} y={cy + 1.6} anchor="start" size={4.8} fill="#f8fafc">Equator 0°</T>
      <line x1={cx + R + 1} y1={r3(cy + parallel(TROPIC, R).dy)} x2={80} y2={r3(cy + parallel(TROPIC, R).dy)} stroke={SOFT} strokeWidth={0.4} />
      <T x={82} y={r3(cy + parallel(TROPIC, R).dy + 1.6)} anchor="start" size={4.8} fill="#fdba74">Tropic of Capricorn 23,5° S</T>
      <T x={cx} y={cy - R - 4} size={4.8} fill="#fcd34d">Prime Meridian 0° (Greenwich)</T>
      <T x={80} y={102} size={4.4} fill={SOFT}>schematic globe: latitude lines run east to west</T>
    </svg>
  );
};

/* ---------- ratio scale ---------- */

export const RatioRuler = ({ ratio = 50000, cm = 3 }: { ratio?: number; cm?: number }) => {
  const one = groundMetres(1, ratio);
  const many = groundMetres(cm, ratio);
  const nb = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const u = 24;
  const x0 = 14;
  return (
    <svg viewBox="0 0 160 70" role="img" aria-labelledby="rr-t rr-d" className={cls} style={st}>
      <title id="rr-t">Reading a ratio scale</title>
      <desc id="rr-d">{`On a map with a ratio scale of 1 to ${nb(ratio)}, 1 centimetre on the map is ${nb(one)} metres on the ground, so ${cm} centimetres on the map is ${nb(many)} metres.`}</desc>
      <rect x={x0} y={18} width={6 * u} height={10} rx={1} fill="#e2e8f0" />
      {Array.from({ length: 7 }, (_, i) => (
        <g key={i}>
          <line x1={x0 + i * u} y1={18} x2={x0 + i * u} y2={i % 1 === 0 ? 28 : 24} stroke="#0f172a" strokeWidth={0.8} />
          {i <= 5 && <T x={x0 + i * u} y={38} size={4.8} fill={SOFT}>{`${i} cm`}</T>}
        </g>
      ))}
      <rect x={x0} y={18} width={u} height={10} fill="#38bdf8" opacity={0.7} />
      <T x={x0 + u / 2} y={12} size={4.8} fill="#7dd3fc">{`1 cm = ${nb(one)} m`}</T>
      <path d={`M${x0} 46 L${x0} 50 L${x0 + cm * u} 50 L${x0 + cm * u} 46`} fill="none" stroke="#fbbf24" strokeWidth={1} />
      <T x={x0 + (cm * u) / 2} y={58} size={5} fill="#fcd34d">{`${cm} cm = ${nb(many)} m`}</T>
      <T x={118} y={12} size={5.4} fill="#e2e8f0">{`scale 1:${nb(ratio)}`}</T>
    </svg>
  );
};

/* ---------- longitude and time ---------- */

export const TimeStrip = () => {
  const x0 = 12;
  const W = 132;
  const px = (lon: number) => r3(x0 + (lon / 90) * W);
  return (
    <svg viewBox="0 0 160 66" role="img" aria-labelledby="ts2-t ts2-d" className={cls} style={st}>
      <title id="ts2-t">Longitude and time</title>
      <desc id="ts2-d">The Earth turns 360 degrees in 24 hours, so every 15 degrees of longitude is about 1 hour. Going east from Greenwich, the time is later: 15 degrees east is 1 hour ahead, 30 degrees east is 2 hours ahead, and 90 degrees east is 6 hours ahead.</desc>
      <rect x={x0} y={22} width={W} height={8} fill="#1e3a5f" />
      {[0, 15, 30, 45, 60, 75, 90].map((lon) => (
        <line key={lon} x1={px(lon)} y1={20} x2={px(lon)} y2={32} stroke={lon % 30 === 0 ? '#f8fafc' : '#64748b'} strokeWidth={lon % 30 === 0 ? 1 : 0.6} />
      ))}
      {[0, 30, 60, 90].map((lon) => (
        <g key={lon}>
          <T x={px(lon)} y={42} size={5} fill="#e2e8f0">{`${lon}° E`}</T>
          <T x={px(lon)} y={50} size={4.8} fill="#fcd34d">{`+${hoursBetween(0, lon)} h`}</T>
        </g>
      ))}
      <T x={px(7.5)} y={16} size={4.8} fill="#7dd3fc">15° = 1 hour</T>
      <T x={80} y={62} size={4.4} fill={SOFT}>time is later towards the east (Greenwich at 0°)</T>
    </svg>
  );
};

/* ---------- the International Date Line ---------- */

export const DateLine = ({ start = 'Monday' as (typeof DAYS)[number] }) => {
  const after = crossEastToWest(start);
  return (
    <svg viewBox="0 0 160 66" role="img" aria-labelledby="dl-t dl-d" className={cls} style={st}>
      <title id="dl-t">Crossing the International Date Line</title>
      <desc id="dl-d">{`Travelling from east to west across the International Date Line, the date moves forward one day: ${start} becomes ${after}. Crossing from west to east, it moves back one day. This is a schematic strip.`}</desc>
      <rect x={6} y={14} width={72} height={30} fill="#1e3a5f" />
      <rect x={82} y={14} width={72} height={30} fill="#1e3a5f" />
      <line x1={80} y1={8} x2={80} y2={50} stroke="#fbbf24" strokeWidth={1.4} strokeDasharray="3 2" />
      <T x={80} y={6} size={4.8} fill="#fcd34d">International Date Line</T>
      <T x={42} y={32} size={7} fill="#6ee7b7">{after}</T>
      <T x={118} y={32} size={7} fill="#7dd3fc">{start}</T>
      <T x={42} y={41} size={4.4} fill={SOFT}>west side</T>
      <T x={118} y={41} size={4.4} fill={SOFT}>east side</T>
      <Arrow x1={134} y1={55} x2={26} y2={55} color="#fb923c" w={1.4} />
      <T x={80} y={64} size={4.8} fill="#fdba74">east to west: add one day</T>
    </svg>
  );
};
