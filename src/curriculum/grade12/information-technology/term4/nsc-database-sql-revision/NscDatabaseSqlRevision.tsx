'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/it/term4/nsc-database-sql-revision/diagram.webp", alt: "NSC Database and SQL Revision" },
    title: 'Reading the schema first',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Before writing any SQL, identify the primary keys, foreign keys and the meaning of each field. This prevents using the wrong table or join field in the query.
        </p>
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Checklist before you code</p>
          <p className="text-slate-600 mt-1">What table has the data? Which fields link the tables? Which field should be filtered, grouped or sorted?</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Building accurate query logic',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Strong revision focuses on the order and purpose of clauses. Think about what the question wants before you write the syntax.
        </p>
        <CodeBlock language="sql" code={`SELECT s.Surname, c.ClassName, AVG(r.Mark) AS AvgMark
FROM Results r
INNER JOIN Students s ON r.StudentID = s.StudentID
INNER JOIN Classes c ON s.ClassID = c.ClassID
WHERE r.Mark >= 50
GROUP BY s.Surname, c.ClassName
ORDER BY AvgMark DESC;`} />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            In SQL revision, ask: which rows survive the <strong>WHERE</strong> clause before any grouping or ordering happens?
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Summaries and grouped data',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          NSC questions often ask for totals, averages or counts per category. That means you must think about both grouping and which groups should remain in the final answer.
        </p>
        <CodeBlock language="sql" code={`SELECT Province, COUNT(*) AS NumSchools, SUM(Budget) AS TotalBudget
FROM Schools
GROUP BY Province
HAVING SUM(Budget) > 1000000
ORDER BY TotalBudget DESC;`} />
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li><strong>WHERE</strong> filters individual rows first.</li>
          <li><strong>GROUP BY</strong> forms categories.</li>
          <li><strong>HAVING</strong> filters the categories after the grouping step.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Checking for common SQL mistakes',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Many marks are lost through avoidable syntax or logic mistakes. A final check should focus on the exact fields, quotes, grouping and sort direction.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
            <p className="font-semibold text-rose-800">Common errors</p>
            <p className="mt-1 text-slate-600">Wrong join field, missing quotes around text, forgetting GROUP BY or sorting the wrong alias.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">Strong habit</p>
            <p className="mt-1 text-slate-600">Read the query back in plain English to confirm each clause has a purpose.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "When is GROUP BY required in a query?",
    options: ["When you need a separate summary for each category", "When you want to delete duplicate tables", "When you rename the database file", "When you open a form"],
    answer: 0,
    explanation: "GROUP BY is needed when aggregate results such as totals must be calculated per group.",
  },
  {
    prompt: "What does BETWEEN 10 AND 20 usually mean in SQL?",
    options: ["Only values greater than 10 and less than 20", "Values from 10 to 20 inclusive", "Exactly the value 15 only", "Text fields starting with 10"],
    answer: 1,
    explanation: "BETWEEN normally includes both boundary values in the range.",
  },
  {
    prompt: "Which wildcard is commonly used with LIKE to match many characters?",
    options: ["#", "%", "&", "@"],
    answer: 1,
    explanation: "The percent sign % is widely used with LIKE to represent any sequence of characters.",
  },
  {
    prompt: "Which fields should normally be used in a JOIN condition?",
    options: ["Related key fields that connect the tables", "Any two random text fields", "Only calculated totals", "The first field listed alphabetically"],
    answer: 0,
    explanation: "Joins should use the related key fields that define the relationship between the tables.",
  },
  {
    prompt: "Why might a query use a table alias such as s for Sales?",
    options: ["To make the query shorter and easier to read", "To convert the table into a report", "To remove the need for joins", "To encrypt every result automatically"],
    answer: 0,
    explanation: "Aliases improve readability, especially when multiple tables have fields with similar names.",
  },
  {
    prompt: "What is a common mistake when filtering for a text value?",
    options: ["Using ORDER BY after SELECT", "Forgetting the quotes around the text literal", "Using a primary key", "Typing the field name correctly"],
    answer: 1,
    explanation: "Text values normally need quotes in SQL, so forgetting them can cause errors or incorrect results.",
  },
  {
    prompt: "What is the purpose of HAVING?",
    options: ["It filters grouped results after GROUP BY has been applied", "It creates a new table relationship", "It changes a field type permanently", "It opens the query in design view only"],
    answer: 0,
    explanation: "HAVING is used to filter groups, such as showing only categories with totals above a threshold.",
  },
  {
    prompt: "Which function is most suitable for calculating the total sales amount per province?",
    options: ["COUNT()", "SUM()", "LEN()", "ROUND()"],
    answer: 1,
    explanation: "SUM() adds the numeric values in each group to produce a total amount.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const NscDatabaseSqlRevision = () => (
  <CapsSubjectTopic
    title="NSC Database and SQL Revision"
    subtitle="Practising joins, criteria and summaries for the final practical paper"
    learnSteps={learnSteps}
    task="gr12-nsc-database-sql-revision-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default NscDatabaseSqlRevision;
