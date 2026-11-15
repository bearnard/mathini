import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT3.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'In a drama script, speaker labels help readers to...',
    options: ['identify who is talking', 'find verb tense only', 'count paragraphs only', 'change plot order'],
    answer: 'identify who is talking',
    explanation: 'Speaker labels show which character delivers each line.',
  },
  {
    prompt: 'Conflict in a drama scene is...',
    options: ['the central tension or problem', 'the font style', 'the cover page colour', 'the punctuation count'],
    answer: 'the central tension or problem',
    explanation: 'Conflict drives action and character decisions.',
  },
  {
    prompt: 'Mood in poetry is mainly the...',
    options: ['the feeling that is created for the reader', 'the number of lines in the poem', 'the surname of the author of the poem', 'the type of paper that the poem is printed on'],
    answer: 'the feeling that is created for the reader',
    explanation: 'Mood describes the emotional atmosphere of the poem.',
  },
  {
    prompt: 'A literary response should include...',
    options: ['personal view supported by text', 'only copied questions', 'random facts', 'no reference to the text'],
    answer: 'personal view supported by text',
    explanation: 'Strong responses combine opinion and evidence.',
  },
  {
    prompt: 'Visual support in reading tasks is useful because it...',
    options: ['adds clues to meaning', 'replaces all reading', 'removes context', 'changes the genre'],
    answer: 'adds clues to meaning',
    explanation: 'Images and layout can strengthen interpretation.',
  },
  {
    prompt: 'Which question checks understanding of a speaker in drama?',
    options: ['Why does this character say these words here?', 'How many pages are in the booklet?', 'What is the desk colour?', 'Who printed the worksheet?'],
    answer: 'Why does this character say these words here?',
    explanation: 'It focuses on motivation and context in the scene.',
  },
  {
    prompt: 'A short story response should track...',
    options: ['the character, the events and the message', 'the font size that is used in the text only', 'the width of the margin on the page only', 'a list of the spelling words only'],
    answer: 'the character, the events and the message',
    explanation: 'These elements support deeper comprehension.',
  },
  {
    prompt: 'When unsure of a literary answer, the best strategy is to...',
    options: ['re-read and find evidence', 'skip immediately', 'guess from memory only', 'copy another learner'],
    answer: 're-read and find evidence',
    explanation: 'Returning to the text improves answer accuracy.',
  },
];

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Drama scenes, short stories, poetry, visual support, and literary response"
    learnSteps={learnSteps}
    task="gr8-reading-viewing-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT3;
