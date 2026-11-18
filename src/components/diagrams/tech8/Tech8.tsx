import { r3 } from '../round';
import { dimensionLabel, forceIn, isometric, kingPostTruss, scaleDown, toppleAngle } from './tech8Helpers';

/** Pictures for the Grade 8 Technology lessons. Every coordinate and number comes from tech8Helpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const SKY = '#38bdf8';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);

/** The four line types used in technical drawing. */
export const LineTypesPicture = () => (
  <Panel h={58} aria="The four line types of a technical drawing. Outlines are thick dark lines. Construction lines are thin feint lines. Hidden detail is shown with dashed lines. Centre lines are chain lines made of long dashes and dots.">
    <line x1={8} y1={10} x2={64} y2={10} stroke={LINE} strokeWidth={2.2} />
    <line x1={8} y1={22} x2={64} y2={22} stroke={MUTED} strokeWidth={0.4} />
    <line x1={8} y1={34} x2={64} y2={34} stroke={LINE} strokeWidth={0.9} strokeDasharray="3 2" />
    <line x1={8} y1={46} x2={64} y2={46} stroke={LINE} strokeWidth={0.7} strokeDasharray="8 2 1.5 2" />
    <T x={70} y={11.4} size={3.8} anchor="start" fill={AMBER}>outline: thick, dark</T>
    <T x={70} y={23.4} size={3.8} anchor="start" fill={SKY}>construction: thin, feint</T>
    <T x={70} y={35.4} size={3.8} anchor="start" fill={GREEN}>hidden detail: dashed</T>
    <T x={70} y={47.4} size={3.8} anchor="start" fill={ROSE}>centre line: chain (dash-dot)</T>
  </Panel>
);

/** The same part drawn full size and at 1:n, with the dimension written in mm (the real size). */
export const ScalePicture = ({ realMm, n }: { realMm: number; n: number }) => {
  const small = scaleDown(realMm, n);
  const k = 0.18;
  const w1 = r3(realMm * k), w2 = r3(small * k);
  return (
    <Panel h={58} aria={`A part that is ${realMm} millimetres long. Drawn at a scale of 1 to ${n}, the line on the drawing is ${small} millimetres long. The dimension written on the drawing is still ${realMm} millimetres, the real size.`}>
      <T x={60} y={8} size={4.2} fill={AMBER}>{`scale 1:${n}`}</T>
      <rect x={8} y={14} width={w1} height={8} fill="none" stroke={LINE} strokeWidth={1.4} />
      <T x={r3(8 + w1 / 2)} y={32} size={3.8} fill={MUTED}>{`real part: ${dimensionLabel(realMm)}`}</T>
      <rect x={8} y={38} width={w2} height={4} fill="none" stroke={LINE} strokeWidth={1.4} />
      <T x={r3(8 + w2 + 4)} y={42} size={3.8} anchor="start" fill={GREEN}>{`drawn ${small} mm long, labelled ${dimensionLabel(realMm)}`}</T>
      <T x={60} y={54} size={3.6} fill={MUTED} weight={600}>the dimension is always the real size</T>
    </Panel>
  );
};

/** An isometric block: three visible faces, edges at 30 degrees to the horizontal. */
export const IsoBlock = ({ l, w, h }: { l: number; w: number; h: number }) => {
  const s = 7;
  const corners = [[0, 0, 0], [l, 0, 0], [l, w, 0], [0, w, 0], [0, 0, h], [l, 0, h], [l, w, h], [0, w, h]].map(([x, y, z]) => isometric(x * s, y * s, z * s));
  const minX = Math.min(...corners.map((c) => c.x)), maxX = Math.max(...corners.map((c) => c.x));
  const minY = Math.min(...corners.map((c) => c.y)), maxY = Math.max(...corners.map((c) => c.y));
  const ox = 60 - (minX + maxX) / 2, oy = 36 - (minY + maxY) / 2;
  const p = (x: number, y: number, z: number) => {
    const q = isometric(x * s, y * s, z * s);
    return `${r3(ox + q.x)},${r3(oy + q.y)}`;
  };
  const top = [p(0, 0, h), p(l, 0, h), p(l, w, h), p(0, w, h)].join(' ');
  const front = [p(l, 0, 0), p(l, w, 0), p(l, w, h), p(l, 0, h)].join(' ');
  const left = [p(0, w, 0), p(l, w, 0), p(l, w, h), p(0, w, h)].join(' ');
  return (
    <Panel h={68} aria={`An isometric drawing of a block ${l} by ${w} by ${h} units. Isometric drawings use an isometric grid with the horizontal edges drawn at 30 degrees, and show three faces of the block at once.`}>
      <polygon points={left} fill={GREEN} fillOpacity={0.3} stroke={LINE} strokeWidth={0.8} />
      <polygon points={front} fill={BLUE} fillOpacity={0.35} stroke={LINE} strokeWidth={0.8} />
      <polygon points={top} fill={SKY} fillOpacity={0.45} stroke={LINE} strokeWidth={0.8} />
      <T x={60} y={7} size={4} fill={AMBER}>isometric: edges drawn at 30°</T>
      <T x={60} y={64} size={3.6} fill={MUTED} weight={600}>three faces visible at once</T>
    </Panel>
  );
};

