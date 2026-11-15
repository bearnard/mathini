import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from './SciencePictures';
import { CELL_MM, LEVELS, NAKED_EYE_MM, camLift, crankSlider, logPosition, wheelAxleAdvantage } from './lifeTechHelpers';

/**
 * Grade 8-9 pictures: energy chains, dark and light surfaces, the size of a cell, plant and animal
 * cells, levels of organisation, a wedge, a wheel and axle, a cam, a crank, and dead and live
 * loads. Numbers and positions come from lifeTechHelpers.ts. At most six labels each.
 */

/* ---------- an energy chain ---------- */

export const EnergyChain = ({ steps, aside, id = 'ec' }: { steps: { label: string; color: string }[]; aside?: string; id?: string }) => {
  const n = steps.length;
  const w = (150 - 8 - (n - 1) * 12) / n;
  return (
    <svg viewBox="0 0 150 62" role="img" aria-labelledby={`${id}-t ${id}-d`} className={cls} style={st}>
      <title id={`${id}-t`}>An energy chain</title>
      <desc id={`${id}-d`}>{`Energy changes form: ${steps.map((s) => s.label).join(', then ')}.${aside ? ` ${aside}.` : ''}`}</desc>
      {steps.map((s, i) => {
        const x = 4 + i * (w + 12);
        return (
          <g key={s.label}>
            <rect x={r3(x)} y={8} width={r3(w)} height={26} rx={5} fill="#0b1220" stroke={s.color} strokeWidth={1} />
            <T x={r3(x + w / 2)} y={24} fill={s.color} size={5.6}>{s.label}</T>
            {i < n - 1 && <Arrow x1={r3(x + w + 1.5)} y1={21} x2={r3(x + w + 10.5)} y2={21} color={SOFT} w={1.2} />}
          </g>
        );
      })}
      {aside && (
        <g>
          <Arrow x1={75} y1={36} x2={75} y2={48} color="#fb923c" w={1.2} />
          <T x={75} y={57} size={5} fill="#fdba74">{aside}</T>
        </g>
      )}
    </svg>
  );
};

/* ---------- black and white surfaces in the sun ---------- */

export const BlackWhiteSurfaces = () => (
  <svg viewBox="0 0 150 78" role="img" aria-labelledby="bw-t bw-d" className={cls} style={st}>
    <title id="bw-t">Black and white surfaces in sunlight</title>
    <desc id="bw-d">Sunlight falls on a black surface and a white surface. The black surface absorbs most of the radiant energy, so it heats up faster. The white surface reflects most of it, so it stays cooler.</desc>
    <Arrow x1={30} y1={8} x2={30} y2={36} color="#fde047" w={2.4} />
    <rect x={10} y={40} width={40} height={14} rx={2} fill="#020617" stroke="#475569" strokeWidth={0.8} />
    <T x={30} y={66} size={5.6} fill="#fdba74">black: absorbs more</T>
    <T x={30} y={74} size={4.8}>heats up faster</T>
    <Arrow x1={110} y1={8} x2={104} y2={36} color="#fde047" w={1.2} />
    <rect x={90} y={40} width={40} height={14} rx={2} fill="#f8fafc" />
    <Arrow x1={110} y1={38} x2={132} y2={16} color="#fde68a" w={1.2} />
    <T x={110} y={66} size={5.6} fill="#7dd3fc">white: reflects more</T>
    <T x={110} y={74} size={4.8}>stays cooler</T>
  </svg>
);

/* ---------- how big is a cell? ---------- */

