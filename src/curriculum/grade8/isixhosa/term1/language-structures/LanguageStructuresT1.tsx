import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './LanguageStructuresT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Which option is a noun?',
    options: ['isikolo', 'funda', 'khawuleza', 'kakhulu'],
    answer: 'isikolo',
    explanation: 'Isikolo names a place and functions as a noun.',
  },
  {
    prompt: 'Choose the sentence with correct singular concord.',
    options: ['Umfundi uyafunda.', 'Umfundi bayafunda.', 'Umfundi siyafunda.', 'Umfundi ndiyafunda.'],
    answer: 'Umfundi uyafunda.',
    explanation: 'Umfundi (singular) takes the u- concord.',
  },
  {
    prompt: 'Which word is an adjective in this list?',
    options: ['mhle', 'isikolo', 'funda', 'izolo'],
    answer: 'mhle',
    explanation: 'Mhle describes a noun, so it is adjectival.',
  },
  {
    prompt: 'Which sentence is in present tense?',
    options: ['Sibhala umsebenzi ngoku.', 'Sibhale umsebenzi izolo.', 'Siza kubhala ngomso.', 'Sasibhala kudala.'],
    answer: 'Sibhala umsebenzi ngoku.',
    explanation: 'Sibhala indicates present action.',
  },
  {
    prompt: 'Pick the correctly punctuated question.',
    options: ['Uhlala phi?', 'Uhlala phi.', 'Uhlala phi,', 'Uhlala phi!'],
    answer: 'Uhlala phi?',
    explanation: 'A direct question ends with a question mark.',
  },
  {
    prompt: 'Which word is spelled correctly?',
    options: ['incwadi', 'incwaddi', 'inkwadii', 'incwady'],
    answer: 'incwadi',
    explanation: 'Incwadi is the correct spelling.',
  },
  {
    prompt: 'Why is concord important in a sentence?',
    options: ['it matches subjects and verbs correctly', 'it removes all punctuation', 'it changes nouns into numbers', 'it avoids sentence meaning'],
    answer: 'it matches subjects and verbs correctly',
    explanation: 'Concord keeps agreement accurate and meaning clear.',
  },
  {
    prompt: 'Editing for language structures helps learners to...',
    options: ['spot and correct grammar errors', 'skip revision tasks', 'avoid reading instructions', 'replace all short words'],
    answer: 'spot and correct grammar errors',
    explanation: 'Editing improves sentence accuracy and clarity.',
  },
];

const LanguageStructuresT1 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Nouns, concords, adjectives, simple tenses, punctuation, and spelling"
    learnSteps={learnSteps}
    task="gr8-language-structures-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT1;
