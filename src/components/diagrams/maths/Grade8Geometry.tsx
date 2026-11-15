import { r3 } from '../round';
import { circleIntersections, polar, type Pt } from './grade8GeometryHelpers';

/**
 * Grade 8 geometry and measurement pictures (constructions, angles and lines, area, perimeter, surface
 * area) in the style of Grade7Pictures: a dark panel, a 120-unit-wide viewBox, indigo / emerald /
 * amber / rose, at most six labels. Every point is computed from the numbers passed in.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const P = (p: Pt) => `${r3(p.x)},${r3(p.y)}`;

/** An arc of radius r round c from angle a1 to a2 (degrees, anticlockwise on screen). */
const arc = (c: Pt, r: number, a1: number, a2: number) => {
  const s = polar(c, r, a1);
  const e = polar(c, r, a2);
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0;
  return `M${P(s)} A${r3(r)},${r3(r)} 0 ${large} 0 ${P(e)}`;
};

/** The direction from p to q in degrees (0° = right, 90° = up on screen). */
const dir = (p: Pt, q: Pt) => (Math.atan2(-(q.y - p.y), q.x - p.x) * 180) / Math.PI;

const Label = ({ at, text, fill, size = 6, anchor = 'middle' }: { at: Pt; text: string; fill: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(at.x)} y={r3(at.y + size * 0.36)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{text}</text>
);

const Dot = ({ at, fill = LINE }: { at: Pt; fill?: string }) => <circle cx={r3(at.x)} cy={r3(at.y)} r={1.3} fill={fill} />;

// ---------- angles ----------

/** A ray from a straight line: the given angle a and its unknown neighbour x, which together make 180°. */
export const StraightLineAngles = ({ a, className }: { a: number; className?: string }) => {
  const O = { x: 60, y: 42 };
  const tip = polar(O, 36, a);
  return (
    <Panel h={58} className={className} aria={`A straight line with a ray from a point on it. The angle on the right is ${a} degrees and the angle on the left is x. Together they make 180 degrees, so x = ${180 - a} degrees.`}>
      <line x1={8} y1={O.y} x2={112} y2={O.y} stroke={LINE} strokeWidth={1} />
      <line x1={O.x} y1={O.y} x2={r3(tip.x)} y2={r3(tip.y)} stroke={LINE} strokeWidth={1} />
      <path d={arc(O, 9, 0, a)} fill="none" stroke={A} strokeWidth={1} />
      <path d={arc(O, 12, a, 180)} fill="none" stroke={I} strokeWidth={1} />
      <Label at={polar(O, 17, a / 2)} text={`${a}°`} fill={A} />
      <Label at={polar(O, 19, a + (180 - a) / 2)} text="x" fill={I} size={7} />
      <Label at={{ x: 60, y: 52 }} text={`x + ${a}° = 180°`} fill={LINE} />
    </Panel>
  );
};

/** Two straight lines crossing: the four angles, vertically opposite pairs in the same colour. */
export const CrossingLines = ({ a, className }: { a: number; className?: string }) => {
  const O = { x: 60, y: 36 };
  const L = 48;
  const p1 = polar(O, L, a);
  const p2 = polar(O, L, a + 180);
  const b = 180 - a;
  const labels = [
    { mid: a / 2, text: `${a}°`, fill: A },
    { mid: a + b / 2, text: `${b}°`, fill: I },
    { mid: 180 + a / 2, text: `${a}°`, fill: A },
    { mid: 180 + a + b / 2, text: `${b}°`, fill: I },
  ];
  return (
    <Panel h={80} className={className} aria={`Two straight lines crossing. The four angles are ${a}, ${b}, ${a} and ${b} degrees. Vertically opposite angles are equal and angles next to each other add up to 180 degrees.`}>
      <line x1={r3(O.x - L)} y1={O.y} x2={r3(O.x + L)} y2={O.y} stroke={LINE} strokeWidth={1} />
      <line x1={r3(p1.x)} y1={r3(p1.y)} x2={r3(p2.x)} y2={r3(p2.y)} stroke={LINE} strokeWidth={1} />
      <path d={arc(O, 8, 0, a)} fill="none" stroke={A} strokeWidth={1} />
      <path d={arc(O, 8, 180, 180 + a)} fill="none" stroke={A} strokeWidth={1} />
      <path d={arc(O, 11, a, 180)} fill="none" stroke={I} strokeWidth={1} />
      <path d={arc(O, 11, 180 + a, 360)} fill="none" stroke={I} strokeWidth={1} />
      {labels.map((l, i) => (
        <Label key={i} at={polar(O, l.fill === A ? 19 : 17, l.mid)} text={l.text} fill={l.fill} />
      ))}
      <Label at={{ x: 60, y: 74 }} text="vertically opposite angles are equal" fill={LINE} size={5.6} />
    </Panel>
  );
};

/** Two parallel lines cut by a transversal at angle a: a corresponding pair, an alternate pair and a co-interior pair. */
export const ParallelLines = ({ a, className }: { a: number; className?: string }) => {
  const Y1 = 24;
  const Y2 = 58;
  const T1 = { x: 72, y: Y1 };
  const run = (Y2 - Y1) / Math.tan((a * Math.PI) / 180);
  const T2 = { x: T1.x - run, y: Y2 };
  const top = polar(T1, 16, a);
  const bottom = polar(T2, 16, a + 180);
  const chevron = (x: number, y: number) => `M${x - 2},${y - 2} l2.4,2 l-2.4,2`;
  return (
    <Panel h={78} className={className} aria={`Two parallel lines cut by a transversal. At the top crossing the angle above the line on the right is ${a} degrees. At the bottom crossing the corresponding angle is also ${a} degrees. The alternate angle below the top line on the left is ${a} degrees. The co-interior angle above the bottom line on the left is ${180 - a} degrees.`}>
      <line x1={8} y1={Y1} x2={112} y2={Y1} stroke={LINE} strokeWidth={1} />
      <line x1={8} y1={Y2} x2={112} y2={Y2} stroke={LINE} strokeWidth={1} />
      <path d={`${chevron(100, Y1)} ${chevron(100, Y2)}`} fill="none" stroke={MUTED} strokeWidth={0.9} />
      <line x1={r3(top.x)} y1={r3(top.y)} x2={r3(bottom.x)} y2={r3(bottom.y)} stroke={LINE} strokeWidth={1} />
      <path d={arc(T1, 7, 0, a)} fill="none" stroke={A} strokeWidth={1.1} />
      <path d={arc(T2, 7, 0, a)} fill="none" stroke={A} strokeWidth={1.1} />
      <path d={arc(T1, 7, 180, 180 + a)} fill="none" stroke={E} strokeWidth={1.1} />
      <path d={arc(T2, 9, a, 180)} fill="none" stroke={R} strokeWidth={1.1} />
      <Label at={polar(T1, 15, a / 2)} text={`${a}°`} fill={A} />
      <Label at={polar(T2, 15, a / 2)} text={`${a}°`} fill={A} />
      <Label at={polar(T1, 15, 180 + a / 2)} text={`${a}°`} fill={E} />
      <Label at={polar(T2, 17, a + (180 - a) / 2)} text={`${180 - a}°`} fill={R} />
    </Panel>
  );
};

/** A triangle with angles a and b, its third angle, and the exterior angle made by extending the base. */
export const TriangleExterior = ({ a, b, className }: { a: number; b: number; className?: string }) => {
  const c = 180 - a - b;
  const Pl = { x: 14, y: 60 };
  const Q = { x: 76, y: 60 };
  const side = (62 * Math.sin((c * Math.PI) / 180)) / Math.sin((b * Math.PI) / 180);
  const Rt = polar(Pl, side, a);
  const toR = dir(Rt, Pl);
  const toQ = dir(Rt, Q);
  return (
    <Panel h={70} className={className} aria={`A triangle with angles ${a} degrees and ${b} degrees and a third angle of ${c} degrees. The base is extended, making an exterior angle of ${a + b} degrees, which equals ${a} + ${b}.`}>
      <path d={`M${P(Pl)} L${P(Q)} L${P(Rt)} Z`} fill="rgba(129,140,248,0.18)" stroke={LINE} strokeWidth={1} />
      <line x1={Q.x} y1={Q.y} x2={112} y2={Q.y} stroke={LINE} strokeWidth={1} strokeDasharray="2.5 1.8" />
      <path d={arc(Pl, 8, 0, a)} fill="none" stroke={A} strokeWidth={1} />
      <path d={arc(Rt, 7, Math.min(toR, toQ), Math.max(toR, toQ))} fill="none" stroke={A} strokeWidth={1} />
      <path d={arc(Q, 7, 180 - c, 180)} fill="none" stroke={I} strokeWidth={1} />
      <path d={arc(Q, 10, 0, 180 - c)} fill="none" stroke={R} strokeWidth={1.1} />
      <Label at={polar(Pl, 15, a / 2)} text={`${a}°`} fill={A} />
      <Label at={polar(Rt, 14, (toR + toQ) / 2)} text={`${b}°`} fill={A} />
      <Label at={polar(Q, 14, 180 - c / 2)} text={`${c}°`} fill={I} />
      <Label at={polar(Q, 19, (180 - c) / 2)} text={`${a + b}°`} fill={R} />
    </Panel>
  );
};

/** A trapezium with right angles at A and D and angle C, cut by a diagonal into two triangles: 2 × 180° = 360°. */
export const QuadSplit = ({ angleC, className }: { angleC: number; className?: string }) => {
  const Ap = { x: 22, y: 64 };
  const D = { x: 22, y: 16 };
  const C = { x: 70, y: 16 };
  const B = { x: C.x + (Ap.y - D.y) / Math.tan(((180 - angleC) * Math.PI) / 180), y: Ap.y };
  const sq = (p: Pt, sx: number, sy: number) => `M${p.x + sx * 4},${p.y} v${sy * 4} h${-sx * 4}`;
  return (
    <Panel h={76} className={className} aria={`A quadrilateral with two right angles, an angle of ${angleC} degrees and an unknown angle x. A diagonal splits it into two triangles, so its angles add up to 2 × 180 = 360 degrees.`}>
      <path d={`M${P(Ap)} L${P(B)} L${P(D)} Z`} fill="rgba(129,140,248,0.3)" />
      <path d={`M${P(D)} L${P(C)} L${P(B)} Z`} fill="rgba(52,211,153,0.3)" />
      <path d={`M${P(Ap)} L${P(B)} L${P(C)} L${P(D)} Z`} fill="none" stroke={LINE} strokeWidth={1} />
      <line x1={D.x} y1={D.y} x2={r3(B.x)} y2={B.y} stroke={A} strokeWidth={0.9} strokeDasharray="2.5 1.8" />
      <path d={`${sq(Ap, 1, -1)} ${sq(D, 1, 1)}`} fill="none" stroke={LINE} strokeWidth={0.8} />
      <path d={arc(C, 6, 180, 180 + angleC)} fill="none" stroke={I} strokeWidth={1} />
      <path d={arc(B, 8, angleC, 180)} fill="none" stroke={R} strokeWidth={1} />
      <Label at={polar(C, 13, 180 + angleC / 2)} text={`${angleC}°`} fill={I} />
      <Label at={polar(B, 17, (angleC + 180) / 2 + 20)} text="x" fill={R} size={7.5} />
      <Label at={{ x: 60, y: 72 }} text="2 triangles: 2 × 180° = 360°" fill={A} size={5.8} />
    </Panel>
  );
};

// ---------- constructions ----------

/** Copying a line segment: the compass is set to AB, then an arc from A′ cuts the new line at B′. */
export const CopySegment = ({ len, className }: { len: number; className?: string }) => {
  const U = 8;
  const w = len * U;
  const A0 = { x: 18, y: 22 };
  const B0 = { x: 18 + w, y: 22 };
  const A1 = { x: 18, y: 54 };
  const B1 = { x: 18 + w, y: 54 };
  const hinge = { x: 18 + w / 2, y: 6 };
  return (
    <Panel h={72} className={className} aria={`Copying a line segment of ${len} centimetres. The compass legs are set on A and B. With the same opening, an arc drawn from A prime cuts a new line at B prime, so A prime B prime = AB = ${len} centimetres.`}>
      <path d={`M${P(A0)} L${P(hinge)} L${P(B0)}`} fill="none" stroke={MUTED} strokeWidth={0.8} />
      <line x1={A0.x} y1={A0.y} x2={B0.x} y2={B0.y} stroke={I} strokeWidth={1.4} />
      <Dot at={A0} /> <Dot at={B0} />
      <Label at={{ x: A0.x - 6, y: A0.y }} text="A" fill={I} />
      <Label at={{ x: B0.x + 6, y: B0.y }} text="B" fill={I} />
      <line x1={8} y1={A1.y} x2={112} y2={A1.y} stroke={LINE} strokeWidth={0.9} />
      <path d={arc(A1, w, -14, 14)} fill="none" stroke={A} strokeWidth={1} />
      <line x1={A1.x} y1={A1.y} x2={B1.x} y2={B1.y} stroke={E} strokeWidth={1.4} />
      <Dot at={A1} /> <Dot at={B1} />
      <Label at={{ x: A1.x, y: A1.y + 7 }} text="A′" fill={E} />
      <Label at={{ x: B1.x - 5, y: B1.y + 7 }} text="B′" fill={E} />
      <Label at={{ x: 18 + w / 2, y: 38 }} text={`same opening: ${len} cm`} fill={A} size={5.6} />
    </Panel>
  );
};

/** The perpendicular bisector of AB: equal arcs from A and B (radius r) meet above and below; the line through them cuts AB at its midpoint M at 90°. */
export const PerpBisector = ({ ab, r, className }: { ab: number; r: number; className?: string }) => {
  const U = 7.5;
  const Ap = { x: 60 - (ab * U) / 2, y: 44 };
  const B = { x: 60 + (ab * U) / 2, y: 44 };
  const [top, bottom] = circleIntersections(Ap, r * U, B, r * U);
  const M = { x: 60, y: 44 };
  const arcs = (c: Pt) =>
    [top, bottom].map((p, i) => {
      const d = dir(c, p);
      return <path key={i} d={arc(c, r * U, d - 16, d + 16)} fill="none" stroke={A} strokeWidth={0.9} />;
    });
  return (
    <Panel h={92} className={className} aria={`Line segment AB of ${ab} centimetres. Arcs of radius ${r} centimetres from A and from B cross above and below AB. The line through the two crossing points cuts AB at its midpoint M at a right angle, so AM = MB = ${ab / 2} centimetres.`}>
      <line x1={Ap.x} y1={Ap.y} x2={B.x} y2={B.y} stroke={I} strokeWidth={1.4} />
      {arcs(Ap)}
      {arcs(B)}
      <line x1={60} y1={r3(top.y - 6)} x2={60} y2={r3(bottom.y + 6)} stroke={E} strokeWidth={1.1} />
      <path d={`M${M.x + 4},${M.y} v-4 h-4`} fill="none" stroke={LINE} strokeWidth={0.8} />
      <Dot at={Ap} /> <Dot at={B} /> <Dot at={top} fill={A} /> <Dot at={bottom} fill={A} />
      <Label at={{ x: Ap.x - 6, y: Ap.y }} text="A" fill={I} />
      <Label at={{ x: B.x + 6, y: B.y }} text="B" fill={I} />
      <Label at={{ x: 55, y: M.y + 6 }} text="M" fill={E} />
      <Label at={{ x: 60, y: 88 }} text={`AM = MB = ${ab / 2} cm`} fill={LINE} size={5.8} />
    </Panel>
  );
};

/**
 * A triangle constructed from three sides: base AB = c, an arc of radius b from A and an arc of radius a
 * from B meet at C. Labels the side lengths, or the angles when `angles` are given.
 */
export const SSSTriangle = ({ a, b, c, angles, className }: { a: number; b: number; c: number; angles?: [number, number, number]; className?: string }) => {
  const U = Math.min(84 / c, 56 / Math.max(a, b));
  const Ap = { x: 60 - (c * U) / 2, y: 0 };
  const B = { x: 60 + (c * U) / 2, y: 0 };
  const [Cp] = circleIntersections(Ap, b * U, B, a * U);
  const lift = 16 - Cp.y; // move everything down so C sits at y = 16
  const sh = (p: Pt) => ({ x: p.x, y: p.y + lift });
  const [A2, B2, C2] = [sh(Ap), sh(B), sh(Cp)];
  const h = r3(A2.y + 14);
  const dA = dir(A2, C2);
  const dB = dir(B2, C2);
  const mid = (p: Pt, q: Pt) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });
  return (
    <Panel h={h} className={className} aria={`A triangle constructed from three sides: base AB = ${c} centimetres, an arc of ${b} centimetres from A and an arc of ${a} centimetres from B meet at C.${angles ? ` Its angles are ${angles.join(', ')} degrees.` : ''}`}>
      <path d={arc(A2, b * U, dA - 12, dA + 12)} fill="none" stroke={A} strokeWidth={0.9} />
      <path d={arc(B2, a * U, dB - 12, dB + 12)} fill="none" stroke={A} strokeWidth={0.9} />
      <path d={`M${P(A2)} L${P(B2)} L${P(C2)} Z`} fill="rgba(129,140,248,0.2)" stroke={LINE} strokeWidth={1} />
      {angles ? (
        <>
          <Label at={polar(A2, 11, dA / 2)} text={`${angles[0]}°`} fill={E} size={5.6} />
          <Label at={polar(B2, 11, (180 + dB) / 2)} text={`${angles[1]}°`} fill={E} size={5.6} />
          <Label at={{ x: C2.x, y: C2.y + 10 }} text={`${angles[2]}°`} fill={E} size={5.6} />
        </>
      ) : (
        <Label at={{ x: C2.x + 8, y: C2.y + 1 }} text="C" fill={A} />
      )}
      <Label at={{ x: 60, y: A2.y + 7 }} text={`${c} cm`} fill={I} />
      <Label at={{ x: mid(A2, C2).x - 9, y: mid(A2, C2).y - 2 }} text={`${b} cm`} fill={I} />
      <Label at={{ x: mid(B2, C2).x + 9, y: mid(B2, C2).y - 2 }} text={`${a} cm`} fill={I} />
    </Panel>
  );
};

