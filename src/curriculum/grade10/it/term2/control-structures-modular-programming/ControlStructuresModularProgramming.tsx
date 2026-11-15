import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Selection Statements',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-bold text-blue-900 mb-2">Decision Making with IF Statements</h3>
          <p className="text-slate-700 mb-3">
            Selection statements allow programs to make decisions and execute different code based on conditions. 
            The IF statement is the most fundamental control structure.
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">IF Statement Syntax</h4>
          <CodeBlock language="pascal" code={`program IfExample;

{$APPTYPE CONSOLE}

var
  age: Integer;

begin
  Write('Enter your age: ');
  ReadLn(age);
  
  // Simple IF
  if age >= 18 then
    WriteLn('You are an adult');
  
  // IF-ELSE
  if age >= 18 then
    WriteLn('You can vote')
  else
    WriteLn('You cannot vote yet');
  
  // IF-ELSE IF-ELSE
  if age < 13 then
    WriteLn('You are a child')
  else if age < 18 then
    WriteLn('You are a teenager')
  else if age < 60 then
    WriteLn('You are an adult')
  else
    WriteLn('You are a senior citizen');
  
  ReadLn;
end.`} />
        </div>
        <div className="bg-purple-50 p-4 rounded border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-3">Comparison and Logical Operators</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-purple-100">
              <p className="font-bold text-purple-700 text-sm mb-2">Comparison Operators</p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li><code className="bg-purple-100 px-1 rounded">=</code> Equal to</li>
                <li><code className="bg-purple-100 px-1 rounded">&lt;&gt;</code> Not equal to</li>
                <li><code className="bg-purple-100 px-1 rounded">&gt;</code> Greater than</li>
                <li><code className="bg-purple-100 px-1 rounded">&lt;</code> Less than</li>
                <li><code className="bg-purple-100 px-1 rounded">&gt;=</code> Greater or equal</li>
                <li><code className="bg-purple-100 px-1 rounded">&lt;=</code> Less or equal</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <p className="font-bold text-purple-700 text-sm mb-2">Logical Operators</p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li><code className="bg-purple-100 px-1 rounded">and</code> Both conditions true</li>
                <li><code className="bg-purple-100 px-1 rounded">or</code> At least one true</li>
                <li><code className="bg-purple-100 px-1 rounded">not</code> Negates condition</li>
                <li><code className="bg-purple-100 px-1 rounded">xor</code> Exclusive or</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">CASE Statement</h4>
          <CodeBlock language="pascal" code={`program CaseExample;

{$APPTYPE CONSOLE}

var
  grade: Char;

begin
  Write('Enter grade (A-F): ');
  ReadLn(grade);
  
  case grade of
    'A': WriteLn('Excellent! (80-100%)');
    'B': WriteLn('Good (70-79%)');
    'C': WriteLn('Satisfactory (60-69%)');
    'D': WriteLn('Pass (50-59%)');
    'E': WriteLn('Pass (40-49%)');
    'F': WriteLn('Fail (Below 40%)');
  else
    WriteLn('Invalid grade');
  end;
  
  ReadLn;
end.`} />
          <p className="text-sm text-slate-600 mt-2">
            The CASE statement is cleaner than multiple IF-ELSE statements when checking one variable against many values.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Looping Structures',
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <h3 className="font-bold text-indigo-900 mb-2">Iteration with Loops</h3>
          <p className="text-slate-700 mb-3">
            Loops allow code to repeat multiple times. Delphi supports three main loop types: FOR, WHILE, and REPEAT-UNTIL.
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded border border-red-200">
          <h4 className="font-semibold text-red-900 mb-3">FOR Loop</h4>
          <CodeBlock language="pascal" code={`program ForLoops;

{$APPTYPE CONSOLE}

var
  i, sum: Integer;

begin
  // FOR loop counting up
  WriteLn('Counting from 1 to 10:');
  for i := 1 to 10 do
    Write(i, ' ');
  WriteLn;
  
  // FOR loop counting down
  WriteLn('Countdown:');
  for i := 5 downto 1 do
    Write(i, ' ');
  WriteLn;
  
  // Calculate sum of numbers 1-100
  sum := 0;
  for i := 1 to 100 do
    sum := sum + i;
  WriteLn('Sum of 1-100: ', sum);
  
  ReadLn;
end.`} />
          <p className="text-sm text-slate-600 mt-2">
            Use FOR loops when you know exactly how many times to repeat. Use <strong>to</strong> for counting up, 
            <strong>downto</strong> for counting down.
          </p>
        </div>
        <div className="bg-teal-50 p-4 rounded border border-teal-200">
          <h4 className="font-semibold text-teal-900 mb-3">WHILE Loop</h4>
          <CodeBlock language="pascal" code={`program WhileLoop;

{$APPTYPE CONSOLE}

var
  num, count: Integer;

begin
  count := 0;
  num := 1;
  
  // WHILE loop - test condition first
  while num <= 100 do
  begin
    if num mod 5 = 0 then
      count := count + 1;
    num := num + 1;
  end;
  
  WriteLn('Numbers divisible by 5 (1-100): ', count);
  
  ReadLn;
end.`} />
          <p className="text-sm text-slate-600 mt-2">
            WHILE loops check the condition <strong>before</strong> each iteration. May execute zero times if condition is initially false.
          </p>
        </div>
        <div className="bg-orange-50 p-4 rounded border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-3">REPEAT-UNTIL Loop</h4>
          <CodeBlock language="pascal" code={`program RepeatLoop;

{$APPTYPE CONSOLE}

var
  password: String;

begin
  // REPEAT-UNTIL loop - test condition after
  repeat
    Write('Enter password: ');
    ReadLn(password);
    
    if password <> 'secret123' then
      WriteLn('Incorrect! Try again.');
  until password = 'secret123';
  
  WriteLn('Access granted!');
  
  ReadLn;
end.`} />
          <p className="text-sm text-slate-600 mt-2">
            REPEAT-UNTIL loops check the condition <strong>after</strong> each iteration. Always execute at least once.
          </p>
        </div>
        <div className="bg-pink-50 p-4 rounded">
          <h4 className="font-semibold text-pink-900 mb-2">Loop Control: BREAK and CONTINUE</h4>
          <p className="text-sm text-slate-700">
            <strong>Break:</strong> Exit the loop immediately<br/>
            <strong>Continue:</strong> Skip to next iteration
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Modular Programming',
    content: (
      <div className="space-y-6">
        <div className="bg-violet-50 border-l-4 border-violet-500 p-4 rounded">
          <h3 className="font-bold text-violet-900 mb-2">Functions and Procedures</h3>
          <p className="text-slate-700 mb-3">
            Modular programming breaks code into reusable blocks. <strong>Procedures</strong> perform actions. 
            <strong>Functions</strong> perform actions and return a value.
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Procedure Example</h4>
          <CodeBlock language="pascal" code={`program ProcedureExample;

{$APPTYPE CONSOLE}

// Procedure declaration
procedure GreetUser(name: String);
begin
  WriteLn('Hello, ', name, '!');
  WriteLn('Welcome to Delphi programming.');
end;

procedure DisplayLine;
begin
  WriteLn('========================');
end;

// Main program
var
  userName: String;

begin
  Write('Enter your name: ');
  ReadLn(userName);
  
  DisplayLine;
  GreetUser(userName);
  DisplayLine;
  
  ReadLn;
end.`} />
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Function Example</h4>
          <CodeBlock language="pascal" code={`program FunctionExample;

{$APPTYPE CONSOLE}

// Function declaration - returns a value
function CalculateArea(length, width: Real): Real;
begin
  Result := length * width;
end;

function IsEven(num: Integer): Boolean;
begin
  Result := (num mod 2 = 0);
end;

// Main program
var
  len, wid, area: Real;
  number: Integer;

begin
  Write('Enter length: ');
  ReadLn(len);
  Write('Enter width: ');
  ReadLn(wid);
  
  area := CalculateArea(len, wid);
  WriteLn('Area: ', area:0:2, ' square units');
  
  Write('Enter a number: ');
  ReadLn(number);
  
  if IsEven(number) then
    WriteLn(number, ' is even')
  else
    WriteLn(number, ' is odd');
  
  ReadLn;
end.`} />
          <p className="text-sm text-slate-600 mt-2">
            Functions use <strong>Result</strong> to return a value. The function name must include a return type.
          </p>
        </div>
        <div className="bg-amber-50 p-4 rounded border border-amber-300">
          <h4 className="font-semibold text-amber-900 mb-2">Benefits of Modular Programming</h4>
          <ul className="list-disc ml-6 space-y-1 text-slate-700 text-sm">
            <li><strong>Reusability:</strong> Use the same code multiple times</li>
            <li><strong>Maintainability:</strong> Easier to update and fix bugs</li>
            <li><strong>Readability:</strong> Code is more organized and understandable</li>
            <li><strong>Testing:</strong> Test individual modules separately</li>
            <li><strong>Collaboration:</strong> Different team members can work on different modules</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is the purpose of a control structure?',
    options: ['Store data', 'Determine program flow', 'Declare variables', 'Import libraries'],
    answer: 'Determine program flow',
    explanation: 'Control structures determine which code statements execute based on conditions.',
  },
  {
    prompt: 'Which loop executes at least once before checking the condition?',
    options: ['for loop', 'while loop', 'do-while loop', 'foreach loop'],
    answer: 'do-while loop',
    explanation: 'The do-while loop checks the condition after executing the body at least once.',
  },
  {
    prompt: 'What is the correct syntax for a FOR loop in Delphi that counts from 1 to 10?',
    options: ['for i = 1 to 10 do', 'for i := 1 to 10 do', 'for (i=1; i<=10; i++)', 'for i in 1..10 do'],
    answer: 'for i := 1 to 10 do',
    explanation: 'Delphi uses := for assignment and the syntax "for variable := start to end do".',
  },
  {
    prompt: 'What is the difference between a procedure and a function?',
    options: ['No difference', 'Functions return values, procedures do not', 'Procedures are faster', 'Functions cannot have parameters'],
    answer: 'Functions return values, procedures do not',
    explanation: 'Functions return a value using Result, while procedures perform actions without returning values.',
  },
];

const ControlStructuresModularProgramming = () => (
  <CapsSubjectTopic
    title="Control Structures and Modular Programming"
    subtitle="Flow control and function-based development"
    learnSteps={learnSteps}
    task="gr10-control-structures-modular-programming-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default ControlStructuresModularProgramming;
