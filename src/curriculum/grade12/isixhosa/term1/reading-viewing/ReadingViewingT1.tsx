import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/xho/term1/reading-viewing/diagram.webp", alt: "Reading & Viewing" },
    title: 'Reading prescribed literature analytically',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Analytical reading asks you to move beyond retelling the plot. Focus on <strong>theme</strong>,
          <strong> character development</strong>, the writer&apos;s purpose, and evidence from the text.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">What to track</strong>
            <p className="text-slate-600">Look at what characters say, do, and learn, and how this supports the theme.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">What to prove</strong>
            <p className="text-slate-600">Use quotations or paraphrased events to justify every literary claim you make.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Summary writing: extracting main points',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A strong Grade 12 summary selects only the <strong>main ideas</strong> and presents them in your own
          words, usually as 3–5 concise points.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-5">
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">1. Read</strong><p className="text-sm text-slate-600">Understand the whole passage first.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">2. Identify</strong><p className="text-sm text-slate-600">Find topic sentences and repeated ideas.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">3. Paraphrase</strong><p className="text-sm text-slate-600">Use your own wording as far as possible.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">4. Sequence</strong><p className="text-sm text-slate-600">Keep ideas in a logical order.</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">5. Check length</strong><p className="text-sm text-slate-600">Stay inside the required word limit.</p></div>
        </div>
        <div className="rounded-2xl bg-amber-50 p-5 text-left">
          <p className="font-semibold text-amber-800">isiXhosa summary note</p>
          <p className="text-slate-600">If a passage explains study habits, a good summary point could be: &quot;Abafundi mabacwangcise ixesha labo kakuhle.&quot; (Learners should manage their time well.)</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Visual literacy: analysing advertisements and cartoons',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual texts combine images and words. Analyse how the <strong>layout</strong>, dominant image,
          slogan, caption, and persuasive techniques shape meaning.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Advertisements</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Identify the product and target audience.</li>
              <li>Notice colour, font size, slogan, and emotional appeal.</li>
              <li>Ask how the advert persuades the viewer to act.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Cartoons</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Study caption, facial expression, gesture, and symbolism.</li>
              <li>Look for humour, irony, or criticism.</li>
              <li>Explain the social issue or opinion being presented.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Paper 1 comprehension strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          CAPS comprehension questions assess different reading skills, so match your strategy to the question type.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Skimming</strong><p className="text-slate-600">Read quickly for the overall idea.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Scanning</strong><p className="text-slate-600">Search for a detail such as a date or name.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Inference</strong><p className="text-slate-600">Use clues to work out what is implied.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Fact vs opinion</strong><p className="text-slate-600">Decide whether a statement can be proven.</p></div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these reading-and-viewing words so that key text types are easy to recognise and discuss.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ibali"} phonetic={"[i'baːli]"} meaning={"Story"} lang="xh" />
          <PronunciationPlayer word={"Isaziso"} phonetic={"[isa'ziːso]"} meaning={"Notice"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advertisement / poster"} lang="xh" />
          <PronunciationPlayer word={"Umfanekiso"} phonetic={"[umfa'nɛkiso]"} meaning={"Picture / image"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
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
    id: 'rv1',
    question: 'When reading literature analytically, which evidence is most useful?',
    options: ['A quotation or paraphrased event from the text', 'Only your personal opinion', 'The cover design alone', 'A rumour about the author'],
    answer: 0,
    explanation: 'Analytical answers must be grounded in the text itself through quotations or accurate references to events.',
  },
  {
    id: 'rv2',
    question: 'Which step should happen before writing a summary?',
    options: ['Read the full passage to understand the main idea', 'Copy random sentences immediately', 'Write your own opinion first', 'Underline only difficult words'],
    answer: 0,
    explanation: 'You need an overview of the full text before choosing the most important points.',
  },
  {
    id: 'rv3',
    question: 'What should a good summary mainly contain?',
    options: ['Main points in your own words', 'Detailed quotations from every paragraph', 'Examples and jokes from the writer', 'Your emotional reaction to the passage'],
    answer: 0,
    explanation: 'A summary selects essential ideas and rewrites them concisely, without extra examples or opinions.',
  },
  {
    id: 'rv4',
    question: 'In an advertisement, the target audience is:',
    options: ['The group of people the advert is trying to persuade', 'Only the people who designed the advert', 'The first person in the picture', 'Anyone who dislikes the product'],
    answer: 0,
    explanation: 'The target audience is the intended consumer or viewer the advert is aimed at.',
  },
  {
    id: 'rv5',
    question: 'Which feature is especially important when analysing a cartoon?',
    options: ['Facial expression and caption', 'The page number', 'The price of the newspaper', 'The size of the margin only'],
    answer: 0,
    explanation: 'Cartoons communicate meaning through visual clues such as expression, posture, captions, and symbolism.',
  },
  {
    id: 'rv6',
    question: 'What is the difference between skimming and scanning?',
    options: ['Skimming finds the general idea, while scanning looks for a specific detail', 'Skimming means reading aloud, while scanning means reading silently', 'Skimming is for poetry only, while scanning is for prose only', 'There is no difference'],
    answer: 0,
    explanation: 'Skimming is broad and fast; scanning is focused on finding one piece of information.',
  },
  {
    id: 'rv7',
    question: 'Which statement is an opinion rather than a fact?',
    options: ['The novel is the most inspiring text in the syllabus.', 'The novel has 12 chapters.', 'The photograph shows three learners.', 'The advert was published in June.'],
    answer: 0,
    explanation: 'An opinion expresses a judgement and cannot be proved true in the same way as a factual statement.',
  },
  {
    id: 'rv8',
    question: 'Why should you refer to mark allocation in a comprehension paper?',
    options: ['It helps you judge how much detail your answer needs', 'It tells you which questions to skip', 'It changes the wording of the passage', 'It shows the correct answer automatically'],
    answer: 0,
    explanation: 'A 1-mark answer needs less detail than a 3-mark answer, so mark allocation guides response length.',
  },
];

const bank: CapsItem[] = rawItems.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const ReadingViewingT1 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Prescribed literature, visual literacy, comprehension, summary, and critical reading"
    learnSteps={learnSteps}
    task="gr12-reading-viewing-t1"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ReadingViewingT1;
