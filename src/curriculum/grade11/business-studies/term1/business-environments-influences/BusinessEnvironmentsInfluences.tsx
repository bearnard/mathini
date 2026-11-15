import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'The three business environments',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Every South African business operates inside <strong>three nested environments</strong>, each with different levels of control.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Micro environment</strong>
            <p className="text-slate-600">The business itself — vision, mission, goals, structure and culture. <em>Full control.</em></p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Market environment</strong>
            <p className="text-slate-600">Customers, competitors, suppliers and intermediaries. <em>Some influence.</em></p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Macro environment</strong>
            <p className="text-slate-600">PESTLE factors — politics, economics, society, technology, legislation, environment. <em>No direct control.</em></p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'PESTLE — macro environment factors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use <strong>PESTLE</strong> to remember the six macro factors that businesses cannot control but must monitor.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-3"><strong>P</strong> — Political: government policies, elections, stability</div>
          <div className="rounded-xl bg-slate-100 p-3"><strong>E</strong> — Economic: inflation, interest rates, exchange rates</div>
          <div className="rounded-xl bg-slate-100 p-3"><strong>S</strong> — Social: demographics, culture, education levels</div>
          <div className="rounded-xl bg-slate-100 p-3"><strong>T</strong> — Technological: new systems, automation, e-commerce</div>
          <div className="rounded-xl bg-slate-100 p-3"><strong>L</strong> — Legislative: labour laws, tax laws, consumer protection</div>
          <div className="rounded-xl bg-slate-100 p-3"><strong>E</strong> — Environmental: climate, sustainability demands, load-shedding</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Control factors in the micro environment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Inside the micro environment, management can <strong>directly control</strong> these key elements:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left inline-block w-full max-w-lg">
          <ul className="space-y-2 text-slate-700 list-disc list-inside">
            <li>Vision, mission and goals</li>
            <li>Organisational structure and culture</li>
            <li>The eight business functions (production, marketing, HR, finance, administration, public relations, purchasing, general management)</li>
            <li>Management style and leadership approach</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500">Because managers can control these factors, businesses should regularly review and improve them.</p>
      </div>
    ),
  },
  {
    title: 'How environments influence each other',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Changes in the <strong>macro or market environment</strong> ripple inward and force micro environment responses.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Example — Load-shedding (macro → micro):</p>
          <p className="text-slate-700">Eskom load-shedding (macro) reduces store trading hours (market) and forces businesses to invest in generators or solar panels (micro) to keep operating.</p>
        </div>
        <p className="text-slate-600">When analysing a case study, always identify <em>which environment</em> the factor belongs to before suggesting a response.</p>
      </div>
    ),
  },
  {
    title: "Quality control and quality assurance",
    content: (
      <div className="space-y-4">
        <GapRule>{"Quality control checks the final product, while quality assurance monitors the whole process to prevent defects."}</GapRule>
        <GapWorked title={"Control or assurance?"} steps={["Inspecting finished bags before they are packed: quality control.", "Training staff and checking each production step: quality assurance.", "Assurance aims to prevent defects, control finds them."]} />
        <GapMistake>{"Using the two terms as if they mean the same."}</GapMistake>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Which business environment includes all the PESTLE factors?',
    options: ['Micro environment', 'Market environment', 'Macro environment', 'Internal environment'],
    answer: 'Macro environment',
    explanation: 'PESTLE (Political, Economic, Social, Technological, Legislative, Environmental) factors are all part of the macro environment over which businesses have no direct control.',
  },
  {
    prompt: 'A business decides to change its organisational structure. Which environment does this decision belong to?',
    options: ['Market environment', 'Macro environment', 'Micro environment', 'Social environment'],
    answer: 'Micro environment',
    explanation: 'Organisational structure is an internal element fully controlled by the business, so it falls within the micro environment.',
  },
  {
    prompt: 'Rising interest rates set by the Reserve Bank affect Thandi\'s bakery. Which PESTLE factor is this?',
    options: ['Political', 'Economic', 'Social', 'Legislative'],
    answer: 'Economic',
    explanation: 'Interest rates are an economic factor in the macro environment that affects business financing costs and consumer spending.',
  },
  {
    prompt: 'In which environment would you classify a business\'s suppliers?',
    options: ['Macro environment', 'Micro environment', 'Market environment', 'Technological environment'],
    answer: 'Market environment',
    explanation: 'Suppliers are part of the market environment — businesses have some influence over them but do not have full control.',
  },
  {
    prompt: 'What does the "L" in PESTLE stand for?',
    options: ['Labour', 'Legislative', 'Local', 'Logistics'],
    answer: 'Legislative',
    explanation: 'L stands for Legislative — laws such as the Labour Relations Act, Consumer Protection Act and tax legislation that businesses must comply with.',
  },
  {
    prompt: 'Which statement BEST describes the difference between quality control and quality assurance?',
    options: ['Quality control is proactive; quality assurance is reactive', 'Control checks the final product; assurance monitors the whole process', 'Quality assurance is used only in manufacturing firms', 'The two terms mean exactly the same thing'],
    answer: 'Control checks the final product; assurance monitors the whole process',
    explanation: 'Quality control (QC) inspects outputs after production; quality assurance (QA) builds quality into every step of the process to prevent defects.',
  },
  {
    prompt: 'South Africa\'s high unemployment rate is an example of which type of factor?',
    options: ['Micro', 'Market', 'Macro — Social', 'Macro — Political'],
    answer: 'Macro — Social',
    explanation: 'Unemployment is a socio-economic indicator, making it a Social factor within the macro environment.',
  },
  {
    prompt: 'A business\'s vision and mission statements are part of which environment?',
    options: ['Market environment', 'Micro environment', 'Macro environment', 'Competitive environment'],
    answer: 'Micro environment',
    explanation: 'Vision and mission are internal strategic elements set by management and therefore belong to the micro environment.',
  },
  {
    prompt: 'Load-shedding by Eskom falls under which PESTLE factor?',
    options: ['Social', 'Political', 'Environmental', 'Legal'],
    answer: 'Environmental',
    explanation: 'Load-shedding comes from limited energy supply and infrastructure, which this lesson files under the Environmental (physical resources) factor. Some memos also accept Economic, depending on the case study.',
  },
  {
    prompt: 'Which of the following is NOT one of the eight business functions?',
    options: ['Marketing function', 'Financial function', 'Environmental function', 'Human resources function'],
    answer: 'Environmental function',
    explanation: 'The eight business functions are production, marketing, HR, finance, administration, public relations, purchasing and general management. There is no separate "environmental function".',
  },
];

const BusinessEnvironmentsInfluences = () => (
  <CapsSubjectTopic
    title="Business Environments and Influences"
    subtitle="Internal and external factors shaping South African firms"
    learnSteps={learnSteps}
    task="gr11-business-environments-influences-t1"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default BusinessEnvironmentsInfluences;
