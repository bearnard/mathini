import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT3.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A discursive paragraph typically...',
    options: ['presents a topic, weighs several views and reaches a conclusion', 'has no structure and rambles from point to point', 'supports only one opinion and gives no evidence', 'is extremely short and has no conclusion'],
    answer: 'presents a topic, weighs several views and reaches a conclusion',
    explanation: 'Discursive writing explores a topic fairly by considering different angles.',
  },
  {
    prompt: 'A formal letter should include...',
    options: ['addresses, date, formal greeting, body, closing and signature', 'slang throughout, to sound warm and open to all', 'a loose structure that is chosen by the writer', 'no date, since the reader will know the day'],
    answer: 'addresses, date, formal greeting, body, closing and signature',
    explanation: 'Formal letter conventions show professionalism and respect.',
  },
  {
    prompt: 'An article for publication is written to...',
    options: ['inform, entertain or persuade a specific audience', 'please the writer and no other person', 'be written without any clear purpose in mind', 'be read only in an academic setting'],
    answer: 'inform, entertain or persuade a specific audience',
    explanation: 'Articles have a clear target audience and intended effect.',
  },
  {
    prompt: 'A project in an academic context should show...',
    options: ['research, original thinking, organisation and effort', 'the minimum amount of work that earns a pass', 'content that was copied from other writers', 'ideas that have not been finished or linked up'],
    answer: 'research, original thinking, organisation and effort',
    explanation: 'Projects demonstrate learning through sustained, intentional work.',
  },
  {
    prompt: 'The purpose of a presentation is to...',
    options: ['communicate information or ideas well to an audience', 'read the slides aloud word for word', 'be given with no visuals to look at', 'pay no heed to how the audience is reacting'],
    answer: 'communicate information or ideas well to an audience',
    explanation: 'Presentations require clear organization and attention to audience needs.',
  },
  {
    prompt: 'When switching between writing styles, you should...',
    options: ['match your tone and vocabulary to the new context and audience', 'use the same style in every piece of writing', 'pay no heed to the purpose of the text', 'mix the styles so that the text sounds varied'],
    answer: 'match your tone and vocabulary to the new context and audience',
    explanation: 'Adaptability in style shows communication skill and professionalism.',
  },
  {
    prompt: 'Evidence in a discursive paragraph is best when it is...',
    options: ['specific, relevant and from reliable sources', 'vague and general, so that it fits any point', 'made up so that it supports the argument', 'from sources that few people have heard of'],
    answer: 'specific, relevant and from reliable sources',
    explanation: 'Strong evidence builds credibility and persuades readers.',
  },
  {
    prompt: 'A project presentation should...',
    options: ['arrange content logically, use visuals well and invite questions', 'overwhelm the audience with text on each slide', 'read each slide word for word to the class', 'leave no time for the audience to respond'],
    answer: 'arrange content logically, use visuals well and invite questions',
    explanation: 'Engaging presentations balance information delivery with audience involvement.',
  },
];

const WritingPresentingT3 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Discursive paragraph, formal letter, article, project writing, and presentation"
    learnSteps={learnSteps}
    task="gr9-writing-presenting-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT3;
