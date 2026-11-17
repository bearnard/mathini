import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { COLS, MARKS, ROWS, colTotal, countAtLeast, grandTotal, highest, lowest, mark, rowTotal } from '../../_shared/arrayFacts';

const MarksTable = ({ extra }: { extra?: 'rows' | 'cols' }) => (
  <div className="overflow-x-auto">
    <table className="mx-auto border-collapse text-center text-sm text-slate-800">
      <thead>
        <tr>
          <th className="border border-slate-300 bg-slate-100 px-3 py-1">Row \ Col</th>
          {Array.from({ length: COLS }, (_, i) => <th key={i} className="border border-slate-300 bg-slate-100 px-3 py-1">{i + 1}</th>)}
          {extra === 'rows' ? <th className="border border-slate-300 bg-emerald-50 px-3 py-1">Row total</th> : null}
        </tr>
      </thead>
      <tbody>
        {MARKS.map((row, r) => (
          <tr key={r}>
            <th className="border border-slate-300 bg-slate-100 px-3 py-1">{r + 1}</th>
            {row.map((v, c) => <td key={c} className="border border-slate-300 px-3 py-1">{v}</td>)}
            {extra === 'rows' ? <td className="border border-slate-300 bg-emerald-50 px-3 py-1 font-semibold">{rowTotal(r + 1)}</td> : null}
          </tr>
        ))}
        {extra === 'cols' ? (
          <tr>
            <th className="border border-slate-300 bg-emerald-50 px-3 py-1">Column total</th>
            {Array.from({ length: COLS }, (_, i) => <td key={i} className="border border-slate-300 bg-emerald-50 px-3 py-1 font-semibold">{colTotal(i + 1)}</td>)}
          </tr>
        ) : null}
      </tbody>
    </table>
  </div>
);

