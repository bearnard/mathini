import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Drama, poetry, short stories, message, tone, and character motivation',
    image: {
      src: '/curriculum/grade9/isixhosa/term3/reading-viewing/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners analysing drama scenes, poetry, and literary character motivation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 Reading & Viewing focuses on <strong>drama, poetry, short stories,</strong>{' '}
          message, tone, and character motivation.
        </p>
        <p className="text-slate-600">
          Learners interpret prescribed or school-based literary texts with more independence and depth.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Drama differs from narrative prose in that it is...',
    options: ['presented through dialogue and action on stage or screen', 'told entirely by a narrator', 'always about happy endings', 'only for adults'],
    answer: 'presented through dialogue and action on stage or screen',
    explanation: 'Drama shows rather than tells, using visual and verbal performance.',
  },
  {
    prompt: 'A dramatic scene\'s tone is created by...',
    options: ['word choice, dialogue pace, stage directions, and lighting', 'only the script words', 'the audience mood only', 'the cost of production'],
    answer: 'word choice, dialogue pace, stage directions, and lighting',
    explanation: 'Tone in drama emerges from multiple theatrical elements working together.',
  },
  {
    prompt: 'Character motivation is...',
    options: ['the reason a character acts or speaks in a particular way', 'how tall a character is', 'the character\'s name', 'always obvious'],
    answer: 'the reason a character acts or speaks in a particular way',
    explanation: 'Motivation explains behavior and deepens our understanding of characters.',
  },
  {
    prompt: 'Poetic devices like metaphor and simile are used to...',
    options: ['create vivid images and convey emotion concisely', 'confuse the reader', 'fill space', 'make poems longer'],
    answer: 'create vivid images and convey emotion concisely',
    explanation: 'Figurative language makes abstract ideas concrete and memorable.',
  },
  {
    prompt: 'The message of a short story is often...',
    options: ['implicit rather than stated, revealed through plot and theme', 'written at the beginning', 'always obvious immediately', 'non-existent'],
    answer: 'implicit rather than stated, revealed through plot and theme',
    explanation: 'Readers must interpret meaning from narrative elements and resolution.',
  },
  {
    prompt: 'Context clues in a poem help you understand...',
    options: ['unfamiliar words and the poet\'s intended meaning', 'only grammar', 'the poem\'s length', 'the poet\'s age'],
    answer: 'unfamiliar words and the poet\'s intended meaning',
    explanation: 'Surrounding words and lines provide hints about unclear terms.',
  },
  {
    prompt: 'Character motivation may come from...',
    options: ['desires, fears, values, past experiences, or external circumstances', 'nothing at all', 'random choices', 'only logical thinking'],
    answer: 'desires, fears, values, past experiences, or external circumstances',
    explanation: 'Multiple sources influence why characters make their choices.',
  },
  {
    prompt: 'When quoting from a text to support analysis, you should...',
    options: ['choose relevant quotes and explain their significance', 'quote randomly', 'avoid explanation', 'quote only dialogue'],
    answer: 'choose relevant quotes and explain their significance',
    explanation: 'Explained quotations integrate evidence into your argument effectively.',
  },
];

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Drama, poetry, short stories, message, tone, and character motivation"
    learnSteps={learnSteps}
    task="gr9-reading-viewing-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT3;
