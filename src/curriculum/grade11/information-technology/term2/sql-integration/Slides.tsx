import type { ReactNode } from 'react';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { countAndAverage, rangeCheck, selectMarkAtLeast, updateBump } from '../../../../../components/diagrams/it/g11delphi';
import type { StudentRow } from '../../../../../components/diagrams/it/g11delphi';

// Every output below comes from g11delphi.ts (tested in g11delphi.test.ts).
const table: StudentRow[] = [
  { id: 1, name: 'Ayanda', mark: 72 },
  { id: 2, name: 'Bongani', mark: 48 },
  { id: 3, name: 'Chloe', mark: 85 },
  { id: 4, name: 'Dumisani', mark: 72 },
  { id: 5, name: 'Esihle', mark: 39 },
];
const pass = selectMarkAtLeast(table, 50);
const bumped = updateBump(table, 50, 10);
const stats = countAndAverage(table);
const q1 = selectMarkAtLeast(table, 80);
const q2 = updateBump(table, 73, 5);

const slide = (children: ReactNode) => <div className="space-y-4">{children}</div>;
const dec = (n: number) => String(n).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'Linking a Delphi program to a database',
    content: slide(
      <>
        <Rule>A Delphi program reaches a database through ADO components. A TADOConnection holds the link to the database file, and a TADOQuery sends SQL through that connection.</Rule>
        <CodeBlock language="pascal" code={`qryStudents.Connection := ADOConnection1;
ADOConnection1.Connected := True;`} />
        <Worked
          title="Set up the link"
          steps={['Drop a TADOConnection on the form and give it the connection string for the database.', 'Drop a TADOQuery and set its Connection property to the TADOConnection.', 'Set Connected to True; if it fails, check the file path first.']}
        />
        <Mistake>Giving every query its own separate connection. One connection can serve many queries.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading records with SELECT',
    content: slide(
      <>
        <Rule>Put the SELECT text in SQL.Text and call Open. Then step through the records with while not Eof, read each field with FieldByName, and move on with Next.</Rule>
        <CodeBlock language="pascal" code={`qryStudents.Close;
qryStudents.SQL.Text :=
  'SELECT * FROM Students WHERE Mark >= 50 ORDER BY Mark DESC';
qryStudents.Open;
while not qryStudents.Eof do
begin
  memOut.Lines.Add(qryStudents.FieldByName('Name').AsString);
  qryStudents.Next;
end;`} />
        <Worked
          title="Marks 72, 48, 85, 72 and 39 in the table"
          steps={[<>WHERE Mark &gt;= 50 keeps {pass.length} rows.</>, <>ORDER BY Mark DESC lists them as {pass.map((r) => `${r.name} (${r.mark})`).join(', ')}.</>, 'Forgetting Next would show the first record again and again.']}
        />
        <Mistake>Using ExecSQL for a SELECT. SELECT returns records, so use Open.</Mistake>
      </>,
    ),
  },
  {
    title: 'Changing records with ExecSQL',
    content: slide(
      <>
        <Rule>INSERT, UPDATE and DELETE return no records, so run them with ExecSQL. An UPDATE or DELETE needs a WHERE clause, otherwise it changes every row.</Rule>
        <CodeBlock language="pascal" code={`qryStudents.SQL.Text :=
  'UPDATE Students SET Mark = Mark + 10 WHERE Mark < 50';
qryStudents.ExecSQL;`} />
        <Worked
          title="Give a 10-mark bonus to anyone below 50"
          steps={[<>{bumped.changed} rows match Mark &lt; 50.</>, <>The marks become {bumped.rows.map((r) => r.mark).join(', ')}.</>, <>COUNT(*) is {stats.count} and AVG(Mark) is {dec(stats.average)} before the bonus.</>]}
        />
        <Mistake>Leaving out WHERE. The bonus would go to all {stats.count} learners.</Mistake>
      </>,
    ),
  },
  {
    title: 'Parameters and SQL injection',
    content: slide(
      <>
        <Rule>Building SQL by joining in what the user typed lets an attacker add their own SQL, which is SQL injection. A parameter treats the typed text purely as a value.</Rule>
        <CodeBlock language="pascal" code={`qryStudents.SQL.Text :=
  'SELECT * FROM Students WHERE Surname = :sn';
qryStudents.Parameters.ParamByName('sn').Value :=
  edtSurname.Text;
qryStudents.Open;`} />
        <Worked
          title="A user types  x' OR '1'='1"
          steps={['Joined into the SQL text, it turns the condition into one that is always true, so every row is returned.', 'As a parameter, it is searched for as a surname, so no row matches.', 'The query stays a query: the input can not become code.']}
        />
        <Mistake>Escaping a few characters by hand. Use parameters every time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Validate, then normalise',
    content: slide(
      <>
        <Rule>Check input before it reaches the database: a presence check, a type check and a range check. Normal forms keep tables tidy: 1NF has single values in each cell, 2NF removes partial dependencies, and 3NF removes dependencies between non-key fields.</Rule>
        <Worked
          title="Age field accepts 0 to 120"
          steps={[<>Age 35: range check {rangeCheck(35, 0, 120) ? 'passes' : 'fails'}.</>, <>Age 130: range check {rangeCheck(130, 0, 120) ? 'passes' : 'fails'}, so show an error and do not run the INSERT.</>, 'A table that repeats a subject name for every learner depends on only part of its key: move subjects to their own table (2NF).']}
        />
        <Mistake>Relying on the database to reject bad data. Check first and give the user a clear message.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which TADOQuery method runs a DELETE statement?</>,
          <>Using the same five-row table, which learners does WHERE Mark &gt;= 80 return?</>,
          <>After UPDATE Students SET Mark = Mark + 5 WHERE Mark &lt; 73, how many rows changed?</>,
          <>Why is ParamByName safer than joining text into the SQL string?</>,
        ]}
        answers={[
          <>ExecSQL.</>,
          <>{q1.map((r) => `${r.name} (${r.mark})`).join(', ')}.</>,
          <>{q2.changed} rows.</>,
          <>The typed text is only ever a value, so it can not change the SQL command.</>,
        ]}
      />,
    ),
  },
];
