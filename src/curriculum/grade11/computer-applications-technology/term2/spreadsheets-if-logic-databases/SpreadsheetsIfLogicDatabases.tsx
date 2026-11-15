import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'IF function and logical operators',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>IF function</strong> returns different values based on whether a condition is true or false.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-mono text-sm text-slate-800 mb-2 break-all">=IF(condition, value_if_true, value_if_false)</p>
          <p className="text-slate-600 text-sm mb-4">Example: <span className="font-mono">=IF(B2&gt;=50,"Pass","Fail")</span></p>
          <p className="font-bold text-slate-800 mb-2">Nesting with AND/OR:</p>
          <p className="font-mono text-sm text-slate-700 break-all">=IF(AND(B2&gt;=50,C2&gt;=50),"Pass","Fail")</p>
          <p className="text-slate-500 text-xs mt-1">Both conditions must be true for AND; at least one for OR.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'COUNTIF, SUMIF, and VLOOKUP',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Conditional functions and lookup functions are essential Grade 11 spreadsheet skills.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">=COUNTIF(range, criteria)</strong>
            <p className="text-slate-600 text-sm">Counts cells that meet a condition. E.g. =COUNTIF(B2:B31,"&gt;=50") counts passes.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">=SUMIF(range, criteria, sum_range)</strong>
            <p className="text-slate-600 text-sm">Adds cells that meet a condition. E.g. total sales for a specific region.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">=VLOOKUP(value, table, col, FALSE)</strong>
            <p className="text-slate-600 text-sm">Looks up a value in the first column and returns data from another column. FALSE = exact match.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Data validation and conditional formatting',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          These features keep data accurate and highlight patterns visually.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Data validation</strong>
            <p className="text-slate-600">Restricts what can be entered in a cell. E.g. only whole numbers between 0 and 100 for marks, or a drop-down list of provinces.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Conditional formatting</strong>
            <p className="text-slate-600">Changes a cell's colour/style based on its value. E.g. highlight all marks below 50 in red automatically.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Database queries: criteria and wildcards',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a database, <strong>queries</strong> filter records using criteria rows and wildcard characters.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Criteria examples</strong>
            <p className="text-slate-600 text-sm">
              "Cape Town" — exact match<br />
              &gt;100 — greater than 100<br />
              Between 50 And 75 — range<br />
              Is Not Null — field must have a value
            </p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Wildcard characters</strong>
            <p className="text-slate-600 text-sm">
              * (asterisk) — any number of characters. Like "Van*" matches Van der Merwe, Vanzyl.<br />
              ? (question mark) — exactly one character. Like "B?y" matches Bay, Boy, Buy.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Rules for entries and wildcard criteria",
    content: (
      <div className="space-y-4">
        <GapRule>{"Validation stops wrong data at the door: a Mark field can be restricted to whole numbers from 0 to 100, and anything else is refused with a warning. In queries, a star stands for any characters, so a criterion beginning with a letter followed by a star finds everything starting with that letter."}</GapRule>
        <GapWorked title={"Try both"} steps={["Typing 105 into a restricted mark cell gives a warning and the entry is refused.", "A criterion of Like \"S*\" on Surname returns Smith, Sithole and Sibiya.", "The star placed first, as in Like \"*S\", finds surnames ending in S."]} />
        <GapMistake>{"Putting the star on the wrong side of the letter."}</GapMistake>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'A spreadsheet has marks in column B (rows 2–31). Which formula counts learners who scored 75 or more?',
    options: ['=COUNT(B2:B31,75)', '=COUNTIF(B2:B31,">=75")', '=SUM(B2:B31,">=75")', '=IF(B2:B31>=75,1,0)'],
    answer: '=COUNTIF(B2:B31,">=75")',
    explanation: 'COUNTIF counts cells matching a criterion. The criterion ">=75" is written as a text string in quotation marks.',
  },
  {
    prompt: 'What does =IF(AND(C2>=50, D2>=50),"Pass","Fail") return when C2=65 and D2=45?',
    options: ['Pass', 'Fail', 'Error', '65'],
    answer: 'Fail',
    explanation: 'AND requires ALL conditions to be true. D2=45 fails the >=50 test, so AND returns FALSE and the IF returns "Fail".',
  },
  {
    prompt: 'A VLOOKUP formula uses FALSE as the last argument. What does this specify?',
    options: ['The search goes from right to left', 'An exact match is required', 'The function will return an error', 'The lookup table must be sorted'],
    answer: 'An exact match is required',
    explanation: 'FALSE (or 0) tells VLOOKUP to find an exact match. TRUE (or 1) finds an approximate match and requires sorted data.',
  },
  {
    prompt: 'Data validation on a "Mark" field is set to whole numbers between 0 and 100. A user types 105. What happens?',
    options: ['The value is accepted because it is close enough', 'An error message appears and the entry is rejected', 'The value is rounded to 100', 'The cell turns red automatically'],
    answer: 'An error message appears and the entry is rejected',
    explanation: 'Data validation rejects entries that do not meet the rule and displays an error message (if configured), preventing invalid data from being saved.',
  },
  {
    prompt: 'Which database wildcard character represents any single character?',
    options: ['* (asterisk)', '% (percent)', '? (question mark)', '# (hash)'],
    answer: '? (question mark)',
    explanation: 'In Access-style databases, ? matches exactly one character. * matches any number of characters. (In SQL, _ and % serve similar roles.)',
  },
  {
    prompt: 'A teacher wants to highlight exam marks below 40 in red automatically. Which feature should they use?',
    options: ['Data validation', 'Conditional formatting', 'COUNTIF', 'IF function'],
    answer: 'Conditional formatting',
    explanation: 'Conditional formatting changes a cell\'s appearance (colour, bold, borders) based on its value, without changing the data itself.',
  },
  {
    prompt: 'Which formula adds the values in column C only where the corresponding cell in column A equals "Gauteng"?',
    options: ['=COUNTIF(A:A,"Gauteng")', '=IF(A:A="Gauteng",SUM(C:C),0)', '=SUMIF(A:A,"Gauteng",C:C)', '=VLOOKUP("Gauteng",A:C,3,FALSE)'],
    answer: '=SUMIF(A:A,"Gauteng",C:C)',
    explanation: 'SUMIF(range, criteria, sum_range) adds values in the sum_range only where the range meets the criteria.',
  },
  {
    prompt: 'In a database query, the criterion Like "T*" in the Surname field will return:',
    options: ['Only the surname "T"', 'All surnames that start with the letter T', 'All surnames containing the letter T', 'Surnames with exactly two characters'],
    answer: 'All surnames that start with the letter T',
    explanation: 'Like "T*" matches any text starting with T, followed by any number of characters.',
  },
  {
    prompt: 'The VLOOKUP function searches for a value in:',
    options: ['Any column of the lookup table', 'The LAST column of the lookup table', 'The FIRST column of the lookup table', 'The row specified by the user'],
    answer: 'The FIRST column of the lookup table',
    explanation: 'VLOOKUP always searches the leftmost (first) column of the specified table range for the lookup value.',
  },
  {
    prompt: 'A query is set up to find all orders with a quantity greater than 10 AND a price less than R50. Which records are returned?',
    options: ['All orders with a quantity greater than 10', 'All orders with a price of less than R50', 'Only orders where BOTH conditions are true together', 'Orders where either one of the conditions is true'],
    answer: 'Only orders where BOTH conditions are true together',
    explanation: 'When two criteria are in the SAME row of the query design grid, they are treated as AND — both must be true for a record to be included.',
  },
];

const SpreadsheetsIfLogicDatabases = () => (
  <CapsSubjectTopic
    title="Spreadsheets: IF Logic and Databases"
    subtitle="IF/AND/OR functions, COUNTIF, SUMIF, VLOOKUP, and database queries"
    learnSteps={learnSteps}
    task="gr11-spreadsheets-if-logic-databases-t2"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default SpreadsheetsIfLogicDatabases;
