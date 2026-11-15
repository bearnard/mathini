import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

import { ToolChoice } from '../../../../../components/diagrams/cat/Cat12Pictures';

const learnSteps: LearnStep[] = [
  {
    title: "Thinking like a solution developer",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Solution development means choosing the right application feature to solve the problem efficiently. A spreadsheet is ideal for calculations and modelling, a database is best for storing structured records and a word processor is used to communicate polished findings. Grade 12 learners should justify not just how a task is done, but why that tool is appropriate."</p>
        <ToolChoice />
      </div>
    ),
  },
  {
    title: "Advanced spreadsheet techniques",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Advanced spreadsheet work includes nested IF statements, lookups, date functions, text functions and troubleshooting formulas. Learners must read the scenario carefully so that the logic matches the business rule or school rule being applied. Error checking is important because one wrong reference or bracket can affect the entire worksheet."</p>
      </div>
    ),
  },
  {
    title: "Database and document outputs",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Database queries and reports can be used to produce filtered information, while word processors can present the findings in a polished format. Practical CAT tasks often require importing or integrating results from one application into another. Success depends on accuracy first, then presentation."</p>
      </div>
    ),
  },
  {
    title: "Information management across applications",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Information management means collecting, processing and presenting information logically. In advanced CAT tasks, this includes deciding what data is relevant, which application should process it and how to present it to the target audience. Good integration avoids duplication and keeps the final solution focused on the original problem."</p>
      </div>
    ),
  },
  {
    title: "Breaking tasks down and querying first",
    content: (
      <div className="space-y-4">
        <GapRule>{"Faced with a big practical, split it into small pieces you can finish one by one. In databases, build a query that picks out exactly the records you need, then base the report on it."}</GapRule>
        <GapWorked title={"Plan a practical task"} steps={["Split the task: database, spreadsheet, document.", "Run a query that selects the right records.", "Base the report on that query."]} />
        <GapMistake>{"Starting with the report and filtering the records by hand later."}</GapMistake>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "Which application is usually the best choice for storing many records about customers and running queries?",
    options: ["Word processor", "Database", "Presentation software", "Media player"],
    answer: 1,
    explanation: "Databases are designed to store structured records and retrieve them using queries.",
  },
  {
    prompt: "Why is it important to check bracket order in a spreadsheet formula?",
    options: ["It changes the screen resolution", "It affects how the formula is calculated", "It creates a chart automatically", "It deletes blank cells"],
    answer: 1,
    explanation: "The position of brackets determines the order in which the spreadsheet evaluates the formula.",
  },
  {
    prompt: "What is the advantage of importing calculated data into a report document?",
    options: ['It allows accurate results to be presented in a polished format', 'It removes the need to save the files on the computer afterwards', 'It changes the database into a web browser', 'It prevents spelling errors in the whole document'],
    answer: 0,
    explanation: "Integration lets the application that is best for calculation feed the application that is best for presentation.",
  },
  {
    prompt: "Which statement best describes information management?",
    options: ["Typing as much data as possible into one file", "Collecting, processing and presenting relevant information", "Using only printed sources", "Avoiding all calculations"],
    answer: 1,
    explanation: "Information management is about working with relevant information so that it becomes useful.",
  },
  {
    prompt: "What should a learner do first when a practical task seems complex?",
    options: ['Guess the answer format then start typing in any application', 'Break the task into smaller application-specific parts', 'Delete the source files then begin the task again', 'Skip the instructions then use a familiar tool'],
    answer: 1,
    explanation: "Breaking the task into smaller parts helps you decide which application and feature to use at each stage.",
  },
  {
    prompt: "Which spreadsheet feature is most useful for returning a category based on several conditions?",
    options: ["Nested IF", "Page break preview", "Slide transition", "Track changes"],
    answer: 0,
    explanation: "Nested IF statements are used when more than one condition must be tested.",
  },
  {
    prompt: "Why is a query often run before creating a database report?",
    options: ['The query selects the correct records to appear in the report', 'Queries add page numbers to the finished report', 'Reports cannot contain headings unless a query is first run on them', 'Queries replace the need for tables in the database'],
    answer: 0,
    explanation: "The query filters and sorts the data so that the report displays the intended results.",
  },
  {
    prompt: "Which approach shows good solution development?",
    options: ['Choosing tools only because they look familiar to you', 'Selecting features that match the problem and checking the output carefully', 'Choosing tools because they look familiar rather than because they fit in the practical task', 'Ignoring data quality issues because time is short'],
    answer: 1,
    explanation: "Good solution development links the problem, the tool choice and the quality of the final result.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const SolutionDevelopmentAdvancedApplications = () => (
  <CapsSubjectTopic
    title="Solution Development in Advanced Applications"
    subtitle="Integrated spreadsheet, word-processing and database problem-solving"
    learnSteps={learnSteps}
    task="gr12-solution-development-advanced-applications-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default SolutionDevelopmentAdvancedApplications;
