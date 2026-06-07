import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/cat/term1/spreadsheets-databases-fundamentals/diagram.webp", alt: "Spreadsheets and Databases Fundamentals" },
    title: 'Absolute vs relative cell references',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Cell references control how formulas behave when copied to other cells.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Relative reference (e.g. A1)</strong>
            <p className="text-slate-600">Adjusts automatically when the formula is copied. If you copy =A1+B1 down one row, it becomes =A2+B2.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Absolute reference (e.g. $A$1)</strong>
            <p className="text-slate-600">The $ sign locks the row and/or column. =$A$1*B1 keeps A1 fixed no matter where you copy the formula.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Use <strong>F4</strong> to toggle between reference types when editing a formula.</p>
      </div>
    ),
  },
  {
    title: 'Common spreadsheet functions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Functions perform calculations automatically on ranges of data.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">=SUM(A1:A10)</strong>
            <p className="text-slate-600">Adds all values in the range A1 to A10.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">=AVERAGE(B1:B5)</strong>
            <p className="text-slate-600">Calculates the mean of values in B1:B5.</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">=IF(C2&gt;50,"Pass","Fail")</strong>
            <p className="text-slate-600">Returns "Pass" if C2 is greater than 50, otherwise "Fail".</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">=MAX(D1:D20)</strong>
            <p className="text-slate-600">Returns the highest value in the range.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">=MIN(D1:D20)</strong>
            <p className="text-slate-600">Returns the lowest value in the range.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">=COUNT(E1:E10)</strong>
            <p className="text-slate-600">Counts only cells containing numbers in the range.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Database structure: tables, fields, and records',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>database</strong> organises data into related tables for efficient storage and retrieval.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Table</strong>
            <p className="text-slate-600">Stores data about one entity (e.g. a Students table stores student information).</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Field (column)</strong>
            <p className="text-slate-600">One attribute of the entity (e.g. StudentID, Surname, Grade). Has a defined data type.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Record (row)</strong>
            <p className="text-slate-600">One complete entry in the table — all the data for a single student.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Primary keys, queries, and reports',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Databases use <strong>keys</strong>, <strong>queries</strong>, and <strong>reports</strong> to manage and present data.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Primary key</strong>
            <p className="text-slate-600">A unique field that identifies each record (e.g. StudentID). No two records can share the same value.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Query</strong>
            <p className="text-slate-600">A question posed to the database to extract specific records (e.g. "find all Grade 11 learners with marks above 60").</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4">
            <strong className="text-lime-700">Report</strong>
            <p className="text-slate-600">A formatted, printable summary of data from tables or queries, designed for presentation.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'A formula =B2*$C$1 is copied from row 2 to row 5. What does the formula become?',
    options: ['=B5*$C$4', '=B5*$C$1', '=B2*$C$1', '=$B$5*$C$1'],
    answer: '=B5*$C$1',
    explanation: 'B2 is a relative reference and adjusts to B5. $C$1 is an absolute reference and stays fixed as C1.',
  },
  {
    prompt: 'Which function would you use to count only cells that contain numbers in the range A1:A20?',
    options: ['=SUM(A1:A20)', '=COUNTA(A1:A20)', '=COUNT(A1:A20)', '=AVERAGE(A1:A20)'],
    answer: '=COUNT(A1:A20)',
    explanation: 'COUNT counts cells with numeric values. COUNTA counts all non-empty cells including text.',
  },
  {
    prompt: 'What does a PRIMARY KEY in a database table ensure?',
    options: ['All records are sorted alphabetically', 'Each record has a unique identifier', 'The table has a set number of fields', 'Data is automatically backed up'],
    answer: 'Each record has a unique identifier',
    explanation: 'A primary key must be unique and not null, guaranteeing every record can be distinguished from all others.',
  },
  {
    prompt: 'In a database, a FIELD is best described as:',
    options: ['A single entry in the table', 'A category of data (column) that stores one type of information per record', 'The entire collection of tables', 'A question asked of the database'],
    answer: 'A category of data (column) that stores one type of information per record',
    explanation: 'A field (column) defines one attribute — for example, the "Surname" field holds the last name of every person in the table.',
  },
  {
    prompt: 'Which function returns "Distinction" if a mark in C3 is 75 or more, and "Pass" otherwise?',
    options: ['=IF(C3>=75,"Distinction","Pass")', '=IF(C3>75,"Distinction","Pass")', '=IF("Distinction",C3>=75,"Pass")', '=COUNT(C3,75,"Distinction","Pass")'],
    answer: '=IF(C3>=75,"Distinction","Pass")',
    explanation: 'IF(condition, value_if_true, value_if_false). C3>=75 checks the condition; "Distinction" and "Pass" are the two outcomes.',
  },
  {
    prompt: 'What is the purpose of a DATABASE QUERY?',
    options: ['To create a new table', 'To extract and display specific records that meet set criteria', 'To format data for printing', 'To sort records by primary key only'],
    answer: 'To extract and display specific records that meet set criteria',
    explanation: 'A query filters the database and returns only the records matching the specified criteria (e.g. all learners in Grade 11).',
  },
  {
    prompt: 'A spreadsheet has exam marks in B2:B31 (30 learners). Which formula gives the class average?',
    options: ['=SUM(B2:B31)/30', '=AVERAGE(B2:B31)', '=COUNT(B2:B31)', 'Both =SUM(B2:B31)/30 and =AVERAGE(B2:B31)'],
    answer: 'Both =SUM(B2:B31)/30 and =AVERAGE(B2:B31)',
    explanation: 'Both formulas produce the same result: AVERAGE divides the sum by the count automatically.',
  },
  {
    prompt: 'In a relational database, a FOREIGN KEY is used to:',
    options: ['Generate automatic reports', 'Link records in one table to related records in another table', 'Encrypt the database', 'Delete duplicate records'],
    answer: 'Link records in one table to related records in another table',
    explanation: 'A foreign key in one table references the primary key in another table, establishing a relationship between the two tables.',
  },
  {
    prompt: 'Which keyboard shortcut toggles between reference types (relative/absolute) in most spreadsheet applications?',
    options: ['F2', 'F4', 'Ctrl+T', 'Alt+F4'],
    answer: 'F4',
    explanation: 'Pressing F4 while editing a cell reference cycles through: relative (A1) → absolute ($A$1) → row-absolute (A$1) → column-absolute ($A1).',
  },
  {
    prompt: 'What data type should a "Phone Number" field in a database be set to?',
    options: ['Number', 'Currency', 'Text/Short Text', 'Date/Time'],
    answer: 'Text/Short Text',
    explanation: 'Phone numbers may begin with 0 (which numbers drop) and may contain spaces or hyphens. Text type preserves the exact format.',
  },
];

const SpreadsheetsDatabasesFundamentals = () => (
  <CapsSubjectTopic
    title="Spreadsheets and Databases Fundamentals"
    subtitle="Cell references, functions, database structure, keys, and queries"
    learnSteps={learnSteps}
    task="gr11-spreadsheets-databases-fundamentals-t1"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default SpreadsheetsDatabasesFundamentals;
