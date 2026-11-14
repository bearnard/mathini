
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const lendingChannelData = [
  { channel: 'Formal bank', averageLoan: 120000, approval: 35 },
  { channel: 'Micro-lender', averageLoan: 8000, approval: 65 },
  { channel: 'Stokvel', averageLoan: 3000, approval: 80 },
];

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/econ/term3/micro-lending/diagram.webp", alt: "Market for Small Business Credit" },
    title: 'What is Micro-lending?',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Micro-lending provides small loans to people and businesses who often lack collateral, formal payslips or a long banking history.
        </p>
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Why it matters</p>
          <p className="mt-1 text-slate-600">It can finance spaza shops, informal traders, home-based businesses and other small income-generating activities.</p>
        </div>
        <SupplyDemand title="Market for Small Business Credit" showShifts={true} />
      </div>
    ),
  },
  {
    title: 'Micro-lending Institutions in SA',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South Africa has formal development finance, informal lenders and community-based credit systems such as stokvels.
        </p>
        <DataChart
          data={lendingChannelData}
          series={[
            { key: 'averageLoan', label: 'Average loan size (R)', color: '#6366f1' },
            { key: 'approval', label: 'Access / approval score', color: '#10b981' },
          ]}
          xKey="channel"
          type="bar"
          yLabel="Rand / score"
        />
        <p className="text-sm text-slate-500">Formal banks offer larger loans, but micro-lenders and stokvels are easier to access for low-income borrowers.</p>
      </div>
    ),
  },
  {
    title: 'The National Credit Act and Consumer Protection',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The National Credit Act protects consumers by requiring affordability checks, limiting reckless lending and allowing debt review for over-indebted borrowers.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Protection tools</p>
            <p className="mt-1 text-slate-600">Affordability assessments, registered lenders, credit records and debt counselling.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">If ignored</p>
            <p className="mt-1 text-slate-600">Borrowers can fall into debt spirals that deepen poverty instead of reducing it.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Advantages and Disadvantages of Micro-lending',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Micro-lending can expand opportunity, but it can also become exploitative if interest rates are too high or borrowers are not assessed properly.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Benefits</p>
            <p className="mt-1 text-slate-600">Supports entrepreneurship, improves financial inclusion and reduces reliance on loan sharks.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Risks</p>
            <p className="mt-1 text-slate-600">High interest, multiple loans and aggressive collection methods can worsen hardship.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Micro-lending primarily targets individuals who:',
    options: ['Have surplus savings that they want to invest', 'Lack collateral and cannot get loans from commercial banks', 'Own large firms that need a lot of capital', 'Are government workers who want a home loan'],
    answer: 'Lack collateral and cannot get loans from commercial banks',
    explanation: 'Micro-lending bridges the credit gap for poor and informally employed individuals who cannot meet commercial banks\' collateral requirements.',
  },
  {
    prompt: 'The Grameen Bank model uses which mechanism instead of collateral to secure loans?',
    options: ['Government guarantees on all of the loans', 'Very high interest rates on the loans', 'Group lending: social pressure within a group of borrowers', 'Credit cards that are issued to each borrower'],
    answer: 'Group lending: social pressure within a group of borrowers',
    explanation: 'Grameen Bank\'s group lending model makes small groups mutually responsible, using social accountability instead of physical collateral.',
  },
  {
    prompt: 'SEFA (Small Enterprise Finance Agency) in SA provides:',
    options: ['Social grants to the unemployed', 'Development finance and loan guarantees to SMMEs', 'Free housing to the poor', 'Export subsidies to large corporations'],
    answer: 'Development finance and loan guarantees to SMMEs',
    explanation: 'SEFA is a government-backed development finance institution supporting small, medium and micro enterprises through loans and guarantees.',
  },
  {
    prompt: 'Stokvels in SA are best described as:',
    options: ['Poverty relief programmes run by the government', 'Informal community savings and credit groups that rotate payouts', 'Branches of the commercial banks in the townships', 'Online lending platforms that are run by firms'],
    answer: 'Informal community savings and credit groups that rotate payouts',
    explanation: 'Stokvels pool members\' contributions and rotate payouts — a form of community-based financial inclusion with about 11 million participants in SA.',
  },
  {
    prompt: 'The National Credit Act (NCA) protects consumers from:',
    options: ['High income taxes that are charged on earnings', 'Reckless lending to people who cannot afford repayments', 'Price controls that are set by the government', 'Import tariffs that are charged on consumer goods'],
    answer: 'Reckless lending to people who cannot afford repayments',
    explanation: 'The NCA requires lenders to conduct affordability assessments, caps interest rates and provides debt counselling for over-indebted consumers.',
  },
  {
    prompt: 'A major disadvantage of informal micro-lending in SA townships is:',
    options: ['It gives too little credit to those who need it', 'Very high interest rates that can trap borrowers in debt', 'It is controlled by the SARB, which sets limits', 'It requires collateral from all of the borrowers'],
    answer: 'Very high interest rates that can trap borrowers in debt',
    explanation: 'Unregulated informal lenders charge exploitative rates. Borrowers who cannot repay may take additional loans, worsening their indebtedness.',
  },
  {
    prompt: 'Micro-lending promotes financial inclusion by:',
    options: ['Lowering the repo rate set by the central bank', 'Giving unbanked, low-income people credit for productive use', 'Raising the corporate taxes on large firms', 'Building new bank branches in the rural areas'],
    answer: 'Giving unbanked, low-income people credit for productive use',
    explanation: 'Financial inclusion means that everyone can access affordable financial services — micro-lending extends credit to those excluded from formal banking.',
  },
  {
    prompt: 'Over-indebtedness in SA refers to:',
    options: ['The government borrowing more than it can repay', 'People taking on more debt than they can repay, harming welfare', 'Companies growing too fast by taking out loans', 'The SARB printing more money than is needed'],
    answer: 'People taking on more debt than they can repay, harming welfare',
    explanation: 'Over-indebtedness occurs when loan repayments exceed a household\'s ability to pay, leading to financial distress and poverty worsening.',
  },
  {
    prompt: 'Which of the following BEST evaluates micro-lending as a poverty alleviation tool?',
    options: ['It always lifts people from poverty, whatever the interest rate', 'It empowers entrepreneurs if regulated and affordable, but harms if not', 'It has no role to play in easing poverty', 'Only government grants can ease poverty'],
    answer: 'It empowers entrepreneurs if regulated and affordable, but harms if not',
    explanation: 'The effectiveness of micro-lending depends on regulation and affordability — it is a useful tool when responsibly deployed but harmful when exploitative.',
  },
  {
    prompt: 'Muhammad Yunus won the Nobel Peace Prize for founding:',
    options: ['SEFA, the small business agency in South Africa', 'The World Bank, based in Washington', 'The Grameen Bank, a pioneer of micro-lending in Bangladesh', 'The International Monetary Fund (IMF)'],
    answer: 'The Grameen Bank, a pioneer of micro-lending in Bangladesh',
    explanation: 'Muhammad Yunus founded Grameen Bank in 1983 and won the 2006 Nobel Peace Prize for developing micro-credit as a tool for poverty alleviation.',
  },
];

const MicroLending = () => (
  <CapsSubjectTopic
    title="Micro-lending and Financial Inclusion"
    subtitle="Small loans, financial access and consumer protection in South Africa"
    learnSteps={learnSteps}
    task="gr11-micro-lending-t3"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default MicroLending;
