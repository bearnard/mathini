import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mathematicsGrade11: Subject = {
  id: 'math',
  title: 'Mathematics',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-exponents-surds-t1',
          title: 'Exponents and Surds',
          description: 'Rational exponents, surd operations and equations involving surds.',
          component: lazy(() => import('./term1/exponents-surds/ExponentsAndSurds')),
        },
        {
          id: 'gr11-equations-inequalities-t1',
          title: 'Equations and Inequalities',
          description: 'Quadratic equations, completing the square, quadratic inequalities and the discriminant.',
          component: lazy(() => import('./term1/equations-inequalities/EquationsAndInequalities')),
        },
        {
          id: 'gr11-number-patterns-t1',
          title: 'Number Patterns',
          description: 'Quadratic sequences, second differences and general term derivation.',
          component: lazy(() => import('./term1/number-patterns/NumberPatterns')),
        },
        {
          id: 'gr11-analytical-geometry-t1',
          title: 'Analytical Geometry',
          description: 'Line equations, inclination angle, parallel and perpendicular lines.',
          component: lazy(() => import('./term1/analytical-geometry/AnalyticalGeometry')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-functions-t2',
          title: 'Functions',
          description: 'Parameter effects on quadratic, hyperbolic, exponential and trig graphs; average gradient.',
          component: lazy(() => import('./term2/functions/Functions')),
        },
        {
          id: 'gr11-trigonometry-t2',
          title: 'Trigonometry',
          description: 'Trigonometric identities, reduction formulae and general solutions of equations.',
          component: lazy(() => import('./term2/trigonometry/Trigonometry')),
        },
        {
          id: 'gr11-exam-preparation-t2',
          title: 'Examination Preparation',
          description: 'Integrated revision of Terms 1 and 2 for mid-year examinations.',
          component: lazy(() => import('./term2/exam-preparation/ExamPreparation')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-measurement-t3',
          title: 'Measurement',
          description: 'Units, surface area and volume of 3D shapes; measurement problem solving.',
          component: lazy(() => import('./term3/measurement/Measurement')),
        },
        {
          id: 'gr11-euclidean-geometry-t3',
          title: 'Euclidean Geometry',
          description: 'Circle theorems, tangents, chords, cyclic quadrilaterals and formal proofs.',
          component: lazy(() => import('./term3/euclidean-geometry/EuclideanGeometry')),
        },
        {
          id: 'gr11-trig-sine-cosine-rule-t3',
          title: 'Trigonometry — Sine, Cosine and Area Rules',
          description: 'Solving non-right-angled triangles using the sine rule, cosine rule and area rule.',
          component: lazy(() => import('./term3/trig-sine-cosine-rule/TrigSineCosineRule')),
        },
        {
          id: 'gr11-finance-growth-decay-t3',
          title: 'Finance, Growth and Decay',
          description: 'Compound growth, compound decay, depreciation methods and effective interest rates.',
          component: lazy(() => import('./term3/finance-growth-decay/FinanceGrowthDecay')),
        },
        {
          id: 'gr11-probability-t3',
          title: 'Probability',
          description: 'Independent and dependent events, tree diagrams, complement and addition rules.',
          component: lazy(() => import('./term3/probability/Probability')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-statistics-t4',
          title: 'Statistics',
          description: 'Histograms, frequency polygons, ogives, standard deviation, skewness and outliers.',
          component: lazy(() => import('./term4/statistics/Statistics')),
        },
        {
          id: 'gr11-revision-exam-prep-t4',
          title: 'Revision and Final Examination Preparation',
          description: 'Targeted consolidation across all Grade 11 topics for Papers 1 and 2.',
          component: lazy(() => import('./term4/revision-exam-prep/RevisionExamPrep')),
        },
      ],
    },
  ],
};
