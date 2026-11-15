import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: "Fields, records and data quality",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"A database stores information in tables made up of fields and records. Good design uses sensible field names, suitable data types and validation rules so that the stored information stays accurate and useful. Learners should recognise that poor data quality leads to incorrect reports, duplicated information and unreliable decisions."</p>
      </div>
    ),
  },
  {
    title: "Queries for selecting information",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Queries allow the user to retrieve only the records that match specific criteria. In Grade 12 CAT, you may need to combine criteria, use comparison operators, sort records or search for partial matches. A query is powerful because it works dynamically on the stored data instead of manually searching through every record."</p>
      </div>
    ),
  },
  {
    title: "Reports and presentation of data",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Reports present database information in a readable format. Good reports use grouping, sorting, headings and calculated values to make patterns easy to interpret. A report is different from a query because it focuses on presentation, often for printing or sharing, while the query focuses on selecting the right records first."</p>
      </div>
    ),
  },
  {
    title: "Database thinking in PAT tasks",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"During the PAT, database work must support the overall investigation. Tables should be relevant to the problem, fields should capture meaningful data and outputs should answer the research question. A well-designed database is not just technically correct; it helps the learner analyse information and communicate findings clearly."</p>
      </div>
    ),
  },
  {
    title: "Grouping and calculated fields in reports",
    content: (
      <div className="space-y-4">
        <GapRule>{"Grouping gathers related records under a heading so that subtotals are easy to find. A calculated field works out values like totals or percentages itself, so nothing is typed by hand."}</GapRule>
        <GapWorked title={"Report on sales by province"} steps={["Group the records by Province.", "Add a calculated field: Total = Quantity * UnitPrice.", "The report shows each province's records and a total for the group."]} />
        <GapMistake>{"Typing totals by hand instead of using a calculated field."}</GapMistake>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "In a database table of learners, what is a record?",
    options: ["A single column such as Surname", "A complete row for one learner", "The name of the table only", "A formula used in a spreadsheet"],
    answer: 1,
    explanation: "A record is one complete row containing all the fields for a single item, such as one learner.",
  },
  {
    prompt: "Which field type is most suitable for storing a learner's date of birth?",
    options: ["Currency", "Date/Time", "Attachment only", "Hyperlink"],
    answer: 1,
    explanation: "Date/Time is designed for storing dates so that sorting and date calculations can work correctly.",
  },
  {
    prompt: "What is the purpose of a query?",
    options: ['To change the colour scheme of the database window', 'To retrieve records that match specific criteria', 'To remove the need for tables in the database', 'To format paragraphs in a Word document'],
    answer: 1,
    explanation: "Queries are used to find and display only the records that meet chosen conditions.",
  },
  {
    prompt: "A report groups sales by province and shows totals. Why is grouping useful?",
    options: ['It hides the underlying data so nobody can read it', 'It organises related records so summaries are easier to read', 'It turns the report into an editable spreadsheet file', 'It removes the need for any calculations to be made in the report'],
    answer: 1,
    explanation: "Grouping places similar records together and makes summaries such as totals clearer.",
  },
  {
    prompt: "Which action best improves data quality in a database?",
    options: ["Allowing every field to remain blank", "Using validation rules and correct data types", "Saving the file in many folders", "Typing notes in the table heading"],
    answer: 1,
    explanation: "Validation rules and suitable data types reduce incorrect or inconsistent entries.",
  },
  {
    prompt: "If you want to show only records where Amount is greater than 500, which tool should you use first?",
    options: ["A query with criteria", "A wallpaper setting", "A screen magnifier", "A mail merge"],
    answer: 0,
    explanation: "A query with the correct criteria filters the records to show only the matching values.",
  },
  {
    prompt: "Why is a calculated field useful in a report?",
    options: ['It can display results such as totals or percentages automatically', 'It changes the operating system settings of the computer used to print', 'It stores sound clips inside the report layout', 'It prevents users from sorting the report records'],
    answer: 0,
    explanation: "Calculated fields automate values like totals, averages or percentages in outputs.",
  },
  {
    prompt: "Which statement about a PAT database is best?",
    options: ['Any table is acceptable provided it has many records', 'The database should store relevant data that helps answer the investigation', 'Tables are mainly needed to make the file look decorative for markers in the file', 'Reports should avoid headings so they look simpler'],
    answer: 1,
    explanation: "The PAT database should support the research task and make the information easier to analyse.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const AdvancedDatabases = () => (
  <CapsSubjectTopic
    title="Advanced Databases"
    subtitle="Queries, reports and structured data for real scenarios"
    learnSteps={learnSteps}
    task="gr12-advanced-databases-t1"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default AdvancedDatabases;
