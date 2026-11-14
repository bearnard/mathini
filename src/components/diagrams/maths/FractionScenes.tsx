import FractionRows, { type BarRow } from './FractionRows';
import { addSameDenominator, compareFractions, equivalent, simplify } from './mathsHelpers';

/**
 * The fraction pictures used in the Grade 6 lessons, each built from tested helpers so the shading,
 * the "bigger than" sign and the "same amount" claim cannot disagree with the arithmetic.
 */

const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';

const row = (n: number, d: number, color: string): BarRow => ({ n, d, parts: d, shaded: [{ count: n, color }] });
const sign = (a: number, b: number, c: number, d: number) => (compareFractions(a, b, c, d) > 0 ? '>' : compareFractions(a, b, c, d) < 0 ? '<' : '=');

/** Two unit fractions as same-length bars: which shaded part is bigger? */
export const CompareBars = ({ a, b, className }: { a: number; b: number; className?: string }) => (
  <FractionRows
    className={className}
    rows={[row(1, a, I), row(1, b, E)]}
    gaps={[{ text: sign(1, a, 1, b), at: 'bar' }]}
    aria={`Two bars of the same length. The first is cut into ${a} equal parts with 1 shaded, one over ${a}. The second is cut into ${b} equal parts with 1 shaded, one over ${b}. ${compareFractions(1, a, 1, b) > 0 ? `One over ${a} is the bigger part.` : compareFractions(1, a, 1, b) < 0 ? `One over ${b} is the bigger part.` : 'They are equal.'}`}
  />
);

/** 1/2 = 2/4 = 4/8: three bars whose shading ends in the same place. */
export const EquivalentBars = ({ className }: { className?: string }) => {
  const f = [
    [1, 2],
    [2, 4],
    [4, 8],
  ] as const;
  if (!equivalent(f[0][0], f[0][1], f[1][0], f[1][1]) || !equivalent(f[1][0], f[1][1], f[2][0], f[2][1])) throw new Error('not equivalent');
  return (
    <FractionRows
      className={className}
      guide={0.5}
      rows={f.map(([n, d]) => row(n, d, I))}
      gaps={[
        { text: `× ${f[1][1] / f[0][1]}`, at: 'label' },
        { text: `× ${f[2][1] / f[1][1]}`, at: 'label' },
      ]}
      aria="Three bars of the same length. One half, two quarters and four eighths are shaded, and the shading ends in the same place on all three, so they are the same amount."
    />
  );
};

/** 12/18 divided top and bottom by the HCF 6 gives 2/3: the same amount in bigger parts. */
export const SimplifyBars = ({ n, d, className }: { n: number; d: number; className?: string }) => {
  const s = simplify(n, d);
  return (
    <FractionRows
      className={className}
      guide={n / d}
      rows={[row(n, d, A), row(s.n, s.d, E)]}
      gaps={[{ text: `÷ ${s.by}`, at: 'label' }]}
      aria={`${n} over ${d} shaded, and below it the same amount as ${s.n} over ${s.d}, after dividing the top and the bottom by ${s.by}.`}
    />
  );
};

/** n1/d + n2/d = (n1 + n2)/d: the same-size parts just join up. */
export const AddBars = ({ n1, n2, d, className }: { n1: number; n2: number; d: number; className?: string }) => {
  const sum = addSameDenominator(n1, n2, d);
  return (
    <FractionRows
      className={className}
      rows={[
        row(n1, d, I),
        row(n2, d, E),
        { n: sum.n, d: sum.d, parts: d, shaded: [{ count: n1, color: I }, { count: n2, color: E }] },
      ]}
      gaps={[{ text: '+', at: 'bar' }, { text: '=', at: 'bar' }]}
      aria={`${n1} over ${d} plus ${n2} over ${d}: the shaded parts join up to make ${sum.n} over ${sum.d}. The parts are the same size, so only the numerators are added.`}
    />
  );
};

/** n1/d + n2/d = n/d, then simplify to lowest terms. */
export const AddAndSimplifyBars = ({ n1, n2, d, className }: { n1: number; n2: number; d: number; className?: string }) => {
  const sum = addSameDenominator(n1, n2, d);
  const s = simplify(sum.n, sum.d);
  return (
    <FractionRows
      className={className}
      rows={[
        row(n1, d, I),
        row(n2, d, E),
        { n: sum.n, d: sum.d, parts: d, shaded: [{ count: n1, color: I }, { count: n2, color: E }] },
        row(s.n, s.d, A),
      ]}
      gaps={[{ text: '+', at: 'bar' }, { text: '=', at: 'bar' }, { text: `÷ ${s.by}`, at: 'label' }]}
      aria={`${n1} over ${d} plus ${n2} over ${d} makes ${sum.n} over ${sum.d}, and dividing the top and bottom by ${s.by} gives ${s.n} over ${s.d}, the same amount in lowest terms.`}
    />
  );
};
