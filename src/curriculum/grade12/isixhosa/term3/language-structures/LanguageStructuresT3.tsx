import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Identifying grammar errors: concord and tense',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Editing exam passages requires close attention to agreement and tense consistency.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Common errors</strong><p className="text-slate-600">Subject-verb disagreement, tense shifts, and unclear pronoun reference.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">isiXhosa example</strong><p className="text-slate-600">Incorrect: <em>Abafundi uyafunda</em>. Correct: <em>Abafundi bayafunda</em>.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Style shifts: recognising register change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Register can shift from formal to informal through vocabulary, sentence pattern, and pronoun use.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Formal</strong><p className="text-slate-600">Objective wording, fuller sentences, limited slang.</p></div>
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Informal</strong><p className="text-slate-600">Casual phrases, contractions, and conversational tone.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Why it matters</strong><p className="text-slate-600">Exam tasks often require controlled formal style.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Vocabulary refinement: precision and range',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Precise word choice improves both meaning and style.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Improve precision</strong><p className="text-slate-600">Replace vague words like “nice” or “bad” with sharper alternatives.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Build range</strong><p className="text-slate-600">Use synonyms and word families without changing the meaning unfairly.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Punctuation in complex sentences',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Complex sentences often need punctuation to prevent confusion.</p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Comma</strong><p className="text-sm text-slate-600">Relative clauses or extra detail.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Colon</strong><p className="text-sm text-slate-600">List or explanation follows.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Semicolon</strong><p className="text-sm text-slate-600">Links related clauses.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Dash</strong><p className="text-sm text-slate-600">Adds emphasis or aside.</p></div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these grammar-and-style terms to support complex sentence control and careful editing.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Igatya"} phonetic={"[i'gaːtja]"} meaning={"Clause"} lang="xh" />
          <PronunciationPlayer word={"Isihlanganisi"} phonetic={"[isi.hlaŋga'niːsi]"} meaning={"Conjunction"} lang="xh" />
          <PronunciationPlayer word={"Isimbo"} phonetic={"[i'simbɔ]"} meaning={"Style"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing"} lang="xh" />
          <PronunciationPlayer word={"Isivakalisi"} phonetic={"[isi.vaka'liːsi]"} meaning={"Sentence"} lang="xh" />
          <PronunciationPlayer word={"Isiphumlisi"} phonetic={"[isi.pʰum'liːsi]"} meaning={"Punctuation mark"} lang="xh" />
        </div>
      </div>
    ),
  },
];

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'lang31', question: 'Which sentence contains a concord error?', options: ['Abafundi uyafunda yonke imihla.', 'Abafundi bayafunda yonke imihla.', 'Utitshala ufundisa kakuhle.', 'Iincwadi ziyafundwa.'], answer: 0, explanation: '“Abafundi” is plural and should take “ba-”, not “u-”.' },
  { id: 'lang32', question: 'A tense inconsistency happens when:', options: ['A passage shifts time without reason', 'All verbs match the same time frame', 'The writer uses one clear tense', 'The sentence contains more than one noun'], answer: 0, explanation: 'Unnecessary changes from past to present or future can confuse meaning.' },
  { id: 'lang33', question: 'Which phrase sounds most formal?', options: ['The results indicate a need for improvement.', 'The results are kinda bad to be honest.', 'Things went like totally wrong in the end.', 'It was a super rough result you know what I mean.'], answer: 0, explanation: 'Formal register uses precise, controlled vocabulary and avoids slang.' },
  { id: 'lang34', question: 'Why should you recognise style shifts in an exam passage?', options: ['To keep the register appropriate to the task', 'To remove the adjectives from the passage', 'To change each sentence into dialogue in the passage', 'To ignore the audience'], answer: 0, explanation: 'Register must match the purpose and audience of the writing task.' },
  { id: 'lang35', question: 'Which revision improves vocabulary precision?', options: ['Replacing “good” with “convincing” for an argument', 'Using “good” as the adjective in each paragraph', 'Replacing “good” with “very good” in the whole essay', 'Adding slang words to make the essay friendlier'], answer: 0, explanation: 'Precise words communicate meaning more accurately.' },
  { id: 'lang36', question: 'What is a useful way to avoid repetition?', options: ['Use synonyms that keep the meaning accurate', 'Replace the repeated verbs with the word “do”', 'Repeat the same adjective for a stronger effect', 'Delete the nouns that appear more than once'], answer: 0, explanation: 'Synonyms can add variety if they fit the exact context.' },
  { id: 'lang37', question: 'Which punctuation mark can join two closely related independent clauses?', options: ['Semicolon', 'Question mark', 'Apostrophe', 'Quotation mark'], answer: 0, explanation: 'A semicolon links closely connected clauses without a conjunction.' },
  { id: 'lang38', question: 'When are commas especially useful in complex sentences?', options: ['To set off extra or inserted information', 'To mark the end of a complete sentence', 'To replace the conjunctions in the sentence', 'To show that a noun belongs to someone'], answer: 0, explanation: 'Commas often help structure clauses and make complex sentences easier to read.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const LanguageStructuresT3 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Exam editing, style shifts, vocabulary refinement, punctuation, and sentence control"
    learnSteps={learnSteps}
    task="gr12-language-structures-t3"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default LanguageStructuresT3;
