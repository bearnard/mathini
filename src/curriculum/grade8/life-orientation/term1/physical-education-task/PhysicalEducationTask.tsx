import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Move safely and cooperate',
    image: {
      src: '/curriculum/grade8/lo/term1/physical-education-task/diagram.webp',
      alt: 'grade 8 learners doing warm ups and invasion game drills safely',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Physical Education Task develops warm-up routines, basic fitness, invasion-game skills, teamwork,
          safety, and fair play.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply rules and effort',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners improve through regular participation, correct technique, and respectful behaviour during games and
          drills.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why is a warm-up important before activity?',
    options: [
      'It prepares muscles and reduces injury risk',
      'It makes rules unnecessary',
      'It replaces hydration',
      'It is only needed for athletes',
    ],
    answer: 'It prepares muscles and reduces injury risk',
    explanation: 'Warm-ups raise body readiness and improve movement safety.',
  },
  {
    prompt: 'Which behaviour shows fair play?',
    options: [
      'Respecting rules and opponents',
      'Arguing with every decision',
      'Ignoring safety instructions',
      'Cheating to win quickly',
    ],
    answer: 'Respecting rules and opponents',
    explanation: 'Fair play values honesty, respect, and sportsmanship.',
  },
  {
    prompt: 'In invasion games, what is a good teamwork action?',
    options: [
      'Passing to an open teammate',
      'Holding the ball every turn',
      'Running without watching space',
      'Ignoring team strategy',
    ],
    answer: 'Passing to an open teammate',
    explanation: 'Sharing the ball helps teams create better attacking chances.',
  },
  {
    prompt: 'Which option best builds basic fitness?',
    options: [
      'Consistent activity with effort and rest balance',
      'One intense session per term only',
      'Avoiding movement practice',
      'Skipping cool-downs every time',
    ],
    answer: 'Consistent activity with effort and rest balance',
    explanation: 'Regular training supports gradual, safer fitness improvement.',
  },
  {
    prompt: 'What should learners do if equipment looks unsafe?',
    options: [
      'Report it immediately to the teacher',
      'Use it anyway',
      'Hide the problem from everyone',
      'Challenge friends to use it first',
    ],
    answer: 'Report it immediately to the teacher',
    explanation: 'Reporting hazards protects everyone in the activity space.',
  },
  {
    prompt: 'Which action shows good sportsmanship after a match?',
    options: [
      'Thanking teammates and opponents',
      'Blaming others loudly',
      'Mocking the losing team',
      'Refusing to follow-up feedback',
    ],
    answer: 'Thanking teammates and opponents',
    explanation: 'Respect after competition reflects positive character.',
  },
  {
    prompt: 'Why are skill drills useful in PE?',
    options: [
      'They improve technique through repetition',
      'They remove the need for rules',
      'They only test theory',
      'They are meant to embarrass learners',
    ],
    answer: 'They improve technique through repetition',
    explanation: 'Practice drills build control, accuracy, and confidence.',
  },
  {
    prompt: 'What is a safe cool-down choice after exercise?',
    options: [
      'Light movement and stretching',
      'Stopping suddenly and sitting immediately',
      'Skipping all recovery actions',
      'Running harder without pause',
    ],
    answer: 'Light movement and stretching',
    explanation: 'Cool-down helps the body return to resting state safely.',
  },
];

const PhysicalEducationTask = () => (
  <CapsSubjectTopic
    title="Physical Education Task"
    subtitle="Warm-ups, fitness, invasion games, safety, teamwork, and fair play"
    learnSteps={learnSteps}
    task="gr8-physical-education-task-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask;
