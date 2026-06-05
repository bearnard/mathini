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
    options: [
      'Writing a narrative and a formal letter',
      'Listening comprehension and grammar only',
      'Literary analysis of prescribed texts including novel/folklore, drama, and poetry',
      'Summary writing from a magazine article',
    ],
    answer: 'Literary analysis of prescribed texts including novel/folklore, drama, and poetry',
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
    options: [
      'A question that tests general knowledge about world history',
      'A question based on a specific extract from a prescribed text, requiring close reading and analysis',
      'A question that asks you to write a summary of the whole novel',
      'A question about the author\'s biography',
    ],
    answer: 'A question based on a specific extract from a prescribed text, requiring close reading and analysis',
    explanation: 'Contextual questions require you to work closely with the given extract: quote, identify devices, explain effects, and link to theme.',
  },
  {
    prompt: 'What is the best way to prepare for comprehension questions?',
    options: [
      'Memorise every word in the passage before the exam',
      'Practise reading a variety of texts, answering at different levels (literal, inferential, critical)',
      'Only answer questions you immediately know the answer to',
      'Guess based on the topic of the passage',
    ],
    answer: 'Practise reading a variety of texts, answering at different levels (literal, inferential, critical)',
    explanation: 'Comprehension skills improve with practice across different text types and question levels — especially inference and critical/evaluative questions.',
  },
  {
    prompt: 'What must you do before writing an essay in Paper 3?',
    options: [
      'Write the conclusion first, then the introduction',
      'Copy down the question three times to internalise it',
      'Spend 5–10 minutes planning: choosing a topic, deciding your form, and outlining your main points',
      'Ask the invigilator to choose the best topic for you',
    ],
    answer: 'Spend 5–10 minutes planning: choosing a topic, deciding your form, and outlining your main points',
    explanation: 'A brief plan improves structure, coherence, and logical development — consistently rewarded in the marking rubric.',
  },
  {
    prompt: 'What is an "anchor" quote in a literature response?',
    options: [
      'The very first sentence of a novel',
      'A key quotation that you return to throughout your essay to support your argument',
      'A quote from a famous literary critic',
      'The title of the prescribed text',
    ],
    answer: 'A key quotation that you return to throughout your essay to support your argument',
    explanation: 'An anchor quote is a central piece of evidence that underpins your thesis — powerful quotes referenced at key points strengthen an argument.',
  },
  {
    prompt: 'How should you allocate time across the three English HL papers?',
    options: [
      'Spend 90% of time on Paper 3 and rush the others',
      'Allocate time based on marks per section within each paper, and check time remaining regularly',
      'Write as fast as possible without any time planning',
      'Only answer questions worth the most marks and skip the rest',
    ],
    answer: 'Allocate time based on marks per section within each paper, and check time remaining regularly',
    explanation: 'Time management is critical. A rough guide: spend minutes proportional to marks. A 20-mark section should get roughly twice the time of a 10-mark section.',
  },
  {
    prompt: 'What technique helps most when answering inference questions?',
    options: [
      'Guessing the most likely answer based on instinct',
      'Copying the paragraph that seems most relevant',
      'Identifying specific words or phrases in the text that imply the answer, and explaining the logic',
      'Writing "it is obvious" and moving on',
    ],
    answer: 'Identifying specific words or phrases in the text that imply the answer, and explaining the logic',
    explanation: 'Inference requires reading between the lines — find the textual clue, explain what it implies, and connect it to your answer.',
  },
  {
    prompt: 'In Paper 2, why is memorising key quotations important?',
    options: [
      'The examiner awards marks for the most quoted learner',
      'Quotations demonstrate detailed knowledge of the text and provide essential evidence for both contextual and essay responses',
      'Without quotations, your handwriting is assessed instead',
      'Quotations replace the need for any analysis',
    ],
    answer: 'Quotations demonstrate detailed knowledge of the text and provide essential evidence for both contextual and essay responses',
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
