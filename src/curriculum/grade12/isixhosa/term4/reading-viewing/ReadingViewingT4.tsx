import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Summary writing: 5 rules for the exam',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Final summary revision should focus on the rules examiners expect learners to apply consistently.</p>
        <div className="grid gap-3 text-left md:grid-cols-5">
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">1</strong><p className="text-sm text-slate-600">State only main points.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">2</strong><p className="text-sm text-slate-600">Use own words as far as possible.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">3</strong><p className="text-sm text-slate-600">Number the points.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">4</strong><p className="text-sm text-slate-600">Stay within the word limit.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">5</strong><p className="text-sm text-slate-600">Do not add examples or opinions.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Comprehension across text types: revision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Across prose, drama, poetry, and visual texts, question type determines answer style.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Explicit questions</strong><p className="text-slate-600">The answer is stated directly in the text.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Implicit questions</strong><p className="text-slate-600">You must infer the answer from clues.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Mark allocation</strong><p className="text-slate-600">Use it to judge how detailed your answer should be.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Visual text revision: key features',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Visual literacy revision should cover the recurring features of cartoons, adverts, and information graphics.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Cartoons</strong><p className="text-slate-600">Caption, facial expression, symbolism, irony.</p></div>
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Advertisements</strong><p className="text-slate-600">Target audience, persuasive appeal, layout.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Infographics</strong><p className="text-slate-600">Labels, legend, comparison, trend.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Literature revision: key terms and exam strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Final literature revision should combine terminology with answer technique.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Key terms</strong><p className="text-slate-600">Revise terms from prose, poetry, and drama.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Exam strategy</strong><p className="text-slate-600">Use P-E-E, budget time, and answer the question asked.</p></div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Keep these comprehension words ready while revising stories, visual texts, and summary skills.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ibali"} phonetic={"[i'baːli]"} meaning={"Story"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advert / poster"} lang="xh" />
          <PronunciationPlayer word={"Isishwankathelo"} phonetic={"[isiʃwaŋka'tʰeːlɔ]"} meaning={"Summary"} lang="xh" />
          <PronunciationPlayer word={"Ingcinga"} phonetic={"[iŋ'ciŋga]"} meaning={"Idea / thought"} lang="xh" />
        </div>
      </div>
    ),
  },
];

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'rv41', question: 'Which rule belongs to summary writing?', options: ['Use only main points and avoid opinions', 'Add many examples from your own life', 'Rewrite the whole passage', 'Ignore the word limit'], answer: 0, explanation: 'Summaries should be concise, focused, and free from extra opinion.' },
  { id: 'rv42', question: 'Why should summary points be numbered when required?', options: ['It follows the instruction clearly', 'It lets you copy longer sentences from the text', 'It replaces the need to use your own words', 'It adds extra marks for neat presentation'], answer: 0, explanation: 'Numbering is part of exam technique and helps organise responses.' },
  { id: 'rv43', question: 'An explicit comprehension question requires you to:', options: ['Find information stated directly in the text', 'Invent an answer beyond the text', 'Ignore the passage and use opinion', 'Write only one random word'], answer: 0, explanation: 'Explicit questions test retrieval of directly stated information.' },
  { id: 'rv44', question: 'What does mark allocation help you decide?', options: ['How much detail to include in the answer', 'Which text in the paper to skip', 'Whether to include a heading', 'Which section of the paper to leave unanswered'], answer: 0, explanation: 'More marks usually mean more detail or more than one point is needed.' },
  { id: 'rv45', question: 'Which feature is especially important in a cartoon?', options: ['Facial expression', 'Page thickness', 'Binding colour', 'ISBN number'], answer: 0, explanation: 'Expressions often reveal attitude, humour, or criticism in cartoons.' },
  { id: 'rv46', question: 'A target audience is:', options: ['The group the text is meant to influence', 'The illustrator who drew the pictures', 'The main point of the text', 'The company that printed the advertisement'], answer: 0, explanation: 'Advertisements are designed for a specific audience or consumer group.' },
  { id: 'rv47', question: 'What does P-E-E stand for in literature revision?', options: ['Point, Evidence, Explanation', 'Poem, Essay, Evaluation', 'Plan, Edit, Expand', 'Paragraph, Example, Ending'], answer: 0, explanation: 'P-E-E is a useful structure for building supported literature responses.' },
  { id: 'rv48', question: 'Why is time management important in a literature paper?', options: ['It helps you complete each section on time', 'It replaces the need to study the text', 'It stops you from quoting the text', 'It means you can skip the contextual questions'], answer: 0, explanation: 'Time planning helps you balance marks and complete the paper effectively.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Final revision across prescribed literature, comprehension, summary, and visual texts"
    learnSteps={learnSteps}
    task="gr12-reading-viewing-t4"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ReadingViewingT4;
