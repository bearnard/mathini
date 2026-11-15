import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare } from '../../../../../components/diagrams/science/ScienceBlocks';
import { PascalPicture, SyringePair } from '../../../../../components/diagrams/science/SciencePictures7';
import { BAR, outputForce, pressure, toPascals } from '../../../../../components/diagrams/science/tech9Helpers';

// Every number comes from tested helpers (tech9.test.ts).
const p = pressure(50, 5);
const f2 = outputForce(50, 5, 10);
const f2b = outputForce(50, 5, 20);
const nb = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const pa = nb(toPascals(p));
const bar = nb(BAR);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Hydraulic and pneumatic systems',
    content: slide(
      <>
        <Rule>
          Hydraulic systems use liquid, such as oil, which cannot be squashed. Pneumatic systems use compressed air, which can be squashed.
        </Rule>
        <Compare
          left={{ title: 'Hydraulic', tone: 'sky', rows: ['uses an incompressible liquid (oil)', 'gives greater force', 'used in heavy machinery'] }}
          right={{ title: 'Pneumatic', tone: 'emerald', rows: ['uses compressed air', 'air is compressible', 'cleaner: no fluid leaks'] }}
        />
        <Worked
          title="Name the system"
          steps={[<>A car jack that uses oil is hydraulic.</>, <>A dentist&apos;s drill or a bus door worked by air is pneumatic.</>, <>The key difference: hydraulic systems use liquid; pneumatic systems use compressed air.</>]}
        />
        <Mistake>Thinking that a hydraulic system works with air. Hydraulic means liquid; pneumatic means air.</Mistake>
      </>,
    ),
  },
  {
    title: "Pascal's principle and force multiplication",
    content: slide(
      <>
        <Rule>
          Pascal&apos;s principle: pressure on a trapped fluid is passed on equally in all directions. Different piston sizes make the output force bigger than the input.
        </Rule>
        <PascalPicture force={50} a1={5} a2={10} />
        <Worked
          title="50 N on a 5 cm² piston, and a 10 cm² output piston"
          steps={[
            <>Pressure = force ÷ area = 50 ÷ 5 = {p} N/cm².</>,
            <>The same pressure acts everywhere in the fluid, so the large piston is pushed with {p} × 10 = <strong>{f2} N</strong>: force = pressure × area.</>,
            <>With twice the area, the output force is doubled. With 20 cm² it would be {f2b} N.</>,
          ]}
        />
        <Mistake>Thinking the machine gives out more energy than you put in. Force is multiplied, but the big piston moves less far than the small one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Measuring pressure',
    content: slide(
      <>
        <Rule>
          Pressure is force per unit area, measured in pascals (Pa) or bars. Pressure = force ÷ area.
        </Rule>
        <Worked
          title="Convert the pressure"
          steps={[
            <>In the press above, the pressure is {p} N/cm².</>,
            <>1 N/cm² is 10 000 pascals, so {p} N/cm² = {pa} Pa.</>,
            <>1 bar is {bar} Pa, so this pressure is 1 bar.</>,
          ]}
        />
        <Mistake>Leaving out the area. The same force on a small area gives a much higher pressure than on a large area.</Mistake>
      </>,
    ),
  },
  {
    title: 'Syringes and choosing a system',
    content: slide(
      <>
        <Rule>
          Pushing one syringe moves the fluid or air and so pushes the other. Hydraulic systems give strong force and can be controlled very exactly. Pneumatic systems are cleaner, with no fluid leaks to clean up.
        </Rule>
        <SyringePair />
        <Worked
          title="Choose a system"
          steps={[<>A digger arm must lift a heavy load with exact control: hydraulic.</>, <>A food factory wants no oil leaks near the food: pneumatic is cleaner.</>, <>Air systems are friendly to the environment and cost less to maintain than fluid systems.</>]}
        />
        <Mistake>Thinking pneumatic systems can lift the heaviest loads. Air can be squashed, so for very high force and exact control, hydraulics are preferred.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>How do hydraulic and pneumatic systems differ in what they use? State Pascal&apos;s principle.</li>
            <li>How can two connected syringes show these principles? How does a hydraulic system multiply force?</li>
            <li>A hydraulic jack’s output piston has three times the area of its input piston. The pressure is the same. What happens to the force?</li>
            <li>Why do diggers and cranes use hydraulics? What is the advantage of pneumatic systems? In what units is pressure measured?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Hydraulic systems use liquid; pneumatic systems use compressed air. Pressure on a trapped fluid is passed on equally in all directions.</li>
            <li>Pushing one syringe moves the fluid or air and so pushes the other. Different piston sizes make the output force bigger than the input.</li>
            <li>Output force is three times as big.</li>
            <li>They give strong force and can be controlled very exactly. Pneumatic systems are cleaner, with no fluid leaks to clean up. In pascals (Pa) or bars; it is force per unit area.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the key difference between hydraulic and pneumatic systems?',
    options: ['hydraulic systems use liquid; pneumatic systems use compressed air', 'hydraulic systems use compressed air; pneumatic systems use liquid', 'hydraulic systems use steam; pneumatic systems use oil', 'hydraulic systems use springs; pneumatic systems use fluid'],
    answer: 'hydraulic systems use liquid; pneumatic systems use compressed air',
    explanation: 'Hydraulic systems use incompressible liquids for greater force, while pneumatic systems use compressible air.',
  },
  {
    prompt: 'What is Pascal\'s principle?',
    options: ['pressure on a trapped fluid is passed on equally in all directions', 'pressure on a trapped fluid is felt only below the piston', 'pressure on a gas rises as its container is made larger', 'pressure on a fluid falls as the force on it increases'],
    answer: 'pressure on a trapped fluid is passed on equally in all directions',
    explanation: 'Pascal\'s principle is fundamental to how hydraulic and pneumatic systems transmit and multiply force.',
  },
  {
    prompt: 'How do syringes demonstrate hydraulic and pneumatic principles?',
    options: ['pushing one syringe moves the fluid or air and so pushes the other', 'pulling one syringe makes the other stay still for ever', 'squeezing one syringe makes the other one turn round', 'one syringe pushes the other only if they touch'],
    answer: 'pushing one syringe moves the fluid or air and so pushes the other',
    explanation: 'Two connected syringes show how pressure is transmitted and force can be multiplied.',
  },
  {
    prompt: 'What is force multiplication in a hydraulic system?',
    options: ['different piston sizes make the output force bigger than the input', 'equal piston sizes make the output bigger than the input', 'a thicker fluid makes the output bigger than the input', 'a longer tube makes the output bigger than the input'],
    answer: 'different piston sizes make the output force bigger than the input',
    explanation: 'A small piston applies pressure to a large piston, multiplying the force applied.',
  },
  {
    prompt: 'In a hydraulic system, if pressure is constant and the output piston is twice the area of the input piston, what happens to force?',
    options: ['output force is doubled', 'output force is halved', 'force stays the same', 'force is random'],
    answer: 'output force is doubled',
    explanation: 'Force = Pressure × Area, so doubling the area doubles the output force when pressure is constant.',
  },
  {
    prompt: 'Why are hydraulic systems preferred in heavy machinery?',
    options: ['they give strong force and can be controlled very exactly', 'they move at the highest speeds of any system', 'they work with air that is free to use', 'they are the lightest system to fit to a machine'],
    answer: 'they give strong force and can be controlled very exactly',
    explanation: 'Hydraulic systems excel in applications requiring high force, precision control, and reliability.',
  },
  {
    prompt: 'What is the advantage of pneumatic systems over hydraulic systems?',
    options: ['pneumatic systems are cleaner, with no fluid leaks to clean up', 'pneumatic systems always lift much heavier loads', 'pneumatic systems give a more exact control of force', 'pneumatic systems never need any air pipes at all'],
    answer: 'pneumatic systems are cleaner, with no fluid leaks to clean up',
    explanation: 'Air systems are environmentally friendly and have lower maintenance costs than fluid systems.',
  },
  {
    prompt: 'How is pressure measured in hydraulic and pneumatic systems?',
    options: ['in pascals (Pa) or bars; it is force per unit area', 'in newtons only; it is the force with no area', 'in litres (L); it is the volume of the fluid', 'in metres per second; it is the speed of flow'],
    answer: 'in pascals (Pa) or bars; it is force per unit area',
    explanation: 'Pressure = Force ÷ Area, measured in standard units across both system types.',
  },
];

const HydraulicsPneumatics = () => (
  <CapsSubjectTopic
    title="Hydraulics, Pneumatics and Pascal's Principle"
    subtitle="Fluid pressure, syringes, pneumatic systems, hydraulic systems, force multiplication, Pascal's principle"
    learnSteps={learnSteps}
    task="gr9-hydraulics-pneumatics-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default HydraulicsPneumatics;
