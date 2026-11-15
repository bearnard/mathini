import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from './SciencePictures';
import { ELEMENTS, phColor, type Kind } from './matterHelpers';
import { PLANETS, ellipse, speed, weight, G_EARTH, G_MOON } from './motionHelpers';

/**
 * Grade 8 pictures: matter and cycles, planets and orbits, motion and forces. Positions that carry
 * meaning come from the tested helpers (motionHelpers.ts, matterHelpers.ts). At most six labels each
 * (a few ordering pictures, such as the planets, name every item because the order is the point).
 */

/* ---------- a flow between a few boxes (the three cycles) ---------- */

export interface FlowNode { id: string; label: string; x: number; y: number; color: string }
export interface FlowEdge { from: string; to: string; label: string; bend?: number; lx?: number; ly?: number }

const boxW = (label: string) => Math.max(26, label.length * 2.9 + 8);
const BOX_H = 12;

/** Where the ray from the centre of a box towards (tx, ty) leaves the box. */
const leave = (n: FlowNode, tx: number, ty: number, pad = 1.5) => {
  const w = boxW(n.label) / 2 + pad;
  const h = BOX_H / 2 + pad;
  const dx = tx - n.x;
  const dy = ty - n.y;
  const t = Math.min(w / Math.max(Math.abs(dx), 1e-6), h / Math.max(Math.abs(dy), 1e-6));
  return { x: n.x + dx * t, y: n.y + dy * t };
};

export const FlowDiagram = ({ nodes, edges, id, title, desc }: { nodes: FlowNode[]; edges: FlowEdge[]; id: string; title: string; desc: string }) => {
  const by = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <svg viewBox="0 0 160 100" role="img" aria-labelledby={`${id}-t ${id}-d`} className={cls} style={st}>
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{desc}</desc>
      {edges.map((e) => {
        const a = by[e.from];
        const b = by[e.to];
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const len = Math.hypot(b.x - a.x, b.y - a.y);
        const nx = -(b.y - a.y) / len;
        const ny = (b.x - a.x) / len;
        const bend = e.bend ?? 0;
        const cx = mx + nx * bend * 2;
        const cy = my + ny * bend * 2;
        const p0 = leave(a, cx, cy);
        const p1 = leave(b, cx, cy, 2);
        const ang = Math.atan2(p1.y - cy, p1.x - cx);
        const head = 3.6;
        const q = (d: number) => `${r3(p1.x - head * Math.cos(ang + d))},${r3(p1.y - head * Math.sin(ang + d))}`;
        const tx = 0.25 * p0.x + 0.5 * cx + 0.25 * p1.x;
        const ty = 0.25 * p0.y + 0.5 * cy + 0.25 * p1.y;
        return (
          <g key={`${e.from}-${e.to}-${e.label}`}>
            <path d={`M${r3(p0.x)} ${r3(p0.y)} Q${r3(cx)} ${r3(cy)} ${r3(p1.x - 1.5 * Math.cos(ang))} ${r3(p1.y - 1.5 * Math.sin(ang))}`} fill="none" stroke={SOFT} strokeWidth={1.1} />
            <polygon points={`${r3(p1.x)},${r3(p1.y)} ${q(0.5)} ${q(-0.5)}`} fill={SOFT} />
            {e.label && <T x={e.lx ?? r3(tx + nx * 6)} y={e.ly ?? r3(ty + ny * 6 + 1.5)} size={4.6} fill="#fde68a">{e.label}</T>}
          </g>
        );
      })}
      {nodes.map((n) => (
        <g key={n.id}>
          <rect x={r3(n.x - boxW(n.label) / 2)} y={n.y - BOX_H / 2} width={r3(boxW(n.label))} height={BOX_H} rx={4} fill="#0b1220" stroke={n.color} strokeWidth={1} />
          <T x={n.x} y={n.y + 2} fill={n.color} size={5.4}>{n.label}</T>
        </g>
      ))}
    </svg>
  );
};

/* ---------- planets in order ---------- */

const PLANET_LOOK: Record<(typeof PLANETS)[number], { r: number; fill: string }> = {
  Mercury: { r: 2.4, fill: '#a8a29e' },
  Venus: { r: 3.4, fill: '#fcd34d' },
  Earth: { r: 3.6, fill: '#3b82f6' },
  Mars: { r: 2.9, fill: '#ef4444' },
  Jupiter: { r: 9.5, fill: '#fdba74' },
  Saturn: { r: 8, fill: '#fde68a' },
  Uranus: { r: 5.4, fill: '#67e8f9' },
  Neptune: { r: 5.2, fill: '#2563eb' },
};

