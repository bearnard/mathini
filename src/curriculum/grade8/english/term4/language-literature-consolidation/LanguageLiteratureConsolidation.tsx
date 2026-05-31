import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Integrate language and literature skills',
    image: {
      src: '/curriculum/grade8/eng/term4/language-literature-consolidation/diagram.webp',
      alt: 'learner combining comprehension literature response grammar and summary practice',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Consolidation means moving between comprehension, literature response, grammar revision, and summary writing
          within one learning sequence.
        </p>
      </div>
    ),
  },
  {
    title: 'Answer integrated paper-style questions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners practise retrieving evidence, interpreting meaning, and applying grammar in context, as expected in
          integrated assessment papers.
        </p>
      </div>
    ),
  },
  {
    title: 'Refine summaries and language accuracy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective summaries keep core points concise. Language checks focus on tense consistency, punctuation, and
          sentence control.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main aim of language and literature consolidation?',
    options: ['to apply multiple English skills together', 'to study punctuation alone', 'to avoid comprehension practice', 'to replace all writing tasks'],
    answer: 'to apply multiple English skills together',
    explanation: 'Consolidation integrates reading, writing, language and literature response.',
  },
  {
    prompt: 'A strong summary should...',
    options: ['present key ideas briefly and clearly', 'copy the source text in full', 'add unrelated opinions', 'focus only on minor details'],
    answer: 'present key ideas briefly and clearly',
    explanation: 'Summaries are concise and selective.',
  },
  {
    prompt: 'In comprehension responses, evidence is used to...',
    options: ['support interpretation with text details', 'replace reading completely', 'avoid answering the question', 'increase word count without meaning'],
    answer: 'support interpretation with text details',
    explanation: 'Evidence shows that answers are grounded in the text.',
  },
  {
    prompt: 'Which grammar check is important during consolidation?',
    options: ['tense consistency across sentences', 'changing every noun to an adjective', 'removing all conjunctions', 'using one punctuation mark only'],
    answer: 'tense consistency across sentences',
    explanation: 'Consistent tense keeps meaning clear and accurate.',
  },
  {
    prompt: 'Integrated paper-style questions usually require...',
    options: ['switching between skills in one assessment', 'one-skill tasks only', 'no interpretation of text', 'memorised responses without context'],
    answer: 'switching between skills in one assessment',
    explanation: 'Integrated tasks assess flexible use of knowledge.',
  },
  {
    prompt: 'Literature response questions often ask learners to...',
    options: ['explain ideas like theme using textual support', 'count punctuation marks only', 'rewrite the title page', 'identify publication logos only'],
    answer: 'explain ideas like theme using textual support',
    explanation: 'Literature responses require interpretation and evidence.',
  },
  {
    prompt: 'Which sentence best reflects concise summary style?',
    options: ['The report highlights water shortages and proposes community saving measures.', 'The report is extremely interesting and very amazing and incredibly important for everyone always.', 'The report has many words and a title and many paragraphs and many things.', 'The report reminds me of my weekend and favourite snacks.'],
    answer: 'The report highlights water shortages and proposes community saving measures.',
    explanation: 'The sentence captures key content without unnecessary detail.',
  },
  {
    prompt: 'Why revisit grammar during literature and comprehension revision?',
    options: ['clear language improves quality of all answers', 'grammar is only needed in oral work', 'grammar has no effect on meaning', 'grammar replaces interpretation'],
    answer: 'clear language improves quality of all answers',
    explanation: 'Accurate language helps express understanding effectively.',
  },
];

const LanguageLiteratureConsolidation = () => (
  <CapsSubjectTopic
    title="Language and Literature Consolidation"
    subtitle="Integrated comprehension, literature response, summary and grammar revision"
    learnSteps={learnSteps}
    task="gr8-language-literature-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LanguageLiteratureConsolidation;
