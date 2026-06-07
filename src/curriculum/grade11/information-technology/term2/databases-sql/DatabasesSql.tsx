import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/it/term2/databases-sql/diagram.webp", alt: "Databases and SQL" },
    title: 'Relational database concepts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>relational database</strong> stores data in tables made up of rows (records) and columns (fields).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Primary key</strong>
            <p className="text-slate-600">A field that <em>uniquely identifies</em> every record in a table. No duplicates or NULLs allowed. E.g. StudentID.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Foreign key</strong>
            <p className="text-slate-600">A field in one table that references the primary key of another table, creating a <em>relationship</em> between tables.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-left">
          <p className="text-sm text-slate-700">Example: <strong>Orders</strong> table has a <code>CustomerID</code> foreign key linking to the <strong>Customers</strong> table primary key.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'SQL SELECT statements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>SELECT</strong> is the SQL statement used to retrieve data from a table.
        </p>
        <CodeBlock language="sql" code={`-- Retrieve all columns
SELECT * FROM Students;

-- Retrieve specific columns with condition
SELECT Name, Age FROM Students
WHERE Age > 16
ORDER BY Name ASC;

-- Aggregate functions
SELECT COUNT(*) FROM Students WHERE Age = 17;
SELECT AVG(Mark) FROM Results;`} />
        <p className="text-sm text-slate-600">Use <code>LIKE</code> for pattern matching: <code>WHERE Name LIKE 'A%'</code> finds names starting with A.</p>
      </div>
    ),
  },
  {
    title: 'SQL INSERT, UPDATE and DELETE',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          SQL can also <em>modify</em> data in a table:
        </p>
        <CodeBlock language="pascal" code={`-- Add a new record
INSERT INTO Students (ID, Name, Age)
VALUES (101, 'Ayesha', 17);

-- Modify an existing record
UPDATE Students
SET Age = 18
WHERE ID = 101;

-- Remove a record
DELETE FROM Students
WHERE ID = 101;`} />
        <div className="bg-red-50 p-3 rounded-xl text-left">
          <strong className="text-red-700">Warning:</strong>
          <p className="text-slate-600 text-sm">Always include a WHERE clause with UPDATE and DELETE — omitting it affects <em>every</em> row!</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Aggregate functions and GROUP BY',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          SQL <strong>aggregate functions</strong> summarise multiple rows into a single result:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl inline-block text-left">
          <table className="text-sm text-slate-700 w-full">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pr-6 py-1">Function</th>
                <th className="py-1">What it returns</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="pr-6 py-1">COUNT(*)</td><td>Number of rows</td></tr>
              <tr><td className="pr-6 py-1">SUM(col)</td><td>Total of all values</td></tr>
              <tr><td className="pr-6 py-1">AVG(col)</td><td>Average value</td></tr>
              <tr><td className="pr-6 py-1">MIN(col)</td><td>Smallest value</td></tr>
              <tr><td className="pr-6 py-1">MAX(col)</td><td>Largest value</td></tr>
            </tbody>
          </table>
        </div>
        <CodeBlock language="sql" code={`SELECT Grade, AVG(Mark)
FROM Results
GROUP BY Grade;`} />
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is the purpose of a primary key in a database table?',
    options: [
      'To link two tables together',
      'To uniquely identify each record in the table',
      'To sort the table alphabetically',
      'To store the most important data field',
    ],
    answer: 'To uniquely identify each record in the table',
    explanation: 'A primary key must be unique for every row and cannot be NULL. It identifies each record unambiguously.',
  },
  {
    prompt: 'Which SQL clause is used to filter rows based on a condition?',
    options: ['ORDER BY', 'GROUP BY', 'WHERE', 'HAVING'],
    answer: 'WHERE',
    explanation: 'WHERE filters rows before any grouping or aggregation occurs, e.g. WHERE Age > 16.',
  },
  {
    prompt: 'What does SELECT * FROM Products return?',
    options: [
      'Only the first row of the Products table',
      'All columns and all rows from the Products table',
      'Only the primary key column',
      'A count of rows in the Products table',
    ],
    answer: 'All columns and all rows from the Products table',
    explanation: 'The asterisk (*) is a wildcard that selects all columns. Without a WHERE clause, all rows are returned.',
  },
  {
    prompt: 'A student runs: DELETE FROM Students; (without a WHERE clause). What happens?',
    options: [
      'Only the first record is deleted',
      'The database table itself is dropped',
      'Every record in the Students table is deleted',
      'Nothing — DELETE requires a primary key',
    ],
    answer: 'Every record in the Students table is deleted',
    explanation: 'Without a WHERE clause, DELETE removes ALL rows. This is a common and dangerous mistake.',
  },
  {
    prompt: 'Which SQL aggregate function returns the number of rows that match a condition?',
    options: ['SUM()', 'AVG()', 'COUNT()', 'MAX()'],
    answer: 'COUNT()',
    explanation: 'COUNT(*) or COUNT(column) returns the number of rows (or non-NULL values in a column).',
  },
  {
    prompt: 'What is a foreign key?',
    options: [
      'A key imported from another database system',
      'A field in one table that references the primary key of another table',
      'A secondary unique identifier in the same table',
      'A key that is kept secret for security purposes',
    ],
    answer: 'A field in one table that references the primary key of another table',
    explanation: 'Foreign keys create relationships (links) between tables, enforcing referential integrity.',
  },
  {
    prompt: 'Write the correct SQL to update a student\'s age to 18 where StudentID = 5. Which is correct?',
    options: [
      'UPDATE Students SET Age = 18;',
      'UPDATE Students SET Age = 18 WHERE StudentID = 5;',
      'MODIFY Students Age = 18 WHERE StudentID = 5;',
      'ALTER Students SET Age = 18 WHERE StudentID = 5;',
    ],
    answer: 'UPDATE Students SET Age = 18 WHERE StudentID = 5;',
    explanation: 'Correct UPDATE syntax: UPDATE table SET column=value WHERE condition. Without WHERE, all rows would be updated.',
  },
  {
    prompt: 'Which clause sorts query results in descending order?',
    options: [
      'ORDER BY Name ASC',
      'SORT BY Name DESC',
      'ORDER BY Name DESC',
      'GROUP BY Name DESC',
    ],
    answer: 'ORDER BY Name DESC',
    explanation: 'ORDER BY sorts results. ASC = ascending (A–Z, 0–9). DESC = descending (Z–A, 9–0).',
  },
  {
    prompt: 'A query uses: WHERE Name LIKE \'%son\'. Which name would it match?',
    options: ['Sonkosi', 'Nelson', 'Petersen', 'Anderson'],
    answer: 'Anderson',
    explanation: '\'%son\' matches any string ending in "son". Anderson ends in "son"; the others do not.',
  },
  {
    prompt: 'Which SQL statement adds a new record to a table?',
    options: ['ADD INTO', 'INSERT INTO', 'CREATE RECORD', 'APPEND INTO'],
    answer: 'INSERT INTO',
    explanation: 'INSERT INTO table (columns) VALUES (values) is the standard SQL syntax for adding a new row.',
  },
];

const DatabasesSql = () => (
  <CapsSubjectTopic
    title="Databases and SQL"
    subtitle="Storing and retrieving structured data with SQL queries"
    learnSteps={learnSteps}
    task="gr11-databases-sql-t2"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default DatabasesSql;
