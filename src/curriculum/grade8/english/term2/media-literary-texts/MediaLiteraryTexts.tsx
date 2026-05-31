import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Compare media and literary text purposes',
    image: {
      src: '/curriculum/grade8/eng/term2/media-literary-texts/diagram.webp',
      alt: 'learner comparing a news report and a short literary scene for structure and message',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Media texts and literary texts shape information differently. News reports prioritise factual clarity, while
          stories use plot and character to build meaning.
        </p>
      </div>
    ),
  },
  {
    title: 'Track fact, opinion and headline technique',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Readers should identify factual claims, subjective opinions, and headline language choices that influence
          interpretation.
        </p>
      </div>
    ),
  },
  {
    title: 'Analyse conflict and theme across genres',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Comparing conflict and theme across articles, folklore, and drama builds stronger understanding of how texts
          communicate ideas.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which text type usually prioritises verified current information?',
    options: ['news report', 'folktale', 'dramatic monologue', 'personal poem'],
    answer: 'news report',
    explanation: 'News reports are designed to communicate factual current events.',
  },
  {
    prompt: 'Which statement is an opinion?',
    options: ['This article is the most inspiring one ever.', 'The article was published on Monday.', 'The report names two speakers.', 'The headline appears in bold.'],
    answer: 'This article is the most inspiring one ever.',
    explanation: 'Words like "most inspiring" express personal judgement.',
  },
  {
    prompt: 'A headline that says "Community Fights Back" mainly aims to...',
    options: ['grab attention with strong wording', 'list every source reference', 'show rhyme pattern', 'explain punctuation rules'],
    answer: 'grab attention with strong wording',
    explanation: 'Headlines often use concise impact language to attract readers.',
  },
  {
    prompt: 'Conflict in a literary text refers to...',
    options: ['the central struggle in the story', 'the publication date', 'the paragraph spacing style', 'the list of references'],
    answer: 'the central struggle in the story',
    explanation: 'Conflict drives plot and character decisions.',
  },
  {
    prompt: 'Which pair best compares genres?',
    options: ['news report: factual focus; folktale: narrative meaning', 'news report: rhyme focus; folktale: statistics', 'news report: dialogue script only; folktale: timetable', 'news report: no audience; folktale: no plot'],
    answer: 'news report: factual focus; folktale: narrative meaning',
    explanation: 'The genres differ in purpose and structure.',
  },
  {
    prompt: 'If a report includes a direct quote from a witness, this is...',
    options: ['supporting evidence', 'figurative language only', 'a stereotype', 'a stanza feature'],
    answer: 'supporting evidence',
    explanation: 'Quoted sources strengthen credibility in media writing.',
  },
  {
    prompt: 'Theme is best described as...',
    options: ['the underlying idea running through a text', 'the font size of the title', 'the number of commas', 'the speaker volume level'],
    answer: 'the underlying idea running through a text',
    explanation: 'Theme reflects the deeper message or concept.',
  },
  {
    prompt: 'Why compare media and literary texts in one lesson?',
    options: ['to see how different forms shape meaning and response', 'to avoid reading carefully', 'to remove evidence from answers', 'to memorise unrelated facts only'],
    answer: 'to see how different forms shape meaning and response',
    explanation: 'Comparison reveals how purpose and technique vary by genre.',
  },
];

const MediaLiteraryTexts = () => (
  <CapsSubjectTopic
    title="Media and Literary Texts"
    subtitle="Comparing information and story shaping across genres"
    learnSteps={learnSteps}
    task="gr8-media-literary-texts-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default MediaLiteraryTexts;
