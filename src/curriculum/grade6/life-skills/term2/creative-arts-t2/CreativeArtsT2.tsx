import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explore texture, pattern, and printmaking',
    image: {
      src: '/curriculum/grade6/lsk/term2/creative-arts-t2/diagram.webp',
      alt: 'learner making colourful prints and textured collage shapes on paper',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In <strong>Creative Arts</strong>, learners experiment with materials and designs.
          <strong> Texture</strong>, <strong>pattern</strong>, and <strong>printmaking</strong> help artists
          create interesting artworks with repeated shapes and varied surfaces.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Texture</p>
            <p className="text-slate-600">how a surface feels or looks</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Pattern</p>
            <p className="text-slate-600">a design that repeats in a planned way</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Printmaking</p>
            <p className="text-slate-600">pressing ink or paint to make repeated images</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Collage</p>
            <p className="text-slate-600">combining cut or torn pieces into one artwork</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Tell stories with puppets, voice, and movement',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Creative Arts also includes performance. Short stories can be shared through
          <strong> puppetry</strong>, expressive voices, and body movement that shows character and action.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Story sequence</p>
            <p className="text-slate-600">beginning, middle, and end</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Puppetry</p>
            <p className="text-slate-600">use puppets to bring characters to life</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Voice</p>
            <p className="text-slate-600">change tone and volume to show feeling</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <p className="font-bold text-fuchsia-700">Movement</p>
            <p className="text-slate-600">actions help the audience follow the story</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Keep rhythm patterns and prepare a performance',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          A strong performance uses practice and timing. Learners rehearse, repeat
          <strong> rhythm patterns</strong>, and improve their artwork or storytelling before presenting.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Rhythm</p>
            <p className="text-slate-600">a repeated pattern of beats or sounds</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-bold text-orange-700">Rehearsal</p>
            <p className="text-slate-600">practise so the performance becomes smooth</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <p className="font-bold text-teal-700">Presentation</p>
            <p className="text-slate-600">share artwork or a story clearly and proudly</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <p className="font-bold text-yellow-700">Reflection</p>
            <p className="text-slate-600">notice what worked and what can improve</p>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does texture describe in an artwork?',
    options: ['How a surface feels or looks', 'How many pages a book has', 'How loudly someone sings', 'How fast a runner moves'],
    answer: 'How a surface feels or looks',
    explanation: 'Texture is the rough, smooth, bumpy, or soft look and feel of a surface.',
  },
  {
    prompt: 'What is a pattern?',
    options: ['A design that repeats', 'A colour mixed with water only', 'A single line with no change', 'A story told once and forgotten'],
    answer: 'A design that repeats',
    explanation: 'Patterns repeat shapes, colours, lines, or sounds in an organised way.',
  },
  {
    prompt: 'Which activity is an example of printmaking?',
    options: ['Pressing a painted shape onto paper many times', 'Drawing only with an eraser', 'Reading a story silently', 'Cutting grass on the field'],
    answer: 'Pressing a painted shape onto paper many times',
    explanation: 'Printmaking uses a stamp, block, or other surface to repeat an image.',
  },
  {
    prompt: 'What is a collage?',
    options: ['An artwork made by joining different pieces', 'A dance done without music', 'A ball game played outdoors', 'A poem with only one word'],
    answer: 'An artwork made by joining different pieces',
    explanation: 'Collage combines papers, fabrics, or other materials into one composition.',
  },
  {
    prompt: 'Which order helps tell a clear story in a puppet show?',
    options: ['Beginning, middle, and end', 'End, middle, and beginning only', 'Only one long ending', 'Random actions with no sequence'],
    answer: 'Beginning, middle, and end',
    explanation: 'A clear sequence helps the audience understand what happens in the story.',
  },
  {
    prompt: 'What is a rhythm pattern?',
    options: ['A repeated sequence of beats or sounds', 'A type of paintbrush', 'A shape cut from cardboard', 'A way to sharpen a pencil'],
    answer: 'A repeated sequence of beats or sounds',
    explanation: 'Rhythm patterns organise beats so that listeners can hear repetition.',
  },
  {
    prompt: 'How can a performer show that two puppets are different characters?',
    options: ['Use different voices and movements', 'Keep every voice exactly the same', 'Hide both puppets behind the table', 'Stop the story after one line'],
    answer: 'Use different voices and movements',
    explanation: 'Changes in voice and movement help the audience recognise different characters.',
  },
  {
    prompt: 'Why is rehearsal important before a presentation?',
    options: ['It helps the performance become smoother', 'It removes the need for any planning', 'It makes the audience leave early', 'It means you cannot improve anything'],
    answer: 'It helps the performance become smoother',
    explanation: 'Rehearsal gives learners a chance to practise and improve timing and confidence.',
  },
  {
    prompt: 'Which choice best fits Creative Arts in this term?',
    options: ['Making prints and telling a short story with puppets', 'Memorising only multiplication tables', 'Writing a science test about magnets', 'Training for a relay race only'],
    answer: 'Making prints and telling a short story with puppets',
    explanation: 'This term combines visual art techniques with storytelling and performance.',
  },
];

const CreativeArtsT2 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Texture, pattern, printmaking, storytelling, puppetry, and rhythm"
    learnSteps={learnSteps}
    task="creative-arts-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeArtsT2;