// ---------- measurement ----------

/** A rectangle drawn to scale: its perimeter as a thick outline (four sides labelled), or its area as unit squares. */
export const MeasureRect = ({ l, b, unit, mode, className }: { l: number; b: number; unit: string; mode: 'perimeter' | 'area'; className?: string }) => {
  const U = Math.min(80 / l, 40 / b);
  const w = l * U;
  const hgt = b * U;
  const x0 = 60 - w / 2;
  const y0 = 12;
  const area = mode === 'area';
  return (
    <Panel h={r3(y0 + hgt + (area ? 15 : 22))} className={className} aria={area
      ? `A rectangle ${l} ${unit} long and ${b} ${unit} wide filled with ${l * b} unit squares: ${l} × ${b} = ${l * b} square ${unit}.`
      : `A rectangle ${l} ${unit} long and ${b} ${unit} wide. Walking round the outside: ${l} + ${b} + ${l} + ${b} = ${2 * (l + b)} ${unit}.`}>
      {area && Array.from({ length: l * b }).map((_, k) => (
        <rect key={k} x={r3(x0 + (k % l) * U)} y={r3(y0 + Math.floor(k / l) * U)} width={r3(U)} height={r3(U)} fill="rgba(52,211,153,0.3)" stroke={E} strokeWidth={0.5} />
      ))}
      <rect x={r3(x0)} y={y0} width={r3(w)} height={r3(hgt)} fill="none" stroke={area ? E : A} strokeWidth={area ? 1 : 2} />
      <Label at={{ x: 60, y: y0 - 5 }} text={`${l} ${unit}`} fill={LINE} />
      <Label at={{ x: x0 - 3, y: y0 + hgt / 2 }} text={`${b} ${unit}`} fill={LINE} anchor="end" />
      {!area && <Label at={{ x: 60, y: y0 + hgt + 7 }} text={`${l} ${unit}`} fill={MUTED} />}
      {!area && <Label at={{ x: x0 + w + 3, y: y0 + hgt / 2 }} text={`${b} ${unit}`} fill={MUTED} anchor="start" />}
      <Label at={{ x: 60, y: y0 + hgt + (area ? 8 : 16) }} text={area ? `${l} × ${b} = ${l * b} ${unit}²` : `${l} + ${b} + ${l} + ${b} = ${2 * (l + b)} ${unit}`} fill={area ? E : A} />
    </Panel>
  );
};

