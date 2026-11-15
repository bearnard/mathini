import { r3 } from '../round';
import { planRoom, sa } from './mathLitHelpers';

/**
 * A floor plan at 1 : 50. The room is drawn 8 cm by 6 cm, and each length is multiplied by 50 to get the real length: 400 cm = 4 m
 * and 300 cm = 3 m. The area uses the real lengths (12 m²). Numbers from planRoom (mathLitHelpers.ts). The rectangle is drawn to
 * scale (10 drawing units per cm of plan).
 */

const INK = '#0f172a';
const LEFT = 16;
const TOP = 20;
const U = 10; // drawing units per plan cm

export const PlanScaleExample = ({ scale = 50, widthCm = 8, depthCm = 6 }: { scale?: number; widthCm?: number; depthCm?: number }) => {
  const r = planRoom(scale, widthCm, depthCm);
  const w = r3(widthCm * U);
  const h = r3(depthCm * U);
  return (
    <svg viewBox="0 0 150 100" role="img" aria-labelledby="pse-t pse-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="pse-t">{`A room drawn at 1 to ${scale}: ${widthCm} cm by ${depthCm} cm on the plan is ${sa(r.realWidth.m)} m by ${sa(r.realDepth.m)} m`}</title>
      <desc id="pse-d">
        A floor plan at the scale 1 : {scale}. The plan shows the room {widthCm} cm wide and {depthCm} cm deep. Multiply each length by {scale}: {widthCm} × {scale} = {sa(r.realWidth.cm)} cm = {sa(r.realWidth.m)} m and {depthCm} × {scale} = {sa(r.realDepth.cm)} cm = {sa(r.realDepth.m)} m. The real floor area is {sa(r.realWidth.m)} × {sa(r.realDepth.m)} = {sa(r.areaM2)} m².
      </desc>
      <text x={75} y={11} textAnchor="middle" fontSize={7} fontWeight={800} fill="#f9a8d4">plan scale 1 : {sa(scale)}</text>
      <rect x={LEFT} y={TOP} width={w} height={h} fill="rgba(56,189,248,0.14)" stroke="#38bdf8" strokeWidth={1.4} />
      <text x={r3(LEFT + w / 2)} y={r3(TOP + h / 2) + 2} textAnchor="middle" fontSize={7} fontWeight={800} fill="#e0f2fe">{sa(r.areaM2)} m²</text>
      <text x={r3(LEFT + w / 2)} y={TOP + h + 9} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#7dd3fc">{widthCm} cm → {widthCm} × {scale} = {sa(r.realWidth.m)} m</text>
      <text x={LEFT + w + 4} y={r3(TOP + h / 2) - 1} fontSize={6.6} fontWeight={800} fill="#7dd3fc">{depthCm} cm</text>
      <text x={LEFT + w + 4} y={r3(TOP + h / 2) + 7} fontSize={6.6} fontWeight={800} fill="#7dd3fc">= {sa(r.realDepth.m)} m</text>
    </svg>
  );
};
