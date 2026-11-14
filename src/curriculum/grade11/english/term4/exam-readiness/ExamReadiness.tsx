import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/eng/term4/exam-readiness/diagram.webp", alt: "Exam Readiness" },
    title: 'Paper 1: language and comprehension routines',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Paper 1 tests reading and language skills. There are four sections — know each one's demands.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Section A — Comprehension</strong>
            <p className="text-slate-600 text-sm">Answer questions ranging from literal to critical. Always quote and explain. Match your answer length to the marks available.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Section B — Summary</strong>
            <p className="text-slate-600 text-sm">Find the required number of main points, paraphrase them, and write in continuous prose within the word limit.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Section C — Language in context</strong>
            <p className="text-slate-600 text-sm">Grammar, editing, voice conversion, speech conversion, and word-level analysis. Know your terminology.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Section D — Visual / Additional text</strong>
            <p className="text-slate-600 text-sm">Read cartoons, ads, or infographics. Analyse composition, colour, message, and how text and image work together.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Paper 2: literature and contextual questions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Paper 2 assesses all three prescribed genres. Know the structure before the exam.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-indigo-700 text-sm">Contextual questions (based on an extract):</p>
          <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1">
            <li>Quote directly from the given extract</li>
            <li>Name literary devices and explain their effects</li>
            <li>Link to theme, character, or broader context of the text</li>
          </ul>
          <p className="font-bold text-indigo-700 text-sm mt-3">Essay questions:</p>
          <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1">
            <li>Plan a thesis in 3–5 minutes before writing</li>
            <li>Use PEEL for each body paragraph</li>
            <li>Quote briefly and precisely — embed quotes in analysis</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Paper 3: writing strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Paper 3 has two sections: an extended essay and a transactional piece. Both are marked for content AND language.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Section A — Essay (~350–400 words)</strong>
            <p className="text-slate-600 text-sm">Choose your strongest topic. Plan for 5–10 min. Write with clear structure, varied language, and consistent form. Edit.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Section B — Transactional (~180–200 words)</strong>
            <p className="text-slate-600 text-sm">Apply the exact format for the required text type. Check register, layout features (headings, sign-offs), and purpose alignment.</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl text-left">
          <p className="text-sm text-slate-600"><strong>Common trap:</strong> Switching essay types mid-way. If you start argumentative, stay argumentative throughout.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Time management and exam technique',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          All three papers have fixed time allocations. Practise under timed conditions before the exam — it is a skill that needs rehearsal.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-slate-700 text-sm">General time allocation principles:</p>
          <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1">
            <li>Spend time proportional to marks — 1 mark ≈ ~1.5 minutes</li>
            <li>Paper 1: do not overwrite comprehension answers — be precise</li>
            <li>Paper 2: plan before writing the essay question</li>
            <li>Paper 3: plan 5–10 min, write 40–45 min, edit 5 min per section</li>
            <li>Skip and return: never leave a long question blank — return to it</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the best approach when you encounter an unseen comprehension passage?',
    options: ['Read the passage once quickly and start to answer', 'Read the questions first, then read the passage and annotate it', 'Skip the comprehension and go on to the language section', 'Summarise the passage before you answer any question'],
    answer: 'Read the questions first, then read the passage and annotate it',
    explanation: 'Reading questions before the passage helps you read actively — you know what information to track from the start.',
  },
  {
    prompt: 'What does a summary question in Paper 1 require?',
    options: ['A creative retelling of the passage from a new point of view', 'Find the required main ideas and write them in your own words', 'Copying the most important sentences out of the passage', 'Translating the passage into much simpler language'],
    answer: 'Find the required main ideas and write them in your own words',
    explanation: 'CAPS summary questions are strictly assessed: correct number of points, own words, and within the specified word limit.',
  },
  {
    prompt: 'What is a "purpose" question in Paper 1?',
    options: ['A question about the year in which the author was born', 'A question on what the writer wants to achieve with the text', 'A question about the moral lesson of the story', 'A question that asks you to rewrite part of the text'],
    answer: 'A question on what the writer wants to achieve with the text',
    explanation: 'Purpose questions ask: why did the writer make this choice? What effect does it have on the reader? Answer with reference to the text.',
  },
  {
    prompt: 'How should you plan an essay before writing in Paper 3?',
    options: ['Start writing at once, since planning wastes marks', 'Spend 5-10 minutes brainstorming, picking a form and outlining 3-4 points', 'Write the conclusion first, then fill in the rest', 'Copy the question topic as your introduction to save time'],
    answer: 'Spend 5-10 minutes brainstorming, picking a form and outlining 3-4 points',
    explanation: 'A plan improves structure and coherence, both heavily weighted in Paper 3. Five minutes of planning can significantly improve a 40-minute essay.',
  },
  {
    prompt: 'What is a "structure question" in unseen poetry analysis?',
    options: ['A question on how to spell the hard words in the poem', "A question on how the poet's form (stanzas, rhyme) makes meaning", 'A question on the life story and background of the poet', 'A question that asks you to rewrite the poem as prose'],
    answer: "A question on how the poet's form (stanzas, rhyme) makes meaning",
    explanation: 'Structure/form questions require you to explain how visual and rhythmic choices (enjambment, stanza breaks, rhyme) contribute to the poem\'s meaning and effect.',
  },
  {
    prompt: 'Why is time management critical in Paper 3?',
    options: ['It is not critical, as you can ask for extra time', 'Both sections need planning, writing and editing within the total time', 'Paper 3 is always the easiest of the papers', 'The invigilator penalises candidates who run over time'],
    answer: 'Both sections need planning, writing and editing within the total time',
    explanation: 'Running out of time and leaving the transactional piece incomplete is a common and costly mistake. Plan your time before you start.',
  },
  {
    prompt: 'What should you do if you are uncertain about an answer in any paper?',
    options: ['Leave it blank rather than risk a wrong answer', 'Write something sensible, move on, return later; never leave a blank', 'Copy the answer that you wrote to the question before', 'Write "I don\'t know" so that the examiner understands'],
    answer: 'Write something sensible, move on, return later; never leave a blank',
    explanation: 'A blank answer scores zero. A partial or reasonable attempt may earn marks. Always attempt every question.',
  },
  {
    prompt: 'In a Paper 2 contextual question, what must you always do after selecting a quotation?',
    options: ['Copy the whole paragraph that holds the quotation', 'Analyse it: say what it shows, the device used and its effect', 'Translate it into your first language', 'Count the number of words in the quotation'],
    answer: 'Analyse it: say what it shows, the device used and its effect',
    explanation: 'A quotation without analysis earns minimal marks. The explanation is where meaning is demonstrated.',
  },
  {
    prompt: 'What is a common exam trap in Paper 3 essay writing?',
    options: ['Using too many sophisticated words in your essay', 'Starting as an argumentative essay, then switching to narrative', 'Spending too long on editing instead of writing', 'Using transitions between the paragraphs of the essay'],
    answer: 'Starting as an argumentative essay, then switching to narrative',
    explanation: 'Consistency of form is a core marking criterion. Decide on your essay type before writing and maintain it throughout.',
  },
  {
    prompt: 'What is the typical word count for a Grade 11 essay in Paper 3?',
    options: [
      '100–150 words',
      '200–250 words',
      '350–400 words',
      '600–700 words',
    ],
    answer: '350–400 words',
    explanation: 'Grade 11 CAPS Paper 3 essays are typically 350–400 words. Staying within this range shows control. Significantly over or under may affect marks.',
  },
];

const ExamReadiness = () => (
  <CapsSubjectTopic
    title="Exam Readiness"
    subtitle="Paper 1, 2 and 3 strategies, time management and avoiding common exam traps"
    learnSteps={learnSteps}
    task="gr11-exam-readiness-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ExamReadiness;
