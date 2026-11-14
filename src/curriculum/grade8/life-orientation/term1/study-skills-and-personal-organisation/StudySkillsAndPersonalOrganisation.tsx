import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan your study time',
    image: {
      src: '/curriculum/grade8/lo/term1/study-skills-and-personal-organisation/diagram.webp',
      alt: 'grade 8 learner organising homework timetable and study materials',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good study skills include time management, homework routines, concentration strategies, and organised
          materials.
        </p>
      </div>
    ),
  },
  {
    title: 'Use routines and reflection',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners become more independent when they plan ahead, complete tasks consistently, and review what works.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of a study timetable?',
    options: [
      'To organise tasks and reduce last-minute stress',
      'To avoid all homework',
      'To replace class attendance',
      'To study only one subject for the whole week',
    ],
    answer: 'To organise tasks and reduce last-minute stress',
    explanation: 'A timetable helps learners manage workload and deadlines.',
  },
  {
    prompt: 'Which habit improves concentration during study?',
    options: [
      'Studying in a quiet place with limited distractions',
      'Checking social media every few minutes',
      'Doing homework with loud interruptions',
      'Skipping breaks and sleeping less',
    ],
    answer: 'Studying in a quiet place with limited distractions',
    explanation: 'A focused environment supports better attention and memory.',
  },
  {
    prompt: 'Which action shows personal organisation?',
    options: [
      'Keeping notes and files sorted by subject',
      'Losing worksheets regularly',
      'Ignoring due dates',
      'Bringing no equipment to class',
    ],
    answer: 'Keeping notes and files sorted by subject',
    explanation: 'Organised materials save time and improve readiness.',
  },
  {
    prompt: 'A learner has many tasks due. What should they do first?',
    options: ['Rank tasks by deadline and importance', 'Start with whichever tasks you feel like doing', 'Wait until the last night before they are due', 'Leave the difficult subjects for much later'],
    answer: 'Rank tasks by deadline and importance',
    explanation: 'Prioritising helps learners complete work efficiently.',
  },
  {
    prompt: 'Why are homework routines useful?',
    options: [
      'They build consistency and independent learning',
      'They remove the need to revise',
      'They guarantee full marks automatically',
      'They replace teacher feedback',
    ],
    answer: 'They build consistency and independent learning',
    explanation: 'Regular routines make study behaviour more sustainable.',
  },
  {
    prompt: 'Which strategy is best when a topic feels difficult?',
    options: ['Split it into small steps and ask for help when needed', 'Avoid the topic for the rest of the year', 'Copy the answers without understanding them', 'Give up on the topic straight away'],
    answer: 'Split it into small steps and ask for help when needed',
    explanation: 'Small steps and support improve understanding and confidence.',
  },
  {
    prompt: 'What is a good way to check study progress?',
    options: [
      'Review completed goals each week',
      'Never look at your plan again',
      'Only compare yourself with others',
      'Study without any targets',
    ],
    answer: 'Review completed goals each week',
    explanation: 'Regular reflection shows what to continue or improve.',
  },
  {
    prompt: 'Which choice supports healthier study balance?',
    options: ['Putting rest, sleep and revision in your weekly plan', 'Studying all night, every night, to get ahead', 'Skipping meals in order to save study time', 'Removing all of the breaks from your day'],
    answer: 'Putting rest, sleep and revision in your weekly plan',
    explanation: 'Balanced routines protect wellbeing and improve performance.',
  },
];

const StudySkillsAndPersonalOrganisation = () => (
  <CapsSubjectTopic
    title="Study Skills and Personal Organisation"
    subtitle="Time management, concentration, homework routines, and planning"
    learnSteps={learnSteps}
    task="gr8-study-skills-and-personal-organisation-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default StudySkillsAndPersonalOrganisation;
