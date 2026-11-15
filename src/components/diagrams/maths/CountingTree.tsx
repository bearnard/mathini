import { r3 } from '../round';
import { countingTree, outcomeCount } from './counting';

/**
 * Tree diagram for the fundamental counting principle: every branch of the first choice splits into
 * the same number of second choices, and the leaves are the outcomes, m x n of them. Counts and
 * labels come from counting.ts.
 */

const INK = '#0f172a';
const ROW = 11;
const TOP = 24;

export const CountingTree = ({ m = 3, n = 2 }: { m?: number; n?: number }) => {
  const tree = countingTree(m, n);
  const total = outcomeCount(tree);
  const XR = 14;
  const X1 = 62;
  const X2 = 108;
  const bottom = TOP + total * ROW;
  const leafY = (i: number) => r3(TOP + i * ROW + ROW / 2);
  let k = 0;
  const branches = tree.map((b) => {
    const ys = b.leaves.map(() => leafY(k++));
    return { ...b, ys, y: r3((ys[0] + ys[ys.length - 1]) / 2) };
  });
  const rootY = r3((branches[0].y + branches[branches.length - 1].y) / 2);
  return (
    <svg
      viewBox={`0 0 150 ${bottom + 20}`}
      role="img"
      aria-labelledby="ct-t ct-d"
      className="mx-auto block w-full max-w-md rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <title id="ct-t">Counting tree: {m} ways then {n} ways gives {total} outcomes</title>
      <desc id="ct-d">
        The first choice can happen in {m} ways. After each of these, the second choice can happen in {n} ways. Counting the ends of the branches gives {total} outcomes, which is {m} times {n}.
      </desc>
      <text x={X1} y={10} textAnchor="middle" fontSize={6} fontWeight={800} fill="#6ee7b7">first: m = {m}</text>
      <text x={X2 + 4} y={10} textAnchor="middle" fontSize={6} fontWeight={800} fill="#fbbf24">then: n = {n}</text>
      {branches.map((b) => (
        <g key={b.first}>
          <line x1={XR} y1={rootY} x2={X1} y2={b.y} stroke="#34d399" strokeWidth={1.2} />
          {b.leaves.map((l, j) => (
            <g key={l.outcome}>
              <line x1={X1} y1={b.y} x2={X2} y2={b.ys[j]} stroke="#fbbf24" strokeWidth={1} />
              <circle cx={X2} cy={b.ys[j]} r={1.8} fill="#fbbf24" />
              <text x={X2 + 5} y={r3(b.ys[j] + 2.2)} fontSize={6.4} fontWeight={800} fill="#fde68a">{l.outcome}</text>
            </g>
          ))}
          <circle cx={X1} cy={b.y} r={2.4} fill="#34d399" />
          <text x={X1 - 2} y={r3(b.y > rootY + 0.5 ? b.y + 8 : b.y - 4)} textAnchor="end" fontSize={6.4} fontWeight={800} fill="#a7f3d0">{b.first}</text>
        </g>
      ))}
      <circle cx={XR} cy={rootY} r={2.4} fill="#f8fafc" />
      <text x={75} y={bottom + 13} textAnchor="middle" fontSize={7} fontWeight={800} fill="#e2e8f0">{m} × {n} = {total} outcomes</text>
    </svg>
  );
};
