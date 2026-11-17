import { r3 } from '../round';
import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';
import { POINTS16, bearingText, groundMetres, metresText, routeCm, dmText, gridSquareKm2 } from './mapwork';

/**
 * Grade 12 Geography mapwork pictures (a line scale, a measured route, a grid of 1 km squares, a bearing on a compass rose, true and magnetic north).
 * Everything drawn and every label comes from the arguments through mapwork.ts, so a picture always matches the worked example it sits above.
 */
const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;

const T = ({ x, y, children, color = LINE, size = 4.4, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/** A line scale for the scale 1:denominator: `cm` centimetres on the map, a tick at every centimetre, labelled with the ground distance. */
export const ScaleBar = ({ denominator, cm }: { denominator: number; cm: number }) => {
  const w = 96 / cm;
  const ticks = Array.from({ length: cm + 1 }, (_, i) => i);
  return (
    <Panel h={34} aria={`A line scale for 1:${denominator}. ${cm} centimetres on the map are marked, and each centimetre stands for ${metresText(groundMetres(1, denominator))} on the ground, so the whole line is ${metresText(groundMetres(cm, denominator))}.`}>
      <T x={60} y={9} size={4.6}>{`Scale 1:${String(denominator).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`}</T>
      <rect x={12} y={15} width={96} height={3} fill={LINE} />
      {ticks.map((i) => (
        <g key={i}>
          <line x1={r3(12 + i * w)} y1={13} x2={r3(12 + i * w)} y2={20} stroke={LINE} strokeWidth={0.6} />
          <T x={12 + i * w} y={27} size={3.8}>{i === 0 ? '0' : metresText(groundMetres(i, denominator)).replace(' km', '').replace(' m', '')}</T>
        </g>
      ))}
      <T x={108} y={32.5} anchor="end" color={MUTED} size={3.4}>{groundMetres(cm, denominator) >= 1000 ? 'kilometres' : 'metres'}</T>
    </Panel>
  );
};

/** A route between two points measured in straight pieces of the given lengths (cm on the map), with the ground distance of the whole route. */
export const MapRoute = ({ pieces, denominator }: { pieces: number[]; denominator: number }) => {
  const total = routeCm(pieces);
  const pts: [number, number][] = [[16, 40]];
  // the horizontal reach of each piece is in proportion to its length, so a longer piece is drawn longer
  let run = 0;
  pieces.forEach((len, i) => {
    run += len;
    pts.push([16 + (run / total) * 88, 40 - Math.sin((i + 1) * 1.9) * 16 - (i % 2) * 4]);
  });
  return (
    <Panel h={62} aria={`A route from A to B on a map at 1:${denominator}, measured in ${pieces.length} straight pieces of ${pieces.map((p) => String(p).replace('.', ',')).join(' cm, ')} cm. The route is ${String(total).replace('.', ',')} cm on the map, which is ${metresText(groundMetres(total, denominator))} on the ground.`}>
      <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke={I} strokeWidth={1.2} strokeLinejoin="round" />
      {pts.slice(0, -1).map((p, i) => (
        <T key={i} x={(p[0] + pts[i + 1][0]) / 2} y={(p[1] + pts[i + 1][1]) / 2 - 3} size={3.8} color={A}>{`${String(pieces[i]).replace('.', ',')} cm`}</T>
      ))}
      <circle cx={pts[0][0]} cy={pts[0][1]} r={2.4} fill={E} />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r={2.4} fill={R} />
      <T x={pts[0][0]} y={pts[0][1] + 9} size={4.2}>A</T>
      <T x={pts[pts.length - 1][0]} y={pts[pts.length - 1][1] + 9} size={4.2}>B</T>
      <T x={60} y={58} size={4} color={LINE}>{`${String(total).replace('.', ',')} cm × ${String(denominator).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} = ${metresText(groundMetres(total, denominator))}`}</T>
    </Panel>
  );
};

/** A grid of squares, each side `kmPerSquare` km (the 2 cm squares of a 1:50 000 map are 1 km), with a shaded rectangle of cols x rows squares. */
export const GridArea = ({ cols, rows, shadeCols, shadeRows, denominator = 50000 }: { cols: number; rows: number; shadeCols: number; shadeRows: number; denominator?: number }) => {
  const size = Math.min(10, 84 / cols, 40 / rows);
  const x0 = 60 - (cols * size) / 2;
  const y0 = 8;
  const km = Math.sqrt(gridSquareKm2(denominator));
  const lengthKm = shadeCols * km;
  const breadthKm = shadeRows * km;
  return (
    <Panel h={r3(y0 + rows * size + 16)} aria={`A map grid at 1:${denominator}. Each square is ${String(km).replace('.', ',')} km by ${String(km).replace('.', ',')} km. A shaded area covers ${shadeCols} squares across and ${shadeRows} down, which is ${String(lengthKm).replace('.', ',')} km by ${String(breadthKm).replace('.', ',')} km.`}>
      {Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => (
        <rect key={`${r}-${c}`} x={r3(x0 + c * size)} y={r3(y0 + r * size)} width={size} height={size} fill={c < shadeCols && r < shadeRows ? 'rgba(129,140,248,0.45)' : 'none'} stroke={MUTED} strokeWidth={0.4} />
      )))}
      <T x={x0 + (shadeCols * size) / 2} y={y0 + rows * size + 6} size={4}>{`${String(lengthKm).replace('.', ',')} km`}</T>
      <T x={x0 - 3} y={y0 + (shadeRows * size) / 2 + 1.4} anchor="end" size={4}>{`${String(breadthKm).replace('.', ',')} km`}</T>
      <T x={60} y={y0 + rows * size + 13} size={3.8} color={MUTED}>{`each square: ${String(km).replace('.', ',')} km × ${String(km).replace('.', ',')} km`}</T>
    </Panel>
  );
};

