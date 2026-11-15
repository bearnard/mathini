import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { GridTransform, TriPrism } from '../../../../../components/diagrams/maths/Grade7Transform';
import { enlarge, POLYHEDRA, reflectInVertical, rotate90cw, sideLengths, translate, type Pt2 } from '../../../../../components/diagrams/maths/grade7Helpers2';

// Every number in the slides below comes from tested helpers (grade7Helpers2.test.ts, lessons3.test.ts).
const tri: Pt2[] = [[1, 1], [3, 1], [1, 4]];
const slid = translate(tri, 4, 2);
const flipped = reflectInVertical(tri, 5);
const flag: Pt2[] = [[4, 5], [4, 2], [6, 2]];
const turned = rotate90cw(flag, 4, 2);
const rect: Pt2[] = [[1, 1], [3, 1], [3, 2], [1, 2]];
const big = enlarge(rect, 2, 1, 1);
const rectSides = sideLengths(rect);
const bigSides = sideLengths(big);
const pt = ([x, y]: Pt2) => `(${x}, ${y})`;
const prism = POLYHEDRA['triangular prism'];
const cube = POLYHEDRA.cube;
const pyramid = POLYHEDRA['square pyramid'];
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Translation: slide every point the same way',
    content: slide(
      <>
        <Rule>A translation slides a shape without turning or flipping it. Every corner moves the same distance in the same direction.</Rule>
        <GridTransform shape={tri} image={slid} arrow aria={`A triangle with corner A at ${pt(tri[0])} slides 4 units right and 2 units up. Its image has A′ at ${pt(slid[0])}. Every corner moves the same way.`} />
        <Worked
          title="Slide the triangle 4 right and 2 up"
          steps={[
            <>A {pt(tri[0])}: add 4 to x and 2 to y: A′ <strong>{pt(slid[0])}</strong>.</>,
            <>Do the same to the other corners: {pt(tri[1])} → {pt(slid[1])} and {pt(tri[2])} → {pt(slid[2])}.</>,
          ]}
        />
        <Mistake>Moving only one corner and redrawing the rest by eye. Count the same 4 right and 2 up for every corner.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflection: flip across a mirror line',
    content: slide(
      <>
        <Rule>A reflection flips a shape across a mirror line. Each image point is the same distance from the line as the original, on the other side.</Rule>
        <GridTransform shape={tri} image={flipped} mirror={5} aria={`A triangle and its reflection in a vertical mirror line at x = 5. Corner A at ${pt(tri[0])} is 4 units left of the line, so A′ at ${pt(flipped[0])} is 4 units right of it.`} />
        <Worked
          title="Reflect the triangle in the line x = 5"
          steps={[
            <>A {pt(tri[0])} is 5 − 1 = 4 units left of the line.</>,
            <>Go 4 units right of the line: 5 + 4 = 9, so A′ is <strong>{pt(flipped[0])}</strong>.</>,
          ]}
        />
        <Mistake>Sliding the shape across instead of flipping it. In a reflection the shape faces the other way: the corner nearest the line stays nearest the line.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rotation: turn about a fixed point',
    content: slide(
      <>
        <Rule>A rotation turns a shape around a fixed point, the centre of rotation, through an angle such as 90° clockwise. The centre does not move.</Rule>
        <GridTransform shape={flag} image={turned} centre={[4, 2]} aria={`A right-angled triangle turned 90 degrees clockwise about the point (4, 2). The upright side from (4, 2) to ${pt(flag[0])} turns to lie flat from (4, 2) to ${pt(turned[0])}.`} />
        <Worked
          title="Turn the triangle 90° clockwise about (4, 2)"
          steps={[
            <>The side from (4, 2) to A {pt(flag[0])} points 3 units up.</>,
            <>A quarter turn clockwise makes it point 3 units right: A′ is <strong>{pt(turned[0])}</strong>.</>,
          ]}
        />
        <Mistake>Turning about the wrong point. Put your pencil on the centre of rotation and turn the shape around it, like a hand on a clock.</Mistake>
      </>,
    ),
  },
  {
    title: 'Congruent shapes and enlargements',
    content: slide(
      <>
        <Rule>Translations, reflections and rotations give a congruent image: the same shape and size. An enlargement keeps the shape but changes the size: every side is multiplied by the same scale factor.</Rule>
        <GridTransform shape={rect} image={big} centre={[1, 1]} cols={8} rows={5} caption={`${rectSides[0]} × ${rectSides[1]} becomes ${bigSides[0]} × ${bigSides[1]}`} aria={`A rectangle ${rectSides[0]} by ${rectSides[1]} enlarged by a scale factor of 2 from the corner (1, 1). The image is ${bigSides[0]} by ${bigSides[1]}. The angles stay 90 degrees.`} />
        <Worked
          title="Enlarge a 2 × 1 rectangle by a factor of 2"
          steps={[
            <>Multiply every side by 2: 2 × 2 = {bigSides[0]} and 1 × 2 = {bigSides[1]}.</>,
            <>The image is <strong>{bigSides[0]} by {bigSides[1]}</strong>. The angles are still 90°, so the shape is the same.</>,
          ]}
        />
        <Mistake>Adding instead of multiplying: 2 + 2 = 4 but 1 + 2 = 3 gives a 4 × 3 rectangle, which has a different shape.</Mistake>
      </>,
    ),
  },
  {
    title: '3D objects: faces, edges and vertices',
    content: slide(
      <>
        <Rule>A face is a flat surface, an edge is where two faces meet, and a vertex is a corner. A net is a flat pattern that folds into the 3D object.</Rule>
        <TriPrism />
        <Worked
          title="Count, then check"
          steps={[
            <>Triangular prism: 2 triangles + 3 rectangles = <strong>{prism.faces} faces</strong>, {prism.edges} edges, {prism.vertices} vertices.</>,
            <>Cube: {cube.faces} faces, {cube.edges} edges, <strong>{cube.vertices} vertices</strong>. Square pyramid: {pyramid.faces} faces, {pyramid.edges} edges, {pyramid.vertices} vertices.</>,
            <>Check with faces + vertices − edges = 2: {prism.faces} + {prism.vertices} − {prism.edges} = {prism.faces + prism.vertices - prism.edges} ✓</>,
          ]}
        />
        <Mistake>Forgetting the hidden faces, edges and corners at the back. The dashed lines in a drawing still count.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The point (2, 3) is translated 5 right and 1 down. Where is its image?</li>
            <li>The point (3, 4) is reflected in the line x = 5. Where is its image?</li>
            <li>A 3 × 2 rectangle is enlarged by a factor of 3. How long are its sides?</li>
            <li>How many edges does a cube have?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{pt(translate([[2, 3]], 5, -1)[0])}.</li>
            <li>It is 2 units left of the line, so 2 units right: {pt(reflectInVertical([[3, 4]], 5)[0])}.</li>
            <li>{3 * 3} by {2 * 3}.</li>
            <li>{cube.edges}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A transformation that slides a shape without turning it is called...',
    options: ['translation', 'rotation', 'reflection', 'enlargement'],
    answer: 'translation',
    explanation: 'Translation moves every point the same distance and direction.',
  },
  {
    prompt: 'A reflection maps a shape...',
    options: [
      'across a mirror line',
      'around a fixed point',
      'to a larger size only',
      'by sliding straight up',
    ],
    answer: 'across a mirror line',
    explanation: 'Reflections produce a mirror image over a line.',
  },
  {
    prompt: 'A rotation turns a shape...',
    options: ['around a fixed point', 'along a straight line only', 'into a different shape', 'into a 3D object'],
    answer: 'around a fixed point',
    explanation: 'Rotations happen about a centre of rotation.',
  },
  {
    prompt: 'An enlargement changes...',
    options: ['size but keeps shape', 'shape but not size', 'colour only', 'position only'],
    answer: 'size but keeps shape',
    explanation: 'Enlarged figures are similar shapes.',
  },
  {
    prompt: 'How many vertices does a cube have?',
    options: ['8', '6', '10', '12'],
    answer: '8',
    explanation: 'A cube has 8 corners (vertices).',
  },
  {
    prompt: 'How many faces does a triangular prism have?',
    options: ['5', '6', '4', '8'],
    answer: '5',
    explanation: 'It has 2 triangular and 3 rectangular faces.',
  },
  {
    prompt: 'A net is...',
    options: ['a flat pattern that folds into a 3D object', 'a graph that is drawn from points', 'a mirror line in geometry', 'a type of model for a fraction'],
    answer: 'a flat pattern that folds into a 3D object',
    explanation: 'Nets represent the faces of a solid before folding.',
  },
  {
    prompt: 'Congruent shapes have...',
    options: [
      'the same shape and size',
      'the same area only',
      'the same perimeter only',
      'different orientations and different sizes',
    ],
    answer: 'the same shape and size',
    explanation: 'Congruent figures match exactly when superimposed.',
  },
];

const TransformationGeometryAnd3DObjects = () => (
  <CapsSubjectTopic
    title="Transformation Geometry and 3D Objects"
    subtitle="Translations, reflections, rotations, enlargements, and solid properties"
    learnSteps={learnSteps}
    task="gr7-transformation-geometry-and-3d-objects-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TransformationGeometryAnd3DObjects;
