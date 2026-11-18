import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const accountingGrade10: Subject = {
  id: 'accounting',
  title: 'Accounting',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-bookkeeping-foundations-ethics',
          title: 'Bookkeeping Foundations and Ethics',
          description: 'Cover informal and formal bookkeeping, internal control, code of ethics, GAAP basics, accounting equation, source documents.',
          component: lazy(() => import('./term1/bookkeeping-foundations-ethics/BookkeepingFoundations')),
        },
        {
          id: 'gr10-sole-trader-cash-credit-processing',
          title: 'Sole Trader Cash and Credit Processing',
          description: 'Cover CRJ, CPJ, PCJ, DJ, DAJ, CJ, CAJ, GJ, general ledger, debtors ledger, creditors ledger, trial balance.',
          component: lazy(() => import('./term1/sole-trader-cash-credit-processing/SoleTraderCashCredit')),
        },
        {
          id: 'gr10-internal-control-components-t1',
          title: 'Internal Control: the Five Components',
          description: 'Cover the five components of internal control: control environment, risk assessment, control activities, information and communication, monitoring, with stock and cash count differences.',
          component: lazy(() => import('./term1/internal-control-components/InternalControlComponents')),
        },
        {
          id: 'gr10-combined-transactions-reconciliations',
          title: 'Combined Transactions and Reconciliations',
          description: 'Cover combined cash and credit transactions, debtors reconciliation, creditors reconciliation, control accounts, subsidiary ledgers.',
          component: lazy(() => import('./term2/combined-transactions-reconciliations/CombinedTransactions')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-payroll-year-end-procedures',
          title: 'Payroll and Year-end Procedures',
          description: 'Cover salaries and wages, deductions, employer contributions, SJ, WJ, pre/post-adjustment trial balance, final accounts.',
          component: lazy(() => import('./term2/payroll-year-end-procedures/PayrollYearEnd')),
        },
        {
          id: 'gr10-vat-concepts-rates-t2',
          title: 'VAT: Need, Purpose, Principles and Rates',
          description: 'Cover why VAT exists, vendors, output and input VAT, VAT-able, zero-rated and exempt items, the 15% rate.',
          component: lazy(() => import('./term2/vat-concepts-rates/VatConceptsRates')),
        },
        {
          id: 'gr10-vat-calculations-account-t2',
          title: 'VAT Calculations: Input, Output and the VAT Account',
          description: 'Cover adding and removing VAT, output and input VAT, net VAT payable or refundable, the VAT Control account.',
          component: lazy(() => import('./term2/vat-calculations-account/VatCalculationsAccount')),
        },
        {
          id: 'gr10-adjustments-financial-statements',
          title: 'Adjustments and Financial Statements',
          description: 'Cover depreciation, accruals, prepayments, bad debts, final accounts, statement of comprehensive income, statement of financial position.',
          component: lazy(() => import('./term3/adjustments-financial-statements/AdjustmentsFinancial')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-analysis-interpretation',
          title: 'Analysis and Interpretation',
          description: 'Cover profitability, liquidity, solvency, basic financial indicators, statement interpretation.',
          component: lazy(() => import('./term3/analysis-interpretation/AnalysisInterpretation')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-cost-accounting-basics',
          title: 'Cost Accounting Basics',
          description: 'Cover manufacturing environment, direct materials, direct labour, factory overheads, unit cost.',
          component: lazy(() => import('./term4/cost-accounting-basics/CostAccountingBasics')),
        },
        {
          id: 'gr10-budgeting-examination-consolidation',
          title: 'Budgeting and Examination Consolidation',
          description: 'Cover cash budget, projected income statement, Grade 10 bookkeeping revision.',
          component: lazy(() => import('./term4/budgeting-examination-consolidation/BudgetingExamConsolidation')),
        },
        {
          id: 'gr10-cost-concepts-budget-types-t4',
          title: 'Cost Concepts and Budget Types',
          description: 'Cover direct and indirect costs, prime and manufacturing cost, variable and fixed costs, work in progress, cash, zero-based and capital budgets.',
          component: lazy(() => import('./term4/cost-concepts-budget-types/CostConceptsBudgetTypes')),
        },
      ],
    },
  ],
};
