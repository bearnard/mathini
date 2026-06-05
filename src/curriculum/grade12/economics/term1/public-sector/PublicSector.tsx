
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

type RawEconomicsItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const learnSteps: LearnStep[] = [
  {
    title: 'Why the public sector exists',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Core role</p>
          <p className="mt-2 text-slate-700">
            Government provides public and merit goods, regulates markets and promotes equity. In South
            Africa, the public sector also works to address poverty, inequality and service backlogs.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Public goods: roads, policing, defence</div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Merit goods: education and healthcare</div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Redistribution: grants, progressive taxes</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Revenue, expenditure and budgets',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { item: 'Income tax', amount: 34 },
            { item: 'VAT', amount: 26 },
            { item: 'Company tax', amount: 18 },
            { item: 'Infrastructure', amount: 22 },
            { item: 'Grants', amount: 20 },
            { item: 'Debt service', amount: 14 },
          ]}
          series={[{ key: 'amount', label: 'Share of budget (%)', color: '#6366f1' }]}
          xKey="item"
          type="bar"
          yLabel="%"
        />
        <p className="text-sm leading-7 text-slate-600">
          A budget deficit occurs when planned spending is greater than expected revenue for the financial
          year. Borrowing can support growth, but it may also increase future debt-service costs.
        </p>
      </div>
    ),
  },
  {
    title: 'Taxation and redistribution',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Tax structure</p>
          <p className="mt-2 text-slate-700">
            Direct taxes include personal income tax and company tax. Indirect taxes include VAT and fuel
            levies. Progressive taxation places a higher burden on higher-income earners and supports
            redistribution.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Public-sector failure',
    content: (
      <div className="space-y-6">
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Corruption and waste reduce value for taxpayers.</li>
          <li>Bureaucracy and weak management slow delivery.</li>
          <li>Reform can include better governance, monitoring and partnerships.</li>
        </ul>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "ps-1",
    "question": "A budget deficit exists when government ...",
    "options": [
      "spending is lower than revenue",
      "spending equals revenue",
      "spending exceeds revenue",
      "borrows nothing"
    ],
    "answer": 2,
    "explanation": "A deficit occurs when total expenditure is greater than total revenue."
  },
  {
    "id": "ps-2",
    "question": "Which tax is an example of a direct tax?",
    "options": [
      "VAT",
      "Fuel levy",
      "Personal income tax",
      "Customs duty"
    ],
    "answer": 2,
    "explanation": "Personal income tax is paid directly by individuals to the state."
  },
  {
    "id": "ps-3",
    "question": "Which example best fits capital expenditure by government?",
    "options": [
      "Salaries of teachers",
      "Interest on debt",
      "Building a new dam",
      "Social grants"
    ],
    "answer": 2,
    "explanation": "Capital expenditure creates long-term assets such as roads, dams and schools."
  },
  {
    "id": "ps-4",
    "question": "A progressive tax system means that ...",
    "options": [
      "everyone pays the same percentage regardless of income",
      "higher-income earners pay a higher proportion of income",
      "only companies pay tax",
      "indirect taxes are removed"
    ],
    "answer": 1,
    "explanation": "Progressive taxation increases the tax burden proportionally as income rises."
  },
  {
    "id": "ps-5",
    "question": "Which of the following is a merit good?",
    "options": [
      "Cigarettes",
      "Public healthcare",
      "Luxury jewellery",
      "Private speculation"
    ],
    "answer": 1,
    "explanation": "Merit goods such as healthcare generate social benefits and are often supported by the state."
  },
  {
    "id": "ps-6",
    "question": "Public-sector failure is most closely linked to ...",
    "options": [
      "perfect information and zero corruption",
      "efficient allocation in every case",
      "inefficiency and poor service delivery",
      "the absence of all government"
    ],
    "answer": 2,
    "explanation": "Public-sector failure refers to government intervention that produces inefficient outcomes."
  },
  {
    "id": "ps-7",
    "question": "Which state objective is most directly linked to redistribution?",
    "options": [
      "Reducing income inequality",
      "Maximising monopoly profits",
      "Lowering all wages",
      "Removing all imports"
    ],
    "answer": 0,
    "explanation": "Redistribution aims to reduce inequality by changing the distribution of income and access to services."
  },
  {
    "id": "ps-8",
    "question": "Crowding out happens when high government borrowing ...",
    "options": [
      "reduces pressure on interest rates",
      "encourages more private borrowing at lower cost",
      "can limit private investment",
      "guarantees a surplus budget"
    ],
    "answer": 2,
    "explanation": "Heavy state borrowing can push up interest rates and limit funds available to the private sector."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const PublicSector = () => (
      <CapsSubjectTopic
        title="The Public Sector"
        subtitle="Government functions, budgeting, taxation and public-sector failure"
        learnSteps={learnSteps}
        task="gr12-public-sector-t1"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default PublicSector;
