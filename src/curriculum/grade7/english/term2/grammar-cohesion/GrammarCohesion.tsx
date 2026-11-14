import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build cohesion with grammar choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Cohesion means ideas connect smoothly. Adjectives add detail, adverbs refine actions, and conjunctions link
          sentences logically.
        </p>
      </div>
    ),
  },
  {
    title: 'Choose modifiers that improve clarity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective modifiers make writing precise. Choose words that fit meaning instead of vague or repeated wording.
        </p>
      </div>
    ),
  },
  {
    title: 'Join ideas for flow and coherence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Sentence links like <strong>because</strong>, <strong>however</strong>, and <strong>therefore</strong> guide
          the reader through relationships between ideas.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which word is an adjective in this sentence: "The bright poster caught our attention."',
    options: ['bright', 'caught', 'our', 'attention'],
    answer: 'bright',
    explanation: 'An adjective describes a noun, and "bright" describes "poster".',
  },
  {
    prompt: 'Which word is an adverb in this sentence: "The speaker answered clearly."',
    options: ['clearly', 'speaker', 'answered', 'the'],
    answer: 'clearly',
    explanation: 'An adverb describes how an action happens.',
  },
  {
    prompt: 'Choose the best conjunction: "We revised early ___ we wanted to feel ready."',
    options: ['because', 'although', 'unless', 'yet'],
    answer: 'because',
    explanation: 'Because introduces the reason for revising early.',
  },
  {
    prompt: 'Which option creates the most coherent pair of sentences?',
    options: [
      'The team practised daily. Therefore, their passing improved.',
      'The team practised daily. Banana, their passing improved.',
      'The team practised daily. Chair, their passing improved.',
      'The team practised daily. Quickly, their passing improved.',
    ],
    answer: 'The team practised daily. Therefore, their passing improved.',
    explanation: 'Therefore clearly links cause and result.',
  },
  {
    prompt: 'Which sentence uses a suitable adjective for detail?',
    options: [
      'The narrow path led to the library gate.',
      'The path thing led to the gate.',
      'The path was path and path.',
      'The gate path library narrow.',
    ],
    answer: 'The narrow path led to the library gate.',
    explanation: 'Narrow is a clear adjective that adds useful detail.',
  },
  {
    prompt: 'Which adverb best completes the sentence: "She explained the rule ___ so everyone understood."',
    options: ['carefully', 'careful', 'care', 'carefulness'],
    answer: 'carefully',
    explanation: 'An adverb is needed to describe how she explained.',
  },
  {
    prompt: 'Choose the best linking word: "The evidence was strong; ___, the class accepted the argument."',
    options: ['therefore', 'instead', 'meanwhile', 'perhaps'],
    answer: 'therefore',
    explanation: 'Therefore shows a logical conclusion from strong evidence.',
  },
  {
    prompt: 'What is the main goal of cohesion in writing?',
    options: [
      'to connect ideas so the text flows logically',
      'to make every sentence identical',
      'to remove all punctuation',
      'to avoid using paragraphs',
    ],
    answer: 'to connect ideas so the text flows logically',
    explanation: 'Cohesion helps readers follow meaning from sentence to sentence.',
  },
];

const GrammarCohesion = () => (
  <CapsSubjectTopic
    title="Grammar for Cohesion"
    subtitle="Adjectives, adverbs, conjunctions and sentence linking for flow"
    learnSteps={learnSteps}
    task="gr7-grammar-cohesion-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default GrammarCohesion;
