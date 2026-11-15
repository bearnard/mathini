import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Warm-ups and a safe space',
    content: slide(
      <>
        <Rule>
          We warm up to get the body ready to move safely: warm-ups gently prepare muscles and joints. Check your space before you start, so there are no collisions or accidents.
        </Rule>
        <Worked
          title="Start a PE activity safely"
          steps={[
            <>Look around: is your personal space clear of people and objects?</>,
            <>Check your space before you start.</>,
            <>Warm up with gentle movement: jog on the spot, swing your arms.</>,
            <>Now the body is ready to move safely in the main activity.</>,
          ]}
        />
        <Mistake>Skipping the warm-up to start sooner. Cold muscles and joints are more likely to be hurt.</Mistake>
      </>,
    ),
  },
  {
    title: 'Locomotor and non-locomotor movement',
    content: slide(
      <>
        <Rule>Locomotor movements travel from one place to another, like skipping across the court. Non-locomotor movements happen mostly in one place, like bending and stretching on the spot.</Rule>
        <Worked
          title="Sort the movements"
          steps={[
            <>Skipping across the court: you travel, so it is locomotor.</>,
            <>Bending and stretching on the spot: you stay in one place, so it is non-locomotor.</>,
            <>Other locomotor ones: walk, run, hop. Other non-locomotor ones: twist, stretch.</>,
          ]}
        />
        <Mistake>Thinking non-locomotor means no movement. The body still moves, mostly in one place.</Mistake>
      </>,
    ),
  },
  {
    title: 'Balance and coordination',
    content: slide(
      <>
        <Rule>
          Balance improves when you keep your body steady and your eyes focused. Coordination means body parts working together smoothly: it links movement, timing and control.
        </Rule>
        <Worked
          title="Balance on one foot"
          steps={[
            <>Stand tall with a steady body and strong posture.</>,
            <>Focus your eyes on one spot ahead.</>,
            <>Lift one foot. If you wobble, keep your eyes on the spot and slow down.</>,
            <>Throwing and catching a ball uses coordination: eyes, hands and timing working together.</>,
          ]}
        />
        <Mistake>Looking at your feet when you balance. Focus your eyes on a steady spot instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Target games and teamwork',
    content: slide(
      <>
        <Rule>
          In a target game your main job is to aim accurately at the target. An underarm throw gives gentle control for short target games, such as sending a beanbag to a hoop. Good teamwork means taking turns and encouraging others.
        </Rule>
        <Worked
          title="Throw a beanbag at a hoop"
          steps={[
            <>Face the target with your eyes on it.</>,
            <>Swing your arm smoothly back and forward (an underarm throw).</>,
            <>Release forward and judge the distance. Control and accuracy matter more than speed.</>,
            <>Take turns and encourage others in your team.</>,
          ]}
        />
        <Mistake>Throwing as hard as you can in a target game. Target games focus on accuracy, not speed alone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Why do we warm up? Which routine is safest before starting?</li>
            <li>Give an example of a locomotor and a non-locomotor movement.</li>
            <li>What helps you keep balance, and what does coordination mean?</li>
            <li>What is your main job in a target game? Which throw suits a beanbag and hoop, and what is good teamwork?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>To get the body ready to move safely. Checking your space before you start.</li>
            <li>Skipping across the court. Bending and stretching on the spot.</li>
            <li>Keeping your body steady and eyes focused. Body parts working together smoothly.</li>
            <li>Aim accurately at the target. Underarm throw. Taking turns and encouraging others.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Why do we warm up before the main PE activity?',
    options: [
      'To get the body ready to move safely',
      'To make the lesson as noisy as possible',
      'To finish the class immediately',
      'To avoid all movement',
    ],
    answer: 'To get the body ready to move safely',
    explanation: 'Warm-ups gently prepare muscles and joints for activity.',
  },
  {
    prompt: 'Which is a locomotor movement?',
    options: ['Skipping across the court', 'Twisting on one spot', 'Stretching your arms in place', 'Balancing without moving forward'],
    answer: 'Skipping across the court',
    explanation: 'Locomotor movements travel from one place to another.',
  },
  {
    prompt: 'Which is a non-locomotor movement?',
    options: ['Bending and stretching on the spot', 'Running around the field', 'Hopping to the finish line', 'Galloping past a cone'],
    answer: 'Bending and stretching on the spot',
    explanation: 'Non-locomotor movements happen mostly in one place.',
  },
  {
    prompt: 'What helps you keep balance?',
    options: [
      'Keeping your body steady and eyes focused',
      'Closing your eyes and rushing forward',
      'Swinging wildly with no control',
      'Standing on slippery equipment',
    ],
    answer: 'Keeping your body steady and eyes focused',
    explanation: 'Balance improves when your posture is controlled and your attention is focused.',
  },
  {
    prompt: 'What does coordination mean?',
    options: [
      'Body parts working together smoothly',
      'Moving as slowly as possible all the time',
      'Playing without listening to instructions',
      'Using only one body part in every task',
    ],
    answer: 'Body parts working together smoothly',
    explanation: 'Coordination links movement, timing, and control.',
  },
  {
    prompt: 'In a target game, what is your main job?',
    options: ['Aim accurately at the target', 'Run the farthest away from the target', 'Hide the equipment from others', 'Kick every object as hard as possible'],
    answer: 'Aim accurately at the target',
    explanation: 'Target games focus on control and accuracy rather than speed alone.',
  },
  {
    prompt: 'Which PE routine is safest?',
    options: [
      'Checking your space before you start',
      'Throwing before the teacher explains',
      'Running into other groups for fun',
      'Leaving equipment in the middle of the floor',
    ],
    answer: 'Checking your space before you start',
    explanation: 'A safe space helps prevent collisions and accidents.',
  },
  {
    prompt: 'Which throw is often best for sending a beanbag to a hoop target?',
    options: ['Underarm throw', 'Header', 'Cartwheel kick', 'Backward jump'],
    answer: 'Underarm throw',
    explanation: 'An underarm throw gives gentle control for short target games.',
  },
  {
    prompt: 'What does good teamwork look like in PE?',
    options: [
      'Taking turns and encouraging others',
      'Blaming others for every mistake',
      'Ignoring the rules to win',
      'Refusing to share equipment',
    ],
    answer: 'Taking turns and encouraging others',
    explanation: 'Teamwork means respecting others and helping the whole group succeed.',
  },
];

const PhysicalEducationT1 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Practising movement, balance, coordination, and target games"
    learnSteps={learnSteps}
    task="physical-education-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PhysicalEducationT1;
