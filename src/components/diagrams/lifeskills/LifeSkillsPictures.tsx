import { T, cls, st } from '../science/SciencePictures';
import { BEAT, DEMO_PATTERN, PATTERN_UNIT, beatsIn, patternShapes, starts } from './lifeSkillsHelpers';

const r3 = (n: number) => Math.round(n * 1000) / 1000;

/** Three kinds of line (straight, curved, zigzag) and three shapes (circle, square, triangle). */
export const LinesAndShapes = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="ls-lines-t ls-lines-d" className={cls} style={st}>
    <title id="ls-lines-t">Lines and shapes in visual art</title>
    <desc id="ls-lines-d">Top row: a straight line, a curved line and a zigzag line. Bottom row: a circle, a square and a triangle. Lines are marks; shapes are flat enclosed forms.</desc>
    <g fill="none" stroke="#fcd34d" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <line x1={12} y1={26} x2={44} y2={14} />
      <path d="M64 26 Q 80 4 96 26" />
      <polyline points="116,26 124,12 132,26 140,12 148,26" />
    </g>
    <T x={28} y={9} size={5.2} fill="#fde68a">straight</T>
    <T x={80} y={9} size={5.2} fill="#fde68a">curved</T>
    <T x={132} y={9} size={5.2} fill="#fde68a">zigzag</T>
    <g fill="#38bdf8" stroke="#e0f2fe" strokeWidth={0.8}>
      <circle cx={28} cy={55} r={11} />
      <rect x={68} y={44} width={22} height={22} />
      <polygon points="132,44 144,66 120,66" />
    </g>
    <T x={28} y={80} size={5.2} fill="#bae6fd">circle</T>
    <T x={80} y={80} size={5.2} fill="#bae6fd">square</T>
    <T x={132} y={80} size={5.2} fill="#bae6fd">triangle</T>
  </svg>
);

/** A steady beat (four equal pulses) above a rhythm pattern of long and short sounds. */
export const BeatRhythm = () => {
  const x0 = 14;
  const unit = 33; // width of one beat
  const total = beatsIn(DEMO_PATTERN);
  const at = starts(DEMO_PATTERN);
  return (
    <svg viewBox="0 0 160 70" role="img" aria-labelledby="ls-beat-t ls-beat-d" className={cls} style={st}>
      <title id="ls-beat-t">A steady beat and a rhythm pattern</title>
      <desc id="ls-beat-d">Four even pulses make a steady beat. Underneath, a rhythm pattern of one long sound, two short sounds, and two long sounds fills the same four beats.</desc>
      <T x={x0} y={11} anchor="start" size={5.2} fill="#fde68a">steady beat</T>
      {Array.from({ length: total }, (_, i) => (
        <circle key={i} cx={r3(x0 + 6 + i * unit)} cy={24} r={4.5} fill="#fcd34d" />
      ))}
      <T x={x0} y={43} anchor="start" size={5.2} fill="#bae6fd">rhythm: long, short, short, long, long</T>
      {DEMO_PATTERN.map((s, i) => (
        <rect key={i} x={r3(x0 + at[i] * unit + 1)} y={50} width={r3(BEAT[s] * unit - 2)} height={10} rx={3} fill={s === 'long' ? '#38bdf8' : '#a78bfa'} />
      ))}
    </svg>
  );
};

/** A repeating pattern of shapes: one unit, repeated. */
export const PatternRow = () => {
  const shapes = patternShapes();
  const w = 8;
  const gap = 6;
  const x0v = 14;
  const x0 = x0v;
  const cell = (i: number) => r3(x0 + i * (w * 2 + gap) + w);
  const unitW = PATTERN_UNIT.length * (w * 2 + gap) - gap;
  return (
    <svg viewBox="0 0 220 70" role="img" aria-labelledby="ls-pat-t ls-pat-d" className={cls} style={st}>
      <title id="ls-pat-t">A pattern is a design that repeats</title>
      <desc id="ls-pat-d">A circle, a square and a triangle make one unit. The unit repeats three times in a row, so the whole row is a pattern.</desc>
      <rect x={x0 - 4} y={14} width={unitW + 8} height={38} rx={4} fill="none" stroke="#fcd34d" strokeWidth={1} strokeDasharray="3 2" />
      <T x={r3(x0 + unitW / 2)} y={9} size={5} fill="#fde68a">one unit</T>
      {shapes.map((s, i) => {
        const cx = cell(i);
        return s === 'circle' ? (
          <circle key={i} cx={cx} cy={33} r={8} fill="#38bdf8" />
        ) : s === 'square' ? (
          <rect key={i} x={cx - 8} y={25} width={16} height={16} fill="#a78bfa" />
        ) : (
          <polygon key={i} points={`${cx},24 ${cx + 9},42 ${cx - 9},42`} fill="#fb923c" />
        );
      })}
      <T x={110} y={66} size={5.2} fill="#bae6fd">the same unit repeats three times</T>
    </svg>
  );
};

