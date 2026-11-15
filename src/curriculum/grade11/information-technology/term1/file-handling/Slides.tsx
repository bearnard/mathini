import type { ReactNode } from 'react';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { delphiCopy, fileAfter, readLoop, splitAtComma } from '../../../../../components/diagrams/it/g11delphi';

// Every output below comes from g11delphi.ts (tested in g11delphi.test.ts).
const existing = ['Mon', 'Tue'];
const appended = fileAfter(existing, 'Append', ['Wed']);
const rewritten = fileAfter(existing, 'Rewrite', ['Wed']);
const emptied = fileAfter(existing, 'Rewrite', []);
const loop = readLoop(['55', '78', '43']);
const split = splitAtComma('Thandi,78');
const q1 = fileAfter(['R120', 'R80'], 'Append', ['R45']);
const q2 = readLoop(['4', '9', '2', '7']);
const q4 = splitAtComma('Sipho,5');

const slide = (children: ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Text files and the TextFile variable',
    content: slide(
      <>
        <Rule>A text file stores readable characters in lines. In Delphi you declare a TextFile variable and link it to a file name with AssignFile. Binary files hold raw bytes and are not the focus in Grade 11.</Rule>
        <CodeBlock language="pascal" code={`var
  f: TextFile;
begin
  AssignFile(f, 'marks.txt');`} />
        <Worked
          title="Prepare to use marks.txt"
          steps={['Declare f as a TextFile.', 'AssignFile links f to the name marks.txt.', 'Nothing is open yet: you must still call Reset, Rewrite or Append.']}
        />
        <Mistake>Believing AssignFile opens the file. It only links the name.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reset, Rewrite and Append',
    content: slide(
      <>
        <Rule>Reset opens an existing file for reading. Rewrite creates a file, or erases an existing one, ready for writing. Append opens an existing file and adds lines at the end.</Rule>
        <Worked
          title={`A file holds ${existing.join(', ')}. A program writes Wed.`}
          steps={[<>Append: the file now holds {appended.join(', ')}.</>, <>Rewrite: the old lines are erased and the file holds {rewritten.join(', ')}.</>, <>Rewrite followed by CloseFile with nothing written leaves {emptied.length} lines.</>, 'Reset raises an error if the file is missing, so test FileExists(\'marks.txt\') first.']}
        />
        <Mistake>Using Rewrite to add a record. It wipes every earlier record.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading line by line',
    content: slide(
      <>
        <Rule>Read until the end of the file with while not Eof(f). Put the loop inside try..finally so CloseFile always runs, even if a line causes an error.</Rule>
        <CodeBlock language="pascal" code={`Reset(f);
total := 0;
try
  while not Eof(f) do
  begin
    ReadLn(f, line);
    total := total + StrToInt(line);
  end;
finally
  CloseFile(f);
end;`} />
        <Worked
          title="marks.txt holds 55, 78 and 43"
          steps={[<>The body runs {loop.iterations} times, once for each line.</>, <>total becomes 55, then 133, then {loop.total}.</>, 'Eof(f) is True after the last line, so the loop ends.']}
        />
        <Mistake>Looping a fixed number of times. Use Eof, because the file length can change.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing and appending lines',
    content: slide(
      <>
        <Rule>WriteLn(f, text) writes a line and moves to the next. Use Append to keep old records, and always finish with CloseFile so the data is saved to disk.</Rule>
        <CodeBlock language="pascal" code={`AssignFile(f, 'log.txt');
Append(f);
WriteLn(f, 'Sale: R250');
CloseFile(f);`} />
        <Worked
          title="Add a sale to the log"
          steps={['Reset and Rewrite are not suitable: Reset cannot write, and Rewrite would erase the log.', <>Append adds the new line after the lines already there: {appended.join(', ')} in the earlier example.</>, 'CloseFile flushes the line to disk.']}
        />
        <Mistake>Forgetting CloseFile. Lines still in the buffer may never reach the file.</Mistake>
      </>,
    ),
  },
  {
    title: 'Splitting a record with Pos and Copy',
    content: slide(
      <>
        <Rule>A line such as Thandi,78 holds two fields. Pos finds the comma, and Copy cuts out each part. Delphi counts string positions from 1, not 0.</Rule>
        <CodeBlock language="pascal" code={`line := 'Thandi,78';
p := Pos(',', line);
name := Copy(line, 1, p - 1);
mark := StrToInt(Copy(line, p + 1, Length(line)));`} />
        <Worked
          title="Split Thandi,78"
          steps={[<>Pos(',', line) is {split.p}, so the comma is character {split.p}.</>, <>Copy(line, 1, {split.p - 1}) gives {split.name}.</>, <>Copy(line, {split.p + 1}, Length(line)) gives {split.value}, and StrToInt turns it into the number {Number(split.value)}.</>]}
        />
        <Mistake>Treating 0 as the first position. The first character is position 1, so Copy(line, 1, 1) is &quot;{delphiCopy('Thandi,78', 1, 1)}&quot;.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A file holds R120 and R80. A program opens it with Append and writes R45. What lines does it hold?</>,
          <>A file has 4 lines and is read with while not Eof(f). How many times does the loop body run?</>,
          <>Which procedure opens an existing file only for reading?</>,
          <>What are the name and the value when Sipho,5 is split with Pos and Copy?</>,
        ]}
        answers={[
          <>{q1.join(', ')}.</>,
          <>{q2.iterations} times; the total of the numbers is {q2.total}.</>,
          <>Reset.</>,
          <>Name {q4.name} and value {q4.value} (the comma is at position {q4.p}).</>,
        ]}
      />,
    ),
  },
];
