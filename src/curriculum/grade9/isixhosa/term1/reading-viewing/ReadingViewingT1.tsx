import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Short stories, visual texts, poetry, and theme analysis',
    image: {
      src: '/curriculum/grade9/isixhosa/term1/reading-viewing/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners analysing literary and visual texts for theme, tone, and supporting evidence',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 1 Reading & Viewing focuses on <strong>short stories, visual texts, poetry,</strong>{' '}
          with closer attention to theme, tone, and conflict.
        </p>
        <p className="text-slate-600">
          Learners develop skills to analyse literary and visual texts using evidence and contextual understanding.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'The theme of a story is...',
    options: ['the main message or universal idea', 'the title of the book', 'the setting location', 'the character names'],
    answer: 'the main message or universal idea',
    explanation: 'Theme is the underlying idea that gives meaning to the entire story.',
  },
  {
    prompt: 'To find the theme, you should...',
    options: ['look for patterns and repeated ideas', 'skim only the first page', 'ignore character actions', 'guess randomly'],
    answer: 'look for patterns and repeated ideas',
    explanation: 'Themes emerge through repeated imagery, character choices, and plot events.',
  },
  {
    prompt: 'Tone in a story refers to...',
    options: ['the author\'s attitude toward the subject', 'how loud characters speak', 'the number of pages', 'the font size'],
    answer: 'the author\'s attitude toward the subject',
    explanation: 'Tone is the emotional quality created by word choice and narrative perspective.',
  },
  {
    prompt: 'Supporting evidence for a theme comes from...',
    options: ['specific quotes or descriptions from the text', 'what you wish the story said', 'the book cover', 'other people\'s opinions'],
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
    options: ['create vivid pictures in the reader\'s mind', 'confuse the reader', 'avoid meaning', 'list random facts'],
    answer: 'create vivid pictures in the reader\'s mind',
    explanation: 'Imagery appeals to the senses and makes abstract ideas concrete and memorable.',
  },
  {
    prompt: 'Setting in a story helps readers...',
    options: ['understand the context and atmosphere', 'skip important parts', 'ignore characters', 'finish quickly'],
    answer: 'understand the context and atmosphere',
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
