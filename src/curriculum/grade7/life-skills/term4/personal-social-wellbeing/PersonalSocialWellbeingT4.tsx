import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Set goals and manage exam stress',
    image: {
      src: '/curriculum/grade7/lsk/term4/personal-social-wellbeing/diagram.webp',
      alt: 'Grade 7 learners using planners and stress-management strategies during revision',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 focuses on realistic goal setting, healthy routines, and stress management. Strong routines improve
          wellbeing and learning during busy assessment periods.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Goal setting</p>
            <p className="text-slate-600">specific and achievable targets</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Stress management</p>
            <p className="text-slate-600">healthy coping strategies</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Healthy routines</p>
            <p className="text-slate-600">sleep, nutrition, study balance</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Future planning</p>
            <p className="text-slate-600">next steps linked to interests</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Link responsible habits to community and future',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Responsible learners care for themselves and their communities. Community contribution, reflection, and
          planning support confident transitions to future grades and pathways.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Community responsibility</p>
            <p className="text-slate-600">actions that support others</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Study planner</p>
            <p className="text-slate-600">organise tasks and deadlines</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Help-seeking</p>
            <p className="text-slate-600">ask support before stress grows</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Reflection</p>
            <p className="text-slate-600">review what works and improve</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which goal is realistic and specific?',
    options: [
      'Revise maths for 30 minutes every weekday',
      'Become perfect at everything tomorrow',
      'Never feel stressed again',
      'Finish all subjects in one hour',
    ],
    answer: 'Revise maths for 30 minutes every weekday',
    explanation: 'Specific, realistic goals are easier to follow and measure.',
  },
  {
    prompt: 'Which strategy helps manage exam stress?',
    options: [
      'Use a timetable and take short movement breaks',
      'Stay awake all night before tests',
      'Skip meals during revision',
      'Ignore all difficult subjects',
    ],
    answer: 'Use a timetable and take short movement breaks',
    explanation: 'Planning and balanced breaks reduce pressure and improve focus.',
  },
  {
    prompt: 'Which routine supports healthy learning?',
    options: [
      'Regular sleep and balanced meals',
      'Constant screen time late at night',
      'Studying without any rest',
      'Skipping breakfast every day',
    ],
    answer: 'Regular sleep and balanced meals',
    explanation: 'Healthy habits support memory, energy, and emotional regulation.',
  },
  {
    prompt: 'What is a good first step in future planning?',
    options: [
      'Identify interests and strengths',
      'Choose based only on peer pressure',
      'Avoid thinking about next year',
      'Copy someone else\'s choices exactly',
    ],
    answer: 'Identify interests and strengths',
    explanation: 'Self-knowledge helps learners make informed pathway choices.',
  },
  {
    prompt: 'Which action shows community responsibility?',
    options: [
      'Joining a clean-up or helping project',
      'Ignoring shared spaces completely',
      'Damaging school resources for fun',
      'Mocking people who volunteer',
    ],
    answer: 'Joining a clean-up or helping project',
    explanation: 'Responsible actions contribute to safer, healthier communities.',
  },
  {
    prompt: 'Why use a study planner in Term 4?',
    options: [
      'To organise revision and avoid last-minute panic',
      'To remove all need for effort',
      'To study only favourite topics',
      'To skip assignments without consequences',
    ],
    answer: 'To organise revision and avoid last-minute panic',
    explanation: 'Planners help learners balance workloads and deadlines.',
  },
  {
    prompt: 'When should you seek support for stress?',
    options: [
      'As soon as stress feels hard to manage',
      'Only after refusing all help for months',
      'Never, because stress must stay private',
      'Only after exams have ended',
    ],
    answer: 'As soon as stress feels hard to manage',
    explanation: 'Early support can prevent stress from becoming overwhelming.',
  },
  {
    prompt: 'What does personal reflection help you do?',
    options: ['Improve routines by learning from experience', 'Blame other people for every result', 'Avoid setting goals of any kind', 'Ignore both progress and setbacks'],
    answer: 'Improve routines by learning from experience',
    explanation: 'Reflection helps learners adapt strategies for better outcomes.',
  },
];

const PersonalSocialWellbeingT4 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Goal setting, stress management, healthy routines, and future planning"
    learnSteps={learnSteps}
    task="gr7-personal-social-wellbeing-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT4;
