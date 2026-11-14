import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop agility and coordination',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          This term focuses on net or wall games, movement control, agility, endurance, coordination, and team
          cooperation.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply skills in mini-games',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners improve by practising technique, communicating during play, and following safety and fair-play
          routines.
        </p>
      </div>
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
