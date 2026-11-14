import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/it/term1/programming-foundations/diagram.webp", alt: "Programming Foundations" },
    title: 'Programming Basics',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-bold text-blue-900 mb-2">Introduction to Programming</h3>
          <p className="text-slate-700 mb-3">
            Programming is the process of writing instructions for computers to follow. In Grade 10 IT, 
            we typically use <strong>Delphi (Object Pascal)</strong> as our programming language.
          </p>
          <div className="bg-white p-3 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Key Programming Concepts:</h4>
            <ul className="list-disc ml-6 space-y-1 text-slate-700 text-sm">
              <li><strong>Syntax:</strong> Rules for writing code correctly</li>
              <li><strong>Semantics:</strong> The meaning of code statements</li>
              <li><strong>Comments:</strong> Notes in code for humans (// or { })</li>
              <li><strong>Case Sensitivity:</strong> Delphi is NOT case-sensitive</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Your First Delphi Program</h4>
          <CodeBlock language="pascal" code={`program HelloWorld;

{$APPTYPE CONSOLE}

begin
  WriteLn('Hello, World!');
  WriteLn('Welcome to Delphi programming');
  ReadLn; // Wait for Enter key
end.`} />
          <p className="text-sm text-slate-600 mt-2">
            This simple program displays text to the console. Every Delphi program starts with <code className="bg-green-100 px-1 rounded">begin</code> and 
            ends with <code className="bg-green-100 px-1 rounded">end.</code> (note the period!)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded border border-purple-200">
            <h5 className="font-semibold text-purple-900">Program Structure</h5>
            <p className="text-sm text-slate-700 mt-2">
              Program heading → Uses clause → Declarations → Main block (begin...end.)
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded border border-orange-200">
            <h5 className="font-semibold text-orange-900">Output Statements</h5>
            <p className="text-sm text-slate-700 mt-2">
              <code className="bg-orange-100 px-1 rounded">Write()</code> - no new line<br/>
              <code className="bg-orange-100 px-1 rounded">WriteLn()</code> - with new line
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Variables and Data Types',
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <h3 className="font-bold text-indigo-900 mb-2">Variables in Delphi</h3>
          <p className="text-slate-700 mb-3">
            A variable is a named storage location that can hold different values during program execution. 
            In Delphi, all variables must be declared before use.
          </p>
        </div>
        <div className="bg-white border-2 border-indigo-200 p-4 rounded shadow-sm">
          <h4 className="font-semibold text-indigo-800 mb-3">Common Data Types in Delphi</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-700 text-sm">Integer</p>
              <p className="text-xs text-slate-600">Whole numbers: -32768 to 32767</p>
              <code className="text-xs bg-blue-100 px-1 rounded">var age: Integer;</code>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <p className="font-bold text-green-700 text-sm">Real / Double</p>
              <p className="text-xs text-slate-600">Decimal numbers</p>
              <code className="text-xs bg-green-100 px-1 rounded">var price: Real;</code>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <p className="font-bold text-purple-700 text-sm">String</p>
              <p className="text-xs text-slate-600">Text and characters</p>
              <code className="text-xs bg-purple-100 px-1 rounded">var name: String;</code>
            </div>
            <div className="bg-orange-50 p-3 rounded">
              <p className="font-bold text-orange-700 text-sm">Boolean</p>
              <p className="text-xs text-slate-600">True or False</p>
              <code className="text-xs bg-orange-100 px-1 rounded">var isValid: Boolean;</code>
            </div>
            <div className="bg-pink-50 p-3 rounded">
              <p className="font-bold text-pink-700 text-sm">Char</p>
              <p className="text-xs text-slate-600">Single character</p>
              <code className="text-xs bg-pink-100 px-1 rounded">var grade: Char;</code>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">Variable Declaration and Assignment</h4>
          <CodeBlock language="pascal" code={`program VariableExample;

{$APPTYPE CONSOLE}

var
  studentName: String;
  age: Integer;
  average: Real;
  passed: Boolean;

begin
  // Assignment statements
  studentName := 'Thabo Mokoena';
  age := 16;
  average := 78.5;
  passed := True;
  
  // Display values
  WriteLn('Student: ', studentName);
  WriteLn('Age: ', age);
  WriteLn('Average: ', average:0:2);
  WriteLn('Passed: ', passed);
  
  ReadLn;
end.`} />
          <p className="text-sm text-slate-600 mt-2">
            Notice the <strong>:=</strong> operator for assignment (not =). The <strong>:0:2</strong> formats the real number to 2 decimal places.
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Type Conversion</h4>
          <div className="space-y-2 text-sm text-slate-700">
            <p><code className="bg-red-100 px-1 rounded">IntToStr()</code> - Convert integer to string</p>
            <p><code className="bg-red-100 px-1 rounded">StrToInt()</code> - Convert string to integer</p>
            <p><code className="bg-red-100 px-1 rounded">FloatToStr()</code> - Convert float to string</p>
            <p><code className="bg-red-100 px-1 rounded">StrToFloat()</code> - Convert string to float</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Input and Output',
    content: (
      <div className="space-y-6">
        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
          <h3 className="font-bold text-teal-900 mb-2">Getting Input from Users</h3>
          <p className="text-slate-700 mb-3">
            Programs need to interact with users by accepting input and displaying output. 
            Delphi provides several ways to handle I/O operations.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded border border-gray-300">
          <h4 className="font-semibold text-gray-900 mb-3">Console Input Example</h4>
          <CodeBlock language="pascal" code={`program UserInput;

{$APPTYPE CONSOLE}

var
  userName: String;
  userAge: Integer;
  height: Real;

begin
  // Prompt and read string input
  Write('Enter your name: ');
  ReadLn(userName);
  
  // Read integer input
  Write('Enter your age: ');
  ReadLn(userAge);
  
  // Read real number input
  Write('Enter your height in meters: ');
  ReadLn(height);
  
  // Display formatted output
  WriteLn;
  WriteLn('===== User Information =====');
  WriteLn('Name: ', userName);
  WriteLn('Age: ', userAge, ' years old');
  WriteLn('Height: ', height:0:2, ' meters');
  
  ReadLn; // Wait before closing
end.`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <h5 className="font-semibold text-blue-900 mb-2">Input Functions</h5>
            <ul className="text-sm text-slate-700 space-y-1">
              <li><code className="bg-blue-100 px-1 rounded">Read()</code> - Read without new line</li>
              <li><code className="bg-blue-100 px-1 rounded">ReadLn()</code> - Read with new line</li>
              <li>For GUI: <code className="bg-blue-100 px-1 rounded">InputBox()</code></li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h5 className="font-semibold text-green-900 mb-2">Output Functions</h5>
            <ul className="text-sm text-slate-700 space-y-1">
              <li><code className="bg-green-100 px-1 rounded">Write()</code> - Display text</li>
              <li><code className="bg-green-100 px-1 rounded">WriteLn()</code> - Display + new line</li>
              <li>For GUI: <code className="bg-green-100 px-1 rounded">ShowMessage()</code></li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded border border-amber-300">
          <h4 className="font-semibold text-amber-900 mb-3">Arithmetic Operations</h4>
          <CodeBlock language="pascal" code={`program Calculator;

{$APPTYPE CONSOLE}

var
  num1, num2: Integer;
  sum, difference, product: Integer;
  quotient: Real;

begin
  Write('Enter first number: ');
  ReadLn(num1);
  Write('Enter second number: ');
  ReadLn(num2);
  
  sum := num1 + num2;
  difference := num1 - num2;
  product := num1 * num2;
  quotient := num1 / num2;
  
  WriteLn('Sum: ', sum);
  WriteLn('Difference: ', difference);
  WriteLn('Product: ', product);
  WriteLn('Quotient: ', quotient:0:2);
  
  ReadLn;
end.`} />
          <p className="text-sm text-slate-600 mt-2">
            Operators: <strong>+</strong> (add), <strong>-</strong> (subtract), <strong>*</strong> (multiply), 
            <strong>/</strong> (divide), <strong>div</strong> (integer division), <strong>mod</strong> (remainder)
          </p>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is a variable in programming?',
    options: ['A constant value that never changes', 'A named storage location for data', 'A function that carries out a task', 'A control structure that makes decisions'],
    answer: 'A named storage location for data',
    explanation: 'A variable is a named location that stores data which can change during program execution.',
  },
  {
    prompt: 'Which of the following is a valid data type?',
    options: ['letter', 'integer', 'sentence', 'math'],
    answer: 'integer',
    explanation: 'Integer is a fundamental data type representing whole numbers.',
  },
  {
    prompt: 'What operator is used for assignment in Delphi?',
    options: ['=', ':=', '==', '->'],
    answer: ':=',
    explanation: 'Delphi uses := for assignment, unlike many other languages that use =.',
  },
  {
    prompt: 'Which function is used to convert a string to an integer in Delphi?',
    options: ['IntToStr()', 'StrToInt()', 'ToInteger()', 'ParseInt()'],
    answer: 'StrToInt()',
    explanation: 'StrToInt() converts a string representation of a number to an integer type.',
  },
];

const ProgrammingFoundations = () => (
  <CapsSubjectTopic
    title="Programming Foundations"
    subtitle="Introduction to programming concepts and practice"
    learnSteps={learnSteps}
    task="gr10-programming-foundations-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default ProgrammingFoundations;
