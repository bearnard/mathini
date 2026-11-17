import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const accountingGrade12: Subject = {
  id: 'accounting',
  title: 'Accounting',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-company-share-capital-t1',
          title: 'Company Share Capital',
          description: 'Ordinary shares, share issues, buy-backs, dividends, and the roles of shareholders, directors and auditors.',
          component: lazy(() => import('./term1/company-share-capital/CompanyShareCapital')),
        },
        {
          id: 'gr12-company-financial-statements-t1',
          title: 'Company Financial Statements',
          description: 'Preparing the statement of comprehensive income, statement of financial position, notes and year-end adjustments for companies.',
          component: lazy(() => import('./term1/company-financial-statements/CompanyFinancialStatements')),
        },
        {
          id: 'gr12-cash-flow-statements-t1',
          title: 'Cash Flow Statements',
          description: 'Operating, investing and financing activities, non-cash adjustments and interpretation of company cash movements.',
          component: lazy(() => import('./term1/cash-flow-statements/CashFlowStatements')),
        },
        {
          id: 'gr12-analysis-interpretation-ethics-t1',
          title: 'Analysis, Interpretation and Ethics',
          description: 'Financial indicators, audit reports, governance and ethical interpretation of company performance.',
          component: lazy(() => import('./term1/analysis-interpretation-ethics/AnalysisInterpretationEthics')),
        }
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-inventory-valuation-control-t2',
          title: 'Inventory Valuation and Control',
          description: 'Inventory systems, FIFO and weighted average, lower of cost and NRV, and internal control over stock.',
          component: lazy(() => import('./term2/inventory-valuation-control/InventoryValuationControl')),
        },
        {
          id: 'gr12-fixed-assets-analysis-control-t2',
          title: 'Fixed Assets: Analysis and Control',
          description: 'Depreciation, carrying values, disposals, asset management interpretation, and controls over fixed assets.',
          component: lazy(() => import('./term2/fixed-assets-analysis-control/FixedAssetsAnalysisControl')),
        },
        {
          id: 'gr12-bank-creditors-reconciliations-t2',
          title: 'Bank and Creditors Reconciliations',
          description: 'Bank reconciliation, cashbook updates, creditors reconciliation and internal control procedures.',
          component: lazy(() => import('./term2/bank-creditors-reconciliations/BankCreditorsReconciliations')),
        },
        {
          id: 'gr12-vat-concepts-control-t3',
          title: 'VAT Concepts and Control',
          description: 'Output and input VAT, VAT calculations, VAT control and ethical compliance with SARS rules.',
          component: lazy(() => import('./term3/vat-concepts-control/VatConceptsControl')),
        }
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-budgeting-projected-income-t3',
          title: 'Budgeting and Projected Income',
          description: 'Projected income statements, budgeting assumptions, gross profit planning and cash-flow awareness.',
          component: lazy(() => import('./term3/budgeting-projected-income/BudgetingProjectedIncome')),
        },
        {
          id: 'gr12-trial-exam-revision-t3',
          title: 'Trial Examination Revision',
          description: 'Integrated revision across companies, interpretation, manufacturing, reconciliations, VAT and budgeting.',
          component: lazy(() => import('./term3/trial-exam-revision/TrialExamRevision')),
        },
        {
          id: 'gr12-manufacturing-cost-statements-t2',
          title: 'Manufacturing Cost Statements',
          description: 'Prime cost, factory overheads, work-in-process, cost of production and unit-cost analysis.',
          component: lazy(() => import('./term2/manufacturing-cost-statements/ManufacturingCostStatements')),
        }
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-paper-1-revision-t4',
          title: 'Paper 1 Revision',
          description: 'Final revision of company reporting, cash flow, indicators, governance and ethics for the NSC exam.',
          component: lazy(() => import('./term4/paper-1-revision/Paper1Revision')),
        },
        {
          id: 'gr12-paper-2-revision-t4',
          title: 'Paper 2 Revision',
          description: 'Final revision of inventory, assets, manufacturing, reconciliations, VAT and budgeting for the NSC exam.',
          component: lazy(() => import('./term4/paper-2-revision/Paper2Revision')),
        },
        {
          id: 'gr12-exam-readiness-strategies-t4',
          title: 'Exam Readiness Strategies',
          description: 'Final CAPS consolidation, exam technique, interpretation habits and ethics-linked judgement.',
          component: lazy(() => import('./term4/exam-readiness-strategies/ExamReadinessStrategies')),
        }
      ],
    },
  ],
};
