import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { demo } from '../../_shared/classFacts';

const shown = demo();

export const CLASS_CODE = `type
  TLearner = class
  private
    fName : string;
    fMark : integer;
  public
    constructor Create(sName : string; iMark : integer);
    function getName : string;
    function getMark : integer;
    procedure setMark(iNewMark : integer);
    function isDistinction : boolean;
    function toString : string;
  end;`;

export const METHODS_CODE = `constructor TLearner.Create(sName : string; iMark : integer);
begin
  fName := sName;
  fMark := iMark;
end;

function TLearner.getMark : integer;
begin
  Result := fMark;
end;

procedure TLearner.setMark(iNewMark : integer);
begin
  if (iNewMark >= 0) and (iNewMark <= 100) then
    fMark := iNewMark;
end;

function TLearner.isDistinction : boolean;
begin
  Result := fMark >= 75;
end;

function TLearner.toString : string;
begin
  Result := fName + ': ' + IntToStr(fMark);
end;`;

export const USE_CODE = `var
  objLearner : TLearner;
begin
  objLearner := TLearner.Create('Zinzi', 72);
  ShowMessage(objLearner.toString);
  objLearner.setMark(80);
  ShowMessage(BoolToStr(objLearner.isDistinction, True));
  objLearner.setMark(120);
  ShowMessage(IntToStr(objLearner.getMark));
end;`;

