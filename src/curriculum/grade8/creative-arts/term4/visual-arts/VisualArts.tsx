import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Curate portfolios and prepare work for exhibition',
    image: {
      src: '/curriculum/grade8/ca/term4/visual-arts/diagram.webp',
      alt: 'Grade 8 learners preparing portfolios and planning an artwork display',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Visual Arts focuses on selecting strong portfolio pieces, refining presentation, planning displays,
          and reflecting on artistic growth using suitable art vocabulary.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A strong portfolio selection should show...',
    options: ['Range, skill development and effort', 'Unfinished sketches and nothing else', 'One idea that is repeated in every piece', 'No evidence of how the work was made'],
    answer: 'Range, skill development and effort',
    explanation: 'A portfolio should represent progress and variety in work.',
  },
  {
    prompt: 'Exhibition planning mainly involves...',
    options: ['Arranging artworks for clear viewing and flow', 'Painting over old work', 'Removing all labels and reflection', 'Choosing music tempo'],
    answer: 'Arranging artworks for clear viewing and flow',
    explanation: 'Display layout helps viewers engage with the artwork sequence.',
  },
  {
    prompt: 'A finishing technique could include...',
    options: ['Cleaning edges and mounting neatly', 'Tearing corners on purpose always', 'Folding wet paintings', 'Ignoring presentation'],
    answer: 'Cleaning edges and mounting neatly',
    explanation: 'Good finishing improves the professionalism of final artworks.',
  },
  {
    prompt: 'An artist statement should explain...',
    options: ['Ideas, choices, and techniques used', 'Only your school timetable', 'Only the marks expected', 'Only the material cost'],
    answer: 'Ideas, choices, and techniques used',
    explanation: 'Artist statements communicate intention and process.',
  },
  {
    prompt: 'Reflection in Visual Arts helps learners...',
    options: ['Spot strengths and set the next steps', 'Avoid all feedback from others', 'Take the place of the practical tasks', 'Ignore the work done earlier'],
    answer: 'Spot strengths and set the next steps',
    explanation: 'Reflection supports improvement and deeper understanding.',
  },
  {
    prompt: 'When curating a display, a useful principle is to...',
    options: ['Group related works to build a theme', 'Hang all of the work in no set order', 'Hide the key pieces behind other works', 'Use only the smallest area of the wall'],
    answer: 'Group related works to build a theme',
    explanation: 'Curating by theme creates coherence for viewers.',
  },
  {
    prompt: 'Before display, artworks should be...',
    options: ['Handled carefully to prevent damage', 'Stacked while still wet', 'Trimmed without checking composition', 'Stored in direct rain'],
    answer: 'Handled carefully to prevent damage',
    explanation: 'Safe handling protects the quality of completed work.',
  },
  {
    prompt: 'A useful end-of-year question is...',
    options: ['How did my artistic choices improve over time?', 'How many desks are there in the room?', 'What is on the menu at break time?', 'Which bus route is the shortest?'],
    answer: 'How did my artistic choices improve over time?',
    explanation: 'Reviewing growth over time is central to portfolio reflection.',
  },
];

const VisualArts = () => (
  <CapsSubjectTopic
    title="Visual Arts"
    subtitle="Portfolio selection, exhibition planning, finishing techniques, and reflection"
    learnSteps={learnSteps}
    task="gr8-visual-arts-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default VisualArts;
