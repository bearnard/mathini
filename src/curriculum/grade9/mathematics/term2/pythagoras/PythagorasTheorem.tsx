import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { RightTriangle, SquareSumBars, SquaresOnSides } from '../../../../../components/diagrams/maths/Grade9Geometry';
import { fmt, hypotenuse, isRightTriangle, roundTo, shorterSide } from '../../../../../components/diagrams/maths/grade9GeometryHelpers';

// Every number in the slides below comes from these tested helpers (grade9GeometryHelpers.test.ts, lessonsMaths9.test.ts).
const sq = (n: React.ReactNode) => (
  <>
    {n}
    <sup className="text-[0.75em] font-bold">2</sup>
  </>
);

// slide 1 and 2: hypotenuse
const h34 = hypotenuse(3, 4);
const h724 = hypotenuse(7, 24);
const h25 = hypotenuse(2, 5);
const h25r = roundTo(h25.c, 2);

// slide 3: a shorter side
const s106 = shorterSide(10, 6);
const ladder = shorterSide(13, 5);

// slide 4: is it right-angled?
const t51213 = isRightTriangle(5, 12, 13);
const t6810 = isRightTriangle(6, 8, 10);
const t346 = isRightTriangle(3, 4, 6);

// "Check yourself"
const c1 = hypotenuse(9, 12);
const c2 = shorterSide(17, 8);
const c3 = isRightTriangle(7, 8, 11);
const c4 = hypotenuse(4, 6);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The hypotenuse and the theorem of Pythagoras',
    content: slide(
      <>
        <Rule>In a right-angled triangle, the hypotenuse c is the longest side, opposite the right angle. The squares on the two shorter sides add up to the square on the hypotenuse: {sq('a')} + {sq('b')} = {sq('c')}.</Rule>
        <SquaresOnSides a={3} b={4} />
        <Worked
          title="Sides 3, 4 and 5"
          steps={[
            <>The hypotenuse is 5: it is opposite the right angle.</>,
            <>Squares on the shorter sides: {sq(3)} + {sq(4)} = {h34.a2} + {h34.b2} = {h34.c2}.</>,
            <>Square on the hypotenuse: {sq(5)} = <strong>{h34.c2}</strong>. They match.</>,
          ]}
        />
        <Mistake>The hypotenuse is not &quot;any side&quot; or a side next to the right angle. It is always opposite the right angle, and it is always the longest side.</Mistake>
      </>,
    ),
  },
  {
    title: 'Find the hypotenuse: square, add, square root',
    content: slide(
      <>
        <Rule>To find the hypotenuse: square the two shorter sides, add, then take the square root.</Rule>
        <RightTriangle base={4} height={3} labels={{ base: '4 cm', height: '3 cm', hyp: 'c = ?' }} aria="A right-angled triangle with shorter sides 3 cm and 4 cm. The hypotenuse c is unknown." />
        <Worked
          steps={[
            <>{sq('c')} = {sq(3)} + {sq(4)} = {h34.a2} + {h34.b2} = {h34.c2}, so c = √{h34.c2} = <strong>{h34.c} cm</strong>.</>,
            <>Legs 7 cm and 24 cm: {sq('c')} = {h724.a2} + {h724.b2} = {h724.c2}, so c = √{h724.c2} = <strong>{h724.c} cm</strong>.</>,
            <>Legs 2 cm and 5 cm: {sq('c')} = {h25.a2} + {h25.b2} = {h25.c2}; c = √{h25.c2} ≈ <strong>{fmt(h25r)} cm</strong> (2 decimals).</>,
          ]}
        />
        <Mistake>Adding the sides: 3 + 4 = 7 is wrong. Add the squares, then take the square root: √{h34.c2} = {h34.c}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Find a shorter side: square, subtract, square root',
    content: slide(
      <>
        <Rule>To find a shorter side, start with the hypotenuse: {sq('b')} = {sq('c')} − {sq('a')}. Subtract, then take the square root.</Rule>
        <RightTriangle base={5} height={ladder.b} wall labels={{ base: '5 m', height: 'h = ?', hyp: '13 m' }} aria={`A 13 m ladder leans against a wall. Its foot is 5 m from the wall. The height h it reaches up the wall is unknown; it works out to ${ladder.b} m.`} />
        <Worked
          steps={[
            <>Hypotenuse 10 cm, one side 6 cm: {sq('b')} = {s106.c2} − {s106.a2} = {s106.b2}, so b = <strong>{s106.b} cm</strong>.</>,
            <>A 13 m ladder, foot 5 m from the wall: {sq('h')} = {ladder.c2} − {ladder.a2} = {ladder.b2}.</>,
            <>h = √{ladder.b2} = <strong>{ladder.b} m</strong> up the wall.</>,
          ]}
        />
        <Mistake>Adding when you should subtract: {ladder.c2} + {ladder.a2} = {ladder.c2 + ladder.a2} would make the wall side longer than the 13 m ladder, which is impossible.</Mistake>
      </>,
    ),
  },
  {
    title: 'Test whether a triangle is right-angled',
    content: slide(
      <>
        <Rule>Square the two shorter sides and add. If the sum equals the square of the longest side, the triangle is right-angled. Whole-number sets like this are Pythagorean triples.</Rule>
        <SquareSumBars a={5} b={12} c={13} />
        <Worked
          steps={[
            <>5, 12, 13: {t51213.a2} + {t51213.b2} = {t51213.sum} and {sq(13)} = {t51213.c2}. Equal: <strong>right-angled</strong>.</>,
            <>6, 8, 10: {t6810.a2} + {t6810.b2} = {t6810.sum} = {sq(10)}. <strong>Yes</strong>, a triple (double 3, 4, 5).</>,
            <>3, 4, 6: {t346.a2} + {t346.b2} = {t346.sum}, but {sq(6)} = {t346.c2}. <strong>Not</strong> right-angled.</>,
          ]}
        />
        <Mistake>Testing with the wrong side as c. Always use the longest side as the hypotenuse.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>The shorter sides of a right-angled triangle are 9 cm and 12 cm. Find the hypotenuse.</>,
          <>The hypotenuse is 17 m and one side is 8 m. Find the other side.</>,
          <>Is a triangle with sides 7, 8 and 11 right-angled?</>,
          <>The shorter sides are 4 cm and 6 cm. Find the hypotenuse to 2 decimal places.</>,
        ]}
        answers={[
          <>{c1.a2} + {c1.b2} = {c1.c2}; √{c1.c2} = {c1.c} cm</>,
          <>{c2.c2} − {c2.a2} = {c2.b2}; √{c2.b2} = {c2.b} m</>,
          <>{c3.a2} + {c3.b2} = {c3.sum}, but {sq(11)} = {c3.c2}: {c3.right ? 'yes' : 'no'}.</>,
          <>{c4.a2} + {c4.b2} = {c4.c2}; √{c4.c2} ≈ {fmt(roundTo(c4.c, 2))} cm</>,
        ]}
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'In a right triangle, the two legs are 3 cm and 4 cm. What is the hypotenuse?',
    options: ['5 cm', '7 cm', '6 cm', '8 cm'],
    answer: '5 cm',
    explanation: 'Using a² + b² = c²: 3² + 4² = 9 + 16 = 25, so c = √25 = 5 cm.',
  },
  {
    prompt: 'Which set of lengths can form a right triangle?',
    options: ['3, 4, 6', '5, 12, 13', '2, 3, 4', '4, 5, 7'],
    answer: '5, 12, 13',
    explanation: '5² + 12² = 25 + 144 = 169 = 13², confirming a right triangle.',
  },
  {
    prompt: 'A right triangle has a hypotenuse of 10 cm and one leg of 6 cm. What is the other leg?',
    options: ['4 cm', '8 cm', '12 cm', '16 cm'],
    answer: '8 cm',
    explanation: 'Using a² + 6² = 10²: a² + 36 = 100, so a² = 64, and a = 8 cm.',
  },
  {
    prompt: 'What is the Pythagorean theorem relationship?',
    options: ['a + b = c', 'a × b = c', 'a² + b² = c²', 'a² - b² = c²'],
    answer: 'a² + b² = c²',
    explanation: 'This is the fundamental relationship for right triangles.',
  },
  {
    prompt: 'A ladder of length 13 m leans against a wall. If the base is 5 m from the wall, how high is the ladder?',
    options: ['8 m', '10 m', '12 m', '15 m'],
    answer: '12 m',
    explanation: 'Using 5² + h² = 13²: 25 + h² = 169, so h² = 144, and h = 12 m.',
  },
  {
    prompt: 'Is 6, 8, 10 a Pythagorean triple?',
    options: ['Yes', 'No', 'Only if multiplied by 2', 'Cannot determine'],
    answer: 'Yes',
    explanation: '6² + 8² = 36 + 64 = 100 = 10², so yes, it is a Pythagorean triple.',
  },
  {
    prompt: 'In a right triangle with legs 7 cm and 24 cm, the hypotenuse is approximately:',
    options: ['25 cm', '26 cm', '24,5 cm', '31 cm'],
    answer: '25 cm',
    explanation: '7² + 24² = 49 + 576 = 625, so c = 25 cm.',
  },
  {
    prompt: 'What does the hypotenuse represent?',
    options: ['The shortest side, next to the right angle', 'One of the two legs that meet at the right angle', 'The longest side opposite the right angle', 'The side opposite the smallest angle'],
    answer: 'The longest side opposite the right angle',
    explanation: 'The hypotenuse (c) is always opposite the right angle and is the longest side.',
  },
];

const PythagorasTheorem = () => (
  <CapsSubjectTopic
    title="Theorem of Pythagoras"
    subtitle="Right-triangle relationships and unknown side calculations"
    learnSteps={learnSteps}
    task="gr9-pythagoras-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default PythagorasTheorem;
