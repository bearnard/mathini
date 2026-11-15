import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';
import ProbabilitySimulator from '@/components/subjects/ProbabilitySimulator';

const learnSteps: LearnStep[] = [
  {
    title: 'Organise Outcomes Clearly',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Start by listing outcomes with a table, tree, or sample space so that you do not miss possibilities.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`P(A) = \frac{n(A)}{n(S)}`}</Formula>
          <Formula block>{String.raw`P(A \cap B) = P(A) \cdot P(B) \quad \text{for independent events}`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 0.5 * x, label: 'P(A ∩ B) when P(B)=0.5', color: '#6366f1' },
          ]}
          xRange={[0, 1]}
          yRange={[0, 1]}
        />
      </div>
    ),
  },
  {
    title: 'Use Addition and Multiplication Rules',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">The addition rule gives P(A or B). The product rule P(A and B) = P(A) × P(B) holds only for independent events; for dependent events multiply along a tree diagram using the changed probabilities.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <Formula block>{String.raw`P(A \cup B) = P(A) + P(B) - P(A \cap B)`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <Formula block>{String.raw`P(A \cap B) = P(A) \cdot P(B) \quad \text{(independent events only)}`}</Formula>
          </div>
        </div>
        <p className="text-sm text-slate-600">Ask yourself whether the events can happen together. That decides whether you subtract the overlap: for mutually exclusive events P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).</p>
      </div>
    ),
  },
  {
    title: 'Probability Simulator',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Run repeated experiments and compare theoretical probability with experimental results to see how spinner outcomes behave over many trials.</p>
        <ProbabilitySimulator defaultMode="spinner" />
      </div>
    ),
  },
  {
    title: 'Check Complements and Reasonableness',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Probabilities must lie between <Formula>{String.raw`0`}</Formula> and <Formula>{String.raw`1`}</Formula>. Use complements to simplify “not” questions.</p>
        <Formula block>{String.raw`P(A^{\prime}) = 1 - P(A)`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 1 - x, label: 'P(A′) = 1 - P(A)', color: '#14b8a6' },
          ]}
          xRange={[0, 1]}
          yRange={[0, 1]}
        />
        <div className="rounded-xl bg-cyan-50 p-4">
          <p className="text-sm text-slate-600">If you get a negative value or something bigger than <Formula>{String.raw`1`}</Formula>, re-check the counting or formula you used.</p>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Two events A and B are independent if:',
    options: ['P(A and B) = P(A) + P(B)', 'P(A or B) = P(A) × P(B)', 'P(A and B) = P(A) × P(B)', 'P(A given B) = P(B given A)'],
    answer: 'P(A and B) = P(A) × P(B)',
    explanation: 'Independence is defined by the multiplication rule: P(A and B) = P(A) × P(B).',
  },
  {
    prompt: 'The complement of event A is given by:',
    options: ["P(A') = 1 − P(A)", "P(A') = P(A) − 1", "P(A') = 1/P(A)", "P(A') = P(A) + 1"],
    answer: "P(A') = 1 − P(A)",
    explanation: 'All probabilities sum to 1, so the complement of A has probability 1 − P(A).',
  },
  {
    prompt: 'If P(A) = 0.4 and P(B) = 0.3 and the events are independent, then P(A and B) = ?',
    options: ['0.7', '0.12', '0.1', '0.58'],
    answer: '0.12',
    explanation: 'P(A and B) = P(A) × P(B) = 0.4 × 0.3 = 0.12.',
  },
  {
    prompt: 'P(A or B) = P(A) + P(B) − P(A and B) is called the:',
    options: ['Complement rule', 'Multiplication rule', 'Conditional probability rule', 'Addition rule'],
    answer: 'Addition rule',
    explanation: 'This formula is the addition rule for any two events.',
  },
  {
    prompt: 'A bag has 3 red and 2 blue balls. P(red then blue) without replacement is:',
    options: ['6/25', '1/5', '3/10', '2/5'],
    answer: '3/10',
    explanation: 'P(R) = 3/5. P(B|R) = 2/4. P(red then blue) = 3/5 × 2/4 = 6/20 = 3/10.',
  },
  {
    prompt: 'For mutually exclusive events A and B, P(A and B) = ?',
    options: ['P(A) × P(B)', '0', 'P(A) + P(B)', '1'],
    answer: '0',
    explanation: 'Mutually exclusive events cannot occur together, so P(A and B) = 0.',
  },
  {
    prompt: 'A die is rolled and a coin is flipped. The total number of outcomes is:',
    options: ['8', '12', '6', '2'],
    answer: '12',
    explanation: '6 outcomes for the die × 2 for the coin = 12 equally likely outcomes.',
  },
  {
    prompt: "If P(A) = 0.65, then P(A') = ?",
    options: ['0.65', '1.65', '0.25', '0.35'],
    answer: '0.35',
    explanation: "P(A') = 1 − 0.65 = 0.35.",
  },
  {
    prompt: 'Drawing cards from a deck with replacement makes successive draws:',
    options: ['Mutually exclusive', 'Dependent', 'Independent', 'Complementary'],
    answer: 'Independent',
    explanation: 'Replacement restores the deck to its original state, so each draw is independent of the previous one.',
  },
];

const Probability = () => (
  <CapsSubjectTopic
    title="Probability"
    subtitle="Independent events, tree diagrams and probability rules"
    learnSteps={learnSteps}
    task="gr11-probability-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Probability;
