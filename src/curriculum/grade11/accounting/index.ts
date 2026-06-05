import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const accountingGrade11: Subject = {
  id: 'accounting',
  title: 'Accounting',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-bank-creditors-reconciliations-t1',
          title: 'Bank and Creditors Reconciliations',
          description: 'Cover bank reconciliation, outstanding deposits, unpresented cheques, cashbook errors, creditors reconciliation, and internal controls.',
          component: lazy(() => import('./term1/bank-creditors-reconciliations/BankCreditorsReconciliations')),
        },
        {
          id: 'gr11-fixed-assets-depreciation-t1',
          title: 'Fixed Assets and Depreciation',
          description: 'Cover fixed-asset register, straight-line and diminishing-balance depreciation, asset disposal, and internal controls over fixed assets.',
          component: lazy(() => import('./term1/fixed-assets-depreciation/FixedAssetsDepreciation')),
        },
        {
          id: 'gr11-partnership-concepts-adjustments-t1',
          title: 'Partnership Concepts and Adjustments',
          description: 'Cover partnership nature, partnership agreement, interest on capital and drawings, salary allowances, and year-end adjustments.',
          component: lazy(() => import('./term1/partnership-concepts-adjustments/PartnershipConceptsAdjustments')),
        },
        {
          id: 'gr11-partner-accounts-final-statements-t1',
          title: 'Partner Accounts and Final Statements',
          description: 'Cover appropriation account, partner capital accounts, partner current accounts, and preparation of final accounts.',
          component: lazy(() => import('./term1/partner-accounts-final-statements/PartnerAccountsFinalStatements')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-partnership-financial-statements-t2',
          title: 'Partnership Financial Statements',
          description: 'Cover preparing the statement of comprehensive income and statement of financial position for a partnership from trial balance information.',
          component: lazy(() => import('./term2/partnership-financial-statements/PartnershipFinancialStatements')),
        },
        {
          id: 'gr11-partnership-notes-disclosures-t2',
          title: 'Partnership Notes and Disclosures',
          description: 'Cover notes to partnership financial statements including the appropriation account note and partner capital and current account disclosures.',
          component: lazy(() => import('./term2/partnership-notes-disclosures/PartnershipNotesDisclosures')),
        },
        {
          id: 'gr11-partnership-ratio-analysis-t2',
          title: 'Partnership Ratio Analysis',
          description: 'Cover profitability, liquidity, solvency, return on equity, and partner-specific return on investment calculations.',
          component: lazy(() => import('./term2/partnership-ratio-analysis/PartnershipRatioAnalysis')),
        },
        {
          id: 'gr11-partnership-performance-interpretation-t2',
          title: 'Interpreting Partnership Performance',
          description: 'Cover interpreting ratio results, linking indicators to financial position, comparing ratios across periods, and making recommendations.',
          component: lazy(() => import('./term2/partnership-performance-interpretation/PartnershipPerformanceInterpretation')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-cash-budgets-t3',
          title: 'Cash Budgets',
          description: 'Cover cash budget format, cash receipts, cash payments, debtors collection schedules, creditors payment schedules, and shortfall analysis.',
          component: lazy(() => import('./term3/cash-budgets/CashBudgets')),
        },
        {
          id: 'gr11-projected-financial-statements-t3',
          title: 'Projected Financial Statements',
          description: 'Cover projected statement of comprehensive income, budget assumptions, variance identification, and the effect of changing assumptions.',
          component: lazy(() => import('./term3/projected-financial-statements/ProjectedFinancialStatements')),
        },
        {
          id: 'gr11-inventory-systems-stock-valuation-t3',
          title: 'Inventory Systems and Stock Valuation',
          description: 'Cover periodic and perpetual inventory systems, FIFO and weighted average cost valuation methods, and their effect on profit.',
          component: lazy(() => import('./term3/inventory-systems-stock-valuation/InventorySystemsStockValuation')),
        },
        {
          id: 'gr11-manufacturing-costs-break-even-t3',
          title: 'Manufacturing Costs and Break-Even',
          description: 'Cover direct materials, direct labour, factory overheads, unit cost calculations, break-even point, and production cost statements.',
          component: lazy(() => import('./term3/manufacturing-costs-break-even/ManufacturingCostsBreakEven')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-vat-calculations-recording-t4',
          title: 'VAT Calculations and Recording',
          description: 'Cover the purpose of VAT, input and output VAT, the VAT control account, calculating VAT-inclusive and VAT-exclusive amounts, and recording VAT.',
          component: lazy(() => import('./term4/vat-calculations-recording/VatCalculationsRecording')),
        },
        {
          id: 'gr11-vat-ethics-compliance-t4',
          title: 'VAT Ethics and Compliance',
          description: 'Cover VAT vendor obligations, SARS compliance requirements, consequences of non-compliance, unethical practices, and internal controls over VAT.',
          component: lazy(() => import('./term4/vat-ethics-compliance/VatEthicsCompliance')),
        },
        {
          id: 'gr11-reconciliations-partnerships-revision-t4',
          title: 'Reconciliations and Partnerships Revision',
          description: 'Revise bank reconciliation, creditors reconciliation, partnership adjustments, partner accounts, and partnership financial statements from Terms 1 and 2.',
          component: lazy(() => import('./term4/reconciliations-partnerships-revision/ReconciliationsPartnershipsRevision')),
        },
        {
          id: 'gr11-budgeting-manufacturing-vat-revision-t4',
          title: 'Budgeting, Manufacturing and VAT Revision',
          description: 'Revise cash budgets, projected income statements, manufacturing costs, inventory valuation, break-even analysis, and VAT from Terms 3 and 4.',
          component: lazy(() => import('./term4/budgeting-manufacturing-vat-revision/BudgetingManufacturingVatRevision')),
        },
      ],
    },
  ],
};
