import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

import { NestedIf } from '../../../../../components/diagrams/cat/Cat12Pictures';

const learnSteps: LearnStep[] = [
  {
    title: "Advanced spreadsheet logic",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Grade 12 spreadsheets move beyond simple totals. Named ranges improve readability, nested IF statements test more than one condition, and lookup functions help users fetch related information from a table. To troubleshoot a formula, check the order of logic, cell references and whether the correct range or table was used."</p>
        <NestedIf />
      </div>
    ),
  },
  {
    title: "Professional word-processing features",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Professional documents use consistent styles, page layout, headings, spacing, tables, captions and references. In CAT practical tasks, you may need to correct alignment, margins, sections or heading structure. A polished document is both visually clear and functionally easy to navigate, especially when it includes automatic tables of contents or cross-references."</p>
      </div>
    ),
  },
  {
    title: "File management for practical work",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Good file management prevents unnecessary errors during PAT work. Learners should save to the correct folder, use meaningful names, manage versions carefully and back up their work. When documents, spreadsheets and databases are linked, poor file organisation can break references or cause the wrong source file to be submitted."</p>
      </div>
    ),
  },
  {
    title: "PAT phase 1 information management",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"PAT phase 1 focuses on planning, identifying the problem and collecting relevant information. Learners must search purposefully, evaluate source quality, record bibliographic details and avoid plagiarism. Strong PAT planning shows that the investigation is manageable, relevant and supported by trustworthy information from the start."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "Why is a named range useful in a spreadsheet formula?",
    options: ["It makes formulas easier to read and manage", "It prevents the spreadsheet from being saved", "It changes text to uppercase automatically", "It removes all relative references"],
    answer: 0,
    explanation: "Named ranges replace cell coordinates with meaningful names, which improves readability.",
  },
  {
    prompt: "What is the main purpose of a nested IF function?",
    options: ["To insert pictures into a worksheet", "To test more than one condition in sequence", "To sort a database automatically", "To create a web page"],
    answer: 1,
    explanation: "A nested IF allows one condition to be tested after another so different outcomes can be returned.",
  },
  {
    prompt: "Which spreadsheet function is best for finding a price from a code in a lookup table?",
    options: ['COUNT applied to the code column', 'VLOOKUP or HLOOKUP', 'LOWER applied to the code column', 'TODAY applied to the price column'],
    answer: 1,
    explanation: "Lookup functions search a table and return related information, such as a price for a code.",
  },
  {
    prompt: "What makes a word-processed report look professional?",
    options: ["Random fonts and spacing on each page", "Consistent styles, headings and layout", "Typing everything in capital letters", "Avoiding page numbering"],
    answer: 1,
    explanation: "Consistent formatting improves readability and gives the document a professional appearance.",
  },
  {
    prompt: "Why is version control important during the PAT?",
    options: ['It helps you identify the latest correct file and avoid overwriting work', 'It makes the computer run faster while you work', 'It replaces the need for making backup copies of the PAT files on a drive', 'It changes formulas into plain text in the files'],
    answer: 0,
    explanation: "Clear versioning helps you keep track of updates and prevents confusion between old and new files.",
  },
  {
    prompt: "Which action best supports ethical information collection for PAT phase 1?",
    options: ["Copying paragraphs without credit", "Recording sources and paraphrasing information properly", "Using only one website without checking it", "Deleting the author names from notes"],
    answer: 1,
    explanation: "PAT information management requires proper acknowledgement of sources and avoidance of plagiarism.",
  },
  {
    prompt: "A spreadsheet formula shows the wrong answer after copying down. What is the most likely cause?",
    options: ["The screen brightness is too low", "The cell references were not set correctly", "The printer is offline", "The page orientation is portrait"],
    answer: 1,
    explanation: "Incorrect relative or absolute references often cause copied formulas to return wrong results.",
  },
  {
    prompt: "Why should linked PAT files stay in an organised folder structure?",
    options: ["So that formulas can use more colours", "So that links, sources and submissions remain easy to manage", "So that the files automatically convert to PDF", "So that the operating system licence changes"],
    answer: 1,
    explanation: "Organised folders help preserve file links and make practical work easier to locate and submit.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const SpreadsheetsWordProcessingPATPlanning = () => (
  <CapsSubjectTopic
    title="Spreadsheets, Word Processing and PAT Planning"
    subtitle="Advanced formulas, professional documents and Phase 1 information management"
    learnSteps={learnSteps}
    task="gr12-spreadsheets-word-processing-pat-planning-t1"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default SpreadsheetsWordProcessingPATPlanning;
