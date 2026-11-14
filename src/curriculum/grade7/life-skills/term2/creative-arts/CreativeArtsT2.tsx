import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Design with message, mood, and audience in mind',
    image: {
      src: '/curriculum/grade7/lsk/term2/creative-arts/diagram.webp',
      alt: 'Grade 7 learners planning a themed poster and rehearsing movement motifs',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Creative Arts in Term 2 links visual design and performance. Learners plan a clear message for a
          <strong> target audience</strong> through poster layout, symbols, and colour choices.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Poster design</p>
            <p className="text-slate-600">arrange elements for clear impact</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Characterisation</p>
            <p className="text-slate-600">show character through voice and movement</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Song structure</p>
            <p className="text-slate-600">verse, chorus, and repetition</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Movement motif</p>
            <p className="text-slate-600">a movement idea that repeats</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use critique to improve impact',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Performance and design improve when learners test ideas, gather peer feedback, and refine what the audience
          sees, hears, and understands.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Design brief</p>
            <p className="text-slate-600">purpose, audience, and key message</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Mood</p>
            <p className="text-slate-600">feeling created by artistic choices</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Peer critique</p>
            <p className="text-slate-600">specific, respectful suggestions</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Revision</p>
            <p className="text-slate-600">adjust and polish the final piece</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What should you decide first when planning a poster?',
    options: ['The message and the target audience', 'The size of the paper and nothing else', 'Which desk you will sit at to work', 'How quickly you can finish the poster'],
    answer: 'The message and the target audience',
    explanation: 'Clear purpose and audience guide all design choices.',
  },
  {
    prompt: 'Which design choice can improve readability?',
    options: [
      'Strong contrast between key elements',
      'Using the same tone everywhere',
      'Crowding every space with detail',
      'Making all elements identical in size',
    ],
    answer: 'Strong contrast between key elements',
    explanation: 'Contrast helps viewers notice important information quickly.',
  },
  {
    prompt: 'What is characterisation in performance?',
    options: ['Showing who a character is through actions and voice', 'Standing still with no expression at all', 'Ignoring the context of the story completely', 'Using one tone of voice for every role'],
    answer: 'Showing who a character is through actions and voice',
    explanation: 'Characterisation makes characters believable to the audience.',
  },
  {
    prompt: 'Which option describes song structure?',
    options: ['How verses and chorus are organised', 'The colour of stage lights', 'The number of chairs in class', 'A list of sports rules'],
    answer: 'How verses and chorus are organised',
    explanation: 'Song structure arranges sections so the music feels coherent.',
  },
  {
    prompt: 'What is a movement motif?',
    options: [
      'A repeated movement idea in choreography',
      'A random warm-up stretch only',
      'A spoken paragraph in a script',
      'A drawing tool for shading',
    ],
    answer: 'A repeated movement idea in choreography',
    explanation: 'Motifs create unity and recognisable patterns in movement pieces.',
  },
  {
    prompt: 'How can performers adapt for a younger audience?',
    options: [
      'Use clearer gestures and simpler language',
      'Use very fast speech with no pauses',
      'Remove all emotional expression',
      'Ignore whether the message is understood',
    ],
    answer: 'Use clearer gestures and simpler language',
    explanation: 'Audience awareness improves communication and engagement.',
  },
  {
    prompt: 'Which comment is a constructive peer critique?',
    options: ['Your message is clear; raise the volume in the chorus', 'This is boring and useless to everyone', 'No one should ever try this again', 'Only the costumes matter in every task'],
    answer: 'Your message is clear; raise the volume in the chorus',
    explanation: 'Constructive critique identifies strengths and practical improvements.',
  },
  {
    prompt: 'Why is revision important in Creative Arts?',
    options: [
      'It improves clarity and impact before final presentation',
      'It removes the need for rehearsal',
      'It guarantees perfect marks without effort',
      'It means feedback should be ignored',
    ],
    answer: 'It improves clarity and impact before final presentation',
    explanation: 'Revision helps learners refine artistic and communication choices.',
  },
];

const CreativeArtsT2 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Poster design, characterisation, song structure, and movement motifs"
    learnSteps={learnSteps}
    task="gr7-creative-arts-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default CreativeArtsT2;
