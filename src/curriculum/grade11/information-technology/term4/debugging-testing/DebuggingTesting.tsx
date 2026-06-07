import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/it/term4/debugging-testing/diagram.webp", alt: "Debugging and Testing" },
    title: 'Types of programming errors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Programming errors fall into three categories, each requiring a different debugging approach:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Syntax error</strong>
            <p className="text-slate-600">Violates the language's grammar rules. Caught by the compiler/interpreter <em>before</em> the program runs. E.g. missing colon, misspelled keyword.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Runtime error</strong>
            <p className="text-slate-600">Occurs <em>during execution</em>, causing a crash. E.g. dividing by zero, accessing an invalid array index, file not found.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Logic error</strong>
            <p className="text-slate-600">The program runs without crashing but produces <em>wrong output</em>. Hardest to find. E.g. using + instead of *, wrong loop condition.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Debugging strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Systematic <strong>debugging</strong> saves time by focusing on likely causes rather than guessing:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Trace / desk check</strong>
            <p className="text-slate-600">Manually follow code execution on paper, tracking variable values at each step. Effective for finding logic errors.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Print statements</strong>
            <p className="text-slate-600">Insert temporary <code>print()</code> calls to display variable values at key points — confirm what the program is actually doing.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">IDE debugger</strong>
            <p className="text-slate-600">Set breakpoints, step through code line by line, and inspect variable values in real time.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Rubber-duck debugging</strong>
            <p className="text-slate-600">Explain your code aloud (to a rubber duck or classmate) — articulating the logic often reveals the mistake.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Writing a test plan',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>test plan</strong> systematically documents how a program was tested. Each test case should record:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl inline-block text-left overflow-x-auto">
          <table className="text-sm text-slate-700 w-full">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pr-4 py-1">Test #</th>
                <th className="pr-4 py-1">Input</th>
                <th className="pr-4 py-1">Expected output</th>
                <th className="pr-4 py-1">Actual output</th>
                <th className="py-1">Pass/Fail</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="pr-4 py-1">1</td><td className="pr-4 py-1">mark = 75</td><td className="pr-4 py-1">"Pass"</td><td className="pr-4 py-1">"Pass"</td><td>Pass ✓</td></tr>
              <tr><td className="pr-4 py-1">2</td><td className="pr-4 py-1">mark = −5</td><td className="pr-4 py-1">Error message</td><td className="pr-4 py-1">Error message</td><td>Pass ✓</td></tr>
              <tr><td className="pr-4 py-1">3</td><td className="pr-4 py-1">mark = 50</td><td className="pr-4 py-1">"Pass"</td><td className="pr-4 py-1">"Fail"</td><td>Fail ✗</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600">Test 3 reveals a logic error — the boundary condition (50) is handled incorrectly.</p>
      </div>
    ),
  },
  {
    title: 'Trace tables',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>trace table</strong> tracks the value of variables at each step of a loop or algorithm — essential for spotting logic errors.
        </p>
        <div className="bg-slate-50 p-4 rounded-xl inline-block text-left">
          <p className="text-sm font-bold text-slate-700 mb-2">Code: total = 0; for i in range(1,4): total += i</p>
          <table className="text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pr-6 py-1">Iteration</th>
                <th className="pr-6 py-1">i</th>
                <th className="py-1">total</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="pr-6 py-1">Start</td><td className="pr-6 py-1">—</td><td>0</td></tr>
              <tr><td className="pr-6 py-1">1</td><td className="pr-6 py-1">1</td><td>1</td></tr>
              <tr><td className="pr-6 py-1">2</td><td className="pr-6 py-1">2</td><td>3</td></tr>
              <tr><td className="pr-6 py-1">3</td><td className="pr-6 py-1">3</td><td>6</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600">After 3 iterations, total = 6 (1 + 2 + 3).</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'A program crashes with "ZeroDivisionError: division by zero". What type of error is this?',
    options: ['Syntax error', 'Logic error', 'Runtime error', 'Compile-time error'],
    answer: 'Runtime error',
    explanation: 'A runtime error occurs during program execution. Dividing by zero is only detected at the moment that line executes.',
  },
  {
    prompt: 'A program runs without crashing but calculates the average of [10, 20, 30] as 30 instead of 20. What type of error is this?',
    options: ['Syntax error', 'Runtime error', 'Logic error', 'Compilation error'],
    answer: 'Logic error',
    explanation: 'Logic errors produce incorrect results without crashing. The algorithm is flawed — perhaps dividing by the wrong denominator.',
  },
  {
    prompt: 'A learner writes "pritn("Hello")" in Python. The interpreter reports an error before the program runs. What error type is this?',
    options: ['Runtime error', 'Logic error', 'Syntax error', 'Semantic error'],
    answer: 'Syntax error',
    explanation: '"pritn" is a misspelled function name — a syntax/name error caught before execution begins.',
  },
  {
    prompt: 'What is the purpose of a breakpoint in an IDE debugger?',
    options: [
      'To cause the program to crash intentionally',
      'To pause program execution at a specific line so variables can be inspected',
      'To delete a section of code temporarily',
      'To speed up program execution',
    ],
    answer: 'To pause program execution at a specific line so variables can be inspected',
    explanation: 'Breakpoints tell the debugger to stop execution at that line, allowing the developer to examine variable states.',
  },
  {
    prompt: 'Complete the trace table: x = 5; result = 1; for i in range(1,3): result *= x. What is result after the loop?',
    options: ['5', '10', '25', '15'],
    answer: '25',
    explanation: 'Iteration 1: result = 1 × 5 = 5. Iteration 2: result = 5 × 5 = 25. range(1,3) gives i = 1, 2.',
  },
  {
    prompt: 'Why is "rubber-duck debugging" an effective technique?',
    options: [
      'The rubber duck provides AI-generated feedback',
      'Explaining code aloud forces structured thinking and often reveals the mistake',
      'It speeds up the compiler',
      'It only works for syntax errors',
    ],
    answer: 'Explaining code aloud forces structured thinking and often reveals the mistake',
    explanation: 'Articulating logic out loud engages different mental processes — you often spot an error the moment you try to explain it.',
  },
  {
    prompt: 'Which type of test data sits at the exact edge of the valid range (e.g. exactly 0 or exactly 100 for a 0–100 field)?',
    options: ['Normal data', 'Invalid data', 'Boundary data', 'Erroneous data'],
    answer: 'Boundary data',
    explanation: 'Boundary testing checks the values at the limits of the valid range, where off-by-one errors are common.',
  },
  {
    prompt: 'A trace table shows that a variable "count" never increases during a loop. What is the most likely cause?',
    options: [
      'The variable was declared with the wrong data type',
      'The increment statement is inside an if-condition that is never true',
      'The loop runs too many times',
      'The variable name contains a capital letter',
    ],
    answer: 'The increment statement is inside an if-condition that is never true',
    explanation: 'If count += 1 is inside a condition that is never satisfied, count never changes — a classic logic error to find with tracing.',
  },
  {
    prompt: 'When should a developer add print() statements for debugging?',
    options: [
      'Only in the final version of a program',
      'Temporarily during debugging to inspect variable values; they should be removed afterwards',
      'At the start of every function permanently',
      'Only when the program produces a syntax error',
    ],
    answer: 'Temporarily during debugging to inspect variable values; they should be removed afterwards',
    explanation: 'Debug print() calls are temporary diagnostic tools — they should be cleaned up before final submission.',
  },
  {
    prompt: 'A test plan column labelled "Actual output" records:',
    options: [
      'What the program should produce',
      'What the program actually produced when the test was run',
      'The input values for the test',
      'The programmer\'s prediction before running the test',
    ],
    answer: 'What the program actually produced when the test was run',
    explanation: 'Comparing expected vs actual output reveals whether the program behaves correctly for that test case.',
  },
];

const DebuggingTesting = () => (
  <CapsSubjectTopic
    title="Debugging and Testing"
    subtitle="Identifying and fixing errors in programs systematically"
    learnSteps={learnSteps}
    task="gr11-debugging-testing-t4"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default DebuggingTesting;
