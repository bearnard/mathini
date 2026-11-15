import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem } from '../../_shared/types';
import { learnSteps } from './Slides';

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
    prompt: 'A Delphi loop is written for i := 2 to 5 do and each time round it adds i to iTotal, which starts at 0. What is iTotal when the loop ends?',
    options: ['14', '20', '15', '9'],
    answer: '14',
    explanation: 'A Delphi for loop includes both the start and the end value, so i takes 2, 3, 4 and 5 and 2 + 3 + 4 + 5 = 14.',
  },
  {
    prompt: 'Which protocol would a company mail server use to receive incoming emails from other mail servers on the internet?',
    options: ['HTTP', 'FTP', 'SMTP', 'DNS'],
    answer: 'SMTP',
    explanation: 'SMTP is used to transfer email between mail servers (as well as from mail client to server for sending).',
  },
  {
    prompt: 'A program opens "records.txt" with AssignFile and Rewrite, then immediately calls CloseFile. What is the state of the file?',
    options: ['Unchanged, as nothing was written to it', 'Empty: Rewrite erased all of the old content', 'Deleted from the system after it was closed', 'Locked, so that it cannot be opened again'],
    answer: 'Empty: Rewrite erased all of the old content',
    explanation: 'Rewrite creates the file afresh and empties it immediately, even before any WriteLn call.',
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
    options: ['ERangeError', 'EDivByZero', 'EConvertError', 'EInOutError'],
    answer: 'EConvertError',
    explanation: 'StrToInt(\'N/A\') raises EConvertError because N/A cannot be converted to an integer. EInOutError is for file problems.',
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
