import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Team games combine skills and fair play',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In <strong>team games</strong>, learners use movement skills together. Passing, receiving, moving into space,
          and following rules all matter, but so do <strong>fair play</strong> and encouragement.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Movement</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">run</span>
              <span className="rounded-full bg-white px-3 py-1">change direction</span>
              <span className="rounded-full bg-white px-3 py-1">balance</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Ball skills</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">pass</span>
              <span className="rounded-full bg-white px-3 py-1">catch</span>
              <span className="rounded-full bg-white px-3 py-1">control</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Fair play</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">follow rules</span>
              <span className="rounded-full bg-white px-3 py-1">respect others</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Teamwork</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">communicate</span>
              <span className="rounded-full bg-white px-3 py-1">encourage</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Fitness circuits review strength, speed, and coordination',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          A <strong>fitness circuit</strong> uses stations to practise different skills. One station may build strength,
          another may build stamina, and another may improve <strong>coordination</strong> or balance.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Warm-up</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">prepare muscles</span>
              <span className="rounded-full bg-white px-3 py-1">increase heartbeat</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Stations</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">different exercises</span>
              <span className="rounded-full bg-white px-3 py-1">take turns</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Coordination</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">timing</span>
              <span className="rounded-full bg-white px-3 py-1">control</span>
              <span className="rounded-full bg-white px-3 py-1">rhythm</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Cool-down</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">slow down</span>
              <span className="rounded-full bg-white px-3 py-1">stretch safely</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Recreation and health go together',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Recreation</strong> includes enjoyable physical activity that supports health. Learners can review how
          they participated, notice what went well, and set a simple goal for their next PE lesson.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Health</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">strong heart</span>
              <span className="rounded-full bg-white px-3 py-1">more energy</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Safety</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">drink water</span>
              <span className="rounded-full bg-white px-3 py-1">report pain</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Self-assessment</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">what improved</span>
              <span className="rounded-full bg-white px-3 py-1">what to practise</span>
            </div>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <strong className="text-yellow-800">Participation</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-yellow-700">
              <span className="rounded-full bg-white px-3 py-1">join in</span>
              <span className="rounded-full bg-white px-3 py-1">try your best</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which action shows good teamwork in a game?',
    options: [
      'Passing to a teammate in a better position',
      'Keeping the ball and ignoring everyone',
      'Changing the rules to help yourself',
      'Pushing another player out of the way',
    ],
    answer: 'Passing to a teammate in a better position',
    explanation: 'Team games work best when players share, communicate, and make choices that help the whole team.',
  },
  {
    prompt: 'What does fair play mean?',
    options: [
      'Following the rules and respecting others',
      'Winning by arguing with the referee',
      'Only helping your best friend',
      'Stopping play whenever you are losing',
    ],
    answer: 'Following the rules and respecting others',
    explanation: 'Fair play means being honest, respectful, and safe during games and activities.',
  },
  {
    prompt: 'What is a fitness circuit?',
    options: [
      'A set of exercise stations done one after another',
      'A map of the school buildings',
      'A list of team names for a tournament',
      'A song played before a match',
    ],
    answer: 'A set of exercise stations done one after another',
    explanation: 'In a circuit, learners move through stations that practise different fitness skills.',
  },
  {
    prompt: 'Which activity is most likely to improve coordination?',
    options: [
      'Jumping rope with steady rhythm',
      'Sleeping through the lesson',
      'Leaving your shoes untied',
      'Sitting out every activity',
    ],
    answer: 'Jumping rope with steady rhythm',
    explanation: 'Coordination improves when learners control movement, timing, and rhythm together.',
  },
  {
    prompt: 'Why do learners warm up before vigorous exercise?',
    options: [
      'To prepare the body for movement safely',
      'To make the lesson last longer',
      'To avoid following instructions',
      'To replace all exercise with talking',
    ],
    answer: 'To prepare the body for movement safely',
    explanation: 'A warm-up gets muscles and the heart ready for activity and helps reduce injury risk.',
  },
  {
    prompt: 'What should you do if you feel dizzy or sore during PE?',
    options: [
      'Tell the teacher and stop to recover safely',
      'Hide it and keep pushing through pain',
      'Push another learner instead',
      'Run faster without telling anyone',
    ],
    answer: 'Tell the teacher and stop to recover safely',
    explanation: 'Safety matters in PE, so learners should report pain or dizziness straight away.',
  },
  {
    prompt: 'How does regular physical activity help health?',
    options: [
      'It helps build fitness and gives the body more energy',
      'It removes the need for rest and water',
      'It means rules no longer matter',
      'It makes teamwork impossible',
    ],
    answer: 'It helps build fitness and gives the body more energy',
    explanation: 'Regular activity supports strength, stamina, and general well-being.',
  },
  {
    prompt: 'What is self-assessment after a PE lesson?',
    options: [
      'Thinking about how you participated and what to improve',
      'Choosing a new team name every minute',
      'Counting only how many learners were absent',
      'Forgetting everything that happened',
    ],
    answer: 'Thinking about how you participated and what to improve',
    explanation: 'Self-assessment helps learners notice progress and set useful goals.',
  },
  {
    prompt: 'Which action shows good communication in a team game?',
    options: [
      'Calling a teammate\'s name before a pass',
      'Turning your back on the team',
      'Refusing to listen to instructions',
      'Walking off the field without warning',
    ],
    answer: 'Calling a teammate\'s name before a pass',
    explanation: 'Clear communication helps teammates work together and make good decisions during play.',
  },
];

const PhysicalEducationT4 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Combining movement skills, fitness, and healthy participation"
    learnSteps={learnSteps}
    task="physical-education-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PhysicalEducationT4;