export const SizeScale = () => {
  const X0 = 14;
  const X1 = 140;
  const px = (mm: number) => r3(X0 + logPosition(mm, 0.001, 1) * (X1 - X0));
  const ticks: [number, string][] = [[0.001, '0,001'], [0.01, '0,01'], [0.1, '0,1'], [1, '1']];
  return (
    <svg viewBox="0 0 150 70" role="img" aria-labelledby="sz-t sz-d" className={cls} style={st}>
      <title id="sz-t">The size of a cell</title>
      <desc id="sz-d">{`On a scale in millimetres that goes up by ten times at each mark, plant and animal cells are about ${CELL_MM[0]} to ${CELL_MM[1]} millimetres across. The smallest thing the naked eye can see is about ${NAKED_EYE_MM} millimetres, so most cells need a microscope.`}</desc>
      <line x1={X0} y1={42} x2={X1} y2={42} stroke="#94a3b8" strokeWidth={1} />
      {ticks.map(([v, label]) => (
        <g key={label}>
          <line x1={px(v)} y1={38} x2={px(v)} y2={46} stroke={SOFT} strokeWidth={0.8} />
          <T x={px(v)} y={55} size={5.4}>{label}</T>
        </g>
      ))}
      <T x={146} y={63} anchor="end" size={4.8}>size in mm (each mark is 10 times more)</T>
      <rect x={px(CELL_MM[0])} y={24} width={r3(px(CELL_MM[1]) - px(CELL_MM[0]))} height={10} rx={2} fill="#34d399" />
      <T x={r3((px(CELL_MM[0]) + px(CELL_MM[1])) / 2)} y={20} size={5.4} fill="#6ee7b7">plant and animal cells</T>
      <line x1={px(NAKED_EYE_MM)} y1={26} x2={px(NAKED_EYE_MM)} y2={42} stroke="#fb923c" strokeWidth={1.2} strokeDasharray="2 1.6" />
      <T x={146} y={9} anchor="end" size={5} fill="#fdba74">smallest the eye can see</T>
    </svg>
  );
};

/* ---------- plant and animal cell ---------- */

const Mito = ({ x, y, r = 0 }: { x: number; y: number; r?: number }) => (
  <ellipse cx={x} cy={y} rx={4.6} ry={2.4} transform={`rotate(${r} ${x} ${y})`} fill="#fb923c" stroke="#7c2d12" strokeWidth={0.5} />
);

export const CellPair = () => (
  <svg viewBox="0 0 160 94" role="img" aria-labelledby="cp2-t cp2-d" className={cls} style={st}>
    <title id="cp2-t">An animal cell and a plant cell</title>
    <desc id="cp2-d">Both cells have a nucleus, which controls cell activities, and mitochondria, which release energy from food. Only the plant cell has a cell wall, which gives rigid support, and chloroplasts, which capture sunlight for photosynthesis.</desc>
    <ellipse cx={42} cy={44} rx={32} ry={28} fill="#1e3a5f" stroke="#7dd3fc" strokeWidth={1.4} />
    <circle cx={40} cy={40} r={9} fill="#6366f1" />
    <Mito x={60} y={52} r={20} /><Mito x={26} y={58} r={-30} />
    <T x={42} y={12} size={6.2} fill="#7dd3fc">animal cell</T>
    <rect x={88} y={14} width={64} height={60} rx={5} fill="#14532d" stroke="#a3e635" strokeWidth={2.4} />
    <rect x={118} y={26} width={26} height={36} rx={5} fill="#0e7490" opacity={0.7} />
    <circle cx={100} cy={32} r={8} fill="#6366f1" />
    <ellipse cx={98} cy={58} rx={5.4} ry={3} fill="#22c55e" stroke="#052e16" strokeWidth={0.5} />
    <ellipse cx={132} cy={20} rx={5.4} ry={3} fill="#22c55e" stroke="#052e16" strokeWidth={0.5} />
    <Mito x={108} y={50} />
    <T x={120} y={12} size={6.2} fill="#bef264">plant cell</T>
    <line x1={22} y1={80} x2={36} y2={46} stroke={SOFT} strokeWidth={0.4} />
    <T x={22} y={88} size={5} fill="#c7d2fe">nucleus</T>
    <line x1={62} y1={80} x2={60} y2={54} stroke={SOFT} strokeWidth={0.4} />
    <T x={62} y={88} size={5} fill="#fdba74">mitochondria</T>
    <line x1={102} y1={80} x2={98} y2={62} stroke={SOFT} strokeWidth={0.4} />
    <T x={104} y={88} size={5} fill="#86efac">chloroplast</T>
    <line x1={144} y1={80} x2={146} y2={74} stroke={SOFT} strokeWidth={0.4} />
    <T x={144} y={88} size={5} fill="#d9f99d">cell wall</T>
  </svg>
);

