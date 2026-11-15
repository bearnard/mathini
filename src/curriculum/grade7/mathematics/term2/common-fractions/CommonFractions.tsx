import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Formula from '../../../../../components/subjects/Formula';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import FractionRows from '../../../../../components/diagrams/maths/FractionRows';
import { AddBars, EquivalentBars } from '../../../../../components/diagrams/maths/FractionScenes';
import { FractionOfAmount, MixedBars } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { addFractions, addMixed, biggerFraction, fractionOf, subtractFractions } from '../../../../../components/diagrams/maths/grade7Helpers';
import { simplify } from '../../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides below comes from these tested helpers (grade7Helpers.test.ts).
const fr = (n: number, d: number) => String.raw`\frac{${n}}{${d}}`;
const F = ({ n, d }: { n: number; d: number }) => <Formula>{fr(n, d)}</Formula>;
const mixedTex = (w: number, n: number, d: number) => (n === 0 ? String(w) : String.raw`${w}\,\frac{${n}}{${d}}`);
const M = ({ w, n, d }: { w: number; n: number; d: number }) => <Formula>{mixedTex(w, n, d)}</Formula>;
const eq = (...parts: string[]) => <Formula>{parts.join(' = ')}</Formula>;

const up = { n: 3, d: 4, by: 3 }; // 3/4 = 9/12
const simp = simplify(18, 24); // 18/24 = 3/4
const wrongAdd = { n: 3 + 2, d: 4 + 2 }; // the mistake: 3/4 -> 5/6
const cmp = biggerFraction(3, 4, 5, 8);
const sum = addFractions(2, 3, 1, 6);
const diff = subtractFractions(7, 10, 2, 5);
const mix = addMixed({ whole: 1, n: 1, d: 2 }, { whole: 2, n: 1, d: 4 });
const carry = addMixed({ whole: 2, n: 2, d: 3 }, { whole: 1, n: 1, d: 2 });
const of1 = fractionOf(3, 4, 8);
const of2 = fractionOf(3, 5, 35);

// "Check yourself" questions, with answers computed from the same helpers
const q1 = biggerFraction(5, 6, 7, 9);
const q2 = subtractFractions(3, 4, 1, 6);
const q3 = fractionOf(2, 3, 12);
const q4 = addMixed({ whole: 1, n: 3, d: 4 }, { whole: 2, n: 1, d: 2 });

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Equivalent fractions: the same amount',
    content: slide(
      <>
        <Rule>Multiply or divide the top and the bottom by the same number. The fraction keeps its value.</Rule>
        <EquivalentBars />
        <Worked
          steps={[
            eq(fr(up.n, up.d), String.raw`\frac{${up.n} \times ${up.by}}{${up.d} \times ${up.by}}`, fr(up.n * up.by, up.d * up.by)),
            <>HCF of 18 and 24 is {simp.by}. Divide both by {simp.by}: {eq(fr(18, 24), fr(simp.n, simp.d))}</>,
          ]}
        />
        <Mistake>
          Adding the same number changes the value: <F n={3} d={4} /> becomes <F n={wrongAdd.n} d={wrongAdd.d} />.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Compare fractions with a common denominator',
    content: slide(
      <>
        <Rule>Write both fractions with the same denominator. Then the bigger numerator is the bigger fraction.</Rule>
        <FractionRows
          rows={[
            { n: 3, d: 4, parts: 4, shaded: [{ count: 3, color: '#818cf8' }] },
            { n: 5, d: 8, parts: 8, shaded: [{ count: 5, color: '#34d399' }] },
          ]}
          gaps={[{ text: '>', at: 'bar' }]}
          aria="Two bars of the same length. Three quarters is shaded on the first bar and five eighths on the second. The first shaded part is longer, so three quarters is greater than five eighths."
        />
        <Worked
          title={<>Which is bigger, <F n={3} d={4} /> or <F n={5} d={8} />?</>}
          steps={[
            <>The common denominator is {cmp.d}.</>,
            eq(fr(3, 4), fr(cmp.a, cmp.d)),
            <>Compare the tops: {cmp.a} &gt; {cmp.b}, so <F n={3} d={4} /> &gt; <F n={5} d={8} />.</>,
          ]}
        />
        <Mistake>A bigger denominator does not mean a bigger fraction. Eighths are smaller parts than quarters.</Mistake>
      </>,
    ),
  },
  {
    title: 'Add and subtract: same denominator first',
    content: slide(
      <>
        <Rule>Make the denominators the same. Then add or subtract the tops only. Keep the denominator.</Rule>
        <AddBars n1={sum.a} n2={sum.b} d={sum.d} />
        <Worked
          title={<><F n={2} d={3} /> + <F n={1} d={6} /></>}
          steps={[
            <>Denominator {sum.d}: <F n={2} d={3} /> = <F n={sum.a} d={sum.d} />. Then <F n={sum.a} d={sum.d} /> + <F n={sum.b} d={sum.d} /> = <F n={sum.n} d={sum.d} />.</>,
            <>Subtract the same way: <F n={7} d={10} /> − <F n={2} d={5} /> = <F n={diff.a} d={diff.d} /> − <F n={diff.b} d={diff.d} /> = <F n={diff.simplest.n} d={diff.simplest.d} />.</>,
          ]}
        />
        <Mistake>
          Never add denominators: <F n={2} d={3} /> + <F n={1} d={6} /> is not <F n={3} d={9} />.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Mixed numbers: wholes first, then fractions',
    content: slide(
      <>
        <Rule>Add the wholes, add the fractions, then carry if the fractions make a whole or more.</Rule>
        <MixedBars
          rows={[
            { whole: 1, n: 1, d: 2, color: '#818cf8' },
            { whole: 2, n: 1, d: 4, color: '#34d399' },
            { whole: mix.result.whole, n: mix.result.n, d: mix.result.d, color: '#fbbf24' },
          ]}
          signs={['+', '=']}
          aria="Three rows of bars. The first row shows one whole and a half. The second shows two wholes and a quarter. Joined together they make three wholes and three quarters."
        />
        <Worked
          title={<><M w={1} n={1} d={2} /> + <M w={2} n={1} d={4} /></>}
          steps={[
            <>Wholes: 1 + 2 = {mix.wholes}.</>,
            <>Fractions: <F n={1} d={2} /> + <F n={1} d={4} /> = <F n={mix.fraction.a} d={mix.fraction.d} /> + <F n={mix.fraction.b} d={mix.fraction.d} /> = <F n={mix.fraction.n} d={mix.fraction.d} />.</>,
            <>Join them: <M w={mix.result.whole} n={mix.result.n} d={mix.result.d} />.</>,
          ]}
        />
        <Mistake>
          Forgetting to carry: <M w={2} n={2} d={3} /> + <M w={1} n={1} d={2} /> has fractions <F n={carry.fraction.n} d={carry.fraction.d} /> = 1<F n={1} d={6} />, so the answer is <M w={carry.result.whole} n={carry.result.n} d={carry.result.d} />.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'A fraction of an amount',
    content: slide(
      <>
        <Rule>Divide the amount by the denominator to find one part. Then multiply by the numerator.</Rule>
        <FractionOfAmount n={3} d={4} amount={8} />
        <Worked
          title={<><F n={3} d={4} /> of 8</>}
          steps={[
            <>Divide by the bottom: 8 ÷ 4 = {of1.one} (one quarter).</>,
            <>Multiply by the top: 3 × {of1.one} = {of1.result}. (Same idea: <F n={3} d={5} /> of 35 = 3 × {of2.one} = {of2.result}.)</>,
          ]}
        />
        <Mistake>Stopping early: 8 ÷ 4 = {of1.one} is only <F n={1} d={4} /> of 8.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which is bigger, <F n={5} d={6} /> or <F n={7} d={9} />?</li>
            <li>Calculate <F n={3} d={4} /> − <F n={1} d={6} />.</li>
            <li>Find <F n={2} d={3} /> of 12.</li>
            <li>Calculate <M w={1} n={3} d={4} /> + <M w={2} n={1} d={2} />.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li><F n={q1.a} d={q1.d} /> and <F n={q1.b} d={q1.d} />, so <F n={5} d={6} /> is bigger.</li>
            <li><F n={q2.a} d={q2.d} /> − <F n={q2.b} d={q2.d} /> = <F n={q2.simplest.n} d={q2.simplest.d} />.</li>
            <li>12 ÷ 3 = {q3.one}, and 2 × {q3.one} = {q3.result}.</li>
            <li>Wholes 3; fractions <F n={q4.fraction.n} d={q4.fraction.d} /> = 1<F n={1} d={4} />; total <M w={q4.result.whole} n={q4.result.n} d={q4.result.d} />.</li>
          </ol>
        }
      />,
    ),
  },
];


