import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Apply sport skills in modified games',
    image: {
      src: '/curriculum/grade7/lsk/term2/physical-education/diagram.webp',
      alt: 'Grade 7 learners practising passing, receiving, and fair play in small-sided games',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          This term focuses on <strong>sport-specific skills</strong> such as passing, receiving, movement into space,
          and applying rules in real game situations.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <p className="font-bold text-blue-700">Passing</p>
            <p className="text-slate-600">accurate release to a teammate</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Receiving</p>
            <p className="text-slate-600">control the ball with balance</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Stamina</p>
            <p className="text-slate-600">sustain effort over time</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Rules</p>
            <p className="text-slate-600">play safely and fairly</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Show leadership, discipline, and fair competition',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good players are also good leaders. Learners should communicate, follow decisions, and compete with
          <strong> fair play</strong> during small games.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Leadership</p>
            <p className="text-slate-600">organise and encourage teammates</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Discipline</p>
            <p className="text-slate-600">control actions and follow instructions</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Officiating</p>
            <p className="text-slate-600">apply rules and make fair calls</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Review</p>
            <p className="text-slate-600">identify what to improve next session</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the best passing choice in a small game?',
    options: [
      'Pass to a teammate in open space',
      'Kick blindly without looking',
      'Hold the ball until blocked',
      'Ignore all teammate calls',
    ],
    answer: 'Pass to a teammate in open space',
    explanation: 'Passing into space helps maintain possession and attack safely.',
  },
  {
    prompt: 'Which action shows good receiving technique?',
    options: ['Watch the ball and control it softly', 'Turn away before contact', 'Close eyes and hope for control', 'Hit the ball away immediately'],
    answer: 'Watch the ball and control it softly',
    explanation: 'Good receiving uses focus, body position, and controlled touch.',
  },
  {
    prompt: 'Which activity most improves stamina?',
    options: ['Regular interval running practice', 'Sitting out every lesson', 'One sprint then no activity', 'Skipping all warm-ups'],
    answer: 'Regular interval running practice',
    explanation: 'Consistent aerobic training helps the body sustain effort.',
  },
  {
    prompt: 'What does fair competition mean?',
    options: ['Playing by the rules and respecting opponents', 'Breaking the rules in order to win quickly', 'Arguing about every decision that is made', 'Passing only to your close friends'],
    answer: 'Playing by the rules and respecting opponents',
    explanation: 'Fair competition includes honesty, respect, and safety.',
  },
  {
    prompt: 'Which behaviour shows leadership in PE?',
    options: ['Encouraging teammates and organising positions', 'Blaming others for every mistake', 'Ignoring team strategy completely', 'Refusing to communicate'],
    answer: 'Encouraging teammates and organising positions',
    explanation: 'Leadership helps teams stay focused and cooperative.',
  },
  {
    prompt: 'Why are game rules important?',
    options: [
      'They keep play safe and organised',
      'They remove the need for teamwork',
      'They make practice impossible',
      'They allow unfair advantages',
    ],
    answer: 'They keep play safe and organised',
    explanation: 'Rules create fair conditions and reduce injury risk.',
  },
  {
    prompt: 'What should a learner do when officiating a match?',
    options: ['Apply the rules in the same way to both teams', 'Support only one of the two teams', 'Ignore the clear fouls that are made', 'Change the rules while play is going on'],
    answer: 'Apply the rules in the same way to both teams',
    explanation: 'Consistent officiating builds trust and fairness.',
  },
  {
    prompt: 'Which action best shows discipline?',
    options: [
      'Following instructions even when tired',
      'Leaving the field without permission',
      'Arguing after every whistle',
      'Skipping drills to chat',
    ],
    answer: 'Following instructions even when tired',
    explanation: 'Discipline supports learning, safety, and team success.',
  },
];

const PhysicalEducationT2 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Sport skills, stamina, rules, leadership, and fair competition"
    learnSteps={learnSteps}
    task="gr7-physical-education-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT2;
