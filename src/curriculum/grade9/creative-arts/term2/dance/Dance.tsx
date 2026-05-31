import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop social and cultural choreography',
    image: {
      src: '/curriculum/grade9/creative-arts/term2/dance/image1.jpg',
      alt: 'Grade 9 learners exploring social and cultural dance traditions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Dance in Grade 9 Term 2 explores social and cultural traditions. You study folk or social dance forms, develop choreographic intent, use canon and repetition effectively, understand formations and group patterns, and coordinate with ensemble members. Create dances that show cultural understanding and artistic choice.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Social dance forms include...',
    options: ['Hip-hop, contemporary, ballroom, or partner dance styles', 'Only classical ballet', 'No social context', 'Silent movement only'],
    answer: 'Hip-hop, contemporary, ballroom, or partner dance styles',
    explanation: 'Social dances reflect community, celebration, and cultural expression.',
  },
  {
    prompt: 'Choreographic intent means...',
    options: ['The purpose or message the choreographer wants to communicate', 'Random movement', 'No meaning needed', 'Just having fun only'],
    answer: 'The purpose or message the choreographer wants to communicate',
    explanation: 'Clear intent guides all choreographic choices.',
  },
  {
    prompt: 'Canon in dance is when...',
    options: ['The same movement is performed by different dancers at different times', 'All move together always', 'No patterns exist', 'One dancer only'],
    answer: 'The same movement is performed by different dancers at different times',
    explanation: 'Canon creates visual interest and layered complexity.',
  },
  {
    prompt: 'Repetition in choreography helps to...',
    options: ['Emphasize themes and create unity and memorability', 'Waste time', 'Nothing important', 'Bore the audience'],
    answer: 'Emphasize themes and create unity and memorability',
    explanation: 'Strategic repetition strengthens message and impact.',
  },
  {
    prompt: 'Formation in group dance refers to...',
    options: ['The spatial arrangement and positioning of dancers on stage', 'Only individual work', 'No patterns', 'Linear always'],
    answer: 'The spatial arrangement and positioning of dancers on stage',
    explanation: 'Formations create visual composition and group dynamics.',
  },
  {
    prompt: 'Cultural dance study involves...',
    options: ['Learning the history, context, and authentic movement of a tradition', 'Only watching videos', 'No understanding needed', 'Stereotyping is fine'],
    answer: 'Learning the history, context, and authentic movement of a tradition',
    explanation: 'Respectful study honors cultural traditions and prevents appropriation.',
  },
  {
    prompt: 'Ensemble coordination requires...',
    options: ['Communication, trust, and synchronized timing between dancers', 'No communication needed', 'Working alone', 'Ignoring others'],
    answer: 'Communication, trust, and synchronized timing between dancers',
    explanation: 'Strong ensemble creates powerful group performances.',
  },
  {
    prompt: 'Pattern work in dance means...',
    options: ['Creating recognizable sequences that repeat and evolve', 'Never repeating anything', 'Constant change only', 'No structure'],
    answer: 'Creating recognizable sequences that repeat and evolve',
    explanation: 'Patterns build recognition and create compositional strength.',
  },
];

const Dance = () => (
  <CapsSubjectTopic
    title="Dance"
    subtitle="Social and cultural dance, choreographic intent, canon, repetition, and formation"
    learnSteps={learnSteps}
    task="gr9-dance-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Dance;