/** A compass rose with the 16 points and an arrow for a bearing (clockwise from north), labelled with the bearing and the nearest point. */
export const BearingRose = ({ bearing, label }: { bearing: number; label?: string }) => {
  const cx = 60;
  const cy = 38;
  const r = 24;
  const at = (deg: number, rr: number): [number, number] => [r3(cx + rr * Math.sin((deg * Math.PI) / 180)), r3(cy - rr * Math.cos((deg * Math.PI) / 180))];
  const [ax, ay] = at(bearing, r - 2);
  return (
    <Panel h={76} aria={`A compass rose with the 16 compass points. An arrow points at a bearing of ${bearingText(bearing)}, measured clockwise from north.${label ? ` ${label}` : ''}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={MUTED} strokeWidth={0.5} />
      {POINTS16.map((p, i) => {
        const [x1, y1] = at(i * 22.5, r);
        const [x2, y2] = at(i * 22.5, r - (i % 2 === 0 ? 4 : 2));
        const [tx, ty] = at(i * 22.5, r + (i % 4 === 0 ? 5 : 4.2));
        return (
          <g key={p}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={MUTED} strokeWidth={0.5} />
            {i % 2 === 0 ? <T x={tx} y={ty + 1.4} size={i % 4 === 0 ? 4.4 : 3.2} color={i === 0 ? R : LINE}>{p}</T> : null}
          </g>
        );
      })}
      <line x1={cx} y1={cy} x2={ax} y2={ay} stroke={A} strokeWidth={1.2} />
      <circle cx={ax} cy={ay} r={1.6} fill={A} />
      <circle cx={cx} cy={cy} r={1.6} fill={INK} stroke={LINE} strokeWidth={0.5} />
      <T x={60} y={74} size={5} color={A}>{`bearing ${bearingText(bearing)}`}</T>
    </Panel>
  );
};

/** True north, magnetic north (west of true north by the declination) and a line at a true bearing, with the magnetic bearing of the same line. */
export const DeclinationDiagram = ({ declination, trueBearing, magneticBearing }: { declination: number; trueBearing: number; magneticBearing: number }) => {
  const cx = 60;
  const cy = 58;
  const L = 44;
  const at = (deg: number): [number, number] => [r3(cx + L * Math.sin((deg * Math.PI) / 180)), r3(cy - L * Math.cos((deg * Math.PI) / 180))];
  const [mx, my] = at(-declination);
  const [tx, ty] = at(0);
  const [fx, fy] = at(trueBearing);
  return (
    <Panel h={70} aria={`True north points straight up. Magnetic north lies ${dmText(declination)} west of true north, to the left. A line to a feature has a true bearing of ${bearingText(trueBearing)} measured from true north, and a magnetic bearing of ${bearingText(magneticBearing)} measured from magnetic north, which is larger by the declination.`}>
      <line x1={cx} y1={cy} x2={tx} y2={ty} stroke={LINE} strokeWidth={0.9} />
      <line x1={cx} y1={cy} x2={mx} y2={my} stroke={R} strokeWidth={0.9} strokeDasharray="2.4 1.6" />
      <line x1={cx} y1={cy} x2={fx} y2={fy} stroke={A} strokeWidth={1.1} />
      <T x={tx + 2} y={ty - 1} anchor="start" size={4.2}>True N</T>
      <T x={mx - 2} y={my - 1} anchor="end" size={4.2} color={R}>Magnetic N</T>
      <T x={fx + 2} y={fy + 2} anchor="start" size={4.2} color={A}>feature</T>
      <T x={60} y={67} size={3.8} color={MUTED}>{`declination ${dmText(declination)} W`}</T>
    </Panel>
  );
};

/** A hill drawn with contour lines: closed rings, closer together on the steep side (left) and further apart on the gentle side (right). Heights label the rings. */
export const ContourHill = ({ baseM, interval, rings }: { baseM: number; interval: number; rings: number }) => {
  const cy = 34;
  const ellipses = Array.from({ length: rings }, (_, i) => {
    const left = 12 + i * 5; // close together on the steep (left) side
    const right = 108 - i * 14; // far apart on the gentle (right) side
    return { height: baseM + i * interval, left, right, ry: 24 - i * 5 };
  });
  return (
    <Panel h={76} aria={`A hill drawn with ${rings} contour lines from ${baseM} m upwards, ${interval} m apart. The lines are close together on the left, which is the steep side, and further apart on the right, which is the gentle side.`}>
      {ellipses.map((e, i) => (
        <g key={e.height}>
          <ellipse cx={r3((e.left + e.right) / 2)} cy={cy} rx={r3((e.right - e.left) / 2)} ry={e.ry} fill="none" stroke={i === rings - 1 ? A : I} strokeWidth={0.8} />
          <T x={e.right - 2} y={cy + 1.4} size={3.6} anchor="end" color={LINE}>{`${e.height}`}</T>
        </g>
      ))}
      <T x={14} y={72} size={3.8} color={R} anchor="start">steep: lines close</T>
      <T x={108} y={72} size={3.8} color={E} anchor="end">gentle: lines far apart</T>
    </Panel>
  );
};

/** The right-angled triangle behind a gradient: the vertical interval, the horizontal distance and the gradient 1:x. */
export const GradientTriangle = ({ verticalM, horizontalM }: { verticalM: number; horizontalM: number }) => {
  const x = horizontalM / verticalM;
  return (
    <Panel h={58} aria={`A right-angled triangle. The vertical interval is ${verticalM} m and the horizontal distance is ${horizontalM} m, so the gradient is 1:${String(x).replace('.', ',')}.`}>
      <polygon points="14,48 100,48 100,14" fill="rgba(129,140,248,0.2)" stroke={I} strokeWidth={0.9} />
      <T x={57} y={55} size={4.2}>{`horizontal distance ${horizontalM} m`}</T>
      <T x={104} y={33} size={4.2} anchor="start" color={A}>{`${verticalM} m`}</T>
      <T x={104} y={38.5} size={3.4} anchor="start" color={MUTED}>vertical</T>
      <T x={50} y={26} size={4.6} color={E}>{`gradient 1:${String(x).replace('.', ',')}`}</T>
    </Panel>
  );
};

/** A cross-section: heights at equal steps from A to B. With `sight`, the straight line of sight from A to B is drawn and the first point that blocks it is marked. */
export const ProfileChart = ({ heights, sight = false, verticalNote }: { heights: number[]; sight?: boolean; verticalNote?: string }) => {
  const min = Math.min(...heights) - 20;
  const max = Math.max(...heights) + 20;
  const n = heights.length - 1;
  const X = (i: number) => r3(16 + (i / n) * 88);
  const Y = (h: number) => r3(52 - ((h - min) / (max - min)) * 38);
  let block = -1;
  for (let i = 1; i < n; i++) if (heights[i] >= heights[0] + ((heights[n] - heights[0]) * i) / n) { block = i; break; }
  return (
    <Panel h={70} aria={`A cross-section from A to B with heights ${heights.join(', ')} metres at equal steps.${sight ? (block >= 0 ? ` The straight line of sight from A to B is blocked by the point of ${heights[block]} m.` : ' The straight line of sight from A to B passes above every point between them.') : ''}${verticalNote ? ` ${verticalNote}` : ''}`}>
      <polygon points={`${X(0)},${Y(min)} ${heights.map((h, i) => `${X(i)},${Y(h)}`).join(' ')} ${X(n)},${Y(min)}`} fill="rgba(74,222,128,0.18)" stroke={E} strokeWidth={0.9} />
      {sight ? <line x1={X(0)} y1={Y(heights[0])} x2={X(n)} y2={Y(heights[n])} stroke={A} strokeWidth={0.9} strokeDasharray="2.5 1.6" /> : null}
      {block >= 0 && sight ? <circle cx={X(block)} cy={Y(heights[block])} r={2} fill={R} /> : null}
      {heights.map((h, i) => <T key={i} x={X(i)} y={Y(h) - 2.4} size={3.6}>{String(h)}</T>)}
      <T x={X(0)} y={Y(min) + 6} size={4.2}>A</T>
      <T x={X(n)} y={Y(min) + 6} size={4.2}>B</T>
      {verticalNote ? <T x={60} y={67} size={3.6} color={MUTED}>{verticalNote}</T> : null}
    </Panel>
  );
};

/** A vertical photograph (camera pointing straight down) next to an oblique one (camera tilted, the horizon shows). */
export const AerialTypes = () => (
  <Panel h={64} aria="Two aerial photographs. For a vertical photograph the camera looks straight down from the aircraft and the view is a plan of the ground. For an oblique photograph the camera is tilted, the horizon shows, and the sides of buildings and hills can be seen.">
    <polygon points="14,12 22,12 18,16" fill={LINE} />
    <line x1={18} y1={16} x2={10} y2={46} stroke={A} strokeWidth={0.6} strokeDasharray="2 1.4" />
    <line x1={18} y1={16} x2={26} y2={46} stroke={A} strokeWidth={0.6} strokeDasharray="2 1.4" />
    <rect x={6} y={46} width={24} height={6} fill="rgba(74,222,128,0.35)" stroke={E} strokeWidth={0.5} />
    <T x={18} y={60} size={4.2}>Vertical</T>
    <polygon points="74,12 82,12 78,16" fill={LINE} />
    <line x1={78} y1={16} x2={62} y2={50} stroke={A} strokeWidth={0.6} strokeDasharray="2 1.4" />
    <line x1={78} y1={16} x2={108} y2={34} stroke={A} strokeWidth={0.6} strokeDasharray="2 1.4" />
    <polygon points="56,52 112,52 112,34 62,34" fill="rgba(74,222,128,0.35)" stroke={E} strokeWidth={0.5} />
    <T x={84} y={60} size={4.2}>Oblique</T>
  </Panel>
);

/** GIS layers stacked like sheets of tracing paper: each layer holds one kind of data and they line up over the same area. */
export const GisLayers = ({ layers }: { layers: string[] }) => {
  const colors = [E, I, A, R, '#38bdf8'];
  const h = 14 + layers.length * 13 + 8;
  return (
    <Panel h={h} aria={`A stack of ${layers.length} layers of the same area, like sheets of tracing paper: ${layers.join(', ')}. A GIS lines the layers up so that they can be combined.`}>
      {layers.map((name, i) => {
        const y = 8 + i * 13;
        const c = colors[i % colors.length];
        return (
          <g key={name}>
            <polygon points={`22,${y + 10} 40,${y} 98,${y} 80,${y + 10}`} fill="rgba(148,163,184,0.12)" stroke={c} strokeWidth={0.8} />
            <T x={110} y={y + 6.5} size={4} anchor="end" color={c}>{name}</T>
          </g>
        );
      })}
    </Panel>
  );
};

/** A raster as a grid of cells with some cells shaded (the feature), and the area those cells cover on the ground. */
export const RasterGrid = ({ cols, rows, shaded, cellM }: { cols: number; rows: number; shaded: number; cellM: number }) => {
  const size = Math.min(8, 80 / cols, 36 / rows);
  const x0 = 60 - (cols * size) / 2;
  const y0 = 7;
  return (
    <Panel h={r3(y0 + rows * size + 16)} aria={`A raster grid of ${cols} by ${rows} cells, each ${cellM} m by ${cellM} m. ${shaded} cells are shaded to show a feature. Each cell covers ${cellM * cellM} square metres of ground.`}>
      {Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => {
        const idx = r * cols + c;
        return <rect key={idx} x={r3(x0 + c * size)} y={r3(y0 + r * size)} width={size} height={size} fill={idx < shaded ? 'rgba(74,222,128,0.5)' : 'none'} stroke={MUTED} strokeWidth={0.4} />;
      }))}
      <T x={60} y={y0 + rows * size + 7} size={4}>{`${shaded} shaded cells, each ${cellM} m × ${cellM} m`}</T>
      <T x={60} y={y0 + rows * size + 13} size={3.6} color={MUTED}>{`one cell = ${(cellM * cellM).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} m²`}</T>
    </Panel>
  );
};

/** A river as a line with a buffer strip of the given width on both sides. */
export const BufferDiagram = ({ bufferM, lengthM }: { bufferM: number; lengthM: number }) => (
  <Panel h={52} aria={`A river drawn as a line ${lengthM} metres long with a buffer of ${bufferM} metres on each side, so the buffer zone is ${2 * bufferM} metres wide.`}>
    <rect x={10} y={14} width={100} height={26} fill="rgba(129,140,248,0.25)" stroke={I} strokeWidth={0.6} strokeDasharray="2 1.4" />
    <line x1={10} y1={27} x2={110} y2={27} stroke="#38bdf8" strokeWidth={1.8} />
    <T x={60} y={11} size={3.8} color={LINE}>{`buffer ${bufferM} m each side`}</T>
    <T x={60} y={49} size={3.8} color={MUTED}>{`river ${lengthM.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} m long; buffer ${2 * bufferM} m wide`}</T>
  </Panel>
);

/** A small latitude and longitude grid with a point: the labels are whole degrees, the point is at the given degrees and minutes (south and east). */
export const LatLongGrid = ({ latDeg, latMin, lonDeg, lonMin }: { latDeg: number; latMin: number; lonDeg: number; lonMin: number }) => {
  const lat = latDeg + latMin / 60;
  const lon = lonDeg + lonMin / 60;
  const X = (l: number) => r3(24 + (l - lonDeg) * 60);
  const Y = (l: number) => r3(14 + (l - latDeg) * 30);
  return (
    <Panel h={62} aria={`A grid of latitude and longitude lines. A point lies at ${latDeg} degrees ${latMin} minutes south and ${lonDeg} degrees ${lonMin} minutes east, which is ${String(lat).replace('.', ',')} degrees south and ${String(lon).replace('.', ',')} degrees east.`}>
      {[0, 1].map((i) => <line key={`v${i}`} x1={X(lonDeg + i)} y1={10} x2={X(lonDeg + i)} y2={54} stroke={MUTED} strokeWidth={0.5} />)}
      {[0, 1].map((i) => <line key={`h${i}`} x1={18} y1={Y(latDeg + i)} x2={102} y2={Y(latDeg + i)} stroke={MUTED} strokeWidth={0.5} />)}
      <T x={X(lonDeg)} y={8} size={3.8}>{`${lonDeg}°E`}</T>
      <T x={X(lonDeg + 1)} y={8} size={3.8}>{`${lonDeg + 1}°E`}</T>
      <T x={16} y={Y(latDeg) + 1.4} anchor="end" size={3.8}>{`${latDeg}°S`}</T>
      <T x={16} y={Y(latDeg + 1) + 1.4} anchor="end" size={3.8}>{`${latDeg + 1}°S`}</T>
      <circle cx={X(lon)} cy={Y(lat)} r={2.2} fill={A} />
      <T x={X(lon) + 4} y={Y(lat) + 1.4} anchor="start" size={3.8} color={A}>{`${latDeg}°${String(latMin).padStart(2, '0')}'S ${lonDeg}°${String(lonMin).padStart(2, '0')}'E`}</T>
    </Panel>
  );
};
