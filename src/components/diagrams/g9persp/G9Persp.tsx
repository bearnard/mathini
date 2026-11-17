import { r3 } from '../round';
import { NORMALS, room, shade, towardVP, visibleFaces, vpBox, type Pt } from './perspectiveHelpers';

/** Pictures for the Grade 9 single vanishing point lesson. Every position comes from perspectiveHelpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const poly = (pts: Pt[]) => pts.map((p) => `${p.x},${p.y}`).join(' ');
/** Front face as bottom-left, bottom-right, top-right, top-left (y goes down the page). */
const rectFront = (x: number, y: number, w: number, h: number): Pt[] => [{ x, y: y + h }, { x: x + w, y: y + h }, { x: x + w, y }, { x, y }];
const lerp = (a: Pt, b: Pt, k: number): Pt => ({ x: r3(a.x + (b.x - a.x) * k), y: r3(a.y + (b.y - a.y) * k) });
const wood = (s: number) => `hsl(28 52% ${Math.round(14 + s * 46)}%)`;

// ---------- eye level decides which faces you see ----------

const FaceBox = ({ front, vp, t }: { front: Pt[]; vp: Pt; t: number }) => {
  const b = vpBox(front, vp, t);
  const v = visibleFaces(front, vp);
  return (
    <g stroke={LINE} strokeWidth={0.9} strokeLinejoin="round">
      {v.top ? <polygon points={poly([front[3], front[2], b.back[2], b.back[3]])} fill={BLUE} fillOpacity={0.55} /> : null}
      {v.bottom ? <polygon points={poly([front[0], front[1], b.back[1], b.back[0]])} fill={ROSE} fillOpacity={0.5} /> : null}
      {v.left ? <polygon points={poly([front[0], front[3], b.back[3], b.back[0]])} fill={BLUE} fillOpacity={0.35} /> : null}
      {v.right ? <polygon points={poly([front[1], front[2], b.back[2], b.back[1]])} fill={BLUE} fillOpacity={0.35} /> : null}
      <polygon points={poly(front)} fill={BLUE} fillOpacity={0.15} strokeWidth={1.4} />
    </g>
  );
};

export const EyeLevel = ({ t }: { t: number }) => {
  const vp: Pt = { x: 60, y: 30 };
  return (
    <Panel h={72} aria="Two boxes drawn in one-point perspective with the horizon at eye level and one vanishing point on it. The box below the horizon shows its top face, because you look down on it. The box above the horizon shows its underside, because you look up at it. Lines that go back meet at the vanishing point.">
      <line x1={4} y1={vp.y} x2={116} y2={vp.y} stroke={AMBER} strokeWidth={0.7} />
      <T x={6} y={vp.y - 2} size={4} anchor="start" fill={AMBER}>horizon = eye level</T>
      <circle cx={vp.x} cy={vp.y} r={1.6} fill={AMBER} />
      <T x={vp.x} y={vp.y + 6} size={4} fill={AMBER}>vanishing point</T>
      <FaceBox front={rectFront(12, 44, 28, 18)} vp={vp} t={t} />
      <FaceBox front={rectFront(84, 6, 28, 16)} vp={vp} t={t} />
      <T x={26} y={69} size={4} fill={BLUE}>below: the top</T>
      <T x={98} y={29} size={4} fill={ROSE}>above: underside</T>
    </Panel>
  );
};

// ---------- a shaded wooden block ----------

