import CodeBlock from '@/components/subjects/CodeBlock';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/it/term1/oop-classes-objects/diagram.webp", alt: "OOP: Classes and Objects" },
    title: 'What is a class?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>class</strong> is a blueprint or template that defines the <em>attributes</em> (data) and <em>methods</em> (behaviour) shared by all objects of that type.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800 mb-2">Example: a <code>Dog</code> class</p>
          <pre className="text-sm text-slate-700 whitespace-pre">{`class Dog
  private name: string
  private breed: string
  private age: integer`}</pre>
        </div>
        <p className="text-slate-600 text-sm">A class exists only in code — it does <strong>not</strong> occupy memory until you create an object from it.</p>
      </div>
    ),
  },
  {
    title: 'Objects: instances of a class',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>object</strong> is a specific instance created from a class. Each object has its own copy of the class attributes.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Class (blueprint)</strong>
            <p className="text-slate-600">One class definition — describes what every Dog looks like.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Object (instance)</strong>
            <p className="text-slate-600">Many objects — <code>myDog</code>, <code>herDog</code> — each with their own name, breed and age values.</p>
          </div>
        </div>
        <CodeBlock language="pascal" code={`myDog = new Dog("Rex", "Labrador", 3)`} />
      </div>
    ),
  },
  {
    title: 'Attributes and encapsulation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Encapsulation</strong> means hiding an object's internal data and only exposing it through controlled access methods.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">private</strong>
            <p className="text-slate-600">Accessible only inside the class. Attributes should be private.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">public</strong>
            <p className="text-slate-600">Accessible from anywhere. Methods are usually public.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Getters / Setters</strong>
            <p className="text-slate-600">Public methods that read (<em>get</em>) or update (<em>set</em>) private attributes safely.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'UML class diagrams',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>UML class diagram</strong> has three sections showing the class name, attributes, and methods.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left border border-slate-300">
          <div className="border-b border-slate-400 pb-2 mb-2 text-center font-bold text-slate-800">Dog</div>
          <div className="border-b border-slate-400 pb-2 mb-2 text-sm text-slate-700">
            <p>- name : string</p>
            <p>- breed : string</p>
            <p>- age : integer</p>
          </div>
          <div className="text-sm text-slate-700">
            <p>+ getName() : string</p>
            <p>+ setName(n: string) : void</p>
            <p>+ bark() : void</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">− means <em>private</em>; + means <em>public</em>. Class names use PascalCase; attributes and methods use camelCase.</p>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is a class in object-oriented programming?',
    options: [
      'A running program in memory',
      'A blueprint that defines the attributes and methods of objects',
      'A variable that stores multiple values',
      'A type of loop structure',
    ],
    answer: 'A blueprint that defines the attributes and methods of objects',
    explanation: 'A class is a template; objects are the actual instances created from that template.',
  },
  {
    prompt: 'What is the term for a specific instance created from a class?',
    options: ['Method', 'Attribute', 'Object', 'Constructor'],
    answer: 'Object',
    explanation: 'An object is a concrete instance of a class occupying memory at runtime.',
  },
  {
    prompt: 'Which access modifier should class attributes normally be declared with to enforce encapsulation?',
    options: ['public', 'protected', 'private', 'static'],
    answer: 'private',
    explanation: 'Private attributes can only be accessed within the class itself, protecting data integrity.',
  },
  {
    prompt: 'What is the purpose of a getter method?',
    options: [
      'To create a new object',
      'To delete an object from memory',
      'To retrieve the value of a private attribute',
      'To initialise attributes when an object is created',
    ],
    answer: 'To retrieve the value of a private attribute',
    explanation: 'A getter (accessor) method returns the value of a private attribute to outside code.',
  },
  {
    prompt: 'In a UML class diagram, what does the − (minus) symbol before an attribute name indicate?',
    options: ['The attribute is static', 'The attribute is private', 'The attribute is optional', 'The attribute is inherited'],
    answer: 'The attribute is private',
    explanation: 'In UML notation, − means private and + means public.',
  },
  {
    prompt: 'How many objects can be created from a single class?',
    options: ['Exactly one', 'Exactly two', 'As many as needed', 'None — classes are only for documentation'],
    answer: 'As many as needed',
    explanation: 'A class is a reusable blueprint; you can instantiate it as many times as required.',
  },
  {
    prompt: 'Which naming convention is correct for a class called "bank account"?',
    options: ['bank_account', 'bankaccount', 'BankAccount', 'BANKACCOUNT'],
    answer: 'BankAccount',
    explanation: 'Class names use PascalCase (each word capitalised, no underscores) in most OOP languages.',
  },
  {
    prompt: 'What does encapsulation achieve in OOP?',
    options: [
      'It allows a class to inherit from another class',
      'It hides internal data and controls access through methods',
      'It allows the same method name to behave differently',
      'It creates multiple copies of the same class',
    ],
    answer: 'It hides internal data and controls access through methods',
    explanation: 'Encapsulation bundles data and methods together while restricting direct access to internal state.',
  },
  {
    prompt: 'A UML class diagram has three horizontal sections. What does the MIDDLE section contain?',
    options: ['Methods', 'The class name', 'Attributes', 'Inherited classes'],
    answer: 'Attributes',
    explanation: 'The UML layout is: top = class name, middle = attributes, bottom = methods.',
  },
  {
    prompt: 'Which of the following is an example of an OBJECT (not a class)?',
    options: ['Car', 'Student', 'myStudent (a specific student record in memory)', 'Animal'],
    answer: 'myStudent (a specific student record in memory)',
    explanation: 'Car, Student, and Animal are class names (blueprints). myStudent is an instance — a specific object.',
  },
];

const OopClassesObjects = () => (
  <CapsSubjectTopic
    title="OOP: Classes and Objects"
    subtitle="Designing classes, creating objects and understanding attributes"
    learnSteps={learnSteps}
    task="gr11-oop-classes-objects-t1"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default OopClassesObjects;
