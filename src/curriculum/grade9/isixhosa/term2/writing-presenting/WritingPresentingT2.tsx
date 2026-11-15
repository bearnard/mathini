import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT2.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A formal email should include...',
    options: ['a greeting, clear subject, purposeful body and polite closing', 'no punctuation, so that it looks casual and quick', 'slang throughout, so that it sounds friendly', 'a loose structure that is chosen by the writer'],
    answer: 'a greeting, clear subject, purposeful body and polite closing',
    explanation: 'Email conventions ensure your message is clear and professional.',
  },
  {
    prompt: 'Register means...',
    options: ['the level of formality that suits the audience', 'a list of names that is kept in a school book', 'how loudly a person writes on the page', 'the size of the print that a writer chooses'],
    answer: 'the level of formality that suits the audience',
    explanation: 'Matching register to context shows respect and professionalism.',
  },
  {
    prompt: 'A review of a product or service typically includes...',
    options: ['a description, personal opinion and supporting reasons', 'compliments only, with nothing negative', 'a few words with no specific details', 'exaggerations that make the product sound good'],
    answer: 'a description, personal opinion and supporting reasons',
    explanation: 'Good reviews are honest, specific, and explain the reviewer\'s reasoning.',
  },
  {
    prompt: 'A report should be written in...',
    options: ['objective, clear language that focuses on facts', 'very emotional language that moves the reader', 'a poem with rhyme and rhythm', 'riddles and puzzles that make readers think'],
    answer: 'objective, clear language that focuses on facts',
    explanation: 'Reports require neutral, accurate language to inform readers effectively.',
  },
  {
    prompt: 'Dialogue in writing is used to...',
    options: ['bring characters and scenes to life through speech', 'avoid narrative description in a story', 'fill up space on the page', 'confuse readers about who is speaking'],
    answer: 'bring characters and scenes to life through speech',
    explanation: 'Dialogue adds authenticity, reveals character, and moves the story forward.',
  },
  {
    prompt: 'Transactional writing is writing that...',
    options: ['does business or achieves a practical purpose', 'is made up and imaginative in style', 'has no clear goal for the reader', 'is always written in an academic style'],
    answer: 'does business or achieves a practical purpose',
    explanation: 'Transactional writing includes emails, applications, complaints, and inquiries.',
  },
  {
    prompt: 'The structure of a report typically includes...',
    options: ['a title, introduction, findings, conclusion and recommendations', 'a single paragraph with no headings', 'notes in any order that the writer wants', 'headings chosen to suit the mood of the writer'],
    answer: 'a title, introduction, findings, conclusion and recommendations',
    explanation: 'Clear structure helps readers understand and navigate your report.',
  },
  {
    prompt: 'When writing a complaint or formal request, you should...',
    options: ['be clear, polite and specific about the issue and the outcome', 'be rude and demanding so that you are noticed', 'stay vague so that no one can argue with you', 'never explain what the problem is to the reader'],
    answer: 'be clear, polite and specific about the issue and the outcome',
    explanation: 'Professionalism increases the likelihood of a positive response.',
  },
];

const WritingPresentingT2 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Formal email, review, report, dialogue, and transactional writing"
    learnSteps={learnSteps}
    task="gr9-writing-presenting-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT2;
