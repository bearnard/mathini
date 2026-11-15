import { T, cls, st } from '../science/SciencePictures';
import { BEAT, DEMO_PATTERN, beatsIn, starts } from './lifeSkillsHelpers';

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
