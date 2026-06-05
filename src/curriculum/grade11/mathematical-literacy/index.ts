import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mathematicalLiteracyGrade11: Subject = {
  id: 'mathematical-literacy',
  title: 'Mathematical Literacy',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-ml-patterns-t1',
          title: 'Patterns, Relationships and Representations',
          description: 'Interpreting tables, graphs and formulae; comparing options and describing trends in context.',
          component: lazy(() => import('./term1/patterns-relationships/PatternsRelationships')),
        },
        {
          id: 'gr11-ml-conversions-time-t1',
          title: 'Measurement: Conversions and Time',
          description: 'Metric unit conversions, compound conversions, elapsed time and multi-step measurement problems.',
          component: lazy(() => import('./term1/measurement-conversions-time/MeasurementConversionsTime')),
        },
        {
          id: 'gr11-ml-finance-docs-t1',
          title: 'Finance: Documents and Tariffs',
          description: 'Reading payslips, invoices and receipts; understanding VAT and comparing two-part tariff structures.',
          component: lazy(() => import('./term1/finance-documents-tariffs/FinanceDocumentsTariffs')),
        },
        {
          id: 'gr11-ml-break-even-t1',
          title: 'Finance: Budgets and Break-even',
          description: 'Income and expenditure statements, markup, cost price, selling price and break-even analysis.',
          component: lazy(() => import('./term1/finance-break-even/FinanceBreakEven')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-ml-interest-banking-t2',
          title: 'Finance: Interest, Banking and Inflation',
          description: 'Simple and compound interest, banking products, fee comparisons and the effect of inflation on real value.',
          component: lazy(() => import('./term2/interest-banking-inflation/InterestBankingInflation')),
        },
        {
          id: 'gr11-ml-measurement-t2',
          title: 'Measurement',
          description: 'Measuring length, mass, volume and temperature; reading instruments and solving mixed-unit problems.',
          component: lazy(() => import('./term2/measurement/MeasurementT2')),
        },
        {
          id: 'gr11-ml-maps-plans-t2',
          title: 'Maps, Plans and Scale',
          description: 'Interpreting map scales, calculating actual distances, comparing routes and reading floor plans.',
          component: lazy(() => import('./term2/maps-plans-scale/MapsPlansScale')),
        },
        {
          id: 'gr11-ml-midyear-prep-t2',
          title: 'Revision and Mid-year Preparation',
          description: 'Integrated revision of Terms 1 and 2 finance, measurement and map skills for mid-year examinations.',
          component: lazy(() => import('./term2/midyear-prep/MidyearPrep')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-ml-perimeter-area-t3',
          title: 'Measurement: Perimeter, Area and Volume',
          description: 'Calculating perimeter and area of 2D shapes, volume of 3D shapes, and practical applications like tiling and painting.',
          component: lazy(() => import('./term3/perimeter-area-volume/PerimeterAreaVolume')),
        },
        {
          id: 'gr11-ml-maps-models-t3',
          title: 'Maps, Plans and Models',
          description: 'Interpreting top, front and side views; reading floor plan annotations; scale models and spatial reasoning.',
          component: lazy(() => import('./term3/maps-plans-models/MapsPlansModels')),
        },
        {
          id: 'gr11-ml-taxation-t3',
          title: 'Finance: Taxation',
          description: 'VAT calculations, reading payslips, PAYE and UIF deductions, and using simplified SARS income tax tables.',
          component: lazy(() => import('./term3/finance-taxation/FinanceTaxation')),
        },
        {
          id: 'gr11-ml-probability-t3',
          title: 'Probability',
          description: 'Sample spaces, calculating probability as a fraction/decimal/percentage, comparing likelihoods and interpreting results.',
          component: lazy(() => import('./term3/probability/Probability')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-ml-exchange-rates-t4',
          title: 'Finance: Exchange Rates',
          description: 'Currency conversions, buying and selling rates, and interpreting the impact of rand movements on import costs.',
          component: lazy(() => import('./term4/exchange-rates/ExchangeRates')),
        },
        {
          id: 'gr11-ml-data-handling-t4',
          title: 'Data Handling',
          description: 'Graph types, mean, median, mode and range; critiquing misleading graphs and writing evidence-based conclusions.',
          component: lazy(() => import('./term4/data-handling/DataHandling')),
        },
        {
          id: 'gr11-ml-exam-integration-t4',
          title: 'Revision and Exam Integration',
          description: 'Integrated revision across all Grade 11 ML topics for end-of-year examination preparation.',
          component: lazy(() => import('./term4/exam-integration/ExamIntegration')),
        },
      ],
    },
  ],
};
