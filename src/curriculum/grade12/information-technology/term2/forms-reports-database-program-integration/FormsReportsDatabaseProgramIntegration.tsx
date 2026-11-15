'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Forms for efficient data capture',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Forms are designed for safe and efficient capture of one record at a time. Clear labels, good tab order and the right control type reduce user errors.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
            <p className="font-semibold text-blue-800">Useful controls</p>
            <p className="mt-1 text-slate-600">Combo boxes for lookup values, date pickers for dates and read-only labels for calculated results.</p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Why forms matter</p>
            <p className="mt-1 text-slate-600">They guide the user and apply validation before the record reaches the database table.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Reports for readable output',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Reports focus on presentation. They often use a query as a source so that the user sees only the records or totals needed for a decision.
        </p>
        <CodeBlock language="sql" code={`SELECT c.CustomerName,
       SUM(o.Amount) AS TotalSpent
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerName
ORDER BY TotalSpent DESC;`} />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            If a report must show only certain records, say that the report should be based on a filtered query rather than the full raw table.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Connecting program code to the database',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Integrated applications pass values from the interface into program logic and then into SQL. Consistent field names and data types are essential.
        </p>
        <CodeBlock language="pascal" code={`qryOrders.SQL.Text :=
  'SELECT OrderID, Amount FROM Orders WHERE CustomerID = :CustomerID';
qryOrders.Parameters.ParamByName('CustomerID').Value := StrToInt(edtCustomerID.Text);
qryOrders.Open;`} />
        <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
          <p className="font-semibold text-purple-800">Key Concept: Parameters</p>
          <p className="text-slate-600 mt-1">
            A parameter allows the program to reuse the same query structure while sending in a different value each time.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Testing integrated solutions',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Integration testing checks whether forms, code and database tables work together correctly, not just whether each part works on its own.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-4">
            <div className="rounded-xl bg-white p-3 shadow-sm">1. Capture input on form</div>
            <div className="rounded-xl bg-white p-3 shadow-sm">2. Validate in code</div>
            <div className="rounded-xl bg-white p-3 shadow-sm">3. Save to database</div>
            <div className="rounded-xl bg-white p-3 shadow-sm">4. Confirm in report</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Reports, combo boxes and layered validation",
    content: (
      <div className="space-y-4">
        <GapRule>{"A report turns records into a clear printout, usually grouped with totals. A combo box lets the user pick only from stored values. Checking data in the form and again in the database is safest, since each layer catches different mistakes."}</GapRule>
        <GapWorked title={"Build a data entry form"} steps={["A combo box for Category lets the user choose from the stored values only.", "The form checks the entry before it is saved.", "The database field rules are a second check.", "A report groups the records by category with totals."]} />
        <GapMistake>{"Relying on only one layer of validation."}</GapMistake>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "Which database object is best suited to entering one learner record through a user-friendly screen?",
    options: ["Report", "Form", "Macro only", "Relationship line"],
    answer: 1,
    explanation: "A form is designed for structured data capture and editing through a user interface.",
  },
  {
    prompt: "What is the main purpose of a report?",
    options: ['To edit every field in a record directly', 'To present information clearly, often with grouping and totals', 'To store the primary keys of the tables', 'To replace the need for tables in the database design without any need to group the data they use'],
    answer: 1,
    explanation: "Reports are for presenting data in a readable layout rather than for direct record capture.",
  },
  {
    prompt: "Why is a combo box useful on a form when selecting a category?",
    options: ["It lets the user choose from valid stored values", "It forces every record to be deleted first", "It replaces all SQL queries", "It turns the form into a report"],
    answer: 0,
    explanation: "A combo box reduces typing errors by allowing the user to select from predefined values.",
  },
  {
    prompt: "What is the benefit of using a parameter value from a program in a query?",
    options: ['It allows the query to filter records based on the chosen input', 'It changes every field name in the table for good when the query has been run by the user', 'It removes the need for any validation of input', 'It disconnects the program from the database'],
    answer: 0,
    explanation: "A parameter lets the program pass a chosen value such as an ID or category into the query criteria.",
  },
  {
    prompt: "If a program saves an order but forgets to save the related order items, what type of problem is this?",
    options: ['A formatting issue with the fonts on the form', 'An integration problem between related parts of the solution', 'A network topology issue between the computers in the lab or a cabling fault inside the room', 'An image-resolution issue in the report'],
    answer: 1,
    explanation: "The application is not coordinating the linked data operations correctly, so the integrated solution is incomplete.",
  },
  {
    prompt: "Why should validation occur in both the interface and the database rules where possible?",
    options: ['Because duplicate checks are useless in a database with keys at the point of saving', 'Because each layer can help stop invalid data from being stored', 'Because forms cannot display messages to the user', 'Because reports can only use text fields'],
    answer: 1,
    explanation: "Shared validation improves reliability by catching errors before and during saving.",
  },
  {
    prompt: "What should a report usually be based on when only certain records must be shown?",
    options: ['A query that selects the required records', 'A screenshot of the table saved as a picture', 'A progress bar placed on the form', 'A password prompt shown when opening the file'],
    answer: 0,
    explanation: "A report often uses a query as its source so that only the needed records appear.",
  },
  {
    prompt: "What is the main goal of integration testing in a database application?",
    options: ['To check that the interface, logic and data storage work together correctly', 'To rename every class in the program', 'To reduce the number of fields in a table to one field and the hardware of the computer in the lab such as the printer', 'To stop users from printing the reports'],
    answer: 0,
    explanation: "Integration testing checks whether the combined parts of the system behave correctly together.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const FormsReportsDatabaseProgramIntegration = () => (
  <CapsSubjectTopic
    title="Forms, Reports and Database Program Integration"
    subtitle="Capturing accurate data and presenting meaningful outputs in applications"
    learnSteps={learnSteps}
    task="gr12-forms-reports-database-program-integration-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default FormsReportsDatabaseProgramIntegration;
