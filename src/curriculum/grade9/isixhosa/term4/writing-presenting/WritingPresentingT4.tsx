import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Writing under exam conditions requires...',
    options: ['planning first, clear organisation and managing your time', 'starting at once without any plan for the answer', 'writing as fast as you can to fill every page', 'leaving out the structure to save some time'],
    answer: 'planning first, clear organisation and managing your time',
    explanation: 'Even brief planning improves exam essay quality and reduces errors.',
  },
  {
    prompt: 'A report in an exam context should be...',
    options: ['organised with clear headings, in objective, factual language', 'written in the form of a story with a plot', 'written in a very informal style, with slang', 'made up of loose notes with no structure at all'],
    answer: 'organised with clear headings, in objective, factual language',
    explanation: 'Clear report structure makes information easy to find and understand.',
  },
  {
    prompt: 'A review as an exam task requires you to...',
    options: ['give a description, a judgment and reasons for it', 'give praise only, so that you stay polite', 'avoid giving any opinion of your own to the reader', 'make no judgment about the work that is reviewed'],
    answer: 'give a description, a judgment and reasons for it',
    explanation: 'Reviews balance objectivity with personal response.',
  },
  {
    prompt: 'Summarizing a passage in an exam means...',
    options: ['capturing the main ideas in fewer words, clearly', 'copying out the passage word for word from the text', 'leaving out the important information from it', 'adding your own ideas to the text of the passage'],
    answer: 'capturing the main ideas in fewer words, clearly',
    explanation: 'Successful summarizing shows comprehension and concision.',
  },
  {
    prompt: 'An exam essay should have...',
    options: ['an introduction with a thesis, body paragraphs and a conclusion', 'a loose structure with no clear plan of ideas', 'a thesis that is stated but has no support', 'body paragraphs with no introduction before them'],
    answer: 'an introduction with a thesis, body paragraphs and a conclusion',
    explanation: 'This structure ensures your argument is clear and complete.',
  },
  {
    prompt: 'Proofreading means...',
    options: ['checking spelling, grammar, punctuation and sense errors', 'ignoring small mistakes since they are minor', 'rewriting the whole text again from the start', 'skipping the last paragraph to save some time'],
    answer: 'checking spelling, grammar, punctuation and sense errors',
    explanation: 'Careful proofreading prevents careless errors that reduce marks.',
  },
  {
    prompt: 'When revising transactional writing for exams, focus on...',
    options: ['format conventions, suitable register and a clear message', 'creative touches that add flair to the text', 'very long sentences that show your range', 'informal slang that sounds friendly'],
    answer: 'format conventions, suitable register and a clear message',
    explanation: 'Transactional writing rewards precision and professionalism.',
  },
  {
    prompt: 'Reviewing your own exam essay before submission helps you...',
    options: ['catch errors, improve phrasing and check completeness', 'bring in new errors that were not there', 'confuse your ideas by changing too much', 'waste time that you need for other tasks'],
    answer: 'catch errors, improve phrasing and check completeness',
    explanation: 'Self-review is your last opportunity to strengthen your response.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Report, review, summary, exam essays, and proofreading"
    learnSteps={learnSteps}
    task="gr9-writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT4;
