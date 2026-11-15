import { r3 } from '../round';
import { A, E, I, INK, LINE, Panel } from './Grade7Pictures';
import { CROSS_NET, cubeMeasures, prismSurface, volumeScale } from './grade7Helpers2';

/**
 * Grade 7 pictures for 3D objects: nets drawn to scale and gridded cubes. Sizes and the numbers
 * written on them come from grade7Helpers2.ts. Same style as Grade7Pictures: dark panel, 120-unit viewBox.
 */

const T = ({ x, y, children, fill = LINE, size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{children}</text>
);

/** The cross-shaped net of a cube. mode "faces" numbers the six squares; mode "area" works out the surface area for a side length. */
export const CubeNet = ({ side, mode, className }: { side: number; mode: 'faces' | 'area'; className?: string }) => {
  const m = cubeMeasures(side);
  const u = 18;
  const x0 = 60 - 2 * u;
  const y0 = 11;
  return (
    <Panel
      h={y0 + 3 * u + 16}
      className={className}
      aria={mode === 'faces'
        ? 'The net of a cube: six equal squares in a cross shape, four in a row with one above and one below. Folded up, the six squares become the six faces of a cube.'
        : `The net of a cube with side ${side} centimetres. Each of the six squares has area ${side} × ${side} = ${m.face} square centimetres, so the surface area is 6 × ${m.face} = ${m.surface} square centimetres.`}
    >
      {CROSS_NET.map(([c, r], i) => (
        <g key={i}>
          <rect x={x0 + c * u} y={y0 + r * u} width={u} height={u} fill={i === 2 ? 'rgba(251,191,36,0.35)' : 'rgba(129,140,248,0.3)'} stroke={i === 2 ? A : I} strokeWidth={0.9} />
          {mode === 'faces' && <T x={x0 + c * u + u / 2} y={y0 + r * u + u / 2 + 2.4} size={7}>{i + 1}</T>}
        </g>
      ))}
      {mode === 'area' && (
        <>
          <T x={x0 + 1.5 * u} y={y0 + 1.5 * u + 2.2} fill={A} size={5.4}>{m.face} cm²</T>
          <T x={x0 + 1.5 * u} y={y0 - 2.5} fill={LINE} size={5.4}>{side} cm</T>
        </>
      )}
      <T x={60} y={y0 + 3 * u + 10} fill={mode === 'faces' ? LINE : A} size={6}>
        {mode === 'faces' ? '6 squares fold into a cube' : `SA = 6 × ${m.face} = ${m.surface} cm²`}
      </T>
    </Panel>
  );
};

/** The net of a rectangular prism l × b × h, drawn to scale. Opposite faces share a colour, because they are equal. */
export const PrismNet = ({ l, b, h, className }: { l: number; b: number; h: number; className?: string }) => {
  const s = prismSurface(l, b, h);
  const u = Math.min(100 / (l + 2 * h), 84 / (2 * b + 2 * h));
  const x0 = 60 - ((l + 2 * h) * u) / 2;
  const y0 = 6;
  const faces: { x: number; y: number; w: number; hh: number; kind: 'lb' | 'lh' | 'bh' }[] = [
    { x: h, y: 0, w: l, hh: h, kind: 'lh' }, // back
    { x: h, y: h, w: l, hh: b, kind: 'lb' }, // top
    { x: h, y: h + b, w: l, hh: h, kind: 'lh' }, // front
    { x: h, y: 2 * h + b, w: l, hh: b, kind: 'lb' }, // bottom
    { x: 0, y: h, w: h, hh: b, kind: 'bh' }, // left side
    { x: h + l, y: h, w: h, hh: b, kind: 'bh' }, // right side
  ];
  const fill = { lb: 'rgba(129,140,248,0.35)', lh: 'rgba(52,211,153,0.35)', bh: 'rgba(251,191,36,0.35)' };
  const stroke = { lb: I, lh: E, bh: A };
  const bottom = y0 + (2 * b + 2 * h) * u;
  const cx = (f: (typeof faces)[number]) => x0 + (f.x + f.w / 2) * u;
  const cy = (f: (typeof faces)[number]) => y0 + (f.y + f.hh / 2) * u + 2;
  return (
    <Panel h={bottom + 17} className={className} aria={`The net of a rectangular prism ${l} by ${b} by ${h} centimetres. It has three pairs of equal faces: two of ${l} × ${b} = ${s.lb}, two of ${l} × ${h} = ${s.lh} and two of ${b} × ${h} = ${s.bh} square centimetres. The surface area is 2 × (${s.lb} + ${s.lh} + ${s.bh}) = ${s.surface} square centimetres.`}>
      {faces.map((f, i) => (
        <rect key={i} x={r3(x0 + f.x * u)} y={r3(y0 + f.y * u)} width={r3(f.w * u)} height={r3(f.hh * u)} fill={fill[f.kind]} stroke={stroke[f.kind]} strokeWidth={0.9} />
      ))}
      <T x={cx(faces[1])} y={cy(faces[1])} fill={LINE} size={5}>{l} × {b} = {s.lb}</T>
      <T x={cx(faces[2])} y={cy(faces[2])} fill={LINE} size={5}>{l} × {h} = {s.lh}</T>
      <T x={cx(faces[5])} y={cy(faces[5])} fill={LINE} size={5}>{s.bh}</T>
      <T x={60} y={bottom + 11.5} fill={A} size={5.8}>SA = 2 × ({s.lb} + {s.lh} + {s.bh}) = {s.surface} cm²</T>
    </Panel>
  );
};

/** One gridded cube in isometric view: n small cubes along each edge. */
const IsoCube = ({ n, u, cx, bottom }: { n: number; u: number; cx: number; bottom: number }) => {
  const base = bottom - n * u;
  const P = (x: number, y: number, z: number) => `${r3(cx + (x - y) * 0.866 * u)},${r3(base + (x + y) * 0.5 * u - z * u)}`;
  const lines: [string, string][] = [];
  for (let i = 1; i < n; i++) {
    lines.push([P(i, 0, n), P(i, n, n)], [P(0, i, n), P(n, i, n)]); // top
    lines.push([P(i, n, 0), P(i, n, n)], [P(0, n, i), P(n, n, i)]); // left
    lines.push([P(n, i, 0), P(n, i, n)], [P(n, 0, i), P(n, n, i)]); // right
  }
  return (
    <g strokeLinejoin="round">
      <polygon points={`${P(0, 0, n)} ${P(n, 0, n)} ${P(n, n, n)} ${P(0, n, n)}`} fill="#c7d2fe" />
      <polygon points={`${P(0, n, 0)} ${P(n, n, 0)} ${P(n, n, n)} ${P(0, n, n)}`} fill="#818cf8" />
      <polygon points={`${P(n, 0, 0)} ${P(n, n, 0)} ${P(n, n, n)} ${P(n, 0, n)}`} fill="#6366f1" />
      <g stroke={INK} strokeWidth={0.4}>
        {lines.map(([a, b], i) => {
          const [x1, y1] = a.split(',');
          const [x2, y2] = b.split(',');
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </g>
  );
};

/** A cube of side s next to a cube of side k·s: every edge k times as long, the volume k × k × k times as big. */
export const CubeScale = ({ side, k, className }: { side: number; k: number; className?: string }) => {
  const small = cubeMeasures(side);
  const big = cubeMeasures(side * k);
  const u = Math.min(6.6, 50 / (2 * side * k));
  const bottom = 62;
  return (
    <Panel h={86} className={className} aria={`Two cubes made of 1 centimetre cubes. The small cube has side ${side} centimetres and volume ${small.volume} cubic centimetres. The big cube has side ${side * k} centimetres, ${k} times as long, and volume ${big.volume} cubic centimetres, which is ${volumeScale(k)} times as much.`}>
      <IsoCube n={side} u={u} cx={28} bottom={bottom} />
      <IsoCube n={side * k} u={u} cx={82} bottom={bottom} />
      <T x={28} y={bottom + 9} fill={LINE} size={5.4}>{side} cm: {small.volume} cm³</T>
      <T x={82} y={bottom + 9} fill={LINE} size={5.4}>{side * k} cm: {big.volume} cm³</T>
      <T x={60} y={bottom + 19} fill={A} size={5.8}>edges × {k}, volume × {volumeScale(k)}</T>
    </Panel>
  );
};
