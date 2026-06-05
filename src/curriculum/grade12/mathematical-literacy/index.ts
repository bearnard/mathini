import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mathematicalLiteracyGrade12: Subject = {
  id: 'mathematical-literacy',
  title: 'Mathematical Literacy',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-measurement-conversions-time-t1',
          title: "Measurement: Conversions and Time",
          description: "Metric conversions, elapsed time, timetables and practical measurement estimates in everyday contexts.",
          component: lazy(() => import('./term1/measurement-conversions-time/MeasurementConversionsTime')),
        },
        {
          id: 'gr12-finance-documents-tariffs-t1',
          title: "Finance: Documents and Tariffs",
          description: "Reading payslips, invoices and statements; calculating VAT and comparing tariff structures.",
          component: lazy(() => import('./term1/finance-documents-tariffs/FinanceDocumentsTariffs')),
        },
        {
          id: 'gr12-finance-budgets-pricing-break-even-t1',
          title: "Finance: Budgets, Pricing and Break-even",
          description: "Budgets, markup, profit, loss and break-even decisions in personal and business contexts.",
          component: lazy(() => import('./term1/finance-budgets-pricing-break-even/FinanceBudgetsPricingBreakEven')),
        },
        {
          id: 'gr12-data-handling-t1',
          title: "Data Handling",
          description: "Interpreting graphs, summary statistics and data claims critically in realistic contexts.",
          component: lazy(() => import('./term1/data-handling/DataHandling')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-finance-interest-banking-inflation-t2',
          title: "Finance: Interest, Banking and Inflation",
          description: "Savings, loans, bank fees and inflation effects in longer real-life financial decisions.",
          component: lazy(() => import('./term2/finance-interest-banking-inflation/FinanceInterestBankingInflation')),
        },
        {
          id: 'gr12-maps-plans-scale-t2',
          title: "Maps, Plans and Scale",
          description: "Using map scales, route information and floor plans to solve practical spatial problems.",
          component: lazy(() => import('./term2/maps-plans-scale/MapsPlansScale')),
        },
        {
          id: 'gr12-measurement-t2',
          title: "Measurement",
          description: "Length, area, volume, mass and temperature in practical household, workplace and civic problems.",
          component: lazy(() => import('./term2/measurement/Measurement')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-taxation-t3',
          title: "Finance: Taxation",
          description: "Taxable income, deductions and progressive tax calculations in realistic South African contexts.",
          component: lazy(() => import('./term3/taxation/Taxation')),
        },
        {
          id: 'gr12-exchange-rates-t3',
          title: "Finance: Exchange Rates",
          description: "Currency conversions, bank rates and the effects of rand movements on travel and trade.",
          component: lazy(() => import('./term3/exchange-rates/ExchangeRates')),
        },
        {
          id: 'gr12-maps-plans-models-t3',
          title: "Maps, Plans and Models",
          description: "Scale drawings, models and view-based reasoning used to interpret dimensions and layouts.",
          component: lazy(() => import('./term3/maps-plans-models/MapsPlansModels')),
        },
        {
          id: 'gr12-probability-trial-preparation-t3',
          title: "Probability and Trial Preparation",
          description: "Probability in realistic contexts together with exam-style preparation for integrated trial questions.",
          component: lazy(() => import('./term3/probability-trial-preparation/ProbabilityTrialPreparation')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-integrated-revision-t4',
          title: "Integrated Revision",
          description: "Cross-topic revision that combines finance, measurement, maps, data and probability in exam-style contexts.",
          component: lazy(() => import('./term4/integrated-revision/IntegratedRevision')),
        },
        {
          id: 'gr12-paper1-readiness-t4',
          title: "Paper 1 Readiness",
          description: "Preparing for document-heavy finance and data questions with efficient interpretation and clear working.",
          component: lazy(() => import('./term4/paper1-readiness/Paper1Readiness')),
        },
        {
          id: 'gr12-paper2-readiness-t4',
          title: "Paper 2 Readiness",
          description: "Preparing for maps, measurement, data and probability questions in longer application-style tasks.",
          component: lazy(() => import('./term4/paper2-readiness/Paper2Readiness')),
        },
      ],
    },
  ],
};
