import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'Improvisation in music means...',
    options: ['Creating music on the spot within a set structure', 'Playing a written piece perfectly from the score', 'Playing one piece in the same way each time', 'Singing as loudly as you can for the audience'],
    answer: 'Creating music on the spot within a set structure',
    explanation: 'Improvisation lets performers compose and respond creatively in real time.',
  },
  {
    prompt: 'A scale is...',
    options: ['An ordered sequence of notes', 'A tool used to weigh and measure sounds', 'A mark that tells the player the speed', 'The form or layout of a song'],
    answer: 'An ordered sequence of notes',
    explanation: 'Scales like major and minor contain ordered pitches that form tonal foundations.',
  },
  {
    prompt: 'Phrasing in music refers to...',
    options: ['How a player shapes and interprets a line of melody', 'The number of notes that fit into a single bar', 'The words that are sung to the melody', 'The instrument that is chosen to play the melody'],
    answer: 'How a player shapes and interprets a line of melody',
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
    options: ['A group of pitches built around one key', 'A silent section between two parts of a piece', 'A loud passage near the end of a piece', 'A mistake made when counting the rhythm'],
    answer: 'A group of pitches built around one key',
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
    options: ['Play notes freely within a key or chord', 'Play very softly from the first note to the last', 'Repeat the written part in exactly the same way', 'Stay completely silent during the solo section'],
    answer: 'Play notes freely within a key or chord',
    explanation: 'Good prompts give parameters but leave space for creative choice.',
  },
  {
    prompt: 'Technical control in performance means...',
    options: ['Playing accurately, with confidence and clean sound', 'Playing as loudly as possible in a hall', 'Playing as fast as possible to impress', 'Performing without any practice beforehand'],
    answer: 'Playing accurately, with confidence and clean sound',
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
