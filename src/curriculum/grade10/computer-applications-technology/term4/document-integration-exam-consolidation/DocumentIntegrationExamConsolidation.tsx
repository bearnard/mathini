'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/cat/term4/document-integration-exam-consolidation/diagram.webp", alt: "Document Integration and Exam Consolidation" },
    title: 'Integrating data across documents',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Term 4 often combines several CAT skills in one task. Learners may need to bring spreadsheet data into a
          report, use charts, insert screenshots and keep everything formatted consistently.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Linked content</strong>
            <p className="mt-1 text-slate-600">Updates when the source file changes, depending on the software used.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Embedded content</strong>
            <p className="mt-1 text-slate-600">Becomes part of the destination document and can travel with it.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Presenting information clearly',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A final document should use headings, captions, references and page numbers consistently. Visual elements
          must support the message instead of making the page crowded.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Use charts only when they add meaning.</li>
          <li>Keep fonts, spacing and alignment consistent.</li>
          <li>Label tables and figures clearly.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Checking integrated work',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Integrated tasks need careful quality control. Learners should check file paths, broken links, incorrect data,
          page breaks and inconsistent formatting before submission.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          A final review should include both content accuracy and visual presentation.
        </div>
      </div>
    ),
  },
  {
    title: 'Exam consolidation strategy',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Revision is stronger when learners practise realistic tasks that combine word processing, spreadsheets,
          internet research and interpretation of instructions.
        </p>
        <ol className="list-decimal space-y-1 pl-5 text-slate-700">
          <li>Read all instructions before starting.</li>
          <li>Plan file names and folders.</li>
          <li>Complete each application task methodically.</li>
          <li>Leave time for checking and exporting.</li>
        </ol>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'What is an important risk in an integrated document task?',
    options: ['A. Broken links or missing source files', 'B. Too many pencils', 'C. Excess paper clips', 'D. The wrong classroom wall colour'],
    answer: 'A. Broken links or missing source files',
    explanation: 'Integrated tasks often rely on source files, so broken links or missing files can affect the final result.',
  },
  {
    prompt: 'Why are captions useful below charts or images?',
    options: ['A. They explain what the visual shows', 'B. They slow down the software', 'C. They replace headings', 'D. They hide the source'],
    answer: 'A. They explain what the visual shows',
    explanation: 'Captions help readers understand and refer to visuals correctly.',
  },
  {
    prompt: 'What should a learner do before starting an exam-based practical task?',
    options: ['A. Read all instructions carefully', 'B. Print immediately', 'C. Skip the folder setup', 'D. Rename every file randomly'],
    answer: 'A. Read all instructions carefully',
    explanation: 'Careful reading helps avoid missing marks or making preventable mistakes later.',
  },
  {
    prompt: 'Embedded content differs from linked content because embedded content:',
    options: ['A. Depends fully on the source file every time', 'B. Becomes part of the current document', 'C. Can never include charts', 'D. Is always stored online only'],
    answer: 'B. Becomes part of the current document',
    explanation: 'Embedded content is stored inside the destination document rather than pointing back to the original file.',
  },
  {
    prompt: 'Which final check is most important before submission?',
    options: ['A. Data accuracy and formatting consistency', 'B. Number of open windows', 'C. The colour of the mouse', 'D. The brand of the device'],
    answer: 'A. Data accuracy and formatting consistency',
    explanation: 'Both correct information and professional presentation are essential in integrated CAT tasks.',
  },
];

export default function DocumentIntegrationExamConsolidation() {
  return (
    <CapsSubjectTopic
      title="Document Integration and Exam Consolidation"
      subtitle="Grade 10 · Computer Applications Technology · Term 4"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-document-integration-exam-consolidation"
      apiPath="/api/caps/cat"
      grade={10}
    />
  );
}