export const PlanetOrder = () => {
  const xs = [34, 46, 59, 72, 92, 116, 136, 152];
  return (
    <svg viewBox="0 0 160 76" role="img" aria-labelledby="po-t po-d" className={cls} style={st}>
      <title id="po-t">The planets in order from the Sun</title>
      <desc id="po-d">{`The Sun is at the centre of the solar system. In order outwards the planets are ${PLANETS.join(', ')}. The first four are small and rocky and the last four are much larger. Not to scale.`}</desc>
      <circle cx={-2} cy={30} r={22} fill="#fbbf24" />
      <T x={10} y={33} fill="#78350f" size={5.6}>Sun</T>
      {PLANETS.map((p, i) => {
        const { r, fill } = PLANET_LOOK[p];
        return (
          <g key={p}>
            {p === 'Saturn' && <ellipse cx={xs[i]} cy={30} rx={r + 5.5} ry={2.4} fill="none" stroke="#fde68a" strokeWidth={1} transform={`rotate(-18 ${xs[i]} 30)`} />}
            <circle cx={xs[i]} cy={30} r={r} fill={fill} />
            <T x={xs[i]} y={50 + (i % 2) * 8} size={4.8} anchor={i === 7 ? 'end' : 'middle'} fill={p === 'Earth' ? '#93c5fd' : SOFT}>{p}</T>
          </g>
        );
      })}
      <T x={80} y={72} size={4.6}>not to scale: the first four are small and rocky</T>
    </svg>
  );
};

/* ---------- a planet's orbit and a comet's orbit ---------- */

export const OrbitShapes = () => {
  const comet = ellipse(70, 0.8);
  const cx = 84;
  const cy = 46;
  const sunX = cx - comet.c;
  // The comet sits ON its orbit (angle 215 degrees on the ellipse, near the Sun) and its tail points away from the Sun.
  const t = (215 * Math.PI) / 180;
  const kx = cx + comet.a * Math.cos(t);
  const ky = cy + comet.b * Math.sin(t);
  const dx = kx - sunX;
  const dy = ky - cy;
  const dl = Math.hypot(dx, dy);
  return (
    <svg viewBox="0 0 160 96" role="img" aria-labelledby="os-t os-d" className={cls} style={st}>
      <title id="os-t">A planet's orbit and a comet's orbit</title>
      <desc id="os-d">A planet travels round the Sun on a nearly circular path. A comet, which is made of ice and dust, travels on a very long, stretched-out path called an elliptical orbit, passing close to the Sun and then far away.</desc>
      <ellipse cx={cx} cy={cy} rx={comet.a} ry={comet.b} fill="none" stroke="#fb923c" strokeWidth={1} strokeDasharray="3 2" />
      <circle cx={sunX} cy={cy} r={17} fill="none" stroke="#38bdf8" strokeWidth={1} />
      <circle cx={sunX} cy={cy} r={6} fill="#fbbf24" />
      <circle cx={sunX + 17} cy={cy} r={2.4} fill="#38bdf8" />
      <circle cx={r3(kx)} cy={r3(ky)} r={2.2} fill="#f1f5f9" />
      <line x1={r3(kx + (dx / dl) * 2)} y1={r3(ky + (dy / dl) * 2)} x2={r3(kx + (dx / dl) * 15)} y2={r3(ky + (dy / dl) * 15)} stroke="#e2e8f0" strokeWidth={1.4} opacity={0.6} />
      <T x={sunX} y={cy + 33} size={4.8} fill="#fcd34d">Sun</T>
      <T x={r3(cx + 34)} y={cy - 6} size={4.8} fill="#7dd3fc">planet: nearly circular orbit</T>
      <T x={r3(cx + 34)} y={cy + 6} size={4.8} fill="#fdba74">comet: long, stretched orbit</T>
    </svg>
  );
};

/* ---------- weight on Earth and on the Moon ---------- */

