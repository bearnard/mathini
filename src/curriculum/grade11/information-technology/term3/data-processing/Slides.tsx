import type { ReactNode } from 'react';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { average, delphiCopy, delphiDelete, delphiInsert, delphiPos, formatCheckAt, lengthCheck, maxOf, presenceCheck, rangeCheck, sum, tryStrToInt } from '../../../../../components/diagrams/it/g11delphi';

// Every output below comes from g11delphi.ts (tested in g11delphi.test.ts).
const marks = [55, 78, 43, 90, 64];
const stats = { total: sum(marks), avg: average(marks), max: maxOf(marks) };
const dec = (n: number) => String(n).replace('.', ',');
const t1 = tryStrToInt('72');
const t2 = tryStrToInt('7a');
const q1 = { total: sum([12, 18, 9]), avg: average([12, 18, 9]), max: maxOf([12, 18, 9]) };
const phone = '0821234567';

const slide = (children: ReactNode) => <div className="space-y-4">{children}</div>;
const yn = (b: boolean) => (b ? 'passes' : 'fails');

export const learnSteps: LearnStep[] = [
  {
    title: 'Validating input',
    content: slide(
      <>
        <Rule>Validation stops bad data entering a program. A presence check asks if anything was typed, a type check if it is the right kind of data, a range check if it is within limits, a length check if it has the right size, and a format check if it follows the pattern.</Rule>
        <CodeBlock language="pascal" code={`if edtName.Text = '' then ...            // presence
if not TryStrToInt(edtMark.Text, iMark) then ...  // type
if (iMark < 0) or (iMark > 100) then ...   // range
if Length(sPhone) <> 10 then ...           // length
if Pos('@', sEmail) = 0 then ...           // format`} />
        <Worked
          title="Check the entries"
          steps={[<>Text 72: type check {yn(t1.ok)}, value {t1.value}; range 0 to 100 {yn(rangeCheck(t1.value, 0, 100))}.</>, <>Text 7a: type check {yn(t2.ok)}, so do not use the value.</>, <>Phone {phone}: length 10 check {yn(lengthCheck(phone, 10))}.</>, <>lerato@school.co.za: contains @, so the format check {yn(formatCheckAt('lerato@school.co.za'))}.</>]}
        />
        <Mistake>Doing the range check before the type check. Letters cannot be compared with numbers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Exceptions: try..except and try..finally',
    content: slide(
      <>
        <Rule>An exception is a runtime error that your code can handle. Put risky code in try..except and name the exception class. Use try..finally for clean-up that must always run, such as CloseFile.</Rule>
        <CodeBlock language="pascal" code={`try
  iMark := StrToInt(edtMark.Text);
  iAvg := iTotal div iCount;
except
  on EConvertError do
    ShowMessage('Enter a whole number');
  on EDivByZero do
    ShowMessage('There are no marks yet');
end;`} />
        <Worked
          title="Two different failures"
          steps={['The user types abc: StrToInt raises EConvertError and the first message is shown.', 'iCount is 0: div raises EDivByZero, so the second message is shown. (The / operator raises EZeroDivide instead.)', 'Anything in a finally block runs in both cases.']}
        />
        <Mistake>Handling every exception with one vague message. Name the exception so the user knows what to fix.</Mistake>
      </>,
    ),
  },
  {
    title: 'Arrays and accumulators',
    content: slide(
      <>
        <Rule>An array stores several values of one type under one name. An accumulator is a variable that builds up a total, a count or a largest value as a loop visits each element.</Rule>
        <CodeBlock language="pascal" code={`var
  arrMarks: array[1..5] of Integer;
  i, iTotal, iMax: Integer;
  rAvg: Real;
begin
  iTotal := 0;
  iMax := arrMarks[1];
  for i := 1 to 5 do
  begin
    iTotal := iTotal + arrMarks[i];
    if arrMarks[i] > iMax then iMax := arrMarks[i];
  end;
  rAvg := iTotal / 5;
  ShowMessage(FloatToStrF(rAvg, ffFixed, 8, 1));`} />
        <Worked
          title={`The marks are ${marks.join(', ')}`}
          steps={[<>iTotal ends at {stats.total}.</>, <>iMax ends at {stats.max}.</>, <>rAvg = {stats.total} / 5 = {dec(stats.avg)}, shown with one decimal place by FloatToStrF.</>]}
        />
        <Mistake>Using div for an average. div drops the decimals; use / and a Real variable.</Mistake>
      </>,
    ),
  },
  {
    title: 'String functions in processing',
    content: slide(
      <>
        <Rule>Length gives the number of characters, Pos finds a piece, Copy takes a piece, Delete removes characters and Insert adds them. Positions start at 1.</Rule>
        <Worked
          title="Work on the string  Hello World"
          steps={[<>Pos(&apos;World&apos;, s) is {delphiPos('World', 'Hello World')}.</>, <>Copy(s, 1, 5) gives {delphiCopy('Hello World', 1, 5)}.</>, <>After Delete(s, 6, 6) the string is {delphiDelete('Hello World', 6, 6)}.</>, <>Insert(&apos;big &apos;, &apos;a dog&apos;, 3) makes {delphiInsert('big ', 'a dog', 3)}.</>]}
        />
        <Mistake>Expecting Pos to return 0 for the first letter. A missing piece returns 0, and a match at the start returns 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading a file into an array',
    content: slide(
      <>
        <Rule>Read each line of a file into the next array element and count how many were stored. Declare the array larger than you expect and process only the counted elements.</Rule>
        <CodeBlock language="pascal" code={`iCount := 0;
while (not Eof(f)) and (iCount < 100) do
begin
  Inc(iCount);
  ReadLn(f, arrMarks[iCount]);
end;
CloseFile(f);`} />
        <Worked
          title="A file with the marks 12, 18 and 9"
          steps={['iCount starts at 0 and grows by 1 for each line.', <>After three lines iCount is 3, and the total is {q1.total}.</>, <>The average is {dec(q1.avg)} and the highest mark is {q1.max}.</>]}
        />
        <Mistake>Looping to the declared size of the array. Loop to iCount, the number of values stored.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which validation check is Pos(&apos;@&apos;, sEmail) &gt; 0?</li>
            <li>Which exception does StrToInt raise for the text abc?</li>
            <li>An array holds 12, 18 and 9. What are the total and the average?</li>
            <li>Does the text 7a pass a presence check and does it pass a type check?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A format check.</li>
            <li>EConvertError.</li>
            <li>Total {q1.total} and average {dec(q1.avg)}.</li>
            <li>It passes the presence check ({String(presenceCheck('7a'))}) but fails the type check.</li>
          </ol>
        }
      />,
    ),
  },
];
