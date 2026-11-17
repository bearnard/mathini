import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Why use your own methods",
    content: slide(
      <>
        <Rule>A method is a named block of code that does one job. Writing your own methods lets you reuse code, makes a program easier to read and test, and breaks a big problem into small parts.</Rule>
        <KeyTable
          title="Reasons for user-defined methods"
          head={["Reason", "Meaning"]}
          aria="Reasons for user-defined methods. Reuse: Write once, call many times. Readability: A good name says what the code does. Testing: Test a small part on its own. Divide the problem: Solve small parts, then join them."
          rows={[["Reuse", "Write once, call many times"], ["Readability", "A good name says what the code does"], ["Testing", "Test a small part on its own"], ["Divide the problem", "Solve small parts, then join them"]]}
        />
        <Worked
          steps={[
            <>A program must work out VAT in five places. One method, CalcVAT, is written once and called five times.</>,
            <>If the VAT rate changes, only the method must be changed.</>,
          ]}
        />
        <Mistake>Copying the same code in many places. A change then has to be made in every copy.</Mistake>
      </>,
    ),
  },
  {
    title: "Procedures and functions",
    content: slide(
      <>
        <Rule>A procedure does a task and does not return a value. A function does a task and returns one value. A method has a signature (its name and parameters), and you call it by name.</Rule>
        <KeyTable
          title="Procedure or function"
          head={["Kind", "Feature"]}
          aria="Procedure or function. Procedure: Does a task; returns no value. Function: Returns one value, which can be used in a line of code. Signature: The name and the parameters (and the result type of a function). Calling statement: The name with the values to pass."
          rows={[["Procedure", "Does a task; returns no value"], ["Function", "Returns one value, which can be used in a line of code"], ["Signature", "The name and the parameters (and the result type of a function)"], ["Calling statement", "The name with the values to pass"]]}
        />
        <Worked
          steps={[
            <>procedure ShowMessageBox(sText: string); displays a message and returns nothing.</>,
            <>function CalcVAT(rAmount: real): real; returns the VAT, so you can write rVAT := CalcVAT(200);</>,
          ]}
        />
        <Mistake>Forgetting that a function must give back a value, and that the value must be used.</Mistake>
      </>,
    ),
  },
  {
    title: "Arguments, parameters and value parameters",
    content: slide(
      <>
        <Rule>A parameter is the name in the method heading. An argument is the actual value passed when the method is called. A value parameter receives a copy of the argument, so changing it inside the method does not change the original.</Rule>
        <KeyTable
          title="Parameter terms"
          head={["Term", "Meaning"]}
          aria="Parameter terms. Parameter: The variable in the method heading. Argument: The value or variable in the calling statement. Value parameter: Gets a copy; the original is not changed. Trace table: Shows the value of each variable as the code runs."
          rows={[["Parameter", "The variable in the method heading"], ["Argument", "The value or variable in the calling statement"], ["Value parameter", "Gets a copy; the original is not changed"], ["Trace table", "Shows the value of each variable as the code runs"]]}
        />
        <Worked
          steps={[
            <>Calling CalcVAT(200): 200 is the argument, and rAmount is the parameter that receives it.</>,
            <>If a method changes its value parameter, the variable that was passed keeps its old value.</>,
          ]}
        />
        <Mistake>Mixing up argument and parameter. The argument is passed in. The parameter receives it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between a procedure and a function?</>,
          <>What is an argument?</>,
          <>What is a value parameter?</>,
          <>Give one reason for writing your own method.</>,
        ]}
        answers={[
          <>A function returns a value. A procedure does not.</>,
          <>The actual value passed to a method when it is called.</>,
          <>A parameter that receives a copy, so the original is not changed.</>,
          <>To reuse code, to make code easier to read, or to test small parts.</>,
        ]}
      />,
    ),
  },
];