export const WeightBars = ({ mass = 60 }: { mass?: number }) => {
  const earth = weight(mass, G_EARTH);
  const moon = weight(mass, G_MOON);
  const L = 100;
  const W = (w: number) => r3((w / earth) * L);
  return (
    <svg viewBox="0 0 150 70" role="img" aria-labelledby="wb-t wb-d" className={cls} style={st}>
      <title id="wb-t">Weight on Earth and on the Moon</title>
      <desc id="wb-d">{`A person of mass ${mass} kilograms weighs ${earth} newtons on Earth and ${moon} newtons on the Moon, because the Moon's gravity is weaker. The mass is the same in both places.`}</desc>
      <T x={75} y={10} size={5.4}>{`mass ${mass} kg in both places`}</T>
      <rect x={30} y={18} width={W(earth)} height={12} rx={2} fill="#38bdf8" />
      <T x={26} y={27} anchor="end" size={5.2} fill="#7dd3fc">Earth</T>
      <T x={r3(30 + W(earth) - 3)} y={27} anchor="end" size={5.2} fill="#0c4a6e">{`${earth} N`}</T>
      <rect x={30} y={38} width={W(moon)} height={12} rx={2} fill="#a8a29e" />
      <T x={26} y={47} anchor="end" size={5.2} fill="#d6d3d1">Moon</T>
      <T x={r3(34 + W(moon))} y={47} anchor="start" size={5.2} fill="#d6d3d1">{`${moon} N`}</T>
      <T x={75} y={63} size={4.8}>weaker gravity on the Moon, so less weight</T>
    </svg>
  );
};

/* ---------- neutralisation ---------- */

const Beaker = ({ x, ph, label, sub }: { x: number; ph: number; label: string; sub: string }) => (
  <g>
    <path d={`M${x - 11} 14 L${x - 11} 52 Q${x - 11} 56 ${x - 7} 56 L${x + 7} 56 Q${x + 11} 56 ${x + 11} 52 L${x + 11} 14`} fill="none" stroke="#94a3b8" strokeWidth={1.2} />
    <path d={`M${x - 10.4} 26 L${x - 10.4} 52 Q${x - 10.4} 55.4 ${x - 7} 55.4 L${x + 7} 55.4 Q${x + 10.4} 55.4 ${x + 10.4} 52 L${x + 10.4} 26 Z`} fill={phColor(ph)} />
    <T x={x} y={66} size={5.6} fill="#f8fafc">{label}</T>
    <T x={x} y={74} size={4.8} fill={SOFT}>{sub}</T>
  </g>
);

export const NeutralisationBeakers = ({ acidPh = 2, basePh = 12 }: { acidPh?: number; basePh?: number }) => (
  <svg viewBox="0 0 160 82" role="img" aria-labelledby="nb-t nb-d" className={cls} style={st}>
    <title id="nb-t">Neutralisation</title>
    <desc id="nb-d">{`An acid (pH ${acidPh}) and a base (pH ${basePh}) react together. In the right amounts they form a salt and water and the pH becomes 7, which is neutral. The colours are those of universal indicator.`}</desc>
    <Beaker x={22} ph={acidPh} label="acid" sub={`pH ${acidPh}`} />
    <T x={46} y={38} size={9} fill="#e2e8f0">+</T>
    <Beaker x={70} ph={basePh} label="base" sub={`pH ${basePh}`} />
    <Arrow x1={88} y1={36} x2={110} y2={36} color={SOFT} w={1.4} />
    <Beaker x={134} ph={7} label="salt + water" sub="pH 7, neutral" />
  </svg>
);

/* ---------- element, compound, mixture ---------- */

const Atom = ({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) => <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#0f172a" strokeWidth={0.5} />;
const Water = ({ x, y }: { x: number; y: number }) => (
  <g>
    <line x1={x} y1={y} x2={x - 5} y2={y + 4.5} stroke="#e2e8f0" strokeWidth={0.8} />
    <line x1={x} y1={y} x2={x + 5} y2={y + 4.5} stroke="#e2e8f0" strokeWidth={0.8} />
    <Atom cx={x} cy={y} r={3.6} fill="#ef4444" />
    <Atom cx={x - 5} cy={y + 4.5} r={2.2} fill="#f1f5f9" />
    <Atom cx={x + 5} cy={y + 4.5} r={2.2} fill="#f1f5f9" />
  </g>
);

export const MatterKinds = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="mk-t mk-d" className={cls} style={st}>
    <title id="mk-t">Element, compound and mixture</title>
    <desc id="mk-d">An element has only one kind of atom, for example oxygen. A compound has different kinds of atoms joined together in a fixed ratio, for example water, H2O, with two hydrogen atoms and one oxygen atom. A mixture has different substances that are not joined, so it can be separated physically.</desc>
    {[
      { x: 4, name: 'element', sub: 'one kind of atom', c: '#7dd3fc' },
      { x: 56, name: 'compound', sub: 'atoms joined', c: '#6ee7b7' },
      { x: 108, name: 'mixture', sub: 'not joined', c: '#fcd34d' },
    ].map((b) => (
      <g key={b.name}>
        <rect x={b.x} y={4} width={48} height={44} rx={4} fill="#0b1220" stroke={b.c} strokeWidth={0.9} />
        <T x={b.x + 24} y={60} size={6} fill={b.c}>{b.name}</T>
        <T x={b.x + 24} y={68} size={4.6} fill={SOFT}>{b.sub}</T>
      </g>
    ))}
    {[[14, 14], [28, 12], [40, 18], [20, 28], [34, 30], [12, 40], [26, 42], [40, 40]].map(([x, y]) => <Atom key={`${x}${y}`} cx={x} cy={y} r={3.6} fill="#ef4444" />)}
    <Water x={72} y={14} /><Water x={90} y={22} /><Water x={68} y={30} /><Water x={86} y={38} />
    <Water x={120} y={14} />
    {[[134, 12], [148, 16], [140, 26], [124, 30], [150, 34]].map(([x, y]) => <Atom key={`m${x}${y}`} cx={x} cy={y} r={3} fill="#a3e635" />)}
    <Water x={136} y={42} />
    <Atom cx={118} cy={42} r={3} fill="#a3e635" />
    <T x={80} y={78} size={4.6}>water: 2 hydrogen atoms and 1 oxygen atom, H₂O</T>
  </svg>
);

