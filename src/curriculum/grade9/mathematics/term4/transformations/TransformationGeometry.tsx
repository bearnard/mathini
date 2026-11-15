import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TRANSFORM_COLORS, TransformGrid } from '../../../../../components/diagrams/maths/Grade9Transform';
import {
  enlarge, pt, reflectInXAxis, reflectInYAxis, reflectInYEqualsX, rotate180, rotate90, translate, type P2,
} from '../../../../../components/diagrams/maths/grade9SpaceDataHelpers';

// Every image point below comes from these tested helpers (grade9SpaceDataHelpers.test.ts, lessonsMaths10.test.ts).
const { indigo: I, green: E } = TRANSFORM_COLORS;
const map = (pts: P2[], f: (p: P2) => P2) => pts.map(f);

// slide 1: translation
const triT: P2[] = [{ x: 2, y: 3 }, { x: 4, y: 3 }, { x: 2, y: 5 }];
const imgT = map(triT, (p) => translate(p, 3, 2));

// slide 2: reflection
const triR: P2[] = [{ x: 3, y: 4 }, { x: 5, y: 4 }, { x: 3, y: 1 }];
const imgR = map(triR, reflectInYAxis);
const bX = reflectInXAxis({ x: 3, y: 4 });
const yx = reflectInYEqualsX({ x: 2, y: 5 });
const dd = reflectInYEqualsX({ x: 2, y: 2 });

// slide 3: rotation
const triRot: P2[] = [{ x: 2, y: 1 }, { x: 5, y: 1 }, { x: 2, y: 3 }];
const imgRot = map(triRot, rotate90);
const c1 = rotate90({ x: 1, y: 0 });
const half = rotate180({ x: 2, y: 1 });

// slide 4: enlargement
const triE: P2[] = [{ x: 1, y: 1 }, { x: 3, y: 1 }, { x: 1, y: 2 }];
const imgE = map(triE, (p) => enlarge(p, 2));
const shrink = enlarge({ x: 4, y: 6 }, 1 / 2);