/* ---------- from cells to organ systems ---------- */

export const LevelsRow = ({ levels = LEVELS.slice(0, 4) }: { levels?: readonly string[] }) => {
  const n = levels.length;
  const w = (150 - 8 - (n - 1) * 12) / n;
  const colors = ['#7dd3fc', '#6ee7b7', '#fcd34d', '#fdba74', '#f9a8d4'];
  return (
    <svg viewBox="0 0 150 42" role="img" aria-labelledby="lv2-t lv2-d" className={cls} style={st}>
      <title id="lv2-t">Levels of organisation</title>
      <desc id="lv2-d">{`Cells group to form tissues, tissues form organs, and organs form organ systems: ${levels.join(', then ')}.`}</desc>
      {levels.map((l, i) => {
        const x = 4 + i * (w + 12);
        return (
          <g key={l}>
            <rect x={r3(x)} y={8} width={r3(w)} height={24} rx={5} fill="#0b1220" stroke={colors[i]} strokeWidth={1} />
            {l.split(' ').map((word, k, arr) => <T key={word} x={r3(x + w / 2)} y={r3(23 + (k - (arr.length - 1) / 2) * 6.4 - (arr.length > 1 ? 0.6 : 0))} size={arr.length > 1 ? 5 : 5.8} fill={colors[i]}>{word}</T>)}
            {i < n - 1 && <Arrow x1={r3(x + w + 1.5)} y1={20} x2={r3(x + w + 10.5)} y2={20} color={SOFT} w={1.2} />}
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- wedge ---------- */

export const WedgePicture = () => (
  <svg viewBox="0 0 150 74" role="img" aria-labelledby="wg-t wg-d" className={cls} style={st}>
    <title id="wg-t">A wedge</title>
    <desc id="wg-d">An axe head is a wedge, a sloping surface. A downward force on it is turned into sideways forces that split the wood apart.</desc>
    <rect x={30} y={36} width={90} height={26} rx={2} fill="#a16207" />
    <polygon points="65,12 85,12 75,52" fill="#cbd5e1" stroke="#64748b" strokeWidth={0.8} />
    <line x1={75} y1={52} x2={75} y2={62} stroke="#451a03" strokeWidth={1.2} />
    <Arrow x1={75} y1={2} x2={75} y2={11} color="#fbbf24" w={1.8} />
    <Arrow x1={70} y1={46} x2={56} y2={46} color="#fb923c" w={1.4} />
    <Arrow x1={80} y1={46} x2={94} y2={46} color="#fb923c" w={1.4} />
    <T x={104} y={20} anchor="start" size={5.4} fill="#cbd5e1">wedge (axe head)</T>
    <T x={125} y={30} anchor="end" size={5} fill="#fbbf24">force down</T>
    <T x={75} y={72} size={5} fill="#fdba74">splits the wood sideways</T>
  </svg>
);

/* ---------- wheel and axle ---------- */

export const WheelAxlePicture = ({ wheel = 20, axle = 5 }: { wheel?: number; axle?: number }) => {
  const ma = wheelAxleAdvantage(wheel, axle);
  const R = 24;
  const r = r3((axle / wheel) * R);
  return (
    <svg viewBox="0 0 150 78" role="img" aria-labelledby="wa-t wa-d" className={cls} style={st}>
      <title id="wa-t">A wheel and axle</title>
      <desc id="wa-d">{`A pull at the rim of a wheel of radius ${wheel} centimetres turns an axle of radius ${axle} centimetres. The wheel is ${ma} times bigger than the axle, so the effort is ${ma} times smaller than the load: the mechanical advantage is ${ma}.`}</desc>
      <circle cx={52} cy={36} r={R} fill="#1e293b" stroke="#38bdf8" strokeWidth={2} />
      <circle cx={52} cy={36} r={r} fill="#fbbf24" />
      <line x1={52} y1={36} x2={52 + R} y2={36} stroke="#7dd3fc" strokeWidth={0.8} strokeDasharray="1.6 1.6" />
      <Arrow x1={52 - R} y1={36} x2={52 - R} y2={66} color="#fb923c" w={1.8} />
      <T x={52 - R - 4} y={50} anchor="end" size={5.2} fill="#fdba74">effort</T>
      <line x1={52 + r} y1={36} x2={52 + r} y2={60} stroke="#e2e8f0" strokeWidth={0.9} />
      <rect x={52 + r - 6} y={60} width={12} height={10} rx={1.5} fill="#34d399" />
      <T x={52 + r + 10} y={68} anchor="start" size={5.2} fill="#6ee7b7">load</T>
      <T x={52} y={6} size={5.2} fill="#7dd3fc">wheel</T>
      <T x={108} y={30} anchor="start" size={5.2} fill="#fcd34d">axle</T>
      <T x={108} y={42} anchor="start" size={5.2} fill="#e2e8f0">{`${wheel} ÷ ${axle} = ${ma}`}</T>
    </svg>
  );
};

/* ---------- cam and follower ---------- */

export const CamPicture = ({ angle = 50 }: { angle?: number }) => {
  const cx = 52;
  const cy = 52;
  const r0 = 12;
  const lift = 12;
  const profile = (deg: number) => r0 + camLift(deg, lift); // the lobe, measured from where the cam is "off"
  const pts = Array.from({ length: 73 }, (_, i) => {
    const deg = i * 5;
    const ang = ((deg + angle) * Math.PI) / 180;
    const rr = profile(deg);
    return `${r3(cx + rr * Math.cos(ang - Math.PI / 2))},${r3(cy + rr * Math.sin(ang - Math.PI / 2))}`;
  }).join(' ');
  const topR = profile(360 - (angle % 360));
  const topY = r3(cy - topR);
  return (
    <svg viewBox="0 0 150 80" role="img" aria-labelledby="cm-t cm-d" className={cls} style={st}>
      <title id="cm-t">A cam and follower</title>
      <desc id="cm-d">As the egg-shaped cam turns, the flat-ended follower resting on it is pushed up and then drops down again. Rotary motion becomes up-and-down, or reciprocating, motion.</desc>
      <polygon points={pts} fill="#6366f1" stroke="#a5b4fc" strokeWidth={0.8} />
      <circle cx={cx} cy={cy} r={2.4} fill="#0f172a" />
      <rect x={cx - 1.6} y={4} width={3.2} height={Math.max(2, topY - 4)} fill="#cbd5e1" />
      <rect x={cx - 7} y={topY - 3} width={14} height={3} rx={1} fill="#e2e8f0" />
      <path d={`M${cx - 22} ${cy - 4} A22 22 0 0 1 ${cx - 8} ${cy - 24}`} fill="none" stroke="#fbbf24" strokeWidth={1.2} />
      <polygon points={`${cx - 8},${cy - 24} ${cx - 14.4},${cy - 23.4} ${cx - 10.6},${cy - 18.4}`} fill="#fbbf24" />
      <T x={6} y={cy + 26} anchor="start" size={5.2} fill="#fcd34d">cam turns</T>
      <Arrow x1={cx + 14} y1={30} x2={cx + 14} y2={12} color="#34d399" w={1.4} />
      <T x={cx + 20} y={22} anchor="start" size={5.2} fill="#6ee7b7">follower goes up and down</T>
      <T x={cx + 20} y={30} anchor="start" size={4.6} fill={SOFT}>(reciprocating motion)</T>
    </svg>
  );
};

/* ---------- crank and slider ---------- */

export const CrankPicture = ({ angle = 50 }: { angle?: number }) => {
  const r = 14;
  const rod = 48;
  const cx = 28;
  const cy = 42;
  const t = (angle * Math.PI) / 180;
  const px = r3(cx + r * Math.cos(t));
  const py = r3(cy - r * Math.sin(t));
  const sx = r3(cx + crankSlider(angle, r, rod));
  return (
    <svg viewBox="0 0 150 76" role="img" aria-labelledby="cr-t cr-d" className={cls} style={st}>
      <title id="cr-t">A crank and slider</title>
      <desc id="cr-d">A crank turns in a circle. A connecting rod joins its end to a slider in a guide. As the crank turns round, the slider moves back and forth in a straight line. A crank changes rotary motion to reciprocating motion.</desc>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#475569" strokeWidth={0.7} strokeDasharray="2 2" />
      <line x1={cx} y1={cy} x2={px} y2={py} stroke="#fbbf24" strokeWidth={2.4} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={2.4} fill="#0f172a" stroke="#fbbf24" strokeWidth={1} />
      <line x1={px} y1={py} x2={sx} y2={cy} stroke="#cbd5e1" strokeWidth={1.8} />
      <circle cx={px} cy={py} r={1.8} fill="#fbbf24" />
      <rect x={r3(cx + 12)} y={cy - 7} width={r3(rod + r + 12)} height={0.6} fill="#475569" />
      <rect x={r3(cx + 12)} y={cy + 6.4} width={r3(rod + r + 12)} height={0.6} fill="#475569" />
      <rect x={r3(sx - 5)} y={cy - 5} width={10} height={10} rx={1.5} fill="#34d399" />
      <T x={cx} y={14} size={5.2} fill="#fcd34d">crank turns</T>
      <Arrow x1={r3(cx + 12 + rod - r)} y1={cy + 16} x2={r3(cx + 12 + rod + r)} y2={cy + 16} color="#6ee7b7" w={1.2} />
      <Arrow x1={r3(cx + 12 + rod + r)} y1={cy + 16} x2={r3(cx + 12 + rod - r)} y2={cy + 16} color="#6ee7b7" w={1.2} />
      <T x={r3(cx + 12 + rod)} y={cy + 28} size={5.2} fill="#6ee7b7">slider moves back and forth</T>
      <T x={r3((px + sx) / 2 + 4)} y={cy - 12} size={4.8} fill={SOFT}>rod</T>
    </svg>
  );
};

/* ---------- dead and live loads ---------- */

export const LoadsBridge = () => (
  <svg viewBox="0 0 150 80" role="img" aria-labelledby="lb-t lb-d" className={cls} style={st}>
    <title id="lb-t">Dead load and live load on a footbridge</title>
    <desc id="lb-d">The dead load is the permanent weight of the bridge itself, shown by small arrows along the deck. The live load changes: here, learners walking on the footbridge.</desc>
    <rect x={14} y={42} width={122} height={6} rx={1} fill="#94a3b8" />
    <polygon points="14,48 4,70 24,70" fill="#475569" />
    <polygon points="136,48 126,70 146,70" fill="#475569" />
    {[26, 44, 62, 80, 98, 116].map((x) => <Arrow key={x} x1={x} y1={26} x2={x} y2={40} color="#fb923c" w={0.9} />)}
    <T x={75} y={20} size={5.4} fill="#fdba74">dead load: the bridge's own weight</T>
    {[58, 74, 90].map((x) => (
      <g key={x}>
        <circle cx={x} cy={34} r={2.2} fill="#7dd3fc" />
        <line x1={x} y1={36} x2={x} y2={42} stroke="#7dd3fc" strokeWidth={1.4} />
      </g>
    ))}
    <T x={75} y={64} size={5.4} fill="#7dd3fc">live load: people walking (it changes)</T>
  </svg>
);