/** A triangle inside its rectangle: same base and height, so the triangle is half the rectangle. */
export const TriangleInRect = ({ base, height, apex, unit, className }: { base: number; height: number; apex: number; unit: string; className?: string }) => {
  const U = Math.min(80 / base, 44 / height);
  const w = base * U;
  const hh = height * U;
  const x0 = 60 - w / 2;
  const y0 = 8;
  const top = { x: x0 + apex * U, y: y0 };
  const bl = { x: x0, y: y0 + hh };
  const br = { x: x0 + w, y: y0 + hh };
  return (
    <Panel h={r3(y0 + hh + 22)} className={className} aria={`A triangle with base ${base} ${unit} and height ${height} ${unit} drawn inside a rectangle ${base} by ${height}. The two pieces outside the triangle together have the same total area as the triangle, so the triangle is half of ${base} × ${height}: ${(base * height) / 2} square ${unit}.`}>
      <rect x={r3(x0)} y={y0} width={r3(w)} height={r3(hh)} fill="rgba(148,163,184,0.12)" stroke={MUTED} strokeWidth={0.7} strokeDasharray="2 1.6" />
      <path d={`M${P(bl)} L${P(br)} L${P(top)} Z`} fill="rgba(129,140,248,0.45)" stroke={I} strokeWidth={1} />
      <line x1={r3(top.x)} y1={y0} x2={r3(top.x)} y2={r3(y0 + hh)} stroke={A} strokeWidth={0.9} strokeDasharray="2 1.4" />
      <path d={`M${r3(top.x)},${r3(y0 + hh - 3.5)} h3.5 v3.5`} fill="none" stroke={A} strokeWidth={0.7} />
      <Label at={{ x: top.x + 3, y: y0 + hh / 2 }} text={`h = ${height} ${unit}`} fill={A} anchor="start" size={5.6} />
      <Label at={{ x: 60, y: y0 + hh + 7 }} text={`base = ${base} ${unit}`} fill={I} size={5.6} />
      <Label at={{ x: 60, y: y0 + hh + 16 }} text={`½ × ${base} × ${height} = ${(base * height) / 2} ${unit}²`} fill={E} />
    </Panel>
  );
};