// "Check yourself"
const q1 = translate({ x: -1, y: 4 }, 5, -3);
const q2a = reflectInXAxis({ x: 5, y: -2 });
const q2b = reflectInYEqualsX({ x: 5, y: -2 });
const q3 = rotate90({ x: 3, y: 2 });
const q4 = enlarge({ x: 6, y: -3 }, 1 / 3);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Translation: slide every point the same way',
    content: slide(
      <>
        <Rule>A translation moves every point the same distance in the same direction. &quot;a right and b up&quot; is the rule (x, y) → (x + a, y + b). Left and down are negative.</Rule>
        <TransformGrid
          x={[0, 8]}
          y={[0, 8]}
          shapes={[
            { points: triT, color: I, labelCorner: 0, name: 'A', below: true },
            { points: imgT, color: E, labelCorner: 0, name: "A'", side: 'left' },
          ]}
          arrow={{ from: triT[0], to: imgT[0], color: '#fbbf24' }}
          aria={`Triangle A ${triT.map(pt).join(' ')} is translated 3 right and 2 up to ${imgT.map(pt).join(' ')}. A ${pt(triT[0])} moves to A' ${pt(imgT[0])}.`}
        />
        <Worked
          title="A(2, 3): 3 units right and 2 units up"
          steps={[
            <>Right 3: x = 2 + 3 = {imgT[0].x}. Up 2: y = 3 + 2 = {imgT[0].y}.</>,
            <>The image is <strong>A&apos;{pt(imgT[0])}</strong>. Every other corner moves the same way: {pt(triT[1])} → {pt(imgT[1])}.</>,
          ]}
        />
        <Mistake>Adding the right-movement to y. Right and left change x; up and down change y. (2, 3) does not go to (4, 6).</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflection in the axes and in y = x',
    content: slide(
      <>
        <Rule>A reflection flips a shape over a mirror line. In the y-axis: (x, y) → (−x, y). In the x-axis: (x, y) → (x, −y). In the line y = x: (x, y) → (y, x).</Rule>
        <TransformGrid
          x={[-6, 6]}
          y={[0, 6]}
          mirror="y-axis"
          shapes={[
            { points: triR, color: I, labelCorner: 0, name: 'B' },
            { points: imgR, color: E, labelCorner: 0, name: "B'", side: 'left' },
          ]}
          aria={`Triangle with corner B ${pt(triR[0])} reflected in the y-axis. Its image has corner B' ${pt(imgR[0])}. Each image point is the same distance from the mirror line, on the other side.`}
        />
        <Worked
          steps={[
            <>B(3, 4) in the y-axis: change the sign of x. <strong>B&apos;{pt(imgR[0])}</strong>.</>,
            <>B(3, 4) in the x-axis: change the sign of y: {pt(bX)}.</>,
            <>(2, 5) in y = x: swap the coordinates: {pt(yx)}. D(2, 2) lies on y = x, so it stays at <strong>{pt(dd)}</strong>.</>,
            <>A line of symmetry is a mirror line through a shape: fold along it and the two parts match exactly.</>,
          ]}
        />
        <Mistake>Reflecting in the y-axis by changing y. The y-axis is the mirror, so points move left or right across it: x changes sign, y stays.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rotation about the origin',
    content: slide(
      <>
        <Rule>A rotation turns a shape about a centre. About the origin: 90° anticlockwise, (x, y) → (−y, x); 180°, (x, y) → (−x, −y).</Rule>
        <TransformGrid
          x={[-4, 6]}
          y={[-1, 6]}
          shapes={[
            { points: triRot, color: I, labelCorner: 0, below: true },
            { points: imgRot, color: E, labelCorner: 0, side: 'left', below: true },
          ]}
          arrow={{ from: triRot[0], to: imgRot[0], color: '#fbbf24', curved: true }}
          aria={`A triangle with corners ${triRot.map(pt).join(' ')} rotated 90 degrees anticlockwise about the origin to ${imgRot.map(pt).join(' ')}. The corner ${pt(triRot[0])} moves to ${pt(imgRot[0])}.`}
        />
        <Worked
          steps={[
            <>C(1, 0), 90° anticlockwise: (−y, x) = <strong>{pt(c1)}</strong>.</>,
            <>{pt(triRot[0])}, 90° anticlockwise: (−1, 2), as in the picture: {pt(imgRot[0])}.</>,
            <>{pt({ x: 2, y: 1 })}, 180°: both signs change: <strong>{pt(half)}</strong>.</>,
          ]}
        />
        <Mistake>Swapping the coordinates without changing a sign. (2, 1) → (1, 2) is a reflection in y = x, not a rotation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Enlargement, and which transformations keep size',
    content: slide(
      <>
        <Rule>An enlargement from the origin with scale factor k: (x, y) → (kx, ky). k &gt; 1 makes it bigger, 0 &lt; k &lt; 1 smaller. Translations, reflections and rotations keep the size and shape.</Rule>
        <TransformGrid
          x={[0, 7]}
          y={[0, 5]}
          rays={triE}
          shapes={[
            { points: triE, color: I },
            { points: imgE, color: E, labelCorner: 1, side: 'left', below: true },
          ]}
          aria={`A triangle with corners ${triE.map(pt).join(' ')} enlarged by scale factor 2 from the origin to ${imgE.map(pt).join(' ')}. Rays from the origin pass through each corner and its image. Every side is twice as long.`}
        />
        <Worked
          steps={[
            <>Scale factor 2: {pt(triE[1])} → (2 × 3, 2 × 1) = <strong>{pt(imgE[1])}</strong>. Every length doubles.</>,
            <>Scale factor ½: (4, 6) → (½ × 4, ½ × 6) = <strong>{pt(shrink)}</strong>.</>,
          ]}
        />
        <Mistake>Thinking an enlargement keeps the size. It keeps the shape and the angles, but the lengths are multiplied by k. Only translations, reflections and rotations keep the size too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Translate P(−1, 4) 5 units right and 3 units down.</>,
          <>Reflect Q(5, −2) in the x-axis, and then (separately) in the line y = x.</>,
          <>Rotate R(3, 2) through 90° anticlockwise about the origin.</>,
          <>Enlarge (6, −3) by scale factor ⅓ from the origin.</>,
        ]}
        answers={[
          <>{pt(q1)}</>,
          <>{pt(q2a)}; {pt(q2b)}</>,
          <>{pt(q3)}</>,
          <>{pt(q4)}</>,
        ]}
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'If point A(2, 3) is translated 3 units right and 2 units up, what are its new coordinates?',
    options: ['(5, 5)', '(5, 1)', '(-1, 5)', '(2, 6)'],
    answer: '(5, 5)',
    explanation: 'New coordinates: (2 + 3, 3 + 2) = (5, 5).',
  },
  {
    prompt: 'Which transformation preserves the size and shape of a figure?',
    options: ['Enlargement and reflection only', 'Translation, reflection and rotation', 'Translation and enlargement only', 'Rotation and enlargement only'],
    answer: 'Translation, reflection and rotation',
    explanation: 'These rigid transformations preserve size and shape; enlargement changes size.',
  },
  {
    prompt: 'If point B(3, 4) is reflected over the y-axis, what are its new coordinates?',
    options: ['(-3, 4)', '(3, -4)', '(-3, -4)', '(4, 3)'],
    answer: '(-3, 4)',
    explanation: 'Reflection over the y-axis changes the x-coordinate sign: (3, 4) → (-3, 4).',
  },
  {
    prompt: 'A point C(1, 0) is rotated 90° counterclockwise around the origin. Its new position is:',
    options: ['(0, 1)', '(0, -1)', '(1, 0)', '(-1, 0)'],
    answer: '(0, 1)',
    explanation: 'A 90° counterclockwise rotation maps (x, y) to (-y, x): (1, 0) → (0, 1).',
  },
  {
    prompt: 'What does an enlargement with scale factor 2 do to a figure?',
    options: ['Doubles the size', 'Halves the size', 'Rotates it', 'Reflects it'],
    answer: 'Doubles the size',
    explanation: 'A scale factor of 2 means all linear dimensions become twice as large.',
  },
  {
    prompt: 'If a figure has a line of symmetry, what happens when you fold along that line?',
    options: ['The parts do not match', 'The parts match exactly', 'Only one part is visible', 'It rotates'],
    answer: 'The parts match exactly',
    explanation: 'A line of symmetry divides a figure into two identical halves.',
  },
  {
    prompt: 'Point D(2, 2) is reflected over the line y = x. Its new coordinates are:',
    options: ['(2, 2)', '(-2, -2)', '(2, -2)', '(x, y) swaps'],
    answer: '(2, 2)',
    explanation: 'Reflection over y = x swaps coordinates: (2, 2) → (2, 2) (it lies on the line).',
  },
  {
    prompt: 'An enlargement with scale factor 1/2 from the origin maps (4, 6) to:',
    options: ['(2, 3)', '(8, 12)', '(4, 6)', '(2, 6)'],
    answer: '(2, 3)',
    explanation: 'Multiplying each coordinate by 1/2: (4 × 1/2, 6 × 1/2) = (2, 3).',
  },
];

const TransformationGeometry = () => (
  <CapsSubjectTopic
    title="Transformation Geometry"
    subtitle="Translations, reflections, rotations and enlargements"
    learnSteps={learnSteps}
    task="gr9-transformations-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TransformationGeometry;
