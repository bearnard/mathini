import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/eng/term4/writing-consolidation/diagram.webp", alt: "Writing Consolidation" },
    title: 'Essay planning and structure revision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Every essay type has a structure. Revise these and practise choosing the right form for a given topic.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Narrative / Descriptive</strong>
            <p className="text-slate-600 text-sm">Introduction → develop the situation with vivid detail → climax or resolution → conclusion that resonates.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Argumentative</strong>
            <p className="text-slate-600 text-sm">Intro (hook + thesis) → body (point, evidence, explain × 3) → brief counter + refutation → conclusion.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Discursive</strong>
            <p className="text-slate-600 text-sm">Intro (issue context) → both sides (evidence per side) → balanced conclusion with judgement.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Transactional writing format revision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Revise the layout requirements for each transactional text type. Format marks are easy to earn — or lose.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Formal letter checklist</strong>
            <p className="text-slate-600 text-sm">Sender's address → date → recipient's address → salutation → body paragraphs → sign-off → signature.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Report checklist</strong>
            <p className="text-slate-600 text-sm">Title → introduction/purpose → findings (subheadings) → conclusion → recommendation.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Review checklist</strong>
            <p className="text-slate-600 text-sm">Heading → introduction → description (no spoilers) → evaluation → recommendation.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Minutes checklist</strong>
            <p className="text-slate-600 text-sm">Heading (meeting details) → attendance → numbered items discussed → decisions + action points → closure.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Editing under time pressure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In exam conditions, build <strong>5 minutes of editing time</strong> into your plan. Rushed editing is better than no editing at all.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-indigo-700 text-sm">Quick editing checklist:</p>
          <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1">
            <li>Every sentence has a subject and a verb</li>
            <li>No tense shifts within paragraphs</li>
            <li>Apostrophes used correctly (possession vs contraction)</li>
            <li>Register is consistent throughout</li>
            <li>Paragraphs are complete (topic sentence + development + link)</li>
            <li>Introduction and conclusion both present</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Choosing the most suitable topic in exam conditions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Paper 3 you typically have a choice of topics. Making the right choice in <strong>60 seconds</strong> can significantly affect your score.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Choose topics where you can:</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Generate at least 3 distinct main ideas</li>
              <li>Maintain the required form from start to finish</li>
              <li>Write with genuine vocabulary range and style</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Avoid topics where you:</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Only know one or two things to say</li>
              <li>Are unsure of the required form or register</li>
              <li>Feel strongly but lack supporting evidence</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the function of an essay outline (plan)?',
    options: [
      'It replaces the need to write the essay itself',
      'It organises your ideas before writing, ensuring a logical structure and preventing you from going off-topic',
      'It is submitted to the examiner instead of the final essay',
      'It is used only in narrative essays',
    ],
    answer: 'It organises your ideas before writing, ensuring a logical structure and preventing you from going off-topic',
    explanation: 'A plan, even a brief one, improves coherence and development — two of the highest-weighted criteria in the writing rubric.',
  },
  {
    prompt: 'What is the correct structure for a formal letter?',
    options: [
      'Greeting → body → farewell (no addresses needed)',
      'Sender\'s address → date → recipient\'s address → salutation → body paragraphs → sign-off → signature',
      'Title → numbered points → recommendation',
      'Headline → subheading → body → caption',
    ],
    answer: 'Sender\'s address → date → recipient\'s address → salutation → body paragraphs → sign-off → signature',
    explanation: 'A formal letter follows a strict layout. Missing format elements (addresses, date, sign-off) will lose marks in transactional writing.',
  },
  {
    prompt: 'What does "coherence" mean in an essay?',
    options: [
      'Using as many long words as possible',
      'The logical flow of ideas and clear connections between sentences and paragraphs',
      'Writing more than the required word count',
      'Making sure every paragraph is the same length',
    ],
    answer: 'The logical flow of ideas and clear connections between sentences and paragraphs',
    explanation: 'A coherent essay is easy to follow. Ideas progress logically with transitions that signal relationships between points.',
  },
  {
    prompt: 'How many paragraphs should a standard Grade 11 exam essay typically have?',
    options: [
      'Exactly two: introduction and conclusion',
      'As many as possible — more paragraphs mean higher marks',
      'An introduction, three or four body paragraphs, and a conclusion (five to six paragraphs total)',
      'One long unbroken paragraph is best to show sustained thought',
    ],
    answer: 'An introduction, three or four body paragraphs, and a conclusion (five to six paragraphs total)',
    explanation: 'A well-structured essay typically has 5–6 paragraphs. Each body paragraph develops one main point fully.',
  },
  {
    prompt: 'What makes a strong concluding paragraph in an essay?',
    options: [
      'It introduces the most important argument in the entire essay for the first time',
      'It simply repeats the introduction word for word',
      'It restates the thesis in new words, synthesises the key arguments, and offers a meaningful final thought',
      'It ends with a question that leaves the reader confused',
    ],
    answer: 'It restates the thesis in new words, synthesises the key arguments, and offers a meaningful final thought',
    explanation: 'A strong conclusion brings the essay to a satisfying close — it does not introduce new evidence but reflects on what has been argued.',
  },
  {
    prompt: 'What is the difference between proofreading and editing?',
    options: [
      'They are identical processes',
      'Proofreading focuses on surface errors (spelling, grammar, punctuation); editing involves improving content, structure, and clarity at a deeper level',
      'Proofreading is done before drafting; editing is done while drafting',
      'Editing is only for novels; proofreading is only for essays',
    ],
    answer: 'Proofreading focuses on surface errors (spelling, grammar, punctuation); editing involves improving content, structure, and clarity at a deeper level',
    explanation: 'Editing is deeper revision of content and argument. Proofreading is the final surface-level check. Both are important before submitting written work.',
  },
  {
    prompt: 'What is the correct salutation in a formal letter to an unknown person?',
    options: [
      '"Dear Friend,"',
      '"To Whom It May Concern," or "Dear Sir/Madam,"',
      '"Hey there,"',
      '"Good day [first name],"',
    ],
    answer: '"To Whom It May Concern," or "Dear Sir/Madam,"',
    explanation: 'When you do not know the recipient\'s name, use "Dear Sir/Madam" or "To Whom It May Concern". Both require "Yours faithfully" as the sign-off.',
  },
  {
    prompt: 'What is a transition sentence?',
    options: [
      'The first sentence of an essay',
      'A sentence that connects one paragraph to the next, linking the previous point to the upcoming one',
      'Any sentence that includes a conjunction',
      'A sentence written in the passive voice to add variety',
    ],
    answer: 'A sentence that connects one paragraph to the next, linking the previous point to the upcoming one',
    explanation: 'Transition sentences improve coherence. They might signal addition ("Furthermore…"), contrast ("However…"), or consequence ("As a result…").',
  },
  {
    prompt: 'Which essay type requires you to argue both sides of an issue?',
    options: [
      'Narrative essay',
      'Argumentative essay',
      'Discursive essay',
      'Reflective essay',
    ],
    answer: 'Discursive essay',
    explanation: 'A discursive essay presents and evaluates both sides before reaching a balanced conclusion. An argumentative essay argues ONE side only.',
  },
  {
    prompt: 'What is an evaluative statement in an essay?',
    options: [
      'A statement that lists facts without any interpretation',
      'A statement that expresses a judgment or assessment — weighing the significance of evidence or making a conclusion',
      'A quotation copied directly from the text',
      'A statement about the author\'s personal life',
    ],
    answer: 'A statement that expresses a judgment or assessment — weighing the significance of evidence or making a conclusion',
    explanation: 'Evaluative statements move beyond description to interpretation and judgment — essential for higher-order analytical marks.',
  },
];

const WritingConsolidation = () => (
  <CapsSubjectTopic
    title="Writing Consolidation"
    subtitle="Essay and transactional format revision, editing under time pressure"
    learnSteps={learnSteps}
    task="gr11-writing-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default WritingConsolidation;
