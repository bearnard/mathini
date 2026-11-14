import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Moving safely in athletics',
    image: {
      src: '/curriculum/grade6/lsk/term3/physical-education-t3/diagram.webp',
      alt: 'learners doing running and jumping activities on a school field with cones and markers',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Athletics activities such as running, jumping, and relays help learners build strength, coordination, and
          endurance. Safe movement starts with warm-ups, controlled technique, and attention to space.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Warm-up</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">raise heart rate</span>
              <span className="rounded-full bg-white px-3 py-1">prepare muscles</span>
              <span className="rounded-full bg-white px-3 py-1">prevent injury</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Running</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">steady rhythm</span>
              <span className="rounded-full bg-white px-3 py-1">forward focus</span>
              <span className="rounded-full bg-white px-3 py-1">safe spacing</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Jumping</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">bend knees</span>
              <span className="rounded-full bg-white px-3 py-1">swing arms</span>
              <span className="rounded-full bg-white px-3 py-1">soft landing</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Technique</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">control</span>
              <span className="rounded-full bg-white px-3 py-1">balance</span>
              <span className="rounded-full bg-white px-3 py-1">practice</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Relays and indigenous games need teamwork',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In relays and indigenous games, learners need to cooperate, wait for their turn, follow the rules, and
          encourage one another. Team success depends on fair play and clear communication.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Relay</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">baton pass</span>
              <span className="rounded-full bg-white px-3 py-1">take turns</span>
              <span className="rounded-full bg-white px-3 py-1">team timing</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Indigenous games</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">local heritage</span>
              <span className="rounded-full bg-white px-3 py-1">skill and fun</span>
              <span className="rounded-full bg-white px-3 py-1">shared rules</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Cooperation</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">encourage others</span>
              <span className="rounded-full bg-white px-3 py-1">communicate</span>
              <span className="rounded-full bg-white px-3 py-1">share roles</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Fair play</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">honesty</span>
              <span className="rounded-full bg-white px-3 py-1">respect rules</span>
              <span className="rounded-full bg-white px-3 py-1">sportsmanship</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Flexibility and reaction time improve performance',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Flexibility helps muscles move through a full range, while reaction time helps the body respond quickly to a
          signal. Both are important for safe, controlled movement in games and athletics.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Flexibility</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">stretch safely</span>
              <span className="rounded-full bg-white px-3 py-1">reach better</span>
              <span className="rounded-full bg-white px-3 py-1">move freely</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Reaction time</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">quick response</span>
              <span className="rounded-full bg-white px-3 py-1">listen for signals</span>
              <span className="rounded-full bg-white px-3 py-1">watch carefully</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Body control</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">balance</span>
              <span className="rounded-full bg-white px-3 py-1">coordination</span>
              <span className="rounded-full bg-white px-3 py-1">focus</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Recovery</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">cool down</span>
              <span className="rounded-full bg-white px-3 py-1">slow breathing</span>
              <span className="rounded-full bg-white px-3 py-1">gentle stretch</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Why should learners warm up before athletics activities?',
    options: [
      'To prepare the body and lower the chance of injury',
      'To make the lesson finish faster',
      'To avoid moving during the activity',
      'To stop muscles from working',
    ],
    answer: 'To prepare the body and lower the chance of injury',
    explanation: 'Warm-ups increase blood flow and help muscles get ready for movement.',
  },
  {
    prompt: 'Which action shows safe jumping technique?',
    options: [
      'Landing softly with bent knees',
      'Landing stiffly on locked legs',
      'Closing your eyes in the air',
      'Pushing another learner aside',
    ],
    answer: 'Landing softly with bent knees',
    explanation: 'Bending the knees helps absorb impact and protects the body.',
  },
  {
    prompt: 'What is important in a relay race?',
    options: [
      'Passing the baton carefully to the next runner',
      'Running in every lane at once',
      'Ignoring your teammates',
      'Starting before the teacher gives a signal',
    ],
    answer: 'Passing the baton carefully to the next runner',
    explanation: 'A smooth baton pass helps the team stay safe and keep moving well.',
  },
  {
    prompt: 'Why are indigenous games valuable in Physical Education?',
    options: [
      'They build skill while connecting learners to local heritage',
      'They only matter if no rules are used',
      'They are played to exclude some learners',
      'They replace all other movement activities forever',
    ],
    answer: 'They build skill while connecting learners to local heritage',
    explanation: 'Indigenous games can develop movement skills and celebrate cultural traditions.',
  },
  {
    prompt: 'What does flexibility help you do?',
    options: [
      'Move muscles and joints through a full range',
      'React more slowly to instructions',
      'Forget how to stretch safely',
      'Avoid all physical activity',
    ],
    answer: 'Move muscles and joints through a full range',
    explanation: 'Flexibility helps the body move freely and comfortably.',
  },
  {
    prompt: 'What is reaction time?',
    options: [
      'How quickly you respond to a signal',
      'How loudly you shout during a game',
      'How long you sit before starting',
      'How many shoes are on the field',
    ],
    answer: 'How quickly you respond to a signal',
    explanation: 'Reaction time is the speed of your response after seeing or hearing a cue.',
  },
  {
    prompt: 'Which choice shows cooperation during a team activity?',
    options: [
      'Encouraging teammates and following the plan',
      'Refusing to share a turn',
      'Changing the rules for yourself only',
      'Blaming others for every mistake',
    ],
    answer: 'Encouraging teammates and following the plan',
    explanation: 'Cooperation means helping the group and working together fairly.',
  },
  {
    prompt: 'What is fair play?',
    options: [
      'Being honest and respecting the rules',
      'Winning by cheating if nobody sees',
      'Pushing to get ahead',
      'Ignoring the referee or teacher',
    ],
    answer: 'Being honest and respecting the rules',
    explanation: 'Fair play combines honesty, respect, and good sportsmanship.',
  },
  {
    prompt: 'What should learners do after vigorous exercise?',
    options: [
      'Cool down with slower movement and gentle stretches',
      'Stop suddenly and fall to the ground',
      'Start another race immediately with no rest',
      'Throw equipment around the field',
    ],
    answer: 'Cool down with slower movement and gentle stretches',
    explanation: 'Cooling down helps the body recover safely after exercise.',
  },
];

const PhysicalEducationT3 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Using safe technique, teamwork, and control in athletics and games"
    learnSteps={learnSteps}
    task="physical-education-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PhysicalEducationT3;
