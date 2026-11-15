import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LadderWall, RightTriangle } from '../../../../../components/diagrams/maths/Grade8Graphs';
import { dc, hypotenuse, isRightAngled, shorterSide } from '../../../../../components/diagrams/maths/grade8NumberHelpers';

// Every number in the slides below comes from these tested helpers (grade8NumberHelpers) and
// lessonsMaths6.test.ts checks that the rendered slides show them.
const sq = (n: number | string) => (
  <>
    {n}
    <sup className="text-[0.75em] font-bold">2</sup>
  </>
);

const t345 = hypotenuse(3, 4);
const t912 = hypotenuse(9, 12);
const leg13 = shorterSide(13, 5);
const leg10 = shorterSide(10, 6);
const yes = isRightAngled(8, 15, 17);
const no = isRightAngled(7, 8, 9);
const ladder = shorterSide(2.5, 0.7);

// "Check yourself", answers computed from the same helpers
const c1 = hypotenuse(6, 8);
const c2 = shorterSide(25, 7);
const c3 = isRightAngled(5, 12, 13);
const c4 = hypotenuse(5, 12);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The hypotenuse and the theorem',
    content: slide(
      <>
        <Rule>The hypotenuse c, the longest side of a right-angled triangle, sits opposite the right angle. The theorem: c² = a² + b², where a and b are the two shorter sides.</Rule>
        <RightTriangle a={3} b={4} labels={['3', '4', '5']} squares aria={`A right-angled triangle with sides 3, 4 and 5 and a square drawn on each side. The squares hold ${t345.a2}, ${t345.b2} and ${t345.c2} unit squares: ${t345.a2} + ${t345.b2} = ${t345.c2}.`} />
        <Worked
          title="Sides 3, 4 and 5"
          steps={[
            <>Squares on the shorter sides: {sq(3)} = {t345.a2} and {sq(4)} = {t345.b2}.</>,
            <>Together: {t345.a2} + {t345.b2} = {t345.c2}, which is the square on the hypotenuse, {sq(5)}.</>,
            <>So c = √{t345.c2} = <strong>{t345.c}</strong>.</>,
          ]}
        />
        <Mistake>Adding the sides: 3 + 4 = 7 is not the hypotenuse. The theorem adds the squares of the sides, not the sides.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding the hypotenuse',
    content: slide(
      <>
        <Rule>Square the two shorter sides, add, then take the square root: c = √(a² + b²).</Rule>
        <RightTriangle a={9} b={12} labels={['9', '12', 'c']} aria="A right-angled triangle with shorter sides 9 and 12 and hypotenuse c." />
        <Worked
          title="Shorter sides 9 and 12"
          steps={[
            <>c² = {sq(9)} + {sq(12)} = {t912.a2} + {t912.b2} = {t912.c2}.</>,
            <>c = √{t912.c2} = <strong>{t912.c}</strong>.</>,
            <>Check: {t912.c} is longer than 12, as a hypotenuse must be.</>,
          ]}
        />
        <Mistake>Stopping at c² = {t912.c2}. That is the area of the square on c; the length is the square root, {t912.c}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding a shorter side',
    content: slide(
      <>
        <Rule>When you know the hypotenuse, subtract: b² = c² − a². Then take the square root.</Rule>
        <RightTriangle a={5} b={12} labels={['5', 'b', '13']} aria="A right-angled triangle with hypotenuse 13, one shorter side 5 and the other shorter side b." />
        <Worked
          steps={[
            <>Hypotenuse 13, one side 5: b² = {sq(13)} − {sq(5)} = {leg13.c2} − {leg13.a2} = {leg13.b2}.</>,
            <>b = √{leg13.b2} = <strong>{leg13.b}</strong>.</>,
            <>Hypotenuse 10, one side 6: b² = {leg10.c2} − {leg10.a2} = {leg10.b2}, so b = <strong>{leg10.b}</strong>.</>,
          ]}
        />
        <Mistake>Adding the squares again: {leg13.c2} + {leg13.a2} = {leg13.c2 + leg13.a2} gives a side longer than the hypotenuse, which is impossible.</Mistake>
      </>,
    ),
  },
  {
    title: 'Is the triangle right-angled?',
    content: slide(
      <>
        <Rule>The theorem works only for right-angled triangles. To test three sides, compare the square of the longest side with the sum of the squares of the other two.</Rule>
        <RightTriangle a={8} b={15} labels={['8', '15', '17']} aria={`A triangle with sides 8, 15 and 17. 8 squared plus 15 squared is ${yes.others2}, which equals 17 squared, so the angle between the sides 8 and 15 is a right angle.`} />
        <Worked
          steps={[
            <>8, 15, 17: {sq(8)} + {sq(15)} = 64 + 225 = {yes.others2} and {sq(17)} = {yes.longest2}. Equal, so it is <strong>right-angled</strong>.</>,
            <>7, 8, 9: {sq(7)} + {sq(8)} = 49 + 64 = {no.others2} but {sq(9)} = {no.longest2}. Not equal, so it is <strong>not</strong> right-angled.</>,
          ]}
        />
        <Mistake>Testing with the wrong side. The longest side must be on its own: compare {sq(17)} with {sq(8)} + {sq(15)}, not {sq(8)} with {sq(15)} + {sq(17)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pythagoras in real life',
    content: slide(
      <>
        <Rule>Look for the right angle (a wall and the ground, the corner of a rectangle). The side opposite it is the hypotenuse; then use the theorem.</Rule>
        <LadderWall ladder={2.5} foot={0.7} height={ladder.b} />
        <Worked
          title="A 2,5 m ladder stands 0,7 m from a wall. How high does it reach?"
          steps={[
            <>The ladder is the hypotenuse: h² = 2,5² − 0,7² = {dc(ladder.c2)} − {dc(ladder.a2)} = {dc(ladder.b2)}.</>,
            <>h = √{dc(ladder.b2)} = <strong>{dc(ladder.b)} m</strong>.</>,
          ]}
        />
        <Mistake>Treating the ladder as a shorter side and adding: 2,5² + 0,7² gives a height longer than the ladder itself.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The shorter sides are 6 cm and 8 cm. Find the hypotenuse.</li>
            <li>The hypotenuse is 25 cm and one side is 7 cm. Find the other side.</li>
            <li>Is a triangle with sides 5, 12 and 13 right-angled?</li>
            <li>A rectangle is 12 cm long and 5 cm wide. How long is its diagonal?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{c1.a2} + {c1.b2} = {c1.c2}, so c = {c1.c} cm.</li>
            <li>{c2.c2} − {c2.a2} = {c2.b2}, so b = {c2.b} cm.</li>
            <li>{c3.right ? 'Yes' : 'No'}: 25 + 144 = {c3.others2} = {sq(13)}.</li>
            <li>The diagonal is a hypotenuse: {c4.a2} + {c4.b2} = {c4.c2}, so it is {c4.c} cm.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A right triangle has legs 3 and 4. What is the hypotenuse?',
    options: ['5', '6', '7', '4,5'],
    answer: '5',
    explanation: '3² + 4² = 9 + 16 = 25, so c = 5.',
  },
  {
    prompt: 'In a right triangle, c² equals...',
    options: ['a² + b²', 'a² - b²', '2ab', 'a + b'],
    answer: 'a² + b²',
    explanation: 'This is the statement of Pythagoras.',
  },
  {
    prompt: 'If c = 13 and one leg is 5, the other leg is...',
    options: ['12', '8', '10', '18'],
    answer: '12',
    explanation: '13² - 5² = 169 - 25 = 144, and √144 = 12.',
  },
  {
    prompt: 'If hypotenuse is 10 and one leg is 6, the other leg is...',
    options: ['8', '4', '16', '12'],
    answer: '8',
    explanation: '10² - 6² = 100 - 36 = 64, and √64 = 8.',
  },
  {
    prompt: 'Pythagoras can be used only for...',
    options: ['right-angled triangles', 'all triangles', 'equilateral triangles only', 'circles'],
    answer: 'right-angled triangles',
    explanation: 'The theorem applies only when there is a 90° angle.',
  },
  {
    prompt: 'A triangle has legs 9 and 12. Hypotenuse = ?',
    options: ['15', '13', '18', '21'],
    answer: '15',
    explanation: '9² + 12² = 81 + 144 = 225, and √225 = 15.',
  },
  {
    prompt: 'Which set of side lengths forms a right triangle?',
    options: ['8, 15, 17', '7, 8, 9', '5, 5, 9', '6, 7, 8'],
    answer: '8, 15, 17',
    explanation: '8² + 15² = 64 + 225 = 289 = 17².',
  },
  {
    prompt: 'In a right triangle, the hypotenuse is...',
    options: ['the longest side', 'always vertical', 'the shortest side', 'opposite the smallest angle'],
    answer: 'the longest side',
    explanation: 'It is opposite the right angle and is always longest.',
  },
];

const TheoremOfPythagoras = () => (
  <CapsSubjectTopic
    title="Theorem of Pythagoras"
    subtitle="Right triangles, hypotenuse identification, and unknown side lengths"
    learnSteps={learnSteps}
    task="gr8-theorem-of-pythagoras-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TheoremOfPythagoras;
