import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term3/presenting-business-information/diagram.webp", alt: "Presenting Business Information" },
    title: 'Why presentation method matters',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Choosing the <strong>right presentation format</strong> for business information ensures the message is clear, accurate and appropriate for the audience.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">Key question to ask:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Who is the audience? (board, customers, staff)</li>
            <li>What type of data is it? (numbers, trends, comparisons, procedures)</li>
            <li>Is the purpose to inform, persuade or report?</li>
            <li>Is the context formal or informal?</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Visual presentation methods',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual formats make numerical and comparative data easier to understand at a glance.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Bar graph</strong>
            <p className="text-slate-600">Best for comparing quantities across categories (e.g. sales per region).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Pie chart</strong>
            <p className="text-slate-600">Best for showing proportions or percentages of a whole (e.g. market share).</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Line graph</strong>
            <p className="text-slate-600">Best for showing trends over time (e.g. monthly revenue growth).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Table</strong>
            <p className="text-slate-600">Best for presenting precise figures side by side for detailed comparison.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Histogram</strong>
            <p className="text-slate-600">Best for showing frequency distributions (e.g. ages of customers).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Written and oral presentation formats',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Not all business communication uses visuals — <strong>written reports</strong> and <strong>oral presentations</strong> each suit different contexts.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Written report</strong>
            <p className="text-slate-600">Formal, detailed document — used for annual reports, board presentations, research findings.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Oral presentation</strong>
            <p className="text-slate-600">Live delivery — allows questions and interaction; uses slides or visual aids.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Slideshow / PowerPoint</strong>
            <p className="text-slate-600">Visual support for oral presentations — key points, graphs, images.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Infographic</strong>
            <p className="text-slate-600">Combines text and visuals — ideal for summarising complex data simply.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choosing the right format — exam strategy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Exam questions often ask you to <strong>recommend a suitable presentation method</strong> for a given scenario and justify your choice.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Quick decision guide:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><strong>Trends over time</strong> → line graph</li>
            <li><strong>Comparing categories</strong> → bar graph</li>
            <li><strong>Parts of a whole / percentages</strong> → pie chart</li>
            <li><strong>Exact figures / detail</strong> → table</li>
            <li><strong>Formal record for board / management</strong> → written report</li>
            <li><strong>Engaging staff or clients live</strong> → oral presentation with slides</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'A manager wants to show how the company\'s monthly profit changed over the past 12 months. Which presentation method is MOST appropriate?',
    options: ['Pie chart', 'Bar graph', 'Line graph', 'Table'],
    answer: 'Line graph',
    explanation: 'Line graphs are ideal for showing trends and changes over time — monthly profit over 12 months is a time-series trend.',
  },
  {
    prompt: 'The HR manager wants to show what percentage of staff hold each qualification level. Which format is BEST?',
    options: ['Line graph', 'Histogram', 'Pie chart', 'Written report'],
    answer: 'Pie chart',
    explanation: 'Pie charts display proportions and percentages of a whole — perfect for showing the share of staff at each qualification level.',
  },
  {
    prompt: 'A store manager compares the exact sales figures for five products in November. Which format is MOST suitable?',
    options: ['Bar graph', 'Pie chart', 'Table', 'Infographic'],
    answer: 'Table',
    explanation: 'A table displays precise figures side by side, making detailed comparison straightforward — ideal for exact sales data.',
  },
  {
    prompt: 'Which presentation format is BEST for a formal annual report submitted to the board of directors?',
    options: ['Oral presentation with slides', 'Infographic', 'Written report', 'Bar graph only'],
    answer: 'Written report',
    explanation: 'A formal written report is the standard format for board communications — it is detailed, structured, and provides a permanent record.',
  },
  {
    prompt: 'A sales team is being briefed at a morning meeting. The manager uses slides and speaks to the team directly. This is a(n):',
    options: ['Written report', 'Oral presentation', 'Infographic', 'Table'],
    answer: 'Oral presentation',
    explanation: 'A live presentation delivered verbally, supported by visual aids, is an oral presentation — ideal for team briefings that require interaction.',
  },
  {
    prompt: 'Which graph type is BEST for showing the distribution of customer ages in groups (e.g. 20–29, 30–39, 40–49)?',
    options: ['Line graph', 'Pie chart', 'Histogram', 'Bar graph'],
    answer: 'Histogram',
    explanation: 'Histograms show frequency distributions — how data is spread across continuous intervals or age groups.',
  },
  {
    prompt: 'A bar graph comparing sales across five regions in one month is BEST suited to show:',
    options: ['Trends over time', 'Proportions of a whole', 'Comparisons between categories', 'Exact numbers only'],
    answer: 'Comparisons between categories',
    explanation: 'Bar graphs excel at comparing values across distinct categories — in this case, the five regions in the same time period.',
  },
  {
    prompt: 'Before choosing a presentation method, which factor is MOST important to consider?',
    options: ['The colour scheme', 'The audience and the type of data', 'The cost of printing', 'The length of the presentation'],
    answer: 'The audience and the type of data',
    explanation: 'The right format depends on who will receive the information and what kind of data it is — audience and data type drive the choice.',
  },
  {
    prompt: 'An infographic BEST combines which two elements?',
    options: ['Music and video', 'Text and visuals', 'Oral delivery and written notes', 'Tables and spreadsheets'],
    answer: 'Text and visuals',
    explanation: 'Infographics use a combination of text and graphics to present complex information in a visually engaging and easy-to-understand format.',
  },
];

const PresentingBusinessInformation = () => (
  <CapsSubjectTopic
    title="Presenting Business Information"
    subtitle="Methods and formats for communicating business data"
    learnSteps={learnSteps}
    task="gr11-presenting-business-information-t3"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default PresentingBusinessInformation;