/* ---------- the first 18 elements ---------- */

const KIND_FILL: Record<Kind, string> = { metal: '#38bdf8', 'non-metal': '#34d399', metalloid: '#fbbf24' };

export const PeriodicStrip = () => {
  const cw = 8.3;
  const ch = 14;
  const x0 = 5;
  const y0 = 14;
  return (
    <svg viewBox="0 0 160 82" role="img" aria-labelledby="pt-t pt-d" className={cls} style={st}>
      <title id="pt-t">The first 18 elements in the periodic table</title>
      <desc id="pt-d">{`The elements are arranged by increasing atomic number, from hydrogen (1) to argon (18), left to right along each row. Metals are on the left, non-metals on the right, and boron and silicon are metalloids in between.`}</desc>
      <T x={80} y={9} size={5.2}>increasing atomic number, left to right</T>
      {ELEMENTS.map((e) => {
        const x = x0 + (e.group - 1) * cw;
        const y = y0 + (e.period - 1) * (ch + 1.5);
        return (
          <g key={e.n}>
            <rect x={r3(x)} y={y} width={cw - 0.8} height={ch} rx={1} fill={KIND_FILL[e.kind]} />
            <text x={r3(x + (cw - 0.8) / 2)} y={y + 6.4} textAnchor="middle" fontSize={4.4} fontWeight={800} fill="#0f172a">{e.symbol}</text>
            <text x={r3(x + (cw - 0.8) / 2)} y={y + 11.4} textAnchor="middle" fontSize={3.2} fontWeight={700} fill="#0f172a">{e.n}</text>
          </g>
        );
      })}
      {(['metal', 'metalloid', 'non-metal'] as const).map((k, i) => (
        <g key={k}>
          <rect x={22 + i * 40} y={66} width={6} height={6} rx={1} fill={KIND_FILL[k]} />
          <T x={31 + i * 40} y={71.5} anchor="start" size={4.8}>{k}s</T>
        </g>
      ))}
    </svg>
  );
};

/* ---------- speed, distance and time ---------- */

export const SpeedTriangle = ({ d = 120, t = 20 }: { d?: number; t?: number }) => {
  const v = speed(d, t);
  return (
    <svg viewBox="0 0 150 86" role="img" aria-labelledby="sp-t sp-d" className={cls} style={st}>
      <title id="sp-t">Speed, distance and time</title>
      <desc id="sp-d">{`Speed is distance divided by time. For ${d} metres in ${t} seconds the speed is ${v} metres per second.`}</desc>
      <rect x={10} y={14} width={60} height={58} rx={5} fill="#1e293b" stroke="#94a3b8" strokeWidth={1} />
      <line x1={10} y1={42} x2={70} y2={42} stroke="#94a3b8" strokeWidth={0.8} />
      <line x1={40} y1={42} x2={40} y2={72} stroke="#94a3b8" strokeWidth={0.8} />
      <T x={40} y={32} fill="#fcd34d" size={7}>distance</T>
      <T x={25} y={60} fill="#7dd3fc" size={6.6}>speed</T>
      <T x={55} y={60} fill="#6ee7b7" size={6.6}>time</T>
      <T x={108} y={24} size={5.6} anchor="middle" fill="#7dd3fc">speed = distance ÷ time</T>
      <T x={108} y={36} size={5.6} anchor="middle" fill="#fcd34d">distance = speed × time</T>
      <T x={108} y={48} size={5.6} anchor="middle" fill="#6ee7b7">time = distance ÷ speed</T>
      <T x={108} y={66} size={5.6} fill="#e2e8f0">{`${d} m ÷ ${t} s = ${v} m/s`}</T>
    </svg>
  );
};

