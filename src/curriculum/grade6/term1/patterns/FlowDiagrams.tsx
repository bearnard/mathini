import { ArrowRight } from 'lucide-react';
import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a Flow Diagram?',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">A flow diagram shows how numbers change when you apply a rule to them.</p>
        <div className="flex justify-center items-center gap-4 bg-slate-50 p-8 rounded-xl">
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-slate-400 mb-2">Input</span>
            <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-2xl font-bold text-slate-700">5</div>
          </div>
          <ArrowRight className="text-slate-300" />
          <div className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-xl shadow-lg">
            + 3
          </div>
          <ArrowRight className="text-slate-300" />
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-slate-400 mb-2">Output</span>
            <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-200 rounded-xl flex items-center justify-center text-2xl font-bold text-emerald-700">8</div>
          </div>
        </div>
        <p className="text-slate-500">5 goes in, add 3, and 8 comes out!</p>
      </div>
    ),
  },
  {
    title: 'The Rule Machine',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Think of it as a machine. The rule is what the machine does to every number.</p>
        <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-600">Input: 2</span>
            <span className="text-indigo-600 font-bold">× 2</span>
            <span className="font-bold text-emerald-600">Output: 4</span>
          </div>
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-600">Input: 5</span>
            <span className="text-indigo-600 font-bold">× 2</span>
            <span className="font-bold text-emerald-600">Output: 10</span>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'If the rule is × 4 and the input is 6, what is the output?',
    options: ['10', '20', '24', '28'],
    answer: '24',
    explanation: '6 × 4 = 24.',
  },
  {
    prompt: 'If the rule is + 9 and the output is 17, what is the input?',
    options: ['6', '7', '8', '26'],
    answer: '8',
    explanation: 'Work backwards: 17 − 9 = 8. The input is 8.',
  },
  {
    prompt: 'A flow diagram has rule ÷ 5. Input is 30. Output is...',
    options: ['5', '6', '25', '150'],
    answer: '6',
    explanation: '30 ÷ 5 = 6.',
  },
  {
    prompt: 'If input → rule → output is 4 → + 7 → ?, what is the output?',
    options: ['3', '9', '11', '28'],
    answer: '11',
    explanation: '4 + 7 = 11.',
  },
  {
    prompt: 'What rule changes 3 → 12, 5 → 20, 7 → 28?',
    options: ['+ 9', '× 4', '+ 7', '× 3'],
    answer: '× 4',
    explanation: '3 × 4 = 12, 5 × 4 = 20, 7 × 4 = 28. The rule is multiply by 4.',
  },
  {
    prompt: 'A two-step rule is × 2, then + 1. Input = 5. Output = ?',
    options: ['8', '10', '11', '12'],
    answer: '11',
    explanation: 'Step 1: 5 × 2 = 10. Step 2: 10 + 1 = 11.',
  },
];

const FlowDiagrams = () => (
  <CapsSubjectTopic
    title="Flow Diagrams"
    subtitle="Understand input and output rules"
    learnSteps={learnSteps}
    task="gr6-flow-diagrams-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default FlowDiagrams;
