'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'User-centred form design',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A good form helps the user complete a task quickly and accurately. Related controls should be grouped together,
          labels must be clear and the tab order should follow a natural flow.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
            <p className="font-semibold text-blue-800">Good design choices</p>
            <p className="mt-1 text-slate-600">Use labels, aligned text boxes, sensible spacing and read-only fields for calculated values.</p>
          </div>
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
            <p className="font-semibold text-rose-800">Common mistakes</p>
            <p className="mt-1 text-slate-600">Crowded layouts, unclear captions and using free-text boxes when a fixed list would be safer.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Events and event handlers',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          GUI programs are event-driven. Code waits for an action such as a button click, then runs the matching event handler.
        </p>
        <CodeBlock language="pascal" code={`procedure TfrmLogin.btnLoginClick(Sender: TObject);
var
  sUsername: string;
begin
  sUsername := edtUsername.Text;
  lblStatus.Caption := 'Welcome, ' + sUsername;
end;`} />
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Explain that the program does not run only once from top to bottom. It waits for events and responds when they happen.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Choosing controls and validating input',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Different controls suit different kinds of data. Validation should happen as soon as the user provides the value.
        </p>
        <CodeBlock language="pascal" code={`procedure TfrmRegister.btnSaveClick(Sender: TObject);
begin
  if Trim(edtName.Text) = '' then
  begin
    ShowMessage('Please enter a name.');
    edtName.SetFocus;
    Exit;
  end;

  if cmbProvince.ItemIndex = -1 then
  begin
    ShowMessage('Select a province from the list.');
    Exit;
  end;
end;`} />
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>Use a text box for free text.</li>
          <li>Use a combo box for one choice from a fixed list.</li>
          <li>Use a check box for yes/no settings.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Separating interface and logic',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The form should collect input and display output, but the real rules and calculations should usually live in a helper method or class.
        </p>
        <CodeBlock language="pascal" code={`procedure TfrmSales.btnCalculateClick(Sender: TObject);
var
  rTotal: Real;
begin
  rTotal := CalculateDiscountedTotal(StrToFloat(edtPrice.Text), chkMember.Checked);
  lblTotal.Caption := FloatToStrF(rTotal, ffFixed, 8, 2);
end;`} />
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
          <p className="font-semibold text-emerald-800">Key Concept: Maintainability</p>
          <p className="text-slate-600 mt-1">
            If the business rule changes, you update one calculation method instead of rewriting many event handlers.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Checking input and keeping logic apart",
    content: (
      <div className="space-y-4">
        <GapRule>{"Check what a user types before it reaches the file or database, so half-filled or impossible records never get stored. Put the real calculations in their own routines instead of burying them inside button events; that makes the code easier to test and change."}</GapRule>
        <GapWorked title={"Improve a button handler"} steps={["btnSaveClick checks that required fields are filled and the numbers are valid.", "The price calculation is in its own function.", "The function can be tested without the form."]} />
        <GapMistake>{"Writing all calculations inside the button click procedure."}</GapMistake>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "In a GUI program, what is a button click?",
    options: ["A compiler error", "An event", "A constructor", "A database query"],
    answer: 1,
    explanation: "A button click is an event that can trigger code in an event handler.",
  },
  {
    prompt: "Which control is most appropriate for displaying a caption such as \"Surname\" next to a text box?",
    options: ["Button", "Label", "Radio button", "Timer"],
    answer: 1,
    explanation: "A label is used to display descriptive text for the user.",
  },
  {
    prompt: "What is the key idea of event-driven programming?",
    options: ["The program only runs once from start to finish with no interaction", "The program reacts to user actions and other events", "The program cannot use methods or classes", "The program automatically ignores incorrect input"],
    answer: 1,
    explanation: "Event-driven programs wait for actions such as clicks, selections or key presses and respond when those events happen.",
  },
  {
    prompt: "Why should user input be validated before saving a record?",
    options: ['To make the screen brighter for the user', 'To reduce invalid or incomplete data entering the system', 'To stop events from firing on the form while data is typed', 'To remove the need for classes in the program'],
    answer: 1,
    explanation: "Validation checks data before it is stored so that errors are caught early.",
  },
  {
    prompt: "Which design choice best improves a data-entry form?",
    options: ["Using unclear labels to save screen space", "Disabling every control until the end of the program", "Grouping related fields and controls together logically", "Replacing all text boxes with images"],
    answer: 2,
    explanation: "Logical grouping helps users understand the form and complete it more accurately.",
  },
  {
    prompt: "Which control is best when a user must choose ONE province from a fixed list?",
    options: ["Plain label", "Combo box", "Image control", "Progress bar"],
    answer: 1,
    explanation: "A combo box is suitable for choosing one item from a predefined list.",
  },
  {
    prompt: "What is the advantage of showing an error message immediately after invalid input?",
    options: ['It gives the user quick feedback so the problem can be fixed at once', 'It guarantees that the data in the database is already correct as soon as it appears', 'It removes the need for testing the program', 'It converts the text box into a label'],
    answer: 0,
    explanation: "Immediate feedback helps the user correct mistakes before moving on.",
  },
  {
    prompt: "Why is it better to keep major calculations outside the GUI event code?",
    options: ["Because interfaces are not allowed to use methods", "Because separating logic improves maintenance and testing", "Because buttons can only call SQL statements", "Because GUI programs never need validation"],
    answer: 1,
    explanation: "Separating logic from interface code makes the program easier to understand, reuse and debug.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const GuiDesignEventDrivenProgramming = () => (
  <CapsSubjectTopic
    title="GUI Design and Event-Driven Programming"
    subtitle="Building user-friendly interfaces and linking controls to program logic"
    learnSteps={learnSteps}
    task="gr12-gui-design-event-driven-programming-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default GuiDesignEventDrivenProgramming;
