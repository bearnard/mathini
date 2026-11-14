'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Purpose of word processing',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Word processors are used to create, edit, format and print professional documents. Grade 10 learners should
          control text layout instead of relying on random spaces or manual line breaks.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Formatting</strong>
            <p className="mt-1 text-slate-600">Changes the appearance of text with fonts, size, alignment, spacing and styles.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Editing</strong>
            <p className="mt-1 text-slate-600">Corrects wording, spelling, grammar and document structure.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Paragraph and page layout tools',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Professional documents use margins, tabs, line spacing, indents, bullets and page breaks correctly. These
          tools make text easier to read and keep a consistent appearance across pages.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Use alignment tools and paragraph spacing instead of pressing the space bar repeatedly.
        </div>
      </div>
    ),
  },
  {
    title: 'Lists, tables and document structure',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Headings, numbered lists and tables help readers scan information quickly. Tables should be used when data
          needs rows and columns, while tabs are better for simple alignment.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Headings and styles</strong>
            <p className="mt-1 text-slate-600">Allow consistent formatting and help create automatic tables of contents later.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Tables</strong>
            <p className="mt-1 text-slate-600">Present structured information neatly without using manual spacing.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Proofing and final checks',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Before printing or submitting a document, use spell check, grammar suggestions and print preview. Final
          checks should also include file name, page numbering and consistent headings.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Save the document with a meaningful name.</li>
          <li>Check margins and page orientation.</li>
          <li>Review spacing and heading consistency.</li>
        </ul>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which tool is best for creating a professional list of items?',
    options: ['A. Spaces', 'B. Bullets or numbering', 'C. Random symbols', 'D. Manual tabs only'],
    answer: 'B. Bullets or numbering',
    explanation: 'Bullets and numbering are built-in list tools that keep documents neat and consistent.',
  },
  {
    prompt: 'Why should a user avoid pressing the space bar many times for alignment?',
    options: ['A. It wastes electricity only', 'B. It creates inconsistent formatting', 'C. It improves accuracy', 'D. It is required in CAPS'],
    answer: 'B. It creates inconsistent formatting',
    explanation: 'Manual spacing often shifts when fonts or margins change, so proper alignment tools should be used.',
  },
  {
    prompt: 'Which feature helps detect spelling mistakes?',
    options: ['A. Print preview', 'B. Spell check', 'C. Save as PDF', 'D. Page border'],
    answer: 'B. Spell check',
    explanation: 'Spell check helps identify possible spelling errors before the document is shared or printed.',
  },
  {
    prompt: 'Tables are most useful when information:',
    options: ['A. Needs rows and columns', 'B. Is a long paragraph', 'C. Is only an image', 'D. Must be hidden'],
    answer: 'A. Needs rows and columns',
    explanation: 'Tables organise data clearly when information fits into a grid format.',
  },
  {
    prompt: 'What is a heading style mainly used for?',
    options: ['A. Random decoration', 'B. Consistent document structure', 'C. Closing programs', 'D. Replacing all images'],
    answer: 'B. Consistent document structure',
    explanation: 'Heading styles keep sections consistent and make longer documents easier to navigate.',
  },
];

export default function WordProcessingFundamentals() {
  return (
    <CapsSubjectTopic
      title="Word Processing Fundamentals"
      subtitle="Grade 10 · Computer Applications Technology · Term 1"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-word-processing-fundamentals"
      apiPath="/api/caps/cat"
      grade={10}
    />
  );
}
