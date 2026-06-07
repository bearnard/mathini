import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/xho/term4/language-structures/diagram.webp", alt: "Language Structures" },
    title: 'Grammar revision — concord, tenses, and passive voice',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Consolidate the three most heavily tested grammar areas in Grade 11 isiXhosa.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Concord (isivumelwano)</strong>
            <p className="text-slate-600">Verb prefix must match the noun class of the subject. E.g. "Abantwana bayafunda."</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Tenses</strong>
            <p className="text-slate-600">Present: -ya- infix. Past: suffix change (-ile). Future: -zo- auxiliary. Keep tense consistent within a text.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Passive voice (-wa)</strong>
            <p className="text-slate-600">Object becomes subject; verb takes -wa suffix. E.g. "Incwadi ifundwa ngumntwana."</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Sentence control — variety and clarity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Controlled sentence writing earns marks in Paper 1 and in essays. Practise these patterns:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Simple sentence</strong>
            <p className="text-slate-600">One main clause: "UNomsa uyafunda."</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Compound sentence</strong>
            <p className="text-slate-600">Two main clauses joined by a connector: "UNomsa uyafunda kwaye uyabonelela."</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Complex sentence</strong>
            <p className="text-slate-600">Main + subordinate clause: "UNomsa uyafunda nangona ediniwe."</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Varying sentence types demonstrates linguistic sophistication — a key assessment criterion.</p>
      </div>
    ),
  },
  {
    title: 'Editing skills for examination tasks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Editing questions in Paper 1 ask you to <strong>identify and correct errors</strong> in a given passage.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Types of errors to recognise:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li><strong>Concord errors:</strong> wrong verb prefix for noun class</li>
            <li><strong>Tense errors:</strong> inconsistent or incorrect tense forms</li>
            <li><strong>Punctuation errors:</strong> missing or wrong marks</li>
            <li><strong>Vocabulary errors:</strong> wrong word choice for context</li>
            <li><strong>Reported speech errors:</strong> pronoun not adjusted after conversion</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Punctuation review — accuracy for final assessment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Revise all major punctuation marks and their functions for examination accuracy.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-3">
            <strong className="text-blue-700">. , ? !</strong>
            <p className="text-sm text-slate-600">End marks and comma: basic sentence punctuation.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-3">
            <strong className="text-purple-700">: ;</strong>
            <p className="text-sm text-slate-600">Colon introduces; semicolon links related clauses.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-3">
            <strong className="text-rose-700">" " ( )</strong>
            <p className="text-sm text-slate-600">Quotation marks for direct speech; brackets for added information.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-3">
            <strong className="text-amber-700">— –</strong>
            <p className="text-sm text-slate-600">Em dash for interruption; en dash for ranges.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-3">
            <strong className="text-emerald-700">Capital letters</strong>
            <p className="text-sm text-slate-600">Sentence openings, proper nouns, titles, and direct speech beginnings.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-3">
            <strong className="text-slate-700">Apostrophe '</strong>
            <p className="text-sm text-slate-600">Contraction and (in English loanwords) possession.</p>
          </div>
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

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence has the CORRECT concord for "izinja" (dogs)?',
    options: [
      '"Izinja ziyagijima."',
      '"Izinja uyagijima."',
      '"Izinja bayagijima."',
      '"Izinja iyagijima."',
    ],
    answer: '"Izinja ziyagijima."',
    explanation: '"Izinja" belongs to the izi-/iz- noun class. Its subject concord is "zi-", giving "ziyagijima."',
  },
  {
    prompt: 'Which infix signals the PRESENT TENSE in isiXhosa verbs?',
    options: ['-ya-', '-zo-', '-ile', '-nga-'],
    answer: '-ya-',
    explanation: 'The -ya- infix is inserted between the subject concord and the verb stem to form the present tense (e.g. "Ndiyafunda" = I read/am reading).',
  },
  {
    prompt: 'Which auxiliary signals the FUTURE TENSE in isiXhosa?',
    options: ['-zo-', '-ya-', '-ile', '-nga-'],
    answer: '-zo-',
    explanation: 'The future tense auxiliary -zo- (e.g. "Ndizofunda" = I will read) marks actions that have not yet occurred.',
  },
  {
    prompt: 'Which suffix is added to a verb stem to form the PASSIVE VOICE in isiXhosa?',
    options: ['-wa', '-ile', '-nga', '-zo'],
    answer: '-wa',
    explanation: 'Adding -wa (or a phonological variant) to the verb stem creates the passive: "funda" (read) → "fundwa" (be read).',
  },
  {
    prompt: 'Which punctuation mark correctly completes: "Ufunde izincwadi ezintatu ___ incwadi yobugcisa, eyobukhosi, neyobufundisi."?',
    options: [':', ',', ';', '?'],
    answer: ':',
    explanation: 'A colon introduces a list or explanation that follows a complete clause — it is the correct choice here.',
  },
  {
    prompt: 'Which sentence demonstrates INCORRECT tense consistency?',
    options: [
      '"Ndiyafunda iincwadi izolo kwaye ndizofunda namhlanje."',
      '"Ndifunde iincwadi izolo kwaye ndiyafunda namhlanje."',
      '"Ndifunde iincwadi izolo kwaye ndizofunda ngomso."',
      '"Ndiyafunda iincwadi kwaye ndizofunda ngomso."',
    ],
    answer: '"Ndiyafunda iincwadi izolo kwaye ndizofunda namhlanje."',
    explanation: '"Izolo" (yesterday) requires the past tense; "ndiyafunda" is present — a tense mismatch that creates inconsistency.',
  },
  {
    prompt: 'What type of error is present in: "Abantwana uyagijima endleleni."?',
    options: [
      'Concord error — "uyagijima" uses the u- prefix but "abantwana" requires ba-',
      'Tense error — wrong tense for the action',
      'Punctuation error — missing full stop',
      'Vocabulary error — wrong word for "children"',
    ],
    answer: 'Concord error — "uyagijima" uses the u- prefix but "abantwana" requires ba-',
    explanation: '"Abantwana" (children, aba- class) requires the ba- concord: "Abantwana bayagijima."',
  },
  {
    prompt: 'Why are quotation marks used in isiXhosa writing?',
    options: [
      'To enclose direct speech and certain titles',
      'To indicate the passive voice',
      'To replace a full stop at the end of a sentence',
      'To show that a word is informal',
    ],
    answer: 'To enclose direct speech and certain titles',
    explanation: 'Quotation marks signal that the enclosed words are spoken directly or that a title is being referenced.',
  },
  {
    prompt: 'Which strategy BEST helps avoid concord errors when writing under exam pressure?',
    options: [
      'Identify the subject and its noun class before writing each verb',
      'Always use the u- prefix regardless of the subject',
      'Avoid using any verbs in your essay',
      'Only write simple sentences with one word each',
    ],
    answer: 'Identify the subject and its noun class before writing each verb',
    explanation: 'Consciously identifying the noun class of each subject before choosing the verb prefix prevents the most common concord errors.',
  },
];

const LanguageStructuresT4 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Revision of concord, tenses, passive voice, sentence control, editing, and punctuation"
    learnSteps={learnSteps}
    task="gr11-xho-language-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT4;
