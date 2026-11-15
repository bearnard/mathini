import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Year Overview and Key Topics',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-bold text-blue-900 mb-2">Grade 10 IT Curriculum Review</h3>
          <p className="text-slate-700 mb-3">
            This revision covers all major topics from Grade 10 Information Technology, preparing you for the final examination. 
            Master these fundamentals to succeed!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-bold text-green-900 mb-2">Term 1: Foundations</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
              <li>Computer Systems & Architecture</li>
              <li>Data Representation (Binary, Hex)</li>
              <li>Algorithm Design & Flowcharts</li>
              <li>Programming Basics (Delphi)</li>
              <li>Variables & Data Types</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2">Term 2: Programming & Data</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
              <li>Control Structures (IF, CASE)</li>
              <li>Loops (FOR, WHILE, REPEAT)</li>
              <li>Functions & Procedures</li>
              <li>Database Concepts</li>
              <li>OOP Basics (Classes & Objects)</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded border border-orange-200">
            <h4 className="font-bold text-orange-900 mb-2">Term 3: Systems & Networks</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
              <li>SDLC Phases</li>
              <li>Requirements Gathering</li>
              <li>Testing Types</li>
              <li>Network Types & Topologies</li>
              <li>IP Addressing & Protocols</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-200">
            <h4 className="font-bold text-red-900 mb-2">Term 4: Ethics & Revision</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
              <li>Social Implications of IT</li>
              <li>Cybersecurity & Privacy</li>
              <li>Ethical Computing</li>
              <li>Digital Citizenship</li>
              <li>Comprehensive Revision</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">Core Programming Concepts to Master</h4>
          <CodeBlock language="pascal" code={`// Key Delphi Syntax Review
program RevisionExample;

{$APPTYPE CONSOLE}

var
  num, factorial: Integer;

// Function with return value
function Calculate(n: Integer): Integer;
var
  i: Integer;
begin
  Result := 1;
  for i := 1 to n do
    Result := Result * i;
end;

begin
  Write('Enter number: ');
  ReadLn(num);
  
  factorial := Calculate(num);
  WriteLn('Factorial: ', factorial);
  
  ReadLn;
end.`} />
        </div>
      </div>
    ),
  },
  {
    title: 'Problem-Solving and Algorithm Practice',
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <h3 className="font-bold text-indigo-900 mb-2">Exam Problem-Solving Strategies</h3>
          <p className="text-slate-700 mb-3">
            Success in IT exams requires understanding concepts AND applying them to solve problems. 
            Practice with different question types and scenarios.
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-3">Common Question Types</h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border border-teal-100">
              <h5 className="font-bold text-teal-800 text-sm mb-1">1. Code Completion</h5>
              <p className="text-xs text-slate-600">Fill in missing code segments to complete a program</p>
            </div>
            <div className="bg-white p-3 rounded border border-teal-100">
              <h5 className="font-bold text-teal-800 text-sm mb-1">2. Code Tracing</h5>
              <p className="text-xs text-slate-600">Follow code execution and predict output</p>
            </div>
            <div className="bg-white p-3 rounded border border-teal-100">
              <h5 className="font-bold text-teal-800 text-sm mb-1">3. Error Detection</h5>
              <p className="text-xs text-slate-600">Identify syntax or logic errors in given code</p>
            </div>
            <div className="bg-white p-3 rounded border border-teal-100">
              <h5 className="font-bold text-teal-800 text-sm mb-1">4. Algorithm Design</h5>
              <p className="text-xs text-slate-600">Write pseudocode or draw flowcharts for problems</p>
            </div>
            <div className="bg-white p-3 rounded border border-teal-100">
              <h5 className="font-bold text-teal-800 text-sm mb-1">5. Theory Questions</h5>
              <p className="text-xs text-slate-600">Define terms, explain concepts, compare technologies</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Practice Problem: Number Validation</h4>
          <div className="bg-white p-3 rounded border border-blue-100 mb-3">
            <p className="text-sm text-slate-700 mb-2">
              <strong>Problem:</strong> Write a function that checks if a number is prime (only divisible by 1 and itself).
            </p>
            <p className="text-xs text-slate-600">
              Input: Integer number<br/>
              Output: Boolean (True if prime, False otherwise)
            </p>
          </div>
          <CodeBlock language="pascal" code={`function IsPrime(num: Integer): Boolean;
var
  i: Integer;
  isPrimeFlag: Boolean;
begin
  // Numbers less than 2 are not prime
  if num < 2 then
  begin
    Result := False;
    Exit;
  end;
  
  isPrimeFlag := True;
  
  // Check divisibility from 2 to sqrt(num)
  for i := 2 to num div 2 do
  begin
    if num mod i = 0 then
    begin
      isPrimeFlag := False;
      Break;
    end;
  end;
  
  Result := isPrimeFlag;
end;

// Test the function
begin
  if IsPrime(17) then
    WriteLn('17 is prime')
  else
    WriteLn('17 is not prime');
end.`} />
        </div>
        <div className="bg-purple-50 p-4 rounded border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-2">Exam Tips</h4>
          <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
            <li>Read questions carefully - understand what is being asked</li>
            <li>Show your working in theory questions for partial marks</li>
            <li>Test code mentally with sample values before writing final answer</li>
            <li>Remember syntax: := for assignment, &lt;&gt; for not equal, begin...end blocks</li>
            <li>Manage your time - don't spend too long on one question</li>
            <li>Check your answers if time permits</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Database and SQL Revision',
    content: (
      <div className="space-y-6">
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded">
          <h3 className="font-bold text-rose-900 mb-2">Database Fundamentals Review</h3>
          <p className="text-slate-700 mb-3">
            Databases are essential for storing and managing data. Review table structures, 
            relationships, and basic SQL queries for exam success.
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Essential SQL Commands</h4>
          <CodeBlock language="sql" code={`-- SELECT: Retrieve data
SELECT FirstName, LastName, Grade 
FROM Students 
WHERE Grade = 10;

-- INSERT: Add new record
INSERT INTO Students (StudentID, FirstName, LastName, Grade, Average)
VALUES (1004, 'Lerato', 'Nkosi', 10, 85.5);

-- UPDATE: Modify existing records
UPDATE Students 
SET Average = 88.0 
WHERE StudentID = 1004;

-- DELETE: Remove records
DELETE FROM Students 
WHERE StudentID = 1004;

-- ORDER BY: Sort results
SELECT * FROM Students 
ORDER BY Average DESC;

-- COUNT, AVG, SUM: Aggregate functions
SELECT COUNT(*) AS TotalStudents, AVG(Average) AS ClassAverage 
FROM Students 
WHERE Grade = 10;`} />
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">Key Database Terms</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-yellow-200">
              <p className="font-bold text-yellow-800 text-sm">Primary Key</p>
              <p className="text-xs text-slate-600">Unique identifier for each record (e.g., StudentID)</p>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <p className="font-bold text-yellow-800 text-sm">Foreign Key</p>
              <p className="text-xs text-slate-600">Links tables together (references another table's primary key)</p>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <p className="font-bold text-yellow-800 text-sm">Query</p>
              <p className="text-xs text-slate-600">Request to retrieve or manipulate data (usually SQL)</p>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <p className="font-bold text-yellow-800 text-sm">Normalization</p>
              <p className="text-xs text-slate-600">Organizing data to reduce redundancy</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-semibold text-blue-900 mb-2">OOP Quick Review</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            <div className="bg-white p-2 rounded border border-blue-100 text-center">
              <p className="font-bold text-blue-800">Class</p>
              <p className="text-xs text-slate-600">Blueprint/template</p>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100 text-center">
              <p className="font-bold text-blue-800">Object</p>
              <p className="text-xs text-slate-600">Instance of class</p>
            </div>
            <div className="bg-white p-2 rounded border border-blue-100 text-center">
              <p className="font-bold text-blue-800">Method</p>
              <p className="text-xs text-slate-600">Function in class</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Final Exam Preparation',
    content: (
      <div className="space-y-6">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <h3 className="font-bold text-amber-900 mb-2">Preparing for the Final Examination</h3>
          <p className="text-slate-700 mb-3">
            The final exam tests both theoretical knowledge and practical programming skills. 
            Prepare systematically to maximize your performance.
          </p>
        </div>
        <div className="bg-violet-50 p-4 rounded border border-violet-300">
          <h4 className="font-semibold text-violet-900 mb-3">Study Plan (Last 2 Weeks)</h4>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded border border-violet-100">
              <p className="font-bold text-violet-800 text-sm">Week 1: Content Review</p>
              <ul className="text-xs text-slate-600 list-disc ml-5 space-y-1">
                <li>Day 1-2: Theory (Computer Systems, Networks, SDLC)</li>
                <li>Day 3-4: Programming Concepts (Variables, Control Structures)</li>
                <li>Day 5-6: Databases and OOP</li>
                <li>Day 7: Social Implications and Ethics</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-violet-100">
              <p className="font-bold text-violet-800 text-sm">Week 2: Practice and Consolidation</p>
              <ul className="text-xs text-slate-600 list-disc ml-5 space-y-1">
                <li>Day 1-3: Past papers and mock exams (timed)</li>
                <li>Day 4-5: Focus on weak areas identified</li>
                <li>Day 6: Review common mistakes and key formulas</li>
                <li>Day 7: Light review and early sleep before exam</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-cyan-50 p-4 rounded border border-cyan-200">
          <h4 className="font-semibold text-cyan-900 mb-3">Quick Reference Checklist</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="bg-white p-3 rounded border border-cyan-100">
              <p className="font-bold text-cyan-800 mb-2">✓ Programming</p>
              <ul className="text-slate-700 space-y-1">
                <li>□ Data types and variables</li>
                <li>□ IF, CASE statements</li>
                <li>□ FOR, WHILE, REPEAT loops</li>
                <li>□ Functions vs Procedures</li>
                <li>□ Arrays and string handling</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-cyan-100">
              <p className="font-bold text-cyan-800 mb-2">✓ Theory</p>
              <ul className="text-slate-700 space-y-1">
                <li>□ Binary/Hex conversions</li>
                <li>□ Network topologies</li>
                <li>□ IP addressing (IPv4/IPv6)</li>
                <li>□ SDLC phases</li>
                <li>□ Testing types</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-cyan-100">
              <p className="font-bold text-cyan-800 mb-2">✓ Database</p>
              <ul className="text-slate-700 space-y-1">
                <li>□ Table structure concepts</li>
                <li>□ Primary/Foreign keys</li>
                <li>□ SELECT, INSERT, UPDATE, DELETE</li>
                <li>□ WHERE, ORDER BY clauses</li>
                <li>□ COUNT, AVG, SUM functions</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-cyan-100">
              <p className="font-bold text-cyan-800 mb-2">✓ Ethics & Safety</p>
              <ul className="text-slate-700 space-y-1">
                <li>□ Cybersecurity threats</li>
                <li>□ Privacy and data protection</li>
                <li>□ Intellectual property</li>
                <li>□ Digital citizenship</li>
                <li>□ Social impact of IT</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Exam Day Reminders</h4>
          <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
            <li>Bring all required stationery and student ID</li>
            <li>Arrive early to avoid stress and panic</li>
            <li>Read ALL instructions carefully before starting</li>
            <li>Answer easy questions first to build confidence</li>
            <li>Allocate time proportionally based on marks</li>
            <li>Review your answers if time allows</li>
            <li>Stay calm and trust your preparation!</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What are the main phases of systems development?',
    options: ['Analysis and Deployment, with nothing in between', 'Planning, Analysis, Design, Implementation, Testing, Deployment', 'Coding and Testing, with nothing else', 'Design and Review, with nothing else'],
    answer: 'Planning, Analysis, Design, Implementation, Testing, Deployment',
    explanation: 'The SDLC involves systematic phases from planning through deployment.',
  },
  {
    prompt: 'Which best describes algorithm efficiency?',
    options: ['How fast the computers of a school run', 'How well an algorithm uses time and memory', 'How new the algorithm is', 'How easy the algorithm is to memorise'],
    answer: 'How well an algorithm uses time and memory',
    explanation: 'Algorithm efficiency relates to time and space complexity.',
  },
  {
    prompt: 'In Delphi, which loop always executes at least once?',
    options: ['for loop', 'while loop', 'repeat-until loop', 'foreach loop'],
    answer: 'repeat-until loop',
    explanation: 'The REPEAT-UNTIL loop checks its condition after executing, guaranteeing at least one iteration.',
  },
  {
    prompt: 'What SQL command is used to retrieve data from a database?',
    options: ['GET', 'SELECT', 'RETRIEVE', 'FETCH'],
    answer: 'SELECT',
    explanation: 'SELECT is the SQL command used to query and retrieve data from database tables.',
  },
  {
    prompt: 'What does a primary key do in a database?',
    options: ['Locks the table', 'Uniquely identifies each record', 'Sorts records alphabetically', 'Encrypts data'],
    answer: 'Uniquely identifies each record',
    explanation: 'A primary key is a unique identifier ensuring no two records have the same value in that field.',
  },
];

const RevisionYearEndExaminationPreparation = () => (
  <CapsSubjectTopic
    title="Revision and Year-End Examination Preparation"
    subtitle="Comprehensive review for final assessment"
    learnSteps={learnSteps}
    task="gr10-revision-year-end-examination-preparation-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default RevisionYearEndExaminationPreparation;
