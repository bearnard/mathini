import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { GearPair, LeverDiagram } from '../../../../../components/diagrams/science/SciencePictures2';
import { CamPicture, CrankPicture, WedgePicture, WheelAxlePicture } from '../../../../../components/diagrams/science/SciencePictures5';
import { wheelAxleAdvantage } from '../../../../../components/diagrams/science/lifeTechHelpers';
import { drivenTurns, leverEffort, mechanicalAdvantage } from '../../../../../components/diagrams/science/systemsHelpers';

// Every number comes from tested helpers (lifeTech.test.ts, systemsHelpers.test.ts).
const wheelMA = wheelAxleAdvantage(20, 5);
const effort = leverEffort(60, 0.2, 0.6);
const leverMA = mechanicalAdvantage(60, effort);
const turns = drivenTurns(10, 20);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Wedges and wheels and axles',
    content: slide(
      <>
        <Rule>
          A <strong>wedge</strong> is a sloping surface used to split or cut materials. A <strong>wheel and axle</strong> makes moving loads easier.
        </Rule>
        <WedgePicture />
        <WheelAxlePicture wheel={20} axle={5} />
        <Worked
          title="A wheel of radius 20 cm on an axle of radius 5 cm"
          steps={[
            <>The wheel is 20 ÷ 5 = {wheelMA} times as big as the axle.</>,
            <>A small effort at the rim of the wheel turns the axle against a bigger load, so the effort is about {wheelMA} times smaller.</>,
            <>An axe head is a wedge: it turns a downward force into sideways forces that split the wood.</>,
          ]}
        />
        <Mistake>Thinking a wedge is only for cutting food. Any sloping surface that splits or cuts materials is a wedge, such as an axe head.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gears',
    content: slide(
      <>
        <Rule>
          Meshing gears turn in opposite directions. If a small gear drives a larger gear, the output has lower speed and greater turning force.
        </Rule>
        <GearPair driver={10} driven={20} />
        <Worked
          title="A small gear drives a larger one"
          steps={[
            <>When the driver turns clockwise, the meshing gear turns anticlockwise.</>,
            <>The driver has 10 teeth and the larger gear 20, so the larger gear makes {String(turns).replace('.', ',')} of a turn for each turn: lower speed.</>,
            <>A bicycle uses a gear system with a chain to change speed and force: a small gear at the back is fast and a large gear is easier to pedal.</>,
          ]}
        />
        <Mistake>Thinking both gears turn the same way. Two meshing gears always turn in opposite directions. A chain makes both turn the same way.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cams and cranks',
    content: slide(
      <>
        <Rule>
          A <strong>cam</strong> usually changes rotary motion into up-and-down or back-and-forth motion. The main job of a <strong>crank</strong> is to change rotary motion to reciprocating motion.
        </Rule>
        <CamPicture angle={50} />
        <CrankPicture angle={50} />
        <Worked
          title="Name the motion"
          steps={[
            <>A cam turns round and pushes a follower, so the follower moves up and down: rotary to reciprocating motion.</>,
            <>A crank turns in a circle and, through a rod, pushes a slider back and forth.</>,
            <>Reciprocating means moving to and fro along a line.</>,
          ]}
        />
        <Mistake>Thinking that cams and cranks make the motion faster. They change the type of motion, from turning to to-and-fro.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mechanical advantage',
    content: slide(
      <>
        <Rule>
          Mechanical advantage means a machine multiplies force to reduce effort: a smaller input force moves a larger load.
        </Rule>
        <LeverDiagram load={60} loadDistance={0.2} effortDistance={0.6} />
        <Worked
          title="A lever as an example"
          steps={[
            <>A 60 N load is 0,2 m from the fulcrum and the effort is 0,6 m away.</>,
            <>The effort needed is {effort} N, much less than the load.</>,
            <>Mechanical advantage = load ÷ effort = 60 ÷ {effort} = <strong>{leverMA}</strong>. The wheel and axle above had {wheelMA}.</>,
          ]}
        />
        <Mistake>Thinking a machine gives you free work. You use less effort but you move that effort through a longer distance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which simple machine is an axe head? What does a wheel and axle mainly do?</li>
            <li>Two meshing gears turn in which way? If a small gear drives a larger gear, what does the output have?</li>
            <li>A cam usually changes rotary motion into what? What is the main job of a crank?</li>
            <li>What does mechanical advantage mean? Which mechanism changes speed and force on a bicycle?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A wedge. It makes moving loads easier.</li>
            <li>In opposite directions. Lower speed and greater turning force.</li>
            <li>Up-and-down or back-and-forth motion. To change rotary motion to reciprocating motion.</li>
            <li>A machine multiplies force to reduce effort. A gear system with a chain.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which simple machine is a wedge?',
    options: ['An axe head', 'A bicycle chain', 'A battery', 'A pulley wheel'],
    answer: 'An axe head',
    explanation: 'A wedge is a sloping surface used to split or cut materials.',
  },
  {
    prompt: 'What does a wheel and axle mainly do?',
    options: ['Makes moving loads easier', 'Stores electrical energy', 'Measures voltage', 'Prevents corrosion'],
    answer: 'Makes moving loads easier',
    explanation: 'A wheel and axle reduces effort when moving or lifting loads.',
  },
  {
    prompt: 'Two meshing gears turn in which way?',
    options: [
      'In opposite directions',
      'In the same direction always',
      'Only clockwise',
      'Without changing direction',
    ],
    answer: 'In opposite directions',
    explanation: 'When one gear turns clockwise, the meshing gear turns anticlockwise.',
  },
  {
    prompt: 'A cam usually changes rotary motion into...',
    options: ['Up-and-down or back-and-forth motion', 'Light energy that is given off', 'Heat energy and nothing else', 'An electrical current in a wire'],
    answer: 'Up-and-down or back-and-forth motion',
    explanation: 'Cams rotate and push followers to produce reciprocating motion.',
  },
  {
    prompt: 'What is the main job of a crank?',
    options: ['Change rotary motion to reciprocating motion', 'Increase the resistance in an electric circuit', 'Hold two wires apart inside of a cable', 'Insulate a metal frame from the ground'],
    answer: 'Change rotary motion to reciprocating motion',
    explanation: 'Cranks transform circular movement to linear movement, and vice versa.',
  },
  {
    prompt: 'Mechanical advantage means...',
    options: [
      'A machine multiplies force to reduce effort',
      'A machine always works without friction',
      'A machine creates energy from nothing',
      'A machine works only with electricity',
    ],
    answer: 'A machine multiplies force to reduce effort',
    explanation: 'Mechanical advantage helps a smaller input force move a larger load.',
  },
  {
    prompt: 'If a small gear drives a larger gear, the output usually has...',
    options: ['Lower speed and greater turning force', 'Higher speed and less turning force', 'No movement change', 'No change in torque or speed'],
    answer: 'Lower speed and greater turning force',
    explanation: 'Driving a bigger gear reduces speed but increases torque.',
  },
  {
    prompt: 'Which mechanism is common in bicycles for changing speed and force?',
    options: ['Gear system with chain', 'Hydraulic jack only', 'Solar panel', 'Fuse wire'],
    answer: 'Gear system with chain',
    explanation: 'Bicycles use chain and gear combinations to balance speed and effort.',
  },
];

const MechanicalSystemsAndMotion = () => (
  <CapsSubjectTopic
    title="Mechanical Systems and Motion"
    subtitle="Wedges, wheel-and-axle systems, gears, cams, cranks, and mechanical advantage"
    learnSteps={learnSteps}
    task="gr8-mechanical-systems-and-motion-t1"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default MechanicalSystemsAndMotion;
