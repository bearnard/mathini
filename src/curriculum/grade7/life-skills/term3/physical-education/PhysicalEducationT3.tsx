import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Improve athletics skills and endurance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 PE develops <strong>athletics</strong> performance through running technique, pacing, and endurance.
          Learners also monitor progress using timed activities.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <p className="font-bold text-blue-700">Athletics</p>
            <p className="text-slate-600">running, jumping, and coordinated movement</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Endurance</p>
            <p className="text-slate-600">maintain effort over longer periods</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Flexibility</p>
            <p className="text-slate-600">safe range of movement in joints</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Tracking</p>
            <p className="text-slate-600">record times to monitor growth</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Lead and cooperate in indigenous games',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Indigenous games build coordination, teamwork, and cultural appreciation. Learners practise leadership by
          explaining rules and supporting fair participation.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Cultural heritage</p>
            <p className="text-slate-600">learn through traditional play</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Teamwork</p>
            <p className="text-slate-600">communicate and coordinate actions</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Fair play</p>
            <p className="text-slate-600">respect rules and opponents</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Recovery</p>
            <p className="text-slate-600">cool down and stretch after effort</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which activity best builds endurance?',
    options: [
      'Steady interval running over set distances',
      'One short sprint then complete rest',
      'Skipping every second practice',
      'Only stretching with no movement drills',
    ],
    answer: 'Steady interval running over set distances',
    explanation: 'Regular aerobic intervals improve stamina and pace control.',
  },
  {
    prompt: 'Why is flexibility training important?',
    options: [
      'It improves movement range and reduces injury risk',
      'It replaces all warm-up activities',
      'It means running technique no longer matters',
      'It is only for professional athletes',
    ],
    answer: 'It improves movement range and reduces injury risk',
    explanation: 'Flexible muscles and joints support safer, smoother movement.',
  },
  {
    prompt: 'What should learners do before a timed running event?',
    options: ['Warm up gradually with dynamic movement', 'Start at maximum speed immediately', 'Skip hydration and preparation', 'Sit quietly until the whistle'],
    answer: 'Warm up gradually with dynamic movement',
    explanation: 'A proper warm-up prepares the body for safe performance.',
  },
  {
    prompt: 'What is one value of indigenous games in PE?',
    options: [
      'They build teamwork while celebrating cultural heritage',
      'They remove the need for physical effort',
      'They are only for spectators',
      'They encourage unfair rule changes',
    ],
    answer: 'They build teamwork while celebrating cultural heritage',
    explanation: 'Indigenous games develop skills and cultural awareness together.',
  },
  {
    prompt: 'How can a learner track personal progress in athletics?',
    options: [
      'Record times and compare improvement over weeks',
      'Ignore all performance results',
      'Measure progress once at year end only',
      'Guess results without evidence',
    ],
    answer: 'Record times and compare improvement over weeks',
    explanation: 'Simple records help learners see growth and set goals.',
  },
  {
    prompt: 'Which action shows teamwork in a relay?',
    options: ['Giving clear handover cues to your teammate', 'Running in another lane to overtake', 'Starting before your teammate arrives', 'Blaming others after every attempt'],
    answer: 'Giving clear handover cues to your teammate',
    explanation: 'Relay success depends on communication and timing.',
  },
  {
    prompt: 'What is the best pacing strategy for a longer run?',
    options: [
      'Start controlled and maintain steady effort',
      'Sprint at full speed for the entire race',
      'Walk most of the race without plan',
      'Stop whenever another runner passes',
    ],
    answer: 'Start controlled and maintain steady effort',
    explanation: 'Controlled pacing helps sustain energy to finish strongly.',
  },
  {
    prompt: 'Why is cool-down important after PE?',
    options: [
      'It helps the body recover safely',
      'It increases injury risk intentionally',
      'It replaces skill practice sessions',
      'It is only needed in winter',
    ],
    answer: 'It helps the body recover safely',
    explanation: 'Cool-down lowers heart rate gradually and supports recovery.',
  },
];

const PhysicalEducationT3 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Athletics, indigenous games, flexibility, endurance, and teamwork"
    learnSteps={learnSteps}
    task="gr7-physical-education-t3"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT3;
