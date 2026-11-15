import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT2.data';

const learnSteps = xhosaSteps(lesson);

type RawItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const rawItems: RawItem[] = [
  { id: 'ls21', question: 'Which type of question usually invites a detailed answer in an interview?', options: ['Open question', 'Closed question', 'Tag question', 'Echo question'], answer: 0, explanation: 'Open questions encourage explanation, opinion, and elaboration.' },
  { id: 'ls22', question: 'What is the purpose of a probing follow-up question?', options: ['To get more detail or clarification', 'To end the interview quickly', 'To repeat the greeting', 'To avoid listening'], answer: 0, explanation: 'A probing question extends an earlier response and seeks evidence or detail.' },
  { id: 'ls23', question: 'Which phrase is a useful signpost in an oral presentation?', options: ['Firstly, let us consider...', 'Whatever, moving on...', 'You know what I mean?', 'I forgot my next point'], answer: 0, explanation: 'Signposting helps the audience follow the structure of the presentation.' },
  { id: 'ls24', question: 'Which clue most clearly suggests speaker attitude?', options: ['Tone and word choice', 'The page number', 'The colour of the desk', 'The number of listeners'], answer: 0, explanation: 'Attitude is usually revealed through how something is said and the words selected.' },
  { id: 'ls25', question: 'If a speaker uses strongly emotional words to push one side of an issue, this may show:', options: ['Bias', 'Scanning', 'Summary writing', 'Neutrality'], answer: 0, explanation: 'Loaded language often signals that the speaker is not fully neutral.' },
  { id: 'ls26', question: 'Which statement is an opinion in an interview?', options: ['This policy is the worst solution for young people.', 'The meeting started at 9 a.m.', 'Three guests spoke.', 'The hall was built in 2018.'], answer: 0, explanation: 'Calling something “the worst” is a judgement, not a verifiable fact.' },
  { id: 'ls27', question: 'Which response best fits a formal oral task?', options: ['It would appear that the interviewee is concerned about access to education.', 'I totally vibe with what she is saying.', 'That guy is just wrong, full stop.', 'Yeah, anyway, next question.'], answer: 0, explanation: 'Formal responses avoid slang and explain ideas precisely.' },
  { id: 'ls28', question: 'Why should oral responses be given in complete sentences?', options: ['They sound clearer and more academic', 'They always earn double marks', 'They remove the need for evidence', 'They make the recording shorter'], answer: 0, explanation: 'Complete sentences improve clarity, precision, and formal presentation.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ListeningSpeakingT2 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Interviews, oral presentations, listening for attitude, and formal spoken responses"
    learnSteps={learnSteps}
    task="gr12-listening-speaking-t2"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ListeningSpeakingT2;
