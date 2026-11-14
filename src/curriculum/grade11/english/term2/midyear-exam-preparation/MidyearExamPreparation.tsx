import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding the three exam papers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 English HL has <strong>three papers</strong>. Understanding what each tests is the foundation of all exam preparation.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Paper 1 — Language in context</strong>
            <p className="text-slate-600 text-sm">Comprehension, summary, and language (grammar/editing) questions. Tests reading, inference, and language knowledge.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Paper 2 — Literature</strong>
            <p className="text-slate-600 text-sm">Contextual and essay questions on prescribed texts: novel/folklore, drama, and poetry. Tests literary analysis.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Paper 3 — Writing</strong>
            <p className="text-slate-600 text-sm">Essay (narrative, argumentative, discursive, reflective, or descriptive) and a transactional text. Tests writing ability.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Paper 1: comprehension, summary and language',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Paper 1 requires careful reading, precise answers, and accurate language knowledge.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Comprehension strategy</strong>
            <p className="text-slate-600 text-sm">Read the questions before the passage. Answer using evidence — quote and explain. Match detail level to marks available.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Summary strategy</strong>
            <p className="text-slate-600 text-sm">Find the required number of main points, paraphrase them, and write in continuous prose within the word limit.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Language questions</strong>
            <p className="text-slate-600 text-sm">Know parts of speech, punctuation, direct/indirect speech, active/passive voice, and editing for correctness.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Time management</strong>
            <p className="text-slate-600 text-sm">Do not spend all your time on comprehension. Allocate time per section based on marks available.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Paper 2: literature study',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Paper 2 tests your ability to analyse prescribed texts and respond using evidence and literary terminology.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-indigo-700 text-sm">Contextual questions:</p>
          <p className="text-slate-600 text-sm">Based on a given extract. Quote directly, name devices, explain effects, and link to theme/character.</p>
          <p className="font-bold text-indigo-700 text-sm mt-3">Essay questions:</p>
          <p className="text-slate-600 text-sm">Extended analytical response. Plan before writing. State a thesis in the introduction, support it with evidence in the body, and conclude with insight.</p>
          <p className="font-bold text-indigo-700 text-sm mt-3">Key tip:</p>
          <p className="text-slate-600 text-sm">Memorise key quotations for each text — they are essential evidence in both contextual and essay questions.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Paper 3: writing strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Paper 3 assesses your ability to write well under timed conditions. Choose your topic carefully and plan before writing.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Essay (Section A)</strong>
            <p className="text-slate-600 text-sm">Choose a topic that suits your strengths. Spend 5–10 minutes planning. Aim for 350–400 words. Maintain consistent form and register.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Transactional writing (Section B)</strong>
            <p className="text-slate-600 text-sm">Apply the correct format for the text type. Check register, layout features (headings, sign-offs), and purpose.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-2">Both sections are marked for content AND language — editing matters.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does Paper 1 of the English HL exam primarily test?',
    options: [
      'Only grammar knowledge and spelling',
      'Comprehension, summary, and language in context skills',
      'Literary analysis of prescribed drama and poetry',
      'Extended essay writing on a given topic',
    ],
    answer: 'Comprehension, summary, and language in context skills',
    explanation: 'Paper 1 covers language reception skills: reading comprehension, summary writing, and explicit language/editing tasks.',
  },
  {
    prompt: 'What does Paper 2 of the English HL exam test?',
    options: ['Writing a narrative essay and a formal letter', 'Listening comprehension and grammar questions only', 'Literary analysis of prescribed novel or folklore, drama and poetry', 'Summary writing from a magazine article on a topic'],
    answer: 'Literary analysis of prescribed novel or folklore, drama and poetry',
    explanation: 'Paper 2 is entirely focused on the prescribed literature: contextual questions on extracts and essay questions that require analysis and evidence.',
  },
  {
    prompt: 'What is tested in Paper 3?',
    options: [
      'Grammar, spelling, and vocabulary only',
      'Essay writing and transactional writing',
      'Reading comprehension and summary',
      'Literature contextual questions',
    ],
    answer: 'Essay writing and transactional writing',
    explanation: 'Paper 3 assesses productive writing skills: an extended essay (creative or expository) and a transactional piece (letter, report, review, etc.).',
  },
  {
    prompt: 'What is a contextual question in Paper 2?',
    options: ['A question that tests general knowledge of world history', 'A question on an extract from a set text that needs close reading', 'A question that asks for a summary of the whole novel', 'A question about the life of the author of the text'],
    answer: 'A question on an extract from a set text that needs close reading',
    explanation: 'Contextual questions require you to work closely with the given extract: quote, identify devices, explain effects, and link to theme.',
  },
  {
    prompt: 'What is the best way to prepare for comprehension questions?',
    options: ['Memorise every word in the passage before the exam day', 'Read varied texts; answer at literal, inferential and critical levels', 'Answer only the questions that you know the answer to at once', 'Guess the answers from the topic of the passage alone'],
    answer: 'Read varied texts; answer at literal, inferential and critical levels',
    explanation: 'Comprehension skills improve with practice across different text types and question levels — especially inference and critical/evaluative questions.',
  },
  {
    prompt: 'What must you do before writing an essay in Paper 3?',
    options: ['Write the conclusion first, then the introduction', 'Copy the question down three times to take it in', 'Plan for 5-10 minutes: pick a topic and form, and outline your points', 'Ask the invigilator to pick the best topic for you'],
    answer: 'Plan for 5-10 minutes: pick a topic and form, and outline your points',
    explanation: 'A brief plan improves structure, coherence, and logical development — consistently rewarded in the marking rubric.',
  },
  {
    prompt: 'What is an "anchor" quote in a literature response?',
    options: ['The first sentence of the novel that you are studying', 'A key quotation that you return to in order to support your argument', 'A quote from a well-known literary critic', 'The title of the prescribed text as it appears on the cover'],
    answer: 'A key quotation that you return to in order to support your argument',
    explanation: 'An anchor quote is a central piece of evidence that underpins your thesis — powerful quotes referenced at key points strengthen an argument.',
  },
  {
    prompt: 'How should you allocate time across the three English HL papers?',
    options: ['Spend most of the time on Paper 3 and rush the other two', 'Divide time by the marks of each section and check the clock often', 'Write as fast as you can with no plan for the time', 'Answer only the questions with the most marks and skip the rest'],
    answer: 'Divide time by the marks of each section and check the clock often',
    explanation: 'Time management is critical. A rough guide: spend minutes proportional to marks. A 20-mark section should get roughly twice the time of a 10-mark section.',
  },
  {
    prompt: 'What technique helps most when answering inference questions?',
    options: ['Guess the most likely answer from your instinct', 'Copy the paragraph that seems the most relevant', 'Find words in the text that imply the answer and explain your reasoning', 'Write "it is obvious" and move on to the next question'],
    answer: 'Find words in the text that imply the answer and explain your reasoning',
    explanation: 'Inference requires reading between the lines — find the textual clue, explain what it implies, and connect it to your answer.',
  },
  {
    prompt: 'In Paper 2, why is memorising key quotations important?',
    options: ['The examiner gives marks to the learner who quotes the most', 'Quotations show detailed knowledge and give evidence for your answers', 'Without quotations your handwriting is marked instead', 'Quotations take the place of any analysis of the text'],
    answer: 'Quotations show detailed knowledge and give evidence for your answers',
    explanation: 'Evidence from the text is essential in Paper 2. A well-chosen quotation anchors your argument and shows the examiner you know the prescribed work.',
  },
];

const MidyearExamPreparation = () => (
  <CapsSubjectTopic
    title="Mid-Year Exam Preparation"
    subtitle="Paper 1, 2 and 3 strategies, time management and exam technique"
    learnSteps={learnSteps}
    task="gr11-midyear-exam-preparation-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default MidyearExamPreparation;