/** A king-post roof truss, members coloured by the force in them. */
export const TrussPicture = () => {
  const t = kingPostTruss(100, 28);
  const X = (v: number) => r3(10 + v);
  const Y = (v: number) => r3(52 - v);
  const col = (f: string) => (f === 'tension' ? ROSE : SKY);
  const line = (a: [number, number], b: [number, number], f: string) => <line x1={X(a[0])} y1={Y(a[1])} x2={X(b[0])} y2={Y(b[1])} stroke={col(f)} strokeWidth={1.6} />;
  const midL: [number, number] = [25, 14], midR: [number, number] = [75, 14];
  return (
    <Panel h={70} aria="A king post roof truss. The two rafters slope up to the apex and are in compression. The tie beam along the bottom is in tension. The king post in the middle is in tension. Two struts slope from the foot of the king post to the middle of each rafter and are in compression.">
      {line(t.left, t.apex, forceIn('rafter'))}
      {line(t.apex, t.right, forceIn('rafter'))}
      {line(t.left, t.right, forceIn('tie beam'))}
      {line(t.kingFoot, t.apex, forceIn('king post'))}
      {line(t.kingFoot, midL, forceIn('strut'))}
      {line(t.kingFoot, midR, forceIn('strut'))}
      <T x={22} y={28} size={3.4} fill={SKY}>rafter</T>
      <T x={X(50) + 3} y={Y(14)} size={3.4} anchor="start" fill={ROSE}>king post</T>
      <T x={X(50)} y={62} size={3.4} fill={ROSE}>tie beam</T>
      <T x={X(30)} y={Y(7)} size={3.2} fill={SKY}>strut</T>
      <rect x={6} y={65} width={3} height={3} fill={SKY} />
      <T x={11} y={68} size={3.2} anchor="start" fill={SKY}>compression</T>
      <rect x={52} y={65} width={3} height={3} fill={ROSE} />
      <T x={57} y={68} size={3.2} anchor="start" fill={ROSE}>tension</T>
    </Panel>
  );
};

/** Stability: a tall narrow block topples at a smaller tilt than a wide low one. */
const d1 = (x: number) => String(Math.round(x * 10) / 10).replace('.', ',');
export const TopplePicture = ({ narrow, wide, height }: { narrow: number; wide: number; height: number }) => {
  const k = 0.9;
  const blk = (x: number, wd: number, col: string, label: string, ly: number) => (
    <g>
      <rect x={x} y={r3(50 - height * k * 1.2)} width={r3(wd * k)} height={r3(height * k * 1.2)} fill={col} fillOpacity={0.3} stroke={col} strokeWidth={0.8} />
      <circle cx={r3(x + (wd * k) / 2)} cy={r3(50 - height * k * 0.6)} r={1.4} fill={col} />
      <T x={r3(x + (wd * k) / 2)} y={ly} size={3.6} fill={col}>{label}</T>
    </g>
  );
  return (
    <Panel h={62} aria={`Two blocks with the centre of gravity at a height of ${height} units. The block with a base of ${narrow} units topples when tilted by ${d1(toppleAngle(narrow, height))} degrees. The block with a base of ${wide} units can tilt ${d1(toppleAngle(wide, height))} degrees before it topples. A wide base makes a structure more stable.`}>
      {blk(22, narrow, ROSE, `narrow base: ${d1(toppleAngle(narrow, height))}°`, 9)}
      {blk(68, wide, GREEN, `wide base: ${d1(toppleAngle(wide, height))}°`, 9)}
      <line x1={10} y1={50} x2={110} y2={50} stroke={MUTED} strokeWidth={0.6} />
      <T x={60} y={58} size={3.6} fill={MUTED} weight={600}>topples at this tilt: the wider the base, the more stable</T>
    </Panel>
  );
};
