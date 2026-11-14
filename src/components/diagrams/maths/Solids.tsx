import type { ReactNode } from 'react';
import { SOLIDS, type SolidName } from './mathsHelpers';
import { r3 } from '../round';

/**
 * 3D objects drawn so faces, edges and vertices can be counted: faces are the shaded flat sides,
 * edges are the lines (hidden ones dashed), vertices are the dots (a hollow dot is hidden at the
 * back). The counts under each solid come from SOLIDS, the same table the tests check.
 */

const INK = '#0f172a';
const FACE = ['#99f6e4', '#5eead4', '#2dd4bf'];
const EDGE = '#fde68a';
const VERT = '#fb7185';

const iso = (cx: number, cy: number, u: number) => (x: number, y: number, z: number) => ({
  x: r3(cx + (x - y) * 0.866 * u),
  y: r3(cy + (x + y) * 0.5 * u - z * u),
});

const pts = (a: { x: number; y: number }[]) => a.map((p) => `${p.x},${p.y}`).join(' ');

const Dot = ({ p, hidden }: { p: { x: number; y: number }; hidden?: boolean }) => (
  <circle cx={p.x} cy={p.y} r={1.5} fill={hidden ? INK : VERT} stroke={VERT} strokeWidth={0.7} />
);

const box = (l: number, b: number, h: number, cx: number, cy: number, u: number): ReactNode => {
  const P = iso(cx, cy, u);
  const v = (x: number, y: number, z: number) => P(x * l, y * b, z * h);
  const top = [v(0, 0, 1), v(1, 0, 1), v(1, 1, 1), v(0, 1, 1)];
  const left = [v(0, 1, 0), v(1, 1, 0), v(1, 1, 1), v(0, 1, 1)];
  const right = [v(1, 0, 0), v(1, 1, 0), v(1, 1, 1), v(1, 0, 1)];
  const hidden = v(0, 0, 0);
  const all = [v(0, 0, 1), v(1, 0, 1), v(1, 1, 1), v(0, 1, 1), v(0, 1, 0), v(1, 1, 0), v(1, 0, 0)];
  return (
    <g strokeLinejoin="round">
      <g stroke={EDGE} strokeWidth={0.8} strokeDasharray="1.4 1.2" fill="none">
        <line x1={hidden.x} y1={hidden.y} x2={v(1, 0, 0).x} y2={v(1, 0, 0).y} />
        <line x1={hidden.x} y1={hidden.y} x2={v(0, 1, 0).x} y2={v(0, 1, 0).y} />
        <line x1={hidden.x} y1={hidden.y} x2={v(0, 0, 1).x} y2={v(0, 0, 1).y} />
      </g>
      <polygon points={pts(top)} fill={FACE[0]} stroke={EDGE} strokeWidth={1} />
      <polygon points={pts(left)} fill={FACE[1]} stroke={EDGE} strokeWidth={1} />
      <polygon points={pts(right)} fill={FACE[2]} stroke={EDGE} strokeWidth={1} />
      {all.map((p, i) => <Dot key={i} p={p} />)}
      <Dot p={hidden} hidden />
    </g>
  );
};

const pyramid = (cx: number, cy: number, u: number): ReactNode => {
  const P = iso(cx, cy, u);
  const a = P(0, 0, 0), b = P(1, 0, 0), c = P(1, 1, 0), d = P(0, 1, 0), apex = P(0.5, 0.5, 1.15);
  return (
    <g strokeLinejoin="round">
      <g stroke={EDGE} strokeWidth={0.8} strokeDasharray="1.4 1.2" fill="none">
        <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        <line x1={a.x} y1={a.y} x2={d.x} y2={d.y} />
        <line x1={a.x} y1={a.y} x2={apex.x} y2={apex.y} />
      </g>
      <polygon points={pts([d, c, apex])} fill={FACE[1]} stroke={EDGE} strokeWidth={1} />
      <polygon points={pts([c, b, apex])} fill={FACE[2]} stroke={EDGE} strokeWidth={1} />
      <line x1={d.x} y1={d.y} x2={apex.x} y2={apex.y} stroke={EDGE} strokeWidth={1} />
      <line x1={b.x} y1={b.y} x2={apex.x} y2={apex.y} stroke={EDGE} strokeWidth={1} />
      {[b, c, d, apex].map((p, i) => <Dot key={i} p={p} />)}
      <Dot p={a} hidden />
    </g>
  );
};

