import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Lines, shapes, and colours build visual art',
    image: {
      src: '/curriculum/grade6/lsk/term1/creative-arts-t1/diagram.webp',
      alt: 'Grade 6 learners creating colourful line and shape artwork together',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In <strong>Creative Arts</strong>, artists use the elements of art to make meaning. Lines, shapes, and
          colours help us create simple <strong>2D artworks</strong> on a flat surface.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Line</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">straight</span>
              <span className="rounded-full bg-white px-3 py-1">curved</span>
              <span className="rounded-full bg-white px-3 py-1">zigzag</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Shape</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">circle</span>
              <span className="rounded-full bg-white px-3 py-1">square</span>
              <span className="rounded-full bg-white px-3 py-1">triangle</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Colour</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">bright</span>
              <span className="rounded-full bg-white px-3 py-1">calm</span>
              <span className="rounded-full bg-white px-3 py-1">contrast</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">2D artwork</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">flat picture</span>
              <span className="rounded-full bg-white px-3 py-1">drawing</span>
              <span className="rounded-full bg-white px-3 py-1">collage</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Rhythm and body percussion keep a steady beat',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Music begins with a beat we can feel and repeat. <strong>Rhythm</strong> is a pattern of sounds, and
          <strong> body percussion</strong> lets us clap, tap, stamp, and click to make that pattern together.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Rhythm</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">sound pattern</span>
              <span className="rounded-full bg-white px-3 py-1">repeat</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Steady beat</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">even pulse</span>
              <span className="rounded-full bg-white px-3 py-1">keep time</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Body percussion</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">clap</span>
              <span className="rounded-full bg-white px-3 py-1">stamp</span>
              <span className="rounded-full bg-white px-3 py-1">tap</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Echo patterns</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">listen</span>
              <span className="rounded-full bg-white px-3 py-1">copy</span>
              <span className="rounded-full bg-white px-3 py-1">stay together</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Drama games use movement and imagination',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Drama is not only about speaking. Learners can improvise short scenes, play drama games, and create
          movement phrases that show feelings, actions, and ideas in a clear way.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Drama games</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">pretend</span>
              <span className="rounded-full bg-white px-3 py-1">respond quickly</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Freeze frame</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">still picture</span>
              <span className="rounded-full bg-white px-3 py-1">show meaning</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Improvisation</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">make it up</span>
              <span className="rounded-full bg-white px-3 py-1">use imagination</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Movement phrase</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">short sequence</span>
              <span className="rounded-full bg-white px-3 py-1">planned order</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a line in visual art?',
    options: [
      'A mark that can be straight, curved, or zigzag',
      'Only a colour mixed with white',
      'A block of clay used for sculpture',
      'A sound made by a drum',
    ],
    answer: 'A mark that can be straight, curved, or zigzag',
    explanation: 'Artists use different kinds of lines to guide the eye and create patterns.',
  },
  {
    prompt: 'Which is a shape?',
    options: ['Triangle', 'Whistle', 'Melody', 'Stamping'],
    answer: 'Triangle',
    explanation: 'Shapes are flat enclosed forms such as circles, squares, and triangles.',
  },
  {
    prompt: 'How can colour help an artwork?',
    options: [
      'It can create mood and contrast',
      'It makes every artwork silent',
      'It removes all shapes from the page',
      'It is only used in sculpture',
    ],
    answer: 'It can create mood and contrast',
    explanation: 'Colour can make artwork feel bright, calm, exciting, or balanced.',
  },
  {
    prompt: 'What is a 2D artwork?',
    options: [
      'A flat artwork made on a surface',
      'A dance performed on stage',
      'A game played with a ball',
      'A song with no beat',
    ],
    answer: 'A flat artwork made on a surface',
    explanation: '2D means two-dimensional, so the artwork is flat like a drawing or collage.',
  },
  {
    prompt: 'What is rhythm in music?',
    options: [
      'A pattern of sounds and beats',
      'A colour painted in a circle',
      'A type of art paper only',
      'A rule for lining up quietly',
    ],
    answer: 'A pattern of sounds and beats',
    explanation: 'Rhythm organises long and short sounds into a pattern.',
  },
  {
    prompt: 'What is a steady beat?',
    options: [
      'An even pulse that stays regular',
      'A random sound that changes wildly',
      'A shape drawn with charcoal',
      'A rule for mixing paint',
    ],
    answer: 'An even pulse that stays regular',
    explanation: 'A steady beat helps musicians and dancers stay together.',
  },
  {
    prompt: 'Which activity uses body percussion?',
    options: ['Clapping and stamping a pattern', 'Painting a landscape quietly', 'Reading a map with a ruler', 'Throwing beanbags at cones'],
    answer: 'Clapping and stamping a pattern',
    explanation: 'Body percussion uses the body itself to make musical sounds.',
  },
  {
    prompt: 'What is a drama game?',
    options: [
      'A short acting activity that uses imagination',
      'A written test about grammar rules',
      'A maths puzzle with fractions',
      'A PE relay race around the field',
    ],
    answer: 'A short acting activity that uses imagination',
    explanation: 'Drama games help learners explore ideas, feelings, and characters in playful ways.',
  },
  {
    prompt: 'What is a movement phrase?',
    options: [
      'A short sequence of planned movements',
      'A colour chart for mixing paint',
      'A single loud drum beat only',
      'A poster that explains school rules',
    ],
    answer: 'A short sequence of planned movements',
    explanation: 'A movement phrase links actions together in a clear order.',
  },
];

const CreativeArtsT1 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Exploring visual art, rhythm, body percussion, and drama"
    learnSteps={learnSteps}
    task="creative-arts-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeArtsT1;
