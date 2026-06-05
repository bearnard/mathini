import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Database report design',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>database report</strong> presents data from tables or queries in a structured, printable format.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Grouping and sorting</strong>
            <p className="text-slate-600">Group records by a field (e.g. province) and sort within groups (e.g. by surname A–Z). Subtotals can appear per group.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Calculated fields</strong>
            <p className="text-slate-600">Add fields that compute a value (e.g. Total = Quantity × Price). Displayed in the report without altering the underlying table.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Report sections</strong>
            <p className="text-slate-600">Report Header, Page Header, Group Header, Detail (one row per record), Group Footer, Page Footer, Report Footer.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Report wizard</strong>
            <p className="text-slate-600">Guides the user step-by-step: choose fields → grouping → sorting → layout → title. Saves time for standard reports.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Importing and exporting data',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Moving data between applications is a key integration skill in CAT.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">CSV (Comma-Separated Values)</strong>
            <p className="text-slate-600">Universal plain-text format. Databases and spreadsheets can import/export CSV, making it the most common exchange format.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Embedding vs linking</strong>
            <p className="text-slate-600">Embedding copies data into the destination file (independent). Linking creates a connection — changes in the source update the destination.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Copy and paste special</strong>
            <p className="text-slate-600">Paste as Values removes formulas; Paste as Link maintains a live connection to the source. Used to move spreadsheet data into reports.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Data integrity after import</strong>
            <p className="text-slate-600">Check that data types are preserved (dates not converted to numbers, leading zeros in phone numbers not lost).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Spreadsheet charts and graphs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Choosing the correct chart type makes data easier to interpret.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Bar/Column chart</strong>
            <p className="text-slate-600">Compare quantities across categories. Best for discrete comparisons (e.g. sales per region).</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Line graph</strong>
            <p className="text-slate-600">Show trends over time (e.g. monthly temperature, stock prices). Requires continuous data.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Pie chart</strong>
            <p className="text-slate-600">Shows parts of a whole (proportions). Only suitable when categories add up to 100% (e.g. budget allocation).</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Scatter plot</strong>
            <p className="text-slate-600">Shows relationships/correlation between two numerical variables (e.g. hours studied vs mark).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Print settings and data presentation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct print settings ensure professional output for practical CAT tasks.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Spreadsheet print settings</strong>
            <p className="text-slate-600">Set print area, repeat rows/columns as headers, fit to page (1×1 or scale %), gridlines, row and column headings.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Database report print settings</strong>
            <p className="text-slate-600">Portrait/landscape orientation, paper size (A4), margins, whether to show grid lines or borders. Preview before printing.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which section of a database report displays one line of data per record?',
    options: ['Report Header', 'Page Footer', 'Detail section', 'Group Header'],
    answer: 'Detail section',
    explanation: 'The Detail section repeats for every record in the report\'s record source, displaying individual data rows.',
  },
  {
    prompt: 'A learner needs to show how each of five provinces contributes to the national total. Which chart type is MOST appropriate?',
    options: ['Line graph', 'Scatter plot', 'Pie chart', 'Bar chart'],
    answer: 'Pie chart',
    explanation: 'Pie charts are ideal for showing how parts make up a whole (proportions), such as each province\'s share of the total.',
  },
  {
    prompt: 'What is the advantage of exporting data as a CSV file?',
    options: ['CSV files preserve all formatting', 'CSV is a universal plain-text format that can be imported by most applications', 'CSV files are encrypted by default', 'CSV files include embedded charts'],
    answer: 'CSV is a universal plain-text format that can be imported by most applications',
    explanation: 'CSV stores data as plain text with commas separating values, making it readable by spreadsheets, databases, and programming languages.',
  },
  {
    prompt: 'A database report is grouped by "Province" with a sum of "Amount" in the Group Footer. What does this display?',
    options: ['The total of all records in the entire report', 'The subtotal of Amount for each province group', 'The average mark per province', 'The number of fields in the table'],
    answer: 'The subtotal of Amount for each province group',
    explanation: 'A Group Footer with a sum function shows the aggregate (subtotal) for all records within that group.',
  },
  {
    prompt: 'A teacher embeds a spreadsheet chart into a Word report. Later, she updates the data in the spreadsheet. Will the chart in the Word report change?',
    options: ['Yes — embedding always creates a live link', 'No — an embedded object is a copy and does not update automatically', 'Only if the report is saved first', 'Only if both files are on the same network drive'],
    answer: 'No — an embedded object is a copy and does not update automatically',
    explanation: 'Embedding creates an independent copy. To have automatic updates, you need to link (not embed) the chart.',
  },
  {
    prompt: 'Which chart type is best for showing the relationship between hours of sleep and exam performance across 30 learners?',
    options: ['Pie chart', 'Bar chart', 'Line graph', 'Scatter plot'],
    answer: 'Scatter plot',
    explanation: 'Scatter plots show correlation between two continuous numerical variables — perfect for analysing whether more sleep is associated with higher marks.',
  },
  {
    prompt: 'A learner imports a CSV file of phone numbers into a spreadsheet. Phone numbers like "0721234567" appear as 721234567. Why?',
    options: ['The CSV file was corrupted', 'The column is formatted as a number, dropping the leading zero', 'CSV does not support phone numbers', 'The import wizard removed the zero intentionally'],
    answer: 'The column is formatted as a number, dropping the leading zero',
    explanation: 'Numeric formatting strips leading zeros. Phone number columns should be formatted as Text before importing to preserve the "0" prefix.',
  },
  {
    prompt: 'Which print setting ensures that spreadsheet column headings (row 1) repeat on every printed page?',
    options: ['Set print area', 'Fit to page', 'Rows to repeat at top', 'Landscape orientation'],
    answer: 'Rows to repeat at top',
    explanation: 'The "Rows to repeat at top" (or "Print titles") setting reprints specified rows at the top of each printed page.',
  },
  {
    prompt: 'A calculated field in a database report shows [Price]*[Quantity]. This field:',
    options: ['Changes the values stored in the table', 'Computes and displays a value without altering the underlying table data', 'Can only be created using a query first', 'Shows an error because multiplication is not allowed in reports'],
    answer: 'Computes and displays a value without altering the underlying table data',
    explanation: 'Calculated fields in reports compute values on the fly for display purposes. They do not write back to the table.',
  },
  {
    prompt: 'To show the trend in a school\'s pass rate over 5 years, which chart type is MOST suitable?',
    options: ['Pie chart', 'Scatter plot', 'Line graph', 'Stacked bar chart'],
    answer: 'Line graph',
    explanation: 'Line graphs are designed to display trends over time. Each data point represents a year, and the line shows the direction of change.',
  },
];

const DatabaseReportsSpreadsheetIntegration = () => (
  <CapsSubjectTopic
    title="Database Reports and Spreadsheet Integration"
    subtitle="Report design, data import/export, chart selection, and print settings"
    learnSteps={learnSteps}
    task="gr11-database-reports-spreadsheet-integration-t3"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default DatabaseReportsSpreadsheetIntegration;
