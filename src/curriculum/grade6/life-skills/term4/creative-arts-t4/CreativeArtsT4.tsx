import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan before you build in 3D',
    image: {
      src: '/curriculum/grade6/lsk/term4/creative-arts-t4/diagram.webp',
      alt: 'generic learners sketching a model and preparing for a dance-drama presentation',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Strong <strong>3D construction</strong> begins with a simple plan. Learners sketch ideas, choose materials,
          and think about shape, <strong>texture</strong>, and how to keep the model or sculpture stable.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-pink-50 p-4 text-left">
            <strong className="text-pink-800">Design plan</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-pink-700">
              <span className="rounded-full bg-white px-3 py-1">sketch</span>
              <span className="rounded-full bg-white px-3 py-1">idea</span>
              <span className="rounded-full bg-white px-3 py-1">materials</span>
            </div>
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Form</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">height</span>
              <span className="rounded-full bg-white px-3 py-1">width</span>
              <span className="rounded-full bg-white px-3 py-1">shape</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Texture</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">smooth</span>
              <span className="rounded-full bg-white px-3 py-1">rough</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Stability</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">wide base</span>
              <span className="rounded-full bg-white px-3 py-1">balanced parts</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Build, test, and improve your construction',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          When building a model or sculpture, learners cut, fold, join, and shape materials carefully.
          They test whether the work stands well and make changes if parts feel loose or unbalanced.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Joining</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">glue</span>
              <span className="rounded-full bg-white px-3 py-1">tape</span>
              <span className="rounded-full bg-white px-3 py-1">tabs</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Materials</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">cardboard</span>
              <span className="rounded-full bg-white px-3 py-1">clay</span>
              <span className="rounded-full bg-white px-3 py-1">recycled items</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Check</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">does it stand?</span>
              <span className="rounded-full bg-white px-3 py-1">does it match the plan?</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Improve</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">strengthen weak parts</span>
              <span className="rounded-full bg-white px-3 py-1">refine details</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use movement and drama in a final presentation',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Dance-drama integration</strong> combines movement, expression, and simple storytelling.
          Rehearsal, teamwork, and feedback help learners prepare a confident end-of-year showcase or portfolio.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Movement</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">space</span>
              <span className="rounded-full bg-white px-3 py-1">timing</span>
              <span className="rounded-full bg-white px-3 py-1">levels</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Drama</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">facial expression</span>
              <span className="rounded-full bg-white px-3 py-1">character</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Rehearsal</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">practise together</span>
              <span className="rounded-full bg-white px-3 py-1">fix timing</span>
            </div>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <strong className="text-yellow-800">Portfolio</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-yellow-700">
              <span className="rounded-full bg-white px-3 py-1">sketches</span>
              <span className="rounded-full bg-white px-3 py-1">photos</span>
              <span className="rounded-full bg-white px-3 py-1">feedback notes</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a good first step before building a 3D model?',
    options: [
      'Make a simple design plan or sketch',
      'Throw random materials together',
      'Ignore the purpose of the task',
      'Paint before deciding what to build',
    ],
    answer: 'Make a simple design plan or sketch',
    explanation: 'A design plan helps learners organise ideas, materials, and steps before they start building.',
  },
  {
    prompt: 'Which materials are useful for a simple 3D construction task?',
    options: [
      'Cardboard, glue, and recycled containers',
      'Only water and sunlight',
      'Loose sand with no support',
      'Air with nothing to join it',
    ],
    answer: 'Cardboard, glue, and recycled containers',
    explanation: 'Cardboard and recycled materials are practical for building stable school art models.',
  },
  {
    prompt: 'What helps a sculpture or model stay stable?',
    options: [
      'A balanced structure with a firm base',
      'One tiny point holding all the weight',
      'Parts hanging loosely with no support',
      'Ignoring whether it falls over',
    ],
    answer: 'A balanced structure with a firm base',
    explanation: 'Stable artworks usually need a base and carefully balanced parts.',
  },
  {
    prompt: 'What does texture describe in art?',
    options: [
      'How a surface looks or feels, such as rough or smooth',
      'How quickly a runner finishes a race',
      'How long a speech lasts',
      'How many learners are absent',
    ],
    answer: 'How a surface looks or feels, such as rough or smooth',
    explanation: 'Texture is an art element that describes the quality of a surface.',
  },
  {
    prompt: 'What does dance-drama integration mean?',
    options: [
      'Using movement and acting together to show an idea or story',
      'Only standing still on stage',
      'Building a model without any performance',
      'Reading marks aloud without expression',
    ],
    answer: 'Using movement and acting together to show an idea or story',
    explanation: 'Dance-drama combines body movement, expression, and performance to communicate meaning.',
  },
  {
    prompt: 'Why is rehearsal important before a final presentation?',
    options: [
      'It improves timing, confidence, and teamwork',
      'It guarantees mistakes will be hidden forever',
      'It means learners do not need a plan',
      'It replaces all feedback from others',
    ],
    answer: 'It improves timing, confidence, and teamwork',
    explanation: 'Rehearsal gives learners time to practise, refine ideas, and work together more smoothly.',
  },
  {
    prompt: 'Which example is helpful peer feedback?',
    options: [
      'Speak a little louder and hold the final pose longer',
      'Your work is bad and should be thrown away',
      'Do not change anything because practice never helps',
      'Ignore the audience completely',
    ],
    answer: 'Speak a little louder and hold the final pose longer',
    explanation: 'Helpful peer feedback is kind, specific, and gives a clear suggestion for improvement.',
  },
  {
    prompt: 'What could go into a Creative Arts portfolio?',
    options: [
      'Sketches, photos of work, and feedback notes',
      'Only a lunch menu from home',
      'A random sports score with no art evidence',
      'Nothing at all from the project',
    ],
    answer: 'Sketches, photos of work, and feedback notes',
    explanation: 'A portfolio collects evidence of planning, making, presenting, and reflecting.',
  },
  {
    prompt: 'What is most important in a final integrated performance?',
    options: [
      'Communicating the idea clearly with confident teamwork',
      'Seeing who can move the fastest only',
      'Using the most expensive material possible',
      'Finishing without listening to anyone else',
    ],
    answer: 'Communicating the idea clearly with confident teamwork',
    explanation: 'A strong presentation shares meaning clearly and shows that performers have prepared together.',
  },
];

const CreativeArtsT4 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Planning, making, and presenting 3D and performance work"
    learnSteps={learnSteps}
    task="creative-arts-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeArtsT4;
