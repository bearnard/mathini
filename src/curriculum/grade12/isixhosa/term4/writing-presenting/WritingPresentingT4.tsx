import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Exam essay: planning and time allocation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A practical writing schedule helps you finish a good essay under exam pressure.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">5 min planning</strong><p className="text-slate-600">Create a simple mind map and choose your strongest ideas.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">30 min writing</strong><p className="text-slate-600">Develop the introduction, body, and conclusion fully.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">5 min proofreading</strong><p className="text-slate-600">Check content, grammar, and punctuation at the end.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Transactional text recall: formats',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Quick recall of format features saves time in Paper 3 and reduces avoidable errors.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Common formats</strong>
            <p className="text-slate-600">Formal letter, informal letter, email, report, review, speech, article.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Revision tip</strong>
            <p className="text-slate-600">Know the key layout features that make each task immediately recognisable.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Proofreading routines for the exam',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Proofreading works best when done in a fixed order rather than randomly.</p>
        <div className="grid gap-3 text-left md:grid-cols-5">
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">1</strong><p className="text-sm text-slate-600">Read for sense.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">2</strong><p className="text-sm text-slate-600">Check concord.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">3</strong><p className="text-sm text-slate-600">Check tense.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">4</strong><p className="text-sm text-slate-600">Check punctuation.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">5</strong><p className="text-sm text-slate-600">Check spelling.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Common exam writing mistakes to avoid',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Many marks are lost through preventable errors rather than lack of ideas.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Frequent mistakes</strong><p className="text-slate-600">Wrong format, off-topic content, informal register, and missing introduction or conclusion.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Good habit</strong><p className="text-slate-600">Keep checking the question so your answer stays focused and properly structured.</p></div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these essay-writing terms aloud so that planning, structuring, and editing are easier to manage.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isincoko"} phonetic={"[isiŋ'kɔːkɔ]"} meaning={"Essay"} lang="xh" />
          <PronunciationPlayer word={"Intshayelelo"} phonetic={"[intʃaje'lelo]"} meaning={"Introduction"} lang="xh" />
          <PronunciationPlayer word={"Umhlathi"} phonetic={"[um'ɬaːti]"} meaning={"Paragraph"} lang="xh" />
          <PronunciationPlayer word={"Isiphelo"} phonetic={"[isi'pʰɛlɔ]"} meaning={"Conclusion"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing"} lang="xh" />
        </div>
      </div>
    ),
  },
];

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'wp41', question: 'How much time is suggested here for planning an exam essay?', options: ['5 minutes', '15 minutes', '25 minutes', 'No planning time'], answer: 0, explanation: 'A short, focused planning stage helps organise ideas without wasting time.' },
  { id: 'wp42', question: 'Why is a simple mind map useful before writing?', options: ['It helps you organise your strongest points quickly', 'It replaces the whole essay', 'It is only for informal letters', 'It removes the need for proofreading'], answer: 0, explanation: 'A mind map helps with structure and keeps the response focused.' },
  { id: 'wp43', question: 'Which text type needs clear format recall in exams?', options: ['Formal letter', 'Poem analysis only', 'Listening summary only', 'Pronunciation drill only'], answer: 0, explanation: 'Transactional writing tasks are assessed partly on correct format.' },
  { id: 'wp44', question: 'What should you check first when proofreading?', options: ['Whether the writing makes sense as a whole', 'Only spelling of the title', 'Only the final sentence', 'Only the length of the introduction'], answer: 0, explanation: 'Reading for sense first helps you catch content and coherence problems before smaller errors.' },
  { id: 'wp45', question: 'After checking sense, which grammar point is suggested next?', options: ['Concord', 'Dialogue punctuation only', 'Title choice', 'Paragraph spacing only'], answer: 0, explanation: 'The proofreading routine given moves from meaning to concord, then tense, punctuation, and spelling.' },
  { id: 'wp46', question: 'Which is a common exam writing mistake?', options: ['Using informal register in a formal task', 'Writing a clear introduction', 'Following the correct format', 'Proofreading carefully'], answer: 0, explanation: 'Register mismatch is a common reason learners lose marks.' },
  { id: 'wp47', question: 'Why is time management important in exam writing?', options: ['It helps you plan, write, and edit within the paper time', 'It removes the need for ideas', 'It guarantees full marks', 'It means format no longer matters'], answer: 0, explanation: 'Time control ensures all stages of the writing task are completed.' },
  { id: 'wp48', question: 'Which choice best suits an effective essay opening?', options: ['A clear first sentence that introduces the focus', 'An unrelated joke', 'A closing phrase like “Yours faithfully”', 'A list of random facts with no topic'], answer: 0, explanation: 'A strong opening sentence establishes the direction of the essay immediately.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Final exam essays, transactional recall, editing, and time management"
    learnSteps={learnSteps}
    task="gr12-writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default WritingPresentingT4;
