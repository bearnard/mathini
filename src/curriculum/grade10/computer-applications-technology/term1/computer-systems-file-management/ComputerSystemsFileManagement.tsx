'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/cat/term1/computer-systems-file-management/diagram.webp", alt: "Computer Systems and File Management" },
    title: 'Main parts of a computer system',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A computer system combines hardware, software, data and users. CAPS expects learners to identify input,
          processing, storage and output devices and explain what each part does.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Hardware</strong>
            <p className="mt-1 text-slate-600">Physical parts such as keyboards, CPUs, monitors, printers and storage drives.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Software</strong>
            <p className="mt-1 text-slate-600">Programs such as operating systems and applications that tell hardware what to do.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Memory, storage and performance',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          RAM is temporary working memory while storage keeps files for longer periods. Device performance is affected
          by processor speed, RAM capacity, storage type and maintenance.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">RAM</strong>
            <p className="mt-1 text-slate-600">Fast, temporary memory used while programs are open.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">SSD or HDD</strong>
            <p className="mt-1 text-slate-600">Long-term storage for documents, programs and media files.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">CPU</strong>
            <p className="mt-1 text-slate-600">Processes instructions and coordinates the work of the system.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'File management and folder structures',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good file management saves time and reduces mistakes. Learners should organise files with logical folders,
          meaningful names, correct extensions and regular backups.
        </p>
        <CodeBlock
          language="text"
          code={`SchoolWork/
  CAT/
    Term1/
      HardwareNotes.docx
      DeviceComparison.xlsx
    Term2/
      PAT/
        SurveyData.csv`}
        />
      </div>
    ),
  },
  {
    title: 'Best practice for saving and backing up',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Save work in the correct folder, use version names, and keep backups on trusted cloud or external storage.
          Security improves when files are protected with passwords and shared carefully.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Avoid vague names such as document1 or finalfinal.</li>
          <li>Include dates or versions when work changes over time.</li>
          <li>Delete duplicates only after checking the correct file is backed up.</li>
        </ul>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which device is mainly used for temporary working memory?',
    options: ['A. SSD', 'B. RAM', 'C. Printer', 'D. Scanner'],
    answer: 'B. RAM',
    explanation: 'RAM stores data temporarily while programs are running.',
  },
  {
    prompt: 'What is the best reason for creating folders and subfolders?',
    options: ['A. To make files harder to find', 'B. To organise files logically', 'C. To replace backups', 'D. To slow down the computer'],
    answer: 'B. To organise files logically',
    explanation: 'Folder structures help users store, locate and manage files efficiently.',
  },
  {
    prompt: 'Which item is an example of hardware?',
    options: ['A. Word processor', 'B. Operating system', 'C. Monitor', 'D. Spreadsheet formula'],
    answer: 'C. Monitor',
    explanation: 'A monitor is a physical output device, so it is hardware.',
  },
  {
    prompt: 'Why are backups important?',
    options: ['A. They protect data if files are lost or damaged', 'B. They make folders unnecessary on a computer', 'C. They remove the need to save a file', 'D. They help only when something is printed'],
    answer: 'A. They protect data if files are lost or damaged',
    explanation: 'Backups provide a second copy in case the original data is deleted, corrupted or stolen.',
  },
  {
    prompt: 'A file extension usually tells you:',
    options: ['A. The size of the monitor', 'B. The type of file', 'C. The password of the user', 'D. The CPU speed'],
    answer: 'B. The type of file',
    explanation: 'Extensions such as .docx or .xlsx help identify the file format and related application.',
  },
];

export default function ComputerSystemsFileManagement() {
  return (
    <CapsSubjectTopic
      title="Computer Systems and File Management"
      subtitle="Grade 10 · Computer Applications Technology · Term 1"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-computer-systems-file-management"
      apiPath="/api/caps/cat"
      grade={10}
    />
  );
}