export const learnSteps: LearnStep[] = [
  {
    title: 'Class and object',
    content: (
      <div className="space-y-4">
        <Rule>A class is a blueprint that describes a kind of thing. An object is one real thing made from the class. Each object has its own values.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The class TLearner describes a learner. Its <strong>attributes</strong> (fields) are fName and fMark: the data each learner holds.</li>
          <li>Its <strong>methods</strong> are the actions it can do, such as getMark and setMark.</li>
          <li>An <strong>object</strong> is one learner made from the class, for example Zinzi with a mark of 72. Another object can be Sipho with a mark of 65.</li>
        </ul>
        <Mistake>The class is not the object. You cannot use the class itself to store Zinzi&rsquo;s mark. You must first make an object from it.</Mistake>
      </div>
    ),
  },
  {
    title: 'Declaring the class',
    content: (
      <div className="space-y-4">
        <Rule>A class is declared in a type section. Attributes are private, so only the methods of the class can change them. The methods are public.</Rule>
        <CodeBlock language="pascal" code={CLASS_CODE} />
        <p className="text-left text-slate-700">By convention an attribute starts with f (fName, fMark), and each parameter starts with a letter for its type (s for string, i for integer).</p>
      </div>
    ),
  },
  {
    title: 'The constructor and making an object',
    content: (
      <div className="space-y-4">
        <Rule>A constructor, named Create, runs when an object is made. It gives the attributes their first values. To instantiate (make) an object, call Create on the class and keep the result in a variable.</Rule>
        <CodeBlock language="pascal" code={`constructor TLearner.Create(sName : string; iMark : integer);
begin
  fName := sName;
  fMark := iMark;
end;

objLearner := TLearner.Create('Zinzi', 72);`} />
        <Mistake>Using objLearner before it is created. A variable of type TLearner holds nothing until Create is called, and using it then gives a run-time error.</Mistake>
      </div>
    ),
  },
  {
    title: 'Accessor, mutator and auxiliary methods',
    content: (
      <div className="space-y-4">
        <Rule>Methods have different jobs. An accessor gets a value, a mutator sets a value, and an auxiliary method does another job, such as a calculation or a test.</Rule>
        <CodeBlock language="pascal" code={METHODS_CODE} />
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Accessor</strong> (getMark): returns an attribute unchanged.</li>
          <li><strong>Mutator</strong> (setMark): changes an attribute, and can check the new value first. Here an impossible mark, one outside 0 to 100, is ignored.</li>
          <li><strong>Auxiliary</strong> (isDistinction, toString): works with the attributes to give a result.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Using the object: a trace',
    content: (
      <div className="space-y-4">
        <Rule>Call a method with the name of the object, a dot, and the method. The object keeps its values between the calls.</Rule>
        <CodeBlock language="pascal" code={USE_CODE} />
        <Worked
          title="What each message shows"
          steps={shown.map((s) => <><strong>{s.code}</strong> shows <strong>{s.shows}</strong>.</>)}
        />
        <p className="text-left text-sm text-slate-600">The call setMark(120) was ignored, so the mark stayed 80.</p>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is the difference between a class and an object?</>,
          <>What is the name of a constructor in Delphi?</>,
          <>Which kind of method changes an attribute?</>,
          <>Why does setMark(120) not change the mark?</>,
        ]}
        answers={[
          <>A class is the blueprint, an object is one thing made from it.</>,
          <>Create.</>,
          <>A mutator.</>,
          <>The mutator only accepts a mark from 0 to 100.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a class?',
    options: ['One real object with its own values', 'A variable that holds a number', 'A message shown to the user', 'A blueprint for a kind of object'],
    answer: 'A blueprint for a kind of object',
    explanation: 'A class describes the attributes and methods of a kind of thing. Objects are made from it.',
  },
  {
    prompt: 'What is an object?',
    options: ['The blueprint of a class', 'One thing made from a class', 'A method that returns a value', 'The type section of the unit'],
    answer: 'One thing made from a class',
    explanation: 'An object is an instance of a class, with its own values for the attributes.',
  },
  {
    prompt: 'Which are the attributes of the class TLearner?',
    options: ['getMark and setMark', 'Create and toString', 'fName and fMark', 'objLearner and TLearner'],
    answer: 'fName and fMark',
    explanation: 'Attributes (fields) hold the data. The others are methods or names of types and variables.',
  },
  {
    prompt: 'Why are the attributes declared as private?',
    options: ['Every unit may change them at will', 'They are then stored in a text file', 'Only class methods can change them', 'They are then shown on the main form'],
    answer: 'Only class methods can change them',
    explanation: 'Private attributes can be reached only through the methods, so the class controls its own data.',
  },
  {
    prompt: 'What is the name of a constructor in Delphi?',
    options: ['Set up', 'Create', 'Build it', 'Make it'],
    answer: 'Create',
    explanation: 'A Delphi constructor is called Create. It gives the attributes their first values.',
  },
  {
    prompt: 'Which statement makes an object of the class TLearner?',
    options: ["objLearner := TLearner.New('Zinzi', 72);", "TLearner := objLearner.Create('Zinzi', 72);", "objLearner := TLearner.Create('Zinzi', 72);", "objLearner.Create := 'Zinzi' + 72;"],
    answer: "objLearner := TLearner.Create('Zinzi', 72);",
    explanation: 'Create is called on the class, and the new object is kept in the variable.',
  },
  {
    prompt: 'What does an accessor method such as getMark do?',
    options: ['Changes the value of an attribute', 'Deletes the object from memory', 'Returns an attribute unchanged', 'Declares a new class in the unit'],
    answer: 'Returns an attribute unchanged',
    explanation: 'An accessor gets a value from the object.',
  },
  {
    prompt: 'What does a mutator method such as setMark do?',
    options: ['Returns the attribute as it was kept', 'Creates a new object on each call', 'Changes an attribute with a check', 'Shows a message on the main form'],
    answer: 'Changes an attribute with a check',
    explanation: 'A mutator sets an attribute and can validate the new value first.',
  },
  {
    prompt: 'Which method of TLearner is an auxiliary method?',
    options: ['getName function', 'isDistinction', 'setMark procedure', 'Create constructor'],
    answer: 'isDistinction',
    explanation: 'isDistinction works with the attributes to give a result. It is neither a plain getter nor a setter.',
  },
  {
    prompt: "Using the lesson's object when it has just been made, what does ShowMessage(objLearner.toString) show?",
    options: ['72: Zinzi', 'Zinzi: 72', 'Zinzi 72', 'toString'],
    answer: 'Zinzi: 72',
    explanation: "toString joins fName, ': ' and the mark, so it shows Zinzi: 72.",
  },
  {
    prompt: 'The mark is 72. After setMark(80), what does isDistinction return? (A distinction is 75 or more.)',
    options: ['True', 'False', '80', 'An error'],
    answer: 'True',
    explanation: '80 is at least 75, so isDistinction returns True.',
  },
  {
    prompt: 'The mark is 80. After setMark(120), what does getMark return?',
    options: ['80', '120', '0', '100'],
    answer: '80',
    explanation: 'The mutator ignores a mark above 100, so the mark stays 80.',
  },
  {
    prompt: 'Why does the mutator setMark check the new value?',
    options: ['So that the object is created twice', 'So that the constructor is skipped', 'So that the name is shown in capitals', 'So no impossible mark is stored'],
    answer: 'So no impossible mark is stored',
    explanation: 'Checking in the mutator keeps the data of the object valid.',
  },
  {
    prompt: 'What happens if objLearner.setMark(80) is called before objLearner := TLearner.Create(...)?',
    options: ['The mark of the class is set to 80', 'A run-time error: no object yet', 'Delphi creates the object itself', 'The call is quietly skipped over'],
    answer: 'A run-time error: no object yet',
    explanation: 'The variable holds no object until Create is called, so a method call on it fails.',
  },
];
