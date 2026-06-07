import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/cat/term1/word-processing-templates-forms/diagram.webp", alt: "Word Processing: Templates and Forms" },
    title: 'Templates and styles',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>template</strong> is a pre-designed document with set layout, fonts, and placeholders. <strong>Styles</strong> apply consistent formatting across headings and paragraphs.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Document templates</strong>
            <p className="text-slate-600">Saved as .dotx files. Used for letters, reports, invoices. New documents based on the template inherit its formatting.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Paragraph styles</strong>
            <p className="text-slate-600">Heading 1, Heading 2, Normal, Caption — apply formatting in one click and enable automatic tables of contents.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Form fields and controls',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Form fields</strong> create interactive documents where users fill in specific fields rather than free-typing anywhere.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Text field</strong>
            <p className="text-slate-600">User types a short answer. Can be restricted to numbers, dates, or specific lengths.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Check box</strong>
            <p className="text-slate-600">User ticks one or more options (e.g. agree to terms, select preferences).</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Drop-down list</strong>
            <p className="text-slate-600">User selects one option from a pre-defined list (e.g. province, grade level).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Advanced formatting tools',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 word processing requires mastery of layout and review features.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Section breaks and columns</strong>
            <p className="text-slate-600">Section breaks divide a document into independently formatted parts. Columns create newspaper-style layouts.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Watermarks and headers/footers</strong>
            <p className="text-slate-600">Watermarks mark documents as DRAFT or CONFIDENTIAL. Headers/footers show page numbers, dates, or document titles consistently.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Track changes</strong>
            <p className="text-slate-600">Records edits so reviewers can accept or reject changes. Essential for collaborative document editing.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Find and Replace</strong>
            <p className="text-slate-600">Quickly replaces all instances of a word or format throughout a long document.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Mail merge concepts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Mail merge</strong> combines a main document with a data source to produce personalised copies.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm">
            <li>Create or open the <strong>main document</strong> (letter, label, envelope).</li>
            <li>Connect a <strong>data source</strong> (spreadsheet or database with names and addresses).</li>
            <li>Insert <strong>merge fields</strong> (e.g. «First Name», «Surname») into the document.</li>
            <li><strong>Preview</strong> the merge to check each record.</li>
            <li><strong>Complete the merge</strong> — print or save individual letters.</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'What file extension is used for a Word document template?',
    options: ['.docx', '.xlsx', '.dotx', '.pptx'],
    answer: '.dotx',
    explanation: 'Word templates are saved with the .dotx extension (or .dot for older formats). Regular documents use .docx.',
  },
  {
    prompt: 'Which form control would you use to allow users to select their province from a fixed list?',
    options: ['Text field', 'Check box', 'Drop-down list', 'Date picker'],
    answer: 'Drop-down list',
    explanation: 'A drop-down list restricts input to pre-defined options, ensuring consistent data entry — ideal for a province list.',
  },
  {
    prompt: 'What is the purpose of the Track Changes feature in word processing?',
    options: ['To automatically correct spelling', 'To record edits so reviewers can accept or reject them', 'To count the number of words', 'To apply paragraph styles automatically'],
    answer: 'To record edits so reviewers can accept or reject them',
    explanation: 'Track Changes marks insertions, deletions, and formatting changes so collaborators can review and approve every edit.',
  },
  {
    prompt: 'A student applies "Heading 1" style to all chapter titles in their report. What additional benefit does this provide?',
    options: ['Changes the paper size', 'Allows automatic generation of a Table of Contents', 'Converts text to uppercase', 'Inserts page breaks automatically'],
    answer: 'Allows automatic generation of a Table of Contents',
    explanation: 'Word processors use heading styles to detect document structure and build an automatic Table of Contents.',
  },
  {
    prompt: 'In a mail merge, what is the "data source"?',
    options: ['The finished printed letters', 'A file (spreadsheet or database) containing the variable information like names and addresses', 'The main document template', 'The merge fields inserted into the document'],
    answer: 'A file (spreadsheet or database) containing the variable information like names and addresses',
    explanation: 'The data source supplies the unique values (names, addresses, etc.) that replace merge fields in each copy of the merged document.',
  },
  {
    prompt: 'Which feature would you use to show "Page 3 of 10" at the bottom of every page?',
    options: ['Watermark', 'Section break', 'Footer with page number field', 'Drop cap'],
    answer: 'Footer with page number field',
    explanation: 'A footer containing a page-number field and a total-pages field automatically displays the current and total page count on every page.',
  },
  {
    prompt: 'What does a watermark do in a word-processed document?',
    options: ['Adds a border around the page', 'Places a faint background image or text (e.g. DRAFT) behind the document content', 'Encrypts the document', 'Adds a table of contents'],
    answer: 'Places a faint background image or text (e.g. DRAFT) behind the document content',
    explanation: 'Watermarks appear as semi-transparent text or images behind the main content to indicate document status.',
  },
  {
    prompt: 'A document needs two columns on one page and a single column on the next. Which feature enables this?',
    options: ['Page break', 'Section break', 'Paragraph break', 'Column separator'],
    answer: 'Section break',
    explanation: 'Section breaks divide the document into independent sections, each with its own column, margin, and orientation settings.',
  },
  {
    prompt: 'In a form, which field type restricts a user to entering YES or NO by selecting or deselecting?',
    options: ['Text field', 'Drop-down list', 'Check box', 'Date field'],
    answer: 'Check box',
    explanation: 'A check box has two states: checked (yes/true) or unchecked (no/false), providing a simple binary input.',
  },
  {
    prompt: 'Find and Replace in a word processor is most useful for:',
    options: ['Changing all occurrences of a word throughout a long document at once', 'Checking grammar', 'Inserting images', 'Formatting tables'],
    answer: 'Changing all occurrences of a word throughout a long document at once',
    explanation: 'Find and Replace locates every instance of a search term and swaps it with the replacement, saving time in long documents.',
  },
];

const WordProcessingTemplatesForms = () => (
  <CapsSubjectTopic
    title="Word Processing: Templates and Forms"
    subtitle="Document templates, form controls, and advanced formatting"
    learnSteps={learnSteps}
    task="gr11-word-processing-templates-forms-t1"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default WordProcessingTemplatesForms;
