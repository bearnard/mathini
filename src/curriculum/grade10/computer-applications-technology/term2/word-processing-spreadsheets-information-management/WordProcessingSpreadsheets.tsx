'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/cat/term2/word-processing-spreadsheets-information-management/diagram.webp", alt: "Word Processing, Spreadsheets and Information Management" },
    title: 'Advanced word processing tools',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Term 2 moves from basic formatting to productivity tools such as styles, templates, page numbering and mail
          merge. These features save time and improve consistency in longer documents.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Templates</strong>
            <p className="mt-1 text-slate-600">Reusable document layouts for letters, reports and meeting agendas.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Mail merge</strong>
            <p className="mt-1 text-slate-600">Combines a main document with a data source to create personalised outputs.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Spreadsheet formulas and IF logic',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Spreadsheets help users calculate totals, averages and decision-based results. Learners should understand
          relative references, formulas and basic functions such as SUM, AVERAGE and IF.
        </p>
        <CodeBlock
          language="text"
          code={`=SUM(B2:B8)
=AVERAGE(C2:C8)
=IF(D2>=50,"Pass","Needs support")`}
        />
      </div>
    ),
  },
  {
    title: 'Charts and visual communication',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A chart should match the data and the question being asked. Bar charts compare categories, line charts show
          trends over time and pie charts show parts of a whole.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Always label axes, add a clear title and check that the chart does not distort the message.
        </div>
      </div>
    ),
  },
  {
    title: 'Information management and source evaluation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Information management involves finding, selecting, storing and presenting information from reliable sources.
          Learners should question author credibility, date, bias and relevance.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Choose sources that are current and trustworthy.</li>
          <li>Record notes in your own words.</li>
          <li>Keep track of where each idea or statistic came from.</li>
        </ul>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'What is the main purpose of mail merge?',
    options: ['A. To create personalised documents automatically', 'B. To speed up the internet connection', 'C. To take the place of charts', 'D. To delete duplicate files from a folder'],
    answer: 'A. To create personalised documents automatically',
    explanation: 'Mail merge combines a main document with a data list so each output can contain different names or details.',
  },
  {
    prompt: 'Which formula tests a condition and gives different results?',
    options: ['A. SUM', 'B. IF', 'C. MIN', 'D. COUNTA'],
    answer: 'B. IF',
    explanation: 'The IF function checks whether a condition is true or false and returns different values.',
  },
  {
    prompt: 'A line chart is best for showing:',
    options: ['A. Random comments', 'B. Trends over time', 'C. Password strength', 'D. Folder names'],
    answer: 'B. Trends over time',
    explanation: 'Line charts help readers see increases, decreases and patterns across time periods.',
  },
  {
    prompt: 'When evaluating a website source, you should check the:',
    options: ['A. Background colour only', 'B. Author, date and relevance', 'C. Number of emojis', 'D. Device brand used'],
    answer: 'B. Author, date and relevance',
    explanation: 'Reliable information management depends on using trustworthy, current and relevant sources.',
  },
  {
    prompt: 'Templates are useful because they:',
    options: ['A. Ensure consistent document design', 'B. Remove the need for saving', 'C. Replace all formulas', 'D. Prevent proofreading'],
    answer: 'A. Ensure consistent document design',
    explanation: 'Templates provide a reusable layout that keeps similar documents consistent.',
  },
];

export default function WordProcessingSpreadsheets() {
  return (
    <CapsSubjectTopic
      title="Word Processing, Spreadsheets and Information Management"
      subtitle="Grade 10 · Computer Applications Technology · Term 2"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-word-processing-spreadsheets-information-management"
      apiPath="/api/caps/cat"
      grade={10}
    />
  );
}
