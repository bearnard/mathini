'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Encapsulation and controlled access',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Encapsulation hides the internal state of an object and exposes only safe ways to work with that data.
          This protects the object from careless changes.
        </p>
        <CodeBlock language="pascal" code={`type
  TBankAccount = class
  private
    FBalance: Real;
  public
    constructor Create(AOpeningBalance: Real);
    procedure Deposit(AAmount: Real);
    function GetBalance: Real;
  end;

procedure TBankAccount.Deposit(AAmount: Real);
begin
  if AAmount > 0 then
    FBalance := FBalance + AAmount;
end;

function TBankAccount.GetBalance: Real;
begin
  Result := FBalance;
end;`} />
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Concept: Private fields</p>
          <p className="text-slate-600 mt-1">
            Outside code should not change <strong>FBalance</strong> directly. The class decides what is allowed through methods.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Constructors and valid object state',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A constructor should help every new object start in a sensible state. If essential values are missing or invalid,
          the constructor must handle that immediately.
        </p>
        <CodeBlock language="pascal" code={`constructor TBankAccount.Create(AOpeningBalance: Real);
begin
  inherited Create;

  if AOpeningBalance < 0 then
    FBalance := 0
  else
    FBalance := AOpeningBalance;
end;`} />
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>Assign all required attributes.</li>
          <li>Reject impossible values early.</li>
          <li>Avoid leaving required data uninitialised.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Handling exceptions cleanly',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Validation tries to stop bad input before it causes harm. Exception handling deals with runtime problems that still happen,
          such as bad numeric conversion or a missing file.
        </p>
        <CodeBlock language="pascal" code={`try
  iValue := StrToInt(edtQuantity.Text);
  ShowMessage('Quantity captured: ' + IntToStr(iValue));
except
  on EConvertError do
    ShowMessage('Please enter a valid whole number.');
end;`} />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Mention the specific exception risk. Saying only “use try...except” is weaker than linking it to numeric conversion, file access or database access.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Debugging and defensive coding',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Defensive coding reduces the chance of hidden bugs. Breakpoints, watches and careful test data help you find the exact moment the program state becomes wrong.
        </p>
        <CodeBlock language="pascal" code={`if iDivisor = 0 then
  raise Exception.Create('Cannot divide by zero');

rAnswer := iTotal / iDivisor;`} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">Defensive check</p>
            <p className="mt-1 text-slate-600">Test assumptions early so the error is easier to diagnose.</p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Debugger habit</p>
            <p className="mt-1 text-slate-600">Pause on suspicious lines and inspect the values before and after each step.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Setters, exceptions and finally",
    content: (
      <div className="space-y-4">
        <GapRule>{"A class should have one focused responsibility and clear methods. A setter validates data so invalid values are rejected before the object changes. An exception handler deals with runtime problems, and a finally block runs cleanup code whether an error occurs or not."}</GapRule>
        <GapWorked title={"Safer code in Delphi"} steps={["Setter: procedure TAccount.SetAge(a: Integer); begin if a >= 0 then FAge := a; end;", "Constructor: store or validate essential inputs, such as an account number, so the object starts in a sensible state.", "try Val := StrToInt(Edit1.Text); except on EConvertError do ShowMessage('Enter a number'); end; handles a user typing letters where a number is required.", "try ... finally CloseFile(f); end; always closes the file.", "Raise an exception deliberately when invalid data breaks an important rule that the caller must handle.", "A breakpoint lets you inspect variable values step by step."]} />
        <GapMistake>{"Using an exception handler for every small check. Validate simple input first and keep exceptions for real runtime problems."}</GapMistake>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "Why are class attributes usually declared private?",
    options: ["So every other class can edit them directly", "So the object can protect and control its own data", "So constructors are no longer needed", "So inheritance becomes impossible"],
    answer: 1,
    explanation: "Private fields support encapsulation by keeping direct access under the class's control.",
  },
  {
    prompt: "What is the main benefit of validating data inside a setter method?",
    options: ['It makes the code run without needing any input', 'It ensures invalid values are rejected before changing the object', 'It automatically creates a table in the database', 'It replaces the need for a constructor in the class definition before the object is created'],
    answer: 1,
    explanation: "A setter can check rules such as ranges or formats before updating a private attribute.",
  },
  {
    prompt: "Which situation is best handled with an exception handler?",
    options: ['Choosing a class name during the planning stage', 'A user enters letters where a number is required at runtime', 'Drawing a UML diagram of the classes', 'Deciding whether the design should use inheritance or not in a class'],
    answer: 1,
    explanation: "An exception handler is for runtime problems, such as a conversion failing when the program is already running.",
  },
  {
    prompt: "What is the role of a finally block?",
    options: ["It repeats the same code until it works", "It stores all object attributes automatically", "It runs cleanup code whether an error occurs or not", "It hides methods from subclasses"],
    answer: 2,
    explanation: "A finally block is useful for actions like closing files or database connections reliably.",
  },
  {
    prompt: "Which class design is usually best?",
    options: ["A class with one focused responsibility and clear methods", "A class that handles every feature in the entire program", "A class with only public fields and no validation", "A class with no constructor and no methods"],
    answer: 0,
    explanation: "Focused classes are easier to test, maintain and understand than oversized all-in-one classes.",
  },
  {
    prompt: "When should a program raise or throw an exception deliberately?",
    options: ['When invalid data breaks an important rule that the caller must handle', 'Whenever a loop finishes in the normal way', 'When a class diagram is missing from the plan of the program or the report is too long to read in class', 'To replace every if statement in the program'],
    answer: 0,
    explanation: "Throwing an exception is appropriate when a serious invalid state must be reported clearly to calling code.",
  },
  {
    prompt: "How do breakpoints help during debugging?",
    options: ["They let you inspect variable values step by step", "They permanently remove runtime errors", "They force all inputs to be valid", "They convert pseudocode into source code"],
    answer: 0,
    explanation: "Breakpoints pause execution so you can inspect program state and track where logic goes wrong.",
  },
  {
    prompt: "What should a constructor do with essential inputs such as an account number?",
    options: ['Ignore them until the object is used later on', 'Store or validate them so the object starts in a sensible state', 'Make them public global variables so any part can change them and the object can be edited', 'Replace them with generated values at the start'],
    answer: 1,
    explanation: "Constructors should help establish a correct initial state instead of leaving essential data unset.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const EncapsulationClassDesignExceptionHandling = () => (
  <CapsSubjectTopic
    title="Encapsulation, Class Design and Exception Handling"
    subtitle="Protecting object state and responding safely to runtime problems"
    learnSteps={learnSteps}
    task="gr12-encapsulation-class-design-exception-handling-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default EncapsulationClassDesignExceptionHandling;
