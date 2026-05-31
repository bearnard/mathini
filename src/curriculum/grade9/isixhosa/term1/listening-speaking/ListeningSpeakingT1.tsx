import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Speeches, discussions, and listening comprehension',
    image: {
      src: '/curriculum/grade9/isixhosa/term1/listening-speaking/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners presenting short speeches and engaging in critical discussions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 1 Listening & Speaking focuses on <strong>short speeches, critical discussions, interviews,</strong>{' '}
          and listening with fluency.
        </p>
        <p className="text-slate-600">
          Learners develop confidence in presenting and interpreting spoken messages with careful attention to detail.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A short speech should be structured with...',
    options: ['introduction, body, conclusion', 'random ideas', 'only jokes', 'no clear order'],
    answer: 'introduction, body, conclusion',
    explanation: 'Clear structure helps listeners follow your message and retain key points.',
  },
  {
    prompt: 'In a critical discussion, you should...',
    options: ['listen, think, then respond thoughtfully', 'interrupt immediately', 'dismiss all other views', 'speak without evidence'],
    answer: 'listen, think, then respond thoughtfully',
    explanation: 'Critical thinking requires you to consider and engage with different perspectives carefully.',
  },
  {
    prompt: 'Which question is best for an interview about daily life?',
    options: ['Ngubani wena?', 'Wenza ntoni emva kwesikolo?', 'Uyabona?', 'Thula!'],
    answer: 'Wenza ntoni emva kwesikolo?',
    explanation: 'Open-ended questions invite detailed responses about personal experiences.',
  },
  {
    prompt: 'When listening to a speech, your first goal should be...',
    options: ['identify main ideas', 'write every word', 'fall asleep', 'plan your response'],
    answer: 'identify main ideas',
    explanation: 'Grasping the main message is more important than transcribing every detail.',
  },
  {
    prompt: 'A fluent speaker...',
    options: ['speaks smoothly without long pauses', 'speaks very quickly', 'whispers quietly', 'mumbles words'],
    answer: 'speaks smoothly without long pauses',
    explanation: 'Fluency means speaking with natural rhythm and confidence, not just speed.',
  },
  {
    prompt: 'In an interview, if you do not understand a question, you should...',
    options: ['ask the speaker to repeat or clarify', 'guess an answer', 'stay silent', 'change the topic'],
    answer: 'ask the speaker to repeat or clarify',
    explanation: 'Seeking clarification shows engagement and ensures you answer the right question.',
  },
  {
    prompt: 'Which listening strategy helps you follow a complex message?',
    options: ['take notes on key words and ideas', 'hope to remember it all', 'ignore unfamiliar words', 'doodle instead'],
    answer: 'take notes on key words and ideas',
    explanation: 'Note-taking keeps you active and helps you remember important information.',
  },
  {
    prompt: 'When presenting a speech, eye contact with the audience...',
    options: ['builds trust and engagement', 'is not important', 'distracts listeners', 'is rude'],
    answer: 'builds trust and engagement',
    explanation: 'Making eye contact shows confidence and helps you connect with your listeners.',
  },
];

const ListeningSpeakingT1 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Speeches, discussions, listening comprehension, interviews, and fluency"
    learnSteps={learnSteps}
    task="gr9-listening-speaking-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT1;
