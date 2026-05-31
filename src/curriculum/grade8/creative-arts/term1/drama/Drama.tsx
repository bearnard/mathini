import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop voice, body, and character in short scenes',
    image: {
      src: '/curriculum/grade8/ca/term1/drama/diagram.webp',
      alt: 'Grade 8 learners creating tableaux and improvised character scenes',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama in Term 1 includes warm-ups, projection, tableaux, and improvisation. Learners communicate ideas by
          using controlled movement, clear voice, and believable character choices.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why do drama classes begin with body and voice warm-ups?',
    options: ['To prepare safely and improve focus', 'To shorten rehearsal time', 'To avoid character work', 'To replace all scripts'],
    answer: 'To prepare safely and improve focus',
    explanation: 'Warm-ups reduce strain and help performers concentrate.',
  },
  {
    prompt: 'Voice projection means...',
    options: ['Speaking clearly so the audience can hear', 'Shouting as loudly as possible', 'Speaking only to one actor', 'Whispering all lines'],
    answer: 'Speaking clearly so the audience can hear',
    explanation: 'Projection uses breath, articulation, and posture for clear delivery.',
  },
  {
    prompt: 'A tableau is...',
    options: ['A frozen picture made with bodies', 'A long dance routine', 'A written review', 'A costume list'],
    answer: 'A frozen picture made with bodies',
    explanation: 'Tableaux show a dramatic moment using still poses.',
  },
  {
    prompt: 'Improvisation in drama is...',
    options: ['Creating performance without a fixed script', 'Reading lines exactly from a script', 'Painting a backdrop', 'Recording sound effects only'],
    answer: 'Creating performance without a fixed script',
    explanation: 'Improvisation relies on spontaneous choices in role.',
  },
  {
    prompt: 'Which choice best shows strong characterisation?',
    options: ['Using consistent voice and movement for a role', 'Changing character every line randomly', 'Standing still with no expression', 'Ignoring the scene context'],
    answer: 'Using consistent voice and movement for a role',
    explanation: 'Consistent physical and vocal choices make a role believable.',
  },
  {
    prompt: 'Stage directions in a script mainly tell actors...',
    options: ['How to move and act in the scene', 'What marks to get', 'Where to buy props', 'How to design lighting plans only'],
    answer: 'How to move and act in the scene',
    explanation: 'Stage directions guide performance choices and movement.',
  },
  {
    prompt: 'Good audience communication in a short scene often needs...',
    options: ['Clear eye focus and intentional body language', 'Very fast speech only', 'No rehearsal at all', 'Backs turned throughout'],
    answer: 'Clear eye focus and intentional body language',
    explanation: 'Body language and focus help the audience follow dramatic meaning.',
  },
  {
    prompt: 'After a role-play, reflection should include...',
    options: ['What worked and what could improve', 'Only costume colours', 'Only audience numbers', 'No mention of techniques'],
    answer: 'What worked and what could improve',
    explanation: 'Reflection strengthens future performance decisions.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Warm-ups, projection, tableaux, improvisation, and basic character work"
    learnSteps={learnSteps}
    task="gr8-drama-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
