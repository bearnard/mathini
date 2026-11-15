import type { ReactNode } from 'react';
import CodeBlock from '../../../../../components/subjects/CodeBlock';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { setAgeValidated } from '../../../../../components/diagrams/it/g11delphi';

// The setter outcomes below come from g11delphi.ts (tested in g11delphi.test.ts).
const slide = (children: ReactNode) => <div className="space-y-4">{children}</div>;
const kept = setAgeValidated(3, -5);
const changed = setAgeValidated(3, 5);

export const learnSteps: LearnStep[] = [
  {
    title: 'Classes and objects',
    content: slide(
      <>
        <Rule>A class is a blueprint that lists the attributes and methods its objects have. An object is one instance built from that blueprint. Attributes go in the private section so only the class can change them, and the methods other code may call go in the public section.</Rule>
        <CodeBlock language="pascal" code={`type
  TDog = class
  private
    fName: string;
    fAge: Integer;
  public
    constructor Create(AName: string; AAge: Integer);
    function GetAge: Integer;
    procedure SetAge(AAge: Integer);
    procedure Bark;
  end;`} />
        <Worked
          title="Reading the declaration"
          steps={['TDog = class ... end declares the blueprint.', 'fName and fAge are private attributes; the f marks a field.', 'Create, GetAge, SetAge and Bark are public methods that other code can call.']}
        />
        <Mistake>Putting attributes in the public section, which lets any code change them without a check.</Mistake>
      </>,
    ),
  },
  {
    title: 'Constructors: constructor Create',
    content: slide(
      <>
        <Rule>A constructor runs when an object is created and gives its attributes their first values. In Delphi it is written with the word constructor and is usually called Create. A parameterised constructor takes arguments; a default one takes none.</Rule>
        <CodeBlock language="pascal" code={`constructor TDog.Create(AName: string; AAge: Integer);
begin
  inherited Create;
  fName := AName;
  fAge := AAge;
end;

var
  dog: TDog;
begin
  dog := TDog.Create('Rex', 3);`} />
        <Worked
          title="Creating an object"
          steps={['TDog.Create(...) is called on the class, not on a variable.', 'It builds the object and sets fName to Rex and fAge to 3.', 'The new object is stored in the variable dog, and dog.Free releases it later.']}
        />
        <Mistake>Calling dog.Create on a variable that holds no object yet. Always call the constructor on the class name.</Mistake>
      </>,
    ),
  },
  {
    title: 'Methods: procedures and functions',
    content: slide(
      <>
        <Rule>A procedure performs an action and returns nothing. A function calculates a value and returns it through Result. A method&apos;s signature is its name plus its parameter list.</Rule>
        <CodeBlock language="pascal" code={`procedure TDog.Bark;
begin
  ShowMessage(fName + ' says Woof!');
end;

function TDog.GetAge: Integer;
begin
  Result := fAge;
end;`} />
        <Worked
          title="Calling both kinds"
          steps={['dog.Bark; carries out the action and gives nothing back.', 'iAge := dog.GetAge; stores the returned value in a variable.', 'Both are called with the object name, a dot and the method name.']}
        />
        <Mistake>Trying to store the result of a procedure in a variable. Only a function returns a value.</Mistake>
      </>,
    ),
  },
  {
    title: 'Self: the current object',
    content: slide(
      <>
        <Rule>Inside a method, Self refers to the object the method was called on. Use it when a parameter has the same name as an attribute, so Delphi knows which one you mean.</Rule>
        <CodeBlock language="pascal" code={`constructor TPerson.Create(Name: string);
begin
  Self.Name := Name;
end;`} />
        <Worked
          title="Two different Names"
          steps={['The parameter Name is the value that was passed in.', 'Self.Name is the attribute that belongs to the new object.', 'The assignment copies the first into the second.']}
        />
        <Mistake>Writing Name := Name. It assigns the parameter to itself and the attribute never changes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Getters and setters',
    content: slide(
      <>
        <Rule>A getter returns a private attribute and a setter changes it. A setter can validate first, so the object never holds invalid data.</Rule>
        <CodeBlock language="pascal" code={`procedure TDog.SetAge(AAge: Integer);
begin
  if AAge >= 0 then
    fAge := AAge;
end;`} />
        <Worked
          title="A dog aged 3"
          steps={[<>SetAge(5) is valid, so the age becomes {changed}.</>, <>SetAge(-5) fails the check, so the age stays {kept}.</>, 'Other code can only reach fAge through these two methods.']}
        />
        <Mistake>Skipping the check in the setter. Then a negative age can be stored.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which section of a class should hold the attributes?</>,
          <>Which keyword starts the declaration of an object-creating method in Delphi?</>,
          <>A dog has age {kept} and SetAge(-1) is called. What is its age afterwards?</>,
          <>What does Self mean inside a method?</>,
        ]}
        answers={[
          <>The private section.</>,
          <>constructor, usually with the name Create.</>,
          <>{setAgeValidated(kept, -1)}, because the negative value is rejected.</>,
          <>The current object, the one the method was called on.</>,
        ]}
      />,
    ),
  },
];
