import { r3 } from '../round';
import { triangle3060, triangle45, type SpecialTriangle } from './specialTriangles';

/**
 * The two special triangles, drawn from their real coordinates (specialTriangles.ts): half an equilateral triangle gives
 * sin 30° = 1/2 and cos 60° = 1/2, half a square gives tan 45° = 1. Only the sides the ratios use are labelled.
 */

const INK = '#0f172a';
const K = 40; // pixels per unit

const Tri = ({ t, ox, oy, sideLabels }: { t: SpecialTriangle; ox: number; oy: number; sideLabels: { opp: string; adj?: string; hyp?: string } }) => {
  const p = (q: { x: number; y: number }) => ({ x: r3(ox + q.x * K), y: r3(oy - q.y * K) });
  const A = p(t.A);
  const B = p(t.B);
  const C = p(t.C);
  const sq = 4;
  return (
    <g>
      <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill="rgba(99,102,241,0.16)" stroke="#818cf8" strokeWidth={1.4} strokeLinejoin="round" />
      <path d={`M${B.x - sq} ${B.y} v${-sq} h${sq}`} fill="none" stroke="#94a3b8" strokeWidth={0.7} />
      <text x={A.x + 9} y={A.y - 2} fontSize={6.4} fontWeight={800} fill="#fcd34d">{t.angleA}°</text>
      <text x={B.x + 4} y={r3((B.y + C.y) / 2) + 2} fontSize={7} fontWeight={800} fill="#6ee7b7">{sideLabels.opp}</text>
      {sideLabels.adj && <text x={r3((A.x + B.x) / 2)} y={A.y + 9} textAnchor="middle" fontSize={7} fontWeight={800} fill="#6ee7b7">{sideLabels.adj}</text>}
      {sideLabels.hyp && <text x={r3((A.x + C.x) / 2) - 3} y={r3((A.y + C.y) / 2) - 3} textAnchor="end" fontSize={7} fontWeight={800} fill="#f9a8d4">{sideLabels.hyp}</text>}
    </g>
  );
};

export const SpecialTriangles = () => (
  <svg viewBox="0 0 150 80" role="img" aria-label="The 30-60-90 and 45-45-90 right triangles with the sides that give sin 30°, cos 60° and tan 45°" aria-labelledby="st-t st-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    <title id="st-t">The 30-60-90 and 45-45-90 right triangles with the sides that give sin 30°, cos 60° and tan 45°</title>
    <desc id="st-d">
      Half of an equilateral triangle with side 2: the side opposite 30° is 1 and the hypotenuse is 2, so sin 30° = 1/2, and cos 60° = 1/2 as well. Half of a square with side 1: both short sides are 1, so tan 45° = 1/1 = 1.
    </desc>
    <Tri t={triangle3060} ox={14} oy={62} sideLabels={{ opp: '1', hyp: '2' }} />
    <Tri t={triangle45} ox={96} oy={62} sideLabels={{ opp: '1', adj: '1' }} />
  </svg>
);
