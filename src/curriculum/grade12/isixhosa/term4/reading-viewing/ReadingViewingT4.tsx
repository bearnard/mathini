import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT4.data';

const learnSteps = xhosaSteps(lesson);

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'rv41', question: 'Which rule belongs to summary writing?', options: ['Use only main points and avoid opinions', 'Add many examples from your own life', 'Rewrite the whole passage', 'Ignore the word limit'], answer: 0, explanation: 'Summaries should be concise, focused, and free from extra opinion.' },
  { id: 'rv42', question: 'Why should summary points be numbered when required?', options: ['It shows the points clearly and follows instructions', 'It makes the passage longer', 'It replaces paraphrasing', 'It hides the main idea'], answer: 0, explanation: 'Numbering is part of exam technique and helps organise responses.' },
  { id: 'rv43', question: 'An explicit comprehension question requires you to:', options: ['Find information stated directly in the text', 'Invent an answer beyond the text', 'Ignore the passage and use opinion', 'Write only one random word'], answer: 0, explanation: 'Explicit questions test retrieval of directly stated information.' },
  { id: 'rv44', question: 'What does mark allocation help you decide?', options: ['How much detail to include in the answer', 'Which text to skip', 'Whether to use a heading', 'What the title should be'], answer: 0, explanation: 'More marks usually mean more detail or more than one point is needed.' },
  { id: 'rv45', question: 'Which feature is especially important in a cartoon?', options: ['Facial expression', 'Page thickness', 'Binding colour', 'ISBN number'], answer: 0, explanation: 'Expressions often reveal attitude, humour, or criticism in cartoons.' },
  { id: 'rv46', question: 'A target audience is:', options: ['The group the text is meant to influence', 'The name of the illustrator', 'A summary point', 'The printer’s company'], answer: 0, explanation: 'Advertisements are designed for a specific audience or consumer group.' },
  { id: 'rv47', question: 'What does P-E-E stand for in literature revision?', options: ['Point, Evidence, Explanation', 'Poem, Essay, Evaluation', 'Plan, Edit, Expand', 'Paragraph, Example, Ending'], answer: 0, explanation: 'P-E-E is a useful structure for building supported literature responses.' },
  { id: 'rv48', question: 'Why is time management important in a literature paper?', options: ['It helps you answer all sections without rushing at the end', 'It replaces studying', 'It makes every answer shorter', 'It prevents you from quoting'], answer: 0, explanation: 'Time planning helps you balance marks and complete the paper effectively.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Final revision across prescribed literature, comprehension, summary, and visual texts"
    learnSteps={learnSteps}
    task="gr12-reading-viewing-t4"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ReadingViewingT4;
