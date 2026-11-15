'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Revising the full theory syllabus',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Final theory revision should stay balanced across networks, security, social implications and system concepts.
          NSC questions often combine topics in one scenario.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
            <p className="font-semibold text-blue-800">Revise widely</p>
            <p className="mt-1 text-slate-600">Do not ignore weaker sections just because a favourite topic feels more comfortable.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">Connect ideas</p>
            <p className="mt-1 text-slate-600">A good theory answer can explain a technical issue and recommend an ethical response in the same paragraph.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Understanding command words',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Command words tell you what kind of response the marker expects.
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-2 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            <p>Command word</p>
            <p>What to do</p>
          </div>
          <div className="grid grid-cols-2 text-sm text-slate-600">
            <p className="border-r border-t border-slate-200 px-4 py-3">Explain</p>
            <p className="border-t border-slate-200 px-4 py-3">Give clear reasons or cause-and-effect detail.</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Compare</p>
            <p className="border-t border-slate-200 px-4 py-3">Show similarities and/or differences.</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Justify</p>
            <p className="border-t border-slate-200 px-4 py-3">Support the answer with a convincing reason.</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Evaluate</p>
            <p className="border-t border-slate-200 px-4 py-3">Weigh both strengths and weaknesses before judging.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Using source material effectively',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Source-based questions reward learners who use the given scenario as evidence instead of writing memorised facts that do not fit.
        </p>
        <CodeBlock language="text" code={`1. Read the case study carefully.
2. Underline clue words.
3. Link each clue to the correct IT concept.
4. Answer using both the concept and the evidence from the source.`} />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            If the scenario mentions stolen login details, talk about phishing, weak authentication or poor user awareness instead of drifting into unrelated hardware facts.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Time management and final checking',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good exam technique includes time planning, matching answer depth to the mark allocation and leaving a short review period at the end.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
          <p>Read → Plan → Answer → Check command words → Review missing points</p>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
          <p className="font-semibold text-emerald-800">Final review checklist</p>
          <p className="text-slate-600 mt-1">
            Check unanswered items, vague wording, missing examples and whether each recommendation actually matches the scenario.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Theory exam technique",
    content: (
      <div className="space-y-4">
        <GapRule>{"Marks usually match points: for three marks give three separate ideas, or one idea explained in full. If you are unsure of a multiple-choice answer, cross out what is clearly wrong and pick from the rest. Tie security advice to the risk named in the scenario. Revise theory and practical ideas together, because NSC papers join conceptual knowledge to applied scenarios."}</GapRule>
        <GapWorked title={"Answer well"} steps={["Three marks: three different points, not the same point three times.", "Multiple choice: cross out options that are clearly wrong, then choose the best.", "Scenario: name the risk, then give advice that addresses it."]} />
        <GapMistake>{"Repeating one point three times."}</GapMistake>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "If a question says \"justify\", what should your answer include?",
    options: ["A random example with no reason", "A reasoned answer that supports the choice", "Only the final yes or no", "A copied definition from another topic"],
    answer: 1,
    explanation: "To justify means to give a reason or evidence supporting the answer.",
  },
  {
    prompt: "What is the best use of a case study in a source-based IT question?",
    options: ["Ignore it and write only memorised notes", "Use details from it to support accurate IT reasoning", "Rewrite it word for word with no analysis", "Replace all technical terms with slang"],
    answer: 1,
    explanation: "Source-based answers should use the scenario details as evidence for the correct IT concepts.",
  },
  {
    prompt: "Which response best matches the command word \"compare\"?",
    options: ["State only one fact about the first item", "Describe similarities and/or differences between the items", "Give a definition with no reference to either item", "List random unrelated technologies"],
    answer: 1,
    explanation: "Compare questions expect a relationship between items, usually similarities, differences or both.",
  },
  {
    prompt: "A 3-mark theory question usually expects what?",
    options: ['One very short word with no further explanation of the idea behind the answer given', 'About three relevant distinct points or a fully developed answer worth three marks', 'A drawing that has no labels on it', 'No explanation or points at all'],
    answer: 1,
    explanation: "The mark allocation suggests the depth needed, so three marks usually require several relevant points.",
  },
  {
    prompt: "What is a good MCQ strategy when you are unsure?",
    options: ['Skip the options and pick the first one that looks the most familiar to you', 'Eliminate clearly wrong options and choose the best remaining answer', 'Choose the longest option every time', 'Leave the paper blank and move on'],
    answer: 1,
    explanation: "Elimination improves the chance of choosing the best answer when you are uncertain.",
  },
  {
    prompt: "Why should final revision include both theory and practical ideas?",
    options: ['Because the NSC papers can connect conceptual knowledge to applied scenarios', 'Because theory papers do not mention practical work in the NSC exam scenarios', 'Because practical work replaces the theory content', 'Because a single topic is examined each year'],
    answer: 0,
    explanation: "The exam often links conceptual understanding to real practical situations, so revision should stay balanced.",
  },
  {
    prompt: "If a learner gives a security recommendation in a theory answer, what makes it stronger?",
    options: ["The recommendation is linked directly to the risk in the scenario", "The recommendation uses as many technical words as possible without meaning", "The recommendation ignores the source material", "The recommendation changes topic halfway through"],
    answer: 0,
    explanation: "A strong theory answer matches the recommendation to the specific risk described in the scenario.",
  },
  {
    prompt: "What is the purpose of leaving time to review your theory paper?",
    options: ['To check for missing points, weak wording or unanswered sections', 'To learn a new chapter from scratch', 'To redesign the layout of the exam paper', 'To change a correct answer without a reason and then hand in the paper'],
    answer: 0,
    explanation: "A review period helps catch avoidable mistakes and incomplete answers before submission.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const NscTheoryExamTechnique = () => (
  <CapsSubjectTopic
    title="NSC Theory Exam Technique"
    subtitle="Answering CAPS theory questions with precision, evidence and balance"
    learnSteps={learnSteps}
    task="gr12-nsc-theory-exam-technique-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default NscTheoryExamTechnique;
