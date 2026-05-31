import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Revision of speeches, listening practice, oral feedback, and fluency consolidation',
    image: {
      src: '/curriculum/grade9/isixhosa/term4/listening-speaking/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners revising speeches and practising fluent, confident oral delivery',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Listening & Speaking focuses on <strong>revision of speeches, listening practice,</strong>{' '}
          oral feedback, and fluency consolidation.
        </p>
        <p className="text-slate-600">
          Learners consolidate speaking and listening routines in preparation for end-of-year assessment.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Revisiting key speaking skills helps you...',
    options: ['build confidence and consistency before final assessment', 'waste time', 'introduce new errors', 'forget what you learned'],
    answer: 'build confidence and consistency before final assessment',
    explanation: 'Revision strengthens skills and reduces anxiety about performance.',
  },
  {
    prompt: 'Oral feedback from peers or teachers should focus on...',
    options: ['specific strengths and areas for improvement', 'personal criticism', 'only negative comments', 'irrelevant details'],
    answer: 'specific strengths and areas for improvement',
    explanation: 'Constructive feedback is more helpful and motivating.',
  },
  {
    prompt: 'Fluency in speaking develops through...',
    options: ['repeated practice and exposure to natural speech patterns', 'reading silently', 'avoiding speaking', 'memorizing scripts only'],
    answer: 'repeated practice and exposure to natural speech patterns',
    explanation: 'Practice builds automaticity and reduces hesitation.',
  },
  {
    prompt: 'When practising listening, focusing on key words helps you...',
    options: ['extract meaning even if you don\'t understand every word', 'understand nothing', 'feel more confused', 'give up'],
    answer: 'extract meaning even if you don\'t understand every word',
    explanation: 'Selective listening is a realistic and practical skill.',
  },
  {
    prompt: 'Self-assessment of your own oral performance involves...',
    options: ['reflecting on what went well and what needs improvement', 'ignoring your performance', 'only comparing yourself to others', 'making excuses'],
    answer: 'reflecting on what went well and what needs improvement',
    explanation: 'Self-reflection promotes metacognition and lifelong learning.',
  },
  {
    prompt: 'A revision strategy for listening comprehension is to...',
    options: ['listen to various speakers and topics regularly', 'avoid listening altogether', 'listen once and forget', 'listen without focus'],
    answer: 'listen to various speakers and topics regularly',
    explanation: 'Exposure to variety improves adaptability and comprehension.',
  },
  {
    prompt: 'Asking for clarification during revision shows...',
    options: ['a desire to improve and learn', 'that you do not understand anything', 'weakness', 'disrespect for the teacher'],
    answer: 'a desire to improve and learn',
    explanation: 'Asking questions demonstrates active engagement.',
  },
  {
    prompt: 'To evaluate your fluency, you should consider...',
    options: ['pace, pronunciation, and confidence, without long pauses', 'only speed', 'volume only', 'how you look'],
    answer: 'pace, pronunciation, and confidence, without long pauses',
    explanation: 'True fluency involves multiple components beyond just speed.',
  },
];

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Revision of speeches, listening practice, oral feedback, and fluency consolidation"
    learnSteps={learnSteps}
    task="gr9-listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT4;
