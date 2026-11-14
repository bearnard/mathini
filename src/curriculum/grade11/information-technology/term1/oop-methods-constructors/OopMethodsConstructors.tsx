import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Constructors: initialising objects',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>constructor</strong> is a special method that runs automatically when an object is created. Its job is to set initial values for the object's attributes.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Default constructor</strong>
            <p className="text-slate-600">Takes no parameters; sets attributes to default values (0, "", false).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Parameterised constructor</strong>
            <p className="text-slate-600">Accepts arguments so the caller can supply initial values at creation time.</p>
          </div>
        </div>
        <CodeBlock language="pascal" code={`constructor Dog(n: string; b: string; a: integer)
  name  := n
  breed := b
  age   := a`} />
      </div>
    ),
  },
  {
    title: 'Methods: defining behaviour',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Methods</strong> define what an object can <em>do</em>. There are two main kinds:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Procedure (void method)</strong>
            <p className="text-slate-600">Performs an action but returns <strong>no value</strong>. E.g. <code>bark()</code> prints a sound.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Function (return method)</strong>
            <p className="text-slate-600">Performs a calculation and <strong>returns a value</strong>. E.g. <code>getAge()</code> returns an integer.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">A method's <em>signature</em> is its name plus its parameter list — this uniquely identifies it.</p>
      </div>
    ),
  },
  {
    title: 'The "this" / "Self" keyword',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Inside a method, <strong>this</strong> (Java/Python) or <strong>Self</strong> (Delphi) refers to the <em>current object</em> — the specific instance the method was called on.
        </p>
        <CodeBlock language="pascal" code={`// Resolves naming clash between parameter and attribute
constructor Person(name: string)
  this.name := name  // attribute = parameter`} />
        <p className="text-slate-600">It is also used to pass the current object as an argument to another method.</p>
      </div>
    ),
  },
  {
    title: 'Getters and setters in practice',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Getters</strong> and <strong>setters</strong> are methods that read or modify private attributes, often including <em>validation</em> logic.
        </p>
        <CodeBlock language="pascal" code={`function getAge(): integer
  return age

procedure setAge(a: integer)
  if a >= 0 then
    age := a`} />
        <p className="text-sm text-slate-600">Setters can reject invalid data (e.g. negative age), protecting the object's state.</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is the main purpose of a constructor?',
    options: [
      'To destroy an object when it is no longer needed',
      'To initialise an object\'s attributes when it is created',
      'To return a value from a class',
      'To make attributes public',
    ],
    answer: 'To initialise an object\'s attributes when it is created',
    explanation: 'A constructor runs automatically at object creation and sets up initial attribute values.',
  },
  {
    prompt: 'What makes a constructor different from a regular method?',
    options: ['It has a return type of integer', 'It can be called only once in a program', 'It has the same name as the class and no return type', 'It must always be declared as private'],
    answer: 'It has the same name as the class and no return type',
    explanation: 'Constructors are named identically to their class and declare no return type (not even void).',
  },
  {
    prompt: 'What is a parameterised constructor?',
    options: [
      'A constructor with no parameters',
      'A constructor that accepts arguments to set initial attribute values',
      'A constructor that returns the object\'s attributes',
      'A constructor shared between two classes',
    ],
    answer: 'A constructor that accepts arguments to set initial attribute values',
    explanation: 'A parameterised constructor lets callers supply initial values at the point of object creation.',
  },
  {
    prompt: 'Which type of method performs an action but does NOT return a value?',
    options: ['Function', 'Constructor', 'Procedure', 'Getter'],
    answer: 'Procedure',
    explanation: 'Procedures (void methods) carry out actions without returning a result to the caller.',
  },
  {
    prompt: 'What does "this" refer to inside a method?',
    options: [
      'The class definition',
      'The first object ever created from the class',
      'The current object on which the method was called',
      'The parent class',
    ],
    answer: 'The current object on which the method was called',
    explanation: '"this" (or Self in Delphi) always refers to the specific object instance the method is operating on.',
  },
  {
    prompt: 'A setter method for age contains: "if a >= 0 then age := a". Why is this check included?',
    options: ['To speed up the running of the program', 'To validate input and stop a negative age being stored', 'To make sure that the getter works properly', 'To satisfy the compiler that checks the code'],
    answer: 'To validate input and stop a negative age being stored',
    explanation: 'Setters often include validation logic to protect the object\'s internal state from invalid data.',
  },
  {
    prompt: 'What is a method signature?',
    options: [
      'The return value of a method',
      'The access modifier of a method',
      'The method name combined with its parameter list',
      'The first line of code inside a method',
    ],
    answer: 'The method name combined with its parameter list',
    explanation: 'A signature uniquely identifies a method: name + parameter types and order.',
  },
  {
    prompt: 'Which keyword in Python plays the same role as "this" in Java?',
    options: ['me', 'self', 'current', 'object'],
    answer: 'self',
    explanation: 'Python uses "self" as the first parameter of instance methods to refer to the current object.',
  },
  {
    prompt: 'In Delphi/Pascal, what is the equivalent of the "this" keyword in Java?',
    options: ['Me', 'Current', 'Self', 'Object'],
    answer: 'Self',
    explanation: 'Delphi uses the reserved word "Self" to refer to the current object inside a method.',
  },
  {
    prompt: 'If a class has both a default and a parameterised constructor, which one runs when you write: myDog = new Dog("Rex", "Lab", 3)?',
    options: [
      'The default constructor, because it always runs first',
      'Both constructors run in sequence',
      'The parameterised constructor, because arguments were provided',
      'No constructor runs; arguments go directly into attributes',
    ],
    answer: 'The parameterised constructor, because arguments were provided',
    explanation: 'The runtime matches the constructor whose parameter list corresponds to the supplied arguments.',
  },
];

const OopMethodsConstructors = () => (
  <CapsSubjectTopic
    title="OOP: Methods and Constructors"
    subtitle="Defining behaviour with methods and initialising objects with constructors"
    learnSteps={learnSteps}
    task="gr11-oop-methods-constructors-t1"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default OopMethodsConstructors;
