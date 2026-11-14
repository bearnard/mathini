import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Warm up and move safely before activity',
    image: {
      src: '/curriculum/grade6/lsk/term1/physical-education-t1/diagram.webp',
      alt: 'Grade 6 learners doing balance and coordination activities in a physical education class',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In <strong>Physical Education</strong>, we prepare our bodies before the main activity. Warm-ups wake up
          muscles, and safe movement routines help us enjoy games without unnecessary injury.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Warm-up</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">gentle movement</span>
              <span className="rounded-full bg-white px-3 py-1">ready to exercise</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Locomotor movement</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">run</span>
              <span className="rounded-full bg-white px-3 py-1">skip</span>
              <span className="rounded-full bg-white px-3 py-1">jump</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Non-locomotor movement</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">twist</span>
              <span className="rounded-full bg-white px-3 py-1">bend</span>
              <span className="rounded-full bg-white px-3 py-1">stretch</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Safety</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">personal space</span>
              <span className="rounded-full bg-white px-3 py-1">follow instructions</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Balance and coordination give better control',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Balance</strong> helps us stay stable, while <strong>coordination</strong> helps body parts work
          together smoothly. These skills make movement sequences neater and more confident.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Balance</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">steady body</span>
              <span className="rounded-full bg-white px-3 py-1">strong posture</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Coordination</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">eyes and hands</span>
              <span className="rounded-full bg-white px-3 py-1">timing</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Sequences</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">move in order</span>
              <span className="rounded-full bg-white px-3 py-1">control</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Team routines</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">take turns</span>
              <span className="rounded-full bg-white px-3 py-1">encourage others</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Target games need aim, accuracy, and fair play',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In target games we try to send an object close to or into a target. Good players aim carefully, use the
          correct throw, and practise with patience and <strong>teamwork</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Target game</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">hit the target</span>
              <span className="rounded-full bg-white px-3 py-1">score points</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Underarm throw</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">smooth swing</span>
              <span className="rounded-full bg-white px-3 py-1">release forward</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Aim</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">eyes on target</span>
              <span className="rounded-full bg-white px-3 py-1">judge distance</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Fair play</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">follow rules</span>
              <span className="rounded-full bg-white px-3 py-1">respect others</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Why do we warm up before the main PE activity?',
    options: [
      'To get the body ready to move safely',
      'To make the lesson as noisy as possible',
      'To finish the class immediately',
      'To avoid all movement',
    ],
    answer: 'To get the body ready to move safely',
    explanation: 'Warm-ups gently prepare muscles and joints for activity.',
  },
  {
    prompt: 'Which is a locomotor movement?',
    options: ['Skipping across the court', 'Twisting on one spot', 'Stretching your arms in place', 'Balancing without moving forward'],
    answer: 'Skipping across the court',
    explanation: 'Locomotor movements travel from one place to another.',
  },
  {
    prompt: 'Which is a non-locomotor movement?',
    options: ['Bending and stretching on the spot', 'Running around the field', 'Hopping to the finish line', 'Galloping past a cone'],
    answer: 'Bending and stretching on the spot',
    explanation: 'Non-locomotor movements happen mostly in one place.',
  },
  {
    prompt: 'What helps you keep balance?',
    options: [
      'Keeping your body steady and eyes focused',
      'Closing your eyes and rushing forward',
      'Swinging wildly with no control',
      'Standing on slippery equipment',
    ],
    answer: 'Keeping your body steady and eyes focused',
    explanation: 'Balance improves when your posture is controlled and your attention is focused.',
  },
  {
    prompt: 'What does coordination mean?',
    options: [
      'Body parts working together smoothly',
      'Moving as slowly as possible all the time',
      'Playing without listening to instructions',
      'Using only one body part in every task',
    ],
    answer: 'Body parts working together smoothly',
    explanation: 'Coordination links movement, timing, and control.',
  },
  {
    prompt: 'In a target game, what is your main job?',
    options: ['Aim accurately at the target', 'Run the farthest away from the target', 'Hide the equipment from others', 'Kick every object as hard as possible'],
    answer: 'Aim accurately at the target',
    explanation: 'Target games focus on control and accuracy rather than speed alone.',
  },
  {
    prompt: 'Which PE routine is safest?',
    options: [
      'Checking your space before you start',
      'Throwing before the teacher explains',
      'Running into other groups for fun',
      'Leaving equipment in the middle of the floor',
    ],
    answer: 'Checking your space before you start',
    explanation: 'A safe space helps prevent collisions and accidents.',
  },
  {
    prompt: 'Which throw is often best for sending a beanbag to a hoop target?',
    options: ['Underarm throw', 'Header', 'Cartwheel kick', 'Backward jump'],
    answer: 'Underarm throw',
    explanation: 'An underarm throw gives gentle control for short target games.',
  },
  {
    prompt: 'What does good teamwork look like in PE?',
    options: [
      'Taking turns and encouraging others',
      'Blaming others for every mistake',
      'Ignoring the rules to win',
      'Refusing to share equipment',
    ],
    answer: 'Taking turns and encouraging others',
    explanation: 'Teamwork means respecting others and helping the whole group succeed.',
  },
];

const PhysicalEducationT1 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Practising movement, balance, coordination, and target games"
    learnSteps={learnSteps}
    task="physical-education-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PhysicalEducationT1;
