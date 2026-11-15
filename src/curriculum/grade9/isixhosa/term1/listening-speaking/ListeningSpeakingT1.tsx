import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A short speech should be structured with...',
    options: ['introduction, body and conclusion', 'a joke, a story and a song', 'facts, figures and a quotation only', 'a list of points with no order to them'],
    answer: 'introduction, body and conclusion',
    explanation: 'Clear structure helps listeners follow your message and retain key points.',
  },
  {
    prompt: 'In a critical discussion, you should...',
    options: ['listen, think, then respond with care', 'interrupt at once to make your point first', 'dismiss the views of everyone who disagrees', 'speak with strong feeling but give no evidence'],
    answer: 'listen, think, then respond with care',
    explanation: 'Critical thinking requires you to consider and engage with different perspectives carefully.',
  },
  {
    prompt: 'Which question is best for an interview about daily life?',
    options: ['Ngubani igama lakho?', 'Wenza ntoni emva kwesikolo?', 'Uneminyaka emingaphi?', 'Uphuma phi?'],
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
    options: ['speaks smoothly without long pauses', 'speaks very fast so as to save time', 'speaks very softly so that no one hears', 'speaks so that the words run together'],
    answer: 'speaks smoothly without long pauses',
    explanation: 'Fluency means speaking with natural rhythm and confidence, not just speed.',
  },
  {
    prompt: 'In an interview, if you do not understand a question, you should...',
    options: ['ask the speaker to repeat or explain it', 'guess an answer and hope that it fits', 'stay silent and wait for the next question', 'change the topic to one you know well'],
    answer: 'ask the speaker to repeat or explain it',
    explanation: 'Seeking clarification shows engagement and ensures you answer the right question.',
  },
  {
    prompt: 'Which listening strategy helps you follow a complex message?',
    options: ['take notes of the key words and ideas', 'hope that you will remember all of it', 'skip the words that you do not know', 'draw pictures instead of writing anything down'],
    answer: 'take notes of the key words and ideas',
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
