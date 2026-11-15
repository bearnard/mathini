import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT4.data';

const learnSteps = xhosaSteps(lesson);

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'ls41', question: 'What is the best use of an oral assessment rubric?', options: ['To check your work against the criteria', 'To replace preparation for the oral task', 'To learn the marks the teacher gave others', 'To decide the topic of the oral task'], answer: 0, explanation: 'A rubric helps learners focus on the specific skills assessed.' },
  { id: 'ls42', question: 'Why should you review previous recordings or notes?', options: ['To spot patterns in feedback and improve', 'To compare your marks with those of classmates', 'To avoid hearing your own mistakes again', 'To replace live practice with silent reading'], answer: 0, explanation: 'Past evidence helps you improve before the final SBA task.' },
  { id: 'ls43', question: 'What does chunking help you do in listening comprehension?', options: ['Remember information in smaller parts', 'Ignore the signal words and focus on names', 'Write down each word the speaker says', 'Speak louder to be heard by the speaker'], answer: 0, explanation: 'Chunking groups information so it is easier to store and recall.' },
  { id: 'ls44', question: 'Which words often signal structure in a listening passage?', options: ['Firstly, however, finally', 'Wow, cool, nice, awesome, great', 'Book, desk, shoe', 'Laugh, jump, sing'], answer: 0, explanation: 'Signal words show sequence and contrast, helping listeners track the passage.' },
  { id: 'ls45', question: 'What is a useful isiXhosa starter phrase to gain fluency?', options: ['Ndiyathetha malunga ne...', 'Yo, listen up...', 'Whatever happens, happens...', 'No comment.'], answer: 0, explanation: 'Formulaic academic phrases help you begin confidently and stay on topic.' },
  { id: 'ls46', question: 'Which behaviour best shows spoken fluency?', options: ['Pausing between ideas rather than mid-phrase', 'Restarting a sentence whenever you make an error', 'Using slang words to fill the silent gaps', 'Speaking quickly so there are no pauses'], answer: 0, explanation: 'Natural pauses support fluency and clarity better than hesitant breaks.' },
  { id: 'ls47', question: 'What should you avoid in a final oral task?', options: ['Slang and unnecessary code-switching', 'Clear pronunciation of difficult words', 'Complete sentences with correct grammar', 'Formal vocabulary for the topic'], answer: 0, explanation: 'Assessed oral tasks require appropriate formal register.' },
  { id: 'ls48', question: 'Why is register control important in the oral exam?', options: ['It shows your language suits the context', 'It makes up for weak content in the answer', 'It gives you extra time to speak', 'It decides which topic you must discuss'], answer: 0, explanation: 'Matching your register to the assessment context is part of effective communication.' },
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
