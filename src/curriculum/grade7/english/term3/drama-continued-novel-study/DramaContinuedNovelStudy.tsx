import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret drama and extended novel study',
    image: {
      src: '/curriculum/grade7/eng/term3/drama-continued-novel-study/diagram.webp',
      alt: 'learners discussing a drama scene and novel chapter with dialogue and conflict notes',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 may focus on drama or continue novel analysis. Learners interpret dialogue, conflict, theme, and
          character response in both oral and written tasks.
        </p>
      </div>
    ),
  },
  {
    title: 'Track speaker and stage or narrative clues',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In drama, identify who speaks and what stage actions reveal. In novels, use narration and character actions
          to infer motivation and relationships.
        </p>
      </div>
    ),
  },
  {
    title: 'Link conflict to theme',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Conflict drives plot and often reveals the central theme. Strong responses explain how specific events
          connect to bigger ideas.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which feature is most typical of drama text?',
    options: ['Dialogue and stage directions', 'Only chapter summaries', 'Recipe steps', 'A graph and axis labels'],
    answer: 'Dialogue and stage directions',
    explanation: 'Drama is written for performance, so these features are central.',
  },
  {
    prompt: 'In a novel, character motivation means...',
    options: [
      'the reason a character acts in a certain way',
      'the colour of the book cover',
      'the order of page numbers',
      'the speed of reading aloud',
    ],
    answer: 'the reason a character acts in a certain way',
    explanation: 'Motivation explains why characters make choices.',
  },
  {
    prompt: 'A speaker-identification question asks you to...',
    options: [
      'recognise who is talking in a scene',
      'count punctuation marks only',
      'name the textbook publisher',
      'rewrite the whole scene',
    ],
    answer: 'recognise who is talking in a scene',
    explanation: 'You must use context clues to identify the speaker.',
  },
  {
    prompt: 'Which event best shows conflict?',
    options: [
      'Two friends disagree about an important decision',
      'A title appears at the top of a page',
      'A list of characters is printed',
      'The story starts on page one',
    ],
    answer: 'Two friends disagree about an important decision',
    explanation: 'Conflict involves a meaningful struggle or opposition.',
  },
  {
    prompt: 'Why are stage directions useful?',
    options: [
      'They show movement, mood, and action on stage',
      'They replace all spoken lines',
      'They are only decorative symbols',
      'They describe printing errors',
    ],
    answer: 'They show movement, mood, and action on stage',
    explanation: 'Stage directions guide how scenes are performed and understood.',
  },
  {
    prompt: 'Which response best links conflict and theme?',
    options: [
      'The argument about honesty reveals the theme of trust.',
      'The scene has many words, so the theme is punctuation.',
      'The chapter is long, so conflict is unimportant.',
      'The cover image alone explains every theme.',
    ],
    answer: 'The argument about honesty reveals the theme of trust.',
    explanation: 'It explains how a specific conflict supports a broader idea.',
  },
  {
    prompt: 'What should a short paragraph response include?',
    options: [
      'a claim, textual evidence, and explanation',
      'only copied lines with no comment',
      'a random opinion with no text support',
      'only a heading',
    ],
    answer: 'a claim, textual evidence, and explanation',
    explanation: 'A complete response states a point and supports it clearly.',
  },
  {
    prompt: 'If a character changes from selfish to helpful, this most directly shows...',
    options: ['character development', 'rhyme scheme', 'register shift', 'passive voice'],
    answer: 'character development',
    explanation: 'A meaningful change in behaviour shows development over time.',
  },
];

const DramaContinuedNovelStudy = () => (
  <CapsSubjectTopic
    title="Drama or Continued Novel Study"
    subtitle="Dialogue, conflict, theme and character response in extended literature"
    learnSteps={learnSteps}
    task="gr7-drama-continued-novel-study-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default DramaContinuedNovelStudy;

