import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

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

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Keep these core grammar words active in memory while revising forms, tense control, and punctuation.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isibizo"} phonetic={"[isi'biːzo]"} meaning={"Noun"} lang="xh" />
          <PronunciationPlayer word={"Isimelabizo"} phonetic={"[isi.mɛla'biːzo]"} meaning={"Pronoun"} lang="xh" />
          <PronunciationPlayer word={"Ixesha"} phonetic={"[i'kʰeʃa]"} meaning={"Tense / time"} lang="xh" />
          <PronunciationPlayer word={"Kwaye"} phonetic={"[kwa'jɛ]"} meaning={"And"} lang="xh" />
          <PronunciationPlayer word={"Kodwa"} phonetic={"[kɔ'dwa]"} meaning={"But"} lang="xh" />
          <PronunciationPlayer word={"Isiphumlisi"} phonetic={"[isi.pʰum'liːsi]"} meaning={"Punctuation mark"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Tense consistency within a paragraph means...',
    options: ['keeping to the same tense unless the meaning needs a change', 'changing tenses whenever you start a new sentence', 'using only the past tense in every paragraph', 'leaving out verb tenses so that the text is brief'],
    answer: 'keeping to the same tense unless the meaning needs a change',
    explanation: 'Tense consistency helps readers follow events clearly.',
  },
  {
    prompt: 'Common sentence errors include...',
    options: ['run-ons, fragments and subject-verb disagreement', 'using full stops to end each of the sentences', 'using commas in the right places in a text', 'organising the ideas in a clear order for readers'],
    answer: 'run-ons, fragments and subject-verb disagreement',
    explanation: 'Recognizing these errors helps you avoid them in your writing.',
  },
  {
    prompt: 'Punctuation serves to...',
    options: ['clarify meaning and separate ideas for the reader', 'decorate the writing so that it looks neat', 'slow the reader down on every line', 'make the writing harder to read'],
    answer: 'clarify meaning and separate ideas for the reader',
    explanation: 'Correct punctuation is essential for clear communication.',
  },
  {
    prompt: 'Subject-verb agreement means...',
    options: ['the subject and verb match in number, singular or plural', 'subjects may disagree with their verbs', 'verbs keep the same form for any subject', 'singular and plural forms are not important'],
    answer: 'the subject and verb match in number, singular or plural',
    explanation: 'Agreement is fundamental to grammatically correct sentences.',
  },
  {
    prompt: 'A run-on sentence occurs when...',
    options: ['two independent clauses run together without correct links', 'a sentence is very long and has many details', 'a sentence has too many adjectives in it', 'a speaker talks for too long at one time'],
    answer: 'two independent clauses run together without correct links',
    explanation: 'Run-ons confuse readers; fix them by separating or joining correctly.',
  },
  {
    prompt: 'A sentence fragment is...',
    options: ['an incomplete sentence with no subject or main verb', 'a very short sentence of two or three words', 'a sentence with few words in it', 'a creative choice that is correct in essays'],
    answer: 'an incomplete sentence with no subject or main verb',
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
    options: ['tense errors, agreement problems and punctuation mistakes', 'only the capital letters at the start of sentences', 'only the long words in each sentence', 'things that have gone wrong, wherever they are'],
    answer: 'tense errors, agreement problems and punctuation mistakes',
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
