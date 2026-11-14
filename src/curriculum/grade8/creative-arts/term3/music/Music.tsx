import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Compose short ideas using form and ostinato',
    image: {
      src: '/curriculum/grade8/ca/term3/music/diagram.webp',
      alt: 'Grade 8 learners composing patterns in binary and ternary musical form',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Term 3 music, learners identify binary and ternary form, compose simple motifs, and use ostinato
          patterns. Listening analysis supports decisions about structure and expression.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Binary form is usually shown as...',
    options: ['AB', 'ABA', 'AAAA', 'ABCBA'],
    answer: 'AB',
    explanation: 'Binary form has two contrasting sections, A then B.',
  },
  {
    prompt: 'Ternary form is usually shown as...',
    options: ['ABA', 'AB', 'AABB', 'ABCD'],
    answer: 'ABA',
    explanation: 'Ternary form returns to section A after section B.',
  },
  {
    prompt: 'An ostinato is...',
    options: ['A repeated rhythmic or melodic pattern', 'A very loud chord at the end of a piece', 'A set of notes with no pattern to them', 'A movement that is done on the stage'],
    answer: 'A repeated rhythmic or melodic pattern',
    explanation: 'Ostinatos repeat to provide structure and unity.',
  },
  {
    prompt: 'A useful first step in composition is to...',
    options: ['Create a short motif', 'Play without any beat', 'Avoid listening to examples', 'Write only performance marks'],
    answer: 'Create a short motif',
    explanation: 'A clear motif gives a starting point for development.',
  },
  {
    prompt: 'Listening analysis helps learners to...',
    options: ['Identify form and structure in examples', 'Ignore the changes between sections', 'Avoid any reflection on the music', 'Take the place of the rehearsal time'],
    answer: 'Identify form and structure in examples',
    explanation: 'Analysing recordings improves recognition of musical form.',
  },
  {
    prompt: 'If a piece returns to its opening section at the end, it likely uses...',
    options: ['Ternary form', 'Binary form', 'No form at all', 'Only free rhythm'],
    answer: 'Ternary form',
    explanation: 'Returning to A after B is a key feature of ternary form.',
  },
  {
    prompt: 'Changing dynamics in a composition can...',
    options: ['Shape expression and contrast', 'Remove all structure', 'Replace melody completely', 'Stop the beat'],
    answer: 'Shape expression and contrast',
    explanation: 'Dynamics add musical interest and highlight structure.',
  },
  {
    prompt: 'Peer feedback is most useful when it is...',
    options: ['Specific and linked to the music heard', 'Praise only, with no detail given', 'Given before the piece has been heard', 'Based on topics that are not related to the piece'],
    answer: 'Specific and linked to the music heard',
    explanation: 'Focused feedback supports practical composition improvements.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="Binary and ternary form, composition basics, ostinato, and listening analysis"
    learnSteps={learnSteps}
    task="gr8-music-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
