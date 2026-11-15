'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Breaking problems into modules',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Algorithmic refinement means starting with a broad solution and then improving it into smaller, testable parts.
          Each helper method should solve one clear sub-problem.
        </p>
        <CodeBlock language="pascal" code={`function GetValidMark: Integer;
var
  sInput: string;
  iMark: Integer;
begin
  repeat
    sInput := InputBox('Mark', 'Enter a mark from 0 to 100', '');
    iMark := StrToIntDef(sInput, -1);
  until (iMark >= 0) and (iMark <= 100);

  Result := iMark;
end;

function CalculateAverage(iTotal, iCount: Integer): Real;
begin
  Result := iTotal / iCount;
end;`} />
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Concept: Decomposition</p>
          <p className="text-slate-600 mt-1">
            A refined algorithm is easier to debug because you can test each function separately before combining the full solution.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Validation and robust input handling',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Validation checks whether data is acceptable. Verification checks whether the captured data matches the original source.
          In practical programming, robust validation protects the program before calculations begin.
        </p>
        <CodeBlock language="pascal" code={`repeat
  sEmail := InputBox('Email', 'Enter school email address', '');
until (Pos('@', sEmail) > 1) and sEmail.EndsWith('.za');

ShowMessage('Valid email captured.');`} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <p className="font-semibold text-amber-800">Validation</p>
            <p className="mt-1 text-slate-600">Checks type, range, format and completeness before processing.</p>
          </div>
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
            <p className="font-semibold text-purple-800">Verification</p>
            <p className="mt-1 text-slate-600">Confirms the captured value matches the original source, for example by double entry.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Recursion and refined logic patterns',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Recursion is powerful when a problem can be reduced to a smaller version of itself. Every recursive solution needs a base case and a recursive step.
        </p>
        <CodeBlock language="pascal" code={`function Factorial(iNum: Integer): Integer;
begin
  if iNum <= 1 then
    Result := 1
  else
    Result := iNum * Factorial(iNum - 1);
end;`} />
        <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
          <p className="font-semibold text-rose-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            If you are asked why recursion stops, refer to the <strong>base case</strong>. Without it, the algorithm can recurse forever.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Testing with evidence',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Strong testing uses normal, abnormal and boundary values. A trace table gives evidence that the refined algorithm behaves correctly.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <div className="grid min-w-[30rem] grid-cols-4 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            <p>Test type</p>
            <p>Example input</p>
            <p>Expected result</p>
            <p>Reason</p>
          </div>
          <div className="grid min-w-[30rem] grid-cols-4 gap-y-0 border-t border-slate-200 text-sm text-slate-600">
            <p className="border-r border-slate-200 px-4 py-3">Normal</p>
            <p className="border-r border-slate-200 px-4 py-3">75</p>
            <p className="border-r border-slate-200 px-4 py-3">Accepted</p>
            <p className="px-4 py-3">Inside the valid range</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Boundary</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">0 or 100</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Accepted</p>
            <p className="border-t border-slate-200 px-4 py-3">Edge of the valid range</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Abnormal</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">120</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Rejected</p>
            <p className="border-t border-slate-200 px-4 py-3">Outside the allowed range</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Functions, validation loops and refinement",
    content: (
      <div className="space-y-4">
        <GapRule>{"Splitting a program into smaller functions supports reuse and easier debugging. The most robust input loop keeps asking until the input satisfies the validation rule. A refined algorithm avoids unnecessary repetition and handles edge cases clearly."}</GapRule>
        <GapWorked title={"Refine a mark-input routine"} steps={["Put the validation in a function: IsValidMark(m).", "repeat read the mark until IsValidMark(m).", "Test the edge cases 0 and 100, and values just outside the range."]} />
        <GapMistake>{"Checking the input only once and then continuing."}</GapMistake>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "What is the main benefit of splitting a program into smaller functions or procedures?",
    options: ["It makes the program impossible to test", "It supports reuse and easier debugging", "It removes all need for variables", "It guarantees recursion is used"],
    answer: 1,
    explanation: "Small focused modules are easier to reuse, test and maintain than one large block of code.",
  },
  {
    prompt: "A program only accepts an age from 1 to 120. Which value is a boundary test case?",
    options: ["57", "80", "120", "35"],
    answer: 2,
    explanation: "Boundary values sit on the edges of the accepted range, such as 1 and 120.",
  },
  {
    prompt: "What does validation do?",
    options: ['Checks whether entered data is reasonable and allowed', 'Backs up all the files automatically', 'Converts the GUI controls on a form into program classes automatically', 'Draws a UML diagram of the program'],
    answer: 0,
    explanation: "Validation checks that data meets rules such as length, type or range before it is processed.",
  },
  {
    prompt: "What must every recursive algorithm have?",
    options: ['A base case that stops the repeated calls', 'Two constructors in the class', 'A database connection to a remote server with a login screen', 'A public array of integer values'],
    answer: 0,
    explanation: "Without a base case, recursion keeps calling itself and may never stop correctly.",
  },
  {
    prompt: "Why is a trace table useful?",
    options: ["It permanently fixes runtime errors", "It helps you follow variable values step by step", "It hides incorrect logic from the user", "It replaces the need for testing"],
    answer: 1,
    explanation: "A trace table lets you track how values change so you can spot logic errors.",
  },
  {
    prompt: "Which test value is best described as abnormal data?",
    options: ["A mark of 75 when the valid range is 0 to 100", "A mark of 0 when the valid range is 0 to 100", "A mark of 120 when the valid range is 0 to 100", "A mark of 50 when the valid range is 0 to 100"],
    answer: 2,
    explanation: "A value of 120 is outside the allowed range, so it is abnormal data.",
  },
  {
    prompt: "Which input loop is most robust?",
    options: ["One that accepts the first value without checking it", "One that keeps asking until the input satisfies the validation rule", "One that stores every invalid value permanently", "One that only works for boundary values"],
    answer: 1,
    explanation: "Robust input handling keeps checking until the user supplies a valid value.",
  },
  {
    prompt: "What is usually true of a refined algorithm?",
    options: ['It avoids unnecessary repetition and handles edge cases clearly', 'It ignores invalid input in order to save time', 'It uses the longest possible code to show the marker the effort', 'It can be run once and then never again'],
    answer: 0,
    explanation: "Refined algorithms are clearer, more efficient and more reliable in unusual cases.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const AlgorithmicRefinementValidationTesting = () => (
  <CapsSubjectTopic
    title="Algorithmic Refinement, Validation and Testing"
    subtitle="Improving program logic through modular design and systematic checks"
    learnSteps={learnSteps}
    task="gr12-algorithmic-refinement-validation-testing-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default AlgorithmicRefinementValidationTesting;
