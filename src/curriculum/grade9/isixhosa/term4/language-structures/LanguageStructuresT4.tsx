import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Revision of all major grammar, punctuation, and sentence control',
    image: {
      src: '/curriculum/grade9/isixhosa/term4/language-structures/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners revising grammar, punctuation, and sentence construction for final assessment',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Language Structures focuses on <strong>revision of all major grammar points, punctuation,</strong>{' '}
          and sentence control.
        </p>
        <p className="text-slate-600">
          Learners correct common errors and prepare for the move into FET language demands.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Tense consistency within a paragraph means...',
    options: ['maintaining the same tense unless the meaning requires a shift', 'randomly changing tenses', 'using only past tense', 'avoiding all tenses'],
    answer: 'maintaining the same tense unless the meaning requires a shift',
    explanation: 'Tense consistency helps readers follow events clearly.',
  },
  {
    prompt: 'Common sentence errors include...',
    options: ['run-ons, fragments, and subject-verb disagreement', 'using periods', 'using commas correctly', 'clear organization'],
    answer: 'run-ons, fragments, and subject-verb disagreement',
    explanation: 'Recognizing these errors helps you avoid them in your writing.',
  },
  {
    prompt: 'Punctuation serves to...',
    options: ['clarify meaning and separate ideas for the reader', 'decorate writing', 'slow readers down', 'make writing harder'],
    answer: 'clarify meaning and separate ideas for the reader',
    explanation: 'Correct punctuation is essential for clear communication.',
  },
  {
    prompt: 'Subject-verb agreement means...',
    options: ['the subject and verb must match in number (singular or plural)', 'subjects can ignore verbs', 'verbs never change form', 'plurality does not matter'],
    answer: 'the subject and verb must match in number (singular or plural)',
    explanation: 'Agreement is fundamental to grammatically correct sentences.',
  },
  {
    prompt: 'A run-on sentence occurs when...',
    options: ['two independent clauses are joined without proper punctuation or conjunctions', 'a sentence is very long', 'there are too many adjectives', 'someone talks too much'],
    answer: 'two independent clauses are joined without proper punctuation or conjunctions',
    explanation: 'Run-ons confuse readers; fix them by separating or joining correctly.',
  },
  {
    prompt: 'A sentence fragment is...',
    options: ['an incomplete sentence lacking a subject or main verb', 'a very short sentence', 'a sentence with few words', 'a creative choice'],
    answer: 'an incomplete sentence lacking a subject or main verb',
    explanation: 'Fragments are errors unless used deliberately for stylistic effect.',
  },
  {
    prompt: 'Word order in isiXhosa is important because it...',
    options: ['affects meaning and sentence structure', 'is not important', 'only matters for decorations', 'is random'],
    answer: 'affects meaning and sentence structure',
    explanation: 'Correct word order ensures your intended meaning is communicated.',
  },
  {
    prompt: 'When correcting grammar in your own writing, look for...',
    options: ['tense errors, agreement problems, and punctuation mistakes', 'only capital letters', 'only long words', 'nothing in particular'],
    answer: 'tense errors, agreement problems, and punctuation mistakes',
    explanation: 'Systematic checking catches the most common and impactful errors.',
  },
];

const LanguageStructuresT4 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Revision of all major grammar, punctuation, and sentence control"
    learnSteps={learnSteps}
    task="gr9-language-structures-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT4;
