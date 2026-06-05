
import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const mathematicsGrade12: Subject = {
  id: 'math',
  title: 'Mathematics',
  terms: [
    {
        id: 1,
        title: 'Term 1',
        topics: [
          {
  id: "gr12-sequences-series-sigma-t1",
  title: "Sequences, Series and Sigma Notation",
  description: "Arithmetic and geometric sequences, finite and infinite series, and sigma notation fluency.",
  component: lazy(() => import('./term1/sequences-series-sigma/SequencesSeriesSigma')),
},
          {
  id: "gr12-functions-inverse-functions-t1",
  title: "Functions and Inverse Functions",
  description: "Function definition, one-to-one relations, inverse functions and graph symmetry about y = x.",
  component: lazy(() => import('./term1/functions-inverse-functions/FunctionsInverseFunctions')),
},
          {
  id: "gr12-exponential-logarithmic-finance-t1",
  title: "Exponential and Logarithmic Functions in Finance",
  description: "Logarithm meaning, exponential graphs, growth and decay, and financial applications of logs.",
  component: lazy(() => import('./term1/exponential-logarithmic-finance/ExponentialLogarithmicFinance')),
},
          {
  id: "gr12-trigonometry-identities-equations-t1",
  title: "Trigonometry: Identities and Equations",
  description: "Compound-angle identities, double-angle identities, simplification and trig equations.",
  component: lazy(() => import('./term1/trigonometry-identities-equations/TrigonometryIdentitiesEquations')),
}
        ],
      },
    {
        id: 2,
        title: 'Term 2',
        topics: [
          {
  id: "gr12-trigonometry-two-three-dimensions-t2",
  title: "Trigonometry in Two and Three Dimensions",
  description: "2D and 3D trig modelling, sine and cosine rules, area rule and angle interpretation.",
  component: lazy(() => import('./term2/trigonometry-two-three-dimensions/TrigonometryTwoThreeDimensions')),
},
          {
  id: "gr12-polynomial-functions-t2",
  title: "Polynomial Functions",
  description: "Factor theorem, remainder theorem, cubic factorisation and links between roots and graphs.",
  component: lazy(() => import('./term2/polynomial-functions/PolynomialFunctions')),
},
          {
  id: "gr12-differential-calculus-t2",
  title: "Differential Calculus",
  description: "First principles, derivative rules, tangents, stationary points, optimisation and rates of change.",
  component: lazy(() => import('./term2/differential-calculus/DifferentialCalculus')),
},
          {
  id: "gr12-analytical-geometry-circle-t2",
  title: "Analytical Geometry of the Circle",
  description: "Equation of a circle, tangents, diameters, gradients and coordinate geometry with circles.",
  component: lazy(() => import('./term2/analytical-geometry-circle/AnalyticalGeometryCircle')),
}
        ],
      },
    {
        id: 3,
        title: 'Term 3',
        topics: [
          {
  id: "gr12-euclidean-geometry-t3",
  title: "Euclidean Geometry",
  description: "Similarity, proportional reasoning, parallel-line theorems and formal proof steps.",
  component: lazy(() => import('./term3/euclidean-geometry/EuclideanGeometry')),
},
          {
  id: "gr12-statistics-regression-correlation-t3",
  title: "Statistics: Regression and Correlation",
  description: "Scatter plots, regression lines, interpolation, extrapolation and interpreting correlation.",
  component: lazy(() => import('./term3/statistics-regression-correlation/StatisticsRegressionCorrelation')),
},
          {
  id: "gr12-counting-probability-t3",
  title: "Counting and Probability",
  description: "Fundamental counting principle, Venn diagrams, tree diagrams, contingency tables and compound events.",
  component: lazy(() => import('./term3/counting-probability/CountingProbability')),
}
        ],
      },
    {
        id: 4,
        title: 'Term 4',
        topics: [
          {
  id: "gr12-paper1-consolidation-t4",
  title: "Paper 1 Consolidation",
  description: "Integrated Paper 1 revision across patterns, functions, finance, calculus and probability.",
  component: lazy(() => import('./term4/paper1-consolidation/Paper1Consolidation')),
},
          {
  id: "gr12-paper2-geometry-trigonometry-t4",
  title: "Paper 2 Geometry and Trigonometry Revision",
  description: "Paper 2 revision focused on Euclidean geometry, circle facts and trigonometry.",
  component: lazy(() => import('./term4/paper2-geometry-trigonometry/Paper2GeometryTrigonometry')),
},
          {
  id: "gr12-paper2-analytical-geometry-statistics-t4",
  title: "Paper 2 Analytical Geometry and Statistics Revision",
  description: "Paper 2 revision across analytical geometry, circle work, regression and correlation.",
  component: lazy(() => import('./term4/paper2-analytical-geometry-statistics/Paper2AnalyticalGeometryStatistics')),
}
        ],
      }
  ],
};
