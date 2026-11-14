import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'OOP and file handling revision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Review the key OOP and file handling concepts for the year-end examinations:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">OOP essentials</strong>
            <p className="text-slate-600">Class = blueprint; object = instance. Encapsulation: private attributes, public getters/setters. Constructors initialise objects. UML: 3-section diagram. Access modifiers: public/private.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">File handling essentials</strong>
            <p className="text-slate-600">Text files use "r", "w", "a" modes. Write overwrites; append preserves. Always close files. Read line-by-line with a loop; strip() removes newlines.</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl text-left">
          <strong className="text-amber-700">Common exam trap:</strong>
          <p className="text-slate-600 text-sm">Opening a file in write ("w") mode when you meant append ("a") will erase all existing data!</p>
        </div>
      </div>
    ),
  },
  {
    title: 'SQL and databases revision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Key SQL and database concepts tested in the year-end theory paper:
        </p>
        <CodeBlock language="sql" code={`-- Common exam patterns:
SELECT Name, Mark FROM Results
  WHERE Mark >= 50 ORDER BY Mark DESC;

INSERT INTO Students (ID, Name) VALUES (10, 'Thabo');

UPDATE Students SET Grade = 11 WHERE ID = 10;

DELETE FROM Students WHERE ID = 10;

SELECT COUNT(*), AVG(Mark) FROM Results;`} />
        <p className="text-sm text-slate-600">Remember: primary key = unique identifier; foreign key = link between tables. LIKE 'A%' matches strings starting with A.</p>
      </div>
    ),
  },
  {
    title: 'Networks and social implications revision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Review the most frequently examined network and social implications content:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Networks checklist</strong>
            <p className="text-slate-600">LAN/MAN/WAN. Topologies: bus, star, ring, mesh. TCP = reliable delivery; IP = addressing/routing. Protocols: HTTP(S), FTP, SMTP, POP3/IMAP, DNS. Wired (twisted pair, fibre) vs wireless (Wi-Fi, Bluetooth, 4G/5G).</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Social implications checklist</strong>
            <p className="text-slate-600">POPIA: lawful purpose, minimisation, consent, data subject rights. Cybercrime: phishing, ransomware, identity theft. Security: strong passwords, 2FA, firewall, antivirus, VPN, encryption. Digital divide. Copyright and plagiarism.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam strategy and common errors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Exam success depends on technique as much as knowledge. Avoid these common errors:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Common mistakes to avoid</strong>
            <p className="text-slate-600">Confusing class and object; writing UPDATE without WHERE; confusing SMTP (send) with POP3/IMAP (receive); claiming bus topology has no single point of failure (the cable IS the single point).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Exam technique tips</strong>
            <p className="text-slate-600">Read questions twice. Allocate time per mark (≈1 min/mark). For code questions, trace through manually. Answer definition questions using keywords. Check SQL syntax carefully.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 mt-2">Use past papers from NSC and CAPS to practise mixed questions under timed conditions.</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'Which of the following SQL queries correctly retrieves all students with a mark above 60, sorted from highest to lowest?',
    options: [
      'SELECT * FROM Students ORDER BY Mark WHERE Mark > 60;',
      'SELECT * FROM Students WHERE Mark > 60 ORDER BY Mark DESC;',
      'SELECT * FROM Students WHERE Mark > 60 ORDER BY Mark ASC;',
      'SELECT Mark FROM Students HAVING Mark > 60;',
    ],
    answer: 'SELECT * FROM Students WHERE Mark > 60 ORDER BY Mark DESC;',
    explanation: 'WHERE filters rows; ORDER BY Mark DESC sorts from highest to lowest. The WHERE clause must come before ORDER BY.',
  },
  {
    prompt: 'A class has private attribute "balance" and public method "deposit(amount)". This is an example of:',
    options: ['Inheritance', 'Encapsulation', 'Polymorphism', 'Abstraction'],
    answer: 'Encapsulation',
    explanation: 'Encapsulation hides internal data (private balance) and provides controlled access through public methods.',
  },
  {
    prompt: 'What does range(2, 6) produce in Python?',
    options: ['[2, 3, 4, 5, 6]', '[2, 3, 4, 5]', '[1, 2, 3, 4, 5, 6]', '[3, 4, 5]'],
    answer: '[2, 3, 4, 5]',
    explanation: 'range(start, stop) generates integers from start up to but NOT including stop. range(2,6) → 2, 3, 4, 5.',
  },
  {
    prompt: 'Which protocol would a company mail server use to receive incoming emails from other mail servers on the internet?',
    options: ['HTTP', 'FTP', 'SMTP', 'DNS'],
    answer: 'SMTP',
    explanation: 'SMTP is used to transfer email between mail servers (as well as from mail client to server for sending).',
  },
  {
    prompt: 'A program opens "records.txt" in write mode, then immediately closes it. What is the state of the file?',
    options: ['Unchanged, as nothing was written to it', 'Empty: opening in write mode erased all of the old content', 'Deleted from the system after it was closed', 'Locked, so that it cannot be opened again'],
    answer: 'Empty: opening in write mode erased all of the old content',
    explanation: 'Opening in write ("w") mode truncates (empties) the file immediately, even before any write() calls.',
  },
  {
    prompt: 'In a star topology, what is the single point of failure?',
    options: [
      'Any one node in the network',
      'The cable connecting two end nodes',
      'The central switch or hub',
      'The first node to join the network',
    ],
    answer: 'The central switch or hub',
    explanation: 'If the central switch fails in a star topology, all connected nodes lose network access.',
  },
  {
    prompt: 'Which POPIA principle requires a company to tell individuals why their data is being collected?',
    options: ['Data minimisation, which limits what is collected', 'Security safeguards, which protect the data', 'Lawful purpose / purpose specification', 'Data subject rights, which let people see their data'],
    answer: 'Lawful purpose / purpose specification',
    explanation: 'Organisations must specify the purpose for collecting personal information and only use it for that stated purpose.',
  },
  {
    prompt: 'A constructor is called when:',
    options: [
      'A class is defined in code',
      'A method is called on an existing object',
      'A new object (instance) is created from a class',
      'An attribute is declared as private',
    ],
    answer: 'A new object (instance) is created from a class',
    explanation: 'Constructors automatically execute at the moment of object instantiation to initialise the object\'s state.',
  },
  {
    prompt: 'Which SQL keyword is used with aggregate functions to divide results into groups?',
    options: ['ORDER BY', 'WHERE', 'GROUP BY', 'PARTITION'],
    answer: 'GROUP BY',
    explanation: 'GROUP BY groups rows that share a value so that aggregate functions (COUNT, AVG, SUM) operate per group.',
  },
  {
    prompt: 'A program reads an integer from a file but the line contains "N/A". Using exception handling, which exception should be caught?',
    options: ['IndexError', 'ZeroDivisionError', 'ValueError', 'FileNotFoundError'],
    answer: 'ValueError',
    explanation: 'int("N/A") raises a ValueError because "N/A" cannot be converted to an integer.',
  },
];

const ExamConsolidation = () => (
  <CapsSubjectTopic
    title="Examination Consolidation"
    subtitle="Integrated revision across all Grade 11 IT topics"
    learnSteps={learnSteps}
    task="gr11-exam-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default ExamConsolidation;
