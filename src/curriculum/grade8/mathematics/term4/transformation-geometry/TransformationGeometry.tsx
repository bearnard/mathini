import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CoordGrid } from '../../../../../components/diagrams/maths/Grade8Space';
import { enlarge, pt, reflectInX, reflectInY, rotate180, rotate90cw, translate, type P2 } from '../../../../../components/diagrams/maths/grade8SpaceHelpers';

// Every number in the slides below comes from these tested helpers (grade8SpaceHelpers) and
// lessonsMaths7.test.ts checks that the rendered slides show them.
const I = '#818cf8';
const G = '#34d399';
const Y = '#fbbf24';
const P = (p: P2) => pt(p[0], p[1]);

const tri: P2[] = [[2, -1], [4, -1], [2, 1]];
const moved = tri.map((p) => translate(p, 3, 2));
const wrongMove: P2 = [2 + 2, -1 + 3]; // the mistake: the numbers swapped
const refl: P2[] = [[4, -3], [4, -1], [2, -3]];
const mirrored = refl.map(reflectInY);
const inX = reflectInX([4, -3]);
const flag: P2[] = [[1, 2], [3, 2], [1, 3]];
const turned = flag.map(rotate90cw);
const half = rotate180([1, 2]);
const rect: P2[] = [[0, 0], [2, 0], [2, 3], [0, 3]];
const big = rect.map((p) => enlarge(p, 2));

