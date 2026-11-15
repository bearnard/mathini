import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem } from '../../_shared/types';
import { learnSteps } from './Slides';

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
    prompt: 'In Delphi, what makes a constructor different from a regular method?',
    options: ['It always has a return type of Integer', 'It can be called only once in a program', 'It is declared with constructor, usually named Create', 'It must always be declared in the private section'],
    answer: 'It is declared with constructor, usually named Create',
    explanation: 'In Delphi a constructor is declared with the keyword constructor, usually named Create, and it is called on the class, as in TDog.Create. It has no return type.',
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
    prompt: 'What does Self refer to inside a method?',
    options: [
      'The class definition',
      'The first object ever created from the class',
      'The current object on which the method was called',
      'The parent class',
    ],
    answer: 'The current object on which the method was called',
    explanation: 'Self always refers to the specific object instance the method is operating on.',
  },
  {
    prompt: 'A setter method for age contains: "if AAge >= 0 then fAge := AAge". Why is that check included?',
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
    prompt: 'Which section of a Delphi class should normally hold the attributes?',
    options: ['The public section, open to all code', 'The private section, so only the class changes them', 'The uses clause at the top of the unit', 'The begin..end block of the form'],
    answer: 'The private section, so only the class changes them',
    explanation: 'Attributes go in the private section. Other code reaches them only through public methods such as getters and setters, which can validate the data.',
  },
  {
    prompt: 'Which statement correctly creates a TDog object named dog?',
    options: ["dog := TDog.Create('Rex', 3);", "dog.Create('Rex', 3);", "dog := Create(TDog, 'Rex', 3);", "TDog := dog.Create('Rex', 3);"],
    answer: "dog := TDog.Create('Rex', 3);",
    explanation: 'The constructor is called on the class name, and the object it returns is assigned to the variable.',
  },
  {
    prompt: 'If a class has both a default and a parameterised constructor, which one runs when you write: myDog := TDog.Create(\'Rex\', \'Lab\', 3)?',
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
