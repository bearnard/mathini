'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Keys and table structure',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good database structure begins with suitable field types and meaningful keys. The primary key identifies each row,
          while the foreign key links related tables.
        </p>
        <CodeBlock language="sql" code={`CREATE TABLE Customers (
  CustomerID AUTOINCREMENT PRIMARY KEY,
  CustomerName VARCHAR(50) NOT NULL,
  Province VARCHAR(20)
);

CREATE TABLE Orders (
  OrderID AUTOINCREMENT PRIMARY KEY,
  CustomerID INTEGER NOT NULL,
  OrderDate DATE,
  Amount CURRENCY,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);`} />
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Concept: Primary vs foreign key</p>
          <p className="text-slate-600 mt-1">
            A primary key must be unique in its own table. A foreign key repeats where necessary so that related records can be joined.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Selecting and filtering data with SQL',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Read a query in order: choose the fields, identify the tables, apply the filter, and then check the sort order.
        </p>
        <CodeBlock language="sql" code={`SELECT CustomerName, Amount, OrderDate
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Amount >= 500
ORDER BY OrderDate DESC;`} />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Predict the output by applying the <strong>WHERE</strong> condition before worrying about the final sort order.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Aggregate functions and grouped results',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Aggregate functions summarise many rows into a smaller result. When the question asks for totals per category,
          <strong>GROUP BY</strong> is essential.
        </p>
        <CodeBlock language="sql" code={`SELECT Province, COUNT(*) AS NumCustomers, AVG(Amount) AS AvgOrder
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Province
HAVING AVG(Amount) > 250
ORDER BY AvgOrder DESC;`} />
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li><strong>COUNT</strong> counts rows.</li>
          <li><strong>AVG</strong> and <strong>SUM</strong> work on numeric fields.</li>
          <li><strong>HAVING</strong> filters groups after grouping.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Maintaining data quality',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Data-changing queries must respect validation rules, required fields and referential integrity so that later forms and reports remain accurate.
        </p>
        <CodeBlock language="sql" code={`INSERT INTO Orders (CustomerID, OrderDate, Amount)
VALUES (12, '2025-05-10', 899.95);

UPDATE Orders
SET Amount = 949.95
WHERE OrderID = 18;

DELETE FROM Orders
WHERE OrderID = 18;`} />
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
          <p className="font-semibold text-emerald-800">Quality check</p>
          <p className="text-slate-600 mt-1">
            In exam answers, mention both the SQL statement and the rule protecting the data, for example required values, range checks or valid foreign keys.
          </p>
        </div>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "What is the main purpose of a primary key?",
    options: ["To store long paragraphs of text", "To identify each record uniquely", "To connect the computer to the network", "To sort records alphabetically only"],
    answer: 1,
    explanation: "A primary key uniquely identifies each row so that records are not confused with one another.",
  },
  {
    prompt: "What does a foreign key do?",
    options: ["It changes a number into a date", "It links a record in one table to a related record in another table", "It deletes duplicate rows automatically", "It hides fields from forms"],
    answer: 1,
    explanation: "A foreign key stores a value that refers to a primary key in another table.",
  },
  {
    prompt: "What is the role of the WHERE clause in SQL?",
    options: ["It filters rows according to a condition", "It groups rows into totals", "It creates a new database", "It renames every field"],
    answer: 0,
    explanation: "WHERE is used to limit the result to rows that match the stated condition.",
  },
  {
    prompt: "Which function counts how many records are in a result set?",
    options: ["SUM()", "AVG()", "COUNT()", "ORDER()"],
    answer: 2,
    explanation: "COUNT() returns the number of rows that match the query.",
  },
  {
    prompt: "What does ORDER BY Total DESC do?",
    options: ["Sorts totals from highest to lowest", "Deletes the Total field", "Filters out duplicate totals", "Changes totals into text values"],
    answer: 0,
    explanation: "DESC means descending order, so the greatest values appear first.",
  },
  {
    prompt: "Which SQL statement changes existing records?",
    options: ["INSERT", "UPDATE", "SELECT", "CREATE"],
    answer: 1,
    explanation: "UPDATE modifies values that are already stored in a table.",
  },
  {
    prompt: "Which data type is most suitable for a person's surname?",
    options: ["Boolean", "Text / VARCHAR", "Date/Time", "Currency"],
    answer: 1,
    explanation: "A surname is stored as text, not as a true/false value, date or amount of money.",
  },
  {
    prompt: "When is GROUP BY needed?",
    options: ["When a summary such as a total must be calculated for each category", "When a table needs a new primary key", "When records must be deleted permanently", "When a form is being designed"],
    answer: 0,
    explanation: "GROUP BY is used with aggregate functions when you need separate summaries for each group.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const AdvancedDatabasesSql = () => (
  <CapsSubjectTopic
    title="Advanced Databases and SQL"
    subtitle="Using structured queries and data rules to solve practical problems"
    learnSteps={learnSteps}
    task="gr12-advanced-databases-sql-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default AdvancedDatabasesSql;
