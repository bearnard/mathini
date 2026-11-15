import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Court, RampBars } from '../../../../../components/diagrams/lo/Lo5Pictures';
import { gradualPlan } from '../../../../../components/diagrams/lo/lo5Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The numbers in the picture and the worked example come from this tested helper (lo5Helpers.test.ts).
const ramp = gradualPlan(10, 2, 4);

export const learnSteps: LearnStep[] = [
  {
    title: 'Footwork and the ready position',
    content: slide(
      <>
        <Rule>In net or wall games, good footwork helps you move into position quickly. Wait in the ready position so you can go in any direction.</Rule>
        <StepFlow steps={['Feet about shoulder-width apart.', 'Knees slightly bent.', 'Weight on the balls of your feet.', 'Eyes on the ball.']} aria="Four points of the ready position in order: feet shoulder-width apart, knees slightly bent, weight on the balls of the feet, eyes on the ball." />
        <Worked
          title="Getting to a ball that comes to your left"
          steps={[<>Start in the ready position.</>, <>Take quick small steps to the left.</>, <>Stop with your feet set before you hit the ball.</>]}
        />
        <Mistake>Standing flat-footed and reaching with your arm. Move your feet first, then play the ball.</Mistake>
      </>,
    ),
  },
  {
    title: 'Agility and coordination',
    content: slide(
      <>
        <Rule>Agility is changing direction quickly. Regular change-of-direction drills improve it. Coordination is using your body parts together smoothly and accurately.</Rule>
        <Worked
          title="A cone shuttle drill"
          steps={[<>Set two cones a few big steps apart.</>, <>Sprint to a cone and touch the ground.</>, <>Turn quickly and sprint to the other cone.</>, <>Repeat, and keep your eyes on the next cone.</>]}
        />
        <Mistake>Thinking agility is only straight-line speed, or practising it once. Agility improves with regular drills that make you stop, turn and start.</Mistake>
      </>,
    ),
  },
  {
    title: 'Building endurance safely',
    content: slide(
      <>
        <Rule>Endurance is being able to keep going for longer. Build it safely by increasing your activity gradually over time.</Rule>
        <RampBars weeks={['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4']} minutes={ramp.minutes} aria="Four bars for weeks one to four showing 10, 12, 14 and 16 minutes of activity, rising by two minutes each week." />
        <Worked
          title="A four-week plan"
          steps={[<>Start at {ramp.minutes[0]} minutes in week 1.</>, <>Add 2 minutes each week: {ramp.minutes.join(', ')}.</>, <>By week 4 you do {ramp.increase} minutes more than at the start.</>]}
        />
        <Mistake>Doing too much too soon. Big jumps can cause injury. Small, steady increases are safer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Teamwork and fair play',
    content: slide(
      <>
        <Rule>Cooperation in a mini-game means communicating and covering space with your teammates. Fair play builds respect, trust and positive participation.</Rule>
        <Court players={2} aria="A net court from above. Our side is split into two equal zones with one player in each, so the whole side is covered." />
        <Worked
          title="Two players on one side"
          steps={[<>Share the court: each player takes one zone.</>, <>Call “mine” so you do not both go for the ball.</>, <>Play by the rules and respect the umpire's decision.</>]}
        />
        <Mistake>Chasing every ball yourself, or arguing about decisions. Communicate, trust your teammate and keep it fair.</Mistake>
      </>,
    ),
  },
  {
    title: 'Warm-up, safety and reflection',
    content: slide(
      <>
        <Rule>Before every PE session, do a proper warm-up and a safety check. Afterwards, reflect: which skill improved, and what should I practise next?</Rule>
        <StepFlow steps={['Safety check the area and equipment.', 'Warm up your body.', 'Play and practise.', 'Reflect on what to practise next.']} aria="Four steps of a PE session in order: safety check, warm up, play and practise, reflect." />
        <Worked
          title="A short reflection"
          steps={[<>Skill that improved: my footwork.</>, <>Skill that is still weak: my serve.</>, <>Next time I will practise my serve for ten minutes.</>]}
        />
        <Mistake>Skipping the warm-up and safety check because you are late. A cold body and a wet floor are how injuries happen.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="In net or wall games, why is footwork important?" answer="It helps players move into position quickly." />
        <Check question="Which drills improve agility, and how do you build endurance safely?" answer="Regular change-of-direction drills. Increase activity gradually over time." />
        <Check question="Name one way to show cooperation and one reason fair play matters." answer="Communicate and cover space with teammates. Fair play builds respect, trust and positive participation." />
        <Check question="What happens before each PE session, and which question helps you improve?" answer="A proper warm-up and safety check. “Which skill improved and what should I practise next?”" />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In net or wall games, why is footwork important?',
    options: [
      'It helps players move into position quickly',
      'It removes the need for teamwork',
      'It allows ignoring the ball completely',
      'It replaces all warm-ups',
    ],
    answer: 'It helps players move into position quickly',
    explanation: 'Good footwork improves timing and shot control.',
  },
  {
    prompt: 'Which action best improves agility?',
    options: [
      'Regular change-of-direction drills',
      'Avoiding movement practice',
      'Standing still for most sessions',
      'Skipping all warm-ups',
    ],
    answer: 'Regular change-of-direction drills',
    explanation: 'Agility develops through repeated directional movement practice.',
  },
  {
    prompt: 'What is coordination in PE?',
    options: ['Using body parts together smoothly and accurately', 'Running about with no control at all', 'Competing without any rules to follow', 'Avoiding practice of the skills'],
    answer: 'Using body parts together smoothly and accurately',
    explanation: 'Coordination supports balanced and effective movement.',
  },
  {
    prompt: 'How can learners build endurance safely?',
    options: [
      'Increase activity gradually over time',
      'Do maximum effort once then stop for weeks',
      'Ignore hydration and recovery',
      'Skip cool-down after all sessions',
    ],
    answer: 'Increase activity gradually over time',
    explanation: 'Progressive training improves stamina while reducing injury risk.',
  },
  {
    prompt: 'Which behaviour shows cooperation in a mini-game?',
    options: [
      'Communicating and covering space with teammates',
      'Refusing to pass or support others',
      'Arguing with teammates constantly',
      'Ignoring game rules',
    ],
    answer: 'Communicating and covering space with teammates',
    explanation: 'Cooperation improves team performance and confidence.',
  },
  {
    prompt: 'What should happen before each PE session?',
    options: [
      'A proper warm-up and safety check',
      'Immediate high-intensity play only',
      'No instructions from the teacher',
      'Removing all boundaries and rules',
    ],
    answer: 'A proper warm-up and safety check',
    explanation: 'Preparation lowers risk and supports performance.',
  },
  {
    prompt: 'Why is fair play important in PE?',
    options: ['It builds respect, trust and positive participation', 'It helps one side win in an unfair way', 'It makes rude behaviour acceptable', 'It means that the rules can be ignored'],
    answer: 'It builds respect, trust and positive participation',
    explanation: 'Fair play is central to healthy competitive activity.',
  },
  {
    prompt: 'Which reflection question helps PE improvement?',
    options: ['Which skill improved and what should I practise next?', 'Who can I blame for each of my mistakes?', 'How can I avoid putting in effort next lesson?', 'How can I get out of the safety rules?'],
    answer: 'Which skill improved and what should I practise next?',
    explanation: 'Reflection supports goal-directed skill development.',
  },
];

const PhysicalEducationTask = () => (
  <CapsSubjectTopic
    title="Physical Education Task"
    subtitle="Net or wall games, agility, endurance, coordination, and cooperation"
    learnSteps={learnSteps}
    task="gr8-physical-education-task-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask;
