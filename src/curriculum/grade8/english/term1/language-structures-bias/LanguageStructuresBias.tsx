import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './LanguageStructuresBiasSlides';

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
