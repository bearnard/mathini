import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT4.data';

const learnSteps = xhosaSteps(lesson);

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'ls41', question: 'What is the best use of an oral assessment rubric?', options: ['To check strengths and weaknesses against the criteria', 'To replace all preparation', 'To memorise only the marks', 'To avoid practising'], answer: 0, explanation: 'A rubric helps learners focus on the specific skills assessed.' },
  { id: 'ls42', question: 'Why should you review previous recordings or notes?', options: ['To identify patterns in feedback and improve weak areas', 'To copy mistakes exactly', 'To avoid listening to yourself', 'To remove the need for fluency'], answer: 0, explanation: 'Past evidence helps you improve before the final SBA task.' },
  { id: 'ls43', question: 'What does chunking help you do in listening comprehension?', options: ['Remember information in smaller, manageable parts', 'Speak louder', 'Avoid signal words', 'Guess every answer'], answer: 0, explanation: 'Chunking groups information so it is easier to store and recall.' },
  { id: 'ls44', question: 'Which words often signal structure in a listening passage?', options: ['Firstly, however, finally', 'Wow, cool, nice', 'Book, desk, shoe', 'Laugh, jump, sing'], answer: 0, explanation: 'Signal words show sequence and contrast, helping listeners track the passage.' },
  { id: 'ls45', question: 'What is a useful isiXhosa starter phrase to gain fluency?', options: ['Ndiyathetha malunga ne...', 'Yo, listen up...', 'Whatever happens...', 'No comment.'], answer: 0, explanation: 'Formulaic academic phrases help you begin confidently and stay on topic.' },
  { id: 'ls46', question: 'Which behaviour best shows spoken fluency?', options: ['Pausing naturally between ideas instead of stopping mid-phrase', 'Restarting every sentence from the beginning', 'Using slang to fill every pause', 'Speaking so fast that meaning is lost'], answer: 0, explanation: 'Natural pauses support fluency and clarity better than hesitant breaks.' },
  { id: 'ls47', question: 'What should you avoid in a final oral task?', options: ['Slang and unnecessary code-switching', 'Clear pronunciation', 'Complete sentences', 'Formal vocabulary'], answer: 0, explanation: 'Assessed oral tasks require appropriate formal register.' },
  { id: 'ls48', question: 'Why is register control important in the oral exam?', options: ['It shows that your language matches the formal context', 'It guarantees every answer is correct', 'It removes the need for content', 'It makes timing irrelevant'], answer: 0, explanation: 'Matching your register to the assessment context is part of effective communication.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Final oral evidence, revision, listening recall, fluency, and register control"
    learnSteps={learnSteps}
    task="gr12-listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ListeningSpeakingT4;
