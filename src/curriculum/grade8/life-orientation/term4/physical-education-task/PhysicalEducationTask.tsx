import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Apply and review movement skills',
    image: {
      src: '/curriculum/grade8/lo/term4/physical-education-task/diagram.webp',
      alt: 'grade 8 learners applying game skills and reviewing personal fitness progress',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 PET focuses on applying game skills, reviewing personal fitness, participating consistently, and using
          recreation for healthy living.
        </p>
      </div>
    ),
  },
  {
    title: 'Measure progress and set next goals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners should reflect on participation, strategy, and teamwork to recognise growth and plan improvement.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why is participation tracking useful in PET?',
    options: [
      'It shows progress and areas for improvement',
      'It replaces practical activity',
      'It is only for top athletes',
      'It removes the need for goals',
    ],
    answer: 'It shows progress and areas for improvement',
    explanation: 'Tracking gives evidence of consistency and development.',
  },
  {
    prompt: 'Which behaviour supports long-term personal fitness?',
    options: [
      'Regular activity with realistic goals',
      'Exercising once and stopping',
      'Ignoring warm-up and recovery',
      'Avoiding movement unless graded',
    ],
    answer: 'Regular activity with realistic goals',
    explanation: 'Fitness improves through consistent healthy routines.',
  },
  {
    prompt: 'What is a good post-game reflection question?',
    options: [
      'What went well, and what should I improve next time?',
      'Who can I blame for every error?',
      'How can I avoid teamwork?',
      'How can I skip all rules?',
    ],
    answer: 'What went well, and what should I improve next time?',
    explanation: 'Reflection supports skill development and personal accountability.',
  },
  {
    prompt: 'Which action reflects fair recreation?',
    options: [
      'Including others and respecting agreed rules',
      'Excluding weaker players',
      'Changing rules to benefit one side',
      'Arguing with officials constantly',
    ],
    answer: 'Including others and respecting agreed rules',
    explanation: 'Fair recreation builds confidence and social connection.',
  },
  {
    prompt: 'How can learners apply strategy during games?',
    options: [
      'Communicate roles and adapt to play situations',
      'Play without any plan',
      'Ignore teammates and spacing',
      'Refuse tactical feedback',
    ],
    answer: 'Communicate roles and adapt to play situations',
    explanation: 'Simple strategy improves teamwork and decision-making.',
  },
  {
    prompt: 'Which choice supports safe participation?',
    options: [
      'Using correct technique and reporting pain early',
      'Playing through serious injury signs',
      'Skipping hydration',
      'Ignoring teacher instructions',
    ],
    answer: 'Using correct technique and reporting pain early',
    explanation: 'Safety habits prevent avoidable harm.',
  },
  {
    prompt: 'What is a healthy reason to join recreational activity?',
    options: [
      'To improve wellbeing, enjoyment, and social connection',
      'To humiliate other learners',
      'To avoid all effort',
      'To break rules for attention',
    ],
    answer: 'To improve wellbeing, enjoyment, and social connection',
    explanation: 'Recreation supports physical and emotional health.',
  },
  {
    prompt: 'Which end-of-year PET goal is most useful?',
    options: [
      'Set one realistic fitness and one teamwork target for next term',
      'Set no goals at all',
      'Copy someone else goals without thought',
      'Choose goals that are impossible to measure',
    ],
    answer: 'Set one realistic fitness and one teamwork target for next term',
    explanation: 'Specific future goals keep progress moving forward.',
  },
];

const PhysicalEducationTask = () => (
  <CapsSubjectTopic
    title="Physical Education Task"
    subtitle="Games application, personal fitness review, participation, and recreation"
    learnSteps={learnSteps}
    task="gr8-physical-education-task-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask;
