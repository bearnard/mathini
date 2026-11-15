'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Reading the practical question strategically',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The first minutes of the practical paper should be used to scan the full task, mark the required classes and methods,
          and note any exact output or validation rules.
        </p>
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Start-up checklist</p>
          <p className="text-slate-600 mt-1">Inputs, outputs, classes, helper methods, file or database links, validation rules and the required format of the final answer.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Revising core programming patterns',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The exam often reuses familiar patterns such as input validation, accumulators, loops, arrays and class methods.
          Fluency comes from recognising the pattern quickly.
        </p>
        <CodeBlock language="delphi" code={`iTotal := 0;
for i := 0 to Length(arrMarks) - 1 do
begin
  if arrMarks[i] >= 50 then
    iTotal := iTotal + arrMarks[i];
end;`} />
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
          <p className="font-semibold text-emerald-800">Key Concept: Initialisation</p>
          <p className="text-slate-600 mt-1">
            Always initialise accumulators and counters before the loop starts, otherwise the result may be unpredictable.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Debugging under time pressure',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Calm, step-by-step debugging is faster than random changes. Trace one section at a time and check where the program state first becomes incorrect.
        </p>
        <CodeBlock language="delphi" code={`for i := 0 to 4 do
begin
  ShowMessage('i = ' + IntToStr(i) + ' value = ' + IntToStr(arrNums[i]));
end;`} />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Use small output checks or the debugger to confirm your assumptions before changing more code.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Testing before submission',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Final testing should cover the obvious cases and the awkward ones. This protects marks that are often lost to avoidable edge cases.
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-3 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            <p>Input type</p>
            <p>Example</p>
            <p>Expected behaviour</p>
          </div>
          <div className="grid grid-cols-3 text-sm text-slate-600">
            <p className="border-r border-t border-slate-200 px-4 py-3">Normal</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">25</p>
            <p className="border-t border-slate-200 px-4 py-3">Accepted and processed</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Boundary</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">0</p>
            <p className="border-t border-slate-200 px-4 py-3">Handled correctly</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Invalid</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">-5</p>
            <p className="border-t border-slate-200 px-4 py-3">Rejected with feedback</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Compare your output with the question",
    content: (
      <div className="space-y-4">
        <GapRule>{"Compare your output with the wording of the question, because small formatting or logic differences can still cost marks."}</GapRule>
        <GapWorked title={"Check the output"} steps={["The question asks for the average to 2 decimal places.", "Your program shows 74,3333.", "Format it to 2 decimal places: 74,33."]} />
        <GapMistake>{"Assuming the program is right because it runs without errors."}</GapMistake>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "What is the best first step when the NSC practical paper is handed out?",
    options: ["Start coding the first line immediately", "Read the full question and identify the required tasks", "Open every unrelated file in the project", "Ignore the marking instructions"],
    answer: 1,
    explanation: "Reading the whole question first helps you plan accurately and avoid missing requirements.",
  },
  {
    prompt: "Which bug is often caused by using <= instead of < in a loop condition?",
    options: ["Network congestion", "An off-by-one error", "A password hash failure", "A database deadlock"],
    answer: 1,
    explanation: "Using the wrong boundary in a loop often causes one extra or one missing iteration.",
  },
  {
    prompt: "Why is a trace table useful in practical revision?",
    options: ["It shows variable changes step by step", "It automatically writes the final code", "It removes the need for any testing", "It formats reports for printing"],
    answer: 0,
    explanation: "A trace table helps learners follow program logic and locate mistakes systematically.",
  },
  {
    prompt: "What should happen before values are added repeatedly into a running total?",
    options: ["The accumulator should be initialised correctly", "All loops should be removed", "The GUI must be redesigned first", "The program should disconnect from the database"],
    answer: 0,
    explanation: "Accumulators need a sensible starting value such as 0 before the loop begins.",
  },
  {
    prompt: "Which defensive check helps avoid a crash in a division calculation?",
    options: ["Check that the divisor is not zero first", "Always multiply before dividing", "Rename the method after every test", "Store the answer as a date"],
    answer: 0,
    explanation: "Division by zero is an avoidable runtime error if the program checks the divisor first.",
  },
  {
    prompt: "Why do clear method names help in the practical exam?",
    options: ["They make the code easier to read and debug quickly", "They remove the need for parameters", "They guarantee full marks automatically", "They stop loops from running"],
    answer: 0,
    explanation: "Meaningful method names help you and the marker understand what each part of the program does.",
  },
  {
    prompt: "Which testing choice is strongest before final submission?",
    options: ['Testing a single easy value and then stopping', 'Testing normal, boundary and invalid cases', 'Testing the colours of the GUI', 'Skipping the testing to save time'],
    answer: 1,
    explanation: "Strong testing covers typical inputs as well as edge cases and invalid values.",
  },
  {
    prompt: "Why should you compare your output with the wording of the question before submitting?",
    options: ['Because small formatting or logic differences can still cost marks', 'Because markers do not run the program', 'Because the program only needs to compile', 'Because comments matter more than the results of the program at the final stage of the exam paper'],
    answer: 0,
    explanation: "Exam questions often specify exact outputs or behaviours, so a final comparison can prevent avoidable mark loss.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const NscPracticalProgrammingRevision = () => (
  <CapsSubjectTopic
    title="NSC Practical Programming Revision"
    subtitle="Revising OOP, validation and debugging under exam conditions"
    learnSteps={learnSteps}
    task="gr12-nsc-practical-programming-revision-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default NscPracticalProgrammingRevision;
