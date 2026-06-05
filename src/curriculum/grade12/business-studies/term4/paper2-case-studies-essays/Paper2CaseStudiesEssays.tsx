import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Know the Paper 2 focus',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Paper 2 focus</p>
          <p className="text-slate-600 mt-1">Paper 2 usually emphasises business ventures and business roles such as investment, leadership, social responsibility and presentation of information.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Case studies</strong><p className="text-slate-600 mt-1">Require evidence use and application.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Essays</strong><p className="text-slate-600 mt-1">Require structure, depth and a conclusion.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use case-study evidence properly',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Quote or paraphrase the clue from the source first, then explain it with the correct business concept.</p>
        </div>
        <p className="text-sm leading-7 text-slate-600">This shows the examiner that you can apply knowledge, not just memorise theory.</p>
      </div>
    ),
  },
  {
    title: 'Plan essays before writing',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Introduction</strong><p className="text-slate-600 mt-1">Define the topic and frame the response.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Body</strong><p className="text-slate-600 mt-1">Develop each point with explanation and application.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Conclusion</strong><p className="text-slate-600 mt-1">End with a judgement, summary or recommendation.</p></div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Essay-Writing Strategy"
          strengths={['Strong topic knowledge', 'Good vocabulary', 'Knows essay structure']}
          weaknesses={['Repeats points', 'Weak planning habit', 'Sometimes ignores command words']}
          opportunities={['Essay outlines', 'Memo analysis', 'Timed practice essays']}
          threats={['Going off-topic', 'Running out of time', 'Missing evaluation marks']}
        />
      </div>
    ),
  },
  {
    title: 'Respond to command words accurately',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Discuss</strong><p className="text-slate-600 mt-1">Give fuller detail, explanation and relevant development.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Evaluate</strong><p className="text-slate-600 mt-1">Balance strengths and weaknesses before giving a reasoned judgement.</p></div>
        </div>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "paper2-case-studies-essays-1",
    "question": "Business Studies Paper 2 usually focuses more on:",
    "options": [
      "Business ventures and roles",
      "Only mathematics formulas",
      "Only language grammar",
      "Only accounting journals"
    ],
    "answer": 0,
    "explanation": "Paper 2 commonly covers business ventures and business roles content."
  },
  {
    "id": "paper2-case-studies-essays-2",
    "question": "In a case-study answer, learners should:",
    "options": [
      "Ignore the source text",
      "Use evidence from the case to support the answer",
      "Write unrelated theory only",
      "Answer in bullet points no matter what"
    ],
    "answer": 1,
    "explanation": "Using evidence from the source strengthens application and relevance."
  },
  {
    "id": "paper2-case-studies-essays-3",
    "question": "A well-structured essay should include:",
    "options": [
      "Only a conclusion",
      "Introduction, body and conclusion",
      "Only headings with no content",
      "A graph instead of writing"
    ],
    "answer": 1,
    "explanation": "An essay should be organised logically with an introduction, developed body and conclusion."
  },
  {
    "id": "paper2-case-studies-essays-4",
    "question": "Why is essay planning important?",
    "options": [
      "It wastes time",
      "It helps organise points and stay on topic",
      "It replaces content knowledge",
      "It is only for mathematics"
    ],
    "answer": 1,
    "explanation": "A short plan helps structure the response and prevents repetition or drift."
  },
  {
    "id": "paper2-case-studies-essays-5",
    "question": "If a question asks learners to evaluate a strategy, they should:",
    "options": [
      "Only define the term",
      "Weigh strengths and weaknesses before giving a judgement",
      "List random facts",
      "Ignore the scenario"
    ],
    "answer": 1,
    "explanation": "Evaluation requires judgement supported by balanced reasoning."
  },
  {
    "id": "paper2-case-studies-essays-6",
    "question": "The BEST way to support a recommendation in a case study is to:",
    "options": [
      "Use a reason linked to the facts in the source",
      "Write a very short answer with no reason",
      "Repeat the question",
      "Change the business name"
    ],
    "answer": 0,
    "explanation": "Recommendations earn more marks when they are justified using the case facts."
  },
  {
    "id": "paper2-case-studies-essays-7",
    "question": "Which command word usually requires a reasoned final opinion?",
    "options": [
      "State",
      "Evaluate",
      "List",
      "Name"
    ],
    "answer": 1,
    "explanation": "Evaluate means consider the evidence and give a supported judgement."
  },
  {
    "id": "paper2-case-studies-essays-8",
    "question": "A learner loses marks in essays mainly because they:",
    "options": [
      "Use a clear structure",
      "Drift away from the question focus",
      "Plan briefly",
      "Read the command words"
    ],
    "answer": 1,
    "explanation": "Going off-topic weakens relevance and reduces marks even if the writing is long."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const Paper2CaseStudiesEssays = () => (
  <CapsSubjectTopic
    title="Paper 2 Case Studies and Essays"
    subtitle="Paper 2 focus areas, evidence use and essay planning"
    learnSteps={learnSteps}
    task="gr12-paper2-case-studies-essays-t4"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default Paper2CaseStudiesEssays;
