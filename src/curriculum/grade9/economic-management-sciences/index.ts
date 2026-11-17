import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const emsGrade9: Subject = {
  id: 'ems',
  title: 'Economic Management Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr9-economic-systems-circular-flow',
          title: 'Economic Systems and Circular Flow',
          description: 'Planned, market and mixed economies; circular flow; factors of production; global economy.',
          component: lazy(() => import('./term1/economic-systems-circular-flow/EconomicSystemsCircularFlow')),
        },
        {
          id: 'gr9-financial-literacy-recording',
          title: 'Financial Literacy and Recording',
          description: 'Source documents, journals, ledgers, trial balance; transaction classification and recording.',
          component: lazy(() => import('./term1/financial-literacy-recording/FinancialLiteracyRecording')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr9-entrepreneurship-planning',
          title: 'Entrepreneurship and Financial Planning',
          description: 'Entrepreneurial traits, business opportunities, budgeting, financial planning and viability.',
          component: lazy(() => import('./term2/entrepreneurship-planning/EntrepreneurshipPlanning')),
        },
        {
          id: 'gr9-budgeting-business-decisions',
          title: 'Budgeting and Business Decisions',
          description: 'Creating realistic budgets, monitoring variance, prioritizing spending, strategic decisions.',
          component: lazy(() => import('./term2/budgeting-business-decisions/BudgetingBusinessDecisions')),
        },
        {
          id: 'gr9-debtors-credit-t2',
          title: 'Credit Sales and the Debtors Journal',
          description: 'Credit sales, the National Credit Act, the debtors journal (DJ), debtors allowances (DAJ) and receipts from debtors.',
          component: lazy(() => import('./term2/debtors-credit/DebtorsCredit')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr9-business-plans-functions',
          title: 'Business Plans and Functions',
          description: 'Business plan structure, production, marketing, purchasing; internal and external analysis.',
          component: lazy(() => import('./term3/business-plans-functions/BusinessPlansFunctions')),
        },
        {
          id: 'gr9-production-marketing',
          title: 'Production and Marketing',
          description: 'Production efficiency, quality control, marketing strategy, 4Ps and market research.',
          component: lazy(() => import('./term3/production-marketing/ProductionMarketing')),
        },
        {
          id: 'gr9-debtors-ledger-t3',
          title: 'Debtors Ledger and General Ledger Posting',
          description: "Debtors' accounts, posting the journal totals, and agreeing the list with the control account.",
          component: lazy(() => import('./term3/debtors-ledger/DebtorsLedger')),
        },
        {
          id: 'gr9-creditors-journals-t3',
          title: 'Credit Purchases: Creditors Journals',
          description: 'The creditors journal, creditors allowances, payments to creditors, and the creditors ledger.',
          component: lazy(() => import('./term3/creditors-journals/CreditorsJournals')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr9-business-responsibility-integration',
          title: 'Business Responsibility and Integration',
          description: 'Labour responsibility, corporate social responsibility, integrated business thinking.',
          component: lazy(() => import('./term4/business-responsibility-integration/BusinessResponsibilityIntegration')),
        },
        {
          id: 'gr9-exam-revision-preparation',
          title: 'Exam Revision and Preparation',
          description: 'Case study analysis, concept integration, exam strategies, timed practice.',
          component: lazy(() => import('./term4/exam-revision-preparation/ExamRevisionPreparation')),
        },
        {
          id: 'gr9-cash-credit-trial-balance-t4',
          title: 'Cash and Credit Transactions with the Trial Balance',
          description: 'Analysing cash and credit transactions, finding the balances, and drawing up a trial balance.',
          component: lazy(() => import('./term4/cash-credit-trial-balance/CashCreditTrialBalance')),
        },
      ],
    },
  ],
};
