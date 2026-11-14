import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Review noun, adjective and verb forms',
    image: {
      src: '/curriculum/grade9/english/term1/grammar-revision-accuracy/image1.jpg',
      alt: 'learner identifying nouns adjectives verbs and punctuation in a passage',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Nouns name people, places or things; adjectives describe them; verbs show actions. Correct forms and 
          consistent tense strengthen writing and ensure readers understand your meaning clearly.
        </p>
      </div>
    ),
  },
  {
    title: 'Master direct and indirect speech',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Direct speech quotes exact words with quotation marks: "I will attend," she said. Indirect speech reports 
          what was said without quotes: She said she would attend. Choose the right form for your purpose.
        </p>
      </div>
    ),
  },
  {
    title: 'Improve spelling and punctuation accuracy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct punctuation clarifies meaning and guides readers. Full stops, commas, and quotation marks each have 
          specific purposes. Regular practice with editing passages strengthens accuracy in your own writing.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which word is a noun?',
    options: ['teacher', 'quickly', 'blue', 'run'],
    answer: 'teacher',
    explanation: 'Nouns name people, places, things, or ideas.',
  },
  {
    prompt: 'Choose the correct verb form: "She _______ to the store yesterday."',
    options: ['go', 'went', 'goes', 'going'],
    answer: 'went',
    explanation: 'Past tense "went" matches the time reference "yesterday".',
  },
  {
    prompt: 'Which sentence uses correct punctuation?',
    options: ['The boy said, "I will be late."', 'The boy said "I will be late.', 'The boy said I will be late"', '"I will be late" the boy said.'],
    answer: 'The boy said, "I will be late."',
    explanation: 'Quotation marks enclose the exact words, with proper punctuation placement.',
  },
  {
    prompt: 'Identify the adjective in this sentence: "The old car needs repair."',
    options: ['old', 'car', 'needs', 'repair'],
    answer: 'old',
    explanation: 'Adjectives describe nouns; "old" describes the car.',
  },
  {
    prompt: 'Convert to indirect speech: She said, "I am happy."',
    options: ['She said she was happy.', 'She said I am happy.', 'She will say she is happy.', 'She said she will be happy.'],
    answer: 'She said she was happy.',
    explanation: 'Indirect speech changes the tense to match reported perspective.',
  },
  {
    prompt: 'Which sentence has consistent tense?',
    options: ['He wrote the letter and sends it today.', 'He writes the letter and sent it.', 'He wrote the letter and sent it.', 'He will write and sent the letter.'],
    answer: 'He wrote the letter and sent it.',
    explanation: 'Both verbs use past tense for consistency.',
  },
  {
    prompt: 'What is the purpose of a comma in a list?',
    options: ['to separate items clearly', 'to replace a full stop', 'to eliminate the need for punctuation', 'to confuse readers'],
    answer: 'to separate items clearly',
    explanation: 'Commas organize list items so readers understand the grouping.',
  },
  {
    prompt: 'Which spelling is correct?',
    options: ['occured', 'occurred', 'ocurred', 'ocured'],
    answer: 'occurred',
    explanation: '"Occurred" is the correct past tense of "occur" with doubled consonant.',
  },
];

const GrammarRevisionAccuracy = () => (
  <CapsSubjectTopic
    title="Grammar Revision and Accuracy"
    subtitle="Nouns, adjectives, verbs, punctuation, direct and indirect speech"
    learnSteps={learnSteps}
    task="gr9-grammar-revision-accuracy-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default GrammarRevisionAccuracy;
