import type { ReactNode } from 'react';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TraceTable } from '../../../../../components/diagrams/it/G11DelphiPictures';
import { average, averageWithoutDividing, classifyTestValue, countWhen, sum, sumMissingLast, tracePower, traceSumOfSquares, traceWhileSubtract } from '../../../../../components/diagrams/it/g11delphi';

// Every number below comes from g11delphi.ts (tested in g11delphi.test.ts).
const squares = traceSumOfSquares(4);
const marks = [10, 20, 30];
const bugs = { right: average(marks), wrong: averageWithoutDividing(marks), total: sum(marks) };
const arr = [5, 10, 15, 20];
const offByOne = { right: sum(arr), wrong: sumMissingLast(arr) };
const edges = [50, 0, 100, 101].map((v) => ({ v, kind: classifyTestValue(v, 0, 100) }));
const power = tracePower(3, 3);
const q2 = traceWhileSubtract(37);
const stuck = countWhen([4, 8, 15], (v) => v > 100);

const slide = (children: ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Syntax, runtime and logic errors',
    content: slide(
      <>
        <Rule>A syntax error breaks the rules of the language, so the compiler refuses to build the program. A runtime error stops a running program, for example EDivByZero or EConvertError. A logic error runs but gives the wrong answer.</Rule>
        <CodeBlock language="pascal" code={`x := 10        // missing semicolon: syntax error
y := x div 0;  // EDivByZero: runtime error
avg := total;  // runs, wrong answer: logic error`} />
        <Worked
          title="Classify each fault"
          steps={['A missing semicolon or a misspelt keyword: the compiler reports it before the program runs, so it is a syntax error.', 'StrToInt(\'abc\') raises EConvertError while the program runs: a runtime error.', 'A program that adds instead of multiplies compiles and runs, but its output is wrong: a logic error.']}
        />
        <Mistake>Expecting the compiler to find logic errors. It cannot: you find them by testing and tracing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Breakpoints, watches and stepping',
    content: slide(
      <>
        <Rule>A breakpoint pauses the program at a chosen line so you can inspect it. A watch shows the value of a variable as you step. In Delphi, F5 toggles a breakpoint, F8 steps over a line, F7 steps into a routine and F9 runs on.</Rule>
        <Worked
          title="Find where total goes wrong"
          steps={['Press F5 on the line before the loop to set a breakpoint, then F9 to run to it.', 'Add total to the watch list (Ctrl+F5).', 'Press F8 to move one line at a time and watch total change.', 'The pass where total stops matching your trace table is the error.']}
        />
        <Mistake>Leaving ShowMessage lines in after debugging. They are a temporary aid, so remove them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Trace tables',
    content: slide(
      <>
        <Rule>A trace table follows each variable by hand, one row per pass of a loop, so you can predict the output before running the program.</Rule>
        <CodeBlock language="pascal" code={`total := 0;
for i := 1 to 4 do
  total := total + i * i;`} />
        <TraceTable columns={['i', 'total']} rows={squares.map((r) => [r.i, r.total])} aria={`Trace table: after the four passes total is ${squares.map((r) => r.total).join(', ')}.`} />
        <Worked
          title="Complete the trace"
          steps={[<>Pass 1: 0 + 1 × 1 = {squares[0].total}.</>, <>Pass 2: {squares[0].total} + 2 × 2 = {squares[1].total}. Pass 3: {squares[1].total} + 9 = {squares[2].total}.</>, <>Pass 4: {squares[2].total} + 16 = {squares[3].total}, so total ends at {squares[3].total}.</>]}
        />
        <Mistake>Writing only the final value. Write the row for every pass.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding logic errors',
    content: slide(
      <>
        <Rule>Compare what the program does with what it should do. Typical logic errors are a missing step, a condition that is never true, and a loop that stops one pass early.</Rule>
        <Worked
          title="Three typical faults"
          steps={[<>Missing step: the marks 10, 20 and 30 total {bugs.total}. avg := total shows {bugs.wrong}, but total / count gives {bugs.right}.</>, <>Never-true condition: counting values above 100 in 4, 8 and 15 leaves the counter at {stuck}, so the counter is changed inside an if that never fires.</>, <>Early stop: summing {arr.join(', ')} with for i := 1 to 3 gives {offByOne.wrong}, not {offByOne.right}.</>]}
        />
        <Mistake>Changing code at random. Trace first, find the pass where the values go wrong, then fix that line.</Mistake>
      </>,
    ),
  },
  {
    title: 'Test data and test plans',
    content: slide(
      <>
        <Rule>Test with normal data, boundary data (the edges of the valid range) and invalid data. A test plan records, for every test, the number, the input, the expected output, the actual output and the result.</Rule>
        <Worked
          title="Mark field with a valid range of 0 to 100"
          steps={edges.map((e) => <>Input {e.v}: {e.kind} data.</>)}
        />
        <Mistake>Filling in only the expected output. The actual output column is what proves the test was run.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>For num := 37, how many passes does while num &gt;= 10 do num := num - 10 make, and what is num at the end?</li>
            <li>With result := 1 first, what is result after for i := 1 to 3 do result := result * 3?</li>
            <li>Which kind of error is a program that runs and prints a wrong total?</li>
            <li>Which key sets a breakpoint in Delphi?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{q2.length} passes; num ends at {q2[q2.length - 1].num}.</li>
            <li>{power[power.length - 1].result}.</li>
            <li>A logic error.</li>
            <li>F5.</li>
          </ol>
        }
      />,
    ),
  },
];
