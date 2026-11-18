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
        {
          id: 'government-national-budget',
          title: 'Government and the National Budget',
          description: 'Levels of government, direct and indirect taxes, the National Budget, growth, inequality and the standard of living.',
          component: lazy(() => import('./term1/government-national-budget/GovernmentNationalBudget')),
        },
        {
          id: 'accounting-concepts-equation',
          title: 'Accounting Concepts and the Accounting Equation',
          description: 'Assets, liabilities, owner equity, capital, income, expenses, profit and loss, and the effect of transactions on A = OE + L.',
          component: lazy(() => import('./term1/accounting-concepts-equation/AccountingConceptsEquation')),
        },
        {
          id: 'source-documents-t1',
          title: 'Source Documents',
          description: 'Receipts, deposit slips, till slips, cheques, counterfoils, bank statements and cash invoices.',
          component: lazy(() => import('./term1/source-documents-t1/SourceDocumentsT1')),
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
        {
          id: 'accounting-cycle-statements',
          title: 'The Accounting Cycle: Income Statement and Balance Sheet',
          description: 'The accounting cycle, the ledger and trial balance, and the income statement and balance sheet of a service business.',
          component: lazy(() => import('./term2/accounting-cycle-statements/AccountingCycleStatements')),
        },
        {
          id: 'cash-receipts-journal',
          title: 'Cash Receipts Journal',
          description: 'Recording and closing off cash received by a service business, and its effect on the accounting equation.',
          component: lazy(() => import('./term2/cash-receipts-journal/CashReceiptsJournal')),
        },
        {
          id: 'factors-markets',
          title: 'Factors of Production and Markets',
          description: 'Factors of production, remuneration, kinds of labour, fair employment, and the goods and services and factor markets.',
          component: lazy(() => import('./term2/factors-markets/FactorsMarkets')),
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
        {
          id: 'cash-payments-journal',
          title: 'Cash Payments Journal and the Combined Cash Journals',
          description: 'Recording and closing off cash paid, the cash balance carried forward and the effect on the accounting equation.',
          component: lazy(() => import('./term3/cash-payments-journal/CashPaymentsJournal')),
        },
        {
          id: 'forms-of-ownership',
          title: 'Forms of Ownership',
          description: 'Sole traders, partnerships, close corporations, private and public companies, and their role in jobs and natural resources.',
          component: lazy(() => import('./term3/forms-of-ownership/FormsOfOwnership')),
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
