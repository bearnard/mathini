import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import CubeStack from '../../../../../components/diagrams/maths/CubeStack';
import { CubeNet, MeasureRect, TriangleInRect } from '../../../../../components/diagrams/maths/Grade8Geometry';
import { cubeSurface, cubeVolume, prismSurface, prismVolume, rectArea, rectPerimeter, triangleArea } from '../../../../../components/diagrams/maths/grade8GeometryHelpers';

// Every number in the slides below comes from these tested helpers (grade8GeometryHelpers) and
// lessonsMaths5.test.ts checks that the rendered slides show them.
const per = { l: 5, b: 2, p: rectPerimeter(5, 2), wrong: rectArea(5, 2) };
const area = { l: 8, b: 3, a: rectArea(8, 3) };
const sq = { s: 6, a: rectArea(6, 6) };
const tri = { base: 10, h: 4, a: triangleArea(10, 4), full: rectArea(10, 4) };
const box = { l: 4, b: 3, h: 2, v: prismVolume(4, 3, 2), layer: rectArea(4, 3) };
const cube = { s: 3, v: cubeVolume(3) };
const net = { s: 2, face: rectArea(2, 2), sa: cubeSurface(2), v: cubeVolume(2) };
const boxSa = prismSurface(4, 3, 2);

// "Check yourself", answers computed from the same helpers
const c1 = { p: rectPerimeter(7, 4), a: rectArea(7, 4) };
const c2 = triangleArea(9, 6);
const c3 = prismVolume(5, 2, 3);
const c4 = cubeSurface(5);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Perimeter: the distance around a shape',
    content: slide(
      <>
        <Rule>Perimeter is the total length of the boundary of a shape. For a rectangle, P = 2(l + b). It is a length, so its unit is m, cm or mm.</Rule>
        <MeasureRect l={per.l} b={per.b} unit="m" mode="perimeter" />
        <Worked
          title={`A rectangle ${per.l} m by ${per.b} m`}
          steps={[
            <>Add the two different sides: {per.l} + {per.b} = {per.l + per.b} m.</>,
            <>A rectangle has two of each: P = 2({per.l} + {per.b}) = 2 × {per.l + per.b} = <strong>{per.p} m</strong>.</>,
          ]}
        />
        <Mistake>Multiplying the sides: {per.l} × {per.b} = {per.wrong} gives the area in m², not the distance around the rectangle.</Mistake>
      </>,
    ),
  },
  {
    title: 'Area of rectangles and squares',
    content: slide(
      <>
        <Rule>Area is the number of unit squares that cover a shape. Rectangle: A = l × b. Square: A = s × s = s². Area is in square units such as cm² or m².</Rule>
        <MeasureRect l={area.l} b={area.b} unit="cm" mode="area" />
        <Worked
          steps={[
            <>Rectangle {area.l} cm by {area.b} cm: A = {area.l} × {area.b} = <strong>{area.a} cm²</strong>.</>,
            <>Square with sides {sq.s} m: A = {sq.s}² = {sq.s} × {sq.s} = <strong>{sq.a} m²</strong>.</>,
          ]}
        />
        <Mistake>Writing the area as {area.a} cm. Centimetres measure a length; the area counts squares of 1 cm by 1 cm, so it is {area.a} cm².</Mistake>
      </>,
    ),
  },
  {
    title: 'Area of a triangle: half of a rectangle',
    content: slide(
      <>
        <Rule>A = ½ × base × height. The height is the perpendicular distance from the base to the opposite vertex, not a slanted side.</Rule>
        <TriangleInRect base={tri.base} height={tri.h} apex={3} unit="cm" />
        <Worked
          title={`Base ${tri.base} cm, height ${tri.h} cm`}
          steps={[
            <>The rectangle around it has area {tri.base} × {tri.h} = {tri.full} cm².</>,
            <>The triangle is half of it: ½ × {tri.base} × {tri.h} = <strong>{tri.a} cm²</strong>.</>,
          ]}
        />
        <Mistake>Forgetting the ½: {tri.base} × {tri.h} = {tri.full} cm² is the whole rectangle. The pieces outside the triangle make up the other half.</Mistake>
      </>,
    ),
  },
  {
    title: 'Volume of prisms and cubes',
    content: slide(
      <>
        <Rule>Volume is the number of unit cubes that fill a solid. Rectangular prism: V = l × b × h. Cube: V = s³. Volume is in cubic units such as cm³.</Rule>
        <CubeStack length={box.l} breadth={box.b} height={box.h} showSum />
        <Worked
          steps={[
            <>Prism {box.l} cm × {box.b} cm × {box.h} cm: one layer holds {box.l} × {box.b} = {box.layer} cubes.</>,
            <>There are {box.h} layers: V = {box.layer} × {box.h} = <strong>{box.v} cm³</strong>.</>,
            <>Cube with sides {cube.s} cm: V = {cube.s}³ = {cube.s} × {cube.s} × {cube.s} = <strong>{cube.v} cm³</strong>.</>,
          ]}
        />
        <Mistake>Adding the edges: {box.l} + {box.b} + {box.h} = {box.l + box.b + box.h} is not a volume. Volume multiplies the three edges and is measured in cm³, not cm or cm².</Mistake>
      </>,
    ),
  },
  {
    title: 'Surface area: add the areas of all the faces',
    content: slide(
      <>
        <Rule>Surface area is the total area of all the faces of a solid. Unfold it into a net and add the face areas. A cube has 6 equal square faces: SA = 6s².</Rule>
        <CubeNet side={net.s} unit="cm" />
        <Worked
          steps={[
            <>Cube with sides {net.s} cm: one face is {net.s} × {net.s} = {net.face} cm².</>,
            <>Six faces: SA = 6 × {net.face} = <strong>{net.sa} cm²</strong>.</>,
            <>Prism {box.l} × {box.b} × {box.h}: faces {boxSa.faces.join(', ')} cm², two of each, so SA = 2({boxSa.faces.join(' + ')}) = <strong>{boxSa.total} cm²</strong>.</>,
          ]}
        />
        <Mistake>Mixing up surface area and volume. The {net.s} cm cube has a volume of {net.v} cm³ (cubes inside) but a surface area of {net.sa} cm² (squares on the outside).</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A rectangle is 7 m by 4 m. Find its perimeter and its area.</li>
            <li>A triangular sail has a base of 9 m and a height of 6 m. Find its area.</li>
            <li>Find the volume of a box 5 cm × 2 cm × 3 cm.</li>
            <li>Find the surface area of a cube with sides of 5 cm.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>P = 2(7 + 4) = {c1.p} m; A = 7 × 4 = {c1.a} m².</li>
            <li>½ × 9 × 6 = {c2} m².</li>
            <li>5 × 2 × 3 = {c3} cm³.</li>
            <li>6 × 5² = 6 × 25 = {c4} cm².</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Find the area of a rectangle with length 8 cm and width 3 cm.',
    options: ['24 cm²', '22 cm²', '11 cm²', '48 cm²'],
    answer: '24 cm²',
    explanation: 'Area = length × width = 8 × 3.',
  },
  {
    prompt: 'Find the perimeter of a rectangle with sides 5 m and 2 m.',
    options: ['14 m', '10 m', '7 m', '20 m'],
    answer: '14 m',
    explanation: 'Perimeter = 2(5 + 2) = 14.',
  },
  {
    prompt: 'Find the area of a triangle with base 10 cm and height 4 cm.',
    options: ['20 cm²', '40 cm²', '14 cm²', '10 cm²'],
    answer: '20 cm²',
    explanation: 'Area = 1/2 × base × height = 1/2 × 10 × 4.',
  },
  {
    prompt: 'What is the volume of a cube with side 3 cm?',
    options: ['27 cm³', '9 cm³', '18 cm³', '12 cm³'],
    answer: '27 cm³',
    explanation: 'Volume of cube = side³ = 3³.',
  },
  {
    prompt: 'What is the surface area of a cube with side 2 cm?',
    options: ['24 cm²', '8 cm²', '12 cm²', '16 cm²'],
    answer: '24 cm²',
    explanation: 'Surface area = 6 × side² = 6 × 4.',
  },
  {
    prompt: 'Find the volume of a rectangular prism: 4 cm × 3 cm × 2 cm.',
    options: ['24 cm³', '9 cm³', '20 cm³', '18 cm³'],
    answer: '24 cm³',
    explanation: 'Volume = length × width × height.',
  },
  {
    prompt: 'Which unit is most suitable for volume?',
    options: ['cm³', 'cm²', 'cm', 'degrees'],
    answer: 'cm³',
    explanation: 'Volume is measured in cubic units.',
  },
  {
    prompt: 'Which measure describes distance around a shape?',
    options: ['Perimeter', 'Area', 'Volume', 'Surface area'],
    answer: 'Perimeter',
    explanation: 'Perimeter is the total outside boundary length.',
  },
];

const AreaPerimeterSurfaceAreaAndVolume = () => (
  <CapsSubjectTopic
    title="Area, Perimeter, Surface Area and Volume"
    subtitle="Formula selection, substitution, and unit interpretation"
    learnSteps={learnSteps}
    task="gr8-area-perimeter-surface-area-and-volume-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AreaPerimeterSurfaceAreaAndVolume;