/** The net of a cube: six square faces, each side × side unit squares. */
export const CubeNet = ({ side, unit, className }: { side: number; unit: string; className?: string }) => {
  const F = 18;
  const cell = F / side;
  const faces: [number, number][] = [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3]];
  const x0 = 60 - (3 * F) / 2;
  const y0 = 6;
  return (
    <Panel h={y0 + 4 * F + 14} className={className} aria={`The net of a cube with sides of ${side} ${unit}: six square faces, each ${side} × ${side} = ${side * side} square ${unit}. 6 × ${side * side} = ${6 * side * side} square ${unit}.`}>
      {faces.map(([c, r], i) => (
        <g key={i}>
          {Array.from({ length: side * side }).map((_, k) => (
            <rect key={k} x={r3(x0 + c * F + (k % side) * cell)} y={r3(y0 + r * F + Math.floor(k / side) * cell)} width={r3(cell)} height={r3(cell)} fill={i % 2 ? 'rgba(129,140,248,0.35)' : 'rgba(52,211,153,0.35)'} stroke="#64748b" strokeWidth={0.5} />
          ))}
          <rect x={r3(x0 + c * F)} y={r3(y0 + r * F)} width={F} height={F} fill="none" stroke={LINE} strokeWidth={0.8} />
        </g>
      ))}
      <Label at={{ x: x0 + 3 * F + 3, y: y0 + 1.5 * F }} text={`${side} ${unit}`} fill={A} anchor="start" size={5.6} />
      <Label at={{ x: 60, y: y0 + 4 * F + 8 }} text={`6 faces × ${side * side} ${unit}² = ${6 * side * side} ${unit}²`} fill={E} size={5.8} />
    </Panel>
  );
};
