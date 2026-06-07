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
    options: [
      'Read the passage once very quickly and start answering immediately',
      'Read the questions first to know what to look for, then read the passage carefully, annotating as you go',
      'Skip the comprehension and move to the language section',
      'Summarise the passage before answering any questions',
    ],
    answer: 'Read the questions first to know what to look for, then read the passage carefully, annotating as you go',
    explanation: 'Reading questions before the passage helps you read actively — you know what information to track from the start.',
  },
  {
    prompt: 'What does a summary question in Paper 1 require?',
    options: [
      'A creative retelling of the passage from a different perspective',
      'Identifying the required number of main ideas, paraphrasing them in own words, and writing in continuous prose within the word limit',
      'Copying the most important sentences from the passage',
      'Translating the passage into simpler language',
    ],
    answer: 'Identifying the required number of main ideas, paraphrasing them in own words, and writing in continuous prose within the word limit',
    explanation: 'CAPS summary questions are strictly assessed: correct number of points, own words, and within the specified word limit.',
  },
  {
    prompt: 'What is a "purpose" question in Paper 1?',
    options: [
      'A question about why the author was born',
      'A question asking you to identify or explain what the writer intends to achieve through their text or a specific technique',
      'A question about the moral of the story',
      'A question that requires you to rewrite part of the text',
    ],
    answer: 'A question asking you to identify or explain what the writer intends to achieve through their text or a specific technique',
    explanation: 'Purpose questions ask: why did the writer make this choice? What effect does it have on the reader? Answer with reference to the text.',
  },
  {
    prompt: 'How should you plan an essay before writing in Paper 3?',
    options: [
      'Start writing immediately to save time — planning wastes marks',
      'Spend 5–10 minutes brainstorming, choosing a form, and outlining 3–4 main points before you start writing',
      'Write the conclusion first, then fill in the introduction and body',
      'Copy the question topic as your introduction to save planning time',
    ],
    answer: 'Spend 5–10 minutes brainstorming, choosing a form, and outlining 3–4 main points before you start writing',
    explanation: 'A plan improves structure and coherence, both heavily weighted in Paper 3. Five minutes of planning can significantly improve a 40-minute essay.',
  },
  {
    prompt: 'What is a "structure question" in unseen poetry analysis?',
    options: [
      'A question about how to spell difficult words in the poem',
      'A question that asks you to analyse how the poet\'s use of form (stanzas, line breaks, rhyme, rhythm) creates meaning',
      'A question about the biography of the poet',
      'A question that asks you to rewrite the poem in prose',
    ],
    answer: 'A question that asks you to analyse how the poet\'s use of form (stanzas, line breaks, rhyme, rhythm) creates meaning',
    explanation: 'Structure/form questions require you to explain how visual and rhythmic choices (enjambment, stanza breaks, rhyme) contribute to the poem\'s meaning and effect.',
  },
  {
    prompt: 'Why is time management critical in Paper 3?',
    options: [
      'It is not critical — you can always ask for extra time',
      'Because both sections (essay and transactional) must be completed and each requires planning, writing, and editing within the total time',
      'Because Paper 3 is always the easiest paper',
      'Because the invigilator penalises candidates who run over time',
    ],
    answer: 'Because both sections (essay and transactional) must be completed and each requires planning, writing, and editing within the total time',
    explanation: 'Running out of time and leaving the transactional piece incomplete is a common and costly mistake. Plan your time before you start.',
  },
  {
    prompt: 'What should you do if you are uncertain about an answer in any paper?',
    options: [
      'Leave it blank rather than risk a wrong answer',
      'Write something reasonable, move on, and return to refine if time allows — never leave a space empty',
      'Copy your answer from the previous question',
      'Write "I don\'t know" so the examiner understands your difficulty',
    ],
    answer: 'Write something reasonable, move on, and return to refine if time allows — never leave a space empty',
    explanation: 'A blank answer scores zero. A partial or reasonable attempt may earn marks. Always attempt every question.',
  },
  {
    prompt: 'In a Paper 2 contextual question, what must you always do after selecting a quotation?',
    options: [
      'Copy the entire paragraph containing the quotation for context',
      'Analyse it — explain what the quotation shows, what device is used, and what effect it creates in relation to the question',
      'Translate it into your first language',
      'Count the number of words in the quotation',
    ],
    answer: 'Analyse it — explain what the quotation shows, what device is used, and what effect it creates in relation to the question',
    explanation: 'A quotation without analysis earns minimal marks. The explanation is where meaning is demonstrated.',
  },
  {
    prompt: 'What is a common exam trap in Paper 3 essay writing?',
    options: [
      'Using too many sophisticated words',
      'Starting the essay with an argumentative form and then switching to narrative mid-way, creating an inconsistent response',
      'Spending too long editing rather than writing',
      'Using transitions between paragraphs',
    ],
    answer: 'Starting the essay with an argumentative form and then switching to narrative mid-way, creating an inconsistent response',
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
