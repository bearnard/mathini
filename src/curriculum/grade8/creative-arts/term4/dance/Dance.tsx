import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Perform complete routines with expression and timing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Dance in Term 4 prepares learners for final practical presentation. Focus areas include full sequence
          performance, timing accuracy, expressive quality, appreciation, and dance career awareness.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A complete dance routine should include...',
    options: ['A clear beginning, development and ending', 'One move that is repeated again and again', 'Moves with no transitions between them', 'Moves that have no link to the music'],
    answer: 'A clear beginning, development and ending',
    explanation: 'Structured routines are easier for audiences to follow.',
  },
  {
    prompt: 'Timing accuracy in dance means...',
    options: ['Moving on the correct counts and cues', 'Always dancing faster than music', 'Ignoring beat changes', 'Starting whenever you want'],
    answer: 'Moving on the correct counts and cues',
    explanation: 'Accurate timing keeps choreography aligned with music.',
  },
  {
    prompt: 'Expression in dance is shown through...',
    options: ['Body dynamics and facial focus', 'The choice of costume and nothing else', 'The position on the stage and nothing else', 'The volume of the applause and nothing else'],
    answer: 'Body dynamics and facial focus',
    explanation: 'Expression communicates feeling and intention.',
  },
  {
    prompt: 'Dance appreciation involves...',
    options: ['Giving respectful, informed feedback', 'Laughing at errors', 'Ignoring performance effort', 'Commenting only on clothes'],
    answer: 'Giving respectful, informed feedback',
    explanation: 'Appreciation values effort and uses constructive language.',
  },
  {
    prompt: 'Which is a dance-related career role?',
    options: ['Choreographer', 'Meteorologist', 'Accountant only', 'Geologist'],
    answer: 'Choreographer',
    explanation: 'Choreographers create and organise movement for performance.',
  },
  {
    prompt: 'Safe final-practice habits include...',
    options: ['Warm-up, hydrate, and cool down', 'Skip warm-up to save time', 'Force painful stretches', 'Practise on unsafe floors'],
    answer: 'Warm-up, hydrate, and cool down',
    explanation: 'Safe habits protect dancers during repeated rehearsal.',
  },
  {
    prompt: 'Group synchronisation improves when dancers...',
    options: ['Use shared counts and visual cues', 'Watch only themselves', 'Change tempo individually', 'Ignore formation spacing'],
    answer: 'Use shared counts and visual cues',
    explanation: 'Common cues keep entrances and phrases aligned.',
  },
  {
    prompt: 'A good final reflection question is...',
    options: ['What will I refine before the next performance?', 'What snack should I buy later today?', 'How many desks are there in the class?', 'Which subject has the least movement?'],
    answer: 'What will I refine before the next performance?',
    explanation: 'Reflection guides targeted improvement after practical work.',
  },
];

const Dance = () => (
  <CapsSubjectTopic
    title="Dance"
    subtitle="Final routine performance, timing, expression, appreciation, and careers awareness"
    learnSteps={learnSteps}
    task="gr8-dance-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Dance;
