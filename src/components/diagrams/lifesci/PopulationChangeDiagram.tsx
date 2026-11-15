import { r3 } from '../round';
import { populationChange, signed } from './lifeSciHelpers';

/**
 * ΔN = (natality + immigration) - (mortality + emigration). Two arrows come in on the left (births and immigrants) and two go out on
 * the right (deaths and emigrants); each arrow's width is proportional to its number. Numbers from populationChange.
 */

const INK = '#0f172a';
const W = 0.4; // stroke width per individual

const Arrow = ({ x1, x2, y, n, color }: { x1: number; x2: number; y: number; n: number; color: string }) => {
  const w = r3(Math.max(0.8, n * W));
  const head = r3(Math.max(3.2, w * 1.7));
  const dir = x2 > x1 ? 1 : -1;
  return (
    <g>
      <line x1={x1} y1={y} x2={r3(x2 - dir * head)} y2={y} stroke={color} strokeWidth={w} />
      <polygon points={`${x2},${y} ${r3(x2 - dir * head)},${r3(y - head / 1.4)} ${r3(x2 - dir * head)},${r3(y + head / 1.4)}`} fill={color} />
    </g>
  );
};

export const PopulationChangeDiagram = ({ n = 100, natality = 12, immigration = 5, mortality = 8, emigration = 4 }: { n?: number; natality?: number; immigration?: number; mortality?: number; emigration?: number }) => {
  const p = populationChange(n, natality, immigration, mortality, emigration);
  return (
    <svg viewBox="0 0 150 96" role="img" aria-labelledby="pcd-t pcd-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="pcd-t">{`A population of ${p.n}: ${p.natality} births and ${p.immigration} immigrants in, ${p.mortality} deaths and ${p.emigration} emigrants out, so it changes by ${signed(p.delta)}`}</title>
      <desc id="pcd-d">
        Arrows into and out of a box showing population size N = {p.n}. In: natality {p.natality} and immigration {p.immigration}. Out: mortality {p.mortality} and emigration {p.emigration}. ΔN = ({p.natality} + {p.immigration}) − ({p.mortality} + {p.emigration}) = {signed(p.delta)}, so N becomes {p.after}. Arrow widths are in proportion to the numbers.
      </desc>
      <rect x={52} y={30} width={46} height={30} rx={4} fill="#1e293b" stroke="#94a3b8" strokeWidth={0.8} />
      <text x={75} y={48} textAnchor="middle" fontSize={8} fontWeight={800} fill="#f8fafc">N = {p.n}</text>
      <Arrow x1={8} x2={51} y={38} n={p.natality} color="#34d399" />
      <Arrow x1={8} x2={51} y={52} n={p.immigration} color="#34d399" />
      <Arrow x1={99} x2={142} y={38} n={p.mortality} color="#fb7185" />
      <Arrow x1={99} x2={142} y={52} n={p.emigration} color="#fb7185" />
      <text x={6} y={29} fontSize={6.2} fontWeight={800} fill="#6ee7b7">Natality {p.natality}</text>
      <text x={6} y={65} fontSize={6.2} fontWeight={800} fill="#6ee7b7">Immigration {p.immigration}</text>
      <text x={144} y={29} textAnchor="end" fontSize={6.2} fontWeight={800} fill="#fda4af">Mortality {p.mortality}</text>
      <text x={144} y={65} textAnchor="end" fontSize={6.2} fontWeight={800} fill="#fda4af">Emigration {p.emigration}</text>
      <text x={75} y={86} textAnchor="middle" fontSize={7} fontWeight={800} fill="#fde68a">ΔN = ({p.natality} + {p.immigration}) − ({p.mortality} + {p.emigration}) = {signed(p.delta)}</text>
    </svg>
  );
};
