import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'The theme of a story is...',
    options: ['the main message or big idea', 'the title that the author chose for the book', 'the place where the story is set', 'the names of the people in the story'],
    answer: 'the main message or big idea',
    explanation: 'Theme is the underlying idea that gives meaning to the entire story.',
  },
  {
    prompt: 'To find the theme, you should...',
    options: ['look for patterns and ideas that repeat', 'read the first page and skip the rest', 'pay no attention to what the characters do', 'pick a theme from the title alone'],
    answer: 'look for patterns and ideas that repeat',
    explanation: 'Themes emerge through repeated imagery, character choices, and plot events.',
  },
  {
    prompt: 'Tone in a story refers to...',
    options: ["the author's attitude to the subject", 'how loudly the characters speak in a scene', 'how many pages the story runs to', 'the size of the print used in the book'],
    answer: "the author's attitude to the subject",
    explanation: 'Tone is the emotional quality created by word choice and narrative perspective.',
  },
  {
    prompt: 'Supporting evidence for a theme comes from...',
    options: ['specific quotes or descriptions from the text', 'what you wish that the story said', 'the picture on the front cover of the book', 'the opinions that other people hold about it'],
    answer: 'specific quotes or descriptions from the text',
    explanation: 'Evidence proves your interpretation and makes your analysis credible.',
  },
  {
    prompt: 'Conflict in a story is usually...',
    options: ['a struggle between forces', 'a happy ending', 'a character\'s name', 'the book\'s price'],
    answer: 'a struggle between forces',
    explanation: 'Conflict drives the plot and often connects to the theme of the story.',
  },
  {
    prompt: 'When viewing a visual text like a poster or image, you should first notice...',
    options: ['colors, size, layout, and main image', 'how many words are on it', 'the paper it was printed on', 'who owns it'],
    answer: 'colors, size, layout, and main image',
    explanation: 'Visual elements create the first impression and carry meaning in design.',
  },
  {
    prompt: 'Poetry often uses imagery to...',
    options: ["create vivid pictures in the reader's mind", 'make the poem harder for readers to follow', 'hide the meaning of the poem from the reader', 'give a list of facts about the topic'],
    answer: "create vivid pictures in the reader's mind",
    explanation: 'Imagery appeals to the senses and makes abstract ideas concrete and memorable.',
  },
  {
    prompt: 'Setting in a story helps readers...',
    options: ['understand the context and the atmosphere', 'skip parts of the story that seem dull', 'pay no heed to the people in the story', 'finish reading the story more quickly'],
    answer: 'understand the context and the atmosphere',
    explanation: 'Setting shapes character behaviour and influences the mood of the narrative.',
  },
];

const ReadingViewingT1 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Short stories, visual texts, poetry, theme, conflict, and setting analysis"
    learnSteps={learnSteps}
    task="gr9-reading-viewing-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT1;
