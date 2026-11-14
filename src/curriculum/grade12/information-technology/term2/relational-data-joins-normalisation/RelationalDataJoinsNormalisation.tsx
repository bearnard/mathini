'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding relationships',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Database relationships model real-world links. One-to-many relationships are common, while many-to-many relationships usually need a linking table.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
          <p>Customers (1) ────&lt; Orders (Many)</p>
          <p>Learners (Many) &gt;──── Enrolments ────&lt; Subjects (Many)</p>
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Concept: Junction table</p>
          <p className="text-slate-600 mt-1">
            A many-to-many relationship is normally broken into two one-to-many relationships through a linking table such as Enrolments.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'How joins combine data',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Joins combine related rows from different tables. The join field should come from the established relationship, usually a primary key and foreign key pair.
        </p>
        <CodeBlock language="sql" code={`SELECT c.CustomerName, o.OrderDate, o.Amount
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID;

SELECT c.CustomerName, o.OrderDate
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID;`} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">INNER JOIN</p>
            <p className="mt-1 text-slate-600">Returns only matching records from both tables.</p>
          </div>
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
            <p className="font-semibold text-purple-800">LEFT JOIN</p>
            <p className="mt-1 text-slate-600">Keeps every row from the left table, even when no match exists on the right.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Normalisation and reduced redundancy',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Normalisation reduces repeated facts so that data is stored more efficiently and updated more safely.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
            <p className="font-semibold text-rose-800">Poor design</p>
            <p className="mt-1 text-slate-600">Every order row repeats the full customer address and province.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">Normalised design</p>
            <p className="mt-1 text-slate-600">Customer details stay in Customers, while Orders stores only CustomerID as the link.</p>
          </div>
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            If one fact changes in many rows, that is a clue that the design is not normalised well enough.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Referential integrity',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Referential integrity makes sure that every foreign key value points to a valid parent record.
          This prevents orphan records and protects forms, queries and reports from broken links.
        </p>
        <CodeBlock language="sql" code={`CREATE TABLE OrderItems (
  OrderID INTEGER,
  ProductID INTEGER,
  Quantity INTEGER,
  PRIMARY KEY (OrderID, ProductID),
  FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
  FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);`} />
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <p className="font-semibold text-slate-800">Why it matters</p>
          <p className="text-slate-600 mt-1">
            You should not be able to store an order item for an order or product that does not exist.
          </p>
        </div>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "Which is the best example of a one-to-many relationship?",
    options: ["One learner has one ID number", "One customer places many orders", "One order has one order number", "One field stores one value"],
    answer: 1,
    explanation: "A single customer can be linked to many order records, so that is one-to-many.",
  },
  {
    prompt: "What does an INNER JOIN return?",
    options: ["All rows from both tables even when nothing matches", "Only rows where the join condition matches in both tables", "Only rows from the first table", "A new empty table"],
    answer: 1,
    explanation: "An inner join keeps only the records that match according to the join condition.",
  },
  {
    prompt: "Why is normalisation important?",
    options: ["It increases unnecessary duplication", "It reduces redundancy and update anomalies", "It removes the need for keys", "It turns text into images"],
    answer: 1,
    explanation: "Normalisation stores repeated facts more efficiently and reduces inconsistency.",
  },
  {
    prompt: "What problem exists if the same customer address is repeated in every order row?",
    options: ["The design may contain redundant duplicated data", "The database is perfectly normalised already", "A firewall is blocking the table", "The query must use AVG()"],
    answer: 0,
    explanation: "Repeating the same address in every order row suggests poor normalisation and unnecessary duplication.",
  },
  {
    prompt: "What does referential integrity prevent?",
    options: ["All sorting of data", "Orphan records that point to missing parent records", "The use of foreign keys", "Any reporting in the database"],
    answer: 1,
    explanation: "Referential integrity keeps table links valid by preventing child records from referencing missing parents.",
  },
  {
    prompt: "What is the effect of a LEFT JOIN?",
    options: ["It keeps all rows from the left table, even if some have no match on the right", "It only keeps matched rows from both tables", "It deletes unmatched rows from the database", "It reverses the sort order of the query"],
    answer: 0,
    explanation: "A left join preserves every row from the left table and fills unmatched right-side data with null or blank results.",
  },
  {
    prompt: "How is a many-to-many relationship usually resolved?",
    options: ["By removing one of the tables completely", "By creating a linking or junction table", "By replacing all keys with text descriptions", "By storing every value in one long field"],
    answer: 1,
    explanation: "A linking table breaks a many-to-many relationship into two one-to-many relationships.",
  },
  {
    prompt: "What is a good use for a composite key in a linking table?",
    options: ["To identify each combination of the related foreign keys uniquely", "To make all text uppercase", "To replace every query with a report", "To remove normalisation from the design"],
    answer: 0,
    explanation: "A composite key can uniquely identify each pair of linked records in a junction table.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const RelationalDataJoinsNormalisation = () => (
  <CapsSubjectTopic
    title="Relational Data, Joins and Normalisation"
    subtitle="Linking tables correctly and reducing duplication in database design"
    learnSteps={learnSteps}
    task="gr12-relational-data-joins-normalisation-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default RelationalDataJoinsNormalisation;
