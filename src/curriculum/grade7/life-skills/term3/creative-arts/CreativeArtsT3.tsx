import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use heritage research to shape creative work',
    image: {
      src: '/curriculum/grade7/lsk/term3/creative-arts/diagram.webp',
      alt: 'Grade 7 learners exploring South African heritage themes with mixed-media artworks and movement',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners explore <strong>South African heritage</strong> and transform research into visual and performing
          arts. Respectful use of cultural sources is essential.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Heritage themes</p>
            <p className="text-slate-600">culture, symbols, stories, and identity</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Mixed media</p>
            <p className="text-slate-600">combine materials in one artwork</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Scene building</p>
            <p className="text-slate-600">setting, action, and purpose</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Choreography</p>
            <p className="text-slate-600">planned movement sequence</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Evaluate and polish final presentation choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners gather process evidence, evaluate effectiveness, and improve pacing, transitions, and expressive
          choices before final sharing.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Process evidence</p>
            <p className="text-slate-600">drafts, notes, and rehearsal records</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Evaluation</p>
            <p className="text-slate-600">judge strengths and next improvements</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Transitions</p>
            <p className="text-slate-600">smooth movement between sections</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Expression</p>
            <p className="text-slate-600">voice, mood, and body control</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does mixed media mean in visual art?',
    options: [
      'Combining different materials in one piece',
      'Using one pencil for the whole year',
      'Only drawing from memory',
      'Avoiding colour and texture',
    ],
    answer: 'Combining different materials in one piece',
    explanation: 'Mixed media can include paint, paper, fabric, and other materials.',
  },
  {
    prompt: 'Why research heritage before creating artwork or performance?',
    options: [
      'To represent cultural themes accurately and respectfully',
      'To copy work without understanding context',
      'To avoid planning any creative decisions',
      'To remove meaning from the final piece',
    ],
    answer: 'To represent cultural themes accurately and respectfully',
    explanation: 'Research supports informed and respectful artistic interpretation.',
  },
  {
    prompt: 'Which element is important in scene building?',
    options: [
      'A clear setting and purpose for action',
      'Random actions with no context',
      'No beginning or ending',
      'Ignoring all audience understanding',
    ],
    answer: 'A clear setting and purpose for action',
    explanation: 'Scene structure helps audiences follow the narrative.',
  },
  {
    prompt: 'What is choreography?',
    options: ['Planning and organising movement sequences', 'Painting with one colour and nothing else', 'Memorising lists of spelling words', 'Recording the scores of sports matches'],
    answer: 'Planning and organising movement sequences',
    explanation: 'Choreography arranges movement ideas into a coherent performance.',
  },
  {
    prompt: 'How should learners use cultural symbols in class projects?',
    options: [
      'With respect and understanding of meaning',
      'As decoration without any context',
      'To mock cultural practices',
      'Only if they are copied exactly from the internet',
    ],
    answer: 'With respect and understanding of meaning',
    explanation: 'Respectful cultural use avoids stereotypes and misrepresentation.',
  },
  {
    prompt: 'Which item is process evidence?',
    options: ['A rehearsal plan and draft sketches', 'Only the final mark', 'A random unrelated photo', 'A blank page with no notes'],
    answer: 'A rehearsal plan and draft sketches',
    explanation: 'Process evidence shows how ideas developed over time.',
  },
  {
    prompt: 'What makes a useful self-evaluation question?',
    options: ['Did my choices communicate the intended message?', 'Did I finish before everyone else did?', 'Did I avoid all of the feedback given?', 'Did I copy the work without any changes?'],
    answer: 'Did my choices communicate the intended message?',
    explanation: 'Evaluation should focus on effectiveness and communication.',
  },
  {
    prompt: 'How can performers polish a group piece?',
    options: [
      'Rehearse transitions and timing repeatedly',
      'Change roles during the final show unexpectedly',
      'Skip all run-throughs before assessment',
      'Ignore balance and spacing on stage',
    ],
    answer: 'Rehearse transitions and timing repeatedly',
    explanation: 'Focused rehearsal improves confidence, flow, and clarity.',
  },
];

const CreativeArtsT3 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="South African heritage, mixed media, scene building, and choreography"
    learnSteps={learnSteps}
    task="gr7-creative-arts-t3"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default CreativeArtsT3;
