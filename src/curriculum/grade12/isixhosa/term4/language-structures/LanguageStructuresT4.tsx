import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'isiXhosa concord revision: noun classes and agreement',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Final revision should revisit the noun class patterns that control subject agreement.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Singular vs plural</strong><p className="text-slate-600">Compare <em>Incwadi iyafundwa</em> with <em>Iincwadi ziyafundwa</em>.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Common error</strong><p className="text-slate-600">Using the wrong subject concord for the noun class.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Tense revision: present, past, future and aspect',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Learners should revise how time and aspect are shown in isiXhosa and in English explanations.</p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Present</strong><p className="text-slate-600">Current action or state.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Past</strong><p className="text-slate-600">Completed action in the past.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Future</strong><p className="text-slate-600">Action that will happen.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Aspect</strong><p className="text-slate-600">Shows whether action is ongoing or completed.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Passive voice and speech conversion: final revision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Paper 1 often checks sentence transformation skills, so the process should be automatic.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Passive steps</strong><p className="text-slate-600">Move the object to subject position, adjust the verb form, and add the agent if needed.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Reported speech rules</strong><p className="text-slate-600">Backshift tense where needed, change pronouns, and adjust time words.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Punctuation and sentence correction mastery',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Sentence correction requires both rule knowledge and careful proofreading.</p>
        <div className="grid gap-3 text-left md:grid-cols-5">
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Colon</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Semicolon</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Apostrophe</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Quotation marks</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Commas</strong></div>
        </div>
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

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'lang41', question: 'Which sentence shows correct concord?', options: ['Iincwadi ziyafundwa.', 'Iincwadi iyafundwa.', 'Incwadi ziyafundwa.', 'Iincwadi bayafundwa.'], answer: 0, explanation: 'Plural “iincwadi” takes the concord “zi-”.' },
  { id: 'lang42', question: 'What is the main difference between “Incwadi iyafundwa” and “Iincwadi ziyafundwa”?', options: ['One is singular and the other is plural', 'One is future tense and the other is past tense', 'One is informal and the other is slang', 'There is no difference'], answer: 0, explanation: 'The noun and concord both change from singular to plural.' },
  { id: 'lang43', question: 'Which tense refers to something that will happen later?', options: ['Future tense', 'Past tense', 'Present tense', 'Perfect aspect only'], answer: 0, explanation: 'Future forms indicate actions that have not happened yet.' },
  { id: 'lang44', question: 'Why is aspect important?', options: ['It shows whether an action is ongoing or completed', 'It tells you the page number', 'It changes nouns into pronouns', 'It replaces concord'], answer: 0, explanation: 'Aspect adds detail about the nature or progress of an action.' },
  { id: 'lang45', question: 'What is the first step in changing an active sentence to passive?', options: ['Move the object into the subject position', 'Delete the verb', 'Remove the noun completely', 'Add quotation marks'], answer: 0, explanation: 'Passive transformation begins by making the object the new subject.' },
  { id: 'lang46', question: 'When changing direct speech to indirect speech, what often changes besides tense?', options: ['Pronouns and time expressions', 'The page margins', 'The paragraph number only', 'The title font'], answer: 0, explanation: 'Reported speech usually needs pronoun and time-word adjustments.' },
  { id: 'lang47', question: 'Which punctuation mark is best before a list?', options: ['Colon', 'Semicolon', 'Dash', 'Apostrophe'], answer: 0, explanation: 'A colon introduces a list or explanation clearly.' },
  { id: 'lang48', question: 'What is the purpose of sentence correction practice?', options: ['To identify and fix grammar and punctuation errors accurately', 'To avoid reading carefully', 'To make every sentence longer', 'To remove all verbs from a passage'], answer: 0, explanation: 'Sentence correction develops accuracy for Paper 1 editing tasks.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const LanguageStructuresT4 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Revision of concord, tenses, passive voice, connectors, punctuation, and sentence correction"
    learnSteps={learnSteps}
    task="gr12-language-structures-t4"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default LanguageStructuresT4;