/* ---------- same distance, different times ---------- */

export const RaceBars = ({ distanceM = 400, times = [80, 100] }: { distanceM?: number; times?: number[] }) => {
  const max = Math.max(...times);
  return (
    <svg viewBox="0 0 150 66" role="img" aria-labelledby="rb-t rb-d" className={cls} style={st}>
      <title id="rb-t">Two runs over the same distance</title>
      <desc id="rb-d">{`Both runs are ${distanceM} metres. The first takes ${times[0]} seconds, an average speed of ${speed(distanceM, times[0])} metres per second. The second takes ${times[1]} seconds, an average speed of ${speed(distanceM, times[1])} metres per second. The shorter time means the greater speed.`}</desc>
      <T x={75} y={9} size={5.4}>{`both runs are ${distanceM} m`}</T>
      {times.map((tm, i) => (
        <g key={i}>
          <T x={26} y={26 + i * 18} anchor="end" size={5.2} fill={SOFT}>{`run ${i + 1}`}</T>
          <rect x={30} y={18 + i * 18} width={r3((tm / max) * 82)} height={11} rx={2} fill={i === 0 ? '#34d399' : '#fb923c'} />
          <T x={r3(30 + (tm / max) * 82 - 3)} y={26 + i * 18} anchor="end" size={5.2} fill="#052e16">{`${tm} s`}</T>
          <T x={r3(34 + (tm / max) * 82)} y={26 + i * 18} anchor="start" size={5.2} fill={i === 0 ? '#6ee7b7' : '#fdba74'}>{`${speed(distanceM, tm)} m/s`}</T>
        </g>
      ))}
      <T x={75} y={60} size={4.8}>shorter time, greater average speed</T>
    </svg>
  );
};

/* ---------- friction ---------- */

export const FrictionBlock = () => {
  const bumps = Array.from({ length: 22 }, (_, i) => `${6 + i * 6.4},${54 + (i % 2 ? -3.4 : 0)}`).join(' ');
  return (
    <svg viewBox="0 0 150 86" role="img" aria-labelledby="fr-t fr-d" className={cls} style={st}>
      <title id="fr-t">Friction</title>
      <desc id="fr-d">A block slides to the right over a rough surface. Friction acts the opposite way, to the left, where the surfaces rub together. The rougher the surfaces, the greater the friction.</desc>
      <polyline points={bumps} fill="none" stroke="#a8a29e" strokeWidth={1.4} />
      <rect x={52} y={30} width={46} height={22} rx={2} fill="#38bdf8" />
      <Arrow x1={104} y1={40} x2={140} y2={40} color="#34d399" w={1.8} />
      <T x={122} y={34} size={5.4} fill="#6ee7b7">motion</T>
      <Arrow x1={96} y1={64} x2={52} y2={64} color="#fb923c" w={1.8} />
      <T x={74} y={73} size={5.4} fill="#fdba74">friction</T>
      <T x={75} y={82} size={5}>rubbing surfaces: friction opposes motion</T>
    </svg>
  );
};

/* ---------- electric charges ---------- */

const Charge = ({ x, y, sign }: { x: number; y: number; sign: '+' | '−' }) => (
  <g>
    <circle cx={x} cy={y} r={7} fill={sign === '+' ? '#ef4444' : '#3b82f6'} />
    <text x={x} y={y + 3.6} textAnchor="middle" fontSize={10} fontWeight={800} fill="#f8fafc">{sign}</text>
  </g>
);

export const ChargeForces = () => (
  <svg viewBox="0 0 150 80" role="img" aria-labelledby="cf-t cf-d" className={cls} style={st}>
    <title id="cf-t">Forces between electric charges</title>
    <desc id="cf-d">Opposite charges, positive and negative, attract each other. Like charges, two positive or two negative, repel each other.</desc>
    <Charge x={40} y={22} sign="+" />
    <Charge x={110} y={22} sign={'−'} />
    <Arrow x1={50} y1={22} x2={62} y2={22} color="#34d399" w={1.8} />
    <Arrow x1={100} y1={22} x2={88} y2={22} color="#34d399" w={1.8} />
    <T x={75} y={10} size={5.4} fill="#6ee7b7">opposite charges attract</T>
    <Charge x={40} y={58} sign="+" />
    <Charge x={110} y={58} sign="+" />
    <Arrow x1={32} y1={58} x2={16} y2={58} color="#fb923c" w={1.8} />
    <Arrow x1={118} y1={58} x2={134} y2={58} color="#fb923c" w={1.8} />
    <T x={75} y={74} size={5.4} fill="#fdba74">like charges repel</T>
  </svg>
);
