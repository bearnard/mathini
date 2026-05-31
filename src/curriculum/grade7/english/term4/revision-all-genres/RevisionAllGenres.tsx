import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise all genres for integrated understanding',
    image: {
      src: '/curriculum/grade7/eng/term4/revision-all-genres/diagram.webp',
      alt: 'learner revising novel, poetry, drama and media comprehension strategies',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 revision combines novel, poetry, drama, and media texts. Learners switch strategies according to
          genre and question type.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply comprehension strategies flexibly',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong revision includes skimming for gist, scanning for detail, finding evidence, and making supported
          inferences across mixed texts.
        </p>
      </div>
    ),
  },
  {
    title: 'Practise summary and mixed-genre responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective summaries keep key ideas only. Mixed-genre questions reward careful reading, precise retrieval, and
          clear explanation.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which set includes the main genres revised in Term 4?',
    options: [
      'Novel, poetry, drama and media texts',
      'Only advertisements and recipes',
      'Only novels and dictionaries',
      'Only exam instructions',
    ],
    answer: 'Novel, poetry, drama and media texts',
    explanation: 'CAPS revision integrates these major genres.',
  },
  {
    prompt: 'Skimming is mainly used to...',
    options: [
      'get the general idea quickly',
      'memorise every punctuation mark',
      'rewrite the text in full',
      'identify only difficult words',
    ],
    answer: 'get the general idea quickly',
    explanation: 'Skimming helps you capture overall meaning fast.',
  },
  {
    prompt: 'Scanning is most useful when you need to...',
    options: [
      'find a specific detail such as a name or date',
      'analyse theme deeply over many paragraphs',
      'guess without reading',
      'summarise from memory only',
    ],
    answer: 'find a specific detail such as a name or date',
    explanation: 'Scanning targets exact information.',
  },
  {
    prompt: 'A good summary should...',
    options: [
      'include key points in concise form',
      'copy every sentence from the text',
      'add unrelated opinions',
      'focus only on small details',
    ],
    answer: 'include key points in concise form',
    explanation: 'Summaries are brief and focus on essentials.',
  },
  {
    prompt: 'Why is evidence important in mixed-genre questions?',
    options: [
      'It shows your answers come from the text',
      'It replaces comprehension skills',
      'It means genre does not matter',
      'It allows random guessing',
    ],
    answer: 'It shows your answers come from the text',
    explanation: 'Text-based evidence supports accurate answers.',
  },
  {
    prompt: 'Which strategy helps when moving from a poem to a media article?',
    options: [
      'Adjust your reading approach to each genre',
      'Use the same exact method for all questions',
      'Ignore headings and structure',
      'Skip inferential questions',
    ],
    answer: 'Adjust your reading approach to each genre',
    explanation: 'Different genres require different focus points.',
  },
  {
    prompt: 'An inference question asks you to...',
    options: [
      'use clues to work out implied meaning',
      'copy a sentence without thinking',
      'count the number of paragraphs',
      'identify the publisher address',
    ],
    answer: 'use clues to work out implied meaning',
    explanation: 'Inference combines textual clues with reasoning.',
  },
  {
    prompt: 'What is a good revision habit before exams?',
    options: [
      'Practise varied question types across genres',
      'Study only one text type all term',
      'Memorise answers without understanding',
      'Avoid timed practice',
    ],
    answer: 'Practise varied question types across genres',
    explanation: 'Varied practice builds flexibility and confidence.',
  },
];

const RevisionAllGenres = () => (
  <CapsSubjectTopic
    title="Revision of All Genres"
    subtitle="Integrated comprehension and response across novel, poetry, drama and media"
    learnSteps={learnSteps}
    task="gr7-revision-all-genres-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default RevisionAllGenres;

