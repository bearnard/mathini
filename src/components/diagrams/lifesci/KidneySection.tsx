import { r3 } from '../round';
import { kidneyLayout, type P } from './lifeSciHelpers';

/**
 * A frontal section of a kidney, drawn from kidneyLayout (lifeSciHelpers.ts): the cortex is the outer band, the medulla is made of
 * pyramids pointing at the pelvis, and the pelvis drains into the ureter. A schematic: positions are tested to nest correctly, not
 * to be an anatomical tracing.
 */

const INK = '#0f172a';
const CX = 52;
const CY = 58;

export const KidneySection = () => {
  const k = kidneyLayout();
  const sx = (x: number) => r3(CX + x);
  const sy = (y: number) => r3(CY - y);
  const pt = (p: P) => `${sx(p.x)},${sy(p.y)}`;
  const upper = k.pyramids[1];
  const upperCentroid: P = { x: (upper.base[0].x + upper.base[1].x + upper.apex.x) / 3, y: (upper.base[0].y + upper.base[1].y + upper.apex.y) / 3 };
  return (
    <svg viewBox="0 0 150 116" role="img" aria-labelledby="ks-t ks-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="ks-t">A section of a kidney with the cortex, medulla, pelvis and ureter labelled</title>
      <desc id="ks-d">
        The cortex is the outer band of the kidney. Inside it is the medulla, made of pyramids that point towards the pelvis. The pelvis is the central funnel-shaped cavity, and it drains into the ureter, which carries urine to the bladder. A schematic section, not drawn from a real kidney.
      </desc>
      <ellipse cx={CX} cy={CY} rx={k.rx} ry={k.ry} fill="#f87171" stroke="#fecaca" strokeWidth={0.8} />
      <ellipse cx={CX} cy={CY} rx={k.cortexInnerRx} ry={k.cortexInnerRy} fill="#431407" />
      {k.pyramids.map((py, i) => (
        <polygon key={i} points={`${pt(py.base[0])} ${pt(py.base[1])} ${pt(py.apex)}`} fill="#fb923c" stroke="#7c2d12" strokeWidth={0.6} strokeLinejoin="round" />
      ))}
      <line x1={sx(k.pelvis.cx)} y1={sy(k.pelvis.cy)} x2={sx(k.ureterEnd.x)} y2={sy(k.ureterEnd.y)} stroke="#fde047" strokeWidth={3} strokeLinecap="round" />
      <circle cx={sx(k.pelvis.cx)} cy={sy(k.pelvis.cy)} r={k.pelvis.r} fill="#fde047" stroke="#a16207" strokeWidth={0.6} />
      {/* labels with leader lines */}
      <line x1={sx(-28)} y1={sy(30)} x2={22} y2={26} stroke="#fecaca" strokeWidth={0.5} />
      <text x={3} y={24} fontSize={6.6} fontWeight={800} fill="#fecaca">cortex</text>
      <line x1={sx(upperCentroid.x)} y1={sy(upperCentroid.y)} x2={104} y2={20} stroke="#fdba74" strokeWidth={0.5} />
      <text x={105} y={22} fontSize={6.6} fontWeight={800} fill="#fdba74">medulla</text>
      <line x1={sx(k.pelvis.cx + 4)} y1={sy(k.pelvis.cy)} x2={104} y2={56} stroke="#fde68a" strokeWidth={0.5} />
      <text x={105} y={58} fontSize={6.6} fontWeight={800} fill="#fde68a">pelvis</text>
      <text x={r3(sx(k.ureterEnd.x) + 3)} y={r3(sy(k.ureterEnd.y) + 8)} fontSize={6.6} fontWeight={800} fill="#fde047">ureter</text>
    </svg>
  );
};
