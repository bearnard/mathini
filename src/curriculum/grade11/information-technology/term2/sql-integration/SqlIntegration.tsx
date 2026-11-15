import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { DB_CONNECTION_STEPS } from '../../../../../components/diagrams/business/steps';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Connecting a program to a database',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Programs interact with databases through a <strong>database connection</strong>. The key steps are:
        </p>
        <NumberedSteps steps={DB_CONNECTION_STEPS} tone="teal" label="Using a database from a program" />
        <CodeBlock language="sql" code={`# Python example using sqlite3
import sqlite3
conn = sqlite3.connect("school.db")
cursor = conn.cursor()
cursor.execute("SELECT * FROM Students")
rows = cursor.fetchall()
for row in rows:
    print(row)
conn.close()`} />
        <p className="text-sm text-slate-600">Always close the connection when done to free resources.</p>
      </div>
    ),
  },
  {
    title: 'Parameterised queries',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Parameterised queries</strong> use placeholders instead of embedding user input directly in SQL — this prevents <strong>SQL injection attacks</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Unsafe (string concatenation)</strong>
            <pre className="text-xs text-slate-700 mt-1 whitespace-pre">{`sql = "SELECT * FROM Users WHERE name = '" + name + "'"`}</pre>
            <p className="text-slate-600 text-xs mt-1">An attacker can inject SQL commands via name.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Safe (parameterised)</strong>
            <pre className="text-xs text-slate-700 mt-1 whitespace-pre">{`sql = "SELECT * FROM Users WHERE name = ?"
cursor.execute(sql, (name,))`}</pre>
            <p className="text-slate-600 text-xs mt-1">The ? is replaced safely by the database driver.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Data validation before database entry',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Always <strong>validate user input</strong> in the application before inserting it into the database.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Presence check</strong>
            <p className="text-slate-600">Ensure required fields are not empty before inserting.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Type check</strong>
            <p className="text-slate-600">Confirm a number field contains digits, not letters.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Range check</strong>
            <p className="text-slate-600">Ensure values fall within acceptable limits (e.g. age 0–120).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Format check</strong>
            <p className="text-slate-600">Validate patterns like email addresses or ID numbers.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Database normalisation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Normalisation</strong> organises tables to reduce data redundancy and improve integrity.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">1NF</strong>
            <p className="text-slate-600">No repeating groups; each cell holds a single atomic value; each row is unique.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">2NF</strong>
            <p className="text-slate-600">In 1NF + all non-key attributes depend on the <em>whole</em> primary key (no partial dependencies).</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">3NF</strong>
            <p className="text-slate-600">In 2NF + no non-key attribute depends on another non-key attribute (no transitive dependencies).</p>
          </div>
        </div>
      </div>
    ),
  },
];

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
    explanation: 'Open connections consume server resources. Always close connections (and cursors) when they are no longer needed.',
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
    prompt: 'Which Python sqlite3 method retrieves all rows from a query result?',
    options: ['cursor.getall()', 'cursor.fetchall()', 'cursor.readrows()', 'cursor.selectall()'],
    answer: 'cursor.fetchall()',
    explanation: 'cursor.fetchall() returns all remaining rows as a list of tuples after executing a SELECT statement.',
  },
  {
    prompt: 'A form accepts an age input. The program checks: if age < 0 or age > 120: show error. This is an example of:',
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
    prompt: 'What is a cursor in database programming?',
    options: [
      'A pointer that indicates the selected text on screen',
      'An object that executes SQL queries and iterates over result rows',
      'A type of database index',
      'A foreign key reference',
    ],
    answer: 'An object that executes SQL queries and iterates over result rows',
    explanation: 'In Python (and other languages), a cursor is created from a connection and used to execute SQL and fetch results.',
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
