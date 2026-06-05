import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Writing a literary essay',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A literary essay is an extended analytical response to a question about a prescribed text. It requires a clear <strong>thesis</strong>, structured body paragraphs, and a conclusion.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p><strong className="text-indigo-700">Introduction:</strong> <span className="text-slate-600 text-sm">Hook, brief context, and clear thesis statement that answers the question.</span></p>
          <p><strong className="text-indigo-700">Body paragraphs:</strong> <span className="text-slate-600 text-sm">Each paragraph = one point + one or more quotations + explanation + link to thesis (PEEL).</span></p>
          <p><strong className="text-indigo-700">Conclusion:</strong> <span className="text-slate-600 text-sm">Restate thesis in new words. Synthesise main arguments. End with broader insight.</span></p>
        </div>
        <p className="text-sm text-slate-500">A literary essay is not a retelling — it argues a position about meaning, not events.</p>
      </div>
    ),
  },
  {
    title: 'Writing a review: structure and criteria',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A review evaluates a text, film, or performance for a specific audience. It balances <strong>description</strong> with <strong>critical evaluation</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Structure</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Heading: title and reviewer's name</li>
              <li>Introduction: what is being reviewed</li>
              <li>Description: brief, no major spoilers</li>
              <li>Evaluation: strengths, weaknesses, criteria</li>
              <li>Recommendation: who should read/watch it</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Criteria to evaluate</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Plot/narrative structure</li>
              <li>Character development</li>
              <li>Language and style</li>
              <li>Theme and overall impact</li>
              <li>Technical quality (for film: direction, cinematography)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interviews and reports in formal contexts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Both interviews and formal reports serve practical communication purposes. Format accuracy is heavily marked.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Interview transcript</strong>
            <p className="text-slate-600 text-sm">Layout uses "Interviewer:" and "[Name]:" alternately. Questions and answers should be formal and purposeful. No informal filler.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Formal report</strong>
            <p className="text-slate-600 text-sm">Includes: title, introduction/purpose, findings (with subheadings), conclusion, and recommendation. Objective, third-person register.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Audience, tone and register in transactional writing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Every transactional piece must be shaped by its <strong>audience</strong> and <strong>purpose</strong>. These determine tone and register.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-slate-700 text-sm">Ask yourself:</p>
          <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1">
            <li><strong>Who</strong> is the audience? (age, knowledge, relationship to writer)</li>
            <li><strong>What</strong> is the purpose? (to inform, persuade, entertain, instruct)</li>
            <li><strong>What</strong> format is required? (letter, report, interview, review)</li>
            <li><strong>What</strong> register? (formal, semi-formal, informal)</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500 mt-2">Inconsistent register is a common error — decide your register before writing and maintain it throughout.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the primary purpose of a literary essay?',
    options: [
      'To retell the story of a prescribed text in detail',
      'To argue and defend an interpretation of a text using evidence and literary analysis',
      'To summarise the plot in chronological order',
      'To compare two different novels from the same era',
    ],
    answer: 'To argue and defend an interpretation of a text using evidence and literary analysis',
    explanation: 'A literary essay takes a position (thesis) and defends it through analysis — it is not a summary or retelling.',
  },
  {
    prompt: 'What should the introduction of a literary essay contain?',
    options: [
      'A long summary of every event in the text',
      'A greeting to the examiner and your name',
      'A hook, brief context about the text, and a clear thesis statement',
      'Three quotations without any explanation',
    ],
    answer: 'A hook, brief context about the text, and a clear thesis statement',
    explanation: 'The introduction orientates the reader, provides minimal context, and states your argument clearly in the thesis — which guides the entire essay.',
  },
  {
    prompt: 'What is the key feature of a review that distinguishes it from a summary?',
    options: [
      'A review is always shorter than a summary',
      'A review includes evaluation and judgment using criteria, while a summary only describes content',
      'A review never mentions the title of the work',
      'A review is always written in the first person and a summary never is',
    ],
    answer: 'A review includes evaluation and judgment using criteria, while a summary only describes content',
    explanation: 'A review assesses strengths and weaknesses and makes a recommendation. A summary merely condenses the content without evaluation.',
  },
  {
    prompt: 'What distinguishes an interview from an essay?',
    options: [
      'Interviews are always longer than essays',
      'An interview uses a question-and-answer format between two identified parties; an essay uses continuous prose',
      'Interviews are written in verse; essays are in prose',
      'Essays are only written in formal English; interviews can be in any language',
    ],
    answer: 'An interview uses a question-and-answer format between two identified parties; an essay uses continuous prose',
    explanation: 'The interview format requires clear labelling of speakers ("Interviewer:" and the subject\'s name) and purposeful questions and answers.',
  },
  {
    prompt: 'What is a formal report?',
    options: [
      'An informal account of a meeting written in diary style',
      'A structured document presenting findings, analysis, and recommendations in an objective register',
      'A creative piece describing an imaginary event',
      'A covering letter accompanying a CV',
    ],
    answer: 'A structured document presenting findings, analysis, and recommendations in an objective register',
    explanation: 'A formal report has a fixed structure: title, purpose/introduction, findings, conclusion, and recommendation — written objectively.',
  },
  {
    prompt: 'In a literary essay, what is the function of textual evidence (quotations)?',
    options: [
      'To increase the length of the essay',
      'To prove that you have memorised the text',
      'To support and illustrate your analytical points, making your argument credible',
      'To replace the need for any analysis',
    ],
    answer: 'To support and illustrate your analytical points, making your argument credible',
    explanation: 'Evidence without analysis is not enough — you must quote AND explain how the quotation supports your point.',
  },
  {
    prompt: 'What is the correct register for a formal interview transcript in English HL?',
    options: [
      'Casual and conversational, with slang to seem approachable',
      'Formal and professional throughout, with purposeful questions and well-structured responses',
      'Poetic and literary, with rhetorical questions throughout',
      'Emotional and personal, ignoring grammar conventions',
    ],
    answer: 'Formal and professional throughout, with purposeful questions and well-structured responses',
    explanation: 'A formal interview transcript uses standard formal English with no filler, contractions, or slang — it reflects a professional context.',
  },
  {
    prompt: 'Which paragraph structure is most commonly used in a literary essay?',
    options: [
      'STAR (Situation, Task, Action, Result)',
      'PEEL (Point, Evidence, Explain, Link)',
      'SWOT (Strengths, Weaknesses, Opportunities, Threats)',
      'IMRaD (Introduction, Methods, Results, Discussion)',
    ],
    answer: 'PEEL (Point, Evidence, Explain, Link)',
    explanation: 'PEEL ensures each body paragraph has a clear argument (Point), proof (Evidence), analysis (Explain), and connection to the overall thesis (Link).',
  },
  {
    prompt: 'What is the "hook" in the introduction of a literary essay?',
    options: [
      'The word limit stated at the top of the answer',
      'A direct quotation from the text placed as the very last line of the essay',
      'An engaging opening line designed to capture the reader\'s interest before stating the thesis',
      'A subheading that labels the introduction',
    ],
    answer: 'An engaging opening line designed to capture the reader\'s interest before stating the thesis',
    explanation: 'A hook can be a striking quotation, a rhetorical question, or a bold statement that draws the reader in before the thesis is stated.',
  },
  {
    prompt: 'What distinguishes a review from a summary?',
    options: [
      'A review is shorter and uses simpler language',
      'A review evaluates strengths, weaknesses, and suitability for an audience; a summary only describes the content',
      'A summary includes the reviewer\'s personal rating; a review does not',
      'There is no meaningful difference between the two',
    ],
    answer: 'A review evaluates strengths, weaknesses, and suitability for an audience; a summary only describes the content',
    explanation: 'Reviews go beyond description to offer critical assessment — this is the defining feature that separates a review from a mere summary.',
  },
];

const LiteraryTransactionalResponses = () => (
  <CapsSubjectTopic
    title="Literary and Transactional Responses"
    subtitle="Literary essays, reviews, interviews, reports and register control"
    learnSteps={learnSteps}
    task="gr11-literary-transactional-responses-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LiteraryTransactionalResponses;