const hi = highest();
const lo = lowest();

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a two-dimensional array?',
    content: (
      <div className="space-y-4">
        <Rule>A two-dimensional (2-D) array stores values in a table of rows and columns. One name holds the whole table, and two indexes pick one value: the row first, then the column.</Rule>
        <p className="text-left text-slate-700">Here {ROWS} learners (rows) each wrote {COLS} tests (columns). The marks are kept in one array, arrMarks.</p>
        <MarksTable />
        <Mistake>A 2-D array is still ONE data structure with ONE data type. Every value in arrMarks is an integer; you cannot mix names and marks in the same array.</Mistake>
      </div>
    ),
  },
  {
    title: 'Declaring and using an element',
    content: (
      <div className="space-y-4">
        <Rule>Declare the bounds of the rows first and then of the columns. With bounds 1..{ROWS} and 1..{COLS}, the array counts from 1 in both directions.</Rule>
        <CodeBlock language="pascal" code={`var
  arrMarks : array[1..${ROWS}, 1..${COLS}] of Integer;
begin
  arrMarks[1, 1] := ${mark(1, 1)};          // row 1, column 1
  arrMarks[2, 3] := ${mark(2, 3)};          // row 2, column 3
  ShowMessage(IntToStr(arrMarks[3, 1])); // shows ${mark(3, 1)}
end;`} />
        <p className="text-left text-slate-700">The array holds {ROWS} &times; {COLS} = {ROWS * COLS} elements. An index outside the declared bounds, such as arrMarks[{ROWS + 1}, 1], is an error.</p>
      </div>
    ),
  },
  {
    title: 'Stepping through every element',
    content: (
      <div className="space-y-4">
        <Rule>Use a loop inside a loop (nested loops). The outer loop steps through the rows and the inner loop steps through the columns, so the table is visited row by row.</Rule>
        <CodeBlock language="pascal" code={`for r := 1 to ${ROWS} do
begin
  sLine := '';
  for c := 1 to ${COLS} do
    sLine := sLine + IntToStr(arrMarks[r, c]) + #9;   // #9 is a tab
  redOut.Lines.Add(sLine);
end;`} />
        <p className="text-left text-slate-700">The inner statement runs {ROWS} &times; {COLS} = {ROWS * COLS} times. For each value of r the inner loop runs through all {COLS} columns, and then r moves to the next row.</p>
      </div>
    ),
  },
  {
    title: 'Row and column totals',
    content: (
      <div className="space-y-4">
        <Rule>An aggregate adds up the values in one row or one column. Reset the total to 0 before you start each new row or column.</Rule>
        <CodeBlock language="pascal" code={`// total of each row (each learner)
for r := 1 to ${ROWS} do
begin
  iRowTotal := 0;                       // reset for every row
  for c := 1 to ${COLS} do
    iRowTotal := iRowTotal + arrMarks[r, c];
  redOut.Lines.Add(IntToStr(iRowTotal));
end;

// total of each column (each test): the loops swap places
for c := 1 to ${COLS} do
begin
  iColTotal := 0;
  for r := 1 to ${ROWS} do
    iColTotal := iColTotal + arrMarks[r, c];
end;`} />
        <MarksTable extra="rows" />
        <Worked
          title="Results for this array"
          steps={[
            <>Row totals: {Array.from({ length: ROWS }, (_, i) => rowTotal(i + 1)).join(', ')}.</>,
            <>Column totals: {Array.from({ length: COLS }, (_, i) => colTotal(i + 1)).join(', ')}.</>,
            <>The grand total, from either direction, is {grandTotal()}.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Largest value, counting and common errors',
    content: (
      <div className="space-y-4">
        <Rule>To find the largest value, start with the first element and compare every other element with it. Remember where it was found.</Rule>
        <CodeBlock language="pascal" code={`iMax := arrMarks[1, 1];
iRow := 1;
iCol := 1;
for r := 1 to ${ROWS} do
  for c := 1 to ${COLS} do
    if arrMarks[r, c] > iMax then
    begin
      iMax := arrMarks[r, c];
      iRow := r;
      iCol := c;
    end;`} />
        <p className="text-left text-slate-700">Here the largest mark is {hi.value}, in arrMarks[{hi.row}, {hi.col}], and the smallest is {lo.value}, in arrMarks[{lo.row}, {lo.col}]. {countAtLeast(75)} marks are 75 or more. Integer division with div gives {rowTotal(1)} div {COLS} = {Math.trunc(rowTotal(1) / COLS)} for the whole-number average of learner 1.</p>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>No reset:</strong> a total that is not set to 0 can start with an unknown value, because Delphi does not set a local variable to 0 for you.</li>
          <li><strong>Reset in the wrong place:</strong> setting the total to 0 inside the inner loop destroys the sum after each column.</li>
          <li><strong>Swapped indexes:</strong> the first index is the row and the second is the column.</li>
          <li><strong>Wrong bounds:</strong> using 1 to {COLS} for the rows leaves rows out or goes out of range.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>In arrMarks[3, 1], which index is the row?</>,
          <>How many times does the inner statement of two nested loops run for rows 1 to {ROWS} and columns 1 to {COLS}?</>,
          <>Why do you reset iRowTotal to 0 inside the outer loop?</>,
          <>How do you change the loops to total columns instead of rows?</>,
        ]}
        answers={[
          <>The first index, 3.</>,
          <>{ROWS * COLS} times.</>,
          <>So that every row starts adding from zero.</>,
          <>Let the outer loop step through the columns and the inner loop through the rows.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'How many elements does array[1..4, 1..3] of Integer hold?',
    options: ['7', '12', '14', '10'],
    answer: '12',
    explanation: 'There are 4 rows and 3 columns, so the array holds 4 x 3 = 12 elements.',
  },
  {
    prompt: 'In arrMarks[3, 1], which index gives the row?',
    options: ['The first index, 3', 'The second index, 1', 'Both indexes together', 'Neither index'],
    answer: 'The first index, 3',
    explanation: 'The row comes first and the column second, so arrMarks[3, 1] is row 3, column 1.',
  },
  {
    prompt: 'Using the table of marks, what is stored in arrMarks[2, 3]?',
    options: ['61', '49', '58', '88'],
    answer: '49',
    explanation: 'Row 2 is 58, 61, 49 and column 3 is the third value, which is 49.',
  },
  {
    prompt: 'Which element holds the highest mark of 90?',
    options: ['arrMarks[3, 1]', 'arrMarks[1, 3]', 'arrMarks[3, 3]', 'arrMarks[2, 1]'],
    answer: 'arrMarks[3, 1]',
    explanation: 'Row 3 is 90, 85, 88, so 90 is in row 3, column 1.',
  },
  {
    prompt: 'Which nested loops visit the table row by row?',
    options: ['The outer loop steps through the columns', 'Both loops step through the rows', 'The outer loop steps through the rows', 'Neither loop steps through the columns'],
    answer: 'The outer loop steps through the rows',
    explanation: 'The outer loop moves to the next row only after the inner loop has finished all the columns of the current row.',
  },
  {
    prompt: 'For rows 1 to 4 and columns 1 to 3, how many times does the inner statement of the nested loops run?',
    options: ['16', '12', '10', '14'],
    answer: '12',
    explanation: 'The inner loop runs 3 times for each of the 4 rows, so the statement runs 4 x 3 = 12 times.',
  },
  {
    prompt: 'What is the total of row 2 (the marks 58, 61 and 49)?',
    options: ['168', '178', '158', '171'],
    answer: '168',
    explanation: 'Adding the three marks, 58 + 61 + 49 = 168.',
  },
  {
    prompt: 'What is the total of column 3 (the marks 80, 49, 88 and 74)?',
    options: ['283', '291', '284', '301'],
    answer: '291',
    explanation: '80 + 49 + 88 + 74 = 291.',
  },
  {
    prompt: 'What is the grand total of all 12 marks in the table?',
    options: ['868', '848', '878', '858'],
    answer: '858',
    explanation: 'Adding the row totals 217 + 168 + 263 + 210 gives 858, which is also 283 + 284 + 291.',
  },
  {
    prompt: 'Why is iRowTotal := 0 placed inside the outer loop but before the inner loop?',
    options: ['So each row starts from zero', 'So that the columns are skipped', 'So that the array is emptied', 'So that the grand total is found'],
    answer: 'So each row starts from zero',
    explanation: 'The total must be reset for every new row, or the sum of one row would carry over into the next.',
  },
  {
    prompt: 'What can go wrong if iTotal is declared but never set to 0 before the loops?',
    options: ['The loops will not run any more', 'The array becomes a one-dimensional list', 'The marks are sorted by Delphi first', 'It may start with an unknown value'],
    answer: 'It may start with an unknown value',
    explanation: 'A local variable in Delphi is not set to 0 automatically, so the total can start with a leftover value.',
  },
  {
    prompt: 'The array is declared as array[1..4, 1..3]. Which statement is outside the declared bounds?',
    options: ['arrMarks[4, 3] := 70;', 'arrMarks[5, 1] := 70;', 'arrMarks[1, 1] := 70;', 'arrMarks[2, 2] := 70;'],
    answer: 'arrMarks[5, 1] := 70;',
    explanation: 'The rows run from 1 to 4, so row 5 does not exist.',
  },
  {
    prompt: 'Learner 1 has a total of 217 for 3 tests. What does 217 div 3 give?',
    options: ['73', '72', '71', '70'],
    answer: '72',
    explanation: 'div gives the whole-number part of the division: 3 goes into 217 seventy-two times (216), with 1 left over.',
  },
  {
    prompt: 'How many of the 12 marks are 75 or more?',
    options: ['3', '5', '6', '4'],
    answer: '4',
    explanation: 'The marks that are 75 or more are 80, 90, 85 and 88, so there are four.',
  },
];
