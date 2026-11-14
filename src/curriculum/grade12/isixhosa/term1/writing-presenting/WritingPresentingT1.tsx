import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Planning your essay: thesis and mind map',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong essays begin with a clear <strong>thesis statement</strong> and a quick <strong>mind map</strong>
          that groups ideas before drafting.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Thesis statement</strong>
            <p className="text-slate-600">This is the central idea or controlling position that guides the whole essay.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Mind map</strong>
            <p className="text-slate-600">Place the topic in the centre and branch out examples, feelings, events, and arguments.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Planning first helps you avoid repetition, weak structure, and off-topic paragraphs.</p>
      </div>
    ),
  },
  {
    title: 'TEEL paragraph structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use <strong>TEEL</strong> to build exam-ready body paragraphs with clear logic.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">T — Topic</strong><p className="text-slate-600">State the paragraph&apos;s main idea.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">E — Explain</strong><p className="text-slate-600">Develop the idea clearly.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">E — Evidence</strong><p className="text-slate-600">Give an example or detail.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">L — Link</strong><p className="text-slate-600">Connect back to the thesis.</p></div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 text-left">
          <p className="font-semibold text-slate-800">isiXhosa example frame</p>
          <p className="text-slate-600">&quot;Ukuzimisela kubalulekile kubafundi. Xa umfundi ecwangcisa ixesha lakhe, uyakwazi ukugqiba umsebenzi. Oku kubonisa ukuba impumelelo ixhomekeke ekuzinzeni.&quot;</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Reflective and narrative essays',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reflective and narrative essays often use the <strong>first person</strong>, a personal voice, and detail
          that helps the reader imagine the experience.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Reflective writing</strong>
            <p className="text-slate-600">Shows thought, feeling, and what you learnt from the event.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Narrative writing</strong>
            <p className="text-slate-600">Tells a story in chronological or carefully structured sequence with setting and action.</p>
          </div>
        </div>
        <ul className="mx-auto max-w-2xl list-disc space-y-1 rounded-2xl bg-slate-50 p-5 text-left text-slate-600">
          <li>Use sensory details: sound, smell, touch, and sight.</li>
          <li>Keep time sequence clear.</li>
          <li>End by showing a lesson, insight, or meaningful outcome.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Formal letter format',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Transactional writing requires accurate <strong>format</strong> and <strong>tone</strong>. In a formal letter,
          layout matters as much as language.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Before the body</strong>
            <p className="text-slate-600">Sender address, date, recipient address, and formal salutation.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Body</strong>
            <p className="text-slate-600">Explain your purpose clearly in organised paragraphs using respectful language.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Closing</strong>
            <p className="text-slate-600">Use a formal ending such as &quot;Ngokwenu&quot; or &quot;Yours faithfully&quot;, then sign.</p>
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

type RawItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const rawItems: RawItem[] = [
  {
    id: 'wp1',
    question: 'What is the main purpose of a thesis statement in an essay?',
    options: ['To express the central idea that guides the whole essay', 'To list every example in the introduction', 'To replace the conclusion', 'To greet the reader politely'],
    answer: 0,
    explanation: 'A thesis gives direction to the essay and helps each paragraph stay focused on the same main idea.',
  },
  {
    id: 'wp2',
    question: 'Why is a mind map useful before writing?',
    options: ['It helps you generate and organise ideas quickly', 'It replaces the need for paragraphs', 'It is only used after proofreading', 'It is a type of formal letter'],
    answer: 0,
    explanation: 'Mind maps help you see connections between ideas and organise them before drafting.',
  },
  {
    id: 'wp3',
    question: 'In TEEL, what does the first E stand for?',
    options: ['Explain', 'Edit', 'Evaluate', 'End'],
    answer: 0,
    explanation: 'After the topic sentence, you explain the idea before giving evidence and linking back.',
  },
  {
    id: 'wp4',
    question: 'Which sentence best works as a TEEL topic sentence?',
    options: ['Discipline is one of the main reasons learners succeed at school.', 'For example, one learner woke up early yesterday.', 'This proves my previous paragraph was correct.', 'In conclusion, school rules are important.'],
    answer: 0,
    explanation: 'A topic sentence introduces the main idea of the paragraph clearly and directly.',
  },
  {
    id: 'wp5',
    question: 'Which feature is common in reflective and narrative essays?',
    options: ['Personal voice and detail', 'Tables and bullet-point headings only', 'Strictly objective reporting', 'No sequence of events'],
    answer: 0,
    explanation: 'These essay types often use personal perspective and vivid detail to shape meaning.',
  },
  {
    id: 'wp6',
    question: 'Which order is correct for the beginning of a formal letter?',
    options: ['Sender address, date, recipient address, salutation', 'Salutation, signature, sender address, body', 'Recipient address, body, heading, date', 'Date, conclusion, title, salutation'],
    answer: 0,
    explanation: 'Formal letters follow a recognised layout so the reader can immediately identify sender, date, recipient, and purpose.',
  },
  {
    id: 'wp7',
    question: 'Which closing is most suitable for a formal letter?',
    options: ['Ngokwenu / Yours faithfully', 'See you soon', 'Lots of love', 'Cheers'],
    answer: 0,
    explanation: 'Formal endings match the respectful tone expected in transactional writing.',
  },
  {
    id: 'wp8',
    question: 'What should you do after drafting your essay?',
    options: ['Edit for clarity, grammar, and format', 'Add unrelated ideas to make it longer', 'Remove the introduction completely', 'Change to informal slang'],
    answer: 0,
    explanation: 'Editing improves structure, language accuracy, and appropriateness for the task.',
  },
];

const bank: CapsItem[] = rawItems.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Essay planning, reflective or narrative writing, transactional texts, drafting and editing"
    learnSteps={learnSteps}
    task="gr12-writing-presenting-t1"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default WritingPresentingT1;
