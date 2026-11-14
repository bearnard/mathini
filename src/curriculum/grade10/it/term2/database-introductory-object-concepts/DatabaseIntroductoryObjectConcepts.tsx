import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/it/term2/database-introductory-object-concepts/diagram.webp", alt: "Database and Introductory Object Concepts" },
    title: 'Database Concepts',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-bold text-blue-900 mb-2">Introduction to Databases</h3>
          <p className="text-slate-700 mb-3">
            A database is an organized collection of structured data stored electronically. Databases make it easy to 
            store, retrieve, modify, and manage large amounts of information efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h4 className="font-bold text-green-900 mb-2">Database Components</h4>
            <ul className="list-disc ml-6 space-y-1 text-slate-700 text-sm">
              <li><strong>Database:</strong> Collection of related tables</li>
              <li><strong>Table:</strong> Collection of related records</li>
              <li><strong>Record/Row:</strong> Single entry in a table</li>
              <li><strong>Field/Column:</strong> Specific data attribute</li>
              <li><strong>Primary Key:</strong> Unique identifier for records</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2">Database Types</h4>
            <ul className="list-disc ml-6 space-y-1 text-slate-700 text-sm">
              <li><strong>Flat File:</strong> Simple single table (e.g., CSV)</li>
              <li><strong>Relational:</strong> Multiple related tables (SQL)</li>
              <li><strong>NoSQL:</strong> Non-relational structures</li>
              <li><strong>Hierarchical:</strong> Tree-like structure</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">Example: Students Table</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-yellow-200 text-sm">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="border border-yellow-300 px-3 py-2">StudentID</th>
                  <th className="border border-yellow-300 px-3 py-2">FirstName</th>
                  <th className="border border-yellow-300 px-3 py-2">LastName</th>
                  <th className="border border-yellow-300 px-3 py-2">Grade</th>
                  <th className="border border-yellow-300 px-3 py-2">Average</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-yellow-200 px-3 py-2">1001</td>
                  <td className="border border-yellow-200 px-3 py-2">Thabo</td>
                  <td className="border border-yellow-200 px-3 py-2">Mokoena</td>
                  <td className="border border-yellow-200 px-3 py-2">10</td>
                  <td className="border border-yellow-200 px-3 py-2">78.5</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border border-yellow-200 px-3 py-2">1002</td>
                  <td className="border border-yellow-200 px-3 py-2">Naledi</td>
                  <td className="border border-yellow-200 px-3 py-2">Khumalo</td>
                  <td className="border border-yellow-200 px-3 py-2">10</td>
                  <td className="border border-yellow-200 px-3 py-2">82.3</td>
                </tr>
                <tr>
                  <td className="border border-yellow-200 px-3 py-2">1003</td>
                  <td className="border border-yellow-200 px-3 py-2">Sipho</td>
                  <td className="border border-yellow-200 px-3 py-2">Ndlovu</td>
                  <td className="border border-yellow-200 px-3 py-2">10</td>
                  <td className="border border-yellow-200 px-3 py-2">75.8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            <strong>StudentID</strong> is the primary key - it uniquely identifies each record.
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded border border-red-200">
          <h4 className="font-semibold text-red-900 mb-2">Data Types in Databases</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-700">
            <div className="bg-white p-2 rounded border">Text/String</div>
            <div className="bg-white p-2 rounded border">Integer</div>
            <div className="bg-white p-2 rounded border">Float/Real</div>
            <div className="bg-white p-2 rounded border">Date/Time</div>
            <div className="bg-white p-2 rounded border">Boolean</div>
            <div className="bg-white p-2 rounded border">Currency</div>
            <div className="bg-white p-2 rounded border">Memo/Blob</div>
            <div className="bg-white p-2 rounded border">AutoNumber</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Object-Oriented Basics',
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <h3 className="font-bold text-indigo-900 mb-2">Introduction to Object-Oriented Programming (OOP)</h3>
          <p className="text-slate-700 mb-3">
            OOP is a programming paradigm that organizes code around objects and data rather than functions and logic. 
            It models real-world entities and their interactions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-teal-50 p-4 rounded border border-teal-200">
            <h4 className="font-bold text-teal-900 mb-2">Classes</h4>
            <p className="text-sm text-slate-700 mb-2">
              A <strong>class</strong> is a blueprint or template for creating objects. It defines the structure and behavior.
            </p>
            <CodeBlock language="pascal" code={`type
  TStudent = class
  private
    FName: String;
    FAge: Integer;
  public
    constructor Create;
    procedure Display;
  end;`} />
          </div>
          <div className="bg-cyan-50 p-4 rounded border border-cyan-200">
            <h4 className="font-bold text-cyan-900 mb-2">Objects</h4>
            <p className="text-sm text-slate-700 mb-2">
              An <strong>object</strong> is an instance of a class. It has specific values for the attributes defined in the class.
            </p>
            <CodeBlock language="pascal" code={`var
  student1: TStudent;

begin
  student1 := TStudent.Create;
  student1.Display;
  student1.Free;
end;`} />
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded border border-purple-300">
          <h4 className="font-semibold text-purple-900 mb-3">Key OOP Concepts</h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm">Attributes (Properties)</h5>
              <p className="text-xs text-slate-600">
                Data stored in an object (e.g., student name, age, marks). Also called fields or properties.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm">Methods (Behaviors)</h5>
              <p className="text-xs text-slate-600">
                Functions/procedures that operate on the object's data (e.g., CalculateAverage, Display).
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm">Encapsulation</h5>
              <p className="text-xs text-slate-600">
                Bundling data and methods together. Private attributes hide implementation details.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-3">Simple Class Example</h4>
          <CodeBlock language="pascal" code={`type
  TBankAccount = class
  private
    FBalance: Real;
    FAccountNumber: String;
  public
    constructor Create(AccNum: String);
    procedure Deposit(Amount: Real);
    procedure Withdraw(Amount: Real);
    function GetBalance: Real;
  end;

constructor TBankAccount.Create(AccNum: String);
begin
  FAccountNumber := AccNum;
  FBalance := 0.0;
end;

procedure TBankAccount.Deposit(Amount: Real);
begin
  FBalance := FBalance + Amount;
end;

function TBankAccount.GetBalance: Real;
begin
  Result := FBalance;
end;`} />
        </div>
      </div>
    ),
  },
  {
    title: 'Data Persistence',
    content: (
      <div className="space-y-6">
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded">
          <h3 className="font-bold text-rose-900 mb-2">Storing and Retrieving Data</h3>
          <p className="text-slate-700 mb-3">
            Data persistence means saving data so it remains available even after the program closes. 
            Databases and files are the main methods for persistent storage.
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">File vs Database Storage</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-green-100">
              <h5 className="font-bold text-green-800 text-sm mb-2">Text Files</h5>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>✓ Simple and easy to use</li>
                <li>✓ Human-readable</li>
                <li>✗ No structure or validation</li>
                <li>✗ Hard to query efficiently</li>
                <li>✗ No concurrent access control</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <h5 className="font-bold text-green-800 text-sm mb-2">Databases</h5>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>✓ Structured and organized</li>
                <li>✓ Fast searching and filtering</li>
                <li>✓ Data integrity and validation</li>
                <li>✓ Multi-user access</li>
                <li>✓ Relationships between tables</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Simple File I/O in Delphi</h4>
          <CodeBlock language="pascal" code={`program FileExample;

{$APPTYPE CONSOLE}

uses
  SysUtils;

var
  myFile: TextFile;
  line: String;

begin
  // Write to file
  AssignFile(myFile, 'students.txt');
  Rewrite(myFile);
  WriteLn(myFile, 'Thabo,Mokoena,78.5');
  WriteLn(myFile, 'Naledi,Khumalo,82.3');
  CloseFile(myFile);
  
  // Read from file
  AssignFile(myFile, 'students.txt');
  Reset(myFile);
  while not Eof(myFile) do
  begin
    ReadLn(myFile, line);
    WriteLn(line);
  end;
  CloseFile(myFile);
  
  ReadLn;
end.`} />
        </div>
        <div className="bg-amber-50 p-4 rounded border border-amber-300">
          <h4 className="font-semibold text-amber-900 mb-2">Database Operations (CRUD)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="bg-white p-3 rounded border border-amber-200 text-center">
              <p className="font-bold text-amber-800 text-sm">CREATE</p>
              <p className="text-xs text-slate-600">Add new records</p>
            </div>
            <div className="bg-white p-3 rounded border border-amber-200 text-center">
              <p className="font-bold text-amber-800 text-sm">READ</p>
              <p className="text-xs text-slate-600">Retrieve data</p>
            </div>
            <div className="bg-white p-3 rounded border border-amber-200 text-center">
              <p className="font-bold text-amber-800 text-sm">UPDATE</p>
              <p className="text-xs text-slate-600">Modify existing</p>
            </div>
            <div className="bg-white p-3 rounded border border-amber-200 text-center">
              <p className="font-bold text-amber-800 text-sm">DELETE</p>
              <p className="text-xs text-slate-600">Remove records</p>
            </div>
          </div>
        </div>
        <div className="bg-violet-50 p-4 rounded">
          <h4 className="font-semibold text-violet-900 mb-2">SQL Basics (Preview)</h4>
          <p className="text-sm text-slate-700 mb-2">
            SQL (Structured Query Language) is used to interact with databases:
          </p>
          <CodeBlock language="sql" code={`-- Select all students
SELECT * FROM Students;

-- Select with condition
SELECT FirstName, LastName FROM Students WHERE Grade = 10;

-- Insert new record
INSERT INTO Students (FirstName, LastName, Grade) 
VALUES ('Mandla', 'Dlamini', 10);`} />
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is a database table?',
    options: ['A piece of furniture used in a computer lab', 'An organised collection of related data in rows and columns', 'A worksheet that holds formulas for sums', 'A program that runs on a computer'],
    answer: 'An organised collection of related data in rows and columns',
    explanation: 'A database table is a structured collection of data organized in rows (records) and columns (fields).',
  },
  {
    prompt: 'In object-oriented programming, what is an object?',
    options: ['A variable that stores a single value', 'An instance of a class with data and methods', 'A function that returns a value', 'A comment that explains the code'],
    answer: 'An instance of a class with data and methods',
    explanation: 'An object is a concrete instance of a class that contains data (attributes) and behaviors (methods).',
  },
  {
    prompt: 'What does a primary key do in a database table?',
    options: ['Locks the database so no one can use it', 'Uniquely identifies each record in the table', 'Sorts all of the records in the table', 'Encrypts all of the data in the table'],
    answer: 'Uniquely identifies each record in the table',
    explanation: 'A primary key is a unique identifier for each record in a table, ensuring no duplicates.',
  },
  {
    prompt: 'What does CRUD stand for in database operations?',
    options: ['Create Read Update Delete', 'Copy Retrieve Upload Download', 'Connect Run Update Display', 'Code Review User Design'],
    answer: 'Create Read Update Delete',
    explanation: 'CRUD represents the four basic operations for persistent storage: Create, Read, Update, and Delete.',
  },
];

const DatabaseIntroductoryObjectConcepts = () => (
  <CapsSubjectTopic
    title="Database and Introductory Object Concepts"
    subtitle="Data organization and object-oriented fundamentals"
    learnSteps={learnSteps}
    task="gr10-database-introductory-object-concepts-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default DatabaseIntroductoryObjectConcepts;
