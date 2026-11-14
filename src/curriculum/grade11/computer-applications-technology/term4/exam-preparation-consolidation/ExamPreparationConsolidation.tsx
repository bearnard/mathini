import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Theory paper structure and key topics',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Grade 11 CAT theory paper covers hardware, software, networks, internet, and information management.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Section A: Terminology</strong>
            <p className="text-slate-600">Short definitions, true/false, matching questions. Cover all key terms from all four terms.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Section B: Theory questions</strong>
            <p className="text-slate-600">Longer questions with describe/explain/evaluate answers. Hardware, networks, security, 4IR, social implications.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Section C: Integrated scenarios</strong>
            <p className="text-slate-600">Case studies combining hardware, software, and social implications. Apply knowledge to realistic situations.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Timing strategy</strong>
            <p className="text-slate-600">Allocate ~1 minute per mark. Don't spend too long on any one question. Answer all questions — no negative marking.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Practical paper layout and preparation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The practical paper tests word processing, spreadsheets, databases, and HTML under timed conditions.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Word processing tasks</strong>
            <p className="text-slate-600">Formatting (styles, tables, headers/footers, watermarks), templates, form fields, mail merge, track changes.</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Spreadsheet tasks</strong>
            <p className="text-slate-600">Functions (IF, COUNTIF, SUMIF, VLOOKUP), absolute references, conditional formatting, data validation, charts.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Database tasks</strong>
            <p className="text-slate-600">Queries (criteria, wildcards), forms, reports (grouping, sorting, calculated fields).</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">HTML tasks</strong>
            <p className="text-slate-600">Structure tags, links, images, tables (colspan/rowspan), and basic CSS. Fix errors in given HTML code.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Mixed revision: hardware and networks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Rapid recall of hardware and networking concepts is essential for both papers.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Storage hierarchy</strong>
            <p className="text-slate-600">Registers &gt; Cache &gt; RAM (volatile) &gt; SSD/HDD (non-volatile) &gt; Cloud/Removable</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Network devices</strong>
            <p className="text-slate-600">NIC → Switch → Router → Modem → ISP → Internet</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Security concepts</strong>
            <p className="text-slate-600">Phishing, ransomware, 2FA, VPN, HTTPS, POPIA, strong passwords, backups.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam technique tips',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good exam technique earns marks even when you are not 100% sure of an answer.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
            <li>Read the question carefully — note the command word (define, explain, compare, evaluate).</li>
            <li>Check how many marks the question is worth — give that many distinct points.</li>
            <li>Use correct technical terminology — vague answers lose marks.</li>
            <li>In the practical, save your work frequently (Ctrl+S).</li>
            <li>If unsure, attempt every question — partial marks are possible.</li>
            <li>In multiple choice, eliminate obviously wrong answers first.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'A spreadsheet formula =SUMIF(C2:C31,"Gauteng",D2:D31) will:',
    options: ['Count the learners who come from Gauteng', 'Add D2:D31 values only where C2:C31 equals "Gauteng"', 'Find the highest value that is from Gauteng', 'List all of the entries that are from Gauteng'],
    answer: 'Add D2:D31 values only where C2:C31 equals "Gauteng"',
    explanation: 'SUMIF(range, criteria, sum_range) adds values in the sum_range only for rows where the range meets the criteria.',
  },
  {
    prompt: 'Which networking protocol is used to send email from a mail client to a mail server?',
    options: ['IMAP', 'POP3', 'SMTP', 'FTP'],
    answer: 'SMTP',
    explanation: 'SMTP (Simple Mail Transfer Protocol) is used to send email. IMAP and POP3 are used to retrieve email from the server.',
  },
  {
    prompt: 'What is volatile storage?',
    options: ['Storage that is always faster than non-volatile storage', 'Storage that loses its contents when power is switched off', 'Storage that cannot be erased', 'Storage only found in cloud systems'],
    answer: 'Storage that loses its contents when power is switched off',
    explanation: 'Volatile storage (RAM, cache) requires continuous power to retain data. When the computer is shut down, the data is lost.',
  },
  {
    prompt: 'In an HTML table, which attribute makes a cell span three rows?',
    options: ['colspan="3"', 'rowspan="3"', 'span="row:3"', 'rows="3"'],
    answer: 'rowspan="3"',
    explanation: 'rowspan="3" causes a table cell to merge vertically across 3 rows. colspan merges horizontally.',
  },
  {
    prompt: 'A database query uses the criterion Like "M*" in the City field. Which city would NOT appear in the results?',
    options: ['Mossel Bay', 'Midrand', 'Mthatha', 'Cape Town'],
    answer: 'Cape Town',
    explanation: 'Like "M*" returns only records where City starts with M. Cape Town starts with C, so it is excluded.',
  },
  {
    prompt: 'An exam question is worth 4 marks and asks you to "describe" a concept. How many points should your answer typically include?',
    options: ['1 detailed sentence', '4 separate, distinct points', '2 paragraphs of any length', 'A definition only'],
    answer: '4 separate, distinct points',
    explanation: 'In South African CAT exams, each mark corresponds to one valid, distinct point. A 4-mark "describe" question requires 4 separate points.',
  },
  {
    prompt: 'Which conditional function checks whether C3 is greater than or equal to 50 AND D3 is greater than or equal to 50?',
    options: ['=IF(C3>=50,D3>=50,"Both pass")', '=IF(AND(C3>=50,D3>=50),"Both pass","One or both fail")', '=IF(OR(C3>=50,D3>=50),"Both pass","Fail")', '=AND(C3>=50,D3>=50,"Both pass","Fail")'],
    answer: '=IF(AND(C3>=50,D3>=50),"Both pass","One or both fail")',
    explanation: 'AND() inside IF() checks that all specified conditions are true before returning the "true" result.',
  },
  {
    prompt: 'The POPIA Act requires organisations to collect only the personal data they need. This principle is called:',
    options: ['Data minimisation', 'Data encryption', 'Data fragmentation', 'Data maximisation'],
    answer: 'Data minimisation',
    explanation: 'Data minimisation means collecting only the personal information that is necessary for the stated purpose — a core POPIA requirement.',
  },
  {
    prompt: 'Which is the CORRECT HTML structure for embedding an image as a hyperlink?',
    options: ['<img src="logo.png"><a href="home.html"></a>', '<a href="home.html"><img src="logo.png" alt="Home"></a>', '<link img="logo.png" href="home.html">', '<img href="home.html" src="logo.png">'],
    answer: '<a href="home.html"><img src="logo.png" alt="Home"></a>',
    explanation: 'To make an image clickable, wrap the <img> tag inside an <a> tag. The href on the <a> sets the link destination.',
  },
  {
    prompt: 'In the 4IR context, which term describes the physical and digital worlds converging through connected devices?',
    options: ['Cloud computing', 'Internet of Things (IoT)', 'Virtual reality', 'Big data analytics'],
    answer: 'Internet of Things (IoT)',
    explanation: 'IoT connects physical objects to the internet and to each other, enabling smart homes, smart cities, and smart factories — a hallmark of 4IR.',
  },
];

const ExamPreparationConsolidation = () => (
  <CapsSubjectTopic
    title="Exam Preparation and Consolidation"
    subtitle="Mixed revision across all Grade 11 CAT topics and exam technique"
    learnSteps={learnSteps}
    task="gr11-exam-preparation-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default ExamPreparationConsolidation;
