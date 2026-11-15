import type { ReactNode } from 'react';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { groupAverages, sum, totalValidLines, traceSumOfSquares } from '../../../../../components/diagrams/it/g11delphi';

// Every number below comes from g11delphi.ts (tested in g11delphi.test.ts).
const balance = sum([500, 200]);
const lines = ['12', 'N/A', '7'];
const valid = totalValidLines(lines);
const groups = groupAverages([
  { group: '11B', mark: 60 },
  { group: '11A', mark: 70 },
  { group: '11A', mark: 55 },
  { group: '11B', mark: 81 },
  { group: '11B', mark: 45 },
]);
const squares = traceSumOfSquares(3);
const q2 = totalValidLines(['5', 'x', '8', '']);

const slide = (children: ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Classes and objects in Delphi',
    content: slide(
      <>
        <Rule>A class is the blueprint; an object is one instance made from it. Keep attributes private and give public methods to change them. A constructor runs when an object is created.</Rule>
        <CodeBlock language="pascal" code={`type
  TAccount = class
  private
    fBalance: Real;
  public
    constructor Create(aBalance: Real);
    procedure Deposit(amount: Real);
    function GetBalance: Real;
  end;

constructor TAccount.Create(aBalance: Real);
begin
  fBalance := aBalance;
end;

procedure TAccount.Deposit(amount: Real);
begin
  fBalance := fBalance + amount;
end;`} />
        <Worked
          title="Create an account and deposit"
          steps={['objAcc := TAccount.Create(500); the constructor sets fBalance to 500.', 'objAcc.Deposit(200); the method adds 200 to fBalance.', <>GetBalance now returns {balance}.</>]}
        />
        <Mistake>Changing fBalance from outside the class. Go through a public method instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Files and exceptions together',
    content: slide(
      <>
        <Rule>Convert each line inside try..except so one bad line does not stop the program. EConvertError is raised when StrToInt gets text that is not a whole number.</Rule>
        <CodeBlock language="pascal" code={`while not Eof(f) do
begin
  ReadLn(f, line);
  try
    total := total + StrToInt(line);
  except
    on EConvertError do
      Inc(skipped);
  end;
end;`} />
        <Worked
          title={`The file holds ${lines.join(', ')}`}
          steps={[<>12 converts: total {12}.</>, <>N/A raises EConvertError, so skipped becomes {valid.skipped}.</>, <>7 converts: total is {valid.total}.</>]}
        />
        <Mistake>Catching the error and doing nothing. Count or report the bad lines.</Mistake>
      </>,
    ),
  },
  {
    title: 'SQL and ADO revision',
    content: slide(
      <>
        <Rule>Write the clauses in order: SELECT, FROM, WHERE, GROUP BY, ORDER BY. Use Open on a TADOQuery for SELECT and ExecSQL for INSERT, UPDATE and DELETE. An UPDATE or DELETE without WHERE changes every row.</Rule>
        <CodeBlock language="pascal" code={`qryResults.SQL.Text :=
  'SELECT Grp, COUNT(*) AS Learners, AVG(Mark) AS Average ' +
  'FROM Results GROUP BY Grp ORDER BY Grp';
qryResults.Open;`} />
        <Worked
          title="Five marks: 11A has 70 and 55, 11B has 60, 81 and 45"
          steps={groups.map((g) => <>Group {g.group}: {g.count} learners, average {String(g.average).replace('.', ',')}.</>)}
        />
        <Mistake>Using WHERE to filter on COUNT or AVG. Those are filtered after grouping with HAVING.</Mistake>
      </>,
    ),
  },
  {
    title: 'Networks and social implications',
    content: slide(
      <>
        <Rule>Networks: LAN, MAN and WAN; bus, star, ring and mesh topologies; TCP gives reliable delivery and IP gives addresses. Social implications: POPIA, cybercrime, security tools, the digital divide, copyright and plagiarism.</Rule>
        <Worked
          title="Pick the right fact"
          steps={['A mail server sends a message to another mail server: SMTP. A user fetches mail from a server: POP3 or IMAP.', 'In a star network the central switch is the single point of failure; in a bus the cable is.', 'POPIA says personal data must be collected for a stated purpose and protected.']}
        />
        <Mistake>Mixing up the protocols for sending and fetching mail.</Mistake>
      </>,
    ),
  },
  {
    title: 'Exam technique for code questions',
    content: slide(
      <>
        <Rule>Read each question twice and give about one minute per mark. For code questions, trace the variables by hand. Check that every SQL statement has its clauses in the right order.</Rule>
        <Worked
          title="Trace for i := 1 to 3 do total := total + i * i"
          steps={squares.map((r) => <>Pass {r.i}: total is {r.total}.</>)}
        />
        <Mistake>Guessing the output of a loop instead of tracing it pass by pass.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which Delphi keyword pair makes a block run its clean-up code whether or not an error occurs?</li>
            <li>A file holds 5, x, 8 and a blank line. Using try..except around StrToInt, what is the total and how many lines are skipped?</li>
            <li>Which TADOQuery method runs an UPDATE statement?</li>
            <li>What does the constructor of a class do?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>try..finally.</li>
            <li>Total {q2.total}; {q2.skipped} lines skipped.</li>
            <li>ExecSQL (Open is for SELECT).</li>
            <li>It runs when an object is created and sets its starting values.</li>
          </ol>
        }
      />,
    ),
  },
];
