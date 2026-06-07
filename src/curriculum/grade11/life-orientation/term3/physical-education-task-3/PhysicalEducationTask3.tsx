import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/lo/term3/physical-education-task-3/diagram.webp", alt: "Physical Education Task — Term 3" },
    title: 'Athletics Skills and Conditioning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Athletics develops speed, endurance, coordination, and discipline through activities such as sprinting, middle-distance running, jumping, and throwing.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Skill focus</strong>
            <p className="text-sm text-slate-600">Starting technique, pacing, breathing, body alignment, and correct event-specific movement patterns.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Conditioning principles</strong>
            <p className="text-sm text-slate-600">Progressive overload, regular practice, rest and recovery, and matching training to the event.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Safe and Inclusive Leadership',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Leaders in physical activity create safe spaces where all participants are encouraged, respected, and included.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2 text-sm text-slate-600">
          <p><strong className="text-slate-800">Leadership duties:</strong> explain rules clearly, check the space and equipment, model fair play, adapt activities where needed, and motivate others positively.</p>
          <p>Inclusive leadership means making sure learners of different abilities can participate meaningfully.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Recreation, Effort and Consistency',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Recreational activity supports wellbeing when learners participate regularly and sustain effort over time, not only when they compete.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left text-sm">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Participation</strong>
            <p className="text-slate-600">Showing up regularly and engaging fully.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Effort</strong>
            <p className="text-slate-600">Working at an appropriate intensity and staying focused.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Reflection</strong>
            <p className="text-slate-600">Reviewing what helped you improve and where you still need practice.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Setting Physical Activity Goals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Personal goals help you improve safely and steadily. Good goals are specific, realistic, and linked to regular practice.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2">
          <p className="font-bold text-slate-800">A useful record should include:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>Activity type and duration</li>
            <li>Personal effort and intensity</li>
            <li>Progress in skill or fitness</li>
            <li>One next-step goal for improvement</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which conditioning principle means gradually increasing training demands as fitness improves?',
    options: ['Warm-up', 'Progressive overload', 'Hydration', 'Competition'],
    answer: 'Progressive overload',
    explanation: 'Progressive overload improves fitness by increasing demands safely over time.',
  },
  {
    prompt: 'Why is pacing important in athletics?',
    options: [
      'It helps an athlete manage energy across the event',
      'It replaces the need for training',
      'It only matters in field events',
      'It guarantees a first-place finish',
    ],
    answer: 'It helps an athlete manage energy across the event',
    explanation: 'Good pacing prevents early exhaustion and supports consistent performance.',
  },
  {
    prompt: 'What is one responsibility of a leader in physical activity?',
    options: [
      'Ignoring safety checks to save time',
      'Explaining rules clearly and promoting fair play',
      'Choosing only the strongest participants',
      'Allowing unsafe behaviour during drills',
    ],
    answer: 'Explaining rules clearly and promoting fair play',
    explanation: 'Effective leaders help activities run safely, clearly, and respectfully.',
  },
  {
    prompt: 'What makes leadership in physical education inclusive?',
    options: [
      'Focusing only on winning',
      'Ensuring that learners of different abilities can participate meaningfully',
      'Allowing the same few learners to dominate',
      'Using punishment as the main motivator',
    ],
    answer: 'Ensuring that learners of different abilities can participate meaningfully',
    explanation: 'Inclusive leadership adapts and supports activities so everyone can take part.',
  },
  {
    prompt: 'Why is sustained effort important in physical activity?',
    options: [
      'Improvement happens through regular participation over time',
      'One intense session is enough for long-term fitness',
      'Effort does not affect skill development',
      'It only matters for professional athletes',
    ],
    answer: 'Improvement happens through regular participation over time',
    explanation: 'Fitness and skill develop through consistency, not occasional effort alone.',
  },
  {
    prompt: 'Which item belongs in a physical activity participation record?',
    options: ['Only your final mark', 'Type of activity and duration', 'Your favourite colour', 'Friends\' results only'],
    answer: 'Type of activity and duration',
    explanation: 'A useful record tracks what you did, for how long, and how it affected progress.',
  },
  {
    prompt: 'Which action best reflects safe practice in athletics?',
    options: [
      'Skipping warm-ups to save time',
      'Checking the field, equipment, and instructions before starting',
      'Copying advanced drills without supervision',
      'Training through pain without telling anyone',
    ],
    answer: 'Checking the field, equipment, and instructions before starting',
    explanation: 'Safe practice includes preparation, supervision, and awareness of the training environment.',
  },
  {
    prompt: 'A learner sets a goal to jog for 20 minutes three times a week for the next month. This is best described as:',
    options: ['A vague wish', 'A realistic activity goal', 'An unfair rule', 'A competition result'],
    answer: 'A realistic activity goal',
    explanation: 'The goal is specific, measurable, and achievable over a set period.',
  },
];

const PhysicalEducationTask3 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 3"
    subtitle="Athletics skills, conditioning, inclusive leadership, safe practice and sustained effort"
    learnSteps={learnSteps}
    task="gr11-physical-education-task-3-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask3;
