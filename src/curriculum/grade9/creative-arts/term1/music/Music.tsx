import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop improvisation skills and ensemble accuracy',
    image: {
      src: '/curriculum/grade9/creative-arts/term1/music/image1.jpg',
      alt: 'Grade 9 learners improvising within structures and performing as an ensemble',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Music in Grade 9 Term 1 develops your improvisation ability. You explore simple scales or tonal patterns, improve phrasing in melodies, strengthen ensemble accuracy, and review notation. Practice responding creatively while maintaining technical control.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Improvisation in music means...',
    options: ['Creating music spontaneously within a structure', 'Reading sheet music perfectly', 'Playing the same piece always', 'Singing very loudly'],
    answer: 'Creating music spontaneously within a structure',
    explanation: 'Improvisation lets performers compose and respond creatively in real time.',
  },
  {
    prompt: 'A scale is...',
    options: ['An ordered sequence of notes', 'A measuring tool', 'A speed mark', 'A song form'],
    answer: 'An ordered sequence of notes',
    explanation: 'Scales like major and minor contain ordered pitches that form tonal foundations.',
  },
  {
    prompt: 'Phrasing in music refers to...',
    options: ['How a performer shapes and interprets a melodic line', 'The number of notes in a bar', 'Only the lyrics', 'The instrument used'],
    answer: 'How a performer shapes and interprets a melodic line',
    explanation: 'Good phrasing includes breathing, articulation, and expressive dynamics.',
  },
  {
    prompt: 'In an ensemble, why is listening to other performers important?',
    options: ['To blend and balance sound together', 'To ignore mistakes', 'To play louder than everyone', 'To distract others'],
    answer: 'To blend and balance sound together',
    explanation: 'Active listening helps ensemble members stay together and create unified sound.',
  },
  {
    prompt: 'A tonal pattern is...',
    options: ['A group of pitches organized by key', 'A silent section', 'A loud moment only', 'A rhythm error'],
    answer: 'A group of pitches organized by key',
    explanation: 'Tonal patterns consist of specific notes from a scale or mode.',
  },
  {
    prompt: 'Which marking tells a performer to gradually get faster?',
    options: ['Accelerando', 'Ritardando', 'Allegro', 'Andante'],
    answer: 'Accelerando',
    explanation: 'Accelerando indicates a gradual increase in tempo.',
  },
  {
    prompt: 'An improvisation prompt might ask you to...',
    options: ['Play notes freely within a key or chord', 'Always play quietly', 'Repeat exactly', 'Stay completely silent'],
    answer: 'Play notes freely within a key or chord',
    explanation: 'Good prompts give parameters but leave space for creative choice.',
  },
  {
    prompt: 'Technical control in performance means...',
    options: ['Playing with accuracy, confidence, and cleanliness', 'Being loud', 'Playing fast only', 'Never practicing'],
    answer: 'Playing with accuracy, confidence, and cleanliness',
    explanation: 'Control includes intonation, timing, tone quality, and rhythmic precision.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="Improvisation, scales, phrasing, ensemble accuracy, and notation review"
    learnSteps={learnSteps}
    task="gr9-music-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
