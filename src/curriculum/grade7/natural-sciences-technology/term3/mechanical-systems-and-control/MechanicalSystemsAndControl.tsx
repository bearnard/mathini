import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FixedPulley, GearPair, IpoFlow, LeverDiagram } from '../../../../../components/diagrams/science/SciencePictures2';
import { drivenTurns, leverEffort, mechanicalAdvantage } from '../../../../../components/diagrams/science/systemsHelpers';

// Every number below comes from tested helpers (systemsHelpers.test.ts).
const load = 60;
const effort = leverEffort(load, 0.2, 0.6);
const ma = mechanicalAdvantage(load, effort);
const turns = drivenTurns(10, 20);
const turnsBack = drivenTurns(20, 10);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Levers and mechanical advantage',
    content: slide(
      <>
        <Rule>
          A lever turns on a fixed point called the <strong>fulcrum</strong>. A small <strong>effort</strong> force can move a bigger <strong>load</strong>. Mechanical advantage means a machine helps you use less effort force for a task.
        </Rule>
        <LeverDiagram load={load} loadDistance={0.2} effortDistance={0.6} />
        <Worked
          title={`A ${load} N load is 0,2 m from the fulcrum. The effort is 0,6 m on the other side.`}
          steps={[
            <>The load times its distance is {load} × 0,2 = {load * 0.2} N·m.</>,
            <>The effort must give the same: effort × 0,6 = {load * 0.2}, so the effort is {effort} N.</>,
            <>Mechanical advantage = load ÷ effort = {load} ÷ {effort} = <strong>{ma}</strong>.</>,
          ]}
        />
        <Mistake>Thinking the machine does the work for you. You use less effort, but you move the effort through a longer distance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gears change speed and turning force',
    content: slide(
      <>
        <Rule>
          Gears have teeth that mesh. If a small driving gear turns a larger driven gear, the driven gear turns more slowly with greater turning force. Meshing gears turn in opposite directions.
        </Rule>
        <GearPair driver={10} driven={20} />
        <Worked
          title="A 10-tooth driver turns a 20-tooth driven gear"
          steps={[
            <>Compare the teeth: 10 ÷ 20 = {String(turns).replace('.', ',')}.</>,
            <>So the driven gear makes {String(turns).replace('.', ',')} of a turn for each turn of the driver: it turns more slowly.</>,
            <>Swap them: a 20-tooth driver turning a 10-tooth gear makes it turn {turnsBack} times per turn: faster, with less turning force.</>,
          ]}
        />
        <Mistake>Thinking the bigger gear always turns faster. The gear with more teeth turns more slowly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pulleys and linkages',
    content: slide(
      <>
        <Rule>
          A fixed pulley can change the direction of a pulling force. A linkage can convert rotary motion into back-and-forth motion.
        </Rule>
        <FixedPulley />
        <Worked
          title="Name the job of each mechanism"
          steps={[
            <>A flagpole pulley: you pull the rope down and the flag goes up. The pulley changes the direction of the force.</>,
            <>A windscreen wiper: the motor turns round and round, and the linkage makes the wiper swing back and forth.</>,
          ]}
        />
        <Mistake>Believing a fixed pulley makes a load lighter. It only changes the direction of the pull. You still pull with the weight of the load.</Mistake>
      </>,
    ),
  },
  {
    title: 'Systems and control',
    content: slide(
      <>
        <Rule>
          A system has an <strong>input</strong>, a <strong>process</strong> and an <strong>output</strong>. In a simple control system, pressing a switch is usually the input.
        </Rule>
        <IpoFlow id="mech" input="press the switch" process="mechanism" output="bell rings" />
        <Worked
          title="A doorbell"
          steps={[<>Input: you press the button (the switch).</>, <>Process: the circuit sends current to the bell.</>, <>Output: the bell rings. The output is the result the system produces.</>]}
        />
        <Mistake>Calling the switch the output. The switch sends a signal in, so it is the input. The bell ringing is the output.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the pivot point of a lever called?</li>
            <li>A small driving gear turns a larger driven gear. What does the driven gear do?</li>
            <li>What can a fixed pulley do? What can a linkage convert rotary motion into?</li>
            <li>What does mechanical advantage mean? In a control system, pressing a switch is usually the what?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The fulcrum.</li>
            <li>It turns more slowly with greater turning force.</li>
            <li>It can change the direction of a pulling force. A linkage converts rotary motion into back-and-forth motion.</li>
            <li>A machine helps you use less effort force for a task. The input.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the pivot point of a lever called?',
    options: ['Fulcrum', 'Axle housing', 'Rotor', 'Insulator'],
    answer: 'Fulcrum',
    explanation: 'The fulcrum is the fixed point around which the lever turns.',
  },
  {
    prompt: 'If a small driving gear turns a larger driven gear, the driven gear usually...',
    options: ['turns more slowly with greater turning force', 'turns faster with less turning force', 'stops all motion in the system', 'always spins in the same direction only'],
    answer: 'turns more slowly with greater turning force',
    explanation: 'A larger driven gear trades speed for increased torque.',
  },
  {
    prompt: 'A pulley can be useful because it can...',
    options: ['change the direction of a pulling force', 'take gravity away from a load', 'make energy out of nothing', 'make every load weightless'],
    answer: 'change the direction of a pulling force',
    explanation: 'A fixed pulley lets you pull down to lift a load up.',
  },
  {
    prompt: 'A linkage can convert rotary motion into...',
    options: ['back-and-forth motion', 'no motion', 'only heat', 'electrical current'],
    answer: 'back-and-forth motion',
    explanation: 'Linkages are often used to transform one type of movement into another.',
  },
  {
    prompt: 'Mechanical advantage means...',
    options: ['a machine helps you use less effort force for a task', 'a machine always moves faster', 'a machine never needs maintenance', 'a machine can work without energy input'],
    answer: 'a machine helps you use less effort force for a task',
    explanation: 'Mechanical advantage reduces effort by changing how force is applied.',
  },
  {
    prompt: 'In a simple control system, pressing a switch is usually the...',
    options: ['input', 'output', 'feedback only', 'waste product'],
    answer: 'input',
    explanation: 'Inputs are actions or signals entering the system.',
  },
];

const MechanicalSystemsAndControl = () => (
  <CapsSubjectTopic
    title="Mechanical Systems and Control"
    subtitle="Levers, gears, pulleys, and systems thinking"
    learnSteps={learnSteps}
    task="gr7-mechanical-systems-and-control-t3"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default MechanicalSystemsAndControl;
