import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const emsGrade8: Subject = {
  id: 'ems',
  title: 'Economic Management Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'economy-government-accounting',
          title: 'The Economy, Government and Accounting Foundations',
          description: 'Government structures, budgets, taxation, and basic accounting principles including source documents and double-entry recording.',
          component: lazy(() => import('./term1/economy-government-accounting/EconomyGovernmentAccounting')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'financial-literacy-entrepreneurship',
          title: 'Financial Literacy and Entrepreneurship Basics',
          description: 'The accounting cycle, cash receipts journal, general ledger, and the four factors of production in entrepreneurship.',
          component: lazy(() => import('./term2/financial-literacy-entrepreneurship/FinancialLiteracyEntrepreneurship')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'cash-payments-business-ownership',
          title: 'Cash Payments, Business Ownership and Management',
          description: 'Cash payments journal, sole trader and partnership structures, management levels, budgeting, and market concepts.',
          component: lazy(() => import('./term3/cash-payments-business-ownership/CashPaymentsBusinessOwnership')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'banking-saving',
          title: 'Banking, Saving and EMS Consolidation',
          description: 'Banking services, savings and interest, entrepreneurial qualities, and integrated case studies connecting all EMS concepts.',
          component: lazy(() => import('./term4/banking-saving/BankingSaving')),
        },
      ],
    },
  ],
};
