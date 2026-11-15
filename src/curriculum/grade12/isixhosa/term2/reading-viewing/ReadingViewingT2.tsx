import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT2.data';

const learnSteps = xhosaSteps(lesson);

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'rv21', question: 'A theme in a novel is best described as:', options: ['A central idea developed through the text', 'The number of chapters and pages in the book', 'Only the setting of the story', 'The font on the cover'], answer: 0, explanation: 'Themes are recurring ideas or messages developed through characters and events.' },
  { id: 'rv22', question: 'Character motivation refers to:', options: ['Why a character acts in a certain way', 'How many lines a character speaks in each scene', 'The costume of a character', 'The title of the chapter'], answer: 0, explanation: 'Motivation explains the reasons behind a character’s decisions and behaviour.' },
  { id: 'rv23', question: 'Which feature in a newspaper article often gives the main idea immediately?', options: ['Headline', 'Page number', 'Staple position', 'Printer name'], answer: 0, explanation: 'The headline is designed to attract attention and state or frame the central story angle.' },
  { id: 'rv24', question: 'What is the purpose of a caption under a photograph?', options: ['To help readers understand the image', 'To hide the main topic of the article', 'To replace the first paragraph of the article', 'To show the price of the newspaper'], answer: 0, explanation: 'Captions identify or interpret the photo and connect it to the article.' },
  { id: 'rv25', question: 'When comparing viewpoints, what should you look for first?', options: ['Each writer’s stance on the issue', 'The paper quality', 'The number of paragraphs in each text', 'The writer’s handwriting'], answer: 0, explanation: 'Viewpoint comparison begins by identifying what each writer believes or argues.' },
  { id: 'rv26', question: 'Which statement best shows connotative meaning?', options: ['Calling a leader “a lion” suggests courage and power.', 'A lion is a large animal in the cat family found in Africa.', 'The article is six paragraphs long.', 'The play was published in 2002.'], answer: 0, explanation: 'Connotation includes implied associations beyond the literal meaning.' },
  { id: 'rv27', question: 'In drama analysis, dialogue can help you understand:', options: ['Theme and character perspective', 'Only the date of publication', 'The size of the theatre and the audience', 'The cost of the script'], answer: 0, explanation: 'Dialogue reveals personality, conflict, values, and thematic development.' },
  { id: 'rv28', question: 'Why should critical readers notice bias?', options: ['Because word choice can shape how an issue is shown', 'Because bias makes the spelling easier to check', 'Because a biased text must be a work of fiction', 'Because bias shows that the writer needs no evidence'], answer: 0, explanation: 'Bias affects perspective, emphasis, and fairness in a text.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ReadingViewingT2 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Novel or drama study, media texts, perspective, theme, and critical literacy"
    learnSteps={learnSteps}
    task="gr12-reading-viewing-t2"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ReadingViewingT2;
