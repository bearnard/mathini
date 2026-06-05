import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mlGrade10: Subject = {
  id: 'ml',
  title: 'Mathematical Literacy',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-numbers-calculations-context-t1',
          title: 'Numbers and Calculations in Context',
          description: 'Real-world arithmetic applications',
          component: lazy(() => import('./term1/numbers-calculations-context/NumbersCalculationsContext')),
        },
        {
          id: 'gr10-patterns-relationships-representations-t1',
          title: 'Patterns, Relationships and Representations',
          description: 'Sequences, functions, and data visualization',
          component: lazy(() => import('./term1/patterns-relationships-representations/PatternsRelationshipsRepresentations')),
        },
        {
          id: 'gr10-measurement-conversions-time-t1',
          title: 'Measurement: Conversions and Time',
          description: 'Units and temporal calculations',
          component: lazy(() => import('./term1/measurement-conversions-time/MeasurementConversionsTime')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-finance-documents-tariff-systems-t2',
          title: 'Finance: Documents and Tariff Systems',
          description: 'Financial literacy and billing',
          component: lazy(() => import('./term2/finance-documents-tariff-systems/FinanceDocumentsTariffSystems')),
        },
        {
          id: 'gr10-measurement-t2',
          title: 'Measurement',
          description: 'Distance, area, and volume calculations',
          component: lazy(() => import('./term2/measurement/Measurement')),
        },
        {
          id: 'gr10-maps-plans-scale-t2',
          title: 'Maps, Plans and Scale',
          description: 'Spatial representation and scaling',
          component: lazy(() => import('./term2/maps-plans-scale/MapsPlansScale')),
        },
        {
          id: 'gr10-probability-t2',
          title: 'Probability',
          description: 'Chance and likelihood analysis',
          component: lazy(() => import('./term2/probability/Probability')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-finance-income-expenditure-profit-loss-budgets-t3',
          title: 'Finance: Income, Expenditure, Profit, Loss and Budgets',
          description: 'Financial planning and analysis',
          component: lazy(() => import('./term3/finance-income-expenditure-profit-loss-budgets/FinanceIncomeExpenditureProfitLossBudgets')),
        },
        {
          id: 'gr10-measurement-perimeter-area-volume-t3',
          title: 'Measurement: Perimeter, Area and Volume',
          description: 'Spatial measurements of 2D and 3D shapes',
          component: lazy(() => import('./term3/measurement-perimeter-area-volume/MeasurementPerimeterAreaVolume')),
        },
        {
          id: 'gr10-maps-plans-models-t3',
          title: 'Maps, Plans and Models',
          description: 'Spatial visualization and representation',
          component: lazy(() => import('./term3/maps-plans-models/MapsPlansModels')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-finance-interest-banking-taxation-t4',
          title: 'Finance: Interest, Banking and Taxation',
          description: 'Advanced financial concepts',
          component: lazy(() => import('./term4/finance-interest-banking-taxation/FinanceInterestBankingTaxation')),
        },
        {
          id: 'gr10-data-handling-t4',
          title: 'Data Handling',
          description: 'Statistics and data interpretation',
          component: lazy(() => import('./term4/data-handling/DataHandling')),
        },
        {
          id: 'gr10-revision-exam-integration-t4',
          title: 'Revision and Exam Integration',
          description: 'Comprehensive final assessment preparation',
          component: lazy(() => import('./term4/revision-exam-integration/RevisionExamIntegration')),
        },
      ],
    },
  ],
};
