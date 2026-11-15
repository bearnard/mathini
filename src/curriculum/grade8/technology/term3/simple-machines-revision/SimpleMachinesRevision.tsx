import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LeverDiagram } from '../../../../../components/diagrams/science/SciencePictures2';
import { WedgePicture, WheelAxlePicture } from '../../../../../components/diagrams/science/SciencePictures5';
import { RampPicture } from '../../../../../components/diagrams/science/SciencePictures6';
import { rampAdvantage, rampEffort } from '../../../../../components/diagrams/science/techHelpers';
import { leverEffort, mechanicalAdvantage } from '../../../../../components/diagrams/science/systemsHelpers';

// Every number comes from tested helpers (techHelpers.test.ts, systemsHelpers.test.ts).
const ramp = rampEffort(100, 1, 4);
const rampMA = rampAdvantage(1, 4);
const lever = leverEffort(60, 0.2, 0.6);
const leverMA = mechanicalAdvantage(60, lever);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Levers',
    content: slide(
      <>
        <Rule>
          Simple machines make work easier by changing force, direction or distance. The pivot point of a lever is the fulcrum. A longer lever arm needs less effort because it increases the turning effect (moment).
        </Rule>
        <LeverDiagram load={60} loadDistance={0.2} effortDistance={0.6} />
        <Worked
          title="Levers at work"
          steps={[
            <>A bottle opener works mainly as a lever: it uses leverage around a pivot to lift the cap. It is a second-class lever, because the load (the cap) is between the fulcrum and the effort.</>,
            <>The picture shows a first-class lever, with the fulcrum between the load and the effort. A 60 N load that is 0,2 m from the fulcrum needs only {lever} N of effort at 0,6 m.</>,
            <>Mechanical advantage = 60 ÷ {lever} = {leverMA}. Force multiplication means a machine gives a larger output force than input force.</>,
          ]}
        />
        <Mistake>Thinking that the fulcrum is the load or the effort. The fulcrum is the fixed point the lever turns around.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inclined planes',
    content: slide(
      <>
        <Rule>
          An inclined plane mainly helps by reducing the force needed over a longer distance. A ramp spreads the work over distance.
        </Rule>
        <RampPicture load={100} height={1} length={4} />
        <Worked
          title="Loading boxes up a ramp into a truck"
          steps={[
            <>Lifting a 100 N box straight up 1 m takes 100 N.</>,
            <>A 4 m ramp to the same height needs only 100 × 1 ÷ 4 = {ramp} N (with no friction).</>,
            <>The mechanical advantage is 4 ÷ 1 = {rampMA}, but the box must travel four times as far.</>,
          ]}
        />
        <Mistake>Believing a ramp reduces the work. It reduces the force by increasing the distance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Wedges and wheels and axles',
    content: slide(
      <>
        <Rule>
          A wedge can be described as two inclined planes joined together. It redirects force to split, cut or hold materials. A door knob is a wheel-and-axle machine.
        </Rule>
        <WedgePicture />
        <WheelAxlePicture wheel={20} axle={5} />
        <Worked
          title="Turn a door knob"
          steps={[<>Turning a door knob rotates a wheel around an axle to open the latch.</>, <>The knob is the wheel and the spindle is the axle, so a small effort at the rim makes a bigger turning force at the axle.</>, <>An axe head is a wedge: it turns a downward force into sideways forces.</>]}
        />
        <Mistake>Thinking a wheel and axle only means a vehicle wheel. A door knob and a screwdriver handle are wheel-and-axle machines too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the pivot point of a lever called? Why does a longer lever arm often need less effort?</li>
            <li>An inclined plane mainly helps by doing what? Which situation best uses one?</li>
            <li>A wedge can be described as what? Which everyday item is a wheel-and-axle machine?</li>
            <li>What does force multiplication mean? A bottle opener works mainly as which machine?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The fulcrum. It increases the turning effect (moment).</li>
            <li>Reducing force needed over a longer distance. Loading boxes up a ramp into a truck.</li>
            <li>Two inclined planes joined together. A door knob.</li>
            <li>A machine gives a larger output force than input force. A lever.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the pivot point of a lever called?',
    options: ['Fulcrum', 'Axle', 'Circuit', 'Anchor load'],
    answer: 'Fulcrum',
    explanation: 'The fulcrum is the fixed point around which a lever rotates.',
  },
  {
    prompt: 'An inclined plane mainly helps by...',
    options: [
      'Reducing force needed over a longer distance',
      'Increasing temperature of a load',
      'Producing electrical current',
      'Eliminating friction completely',
    ],
    answer: 'Reducing force needed over a longer distance',
    explanation: 'Ramps spread work over distance, reducing required input force.',
  },
  {
    prompt: 'A wedge can be described as...',
    options: ['Two inclined planes joined together', 'A rotating electrical motor', 'A flexible insulator', 'A type of shell structure'],
    answer: 'Two inclined planes joined together',
    explanation: 'Wedges redirect force to split, cut, or hold materials.',
  },
  {
    prompt: 'Which everyday item is a wheel-and-axle machine?',
    options: ['Door knob', 'Ruler', 'Torch battery', 'Fuse wire'],
    answer: 'Door knob',
    explanation: 'Turning a door knob rotates a wheel around an axle to open the latch.',
  },
  {
    prompt: 'Force multiplication means...',
    options: ['A machine gives a larger output force than input force', 'Energy is made from nothing without any input', 'The load always becomes lighter in weight', 'There is no movement in the system at all'],
    answer: 'A machine gives a larger output force than input force',
    explanation: 'Mechanical systems can increase output force by trading speed or distance.',
  },
  {
    prompt: 'Why does a longer lever arm often need less effort?',
    options: ['It increases the turning effect (moment)', 'It takes away the fulcrum of the lever', 'It doubles the pull of gravity on the load', 'It cancels out all of the friction'],
    answer: 'It increases the turning effect (moment)',
    explanation: 'Greater distance from the fulcrum gives more turning effect for the same force.',
  },
  {
    prompt: 'Which situation best uses an inclined plane?',
    options: ['Loading boxes up a ramp into a truck', 'Cutting paper with scissors', 'Turning on a light switch', 'Measuring wire length'],
    answer: 'Loading boxes up a ramp into a truck',
    explanation: 'A ramp is an inclined plane used to move loads upward with less effort.',
  },
  {
    prompt: 'A bottle opener works mainly as which machine?',
    options: ['Lever', 'Pulley', 'Cam', 'Battery'],
    answer: 'Lever',
    explanation: 'A bottle opener uses leverage around a pivot to lift the cap.',
  },
];

const SimpleMachinesRevision = () => (
  <CapsSubjectTopic
    title="Simple Machines Revision"
    subtitle="Levers, inclined planes, wedges, wheel-and-axle systems, and force multiplication"
    learnSteps={learnSteps}
    task="gr8-simple-machines-revision-t3"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default SimpleMachinesRevision;
