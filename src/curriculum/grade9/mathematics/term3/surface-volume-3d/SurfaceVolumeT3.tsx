import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import CubeStack from '../../../../../components/diagrams/maths/CubeStack';
import { CubeNet, CylinderNet, PrismNet } from '../../../../../components/diagrams/maths/Grade9SpaceData';
import { cube, cylinder, rectPrism, sa } from '../../../../../components/diagrams/maths/grade9SpaceDataHelpers';

// Every number in the slides below comes from these tested helpers (grade9SpaceDataHelpers.test.ts, lessonsMaths10.test.ts).
const sup = (n: number) => <sup className="text-[0.75em] font-bold">{n}</sup>;
const cm2 = <>cm{sup(2)}</>;
const cm3 = <>cm{sup(3)}</>;

// slide 1: volume of prisms
const p534 = rectPrism(5, 3, 4);
const p235 = rectPrism(2, 3, 5);
const c2 = cube(2);

// slide 2: cube surface area
const c3 = cube(3);
const c4 = cube(4);

// slide 3: rectangular prism surface area (the same 5 × 3 × 4 prism)
// slide 4: cylinder
const cyl = cylinder(2, 10);

// "Check yourself"
const q1 = rectPrism(6, 2, 3);
const q2 = cube(5);
const q3 = cylinder(3, 5);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Volume of a prism: base area × height',
    content: slide(
      <>
        <Rule>Volume is the space inside, in cubic units (cm{sup(3)}). For any prism, V = area of the base × height. For a rectangular prism this is l × b × h.</Rule>
        <CubeStack length={5} breadth={3} height={4} showCount />
        <Worked
          steps={[
            <>5 cm × 3 cm × 4 cm: base = 5 × 3 = {p534.base} {cm2}; V = {p534.base} × 4 = <strong>{p534.volume} {cm3}</strong>.</>,
            <>2 cm × 3 cm × 5 cm: V = 2 × 3 × 5 = <strong>{p235.volume} {cm3}</strong>.</>,
            <>A cube with side 2 cm: V = 2 × 2 × 2 = 2{sup(3)} = <strong>{c2.volume} {cm3}</strong>.</>,
          ]}
        />
        <Mistake>Adding the edges (5 + 3 + 4 = 12) is not volume. Multiply them: each layer holds {p534.base} cubes, and there are 4 layers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Surface area of a cube from its net',
    content: slide(
      <>
        <Rule>Surface area is the total area of all the faces, in square units (cm{sup(2)}). A cube&apos;s net has 6 equal squares, so SA = 6 × side{sup(2)}.</Rule>
        <CubeNet side={3} unit="cm" caption={`6 × ${c3.face} = ${c3.surface} cm²`} />
        <Worked
          steps={[
            <>Side 3 cm: one face = 3 × 3 = {c3.face} {cm2}. SA = 6 × {c3.face} = <strong>{c3.surface} {cm2}</strong>.</>,
            <>Side 4 cm: one face = {c4.face} {cm2}. SA = 6 × {c4.face} = <strong>{c4.surface} {cm2}</strong>.</>,
          ]}
        />
        <Mistake>Mixing up surface area and volume. For a 3 cm cube, 3 × 3 × 3 = {c3.volume} {cm3} is the volume; the surface area is {c3.surface} {cm2}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Surface area of a rectangular prism',
    content: slide(
      <>
        <Rule>A rectangular prism has 6 faces in 3 matching pairs. SA = 2(lb + lh + bh): find the three different face areas, add them, then double.</Rule>
        <PrismNet l={5} b={3} h={4} unit="cm" />
        <Worked
          title="5 cm × 3 cm × 4 cm"
          steps={[
            <>Faces: 5 × 3 = {p534.faces.lb}, 5 × 4 = {p534.faces.lh}, 3 × 4 = {p534.faces.bh}.</>,
            <>Add: {p534.faces.lb} + {p534.faces.lh} + {p534.faces.bh} = {p534.faces.lb + p534.faces.lh + p534.faces.bh}.</>,
            <>Double, for the matching faces: SA = 2 × {p534.faces.lb + p534.faces.lh + p534.faces.bh} = <strong>{p534.surface} {cm2}</strong>.</>,
          ]}
        />
        <Mistake>Counting each face only once and forgetting to double: {p534.faces.lb + p534.faces.lh + p534.faces.bh} {cm2} is only half of the surface.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cylinders: volume and surface area',
    content: slide(
      <>
        <Rule>A cylinder is a prism with a circular base: V = πr{sup(2)}h. Its net is two circles and a rectangle h high and 2πr long, so SA = 2πr{sup(2)} + 2πrh.</Rule>
        <CylinderNet r={2} h={10} unit="cm" circumference={cyl.circumference} />
        <Worked
          title="r = 2 cm, h = 10 cm, π ≈ 3,14"
          steps={[
            <>Base: 3,14 × 2{sup(2)} = 3,14 × {cyl.rSquared} = {sa(cyl.base)} {cm2}. V = {sa(cyl.base)} × 10 = <strong>{sa(cyl.volume)} {cm3}</strong>.</>,
            <>Two circles: 2 × {sa(cyl.base)} = {sa(cyl.twoBases)} {cm2}. Rectangle: {sa(cyl.circumference)} × 10 = {sa(cyl.curved)} {cm2}.</>,
            <>SA = {sa(cyl.twoBases)} + {sa(cyl.curved)} = <strong>{sa(cyl.surface)} {cm2}</strong>.</>,
          ]}
        />
        <Mistake>Using 2πr for the base area. 2πr is the distance around the circle (it gives the rectangle&apos;s length); the area inside is πr{sup(2)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A box is 6 cm × 2 cm × 3 cm. Find its volume and its surface area.</>,
          <>A cube has sides of 5 cm. Find its surface area and its volume.</>,
          <>A cylinder has r = 3 cm and h = 5 cm. Find its volume (π ≈ 3,14).</>,
          <>How many squares does the net of a cube have?</>,
        ]}
        answers={[
          <>V = {q1.volume} {cm3}; SA = 2({q1.faces.lb} + {q1.faces.lh} + {q1.faces.bh}) = {q1.surface} {cm2}</>,
          <>SA = 6 × {q2.face} = {q2.surface} {cm2}; V = {q2.volume} {cm3}</>,
          <>3,14 × {q3.rSquared} × 5 = {sa(q3.volume)} {cm3}</>,
          <>6 squares, one for each face.</>,
        ]}
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the volume of a rectangular prism with length 5 cm, width 3 cm, and height 4 cm?',
    options: ['12 cm³', '20 cm³', '30 cm³', '60 cm³'],
    answer: '60 cm³',
    explanation: 'Volume = length × width × height = 5 × 3 × 4 = 60 cm³.',
  },
  {
    prompt: 'A cube has side length 3 cm. What is its surface area?',
    options: ['9 cm²', '27 cm²', '54 cm²', '81 cm²'],
    answer: '54 cm²',
    explanation: 'Surface area = 6 × (side)² = 6 × 3² = 6 × 9 = 54 cm².',
  },
  {
    prompt: 'What is the volume of a cube with side length 2 cm?',
    options: ['4 cm³', '6 cm³', '8 cm³', '12 cm³'],
    answer: '8 cm³',
    explanation: 'Volume = (side)³ = 2³ = 8 cm³.',
  },
  {
    prompt: 'The volume of a cylinder with radius 2 cm and height 10 cm is (use π ≈ 3,14):',
    options: ['62,8 cm³', '125,6 cm³', '20 cm³', '31,4 cm³'],
    answer: '125,6 cm³',
    explanation: 'Volume = πr²h = 3,14 × 2² × 10 = 3,14 × 4 × 10 = 125,6 cm³.',
  },
  {
    prompt: 'How many faces does a rectangular prism have?',
    options: ['4', '5', '6', '8'],
    answer: '6',
    explanation: 'A rectangular prism (cuboid) has 6 faces: top, bottom, and 4 sides.',
  },
  {
    prompt: 'What is the surface area of a cube with side 4 cm?',
    options: ['16 cm²', '32 cm²', '64 cm²', '96 cm²'],
    answer: '96 cm²',
    explanation: 'Surface area = 6 × (side)² = 6 × 4² = 6 × 16 = 96 cm².',
  },
  {
    prompt: 'A net of a cube when unfolded shows:',
    options: ['4 squares', '5 squares', '6 squares', 'Varies'],
    answer: '6 squares',
    explanation: 'The net of a cube consists of exactly 6 square faces.',
  },
  {
    prompt: 'If a rectangular prism has dimensions 2 cm × 3 cm × 5 cm, what is the volume?',
    options: ['10 cm³', '15 cm³', '30 cm³', '60 cm³'],
    answer: '30 cm³',
    explanation: 'Volume = 2 × 3 × 5 = 30 cm³.',
  },
];

const SurfaceVolumeT3 = () => (
  <CapsSubjectTopic
    title="Surface Area and Volume of 3D Objects"
    subtitle="Surface area and volume of common 3D forms"
    learnSteps={learnSteps}
    task="gr9-surface-volume-3d-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default SurfaceVolumeT3;