/** An invasion game: attacker with the ball, a teammate in open space, a defender between attacker and goal. */
export const InvasionGame = () => (
  <svg viewBox="0 0 160 90" role="img" aria-labelledby="ls-inv-t ls-inv-d" className={cls} style={st}>
    <title id="ls-inv-t">Attack and defend in an invasion game</title>
    <desc id="ls-inv-d">The player with the ball passes to a teammate who has moved into open space. A defender stands between the ball carrier and the goal.</desc>
    <rect x={6} y={6} width={148} height={78} rx={4} fill="#14532d" stroke="#86efac" strokeWidth={1} />
    <rect x={132} y={30} width={22} height={30} fill="none" stroke="#f8fafc" strokeWidth={1.2} />
    <T x={143} y={47} size={5.4} fill="#f8fafc">goal</T>
    <circle cx={34} cy={60} r={6} fill="#38bdf8" />
    <T x={34} y={78} size={5} fill="#bae6fd">ball carrier</T>
    <circle cx={30} cy={60} r={2} fill="#fef08a" />
    <circle cx={92} cy={22} r={6} fill="#38bdf8" />
    <T x={92} y={13} size={5} fill="#bae6fd">open space</T>
    <circle cx={74} cy={56} r={6} fill="#f87171" />
    <T x={74} y={73} size={5} fill="#fecaca">defender</T>
    <path d="M40 56 Q 58 30 86 24" fill="none" stroke="#fef08a" strokeWidth={1.6} strokeDasharray="3 2" />
    <polygon points="86,24 79,23.4 82.4,28.6" fill="#fef08a" />
    <T x={52} y={34} size={5} fill="#fef08a">pass</T>
  </svg>
);

/** Mixed media: three different materials layered in one artwork. */
export const MixedMedia = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="ls-mm-t ls-mm-d" className={cls} style={st}>
    <title id="ls-mm-t">Mixed media: more than one material in one artwork</title>
    <desc id="ls-mm-d">Three layers overlap in one artwork: a smooth layer of paint, a rough layer of torn collage paper and a layer of woven fabric.</desc>
    <rect x={10} y={10} width={80} height={52} rx={3} fill="#38bdf8" />
    <path d="M50 22 L82 18 L96 32 L88 50 L64 56 L46 46 Z" fill="#fde68a" stroke="#f59e0b" strokeWidth={1} strokeDasharray="3 2" />
    <g stroke="#7c2d12" strokeWidth={1}>
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={r3(72 + i * 7)} y1={30} x2={r3(72 + i * 7)} y2={74} />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={72} y1={r3(30 + i * 11)} x2={100} y2={r3(30 + i * 11)} />
      ))}
    </g>
    <rect x={72} y={30} width={28} height={44} fill="#fb923c" opacity={0.55} />
    <T x={36} y={77} size={5.2} fill="#bae6fd">paint</T>
    <T x={122} y={29} size={5.2} fill="#fde68a">collage paper</T>
    <T x={122} y={63} size={5.2} fill="#fdba74">fabric</T>
    <line x1={92} y1={27} x2={106} y2={27} stroke="#fde68a" strokeWidth={0.8} />
    <line x1={100} y1={62} x2={108} y2={62} stroke="#fdba74" strokeWidth={0.8} />
  </svg>
);

/** Two models: a wide base with balanced parts stays up; a narrow base with a heavy top to one side topples. */
export const StableModel = () => (
  <svg viewBox="0 0 160 90" role="img" aria-labelledby="ls-st-t ls-st-d" className={cls} style={st}>
    <title id="ls-st-t">What keeps a 3D model stable</title>
    <desc id="ls-st-d">Left: a model with a wide base and balanced parts, centred over its base, is stable. Right: a model with a narrow base and a heavy block to one side is not stable and will topple.</desc>
    <line x1={8} y1={72} x2={152} y2={72} stroke="#94a3b8" strokeWidth={1.2} />
    <rect x={16} y={58} width={56} height={14} fill="#34d399" />
    <rect x={28} y={42} width={32} height={16} fill="#6ee7b7" />
    <rect x={36} y={28} width={16} height={14} fill="#a7f3d0" />
    <T x={44} y={84} size={5.2} fill="#a7f3d0">wide base: stable</T>
    <rect x={106} y={58} width={14} height={14} fill="#f87171" />
    <rect x={104} y={42} width={14} height={16} fill="#fca5a5" />
    <rect x={106} y={22} width={44} height={20} fill="#fecaca" />
    <T x={122} y={84} size={5.2} fill="#fecaca">narrow base: topples</T>
    <line x1={120} y1={72} x2={120} y2={14} stroke="#fef08a" strokeWidth={0.8} strokeDasharray="2 2" />
    <T x={118} y={14} anchor="end" size={4.6} fill="#fef08a">heavy part sticks out</T>
  </svg>
);