// "Check yourself", answers computed from the same helpers
const c1 = translate([-3, 4], 5, -2);
const c2 = reflectInX([-2, 5]);
const c3 = rotate90cw([5, -3]);
const c4 = { w: 3 * 3, h: 1 * 3 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Translation: slide every point the same way',
    content: slide(
      <>
        <Rule>A translation slides a shape without turning or flipping it. Moving a units right and b units up: (x; y) → (x + a; y + b). Left and down are negative.</Rule>
        <CoordGrid
          x={[-1, 8]}
          y={[-2, 4]}
          shapes={[{ pts: tri, color: I }, { pts: moved, color: G }]}
          arrows={[{ from: tri[0], to: moved[0], color: Y }]}
          points={[{ p: tri[0], color: I, label: P(tri[0]), at: 'sw' }, { p: moved[0], color: G, label: P(moved[0]), at: 'se' }]}
          aria={`A triangle with a corner at ${P(tri[0])} slides 3 right and 2 up. That corner lands on ${P(moved[0])}; the image is the same size and shape.`}
        />
        <Worked
          title={`Translate ${P(tri[0])} by 3 right and 2 up`}
          steps={[
            <>Add 3 to x: 2 + 3 = {moved[0][0]}.</>,
            <>Add 2 to y: −1 + 2 = {moved[0][1]}.</>,
            <>The image is <strong>{P(moved[0])}</strong>. Every corner moves the same way, so the image is the same size and shape.</>,
          ]}
        />
        <Mistake>Mixing up the directions: adding 2 to x and 3 to y gives {P(wrongMove)}. The first number of the move goes with x, the second with y.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflection in an axis',
    content: slide(
      <>
        <Rule>A reflection flips a shape over a mirror line to make a mirror image. In the y-axis: (x; y) → (−x; y). In the x-axis: (x; y) → (x; −y).</Rule>
        <CoordGrid
          x={[-5, 5]}
          y={[-4, 1]}
          shapes={[{ pts: refl, color: I }, { pts: mirrored, color: G }, { pts: [[0, -4], [0, 1]], color: Y, closed: false, dashed: true }]}
          points={[{ p: refl[0], color: I, label: P(refl[0]), at: 'se' }, { p: mirrored[0], color: G, label: P(mirrored[0]), at: 'sw' }]}
          aria={`A triangle with a corner at ${P(refl[0])} is reflected in the y-axis. The image corner is ${P(mirrored[0])}: the same distance from the axis on the other side.`}
        />
        <Worked
          title={`Reflect ${P(refl[0])} in the y-axis`}
          steps={[
            <>The point is 4 units to the right of the y-axis.</>,
            <>Its image is 4 units to the left, at the same height: <strong>{P(mirrored[0])}</strong>. Only the sign of x changes.</>,
            <>In the x-axis instead, only y changes sign: {P(refl[0])} → {P(inX)}.</>,
          ]}
        />
        <Mistake>Changing the wrong coordinate. Reflecting in the y-axis changes x, not y: {P(refl[0])} → {P(mirrored[0])}, not {P(inX)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rotation about the origin',
    content: slide(
      <>
        <Rule>A rotation turns a shape about a fixed point. About the origin, 90° clockwise: (x; y) → (y; −x). 180°: (x; y) → (−x; −y).</Rule>
        <CoordGrid
          x={[-1, 4]}
          y={[-4, 4]}
          shapes={[{ pts: flag, color: I }, { pts: turned, color: G }]}
          turn={{ from: flag[0], to: turned[0], color: Y }}
          points={[{ p: [0, 0], color: Y }, { p: flag[0], color: I, label: P(flag[0]), at: 'nw' }, { p: turned[0], color: G, label: P(turned[0]), at: 'se' }]}
          aria={`A triangle with a corner at ${P(flag[0])} is turned 90 degrees clockwise about the origin. That corner moves along an arc to ${P(turned[0])}.`}
        />
        <Worked
          title={`Rotate ${P(flag[0])} 90° clockwise about the origin`}
          steps={[
            <>Swap the coordinates: (2; 1).</>,
            <>Change the sign of the new y: <strong>{P(turned[0])}</strong>.</>,
            <>180° about the origin changes both signs: {P(flag[0])} → {P(half)}.</>,
          ]}
        />
        <Mistake>Only swapping: (2; 1) is a reflection in the line y = x, not a rotation. After a quarter turn clockwise, a point in Quadrant I lands in Quadrant IV, so y must be negative.</Mistake>
      </>,
    ),
  },
  {
    title: 'Enlargement: same shape, new size',
    content: slide(
      <>
        <Rule>An enlargement with scale factor k multiplies every length by k. The image is similar (same shape). Translations, reflections and rotations keep the size as well as the shape, so their images are congruent.</Rule>
        <CoordGrid
          x={[0, 5]}
          y={[0, 7]}
          shapes={[{ pts: big, color: G, dashed: true }, { pts: rect, color: I }]}
          points={[{ p: rect[2], color: I, label: P(rect[2]) }, { p: big[2], color: G, label: P(big[2]), at: 'ne' }]}
          aria={`A 2 by 3 rectangle with a corner at the origin and its enlargement by scale factor 2, a 4 by 6 rectangle. The corner ${P(rect[2])} moves to ${P(big[2])}.`}
        />
        <Worked
          title="Scale factor 2, centre the origin"
          steps={[
            <>Sides 2 and 3 become 2 × 2 = {big[1][0]} and 3 × 2 = {big[2][1]}: the side lengths <strong>double</strong>.</>,
            <>Each corner: (x; y) → (2x; 2y), so {P(rect[2])} → {P(big[2])}.</>,
            <>Area: 2 × 3 = 6 becomes {big[1][0]} × {big[2][1]} = {big[1][0] * big[2][1]}, which is 4 times as big.</>,
          ]}
        />
        <Mistake>Adding instead of multiplying: an enlargement by 2 does not add 2 to each side (2 + 2 and 3 + 2 is a different shape). Multiply every length by 2.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Translate {pt(-3, 4)} by 5 right and 2 down.</>,
          <>Reflect {pt(-2, 5)} in the x-axis.</>,
          <>Turn {pt(5, -3)} through 90° clockwise about the origin.</>,
          <>A 3 cm by 1 cm rectangle is enlarged by scale factor 3. Give the new sides.</>,
        ]}
        answers={[
          <>{P(c1)}.</>,
          <>{P(c2)}.</>,
          <>{P(c3)}.</>,
          <>{c4.w} cm by {c4.h} cm.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A translation is a...',
    options: ['slide', 'flip', 'turn', 'resize'],
    answer: 'slide',
    explanation: 'Translation moves every point the same distance and direction.',
  },
  {
    prompt: 'A reflection creates a...',
    options: ['mirror image', 'larger image', 'rotated image only', '3D model'],
    answer: 'mirror image',
    explanation: 'Reflection flips a shape across a line.',
  },
  {
    prompt: 'A rotation changes a shape by...',
    options: ['turning it around a point', 'sliding it horizontally', 'stretching one side only', 'changing all side lengths'],
    answer: 'turning it around a point',
    explanation: 'Rotation uses a centre and an angle of turn.',
  },
  {
    prompt: 'An enlargement with scale factor 2 makes side lengths...',
    options: ['double', 'half', 'unchanged', 'negative'],
    answer: 'double',
    explanation: 'Scale factor 2 multiplies all lengths by 2.',
  },
  {
    prompt: 'Which transformation preserves size and shape?',
    options: ['translation', 'enlargement', 'reduction', 'stretch'],
    answer: 'translation',
    explanation: 'Translations are rigid transformations.',
  },
  {
    prompt: 'Translate (2, -1) by (+3, +2). New point?',
    options: ['(5, 1)', '(1, 1)', '(5, -3)', '(-1, 1)'],
    answer: '(5, 1)',
    explanation: 'Add 3 to x and 2 to y.',
  },
  {
    prompt: 'Reflect (4, -3) in the y-axis.',
    options: ['(-4, -3)', '(4, 3)', '(-4, 3)', '(3, -4)'],
    answer: '(-4, -3)',
    explanation: 'Reflection in y-axis changes x to its opposite.',
  },
  {
    prompt: 'Rotate (1, 2) 90° clockwise about the origin.',
    options: ['(2, -1)', '(-2, 1)', '(1, -2)', '(-1, 2)'],
    answer: '(2, -1)',
    explanation: 'For 90° clockwise, (x, y) becomes (y, -x).',
  },
];

const TransformationGeometry = () => (
  <CapsSubjectTopic
    title="Transformation Geometry"
    subtitle="Translations, reflections, rotations, and enlargements"
    learnSteps={learnSteps}
    task="gr8-transformation-geometry-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TransformationGeometry;
