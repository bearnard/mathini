import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'Why do drama classes begin with body and voice warm-ups?',
    options: ['To prepare the body and voice safely and sharpen focus', 'To cut the length of the rehearsal that follows', 'To skip the character work in the lesson', 'To take the place of the script in the lesson'],
    answer: 'To prepare the body and voice safely and sharpen focus',
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
    options: ['A frozen picture made with bodies', 'A long dance routine with set steps', 'A written review of a performance', 'A list of costumes for a production'],
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
    options: ['Using a steady voice and movement for the role', 'Changing the voice and walk with every new line', 'Standing still and showing no expression at all', 'Playing the role the same as every other role'],
    answer: 'Using a steady voice and movement for the role',
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
    options: ['Clear eye focus and purposeful body language', 'Very fast speech that the audience cannot follow', 'Skipping the rehearsal and relying on luck', 'Facing the back wall for most of the scene'],
    answer: 'Clear eye focus and purposeful body language',
    explanation: 'Body language and focus help the audience follow dramatic meaning.',
  },
  {
    prompt: 'After a role-play, reflection should include...',
    options: ['What worked well and what could be better', 'The colours of the costumes that were worn', 'The number of people who watched the show', 'A list of the lines that were forgotten and no more'],
    answer: 'What worked well and what could be better',
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
