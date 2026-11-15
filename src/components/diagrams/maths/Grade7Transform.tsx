import { r3 } from '../round';
import { A, E, I, INK, LINE, Panel } from './Grade7Pictures';
import { POLYHEDRA, type Pt2 } from './grade7Helpers2';

/**
 * Grade 7 transformation pictures: a shape and its image on a square grid (the image is computed by
 * translate / reflectInVertical / rotate90cw / enlarge in grade7Helpers2.ts), and a triangular prism
 * with its faces, edges and vertices. Same style as Grade7Pictures.
 */

const T = ({ x, y, children, fill = LINE, size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{children}</text>
);

/**
 * A grid `cols` × `rows` with a shape (indigo) and its image (green). Optional: a mirror line x = m,
 * a centre of rotation or enlargement, an arrow from the first corner to its image. The first corner
 * is labelled A and A′.
 */
export const GridTransform = ({ shape, image, cols = 10, rows = 6, mirror, centre, arrow, caption, aria, className }: { shape: Pt2[]; image: Pt2[]; cols?: number; rows?: number; mirror?: number; centre?: Pt2; arrow?: boolean; caption?: string; aria: string; className?: string }) => {
  const u = Math.min(10, 104 / cols, 64 / rows);
  const X0 = 60 - (cols * u) / 2;
  const Y0 = 8 + rows * u;
  const px = (x: number) => r3(X0 + x * u);
  const py = (y: number) => r3(Y0 - y * u);
  const poly = (pts: Pt2[]) => pts.map(([x, y]) => `${px(x)},${py(y)}`).join(' ');
  const label = (p: Pt2, others: Pt2[], text: string, color: string) => {
    // put the letter just outside the shape, away from its middle
    const mx = others.reduce((s, q) => s + q[0], 0) / others.length;
    const my = others.reduce((s, q) => s + q[1], 0) / others.length;
    const dx = p[0] >= mx ? 1 : -1;
    const dy = p[1] >= my ? 1 : -1;
    return <T x={px(p[0]) + dx * 3.6} y={py(p[1]) - dy * 3 + 2} fill={color} size={5.4}>{text}</T>;
  };
  return (
    <Panel h={Y0 + (caption ? 16 : 8)} className={className} aria={aria}>
      <g stroke="#334155" strokeWidth={0.4}>
        {Array.from({ length: cols + 1 }).map((_, i) => <line key={`v${i}`} x1={px(i)} y1={py(0)} x2={px(i)} y2={py(rows)} />)}
        {Array.from({ length: rows + 1 }).map((_, j) => <line key={`h${j}`} x1={px(0)} y1={py(j)} x2={px(cols)} y2={py(j)} />)}
      </g>
      {mirror !== undefined && <line x1={px(mirror)} y1={py(0) + 2} x2={px(mirror)} y2={py(rows) - 2} stroke={A} strokeWidth={1.2} strokeDasharray="2.4 1.6" />}
      <polygon points={poly(shape)} fill="rgba(129,140,248,0.35)" stroke={I} strokeWidth={1} strokeLinejoin="round" />
      <polygon points={poly(image)} fill="rgba(52,211,153,0.35)" stroke={E} strokeWidth={1} strokeLinejoin="round" />
      {arrow && (
        <g stroke={A} strokeWidth={0.9} fill="none">
          <path d={`M${px(shape[0][0])},${py(shape[0][1])} L${px(image[0][0])},${py(image[0][1])}`} strokeDasharray="1.8 1.2" />
          <circle cx={px(image[0][0])} cy={py(image[0][1])} r={1.3} fill={A} />
        </g>
      )}
      {centre && <circle cx={px(centre[0])} cy={py(centre[1])} r={1.8} fill={A} stroke={INK} strokeWidth={0.5} />}
      {!caption && label(shape[0], shape, 'A', I)}
      {!caption && label(image[0], image, 'A′', E)}
      {caption && <T x={60} y={Y0 + 11} fill={A} size={5.8}>{caption}</T>}
    </Panel>
  );
};

/** A triangular prism with hidden edges dashed and the hidden vertex hollow, with its counts underneath. */
export const TriPrism = ({ className }: { className?: string }) => {
  const f = POLYHEDRA['triangular prism'];
  const depth = { x: 40, y: -14 };
  const front: Pt2[] = [[22, 64], [50, 64], [36, 40]];
  const back = front.map(([x, y]) => [x + depth.x, y + depth.y] as Pt2);
  const [a, b, c] = front;
  const [a2, b2, c2] = back;
  const seg = (p: Pt2, q: Pt2, hidden = false, key = '') => (
    <line key={key} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={A} strokeWidth={0.9} strokeDasharray={hidden ? '1.6 1.3' : undefined} />
  );
  return (
    <Panel h={84} className={className} aria={`A triangular prism: two triangle faces at the ends joined by three rectangles. It has ${f.faces} faces, ${f.edges} edges and ${f.vertices} vertices. Dashed edges and the hollow corner are hidden at the back.`}>
      <polygon points={`${b[0]},${b[1]} ${c[0]},${c[1]} ${c2[0]},${c2[1]} ${b2[0]},${b2[1]}`} fill="rgba(94,234,212,0.3)" />
      <polygon points={`${a[0]},${a[1]} ${b[0]},${b[1]} ${c[0]},${c[1]}`} fill="rgba(129,140,248,0.45)" />
      {seg(a2, a, true, 'h1')}
      {seg(a2, b2, true, 'h2')}
      {seg(a2, c2, true, 'h3')}
      {[[a, b], [b, c], [c, a], [b, b2], [c, c2], [b2, c2]].map(([p, q], i) => seg(p as Pt2, q as Pt2, false, `v${i}`))}
      {front.concat([b2, c2]).map(([x, y], i) => <circle key={i} cx={x} cy={y} r={1.5} fill="#fb7185" stroke="#fb7185" strokeWidth={0.6} />)}
      <circle cx={a2[0]} cy={a2[1]} r={1.5} fill={INK} stroke="#fb7185" strokeWidth={0.6} />
      <T x={8} y={14} fill="#5eead4" size={5.4} anchor="start">{f.faces} faces</T>
      <T x={8} y={22} fill={A} size={5.4} anchor="start">{f.edges} edges</T>
      <T x={8} y={30} fill="#fb7185" size={5.4} anchor="start">{f.vertices} vertices</T>
      <T x={60} y={78} size={5.8}>Triangular prism</T>
    </Panel>
  );
};
