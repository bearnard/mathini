
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const revisionIndicatorData = [
  { year: '2019', gdp: 0.3, inflation: 4.1, giniIndex: 65 },
  { year: '2020', gdp: -6.3, inflation: 3.3, giniIndex: 66 },
  { year: '2021', gdp: 4.7, inflation: 4.5, giniIndex: 64 },
  { year: '2022', gdp: 1.9, inflation: 6.9, giniIndex: 63 },
  { year: '2023', gdp: 0.6, inflation: 5.9, giniIndex: 63 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'Revising Terms 1 and 2 — Production and Markets',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Start revision by linking key micro concepts: factors of production, GDP basics, the mixed economy, elasticity and market structures.
        </p>
        <SupplyDemand title="Core Revision Graph" showShifts={true} />
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Fast recap</p>
          <p className="mt-1 text-slate-600">Use this graph to revise equilibrium, shifts in demand and supply, indirect taxes and shortages.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Revising Term 3 — Development and Money',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Term 3 combines development concepts such as poverty and micro-lending with monetary topics such as commercial banks, the SARB and the repo rate.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">Development checklist</p>
            <p className="mt-1 text-slate-600">Absolute poverty, relative poverty, HDI, EPWP, social grants and regional integration.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">Money checklist</p>
            <p className="mt-1 text-slate-600">Functions of money, credit creation, inflation targeting and the transmission of repo-rate changes.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Revising Term 4 — Globalisation and Sustainability',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Term 4 revision should connect real South African data with concepts such as globalisation, environmental sustainability and current economic issues.
        </p>
        <DataChart
          data={revisionIndicatorData}
          series={[
            { key: 'gdp', label: 'GDP growth (%)', color: '#6366f1' },
            { key: 'inflation', label: 'Inflation (%)', color: '#ef4444' },
            { key: 'giniIndex', label: 'Gini ×100', color: '#10b981' },
          ]}
          xKey="year"
          type="line"
          yLabel="Index / %"
        />
      </div>
    ),
  },
  {
    title: 'Exam Paper Format and Writing Strategy',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Strong exam technique means defining concepts, using South African examples, showing calculations clearly and ending with evaluation.
        </p>
        <div className="rounded-xl bg-amber-50 p-4 text-left text-amber-900">
          <p className="font-semibold">Suggested structure</p>
          <p className="mt-1">Describe the trend → calculate accurately → explain with theory → evaluate with a balanced judgement.</p>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'The profit-maximising rule for any firm in any market structure is:',
    options: ['TR = TC', 'P = ATC', 'MC = MR', 'AR = AFC'],
    answer: 'MC = MR',
    explanation: 'Profit maximisation occurs at MC = MR regardless of market structure. Beyond this point each extra unit costs more to produce than it earns.',
  },
  {
    prompt: 'The Brundtland definition of sustainable development emphasises:',
    options: ['Maximising current economic output', 'Meeting present needs without compromising future generations', 'Only environmental conservation with no growth', 'Developed countries providing aid to developing countries'],
    answer: 'Meeting present needs without compromising future generations',
    explanation: 'The 1987 Brundtland Commission definition remains the standard: development that meets today\'s needs without reducing future generations\' ability to meet theirs.',
  },
  {
    prompt: 'Which of the following correctly lists the four factors of production AND their remuneration?',
    options: ['Land/interest, Labour/rent, Capital/wages, Entrepreneurship/profit', 'Land/rent, Labour/wages, Capital/interest, Entrepreneurship/profit', 'Land/profit, Labour/rent, Capital/wages, Entrepreneurship/interest', 'Land/wages, Labour/profit, Capital/rent, Entrepreneurship/interest'],
    answer: 'Land/rent, Labour/wages, Capital/interest, Entrepreneurship/profit',
    explanation: 'Each factor earns a specific remuneration: land earns rent, labour earns wages/salaries, capital earns interest, and entrepreneurship earns profit.',
  },
  {
    prompt: "SA's SARB sets the repo rate primarily to:",
    options: ['Fix the exchange rate of the rand', 'Control the money supply and keep inflation in the 3-6% band', 'Set the wages of workers in the public sector', 'Decide how much the government may borrow'],
    answer: 'Control the money supply and keep inflation in the 3-6% band',
    explanation: 'The repo rate is the SARB\'s primary monetary policy tool — raising it reduces borrowing and spending to control inflation.',
  },
  {
    prompt: 'A Gini coefficient close to 1 indicates:',
    options: ['High economic growth', 'Near-perfect income equality', 'Near-perfect income inequality', 'A well-developed welfare state'],
    answer: 'Near-perfect income inequality',
    explanation: 'Gini = 1 would mean one person earns all income. SA\'s 0.63 indicates extreme inequality — one of the highest globally.',
  },
  {
    prompt: 'NEPAD\'s African Peer Review Mechanism (APRM) promotes:',
    options: ['Trade protectionism among the SADC states', 'Voluntary mutual accountability and good governance in Africa', 'IMF structural adjustment programmes for Africa', 'A single currency for the whole of Africa'],
    answer: 'Voluntary mutual accountability and good governance in Africa',
    explanation: 'The APRM allows African states to voluntarily review each other\'s governance — an "African solutions" approach to accountability.',
  },
  {
    prompt: 'If demand is elastic (PED > 1), a price increase will cause total revenue to:',
    options: ['Rise by a large amount, since the price is higher', 'Stay the same as before the price change', 'Fall, as quantity drops more than price rises', 'Double in size, since the price has risen'],
    answer: 'Fall, as quantity drops more than price rises',
    explanation: 'Elastic demand means consumers are price-sensitive. A price rise causes a larger proportional fall in quantity, reducing total revenue.',
  },
  {
    prompt: 'AGOA (Africa Growth and Opportunity Act) gives SA:',
    options: ['Military aid from the USA', 'Duty-free access to US markets for SA goods', 'Development loans from the US government', 'Exclusive mining rights in Africa'],
    answer: 'Duty-free access to US markets for SA goods',
    explanation: 'AGOA enables SA (and other qualifying African countries) to export goods to the US without paying tariffs, boosting manufactured exports.',
  },
  {
    prompt: "SA's carbon tax (2019) is a policy tool to address:",
    options: ['Income inequality in the country', 'Unemployment among young people', 'Greenhouse gas emissions and climate change', 'Land reform and ownership'],
    answer: 'Greenhouse gas emissions and climate change',
    explanation: 'SA\'s carbon tax puts a price on carbon emissions, creating a financial incentive for firms to invest in cleaner technology and reduce pollution.',
  },
  {
    prompt: 'In the expenditure approach, GDP = C + I + G + (X − M). What does (X − M) represent?',
    options: ['Total consumption minus total investment', 'Net exports — exports minus imports', 'Government expenditure on infrastructure', 'Exchange rate adjustment'],
    answer: 'Net exports — exports minus imports',
    explanation: '(X − M) is net exports: the value of exports minus the value of imports. A positive value adds to GDP; a negative value (trade deficit) subtracts from it.',
  },
];

const ExamRevision = () => (
  <CapsSubjectTopic
    title="Year-end Examination Revision"
    subtitle="Consolidating all Grade 11 Economics topics for Papers 1 and 2"
    learnSteps={learnSteps}
    task="gr11-exam-revision-t4"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default ExamRevision;
