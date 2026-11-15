import { r3 } from '../round';
import { A, E, I, INK, LINE, Panel, R } from './Grade7Pictures';
import { arcMeet, lShape, polygonName, regularExterior, regularInterior, triangleFromSides } from './grade7Helpers';
import { regularPolygon } from './mathsHelpers';

/**
 * Grade 7 geometry pictures: every point is computed from the numbers passed in (arc intersections,
 * triangles from side lengths, regular polygons), never placed by eye. Style as FractionRows: dark
 * panel, 120-unit viewBox, at most six labels.
 */

const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (cx: number, cy: number, r: number, deg: number) => ({ x: r3(cx + r * Math.cos(rad(deg))), y: r3(cy - r * Math.sin(rad(deg))) });
/** Arc of a circle between two angles measured anticlockwise from the +x direction (maths convention, y up). */
const arcD = (cx: number, cy: number, r: number, from: number, to: number) => {
  const s = pt(cx, cy, r, from);
  const e = pt(cx, cy, r, to);
  const sweep = to > from ? 0 : 1; // y is flipped on screen, so increasing maths angle is anticlockwise (sweep 0)
  const large = Math.abs(to - from) > 180 ? 1 : 0;
  return `M${s.x},${s.y} A${r},${r} 0 ${large} ${sweep} ${e.x},${e.y}`;
};
const sector = (cx: number, cy: number, r: number, from: number, to: number) => `M${cx},${cy} L${arcD(cx, cy, r, from, to).slice(1).replace(' A', ' A')} Z`;
const T = ({ x, y, children, fill = LINE, size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{children}</text>
);
/** Parallel-line arrow marks (> or >>) at a point on a line with direction `deg`. */
const Chevrons = ({ x, y, deg, count = 1, color = A }: { x: number; y: number; deg: number; count?: number; color?: string }) => (
  <g fill="none" stroke={color} strokeWidth={0.9} strokeLinecap="round" strokeLinejoin="round">
    {Array.from({ length: count }).map((_, i) => {
      const c = pt(x, y, i * 2.6 - ((count - 1) * 2.6) / 2, deg);
      const a = pt(c.x, c.y, 2.2, deg + 150);
      const b = pt(c.x, c.y, 2.2, deg - 150);
      return <path key={i} d={`M${a.x},${a.y} L${c.x},${c.y} L${b.x},${b.y}`} />;
    })}
  </g>
);

// ---------- construction ----------

/** A protractor measuring an angle: centre on the vertex, baseline on 0, read where the arm crosses. */
export const ProtractorAngle = ({ deg, className }: { deg: number; className?: string }) => {
  const cx = 60;
  const cy = 60;
  const Rr = 50;
  const tip = pt(cx, cy, Rr + 3, deg);
  const mid = pt(cx, cy, 24, deg / 2);
  return (
    <Panel h={76} className={className} aria={`A protractor. The centre mark sits on the vertex of the angle and the baseline lies along one arm, at 0 degrees. The other arm crosses the scale at ${deg} degrees.`}>
      <path d={`M${cx - Rr},${cy} A${Rr},${Rr} 0 0 1 ${cx + Rr},${cy}`} fill="rgba(148,163,184,0.12)" stroke={LINE} strokeWidth={0.9} />
      <line x1={cx - Rr - 3} y1={cy} x2={cx + Rr + 6} y2={cy} stroke={LINE} strokeWidth={0.9} />
      {Array.from({ length: 19 }).map((_, i) => {
        const a = i * 10;
        const o = pt(cx, cy, Rr, a);
        const n = pt(cx, cy, Rr - (a % 30 === 0 ? 5 : 2.6), a);
        return <line key={a} x1={o.x} y1={o.y} x2={n.x} y2={n.y} stroke={LINE} strokeWidth={0.6} />;
      })}
      <line x1={cx} y1={cy} x2={cx + Rr + 6} y2={cy} stroke={I} strokeWidth={1.4} />
      <line x1={cx} y1={cy} x2={tip.x} y2={tip.y} stroke={A} strokeWidth={1.4} />
      <path d={arcD(cx, cy, 14, 0, deg)} fill="none" stroke={E} strokeWidth={1.1} />
      <circle cx={cx} cy={cy} r={2.2} fill={E} stroke={INK} strokeWidth={0.6} />
      <T x={cx + Rr + 1} y={cy + 8} fill={I} size={5.2}>0°</T>
      <T x={mid.x + (deg > 100 ? 0 : 3)} y={mid.y + 2} fill={E} size={6.2}>{deg}°</T>
      <T x={cx} y={cy + 10} fill={E} size={5.2}>centre on the vertex</T>
    </Panel>
  );
};

/** An equilateral triangle on a side: one compass width for both arcs, which meet at the apex. */
export const EquilateralBuild = ({ side, className }: { side: number; className?: string }) => {
  const sc = 60 / side;
  const ax = 30;
  const bx = ax + side * sc;
  const y0 = 78;
  const [apex] = arcMeet(0, side, side);
  const cx = ax + apex.x * sc;
  const cy = y0 - apex.y * sc;
  const r = side * sc;
  return (
    <Panel h={102} className={className} aria={`An equilateral triangle built on a line AB of ${side} centimetres. The compass is set to ${side} centimetres. One arc is drawn from A and one from B, and they cross at C. Joining A, B and C gives three equal sides.`}>
      <path d={arcD(ax, y0, r, 42, 78)} fill="none" stroke={I} strokeWidth={1} strokeDasharray="2 1.4" />
      <path d={arcD(bx, y0, r, 138, 102)} fill="none" stroke={E} strokeWidth={1} strokeDasharray="2 1.4" />
      <polygon points={`${ax},${y0} ${bx},${y0} ${r3(cx)},${r3(cy)}`} fill="rgba(251,191,36,0.14)" stroke={A} strokeWidth={1.4} strokeLinejoin="round" />
      {[[ax, y0], [bx, y0], [cx, cy]].map(([x, y], i) => <circle key={i} cx={r3(x)} cy={r3(y)} r={1.8} fill={LINE} />)}
      <T x={ax - 5} y={y0 + 2}>A</T>
      <T x={bx + 5} y={y0 + 2}>B</T>
      <T x={cx} y={cy - 4}>C</T>
      <T x={(ax + bx) / 2} y={y0 + 9} fill={A}>{side} cm</T>
      <T x={60} y={y0 + 17} fill={E} size={5.4}>compass width = {side} cm for both arcs</T>
    </Panel>
  );
};

/** The perpendicular bisector of AB: equal arcs from both ends meet above and below; the line through them cuts AB at its midpoint at 90 degrees. */
export const PerpBisector = ({ len, className }: { len: number; className?: string }) => {
  const sc = 80 / len;
  const ax = 20;
  const bx = 100;
  const y0 = 52;
  const r = len * 0.7;
  const [up] = arcMeet(0, len, r);
  const px = ax + up.x * sc;
  const dy = up.y * sc;
  const ang = (Math.atan2(dy, px - ax) * 180) / Math.PI;
  const rr = r * sc;
  return (
    <Panel h={114} className={className} aria={`A line AB with equal arcs drawn from A and from B, wider than half of AB. The arcs cross above and below the line. A line through the two crossing points meets AB at its midpoint M and makes a right angle with AB.`}>
      <line x1={ax} y1={y0} x2={bx} y2={y0} stroke={LINE} strokeWidth={1.2} />
      {[1, -1].map((s) => (
        <g key={s} fill="none" strokeWidth={1} strokeDasharray="2 1.4">
          <path d={arcD(ax, y0, rr, s * (ang - 14), s * (ang + 14))} stroke={I} />
          <path d={arcD(bx, y0, rr, 180 - s * (ang - 14), 180 - s * (ang + 14))} stroke={E} />
        </g>
      ))}
      <line x1={px} y1={y0 - dy - 4} x2={px} y2={y0 + dy + 4} stroke={A} strokeWidth={1.2} />
      <path d={`M${px + 6},${y0} V${y0 - 6} H${px}`} fill="none" stroke={A} strokeWidth={0.9} />
      {[ax + (px - ax) / 2, px + (bx - px) / 2].map((x, i) => (
        <g key={i} stroke={LINE} strokeWidth={0.9}>
          <line x1={x - 1} y1={y0 - 3} x2={x - 1} y2={y0 + 3} />
          <line x1={x + 1} y1={y0 - 3} x2={x + 1} y2={y0 + 3} />
        </g>
      ))}
      {[ax, bx, px].map((x, i) => <circle key={i} cx={x} cy={y0} r={1.8} fill={LINE} />)}
      <T x={ax - 5} y={y0 + 2}>A</T>
      <T x={bx + 5} y={y0 + 2}>B</T>
      <T x={px + 5} y={y0 + 9} fill={A}>M</T>
      <T x={px + 13} y={y0 - 7} fill={A} size={5.2}>90°</T>
      <T x={60} y={110} fill={E} size={5.2}>AM = MB (equal arcs from A and B)</T>
    </Panel>
  );
};

/** Equilateral, isosceles and scalene triangles drawn from their side lengths at one scale. */
export const TriangleTypes = ({ triples, className }: { triples: [number, number, number][]; className?: string }) => {
  const sc = 4.4;
  const names = triples.map(([a, b, c]) => (a === b && b === c ? 'equilateral' : a === b || b === c || a === c ? 'isosceles' : 'scalene'));
  const slot = 120 / triples.length;
  return (
    <Panel h={62} className={className} aria={`${triples.length} triangles drawn to the same scale: ${triples.map((t, i) => `${names[i]} with sides ${t.join(', ')}`).join('; ')}. Equal sides carry a small tick.`}>
      {triples.map(([a, b, c], i) => {
        const t = triangleFromSides(a, b, c);
        const w = c * sc;
        const x0 = slot * i + (slot - w) / 2;
        const y0 = 34;
        const P = (p: { x: number; y: number }) => ({ x: r3(x0 + p.x * sc), y: r3(y0 - p.y * sc) });
        const A_ = P(t.A);
        const B_ = P(t.B);
        const C_ = P(t.C);
        const tick = (p: { x: number; y: number }, q: { x: number; y: number }, key: string) => {
          const mx = (p.x + q.x) / 2;
          const my = (p.y + q.y) / 2;
          const dx = q.x - p.x;
          const dy = q.y - p.y;
          const l = Math.hypot(dx, dy);
          return <line key={key} x1={r3(mx - (dy / l) * 2)} y1={r3(my + (dx / l) * 2)} x2={r3(mx + (dy / l) * 2)} y2={r3(my - (dx / l) * 2)} stroke={A} strokeWidth={1} />;
        };
        const ticks: React.ReactNode[] = [];
        if (a === b || b === c || a === c) {
          // sides: c = AB, b = CA, a = BC
          const sides = [{ len: c, p: A_, q: B_ }, { len: b, p: A_, q: C_ }, { len: a, p: B_, q: C_ }];
          sides.forEach((s, k) => {
            if (sides.filter((o) => o.len === s.len).length > 1) ticks.push(tick(s.p, s.q, String(k)));
          });
        }
        return (
          <g key={i}>
            <polygon points={`${A_.x},${A_.y} ${B_.x},${B_.y} ${C_.x},${C_.y}`} fill="rgba(129,140,248,0.2)" stroke={I} strokeWidth={1.2} strokeLinejoin="round" />
            {ticks}
            <T x={slot * i + slot / 2} y={46} fill={A} size={5}>{names[i]}</T>
            <T x={slot * i + slot / 2} y={55} size={5}>{a}, {b}, {c}</T>
          </g>
        );
      })}
    </Panel>
  );
};

/** A trapezium (one pair of parallel sides) next to a parallelogram (two pairs). */
export const ParallelPairs = ({ className }: { className?: string }) => (
  <Panel h={74} className={className} aria="A trapezium with one pair of parallel sides, marked with one arrow on each, next to a parallelogram with two pairs of parallel sides, marked with one and two arrows.">
    <polygon points="6,50 52,50 42,20 18,20" fill="rgba(129,140,248,0.2)" stroke={I} strokeWidth={1.3} strokeLinejoin="round" />
    <Chevrons x={30} y={50} deg={0} />
    <Chevrons x={30} y={20} deg={0} />
    <polygon points="68,50 108,50 116,20 76,20" fill="rgba(52,211,153,0.2)" stroke={E} strokeWidth={1.3} strokeLinejoin="round" />
    <Chevrons x={88} y={50} deg={0} />
    <Chevrons x={96} y={20} deg={0} />
    <Chevrons x={72} y={35} deg={75.07} count={2} color={R} />
    <Chevrons x={112} y={35} deg={75.07} count={2} color={R} />
    <T x={29} y={60} fill={I} size={5.2}>trapezium</T>
    <T x={29} y={68} size={5}>1 pair</T>
    <T x={92} y={60} fill={E} size={5.2}>parallelogram</T>
    <T x={92} y={68} size={5}>2 pairs</T>
  </Panel>
);

// ---------- straight lines and polygons ----------

/** A ray on a straight line: the two angles add to 180 degrees. */
export const AnglesOnLine = ({ a, className }: { a: number; className?: string }) => {
  const cx = 60;
  const cy = 52;
  const tip = pt(cx, cy, 44, a);
  const b = 180 - a;
  const m1 = pt(cx, cy, 24, a / 2);
  const m2 = pt(cx, cy, 30, a + b / 2);
  return (
    <Panel h={74} className={className} aria={`A straight line with a ray leaving it. The two angles on the line are ${a} degrees and ${b} degrees, and they add up to 180 degrees.`}>
      <path d={sector(cx, cy, 20, 0, a)} fill="rgba(129,140,248,0.25)" />
      <path d={sector(cx, cy, 26, a, 180)} fill="rgba(52,211,153,0.22)" />
      <line x1={8} y1={cy} x2={112} y2={cy} stroke={LINE} strokeWidth={1.2} />
      <line x1={cx} y1={cy} x2={tip.x} y2={tip.y} stroke={A} strokeWidth={1.4} />
      <T x={m1.x + 4} y={m1.y + 2} fill={I} size={6}>{a}°</T>
      <T x={m2.x} y={m2.y + 2} fill={E} size={6}>{b}°</T>
      <T x={60} y={68} size={5.8}>{a}° + {b}° = 180°</T>
    </Panel>
  );
};

/** Two straight lines crossing: opposite angles are equal. */
export const CrossingLines = ({ a, className }: { a: number; className?: string }) => {
  const cx = 60;
  const cy = 38;
  const b = 180 - a;
  const L = 46;
  const p = (deg: number, r = L) => pt(cx, cy, r, deg);
  const lab = (deg: number, r = 17) => pt(cx, cy, r, deg);
  return (
    <Panel h={82} className={className} aria={`Two straight lines cross. The angles opposite each other are equal: two angles of ${a} degrees and two angles of ${b} degrees.`}>
      <line x1={p(0).x} y1={p(0).y} x2={p(180).x} y2={p(180).y} stroke={LINE} strokeWidth={1.2} />
      <line x1={p(a).x} y1={p(a).y} x2={p(a + 180).x} y2={p(a + 180).y} stroke={LINE} strokeWidth={1.2} />
      <T x={lab(a / 2).x} y={lab(a / 2).y + 2} fill={I}>{a}°</T>
      <T x={lab(a + b / 2).x} y={lab(a + b / 2).y + 2} fill={E}>{b}°</T>
      <T x={lab(180 + a / 2).x} y={lab(180 + a / 2).y + 2} fill={I}>{a}°</T>
      <T x={lab(180 + a + b / 2).x} y={lab(180 + a + b / 2).y + 2} fill={E}>{b}°</T>
      <T x={60} y={78} fill={A} size={5.4}>vertically opposite angles are equal</T>
    </Panel>
  );
};

/** Two parallel lines cut by a transversal: corresponding angles are equal. */
export const ParallelTransversal = ({ a, className }: { a: number; className?: string }) => {
  const yTop = 20;
  const yBot = 62;
  const dx = (yBot - yTop) / Math.tan(rad(a));
  const bx = 44;
  const tx = bx + dx;
  const ext = 12;
  const top = { x: tx + ext * Math.cos(rad(a)), y: yTop - ext * Math.sin(rad(a)) };
  const bot = { x: bx - ext * Math.cos(rad(a)), y: yBot + ext * Math.sin(rad(a)) };
  return (
    <Panel h={84} className={className} aria={`Two parallel lines, marked with arrows, cut by a transversal. At the top crossing and the bottom crossing the angle above the line on the right of the transversal is ${a} degrees at both, so corresponding angles are equal. The angle next to it is ${180 - a} degrees.`}>
      <line x1={8} y1={yTop} x2={112} y2={yTop} stroke={LINE} strokeWidth={1.2} />
      <line x1={8} y1={yBot} x2={112} y2={yBot} stroke={LINE} strokeWidth={1.2} />
      <Chevrons x={16} y={yTop} deg={0} />
      <Chevrons x={16} y={yBot} deg={0} />
      <line x1={r3(bot.x)} y1={r3(bot.y)} x2={r3(top.x)} y2={r3(top.y)} stroke={A} strokeWidth={1.3} />
      <path d={arcD(tx, yTop, 11, 0, a)} fill="none" stroke={I} strokeWidth={1.1} />
      <path d={arcD(bx, yBot, 11, 0, a)} fill="none" stroke={I} strokeWidth={1.1} />
      <T x={tx + 20} y={yTop - 2} fill={I} size={6}>{a}°</T>
      <T x={bx + 20} y={yBot - 2} fill={I} size={6}>{a}°</T>
      <T x={bx - 21} y={yBot - 4} fill={E} size={6}>{180 - a}°</T>
      <T x={60} y={80} fill={A} size={5.4}>corresponding angles are equal</T>
    </Panel>
  );
};

/** A regular polygon with one interior and the matching exterior angle drawn at a vertex. */
export const RegularPolygonAngles = ({ n, className }: { n: number; className?: string }) => {
  const cx = 60;
  const cy = 50;
  const pts = regularPolygon(n, cx, cy, 34, 0);
  const v0 = pts[0];
  const v1 = pts[1];
  const vl = pts[n - 1];
  const ang = (p: { x: number; y: number }) => (Math.atan2(v0.y - p.y, p.x - v0.x) * 180) / Math.PI; // maths angle of the direction v0 -> p
  const a1 = ang(v1);
  const aLast = ang(vl);
  const aExt = (aLast + 180) % 360; // direction of the side extended beyond v0
  const interior = regularInterior(n);
  const exterior = regularExterior(n);
  const ext = pt(v0.x, v0.y, 20, aExt);
  const rv = (x: number, y: number) => `${r3(x)},${r3(y)}`;
  const bisI = a1 - interior / 2;
  const bisE = a1 + exterior / 2;
  const li = pt(v0.x, v0.y, 17, bisI);
  const le = pt(v0.x, v0.y, 20, bisE);
  return (
    <Panel h={96} className={className} aria={`A regular ${polygonName(n)} with one interior angle of ${interior} degrees and the exterior angle next to it of ${exterior} degrees. Together they make a straight line, 180 degrees.`}>
      <polygon points={pts.map((p) => rv(p.x, p.y)).join(' ')} fill="rgba(129,140,248,0.2)" stroke={I} strokeWidth={1.3} strokeLinejoin="round" />
      <line x1={r3(v0.x)} y1={r3(v0.y)} x2={ext.x} y2={ext.y} stroke={A} strokeWidth={1.2} strokeDasharray="2.2 1.4" />
      <path d={arcD(v0.x, v0.y, 9, bisI - interior / 2, bisI + interior / 2)} fill="none" stroke={E} strokeWidth={1.1} />
      <path d={arcD(v0.x, v0.y, 12, a1, a1 + exterior)} fill="none" stroke={R} strokeWidth={1.1} />
      <T x={li.x - 6} y={li.y + 6} fill={E} size={6}>{interior}°</T>
      <T x={le.x + 9} y={le.y - 1} fill={R} size={6}>{exterior}°</T>
      <T x={60} y={92} size={5.6}>{interior}° + {exterior}° = 180°</T>
    </Panel>
  );
};

/** A quadrilateral cut by a diagonal into two triangles: 2 x 180 = 360 degrees. */
export const QuadSplit = ({ className }: { className?: string }) => (
  <Panel h={80} className={className} aria="A four-sided shape cut by a diagonal into two triangles. Each triangle has angles adding to 180 degrees, so the four angles of the shape add to 360 degrees.">
    <polygon points="14,58 50,12 108,24" fill="rgba(129,140,248,0.28)" />
    <polygon points="14,58 108,24 98,62" fill="rgba(52,211,153,0.25)" />
    <polygon points="14,58 50,12 108,24 98,62" fill="none" stroke={LINE} strokeWidth={1.3} strokeLinejoin="round" />
    <line x1={14} y1={58} x2={108} y2={24} stroke={A} strokeWidth={1.2} strokeDasharray="2.2 1.4" />
    <T x={52} y={32} fill={I} size={6.2}>180°</T>
    <T x={84} y={50} fill={E} size={6.2}>180°</T>
    <T x={60} y={76} size={5.8}>180° + 180° = 360°</T>
  </Panel>
);

// ---------- area and perimeter ----------

/** An L-shape split into two rectangles: add the two areas. */
export const LShapePicture = ({ w1, h1, w2, h2, className }: { w1: number; h1: number; w2: number; h2: number; className?: string }) => {
  const s = lShape(w1, h1, w2, h2);
  const u = Math.min(11, 70 / w1, 58 / (h1 + h2));
  const x0 = 60 - (w1 * u) / 2;
  const yBase = 12 + (h1 + h2) * u;
  return (
    <Panel h={yBase + 16} className={className} aria={`An L-shaped figure split into two rectangles. The bottom rectangle is ${w1} by ${h1}, area ${s.area1} square centimetres. The top rectangle is ${w2} by ${h2}, area ${s.area2} square centimetres. The total area is ${s.area} square centimetres.`}>
      <rect x={r3(x0)} y={r3(yBase - h1 * u)} width={w1 * u} height={h1 * u} fill="rgba(129,140,248,0.4)" stroke={I} strokeWidth={1.1} />
      <rect x={r3(x0)} y={r3(yBase - (h1 + h2) * u)} width={w2 * u} height={h2 * u} fill="rgba(52,211,153,0.4)" stroke={E} strokeWidth={1.1} />
      <T x={x0 + (w1 * u) / 2} y={yBase - (h1 * u) / 2 + 2} fill={LINE} size={6}>{w1} × {h1} = {s.area1}</T>
      <T x={x0 + (w2 * u) / 2} y={yBase - h1 * u - (h2 * u) / 2 + 2} fill={LINE} size={6}>{w2} × {h2} = {s.area2}</T>
      <T x={60} y={yBase + 11} fill={A} size={6.2}>{s.area1} + {s.area2} = {s.area} cm²</T>
    </Panel>
  );
};

/** Two rectangles of the same width drawn to scale: lengthening one side by 2 cm adds 4 cm to the perimeter. */
export const RectChange = ({ l1, l2, w, className }: { l1: number; l2: number; w: number; className?: string }) => {
  const u = 6.4;
  const p1 = 2 * (l1 + w);
  const p2 = 2 * (l2 + w);
  const x0 = (120 - l2 * u) / 2;
  const h = w * u;
  return (
    <Panel h={88} className={className} aria={`Two rectangles drawn to scale. The first is ${l1} centimetres by ${w} centimetres with perimeter ${p1} centimetres. The second is ${l2} by ${w}, ${l2 - l1} centimetres longer, with perimeter ${p2} centimetres.`}>
      <T x={60} y={9} fill={I} size={5.8}>{l1} × {w}: P = {p1} cm</T>
      <rect x={x0} y={13} width={l1 * u} height={h} fill="rgba(129,140,248,0.3)" stroke={I} strokeWidth={1.2} />
      <T x={60} y={46} fill={A} size={5.8}>{l2} × {w}: P = {p2} cm</T>
      <rect x={x0} y={50} width={l1 * u} height={h} fill="rgba(129,140,248,0.3)" stroke={I} strokeWidth={1.2} />
      <rect x={x0 + l1 * u} y={50} width={(l2 - l1) * u} height={h} fill="rgba(251,191,36,0.4)" stroke={A} strokeWidth={1.2} />
      <T x={x0 + (l1 + (l2 - l1) / 2) * u} y={50 + h + 8} fill={A} size={5.4}>+{l2 - l1} cm</T>
    </Panel>
  );
};

/** A rectangle drawn to scale on a unit grid: the perimeter walk (outline) or the area (filled squares). */
export const RectPicture = ({ l, w, mode, className }: { l: number; w: number; mode: 'perimeter' | 'area'; className?: string }) => {
  const u = Math.min(11, 84 / l, 48 / w);
  const x0 = 60 - (l * u) / 2 - 8;
  const y0 = 18;
  const perimeter = 2 * (l + w);
  const area = l * w;
  const accent = mode === 'perimeter' ? A : E;
  return (
    <Panel h={y0 + w * u + 22} className={className} aria={mode === 'perimeter' ? `A rectangle ${l} centimetres long and ${w} centimetres wide on a grid. The perimeter is 2 times ${l} plus ${w}, ${perimeter} centimetres.` : `A rectangle ${l} centimetres long and ${w} wide filled with unit squares: ${l} squares in each of ${w} rows, ${area} square centimetres.`}>
      <rect x={r3(x0)} y={y0} width={l * u} height={w * u} fill={mode === 'area' ? 'rgba(52,211,153,0.3)' : 'rgba(251,191,36,0.08)'} />
      <g stroke="#475569" strokeWidth={0.45}>
        {Array.from({ length: l + 1 }).map((_, i) => <line key={`v${i}`} x1={r3(x0 + i * u)} y1={y0} x2={r3(x0 + i * u)} y2={r3(y0 + w * u)} />)}
        {Array.from({ length: w + 1 }).map((_, j) => <line key={`h${j}`} x1={r3(x0)} y1={r3(y0 + j * u)} x2={r3(x0 + l * u)} y2={r3(y0 + j * u)} />)}
      </g>
      <rect x={r3(x0)} y={y0} width={l * u} height={w * u} fill="none" stroke={accent} strokeWidth={mode === 'perimeter' ? 2.2 : 1.2} strokeLinejoin="round" />
      <T x={x0 + (l * u) / 2} y={y0 - 5} fill={LINE} size={5.8}>{mode === 'area' ? `${l} in a row` : `${l} cm`}</T>
      <T x={x0 + l * u + 4} y={y0 + (w * u) / 2 + 2} fill={LINE} size={5.8} anchor="start">{mode === 'area' ? `${w} rows` : `${w} cm`}</T>
      <T x={60} y={y0 + w * u + 14} fill={accent} size={6.4}>{mode === 'perimeter' ? `P = 2 × (${l} + ${w}) = ${perimeter} cm` : `A = ${l} × ${w} = ${area} cm²`}</T>
    </Panel>
  );
};
