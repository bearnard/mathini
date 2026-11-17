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
