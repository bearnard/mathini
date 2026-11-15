import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { DB_CONNECTION_STEPS } from '../../../../../components/diagrams/business/steps';
import type { ITItem } from '../../_shared/types';
import { learnSteps } from './Slides';

const bank: ITItem[] = [
  {
    prompt: 'Why are parameterised queries safer than building SQL by string concatenation?',
    options: ['They run faster than concatenated queries do', 'They stop SQL injection by treating input as data, not code', 'They let several queries run at the same time', 'They check all of the data types automatically'],
    answer: 'They stop SQL injection by treating input as data, not code',
    explanation: 'Parameterised queries pass user input separately; the database driver ensures it cannot be interpreted as SQL commands.',
  },
  {
    prompt: 'What must a programmer always do after querying a database to avoid resource leaks?',
    options: [
      'Commit the transaction',
      'Delete temporary tables',
      'Close the database connection',
      'Back up the database',
    ],
    answer: 'Close the database connection',
    explanation: 'Open connections consume server resources. Always close the connection (and any open query) when they are no longer needed.',
  },
  {
    prompt: 'A form field for "Phone Number" accepts letters. Which validation check is missing?',
    options: ['Presence check', 'Range check', 'Type check', 'Length check'],
    answer: 'Type check',
    explanation: 'A type check ensures the entered value matches the expected data type — phone numbers should contain only digits.',
  },
  {
    prompt: 'What is SQL injection?',
    options: ['Adding a new column to a database table', 'An attack that slips malicious SQL in through user input', 'A way of making database queries faster', 'A technique for importing data from CSV files'],
    answer: 'An attack that slips malicious SQL in through user input',
    explanation: 'SQL injection exploits unsafe query construction to execute unintended database commands — e.g. bypassing login or deleting data.',
  },
  {
    prompt: 'A table stores: StudentID, Name, SubjectID, SubjectName, Mark. SubjectName depends only on SubjectID, not on the full key (StudentID + SubjectID). Which normal form is violated?',
    options: ['1NF', '2NF', '3NF', 'None — it is fully normalised'],
    answer: '2NF',
    explanation: 'A partial dependency (SubjectName depends only on part of the composite key) violates 2NF. SubjectName should be in a separate Subjects table.',
  },
  {
    prompt: 'A TADOQuery holds a SELECT statement in its SQL.Text. Which method runs the statement and fetches its records?',
    options: ['ExecSQL', 'Open', 'Post', 'Append'],
    answer: 'Open',
    explanation: 'Open runs a SELECT and makes its records available. ExecSQL is for INSERT, UPDATE and DELETE, which return no records.',
  },
  {
    prompt: 'A form accepts an age input. The program checks: if (iAge < 0) or (iAge > 120) then ShowMessage(\'Invalid age\'). This is an example of:',
    options: ['Type check', 'Presence check', 'Range check', 'Format check'],
    answer: 'Range check',
    explanation: 'A range check verifies that a value falls within an acceptable minimum and maximum boundary.',
  },
  {
    prompt: 'In 1st Normal Form (1NF), which rule must be followed?',
    options: ['Every table must have a composite key', 'Each column holds one atomic value, with no repeating groups', 'All of the foreign keys must be removed', 'Each table can have three columns at the most'],
    answer: 'Each column holds one atomic value, with no repeating groups',
    explanation: '1NF requires atomic values — no lists or multiple values in one cell, and no duplicate rows.',
  },
  {
    prompt: 'Which statement about a TADOQuery component is correct?',
    options: [
      'It stores a copy of the database file on the form',
      'It runs SQL through a TADOConnection and reads the records',
      'It replaces the need for any connection to the database',
      'It can only be used for SELECT statements',
    ],
    answer: 'It runs SQL through a TADOConnection and reads the records',
    explanation: 'A TADOQuery sends the SQL in its SQL.Text through the connection. Use Open for SELECT, ExecSQL for other statements, and Next with Eof to walk the records.',
  },
];

const SqlIntegration = () => (
  <CapsSubjectTopic
    title="SQL Integration with Code"
    subtitle="Connecting applications to databases and processing data safely"
    learnSteps={learnSteps}
    task="gr11-sql-integration-t2"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default SqlIntegration;
