import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Create and apply a personal fitness plan',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Term 4, learners build a <strong>personal fitness plan</strong>, apply strategy in games, and review
          progress made during the year.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <p className="font-bold text-blue-700">Fitness plan</p>
            <p className="text-slate-600">goals, frequency, and activity choices</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Game strategy</p>
            <p className="text-slate-600">positioning and decision-making</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Participation review</p>
            <p className="text-slate-600">evaluate strengths and next goals</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Recreation</p>
            <p className="text-slate-600">active enjoyment for wellbeing</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Reflect on progress and adapt strategy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners use evidence from games and fitness tasks to improve decisions, teamwork, and consistency.
          Reflection turns experience into better future performance.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Evidence</p>
            <p className="text-slate-600">times, logs, and observations</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Adjustment</p>
            <p className="text-slate-600">change tactics when needed</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Recovery</p>
            <p className="text-slate-600">rest, hydration, and safe loading</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Communication</p>
            <p className="text-slate-600">clear team signals and support</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What should a personal fitness plan include?',
    options: ['Clear goals, activities and a weekly schedule', 'One workout that you picked on a whim', 'No rest or recovery time in the week', 'A plan that is copied without any changes'],
    answer: 'Clear goals, activities and a weekly schedule',
    explanation: 'A useful plan is specific, balanced, and realistic.',
  },
  {
    prompt: 'What is game strategy?',
    options: [
      'Planned decisions to improve team performance',
      'Ignoring positions and rules',
      'Using the same move every situation',
      'Arguing with teammates to gain control',
    ],
    answer: 'Planned decisions to improve team performance',
    explanation: 'Strategy helps teams respond to changing game situations.',
  },
  {
    prompt: 'How can learners review participation effectively?',
    options: ['Reflect on effort, skills and teamwork', 'Focus on the winning scores only, nothing else', 'Avoid feedback from the teachers entirely', 'Skip all of the self-assessment tasks'],
    answer: 'Reflect on effort, skills and teamwork',
    explanation: 'Participation review identifies progress and next goals.',
  },
  {
    prompt: 'What is one benefit of regular recreation?',
    options: [
      'It supports physical and mental wellbeing',
      'It removes the need for sleep',
      'It guarantees instant fitness',
      'It replaces all academic responsibilities',
    ],
    answer: 'It supports physical and mental wellbeing',
    explanation: 'Recreation helps fitness, stress relief, and enjoyment.',
  },
  {
    prompt: 'If your team is losing space in attack, what should you do?',
    options: [
      'Adjust positioning and communicate quickly',
      'Keep repeating the same failing play',
      'Ignore teammates completely',
      'Break rules to recover possession',
    ],
    answer: 'Adjust positioning and communicate quickly',
    explanation: 'Good strategy requires adaptation during play.',
  },
  {
    prompt: 'Which evidence can show personal improvement?',
    options: ['Faster times and better skill consistency', 'The colour of your sports kit', 'How loud the crowd was on the day', 'One lucky result in a single game'],
    answer: 'Faster times and better skill consistency',
    explanation: 'Performance evidence should be measurable and repeated.',
  },
  {
    prompt: 'Which principle keeps training safe?',
    options: [
      'Include rest and recovery in the schedule',
      'Train at maximum intensity daily',
      'Ignore pain during exercise',
      'Skip hydration in hot weather',
    ],
    answer: 'Include rest and recovery in the schedule',
    explanation: 'Recovery is essential for adaptation and injury prevention.',
  },
  {
    prompt: 'What communication habit strengthens teamwork?',
    options: [
      'Use clear, respectful calls during play',
      'Blame teammates after mistakes',
      'Remain silent in all situations',
      'Shout over everyone without listening',
    ],
    answer: 'Use clear, respectful calls during play',
    explanation: 'Positive communication improves decisions and coordination.',
  },
];

const PhysicalEducationT4 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Personal fitness plans, game strategy, participation review, and recreation"
    learnSteps={learnSteps}
    task="gr7-physical-education-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT4;
