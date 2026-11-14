'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/cat/term4/spreadsheets-information-management-pat-completion/diagram.webp", alt: "Spreadsheets, Information Management and PAT Completion" },
    title: 'Spreadsheets for deeper analysis',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          By Term 4, learners should be comfortable using formulas, absolute references, sorting, filtering and charts
          to analyse information. The goal is to turn raw data into useful findings.
        </p>
        <CodeBlock
          language="text"
          code={`=B2*$F$1
=IF(C2>100,"High","Normal")
=COUNTIF(D2:D40,"Completed")`}
        />
      </div>
    ),
  },
  {
    title: 'Information management and databases',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          CAT also introduces database ideas such as tables, records, fields, forms and queries. Even when learners are
          not building full databases, they should understand structured information storage.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Table</strong>
            <p className="mt-1 text-slate-600">Stores records in rows and fields in columns.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Query</strong>
            <p className="mt-1 text-slate-600">Retrieves only the records that match selected conditions.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Completing the PAT carefully',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The PAT rewards accuracy, organisation and evidence of process. Learners should save source material,
          annotate progress and follow teacher instructions for naming, folders and submission.
        </p>
        <div className="rounded-xl bg-amber-50 p-5 text-slate-700">
          Keep a checklist for required files, screenshots, formulas, sources and final reflections.
        </div>
      </div>
    ),
  },
  {
    title: 'Quality assurance before final submission',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Final checks should cover formula accuracy, chart labels, spelling, source acknowledgement and whether each
          section answers the research question clearly.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Test formulas using sample values.</li>
          <li>Verify that sorting and filtering did not hide important data.</li>
          <li>Confirm that all referenced files open correctly.</li>
        </ul>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'What is the main purpose of an absolute cell reference such as $F$1?',
    options: ['A. To keep the reference fixed when copying formulas', 'B. To delete the formula from the cell', 'C. To sort the data in the sheet automatically', 'D. To insert a chart into the worksheet'],
    answer: 'A. To keep the reference fixed when copying formulas',
    explanation: 'Absolute references stay constant, which is useful when a formula must always use the same cell.',
  },
  {
    prompt: 'In a database table, a row usually represents a:',
    options: ['A. Formula', 'B. Record', 'C. Query', 'D. Heading style'],
    answer: 'B. Record',
    explanation: 'A row stores one complete record, while each column stores a field.',
  },
  {
    prompt: 'Why is a PAT checklist helpful?',
    options: ['A. It helps track required evidence and files', 'B. It removes the need for research', 'C. It stops formulas from updating', 'D. It replaces saving'],
    answer: 'A. It helps track required evidence and files',
    explanation: 'A checklist reduces the chance of leaving out a required section or file.',
  },
  {
    prompt: 'Which spreadsheet action helps display only records that meet a condition?',
    options: ['A. Filtering', 'B. Printing', 'C. Locking the keyboard', 'D. Changing the wallpaper'],
    answer: 'A. Filtering',
    explanation: 'Filtering shows only the data that matches selected criteria.',
  },
  {
    prompt: 'A query is used to:',
    options: ['A. Retrieve selected information from structured data', 'B. Colour the text of the document', 'C. Rename the monitor on the desk', 'D. Replace the operating system of the computer'],
    answer: 'A. Retrieve selected information from structured data',
    explanation: 'Queries allow users to extract only the information they need from a larger data set.',
  },
];

export default function SpreadsheetsInformationManagementPAT() {
  return (
    <CapsSubjectTopic
      title="Spreadsheets, Information Management and PAT Completion"
      subtitle="Grade 10 · Computer Applications Technology · Term 4"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-spreadsheets-information-management-pat-completion"
      apiPath="/api/caps/cat"
      grade={10}
    />
  );
}
