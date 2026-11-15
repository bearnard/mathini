import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './LanguageStructuresT3.data';

const learnSteps = xhosaSteps(lesson);

export const bank: CapsItem[] = [
  {
    prompt: 'Which sentence shows future tense?',
    options: [
      'We will visit the museum tomorrow',
      'We visited the museum yesterday',
      'We are at the museum now',
      'We were visiting when it rained',
    ],
    answer: 'We will visit the museum tomorrow',
    explanation: 'Future tense describes an action that has not happened yet.',
  },
  {
    prompt: 'What is the main job of a conjunction?',
    options: [
      'To join words or ideas in a sentence',
      'To replace all verbs in a paragraph',
      'To show only punctuation marks',
      'To remove sentence meaning',
    ],
    answer: 'To join words or ideas in a sentence',
    explanation: 'Conjunctions connect words, clauses, or complete ideas.',
  },
  {
    prompt: 'Which connector best shows sequence?',
    options: ['Then', 'Although', 'Because', 'However'],
    answer: 'Then',
    explanation: '“Then” signals what happens next in order.',
  },
  {
    prompt: 'Which question word asks for a reason?',
    options: ['Why', 'Who', 'Where', 'When'],
    answer: 'Why',
    explanation: '“Why” asks about cause or reason.',
  },
  {
    prompt: 'Choose the sentence with a clear connector.',
    options: [
      'We finished homework, then we played outside',
      'We finished homework outside because then',
      'Then because homework we',
      'Outside we homework then because',
    ],
    answer: 'We finished homework, then we played outside',
    explanation: 'It uses a connector to show logical sequence between actions.',
  },
  {
    prompt: 'Why is sentence variety important?',
    options: [
      'It makes writing smoother and clearer to read',
      'It means repeating the same opener every time',
      'It removes all linking words from writing',
      'It makes ideas less understandable',
    ],
    answer: 'It makes writing smoother and clearer to read',
    explanation: 'Varied sentence openings improve flow and reader interest.',
  },
  {
    prompt: 'In grammar tasks, noun class work helps learners...',
    options: [
      'Match word forms correctly for agreement',
      'Ignore sentence structure completely',
      'Use any random word ending',
      'Write without checking meaning',
    ],
    answer: 'Match word forms correctly for agreement',
    explanation: 'Noun classes guide agreement patterns in the sentence.',
  },
  {
    prompt: 'Which sentence best combines ideas with a conjunction?',
    options: [
      'She read the poster and answered the question',
      'She read poster question answered',
      'And she question poster',
      'Poster answered read she',
    ],
    answer: 'She read the poster and answered the question',
    explanation: 'The conjunction “and” links two actions clearly.',
  },
  {
    prompt: 'What should you do in a tense change item?',
    options: ['Keep the meaning and change the verb form', 'Change the topic to a new idea', 'Delete all of the verbs in the sentence', 'Only add punctuation marks to it'],
    answer: 'Keep the meaning and change the verb form',
    explanation: 'Tense-change tasks test accurate verb form while preserving meaning.',
  },
];

const LanguageStructuresT3 = () => (
  <CapsSubjectTopic
    title="Language Structures and Conventions"
    subtitle="Applying tense, connectors, question words, and agreement patterns"
    learnSteps={learnSteps}
    task="language-structures-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageStructuresT3;
