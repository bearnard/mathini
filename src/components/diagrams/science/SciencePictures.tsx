import { r3 } from '../round';
import { particleLayout, type State } from './scienceHelpers';

/**
 * Hand-built SVG pictures for the Natural Sciences and Technology lessons, in the dark-panel style
 * of the other diagrams. At most six labels each. Positions that carry a meaning (particles, arrow
 * directions) come from scienceHelpers.ts or from the numbers passed in.
 */

export const INK = '#0f172a';
export const SOFT = '#cbd5e1';
export const cls = 'mx-auto block w-full max-w-lg rounded-2xl';
export const st = { background: INK, fontFamily: 'inherit' } as const;

export const T = ({ x, y, children, fill = '#e2e8f0', size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{children}</text>
);

/** A straight arrow from (x1, y1) to (x2, y2) with a computed head. */
export const Arrow = ({ x1, y1, x2, y2, color, w = 1.3 }: { x1: number; y1: number; x2: number; y2: number; color: string; w?: number }) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 4.2;
  const p = (ang: number) => `${r3(x2 - h * Math.cos(a + ang))},${r3(y2 - h * Math.sin(a + ang))}`;
  return (
    <g>
      <line x1={x1} y1={y1} x2={r3(x2 - 2 * Math.cos(a))} y2={r3(y2 - 2 * Math.sin(a))} stroke={color} strokeWidth={w} strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p(0.5)} ${p(-0.5)}`} fill={color} />
    </g>
  );
};

/* ---------- particles in a solid, a liquid and a gas ---------- */

const STATE_INFO: Record<State, { name: string; line: string[]; color: string }> = {
  solid: { name: 'solid', line: ['packed, vibrate', 'in place'], color: '#38bdf8' },
  liquid: { name: 'liquid', line: ['close, slide past', 'each other'], color: '#34d399' },
  gas: { name: 'gas', line: ['far apart,', 'move freely'], color: '#fbbf24' },
};

export const ParticleStates = () => {
  const W = 48;
  const H = 40;
  return (
    <svg viewBox="0 0 160 84" role="img" aria-labelledby="ps-t ps-d" className={cls} style={st}>
      <title id="ps-t">Particles in a solid, a liquid and a gas</title>
      <desc id="ps-d">In a solid the particles are packed in a regular pattern and vibrate in place. In a liquid they are close together but slide past each other. In a gas they are far apart and move freely.</desc>
      {(['solid', 'liquid', 'gas'] as const).map((s, i) => {
        const ox = 4 + i * 53;
        const info = STATE_INFO[s];
        return (
          <g key={s}>
            <rect x={ox} y={8} width={W} height={H} rx={3} fill="#1e293b" stroke="#475569" strokeWidth={0.8} />
            {particleLayout(s, W, H).map((d, k) => (
              <circle key={k} cx={r3(ox + d.x)} cy={r3(8 + d.y)} r={3.1} fill={info.color} />
            ))}
            <T x={ox + W / 2} y={58} fill={info.color} size={7}>{info.name}</T>
            {info.line.map((l, i) => <T key={l} x={ox + W / 2} y={66 + i * 6.4} size={4.8} fill={SOFT}>{l}</T>)}
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- a flower, for pollination ---------- */

export const FlowerParts = () => (
  <svg viewBox="0 0 150 112" role="img" aria-labelledby="fp-t fp-d" className={cls} style={st}>
    <title id="fp-t">Parts of a flower used in pollination</title>
    <desc id="fp-d">A flower with petals around the centre. The anthers make pollen. The stigma at the top of the carpel catches pollen. The ovary below it holds the ovules. Pollination is the transfer of pollen from the anther to the stigma.</desc>
    <line x1={75} y1={108} x2={75} y2={72} stroke="#22c55e" strokeWidth={2.4} strokeLinecap="round" />
    <ellipse cx={51} cy={52} rx={14} ry={7} transform="rotate(-35 51 52)" fill="#f472b6" opacity={0.85} />
    <ellipse cx={99} cy={52} rx={14} ry={7} transform="rotate(35 99 52)" fill="#f472b6" opacity={0.85} />
    <ellipse cx={75} cy={66} rx={10} ry={8} fill="#22c55e" />
    <line x1={75} y1={58} x2={75} y2={36} stroke="#86efac" strokeWidth={1.8} strokeLinecap="round" />
    <circle cx={75} cy={33} r={3.6} fill="#fde047" />
    <line x1={69} y1={62} x2={59} y2={38} stroke="#bbf7d0" strokeWidth={1.2} />
    <line x1={81} y1={62} x2={91} y2={38} stroke="#bbf7d0" strokeWidth={1.2} />
    <ellipse cx={58} cy={35} rx={4.4} ry={2.8} transform="rotate(-25 58 35)" fill="#f59e0b" />
    <ellipse cx={92} cy={35} rx={4.4} ry={2.8} transform="rotate(25 92 35)" fill="#f59e0b" />
    {[[55, 29], [60, 27], [64, 31]].map(([x, y]) => <circle key={`${x}`} cx={x} cy={y} r={1.1} fill="#fde68a" />)}
    <path d="M62 25 Q70 14 73 27" fill="none" stroke="#fde68a" strokeWidth={0.9} strokeDasharray="2 1.6" />
    <polygon points="73,28 70,22.6 75.6,23.6" fill="#fde68a" />
    <line x1={36} y1={30} x2={52} y2={34} stroke={SOFT} strokeWidth={0.5} />
    <T x={34} y={28} anchor="end">anther</T>
    <line x1={84} y1={12} x2={77} y2={29} stroke={SOFT} strokeWidth={0.5} />
    <T x={86} y={11} anchor="start">stigma</T>
    <line x1={86} y1={70} x2={112} y2={76} stroke={SOFT} strokeWidth={0.5} />
    <T x={114} y={79} anchor="start">ovary</T>
    <line x1={36} y1={68} x2={44} y2={57} stroke={SOFT} strokeWidth={0.5} />
    <T x={34} y={72} anchor="end">petal</T>
    <T x={52} y={19} anchor="end" fill="#fde68a" size={5.2}>pollen</T>
  </svg>
);

/* ---------- a two-way key for classifying ---------- */

export interface KeyBranch { title: string; lines: string[]; color: string }

export const KeyTree = ({ question, yes, no, id = 'kt' }: { question: string; yes: KeyBranch; no: KeyBranch; id?: string }) => (
  <svg viewBox="0 0 150 100" role="img" aria-labelledby={`${id}-t ${id}-d`} className={cls} style={st}>
    <title id={`${id}-t`}>{question}</title>
    <desc id={`${id}-d`}>{`Ask: ${question} If yes: ${yes.title}, for example ${yes.lines.join(', ')}. If no: ${no.title}, for example ${no.lines.join(', ')}.`}</desc>
    <rect x={35} y={5} width={80} height={17} rx={4} fill="#1e293b" stroke="#94a3b8" strokeWidth={0.8} />
    <T x={75} y={16} fill="#f8fafc" size={6.2}>{question}</T>
    <line x1={58} y1={22} x2={36} y2={44} stroke={yes.color} strokeWidth={1.2} />
    <line x1={92} y1={22} x2={114} y2={44} stroke={no.color} strokeWidth={1.2} />
    <T x={42} y={31} fill={yes.color} anchor="end">yes</T>
    <T x={108} y={31} fill={no.color} anchor="start">no</T>
    {[{ b: yes, x: 4 }, { b: no, x: 78 }].map(({ b, x }) => (
      <g key={b.title}>
        <rect x={x} y={46} width={68} height={48} rx={5} fill="#0b1220" stroke={b.color} strokeWidth={0.9} />
        <T x={x + 34} y={58} fill={b.color} size={6.4}>{b.title}</T>
        {b.lines.map((l, i) => <T key={l} x={x + 34} y={69 + i * 8} size={5.2} fill={SOFT}>{l}</T>)}
      </g>
    ))}
  </svg>
);

/* ---------- tension and compression ---------- */

export const TensionCompression = () => (
  <svg viewBox="0 0 150 70" role="img" aria-labelledby="tc-t tc-d" className={cls} style={st}>
    <title id="tc-t">Tension and compression</title>
    <desc id="tc-d">Tension: two forces pull on a bar in opposite directions, away from each other, and the bar stretches. Compression: two forces push on a block towards each other, and the block is squeezed shorter.</desc>
    <rect x={20} y={22} width={34} height={9} rx={1.5} fill="#38bdf8" />
    <Arrow x1={20} y1={26.5} x2={6} y2={26.5} color="#fbbf24" w={1.8} />
    <Arrow x1={54} y1={26.5} x2={68} y2={26.5} color="#fbbf24" w={1.8} />
    <T x={37} y={46} fill="#7dd3fc" size={7}>tension</T>
    <T x={37} y={55} size={5}>pulls and stretches</T>
    <rect x={96} y={16} width={34} height={21} rx={1.5} fill="#34d399" />
    <Arrow x1={82} y1={26.5} x2={95} y2={26.5} color="#fbbf24" w={1.8} />
    <Arrow x1={144} y1={26.5} x2={131} y2={26.5} color="#fbbf24" w={1.8} />
    <T x={113} y={46} fill="#6ee7b7" size={7}>compression</T>
    <T x={113} y={55} size={5}>pushes and squeezes</T>
  </svg>
);

/* ---------- frame, shell and solid structures ---------- */

export const StructureTypes = () => (
  <svg viewBox="0 0 150 80" role="img" aria-labelledby="sty-t sty-d" className={cls} style={st}>
    <title id="sty-t">Frame, shell and solid structures</title>
    <desc id="sty-d">A frame structure is made of bars joined together, here a triangle with a brace. A shell structure is a thin outer surface that is hollow inside, like a can. A solid structure is solid all the way through, like a block.</desc>
    <g stroke="#38bdf8" strokeWidth={1.8} strokeLinecap="round" fill="none">
      <polygon points="8,42 44,42 26,12" />
      <line x1={26} y1={12} x2={26} y2={42} />
      <line x1={26} y1={42} x2={17} y2={27} />
      <line x1={26} y1={42} x2={35} y2={27} />
    </g>
    <T x={26} y={56} fill="#7dd3fc" size={6.6}>frame</T>
    <T x={26} y={65} size={4.8}>bars joined</T>
    <T x={26} y={71.5} size={4.8}>together</T>
    <ellipse cx={75} cy={18} rx={13} ry={4.5} fill="#34d399" />
    <rect x={62} y={18} width={26} height={22} fill="#10b981" />
    <ellipse cx={75} cy={40} rx={13} ry={4.5} fill="#10b981" />
    <ellipse cx={75} cy={18} rx={13} ry={4.5} fill="none" stroke="#a7f3d0" strokeWidth={0.8} />
    <T x={75} y={56} fill="#6ee7b7" size={6.6}>shell</T>
    <T x={75} y={65} size={4.8}>thin surface,</T>
    <T x={75} y={71.5} size={4.8}>hollow inside</T>
    <polygon points="112,22 140,22 140,42 112,42" fill="#f59e0b" />
    <polygon points="112,22 118,15 146,15 140,22" fill="#fbbf24" />
    <polygon points="140,22 146,15 146,35 140,42" fill="#d97706" />
    <T x={129} y={56} fill="#fcd34d" size={6.6}>solid</T>
    <T x={129} y={65} size={4.8}>solid all</T>
    <T x={129} y={71.5} size={4.8}>the way through</T>
  </svg>
);

/* ---------- conduction, convection and radiation ---------- */

export const HeatTransfer = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="ht-t ht-d" className={cls} style={st}>
    <title id="ht-t">Conduction, convection and radiation</title>
    <desc id="ht-d">Conduction: heat passes along a metal rod from the hot end, through touching particles. Convection: in a heated fluid, warm fluid rises and cooler fluid sinks, carrying heat around. Radiation: heat travels from the Sun through empty space as waves.</desc>
    <rect x={6} y={26} width={42} height={7} rx={2} fill="#94a3b8" />
    <polygon points="6,21 12,10 18,21" fill="#fb923c" />
    <Arrow x1={14} y1={42} x2={44} y2={42} color="#fbbf24" />
    <T x={27} y={56} fill="#fdba74" size={6.4}>conduction</T>
    <T x={27} y={65} size={4.4}>through touching</T>
    <T x={27} y={72} size={4.4}>particles</T>
    <rect x={64} y={14} width={34} height={30} rx={3} fill="#1e3a5f" stroke="#64748b" strokeWidth={0.8} />
    <Arrow x1={81} y1={40} x2={81} y2={19} color="#fb923c" />
    <Arrow x1={69} y1={19} x2={69} y2={38} color="#7dd3fc" />
    <Arrow x1={93} y1={19} x2={93} y2={38} color="#7dd3fc" />
    <polygon points="72,48 81,52 90,48" fill="#fb923c" />
    <T x={81} y={61} fill="#fdba74" size={6.4}>convection</T>
    <T x={81} y={70} size={4.4}>moving fluid</T>
    <T x={81} y={77} size={4.4}>carries heat</T>
    <circle cx={116} cy={22} r={8} fill="#fbbf24" />
    {[0, 1, 2].map((i) => <Arrow key={i} x1={124} y1={26 + i * 4} x2={150} y2={30 + i * 6} color="#fde68a" w={0.9} />)}
    <rect x={146} y={28} width={8} height={22} rx={1.5} fill="#38bdf8" />
    <T x={130} y={62} fill="#fdba74" size={6.4}>radiation</T>
    <T x={130} y={71} size={4.4}>waves, no particles</T>
    <T x={130} y={78} size={4.4}>needed</T>
  </svg>
);

/* ---------- the pH scale ---------- */

export const PhBar = () => {
  const stops = ['#dc2626', '#ea580c', '#f59e0b', '#a3e635', '#22c55e', '#14b8a6', '#3b82f6', '#6d28d9'];
  const X0 = 12;
  const X1 = 138;
  const px = (ph: number) => r3(X0 + (ph / 14) * (X1 - X0));
  return (
    <svg viewBox="0 0 150 62" role="img" aria-labelledby="ph-t ph-d" className={cls} style={st}>
      <title id="ph-t">The pH scale from 0 to 14</title>
      <desc id="ph-d">Below 7 is acidic, 7 is neutral, and above 7 is basic. The more acidic, the closer to 0; the more basic, the closer to 14.</desc>
      <defs>
        <linearGradient id="ph-g" x1="0" x2="1" y1="0" y2="0">
          {stops.map((c, i) => <stop key={c} offset={`${(i / (stops.length - 1)) * 100}%`} stopColor={c} />)}
        </linearGradient>
      </defs>
      <rect x={X0} y={16} width={X1 - X0} height={14} rx={3} fill="url(#ph-g)" />
      {[0, 7, 14].map((n) => (
        <g key={n}>
          <line x1={px(n)} y1={30} x2={px(n)} y2={35} stroke={SOFT} strokeWidth={0.8} />
          <T x={px(n)} y={43} size={6.4}>{n}</T>
        </g>
      ))}
      <T x={px(3.5)} y={11} fill="#fca5a5" size={6.4}>acid</T>
      <T x={px(7)} y={11} fill="#86efac" size={6.4}>neutral</T>
      <T x={px(10.5)} y={11} fill="#c4b5fd" size={6.4}>base</T>
      <T x={px(3.5)} y={56} size={4.8}>below 7</T>
      <T x={px(10.5)} y={56} size={4.8}>above 7</T>
    </svg>
  );
};

/* ---------- a frame with and without a brace ---------- */

export const BracedFrame = () => {
  const s = 11; // how far the unbraced frame folds sideways
  return (
    <svg viewBox="0 0 150 76" role="img" aria-labelledby="bf-t bf-d" className={cls} style={st}>
      <title id="bf-t">A square frame with and without a diagonal brace</title>
      <desc id="bf-d">Pushed sideways at the top, a square frame with no brace folds into a slanted shape. The same frame with a diagonal brace, which makes two triangles, keeps its shape.</desc>
      <polygon points="14,20 42,20 42,48 14,48" fill="none" stroke="#475569" strokeWidth={0.8} strokeDasharray="2 2" />
      <polygon points={`${14 + s},20 ${42 + s},20 42,48 14,48`} fill="none" stroke="#38bdf8" strokeWidth={2.2} strokeLinejoin="round" />
      <Arrow x1={6} y1={14} x2={24} y2={14} color="#fbbf24" />
      <T x={34} y={62} fill="#7dd3fc" size={6.2}>no brace</T>
      <T x={34} y={70} size={4.6}>folds sideways</T>
      <polygon points="92,20 120,20 120,48 92,48" fill="none" stroke="#34d399" strokeWidth={2.2} strokeLinejoin="round" />
      <line x1={92} y1={48} x2={120} y2={20} stroke="#34d399" strokeWidth={2.2} />
      <Arrow x1={84} y1={14} x2={102} y2={14} color="#fbbf24" />
      <T x={112} y={62} fill="#6ee7b7" size={6.2}>with a brace</T>
      <T x={112} y={70} size={4.6}>two triangles hold the shape</T>
    </svg>
  );
};

/* ---------- filtration ---------- */

export const FiltrationSetup = () => (
  <svg viewBox="0 0 150 92" role="img" aria-labelledby="fi-t fi-d" className={cls} style={st}>
    <title id="fi-t">Separating sand from water by filtration</title>
    <desc id="fi-d">A mixture of sand and water is poured into a funnel lined with filter paper. The sand is too big to pass through and stays in the paper. The water drips through into the beaker below.</desc>
    <polygon points="40,14 110,14 82,46 68,46" fill="#1e293b" stroke="#94a3b8" strokeWidth={1} />
    <polyline points="46,14 75,44 104,14" fill="none" stroke="#e2e8f0" strokeWidth={1} />
    {[[68, 36], [75, 40], [82, 36], [72, 33], [78, 33], [75, 29]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={1.7} fill="#d4a373" />)}
    <rect x={72} y={46} width={6} height={9} fill="#94a3b8" />
    <circle cx={75} cy={60} r={1.5} fill="#38bdf8" />
    <circle cx={75} cy={66} r={1.5} fill="#38bdf8" />
    <path d="M58 70 L58 88 L92 88 L92 70" fill="none" stroke="#94a3b8" strokeWidth={1.2} />
    <rect x={59} y={79} width={32} height={8.4} fill="#38bdf8" opacity={0.8} />
    <Arrow x1={20} y1={8} x2={44} y2={20} color="#fbbf24" />
    <T x={22} y={6} anchor="start" fill="#fcd34d" size={5.2}>sand and water</T>
    <line x1={98} y1={17} x2={110} y2={10} stroke={SOFT} strokeWidth={0.5} />
    <T x={112} y={11} anchor="start" size={5.2}>filter paper</T>
    <line x1={82} y1={36} x2={116} y2={44} stroke={SOFT} strokeWidth={0.5} />
    <T x={118} y={46} anchor="start" size={5.2} fill="#fdba74">sand stays</T>
    <T x={100} y={65} anchor="start" size={5.2} fill="#7dd3fc">water passes</T>
  </svg>
);

/* ---------- potential and kinetic energy on a slope ---------- */

export const EnergyHill = () => {
  const x0 = 14;
  const y0 = 18;
  const x1 = 136;
  const y1 = 66;
  const at = (t: number) => ({ x: r3(x0 + (x1 - x0) * t), y: r3(y0 + (y1 - y0) * t) });
  const top = at(0.08);
  const low = at(0.9);
  const R = 6;
  return (
    <svg viewBox="0 0 150 86" role="img" aria-labelledby="eh-t eh-d" className={cls} style={st}>
      <title id="eh-t">Potential and kinetic energy on a slope</title>
      <desc id="eh-d">A ball held high up the slope has the most stored, or potential, energy. As it rolls down it speeds up, so its movement, or kinetic, energy grows while its height and potential energy shrink.</desc>
      <polygon points={`${x0},${y0} ${x1},${y1} ${x0},${y1}`} fill="#1e293b" stroke="#475569" strokeWidth={0.8} />
      <line x1={top.x} y1={top.y - R - 1} x2={top.x} y2={y1} stroke="#fbbf24" strokeWidth={0.7} strokeDasharray="2 2" />
      <circle cx={top.x} cy={top.y - R} r={R} fill="#fb923c" />
      <circle cx={low.x} cy={low.y - R} r={R} fill="#38bdf8" />
      {[0, 1, 2].map((i) => <line key={i} x1={r3(low.x - 12 - i * 6)} y1={r3(low.y - R - 5 - i * 2.6)} x2={r3(low.x - 8 - i * 6)} y2={r3(low.y - R - 3.6 - i * 2.6)} stroke="#7dd3fc" strokeWidth={0.9} strokeLinecap="round" />)}
      <T x={top.x + 10} y={top.y - 10} anchor="start" fill="#fdba74" size={5.6}>high: stored (potential) energy</T>
      <T x={146} y={y1 + 12} anchor="end" fill="#7dd3fc" size={5.6}>moving: kinetic energy</T>
    </svg>
  );
};
