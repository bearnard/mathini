import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Athletics and Indigenous Games',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Athletics</strong> includes running, jumping, and throwing. <strong>Indigenous games</strong> are traditional sports
          that build skill, fitness, and cultural understanding.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Both athletics and indigenous games teach discipline, teamwork, and cultural pride.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Fitness Maintenance and Leadership',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Fitness maintenance</strong> means keeping up your fitness year-round.
          <strong> Leadership in physical activity</strong> means helping others participate and succeed.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Fitness</strong>
            <p className="text-slate-600">Consistent training and balance.</p>
          </div>
          <div className="rounded-xl bg-green-50 p4">
            <strong className="text-green-700">Leadership</strong>
            <p className="text-slate-600">Motivating and supporting others.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Technique, Rules, and Participation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mastering technique in athletics involves proper form, breathing, and pacing.
          Following rules and showing consistency demonstrates respect and growth.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Excellence requires:</p>
          <p className="text-slate-600">Good technique, understanding rules, and regular participation with focus.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does athletics include?',
    options: ['Only running', 'Running, jumping, throwing, and field events', 'Only team sports', 'Just exercise'],
    answer: 'Running, jumping, throwing, and field events',
    explanation: 'Athletics covers track and field disciplines.',
  },
  {
    prompt: 'Why are indigenous games important?',
    options: ['They are not', 'They build fitness while connecting to cultural heritage', 'Only recreation', 'Outdated'],
    answer: 'They build fitness while connecting to cultural heritage',
    explanation: 'Indigenous games honour culture and teach valuable skills.',
  },
  {
    prompt: 'What is fitness maintenance?',
    options: ['Only during sports season', 'Keeping up your fitness consistently throughout the year', 'Not necessary', 'Only in summer'],
    answer: 'Keeping up your fitness consistently throughout the year',
    explanation: 'Consistent training prevents fitness loss and maintains health.',
  },
  {
    prompt: 'How does leadership show in physical activity?',
    options: ['By being best', 'By motivating others and helping them improve', 'Only for captains', 'Just winning'],
    answer: 'By motivating others and helping them improve',
    explanation: 'Leaders elevate everyone around them.',
  },
  {
    prompt: 'Why is proper technique in athletics important?',
    options: ['It is not', 'It improves performance and prevents injury', 'Only for professionals', 'Waste of time'],
    answer: 'It improves performance and prevents injury',
    explanation: 'Good technique is efficient and safe.',
  },
  {
    prompt: 'What rules should athletes follow?',
    options: ['None', 'Sport-specific rules and fair play principles', 'Suggestions only', 'Whatever they want'],
    answer: 'Sport-specific rules and fair play principles',
    explanation: 'Rules ensure fairness and safety.',
  },
  {
    prompt: 'How can you show consistency in athletics?',
    options: ['You cannot', 'By training regularly, preparing properly, and participating fully', 'Only sometimes', 'One event is enough'],
    answer: 'By training regularly, preparing properly, and participating fully',
    explanation: 'Consistency builds skill and endurance.',
  },
  {
    prompt: 'What is the benefit of participating in timed events?',
    options: ['None', 'It measures progress and motivates improvement', 'Just for winners', 'Stressful only'],
    answer: 'It measures progress and motivates improvement',
    explanation: 'Timed events provide clear benchmarks for growth.',
  },
  {
    prompt: 'How do participation logs help?',
    options: ['They do not', 'They track your activity and show progress over time', 'Too much work', 'Not necessary'],
    answer: 'They track your activity and show progress over time',
    explanation: 'Logs build awareness and motivation.',
  },
  {
    prompt: 'What makes an athlete outstanding?',
    options: ['Just speed', 'Skill, dedication, respect for others, and consistent improvement', 'Natural ability only', 'Easy wins'],
    answer: 'Skill, dedication, respect for others, and consistent improvement',
    explanation: 'Excellence in athletics combines multiple qualities.',
  },
];

const PhysicalEducationTask3 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 3"
    subtitle="Athletics, indigenous games, and leadership"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-3-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask3;
