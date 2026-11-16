import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { MiniGraph, SequenceBars } from '../../../../../components/diagrams/maths/Grade10Maths';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts (grade10Helpers.test.ts, g10MathsLessons.test.ts).

// slide 1: recognise a linear pattern
const seq1 = h.sequence(6, 5, 5); // 6; 11; 16; 21; 26
const next1 = h.linearTerm(6, 5, 6);
const notLinear = [1, 3, 6, 10]; // differences 2, 3, 4

// slide 2: the general term
const rule = h.linearRule(6, 5); // Tₙ = 5n + 1
const t30 = h.linearTerm(6, 5, 30);
const decRule = h.linearRule(20, -3); // Tₙ = −3n + 23

// slide 3: using the rule
const target = 101;
const nOf = h.termNumberOf(6, 5, target)!; // 5n + 1 = 101 -> 20
const notTerm = 83; // 5n + 1 = 83 -> n = 16,4

// "Check yourself"
const c1 = h.linearRule(4, 6);
const c2 = h.linearTerm(4, 6, 15);
const c3 = h.termNumberOf(4, 6, 58)!;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Is the pattern linear?',
    content: slide(
      <>
        <Rule>In a linear pattern the difference between consecutive terms is always the same. That constant is the common difference d.</Rule>
        <SequenceBars terms={seq1} diff={5} />
        <Worked
          steps={[
            <>{seq1.join('; ')}: the differences are {h.sequence(6, 5, 5).slice(1).map((t, i) => t - seq1[i]).join(', ')}, all equal, so it is linear with d = 5.</>,
            <>The next term is {seq1[4]} + 5 = <strong>{next1}</strong>.</>,
            <>{notLinear.join('; ')}: the differences are {notLinear.slice(1).map((t, i) => t - notLinear[i]).join(', ')}. They are not constant, so this pattern is not linear.</>,
          ]}
        />
        <Mistake>
          Comparing only the first two terms. Always check at least three differences before you decide a pattern is linear.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'The general term',
    content: slide(
      <>
        <Rule>For a linear pattern Tₙ = dn + c, where d is the common difference and c = T₁ − d.</Rule>
        <MiniGraph
          x={[0, 5]}
          y={[0, 25]}
          yEvery={5}
          curves={[{ f: (n: number) => rule.m * n + rule.c, label: h.ruleStr(rule), labelAt: 4.4, labelDy: 15, labelAnchor: 'end' }]}
          points={[1, 2, 3, 4].map((n) => ({ x: n, y: h.linearTerm(6, 5, n), label: String(h.linearTerm(6, 5, n)), anchor: 'end' as const, dy: -4 }))}
          aria={`The points for the terms ${seq1.slice(0, 4).join(', ')} lie on a straight line, the graph of ${h.ruleStr(rule)}.`}
        />
        <Worked
          title={seq1.slice(0, 4).join('; ') + '; …'}
          steps={[
            <>d = 5, so Tₙ = 5n + c.</>,
            <>Use the first term: n = 1 gives 5(1) + c = 6, so c = 1.</>,
            <>{h.ruleStr(rule)}. Check with n = 3: 5(3) + 1 = 16 ✓.</>,
            <>A decreasing pattern 20; 17; 14; … has d = −3, so <strong>{h.ruleStr(decRule)}</strong>.</>,
          ]}
        />
        <Mistake>
          Using the first term as c. The constant is T₁ − d, not T₁: for 6; 11; 16 it is 1, not 6.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Using the rule',
    content: slide(
      <>
        <Rule>To find a term, put the term number into the rule. To find the term number, set the rule equal to the value and solve for n.</Rule>
        <MiniGraph
          x={[0, 24]}
          y={[0, 120]}
          tickEvery={4}
          yEvery={20}
          curves={[{ f: (n: number) => rule.m * n + rule.c, label: h.ruleStr(rule), labelAt: 14, labelDy: 14 }]}
          points={[{ x: nOf, y: target, label: `T${'₂₀'} = ${target}`, anchor: 'end' }]}
          aria={`The graph of ${h.ruleStr(rule)}. The point (${nOf}; ${target}) shows that the term number ${nOf} has the value ${target}.`}
        />
        <Worked
          title={h.ruleStr(rule)}
          steps={[
            <>T₃₀ = 5(30) + 1 = <strong>{t30}</strong>.</>,
            <>Which term equals {target}? 5n + 1 = {target}, so 5n = {target - 1} and n = <strong>{nOf}</strong>.</>,
            <>Is {notTerm} a term? 5n + 1 = {notTerm} gives n = {h.dec((notTerm - 1) / 5, 1)}, which is not a whole number, so {notTerm} is not in the pattern.</>,
          ]}
        />
        <Mistake>
          Counting the steps wrongly in a word problem. If shape 1 has 6 sticks and each shape adds 5, shape 30 has 6 + 29 × 5 = {t30} sticks (29 steps, not 30).
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Find the general term of 4; 10; 16; 22; …</>,
          <>What is the 15th term of that pattern?</>,
          <>Which term of that pattern equals 58?</>,
        ]}
        answers={[
          <>d = 6, so Tₙ = 6n + c with 6 + c = 4, so c = −2: <strong>{h.ruleStr(c1)}</strong>.</>,
          <>6(15) − 2 = <strong>{c2}</strong>.</>,
          <>6n − 2 = 58, so 6n = 60 and n = <strong>{c3}</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "Write down the next two terms: 7; 11; 15; 19; …",
    options: ["22; 25", "23; 27", "23; 28", "24; 29"],
    answer: "23; 27",
    explanation: "The common difference is 4. 19 + 4 = 23 and 23 + 4 = 27.",
  },
  {
    prompt: "Find the general term of: 5; 8; 11; 14; …",
    options: ["Tₙ = 3n + 2", "Tₙ = 3n + 5", "Tₙ = 5n + 3", "Tₙ = 3n − 2"],
    answer: "Tₙ = 3n + 2",
    explanation: "The difference is 3, so Tₙ = 3n + c. For n = 1: 3 + c = 5, so c = 2.",
  },
  {
    prompt: "What is the 20th term of: 4; 9; 14; 19; …?",
    options: ["100", "104", "95", "99"],
    answer: "99",
    explanation: "d = 5 and T₁ = 4, so Tₙ = 5n − 1. T₂₀ = 5(20) − 1 = 99.",
  },
  {
    prompt: "Which term of 2; 5; 8; 11; … is equal to 62?",
    options: ["20", "22", "21", "19"],
    answer: "21",
    explanation: "Tₙ = 3n − 1. Set 3n − 1 = 62, so 3n = 63 and n = 21.",
  },
  {
    prompt: "Which of these numbers is a term of the pattern Tₙ = 4n − 3?",
    options: ["42", "41", "40", "38"],
    answer: "41",
    explanation: "Add 3 and divide by 4: (41 + 3) ÷ 4 = 11, a whole number, so 41 is T₁₁. The other numbers do not give whole numbers.",
  },
  {
    prompt: "Find the general term of the decreasing pattern: 30; 26; 22; 18; …",
    options: ["Tₙ = −4n + 34", "Tₙ = −4n + 30", "Tₙ = 4n − 34", "Tₙ = −4n + 26"],
    answer: "Tₙ = −4n + 34",
    explanation: "The difference is −4, so Tₙ = −4n + c. For n = 1: −4 + c = 30, so c = 34.",
  },
  {
    prompt: "What is true about the differences between consecutive terms of a linear pattern?",
    options: ["They increase by the same amount each time", "They are all equal to the first term", "They add up to zero", "They are all equal"],
    answer: "They are all equal",
    explanation: "A linear pattern has a constant difference. If the differences themselves change, the pattern is not linear.",
  },
  {
    prompt: "If Tₙ = 5n − 2, what is T₁₀?",
    options: ["40", "52", "48", "50"],
    answer: "48",
    explanation: "Substitute n = 10: 5(10) − 2 = 48.",
  },
  {
    prompt: "Shape 1 uses 4 matchsticks. Each next shape uses 3 more matchsticks than the one before. How many matchsticks does shape 12 use?",
    options: ["36", "37", "40", "39"],
    answer: "37",
    explanation: "Tₙ = 3n + 1. T₁₂ = 3(12) + 1 = 37. (The 3 is added 11 times, not 12 times.)",
  },
  {
    prompt: "For Tₙ = 3n + 4, which value of n gives Tₙ = 40?",
    options: ["12", "11", "13", "36"],
    answer: "12",
    explanation: "3n + 4 = 40, so 3n = 36 and n = 12.",
  },
  {
    prompt: "Which of these is NOT a linear pattern?",
    options: ["1; 4; 7; 10", "9; 7; 5; 3", "10; 20; 30; 40", "2; 4; 8; 16"],
    answer: "2; 4; 8; 16",
    explanation: "The differences in 2; 4; 8; 16 are 2, 4, 8: they are not constant.",
  },
  {
    prompt: "In the general term Tₙ = an + b, what does a represent?",
    options: ["The first term", "The number of terms", "The common difference", "The term number"],
    answer: "The common difference",
    explanation: "Each time n increases by 1, Tₙ changes by a. So a is the constant difference.",
  },
];
// BANK:END

const NumberPatterns = () => (
  <CapsSubjectTopic
    title="Number Patterns"
    subtitle="Linear patterns and general terms"
    learnSteps={learnSteps}
    task="gr10-number-patterns-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default NumberPatterns;
