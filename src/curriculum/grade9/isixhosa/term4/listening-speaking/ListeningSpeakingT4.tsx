import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Revisiting key speaking skills helps you...',
    options: ['build confidence and consistency before the final assessment', 'waste time that you need for new work', 'bring in new errors that were not there before', 'make you forget what you learned earlier'],
    answer: 'build confidence and consistency before the final assessment',
    explanation: 'Revision strengthens skills and reduces anxiety about performance.',
  },
  {
    prompt: 'Oral feedback from peers or teachers should focus on...',
    options: ['specific strengths and areas for improvement', 'personal criticism of the speaker', 'negative comments and no praise', 'details that have no link to the performance'],
    answer: 'specific strengths and areas for improvement',
    explanation: 'Constructive feedback is more helpful and motivating.',
  },
  {
    prompt: 'Fluency in speaking develops through...',
    options: ['repeated practice and exposure to natural speech', 'reading silently to yourself each day', 'avoiding speaking so that you make no errors', 'memorising set scripts and nothing else'],
    answer: 'repeated practice and exposure to natural speech',
    explanation: 'Practice builds automaticity and reduces hesitation.',
  },
  {
    prompt: 'When practising listening, focusing on key words helps you...',
    options: ['get the meaning even when you miss some words', 'understand every word that the speaker says', 'feel more confused by the extra detail', 'give up when you hear an unknown word'],
    answer: 'get the meaning even when you miss some words',
    explanation: 'Selective listening is a realistic and practical skill.',
  },
  {
    prompt: 'Self-assessment of your own oral performance involves...',
    options: ['reflecting on what went well and what needs work', 'ignoring your performance once it is over', 'comparing yourself with other learners only', 'finding excuses for the weak parts'],
    answer: 'reflecting on what went well and what needs work',
    explanation: 'Self-reflection promotes metacognition and lifelong learning.',
  },
  {
    prompt: 'A revision strategy for listening comprehension is to...',
    options: ['listen to different speakers and topics often', 'avoid listening until the day of the test', 'listen to one speaker once and then stop', 'listen while doing other things at the same time'],
    answer: 'listen to different speakers and topics often',
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
    options: ['pace, pronunciation and confidence, with few long pauses', 'speed alone, since faster is better', 'volume alone, since louder is clearer', 'your appearance and your clothing on the day'],
    answer: 'pace, pronunciation and confidence, with few long pauses',
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
