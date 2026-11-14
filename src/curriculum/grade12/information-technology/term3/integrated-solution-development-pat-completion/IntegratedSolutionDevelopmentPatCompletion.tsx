'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Planning before coding',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          PAT success begins with planning evidence. The learner should identify the problem, users, required outputs and data structures before writing the first line of code.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-4">
            <div className="rounded-xl bg-white p-3 shadow-sm">Problem statement</div>
            <div className="rounded-xl bg-white p-3 shadow-sm">Class diagram</div>
            <div className="rounded-xl bg-white p-3 shadow-sm">Form sketch</div>
            <div className="rounded-xl bg-white p-3 shadow-sm">Test plan</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Combining program components',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In a strong integrated solution, forms, classes and database operations work together in a predictable flow.
        </p>
        <CodeBlock language="delphi" code={`procedure TfrmLearners.btnSaveClick(Sender: TObject);
var
  objLearner: TLearner;
begin
  objLearner := TLearner.Create(edtName.Text, cmbGrade.Text);
  SaveLearnerToDatabase(objLearner);
  ShowMessage('Learner saved successfully.');
end;`} />
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Concept: Consistency</p>
          <p className="text-slate-600 mt-1">
            Field names, validation rules and data types should match across the interface, code and database tables.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Testing, documentation and refinement',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A PAT is assessed on process as well as product. Test evidence, screenshots, user instructions and bug fixes show that the solution improved over time.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">Testing</p>
            <p className="mt-1 text-slate-600">Record normal, abnormal and boundary cases with expected and actual results.</p>
          </div>
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
            <p className="font-semibold text-purple-800">Documentation</p>
            <p className="mt-1 text-slate-600">Explain how to install, use and test the system clearly.</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <p className="font-semibold text-amber-800">Refinement</p>
            <p className="mt-1 text-slate-600">Fix issues, improve usability and note why each improvement matters.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Completing PAT evidence',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Final submission should prove both what was built and how it was built. Missing evidence can cost marks even if the program itself works.
        </p>
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Keep dated backups and organised folders so that you can prove progress, recover the correct version and avoid last-minute confusion.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
          <p>Planning → Implementation → Integration → Testing → Reflection → Final evidence</p>
        </div>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "What type of testing is most relevant after separate modules are combined into one system?",
    options: ["Unit testing only", "Integration testing", "Colour testing", "Font testing"],
    answer: 1,
    explanation: "Integration testing checks whether the combined modules work correctly together.",
  },
  {
    prompt: "Why is a class diagram useful before coding begins?",
    options: ["It helps plan attributes, methods and relationships logically", "It replaces the need for any code", "It permanently fixes runtime errors", "It stores all database records"],
    answer: 0,
    explanation: "A class diagram helps you think through structure and relationships before implementation.",
  },
  {
    prompt: "Which evidence is most appropriate for a PAT submission?",
    options: ["Only the final executable file", "Planning, code, test evidence, outputs and reflection", "A single password list", "A blank report cover page"],
    answer: 1,
    explanation: "PAT assessment looks at both the finished product and the documented development process.",
  },
  {
    prompt: "Why should backup copies of the project use clear version names or dates?",
    options: ["To make every copy identical and impossible to distinguish", "To help track progress and recover the correct working version", "To remove the need for testing", "To stop forms from loading"],
    answer: 1,
    explanation: "Versioned backups make it easier to restore the right file and show development over time.",
  },
  {
    prompt: "Who is the best person to perform user acceptance testing?",
    options: ["The intended user or someone representing the user context", "Only the compiler", "A random unrelated database table", "A network switch"],
    answer: 0,
    explanation: "User acceptance testing checks whether the solution meets real user needs, so a user perspective is important.",
  },
  {
    prompt: "Why should field names and program variables stay consistent across the interface and database?",
    options: ["It reduces confusion and mapping mistakes during integration", "It makes reports impossible to design", "It removes the need for classes", "It guarantees internet access"],
    answer: 0,
    explanation: "Consistent naming helps data flow correctly across forms, code and storage.",
  },
  {
    prompt: "What does a well-completed PAT usually demonstrate?",
    options: ["Only fast typing speed", "Evidence of planning, implementation, testing and evaluation", "That no mistakes were ever made", "That theory topics can be ignored"],
    answer: 1,
    explanation: "A strong PAT shows the full development cycle, not just the end result.",
  },
  {
    prompt: "A bug appears only after the login screen is connected to the database. What does this suggest?",
    options: ["The issue may lie in the interaction between components", "The database is irrelevant", "The class diagram should be deleted", "No further testing is needed"],
    answer: 0,
    explanation: "Problems that appear after parts are linked often indicate an integration issue rather than an isolated unit problem.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const IntegratedSolutionDevelopmentPatCompletion = () => (
  <CapsSubjectTopic
    title="Integrated Solution Development and PAT Completion"
    subtitle="Combining planning, coding, databases and evidence into one complete solution"
    learnSteps={learnSteps}
    task="gr12-integrated-solution-development-pat-completion-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default IntegratedSolutionDevelopmentPatCompletion;
