import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Building a Revision Plan',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A revision plan helps learners spread workload across subjects instead of cramming at the last minute. Effective plans include priorities, deadlines, short review sessions, practice questions and time for correction and reflection.</p>
      </div>
    ),
  },
  {
    title: 'Time Management and Balance',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Good time management means ranking tasks by urgency and importance, avoiding procrastination and protecting time for sleep, meals and exercise. Grade 12 learners need balance because exhaustion reduces concentration and memory.</p>
      </div>
    ),
  },
  {
    title: 'Exam Discipline and Study Strategies',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Exam discipline includes attending class, revising regularly, practising past papers, checking instructions and keeping materials organised. Active strategies such as summarising, self-testing and teaching someone else are stronger than passive rereading alone.</p>
      </div>
    ),
  },
  {
    title: 'Help-Seeking and Accountability',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Help-seeking is a strength when it is done early and specifically. Accountability partners, teachers and study groups can help learners stay on schedule, identify gaps and respond quickly when performance drops.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'What is the main benefit of a revision timetable?',
    options: [
      'It removes the need to attend class',
      'It helps distribute study time in a realistic way',
      'It guarantees full marks',
      'It replaces practice papers',
    ],
    answer: 1,
    explanation: 'A revision timetable helps learners organise workload and avoid last-minute cramming.',
  },
  {
    prompt: 'Which strategy is an example of active studying?',
    options: [
      'Highlighting everything in the textbook',
      'Reading notes without checking understanding',
      'Testing yourself with questions and corrections',
      'Watching others study',
    ],
    answer: 2,
    explanation: 'Self-testing checks understanding and improves retention.',
  },
  {
    prompt: 'Why is sleep important during exam preparation?',
    options: [
      'It is less important than extra cramming',
      'It supports memory, focus and wellbeing',
      'It wastes revision time',
      'It only matters on weekends',
    ],
    answer: 1,
    explanation: 'Adequate sleep improves concentration and memory during revision and exams.',
  },
  {
    prompt: 'Which action shows good exam discipline?',
    options: [
      'Ignoring instructions in a test',
      'Leaving preparation until the night before',
      'Practising past papers under timed conditions',
      'Studying only favourite subjects',
    ],
    answer: 2,
    explanation: 'Timed practice helps learners manage exam conditions and identify weak areas.',
  },
  {
    prompt: 'A learner keeps missing targets. What is the best response?',
    options: [
      'Pretend the timetable is fine',
      'Adjust the plan and ask for support',
      'Stop using any plan',
      'Blame the school immediately',
    ],
    answer: 1,
    explanation: 'Plans should be reviewed honestly and improved with support when necessary.',
  },
  {
    prompt: 'Which task should be prioritised first?',
    options: [
      'An assignment due tomorrow',
      'Notes for a test next month',
      'A hobby with no deadline',
      'A topic you already know well',
    ],
    answer: 0,
    explanation: 'Urgent and important academic tasks should be addressed before less urgent work.',
  },
  {
    prompt: 'What does accountability mean in study planning?',
    options: [
      'Depending on others to do your work',
      'Taking responsibility for following through on your plan',
      'Changing goals every day',
      'Avoiding feedback',
    ],
    answer: 1,
    explanation: 'Accountability means owning your commitments and monitoring your progress.',
  },
  {
    prompt: 'When is the best time to ask for academic help?',
    options: [
      'Only after final exams',
      'As soon as you notice confusion or falling performance',
      'When friends tell you to panic',
      'After deciding the subject is impossible',
    ],
    answer: 1,
    explanation: 'Early help-seeking prevents small problems from becoming bigger barriers.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const StudyPlanningForExitLevelReadiness = () => (
  <CapsSubjectTopic
    title='Study Planning for Exit Level Readiness'
    subtitle='Revision planning, exam discipline, time management, help-seeking and accountability before major assessments.'
    learnSteps={learnSteps}
    task='gr12-study-planning-for-exit-level-readiness-t1'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default StudyPlanningForExitLevelReadiness;