const bank: CapsItem[] = [
  {
    prompt: 'Which fraction is equivalent to 3/4?',
    options: ['9/12', '6/12', '12/20', '15/24'],
    answer: '9/12',
    explanation: 'Multiply numerator and denominator by 3: 3/4 = 9/12.',
  },
  {
    prompt: 'Which fraction is greater?',
    options: ['3/4', '5/8', 'They are equal', 'Cannot compare'],
    answer: '3/4',
    explanation: '3/4 = 0,75 and 5/8 = 0,625, so 3/4 is greater.',
  },
  {
    prompt: 'Calculate 2/3 + 1/6.',
    options: ['5/6', '3/9', '1/2', '4/6'],
    answer: '5/6',
    explanation: 'Use denominator 6: 2/3 = 4/6, then 4/6 + 1/6 = 5/6.',
  },
  {
    prompt: 'Calculate 7/10 − 2/5.',
    options: ['3/10', '5/10', '1/2', '1/5'],
    answer: '3/10',
    explanation: '2/5 = 4/10, so 7/10 − 4/10 = 3/10.',
  },
  {
    prompt: 'Calculate 3/4 of 8.',
    options: ['6', '4', '8/4', '12'],
    answer: '6',
    explanation: 'One quarter of 8 is 2, so 3/4 of 8 is 3 × 2 = 6.',
  },
  {
    prompt: 'Calculate 1 1/2 + 2 1/4.',
    options: ['3 3/4', '3 1/2', '4', '2 3/4'],
    answer: '3 3/4',
    explanation: '1,5 + 2,25 = 3,75 = 3 3/4.',
  },
  {
    prompt: 'Simplify 18/24.',
    options: ['3/4', '6/8', '9/12', '2/3'],
    answer: '3/4',
    explanation: 'Divide top and bottom by 6.',
  },
  {
    prompt: 'What is 3/5 of 35?',
    options: ['21', '7', '15', '28'],
    answer: '21',
    explanation: '35 ÷ 5 = 7, and 7 × 3 = 21.',
  },
];

const CommonFractions = () => (
  <CapsSubjectTopic
    title="Common Fractions"
    subtitle="Equivalent fractions, ordering, and operations with mixed numbers"
    learnSteps={learnSteps}
    task="gr7-common-fractions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default CommonFractions;
