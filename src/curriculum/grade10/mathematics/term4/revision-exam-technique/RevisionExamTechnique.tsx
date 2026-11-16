import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { MarkSplit, ToolPairs } from '../../../../../components/diagrams/maths/Grade10Maths';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';
import * as t from '../../../../../components/diagrams/maths/grade10Helpers3';
import * as p from '../../../../../components/diagrams/maths/grade10Helpers4';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts, grade10Helpers3.ts and grade10Helpers4.ts.
// The paper length (100 marks, 120 minutes) is an example for planning, not a statement about a particular paper.
const f = h.fracStr;
const paper = { marks: 100, minutes: 120 };
const spare = paper.minutes - paper.marks;
const threeMarker = { marks: 3, minutes: 3 };
const dist = t.distanceExact([1, 2], [4, 6]);
const sphere = t.sphereVolume(3);
const prob = p.probability(4, 11);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plan the paper',
    content: slide(
      <>
        <Rule>Use the marks to plan your time: about one minute for every mark. Do the questions you are sure of first, keep time at the end to check, and never leave an answer blank.</Rule>
        <MarkSplit steps={['Read the whole paper (5 minutes)', 'Answer the questions you know', 'Come back to the hard ones', 'Check your answers']} />
        <Worked
          title="A paper of 100 marks in 120 minutes (an example)"
          steps={[
            <>One mark ≈ one minute: {paper.marks} marks need about {paper.marks} minutes.</>,
            <>That leaves {paper.minutes} − {paper.marks} = <strong>{spare} minutes</strong> to read and to check.</>,
            <>A {threeMarker.marks}-mark question deserves about {threeMarker.minutes} minutes.</>,
            <>Move on if you are stuck for more than a few minutes, and come back later.</>,
          ]}
        />
        <Mistake>Spending 15 minutes on a 2-mark question and running out of time for easy marks later in the paper.</Mistake>
      </>,
    ),
  },
  {
    title: 'Show your working',
    content: slide(
      <>
        <Rule>Marks are given for method as well as for the final answer. Write the formula, substitute the numbers, calculate, and give the answer with its units. Keep your answer exact until the last step.</Rule>
        <ToolPairs pairs={[['Two points, find the distance', 'AB² = Δx² + Δy²'], ['Sphere, find the volume', 'V = (4/3)πr³'], ['Letters in a word, a vowel', 'P = favourable ÷ total']]} />
        <Worked
          title="Three questions, with the marks they earn"
          steps={[
            <>(3 marks) Distance from (1; 2) to (4; 6): AB² = 3² + 4² = 25 (2 marks), AB = <strong>{dist}</strong> (1 mark).</>,
            <>(3 marks) Sphere, r = 3 cm: V = (4/3) × π × 27 (2 marks) = <strong>{h.dec(sphere, 1)} cm³</strong> (1 mark).</>,
            <>(2 marks) P(vowel) in MATHEMATICS: 4 vowels out of 11 letters = <strong>{f(prob)}</strong>.</>,
            <>Round only at the end, and always write a decimal with a comma, as in 113,1.</>,
          ]}
        />
        <Mistake>Writing only the final answer. If it is wrong you earn nothing, but correct working still earns the method marks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Common traps',
    content: slide(
      <>
        <Rule>Most lost marks come from the same few traps. Watch for them in every paper: signs, brackets, the calculator mode, units and the question that asks for something different from what you solved.</Rule>
        <ToolPairs pairs={[['(x + 3)² is not x² + 9', 'it is x² + 6x + 9'], ['Divide an inequality by a negative', 'flip the sign'], ['Calculator in radians', 'check sin 30° = 0,5']]} />
        <Worked
          title="Check the answer against the question"
          steps={[
            <>Solve x² − x − 12 = 0: (x − 4)(x + 3) = 0, so x = 4 or x = −3. Two answers, not one.</>,
            <>Interest: R3 000 at 10% compound for 2 years is R3 630,00. Simple interest would give R3 600,00, so read the word "compound".</>,
            <>A probability must be between 0 and 1: an answer of 1,2 is wrong.</>,
            <>A length cannot be negative, and an angle in a triangle must be less than 180°.</>,
          ]}
        />
        <Mistake>Believing that the first answer you get must be right. A quick check against the question catches most careless mistakes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>About how many minutes should a 4-mark question take in a paper where one mark is about one minute?</>,
            <>Expand (x + 3)².</>,
            <>What must you do to the inequality sign when you divide both sides by a negative number?</>,
            <>Why should you show your working on a 3-mark question?</>,
          ]}
          answers={[
            <>About <strong>4 minutes</strong>.</>,
            <>x² + 6x + 9. The middle term 6x is the one that is often forgotten.</>,
            <>Flip it: for example −2x &lt; 6 gives x &gt; −3.</>,
            <>Marks are given for each step of the method, so correct working can earn marks even when the final answer is wrong.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "(2 marks) Factorise completely: x² − 9",
    options: ["(x − 3)²", "(x − 3)(x + 3)", "(x + 3)²", "x(x − 9)"],
    answer: "(x − 3)(x + 3)",
    explanation: "x² − 9 is a difference of squares: x² − 3² = (x − 3)(x + 3) (1 mark for the factors, 1 mark for the signs).",
  },
  {
    prompt: "(3 marks) Solve for x: x² − x − 12 = 0",
    options: ["x = 4 or x = −3", "x = 3 or x = −4", "x = 12 or x = −1", "x = −4 or x = −3"],
    answer: "x = 4 or x = −3",
    explanation: "Factorise: (x − 4)(x + 3) = 0 (1 mark). Each factor can be 0 (1 mark): x = 4 or x = −3 (1 mark).",
  },
  {
    prompt: "(2 marks) Solve for x: 2^(x + 1) = 16",
    options: ["4", "7", "15", "3"],
    answer: "3",
    explanation: "16 = 2⁴ (1 mark), so x + 1 = 4 and x = 3 (1 mark).",
  },
  {
    prompt: "(2 marks) Solve for x: 3x − 7 ≥ 11",
    options: ["x ≤ 6", "x ≥ 4", "x ≥ 6", "x ≥ 18"],
    answer: "x ≥ 6",
    explanation: "Add 7: 3x ≥ 18 (1 mark). Divide by 3: x ≥ 6 (1 mark). The sign stays because you divide by a positive number.",
  },
  {
    prompt: "(2 marks) What is the 11th term of the pattern 3; 7; 11; 15; …?",
    options: ["47", "43", "41", "37"],
    answer: "43",
    explanation: "d = 4, so Tₙ = 4n − 1 (1 mark). T₁₁ = 4(11) − 1 = 43 (1 mark).",
  },
  {
    prompt: "(2 marks) Expand and simplify: (x + 3)²",
    options: ["x² + 6x + 9", "x² + 9", "x² + 3x + 9", "x² + 6x + 6"],
    answer: "x² + 6x + 9",
    explanation: "(x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9 (1 mark for expanding, 1 mark for collecting like terms).",
  },
  {
    prompt: "(2 marks) What are the coordinates of the y-intercept of y = 2x² − 8?",
    options: ["(0; 8)", "(−8; 0)", "(2; 0)", "(0; −8)"],
    answer: "(0; −8)",
    explanation: "The y-intercept is where x = 0: y = 2(0)² − 8 = −8 (1 mark). The point is (0; −8) (1 mark).",
  },
  {
    prompt: "(3 marks) What is the distance between the points (1; 2) and (4; 6)?",
    options: ["7", "25", "5", "3,5"],
    answer: "5",
    explanation: "AB² = (4 − 1)² + (6 − 2)² = 9 + 16 = 25 (2 marks). AB = √25 = 5 (1 mark).",
  },
  {
    prompt: "(2 marks) What is the gradient of the line through (2; 1) and (6; 9)?",
    options: ["1/2", "2", "4", "8"],
    answer: "2",
    explanation: "Gradient = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2 (1 mark for the substitution, 1 mark for the answer).",
  },
  {
    prompt: "(3 marks) What is the midpoint of the line joining (2; 3) and (8; 7)?",
    options: ["(5; 5)", "(6; 4)", "(10; 10)", "(3; 2)"],
    answer: "(5; 5)",
    explanation: "x = (2 + 8) ÷ 2 = 5 (1 mark). y = (3 + 7) ÷ 2 = 5 (1 mark). The midpoint is (5; 5) (1 mark).",
  },
  {
    prompt: "(3 marks) R3 000 is invested at 10% p.a. compound interest for 2 years. What is the amount?",
    options: ["R3 600,00", "R3 300,00", "R3 660,00", "R3 630,00"],
    answer: "R3 630,00",
    explanation: "A = P(1 + i)ⁿ = 3 000(1,1)² (2 marks) = R3 630,00 (1 mark). Simple interest would give R3 600,00.",
  },
  {
    prompt: "(3 marks) What is the interquartile range of 4; 6; 7; 9; 10; 12; 15; 18?",
    options: ["11", "14", "7", "6"],
    answer: "7",
    explanation: "Q₁ = (6 + 7) ÷ 2 = 6,5 and Q₃ = (12 + 15) ÷ 2 = 13,5 (2 marks). IQR = 13,5 − 6,5 = 7 (1 mark).",
  },
  {
    prompt: "(3 marks) What is the volume of a sphere with a radius of 3 cm (one decimal place)?",
    options: ["37,7 cm³", "113,1 cm³", "113,0 cm³", "28,3 cm³"],
    answer: "113,1 cm³",
    explanation: "V = (4/3)πr³ = (4/3) × π × 27 (2 marks) = 113,1 cm³ (1 mark).",
  },
  {
    prompt: "(3 marks) A 30 m tall pole casts a shadow 40 m long. What is the angle of elevation of the sun (one decimal place)?",
    options: ["36,9°", "53,1°", "48,6°", "41,4°"],
    answer: "36,9°",
    explanation: "tan θ = 30 ÷ 40 = 0,75 (2 marks). θ = tan⁻¹(0,75) = 36,9° (1 mark).",
  },
  {
    prompt: "(2 marks) A bag has the letters of the word MATHEMATICS. One letter is drawn. What is the probability that it is a vowel?",
    options: ["4/7", "1/3", "7/11", "4/11"],
    answer: "4/11",
    explanation: "MATHEMATICS has 11 letters. The vowels are A, E, A, I: 4 of 11 (2 marks): 4/11.",
  },
  {
    prompt: "(2 marks) Which exam habit earns the most marks on a 3-mark question?",
    options: ["Write only the final answer", "Leave it blank if you are unsure", "Show each step of your working", "Round off every number early"],
    answer: "Show each step of your working",
    explanation: "Method marks are given for steps. Even if the final answer is wrong you can still earn marks for correct working.",
  },
];
// BANK:END

const RevisionExamTechnique = () => (
  <CapsSubjectTopic
    title="Revision and Examination Technique"
    subtitle="Planning your time, showing your working and avoiding the common traps, with mixed practice for Terms 1 to 4"
    learnSteps={learnSteps}
    task="gr10-revision-exam-technique-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default RevisionExamTechnique;