const cylinder = (cx: number, cy: number): ReactNode => (
  <g strokeLinejoin="round">
    <path d={`M${cx - 9} ${cy - 10} V${cy + 10} A9 3.4 0 0 0 ${cx + 9} ${cy + 10} V${cy - 10}`} fill={FACE[1]} stroke={EDGE} strokeWidth={1} />
    <ellipse cx={cx} cy={cy - 10} rx={9} ry={3.4} fill={FACE[0]} stroke={EDGE} strokeWidth={1} />
    <path d={`M${cx - 9} ${cy + 10} A9 3.4 0 0 0 ${cx + 9} ${cy + 10}`} fill="none" stroke={EDGE} strokeWidth={1.4} />
  </g>
);

const cone = (cx: number, cy: number): ReactNode => (
  <g strokeLinejoin="round">
    <path d={`M${cx - 10} ${cy + 9} L${cx} ${cy - 13} L${cx + 10} ${cy + 9} A10 3.6 0 0 1 ${cx - 10} ${cy + 9} Z`} fill={FACE[1]} stroke={EDGE} strokeWidth={1} />
    <path d={`M${cx - 10} ${cy + 9} A10 3.6 0 0 0 ${cx + 10} ${cy + 9}`} fill="none" stroke={EDGE} strokeWidth={1.4} />
    <Dot p={{ x: cx, y: cy - 13 }} />
  </g>
);

const sphere = (cx: number, cy: number): ReactNode => (
  <g>
    <circle cx={cx} cy={cy} r={12} fill={FACE[1]} stroke={EDGE} strokeWidth={1} />
    <circle cx={cx - 4} cy={cy - 4} r={4.4} fill={FACE[0]} opacity={0.7} />
  </g>
);

const draw = (name: SolidName, cx: number, cy: number): ReactNode => {
  switch (name) {
    case 'cube': return box(1, 1, 1, cx, cy + 3, 12);
    case 'rectangular prism': return box(1.7, 1, 0.9, cx - 3, cy + 4, 10.5);
    case 'square pyramid': return pyramid(cx, cy + 1, 13);
    case 'cylinder': return cylinder(cx, cy);
    case 'cone': return cone(cx, cy);
    case 'sphere': return sphere(cx, cy);
  }
};

const LABEL: Record<SolidName, string> = {
  cube: 'Cube',
  'rectangular prism': 'Rectangular prism',
  'square pyramid': 'Square pyramid',
  cylinder: 'Cylinder',
  cone: 'Cone',
  sphere: 'Sphere',
};

const SolidsRow = ({ names, className }: { names: SolidName[]; className?: string }) => {
  const n = names.length;
  const w = 120 / n;
  return (
    <svg
      viewBox="0 0 120 76"
      role="img"
      aria-label={names.map((nm) => `${LABEL[nm]}: ${SOLIDS[nm].faces} face${SOLIDS[nm].faces === 1 ? '' : 's'}, ${SOLIDS[nm].edges} edge${SOLIDS[nm].edges === 1 ? '' : 's'}, ${SOLIDS[nm].vertices} vert${SOLIDS[nm].vertices === 1 ? 'ex' : 'ices'}`).join('. ') + '.'}
      className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      {names.map((nm, i) => {
        const cx = w * i + w / 2;
        const f = SOLIDS[nm];
        return (
          <g key={nm}>
            {draw(nm, cx, 20)}
            <text textAnchor="middle" fontSize={5.6} fontWeight={800} fill="#f8fafc">
              {LABEL[nm].includes(' ') ? (
                <>
                  <tspan x={cx} y={43}>{LABEL[nm].split(' ')[0]}</tspan>
                  <tspan x={cx} y={49}>{LABEL[nm].split(' ')[1]}</tspan>
                </>
              ) : (
                <tspan x={cx} y={43}>{LABEL[nm]}</tspan>
              )}
            </text>
            <g fontSize={4.8} fontWeight={800} textAnchor="middle" transform={LABEL[nm].includes(' ') ? 'translate(0 6)' : undefined}>
              <text x={cx} y={50} fill="#5eead4">{f.faces} face{f.faces === 1 ? '' : 's'}</text>
              <text x={cx} y={57} fill={EDGE}>{f.edges} edge{f.edges === 1 ? '' : 's'}</text>
              <text x={cx} y={64} fill={VERT}>{f.vertices} vert{f.vertices === 1 ? 'ex' : 'ices'}</text>
            </g>
          </g>
        );
      })}
    </svg>
  );
};

export default SolidsRow;
