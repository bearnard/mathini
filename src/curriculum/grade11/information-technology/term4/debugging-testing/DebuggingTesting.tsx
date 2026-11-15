import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem } from '../../_shared/types';
import { learnSteps } from './Slides';

const bank: ITItem[] = [
  {
    prompt: 'A Delphi program stops with an "EDivByZero" exception message when it divides by zero. What type of error is this?',
    options: ['Syntax error', 'Logic error', 'Runtime error', 'Compile-time error'],
    answer: 'Runtime error',
    explanation: 'A runtime error occurs during program execution. Dividing by zero is only detected at the moment that line executes.',
  },
  {
    prompt: 'A program runs without crashing but calculates the average of 10, 20 and 30 as 30 instead of 20. What type of error is this?',
    options: ['Syntax error', 'Runtime error', 'Logic error', 'Compilation error'],
    answer: 'Logic error',
    explanation: 'Logic errors produce incorrect results without crashing. The algorithm is flawed — perhaps dividing by the wrong denominator.',
  },
  {
    prompt: 'A learner writes ShowMessage(\'Hello\' in Delphi, forgetting the closing bracket. The compiler reports an error and the program does not run. What error type is this?',
    options: ['Runtime error', 'Logic error', 'Syntax error', 'Semantic error'],
    answer: 'Syntax error',
    explanation: 'A missing bracket breaks the rules of the language, so the compiler reports a syntax error before the program can run. (A misspelled name such as ShowMesage is also caught at compile time, as an undeclared identifier.)',
  },
  {
    prompt: 'What is the purpose of a breakpoint in an IDE debugger?',
    options: ['To make the program crash on purpose', 'To pause the program at a line so you can inspect variables', 'To delete a section of the code for a while', 'To speed up the execution of the program'],
    answer: 'To pause the program at a line so you can inspect variables',
    explanation: 'Breakpoints tell the debugger to stop execution at that line, allowing the developer to examine variable states.',
  },
  {
    prompt: 'Complete the trace table: x := 5; result := 1; for i := 1 to 2 do result := result * x. What is result after the loop?',
    options: ['5', '10', '25', '15'],
    answer: '25',
    explanation: 'Iteration 1: result = 1 × 5 = 5. Iteration 2: result = 5 × 5 = 25. for i := 1 to 2 runs with i = 1 and i = 2.',
  },
  {
    prompt: 'Why is "rubber-duck debugging" an effective technique?',
    options: ['The rubber duck gives AI-made feedback on the code', 'Explaining code aloud forces clear thinking and exposes mistakes', 'It speeds up the compiler when it builds the code', 'It works for syntax errors and for no other errors'],
    answer: 'Explaining code aloud forces clear thinking and exposes mistakes',
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
    explanation: 'If Inc(count) is inside a condition that is never satisfied, count never changes — a classic logic error to find with tracing.',
  },
  {
    prompt: 'When should a developer add temporary ShowMessage or memo output lines for debugging?',
    options: ['Only in the final version of a program', 'Temporarily, to inspect variables, then remove them afterwards', 'At the start of every function, kept for good', 'Only when the program shows a syntax error'],
    answer: 'Temporarily, to inspect variables, then remove them afterwards',
    explanation: 'Debug output lines are temporary diagnostic tools — they should be cleaned up before final submission.',
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
