import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { TenseCheck, TenseTimeline, WordRoles } from '@/components/diagrams/english/TenseDiagrams';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise the language building blocks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Language consolidation means revising the rules that make writing accurate. Focus on <strong>parts of
          speech</strong>, <strong>tense</strong>, <strong>speech forms</strong>, <strong>punctuation</strong>, and
          <strong> spelling</strong>.
        </p>
        <WordRoles />
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4 text-slate-700"><strong>Tenses</strong><br />show time</div>
          <div className="rounded-xl bg-violet-50 p-4 text-slate-700"><strong>Punctuation</strong><br />guide the reader</div>
          <div className="rounded-xl bg-rose-50 p-4 text-slate-700"><strong>Spelling</strong><br />build accuracy</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Keep tense and speech forms accurate',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grammar questions often test whether your verb tense stays consistent and whether you can change from direct
          speech to indirect speech without losing meaning.
        </p>
        <TenseTimeline verb="write" plural={false} tenses={['past', 'present']} before="She" after="neatly." />
        <TenseCheck which="revised" />
        <div className="rounded-xl bg-lime-50 p-4 text-slate-700"><strong>Reported speech</strong><br />He said that she wrote neatly.</div>
      </div>
    ),
  },
  {
    title: 'Punctuate and spell for meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct punctuation and spelling help the reader understand your sentence the first time. Check speech marks,
          commas, capital letters, apostrophes, and commonly confused words.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-orange-50 p-4 text-slate-700"><strong>Speech marks</strong><br />show exact words</div>
          <div className="rounded-xl bg-indigo-50 p-4 text-slate-700"><strong>Commas</strong><br />separate ideas clearly</div>
          <div className="rounded-xl bg-teal-50 p-4 text-slate-700"><strong>Capitals</strong><br />start names and sentences</div>
          <div className="rounded-xl bg-red-50 p-4 text-slate-700"><strong>Spelling check</strong><br />look, cover, write, compare</div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which word is a noun in the sentence: “The teacher praised the class”?',
    options: ['teacher', 'praised', 'the', 'praised the'],
    answer: 'teacher',
    explanation: 'A noun names a person, place, thing, or idea. “Teacher” names a person.',
  },
  {
    prompt: 'Choose the correct past tense sentence.',
    options: ['They walked to school yesterday.', 'They walk to school yesterday.', 'They walking to school yesterday.', 'They will walked to school yesterday.'],
    answer: 'They walked to school yesterday.',
    explanation: '“Yesterday” shows the action happened in the past, so “walked” is correct.',
  },
  {
    prompt: 'Which sentence uses direct speech correctly?',
    options: ['Mia said, “I am ready.”', 'Mia said that I am ready.', 'Mia said, I am ready.', 'Mia said “I am ready”. because'],
    answer: 'Mia said, “I am ready.”',
    explanation: 'Direct speech uses a reporting clause, comma, speech marks, and punctuation in the right place.',
  },
  {
    prompt: 'Which sentence is in indirect speech?',
    options: ['Sam said that he was tired.', 'Sam said, “I am tired.”', '“Sam tired,” said he.', 'Sam, tired, said.'],
    answer: 'Sam said that he was tired.',
    explanation: 'Indirect speech reports what was said without quoting the exact words.',
  },
  {
    prompt: 'Which word is an adjective in the phrase “the noisy classroom”?',
    options: ['noisy', 'classroom', 'the', 'the noisy'],
    answer: 'noisy',
    explanation: 'An adjective describes a noun. “Noisy” describes the classroom.',
  },
  {
    prompt: 'Why do we use punctuation?',
    options: ['To make meaning clear for the reader', 'To make every sentence longer', 'To avoid using verbs', 'To replace spelling completely'],
    answer: 'To make meaning clear for the reader',
    explanation: 'Punctuation helps readers understand pauses, speech, questions, and sentence boundaries.',
  },
  {
    prompt: 'Choose the correctly punctuated sentence.',
    options: ['After lunch, we revised grammar.', 'After lunch we revised grammar', 'After lunch; we revised grammar,', 'after lunch, We revised grammar'],
    answer: 'After lunch, we revised grammar.',
    explanation: 'The sentence starts with a capital letter, uses the comma correctly after the introductory phrase, and ends with a full stop.',
  },
  {
    prompt: 'Which strategy best helps you check spelling?',
    options: ['Look, cover, write, compare', 'Guess quickly and move on', 'Change every word to a shorter word', 'Use no vowels at all'],
    answer: 'Look, cover, write, compare',
    explanation: 'This strategy helps you remember the correct letter pattern of a word.',
  },
  {
    prompt: 'Which sentence keeps the tense consistent?',
    options: ['We revised the poem and answered the questions.', 'We revise the poem and answered the questions.', 'We revised the poem and answer the questions.', 'We revising the poem and answered the questions.'],
    answer: 'We revised the poem and answered the questions.',
    explanation: 'Both verbs stay in the past tense, so the sentence is consistent.',
  },
];

const LanguageConsolidation = () => (
  <CapsSubjectTopic
    title="Language Consolidation"
    subtitle="Revising grammar, tense, speech, punctuation, and spelling"
    learnSteps={learnSteps}
    task="language-consolidation"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageConsolidation;