export const WoodBlock = ({ t }: { t: number }) => {
  const vp: Pt = { x: 100, y: 12 };
  const front = rectFront(18, 28, 40, 26);
  const b = vpBox(front, vp, t);
  const top = shade(NORMALS.top), fr = shade(NORMALS.front), side = shade(NORMALS.right);
  const s = 24; // how far the shadow reaches to the right, on the front plane
  const shadow = [front[1], b.back[1], { x: r3(b.back[1].x + s * (1 - t)), y: b.back[1].y }, { x: r3(front[1].x + s), y: front[1].y }];
  const grainTop = [1, 2, 3, 4, 5].map((i) => {
    const p = lerp(front[3], front[2], i / 6);
    return { p, q: towardVP(p, vp, t) };
  });
  const grainFront = [1, 2, 3].map((i) => ({ a: lerp(front[3], front[0], i / 4), c: lerp(front[2], front[1], i / 4) }));
  return (
    <Panel h={66} aria={`A wooden block drawn in one-point perspective. Light comes from the upper left, so the top is the lightest face, the front is a little darker, and the right side, turned away from the light, is the darkest. A cast shadow falls to the right on the ground. The wood grain on the top follows lines that run to the vanishing point.`}>
      <rect x={0} y={vp.y} width={120} height={66 - vp.y} fill="#334155" fillOpacity={0.55} />
      <polygon points={poly(shadow)} fill="#000" fillOpacity={0.6} />
      <polygon points={poly([front[3], front[2], b.back[2], b.back[3]])} fill={wood(top)} />
      <polygon points={poly([front[1], front[2], b.back[2], b.back[1]])} fill={wood(side)} />
      <polygon points={poly(front)} fill={wood(fr)} />
      {grainTop.map((g, i) => (
        <line key={i} x1={g.p.x} y1={g.p.y} x2={g.q.x} y2={g.q.y} stroke="#000" strokeOpacity={0.28} strokeWidth={0.5} />
      ))}
      {grainFront.map((g, i) => (
        <line key={i} x1={g.a.x} y1={g.a.y} x2={g.c.x} y2={g.c.y} stroke="#000" strokeOpacity={0.22} strokeWidth={0.5} />
      ))}
      <g stroke={LINE} strokeWidth={0.9} strokeLinejoin="round" fill="none">
        <polygon points={poly(front)} strokeWidth={1.4} />
        <polygon points={poly([front[3], front[2], b.back[2], b.back[3]])} />
        <polygon points={poly([front[1], front[2], b.back[2], b.back[1]])} />
      </g>
      <T x={80} y={28} size={4.2} anchor="start" fill={AMBER}>top: lightest</T>
      <T x={80} y={37} size={4.2} anchor="start" fill={AMBER}>front: middle</T>
      <T x={80} y={46} size={4.2} anchor="start" fill={AMBER}>side: darkest</T>
      <T x={80} y={61} size={4.2} anchor="start" fill={LINE}>cast shadow</T>
      <T x={4} y={7} size={4.2} anchor="start" fill={MUTED}>light from the upper left</T>
    </Panel>
  );
};

// ---------- the inside of a classroom ----------

export const ClassroomView = ({ t }: { t: number }) => {
  const page = { w: 120, h: 64 };
  const vp: Pt = { x: 62, y: 30 };
  const { near, back } = room(page, vp, t);
  const bw = back[1].x - back[0].x, bh = back[0].y - back[3].y;
  const on = (fx: number, fy: number): Pt => ({ x: r3(back[0].x + bw * fx), y: r3(back[0].y - bh * fy) });
  const board = [on(0.15, 0.7), on(0.85, 0.7), on(0.85, 0.3), on(0.15, 0.3)];
  const desk = vpBox(rectFront(48, 48, 26, 10), vp, 0.12);
  return (
    <Panel h={64} aria={`The inside of a classroom in one-point perspective. The back wall faces you, so it is drawn as a true rectangle. The floor, ceiling and side walls run back to one vanishing point, so the back wall is smaller than the page. A board hangs on the back wall and a desk stands on the floor.`}>
      <polygon points={poly([near[0], near[1], back[1], back[0]])} fill="#92400e" fillOpacity={0.35} />
      <polygon points={poly([near[3], near[2], back[2], back[3]])} fill="#94a3b8" fillOpacity={0.14} />
      <polygon points={poly([near[0], back[0], back[3], near[3]])} fill={BLUE} fillOpacity={0.16} />
      <polygon points={poly([near[1], back[1], back[2], near[2]])} fill={BLUE} fillOpacity={0.24} />
      <polygon points={poly(back)} fill="#cbd5e1" fillOpacity={0.2} stroke={LINE} strokeWidth={1.1} />
      {near.map((p, i) => (
        <line key={i} x1={p.x} y1={p.y} x2={back[i].x} y2={back[i].y} stroke={LINE} strokeWidth={0.9} />
      ))}
      <polygon points={poly(board)} fill="#064e3b" stroke={LINE} strokeWidth={0.8} />
      <T x={r3((board[0].x + board[1].x) / 2)} y={r3((board[0].y + board[3].y) / 2 + 1.4)} size={3.8} fill={LINE}>board</T>
      <polygon points={poly([desk.front[3], desk.front[2], desk.back[2], desk.back[3]])} fill={wood(0.7)} stroke={LINE} strokeWidth={0.7} />
      <polygon points={poly(desk.front)} fill={wood(0.45)} stroke={LINE} strokeWidth={0.9} />
      <circle cx={vp.x} cy={vp.y} r={1.3} fill={AMBER} />
      <T x={4} y={7} size={3.8} anchor="start" fill={AMBER}>amber dot = vanishing point</T>
    </Panel>
  );
};
