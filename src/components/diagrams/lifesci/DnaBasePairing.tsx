import { rungs, BASE_NAME, type Base } from './dna';

/**
 * A short piece of DNA as a ladder: two backbones of sugar (deoxyribose) and phosphate, and rungs of paired bases joined by hydrogen
 * bonds (two for A-T, three for C-G). The second strand is computed from the first by complement() (dna.ts).
 */

const INK = '#0f172a';
const COLOR: Record<Base, string> = { A: '#fb7185', T: '#60a5fa', C: '#4ade80', G: '#fbbf24' };
const LX = 50; // left backbone
const RX = 112; // right backbone
const Y0 = 28;
const STEP = 19;

const Sugar = ({ x, y }: { x: number; y: number }) => {
  const pts = [[0, -3.6], [3.4, -1.1], [2.1, 3], [-2.1, 3], [-3.4, -1.1]].map(([dx, dy]) => `${x + dx},${y + dy}`).join(' ');
  return <polygon points={pts} fill="#94a3b8" stroke="#e2e8f0" strokeWidth={0.4} />;
};

export const DnaBasePairing = ({ strand = 'ATGC' }: { strand?: string }) => {
  const rs = rungs(strand);
  const yOf = (i: number) => Y0 + i * STEP;
  const bottom = yOf(rs.length - 1) + 12;
  return (
    <svg viewBox={`0 0 150 ${bottom + 20}`} role="img" aria-labelledby="dna-t dna-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="dna-t">DNA base pairs: A with T, C with G</title>
      <desc id="dna-d">
        A piece of DNA drawn as a ladder. The rails are made of deoxyribose sugar and phosphate groups. Each rung is a pair of bases joined by hydrogen bonds. From top to bottom the pairs are {rs.map((r) => `${BASE_NAME[r.left]} with ${BASE_NAME[r.right]}`).join(', ')}. Adenine and thymine share two hydrogen bonds, and cytosine and guanine share three.
      </desc>
      <line x1={LX} y1={Y0 - 14} x2={LX} y2={bottom} stroke="#64748b" strokeWidth={1} />
      <line x1={RX} y1={Y0 - 14} x2={RX} y2={bottom} stroke="#64748b" strokeWidth={1} />
      {rs.map((r, i) => {
        const y = yOf(i);
        return (
          <g key={i}>
            <circle cx={LX} cy={y - 9.5} r={2.6} fill="#f472b6" />
            <circle cx={RX} cy={y - 9.5} r={2.6} fill="#f472b6" />
            <Sugar x={LX} y={y} />
            <Sugar x={RX} y={y} />
            <rect x={LX + 7} y={y - 6} width={13} height={12} rx={2} fill={COLOR[r.left]} />
            <rect x={RX - 20} y={y - 6} width={13} height={12} rx={2} fill={COLOR[r.right]} />
            <text x={LX + 13.5} y={y + 3} textAnchor="middle" fontSize={8.4} fontWeight={800} fill={INK}>{r.left}</text>
            <text x={RX - 13.5} y={y + 3} textAnchor="middle" fontSize={8.4} fontWeight={800} fill={INK}>{r.right}</text>
            {Array.from({ length: r.bonds }, (_, b) => {
              const gy = y - ((r.bonds - 1) * 2.2) / 2 + b * 2.2;
              return <line key={b} x1={LX + 22} y1={gy} x2={RX - 22} y2={gy} stroke="#e2e8f0" strokeWidth={0.7} strokeDasharray="1.6 1.4" />;
            })}
          </g>
        );
      })}
      <text x={LX - 5} y={Y0 - 7} textAnchor="end" fontSize={5.6} fontWeight={800} fill="#f9a8d4">phosphate</text>
      <text x={LX - 6} y={Y0 + 2} textAnchor="end" fontSize={5.6} fontWeight={800} fill="#cbd5e1">deoxyribose</text>
      <text x={LX + 13.5} y={Y0 - 10} textAnchor="middle" fontSize={5.6} fontWeight={800} fill="#fde68a">base</text>
      <text x={69} y={Y0 - 10} fontSize={5} fontWeight={800} fill="#e2e8f0">hydrogen bonds</text>
      <text x={75} y={bottom + 11} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#e2e8f0">A pairs with T (2 bonds)</text>
      <text x={75} y={bottom + 18.5} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#e2e8f0">C pairs with G (3 bonds)</text>
    </svg>
  );
};
