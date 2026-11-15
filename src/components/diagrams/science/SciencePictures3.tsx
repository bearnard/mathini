import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from './SciencePictures';
import { EATEN_BY, type Organism } from './foodWeb';

/**
 * Hand-built life-science pictures for Grade 8: gases and energy at a leaf, the photosynthesis
 * and respiration cycle, and a food web. At most six labels each.
 */

/* ---------- a leaf in the light ---------- */

export const LeafExchange = () => (
  <svg viewBox="0 0 150 90" role="img" aria-labelledby="lf-t lf-d" className={cls} style={st}>
    <title id="lf-t">What goes into and out of a leaf in photosynthesis</title>
    <desc id="lf-d">Carbon dioxide from the air, water from the roots and light energy from the Sun go in. Glucose is made in the leaf and oxygen is released into the air.</desc>
    <path d="M62 62 C48 36 66 14 98 14 C104 44 90 64 62 62 Z" fill="#16a34a" stroke="#86efac" strokeWidth={0.8} />
    <path d="M62 62 C74 50 86 36 98 14" fill="none" stroke="#bbf7d0" strokeWidth={0.8} />
    <line x1={62} y1={62} x2={56} y2={78} stroke="#22c55e" strokeWidth={1.8} />
    <Arrow x1={18} y1={14} x2={52} y2={32} color="#fde047" w={1.6} />
    <T x={10} y={11} anchor="start" fill="#fde047">sunlight</T>
    <Arrow x1={14} y1={44} x2={50} y2={44} color="#7dd3fc" w={1.4} />
    <T x={8} y={40} anchor="start" fill="#7dd3fc" size={5}>carbon dioxide</T>
    <Arrow x1={36} y1={84} x2={54} y2={74} color="#38bdf8" w={1.4} />
    <T x={10} y={86} anchor="start" fill="#38bdf8">water</T>
    <Arrow x1={104} y1={36} x2={140} y2={30} color="#86efac" w={1.4} />
    <T x={142} y={42} anchor="end" fill="#86efac">oxygen</T>
    <T x={80} y={48} fill="#052e16" size={5.2}>glucose</T>
  </svg>
);

/* ---------- photosynthesis and respiration: a cycle ---------- */

export const CycleLink = () => (
  <svg viewBox="0 0 160 96" role="img" aria-labelledby="cy-t cy-d" className={cls} style={st}>
    <title id="cy-t">Photosynthesis and respiration are linked</title>
    <desc id="cy-d">Photosynthesis uses carbon dioxide, water and light energy to make glucose and oxygen, and stores energy. Respiration uses that glucose and oxygen to release energy, and makes carbon dioxide and water again.</desc>
    <rect x={6} y={30} width={56} height={30} rx={5} fill="#052e16" stroke="#34d399" strokeWidth={1} />
    <T x={34} y={43} fill="#6ee7b7" size={6.2}>photosynthesis</T>
    <T x={34} y={53} size={4.8}>stores energy</T>
    <rect x={98} y={30} width={56} height={30} rx={5} fill="#451a03" stroke="#fb923c" strokeWidth={1} />
    <T x={126} y={43} fill="#fdba74" size={6.2}>respiration</T>
    <T x={126} y={53} size={4.8}>releases energy</T>
    <path d="M62 38 C74 22 86 22 98 38" fill="none" stroke="#fbbf24" strokeWidth={1.3} />
    <polygon points="98,38 91.5,34.6 94.6,32" fill="#fbbf24" />
    <T x={80} y={18} size={4.8} fill="#fde68a">glucose + oxygen</T>
    <path d="M98 54 C86 70 74 70 62 54" fill="none" stroke="#7dd3fc" strokeWidth={1.3} />
    <polygon points="62,54 68.4,57.4 65.4,60" fill="#7dd3fc" />
    <T x={80} y={80} size={4.8} fill="#bae6fd">carbon dioxide + water</T>
    <Arrow x1={20} y1={8} x2={20} y2={28} color="#fde047" w={1.4} />
    <T x={26} y={14} anchor="start" size={4.8} fill="#fde047">light in</T>
    <Arrow x1={140} y1={62} x2={140} y2={82} color="#fb923c" w={1.4} />
    <T x={138} y={90} anchor="end" size={4.8} fill="#fdba74">energy for life</T>
  </svg>
);

/* ---------- a food web ---------- */

const POS: Record<Organism, { x: number; y: number }> = {
  grass: { x: 22, y: 48 },
  grasshopper: { x: 64, y: 20 },
  rabbit: { x: 62, y: 76 },
  frog: { x: 110, y: 20 },
  snake: { x: 136, y: 50 },
};

const RY = 7.5;
const rxOf = (o: Organism) => Math.max(11, o.length * 1.7 + 2);
/** Distance from an ellipse's centre to its edge in the direction `ang`. */
const edge = (o: Organism, ang: number) => {
  const rx = rxOf(o);
  return (rx * RY) / Math.hypot(RY * Math.cos(ang), rx * Math.sin(ang));
};

export const FoodWeb = ({ removed }: { removed?: Organism }) => (
  <svg viewBox="0 0 160 100" role="img" aria-labelledby="fw-t fw-d" className={cls} style={st}>
    <title id="fw-t">A food web</title>
    <desc id="fw-d">{`Arrows point to the eater, the way energy moves. ${EATEN_BY.map(([f, e]) => `${f} is eaten by the ${e}`).join('; ')}.`}</desc>
    {EATEN_BY.map(([f, e]) => {
      const a = POS[f];
      const b = POS[e];
      const ang = Math.atan2(b.y - a.y, b.x - a.x);
      const dim = removed && (f === removed || e === removed);
      return <Arrow key={`${f}-${e}`} x1={r3(a.x + (edge(f, ang) + 1) * Math.cos(ang))} y1={r3(a.y + (edge(f, ang) + 1) * Math.sin(ang))} x2={r3(b.x - (edge(e, ang) + 1.5) * Math.cos(ang))} y2={r3(b.y - (edge(e, ang) + 1.5) * Math.sin(ang))} color={dim ? '#475569' : SOFT} w={1} />;
    })}
    {(Object.keys(POS) as Organism[]).map((o) => {
      const gone = o === removed;
      return (
        <g key={o}>
          <ellipse cx={POS[o].x} cy={POS[o].y} rx={rxOf(o)} ry={RY} fill={gone ? '#1e293b' : o === 'grass' ? '#166534' : '#1d4ed8'} stroke={gone ? '#ef4444' : '#e2e8f0'} strokeWidth={gone ? 1.2 : 0.6} strokeDasharray={gone ? '2 2' : undefined} />
          <T x={POS[o].x} y={POS[o].y + 2} size={5.2} fill={gone ? '#fca5a5' : '#f8fafc'}>{o}</T>
        </g>
      );
    })}
    <T x={80} y={96} size={4.8}>arrows point to the eater (the way energy moves)</T>
  </svg>
);
