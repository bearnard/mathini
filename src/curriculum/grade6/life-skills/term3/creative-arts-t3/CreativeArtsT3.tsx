import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'South African cultural art tells stories',
    image: {
      src: '/curriculum/grade6/lsk/term3/creative-arts-t3/diagram.webp',
      alt: 'learners creating colourful South African inspired artworks and preparing a short group performance',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Creative Arts learners explore how South African cultures express ideas through pattern, colour, song,
          movement, and storytelling. Art can celebrate heritage while also showing personal creativity.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Cultural art</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">heritage</span>
              <span className="rounded-full bg-white px-3 py-1">symbols</span>
              <span className="rounded-full bg-white px-3 py-1">meaning</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Observation</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">look closely</span>
              <span className="rounded-full bg-white px-3 py-1">notice pattern</span>
              <span className="rounded-full bg-white px-3 py-1">see colour choices</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Respect</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">learn context</span>
              <span className="rounded-full bg-white px-3 py-1">value traditions</span>
              <span className="rounded-full bg-white px-3 py-1">avoid mockery</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Expression</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">share ideas</span>
              <span className="rounded-full bg-white px-3 py-1">show feeling</span>
              <span className="rounded-full bg-white px-3 py-1">tell a story</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Mixed media combines materials and techniques',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Mixed media</strong> artworks use more than one material, such as paint, crayon, collage paper,
          pencil, fabric, or found objects. Learners choose materials that help communicate texture, colour, and mood.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Materials</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">paint</span>
              <span className="rounded-full bg-white px-3 py-1">paper</span>
              <span className="rounded-full bg-white px-3 py-1">fabric</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Texture</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">smooth</span>
              <span className="rounded-full bg-white px-3 py-1">rough</span>
              <span className="rounded-full bg-white px-3 py-1">layered</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Composition</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">arrangement</span>
              <span className="rounded-full bg-white px-3 py-1">balance</span>
              <span className="rounded-full bg-white px-3 py-1">focus point</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Creative choices</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">colour</span>
              <span className="rounded-full bg-white px-3 py-1">shape</span>
              <span className="rounded-full bg-white px-3 py-1">pattern</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choral verse, singing, and movement work together',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Creative Arts also includes performance. Learners rehearse choral verse, songs, rhythm, and movement so the
          group can present a short piece with confidence, timing, and expression.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Choral verse</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">speak together</span>
              <span className="rounded-full bg-white px-3 py-1">clear diction</span>
              <span className="rounded-full bg-white px-3 py-1">shared rhythm</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Singing</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">pitch</span>
              <span className="rounded-full bg-white px-3 py-1">breathing</span>
              <span className="rounded-full bg-white px-3 py-1">blend</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Movement</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">body shapes</span>
              <span className="rounded-full bg-white px-3 py-1">timing</span>
              <span className="rounded-full bg-white px-3 py-1">space awareness</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Rehearsal</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">practise again</span>
              <span className="rounded-full bg-white px-3 py-1">improve timing</span>
              <span className="rounded-full bg-white px-3 py-1">build confidence</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is one purpose of South African cultural art?',
    options: [
      'To express heritage, ideas, and stories',
      'To copy another person’s work exactly every time',
      'To remove all meaning from an artwork',
      'To avoid learning about communities',
    ],
    answer: 'To express heritage, ideas, and stories',
    explanation: 'Cultural art often shares traditions, values, identity, and lived experience.',
  },
  {
    prompt: 'Which action shows respect when learning about cultural artworks?',
    options: [
      'Finding out what the symbols and traditions mean',
      'Mocking the style because it is different',
      'Pretending all cultures are exactly the same',
      'Ignoring the history behind the art',
    ],
    answer: 'Finding out what the symbols and traditions mean',
    explanation: 'Respect includes learning the context and treating cultural forms with care.',
  },
  {
    prompt: 'What does mixed media mean?',
    options: [
      'Using more than one material in one artwork',
      'Painting with only one colour',
      'Making art without any planning',
      'Singing while no materials are used',
    ],
    answer: 'Using more than one material in one artwork',
    explanation: 'Mixed media combines different materials like paint, collage, pencil, or fabric.',
  },
  {
    prompt: 'Which set shows mixed media materials?',
    options: [
      'Paint, collage paper, and fabric',
      'Only one pencil and nothing else',
      'Silence, stillness, and shadows',
      'Whistles, scorecards, and cones',
    ],
    answer: 'Paint, collage paper, and fabric',
    explanation: 'These are different art materials that can be combined in one artwork.',
  },
  {
    prompt: 'Why might an artist layer rough and smooth materials together?',
    options: [
      'To create texture and visual interest',
      'To make the artwork impossible to see',
      'To remove all colour from the page',
      'To stop people from thinking about meaning',
    ],
    answer: 'To create texture and visual interest',
    explanation: 'Different materials can add texture and help the artwork feel more expressive.',
  },
  {
    prompt: 'What is choral verse?',
    options: [
      'A group speaking lines together with rhythm and expression',
      'A race where learners pass a baton',
      'A drawing made only with chalk',
      'A private speech spoken by one person only',
    ],
    answer: 'A group speaking lines together with rhythm and expression',
    explanation: 'Choral verse is a spoken group performance that relies on timing and clear voice work.',
  },
  {
    prompt: 'What helps a group performance sound strong?',
    options: [
      'Listening to one another and keeping good timing',
      'Everyone singing at random speeds',
      'Ignoring the conductor or leader',
      'Turning away from the audience the whole time',
    ],
    answer: 'Listening to one another and keeping good timing',
    explanation: 'Ensemble work depends on shared rhythm, listening, and coordination.',
  },
  {
    prompt: 'Why do learners rehearse before a Creative Arts performance?',
    options: [
      'To improve confidence, timing, and expression',
      'To avoid learning the piece',
      'To make the performance shorter than planned',
      'To forget the words and movements',
    ],
    answer: 'To improve confidence, timing, and expression',
    explanation: 'Rehearsal gives the group a chance to practise and improve together.',
  },
  {
    prompt: 'How can movement add meaning to a song or spoken piece?',
    options: [
      'It can show mood, rhythm, and important ideas',
      'It should always be unrelated to the performance',
      'It only matters if learners stay frozen',
      'It removes the need to practise',
    ],
    answer: 'It can show mood, rhythm, and important ideas',
    explanation: 'Movement supports the message of a performance and helps the audience understand it.',
  },
];

const CreativeArtsT3 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Creating cultural artworks and rehearsing expressive group performance"
    learnSteps={learnSteps}
    task="creative-arts-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeArtsT3;
