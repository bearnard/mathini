import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise language structures in context',
    image: {
      src: '/curriculum/grade8/eng/term1/language-structures-bias/diagram.webp',
      alt: 'learner identifying nouns verbs adjectives adverbs and punctuation in a short text',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grammar works best when learned in real sentences. Grade 8 learners identify nouns, verbs, adjectives,
          adverbs, and tense choices while checking punctuation accuracy.
        </p>
      </div>
    ),
  },
  {
    title: 'Notice bias, prejudice and stereotypes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Loaded language can push unfair viewpoints. Readers should question stereotypes, compare perspectives, and
          ask whether claims are supported by evidence.
        </p>
      </div>
    ),
  },
  {
    title: 'Edit language for fairness and clarity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Careful editing improves both grammar and meaning. Replace biased wording with precise language and check
          punctuation so the message is clear and respectful.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which word class names a person, place, thing or idea?',
    options: ['noun', 'adverb', 'conjunction', 'interjection'],
    answer: 'noun',
    explanation: 'Nouns identify people, places, things, or abstract ideas.',
  },
  {
    prompt: 'In the sentence "The confident speaker explained clearly," which word is an adverb?',
    options: ['clearly', 'confident', 'speaker', 'explained'],
    answer: 'clearly',
    explanation: 'An adverb often describes how an action is done.',
  },
  {
    prompt: 'Which sentence is in the future tense?',
    options: ['They will present the report tomorrow.', 'They present the report now.', 'They presented the report yesterday.', 'They were presenting the report.'],
    answer: 'They will present the report tomorrow.',
    explanation: 'Future tense often uses "will" plus the base verb.',
  },
  {
    prompt: 'Which punctuation mark should end a direct question?',
    options: ['question mark', 'comma', 'semicolon', 'colon'],
    answer: 'question mark',
    explanation: 'Questions end with a question mark.',
  },
  {
    prompt: 'A stereotype is best defined as...',
    options: ['an oversimplified belief about a group', 'a checked factual statistic about a group', 'a formal greeting at the start of a letter', 'a neutral summary of what a text says'],
    answer: 'an oversimplified belief about a group',
    explanation: 'Stereotypes reduce people to unfair generalisations.',
  },
  {
    prompt: 'Which phrase sounds most biased?',
    options: ['Those learners are always lazy.', 'The class submitted assignments on Friday.', 'Some learners requested extra help.', 'The teacher gave clear instructions.'],
    answer: 'Those learners are always lazy.',
    explanation: 'The phrase uses sweeping judgement and no evidence.',
  },
  {
    prompt: 'Why should writers avoid loaded language in factual reports?',
    options: ['It can distort meaning and push unfair views.', 'It makes grammar easier to skip.', 'It removes the need for evidence.', 'It improves objectivity automatically.'],
    answer: 'It can distort meaning and push unfair views.',
    explanation: 'Loaded language influences readers emotionally and may reduce fairness.',
  },
  {
    prompt: 'Which edit improves fairness most?',
    options: ['Replace a stereotype with specific evidence-based wording.', 'Add more emotional adjectives to the sentence.', 'Use only exclamation marks to make a point.', 'Remove all of the verbs from the sentence.'],
    answer: 'Replace a stereotype with specific evidence-based wording.',
    explanation: 'Precise, evidence-based language supports accurate and respectful communication.',
  },
];

const LanguageStructuresBias = () => (
  <CapsSubjectTopic
    title="Language Structures and Bias"
    subtitle="Grammar in context with fair language and critical reading of stereotypes"
    learnSteps={learnSteps}
    task="gr8-language-structures-bias-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LanguageStructuresBias;
