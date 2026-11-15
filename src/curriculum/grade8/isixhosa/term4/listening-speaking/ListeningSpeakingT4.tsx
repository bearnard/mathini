import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'In oral revision, learners should mainly...',
    options: ['review and practise the core speaking skills', 'avoid all of the speaking tasks', 'change the topic every time they speak', 'ignore the feedback that they are given'],
    answer: 'review and practise the core speaking skills',
    explanation: 'Revision consolidates previously learned oral skills.',
  },
  {
    prompt: 'Listening quizzes usually test learners’ ability to...',
    options: ['recall key details from what they hear', 'draw diagrams of what is said', 'write poetry about what is said', 'translate every word of what is said'],
    answer: 'recall key details from what they hear',
    explanation: 'Listening tasks focus on comprehension and detail retrieval.',
  },
  {
    prompt: 'Prepared responses should be...',
    options: ['structured and relevant to the prompt', 'completely memorised without meaning', 'random and unrelated', 'one-word answers only'],
    answer: 'structured and relevant to the prompt',
    explanation: 'Strong responses stay focused and well organised.',
  },
  {
    prompt: 'Fluency in oral tasks is improved by...',
    options: ['practice, pacing and clear speech', 'rushing through the answers quickly', 'avoiding all of the pauses', 'speaking away from the topic'],
    answer: 'practice, pacing and clear speech',
    explanation: 'Fluency depends on clarity and controlled delivery.',
  },
  {
    prompt: 'Which is a useful exam-style speaking strategy?',
    options: ['pause briefly to plan before answering', 'answer before hearing the question', 'avoid main points', 'speak without structure'],
    answer: 'pause briefly to plan before answering',
    explanation: 'Short planning time improves answer quality.',
  },
  {
    prompt: 'When a listening text is replayed, learners should...',
    options: ['check and refine their first answers', 'start a new topic of their own', 'ignore the notes that they made before', 'erase all of the responses on the page'],
    answer: 'check and refine their first answers',
    explanation: 'A replay helps verify and improve accuracy.',
  },
  {
    prompt: 'In group oral revision, respectful behaviour includes...',
    options: ["taking turns and building on others' ideas", 'interrupting every speaker in the group', 'rejecting all of the other views', 'staying silent from start to end'],
    answer: "taking turns and building on others' ideas",
    explanation: 'Collaboration improves discussion quality.',
  },
  {
    prompt: 'A strong final oral answer should...',
    options: ['state the point clearly and briefly support it', 'repeat the question and nothing more', 'add examples that have no link to the point', 'avoid giving a conclusion at the end'],
    answer: 'state the point clearly and briefly support it',
    explanation: 'Clarity and support are key in assessment responses.',
  },
];

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Oral revision, listening comprehension, prepared responses, and fluency"
    learnSteps={learnSteps}
    task="gr8-listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT4;
