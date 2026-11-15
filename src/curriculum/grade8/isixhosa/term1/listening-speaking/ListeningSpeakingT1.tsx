import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Which response is best when introducing yourself in class?',
    options: ['NdinguAyanda, ndifunda eGrade 8.', 'Andifuni kuthetha nawe ngoku.', 'Mamela kuphela, ungathethi.', 'Hambani nonke ekhaya ngoku.'],
    answer: 'NdinguAyanda, ndifunda eGrade 8.',
    explanation: 'A clear introduction gives your name and relevant context.',
  },
  {
    prompt: 'Which question invites a daily routine discussion?',
    options: ['Wenza ntoni emva kwesikolo?', 'Ungubani utitshala wakho?', 'Iphi ipensile?', 'Kutheni usithi hayi?'],
    answer: 'Wenza ntoni emva kwesikolo?',
    explanation: 'It asks about a regular daily activity.',
  },
  {
    prompt: 'In listening comprehension, you should first...',
    options: ['focus on key words and details', 'write random answers', 'interrupt the speaker', 'ignore dates and names'],
    answer: 'focus on key words and details',
    explanation: 'Key words help you remember important information.',
  },
  {
    prompt: 'Which behaviour shows good classroom interaction?',
    options: ['listen, then respond politely', 'talk over everyone', 'mock a classmate', 'refuse all questions'],
    answer: 'listen, then respond politely',
    explanation: 'Respectful turn-taking supports effective communication.',
  },
  {
    prompt: 'Prepared reading is strongest when the learner...',
    options: ['reads clearly at a steady pace', 'mumbles quickly', 'skips punctuation marks', 'looks away from the text'],
    answer: 'reads clearly at a steady pace',
    explanation: 'Clear pace and pronunciation improve understanding.',
  },
  {
    prompt: 'Which phrase is a polite request in isiXhosa?',
    options: ['Nceda uphinde loo mbuzo.', 'Phendula ngoku!', 'Sukundibuza.', 'Thula wena.'],
    answer: 'Nceda uphinde loo mbuzo.',
    explanation: 'Nceda marks a respectful request.',
  },
  {
    prompt: 'If you miss one detail in an oral passage, you should...',
    options: ['use the rest of the message for clues', 'guess an answer without listening any more', 'stop following the task for the rest of the passage', 'change the topic to one that you know well'],
    answer: 'use the rest of the message for clues',
    explanation: 'Remaining details often help you infer missing information.',
  },
  {
    prompt: 'A strong short oral response should be...',
    options: ['clear, relevant, and complete', 'one unrelated word', 'very loud only', 'copied from a friend'],
    answer: 'clear, relevant, and complete',
    explanation: 'Good responses answer the prompt directly and clearly.',
  },
];

const ListeningSpeakingT1 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Introductions, daily life discussions, prepared reading, and listening comprehension"
    learnSteps={learnSteps}
    task="gr8-listening-speaking-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT1;
