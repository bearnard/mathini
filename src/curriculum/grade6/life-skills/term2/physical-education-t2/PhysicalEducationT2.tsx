import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use passing and movement in invasion games',
    image: {
      src: '/curriculum/grade6/lsk/term2/physical-education-t2/diagram.webp',
      alt: 'learners passing a ball around cones during a small-sided invasion game',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In <strong>invasion games</strong>, teams move into open space, pass the ball, and try to
          score while defending their area. Good movement and accurate passes help the whole team.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Open space</p>
            <p className="text-slate-600">move where a teammate can find you</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Passing</p>
            <p className="text-slate-600">send the ball accurately and at the right time</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Catching</p>
            <p className="text-slate-600">watch the ball and receive it with control</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Small-sided games</p>
            <p className="text-slate-600">fewer players mean more touches and decisions</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Build agility, fitness, and teamwork with drills',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Repeated drills improve <strong>agility</strong>, coordination, and fitness. Working with a
          partner or team also builds communication and trust.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Agility</p>
            <p className="text-slate-600">change direction quickly and stay balanced</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Repeated drills</p>
            <p className="text-slate-600">practise skills again to improve control</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Teamwork</p>
            <p className="text-slate-600">support your teammates and share the ball</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <p className="font-bold text-fuchsia-700">Communication</p>
            <p className="text-slate-600">call clearly and give useful information</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Play fairly and use simple game tactics',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good players show <strong>fair play</strong> and make smart choices in mini-games. Pass into
          space, defend responsibly, and respect rules, opponents, and officials.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Fair play</p>
            <p className="text-slate-600">follow rules and respect everyone</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-bold text-orange-700">Attack</p>
            <p className="text-slate-600">move the ball quickly towards a goal or target</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <p className="font-bold text-teal-700">Defend</p>
            <p className="text-slate-600">stay between the attacker and the scoring area</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <p className="font-bold text-yellow-700">Tactics</p>
            <p className="text-slate-600">choose the best pass, space, or position</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main aim in an invasion game?',
    options: ['Move into space and try to score', 'Stand still and wait', 'Keep the ball only for yourself', 'Ignore the other team completely'],
    answer: 'Move into space and try to score',
    explanation: 'Invasion games involve attacking space while trying to score against opponents.',
  },
  {
    prompt: 'Which action helps a teammate receive a pass more easily?',
    options: ['Moving into an open space', 'Turning your back on the ball', 'Standing behind an opponent', 'Closing your eyes while waiting'],
    answer: 'Moving into an open space',
    explanation: 'Getting free in open space makes it easier for teammates to pass to you.',
  },
  {
    prompt: 'What does agility mean in Physical Education?',
    options: ['Changing direction quickly with control', 'Throwing the ball as far as possible', 'Memorising sport scores', 'Sitting still for a long time'],
    answer: 'Changing direction quickly with control',
    explanation: 'Agility is the ability to move and change direction quickly while staying balanced.',
  },
  {
    prompt: 'Which behaviour is an example of fair play?',
    options: ['Admitting the ball went out off your hand', 'Arguing about every rule', 'Tripping an opponent on purpose', 'Refusing to share the ball'],
    answer: 'Admitting the ball went out off your hand',
    explanation: 'Fair play means being honest and respecting the rules of the game.',
  },
  {
    prompt: 'Why do learners practise catching and passing drills many times?',
    options: ['To improve skill and fitness', 'To avoid moving in games', 'To make the game slower', 'To stop working with teammates'],
    answer: 'To improve skill and fitness',
    explanation: 'Repeated drills build control, confidence, and physical fitness.',
  },
  {
    prompt: 'If a defender is blocking you, what is usually the best team tactic?',
    options: ['Pass to an open teammate', 'Throw the ball away', 'Stop playing completely', 'Run into the defender'],
    answer: 'Pass to an open teammate',
    explanation: 'Good tactics use teamwork and space instead of forcing a risky move.',
  },
  {
    prompt: 'What does teamwork look like in a small-sided game?',
    options: ['Communicating and supporting others', 'Ignoring your team', 'Keeping every decision secret', 'Blaming others for every mistake'],
    answer: 'Communicating and supporting others',
    explanation: 'Teamwork improves passing, positioning, and confidence during games.',
  },
  {
    prompt: 'Which choice shows good defending?',
    options: ['Staying between the attacker and the goal', 'Running away from play', 'Watching only the crowd', 'Standing outside the game area'],
    answer: 'Staying between the attacker and the goal',
    explanation: 'A defender protects the scoring area by positioning well.',
  },
  {
    prompt: 'What is a small-sided game?',
    options: ['A game with fewer players on each team', 'A game played without any rules', 'A game where no one passes the ball', 'A game that lasts only one minute'],
    answer: 'A game with fewer players on each team',
    explanation: 'Small-sided games give each learner more chances to move, pass, and make decisions.',
  },
];

const PhysicalEducationT2 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Invasion games, agility drills, teamwork, and fair play"
    learnSteps={learnSteps}
    task="physical-education-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT2;
