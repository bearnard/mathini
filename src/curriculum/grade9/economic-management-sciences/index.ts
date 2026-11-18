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
        {
          id: 'gr9-price-theory-t2',
          title: 'Price Theory: Demand and Supply',
          description: 'Demand, supply, the equilibrium price, shortages and surpluses, and shifts of the curves.',
          component: lazy(() => import('./term2/price-theory/PriceTheory')),
        },
        {
          id: 'gr9-sectors-economy-t2',
          title: 'Sectors of the Economy',
          description: 'The primary, secondary and tertiary sectors, and how they depend on each other.',
          component: lazy(() => import('./term2/sectors-economy/SectorsEconomy')),
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
        {
          id: 'gr9-trade-unions-t3',
          title: 'Trade Unions',
          description: 'The role of a union, collective bargaining, settling disputes, and strikes.',
          component: lazy(() => import('./term3/trade-unions/TradeUnions')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
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
