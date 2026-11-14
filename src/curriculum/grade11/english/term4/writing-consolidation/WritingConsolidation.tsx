import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
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
    options: ['It takes the place of writing the essay itself', 'It organises your ideas and keeps the essay logical and on topic', 'It is handed in to the examiner instead of the essay', 'It is used in narrative essays and in no other kind'],
    answer: 'It organises your ideas and keeps the essay logical and on topic',
    explanation: 'A plan, even a brief one, improves coherence and development — two of the highest-weighted criteria in the writing rubric.',
  },
  {
    prompt: 'What is the correct structure for a formal letter?',
    options: ['Greeting, body and farewell, with no addresses needed', "Sender's address, date, recipient, salutation, body, sign-off, signature", 'Title, numbered points and a recommendation', 'Headline, subheading, body and a caption'],
    answer: "Sender's address, date, recipient, salutation, body, sign-off, signature",
    explanation: 'A formal letter follows a strict layout. Missing format elements (addresses, date, sign-off) will lose marks in transactional writing.',
  },
  {
    prompt: 'What does "coherence" mean in an essay?',
    options: ['Using as many long words as you can', 'The logical flow of ideas and clear links between sentences', 'Writing more than the required word count', 'Making every paragraph exactly the same length'],
    answer: 'The logical flow of ideas and clear links between sentences',
    explanation: 'A coherent essay is easy to follow. Ideas progress logically with transitions that signal relationships between points.',
  },
  {
    prompt: 'How many paragraphs should a standard Grade 11 exam essay typically have?',
    options: ['Exactly two paragraphs: an introduction and a conclusion', 'As many as you can, since more paragraphs earn more marks', 'An introduction, three or four body paragraphs and a conclusion', 'One long paragraph, to show that you can sustain thought'],
    answer: 'An introduction, three or four body paragraphs and a conclusion',
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
    options: ['The two are identical processes', 'Proofreading fixes surface errors; editing improves content and structure', 'Proofreading is done before drafting and editing during it', 'Editing is for novels and proofreading is for essays'],
    answer: 'Proofreading fixes surface errors; editing improves content and structure',
    explanation: 'Editing is deeper revision of content and argument. Proofreading is the final surface-level check. Both are important before submitting written work.',
  },
  {
    prompt: 'What is the correct salutation in a formal letter to an unknown person?',
    options: ['"Dear Friend," followed by the message', '"To Whom It May Concern," or "Dear Sir/Madam,"', '"Hey there," followed by the message', '"Good day [first name]," followed by the message'],
    answer: '"To Whom It May Concern," or "Dear Sir/Madam,"',
    explanation: 'When you do not know the recipient\'s name, use "Dear Sir/Madam" or "To Whom It May Concern". Both require "Yours faithfully" as the sign-off.',
  },
  {
    prompt: 'What is a transition sentence?',
    options: ['The first sentence of the whole essay', 'A sentence that links one paragraph to the next', 'Any sentence that contains a conjunction', 'A sentence in the passive voice used for variety'],
    answer: 'A sentence that links one paragraph to the next',
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
    options: ['A statement that lists facts with no interpretation', 'A statement that gives a judgment, weighing the evidence', 'A quotation that is copied straight from the text', 'A statement about the personal life of the author'],
    answer: 'A statement that gives a judgment, weighing the evidence',
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
