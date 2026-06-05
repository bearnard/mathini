'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/it/term1/advanced-oop-inheritance-polymorphism/diagram.webp", alt: "Advanced OOP: Inheritance and Polymorphism" },
    title: 'Designing class hierarchies',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Inheritance starts with identifying the most general class and moving all shared fields and methods into that parent.
          Child classes then add specialised behaviour without repeating code.
        </p>
        <CodeBlock language="delphi" code={`type
  TVehicle = class
  protected
    FRegistration: string;
  public
    constructor Create(const ARegistration: string);
    function Description: string; virtual;
  end;

  TCar = class(TVehicle)
  public
    function Description: string; override;
  end;

constructor TVehicle.Create(const ARegistration: string);
begin
  FRegistration := ARegistration;
end;

function TVehicle.Description: string;
begin
  Result := 'Vehicle: ' + FRegistration;
end;

function TCar.Description: string;
begin
  Result := 'Car registration: ' + FRegistration;
end;`} />
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Concept: Inheritance</p>
          <p className="text-slate-600 mt-1">
            A child class should represent a true is-a relationship. If the classes are only loosely related,
            composition is usually a better design choice.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Method overriding and specialised behaviour',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In Delphi, polymorphic behaviour depends on a parent method being declared <strong>virtual</strong> or <strong>abstract</strong>
          and the child method using <strong>override</strong>. The method call stays the same, but the executed code depends on the actual object.
        </p>
        <CodeBlock language="delphi" code={`type
  TShape = class
  public
    function Area: Real; virtual; abstract;
  end;

  TCircle = class(TShape)
  private
    FRadius: Real;
  public
    constructor Create(ARadius: Real);
    function Area: Real; override;
  end;

constructor TCircle.Create(ARadius: Real);
begin
  FRadius := ARadius;
end;

function TCircle.Area: Real;
begin
  Result := PI * Sqr(FRadius);
end;`} />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            If the question asks why a subclass method is used, mention <strong>dynamic binding</strong> at runtime,
            not just that the object “has a different name”.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Polymorphism in practice',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A parent reference can store many different child objects. This makes loops and collections powerful because the same method call
          can produce different output for each object.
        </p>
        <CodeBlock language="delphi" code={`var
  i: Integer;
  arrAnimals: array[1..2] of TAnimal;
begin
  arrAnimals[1] := TDog.Create('Rex');
  arrAnimals[2] := TCat.Create('Misty');

  for i := 1 to 2 do
    ShowMessage(arrAnimals[i].Speak);
end;`} />
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>The array type is the parent class, so different subclasses can be stored together.</li>
          <li>The <strong>Speak</strong> call is identical each time, but the result changes per object.</li>
          <li>This pattern is frequently tested in output-tracing questions.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Abstract thinking and UML notation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          UML class diagrams help learners visualise inheritance before coding. The parent sits at the top, with specialised child classes below it.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
          <p>          TShape</p>
          <p>            △</p>
          <p>      ┌─────┴─────┐</p>
          <p>   TCircle    TRectangle</p>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
          <p className="font-semibold text-emerald-800">Key Concept: Abstraction</p>
          <p className="text-slate-600 mt-1">
            The parent class captures what all subclasses have in common. Child classes then supply the details that make each one unique.
          </p>
        </div>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "What is the main purpose of inheritance in OOP?",
    options: ["To force every class to have the same constructor", "To reuse and extend existing class behaviour", "To convert all data into strings", "To stop methods from being overridden"],
    answer: 1,
    explanation: "Inheritance supports reuse by allowing a child class to build on a parent class instead of repeating code.",
  },
  {
    prompt: "If a subclass provides its own version of a method from the parent class, what is this called?",
    options: ["Instantiation", "Overloading", "Overriding", "Compilation"],
    answer: 2,
    explanation: "Overriding happens when a child class replaces an inherited method with a more specific version.",
  },
  {
    prompt: "What does polymorphism allow a programmer to do?",
    options: ["Store only one object in memory", "Use one parent reference for different child objects", "Prevent any method calls on subclasses", "Remove constructors from a class hierarchy"],
    answer: 1,
    explanation: "With polymorphism, one parent-type reference can refer to different subclass objects.",
  },
  {
    prompt: "Which statement about an abstract parent design is most accurate?",
    options: ["It stores no shared behaviour at all", "It should only contain private constructors", "It captures common features that specialised subclasses can extend", "It can only be used for databases"],
    answer: 2,
    explanation: "An abstract parent design groups common fields and methods so subclasses can specialise the shared model.",
  },
  {
    prompt: "When a child object is created, why might the parent constructor still be called?",
    options: ["To remove all inherited methods", "To initialise shared parent data correctly", "To convert the child into the parent class permanently", "To stop polymorphism from working"],
    answer: 1,
    explanation: "The parent constructor helps set up inherited state such as names, IDs or other shared values.",
  },
  {
    prompt: "A loop stores Dog and Cat objects in an Animal array and calls makeSound() on each item. What concept is being demonstrated?",
    options: ["Encapsulation", "Polymorphism", "Iteration only", "Normalisation"],
    answer: 1,
    explanation: "The same method call can produce different behaviour because each array item is a different subclass object.",
  },
  {
    prompt: "Which UML symbol normally indicates inheritance?",
    options: ["A dashed circle between classes", "A line with a hollow triangle pointing to the parent class", "A double rectangle around the subclass", "A lightning bolt between methods"],
    answer: 1,
    explanation: "UML class diagrams show inheritance with a line ending in a hollow triangle that points to the superclass.",
  },
  {
    prompt: "Which design choice best justifies using inheritance?",
    options: ["Two classes share important common attributes and behaviour", "Two variables happen to have the same value", "A program needs more comments", "A text file must be sorted alphabetically"],
    answer: 0,
    explanation: "Inheritance is justified when classes are genuinely related and can share common structure and behaviour.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const AdvancedOopInheritancePolymorphism = () => (
  <CapsSubjectTopic
    title="Advanced OOP: Inheritance and Polymorphism"
    subtitle="Extending classes and predicting object behaviour across hierarchies"
    learnSteps={learnSteps}
    task="gr12-advanced-oop-inheritance-polymorphism-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default AdvancedOopInheritancePolymorphism;
