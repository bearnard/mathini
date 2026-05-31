import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Apply oral strategies in revision and exam-style contexts',
    image: {
      src: '/curriculum/grade8/xho/term4/listening-speaking/diagram.webp',
      alt: 'Grade 8 learners revising oral fluency through listening quizzes and prepared responses',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Listening & Speaking focuses on <strong>oral revision, listening comprehension, prepared responses,</strong>{' '}
          and fluency.
        </p>
        <p className="text-slate-600">
          Use year-end strategies to answer accurately and present ideas confidently.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In oral revision, learners should mainly...',
    options: ['review and practise core speaking skills', 'avoid all speaking tasks', 'change every topic', 'ignore feedback'],
    answer: 'review and practise core speaking skills',
    explanation: 'Revision consolidates previously learned oral skills.',
  },
  {
    prompt: 'Listening quizzes usually test learners’ ability to...',
    options: ['recall key details from spoken input', 'draw diagrams only', 'write poetry only', 'translate every word'],
    answer: 'recall key details from spoken input',
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
    options: ['practice, pacing, and clear pronunciation', 'rushing through answers', 'avoiding pauses completely', 'speaking off-topic'],
    answer: 'practice, pacing, and clear pronunciation',
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
    options: ['check and refine their first answers', 'start a new topic', 'ignore previous notes', 'erase all responses'],
    answer: 'check and refine their first answers',
    explanation: 'A replay helps verify and improve accuracy.',
  },
  {
    prompt: 'In group oral revision, respectful behaviour includes...',
    options: ['taking turns and building on others’ ideas', 'interrupting every speaker', 'rejecting all viewpoints', 'staying silent throughout'],
    answer: 'taking turns and building on others’ ideas',
    explanation: 'Collaboration improves discussion quality.',
  },
  {
    prompt: 'A strong final oral answer should...',
    options: ['state the point clearly and briefly support it', 'repeat the question only', 'add irrelevant examples', 'avoid a conclusion'],
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
