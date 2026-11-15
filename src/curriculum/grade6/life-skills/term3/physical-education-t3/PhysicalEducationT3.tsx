import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Warm up and cool down',
    content: slide(
      <>
        <Rule>
          Warm up before athletics to prepare the body and lower the risk of injury: warm-ups increase blood flow and get muscles ready. After vigorous exercise, cool down with slower movement and gentle stretches.
        </Rule>
        <FlowDiagram
          id="pe3"
          title="A safe PE session"
          desc="Three steps in order: warm up, main activity, cool down."
          nodes={[
            { id: 'w', label: 'warm up', x: 28, y: 50, color: '#fcd34d' },
            { id: 'a', label: 'activity', x: 80, y: 50, color: '#86efac' },
            { id: 'c', label: 'cool down', x: 132, y: 50, color: '#7dd3fc' },
          ]}
          edges={[
            { from: 'w', to: 'a', label: '' },
            { from: 'a', to: 'c', label: '' },
          ]}
        />
        <Worked
          title="Run a safe session"
          steps={[
            <>Warm up: raise your heart rate with gentle jogging and prepare your muscles.</>,
            <>Do the main activity, such as running or jumping.</>,
            <>Cool down: slow your movement and breathing and do gentle stretches.</>,
            <>This helps the body recover safely after exercise.</>,
          ]}
        />
        <Mistake>Stopping suddenly after hard exercise. Cool down with slower movement and gentle stretches.</Mistake>
      </>,
    ),
  },
  {
    title: 'Running and jumping safely',
    content: slide(
      <>
        <Rule>A safe jumping technique is to land softly with bent knees, which helps absorb impact and protects the body. When running, keep a steady rhythm and safe spacing.</Rule>
        <Worked
          title="Jump and land"
          steps={[
            <>Check you have safe spacing from others.</>,
            <>Bend your knees and swing your arms to jump.</>,
            <>Land softly with bent knees. Bending the knees absorbs the impact.</>,
            <>Keep your balance and control, and practise.</>,
          ]}
        />
        <Mistake>Landing with straight, stiff legs. Bent knees protect your body.</Mistake>
      </>,
    ),
  },
  {
    title: 'Relays and indigenous games',
    content: slide(
      <>
        <Rule>
          In a relay race, pass the baton carefully to the next runner. A smooth baton pass keeps the team safe and moving well. Indigenous games are valuable because they build skill while connecting learners to local heritage.
        </Rule>
        <Worked
          title="Pass the baton"
          steps={[
            <>Wait in your place and watch the runner come.</>,
            <>Take turns: start when the runner reaches you.</>,
            <>Pass the baton carefully, with a smooth baton pass.</>,
            <>Indigenous games also build skill and fun, with shared rules, while connecting you to local heritage.</>,
          ]}
        />
        <Mistake>Throwing the baton or rushing the pass. A careful pass keeps the team safe and moving well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Flexibility, reaction time and fair play',
    content: slide(
      <>
        <Rule>
          Flexibility helps you move muscles and joints through a full range. Reaction time is how quickly you respond to a signal. Cooperation is encouraging teammates and following the plan. Fair play is being honest and respecting the rules.
        </Rule>
        <Worked
          title="Match the skill"
          steps={[
            <>Reaching to touch your toes safely: flexibility, moving muscles and joints through a full range.</>,
            <>Starting to run when you hear the whistle: reaction time, how quickly you respond to a signal.</>,
            <>Encouraging teammates and following the plan: cooperation.</>,
            <>Being honest and respecting the rules, with good sportsmanship: fair play.</>,
          ]}
        />
        <Mistake>Thinking reaction time means how fast you run. It is how quickly you respond after seeing or hearing a cue.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Why warm up before athletics? How do you finish a hard session safely?</li>
            <li>How should you land after a jump to protect your body?</li>
            <li>What must a runner do carefully in a relay, and why are indigenous games worth playing?</li>
            <li>Say what flexibility lets your body do. Then explain reaction time, cooperation and fair play.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>To prepare the body and lower the risk of injury. Cool down with slower movement and gentle stretches.</li>
            <li>Landing softly with bent knees.</li>
            <li>Passing the baton carefully to the next runner. They build skill while connecting learners to local heritage.</li>
            <li>Move muscles and joints through a full range. How quickly you respond to a signal. Encouraging teammates and following the plan. Being honest and respecting the rules.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Why should learners warm up before athletics activities?',
    options: ['To prepare the body and lower the risk of injury', 'To make the lesson finish faster', 'To avoid moving during the activity', 'To stop the muscles from working'],
    answer: 'To prepare the body and lower the risk of injury',
    explanation: 'Warm-ups increase blood flow and help muscles get ready for movement.',
  },
  {
    prompt: 'Which action shows safe jumping technique?',
    options: [
      'Landing softly with bent knees',
      'Landing stiffly on locked legs',
      'Closing your eyes in the air',
      'Pushing another learner aside',
    ],
    answer: 'Landing softly with bent knees',
    explanation: 'Bending the knees helps absorb impact and protects the body.',
  },
  {
    prompt: 'What is important in a relay race?',
    options: [
      'Passing the baton carefully to the next runner',
      'Running in every lane at once',
      'Ignoring your teammates',
      'Starting before the teacher gives a signal',
    ],
    answer: 'Passing the baton carefully to the next runner',
    explanation: 'A smooth baton pass helps the team stay safe and keep moving well.',
  },
  {
    prompt: 'Why are indigenous games valuable in Physical Education?',
    options: [
      'They build skill while connecting learners to local heritage',
      'They only matter if no rules are used',
      'They are played to exclude some learners',
      'They replace all other movement activities forever',
    ],
    answer: 'They build skill while connecting learners to local heritage',
    explanation: 'Indigenous games can develop movement skills and celebrate cultural traditions.',
  },
  {
    prompt: 'What does flexibility help you do?',
    options: [
      'Move muscles and joints through a full range',
      'React more slowly to instructions',
      'Forget how to stretch safely',
      'Avoid all physical activity',
    ],
    answer: 'Move muscles and joints through a full range',
    explanation: 'Flexibility helps the body move freely and comfortably.',
  },
  {
    prompt: 'What is reaction time?',
    options: [
      'How quickly you respond to a signal',
      'How loudly you shout during a game',
      'How long you sit before starting',
      'How many shoes are on the field',
    ],
    answer: 'How quickly you respond to a signal',
    explanation: 'Reaction time is the speed of your response after seeing or hearing a cue.',
  },
  {
    prompt: 'Which choice shows cooperation during a team activity?',
    options: [
      'Encouraging teammates and following the plan',
      'Refusing to share a turn',
      'Changing the rules for yourself only',
      'Blaming others for every mistake',
    ],
    answer: 'Encouraging teammates and following the plan',
    explanation: 'Cooperation means helping the group and working together fairly.',
  },
  {
    prompt: 'What is fair play?',
    options: [
      'Being honest and respecting the rules',
      'Winning by cheating if nobody sees',
      'Pushing to get ahead',
      'Ignoring the referee or teacher',
    ],
    answer: 'Being honest and respecting the rules',
    explanation: 'Fair play combines honesty, respect, and good sportsmanship.',
  },
  {
    prompt: 'What should learners do after vigorous exercise?',
    options: [
      'Cool down with slower movement and gentle stretches',
      'Stop suddenly and fall to the ground',
      'Start another race immediately with no rest',
      'Throw equipment around the field',
    ],
    answer: 'Cool down with slower movement and gentle stretches',
    explanation: 'Cooling down helps the body recover safely after exercise.',
  },
];

const PhysicalEducationT3 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Using safe technique, teamwork, and control in athletics and games"
    learnSteps={learnSteps}
    task="physical-education-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PhysicalEducationT3;
