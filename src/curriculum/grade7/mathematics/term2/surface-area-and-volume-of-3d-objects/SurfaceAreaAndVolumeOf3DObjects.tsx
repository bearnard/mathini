import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import CubeStack from '../../../../../components/diagrams/maths/CubeStack';
import { CubeNet, CubeScale, PrismNet } from '../../../../../components/diagrams/maths/Grade7Solids';
import { cubeMeasures, prismSurface, volumeScale } from '../../../../../components/diagrams/maths/grade7Helpers2';
import { prismMeasures } from '../../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides below comes from tested helpers (grade7Helpers2.test.ts, lessons2.test.ts).
const small = cubeMeasures(2);
const big = cubeMeasures(4);
const box = prismSurface(5, 3, 2);
const layers = prismMeasures(5, 3, 2);
const check = { cube: cubeMeasures(5), prism: prismSurface(4, 2, 3), scale: volumeScale(3) };
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Prisms, cubes and their nets',
    content: slide(
      <>
        <Rule>A prism has two parallel bases that are the same shape and size, joined by rectangles. A net is the flat shape that folds up into the solid.</Rule>
        <CubeNet side={2} mode="faces" />
        <Worked
          title="A cereal box"
          steps={[
            <>Its two ends are equal, parallel rectangles, so it is a rectangular prism.</>,
            <>Count the faces: front and back, top and bottom, two sides = <strong>6 faces</strong>, so its net has 6 rectangles.</>,
            <>A cube is a prism with 6 equal square faces, so its net is <strong>6 squares</strong>.</>,
          ]}
        />
        <Mistake>Thinking any 6 squares make a cube net. Six squares in one long row do not fold into a cube: the ends overlap and two faces are missing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Surface area of a cube',
    content: slide(
      <>
        <Rule>Surface area (SA) is the total area of all the faces, the area of the net. A cube has 6 equal square faces, so SA = 6 × side × side.</Rule>
        <CubeNet side={2} mode="area" />
        <Worked
          title="A cube with side 2 cm"
          steps={[
            <>One face: 2 × 2 = {small.face} cm².</>,
            <>Six faces: 6 × {small.face} = <strong>{small.surface} cm²</strong>.</>,
          ]}
        />
        <Mistake>Working out 6 × 2 = 12. That multiplies the side, not the area of a face. Square the side first: 2 × 2 = 4.</Mistake>
      </>,
    ),
  },
  {
    title: 'Surface area of a rectangular prism',
    content: slide(
      <>
        <Rule>A rectangular prism has three pairs of equal faces. Find the area of one face from each pair, add them, and double the total.</Rule>
        <PrismNet l={5} b={3} h={2} />
        <Worked
          title="A box 5 cm × 3 cm × 2 cm"
          steps={[
            <>Top and bottom: 5 × 3 = {box.lb} cm² each.</>,
            <>Front and back: 5 × 2 = {box.lh} cm² each. The two ends: 3 × 2 = {box.bh} cm² each.</>,
            <>SA = 2 × ({box.lb} + {box.lh} + {box.bh}) = 2 × {box.lb + box.lh + box.bh} = <strong>{box.surface} cm²</strong>.</>,
          ]}
        />
        <Mistake>Adding only three faces ({box.lb + box.lh + box.bh} cm²). Each face has an equal partner on the opposite side, so double it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Volume: layers of cubes',
    content: slide(
      <>
        <Rule>Volume is the space inside a solid, counted in cubes. For a rectangular prism, volume = length × breadth × height. The unit is cm³.</Rule>
        <CubeStack length={5} breadth={3} height={2} showSum />
        <Worked
          title="The same box, 5 cm × 3 cm × 2 cm"
          steps={[
            <>One layer: 5 × 3 = {layers.perLayer} cubes.</>,
            <>2 layers: {layers.perLayer} × 2 = <strong>{layers.volume} cm³</strong>.</>,
          ]}
        />
        <Mistake>Mixing up the units. Length is in cm, area in cm² and volume in cm³. The same box has SA {box.surface} cm² but volume {box.volume} cm³.</Mistake>
      </>,
    ),
  },
  {
    title: 'Volume of a cube, and doubling the side',
    content: slide(
      <>
        <Rule>A cube has length, breadth and height all equal, so its volume is side × side × side = side³.</Rule>
        <CubeScale side={2} k={2} />
        <Worked
          title="Cubes with side 2 cm and side 4 cm"
          steps={[
            <>2 × 2 × 2 = {small.volume} cm³.</>,
            <>4 × 4 × 4 = <strong>{big.volume} cm³</strong>.</>,
            <>Doubling every edge: {big.volume} ÷ {small.volume} = {volumeScale(2)}, because 2 × 2 × 2 = {volumeScale(2)}.</>,
          ]}
        />
        <Mistake>Thinking that doubling the side doubles the volume. Length, breadth and height all double, so the volume is 2 × 2 × 2 = 8 times as big.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A cube-shaped gift box has edges of 5 cm. Find its surface area and its volume.</li>
            <li>Find the surface area of a box 4 cm × 2 cm × 3 cm.</li>
            <li>Find the volume of the same box.</li>
            <li>Every edge of a cube is made 3 times as long. How many times as big is the volume?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>SA = 6 × 5 × 5 = {check.cube.surface} cm². Volume = 5 × 5 × 5 = {check.cube.volume} cm³.</li>
            <li>2 × ({check.prism.lb} + {check.prism.lh} + {check.prism.bh}) = {check.prism.surface} cm².</li>
            <li>4 × 2 × 3 = {check.prism.volume} cm³.</li>
            <li>3 × 3 × 3 = {check.scale} times.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the volume of a cube with side 4 cm?',
    options: ['64 cm³', '16 cm³', '48 cm³', '32 cm³'],
    answer: '64 cm³',
    explanation: 'Volume of cube = side³ = 4³ = 64 cm³.',
  },
  {
    prompt: 'What is the volume of a rectangular prism 5 cm × 3 cm × 2 cm?',
    options: ['30 cm³', '10 cm³', '15 cm³', '60 cm³'],
    answer: '30 cm³',
    explanation: 'Volume = length × width × height = 5 × 3 × 2.',
  },
  {
    prompt: 'Which unit is correct for volume?',
    options: ['cm³', 'cm²', 'cm', 'kg'],
    answer: 'cm³',
    explanation: 'Volume is measured in cubic units.',
  },
  {
    prompt: 'A net of a cube is made of...',
    options: ['6 squares', '4 triangles', '5 rectangles', '8 circles'],
    answer: '6 squares',
    explanation: 'A cube has 6 square faces.',
  },
  {
    prompt: 'What is the surface area of a cube with side 2 cm?',
    options: ['24 cm²', '8 cm²', '12 cm²', '16 cm²'],
    answer: '24 cm²',
    explanation: 'Surface area = 6 × side² = 6 × 4 = 24 cm².',
  },
  {
    prompt: 'A prism is a solid with...',
    options: [
      'two parallel congruent bases',
      'one circular face only',
      'all faces triangular',
      'no edges',
    ],
    answer: 'two parallel congruent bases',
    explanation: 'Prisms have matching parallel bases and rectangular side faces.',
  },
  {
    prompt: 'If every dimension of a cube doubles, the volume becomes...',
    options: ['8 times larger', '2 times larger', '4 times larger', '6 times larger'],
    answer: '8 times larger',
    explanation: 'Volume scale factor is 2³ = 8.',
  },
  {
    prompt: 'Which everyday object is closest to a rectangular prism?',
    options: ['A cereal box', 'A soccer ball', 'A cone hat', 'A coin'],
    answer: 'A cereal box',
    explanation: 'A cereal box has the shape of a rectangular prism.',
  },
];

const SurfaceAreaAndVolumeOf3DObjects = () => (
  <CapsSubjectTopic
    title="Surface Area and Volume of 3D Objects"
    subtitle="Nets, prisms, cubes, and volume or surface calculations"
    learnSteps={learnSteps}
    task="gr7-surface-area-and-volume-of-3d-objects-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default SurfaceAreaAndVolumeOf3DObjects;
