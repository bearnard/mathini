import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop social and cultural choreography',
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
    options: ['Hip-hop, ballroom, partner dance and similar styles', 'Classical ballet performed on a stage only', 'Dances that have no link to any social setting', 'Silent movement done without music'],
    answer: 'Hip-hop, ballroom, partner dance and similar styles',
    explanation: 'Social dances reflect community, celebration, and cultural expression.',
  },
  {
    prompt: 'Choreographic intent means...',
    options: ['The purpose or message the choreographer wants to share', 'Steps that are put together without any plan', 'A dance that needs no meaning at all', 'Steps that are done only for the joy of dancing'],
    answer: 'The purpose or message the choreographer wants to share',
    explanation: 'Clear intent guides all choreographic choices.',
  },
  {
    prompt: 'Canon in dance is when...',
    options: ['The same movement is done by dancers one after another', 'All the dancers move together at the same moment', 'The dancers move in patterns that do not repeat', 'One dancer performs while the others stand still'],
    answer: 'The same movement is done by dancers one after another',
    explanation: 'Canon creates visual interest and layered complexity.',
  },
  {
    prompt: 'Repetition in choreography helps to...',
    options: ['Stress the themes and give unity and memorability', 'Waste time that could be used for new steps', 'Add nothing that is important to the piece', 'Bore the audience with the same steps'],
    answer: 'Stress the themes and give unity and memorability',
    explanation: 'Strategic repetition strengthens message and impact.',
  },
  {
    prompt: 'Formation in group dance refers to...',
    options: ['How the dancers are arranged and placed on stage', 'A solo dance by one dancer only', 'A dance with no pattern for the group', 'A line that dancers must always keep'],
    answer: 'How the dancers are arranged and placed on stage',
    explanation: 'Formations create visual composition and group dynamics.',
  },
  {
    prompt: 'Cultural dance study involves...',
    options: ['Learning the history, context and true movement of a tradition', 'Watching videos of the dance and no more', 'Dancing it without any understanding of its meaning', 'Showing the dance in a way that mocks its people'],
    answer: 'Learning the history, context and true movement of a tradition',
    explanation: 'Respectful study honors cultural traditions and prevents appropriation.',
  },
  {
    prompt: 'Ensemble coordination requires...',
    options: ['Communication, trust and timing that is kept together', 'No communication, since each dancer knows the steps', 'Working alone, without watching the others', 'Ignoring the others and following your own count'],
    answer: 'Communication, trust and timing that is kept together',
    explanation: 'Strong ensemble creates powerful group performances.',
  },
  {
    prompt: 'Pattern work in dance means...',
    options: ['Making recognisable sequences that repeat and develop', 'Never repeating any of the movements', 'Changing the movement all the time and never repeating', 'Moving without any set structure in the piece'],
    answer: 'Making recognisable sequences that repeat and develop',
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
