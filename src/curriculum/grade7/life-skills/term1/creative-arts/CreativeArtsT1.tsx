import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Observe closely and create with texture',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Creative Arts, <strong>observational drawing</strong> means drawing what you really see. Learners also use
          line, shading, and texture to add detail and depth.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Observation</p>
            <p className="text-slate-600">notice proportion and shape</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Texture</p>
            <p className="text-slate-600">show rough, smooth, or layered surfaces</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Rhythm patterns</p>
            <p className="text-slate-600">repeat beats in organised sequences</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Ensemble voice</p>
            <p className="text-slate-600">perform together with timing and balance</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Structure short improvisations clearly',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Improvisation is creating in the moment. Strong improvisations still need structure, such as a beginning,
          middle, and ending, so the audience can follow the story.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Cue</p>
            <p className="text-slate-600">a signal to begin or change</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Character</p>
            <p className="text-slate-600">voice and movement choices</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Timing</p>
            <p className="text-slate-600">stay with the ensemble beat</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Reflection</p>
            <p className="text-slate-600">evaluate what worked and what to improve</p>
          </div>
        </div>
      <div className="space-y-2">
  <p className="text-slate-600">{"Musicians and dancers stay together by agreeing on a start signal, such as a nod or a clap, and by counting the beat quietly in their heads while they perform."}</p>
</div>
</div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is observational drawing?',
    options: [
      'Drawing by carefully looking at a real subject',
      'Copying random marks without looking',
      'Drawing only from memory every time',
      'Colouring without planning shape',
    ],
    answer: 'Drawing by carefully looking at a real subject',
    explanation: 'Observation improves accuracy in proportion, line, and detail.',
  },
  {
    prompt: 'Which method can add texture to an artwork?',
    options: ['Layering lines and marks to show surface quality', 'Erasing the whole drawing repeatedly', 'Using only one flat outline', 'Avoiding any detail in the image'],
    answer: 'Layering lines and marks to show surface quality',
    explanation: 'Texture can be suggested through varied lines, shading, and patterns.',
  },
  {
    prompt: 'What is a rhythm pattern in music or movement?',
    options: ['A repeated sequence of beats', 'A random loud sound', 'A colour chart for painting', 'A sports team formation'],
    answer: 'A repeated sequence of beats',
    explanation: 'Rhythm patterns organise beats so performers can stay together.',
  },
  {
    prompt: 'What does ensemble voice require?',
    options: [
      'Matching timing and listening to others',
      'Everyone shouting at different speeds',
      'One person speaking while others stop',
      'Ignoring all cue signals',
    ],
    answer: 'Matching timing and listening to others',
    explanation: 'Ensemble work depends on balance, listening, and coordination.',
  },
  {
    prompt: 'What is improvisation?',
    options: ['Creating performance ideas in the moment', 'Memorising only one fixed script forever', 'Reading silently with no expression', 'Repeating one move without change'],
    answer: 'Creating performance ideas in the moment',
    explanation: 'Improvisation uses spontaneous ideas while applying performance skills.',
  },
  {
    prompt: 'Which structure makes a short scene clearer?',
    options: ['Beginning, middle, and ending', 'Only an ending with no setup', 'Random actions with no link', 'One line repeated for five minutes'],
    answer: 'Beginning, middle, and ending',
    explanation: 'Clear structure helps audiences understand what happens in the scene.',
  },
  {
    prompt: 'How can a group keep steady timing?',
    options: ['Follow shared cues and count beats together', 'Rush through every section on your own', 'Ignore the lead performer in the group', 'Change the tempo without any agreement'],
    answer: 'Follow shared cues and count beats together',
    explanation: 'Shared counting and cues keep rhythm and movement aligned.',
  },
  {
    prompt: 'Which feedback is most useful after an improvisation task?',
    options: ['Your scene had clear characters; improve transitions', 'Everything was bad and pointless to watch', 'No comment is ever needed on a scene', 'Only the costume matters in an improvisation'],
    answer: 'Your scene had clear characters; improve transitions',
    explanation: 'Constructive feedback identifies strengths and realistic next steps.',
  },
];

const CreativeArtsT1 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Observational drawing, texture, rhythm, ensemble voice, and improvisation"
    learnSteps={learnSteps}
    task="gr7-creative-arts-t1"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default CreativeArtsT1;
